/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

if (
  fs.existsSync(
    path.join(__dirname, '..', 'test', 'winston-2', 'node_modules', 'winston')
  )
) {
  process.exit(0);
}

let proc;
if (process.env.npm_execpath) {
  proc = spawn(
    process.env.NODE || 'node',
    [process.env.npm_execpath, 'install'],
    {cwd: path.join(__dirname, '..', 'test', 'winston-2'), stdio: 'inherit'}
  );
} else {
  proc = spawn('npm', ['install'], {
    cwd: path.join(__dirname, '..', 'test', 'winston-2'),
    stdio: 'inherit',
  });
}

proc.on('close', code => {
  process.exit(code || 0);
});
