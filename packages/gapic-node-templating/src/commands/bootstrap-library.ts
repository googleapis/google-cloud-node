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
import {
  compileVars,
  getDistributionName,
  getDriftMetadata,
} from '../get-bootstrap-template-vars';
import {compileTemplates} from '../templating';
import * as path from 'path';
import {Storage} from '@google-cloud/storage';
import {Octokit} from 'octokit';

const BOOTSTRAP_TEMPLATES_PATH = path.resolve(
  __dirname,
  '../../../templates/bootstrap-templates'
);

export interface CliArgs {
  'api-id': string;
  'mono-repo-name': string;
  'destination-folder': string;
  'github-token': string;
}

export const bootstrapLibrary: yargs.CommandModule<{}, CliArgs> = {
  command: 'bootstrap-library',
  describe: 'Compiles the templates required for a bare-bones Node library',
  builder(yargs) {
    return yargs
      .option('api-id', {
        describe: 'api ID to generate a library for',
        type: 'string',
        demand: true,
      })
      .option('mono-repo-name', {
        describe: 'monorepo',
        type: 'string',
        demand: true,
      })
      .option('destination-folder', {
        describe: 'where to copy over the files',
        type: 'string',
        demand: true,
      })
      .option('github-token', {
        describe: 'temporary github token',
        type: 'string',
        demand: true,
      });
  },
  async handler(argv: CliArgs) {
    const distributionName = await getDistributionName(
      new Octokit({auth: argv['github-token']}),
      argv['api-id']
    );
    const driftMetadata = await getDriftMetadata(argv, new Storage());
    const bootstrapVars = await compileVars(
      argv,
      driftMetadata,
      distributionName
    );

    await compileTemplates(
      BOOTSTRAP_TEMPLATES_PATH,
      argv['destination-folder'],
      bootstrapVars
    );
  },
};
