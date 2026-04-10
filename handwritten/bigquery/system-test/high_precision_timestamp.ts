// Copyright 2026 Google LLC
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

import {describe, before, after} from 'mocha';
import * as path from 'path';

// This file registers a second run of the BigQuery system tests with picosecond support enabled.
// It uses targeted cache clearing to ensure the library and tests are re-initialized with the
// 'BIGQUERY_PICOSECOND_SUPPORT' environment variable set.

const originalValue = process.env.BIGQUERY_PICOSECOND_SUPPORT;

/**
 * Helper to clear the require cache for all files within the current package.
 */
function clearPackageCache() {
  // Find the root of the current package by looking for package.json
  const packageJsonPath = require.resolve('../../package.json');
  const packageDir = path.dirname(packageJsonPath);

  Object.keys(require.cache).forEach(key => {
    if (key.startsWith(packageDir) && !key.includes('node_modules')) {
      delete require.cache[key];
    }
  });
}

// 1. REGISTRATION PHASE:
// Set the environment variable and clear the cache so that the subsequent 'require'
// of the system test file (and any library files it imports) sees the updated state.
process.env.BIGQUERY_PICOSECOND_SUPPORT = 'true';
clearPackageCache();

describe('BigQuery System Tests (High Precision)', () => {
  // 2. EXECUTION PHASE:
  // Mocha runs 'before' hooks before the tests in the required file are executed.
  before(() => {
    process.env.BIGQUERY_PICOSECOND_SUPPORT = 'true';
    // We don't clear cache here as it's too late for Mocha's registration phase,
    // but we ensure the env var is set for any execution-time checks.
  });

  after(() => {
    if (originalValue === undefined) {
      delete process.env.BIGQUERY_PICOSECOND_SUPPORT;
    } else {
      process.env.BIGQUERY_PICOSECOND_SUPPORT = originalValue;
    }
  });

  describe('Run all tests', () => {
    // Wrap all the other tests in a describe block to ensure the entire file is
    // executed when the environment variable is set to true.

    // Programmatically require the tests. Mocha will discover and register them inside this 'describe' block.
    require('./bigquery');
    require('./timestamp_output_format');
  });
});

// 3. CLEANUP:
// Restore the environment variable after the registration phase to minimize side effects on other test files.
if (originalValue === undefined) {
  delete process.env.BIGQUERY_PICOSECOND_SUPPORT;
} else {
  process.env.BIGQUERY_PICOSECOND_SUPPORT = originalValue;
}
