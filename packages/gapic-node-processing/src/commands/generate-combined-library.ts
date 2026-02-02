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
import {combineLibraries} from '../combine-libraries';
import {generateIndexTs} from '../generate-index';
import {LibraryConfig} from '../library';

export interface CliArgs {
  'source-path': string;
  'default-version'?: string;
  'destination-path'?: string;
  'is-esm'?: boolean;
}

/**
 * Command module for bootstrapping a library.
 *
 * This module defines a yargs command to combine a library when all individual
 * libraries are generated
 */
export const generateCombinedLibraries: yargs.CommandModule<{}, CliArgs> = {
  command: 'combine-library',
  describe: 'Combines the versions for a given API into a single library',
  builder(yargs) {
    return yargs
      .option('source-path', {
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
      .option('is-esm', {
        describe: 'is the library an ESM library',
        type: 'boolean',
      });
  },

  /**
   * Yargs command handler for generating a combined library.
   *
   * @param {CliArgs} argv - The command line arguments
   * source-path: path in which a pre-combined library lives
   * destination-path: path where to copy over the library
   * default-version: what is the default version of the library (default is highest)
   */
  async handler(argv: CliArgs) {
    // Since we're 'transforming' a library, we're going to assume that the user wants to overwrite the library
    // unless otherwise specified
    const destinationPath = argv['destination-path'] || argv['source-path'];
    const library = new LibraryConfig({
      sourcePath: argv['source-path'],
      destinationPath,
      defaultVersion: argv['default-version'],
      isEsm: argv['is-esm'],
    });
    await library.initialize();
    console.log(library);
    console.log(
      `Combining libraries in ${argv['source-path']} ${argv['destination-path'] ? `to ${argv['destination-path']}` : ''}`,
    );
    try {
      await combineLibraries(library);
    } catch (err) {
      if (!(err as any).message.includes('Unexpected library format')) {
        throw err;
      } else {
        console.warn(err);
      }
    }
    console.log(`Generating index.ts in ${destinationPath}`);
    await generateIndexTs(
      library.destinationPath,
      library.versions,
      library.defaultVersionAndClients,
      library.isEsm,
      library.srcPath,
    );
  },
};
