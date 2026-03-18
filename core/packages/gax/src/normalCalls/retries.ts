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

import {Status} from '../status';

import {
  APICallback,
  GRPCCall,
  GRPCCallOtherArgs,
  GRPCCallResult,
  RequestType,
  SimpleCallbackFunction,
} from '../apitypes';
import {RetryOptions} from '../gax';
import {GoogleError} from '../googleError';

import {addTimeoutArg} from './timeout';

/**
 * Creates a function equivalent to func, but that retries on certain
 * exceptions.
 *
 * @private
 *
 * @param {GRPCCall} func - A function.
 * @param {RetryOptions} retry - Configures the exceptions upon which the
 *   function eshould retry, and the parameters to the exponential backoff retry
 *   algorithm.
 * @param {GRPCCallOtherArgs} otherArgs - the additional arguments to be passed to func.
 * @return {SimpleCallbackFunction} A function that will retry.
 */
export function retryable(
  func: GRPCCall,
  retry: RetryOptions,
  otherArgs: GRPCCallOtherArgs,
  apiName?: string,
): SimpleCallbackFunction {
  const delayMult = retry.backoffSettings.retryDelayMultiplier;
  const maxDelay = retry.backoffSettings.maxRetryDelayMillis;
  const timeoutMult = retry.backoffSettings.rpcTimeoutMultiplier;
  const maxTimeout = retry.backoffSettings.maxRpcTimeoutMillis;

  let delay = retry.backoffSettings.initialRetryDelayMillis;
  let timeout = retry.backoffSettings.initialRpcTimeoutMillis;

  /**
   * Equivalent to ``func``, but retries upon transient failure.
   *
   * Retrying is done through an exponential backoff algorithm configured
   * by the options in ``retry``.
   * @param {RequestType} argument The request object.
   * @param {APICallback} callback The callback.
   * @return {GRPCCall}
   */
  return (argument: RequestType, callback: APICallback) => {
    let canceller: GRPCCallResult | null;
    let timeoutId: ReturnType<typeof setTimeout> | null;
    let now = new Date();
    let deadline: number;
    if (retry.backoffSettings.totalTimeoutMillis) {
      deadline = now.getTime() + retry.backoffSettings.totalTimeoutMillis;
    }
    let retries = 0;
    const maxRetries = retry.backoffSettings.maxRetries!;
    // For retries, errorsEncountered maintains a list of errors encountered so
    // that they can be sent back to the user and the user can see ALL errors
    // that were encountered during a series of retries.
    const errorsEncountered: GoogleError[] = [];

    // The errors that were encountered should be immediately visible to the
    // user so we should concatenate them onto the details because details are
    // immediately visible to the user. This method provideds a string we can
    // concatenate onto the details.
    function errorDetailsSuffix(errsEncountered: GoogleError[]) {
      if (errsEncountered.length < 2) {
        // If only one error has been encountered then this information will
        // already be in the error message so no additional information is
        // necessary. In this case, don't add anything to the details.
        return '';
      }
      const errorsAsString = errsEncountered
        .map(err => {
          const statusDetailsString = err.statusDetails
            ? err.statusDetails.toString()
            : '';
          const codeString =
            err.code && err.code.toString ? err.code.toString() : '';
          const noteString =
            err.note && err.note.toString ? err.note.toString() : '';
          const messageString =
            err.message && err.message.toString ? err.message.toString() : '';
          return `{message: ${messageString}, code: ${codeString}, details: ${statusDetailsString}, note: ${noteString}}`;
        })
        .join(',');
      return ` : Previous errors : [${errorsAsString}]`;
    }
    // TODO: define A/B testing values for retry behaviors.

    /** Repeat the API call as long as necessary. */
    function repeat(err?: GoogleError) {
      if (err) {
        errorsEncountered.push(err);
      }
      timeoutId = null;
      if (deadline && now.getTime() >= deadline) {
        const error = new GoogleError(
          `Total timeout of API ${apiName} exceeded ${
            retry.backoffSettings.totalTimeoutMillis
          } milliseconds ${
            err ? `retrying error ${err} ` : ''
          } before any response was received.${errorDetailsSuffix(errorsEncountered)}`,
        );
        error.code = Status.DEADLINE_EXCEEDED;
        callback(error);
        return;
      }

      if (retries && retries >= maxRetries) {
        const error = new GoogleError(
          'Exceeded maximum number of retries ' +
            (err ? `retrying error ${err} ` : '') +
            'before any response was received' +
            errorDetailsSuffix(errorsEncountered),
        );
        error.code = Status.DEADLINE_EXCEEDED;
        callback(error);
        return;
      }

      retries++;
      let lastError = err;
      const toCall = addTimeoutArg(func, timeout!, otherArgs);
      canceller = toCall(argument, (err, response, next, rawResponse) => {
        if (err) {
          lastError = err;
        }
        if (!err) {
          callback(null, response, next, rawResponse);
          return;
        }
        canceller = null;
        if (
          retry.retryCodes.length > 0 &&
          retry.retryCodes.indexOf(err!.code!) < 0
        ) {
          err.note =
            'Exception occurred in retry method that was ' +
            'not classified as transient';
          callback(err);
        } else {
          const toSleep = Math.random() * delay;
          timeoutId = setTimeout(() => {
            now = new Date();
            delay = Math.min(delay * delayMult, maxDelay);
            const timeoutCal =
              timeout && timeoutMult ? timeout * timeoutMult : 0;
            const rpcTimeout = maxTimeout ? maxTimeout : 0;
            const newDeadline = deadline ? deadline - now.getTime() : Infinity;
            timeout = Math.min(timeoutCal, rpcTimeout, newDeadline);
            repeat(lastError);
          }, toSleep);
        }
      });
      if (canceller instanceof Promise) {
        canceller.catch(err => {
          callback(new GoogleError(err));
        });
      }
    }

    if (maxRetries && deadline!) {
      const error = new GoogleError(
        'Cannot set both totalTimeoutMillis and maxRetries ' +
          'in backoffSettings.',
      );
      error.code = Status.INVALID_ARGUMENT;
      callback(error);
    } else {
      repeat();
    }

    return {
      cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (canceller) {
          canceller.cancel();
        } else {
          const error = new GoogleError(
            'cancelled' + errorDetailsSuffix(errorsEncountered),
          );
          error.code = Status.CANCELLED;
          callback(error);
        }
      },
    };
  };
}
