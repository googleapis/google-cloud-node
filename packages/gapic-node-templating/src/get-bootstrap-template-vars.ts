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

import {CliArgs} from './commands/bootstrap-library';
import {Storage} from '@google-cloud/storage';
import {Octokit} from 'octokit';
import {join, parse} from 'path';
import ChildProcess from 'child_process';
import {writeFileSync} from 'fs';
import yaml from 'js-yaml';
import { parsed } from 'yargs';

const LANGUAGE = 'nodejs';

export interface GHFile {
  content: string | undefined;
}

export interface GHDir {
  name: string
}

export interface ServiceYaml {
  apis: {
    name: string
  }[]
}

function isFile(file: GHFile | GHDir[]): file is GHFile {
  return (file as GHFile).content !== undefined;
}
export interface TemplateVars {
  // API name as it shows in path
  name: string;
  // API name pretty
  namePretty: string;
  // URL for product documentation
  productDocumentation: string;
  // Language for library
  language: string;
  // Distribution name in npm
  distributionName: string;
  // Mono repo name (for parent library)
  monoRepoName: string;
  // API ID
  apiId: string;
  // API Path
  apiPath: string;
  // API Path with dashes
  apiPathDashes: string;
  // version in API ID, will be used as default_version
  version: string;
  // service name of the api
  serviceName: string;
}

export interface DriftApi {
  // API name as it shows in path
  api_shortname: string;
  // API name pretty
  display_name: string;
  // URL to get docs from
  docs_root_url: string;
  // Launch stage of API
  launch_stage: string;
}
export interface DriftMetadata {
  // API name as it shows in path
  apiShortName: string;
  // API name pretty
  displayName: string;
  // URL to get docs from
  docsRootUrl: string;
  // Launch stage of API
  launchStage: string;
}

export async function getDriftMetadata(
  argv: CliArgs,
  storageClient: Storage
): Promise<DriftMetadata> {
  const bucket = 'devrel-prod-settings';
  const file = 'apis.json';
  const contents = await storageClient.bucket(bucket)?.file(file)?.download();
  if (!contents) {
    throw new Error('apis.json downloaded from Cloud Storage was empty');
  }
  const apis = JSON.parse(contents.toString()).apis;
  return getApiInfo(apis, argv['api-id']);
}

export function getApiInfo(apis: DriftApi[], apiId: string): DriftMetadata {
  const shortName = apiId.split('.')[apiId.split('.').length - 2];
  for (const api of apis) {
    if (api.api_shortname?.includes(shortName)) {
      return {
        apiShortName: shortName,
        displayName: api.display_name,
        docsRootUrl: api.docs_root_url,
        launchStage: api.launch_stage,
      };
    }
  }

  return {
    apiShortName: shortName,
    displayName: '',
    docsRootUrl: '',
    launchStage: '',
  };
}

export async function getDistributionName(
  octokit: Octokit,
  apiId: string,
  execSync: typeof ChildProcess.execSync
) {
  const path = apiId.toString().replace(/\./g, '/');

  const file = await octokit.rest.repos.getContent({
    owner: 'googleapis',
    repo: 'googleapis',
    path: `${path}/BUILD.bazel`,
  });

  const bazelLocation = join(__dirname, 'BUILD.bazel');
  if (isFile((file as any).data)) {
    writeFileSync(
      bazelLocation,
      Buffer.from((file as any).data.content, 'base64').toString('utf8')
    );
  }

  const packageName = execSync(
    `/go/bin/buildozer 'print package_name' ${bazelLocation}:%nodejs_gapic_library`
  )
    .toString('utf8')
    .replace('\n', '');
  execSync(`rm -rf ${bazelLocation}`);

  return packageName;
}

export async function getServiceName(
  octokit: Octokit,
  apiId: string,
) {
  let path = apiId.toString().replace(/\./g, '/');

  const dir = (await octokit.rest.repos.getContent({
    owner: 'googleapis',
    repo: 'googleapis',
    path: `${path}`,
  })).data as GHDir[];

  for (const file of dir) {
    if (file.name.endsWith('.yaml')) {
      path = `${path}/${file.name}`
    }
  }

  console.log(path)

  const yamlFile = (await octokit.rest.repos.getContent({
    owner: 'googleapis',
    repo: 'googleapis',
    path,
  })).data;


  let parsedYaml;
  if (isFile((yamlFile as any))) {
    console.log('hello!')
    parsedYaml = yaml.load(Buffer.from((yamlFile as any).content, 'base64').toString('utf8'));
  }

  let serviceName = '';
  console.log(parsedYaml)
  for (const api of (parsedYaml as ServiceYaml)?.apis) {
    if (api.name.endsWith('Service')) {
      serviceName = api.name.split('.')[api.name.split('.').length - 1]
    }
  }

  return serviceName;
}

export async function compileVars(
  argv: CliArgs,
  driftMetadata: DriftMetadata,
  distributionName: string,
  serviceName: string
): Promise<TemplateVars> {
  return {
    name: driftMetadata.apiShortName,
    namePretty: driftMetadata.displayName,
    productDocumentation: driftMetadata.docsRootUrl,
    language: LANGUAGE,
    distributionName,
    monoRepoName: argv['mono-repo-name'],
    apiId: argv['api-id'],
    apiPath: getApiPath(argv['api-id']),
    apiPathDashes: getApiPathWithDashes(argv['api-id']),
    version: getVersion(argv['api-id']),
    serviceName
  };
}

export function getApiPath(apiId: string) {
  return apiId.replace(/\.v.*/, '').replace(/\./g, '/');
}

export function getApiPathWithDashes(apiId: string) {
  return apiId.replace(/\.v.*/, '').replace(/\./g, '-');
}

export function getVersion(apiId: string) {
  return apiId.split('.')[apiId.split('.').length - 1];
}
