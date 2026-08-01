#!/usr/bin/env node
// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const budget = require('../bundle-budget.json');

console.log('⚡ Running Automated Presubmit Bundle Size Verification Check...');

const tmpDir = path.join(__dirname, '../.tmp-bundle-check');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

const entrypoint = path.join(tmpDir, 'test_bundle_input.js');
const outfile = path.join(tmpDir, 'test_bundle_out.min.js');

fs.writeFileSync(entrypoint, `
const { Firestore } = require('../build/src/index');
const f = new Firestore();
console.log(f);
`, 'utf8');

try {
  // Execute esbuild bundling and minification
  execSync(`npx esbuild --bundle --platform=node --target=node18 --minify ${entrypoint} --outfile=${outfile}`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });

  const stats = fs.statSync(outfile);
  const sizeKB = (stats.size / 1024).toFixed(2);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n📦 Minified Bundle Output Size: ${sizeKB} KB (${sizeMB} MB)`);
  console.log(`🎯 Target Baseline Budget: ${(budget.serverless_minimal_bundle.target_minified_bytes / (1024 * 1024)).toFixed(2)} MB`);

  if (stats.size > budget.serverless_minimal_bundle.max_minified_bytes_undeduped) {
    console.error(`❌ ERROR: Bundle size (${sizeMB} MB) exceeds maximum threshold! Check imported subpaths for unintended regressions.`);
    process.exit(1);
  } else {
    console.log('✅ Presubmit Bundle Size Guard: PASSED!');
  }
} finally {
  if (fs.existsSync(tmpDir)) {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}
