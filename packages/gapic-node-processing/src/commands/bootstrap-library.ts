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
import {compileVars, getDistributionName} from '../get-bootstrap-template-vars';
import {compileTemplates} from '../templating';
import * as path from 'path';
import {Octokit} from '@octokit/rest';
import * as cp from 'child_process';
import * as fs from 'fs';
import yaml from 'js-yaml';

const BOOTSTRAP_TEMPLATES_PATH = path.resolve(
  __dirname,
  '../../../templates/bootstrap-templates',
);

export interface CliArgs {
  'api-id': string;
  'mono-repo-name': string;
  'destination-folder': string;
  'folder-name': string;
  'service-config-path': string;
}

export interface ServiceConfig {
  name: string;
  title: string;
  apis: {name: string}[];
  publishing: {
    api_short_name: string;
    github_label: string;
    documentation_uri: string;
    launch_stage: string;
  };
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
      .option('folder-name', {
        describe: 'name of directory of the package',
        type: 'string',
        demand: true,
      })
      .option('service-config-path', {
        describe: 'path for the service configuration file',
        type: 'string',
        demand: true,
      });
  },
  /**
   * Yargs command handler for bootstrapping a library.
   *
   * @param {CliArgs} argv - The command line arguments.
   */
  async handler(argv: CliArgs) {
    const octokit = new Octokit();
    const distributionName = await getDistributionName(
      octokit,
      argv['api-id'],
      cp.execSync,
    );

    const serviceConfig = yaml.load(
      fs.readFileSync(argv['service-config-path'], 'utf8'),
    ) as ServiceConfig;

    const bootstrapVars = await compileVars(
      argv,
      serviceConfig,
      distributionName,
    );

    await compileTemplates(
      BOOTSTRAP_TEMPLATES_PATH,
      argv['destination-folder'],
      bootstrapVars,
    );
  },
};
