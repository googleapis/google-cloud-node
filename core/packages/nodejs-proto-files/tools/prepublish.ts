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
import {pipeline} from 'stream';
import * as tar from 'tar';

const protoFolders = ['google', 'grafeas', 'gapic'];

const pipelineAsync = promisify(pipeline);
const execAsync = promisify(require('child_process').exec);

const extractAsync = async (input, opts) => {
  const output = Math.random() + '.tar.gz';

  try {
    await pipelineAsync(
      (got as unknown as got.Got).stream(input),
      fs.createWriteStream(output),
    );

    await tar.extract({
      file: output,
      strip: opts.strip,
      filter: (filePath: string) => {
        const file = {
          parent: path.dirname(filePath),
          filename: path.basename(filePath),
        };
        if (opts.filter && !opts.filter(file)) return false;
        return path.extname(file.filename) === '.proto';
      },
    });
  } finally {
    await fs.promises.unlink(output).catch(err => {
      if (err.code !== 'ENOENT') throw err;
    });
  }
};

async function main() {
  await execAsync(`rm -rf ${protoFolders.join(' ')}`);

  await extractAsync(
    'https://github.com/googleapis/googleapis/archive/master.tar.gz',
    {
      strip: 1,
    },
  );

  await extractAsync('https://github.com/google/protobuf/archive/main.tar.gz', {
    strip: 2,
    filter: file => {
      return (
        file.parent.startsWith('protobuf-main/src/') &&
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
