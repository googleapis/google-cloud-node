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
import {CallSettings} from '../gax';
import {GoogleError} from '../googleError';

import {BundleExecutor} from './bundleExecutor';
import {TaskCallback} from './task';

/**
 * An implementation of APICaller for bundled calls.
 * Uses BundleExecutor to do bundling.
 */
export class BundleApiCaller implements APICaller {
  bundler: BundleExecutor;

  constructor(bundler: BundleExecutor) {
    this.bundler = bundler;
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
    settings: CallSettings,
    status: OngoingCallPromise,
  ) {
    if (!settings.isBundling) {
      throw new GoogleError('Bundling enabled with no isBundling!');
    }

    status.call((argument: {}, callback: TaskCallback) => {
      this.bundler.schedule(apiCall, argument, callback);
      return status;
    }, argument);
  }

  fail(canceller: OngoingCallPromise, err: GoogleError): void {
    canceller.callback!(err);
  }

  result(canceller: OngoingCallPromise) {
    return canceller.promise;
  }
}
