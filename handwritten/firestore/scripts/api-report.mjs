/*
  Copyright 2024 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { execaNode } from 'execa';
import fs from 'fs-extra';
import { join } from 'path';
import { createRequire } from 'module';

async function apiReport(opts) {
  const cwd = opts.cwd;

  // Location of the created API report file.
  // This file should be checked in.
  const outputDir = join(cwd, 'api-report');
  await fs.ensureDir(outputDir);

  console.log(outputDir);

  // Create API Extractor config file for the package.
  // This config extends the API Extractor config file
  // used by Cloud RAD, to ensure the base configuration
  // is the sme.
  const apiExtractorConfig = {
    extends: join(opts.cloudRadApiExtractorConfigPath),
    mainEntryPointFilePath: join(cwd, 'build', 'types', 'src', 'index.d.ts'),
    projectFolder: cwd,
    docModel: {
      enabled: false,
    },
    apiReport: {
      enabled: true,
      reportFolder: outputDir,
    },
    dtsRollup: {
      enabled: false,
    },
    messages: {
      extractorMessageReporting: {
        'ae-forgotten-export': {
          logLevel: 'warning',
        },
        'ae-unresolved-link': {
          // Error on unresolved link because this can
          // lead to a bad user experience when reading docs.
          logLevel: 'error'
        },
        'ae-extra-release-tag': {
          // @internal tag is used for TSDoc
          // @private tag is used for JSDoc
          // TODO: Suppress this warning until we drop JSDoc.
          logLevel: 'none'
        }
      },
      tsdocMessageReporting: {
        'tsdoc-param-tag-missing-hyphen': {
          // TSDoc and JSDoc use different formats for param tags.
          // TSDoc works fine without the hypen, and JSDoc does not use it.
          // TODO: Suppress this warning until we drop JSDoc.
          logLevel: 'none',
          "addToApiReportFile": false
        }
      }
    },
  };
  const apiExtractorConfigPath = join(cwd, 'api-extractor.json');
  await fs.writeFile(
    apiExtractorConfigPath,
    JSON.stringify(apiExtractorConfig, null, 2),
  );

  // Run API Extractor
  const apiExtractorCmd = join(
    process.cwd(),
    'node_modules',
    '.bin',
    'api-extractor',
  );
  await withLogs(execaNode)(apiExtractorCmd, ['run', '--local']);

  // Cleanup
  await fs.remove(apiExtractorConfigPath);

  return outputDir;
}

function withLogs(execaFn) {
  return async function (cmd, args, cwd) {
    const opts = {cwd};

    opts.stdout = process.stdout;
    opts.stderr = process.stderr;

    return execaFn(cmd, args, opts);
  };
}

const require = createRequire(import.meta.url);
apiReport({
  cloudRadApiExtractorConfigPath: require.resolve(
    '@google-cloud/cloud-rad/api-extractor.json',
  ),
  cwd: process.cwd(),
})
  .then(outputDir => {
    console.log(`SUCCESS: API Report written to ${outputDir}`);
  })
  .catch(err => {
    console.log(`FAILED: ${err}`);
  });
