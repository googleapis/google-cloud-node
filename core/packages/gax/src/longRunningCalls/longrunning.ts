/**
 * Copyright 2020 Google LLC
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
import {Status} from '../status';

import {ResultTuple} from '../apitypes';
import {CancellablePromise} from '../call';
import {BackoffSettings, CallOptions} from '../gax';
import {GoogleError} from '../googleError';
import {Metadata} from '../grpc';
import {LongRunningDescriptor} from './longRunningDescriptor';
import * as operationProtos from '../../protos/operations';

/**
 * @callback GetOperationCallback
 * @param {?Error} error
 * @param {?Object} result
 * @param {?Object} metadata
 * @param {?google.longrunning.Operation} rawResponse
 */
export interface GetOperationCallback {
  (
    err?: Error | null,
    result?: {},
    metadata?: {},
    rawResponse?: LROOperation,
  ): void;
}

type LROOperation = operationProtos.google.longrunning.Operation;

export class Operation extends EventEmitter {
  completeListeners: number;
  hasActiveListeners: boolean;
  latestResponse: LROOperation;
  longrunningDescriptor: LongRunningDescriptor;
  result: {} | null;
  metadata: Metadata | null;
  backoffSettings: BackoffSettings;
  _callOptions?: CallOptions;
  currentCallPromise_?: CancellablePromise<ResultTuple>;
  name?: string;
  done?: boolean;
  error?: GoogleError;
  response?: {};

  /**
   * Wrapper for a google.longrunnung.Operation.
   *
   * @constructor
   *
   * @param {google.longrunning.Operation} grpcOp - The operation to be wrapped.
   * @param {LongRunningDescriptor} longrunningDescriptor - This defines the
   * operations service client and unpacking mechanisms for the operation.
   * @param {BackoffSettings} backoffSettings - The backoff settings used in
   * in polling the operation.
   * @param {CallOptions} callOptions - CallOptions used in making get operation
   * requests.
   */
  constructor(
    grpcOp: LROOperation,
    longrunningDescriptor: LongRunningDescriptor,
    backoffSettings: BackoffSettings,
    callOptions?: CallOptions,
  ) {
    super();
    this.completeListeners = 0;
    this.hasActiveListeners = false;
    this.latestResponse = grpcOp;
    this.name = this.latestResponse.name;
    this.done = this.latestResponse.done;
    this.error = this.latestResponse.error as unknown as GoogleError;
    this.longrunningDescriptor = longrunningDescriptor;
    this.result = null;
    this.metadata = null;
    this.backoffSettings = backoffSettings;
    this._unpackResponse(grpcOp);
    this._listenForEvents();
    this._callOptions = callOptions;
  }

  /**
   * Begin listening for events on the operation. This method keeps track of how
   * many "complete" listeners are registered and removed, making sure polling
   * is handled automatically.
   *
   * As long as there is one active "complete" listener, the connection is open.
   * When there are no more listeners, the polling stops.
   *
   * @private
   */
  _listenForEvents() {
    this.on('newListener', event => {
      if (event === 'complete') {
        this.completeListeners++;

        if (!this.hasActiveListeners) {
          this.hasActiveListeners = true;
          this.startPolling_();
        }
      }
    });

    this.on('removeListener', event => {
      if (event === 'complete' && --this.completeListeners === 0) {
        this.hasActiveListeners = false;
      }
    });
  }

  /**
   * Cancels current polling api call and cancels the operation.
   *
   * @return {Promise} the promise of the OperationsClient#cancelOperation api
   * request.
   */
  cancel() {
    if (this.currentCallPromise_) {
      this.currentCallPromise_.cancel();
    }
    const operationsClient = this.longrunningDescriptor.operationsClient;
    const cancelRequest =
      new operationProtos.google.longrunning.CancelOperationRequest();
    cancelRequest.name = this.latestResponse.name;
    return operationsClient.cancelOperation(cancelRequest);
  }

  /**
   * Get the updated status of the operation. If the Operation has previously
   * completed, this will use the status of the cached completed operation.
   *
   *   - callback(err): Operation failed
   *   - callback(null, result, metadata, rawResponse): Operation complete
   *   - callback(null, null, metadata, rawResponse): Operation incomplete
   *
   * @param {getOperationCallback} callback - Callback to handle the polled
   * operation result and metadata.
   * @return {Promise|undefined} - This returns a promise if a callback is not specified.
   * The promise resolves to an array where the first element is the unpacked
   * result, the second element is the metadata, and the third element is the
   * raw response of the api call. The promise rejects if the operation returns
   * an error.
   */
  getOperation(): Promise<{}>;
  getOperation(callback: GetOperationCallback): void;
  getOperation(callback?: GetOperationCallback): Promise<{}> | void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const operationsClient = this.longrunningDescriptor.operationsClient;

    function promisifyResponse() {
      if (!callback) {
        return new Promise((resolve, reject) => {
          if (self.latestResponse.error) {
            const error = new GoogleError(self.latestResponse.error.message!);
            error.code = self.latestResponse.error.code!;
            reject(error);
          } else {
            resolve([self.result, self.metadata, self.latestResponse]);
          }
        });
      }
      return;
    }

    if (this.latestResponse.done) {
      this._unpackResponse(this.latestResponse, callback);
      return promisifyResponse() as Promise<{}>;
    }
    const request =
      new operationProtos.google.longrunning.GetOperationRequest();
    request.name = this.latestResponse.name;
    this.currentCallPromise_ = operationsClient.getOperationInternal(
      request,
      this._callOptions!,
    );

    const noCallbackPromise = this.currentCallPromise_.then(
      responses => {
        self.latestResponse = responses[0] as LROOperation;
        self._unpackResponse(responses[0] as LROOperation, callback);
        return promisifyResponse()!;
      },
      (err: Error) => {
        if (callback) {
          callback(err);
          return;
        }
        return Promise.reject(err);
      },
    );

    if (!callback) {
      return noCallbackPromise as Promise<{}>;
    }
  }

  _unpackResponse(op: LROOperation, callback?: GetOperationCallback) {
    const responseDecoder = this.longrunningDescriptor.responseDecoder;
    const metadataDecoder = this.longrunningDescriptor.metadataDecoder;
    let response: {};
    let metadata: Metadata;

    if (op.done) {
      if (op.result === 'error') {
        const error = new GoogleError(op.error!.message!);
        error.code = op.error!.code!;
        this.error = error;
        if (callback) {
          callback(error);
        }
        return;
      }

      if (responseDecoder && op.response) {
        this.response = op.response;
        response = responseDecoder(op.response.value!);
        this.result = response;
        this.done = true;
      }
    }

    if (metadataDecoder && op.metadata) {
      metadata = metadataDecoder(op.metadata.value!) as unknown as Metadata;
      this.metadata = metadata;
    }
    if (callback) {
      callback(null, response!, metadata!, op);
    }
  }

  /**
   * Poll `getOperation` to check the operation's status. This runs a loop to
   * ping using the backoff strategy specified at initialization.
   *
   * Note: This method is automatically called once a "complete" event handler
   * is registered on the operation.
   *
   * @private
   */
  startPolling_() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    let now = new Date();
    const delayMult = this.backoffSettings.retryDelayMultiplier;
    const maxDelay = this.backoffSettings.maxRetryDelayMillis;
    let delay = this.backoffSettings.initialRetryDelayMillis;
    let deadline = Infinity;
    if (this.backoffSettings.totalTimeoutMillis) {
      deadline = now.getTime() + this.backoffSettings.totalTimeoutMillis;
    }
    let previousMetadataBytes: Uint8Array;
    if (this.latestResponse.metadata) {
      previousMetadataBytes = this.latestResponse.metadata.value!;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function emit(event: string | symbol, ...args: any[]) {
      self.emit(event, ...args);
    }

    // Helper function to replace nodejs buffer's equals()
    function arrayEquals(a: Uint8Array, b: Uint8Array): boolean {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.byteLength; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    function retry() {
      if (!self.hasActiveListeners) {
        return;
      }

      if (now.getTime() >= deadline) {
        const error = new GoogleError(
          'Total timeout exceeded before any response was received',
        );
        error.code = Status.DEADLINE_EXCEEDED;
        setImmediate(emit, 'error', error);
        return;
      }

      self.getOperation((err, result, metadata, rawResponse) => {
        if (err) {
          setImmediate(emit, 'error', err);
          return;
        }

        if (!result) {
          if (
            rawResponse!.metadata &&
            (!previousMetadataBytes ||
              (rawResponse &&
                !arrayEquals(
                  rawResponse.metadata.value!,
                  previousMetadataBytes,
                )))
          ) {
            setImmediate(emit, 'progress', metadata, rawResponse);
            previousMetadataBytes = rawResponse!.metadata!.value!;
          }
          // special case: some APIs fail to set either result or error
          // but set done = true (e.g. speech with silent file).
          // Some APIs just use this for the normal completion
          // (e.g. nodejs-contact-center-insights), so let's just return
          // an empty response in this case.
          if (rawResponse!.done) {
            setImmediate(emit, 'complete', {}, metadata, rawResponse);
            return;
          }
          setTimeout(() => {
            now = new Date();
            delay = Math.min(delay * delayMult, maxDelay);
            retry();
          }, delay);
          return;
        }

        setImmediate(emit, 'complete', result, metadata, rawResponse);
      });
    }
    retry();
  }

  /**
   * Wraps the `complete` and `error` events in a Promise.
   *
   * @return {promise} - Promise that resolves on operation completion and rejects
   * on operation error.
   */
  promise() {
    return new Promise((resolve, reject) => {
      this.on('error', reject).on(
        'complete',
        (result, metadata, rawResponse) => {
          resolve([result, metadata, rawResponse]);
        },
      );
    });
  }
}

/**
 * Method used to create Operation objects.
 *
 * @constructor
 *
 * @param {google.longrunning.Operation} op - The operation to be wrapped.
 * @param {LongRunningDescriptor} longrunningDescriptor - This defines the
 * operations service client and unpacking mechanisms for the operation.
 * @param {BackoffSettings} backoffSettings - The backoff settings used in
 * in polling the operation.
 * @param {CallOptions=} callOptions - CallOptions used in making get operation
 * requests.
 */
export function operation(
  op: LROOperation,
  longrunningDescriptor: LongRunningDescriptor,
  backoffSettings: BackoffSettings,
  callOptions?: CallOptions,
) {
  return new Operation(op, longrunningDescriptor, backoffSettings, callOptions);
}
