#!/usr/bin/env node
/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

const fs = require('fs');
const path = require('path');
const { spawnSync, execSync } = require('child_process');

const GO_BENCH_DIR = path.join(__dirname, 'go-bench');
const GO_PROFILE_BIN = path.join(GO_BENCH_DIR, 'spanner_go_profile');

function ensureBinary() {
  if (!fs.existsSync(GO_PROFILE_BIN)) {
    console.log('Compiling Go Spanner profile binary...');
    execSync('./build.sh', {
      cwd: GO_BENCH_DIR,
      stdio: 'inherit',
    });
  }
}

function main() {
  ensureBinary();

  // Forward all CLI flags to the Go profiler binary
  const args = process.argv.slice(2).map(arg => {
    // Translate --arg=val or --arg to -arg
    if (arg.startsWith('--')) {
      return '-' + arg.slice(2);
    }
    return arg;
  });

  const res = spawnSync(GO_PROFILE_BIN, args, {
    cwd: path.resolve(__dirname),
    stdio: 'inherit',
    env: process.env,
  });

  process.exit(res.status || 0);
}

main();
