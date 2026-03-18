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

import {Status} from './status';

import {
  APICallback,
  NextPageRequestType,
  RawResponseType,
  RequestType,
  ResponseType,
  ResultTuple,
  SimpleCallbackFunction,
} from './apitypes';
import {GoogleError} from './googleError';

export class OngoingCall {
  callback: APICallback;
  cancelFunc?: () => void;
  completed: boolean;

  /**
   * OngoingCall manages callback, API calls, and cancellation
   * of the API calls.
   * @param {APICallback=} callback
   *   The callback to be called asynchronously when the API call
   *   finishes.
   * @constructor
   * @property {APICallback} callback
   *   The callback function to be called.
   * @private
   */
  constructor(callback: APICallback) {
    this.callback = callback;
    this.completed = false;
  }

  /**
   * Cancels the ongoing promise.
   */
  cancel(): void {
    if (this.completed) {
      return;
    }
    this.completed = true;
    if (this.cancelFunc) {
      this.cancelFunc();
    } else {
      const error = new GoogleError('cancelled');
      error.code = Status.CANCELLED;
      this.callback!(error);
    }
  }

  /**
   * Call calls the specified function. Result will be used to fulfill
   * the promise.
   *
   * @param {SimpleCallbackFunction} func
   *   A function for an API call.
   * @param {Object} argument
   *   A request object.
   */
  call(func: SimpleCallbackFunction, argument: RequestType): void {
    if (this.completed) {
      return;
    }
    const canceller = func(
      argument,
      (
        err: GoogleError | null,
        response?: ResponseType,
        next?: NextPageRequestType,
        rawResponse?: RawResponseType,
      ) => {
        this.completed = true;
        setImmediate(this.callback!, err, response, next, rawResponse);
      },
    );
    if (canceller instanceof Promise) {
      canceller.catch(err => {
        setImmediate(this.callback!, new GoogleError(err), null, null, null);
      });
    }
    this.cancelFunc = () => canceller.cancel();
  }
}

export interface CancellablePromise<T> extends Promise<T> {
  cancel(): void;
}

export class OngoingCallPromise extends OngoingCall {
  promise: CancellablePromise<ResultTuple>;
  /**
   * GaxPromise is GRPCCallbackWrapper, but it holds a promise when
   * the API call finishes.
   * @constructor
   * @private
   */
  constructor() {
    let resolveCallback: (
      result: [ResponseType, NextPageRequestType, RawResponseType],
    ) => void;
    let rejectCallback: (err: Error) => void;
    const callback: APICallback = (
      err: GoogleError | null,
      response?: ResponseType,
      next?: NextPageRequestType,
      rawResponse?: RawResponseType,
    ) => {
      if (err) {
        // If gRPC metadata exist, parsed google.rpc.status details.
        if (err.metadata) {
          rejectCallback(GoogleError.parseGRPCStatusDetails(err));
        } else {
          rejectCallback(err);
        }
      } else if (response !== undefined) {
        resolveCallback([response, next || null, rawResponse || null]);
      } else {
        throw new GoogleError('Neither error nor response are defined');
      }
    };
    const promise = new Promise((resolve, reject) => {
      resolveCallback = resolve;
      rejectCallback = reject;
    }) as CancellablePromise<ResultTuple>;
    super(callback);
    this.promise = promise;
    this.promise.cancel = () => {
      this.cancel();
    };
  }
}
