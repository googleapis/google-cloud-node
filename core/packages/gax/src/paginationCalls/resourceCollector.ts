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

import {
  SimpleCallbackFunction,
  NextPageRequestType,
  RequestType,
  APICallback,
} from '../apitypes';

/**
 * ResourceCollector class implements asynchronous logic of calling the API call that supports pagination,
 * page by page, collecting all resources (up to `maxResults`) in the array.
 *
 * Usage:
 *   const resourceCollector = new ResourceCollector(apiCall, maxResults); // -1 for unlimited
 *   resourceCollector.processAllPages(request).then(resources => ...);
 */
export class ResourceCollector {
  apiCall: SimpleCallbackFunction;
  resources: Array<{}>;
  maxResults: number;
  resolveCallback?: (resources: Array<{}>) => void;
  rejectCallback?: (err: Error) => void;

  constructor(apiCall: SimpleCallbackFunction, maxResults = -1) {
    this.apiCall = apiCall;
    this.resources = [];
    this.maxResults = maxResults;
  }

  private callback(
    err: Error | null,
    resources: Array<{}>,
    nextPageRequest: NextPageRequestType,
  ) {
    if (err) {
      // Something went wrong with this request - failing everything
      this.rejectCallback!(err);
      return;
    }

    // Process one page
    for (const resource of resources) {
      this.resources.push(resource);
      if (this.resources.length === this.maxResults) {
        nextPageRequest = null;
        break;
      }
    }

    // All done?
    if (!nextPageRequest) {
      this.resolveCallback!(this.resources);
      return;
    }

    // Schedule the next call
    const callback = (
      ...args: [Error | null, Array<{}>, NextPageRequestType]
    ) => this.callback(...args);
    setImmediate(this.apiCall, nextPageRequest, callback as APICallback);
  }

  processAllPages(firstRequest: RequestType): Promise<Array<{}>> {
    return new Promise((resolve, reject) => {
      this.resolveCallback = resolve;
      this.rejectCallback = reject;

      // Schedule the first call
      const callback = (
        ...args: [Error | null, Array<{}>, NextPageRequestType]
      ) => this.callback(...args);
      setImmediate(this.apiCall, firstRequest, callback as APICallback);
    });
  }
}
