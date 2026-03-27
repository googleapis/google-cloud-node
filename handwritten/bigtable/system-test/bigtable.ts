// Copyright 2016 Google LLC
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

import {replaceProjectIdToken} from '@google-cloud/projectify';
import {PreciseDate} from '@google-cloud/precise-date';
import * as assert from 'assert';
import {beforeEach, afterEach, describe, it, before, after} from 'mocha';

import {
  Backup,
  BackupTimestamp,
  Bigtable,
  Entry,
  Instance,
  InstanceOptions,
  MutateOptions,
  SqlTypes,
} from '../src';
import {Mutation} from '../src/mutation';
import {AppProfile} from '../src/app-profile.js';
import {CopyBackupConfig} from '../src/backup.js';
import {Cluster} from '../src/cluster.js';
import {Family} from '../src/family.js';
import {Row} from '../src/row.js';
import {Table} from '../src/table.js';
import {RawFilter} from '../src/filter';
import {generateId, PREFIX} from './common';
import {BigtableTableAdminClient} from '../src/v2';
import {ServiceError} from 'google-gax';
import {BigtableDate, QueryResultRow} from '../src/execute-query/values';
import {google} from '../protos/protos';

type IBackup = google.bigtable.admin.v2.IBackup;

describe('Bigtable', () => {
  const bigtable = new Bigtable();
  const INSTANCE = bigtable.instance(generateId('instance'));
  const DIFF_INSTANCE = bigtable.instance(generateId('d-inst'));
  const CMEK_INSTANCE = bigtable.instance(generateId('cmek'));
  const INSTANCE_HDD = bigtable.instance(generateId('inst-hdd'));
  const TABLE = INSTANCE.table(generateId('table'));
  const TABLE_HDD = INSTANCE_HDD.table(generateId('table-hdd'));
  const APP_PROFILE_ID = generateId('appProfile');
  const APP_PROFILE = INSTANCE.appProfile(APP_PROFILE_ID);
  const CLUSTER_ID = generateId('cluster');
  const CLUSTER_ID_HDD = generateId('cluster');

  async function reapBackups(instance: Instance) {
    try {
      const [backups] = await instance.getBackups();
      for (const backup of backups) {
        try {
          await backup.delete({timeout: 50 * 1000});
        } catch (e) {
          console.log(`Error deleting backup: ${backup.id}: ${e}`);
        }
      }
    } catch (e) {
      console.error(`Error listing backups from ${instance.name}: ${e}`);
    }
  }

  async function reapInstances() {
    const [instances] = await bigtable.getInstances();
    const testInstances = instances
      .filter(i => i.id.match(PREFIX))
      .filter(i => {
        const timeCreated = i.metadata!.labels!.time_created as {} as Date;
        // Only delete stale resources.
        const oneHourAgo = new Date(Date.now() - 3600000);
        return !timeCreated || timeCreated <= oneHourAgo;
      });
    // need to delete backups first due to instance deletion precondition
    const deleteBackupPromises = testInstances.map(instance =>
      reapBackups(instance),
    );
    for (const backupPromise of deleteBackupPromises) {
      await backupPromise;
    }
    for (const instance of testInstances) {
      try {
        await instance.delete();
      } catch (e) {
        console.log(`Error deleting instance: ${instance.id}`);
      }
    }
  }

  before(async () => {
    await reapInstances();
    const [, operation] = await INSTANCE.create({
      clusters: [
        {
          id: CLUSTER_ID,
          location: 'us-central2-c',
          nodes: 3,
          storage: 'ssd',
        },
      ],
      labels: {
        time_created: Date.now(),
      },
    });
    const [, operationHDD] = await INSTANCE_HDD.create({
      clusters: [
        {
          id: CLUSTER_ID_HDD,
          location: 'us-central2-c',
          nodes: 3,
          storage: 'hdd',
        },
      ],
      labels: {
        time_created: Date.now(),
      },
    });

    await Promise.all([operation.promise(), operationHDD.promise()]);
    await TABLE.create({
      families: ['follows', 'traits'],
    });
    await TABLE_HDD.create({
      families: ['follows', 'traits'],
    });
    await INSTANCE.createAppProfile(APP_PROFILE_ID, {
      routing: 'any',
      ignoreWarnings: true,
    });
  });

  after(async () => {
    const q = [];
    const instances = [INSTANCE, DIFF_INSTANCE, CMEK_INSTANCE, INSTANCE_HDD];

    // need to delete backups first due to instance deletion precondition
    await Promise.all(instances.map(instance => reapBackups(instance)));
    await Promise.all(
      instances.map(instance => {
        q.push(async () => {
          try {
            await instance.delete();
          } catch (e) {
            console.log(`Error deleting instance: ${instance.id}`);
          }
        });
      }),
    );
  });

  describe('instances', () => {
    it('should get a list of instances', async () => {
      const [instances, failedLocations] = await bigtable.getInstances();
      assert(instances.length > 0);
      assert(Array.isArray(failedLocations));
    });

    it('should check if an instance exists', async () => {
      const [exists] = await INSTANCE.exists();
      assert.strictEqual(exists, true);
    });

    it('should check if an instance does not exist', async () => {
      const instance = bigtable.instance('fake-instance');
      const [exists] = await instance.exists();
      assert.strictEqual(exists, false);
    });

    it('should get a single instance', async () => {
      await INSTANCE.get();
    });

    it('should update an instance', async () => {
      const metadata = {
        displayName: 'metadata-test',
      };
      await INSTANCE.setMetadata(metadata);
      const [metadata_] = await INSTANCE.getMetadata();
      assert.strictEqual(metadata.displayName, metadata_.displayName);
    });

    it('should get an Iam Policy for the instance', async () => {
      const policyProperties = ['version', 'bindings', 'etag'];
      const [policy] = await INSTANCE.getIamPolicy();
      policyProperties.forEach(property => {
        assert(property in policy);
      });
    });

    it('should test Iam permissions for the instance', async () => {
      const permissions = ['bigtable.tables.get', 'bigtable.tables.readRows'];
      const [grantedPermissions] =
        await INSTANCE.testIamPermissions(permissions);
      assert.strictEqual(grantedPermissions.length, permissions.length);
      permissions.forEach(permission => {
        assert.strictEqual(grantedPermissions.includes(permission), true);
      });
    });

    it('should set Iam Policy on the instance', async () => {
      const instance = bigtable.instance(generateId('instance'));
      const clusteId = generateId('cluster');
      const [, operation] = await instance.create({
        clusters: [
          {
            id: clusteId,
            location: 'us-central2-c',
            nodes: 3,
          },
        ],
        labels: {
          time_created: Date.now(),
        },
      });
      await operation.promise();

      const [policy] = await instance.getIamPolicy();
      const [updatedPolicy] = await instance.setIamPolicy(policy);
      Object.keys(policy).forEach(key => assert(key in updatedPolicy));

      await instance.delete();
    });
  });

  describe('CMEK', () => {
    let kmsKeyName: string;

    const CMEK_CLUSTER = CMEK_INSTANCE.cluster(generateId('cluster'));

    const cryptoKeyId = generateId('key');
    const keyRingId = generateId('key-ring');
    let keyRingsBaseUrl: string;
    let cryptoKeyVersionName: string;

    before(async () => {
      const projectId = await bigtable.auth.getProjectId();
      kmsKeyName = `projects/${projectId}/locations/us-central2/keyRings/${keyRingId}/cryptoKeys/${cryptoKeyId}`;
      keyRingsBaseUrl = `https://cloudkms.googleapis.com/v1/projects/${projectId}/locations/us-central2/keyRings`;

      await bigtable.auth.request({
        method: 'POST',
        url: keyRingsBaseUrl,
        params: {keyRingId},
      });

      const resp = await bigtable.auth.request({
        method: 'POST',
        url: `${keyRingsBaseUrl}/${keyRingId}/cryptoKeys`,
        params: {cryptoKeyId},
        data: {purpose: 'ENCRYPT_DECRYPT'},
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cryptoKeyVersionName = (resp.data as any).primary.name;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, operation] = await CMEK_INSTANCE.create({
        clusters: [
          {
            id: CMEK_CLUSTER.id,
            location: 'us-central2-a',
            nodes: 3,
            key: kmsKeyName,
          },
        ],
        labels: {
          time_created: Date.now(),
        },
      });
      await operation.promise();
    });

    after(async () => {
      await bigtable.auth.request({
        method: 'POST',
        url: `${keyRingsBaseUrl}/${keyRingId}/cryptoKeys/${cryptoKeyId}/cryptoKeyVersions/${cryptoKeyVersionName
          .split('/')
          .pop()}:destroy`,
        params: {name: cryptoKeyVersionName},
      });
    });

    it('should have created an instance', async () => {
      const [metadata] = await CMEK_CLUSTER.getMetadata();
      assert.deepStrictEqual(metadata.encryptionConfig, {kmsKeyName});
    });

    it('should create a cluster', async () => {
      const cluster = CMEK_INSTANCE.cluster(generateId('cluster'));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, operation] = await cluster.create({
        location: 'us-central2-b',
        nodes: 3,
        key: kmsKeyName,
      });
      await operation.promise();

      const [metadata] = await cluster.getMetadata();
      assert.deepStrictEqual(metadata.encryptionConfig, {kmsKeyName});
    });

    it('should fail if key not provided', async () => {
      const cluster = CMEK_INSTANCE.cluster(generateId('cluster'));

      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, operation] = await cluster.create({
          location: 'us-central2-b',
          nodes: 3,
        });
        await operation.promise();
        throw new Error('Cluster creation should not have succeeded');
      } catch (e) {
        assert(
          (e as Error).message.includes(
            'default keys and CMEKs are not allowed',
          ),
        );
      }
    });
  });

  describe('appProfiles', () => {
    it('should retrieve a list of app profiles', async () => {
      const [appProfiles] = await INSTANCE.getAppProfiles();
      assert(appProfiles[0] instanceof AppProfile);
      assert(appProfiles.length > 0);
    });

    it('should retrieve a list of app profiles in stream mode', done => {
      const appProfiles: AppProfile[] = [];
      INSTANCE.getAppProfilesStream()
        .on('error', done)
        .on('data', appProfile => {
          assert(appProfile instanceof AppProfile);
          appProfiles.push(appProfile);
        })
        .on('end', () => {
          assert(appProfiles.length > 0);
          done();
        });
    });

    it('should check if an app profile exists', async () => {
      const [exists] = await APP_PROFILE.exists();
      assert.strictEqual(exists, true);
    });

    it('should check if an app profile does not exist', async () => {
      const appProfile = INSTANCE.appProfile('should-not-exist');
      const [exists] = await appProfile.exists();
      assert.strictEqual(exists, false);
    });

    it('should get an app profile', async () => {
      await APP_PROFILE.get();
    });

    it('should delete an app profile', async () => {
      const appProfile = INSTANCE.appProfile(generateId('app-profile'));
      await appProfile.create({
        routing: 'any',
        ignoreWarnings: true,
      });
      await appProfile.delete({ignoreWarnings: true});
    });

    it('should get the app profiles metadata', async () => {
      const [metadata] = await APP_PROFILE.getMetadata();
      assert.strictEqual(
        metadata.name,
        APP_PROFILE.name.replace('{{projectId}}', bigtable.projectId),
      );
    });

    it('should update an app profile', async () => {
      const cluster = INSTANCE.cluster(CLUSTER_ID);
      const options = {
        routing: cluster,
        allowTransactionalWrites: true,
        description: 'My Updated App Profile',
      };
      await APP_PROFILE.setMetadata(options);
      const [updatedAppProfile] = await APP_PROFILE.get();
      assert.strictEqual(
        updatedAppProfile.metadata!.description,
        options.description,
      );
      assert.deepStrictEqual(updatedAppProfile.metadata!.singleClusterRouting, {
        clusterId: CLUSTER_ID,
        allowTransactionalWrites: true,
      });
    });
  });

  describe('clusters', () => {
    let CLUSTER: Cluster;

    beforeEach(() => {
      CLUSTER = INSTANCE.cluster(CLUSTER_ID);
    });

    it('should retrieve a list of clusters', async () => {
      const [clusters] = await INSTANCE.getClusters();
      assert(clusters[0] instanceof Cluster);
    });

    it('should check if a cluster exists', async () => {
      const [exists] = await CLUSTER.exists();
      assert.strictEqual(exists, true);
    });

    it('should check if a cluster does not exist', async () => {
      const cluster = INSTANCE.cluster('fake-cluster');
      const [exists] = await cluster.exists();
      assert.strictEqual(exists, false);
    });

    it('should get a cluster', async () => {
      await CLUSTER.get();
    });

    it('should update a cluster', async () => {
      const metadata = {
        nodes: 4,
      };
      const [operation] = await CLUSTER.setMetadata(metadata);
      await operation.promise();
      const [_metadata] = await CLUSTER.getMetadata();
      assert.strictEqual(metadata.nodes, _metadata.serveNodes);
    });
  });

  describe('tables', () => {
    it('should retrieve a list of tables', async () => {
      const [tables] = await INSTANCE.getTables();
      assert(tables[0] instanceof Table);
    });

    it('should retrieve a list of tables in stream mode', done => {
      const tables: Table[] = [];
      INSTANCE.getTablesStream()
        .on('error', done)
        .on('data', table => {
          assert(table instanceof Table);
          tables.push(table);
        })
        .on('end', () => {
          assert(tables.length > 0);
          done();
        });
    });

    it('should check if a table exists', async () => {
      const [exists] = await TABLE.exists();
      assert.strictEqual(exists, true);
    });

    it('should check if a table does not exist', async () => {
      const table = INSTANCE.table('should-not-exist');
      const [exists] = await table.exists();
      assert.strictEqual(exists, false);
    });

    it('should get a table', async () => {
      await TABLE.get();
    });

    it('should get an Iam Policy for the table', async () => {
      const policyProperties = ['version', 'bindings', 'etag'];
      const [policy] = await TABLE.getIamPolicy();
      policyProperties.forEach(property => {
        assert(property in policy);
      });
    });

    it('should test Iam permissions for the table', async () => {
      const permissions = ['bigtable.tables.get', 'bigtable.tables.readRows'];
      const [grantedPermissions] = await TABLE.testIamPermissions(permissions);
      assert.strictEqual(grantedPermissions.length, permissions.length);
      permissions.forEach(permission => {
        assert.strictEqual(grantedPermissions.includes(permission), true);
      });
    });

    it('should set Iam Policy on the table', async () => {
      const table = INSTANCE.table(generateId('table'));
      await table.create();

      const [policy] = await table.getIamPolicy();
      const [updatedPolicy] = await table.setIamPolicy(policy);
      Object.keys(policy).forEach(key => assert(key in updatedPolicy));

      await table.delete();
    });

    it('should delete a table', async () => {
      const table = INSTANCE.table(generateId('table'));
      await table.create();
      await table.delete();
    });

    it('should get the tables metadata', async () => {
      const [metadata] = await TABLE.getMetadata();
      assert.strictEqual(
        metadata.name,
        TABLE.name.replace('{{projectId}}', bigtable.projectId),
      );
    });

    it('should create a table with column family data', async () => {
      const name = generateId('table');
      const options = {
        families: ['test'],
      };
      const [table] = await INSTANCE.createTable(name, options);
      assert(table.metadata!.columnFamilies!.test);
    });

    it('should create a table if autoCreate is true', async () => {
      const table = INSTANCE.table(generateId('table'));
      await table.get({autoCreate: true});
      await table.delete();
    });
  });

  describe('consistency tokens', () => {
    it('should generate consistency token', async () => {
      const [token] = await TABLE.generateConsistencyToken();
      assert.strictEqual(typeof token, 'string');
    });

    it('should return error for checkConsistency of invalid token', done => {
      TABLE.checkConsistency('dummy-token', err => {
        assert.strictEqual(err!.code, 3);
        done();
      });
    });

    it('should return boolean for checkConsistency of token', async () => {
      const [token] = await TABLE.generateConsistencyToken();
      const [res] = await TABLE.checkConsistency(token);
      assert.strictEqual(typeof res, 'boolean');
    });

    it('should return boolean for waitForReplication', async () => {
      const [res] = await TABLE.waitForReplication();
      assert.strictEqual(typeof res, 'boolean');
    });
  });

  describe('consistency tokens with gapic', () => {
    // We want to work with the gapic admin class for this version.
    const tableAdmin = bigtable.admin.getTableAdminClient();

    it('should wait for consistency without an existing token', async () => {
      await tableAdmin.waitForConsistency(
        replaceProjectIdToken(TABLE.name, bigtable.projectId),
      );
    });

    it('should wait for consistency with an existing token', async () => {
      const [token] = await tableAdmin.generateConsistencyToken({
        name: replaceProjectIdToken(TABLE.name, bigtable.projectId),
      });
      await tableAdmin.waitForConsistency(
        replaceProjectIdToken(TABLE.name, bigtable.projectId),
        token.consistencyToken!,
      );
    });
  });

  describe('replication states', () => {
    it('should get a map of clusterId and state', async () => {
      const [clusterStates] = await TABLE.getReplicationStates();
      assert(clusterStates instanceof Map);
      assert(clusterStates.has(CLUSTER_ID));
    });
  });

  describe('column families', () => {
    const FAMILY_ID = 'presidents';
    let FAMILY: Family;

    before(async () => {
      FAMILY = TABLE.family(FAMILY_ID);
      await FAMILY.create();
    });

    it('should get a list of families', async () => {
      const [families] = await TABLE.getFamilies();
      assert.strictEqual(families.length, 3);
      assert(families[0] instanceof Family);
      assert.notStrictEqual(-1, families.map(f => f.id).indexOf(FAMILY.id));
    });

    it('should get a family', async () => {
      const family = TABLE.family(FAMILY_ID);
      await family.get();
      assert(family instanceof Family);
      assert.strictEqual(family.name, FAMILY.name);
      assert.strictEqual(family.id, FAMILY.id);
    });

    it('should check if a family exists', async () => {
      const [exists] = await FAMILY.exists();
      assert.strictEqual(exists, true);
    });

    it('should check if a family does not exist', async () => {
      const family = TABLE.family('prezzies');
      const [exists] = await family.exists();
      assert.strictEqual(exists, false);
    });

    it('should create a family if autoCreate is true', async () => {
      const family = TABLE.family('prezzies');
      await family.get({autoCreate: true});
      await family.delete();
    });

    it('should create a family with nested gc rules', async () => {
      const family = TABLE.family('prezzies');
      const options = {
        rule: {
          union: true,
          versions: 10,
          rule: {
            versions: 2,
            age: {seconds: 60 * 60 * 24 * 30},
          },
        },
      };
      await family.create(options);
      const [metadata] = await family.getMetadata();
      assert.deepStrictEqual(metadata.gcRule, {
        union: {
          rules: [
            {
              maxNumVersions: 10,
              rule: 'maxNumVersions',
            },
            {
              intersection: {
                rules: [
                  {
                    maxAge: {
                      seconds: '2592000',
                      nanos: 0,
                    },
                    rule: 'maxAge',
                  },
                  {
                    maxNumVersions: 2,
                    rule: 'maxNumVersions',
                  },
                ],
              },
              rule: 'intersection',
            },
          ],
        },
        rule: 'union',
      });
      await family.delete();
    });

    it('should get the column family metadata', async () => {
      const [metadata] = await FAMILY.getMetadata();
      assert.strictEqual(FAMILY.metadata, metadata);
    });

    it('should update a column family', async () => {
      const rule = {
        age: {
          seconds: 10000,
          nanos: 10000,
        },
      };
      const [metadata] = await FAMILY.setMetadata({rule});
      const maxAge = metadata.gcRule!.maxAge;
      assert.strictEqual(maxAge!.seconds, rule.age.seconds.toString());
      assert.strictEqual(maxAge!.nanos, rule.age.nanos);
    });

    it('should delete a column family', async () => {
      await FAMILY.delete();
    });
  });

  describe('rows', () => {
    describe('.exists()', () => {
      const row = TABLE.row('alincoln');

      beforeEach(async () => {
        await row.create({
          entry: {
            follows: {
              gwashington: 1,
              jadams: 1,
              tjefferson: 1,
            },
          },
        });
      });

      afterEach(async () => row.delete());

      it('should check if a row exists', async () => {
        const [exists] = await row.exists();
        assert.strictEqual(exists, true);
      });

      it('should check if a row does not exist', async () => {
        const row = TABLE.row('gwashington');
        const [exists] = await row.exists();
        assert.strictEqual(exists, false);
      });
    });

    describe('inserting data', () => {
      it('should insert rows', async () => {
        const rows = [
          {
            key: 'gwashington',
            data: {
              follows: {
                jadams: 1,
              },
            },
          },
          {
            key: 'tjefferson',
            data: {
              follows: {
                gwashington: 1,
                jadams: 1,
              },
            },
          },
          {
            key: 'jadams',
            data: {
              follows: {
                gwashington: 1,
                tjefferson: 1,
              },
            },
          },
        ];
        await TABLE.insert(rows);
      });

      it('should insert a large row', async () => {
        await TABLE.insert({
          key: 'gwashington',
          data: {
            follows: {
              jadams: Buffer.alloc(5000000),
            },
          },
        });
      });

      it('should create an individual row', async () => {
        const row = TABLE.row('alincoln');
        const rowData = {
          follows: {
            gwashington: 1,
            jadams: 1,
            tjefferson: 1,
          },
        };
        await row.create({entry: rowData});
      });

      it('should insert individual cells', async () => {
        const row = TABLE.row('gwashington');
        const rowData = {
          follows: {
            jadams: 1,
          },
        };
        await row.save(rowData);
      });

      it('should allow for user specified timestamps', async () => {
        const row = TABLE.row('gwashington');
        const rowData = {
          follows: {
            jadams: {
              value: 1,
              timestamp: new Date('March 22, 1986'),
            },
          },
        };
        await row.save(rowData);
      });

      it('should increment a column value', async () => {
        const row = TABLE.row('gwashington');
        const increment = 5;
        const [value] = await row.increment('follows:increment', increment);
        assert.strictEqual(value, increment);
      });

      it('should apply read/modify/write rules to a row', async () => {
        const row = TABLE.row('gwashington');
        const rule = {
          column: 'traits:teeth',
          append: '-wood',
        };
        await row.save({
          traits: {
            teeth: 'shiny',
          },
        });
        await row.createRules(rule);
        const [data] = await row.get(['traits:teeth']);
        assert.strictEqual(data.traits.teeth[0].value, 'shiny-wood');
      });

      it('should check and mutate a row', async () => {
        const row = TABLE.row('gwashington');
        const filter: RawFilter = {
          family: 'follows',
          value: 'alincoln',
        };
        const mutations = [
          {
            method: 'delete',
            data: ['follows:alincoln'],
          },
        ];
        const [matched] = await row.filter(filter, {onMatch: mutations});
        assert(matched);
      });
    });

    describe('fetching data', () => {
      it('should execute a query', async () => {
        const [preparedStatement] = await INSTANCE.prepareStatement({
          query:
            'SELECT @stringParam AS strCol, @bytesParam as bytesCol, @int64Param AS intCol, @doubleParam AS doubleCol,\n' +
            '@floatParam AS floatCol, @boolParam AS boolCol, @tsParam AS tsCol, @dateParam AS dateCol,\n' +
            '@byteArrayParam AS byteArrayCol, @stringArrayParam AS stringArrayCol, @intArrayParam AS intArrayCol,\n' +
            '@floatArrayParam AS floatArrayCol, @doubleArrayParam AS doubleArrayCol, @boolArrayParam AS boolArrayCol,\n' +
            '@tsArrayParam AS tsArrayCol, @dateArrayParam AS dateArrayCol',
          parameterTypes: {
            bytesParam: SqlTypes.Bytes(),
            intArrayParam: SqlTypes.Array(SqlTypes.Int64()),
            dateArrayParam: SqlTypes.Array(SqlTypes.Date()),
            stringParam: SqlTypes.String(),
            byteArrayParam: SqlTypes.Array(SqlTypes.Bytes()),
            doubleArrayParam: SqlTypes.Array(SqlTypes.Float64()),
            boolArrayParam: SqlTypes.Array(SqlTypes.Bool()),
            doubleParam: SqlTypes.Float64(),
            floatParam: SqlTypes.Float32(),
            dateParam: SqlTypes.Date(),
            floatArrayParam: SqlTypes.Array(SqlTypes.Float32()),
            tsArrayParam: SqlTypes.Array(SqlTypes.Timestamp()),
            int64Param: SqlTypes.Int64(),
            boolParam: SqlTypes.Bool(),
            tsParam: SqlTypes.Timestamp(),
            stringArrayParam: SqlTypes.Array(SqlTypes.String()),
          },
        });
        const params = {
          bytesParam: Buffer.from('test'),
          intArrayParam: [BigInt(1), BigInt(2), BigInt(3)],
          dateArrayParam: [
            new BigtableDate(2025, 5, 14),
            new BigtableDate(2025, 5, 13),
          ],
          stringParam: 'test',
          byteArrayParam: [Buffer.from('test')],
          doubleArrayParam: [1.0, 2.0, 3.0],
          boolArrayParam: [true, false],
          doubleParam: 1.0,
          floatParam: 1.0,
          dateParam: new BigtableDate(2025, 5, 14),
          floatArrayParam: [1.0, 2.0, 3.0],
          tsArrayParam: [
            new PreciseDate(Date.now()),
            new PreciseDate(Date.now()),
          ],
          int64Param: BigInt(123),
          boolParam: true,
          tsParam: new PreciseDate(Date.now()),
          stringArrayParam: ['test', 'test'],
        };
        const [rows] = (await INSTANCE.executeQuery({
          preparedStatement,
          parameters: params,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        })) as any as [Row[]];
        assert(rows[0] instanceof QueryResultRow);
        assert.deepStrictEqual(rows[0].get('strCol'), params.stringParam);
        assert.deepStrictEqual(rows[0].get('bytesCol'), params.bytesParam);
        assert.deepStrictEqual(rows[0].get('intCol'), params.int64Param);
        assert.deepStrictEqual(rows[0].get('doubleCol'), params.doubleParam);
        assert.deepStrictEqual(rows[0].get('floatCol'), params.floatParam);
        assert.deepStrictEqual(rows[0].get('boolCol'), params.boolParam);
        assert.deepStrictEqual(rows[0].get('tsCol'), params.tsParam);
        assert.deepStrictEqual(rows[0].get('dateCol'), params.dateParam);
        assert.deepStrictEqual(
          rows[0].get('byteArrayCol'),
          params.byteArrayParam,
        );
        assert.deepStrictEqual(
          rows[0].get('stringArrayCol'),
          params.stringArrayParam,
        );
        assert.deepStrictEqual(
          rows[0].get('intArrayCol'),
          params.intArrayParam,
        );
        assert.deepStrictEqual(
          rows[0].get('floatArrayCol'),
          params.floatArrayParam,
        );
        assert.deepStrictEqual(
          rows[0].get('doubleArrayCol'),
          params.doubleArrayParam,
        );
        assert.deepStrictEqual(
          rows[0].get('boolArrayCol'),
          params.boolArrayParam,
        );
        assert.deepStrictEqual(rows[0].get('tsArrayCol'), params.tsArrayParam);
        assert.deepStrictEqual(
          rows[0].get('dateArrayCol'),
          params.dateArrayParam,
        );
      });
      it('should get rows', async () => {
        const [rows] = await TABLE.getRows();
        assert.strictEqual(rows.length, 4);
        assert(rows[0] instanceof Row);
      });

      it('should get rows via stream', done => {
        const rows: Row[] = [];
        TABLE.createReadStream()
          .on('error', done)
          .on('data', row => {
            assert(row instanceof Row);
            rows.push(row);
          })
          .on('end', () => {
            assert.strictEqual(rows.length, 4);
            done();
          });
      });

      it('should should cancel request if stream ended early', done => {
        const rows: Row[] = [];
        const stream = TABLE.createReadStream()
          .on('error', done)
          .on('data', row => {
            stream.end();
            rows.push(row);
          })
          .on('end', () => {
            assert.strictEqual(rows.length, 1);
            done();
          });
      });

      it('should fetch an individual row', async () => {
        const row = TABLE.row('alincoln');
        const [row_] = await row.get();
        assert.strictEqual(row, row_);
      });

      it('should limit the number of rows', async () => {
        const [rows] = await TABLE.getRows({
          limit: 1,
        });
        assert.strictEqual(rows.length, 1);
      });

      it('should fetch a range of rows', async () => {
        const options = {
          start: 'alincoln',
          end: 'jadams',
        };
        const [rows] = await TABLE.getRows(options);
        assert.strictEqual(rows.length, 3);
      });

      it('should fetch a range of rows via prefix', async () => {
        const options = {
          prefix: 'g',
        };
        const [rows] = await TABLE.getRows(options);
        assert.strictEqual(rows.length, 1);
        assert.strictEqual(rows[0].id, 'gwashington');
      });

      it('should fetch individual cells of a row', async () => {
        const row = TABLE.row('alincoln');
        const [data] = await row.get(['follows:gwashington']);
        assert.strictEqual(data.follows.gwashington[0].value, 1);
      });

      it('should not decode the values', async () => {
        const row = TABLE.row('gwashington');
        const options = {
          decode: false,
        };
        await row.get(options);
        const teeth = row.data.traits.teeth;
        const value = teeth[0].value;
        assert(value instanceof Buffer);
        assert.strictEqual(value.toString(), 'shiny-wood');
      });

      it('should get sample row keys', async () => {
        const [keys] = await TABLE.sampleRowKeys();
        assert(keys.length > 0);
      });

      it('should get sample row keys via stream', done => {
        const keys: string[] = [];
        TABLE.sampleRowKeysStream()
          .on('error', done)
          .on('data', (rowKey: string) => {
            keys.push(rowKey);
          })
          .on('end', () => {
            assert(keys.length > 0);
            done();
          });
      });

      it('should end stream early', async () => {
        const entries = [
          {
            key: 'gwashington',
            data: {
              follows: {
                jadams: 1,
              },
            },
          },
          {
            key: 'tjefferson',
            data: {
              follows: {
                gwashington: 1,
                jadams: 1,
              },
            },
          },
          {
            key: 'jadams',
            data: {
              follows: {
                gwashington: 1,
                tjefferson: 1,
              },
            },
          },
        ];
        await TABLE.insert(entries);
        const rows: Row[] = [];
        await new Promise<void>((resolve, reject) => {
          const stream = TABLE.createReadStream()
            .on('error', reject)
            .on('data', row => {
              rows.push(row);
              stream.end();
            })
            .on('end', () => {
              assert.strictEqual(rows.length, 1);
              resolve();
            });
        });
      });

      describe('filters', () => {
        it('should get rows via column data', async () => {
          const filter = {
            column: 'gwashington',
          };
          const [rows] = await TABLE.getRows({filter});
          assert.strictEqual(rows.length, 3);
          const keys = rows.map(row => row.id).sort();
          assert.deepStrictEqual(keys, ['alincoln', 'jadams', 'tjefferson']);
        });

        it('should get rows that satisfy the cell limit', async () => {
          const entry = {
            key: 'alincoln',
            data: {
              follows: {
                tjefferson: 1,
              },
            },
          };
          const filter = [
            {
              row: 'alincoln',
            },
            {
              column: {
                name: 'tjefferson',
                cellLimit: 1,
              },
            },
          ];
          await TABLE.insert(entry);
          const [rows] = await TABLE.getRows({filter});
          const rowData = rows[0].data;
          assert.strictEqual(rowData.follows.tjefferson.length, 1);
        });

        it('should get a range of columns', async () => {
          const filter = [
            {
              row: 'tjefferson',
            },
            {
              column: {
                family: 'follows',
                start: 'gwashington',
                end: 'jadams',
              },
            },
          ];

          const [rows] = await TABLE.getRows({filter});
          rows.forEach(row => {
            const keys = Object.keys(row.data.follows).sort();
            assert.deepStrictEqual(keys, ['gwashington', 'jadams']);
          });
        });

        it('should run a conditional filter', async () => {
          const filter = {
            condition: {
              test: [
                {
                  row: 'gwashington',
                },
                {
                  family: 'follows',
                },
                {
                  column: 'tjefferson',
                },
              ],
              pass: {
                row: 'gwashington',
              },
              fail: {
                row: 'tjefferson',
              },
            },
          };
          const [rows] = await TABLE.getRows({filter});
          assert.strictEqual(rows.length, 1);
          assert.strictEqual(rows[0].id, 'tjefferson');
        });

        it('should run a conditional filter with pass only', async () => {
          const filter = {
            condition: {
              test: [
                {
                  row: 'gwashington',
                },
              ],
              pass: [
                {
                  all: true,
                },
              ],
            },
          };
          const [rows] = await TABLE.getRows({filter});
          assert(rows.length > 0);
        });

        it('should only get cells for a specific family', async () => {
          const entries = [
            {
              key: 'gwashington',
              data: {
                traits: {
                  teeth: 'wood',
                },
              },
            },
          ];
          await TABLE.insert(entries);
          const filter = {
            family: 'traits',
          };
          const [rows] = await TABLE.getRows({filter});
          assert(rows.length > 0);
          const families = Object.keys(rows[0].data);
          assert.deepStrictEqual(families, ['traits']);
        });

        it('should interleave filters', async () => {
          const filter = [
            {
              interleave: [
                [
                  {
                    row: 'gwashington',
                  },
                ],
                [
                  {
                    row: 'tjefferson',
                  },
                ],
              ],
            },
          ];
          const [rows] = await TABLE.getRows({filter});
          assert.strictEqual(rows.length, 2);
          const ids = rows.map(row => row.id).sort();
          assert.deepStrictEqual(ids, ['gwashington', 'tjefferson']);
        });

        it('should apply labels to the results', async () => {
          const filter = {
            label: 'test-label',
          };
          const [rows] = await TABLE.getRows({filter});
          rows.forEach(row => {
            const follows = row.data.follows;
            Object.keys(follows).forEach(column => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              follows[column].forEach((cell: any) => {
                assert.deepStrictEqual(cell.labels, [filter.label]);
              });
            });
          });
        });

        it('should run a regex against the row id', async () => {
          const filter = {
            row: /[a-z]+on$/,
          };
          const [rows] = await TABLE.getRows({filter});
          const keys = rows.map(row => row.id).sort();
          assert.deepStrictEqual(keys, ['gwashington', 'tjefferson']);
        });

        it('should run a sink filter', async () => {
          const filter = [
            {
              row: 'alincoln',
            },
            {
              family: 'follows',
            },
            {
              interleave: [
                [
                  {
                    all: true,
                  },
                ],
                [
                  {
                    label: 'prezzy',
                  },
                  {
                    sink: true,
                  },
                ],
              ],
            },
            {
              column: 'gwashington',
            },
          ];
          const [rows] = await TABLE.getRows({filter});
          const columns = Object.keys(rows[0].data.follows).sort();
          assert.deepStrictEqual(columns, [
            'gwashington',
            'jadams',
            'tjefferson',
          ]);
        });
      });

      it('should accept a date range', async () => {
        const filter = {
          time: {
            start: new Date('March 21, 1986'),
            end: new Date('March 23, 1986'),
          },
        };
        const [rows] = await TABLE.getRows({filter});
        assert(rows.length > 0);
      });
    });
  });

  describe('deleting rows', () => {
    it('should delete specific cells', async () => {
      const row = TABLE.row('alincoln');
      await row.deleteCells(['follows:gwashington']);
    });

    it('should delete a family', async () => {
      const row = TABLE.row('gwashington');
      await row.deleteCells(['traits']);
    });

    it('should delete all the cells', async () => {
      const row = TABLE.row('alincoln');
      await row.delete();
    });
  });

  describe('.deleteRows()', () => {
    const table = INSTANCE.table(generateId('table'));
    beforeEach(async () => {
      const tableOptions = {
        families: ['cf1'],
      };
      const data = {
        cf1: {
          foo: 1,
        },
      };
      const rows = [
        {
          key: 'aaa',
          data,
        },
        {
          key: 'abc',
          data,
        },
        {
          key: 'def',
          data,
        },
      ];
      await table.create(tableOptions);
      await table.insert(rows);
    });

    afterEach(async () => {
      await table.delete();
    });

    it('should delete the prefixes', async () => {
      await table.deleteRows('a');
      const [rows] = await table.getRows();
      assert.strictEqual(rows.length, 1);
    });
  });

  describe('.truncate()', () => {
    const table = INSTANCE.table(generateId('table'));
    beforeEach(async () => {
      const tableOptions = {
        families: ['follows'],
      };
      const rows = [
        {
          key: 'gwashington',
          data: {
            follows: {
              jadams: 1,
            },
          },
        },
      ];
      await table.create(tableOptions);
      await table.insert(rows);
    });

    afterEach(async () => {
      await table.delete();
    });

    it('should truncate a table', async () => {
      await table.truncate();
      const [rows] = await table.getRows();
      assert.strictEqual(rows.length, 0);
    });
  });

  describe('backups', () => {
    const CLUSTER = INSTANCE.cluster(CLUSTER_ID);
    let BACKUP: Backup;

    // For these tests, two backups are needed. The backups are labeled for what
    // they are intended to originate/interact from/with, but this is just for
    // testing and the naming convention used here does not actually influence
    // the real functionality - it is just a way to keep things organized!
    const backupIdFromCluster = generateId('backup');
    let backupNameFromCluster: string;
    const restoreTableIdFromCluster = generateId('table');

    const backupIdFromTable = generateId('backup');
    let backupNameFromTable: string;

    // The minimum backup expiry time is 6 hours. The times here each have a 2
    // hour padding to tolerate latency and clock drift. Also, while the time
    // implementation for backups in this client accepts any of a Timestamp
    // Struct, Date, or PreciseDate, to keep things easy this uses PreciseDate.
    const expireTime = new PreciseDate(PreciseDate.now() + 8 * 60 * 60 * 1000);
    const updateExpireTime = new PreciseDate(
      expireTime.getTime() + 2 + 60 * 60 * 1000,
    );

    before(async () => {
      const [backup, op] = await CLUSTER.createBackup(backupIdFromCluster, {
        table: TABLE,
        expireTime,
      });
      BACKUP = backup;
      await op.promise();
      backupNameFromCluster = replaceProjectIdToken(
        `${CLUSTER.name}/backups/${backupIdFromCluster}`,
        bigtable.projectId,
      );
      backupNameFromTable = replaceProjectIdToken(
        `${CLUSTER.name}/backups/${backupIdFromTable}`,
        bigtable.projectId,
      );
    });

    it('should create backup of a table (from cluster)', async () => {
      await BACKUP.getMetadata();

      assert.strictEqual(BACKUP.metadata!.name, backupNameFromCluster);

      assert.deepStrictEqual(BACKUP.expireDate, expireTime);
    });

    it('should create backup of a table (from table)', async () => {
      const [backup, op] = await TABLE.createBackup(backupIdFromTable, {
        expireTime,
      });
      await op.promise();
      await backup.getMetadata();

      assert.strictEqual(backup.metadata!.name, backupNameFromTable);

      assert.deepStrictEqual(backup.expireDate, expireTime);
    });

    it('should get a specific backup (cluster)', async () => {
      const [backup] = await CLUSTER.backup(backupIdFromCluster).get();
      assert.strictEqual(backup.metadata!.name, backupNameFromCluster);
      assert.strictEqual(backup.metadata!.state, 'READY');
    });

    it('should get backups in an instance', async () => {
      const [backups] = await INSTANCE.getBackups();
      assert(Array.isArray(backups));
      assert(backups.length > 0);
      assert(backups.some(backup => backup.id === BACKUP.id));
    });

    it('should get backups in an instance as a stream', done => {
      const backups: Backup[] = [];

      INSTANCE.getBackupsStream()
        .on('error', done)
        .on('data', backup => {
          backups.push(backup);
        })
        .on('end', () => {
          assert(backups.length > 0);
          done();
        });
    });

    it('should get backups in a cluster', async () => {
      const [backups] = await CLUSTER.getBackups();
      assert(Array.isArray(backups));
      assert(backups.length > 0);
      assert(backups.some(backup => backup.id === BACKUP.id));
    });

    it('should get backups in a cluster as a stream', done => {
      const backups: Backup[] = [];

      CLUSTER.getBackupsStream()
        .on('error', done)
        .on('data', backup => {
          backups.push(backup);
        })
        .on('end', () => {
          assert(backups.length > 0);
          done();
        });
    });

    it('should restore a backup (cluster)', async () => {
      const backup = CLUSTER.backup(backupIdFromCluster);
      const [table, op] = await backup.restore(restoreTableIdFromCluster);
      await op.promise();

      const restoredTableId = table.name?.split('/').pop();
      assert.strictEqual(restoredTableId, restoreTableIdFromCluster);
    });

    it('should restore a backup to a different instance', async () => {
      const [, operation] = await DIFF_INSTANCE.create(
        createInstanceConfig(
          generateId('d-clust'),
          'us-east1-c',
          3,
          Date.now(),
        ),
      );
      await operation.promise();
      const [iExists] = await DIFF_INSTANCE.exists();
      assert.strictEqual(iExists, true);

      const backup = CLUSTER.backup(backupIdFromCluster);
      const [table, op] = await backup.restoreTo({
        tableId: restoreTableIdFromCluster,
        instance: DIFF_INSTANCE,
      });
      await op.promise();
      const [tExists] = await table.exists();
      assert.strictEqual(tExists, true);
      assert.strictEqual(table.id, restoreTableIdFromCluster);
    });

    it('should update a backup (cluster)', async () => {
      const backup = CLUSTER.backup(backupIdFromCluster);
      const [metadata] = await backup.setMetadata({
        expireTime: updateExpireTime,
      });

      assert.strictEqual(metadata.name, backupNameFromCluster);
      assert.deepStrictEqual(backup.expireDate, updateExpireTime);
    });

    it('should get an Iam Policy for the backup', async () => {
      const policyProperties = ['version', 'bindings', 'etag'];
      const [policy] = await BACKUP.getIamPolicy();

      policyProperties.forEach(property => {
        assert(property in policy);
      });
    });

    it('should test Iam permissions for the backup', async () => {
      const permissions = ['bigtable.backups.get', 'bigtable.backups.delete'];
      const [grantedPermissions] = await BACKUP.testIamPermissions(permissions);
      assert.strictEqual(grantedPermissions.length, permissions.length);
      permissions.forEach(permission => {
        assert.strictEqual(grantedPermissions.includes(permission), true);
      });
    });

    it('should set Iam Policy on the backup', async () => {
      const backup = CLUSTER.backup(backupIdFromCluster);

      const [policy] = await backup.getIamPolicy();
      const [updatedPolicy] = await backup.setIamPolicy(policy);

      Object.keys(policy).forEach(key => assert(key in updatedPolicy));
    });
    describe('copying backups', () => {
      // The server requires the copy backup time to be sufficiently ahead of
      // the create backup time to avoid an error.
      // Set it to 308 hours ahead
      const sourceExpireTimeMilliseconds =
        PreciseDate.now() + (8 + 300) * 60 * 60 * 1000;
      const sourceExpireTime = new PreciseDate(sourceExpireTimeMilliseconds);
      // 608 hours ahead of now, 300 hours ahead of sourceExpireTimeMilliseconds
      const copyExpireTimeMilliseconds =
        PreciseDate.now() + (8 + 600) * 60 * 60 * 1000;
      const copyExpireTime = new PreciseDate(copyExpireTimeMilliseconds);

      beforeEach(async () => {
        // Sleep here for just over a minute so that the system tests don't
        // experience quota issues due to too many requests per minute.
        await new Promise(resolve => {
          setTimeout(resolve, 60001);
        });
      });
      /*
        This function checks that when a backup is copied using the provided
        config that a new backup is created on the instance.
       */
      async function testCopyBackup(
        backup: Backup,
        config: CopyBackupConfig,
        instance: Instance,
      ) {
        // Get a list of backup ids before the copy
        const [backupsBeforeCopy] = await instance.getBackups();
        const backupIdsBeforeCopy = backupsBeforeCopy.map(backup => backup.id);
        // Copy the backup
        const [newBackup, operation] = await backup.copy(config);
        try {
          assert.strictEqual(config.id, newBackup.id);
          await operation.promise();
          const id = config.id;
          const backupPath = `${config.cluster.name}/backups/${id}`;
          {
            // Ensure that the backup specified by the config and id match the backup name for the operation returned by the server.
            // the split/map/join functions replace the project name with the {{projectId}} string
            assert(operation);
            assert(operation.metadata);
            assert.strictEqual(
              operation.metadata.name
                .split('/')
                .map((item, index) => (index === 1 ? '{{projectId}}' : item))
                .join('/'),
              backupPath
                .split('/')
                .map((item, index) => (index === 1 ? '{{projectId}}' : item))
                .join('/'),
            );
          }
          // Check that there is now one more backup
          const [backupsAfterCopy] = await instance.getBackups();
          const newBackups = backupsAfterCopy.filter(
            backup => !backupIdsBeforeCopy.includes(backup.id),
          );
          assert.strictEqual(newBackups.length, 1);
          const [fetchedNewBackup] = newBackups;
          // Ensure the fetched backup matches the config
          assert.strictEqual(fetchedNewBackup.id, id);
          assert.strictEqual(fetchedNewBackup.name, backupPath);
          // Delete the copied backup
        } finally {
          await config.cluster.backup(newBackup.id).delete();
        }
      }

      describe('should create backup of a table and copy it in the same cluster', async () => {
        async function testWithExpiryTimes(
          sourceTestExpireTime: BackupTimestamp,
          copyTestExpireTime: BackupTimestamp,
        ) {
          const [backup, op] = await TABLE.createBackup(generateId('backup'), {
            expireTime: sourceTestExpireTime,
          });
          try {
            {
              await op.promise();
              // Check expiry time for running operation.
              await backup.getMetadata();
              assert.deepStrictEqual(backup.expireDate, sourceExpireTime);
            }
            await testCopyBackup(
              backup,
              {
                cluster: backup.cluster,
                id: generateId('backup'),
                expireTime: copyTestExpireTime,
              },
              INSTANCE,
            );
          } finally {
            await backup.delete();
          }
        }
        it('should copy to the same cluster with precise date expiry times', async () => {
          await testWithExpiryTimes(sourceExpireTime, copyExpireTime);
        });
        it('should copy to the same cluster with timestamp expiry times', async () => {
          // Calling toStruct converts times to a timestamp object.
          // For example: sourceExpireTime.toStruct() = {seconds: 1706659851, nanos: 981000000}
          await testWithExpiryTimes(
            sourceExpireTime.toStruct(),
            copyExpireTime.toStruct(),
          );
        });
        it('should copy to the same cluster with date expiry times', async () => {
          await testWithExpiryTimes(
            new Date(sourceExpireTimeMilliseconds),
            new Date(copyExpireTimeMilliseconds),
          );
        });
      });
      it('should create backup of a table and copy it on another cluster of another instance', async () => {
        const [backup, op] = await TABLE.createBackup(generateId('backup'), {
          expireTime: sourceExpireTime,
        });
        try {
          {
            await op.promise();
            // Check the expiry time.
            await backup.getMetadata();
            assert.deepStrictEqual(backup.expireDate, sourceExpireTime);
          }
          // Create another instance
          const instance = bigtable.instance(generateId('instance'));
          const destinationClusterId = generateId('cluster');
          {
            // Create production instance with given options
            const instanceOptions: InstanceOptions = {
              clusters: [
                {
                  id: destinationClusterId,
                  nodes: 3,
                  location: 'us-central2-d',
                  storage: 'ssd',
                },
              ],
              labels: {'prod-label': 'prod-label'},
              type: 'production',
            };
            const [, operation] = await instance.create(instanceOptions);
            await operation.promise();
          }
          // Create the copy and test the copied backup
          await testCopyBackup(
            backup,
            {
              cluster: new Cluster(instance, destinationClusterId),
              id: generateId('backup'),
              expireTime: copyExpireTime,
            },
            instance,
          );
          await instance.delete();
        } finally {
          await backup.delete();
        }
      });
      it('should create backup of a table and copy it on another cluster of the same instance', async () => {
        const [backup, op] = await TABLE.createBackup(generateId('backup'), {
          expireTime: sourceExpireTime,
        });
        try {
          {
            await op.promise();
            // Check the expiry time.
            await backup.getMetadata();
            assert.deepStrictEqual(backup.expireDate, sourceExpireTime);
          }
          const destinationClusterId = generateId('cluster');
          {
            // Create destination cluster with given options
            const [, operation] = await INSTANCE.cluster(
              destinationClusterId,
            ).create({
              location: 'us-central2-b',
              nodes: 3,
            });
            await operation.promise();
          }
          // Create the copy and test the copied backup
          await testCopyBackup(
            backup,
            {
              cluster: new Cluster(INSTANCE, destinationClusterId),
              id: generateId('backup'),
              expireTime: copyExpireTime,
            },
            INSTANCE,
          );
        } finally {
          await backup.delete();
        }
      });
      it('should create backup of a table and copy it on another project', async () => {
        const [backup, op] = await TABLE.createBackup(generateId('backup'), {
          expireTime: sourceExpireTime,
        });
        try {
          {
            await op.promise();
            // Check the expiry time.
            await backup.getMetadata();
            assert.deepStrictEqual(backup.expireDate, sourceExpireTime);
          }
          // Create client, instance, cluster for second project
          const bigtableSecondaryProject = new Bigtable(
            process.env.GCLOUD_PROJECT2
              ? {projectId: process.env.GCLOUD_PROJECT2}
              : {},
          );
          const secondInstance = bigtableSecondaryProject.instance(
            generateId('instance'),
          );
          const destinationClusterId = generateId('cluster');
          {
            // Create production instance with given options
            const instanceOptions: InstanceOptions = {
              clusters: [
                {
                  id: destinationClusterId,
                  nodes: 3,
                  location: 'us-central2-d',
                  storage: 'ssd',
                },
              ],
              labels: {'prod-label': 'prod-label'},
              type: 'production',
            };
            const [, operation] = await secondInstance.create(instanceOptions);
            await operation.promise();
          }
          // Create the copy and test the copied backup
          await testCopyBackup(
            backup,
            {
              cluster: new Cluster(secondInstance, destinationClusterId),
              id: generateId('backup'),
              expireTime: copyExpireTime,
            },
            secondInstance,
          );
          await secondInstance.delete();
        } finally {
          await backup.delete();
        }
      });
      it('should restore a copied backup', async () => {
        const backupId = generateId('backup');
        const table = INSTANCE.table('old-table');
        {
          // Create a table and insert data into it.
          await table.create();
          await table.createFamily('follows');
          await table.insert([
            {
              key: 'some-data-to-copy-key',
              data: {
                follows: {
                  copyData: 'data-to-copy',
                },
              },
            },
          ]);
        }
        // Create the backup
        const [backup, createBackupOperation] = await table.createBackup(
          backupId,
          {
            expireTime: sourceExpireTime,
          },
        );
        try {
          await createBackupOperation.promise();
          // Copy the backup
          const config = {
            cluster: backup.cluster,
            id: generateId('backup'),
            expireTime: copyExpireTime,
          };
          const [newBackup, copyOperation] = await backup.copy(config);
          await copyOperation.promise();
          // Restore a table from the copied backup
          const [newTable, restoreOperation] =
            await newBackup.restore('new-table');
          await restoreOperation.promise();
          const rows = await newTable.getRows();
          assert.deepStrictEqual(rows[0][0].id, 'some-data-to-copy-key');
        } finally {
          await backup.delete();
        }
      });
    });
  });

  describe('backups with gapic', () => {
    // This only needs to test the handwritten pieces for optimizing, so a lot
    // of the above from the veneer tests isn't covered; also I've not converted
    // everything to gapic, just the pieces to be tested.
    const tableAdmin = bigtable.admin.getTableAdminClient();

    let backupSSD: IBackup, backupHDD: IBackup;

    const targetTableIdSSD = generateId('ttbl'),
      targetTableIdHDD = generateId('ttbl');

    // We just test from table here.
    const backupIdFromTableSSD = generateId('backup'),
      backupIdFromTableHDD = generateId('backup');
    let backupNameFromTableSSD: string, backupNameFromTableHDD: string;

    // The minimum backup expiry time is 6 hours. The times here each have a 2
    // hour padding to tolerate latency and clock drift. Also, while the time
    // implementation for backups in this client accepts any of a Timestamp
    // Struct, Date, or PreciseDate, to keep things easy this uses PreciseDate.
    const expireTime = {
      seconds: Date.now() / 1000 + 8 * 60 * 60,
      nanos: 0,
    };

    beforeEach(async () => {
      // This is not ideal, but we are running into quota issues for admin API access.
      await new Promise(r => setTimeout(r, 60 * 1000));
    });

    before(async () => {
      const [backupOpSSD] = await tableAdmin.createBackup({
        parent: replaceProjectIdToken(
          INSTANCE.cluster(CLUSTER_ID).name,
          bigtable.projectId,
        ),
        backupId: backupIdFromTableSSD,
        backup: {
          expireTime,
          sourceTable: replaceProjectIdToken(TABLE.name, bigtable.projectId),
        },
      });
      const [backupOpHDD] = await tableAdmin.createBackup({
        parent: replaceProjectIdToken(
          INSTANCE_HDD.cluster(CLUSTER_ID_HDD).name,
          bigtable.projectId,
        ),
        backupId: backupIdFromTableHDD,
        backup: {
          expireTime,
          sourceTable: replaceProjectIdToken(
            TABLE_HDD.name,
            bigtable.projectId,
          ),
        },
      });
      const [resSSD, resHDD] = await Promise.all([
        backupOpSSD.promise(),
        backupOpHDD.promise(),
      ]);

      backupNameFromTableSSD = replaceProjectIdToken(
        `${INSTANCE.cluster(CLUSTER_ID).name}/backups/${backupIdFromTableSSD}`,
        bigtable.projectId,
      );
      backupNameFromTableHDD = replaceProjectIdToken(
        `${INSTANCE_HDD.cluster(CLUSTER_ID_HDD).name}/backups/${backupIdFromTableHDD}`,
        bigtable.projectId,
      );
      console.log(backupNameFromTableSSD, backupNameFromTableHDD);

      backupSSD = resSSD[0];
      backupHDD = resHDD[0];
    });

    // This is here just to make sure that we are, in fact, getting a usable backup.
    it('should create backup of a table (from table)', async () => {
      assert.strictEqual(backupSSD.name, backupNameFromTableSSD);
      assert.strictEqual(
        new Number(backupSSD.expireTime?.seconds).valueOf(),
        Math.floor(expireTime.seconds),
      );

      assert.strictEqual(backupHDD.name, backupNameFromTableHDD);
      assert.strictEqual(
        new Number(backupHDD.expireTime?.seconds).valueOf(),
        Math.floor(expireTime.seconds),
      );
    });

    it('should not optimize when restoring from the same backing type', async () => {
      // HDD -> HDD and SSD -> SSD should both not trigger an optimize pass.
      const [restoreOp] = await tableAdmin.restoreTable({
        parent: replaceProjectIdToken(INSTANCE_HDD.name, bigtable.projectId),
        tableId: targetTableIdHDD,
        backup: backupHDD.name!,
      });
      const [, metadata] = await restoreOp.promise();
      assert.ok(!metadata.optimizeTableOperationName);
    });

    it('should optimize when restoring from a different backing type', async () => {
      // HDD -> SSD should trigger an optimize.
      const [restoreOp] = await tableAdmin.restoreTable({
        parent: replaceProjectIdToken(INSTANCE.name, bigtable.projectId),
        tableId: targetTableIdSSD,
        backup: backupHDD.name!,
      });
      const [, metadata] = await restoreOp.promise();
      assert.ok(metadata.optimizeTableOperationName);

      const optimizeOp = await tableAdmin.checkOptimizeRestoredTableProgress(
        metadata.optimizeTableOperationName,
      );
      await optimizeOp.promise();
    });
  });

  describe('AuthorizedViews', () => {
    const tableId = generateId('table');
    const familyName = generateId('column-family-name');
    const rowId = generateId('row-id');
    const otherRowId = generateId('row-id');
    const authorizedViewId = generateId('authorized-view-id');
    const columnIdInView = generateId('column-id');
    const columnIdNotInView = generateId('column-id');
    const cellValueInView = generateId('cell-value');
    const cellValueInView2 = generateId('cell-value');
    const cellValueNotInView = generateId('cell-value');
    const newCellValue = generateId('cell-value');
    const authorizedViewTable = INSTANCE.table(tableId);
    const authorizedView = INSTANCE.view(tableId, authorizedViewId);
    const columnIdInViewData = {
      value: cellValueInView,
      labels: [],
      timestamp: '77000',
    };
    const columnIdInViewData2 = {
      value: cellValueInView2,
      labels: [],
      timestamp: '77000',
    };
    const columnIdNotInViewData = {
      value: cellValueNotInView,
      labels: [],
      timestamp: '77000',
    };
    const newCellValueData = {
      value: newCellValue,
      labels: [],
      timestamp: '77000',
    };
    let authorizedViewTableFullName: string;
    let authorizedViewFullName: string;

    /**
     * getErrorMessage gets the error message that the test would expect
     * for a particular authorizedViewFullName.
     *
     * @param authorizedViewFullName The full name of the authorized view.
     * This method should only be called after authorizedViewFullName has
     * been initialized.
     */
    function getErrorMessage(authorizedViewFullName: string) {
      return `Cannot mutate from ${authorizedViewFullName} because the mutation contains cells outside the Authorized View.`;
    }

    /**
     * Resets the table to a stable state after running a test.
     *
     */
    async function resetTable() {
      // Change the cell value back to what it was:
      await authorizedViewTable.deleteRows(rowId);
      const firstMutation = {
        key: rowId,
        data: {
          [familyName]: {
            [columnIdInView]: columnIdInViewData,
            [columnIdNotInView]: columnIdNotInViewData,
          },
        },
      } as {} as Entry;
      await authorizedViewTable.insert(firstMutation, {});
    }

    /**
     * Creates the table used for the tests.
     */
    async function createTable() {
      {
        // Create a table with just one row.
        await authorizedViewTable.create({});
        await authorizedViewTable.createFamily(familyName);
        await authorizedViewTable.insert([
          {
            key: rowId,
            data: {
              [familyName]: {
                [columnIdInView]: columnIdInViewData,
                [columnIdNotInView]: columnIdNotInViewData,
              },
            },
          },
          {
            key: otherRowId,
            data: {
              [familyName]: {
                [columnIdInView]: columnIdInViewData,
              },
            },
          },
        ]);
        // The following operations must be performed after table.insert because bigtable.projectId needs to be assigned.
        authorizedViewTableFullName = authorizedViewTable.name.replace(
          '{{projectId}}',
          bigtable.projectId,
        );
        authorizedViewFullName = `${authorizedViewTableFullName}/authorizedViews/${authorizedViewId}`;
      }
      {
        // Create an authorized view that the integration tests can use.
        // The view should only see the columnIdInView column.
        const bigtableClient = bigtable.api[
          'BigtableTableAdminClient'
        ] as BigtableTableAdminClient;
        await bigtableClient.createAuthorizedView({
          parent: authorizedViewTableFullName,
          authorizedViewId,
          authorizedView: {
            etag: `${authorizedViewId}-etag`,
            deletionProtection: false,
            subsetView: {
              rowPrefixes: [Buffer.from(rowId)],
              familySubsets: {
                [familyName]: {
                  qualifiers: [Buffer.from(columnIdInView)],
                },
              },
            },
          },
        });
      }
    }

    before(async () => {
      await createTable();
    });

    afterEach(async () => {
      // Add an after hook to ensure that none of the tests change the table.
      const rows = (await authorizedViewTable.getRows())[0];
      assert.strictEqual(rows.length, 2);
      assert.strictEqual(rows[0].id, rowId);
      assert.deepStrictEqual(rows[0].data, {
        [familyName]: {
          [columnIdInView]: [columnIdInViewData],
          [columnIdNotInView]: [columnIdNotInViewData],
        },
      });
      assert.strictEqual(rows[1].id, otherRowId);
      assert.deepStrictEqual(rows[1].data, {
        [familyName]: {
          [columnIdInView]: [columnIdInViewData],
        },
      });
    });

    describe('ReadRows grpc calls', () => {
      it('should call getRows for the authorized view', async () => {
        const rows = (await authorizedView.getRows())[0];
        // The getRows call will only get one of the rows and only display
        // one of the columns visible in the view.
        assert.strictEqual(rows[0].id, rowId);
        assert.deepStrictEqual(rows[0].data, {
          [familyName]: {
            [columnIdInView]: [columnIdInViewData],
          },
        });
      });
      it('should call createReadStream for the authorized view', done => {
        (async () => {
          try {
            const stream = await authorizedView.createReadStream();
            let receivedDataCount = 0;
            stream.on('data', row => {
              assert.strictEqual(row.id, rowId);
              assert.deepStrictEqual(row.data, {
                [familyName]: {
                  [columnIdInView]: [columnIdInViewData],
                },
              });
              receivedDataCount = receivedDataCount + 1;
            });
            stream.on('error', () => {
              done('An error should not have occurred');
            });
            stream.on('end', () => {
              assert.strictEqual(receivedDataCount, 1);
              done();
            });
          } catch (e: unknown) {
            done(e);
          }
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('MutateRows grpc calls', () => {
      describe('For erroneous calls', () => {
        it('should fail when writing to a row not in the authorized view', async () => {
          const mutation = {
            key: otherRowId,
            data: {
              [familyName]: {
                [columnIdInView]: newCellValue,
              },
            },
            method: Mutation.methods.INSERT,
          } as {} as Entry;
          try {
            await authorizedView.mutate(mutation, {} as MutateOptions);
            assert.fail('The mutate call should have failed');
          } catch (e: unknown) {
            assert.strictEqual(
              (e as ServiceError).message,
              getErrorMessage(authorizedViewFullName),
            );
          }
        });
        it('should fail when writing to a column not in the authorized view', async () => {
          const mutation = {
            key: rowId,
            data: {
              [familyName]: {
                [columnIdNotInView]: newCellValue,
              },
            },
            method: Mutation.methods.INSERT,
          } as {} as Entry;
          try {
            await authorizedView.mutate(mutation, {} as MutateOptions);
            assert.fail('The mutate call should have failed');
          } catch (e: unknown) {
            assert.strictEqual(
              (e as ServiceError).message,
              getErrorMessage(authorizedViewFullName),
            );
          }
        });
      });
      it('should mutate a row for a row/column in view', async () => {
        // Change the cell in view to a new value.
        const firstMutation = {
          key: rowId,
          data: {
            [familyName]: {
              [columnIdInView]: newCellValueData,
            },
          },
          method: Mutation.methods.INSERT,
        } as {} as Entry;
        await authorizedView.mutate(firstMutation, {} as MutateOptions);
        // Ensure the new cell value change took place
        const rows = (await authorizedView.getRows())[0];
        assert.strictEqual(rows[0].id, rowId);
        assert.deepStrictEqual(rows[0].data, {
          [familyName]: {
            [columnIdInView]: [newCellValueData],
          },
        });
        // Change the cell value back to what it was before
        const secondMutation = {
          key: rowId,
          data: {
            [familyName]: {
              [columnIdInView]: columnIdInViewData,
            },
          },
          method: Mutation.methods.INSERT,
        } as {} as Entry;
        await authorizedView.mutate(secondMutation, {} as MutateOptions);
      });
      it('should insert a row for a row/column in view', async () => {
        // Change the cell in view to a new value.
        const firstMutation = {
          key: rowId,
          data: {
            [familyName]: {
              [columnIdInView]: newCellValueData,
            },
          },
        } as {} as Entry;
        await authorizedView.insert(firstMutation, {});
        // Ensure the new cell value change took place
        const rows = (await authorizedView.getRows())[0];
        assert.strictEqual(rows[0].id, rowId);
        assert.deepStrictEqual(rows[0].data, {
          [familyName]: {
            [columnIdInView]: [newCellValueData],
          },
        });
        // Change the cell value back to what it was before
        const secondMutation = {
          key: rowId,
          data: {
            [familyName]: {
              [columnIdInView]: columnIdInViewData,
            },
          },
          method: Mutation.methods.INSERT,
        } as {} as Entry;
        await authorizedView.insert(secondMutation, {});
      });
    });
    describe('SampleRowKeys grpc calls', () => {
      /**
       * This function is for converting a buffer to an integer equal to the
       * total value of the buffer. It is useful for comparing the sampleRowKeys
       * return value to the row identifier since the difference between the
       * total value of these buffers is expected to be exactly 1.
       *
       * @param buffer The buffer being mapped to be used for comparisons.
       */
      function convertBufferToInt(buffer: Uint8Array) {
        return buffer
          .reverse()
          .reduce(
            (accumulator, currentValue, index) =>
              accumulator + Math.pow(currentValue, index),
            0,
          );
      }

      it('should get a sample of row keys', async () => {
        const rowKeys = await authorizedView.sampleRowKeys();
        assert.strictEqual(rowKeys.length, 1);
        assert.strictEqual(rowKeys[0].length, 1);
        assert.deepStrictEqual(
          convertBufferToInt(rowKeys[0][0].key),
          convertBufferToInt(Buffer.from(rowId)) + 1,
        );
      });
      it('should call sampleRowKeysStream for the authorized view', done => {
        (async () => {
          try {
            const stream = await authorizedView.sampleRowKeysStream();
            let receivedDataCount = 0;
            stream.on('data', (row: {key: Uint8Array; offset: string}) => {
              assert.deepStrictEqual(
                convertBufferToInt(row.key),
                convertBufferToInt(Buffer.from(rowId)) + 1,
              );
              receivedDataCount = receivedDataCount + 1;
            });
            stream.on('error', () => {
              done('An error should not have occurred');
            });
            stream.on('end', () => {
              assert.strictEqual(receivedDataCount, 1);
              done();
            });
          } catch (e: unknown) {
            done(e);
          }
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('CheckAndMutate grpc calls', () => {
      it('should error when the request is made for the row key not in a view', done => {
        (async () => {
          try {
            try {
              await authorizedView.filter(
                {
                  rowId: 'some-row-key',
                  filter: {
                    column: columnIdInView,
                  },
                },
                {
                  onMatch: [
                    {
                      key: rowId,
                      method: 'delete',
                    },
                  ],
                },
              );
              done('The call to filter should have failed.');
            } catch (e: unknown) {
              assert.strictEqual(
                (e as ServiceError).details,
                getErrorMessage(authorizedViewFullName),
              );
              done();
            }
          } catch (e: unknown) {
            // Will reach this point if there is an assertion error.
            done(e);
          }
        })().catch(err => {
          throw err;
        });
      });
      it('should call filter for the authorized view', done => {
        (async () => {
          try {
            // Add the row so that the cell offset filter takes effect:
            await authorizedViewTable.insert([
              {
                key: rowId,
                data: {
                  [familyName]: {
                    [columnIdInView]: [columnIdInViewData, columnIdInViewData2],
                  },
                },
              },
            ]);
            const rowsAfterAddition = (await authorizedViewTable.getRows())[0];
            assert.strictEqual(rowsAfterAddition.length, 2);
            assert.strictEqual(rowsAfterAddition[0].id, rowId);
            assert.deepStrictEqual(
              rowsAfterAddition[0].data[familyName][columnIdNotInView].length,
              1,
            );
            assert.deepStrictEqual(
              rowsAfterAddition[0].data[familyName][columnIdInView].length,
              2,
            );
            assert.strictEqual(rowsAfterAddition[1].id, otherRowId);
            assert.deepStrictEqual(rowsAfterAddition[1].data, {
              [familyName]: {
                [columnIdInView]: [columnIdInViewData],
              },
            });
            // Call filter to conduct a checkAndMutate operation.
            const mutations = [
              {
                method: 'delete',
                data: [`${familyName}:${columnIdInView}`],
              },
            ];
            await authorizedView.filter(
              {
                rowId: rowId,
                filter: {
                  row: {
                    cellOffset: 1,
                  },
                },
              },
              {
                onMatch: mutations,
              },
            );
            // Check the rows to ensure the row was deleted by calling `filter`.
            const rows = (await authorizedViewTable.getRows())[0];
            assert.strictEqual(rows.length, 2);
            assert.strictEqual(rows[0].id, rowId);
            assert.deepStrictEqual(rows[0].data, {
              [familyName]: {
                [columnIdNotInView]: [columnIdNotInViewData],
                // [columnIdInView] is deleted by checkAndMutate
              },
            });
            assert.strictEqual(rows[1].id, otherRowId);
            assert.deepStrictEqual(rows[1].data, {
              [familyName]: {
                [columnIdInView]: [columnIdInViewData],
              },
            });
            // Add the row that was deleted back:
            await authorizedViewTable.insert([
              {
                key: rowId,
                data: {
                  [familyName]: {
                    [columnIdInView]: {
                      value: cellValueInView,
                      labels: [],
                      timestamp: 77000,
                    },
                  },
                },
              },
            ]);
            done();
          } catch (e: unknown) {
            done(e);
          }
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('ReadModifyWriteRow grpc calls', () => {
      it('should apply read/modify/write rules to a row', async () => {
        // Append a value to the table:
        const rule = {
          column: `${familyName}:${columnIdInView}`,
          append: '-appended-value',
        };
        await authorizedView.createRules({
          rowId,
          rules: rule,
        });
        // Check that the operation was performed correctly:
        const rows = (await authorizedView.getRows())[0];
        rows[0].data[familyName][columnIdInView][0].timestamp = '77000';
        assert.strictEqual(rows.length, 1);
        assert.strictEqual(rows[0].id, rowId);
        assert.deepStrictEqual(rows[0].data, {
          [familyName]: {
            [columnIdInView]: [
              {
                value: `${cellValueInView}-appended-value`,
                labels: [],
                timestamp: '77000',
              },
              columnIdInViewData,
            ],
          },
        });
        await resetTable();
      });
      it('should apply increment to a row', async () => {
        // First set the row in view cell value to a numeric value:
        const originalValue = Math.floor(Math.random() * 1000000000);
        await authorizedViewTable.deleteRows(rowId);
        const firstMutation = {
          key: rowId,
          data: {
            [familyName]: {
              [columnIdInView]: {
                value: originalValue,
                labels: [],
                timestamp: '77000',
              },
              [columnIdNotInView]: columnIdNotInViewData,
            },
          },
        } as {} as Entry;
        await authorizedViewTable.insert(firstMutation, {});
        // Next, increment the value:
        await authorizedView.increment(
          {
            rowId,
            column: `${familyName}:${columnIdInView}`,
          },
          1,
        );
        const rows = (await authorizedView.getRows())[0];
        rows[0].data[familyName][columnIdInView][0].timestamp = '77000';
        assert.deepStrictEqual(rows[0].data, {
          [familyName]: {
            [columnIdInView]: [
              {
                value: originalValue + 1,
                labels: [],
                timestamp: '77000',
              },
              {
                value: originalValue,
                labels: [],
                timestamp: '77000',
              },
            ],
          },
        });
        await resetTable();
      });
    });
  });

  describe('mutateRows entries tests', () => {
    const table = INSTANCE.table(generateId('table'));

    afterEach(async () => {
      await table.delete();
    });

    it('should only insert one row in the table with mutate', async () => {
      // Create table
      const tableOptions = {
        families: ['columnFamily'],
      };
      await table.create(tableOptions);
      // Add entries
      const entry = {
        columnFamily: {
          column: 1,
        },
      };
      const mutation = {
        key: 'rowKey',
        data: entry,
        method: Mutation.methods.INSERT,
      };
      const gaxOptions = {maxRetries: 4};
      await table.mutate(mutation, {gaxOptions});
      // Get rows and compare
      const [rows] = await table.getRows();
      assert.strictEqual(rows.length, 1);
    });

    it('should insert one row in the table using mutate in a similar way to how the documentation says to use insert', async () => {
      // Create table
      const tableOptions = {
        families: ['columnFamily'],
      };
      await table.create(tableOptions);
      // Add entries
      const mutation = {
        key: 'rowKey',
        data: {
          columnFamily: {
            column: 1,
          },
        },
        method: Mutation.methods.INSERT,
      };
      const gaxOptions = {maxRetries: 4};
      await table.mutate(mutation, {gaxOptions});
      // Get rows and compare
      const [rows] = await table.getRows();
      assert.strictEqual(rows.length, 1);
    });

    it('should only insert one row in the table with insert as described by the GCP documentation', async () => {
      // Create table
      const tableOptions = {
        families: ['follows'],
      };
      await table.create(tableOptions);
      // Add entries
      const greetings = ['Hello World!', 'Hello Bigtable!', 'Hello Node!'];
      const rowsToInsert = greetings.map((greeting, index) => ({
        key: `greeting${index}`,
        data: {
          follows: {
            // 'follows' is the column family
            someColumn: {
              // Setting the timestamp allows the client to perform retries. If
              // server-side time is used, retries may cause multiple cells to
              // be generated.
              timestamp: new Date(),
              value: greeting,
            },
          },
        },
      }));
      await table.insert(rowsToInsert);
      // Get rows and compare
      const [rows] = await table.getRows();
      assert.strictEqual(rows.length, 3);
    });
  });
});

function createInstanceConfig(
  clusterId: string,
  location: string,
  nodes: number,
  time_created: number,
  storage?: 'ssd' | 'hdd',
) {
  return {
    clusters: [
      {
        id: clusterId,
        location,
        nodes,
        storage,
      },
    ],
    labels: {
      time_created,
    },
  };
}
