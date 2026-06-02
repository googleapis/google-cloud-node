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

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const testDir = process.argv[2];
if (!testDir) {
  console.error('Error: Please specify the test directory.');
  process.exit(1);
}

const absoluteTestDir = path.resolve(testDir);
if (!fs.existsSync(absoluteTestDir)) {
  console.error(`Error: Directory ${absoluteTestDir} does not exist.`);
  process.exit(1);
}

// Find all test files matching gapic_*.js
const files = fs.readdirSync(absoluteTestDir)
  .filter(fn => fn.match(/^gapic_.*\.js$/))
  .map(fn => path.join(testDir, fn));

if (files.length === 0) {
  console.log('No test files found matching gapic_*.js');
  process.exit(0);
}

// Batch size 20 is extremely safe and fits within 1.5GB of memory
const batchSize = 20; 
let exitCode = 0;

for (let i = 0; i < files.length; i += batchSize) {
  const batch = files.slice(i, i + batchSize);
  console.log(`\n--- Running batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(files.length / batchSize)} (${batch.length} files) ---`);
  
  // We resolve the config path relative to the package directory
  const result = spawnSync('npx', ['mocha', '--config', '../../.mocharc.cjs', '--no-parallel', ...batch], {
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error(`\nBatch failed with exit code ${result.status}`);
    exitCode = result.status || 1;
  }
}

process.exit(exitCode);
