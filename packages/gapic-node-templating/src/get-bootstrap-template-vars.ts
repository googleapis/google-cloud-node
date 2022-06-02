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
const LANGUAGE = 'nodejs';

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
  // API Version
  version: string;
}

export interface DriftMetadata {
  // API name as it shows in path
  apiShortName: string;
  // API name pretty
  displayName: string;
  // Default/latest version
  version: string;
  // URL to get docs from
  docsRootUrl: string;
  // Launch stage of API
  launchStage: string;
}

export async function getDriftMetadata(argv: CliArgs): Promise<DriftMetadata> {
  return {
    apiShortName: 'apiShortName',
    displayName: 'displayName',
    version: 'version',
    docsRootUrl: 'docsRootUrl',
    launchStage: 'launchStage',
  };
}

export function compileVars(
  argv: CliArgs,
  driftMetadata: DriftMetadata
): TemplateVars {
  return {
    name: driftMetadata.apiShortName,
    namePretty: driftMetadata.displayName,
    productDocumentation: driftMetadata.docsRootUrl,
    language: LANGUAGE,
    distributionName: argv['distribution-name'],
    monoRepoName: getMonoRepoName(argv['mono-repo-name']),
    apiId: argv['api-id'],
    apiPath: getApiPath(argv['api-id']),
    apiPathDashes: getApiPathWithDashes(argv['api-id']),
    version: getVersion(argv['api-id']),
  };
}

// // TODO: Put this into the BUILD file where the protos are generated
// export function getDistributionName(apiShortName: string, apiPretty: string) {
//   const namesToFind = apiPretty.toLowerCase().split(/\s/g);
//   const distributionNamePrefix = '@google-cloud/';
//   let distributionName: string | undefined;

//   let matches = false;
//   // Sometimes the API Name Pretty contains extra words (i.e., Analytics Hub API vs. analyticshub)
//   // But we can't tell the delimiters from just analyticshub
//   // So we need to match and use that to create a kebab case name
//   for (const name in namesToFind) {
//     if (apiShortName.match(RegExp(name)) && matches === false) {
//       distributionName = name;
//       matches = true;
//     } else if (apiShortName.match(RegExp(name))) {
//       distributionName!.concat(`-${name}`);
//     }
//   }

//   // Sometimes the API Pretty name and the API short name have nothing in common, i.e.,
//   // Key Management Service and KMS
//   if (distributionName === undefined) {
//     distributionName = apiShortName;
//   }

//   return distributionNamePrefix.concat(distributionName);
// }

export function getApiPath(apiId: string) {
  return apiId.replace(/\.v.*/, '').replace(/\./g, '/');
}

export function getApiPathWithDashes(apiId: string) {
  return apiId.replace(/\.v.*/, '').replace(/\./g, '-');
}

export function getVersion(apiId: string) {
  return apiId.split('.')[apiId.split('.').length - 1];
}

export function getMonoRepoName(monoRepo: string) {
  // Want the repo name in the form of googleapis/google-cloud-node
  const regexRepoName = /[^.@:][a-z-]*?\/[a-z-]*[^.@:]/;
  return monoRepo.match(regexRepoName)![0] ?? monoRepo;
}
