// Copyright 2024 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {GaxiosError, GaxiosOptionsPrepared, GaxiosResponse} from './common.js';

/**
 * Interceptors that can be run for requests or responses. These interceptors run asynchronously.
 */
export interface GaxiosInterceptor<
  T extends GaxiosOptionsPrepared | GaxiosResponse,
> {
  /**
   * Function to be run when applying an interceptor.
   *
   * @param {T} configOrResponse The current configuration or response.
   * @returns {Promise<T>} Promise that resolves to the modified set of options or response.
   */
  resolved?: (configOrResponse: T) => Promise<T>;
  /**
   * Function to be run if the previous call to resolved throws / rejects or the request results in an invalid status
   * as determined by the call to validateStatus.
   *
   * @param {GaxiosError} err The error thrown from the previously called resolved function.
   */
  rejected?: (err: GaxiosError) => void;
}

/**
 * Class to manage collections of GaxiosInterceptors for both requests and responses.
 */
export class GaxiosInterceptorManager<
  T extends GaxiosOptionsPrepared | GaxiosResponse,
> extends Set<GaxiosInterceptor<T> | null> {}
