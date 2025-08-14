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
import {initialGenerateReadMe, readAndWriteToReadme} from '../generate-readme';
import { write } from 'fs';
export interface CliArgs {
  'library-path': string;
  'initial-generation'?: boolean;
  'destination-path'?: string;
  'release-level'?: string;
  'string-to-replace'?: string;
  'replacement-string'?: string; 
  'replacement-string-samples'?: string;
  'replacement-string-release-level'?: string;
}
export const generateReadme: yargs.CommandModule<{}, CliArgs> = {
  command: 'generate-readme',
  describe: 'Combines the versions for a given API into a single library',
  builder(yargs) {
    return yargs
      .option('library-path', {
        describe: 'path in which a pre-combined library lives',
        type: 'string',
        demand: true,
      })
      .option('initial-generation', {
        describe: 'path in which a pre-combined library lives; defaults to false',
        type: 'boolean',
      })
      .option('destination-path', {
        describe: 'path where to copy over the library',
        type: 'string',
      })
      .option('release-level', {
        describe:
          'what is the release level of the library (default is preview)',
        type: 'string',
      })
      .option('string-to-replace', {
        describe:
          'string to replace in the readme',
        type: 'string',
      })
      .option('replacement-string-samples', {
        describe:
          'string to replace with the string-to-replace for the samples table in the readme (only used with initial generation)',
        type: 'string',
      })
      .option('replacement-string-release-level', {
        describe:
          'string to replace with the string-to-replace for the releaseLevel in the readme (only used with initial generation)',
        type: 'string',
      })

  },
  async handler(argv: CliArgs) {
    const writeDestination = argv['destination-path'] || argv['library-path'];
    if (argv['initial-generation']) {
       if (!argv['replacement-string-samples'] || !argv['replacement-string-release-level']) {
            throw new Error('Initial readme generation was selected, but no string to replace the samples table and/or the release level was given')
        }
       await initialGenerateReadMe({currentLibrary: argv['library-path'], stringToReplaceForSampleTable: argv['replacement-string-samples'], stringToReplaceForReleaseLevel: argv['replacement-string-release-level'], releaseLevel: argv['release-level'], writeLibrary: writeDestination});
    } else {
        if (!argv['string-to-replace'] || !argv['replacement-string']) {
            throw new Error('Post-initial generate readme was selected, but no string to replace/replacement was given')
        }
        await readAndWriteToReadme(argv['library-path'], argv['string-to-replace'], argv['replacement-string'], writeDestination);
    }
  },
};
