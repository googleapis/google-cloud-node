// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

declare module 'retry-request' {
  import * as request from 'request';

  namespace retryRequest {
    /**
     * Set the defaults for `retryRequest`.
     */
    const defaults: retryRequest.Options;
    /**
     * Determines the next retry based on the provided configuration.
     */
    function getNextRetryDelay(config: Options): number;
    interface Options {
      objectMode?: boolean;
      request: typeof request;
      retries?: number;
      noResponseRetries?: number;
      currentRetryAttempt?: number;
      maxRetryDelay?: number;
      retryDelayMultiplier?: number;
      totalTimeout?: number;
      shouldRetryFn?: (response: request.RequestResponse) => boolean;
    }
  }

  function retryRequest(
    requestOpts: request.Options,
    opts: retryRequest.Options,
    callback?: request.RequestCallback,
  ): {abort: () => void};
  function retryRequest(
    requestOpts: request.Options,
    callback?: request.RequestCallback,
  ): {abort: () => void};

  export = retryRequest;
}
