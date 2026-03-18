/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import {before, after, describe, it} from 'mocha';
import fs from 'fs';
import * as gcbuild from 'gcbuild';
import {v2, CloudFunctionsServiceClient} from '@google-cloud/functions';
import * as path from 'path';
import {promisify} from 'util';
import {execSync} from 'child_process';
import {request} from 'gaxios';

const copy = promisify(fs.copyFile);
const pkg = require('../../package.json'); // eslint-disable-line

let gcf: CloudFunctionsServiceClient;
let gcfV2: v2.FunctionServiceClient;
let projectId: string;
const shortPrefix = 'gcloud-tests';
const randomUUID = () =>
  globalThis.crypto?.randomUUID() || require('crypto').randomUUID();
const fullPrefix = `${shortPrefix}-${randomUUID().split('-')[0]}`;

describe('gcp metadata', () => {
  before(async () => {
    // pack up the gcp-metadata module and copy to the target dir
    await packModule();
    gcf = new CloudFunctionsServiceClient();
    gcfV2 = new v2.FunctionServiceClient();
    projectId = await gcf.auth.getProjectId();
    console.log(`Using Project ID: ${projectId}`);
    console.log(`Function Name: ${fullPrefix}`);
  });

  describe('cloud functions', () => {
    before(async () => {
      // Clean up any old cloud functions just hanging out
      await pruneFunctions(false);

      // deploy the function to GCF
      await deployApp();
    });

    it('should access the metadata service on GCF', async () => {
      // Fetch the function metadata
      const name = `projects/${projectId}/locations/us-central1/functions/${fullPrefix}`;
      const [func] = await gcfV2.getFunction({name});

      // 2nd Gen URLs are stored in serviceConfig.uri
      const url = func.serviceConfig?.uri;

      if (!url) {
        throw new Error(
          `Could not find URI for function: ${fullPrefix}. Is it a Gen 2 function?`,
        );
      }

      console.log(`Verifying Gen 2 function via logs: ${fullPrefix}`);

      // Poll for the log entry
      let found = false;
      const maxRetries = 20;
      const filter = `resource.type="cloud_run_revision" AND resource.labels.service_name="${fullPrefix}" AND textPayload:"GCF_METADATA_CHECK"`;
      const cmd = `gcloud logging read '${filter}' --project=${projectId} --format="json" --limit=5`;

      console.log(`Polling for logs with command: ${cmd}`);

      for (let i = 0; i < maxRetries; i++) {
        process.stdout.write('.');
        try {
          const output = execSync(cmd).toString();
          const logs = JSON.parse(output);
          if (logs && logs.length > 0) {
            console.log('\nFound log entries:');
            console.dir(logs, {depth: null});
            const latestLog = logs[0].textPayload;
            assert.ok(
              latestLog.includes('isAvailable=true'),
              `Metadata check failed: ${latestLog}`,
            );
            found = true;
            break;
          }
        } catch (e) {
          console.error(`\nError reading logs: ${(e as any).message}`);
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      if (!found) {
        throw new Error(
          `Could not find GCF_METADATA_CHECK log entry for ${fullPrefix} after ${maxRetries} retries.`,
        );
      }
      console.log('\nSuccessfully verified metadata access via logs.');
    });

    after(() => pruneFunctions(true));
  });

  describe('cloud build', () => {
    it('should access the metadata service on GCB', async () => {
      const result = await gcbuild.build({
        sourcePath: path.join(
          __dirname,
          '../../system-test/fixtures/cloudbuild',
        ),
      });
      console.log(result.log);
      assert.ok(/isAvailable: true/.test(result.log));
      assert.ok(
        result.log.includes('"default":{"aliases":["default"],"email"'),
      );
    });
  });
});

/**
 * Delete all cloud functions created in the project by this
 * test suite. It can delete ones created in this session, and
 * also delete any of them created > 7 days ago by tests.
 * @param sessionOnly Only prune functions created in this session.
 */
async function pruneFunctions(sessionOnly: boolean) {
  console.log('Pruning leaked functions...');
  const [fns] = await gcfV2.listFunctions({
    parent: `projects/${projectId}/locations/-`,
  });
  await Promise.all(
    fns
      .filter((fn: any) => {
        if (sessionOnly) {
          return fn.name!.includes(fullPrefix);
        }
        const updateDate = ((fn.updateTime?.seconds as number) || 0) * 1000;
        const currentDate = Date.now();
        const minutesSinceUpdate = (currentDate - updateDate) / 1000 / 60;
        return minutesSinceUpdate > 60 && fn.name!.includes(shortPrefix);
      })
      .map(async (fn: any) => {
        await gcfV2.deleteFunction({name: fn.name}).catch((e: any) => {
          console.error(`There was a problem deleting function ${fn.name}.`);
          console.error(e);
        });
      }),
  );
}

/**
 * Deploy the hook app to GCF.
 */
async function deployApp() {
  const targetDir = path.join(__dirname, '../../system-test/fixtures/hook');
  const files = fs.readdirSync(targetDir);
  console.log(`Files to package: ${files.join(', ')}`);

  console.log(`PATH: ${process.env.PATH}`);
  try {
    const whichGcloud = execSync('which gcloud').toString().trim();
    console.log(`Using gcloud at: ${whichGcloud}`);
  } catch (e) {
    console.error('gcloud CLI not found in PATH');
  }

  console.log(
    `Deploying function ${fullPrefix} from ${targetDir} using gcloud...`,
  );
  const cmd =
    `gcloud functions deploy ${fullPrefix} ` +
    '--gen2 ' +
    '--region=us-central1 ' +
    '--runtime=nodejs20 ' +
    `--source=${targetDir} ` +
    '--entry-point=getMetadata ' +
    '--ingress-settings=internal-only ' +
    '--allow-unauthenticated ' +
    '--trigger-http ' +
    `--project=${projectId} ` +
    '--quiet';

  try {
    execSync(cmd, {stdio: 'inherit'});
    console.log(`Successfully deployed ${fullPrefix}`);
  } catch (error) {
    console.error(`Deployment failed: ${(error as any).message}`);
    throw error;
  }
}

/**
 * Runs `npm pack` on the root directory, and copies the resulting
 * `gcp-metadata.tgz` over to the target directories in fixtures.
 */
async function packModule() {
  execSync('npm pack', {stdio: 'inherit'});
  const from = `${pkg.name}-${pkg.version}.tgz`;
  const targets = ['hook', 'cloudbuild'];
  await Promise.all(
    targets.map(target => {
      const to = `system-test/fixtures/${target}/${pkg.name}.tgz`;
      return copy(from, to);
    }),
  );
}
