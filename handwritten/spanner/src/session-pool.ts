/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
import PQueue from 'p-queue';

import {Database} from './database';
import {Session} from './session';
import {Transaction} from './transaction';
import {NormalCallback} from './common';
import {GoogleError, grpc, ServiceError} from 'google-gax';
import trace = require('stack-trace');
import {
  ObservabilityOptions,
  getActiveOrNoopSpan,
  setSpanErrorAndException,
  startTrace,
} from './instrument';
import {GetSessionCallback} from './session-factory';
import {
  isDatabaseNotFoundError,
  isInstanceNotFoundError,
  isDefaultCredentialsNotSetError,
  isProjectIdNotSetInEnvironmentError,
  isCreateSessionPermissionError,
  isInfinite,
} from './helper';

/**
 * @callback SessionPoolCloseCallback
 * @param {?Error} error Closing error, if any.
 */
export interface SessionPoolCloseCallback {
  (error?: SessionLeakError): void;
}

/** @deprecated. Use GetSessionCallback instead. */
export type GetReadSessionCallback = NormalCallback<Session>;

/** @deprecated. Use GetSessionCallback instead. */
export interface GetWriteSessionCallback {
  (
    err: Error | null,
    session?: Session | null,
    transaction?: Transaction | null,
  ): void;
}

/**
 * Interface for implementing custom session pooling logic, it should extend the
 * {@link https://nodejs.org/api/events.html|EventEmitter} class and emit any
 * asynchronous errors via an error event.
 *
 * @interface SessionPoolInterface
 * @extends external:{@link https://nodejs.org/api/events.html|EventEmitter}
 */
/**
 * @constructs SessionPoolInterface
 * @param {Database} database The database to create a pool for.
 */
export interface SessionPoolInterface extends EventEmitter {
  /**
   * Will be called via {@link Database#close}. Indicates that the pool should
   * perform any necessary teardown actions to its resources.
   *
   * @name SessionPoolInterface#close
   * @param {SessionPoolCloseCallback} callback The callback function.
   */
  /**
   * Will be called by the Database object, should be used to start creating
   * sessions/etc.
   *
   * @name SessionPoolInterface#open
   */
  /**
   * When called returns a session.
   *
   * @name SessionPoolInterface#getSession
   * @param {GetSessionCallback} callback The callback function.
   */
  /**
   * When called returns a session.
   *
   * @deprecated Use getSession instead.
   * @name SessionPoolInterface#getReadSession
   * @param {GetReadSessionCallback} callback The callback function.
   */
  /**
   * When called returns a session.
   *
   * @deprecated Use getSession instead.
   * @name SessionPoolInterface#getWriteSession
   * @param {GetWriteSessionCallback} callback The callback function.
   */
  /**
   * To be called when releasing a session back into the pool.
   *
   * @name SessionPoolInterface#release
   * @param {Session} session The session to be released.
   */
  close(callback: SessionPoolCloseCallback): void;
  open(): void;
  getSession(callback: GetSessionCallback): void;
  getReadSession(callback: GetReadSessionCallback): void;
  getWriteSession(callback: GetWriteSessionCallback): void;
  release(session: Session): void;
}

/**
 * Session pool configuration options.
 *
 * @typedef {object} SessionPoolOptions
 * @property {number} [acquireTimeout=Infinity] Time in milliseconds before
 *     giving up trying to acquire a session. If the specified value is
 *     `Infinity`, a timeout will not occur.
 * @property {number} [concurrency=Infinity] How many concurrent requests the pool is
 *     allowed to make.
 * @property {boolean} [fail=false] If set to true, an error will be thrown when
 *     there are no available sessions for a request.
 * @property {number} [idlesAfter=10] How long until a resource becomes idle, in
 *     minutes.
 * @property {number} [keepAlive=30] How often to ping idle sessions, in
 *     minutes. Must be less than 1 hour.
 * @property {Object<string, string>} [labels] Labels to apply to any session
 *     created by the pool.
 * @property {number} [max=100] Maximum number of resources to create at any
 *     given time.
 * @property {number} [maxIdle=1] Maximum number of idle resources to keep in
 *     the pool at any given time.
 * @property {number} [min=25] Minimum number of resources to keep in the pool at
 *     any given time.
 * @property {number} [writes=0.0]. Deprecated.
 * @property {number} [incStep=25] The number of new sessions to create when at
 *     least one more session is needed.
 */
export interface SessionPoolOptions {
  acquireTimeout?: number;
  concurrency?: number;
  fail?: boolean;
  idlesAfter?: number;
  keepAlive?: number;
  /**
   * @deprecated Use SpannerOptions.sessionLabels instead.
   */
  labels?: {[label: string]: string};
  max?: number;
  maxIdle?: number;
  min?: number;
  /**
   * @deprecated. Starting from v6.5.0 the same session can be reused for
   * different types of transactions.
   */
  writes?: number;
  incStep?: number;
  /**
   * @deprecated Use Database constructor to pass databaseRole.
   */
  databaseRole?: string | null;
}

const DEFAULTS: SessionPoolOptions = {
  acquireTimeout: Infinity,
  concurrency: Infinity,
  fail: false,
  idlesAfter: 10,
  keepAlive: 30,
  max: 100,
  maxIdle: 1,
  min: 25,
  incStep: 25,
};

/**
 * Error to be thrown when attempting to release unknown resources.
 *
 * @private
 */
export class ReleaseError extends GoogleError {
  resource: unknown;
  constructor(resource: unknown) {
    super('Unable to release unknown resource.');
    this.resource = resource;
  }
}

/**
 * Error to be thrown when session leaks are detected.
 *
 * @private
 */
export class SessionLeakError extends GoogleError {
  messages: string[];
  constructor(leaks: string[]) {
    super(`${leaks.length} session leak(s) detected.`);
    // Restore error name that was overwritten by the super constructor call.
    this.name = SessionLeakError.name;
    this.messages = leaks;
  }
}

/**
 * Error to be thrown when the session pool is exhausted.
 */
export class SessionPoolExhaustedError extends GoogleError {
  messages: string[];
  constructor(leaks: string[]) {
    super(errors.Exhausted);
    // Restore error name that was overwritten by the super constructor call.
    this.name = SessionPoolExhaustedError.name;
    this.messages = leaks;
  }
}

/**
 * Checks whether the given error is a 'Session not found' error.
 * @param error the error to check
 * @return true if the error is a 'Session not found' error, and otherwise false.
 */
export function isSessionNotFoundError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.code === grpc.status.NOT_FOUND &&
    error.message.includes('Session not found')
  );
}

/**
 * enum to capture errors that can appear from multiple places
 */
const enum errors {
  Closed = 'Database is closed.',
  Timeout = 'Timeout occurred while acquiring session.',
  Exhausted = 'No resources available.',
}

interface SessionInventory {
  sessions: Session[];
  borrowed: Set<Session>;
}

/** @deprecated. */
export interface CreateSessionsOptions {
  writes?: number;
  reads?: number;
}

/**
 * Class used to manage connections to Spanner.
 *
 * **You don't need to use this class directly, connections will be handled for
 * you.**
 *
 * @class
 * @extends {EventEmitter}
 */
export class SessionPool extends EventEmitter implements SessionPoolInterface {
  database: Database;
  isOpen: boolean;
  options: SessionPoolOptions;
  _acquires: PQueue;
  _evictHandle!: NodeJS.Timer;
  _inventory: SessionInventory;
  _onClose!: Promise<void>;
  _pending = 0;
  _waiters = 0;
  _pingHandle!: NodeJS.Timer;
  _requests: PQueue;
  _traces: Map<string, trace.StackFrame[]>;
  _observabilityOptions?: ObservabilityOptions;

  /**
   * Formats stack trace objects into Node-like stack trace.
   *
   * @param {object[]} trace The trace object.
   * @return {string}
   */
  static formatTrace(frames: trace.StackFrame[]): string {
    const stack = frames.map(frame => {
      const name = frame.getFunctionName() || frame.getMethodName();
      const file = frame.getFileName();
      const lineno = frame.getLineNumber();
      const columnno = frame.getColumnNumber();

      return `    at ${name} (${file}:${lineno}:${columnno})`;
    });

    return `Session leak detected!\n${stack.join('\n')}`;
  }

  /**
   * Total number of available sessions.
   * @type {number}
   */
  get available(): number {
    return this._inventory.sessions.length;
  }
  /** @deprecated Starting from v6.5.0 the same session can be reused for
   * different types of transactions.
   */
  get currentWriteFraction(): number {
    return 0;
  }

  /**
   * Total number of borrowed sessions.
   * @type {number}
   */
  get borrowed(): number {
    return this._inventory.borrowed.size + this._pending;
  }

  /**
   * Flag to determine if Pool is full.
   * @type {boolean}
   */
  get isFull(): boolean {
    return this.size >= this.options.max!;
  }

  /** @deprecated Use `size()` instead. */
  get reads(): number {
    return this.size;
  }

  /**
   * Total size of pool.
   * @type {number}
   */
  get size(): number {
    return this.available + this.borrowed;
  }

  /** @deprecated Use `size()` instead. */
  get writes(): number {
    return this.size;
  }

  /** @deprecated Starting v6.5.0 the pending prepare state is obsolete. */
  get pendingPrepare(): number {
    return 0;
  }

  /**
   * Number of sessions being created or prepared for a read/write transaction.
   * @type {number}
   */
  get totalPending(): number {
    return this._pending;
  }

  /** @deprecated Use totalWaiters instead. */
  get numReadWaiters(): number {
    return this.totalWaiters;
  }

  /** @deprecated Use totalWaiters instead. */
  get numWriteWaiters(): number {
    return this.totalWaiters;
  }

  /**
   * Sum of read and write waiters.
   * @type {number}
   */
  get totalWaiters(): number {
    return this._waiters;
  }

  /**
   * @constructor
   * @param {Database} database The DB instance.
   * @param {SessionPoolOptions} [options] Configuration options.
   */
  constructor(database: Database, options?: SessionPoolOptions) {
    super();

    if (options && options.min && options.max && options.min > options.max) {
      throw new TypeError('Min sessions may not be greater than max sessions.');
    }
    this.isOpen = false;
    this.database = database;
    this.options = Object.assign({}, DEFAULTS, options);
    this.options.min = Math.min(this.options.min!, this.options.max!);
    this.options.databaseRole = this.options.databaseRole
      ? this.options.databaseRole
      : database.databaseRole;

    this._inventory = {
      sessions: [],
      borrowed: new Set(),
    };
    this._waiters = 0;
    this._requests = new PQueue({
      concurrency: this.options.concurrency!,
    });

    this._acquires = new PQueue({
      concurrency: 1,
    });

    this._traces = new Map();
    this._observabilityOptions = database._observabilityOptions;
  }

  /**
   * Closes and the pool.
   *
   * @emits SessionPool#close
   * @param {SessionPoolCloseCallback} callback The callback function.
   */
  close(callback: SessionPoolCloseCallback): void {
    const sessions: Session[] = [
      ...this._inventory.sessions,
      ...this._inventory.borrowed,
    ];

    this.isOpen = false;

    this._stopHouseKeeping();
    this.emit('close');

    sessions.forEach(session => this._destroy(session));

    this._requests
      .onIdle()
      .then(() => {
        const leaks = this._getLeaks();
        let error;

        this._inventory.sessions = [];
        this._inventory.borrowed.clear();

        if (leaks.length) {
          error = new SessionLeakError(leaks);
        }

        callback(error);
      })
      .catch(err => callback(err));
  }

  /**
   * Retrieve a read session.
   *
   * @deprecated Use getSession instead.
   * @param {GetReadSessionCallback} callback The callback function.
   */
  getReadSession(callback: GetReadSessionCallback): void {
    this.getSession((error, session) =>
      callback(error as ServiceError, session),
    );
  }

  /**
   * Retrieve a read/write session.
   *
   * @deprecated use getSession instead.
   * @param {GetWriteSessionCallback} callback The callback function.
   */
  getWriteSession(callback: GetWriteSessionCallback): void {
    this.getSession(callback);
  }

  /**
   * Retrieve a session.
   *
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void {
    this._acquire().then(
      session => callback(null, session, session.txn!),
      callback,
    );
  }

  /**
   * Opens the pool, filling it to the configured number of read and write
   * sessions.
   *
   * @emits SessionPool#open
   * @return {Promise}
   */
  open(): void {
    this._onClose = new Promise(resolve => this.once('close', resolve));
    this._startHouseKeeping();

    this.isOpen = true;
    this.emit('open');

    this._fill().catch(err => {
      // Ignore `Database not found` error. This allows a user to call instance.database('db-name')
      // for a database that does not yet exist with SessionPoolOptions.min > 0.
      if (
        isDatabaseNotFoundError(err) ||
        isInstanceNotFoundError(err) ||
        isCreateSessionPermissionError(err) ||
        isDefaultCredentialsNotSetError(err) ||
        isProjectIdNotSetInEnvironmentError(err)
      ) {
        return;
      }
      this.emit('error', err);
    });
  }

  /**
   * Releases session back into the pool.
   *
   * @throws {Error} For unknown sessions.
   * @emits SessionPool#available
   * @emits SessionPool#error
   * @fires SessionPool#session-available
   * @fires @deprecated SessionPool#readonly-available
   * @fires @deprecated SessionPool#readwrite-available
   * @param {Session} session The session to release.
   */
  release(session: Session): void {
    if (!this._inventory.borrowed.has(session)) {
      throw new ReleaseError(session);
    }

    delete session.txn;
    session.lastUsed = Date.now();

    if (isSessionNotFoundError(session.lastError)) {
      // Remove the session from the pool. It is not necessary to call _destroy,
      // as the session is already removed from the backend.
      this._inventory.borrowed.delete(session);
      this._traces.delete(session.id);
      return;
    }
    session.lastError = undefined;

    // Delete the trace associated with this session to mark the session as checked
    // back into the pool. This will prevent the session to be marked as leaked if
    // the pool is closed while the session is being prepared.
    this._traces.delete(session.id);
    // Release it into the pool as a session if there are more waiters than
    // there are sessions available. Releasing it will unblock a waiter as soon
    // as possible.
    this._release(session);
  }

  /**
   * Attempts to borrow a session from the pool.
   *
   * @private
   *
   * @returns {Promise<Session>}
   */
  async _acquire(): Promise<Session> {
    const span = getActiveOrNoopSpan();
    if (!this.isOpen) {
      span.addEvent('SessionPool is closed');
      throw new GoogleError(errors.Closed);
    }

    // Get the stacktrace of the caller before we call any async methods, as calling an async method will break the stacktrace.
    const frames = trace.get();
    const startTime = Date.now();
    const timeout = this.options.acquireTimeout;

    // wrapping this logic in a function to call recursively if the session
    // we end up with is already dead
    const getSession = async (): Promise<Session> => {
      span.addEvent('Acquiring session');
      const elapsed = Date.now() - startTime;

      if (elapsed >= timeout!) {
        span.addEvent('Could not acquire session due to an exceeded timeout');
        throw new GoogleError(errors.Timeout);
      }

      const session = await this._getSession(startTime);

      if (this._isValidSession(session)) {
        span.addEvent('Acquired session', {
          'time.elapsed': Date.now() - startTime,
          'session.id': session.id.toString(),
        });
        return session;
      }

      span.addEvent(
        'Could not acquire session because it was invalid. Retrying',
        {
          'session.id': session.id.toString(),
        },
      );
      this._inventory.borrowed.delete(session);
      return getSession();
    };

    const session = await this._acquires.add(getSession);
    this._prepareTransaction(session);
    this._traces.set(session.id, frames);
    return session;
  }

  /**
   * Moves a session into the borrowed group.
   *
   * @private
   *
   * @param {Session} session The session object.
   */
  _borrow(session: Session): void {
    const index = this._inventory.sessions.indexOf(session);

    this._inventory.borrowed.add(session);
    this._inventory.sessions.splice(index, 1);
  }

  /**
   * Borrows the first session from the inventory.
   *
   * @private
   *
   * @return {Session}
   */
  _borrowFrom(): Session {
    const session = this._inventory.sessions.pop()!;
    this._inventory.borrowed.add(session);
    return session;
  }

  /**
   * Grabs the next available session.
   *
   * @private
   *
   * @returns {Promise<Session>}
   */
  _borrowNextAvailableSession(): Session {
    return this._borrowFrom();
  }

  /**
   * Attempts to create a single session.
   *
   * @private
   *
   * @returns {Promise}
   */
  _createSession(): Promise<void> {
    return this._createSessions(1);
  }

  /**
   * Batch creates sessions.
   *
   * @private
   *
   * @param {number} [amount] Config specifying how many sessions to create.
   * @returns {Promise}
   * @emits SessionPool#createError
   */
  async _createSessions(amount: number): Promise<void> {
    const labels = this.options.labels;
    const databaseRole = this.options.databaseRole;

    if (amount <= 0) {
      return;
    }
    this._pending += amount;

    let nReturned = 0;
    const nRequested: number = amount;

    // TODO: Inlining this code for now and later on shall go
    // extract _traceConfig to the constructor when we have plenty of time.
    const traceConfig = {
      opts: this._observabilityOptions,
      dbName: this.database.formattedName_,
    };
    return startTrace('SessionPool.createSessions', traceConfig, async span => {
      span.addEvent(`Requesting ${amount} sessions`);

      // while we can request as many sessions be created as we want, the backend
      // will return at most 100 at a time, hence the need for a while loop.
      while (amount > 0) {
        let sessions: Session[] | null = null;

        span.addEvent(`Creating ${amount} sessions`);

        try {
          [sessions] = await this.database.batchCreateSessions({
            count: amount,
            labels: labels,
            databaseRole: databaseRole,
          });

          amount -= sessions.length;
          nReturned += sessions.length;
        } catch (e) {
          this._pending -= amount;
          this.emit('createError', e);
          span.addEvent(
            `Requested for ${nRequested} sessions returned ${nReturned}`,
          );
          setSpanErrorAndException(span, e as Error);
          span.end();
          throw e;
        }

        sessions.forEach((session: Session) => {
          setImmediate(() => {
            this._inventory.borrowed.add(session);
            this._pending -= 1;
            this.release(session);
          });
        });
      }

      span.addEvent(
        `Requested for ${nRequested} sessions returned ${nReturned}`,
      );
      span.end();
    });
  }

  /**
   * Attempts to delete a session, optionally creating a new one of the same
   * type if the pool is still open and we're under the configured min value.
   *
   * @private
   *
   * @fires SessionPool#error
   * @param {Session} session The session to delete.
   * @returns {Promise}
   */
  async _destroy(session: Session): Promise<void> {
    try {
      await this._requests.add(() => session.delete());
    } catch (e) {
      this.emit('error', e);
    }
  }

  /**
   * Deletes idle sessions that exceed the maxIdle configuration.
   *
   * @private
   */
  _evictIdleSessions(): void {
    const {maxIdle, min} = this.options;
    const size = this.size;
    const idle = this._getIdleSessions();

    let count = idle.length;
    let evicted = 0;

    while (count-- > maxIdle! && size - evicted++ > min!) {
      const session = idle.pop();

      if (!session) {
        continue;
      }

      const index = this._inventory.sessions.indexOf(session);

      this._inventory.sessions.splice(index, 1);
      void this._destroy(session);
    }
  }

  /**
   * Fills the pool with the minimum number of sessions.
   *
   * @return {Promise}
   */
  async _fill(): Promise<void> {
    const needed = this.options.min! - this.size;
    if (needed <= 0) {
      return;
    }

    await this._createSessions(needed);
  }

  /**
   * Retrieves a list of all the idle sessions.
   *
   * @private
   *
   * @returns {Session[]}
   */
  _getIdleSessions(): Session[] {
    const idlesAfter = this.options.idlesAfter! * 60000;
    const sessions: Session[] = this._inventory.sessions;

    return sessions.filter(session => {
      return Date.now() - session.lastUsed! >= idlesAfter;
    });
  }

  /**
   * Returns stack traces for sessions that have not been released.
   *
   * @return {string[]}
   */
  _getLeaks(): string[] {
    return [...this._traces.values()].map(SessionPool.formatTrace);
  }

  /**
   * Returns true if the pool has a usable session.
   * @private
   */
  _hasSessionUsableFor(): boolean {
    return this._inventory.sessions.length > 0;
  }

  /**
   * Attempts to get a session.
   *
   * @private
   *
   * @param {number} startTime Timestamp to use when determining timeouts.
   * @returns {Promise<Session>}
   */
  async _getSession(startTime: number): Promise<Session> {
    const span = getActiveOrNoopSpan();
    if (this._hasSessionUsableFor()) {
      span.addEvent('Cache hit: has usable session');
      return this._borrowNextAvailableSession();
    }
    if (this.isFull && this.options.fail!) {
      span.addEvent('Session pool is full and failFast=true');
      throw new SessionPoolExhaustedError(this._getLeaks());
    }

    let removeOnceCloseListener: Function;
    let removeListener: Function;

    // Wait for a session to become available.
    span.addEvent('Waiting for a session to become available');
    const availableEvent = 'session-available';
    const promises = [
      new Promise((_, reject) => {
        const onceCloseListener = () => reject(new GoogleError(errors.Closed));
        this.once('close', onceCloseListener);
        removeOnceCloseListener = this.removeListener.bind(
          this,
          'close',
          onceCloseListener,
        );
      }),
      new Promise(resolve => {
        this.once(availableEvent, resolve);
        removeListener = this.removeListener.bind(
          this,
          availableEvent,
          resolve,
        );
      }),
    ];

    const timeout = this.options.acquireTimeout;

    let removeTimeoutListener = () => {};
    if (!isInfinite(timeout!)) {
      const elapsed = Date.now() - startTime!;
      const remaining = timeout! - elapsed;

      promises.push(
        new Promise((_, reject) => {
          const error = new Error(errors.Timeout);
          const timeoutFunction = setTimeout(
            reject.bind(null, error),
            remaining,
          );
          removeTimeoutListener = () => clearTimeout(timeoutFunction);
        }),
      );
    }

    // Only create a new session if there are more waiters than sessions already
    // being created. The current requester will be waiter number _numWaiters+1.
    if (!this.isFull && this.totalPending <= this.totalWaiters) {
      let amount = this.options.incStep
        ? this.options.incStep
        : DEFAULTS.incStep!;
      // Create additional sessions if the configured minimum has not been reached.
      const min = this.options.min ? this.options.min : 0;
      if (this.size + this.totalPending + amount < min) {
        amount = min - this.size - this.totalPending;
      }
      // Make sure we don't create more sessions than the pool should have.
      if (amount + this.size > this.options.max!) {
        amount = this.options.max! - this.size;
      }
      if (amount > 0) {
        this._pending += amount;
        promises.push(
          new Promise((_, reject) => {
            this._pending -= amount;
            this._createSessions(amount).catch(reject);
          }),
        );
      }
    }

    let removeErrorListener: Function;
    promises.push(
      new Promise((_, reject) => {
        this.once('createError', reject);
        removeErrorListener = this.removeListener.bind(
          this,
          'createError',
          reject,
        );
      }),
    );

    try {
      this._waiters++;
      await Promise.race(promises);
    } finally {
      this._waiters--;
      removeOnceCloseListener!();
      removeListener!();
      removeErrorListener!();
      removeTimeoutListener();
    }

    return this._borrowNextAvailableSession();
  }

  /**
   * Checks to see whether or not session is expired.
   *
   * @param {Session} session The session to check.
   * @returns {boolean}
   */
  _isValidSession(session: Session): boolean {
    // unpinged sessions only stay good for 1 hour
    const MAX_DURATION = 60000 * 60;

    return Date.now() - session.lastUsed! < MAX_DURATION;
  }

  /**
   * Pings an individual session.
   *
   * @private
   *
   * @param {Session} session The session to ping.
   * @returns {Promise}
   */
  async _ping(session: Session): Promise<void> {
    // NOTE: Please do not trace Ping as it gets quite spammy
    // with many root spans polluting the main span.
    // Please see https://github.com/googleapis/google-cloud-go/issues/1691

    this._borrow(session);

    if (!this._isValidSession(session)) {
      this._inventory.borrowed.delete(session);
      return;
    }

    try {
      await session.keepAlive();
      this.release(session);
    } catch (e) {
      this._inventory.borrowed.delete(session);
      await this._destroy(session);
    }
  }

  /**
   * Makes a keep alive request to all the idle sessions.
   *
   * @private
   *
   * @returns {Promise}
   */
  async _pingIdleSessions(): Promise<void> {
    const sessions = this._getIdleSessions();
    const pings = sessions.map(session => this._ping(session));

    await Promise.all(pings);
    try {
      await this._fill();
    } catch (error) {
      // Ignore `Database not found` error. This allows a user to call instance.database('db-name')
      // for a database that does not yet exist with SessionPoolOptions.min > 0.
      const err = error as ServiceError;
      if (
        isDatabaseNotFoundError(err) ||
        isInstanceNotFoundError(err) ||
        isCreateSessionPermissionError(err) ||
        isDefaultCredentialsNotSetError(err) ||
        isProjectIdNotSetInEnvironmentError(err)
      ) {
        return;
      }
      this.emit('error', err);
    }
    return;
  }

  /**
   * Creates a transaction for a session.
   *
   * @private
   *
   * @param {Session} session The session object.
   * @param {object} options The transaction options.
   */
  _prepareTransaction(session: Session): void {
    const transaction = session.transaction(
      (session.parent as Database).queryOptions_,
    );
    session.txn = transaction;
  }

  /**
   * Releases a session back into the pool.
   *
   * @private
   *
   * @fires SessionPool#available
   * @fires SessionPool#session-available
   * @fires @deprecated SessionPool#readonly-available
   * @fires @deprecated SessionPool#readwrite-available
   * @param {Session} session The session object.
   */
  _release(session: Session): void {
    this._inventory.sessions.push(session);
    this._inventory.borrowed.delete(session);
    this._traces.delete(session.id);

    this.emit('available');
    this.emit('session-available');
    this.emit('readonly-available');
    this.emit('readwrite-available');
  }

  /**
   * Starts housekeeping (pinging/evicting) of idle sessions.
   *
   * @private
   */
  _startHouseKeeping(): void {
    const evictRate = this.options.idlesAfter! * 60000;

    this._evictHandle = setInterval(() => this._evictIdleSessions(), evictRate);
    this._evictHandle.unref();

    const pingRate = this.options.keepAlive! * 60000;

    this._pingHandle = setInterval(() => this._pingIdleSessions(), pingRate);
    this._pingHandle.unref();
  }

  /**
   * Stops housekeeping.
   *
   * @private
   */
  _stopHouseKeeping(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearInterval(this._pingHandle as any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearInterval(this._evictHandle as any);
  }
}
