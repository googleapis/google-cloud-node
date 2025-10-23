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

'use strict';

// [START gax_quickstart]
async function main() {
  // Wraps a function to retry it several times.

  const gax = require('google-gax');

  // Let's say we have an API call. It only supports callbacks,
  // accepts 4 parameters (just like gRPC stub calls do),
  // and can fail sometimes...
  let callCounter = 0;
  function doStuff(request, options, metadata, callback) {
    ++callCounter;
    if (callCounter % 2 === 1) {
      // ...like, every second call.
      console.log('This call failed');
      const error = new Error('It failed!');
      error.code = 42;
      callback(error);
      return;
    }

    console.log('This call succeeded');
    callback(null, {response: 'ok'});
  }

  // We define call settings object:
  const settings = new gax.CallSettings();
  settings.retry = gax.createRetryOptions(
    /* retryCodes: */ [42],
    /* backoffSettings: */ gax.createDefaultBackoffSettings(),
  );

  // and use createApiCall to get a promisifed function that handles retries!
  const wrappedFunction = gax.createApiCall(doStuff, settings);

  // Try it!
  const [result] = await wrappedFunction({request: 'empty'});
  console.log(result);
}

main().catch(console.error);
// [END gax_quickstart]
