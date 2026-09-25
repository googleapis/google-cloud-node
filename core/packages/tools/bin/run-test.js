#!/usr/bin/env node

// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');
const fs = require('fs');

// Resolve bin/run-test.cjs from the monorepo root
let current = __dirname;
let runTestPath;
while (current !== path.dirname(current)) {
  const candidate = path.join(current, 'bin', 'run-test.cjs');
  if (fs.existsSync(candidate)) {
    runTestPath = candidate;
    break;
  }
  current = path.dirname(current);
}

if (!runTestPath) {
  runTestPath = path.resolve(__dirname, '../../../../bin/run-test.cjs');
}

require(runTestPath);
