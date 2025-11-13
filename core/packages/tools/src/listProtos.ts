#!/usr/bin/env node

/**
 * Copyright 2020 Google LLC
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

// This script populates src/protosList.json that is then loaded in src/grpc.ts.

import * as fs from 'fs';
import * as path from 'path';
import * as walk from 'walkdir';

async function main(directory: string) {
  const googleProtoFilesDir = path.join(directory, 'protos');
  const outputFile = path.join(directory, 'src', 'protosList.json');
  const commonProtoFiles = walk
    .sync(googleProtoFilesDir)
    .filter(f => path.extname(f) === '.proto')
    .map(f => f.match(/protos\/(.*)/)![1]);

  fs.writeFileSync(
    outputFile,
    JSON.stringify(commonProtoFiles, null, 2) + '\n',
  );
}
/**
 * Shows the usage information.
 */
function usage() {
  console.log(`Usage: node ${process.argv[1]} directory ...`);
}

if (require.main === module) {
  if (process.argv.length < 3 || process.argv[2] === '--help') {
    usage();
  }
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main(process.argv[2]);
}
