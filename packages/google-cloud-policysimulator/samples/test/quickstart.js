// Copyright 2023 Google LLC
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

'use strict';

// const assert = require('assert');
// const path = require('path');
// const cp = require('child_process');
const {describe, it, before} = require('mocha');
// const {SimulatorClient} = require('@google-cloud/policysimulator').v1;
// const policysimulatorClient = new SimulatorClient();

// const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

// const cwd = path.join(__dirname, '..');

describe('Quickstart', () => {
  // let projectId;

  before(async () => {
    // projectId = await policysimulatorClient.getProjectId();
  });

  it('should run quickstart', async () => {
    // Skipping this test since it requires creating resources, which makes
    // the test more likely to be flaky
    //   const output = execSync(
    //     `node ./quickstart.js projects/${projectId}/locations/global/replays/`,
    //     {cwd}
    //   );
    // assert(output !== null);
  });
});
