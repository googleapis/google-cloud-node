// Copyright 2025 Google LLC
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

const {execSync} = require('child_process');
const path = require('path');
const fs = require('fs');

const packageRoot = __dirname;
const utilDir = path.join(packageRoot, 'src', 'util');

try {
  execSync('npm install', {cwd: packageRoot, stdio: 'inherit'});

  const tscPath = path.join(packageRoot, 'node_modules', '.bin', 'tsc');
  execSync(`${tscPath} src/util/storage_control_utils.ts`, {
    cwd: packageRoot,
    stdio: 'inherit',
  });

  execSync('node storage_control_utils.js', {cwd: utilDir, stdio: 'inherit'});

  const files = fs.readdirSync(utilDir);
  for (const file of files) {
    if (file.endsWith('.js')) {
      fs.unlinkSync(path.join(utilDir, file));
    }
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}
