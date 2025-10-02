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
import {CloudFunctionsServiceClient} from '@google-cloud/functions';
import * as path from 'path';
import {promisify} from 'util';
import {execSync} from 'child_process';
import {request} from 'gaxios';

const loadGcx = () => import('gcx');

const copy = promisify(fs.copyFile);
const pkg = require('../../package.json'); // eslint-disable-line

let gcf: CloudFunctionsServiceClient;
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
    projectId = await gcf.auth.getProjectId();
  });

  describe('cloud functions', () => {
    before(async () => {
      // Clean up any old cloud functions just hanging out
      await pruneFunctions(false);

      // deploy the function to GCF
      await deployApp();
      // cloud functions now require authentication by default, see:
      // https://cloud.google.com/functions/docs/release-notes
      await gcf.setIamPolicy({
        resource: `projects/${projectId}/locations/us-central1/functions/${fullPrefix}`,
        policy: {
          bindings: [
            {members: ['allUsers'], role: 'roles/cloudfunctions.invoker'},
          ],
        },
      });
    });

    it('should access the metadata service on GCF', async () => {
      const url = `https://us-central1-${projectId}.cloudfunctions.net/${fullPrefix}`;
      const res = await request<{isAvailable: boolean}>({url});
      console.dir(res.data);
      assert.strictEqual(res.data.isAvailable, true);
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
  const [fns] = await gcf.listFunctions({
    parent: `projects/${projectId}/locations/-`,
  });
  await Promise.all(
    fns
      .filter(fn => {
        if (sessionOnly) {
          return fn.name!.includes(fullPrefix);
        }
        const updateDate = ((fn.updateTime?.seconds as number) || 0) * 1000;
        const currentDate = Date.now();
        const minutesSinceUpdate = (currentDate - updateDate) / 1000 / 60;
        return minutesSinceUpdate > 60 && fn.name!.includes(shortPrefix);
      })
      .map(async fn => {
        await gcf.deleteFunction({name: fn.name}).catch(e => {
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
  const gcx = await loadGcx();
  await gcx.deploy({
    name: fullPrefix,
    entryPoint: 'getMetadata',
    triggerHTTP: true,
    runtime: 'nodejs18',
    region: 'us-central1',
    targetDir,
  });
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
