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

import * as fsp from 'fs/promises';
import * as path from 'path';
import Mocha from 'mocha';

const testDirectory = path.join('.', 'typescript', 'test', 'unit');

async function main() {
  const mocha = new Mocha();

  const files = await fsp.readdir(testDirectory);
  const tests = files.filter(file => file.endsWith('.js'));
  for (const test of tests) {
    mocha.addFile(path.join(process.cwd(), testDirectory, test));
  }
  await mocha.loadFilesAsync();
  mocha.run((failures: number) => {
    process.exitCode = failures;
  });
}

main().catch(err => {
  throw err;
});
