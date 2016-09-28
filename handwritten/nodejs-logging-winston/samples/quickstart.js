// Copyright 2016, Google, Inc.
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

'use strict';

// [START logging_quickstart]
// Imports and instantiates the Google Cloud client library
const logging = require('@google-cloud/logging')({
  projectId: 'YOUR_PROJECT_ID'
});

// Selects the log to write to
const log = logging.log('my-log');
// Prepares a log entry
const entry = log.entry({ type: 'global' }, 'Hello, world!');

// Writes the log entry
log.write(entry, (err) => {
  if (!err) {
    // The entry was logged successfully
  }
});
// [END logging_quickstart]
