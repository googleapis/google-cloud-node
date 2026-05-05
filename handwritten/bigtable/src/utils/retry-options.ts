// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {BackoffSettings} from 'google-gax/build/src/gax';
import {GoogleError, grpc, ServiceError} from 'google-gax';

export const RETRYABLE_STATUS_CODES = new Set([
  grpc.status.DEADLINE_EXCEEDED.valueOf(),
  grpc.status.UNAVAILABLE.valueOf(),
]);
export const DEFAULT_RETRY_COUNT = 10;
export const IGNORED_STATUS_CODES = new Set([grpc.status.CANCELLED.valueOf()]);

interface Violation {
  type: string;
  description: string;
}

interface ViolationsList {
  violations?: Violation[];
}

function containsPreparedQueryExpired(violations: ViolationsList[]): boolean {
  if (!Array.isArray(violations) || violations.length === 0) {
    return false;
  }

  for (const obj of violations) {
    if (obj.violations && Array.isArray(obj.violations)) {
      for (const violation of obj.violations) {
        if (violation.type === 'PREPARED_QUERY_EXPIRED') {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Checks if the error is an "expired query plan" error.
 * For more info refer to the ExecuteQueryStateMachine
 * @param error
 */
export const isExpiredQueryError = (
  error: GoogleError | ServiceError,
): boolean => {
  if (
    error.code === grpc.status.FAILED_PRECONDITION &&
    Object.prototype.hasOwnProperty.call(error, 'statusDetails')
  ) {
    const statusDetails = (error as GoogleError)
      .statusDetails as ViolationsList[];
    return containsPreparedQueryExpired(statusDetails);
  }
  return false;
};

/**
 * Checks if the error is a cancel error - caused by aborting the stream.
 * @param error
 */
export function isCancelError(error: ServiceError) {
  return error.code === grpc.status.CANCELLED.valueOf();
}
