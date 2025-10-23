#!/usr/bin/env node

// Copyright 2022 Google LLC
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

// Minifies proto JSON files under `build/`.

import {promises as fsp} from 'fs';
import * as path from 'path';
import * as uglify from 'uglify-js';

async function minifyFile(filename: string, isJs: boolean) {
  const content = (await fsp.readFile(filename)).toString();
  let options;
  if (isJs) {
    options = {
      expression: false,
    };
  } else {
    options = {
      expression: true,
      compress: false, // we need to keep it valid JSON
      output: {quote_keys: true},
    };
  }
  const output = uglify.minify(content, options as uglify.MinifyOptions);
  if (output.error) {
    throw output.error;
  }
  await fsp.writeFile(filename, output.code);
}

export async function main(directory?: string) {
  const buildDir = directory ?? path.join(process.cwd(), 'build', 'protos');
  const files = await fsp.readdir(buildDir);
  const jsonFiles = files.filter(file => file.match(/\.json$/));
  for (const jsonFile of jsonFiles) {
    console.log(`Minifying ${jsonFile}...`);
    await minifyFile(path.join(buildDir, jsonFile), false);
  }
  const jsFiles = files.filter(file => file.match(/\.js$/));
  for (const jsFile of jsFiles) {
    console.log(`Minifying ${jsFile}...`);
    await minifyFile(path.join(buildDir, jsFile), true);
  }
  console.log('Minified all proto JS and JSON files successfully.');
}

function usage() {
  console.log(`Usage: node ${process.argv[1]} [directory]`);
  console.log(
    'Minifies all JSON files in-place in the given directory (non-recursively).',
  );
  console.log(
    'If no directory is given, minifies JSON files in ./build/protos.',
  );
}

if (require.main === module) {
  // argv[0] is node.js binary, argv[1] is script path

  if (process.argv[2] === '--help') {
    usage();
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main(process.argv[2]);
}
