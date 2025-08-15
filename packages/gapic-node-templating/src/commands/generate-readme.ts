// Copyright 2025 Google LLC
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

/**
 * Command module for bootstrapping a library.
 *
 * This module defines a yargs command to generate a README.md
 */
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
        describe:
          'path in which a pre-combined library lives; defaults to false',
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
        describe: 'string to replace in the readme',
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
      });
  },

  /**
   * Yargs command handler for generating a combined library.
   *
   * @param {CliArgs} argv - The command line arguments
   * library-path: path in which a pre-combined library lives
   * destination-path: path where to copy over the library
   * initial-generation: path in which a pre-combined library lives; defaults to false
   * release-level: what is the release level of the library (default is preview)
   * string-to-replace: string to replace in the readme
   * replacement-string-samples: string to replace with the string-to-replace for the samples table in the readme (only used with initial generation)
   * replacement-string-release-level: string to replace with the string-to-replace for the releaseLevel in the readme (only used with initial generation)
   */
  async handler(argv: CliArgs) {
    const writeDestination = argv['destination-path'] || argv['library-path'];
    let stringToReplaceForSampleTable = argv['replacement-string-samples'];
    let stringToReplaceForReleaseLevel =
      argv['replacement-string-release-level'];
    if (argv['initial-generation']) {
      if (!argv['replacement-string-samples']) {
        console.log(
          'Initial readme generation was selected, but no string to replace the samples table and/or the release level was given' +
            'Will use [//]: # "samples"',
        );
        stringToReplaceForSampleTable = '[//]: # "samples"';
      }
      if (!argv['replacement-string-release-level']) {
        console.log(
          'Initial readme generation was selected, but no string to replace the samples table and/or the release level was given' +
            'Will use [//]: # "releaseLevel"',
        );
        stringToReplaceForReleaseLevel = '[//]: # "releaseLevel"';
      }
      if (!argv['release-level']) {
        console.log(
          'No release level was selected for initial generation; will generate with preview',
        );
      }
      const args = {
        currentLibrary: argv['library-path'],
        stringToReplaceForSampleTable: stringToReplaceForSampleTable!,
        stringToReplaceForReleaseLevel: stringToReplaceForReleaseLevel!,
        releaseLevel: argv['release-level'],
        writeLibrary: writeDestination,
      };
      console.log(`Generating initial readme with ${JSON.stringify(args)}`);
      await initialGenerateReadMe(args);
    } else {
      if (!argv['string-to-replace'] || !argv['replacement-string']) {
        throw new Error(
          'Post-initial generate readme was selected, but no string to replace/replacement was given',
        );
      }
      await readAndWriteToReadme(
        argv['library-path'],
        argv['string-to-replace'],
        argv['replacement-string'],
        writeDestination,
      );
    }
  },
};
