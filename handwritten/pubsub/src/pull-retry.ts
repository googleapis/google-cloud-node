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
import {grpc} from 'google-gax';

/*!
 * retryable grpc.status codes
 */
export const RETRY_CODES: grpc.status[] = [
  grpc.status.DEADLINE_EXCEEDED,
  grpc.status.RESOURCE_EXHAUSTED,
  grpc.status.ABORTED,
  grpc.status.INTERNAL,
  grpc.status.UNAVAILABLE,
  grpc.status.CANCELLED,
];

/**
 * Used to track pull requests and determine if additional requests should be
 * made, etc.
 *
 * @class
 * @private
 */
export class PullRetry {
  /**
   * Determines if a request grpc.status should be retried.
   *
   * Deadlines behave kind of unexpectedly on streams, rather than using it as
   * an indicator of when to give up trying to connect, it actually dictates
   * how long the stream should stay open. Because of this, it is virtually
   * impossible to determine whether or not a deadline error is the result of
   * the server closing the stream or if we timed out waiting for a connection.
   *
   * @private
   * @param {object} grpc.status The request grpc.status.
   * @returns {boolean}
   */
  static retry(err: grpc.StatusObject): boolean {
    if (
      err.code === grpc.status.UNAVAILABLE &&
      err.details &&
      err.details.match(/Server shutdownNow invoked/)
    ) {
      return true;
    }

    return RETRY_CODES.includes(err.code);
  }

  static resetFailures(err: grpc.StatusObject): boolean {
    return (
      err.code === grpc.status.OK || err.code === grpc.status.DEADLINE_EXCEEDED
    );
  }
}
