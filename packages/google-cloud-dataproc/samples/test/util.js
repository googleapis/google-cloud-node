// Copyright 2020 Google LLC
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

// ML tests frequently run into concurrency and quota issues, for which
// retrying with a backoff is a good strategy:
module.exports = {
  async delay(test) {
    const retries = test.currentRetry();
    if (retries === 0) return; // no retry on the first failure.
    // see: https://cloud.google.com/storage/docs/exponential-backoff:
    const ms = Math.pow(2, retries) * 1000 + Math.random() * 2000;
    return new Promise(done => {
      console.info(`retrying "${test.title}" in ${ms}ms`);
      setTimeout(done, ms);
    });
  },
};
