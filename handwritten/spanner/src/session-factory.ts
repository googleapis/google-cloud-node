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
const common = require('./common-grpc/service-object');

/**
 * @callback GetSessionCallback
 * @param {?Error} error Request error, if any.
 * @param {Session} session The read-write session.
 * @param {Transaction} transaction The transaction object.
 */
export interface GetSessionCallback {
  (
    err: Error | null,
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
   * When called returns a session for paritioned dml.
   *
   * @name SessionFactoryInterface#getSessionForPartitionedOps
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForPartitionedOps(callback: GetSessionCallback): void;

  /**
   * When called returns a session for read write.
   *
   * @name SessionFactoryInterface#getSessionForReadWrite
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForReadWrite(callback: GetSessionCallback): void;

  /**
   * When called returns the pool object.
   *
   * @name SessionFactoryInterface#getPool
   */
  getPool(): SessionPoolInterface;

  /**
   * To be called when releasing a session.
   *
   * @name SessionFactoryInterface#release
   * @param {Session} session The session to be released.
   */
  release(session: Session): void;

  /**
   * When called returns if the multiplexed is enabled or not.
   *
   * @name SessionFactoryInterface#isMultiplexedEnabled
   */
  isMultiplexedEnabled(): boolean;

  /**
   * When called returns if the multiplexed is enabled or not for read write transactions.
   *
   * @name SessionFactoryInterface#isMultiplexedEnabledForRW
   */
  isMultiplexedEnabledForRW(): boolean;
}

/**
 * Creates a SessionFactory object to manage the creation of
 *      session-pool and multiplexed session.
 *
 * @class
 *
 * @param {Database} database Database object.
 * @param {String} name Name of the database.
 * @param {SessionPoolOptions|SessionPoolInterface} options Session pool
 *     configuration options or custom pool inteface.
 */
export class SessionFactory
  extends common.GrpcServiceObject
  implements SessionFactoryInterface
{
  multiplexedSession_: MultiplexedSessionInterface;
  pool_: SessionPoolInterface;
  isMultiplexed: boolean;
  isMultiplexedPartitionOps: boolean;
  isMultiplexedRW: boolean;
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

    // set the isMultiplexed property to false if multiplexed session is disabled, otherwise set the property to true
    this.isMultiplexed = !(
      process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false'
    );

    // set the isMultiplexedPartitionedOps property to false if multiplexed session is disabled for paritioned ops, otherwise set the property to true
    this.isMultiplexedPartitionOps = !(
      process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false' &&
      process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_PARTITIONED_OPS ===
        'false'
    );

    // set the isMultiplexedRW property to false if multiplexed session is disabled for read/write, otherwise set the property to true
    this.isMultiplexedRW = !(
      process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false' &&
      process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW === 'false'
    );

    // Regular sessions should only be created if mux is disabled.
    if (!this.isMultiplexed) {
      this.pool_.on('error', this.emit.bind(database, 'error'));
      this.pool_.open();
    }
  }

  /**
   * Retrieves a session, either a regular session or a multiplexed session, based on the environment variable configuration.
   *
   * If the environment variable `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS` is set to `false`, the method will attempt to
   * retrieve a regular session. Otherwise, it will return a multiplexed session.
   *
   * @param {GetSessionCallback} callback The callback function.
   */

  getSession(callback: GetSessionCallback): void {
    const sessionHandler = this.isMultiplexed
      ? this.multiplexedSession_
      : this.pool_;

    sessionHandler!.getSession((err, session, transaction) =>
      callback(err, session, transaction),
    );
  }

  /**
   * Retrieves a session for partitioned operations, selecting the appropriate session type
   * based on whether multiplexed sessions are disabled or not.
   *
   * If multiplexed sessions are disabled for partitioned ops this methods delegates the request to `getSession()`, which returns
   * either a multiplexed session or a regular session based on the env configuration.
   *
   * If the multiplexed sessions are disabled, a session will get retrieved from the regular session pool.
   * Otherwise a multiplexed session will be used.
   *
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForPartitionedOps(callback: GetSessionCallback): void {
    this.isMultiplexedPartitionOps
      ? this.getSession(callback)
      : this.pool_.getSession(callback);
  }

  /**
   * Retrieves a session for read write operations, selecting the appropriate session type
   * based on whether multiplexed sessions are enabled.
   *
   * If multiplexed sessions are disabled for read write this methods delegates the request to `getSession()`, which returns
   * either a multiplexed session or a regular session based on the env configuration.
   *
   * If the multiplexed sessions are disabled, a session will get retrieved from the regular session pool.
   * Otherise a multiplexed session will be used.
   *
   * @param {GetSessionCallback} callback The callback function.
   */
  getSessionForReadWrite(callback: GetSessionCallback): void {
    this.isMultiplexedRW
      ? this.getSession(callback)
      : this.pool_.getSession(callback);
  }

  /**
   * Returns the regular session pool object.
   *
   * @returns {SessionPoolInterface} The session pool used by current instance.
   */

  getPool(): SessionPoolInterface {
    return this.pool_;
  }

  /**
   * Releases a regular session back to the session pool.
   *
   * This methods does not release a multiplexed session.
   *
   * It returns a session to the pool after it is no longer needed.
   * It is a no-op for multiplexed sessions.
   *
   * @param {Session} session - The session to be released. This should be an instance of `Session` that was
   * previously acquired from the session pool.
   *
   * @throws {Error} If the session is invalid or cannot be released.
   */
  release(session: Session): void {
    if (!session.metadata?.multiplexed) {
      this.pool_.release(session);
    }
  }

  /**
   * Returns if a multiplexed is enabled or not.
   *
   * This method returns true if multiplexed session is enabled, otherwise returns false
   *
   * @returns {boolean}
   */
  isMultiplexedEnabled(): boolean {
    return this.isMultiplexed;
  }

  /**
   * Returns if a multiplexed is enabled or not for read write transaction.
   *
   * This method returns true if multiplexed session is enabled for read write transactions, otherwise returns false
   *
   * @returns {boolean}
   */
  isMultiplexedEnabledForRW(): boolean {
    return this.isMultiplexedRW;
  }
}
