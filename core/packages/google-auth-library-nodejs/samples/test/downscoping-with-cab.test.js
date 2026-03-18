// Copyright 2021 Google LLC
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

// Prerequisites:
// Make sure to run the setup in samples/scripts/downscoping-with-cab-setup.js
// and copy the logged constant strings (bucketName, objectName1 and
// objectName2) into this file before running this test suite.
// Once that is done, this test can be run indefinitely.
//
// The only requirement for this test suite to run is to set the environment
// variable GOOGLE_APPLICATION_CREDENTIALS to point to the same service account
// keys used in the setup script.

const cp = require('child_process');
const {assert} = require('chai');
const {describe, it} = require('mocha');
const {promisify} = require('util');

const exec = promisify(cp.exec);
// Copy values from the output of samples/scripts/downscoping-with-cab-setup.js.
// GCS bucket name.
const bucketName = 'cab-int-bucket-brd3qlsuok';
// GCS object name.
const objectName = 'cab-first-"brd3qlsuok.txt';

/**
 * Runs the provided command using asynchronous child_process.exec.
 * Unlike execSync, this works with another local HTTP server running in the
 * background.
 * @param {string} cmd The actual command string to run.
 * @param {*} opts The optional parameters for child_process.exec.
 * @return {Promise<string>} A promise that resolves with a string
 *   corresponding with the terminal output.
 */
const execAsync = async (cmd, opts) => {
  const {stdout, stderr} = await exec(cmd, opts);
  return stdout + stderr;
};

describe('samples for downscoping with cab', () => {
  // TODO: un-skip once storage is migrated: https://github.com/googleapis/nodejs-storage/pull/2592
  it.skip('should have access to the object specified in the cab rule', async () => {
    const output = await execAsync(`${process.execPath} downscopedclient`, {
      env: {
        ...process.env,
        // GCS bucket name environment variable.
        BUCKET_NAME: bucketName,
        // GCS object name environment variable.
        OBJECT_NAME: objectName,
      },
    });

    // Confirm expected script output.
    assert.match(output, /Successfully retrieved file/);
    assert.match(output, /first/);
  });
});
