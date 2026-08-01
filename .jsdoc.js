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

import fs from 'fs';
import path from 'path';

let systemName = '';
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (pkg.name) {
      systemName = pkg.name;
    }
  } catch (err) {
    // Ignore invalid JSON or read errors
  }
}

const include = [];
if (fs.existsSync(path.join(process.cwd(), 'build/src'))) {
  include.push('build/src');
} else if (fs.existsSync(path.join(process.cwd(), 'build/esm/src'))) {
  include.push('build/esm/src');
} else if (fs.existsSync(path.join(process.cwd(), 'build/cjs/src'))) {
  include.push('build/cjs/src');
} else if (fs.existsSync(path.join(process.cwd(), 'src'))) {
  include.push('src');
} else {
  include.push('build/src');
}

if (fs.existsSync(path.join(process.cwd(), 'protos'))) {
  include.push('protos');
} else if (fs.existsSync(path.join(process.cwd(), 'build/protos'))) {
  include.push('build/protos');
}

export const opts = {
  readme: './README.md',
  package: './package.json',
  template: './node_modules/jsdoc-fresh',
  recurse: true,
  verbose: true,
  destination: './docs/',
};

export const plugins = ['plugins/markdown', 'jsdoc-region-tag'];

export const source = {
  excludePattern: '(^|\\/|\\\\)[._]',
  include,
  includePattern: '\\.(js|cjs|mjs)$',
};

export const templates = {
  copyright: 'Copyright 2026 Google LLC',
  includeDate: false,
  sourceFiles: false,
  systemName,
  theme: 'lumen',
  default: {
    outputSourceFiles: false,
  },
};

export const markdown = {
  idInHeadings: true,
};

export default {
  opts,
  plugins,
  source,
  templates,
  markdown,
};
