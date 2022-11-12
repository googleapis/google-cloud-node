/**
 * Copyright 2022 Google LLC
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

'use strict';

const {execFileSync} = require('child_process');
const path = require('path');

/**
 * Runs a sample and returns its output
 *
 * @param {string} sample name of sample to run. No need for '.js' suffix.
 * @param {string[]} args the arguments to pass to the sample
 * @returns {string} output of the command
 */
async function runSample(sample, args = []) {
  return execFileSync('node', [`${sample}.js`, ...args], {
    encoding: 'utf-8',
    cwd: path.join(__dirname, '..', '..'),
  });
}

module.exports = {
  runSample,
};
