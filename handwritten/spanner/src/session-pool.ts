/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import {Transaction} from './transaction';
import {NormalCallback} from './common';
import {GoogleError, grpc, ServiceError} from 'google-gax';
import {GetSessionCallback} from './session-factory';

/**
 * The subset of a `stack-trace` frame used by {@link SessionPool.formatTrace}.
 */
interface StackFrame {
  getFunctionName(): string | null;
  getMethodName(): string | null;
  getFileName(): string | null;
  getLineNumber(): number | null;
  getColumnNumber(): number | null;
}

/**
 * @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling.
 * @callback SessionPoolCloseCallback
 * @param {?Error} error Closing error, if any.
 */
export interface SessionPoolCloseCallback {
  (error?: SessionLeakError): void;
}

/** @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling. */
export type GetReadSessionCallback = NormalCallback<Session>;

/** * @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling. */
export interface GetWriteSessionCallback {
  (
    err: Error | null,
    session?: Session | null,
    transaction?: Transaction | null,
  ): void;
}

/** * @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling.

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
   * When called should return a session that can be used for all types of
   * transactions and operations.
   *
   * @name SessionPoolInterface#getSession
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void;
  /**
   *To be called when closing the pool.
   *
   * @name SessionPoolInterface#close
   * @param {SessionPoolCloseCallback} callback The callback function.
   */
  close(callback: SessionPoolCloseCallback): void;
  /**
   * @deprecated Use getSession instead.
   *
   * When called returns a session that can be used for read-only transactions
   * and single-use reads/queries.
   *
   * @name SessionPoolInterface#getReadSession
   * @param {GetReadSessionCallback} callback The callback function.
   */
  getReadSession(callback: GetReadSessionCallback): void;
  /**
   * @deprecated Use getSession instead.
   *
   * When called returns a session with a pre-allocated read/write transaction.
   *
   * @name SessionPoolInterface#getWriteSession
   * @param {GetWriteSessionCallback} callback The callback function.
   */
  getWriteSession(callback: GetWriteSessionCallback): void;
  /**
   * To be called when opening the pool.
   *
   * @name SessionPoolInterface#open
   */
  open(): void;
  /**
   * To be called when releasing a session back into the pool.
   *
   * @name SessionPoolInterface#release
   * @param {Session} session The session to be released.
   */
  release(session: Session): void;
}

/**
 * Session pool configuration options.
 *
 * @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling.
 *
 * @typedef {object} SessionPoolOptions
 * @property {number} [acquireTimeout=Infinity] Time in milliseconds before
 *     giving up trying to acquire a session. If the specified value is
 *     `Infinity`, a timeout will not occur.
 * @property {number} [concurrency=Infinity] How many concurrent requests the
 *     pool is allowed to make.
 * @property {boolean} [fail=false] If set to true, an error will be thrown if
 *     there are no available sessions for a request.
 * @property {number} [idlesAfter=10] How long until a resource becomes idle, in
 *     minutes.
 * @property {number} [keepAlive=30] How often to ping idle resources, in
 *     minutes. Must be less than 1 hour.
 * @property {Object<string, string>} [labels] Labels to apply to any session
 *     created by the pool.
 * @property {number} [max=100] Maximum number of resources to create at any
 *     given time.
 * @property {number} [maxIdle=1] Maximum number of idle resources to keep in
 *     the pool at any given time.
 * @property {number} [min=25] Minimum number of resources to keep in the pool at
 *     any given time.
 * @property {number} [incStep=25] Number of sessions to create in one batch when
 *     at least one more session is needed.
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
 * @deprecated Session pool is deprecated and will be removed in a future release.
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
 * @deprecated Session pool is deprecated and will be removed in a future release.
 * @private
 */
export class SessionLeakError extends GoogleError {
  messages: string[];
  constructor(leaks: string[] = []) {
    super(`${leaks.length} session leak(s) detected.`);
    // Restore error name that was overwritten by the super constructor call.
    this.name = SessionLeakError.name;
    this.messages = leaks;
  }
}

/**
 * Error to be thrown when the session pool is exhausted.
 *
 * @deprecated Session pool is deprecated and will be removed in a future release.
 */
export class SessionPoolExhaustedError extends GoogleError {
  messages: string[];
  constructor(leaks: string[] = []) {
    super(errors.Exhausted);
    // Restore error name that was overwritten by the super constructor call.
    this.name = SessionPoolExhaustedError.name;
    this.messages = leaks;
  }
}

/**
 * Checks whether the given error is a 'Session not found' error.
 * @deprecated Session pool is deprecated and will be removed in a future release.
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

/** @deprecated Session pool is deprecated and will be removed in a future release. */
export interface CreateSessionsOptions {
  writes?: number;
  reads?: number;
}

/**
 * * @deprecated Session pool is deprecated and will be removed in a future release.
    Multiplexed sessions are now used for all operations by default, eliminating
    the need for session pooling.

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

  /**
   * Formats stack trace objects into Node-like stack trace.
   *
   * @deprecated Session pool is deprecated and will be removed in a future release.
   * @param {object[]} trace The trace object.
   * @return {string}
   */
  static formatTrace(frames: StackFrame[]): string {
    const stack = frames.map(frame => {
      const name = frame.getFunctionName() || frame.getMethodName();
      const file = frame.getFileName();
      const lineno = frame.getLineNumber();
      const columnno = frame.getColumnNumber();

      return `    at ${name} (${file}:${lineno}:${columnno})`;
    });

    return `Session leak detected!\n${stack.join('\n')}`;
  }

  /** @deprecated Use totalWaiters instead. */
  get available(): number {
    return 0;
  }
  /** @deprecated Starting from v6.5.0 the same session can be reused for
   * different types of transactions.
   */
  get currentWriteFraction(): number {
    return 0;
  }
  /** @deprecated Starting from v6.5.0 the same session can be reused for
   * different types of transactions.
   */
  get availableReads(): number {
    return this.available;
  }
  /** @deprecated Starting from v6.5.0 the same session can be reused for
   * different types of transactions.
   */
  get availableWrites(): number {
    return this.available;
  }
  /**
   * Total number of borrowed sessions.
   * @type {number}
   */
  get borrowed(): number {
    return 0;
  }

  /**
   * Flag to determine if Pool is full.
   * @type {boolean}
   */
  get isFull(): boolean {
    return false;
  }

  /** @deprecated Use `size()` instead. */
  get reads(): number {
    return this.size;
  }

  /**
   * Total number of sessions in the pool.
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

  /** @deprecated Use totalPending instead. */
  get numPendingReads(): number {
    return this.totalPending;
  }

  /** @deprecated Use totalPending instead. */
  get numPendingWrites(): number {
    return 0;
  }

  /**
   * Total number of sessions currently being created by the pool.
   * @type {number}
   */
  get totalPending(): number {
    return 0;
  }

  /** @deprecated Use totalWaiters instead. */
  get numReadWaiters(): number {
    return this.totalWaiters;
  }

  /** @deprecated Use totalWaiters instead. */
  get numWriteWaiters(): number {
    return 0;
  }

  /**
   * Total number of waiters for a session from the pool.
   * @type {number}
   */
  get totalWaiters(): number {
    return 0;
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
      : database?.databaseRole;
  }

  /**
   * Closes the pool.
   *
   * @emits SessionPool#close
   * @param {SessionPoolCloseCallback} callback The callback function.
   */
  close(callback: SessionPoolCloseCallback): void {
    this.isOpen = false;
    this.emit('close');
    if (callback) {
      callback();
    }
  }

  /**
   * Retrieve a read session.
   *
   * @deprecated Use getSession instead.
   *
   * @param {GetReadSessionCallback} callback The callback function.
   */
  getReadSession(callback: GetReadSessionCallback): void {
    this.getSession((err, session) => {
      callback(err as ServiceError, session);
    });
  }

  /**
   * Retrieve a read/write session.
   *
   * @deprecated Use getSession instead.
   *
   * @param {GetWriteSessionCallback} callback The callback function.
   */
  getWriteSession(callback: GetWriteSessionCallback): void {
    this.getSession(callback);
  }

  /**
   * Retrieve a session for read or read/write operations.
   *
   * Session pooling has been replaced by multiplexed sessions, so this returns
   * the database's shared multiplexed session, together with a new read/write
   * transaction, instead of a pooled session.
   *
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void {
    const sessionFactory = this.database?.sessionFactory_;
    if (!sessionFactory) {
      process.nextTick(
        callback,
        new Error('Session pool is not associated with a database'),
        null,
      );
      return;
    }
    sessionFactory.getSession((err, session) => {
      if (err || !session) {
        callback(err ?? new Error('No session found'), null);
        return;
      }
      callback(null, session, session.transaction(this.database.queryOptions_));
    });
  }

  /**
   * Opens the pool, filling it to the configured number of read and write
   * sessions.
   *
   * @emits SessionPool#open
   * @return {Promise}
   */
  open(): void {
    this.isOpen = true;
    this.emit('open');
  }

  /**
   * Releases session back into the pool.
   *
   * @throws {Error} For unknown sessions.
   * @emits SessionPool#available
   * @emits SessionPool#session-available
   * @fires @deprecated SessionPool#readonly-available
   * @fires @deprecated SessionPool#readwrite-available
   * @param {Session} session The session to release.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  release(session: Session): void {}
}
