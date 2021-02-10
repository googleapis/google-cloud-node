// Copyright 2021 Google LLC
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

// Simple test runner for unit tests - there are so many generated unit tests
// they don't fit into one mocha invocation

import {readdir} from 'fs';
import {join} from 'path';
import {spawn} from 'child_process';
import {promisify} from 'util';
const readdirp = promisify(readdir);

function spawnp(command: string, parameters: string[]) {
  return new Promise<void>((resolve, reject) => {
    const proc = spawn(command, parameters, {
      stdio: ['inherit', 'inherit', 'inherit'],
    });
    proc.on('exit', code => {
      if (code === 0) {
        resolve();
      }
      reject();
    });
  });
}

const testDir = join('.', 'build', 'test');
const runCommand = 'node';
const runParameters = ['./node_modules/mocha/bin/mocha'];
const batchSize = 2;

async function runBatch(batch: string[]) {
  const parameters = [...runParameters, ...batch];
  console.log(`${runCommand} ${parameters.join(' ')}`);
  await spawnp(runCommand, parameters);
}

async function main() {
  const files = await readdirp(testDir);
  const jsFiles = files.filter(fn => fn.match(/^gapic_.*\.js$/));

  const batch: string[] = [];
  for (const file of jsFiles) {
    batch.push(join(testDir, file));
    if (batch.length >= batchSize) {
      await runBatch(batch);
      batch.splice(0);
    }
  }

  if (batch.length > 0) {
    await runBatch(batch);
    batch.splice(0);
  }
}

main().catch(() => {
  process.exitCode = 1;
});
