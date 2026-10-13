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

import {Database, Session, Transaction} from '.';
import {
  MultiplexedSession,
  MultiplexedSessionInterface,
} from './multiplexed-session';
import {
  SessionPool,
  SessionPoolInterface,
  SessionPoolOptions,
} from './session-pool';
import {SessionPoolConstructor} from './database';
import {ServiceObjectConfig} from '@google-cloud/common';
import {ServiceError} from 'google-gax';
const common = require('./common-grpc/service-object');

/**
 * @callback GetSessionCallback
 * @param {?Error} error Request error, if any.
 * @param {Session} [session] The session object.
 * @param {Transaction} [transaction] The transaction object, if applicable.
 */
export interface GetSessionCallback {
  (
    err: Error | ServiceError | null,
    session?: Session | null,
    transaction?: Transaction | null,
  ): void;
}

/**
 * Interface for implementing session-factory logic.
 *
 * @interface SessionFactoryInterface
 */
export interface SessionFactoryInterface {
  /**
   * When called returns a session.
   *
   * @name SessionFactoryInterface#getSession
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void;

  /**
   * When called returns a cached multiplexed session synchronously if available.
   *
   * @name SessionFactoryInterface#getSessionSync
   */
  getSessionSync(): Session | null;

  /**
   * When called returns a session for partitioned operations.
   *
   * @deprecated Always delegates to {@link SessionFactoryInterface#getSession}.
   * @name SessionFactoryInterface#getSessionForPartitionedOps
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForPartitionedOps?(callback: GetSessionCallback): void;

  /**
   * When called returns a session for read/write operations.
   *
   * @deprecated Always delegates to {@link SessionFactoryInterface#getSession}.
   * @name SessionFactoryInterface#getSessionForReadWrite
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForReadWrite?(callback: GetSessionCallback): void;

  /**
   * When called returns the pool object.
   *
   * @deprecated Session pool is deprecated and will be removed in a future release.
   * @name SessionFactoryInterface#getPool
   */
  getPool?(): SessionPoolInterface;

  /**
   * Releases a session back into the pool. No-op for multiplexed sessions.
   *
   * @deprecated Regular session pooling has been removed; this method is a no-op.
   * @name SessionFactoryInterface#release
   * @param {Session} session The session object.
   */
  release?(session: Session): void;

  /**
   * Returns true if multiplexed sessions are enabled.
   *
   * @deprecated Multiplexed sessions are always enabled.
   * @name SessionFactoryInterface#isMultiplexedEnabled
   * @returns {boolean} Always true.
   */
  isMultiplexedEnabled?(): boolean;

  /**
   * Returns true if multiplexed sessions are enabled for read/write transactions.
   *
   * @deprecated Multiplexed sessions are always enabled for read/write transactions.
   * @name SessionFactoryInterface#isMultiplexedEnabledForRW
   * @returns {boolean} Always true.
   */
  isMultiplexedEnabledForRW?(): boolean;

  /**
   * When called closes the session factory and stops background maintenance.
   *
   * @name SessionFactoryInterface#close
   */
  close?(): void;
}

/**
 * Creates a SessionFactory object to manage the creation of
 *      multiplexed session.
 *
 * @class
 *
 * @param {Database} database Database object.
 * @param {String} name Name of the database.
 */
export class SessionFactory
  extends common.GrpcServiceObject
  implements SessionFactoryInterface
{
  pool_: SessionPoolInterface;
  multiplexedSession_: MultiplexedSessionInterface;
  constructor(
    database: Database,
    name: String,
    poolOptions?: SessionPoolConstructor | SessionPoolOptions,
  ) {
    super({
      parent: database,
      id: name,
    } as {} as ServiceObjectConfig);

    // initialize regular pool
    this.pool_ =
      typeof poolOptions === 'function'
        ? new (poolOptions as SessionPoolConstructor)(database, null)
        : new SessionPool(database, poolOptions);

    // initialize multiplexed session
    this.multiplexedSession_ = new MultiplexedSession(database);
    this.multiplexedSession_.createSession();
  }

  /**
   * Synchronously returns a cached multiplexed session if available,
   * otherwise null.
   *
   * @returns {Session|null} The cached multiplexed session or null.
   */
  getSessionSync(): Session | null {
    return this.multiplexedSession_?.getSessionSync?.() ?? null;
  }

  /**
   * Retrieves a multiplexed session.
   *
   * @param {GetSessionCallback} callback The callback function.
   */
  getSession(callback: GetSessionCallback): void {
    this.multiplexedSession_.getSession(callback);
  }

  /**
   * Retrieves a session for partitioned operations.
   *
   * @deprecated Use {@link SessionFactory#getSession} instead.
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForPartitionedOps(callback: GetSessionCallback): void {
    this.getSession(callback);
  }

  /**
   * Retrieves a session for read/write operations.
   *
   * @deprecated Use {@link SessionFactory#getSession} instead.
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForReadWrite(callback: GetSessionCallback): void {
    this.getSession((error, session, transaction) => {
      if (error || !session) {
        callback(error ?? new Error('No session found'), null);
        return;
      }
      const database = session.parent as Database;
      const activeTransaction =
        transaction ?? session.transaction(database?.queryOptions_);
      callback(null, session, activeTransaction);
    });
  }

  /**
   * Returns the regular session pool object.
   *
   * @deprecated Session pool is deprecated and will be removed in a future release.
   * @returns {SessionPoolInterface} The session pool used by current instance.
   */
  getPool(): SessionPoolInterface {
    return this.pool_;
  }

  /**
   * No-op release method retained for backwards compatibility.
   *
   * @deprecated Multiplexed sessions do not require releasing back to a pool.
   * @param {Session} _session The session object.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  release(_session: Session): void {}

  /**
   * Checks whether multiplexed session is enabled.
   *
   * @deprecated Multiplexed sessions are always enabled.
   * @returns {boolean} Always returns `true`.
   */
  isMultiplexedEnabled(): boolean {
    return true;
  }

  /**
   * Checks whether multiplexed session is enabled for read/write transactions.
   *
   * @deprecated Multiplexed sessions are always enabled for read/write transactions.
   * @returns {boolean} Always returns `true`.
   */
  isMultiplexedEnabledForRW(): boolean {
    return true;
  }

  /**
   * Closes the session factory and stops background maintenance.
   */
  close(): void {
    this.multiplexedSession_?.close?.();
  }
}
