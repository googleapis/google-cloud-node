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

'use strict';

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const nativeDir = __dirname;
const goDir = path.join(nativeDir, 'spanner-go');
const prebuiltAddon = path.join(nativeDir, 'build', 'Release', 'spanner_go.node');
const prebuiltIpcAddon = path.join(
  nativeDir,
  'build',
  'Release',
  'spanner_ipc.node',
);
const sidecarName =
  process.platform === 'win32' ? 'spanner-go-sidecar.exe' : 'spanner-go-sidecar';
const prebuiltSidecar = path.join(goDir, sidecarName);
const goLibName =
  process.platform === 'darwin'
    ? 'libspanner_go.dylib'
    : process.platform === 'win32'
      ? 'spanner_go.dll'
      : 'libspanner_go.so';
const prebuiltGoLib = path.join(goDir, goLibName);
const stampFile = path.join(nativeDir, 'build', 'Release', '.platform');
const currentStamp = `${process.platform}-${process.arch}-${process.versions.modules}`;

if (
  process.env.SPANNER_FORCE_NATIVE_REBUILD !== 'true' &&
  fs.existsSync(prebuiltAddon) &&
  fs.existsSync(prebuiltGoLib) &&
  (process.platform === 'win32' ||
    (fs.existsSync(prebuiltIpcAddon) && fs.existsSync(prebuiltSidecar))) &&
  (!fs.existsSync(stampFile) ||
    fs.readFileSync(stampFile, 'utf8').trim() === currentStamp)
) {
  process.exit(0);
}

try {
  execSync('./build.sh', {cwd: goDir, stdio: 'inherit'});
  execSync('npx --no-install node-gyp rebuild', {
    cwd: nativeDir,
    stdio: 'inherit',
  });
  fs.writeFileSync(stampFile, currentStamp, 'utf8');
} catch (err) {
  console.warn(
    '[spanner-native] Optional Go shared core build skipped:',
    err && err.message ? err.message : err,
  );
}
