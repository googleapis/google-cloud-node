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

import {context, propagation} from '@opentelemetry/api';
import type {
  GRPCCall,
  GRPCCallOtherArgs,
  SimpleCallbackFunction,
  UnaryCall,
} from '../apitypes';
import {checkTelemetryEnabled, isMetadata} from '../util';

/**
 * Updates func so that it gets called with the timeout as its final arg.
 *
 * This converts a function, func, into another function with updated deadline.
 *
 * @private
 *
 * @param {GRPCCall} func - a function to be updated.
 * @param {number} timeout - to be added to the original function as it final
 *   positional arg.
 * @param {Object} otherArgs - the additional arguments to be passed to func.
 * @param {Object=} abTests - the A/B testing key/value pairs.
 * @return {function(Object, APICallback)}
 *  the function with other arguments and the timeout.
 */
export function addTimeoutArg(
  func: GRPCCall,
  timeout: number,
  otherArgs: GRPCCallOtherArgs,
  abTests?: {},
): SimpleCallbackFunction {
  // TODO: this assumes the other arguments consist of metadata and options,
  // which is specific to gRPC calls. Remove the hidden dependency on gRPC.
  return (argument, callback) => {
    const now = new Date();
    const options = otherArgs.options || {};
    options.deadline = new Date(now.getTime() + timeout);
    let metadata = otherArgs.metadataBuilder
      ? otherArgs.metadataBuilder(abTests, otherArgs.headers || {})
      : null;
    if (checkTelemetryEnabled() && isMetadata(metadata)) {
      const targetMetadata =
        typeof metadata.clone === 'function' ? metadata.clone() : metadata;
      propagation.inject(context.active(), targetMetadata, {
        set(carrier, key, value) {
          carrier.set(key, value);
        },
      });
      metadata = targetMetadata;
    } else if (
      checkTelemetryEnabled() &&
      metadata &&
      typeof metadata === 'object'
    ) {
      propagation.inject(context.active(), metadata);
    }
    return (func as UnaryCall)(argument, metadata!, options, callback);
  };
}
