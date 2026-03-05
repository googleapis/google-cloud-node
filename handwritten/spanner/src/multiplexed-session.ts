/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {EventEmitter} from 'events';
import {Database} from './database';
import {Session} from './session';
import {GetSessionCallback} from './session-factory';
import {
  ObservabilityOptions,
  getActiveOrNoopSpan,
  setSpanError,
  startTrace,
} from './instrument';

/**
 * Interface for implementing multiplexed session logic, it should extend the
 * {@link https://nodejs.org/api/events.html|EventEmitter} class
 *
 * @interface MultiplexedSessionInterface
 * @extends external:{@link https://nodejs.org/api/events.html|EventEmitter}
 *
 * @constructs MultiplexedSessionInterface
 * @param {Database} database The database to create a multiplexed session for.
 */
export interface MultiplexedSessionInterface extends EventEmitter {
  /**
   * When called creates a multiplexed session.
   *
   * @name MultiplexedSessionInterface#createSession
   */
  createSession(): void;

  /**
   * When called returns a multiplexed session.
   *
   * @name MultiplexedSessionInterface#getSession
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void;
}

/**
 * Class used to manage connections to Spanner using multiplexed session.
 *
 * **You don't need to use this class directly, connections will be handled for
 * you.**
 *
 * @class
 * @extends {EventEmitter}
 */
export class MultiplexedSession
  extends EventEmitter
  implements MultiplexedSessionInterface
{
  database: Database;
  // frequency to create new mux session
  refreshRate: number;
  _multiplexedSession: Session | null;
  _refreshHandle!: NodeJS.Timeout;
  _observabilityOptions?: ObservabilityOptions;
  // shared promise lock to handle concurrent session creation requests
  _sharedMuxSessionWaitPromise: Promise<void> | null;
  constructor(database: Database) {
    super();
    this.database = database;
    // default frequency is 7 days
    this.refreshRate = 7;
    this._multiplexedSession = null;
    this._observabilityOptions = database._observabilityOptions;
    this._sharedMuxSessionWaitPromise = null;
  }

  /**
   * Creates a new multiplexed session and manages its maintenance.
   *
   * This method initiates the session creation process by calling the `_createSession` method, which returns a Promise.
   *
   * Errors are silently swallowed here to prevent unhandled promise rejections or application crashes during background operations.
   */
  createSession(): void {
    this._createSession()
      .then(() => {
        this._maintain();
      })
      // Ignore errors here. If this fails, the next user request will
      // automatically trigger a retry via `_getSession`.
      .catch(err => {});
  }

  /**
   * Creates a new multiplexed session.
   *
   * This method sends a request to the database to create a new session with multiplexing enabled.
   * The response from the database would be an array, the first value of the array will be containing the multiplexed session.
   *
   * @returns {Promise<void>} Resolves when the session is successfully created.
   * @throws {Error} If the request fails, the error is thrown to the caller.
   *
   * @private
   */
  async _createSession(): Promise<void> {
    // If a session is already being created, just wait for it to complete.
    if (this._sharedMuxSessionWaitPromise) {
      return this._sharedMuxSessionWaitPromise;
    }

    // Define the async task that performs the actual session creation and tracing.
    const task = async () => {
      const traceConfig = {
        opts: this._observabilityOptions,
        dbName: this.database.formattedName_,
      };
      return startTrace(
        'MultiplexedSession.createSession',
        traceConfig,
        async span => {
          span.addEvent('Requesting a multiplexed session');
          try {
            const [createSessionResponse] = await this.database.createSession({
              multiplexed: true,
            });
            this._multiplexedSession = createSessionResponse;
            span.addEvent('Created a multiplexed session');
          } catch (e) {
            setSpanError(span, e as Error);
            throw e;
          } finally {
            span.end();
          }
        },
      );
    };

    // Assign the running task to the shared promise variable, and ensure
    // the lock is released when it completes.
    this._sharedMuxSessionWaitPromise = task().finally(() => {
      this._sharedMuxSessionWaitPromise = null;
    });

    return this._sharedMuxSessionWaitPromise;
  }

  /**
   * Maintains the multiplexed session by periodically refreshing it.
   *
   * This method sets up a periodic refresh interval for maintaining the session. The interval duration
   * is determined by the @param refreshRate option, which is provided in days.
   * The default value is 7 days.
   *
   * @throws {Error} If the multiplexed session creation fails in `_createSession`, the error is caught
   * and ignored. This is because the currently active multiplexed session has a 30-day expiry, providing
   * the maintainer with four opportunities (one every 7 days) to refresh the active session.
   *
   * Hence, if the `_createSession` fails here, the system will either simply retry at the next interval or
   * upon the next user request if the session expires.
   *
   * @returns {void} This method does not return any value.
   *
   */
  _maintain(): void {
    // If a maintenance loop is already running, stop it first.
    // This prevents creating duplicate intervals if _maintain is called multiple times.
    if (this._refreshHandle) {
      clearInterval(this._refreshHandle);
    }
    const refreshRate = this.refreshRate! * 24 * 60 * 60000;
    this._refreshHandle = setInterval(async () => {
      await this._createSession().catch(() => {});
    }, refreshRate);

    // Unreference the timer so it does not prevent the Node.js process from exiting.
    // If the application has finished all other work, this background timer shouldn't
    // force the process to stay open.
    this._refreshHandle.unref();
  }

  /**
   * Retrieves a session asynchronously and invokes a callback with the session details.
   *
   * @param {GetSessionCallback} callback - The callback to be invoked once the session is acquired or an error occurs.
   *
   * @returns {void} This method does not return any value, as it operates asynchronously and relies on the callback.
   *
   */
  getSession(callback: GetSessionCallback): void {
    this._getSession().then(
      session =>
        callback(
          null,
          session,
          session!.transaction((session!.parent as Database).queryOptions_),
        ),
      callback,
    );
  }

  /**
   * Attempts to get a session, waiting for it to become available if necessary.
   *
   * Logic Flow:
   * 1. Cache Hit: If a session exists, return it immediately.
   * 2. Join Wait: If another request is currently creating the session (`_sharedMuxSessionWaitPromise` exists), await it.
   * 3. Create: If neither, initiate a new creation request (`_createSession`).
   *
   * @throws {Error} In case of an error, the promise will get rejected and the error will get bubble up to the parent method.
   *
   * @returns {Promise<Session | null>} A promise that resolves with the active multiplexed session.
   *
   * @private
   *
   */
  async _getSession(): Promise<Session | null> {
    const span = getActiveOrNoopSpan();
    // Check if the multiplexed session is already available
    if (this._multiplexedSession !== null) {
      span.addEvent('Cache hit: has usable multiplexed session');
      return this._multiplexedSession;
    }

    span.addEvent('Waiting for a multiplexed session to become available');

    // If initialization is ALREADY in progress, join the existing line!
    if (this._sharedMuxSessionWaitPromise) {
      await this._sharedMuxSessionWaitPromise;
    } else {
      // If the session is null, and nobody is currently initializing it
      // It means a previous attempt failed and we are in a "Dead" state
      // We must kickstart the process again
      await this._createSession();
    }

    span.addEvent('Acquired multiplexed session');

    // Return the multiplexed session after it becomes available
    return this._multiplexedSession;
  }
}
