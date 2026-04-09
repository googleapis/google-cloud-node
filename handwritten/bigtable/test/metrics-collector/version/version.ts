// Copyright 2026 Google LLC
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

// eslint-disable-next-line n/no-extraneous-import
import {describe} from 'mocha';
import {execSync} from 'node:child_process';

describe('Bigtable/CSMVersion', () => {
  it('Fetches the right client side metrics version', async () => {
    execSync('cd test/metrics-collector/version && node get-version-script');
  });
});
