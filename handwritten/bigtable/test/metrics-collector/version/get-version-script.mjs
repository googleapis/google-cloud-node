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

// eslint-disable-next-line n/no-missing-import
import BigtablePkg from '../../../build/src/index.js';
// eslint-disable-next-line n/no-missing-import
import ConfigManagerPkg from '../../../build/src/client-side-metrics/metrics-config-manager.js';
import verifyVersion from './verify-version.js';

const {Bigtable} = BigtablePkg;
const {ClientSideMetricsConfigManager} = ConfigManagerPkg;
const {verifyMetricsVersion} = verifyVersion;

verifyMetricsVersion({
  Bigtable,
  ClientSideMetricsConfigManager,
}).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
