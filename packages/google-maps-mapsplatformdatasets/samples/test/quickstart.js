// Copyright 2022 Google LLC
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

const assert = require('assert');
const path = require('path');
const cp = require('child_process');
const {describe, it} = require('mocha');
// const {describe, it, before} = require('mocha');
// // Imports the Mapsplatformdatasets library
// const {MapsPlatformDatasetsV1AlphaClient} =
//   require('@google-cloud/mapsplatformdatasets').v1alpha;
// // Instantiates a client
// const mapsplatformdatasetsClient = new MapsPlatformDatasetsV1AlphaClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

describe('Quickstart', () => {
  // let projectId;

  // before(async () => {
  //   projectId = await mapsplatformdatasetsClient.getProjectId();
  // });

  it('should run quickstart', async () => {
    // NOTE: This API does not yet support project ID (vs. just project number)
    // We should use projectId once they do.
    // DEVELOPER: change this to your project number when running locally.
    const output = execSync('node ./quickstart.js projects/1046198160504', {
      cwd,
    });
    assert(output !== null);
  });
});
