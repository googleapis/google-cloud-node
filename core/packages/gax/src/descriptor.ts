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

// Descriptors are passed by client libraries to `createApiCall` if a call must
// have special features, such as: support auto-pagination, be a long-running
// operation, a streaming method, or support bundling. Each type of descriptor
// can create its own apiCaller that will handle all the specifics for the given
// call type.

import {APICaller} from './apiCaller';
import {CallSettings} from './gax';

export interface Descriptor {
  getApiCaller(settings: CallSettings): APICaller;
}

export {LongRunningDescriptor as LongrunningDescriptor} from './longRunningCalls/longRunningDescriptor';
export {PageDescriptor} from './paginationCalls/pageDescriptor';
export {StreamDescriptor} from './streamingCalls/streamDescriptor';
export {BundleDescriptor} from './bundlingCalls/bundleDescriptor';
