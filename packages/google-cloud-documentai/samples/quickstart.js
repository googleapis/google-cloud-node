/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * DESCRIBE WHAT THIS SAMPLE DOES.
 * @param {string} LIST EXPECTED ARGUMENTS.
 */
async function main() {
  // [START LIBRARY_NAME_quickstart]
  async function batchProcessDocument() {
    const {
      DocumentUnderstandingServiceClient,
    } = require('@google-cloud/documentai');
    const client = new DocumentUnderstandingServiceClient();
    // TODO: write sample here that demonstrates batch processing of documents.
    console.info(client);
  }
  // [END LIBRARY_NAME_quickstart]
  await batchProcessDocument();
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
