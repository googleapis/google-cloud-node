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

export interface CliArgsReadme {
  'source-path': string;
  'initial-generation'?: boolean;
  'destination-path'?: string;
  'release-level'?: string;
  'string-to-replace'?: string;
  'replacement-string'?: string;
  'replacement-string-samples'?: string;
  'replacement-string-release-level'?: string;
}

const DEFAULT_REPLACEMENT_STRING_SAMPLES = '[//]: # "samples"';
const DEFAULT_REPLACEMENT_STRING_RELEASE_LEVEL = '[//]: # "releaseLevel"';

function validateCliArgs(argv: CliArgsReadme) {
  if (
    !argv['initial-generation'] &&
    (!argv['string-to-replace'] || !argv['replacement-string'])
  ) {
    throw new Error(
      'Post-initial generate readme was selected, but no string to replace/replacement was given',
    );
  }
  if (argv['initial-generation'] && !argv['release-level']) {
    console.log(
      'No release level was selected for initial generation; will generate with preview',
    );
  }
}

function getReplacementStringSamples(argv: CliArgsReadme) {
  const stringToReplaceForSampleTable = argv['replacement-string-samples'];
  if (argv['initial-generation'] && !stringToReplaceForSampleTable) {
    console.log(
      'Initial readme generation was selected, but no string to replace the samples table was given. ' +
        'Will use \'[//]: # "samples"\'',
    );
    return DEFAULT_REPLACEMENT_STRING_SAMPLES;
  }
  return stringToReplaceForSampleTable;
}

function getReplacementStringReleaseLevel(argv: CliArgsReadme) {
  const stringToReplaceForReleaseLevel =
    argv['replacement-string-release-level'];
  if (argv['initial-generation'] && !stringToReplaceForReleaseLevel) {
    console.log(
      'Initial readme generation was selected, but no string to replace the release level was given. ' +
        'Will use \'[//]: # "releaseLevel"\'',
    );
    return DEFAULT_REPLACEMENT_STRING_RELEASE_LEVEL;
  }
  return stringToReplaceForReleaseLevel;
}

function generateArgsForInitialReadme(
  argv: CliArgsReadme,
  writeDestination: string,
) {
  const stringToReplaceForSampleTable = getReplacementStringSamples(argv);
  const stringToReplaceForReleaseLevel = getReplacementStringReleaseLevel(argv);
  return {
    currentLibrary: argv['source-path'],
    stringToReplaceForSampleTable: stringToReplaceForSampleTable!,
    stringToReplaceForReleaseLevel: stringToReplaceForReleaseLevel!,
    releaseLevel: argv['release-level'],
    writeLibrary: writeDestination,
  };
}

/**
 * Command module for bootstrapping a library.
 *
 * This module defines a yargs command to generate a README.md
 */
export const generateReadme: yargs.CommandModule<{}, CliArgsReadme> = {
  command: 'generate-readme',
  describe: 'Combines the versions for a given API into a single library',
  builder(yargs) {
    return yargs
      .option('source-path', {
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
   * source-path: path in which a pre-combined library lives
   * destination-path: path where to copy over the library
   * initial-generation: path in which a pre-combined library lives; defaults to false
   * release-level: what is the release level of the library (default is preview)
   * string-to-replace: string to replace in the readme
   * replacement-string-samples: string to replace with the string-to-replace for the samples table in the readme (only used with initial generation)
   * replacement-string-release-level: string to replace with the string-to-replace for the releaseLevel in the readme (only used with initial generation)
   */
  async handler(argv: CliArgsReadme) {
    const destinationPath = argv['destination-path'] || argv['source-path'];
    validateCliArgs(argv);
    if (argv['initial-generation']) {
      const args = generateArgsForInitialReadme(argv, destinationPath);
      console.log(`Generating initial readme with ${JSON.stringify(args)}`);
      await initialGenerateReadMe(args);
    } else {
      // validateCliArgs will confirm these strings exist
      await readAndWriteToReadme(
        argv['source-path'],
        argv['string-to-replace']!,
        argv['replacement-string']!,
        destinationPath,
      );
    }
  },
};
