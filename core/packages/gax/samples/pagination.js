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

// [START gax_pagination]
async function main() {
  // Showcases auto-pagination functionality.

  const gax = require('google-gax');

  // Let's say we have an API call that returns results grouped into pages.
  // It accepts 4 parameters (just like gRPC stub calls do):
  function doStuff(request, options, metadata, callback) {
    let result = {};

    if (!request.pageToken) {
      result = {
        animals: ['cat', 'dog'],
        nextPageToken: 'page2',
      };
    } else if (request.pageToken === 'page2') {
      result = {
        animals: ['snake', 'turtle'],
        nextPageToken: 'page3',
      };
    } else if (request.pageToken === 'page3') {
      result = {
        animals: ['wolf'],
        nextPageToken: null,
      };
    }
    callback(null, result);
  }

  // Default call settings work for us here:
  const settings = new gax.CallSettings();

  // We define a page descriptor that defines request and response fields that
  // are used for pagination. In the request object, it's `nextPageToken`;
  // in response object, it's `pageToken` and `animals` (which is a resource
  // field, i.e. the only response field that the user actually needs).
  const pageDescriptor = new gax.PageDescriptor(
    /* requestPageTokenField: */ 'pageToken',
    /* responsePageTokenField: */ 'nextPageToken',
    /* resourceField: */ 'animals',
  );

  // Create API call:
  const wrappedFunction = gax.createApiCall(
    /* func: */ doStuff,
    /* settings: */ settings,
    /* descriptor: */ pageDescriptor,
  );

  // Call it!
  const [resources] = await wrappedFunction({request: 'empty'});
  console.log(resources);

  // Alternatively, call it using async iterators!
  const iterable = pageDescriptor.asyncIterate(wrappedFunction, {
    request: 'empty',
  });
  const asyncResources = [];
  for await (const resource of iterable) {
    asyncResources.push(resource);
  }
  console.log(asyncResources);
}

main().catch(console.error);
// [END gax_pagination]
