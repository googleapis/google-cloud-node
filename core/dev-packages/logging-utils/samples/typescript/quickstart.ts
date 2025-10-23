// Copyright 2024 Google LLC
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

// sample-metadata:
//   title: Quickstart
//   description: A quick introduction to using the Pub/Sub client library.
//   usage: node quickstart.js <project-id> <topic-name-or-id> <subscription-name-or-id>

// [!START logging_utils_quickstart]
import {log} from 'google-logging-utils';

function main() {
  const test = log('testing');
  test({other: {foo: 'bar'}}, 'boo');
  test.info('info');
}
// [!END logging_utils_quickstart]

main();
