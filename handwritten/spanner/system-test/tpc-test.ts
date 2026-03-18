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

import {describe, it} from 'mocha';
import {MutationSet, Spanner} from '../src';
import * as assert from 'assert';

// INSTRUCTIONS FOR RUNNING TEST:
// 1. Change describe.skip to describe.only below.
// 2. Reassign process.env.GOOGLE_APPLICATION_CREDENTIALS to local key file.
// 3. Reassign UNIVERSE_DOMAIN_CONSTANT to the universe domain to test.
// 4. Run `npm run system-test`.

describe.skip('Universe domain tests', () => {
  // These tests are only designed to pass when using the service account
  // credentials for the universe domain environment so we skip them in the CI pipeline.

  before(() => {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = 'path to your credential file';
  });

  async function runTest(spanner: Spanner, instanceId, databaseId) {
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);
    const tableName = 'VenueDetails';
    const table = database.table(tableName);

    const schema = `CREATE TABLE ${tableName} (
                VenueId                INT64 NOT NULL,
                VenueName              STRING(100),
                Capacity               INT64,
            ) PRIMARY KEY (VenueId)`;

    console.log(`Creating table ${table.name}`);
    const [, operation] = await table.create(schema);

    await operation.promise();

    console.log(`${table.name} create successfully.`);

    const venuesTable = database.table(tableName);
    console.log(`Inserting data into the table ${table.name}`);
    await venuesTable.insert([
      {VenueId: 1, VenueName: 'Marc', Capacity: 100},
      {VenueId: 2, VenueName: 'Marc', Capacity: 200},
    ]);

    const mutations = new MutationSet();

    mutations.insert(tableName, {
      VenueId: '3',
      VenueName: 'Marc',
      Capacity: 700,
    });
    mutations.insert(tableName, {
      VenueId: '4',
      VenueName: 'Marc',
      Capacity: 800,
    });
    mutations.update(tableName, {
      VenueId: '3',
      VenueName: 'Marc',
      Capacity: 300,
    });
    mutations.update(tableName, {
      VenueId: '4',
      VenueName: 'Marc',
      Capacity: 400,
    });

    await database.writeAtLeastOnce(mutations);

    const query = {
      columns: ['VenueId', 'VenueName', 'Capacity'],
      keySet: {
        all: true,
      },
    };

    const [rows] = await venuesTable.read(query);

    console.log(`Inserted ${rows.length} rows into the table ${table.name}`);

    console.log(`Reading rows in the table ${table.name}`);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName}, Capacity: ${json.Capacity}`,
      );
    });

    console.log(`deleting table ${table.name}`);
    await table.delete();
    console.log(`deleted table ${table.name}`);
  }
  it('should be able to run apis successfully against TPC environment', async () => {
    const UNIVERSE_DOMAIN_CONSTANT = 'my-universe-domain';
    const projectId = 'tpc-project-id';
    const universeDomain = UNIVERSE_DOMAIN_CONSTANT;
    const options = {
      projectId,
      universeDomain,
    };
    const spanner = new Spanner(options);
    const instanceId = 'your-test-instance-id';
    const databaseId = 'your-test-database-id';

    try {
      await runTest(spanner, instanceId, databaseId);
    } catch (e) {
      assert.ifError(e);
    }
  });
});
