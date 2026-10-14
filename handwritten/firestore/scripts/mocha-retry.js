// Copyright 2026 Google LLC
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

// Mocha root hook plugin, loaded by .mocharc.js when TEST_RETRIES is set. Mocha
// reports a test that passes on a retry as a plain pass, so log the retries to
// keep flaky tests visible.

exports.mochaHooks = {
  beforeEach() {
    const test = this.currentTest;
    // 0 on a test's first attempt, so anything higher means this is a retry.
    const retry = test.currentRetry();
    if (retry > 0) {
      console.log(
        `  [retry] attempt ${retry + 1}/${test.retries() + 1}: ${test.fullTitle()}`,
      );
    }
  },
};
