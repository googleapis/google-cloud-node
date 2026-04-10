/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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

import {promisify} from '@google-cloud/promisify';
import {grpc} from 'google-gax';
import {Root} from 'protobufjs';
import * as through from 'through2';

import {Session} from './session';
import {Transaction} from './transaction';
import {NormalCallback} from './common';
import {isSessionNotFoundError} from './session-pool';
import {Database} from './database';
import {google} from '../protos/protos';
import IRequestOptions = google.spanner.v1.IRequestOptions;
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonProtos = require('../protos/protos.json');
const RETRY_INFO = 'google.rpc.retryinfo-bin';

const RETRYABLE: grpc.status[] = [grpc.status.ABORTED];

// tslint:disable-next-line variable-name
const RetryInfo = Root.fromJSON(jsonProtos).lookup('google.rpc.RetryInfo');

/**
 * @typedef {object} RunTransactionOptions
 * @property {number} [timeout] The maximum amount of time (in ms) that a
 *     {@link Transaction} should be ran for.
 */
export interface RunTransactionOptions {
  timeout?: number;
  requestOptions?: Pick<IRequestOptions, 'transactionTag'>;
  /**
   * @deprecated Use readLockMode instead.
   */
  optimisticLock?: boolean;
  excludeTxnFromChangeStreams?: boolean;
  isolationLevel?: IsolationLevel;
  readLockMode?: ReadLockMode;
}

/**
 * A function to execute in the context of a transaction.
 * @callback RunTransactionCallback
 * @param {?Error} err An error returned while making this request.
 * @param {Transaction} transaction The transaction object. The transaction has
 *     already been created, and is ready to be queried and committed against.
 */
export type RunTransactionCallback = NormalCallback<Transaction>;

/**
 * A function to execute in the context of a transaction.
 * @callback AsyncRunTransactionCallback
 * @param {Transaction} transaction The transaction object. The transaction has
 *     already been created, and is ready to be queried and committed against.
 */
export interface AsyncRunTransactionCallback<T> {
  (transaction: Transaction): Promise<T>;
}

interface ErrorCallback {
  (err: grpc.ServiceError): void;
}

/**
 * Error class used to signal a Transaction timeout.
 *
 * @private
 * @class
 *
 * @param {Error} [err] The last known retryable Error.
 */
export class DeadlineError extends Error implements grpc.ServiceError {
  code: grpc.status;
  details: string;
  metadata: grpc.Metadata;
  errors: grpc.ServiceError[];
  constructor(error?: grpc.ServiceError) {
    super('Deadline for Transaction exceeded.');

    this.code = grpc.status.DEADLINE_EXCEEDED;
    this.details = error?.details || '';
    this.metadata = error?.metadata || new grpc.Metadata();
    this.errors = [];

    if (error) {
      this.errors.push(error);
    }
  }
}

/**
 * Base class for running/retrying Transactions.
 *
 * @private
 * @class
 * @abstract
 *
 * @param {Database} database The Database to pull Sessions/Transactions from.
 * @param {RunTransactionOptions} [options] The runner options.
 */
export abstract class Runner<T> {
  abstract runFn: Function;
  attempts: number;
  session: Session;
  transaction?: Transaction;
  options: RunTransactionOptions;
  multiplexedSessionPreviousTransactionId?: Uint8Array | string;
  constructor(
    session: Session,
    transaction: Transaction,
    options?: RunTransactionOptions,
  ) {
    this.attempts = 0;
    this.session = session;
    this.transaction = transaction;
    this.transaction.useInRunner();

    const defaults = {
      timeout: 3600000,
      isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
      readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
    };

    this.options = Object.assign(defaults, options);
  }
  /**
   * Runs the user function against the provided transaction. Resolving the
   * returned Promise upon completion/error.
   *
   * @private
   *
   * @param {Transaction} transaction The transaction to run against.
   * @returns {Promise}
   */
  protected abstract _run(transaction: Transaction): Promise<T>;
  /**
   * Attempts to retrieve the retry delay from the supplied error. If absent it
   * will create one based on the number of attempts made thus far.
   *
   * @private
   *
   * @param {Error} err The service error.
   * @returns {number} Delay in milliseconds.
   */
  getNextDelay(err: grpc.ServiceError): number {
    const retryInfo = err.metadata && err.metadata.get(RETRY_INFO);

    if (retryInfo && retryInfo.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const {retryDelay} = (RetryInfo as any).decode(retryInfo[0]);
      let {seconds} = retryDelay;

      if (typeof seconds !== 'number') {
        seconds = seconds.toNumber();
      }

      const secondsInMs = Math.floor(seconds) * 1000;
      const nanosInMs = Math.floor(retryDelay.nanos) / 1e6;

      return secondsInMs + nanosInMs;
    }
    // A 'Session not found' error without any specific retry info should not
    // cause any delay between retries.
    if (isSessionNotFoundError(err)) {
      return 0;
    }

    // Max backoff should be 32 seconds.
    return (
      Math.pow(2, Math.min(this.attempts, 5)) * 1000 +
      Math.floor(Math.random() * 1000)
    );
  }

  /** Returns whether the given error should cause a transaction retry. */
  shouldRetry(err: grpc.ServiceError): boolean {
    return (
      RETRYABLE.includes(err.code!) ||
      isSessionNotFoundError(err) ||
      isRetryableInternalError(err)
    );
  }
  /**
   * Retrieves a transaction to run against.
   *
   * @private
   *
   * @returns Promise<Transaction>
   */
  async getTransaction(): Promise<Transaction> {
    if (this.transaction) {
      const transaction = this.transaction;
      delete this.transaction;
      return transaction;
    }

    const transaction = this.session.transaction(
      (this.session.parent as Database).queryOptions_,
    );
    transaction!.setReadWriteTransactionOptions(
      this.options as RunTransactionOptions,
    );
    transaction.multiplexedSessionPreviousTransactionId =
      this.multiplexedSessionPreviousTransactionId;
    if (this.attempts > 0) {
      await transaction.begin();
    }
    return transaction;
  }
  /**
   * This function is responsible for getting transactions, running them and
   * handling any errors, retrying if necessary.
   *
   * @private
   *
   * @returns {Promise}
   */
  async run(): Promise<T> {
    const start = Date.now();
    const timeout = this.options.timeout!;

    let lastError: grpc.ServiceError;

    // The transaction runner should always execute at least one attempt before
    // timing out.
    while (this.attempts === 0 || Date.now() - start < timeout) {
      const transaction = await this.getTransaction();

      try {
        return await this._run(transaction);
      } catch (e) {
        this.session.lastError = e as grpc.ServiceError;
        lastError = e as grpc.ServiceError;
      } finally {
        this.multiplexedSessionPreviousTransactionId = transaction.id;
      }

      // Note that if the error is a 'Session not found' error, it will be
      // thrown here. We do this to bubble this error up to the caller who is
      // responsible for retrying the transaction on a different session.
      if (
        !RETRYABLE.includes(lastError.code!) &&
        !isRetryableInternalError(lastError)
      ) {
        throw lastError;
      }

      this.attempts += 1;

      const delay = this.getNextDelay(lastError);
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    throw new DeadlineError(lastError!);
  }
}

/**
 * This class handles transactions expecting to be ran in callback mode.
 *
 * @private
 * @class
 *
 * @param {Database} database The database to pull sessions/transactions from.
 * @param {RunTransactionCallback} runFn The user supplied run function.
 * @param {RunTransactionOptions} [options] Runner options.
 */
export class TransactionRunner extends Runner<void> {
  runFn: RunTransactionCallback;
  constructor(
    session: Session,
    transaction: Transaction,
    runFn: RunTransactionCallback,
    options?: RunTransactionOptions,
  ) {
    super(session, transaction, options);
    this.runFn = runFn;
  }
  /**
   * Because the user has decided to use callback mode, we want to try and
   * intercept any ABORTED or UNKNOWN errors and stop the current function
   * execution.
   *
   * @private
   *
   * @param {Transaction} transaction The transaction to intercept errors for.
   * @param {Function} reject Function to call when a retryable error is found.
   */
  private _interceptErrors(
    transaction: Transaction,
    reject: ErrorCallback,
  ): void {
    const request = transaction.request;

    transaction.request = promisify((config: object, callback: Function) => {
      request(config, (err: null | grpc.ServiceError, resp: object) => {
        if (!err || !this.shouldRetry(err)) {
          callback(err, resp);
          return;
        }

        reject(err);
      });
    });

    const requestStream = transaction.requestStream;

    transaction.requestStream = (config: object) => {
      const proxyStream = through.obj();
      const stream = requestStream(config);

      stream
        .on('error', (err: grpc.ServiceError) => {
          if (!this.shouldRetry(err)) {
            proxyStream.destroy(err);
            return;
          }

          stream.unpipe(proxyStream);
          reject(err);
        })
        .pipe(proxyStream);

      return proxyStream as typeof stream;
    };
  }
  /**
   * Creates a Promise that should resolve when the provided transaction has
   * been committed or rolled back. Rejects if a retryable error occurs.
   *
   * @private
   *
   * @param {Transaction}
   * @returns {Promise}
   */
  protected _run(transaction: Transaction): Promise<void> {
    return new Promise((resolve, reject) => {
      transaction.once('end', resolve);
      this._interceptErrors(transaction, reject);
      this.runFn(null, transaction);
    });
  }
}

/**
 * This class handles transactions expecting to be ran in promise mode.
 *
 * @private
 * @class
 *
 * @param {Database} database The database to pull sessions/transactions from.
 * @param {AsyncRunTransactionCallback} runFn The user supplied run function.
 * @param {RunTransactionOptions} [options] Runner options.
 */
export class AsyncTransactionRunner<T> extends Runner<T> {
  runFn: AsyncRunTransactionCallback<T>;
  constructor(
    session: Session,
    transaction: Transaction,
    runFn: AsyncRunTransactionCallback<T>,
    options?: RunTransactionOptions,
  ) {
    super(session, transaction, options);
    this.runFn = runFn;
  }
  /**
   * Since this is promise mode all we need to do is return the user function.
   *
   * @private
   *
   * @param {Transaction} transaction The transaction to be ran against.
   * @returns {Promise}
   */
  protected _run(transaction: Transaction): Promise<T> {
    return this.runFn(transaction);
  }
}

/**
 * Checks whether the given error is a retryable internal error.
 * @param error the error to check
 * @return true if the error is a retryable internal error, and otherwise false.
 */
export function isRetryableInternalError(err: grpc.ServiceError): boolean {
  return (
    err.code === grpc.status.INTERNAL &&
    (err.message.includes(
      'Received unexpected EOS on DATA frame from server',
    ) ||
      err.message.includes('RST_STREAM') ||
      err.message.includes('HTTP/2 error code: INTERNAL_ERROR') ||
      err.message.includes('Connection closed with unknown cause'))
  );
}
