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
import * as cp from 'child_process';
import { API_ID } from '../../test/bootstrap-library.test';


export interface CliArgs {
  'package-path': string;
  'api-id': string;
}

export interface IncomingLibraryStructure {
  versions: IndividualLibraryStructure;
}

export interface IndividualLibraryStructure {
    protos: {google: {cloud: {apiId: {version: string[]}}} },
    samples: {generated: {version: string[]}},
    src: {version: string[]},
    systemTest: {fixtures: {sample: {src: string[]}}, install: string},
    test: string[],
}
export const bootstrapLibrary: yargs.CommandModule<{}, CliArgs> = {
  command: 'combine-library',
  describe: 'Combines the versions for a given API into a single library',
  builder(yargs) {
    return yargs
      .option('api-id', {
        describe: 'api ID to generate a library for',
        type: 'string',
        demand: true,
      })
      .option('package-path', {
        describe: 'path in which to generate the combined library',
        type: 'string',
        demand: true,
      });
  },
  async handler(argv: CliArgs) {
    await combineLibraries(
      argv['api-id'],
      argv['package-path']
    );
  },
};
