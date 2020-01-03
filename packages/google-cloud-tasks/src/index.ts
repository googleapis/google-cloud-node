// Copyright 2018 Google LLC
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

import * as v2 from './v2';
import * as v2beta2 from './v2beta2';
import * as v2beta3 from './v2beta3';
const CloudTasksClient = v2.CloudTasksClient;
export {v2, v2beta2, v2beta3, CloudTasksClient};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {v2, v2beta2, v2beta3, CloudTasksClient};
