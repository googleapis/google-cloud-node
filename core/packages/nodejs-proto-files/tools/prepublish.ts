// Copyright 2020 Google LLC
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
import {promisify} from 'util';
import * as fs from 'fs';
import * as got from 'got';
import * as path from 'path';

const protoFolders = ['google', 'grafeas', 'gapic'];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DecompressZip = require('decompress-zip');

const extract = (input, opts, callback) => {
  const output = Math.random() + '.zip';

  (got as unknown as got.Got)
    .stream(input)
    .on('error', callback)
    .pipe(fs.createWriteStream(output))
    .on('error', callback)
    .on('finish', () => {
      const unzipper = new DecompressZip(output);

      unzipper
        .on('error', callback)
        .extract({
          strip: opts.strip,
          filter: file => {
            if (opts.filter && !opts.filter(file)) return;
            return path.extname(file.filename) === '.proto';
          },
        })
        .on('extract', () => {
          fs.unlink(output, callback);
        });
    });
};

const extractAsync = promisify(extract);
const execAsync = promisify(require('child_process').exec);

async function main() {
  await execAsync(`rm -rf ${protoFolders.join(' ')}`);

  await extractAsync(
    'https://github.com/googleapis/googleapis/archive/master.zip',
    {
      strip: 1,
    },
  );

  await extractAsync('https://github.com/google/protobuf/archive/main.zip', {
    strip: 2,
    filter: file => {
      return (
        file.parent.indexOf('protobuf-main') === 0 &&
        file.parent.indexOf('protobuf-main/src/') === 0 &&
        file.parent.indexOf('/internal') === -1 &&
        file.filename.indexOf('unittest') === -1 &&
        file.filename.indexOf('test') === -1
      );
    },
  });

  await execAsync(
    '[ -d "overrides" ] && cp -R overrides/* google || echo "no overrides"',
  );
}

main().catch(console.error);
