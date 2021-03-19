// Copyright 2020 Google LLC
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

'use strict';

// sample-metadata:
//   title: Storage Configure Bucket Cors.
//   description: Configures bucket cors.
//   usage: node configureBucketCors.js <BUCKET_NAME> <MAX_AGE_SECONDS> <METHOD> <ORIGIN> <RESPONSE_HEADER>

function main(
  bucketName = 'my-bucket',
  maxAgeSeconds = 3600,
  method = 'POST',
  origin = 'http://example.appspot.com',
  responseHeader = 'content-type'
) {
  // [START storage_cors_configuration]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The origin for this CORS config to allow requests from
  // const origin = 'http://example.appspot.com';

  // The response header to share across origins
  // const responseHeader = 'Content-Type';

  // The maximum amount of time the browser can make requests before it must
  // repeat preflighted requests
  // const maxAgeSeconds = 3600;

  // The name of the method
  // See the HttpMethod documentation for other HTTP methods available:
  // https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/urlfetch/HTTPMethod
  // const method = 'GET';

  async function configureBucketCors() {
    await storage.bucket(bucketName).setCorsConfiguration([
      {
        maxAgeSeconds,
        method: [method],
        origin: [origin],
        responseHeader: [responseHeader],
      },
    ]);

    console.log(`Bucket ${bucketName} was updated with a CORS config
        to allow ${method} requests from ${origin} sharing 
        ${responseHeader} responses across origins`);
  }

  configureBucketCors().catch(console.error);
  // [END storage_cors_configuration]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
