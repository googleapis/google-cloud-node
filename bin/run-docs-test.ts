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

import * as path from 'path';
import * as fs from 'fs';
import { LinkChecker, CheckOptions } from 'linkinator';

// Resolve the target directory (either process.cwd() or passed as a CLI argument)
const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const packageName = path.basename(targetDir);

// 1. Base skips shared by all packages
const baseSkips = [
  'https://codecov.io/gh/googleapis/',
  'www.googleapis.com',
  'img.shields.io',
  'https://console.cloud.google.com/cloudshell',
  'https://support.google.com'
];

// 2. Package-specific overrides
const overrides: Record<string, Partial<CheckOptions>> = {
  'spanner': {
    skip: [
      ...baseSkips,
      '^https://github\\.com/googleapis/nodejs-spanner/blob/[^/]+/samples/.*'
    ]
  },
  'storage': {
    concurrency: 10,
    skip: [
      ...baseSkips,
      'node_modules/',
      'CHANGELOG.md'
    ]
  },
  'google-auth-library-nodejs': {
    concurrency: 10,
    retryErrorsCount: 3,
    retryErrorsJitter: 5,
    skip: [
      ...baseSkips,
      'http://169.254.169.254/latest/api/token%22',
      'https://github.com/googleapis/google-auth-library-nodejs/blob/'
    ]
  },
  'bigquery': {
    concurrency: 10,
    skip: [
      ...baseSkips,
      'http://goo.gl/f2SXcb'
    ]
  },
  'cloud-profiler': {
    concurrency: 10,
    skip: [
      ...baseSkips,
      'circleci.com/gh/googleapis/cloud-profiler-nodejs'
    ]
  },
  'gax': {
    concurrency: 1,
    skip: [
      ...baseSkips,
      'docs/js/menu-wc_es5.js'
    ]
  },
  'promisify': {
    concurrency: 10,
    skip: [
      ...baseSkips,
      'docs/js/menu-wc_es5.js'
    ]
  },
  'retry-request': {
    skip: [
      ...baseSkips,
      '/logo.png'
    ]
  },
  'pack-n-play': {
    concurrency: 10,
    retryErrorsCount: 3
  }
};

// Check a single package directory
async function checkPackage(packagePath: string): Promise<boolean> {
  const name = path.basename(packagePath);
  const checker = new LinkChecker();
  
  const packageConfig: CheckOptions = {
    path: path.join(packagePath, 'docs'),
    recurse: true,
    silent: true,
    concurrency: 5,
    retry: true,
    retryErrors: true,
    retryErrorsCount: 5,
    retryErrorsJitter: 3000,
    skip: [...baseSkips]
  };
  
  if (overrides[name]) {
    Object.assign(packageConfig, overrides[name]);
  }
  
  console.log(`Running linkinator on ${name}/docs...`);
  try {
    const result = await checker.check(packageConfig);
    if (!result.passed) {
      console.error(`\nLink checks failed in ${name}:`);
      result.links
        .filter(x => x.state === 'BROKEN')
        .forEach(x => console.error(`  [${x.status}] ${x.url} (from ${x.parent})`));
      return false;
    }
    console.log(`Link checks passed successfully for ${name}.`);
    return true;
  } catch (err) {
    console.error(`Error running Linkinator for ${name}:`, err);
    return false;
  }
}

// Main execution function
async function run() {
  // If run at monorepo root and no argument is passed, check all packages
  if (packageName === 'google-cloud-node' && !process.argv[2]) {
    console.log('No package specified. Scanning all packages in monorepo...');
    const parentDirs = ['packages', 'handwritten'];
    const packagePaths: string[] = [];
    
    for (const dir of parentDirs) {
      const fullDir = path.join(targetDir, dir);
      if (fs.existsSync(fullDir)) {
        const items = fs.readdirSync(fullDir);
        for (const item of items) {
          const itemPath = path.join(fullDir, item);
          if (fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'docs'))) {
            packagePaths.push(itemPath);
          }
        }
      }
    }
    
    console.log(`Found ${packagePaths.length} packages to check.\n`);
    let allPassed = true;
    const failedPackages: string[] = [];
    
    for (const pPath of packagePaths) {
      const passed = await checkPackage(pPath);
      if (!passed) {
        allPassed = false;
        failedPackages.push(path.basename(pPath));
      }
      console.log('--------------------------------------------------');
    }
    
    if (!allPassed) {
      console.error(`\nLink checks failed for the following packages: ${failedPackages.join(', ')}`);
      process.exit(1);
    } else {
      console.log('\nAll link checks passed successfully!');
      process.exit(0);
    }
  } else {
    const passed = await checkPackage(targetDir);
    process.exit(passed ? 0 : 1);
  }
}

run();
