/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

if (!process.env.GCLOUD_TESTS_PROJECT_ID &&
    !process.env.GCLOUD_TESTS_KEY) {
  var error = ['To run the regression tests, you need to set the value of some environment variables.',
    'Please check the README for instructions.'
  ].join('\n');
  throw error;
}

module.exports = {
  projectId: process.env.GCLOUD_TESTS_PROJECT_ID,
  keyFilename: process.env.GCLOUD_TESTS_KEY
};
