// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {placeholder} from './gcp-debuglog.js';
import makeLog from './gcp-debuglog.js';

// This creates our topical loggers. Since this is ESM, loading modules is
// now an async operation, so we have to put some placeholders in (to get
// typings) until these are actually ready.

const loggers = {
  verbose: placeholder,
  step: placeholder,
  error: placeholder,
};

export async function createLoggers() {
  loggers.verbose = await makeLog('verbose');
  loggers.step = await makeLog('step');
  loggers.error = await makeLog('error');
}

export default loggers;
