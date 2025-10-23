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

import {APICaller} from '../apiCaller';
import {APICallback, GRPCCall, SimpleCallbackFunction} from '../apitypes';
import {OngoingCall, OngoingCallPromise} from '../call';
import {
  BackoffSettings,
  CallOptions,
  createDefaultBackoffSettings,
} from '../gax';
import {GoogleError} from '../googleError';

import {Operation} from './longrunning';
import {LongRunningDescriptor} from './longRunningDescriptor';
import * as operationProtos from '../../protos/operations';

export class LongrunningApiCaller implements APICaller {
  longrunningDescriptor: LongRunningDescriptor;
  /**
   * Creates an API caller that performs polling on a long running operation.
   *
   * @private
   * @constructor
   * @param {LongRunningDescriptor} longrunningDescriptor - Holds the
   * decoders used for unpacking responses and the operationsClient
   * used for polling the operation.
   */
  constructor(longrunningDescriptor: LongRunningDescriptor) {
    this.longrunningDescriptor = longrunningDescriptor;
  }

  init(callback?: APICallback): OngoingCallPromise | OngoingCall {
    if (callback) {
      return new OngoingCall(callback);
    }
    return new OngoingCallPromise();
  }

  wrap(func: GRPCCall): GRPCCall {
    return func;
  }

  call(
    apiCall: SimpleCallbackFunction,
    argument: {},
    settings: CallOptions,
    canceller: OngoingCallPromise,
  ) {
    canceller.call((argument, callback) => {
      return this._wrapOperation(apiCall, settings, argument, callback);
    }, argument);
  }

  private _wrapOperation(
    apiCall: SimpleCallbackFunction,
    settings: CallOptions,
    argument: {},
    callback: APICallback,
  ) {
    let backoffSettings: BackoffSettings | undefined = settings.longrunning;
    if (!backoffSettings) {
      backoffSettings = createDefaultBackoffSettings();
    }

    const longrunningDescriptor = this.longrunningDescriptor;
    return apiCall(
      argument,
      (err: GoogleError | null, rawResponse: {} | null | undefined) => {
        if (err) {
          callback(err, null, null, rawResponse as Operation);
          return;
        }

        const operation = new Operation(
          rawResponse as operationProtos.google.longrunning.Operation,
          longrunningDescriptor,
          backoffSettings!,
          settings,
        );

        callback(null, operation, rawResponse);
      },
    );
  }

  fail(canceller: OngoingCallPromise, err: GoogleError): void {
    canceller.callback!(err);
  }

  result(canceller: OngoingCallPromise) {
    return canceller.promise;
  }
}
