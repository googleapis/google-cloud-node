// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {after, describe, it} from 'mocha';
import {Bigtable} from '../src';

// INSTRUCTIONS FOR RUNNING TEST:
// 1. Change describe.skip to describe.only below.
// 2. Reassign process.env.GOOGLE_APPLICATION_CREDENTIALS to local key file.
// 3. Reassign UNIVERSE_DOMAIN_CONSTANT to the universe domain to test.
// 4. Run `npm run system-test`.

describe.skip('Universe domain tests', () => {
  // These tests are only designed to pass when using the service account
  // credentials for the universe domain environment so we skip them in the CI pipeline.
  //
  // To see successful tests, uncomment the following line:
  // process.env.GOOGLE_APPLICATION_CREDENTIALS = '/path/to/key.json';
  const UNIVERSE_DOMAIN_CONSTANT = 'my-universe-domain';

  async function runTest(done: Mocha.Done, bigtable: Bigtable) {
    try {
      const instance = bigtable.instance(instanceId);
      const table = instance.table(tableId);

      // Create the instance if it doesn't exist:
      const [instanceInfo] = await instance.exists();
      if (!instanceInfo) {
        const [, operation] = await instance.create({
          clusters: {
            id: 'fake-cluster3',
            location: 'u-us-prp1-a',
            nodes: 1,
          },
        });
        await operation.promise();
      }

      // Create the table and the column families.
      const [tableExists] = await table.exists();
      if (!tableExists) {
        await table.create({families: [columnFamilyId]}); // Create column family
      } else {
        // Check if column family exists and create it if not.
        const [families] = await table.getFamilies();

        if (
          !families.some((family: {id: string}) => family.id === columnFamilyId)
        ) {
          await table.createFamily(columnFamilyId);
        }
      }

      // Run the readrows operation:
      await table.getRows();
      done();
    } catch (e) {
      done(e);
    }
  }

  const instanceId = 'emulator-test-instance';
  const tableId = 'my-table';
  const columnFamilyId = 'cf1';

  after(async () => {
    // TODO: Solve the issue where tests fail because instances don't get created on time.
    // Notes: Creating instances can take time and if they are not ready in
    // time then tests can fail. This shouldn't happen because if the create
    // instance long running operation completes then the instance should be
    // ready and shouldn't produce the `Error: 5 NOT_FOUND` error.
    // Uncomment the code below when the task above is addressed:
    // const instance = bigtable.instance(instanceId);
    // await instance.delete({});
  });

  it('should set the universe with a client option', done => {
    const universeDomain = UNIVERSE_DOMAIN_CONSTANT; // or your universe domain if not using emulator
    const options = {
      universeDomain,
    };
    const bigtable = new Bigtable(options);
    runTest(done, bigtable).catch(err => {
      throw err;
    });
  });

  it('should set the universe domain with a client option for the gapic clients', done => {
    const universeDomain = UNIVERSE_DOMAIN_CONSTANT; // or your universe domain if not using emulator
    const options = {
      BigtableClient: {universeDomain},
      BigtableInstanceAdminClient: {universeDomain},
      BigtableTableAdminClient: {universeDomain},
    };
    const bigtable = new Bigtable(options);
    runTest(done, bigtable).catch(err => {
      throw err;
    });
  });

  it('Should set universe domain with an environment variable', done => {
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = UNIVERSE_DOMAIN_CONSTANT;
    const bigtable = new Bigtable();
    runTest(done, bigtable).catch(err => {
      throw err;
    });
  });
});
