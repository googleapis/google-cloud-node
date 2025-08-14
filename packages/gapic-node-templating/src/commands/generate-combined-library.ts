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

import yargs = require('yargs');
import {combineLibraries} from '../combine-libraries';
import {generateIndexTs} from '../generate-index';
import {initialGenerateReadMe} from '../generate-readme';
export interface CliArgs {
  'library-path': string;
  'default-version'?: string;
  'destination-path'?: string; 
}
export const generateCombinedLibraries: yargs.CommandModule<{}, CliArgs> = {
  command: 'combine-library',
  describe: 'Combines the versions for a given API into a single library',
  builder(yargs) {
    return yargs
      .option('library-path', {
        describe: 'path in which a pre-combined library lives',
        type: 'string',
        demand: true,
      })
      .option('destination-path', {
        describe: 'path where to copy over the library',
        type: 'string',
      })
      .option('default-version', {
        describe:
          'what is the default version of the library (default is highest)',
        type: 'string',
      })
  },
  async handler(argv: CliArgs) {
    const writeDestination = argv['destination-path'] || argv['library-path'];
    console.log(
      `Combining libraries in ${argv['library-path']} ${argv['destination-path'] ? `to ${argv['destination-path']}` : ''}`,
    );
    try {
      await combineLibraries(argv['library-path'], writeDestination);
    } catch (err) {
      if (!(err as any).message.includes('Unexpected library format')) {
        throw err;
      }
    }
    console.log(
      `Generating index.ts in ${writeDestination}`,
    );
    await generateIndexTs(
      writeDestination,
      argv['default-version'],
    );
  },
};
