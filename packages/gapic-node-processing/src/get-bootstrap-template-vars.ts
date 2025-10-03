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

import {CliArgs, ServiceConfig} from './commands/bootstrap-library';
import {Octokit} from '@octokit/rest';
import {join} from 'path';
import ChildProcess from 'child_process';
import {writeFileSync} from 'fs';

const LANGUAGE = 'nodejs';

const MIXINS = [
  'google.cloud.location.Locations',
  'google.iam.v1.IAMPolicy',
  'google.longrunning.Operations',
];

export interface GHFile {
  content: string | undefined;
}

export interface GHDir {
  name: string;
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
  // hostname of the api (googleapis.com)
  hostName: string;
  // folder name in google-cloud-node for API
  folderName: string;
}

export async function getDistributionName(
  octokit: Octokit,
  apiId: string,
  execSync: typeof ChildProcess.execSync,
) {
  const path = apiId.toString().replace(/\./g, '/');

  const file = await octokit.rest.repos.getContent({
    owner: 'googleapis',
    repo: 'googleapis',
    path: `${path}/BUILD.bazel`,
  });

  const bazelLocation = join(__dirname, 'BUILD.bazel');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (isFile((file as any).data)) {
    writeFileSync(
      bazelLocation,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Buffer.from((file as any).data.content, 'base64').toString('utf8'),
    );
  }

  const packageName = execSync(
    `/go/bin/buildozer 'print package_name' ${bazelLocation}:%nodejs_gapic_library`,
  )
    .toString('utf8')
    .replace('\n', '');
  execSync(`rm -rf ${bazelLocation}`);

  return packageName;
}

export async function compileVars(
  argv: CliArgs,
  serviceConfig: ServiceConfig,
  distributionName: string,
): Promise<TemplateVars> {
  return {
    name: serviceConfig.publishing.api_short_name,
    namePretty: serviceConfig.title,
    productDocumentation: serviceConfig.publishing.documentation_uri,
    language: LANGUAGE,
    distributionName,
    monoRepoName: argv['mono-repo-name'],
    apiId: argv['api-id'],
    apiPath: getApiPath(argv['api-id']),
    apiPathDashes: getApiPathWithDashes(argv['api-id']),
    version: getVersion(argv['api-id']),
    serviceName: getServiceName(serviceConfig),
    hostName: serviceConfig.name,
    folderName: argv['folder-name'],
  };
}

export function getServiceName(serviceConfig: ServiceConfig) {
  let serviceName = '';
  if (serviceConfig?.apis) {
    for (const api of serviceConfig?.apis ?? []) {
      if (!MIXINS.includes(api.name)) {
        serviceName = api.name.split('.')[api.name.split('.').length - 1];
      }
    }
  }

  return serviceName;
}

export function getApiPath(apiId: string) {
  return apiId.replace(/\.v.*/, '').replace(/\./g, '/');
}

export function getApiPathWithDashes(apiId: string) {
  return apiId.replace(/\.v[0-9].*/, '').replace(/\./g, '-');
}

/**
 * Gets the version from the API ID.
 *
 * @param {string} apiId - The API ID.
 * @returns {string} The version.
 */
export function getVersion(apiId: string) {
  return apiId.split('.')[apiId.split('.').length - 1];
}
