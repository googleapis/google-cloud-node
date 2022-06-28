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

// This is currently unused code to help us run the linter on the samples
// after they've been converted. At the moment, we're expecting that the
// easiest way to do this is to run the linter within the project itself.

import {exec} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import loggers from './loggers.js';
import {Sample} from './samples.js';

class ErrorWithOutput extends Error {
  error: Error | null;
  stdout: string;
  stderr: string;

  constructor(error: Error | null, stdout: string, stderr: string) {
    super();
    this.error = error;
    this.stdout = stdout;
    this.stderr = stderr;
  }
}

function execPromise(cmd: string, args: string[]): Promise<string[]> {
  const finalCmd = [cmd, ...args].map(s => `"${s}"`).join(' ');
  return new Promise<string[]>((resolve, reject) => {
    function cb(error: Error | null, stdout: string | Buffer, stderr: string | Buffer) {
      if (error) {
        reject(new ErrorWithOutput(error, stdout.toString(), stderr.toString()));
      } else {
        resolve([stdout.toString(), stderr.toString()]);
      }
    }
    exec(finalCmd, {}, cb);
  });
}

function dirName(): string {
  return path.dirname(fileURLToPath(import.meta.url));
}


export async function cleanSamples(samples: AsyncIterable<Sample>): Promise<void> {
  for await (const s of samples) {
    // Dig deeply into gts.
    const command = path.join(dirName(), '..', 'node_modules', 'eslint', 'bin', 'eslint.js');

    try {
      /*const results = await execPromise('node', [command, '--fix', s.filename]);
      if (results[0]) {
        loggers.verbose(s.filename, results[0]);
      } else {*/
        loggers.step('Generated', s.filename);
      //}
    } catch (e) {
      loggers.error(e);
    }
  }
}
