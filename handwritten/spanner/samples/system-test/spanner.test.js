// Copyright 2024 Google LLC
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

'use strict';

const {Spanner} = require('@google-cloud/spanner');
const {KeyManagementServiceClient} = require('@google-cloud/kms');
const {assert} = require('chai');
const {describe, it, before, after, afterEach} = require('mocha');
const cp = require('child_process');
const pLimit = require('p-limit');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const batchCmd = 'node batch.js';
const crudCmd = 'node crud.js';
const schemaCmd = 'node schema.js';
const queryOptionsCmd = 'node queryoptions.js';
const rpcPriorityRunCommand = 'node rpc-priority-run.js';
const rpcPriorityReadCommand = 'node rpc-priority-read.js';
const rpcPriorityBatchDMLCommand = 'node rpc-priority-batch-dml.js';
const rpcPriorityPartitionedDMLCommand = 'node rpc-priority-partitioned-dml.js';
const rpcPriorityTransactionCommand = 'node rpc-priority-transaction.js';
const rpcPriorityQueryPartitionsCommand =
  'node rpc-priority-query-partitions.js';
const transactionCmd = 'node transaction.js';
const transactionTagCommand = 'node transaction-tag.js';
const transactionTimeoutCommand = 'node transaction-timeout.js';
const statementTimeoutCommand = 'node statement-timeout.js';
const requestTagCommand = 'node request-tag.js';
const timestampCmd = 'node timestamp.js';
const structCmd = 'node struct.js';
const dmlCmd = 'node dml.js';
const batchWriteCmd = 'node batch-write.js';
const datatypesCmd = 'node datatypes.js';
const backupsCmd = 'node backups.js';
const instanceCmd = 'node instance.js';
const createTableWithForeignKeyDeleteCascadeCommand =
  'node table-create-with-foreign-key-delete-cascade.js';
const createInstanceWithoutDefaultBackupSchedulesCommand =
  'node create-instance-without-default-backup-schedules.js';
const updateInstanceDefaultBackupScheduleTypeCommand =
  'node update-instance-default-backup-schedule-type.js';
const alterTableWithForeignKeyDeleteCascadeCommand =
  'node table-alter-with-foreign-key-delete-cascade.js';
const dropForeignKeyConstraintDeleteCascaseCommand =
  'node table-drop-foreign-key-constraint-delete-cascade.js';
const traceObservabilityCommand = 'node observability-traces.js';

const CURRENT_TIME = Math.round(Date.now() / 1000).toString();
const PROJECT_ID = process.env.GCLOUD_PROJECT;
const PREFIX = 'test-instance';
const INSTANCE_ID =
  process.env.SPANNERTEST_INSTANCE || `${PREFIX}-${CURRENT_TIME}`;
const MULTI_REGION_INSTANCE_ID =
  process.env.SPANNERTEST_MR_INSTANCE || `${PREFIX}-mr-${CURRENT_TIME}`;
const SAMPLE_INSTANCE_ID = `${PREFIX}-my-sample-instance-${CURRENT_TIME}`;
const SAMPLE_INSTANCE_CONFIG_ID = `custom-my-sample-instance-config-${CURRENT_TIME}`;
const BASE_INSTANCE_CONFIG_ID = 'regional-us-central1';
const INSTANCE_ALREADY_EXISTS = !!process.env.SPANNERTEST_INSTANCE;
const DATABASE_ID = `test-database-${CURRENT_TIME}`;
const PG_DATABASE_ID = `test-pg-database-${CURRENT_TIME}`;
const RESTORE_DATABASE_ID = `test-database-${CURRENT_TIME}-r`;
const ENCRYPTED_RESTORE_DATABASE_ID = `test-database-${CURRENT_TIME}-r-enc`;
const VERSION_RETENTION_DATABASE_ID = `test-database-${CURRENT_TIME}-v`;
const ENCRYPTED_DATABASE_ID = `test-database-${CURRENT_TIME}-enc`;
const DEFAULT_LEADER_DATABASE_ID = `test-database-${CURRENT_TIME}-dl`;
const SEQUENCE_DATABASE_ID = `test-seq-database-${CURRENT_TIME}-r`;
const PROTO_DATABASE_ID = `test-db${CURRENT_TIME}-proto1`;
const BACKUP_ID = `test-backup-${CURRENT_TIME}`;
const COPY_BACKUP_ID = `test-copy-backup-${CURRENT_TIME}`;
const ENCRYPTED_BACKUP_ID = `test-backup-${CURRENT_TIME}-enc`;
const CANCELLED_BACKUP_ID = `test-backup-${CURRENT_TIME}-c`;
const LOCATION_ID = 'regional-us-central1';
const MULTI_REGION_LOCATION_ID = 'nam3';
const PG_LOCATION_ID = 'regional-us-west2';
const KEY_LOCATION_ID1 = 'us-central1';
const KEY_LOCATION_ID2 = 'us-east1';
const KEY_LOCATION_ID3 = 'us-east4';
const KEY_RING_ID = 'test-key-ring-node';
const KEY_ID = 'test-key';
const DEFAULT_LEADER = 'us-central1';
const DEFAULT_LEADER_2 = 'us-east1';

const spanner = new Spanner({
  projectId: PROJECT_ID,
});
const LABEL = 'node-sample-tests';
const GAX_OPTIONS = {
  retry: {
    retryCodes: [4, 8, 14],
    backoffSettings: {
      initialRetryDelayMillis: 1000,
      retryDelayMultiplier: 1.3,
      maxRetryDelayMillis: 32000,
      initialRpcTimeoutMillis: 60000,
      rpcTimeoutMultiplier: 1,
      maxRpcTimeoutMillis: 60000,
      totalTimeoutMillis: 600000,
    },
  },
};

const delay = async test => {
  const retries = test.currentRetry();
  // No retry on the first failure.
  if (retries === 0) return;
  // See: https://cloud.google.com/storage/docs/exponential-backoff
  const ms = Math.pow(2, retries) + Math.random() * 1000;
  return new Promise(done => {
    console.info(`retrying "${test.title}" in ${ms}ms`);
    setTimeout(done, ms);
  });
};

async function deleteStaleInstances() {
  let [instances] = await spanner.getInstances({
    filter: `(labels.${LABEL}:true) OR (labels.cloud_spanner_samples:true)`,
  });
  const old = new Date();
  old.setHours(old.getHours() - 4);

  instances = instances.filter(instance => {
    return (
      instance.metadata.labels['created'] &&
      new Date(parseInt(instance.metadata.labels['created']) * 1000) < old
    );
  });
  const limit = pLimit(5);
  await Promise.all(
    instances.map(instance =>
      limit(() => setTimeout(deleteInstance, delay, instance)),
    ),
  );
}

async function deleteInstance(instance) {
  const [backups] = await instance.getBackups();
  await Promise.all(backups.map(backup => backup.delete(GAX_OPTIONS)));
  return instance.delete(GAX_OPTIONS);
}

async function getCryptoKey(key_location) {
  const NOT_FOUND = 5;

  // Instantiates a client.
  const client = new KeyManagementServiceClient();

  // Build the parent key ring name.
  const keyRingName = client.keyRingPath(PROJECT_ID, key_location, KEY_RING_ID);

  // Get key ring.
  try {
    await client.getKeyRing({name: keyRingName});
  } catch (err) {
    // Create key ring if it doesn't exist.
    if (err.code === NOT_FOUND) {
      // Build the parent location name.
      const locationName = client.locationPath(PROJECT_ID, key_location);
      await client.createKeyRing({
        parent: locationName,
        keyRingId: KEY_RING_ID,
      });
    } else {
      throw err;
    }
  }

  // Get key.
  try {
    // Build the key name
    const keyName = client.cryptoKeyPath(
      PROJECT_ID,
      key_location,
      KEY_RING_ID,
      KEY_ID,
    );
    const [key] = await client.getCryptoKey({
      name: keyName,
    });
    return key;
  } catch (err) {
    // Create key if it doesn't exist.
    if (err.code === NOT_FOUND) {
      const [key] = await client.createCryptoKey({
        parent: keyRingName,
        cryptoKeyId: KEY_ID,
        cryptoKey: {
          purpose: 'ENCRYPT_DECRYPT',
          versionTemplate: {
            algorithm: 'GOOGLE_SYMMETRIC_ENCRYPTION',
          },
        },
      });
      return key;
    } else {
      throw err;
    }
  }
}

describe('Autogenerated Admin Clients', () => {
  const instance = spanner.instance(INSTANCE_ID);

  before(async () => {
    await deleteStaleInstances();

    if (!INSTANCE_ALREADY_EXISTS) {
      const [, operation] = await instance.create({
        config: LOCATION_ID,
        nodes: 1,
        edition: 'ENTERPRISE_PLUS',
        labels: {
          [LABEL]: 'true',
          created: CURRENT_TIME,
        },
        gaxOptions: GAX_OPTIONS,
      });
      return operation.promise();
    } else {
      console.log(
        `Not creating temp instance, using + ${instance.formattedName_}...`,
      );
    }
  });

  after(async () => {
    const instance = spanner.instance(INSTANCE_ID);

    if (!INSTANCE_ALREADY_EXISTS) {
      // Make sure all backups are deleted before an instance can be deleted.
      await Promise.all([
        instance.backup(BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(ENCRYPTED_BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(COPY_BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(CANCELLED_BACKUP_ID).delete(GAX_OPTIONS),
      ]);
      await instance.delete(GAX_OPTIONS);
    } else {
      await Promise.all([
        instance.database(DATABASE_ID).delete(),
        instance.database(PG_DATABASE_ID).delete(),
        instance.database(RESTORE_DATABASE_ID).delete(),
        instance.database(ENCRYPTED_RESTORE_DATABASE_ID).delete(),
        instance.backup(BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(COPY_BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(ENCRYPTED_BACKUP_ID).delete(GAX_OPTIONS),
        instance.backup(CANCELLED_BACKUP_ID).delete(GAX_OPTIONS),
      ]);
    }
    await spanner.instance(SAMPLE_INSTANCE_ID).delete(GAX_OPTIONS);
  });

  describe('instance', () => {
    afterEach(async () => {
      const sample_instance = spanner.instance(SAMPLE_INSTANCE_ID);
      await sample_instance.delete();
    });

    // create_and_update_instance
    it('should create and update an example instance with spanner editions', async () => {
      const createInstanceOutput = execSync(
        `${instanceCmd} createInstance "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        createInstanceOutput,
        new RegExp(
          `Waiting for operation on ${SAMPLE_INSTANCE_ID} to complete...`,
        ),
      );
      assert.match(
        createInstanceOutput,
        new RegExp(`Created instance ${SAMPLE_INSTANCE_ID}.`),
      );

      const updateInstanceOutput = execSync(
        `node instance-update "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        updateInstanceOutput,
        new RegExp(
          `Waiting for operation on ${SAMPLE_INSTANCE_ID} to complete...`,
        ),
      );
      assert.match(
        updateInstanceOutput,
        new RegExp(`Updated instance ${SAMPLE_INSTANCE_ID}.`),
      );
      assert.match(
        updateInstanceOutput,
        new RegExp(
          `Instance ${SAMPLE_INSTANCE_ID} has been updated with the ENTERPRISE edition.`,
        ),
      );
    });

    // create_and_update_instance_default_backup_schedule_type
    it('should create an example instance without default backup schedule type and update the instance to have it', async () => {
      const createInstanceOutput = execSync(
        `${createInstanceWithoutDefaultBackupSchedulesCommand} "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        createInstanceOutput,
        new RegExp(
          `Created instance ${SAMPLE_INSTANCE_ID} without default backup schedules.`,
        ),
      );

      const updateInstanceOutput = execSync(
        `${updateInstanceDefaultBackupScheduleTypeCommand} "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        updateInstanceOutput,
        new RegExp(
          `Instance ${SAMPLE_INSTANCE_ID} has been updated with the AUTOMATIC default backup schedule type.`,
        ),
      );
    });

    // create_instance_with_processing_units
    it('should create an example instance with processing units', async () => {
      const output = execSync(
        `${instanceCmd} createInstanceWithProcessingUnits "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for operation on ${SAMPLE_INSTANCE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Created instance ${SAMPLE_INSTANCE_ID}.`),
      );
      assert.match(
        output,
        new RegExp(`Instance ${SAMPLE_INSTANCE_ID} has 500 processing units.`),
      );
    });

    // create_instance_with_autoscaling_config
    it('should create an example instance with autoscaling config', async () => {
      const output = execSync(
        `node instance-with-autoscaling-config.js "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for operation on ${SAMPLE_INSTANCE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Created instance ${SAMPLE_INSTANCE_ID}.`),
      );
      assert.match(
        output,
        new RegExp(
          `Autoscaling configurations of ${SAMPLE_INSTANCE_ID} are:  ` +
            '\n' +
            'Min nodes: 1 ' +
            'nodes.' +
            '\n' +
            'Max nodes: 2' +
            ' nodes.' +
            '\n' +
            'High priority cpu utilization percent: 65.' +
            '\n' +
            'Storage utilization percent: 95.',
        ),
      );
    });

    // create_instance_with_asymmetric_autoscaling_config
    it('should create an example instance with autoscaling config and asymmetric Autoscaling Options', async () => {
      const output = execSync(
        `node instance-with-asymmetric-autoscaling-config.js "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for operation on ${SAMPLE_INSTANCE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Created instance ${SAMPLE_INSTANCE_ID}.`),
      );
      assert.match(
        output,
        new RegExp(
          `Autoscaling configurations of ${SAMPLE_INSTANCE_ID} are:  ` +
            '\n' +
            'Min nodes: 1 ' +
            'nodes.' +
            '\n' +
            'Max nodes: 2' +
            ' nodes.' +
            '\n' +
            'High priority cpu utilization percent: 65.' +
            '\n' +
            'Storage utilization percent: 95.' +
            '\n' +
            'Asymmetric Autoscaling Options: europe-west1, europe-west4, asia-east1',
        ),
      );
    });
  });

  // check that base instance was created
  it('should have created an instance', async () => {
    const [exists] = await instance.exists();
    assert.strictEqual(
      exists,
      true,
      'The main instance was not created successfully!',
    );
  });

  // create_database
  it('should create an example database', async () => {
    const output = execSync(
      `${schemaCmd} createDatabase "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(`Waiting for creation of ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(`Created database ${DATABASE_ID} on instance ${INSTANCE_ID}.`),
    );
  });

  // update_database
  it('should set database metadata', async () => {
    const output = execSync(
      `node database-update.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(
        `Waiting for update operation for ${DATABASE_ID} to complete...`,
      ),
    );
    assert.match(output, new RegExp(`Updated database ${DATABASE_ID}.`));
    // cleanup
    const [operation] = await instance
      .database(DATABASE_ID)
      .setMetadata({enableDropProtection: false});
    await operation.promise();
  });

  describe('encrypted database', () => {
    after(async () => {
      const instance = spanner.instance(INSTANCE_ID);
      const encrypted_database = instance.database(ENCRYPTED_DATABASE_ID);
      await encrypted_database.delete();
    });

    // create_database_with_encryption_key
    it('should create a database with an encryption key', async () => {
      const key = await getCryptoKey(KEY_LOCATION_ID1);

      const output = execSync(
        `${schemaCmd} createDatabaseWithEncryptionKey "${INSTANCE_ID}" "${ENCRYPTED_DATABASE_ID}" ${PROJECT_ID} "${key.name}"`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for operation on ${ENCRYPTED_DATABASE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(
          `Created database ${ENCRYPTED_DATABASE_ID} on instance ${INSTANCE_ID}.`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Database encrypted with key ${key.name}.`),
      );
    });
  });

  describe('quickstart', () => {
    // Running the quickstart test in here since there's already a spanner
    // instance and database set up at this point.
    it('should query a table', async () => {
      const output = execSync(
        `node quickstart ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID}`,
      );
      assert.match(output, /Query: \d+ found./);
    });
  });

  // insert_data
  it('should insert rows into an example table', async () => {
    const output = execSync(
      `${crudCmd} insert ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Inserted data\./);
  });

  // delete_data
  it('should delete and then insert rows in the example tables', async () => {
    let output = execSync(
      `${crudCmd} delete ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.include(output, 'Deleted individual rows in Albums.');
    assert.include(output, '2 records deleted from Singers.');
    assert.include(output, '3 records deleted from Singers.');
    output = execSync(
      `${crudCmd} insert ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Inserted data\./);
  });

  // query_data
  it('should query an example table and return matching rows', async () => {
    const output = execSync(
      `${crudCmd} query ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // read_data
  it('should read an example table', async () => {
    const output = execSync(
      `${crudCmd} read ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // add_column
  it('should add a column to a table', async () => {
    const output = execSync(
      `${schemaCmd} addColumn ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Waiting for operation to complete\.\.\./);
    assert.match(output, /Added the MarketingBudget column\./);
  });

  // update_data
  it('should update existing rows in an example table', async () => {
    const output = execSync(
      `${crudCmd} update ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Updated data\./);
  });

  // read_stale_data
  it('should read stale data from an example table', async () => {
    // read-stale-data reads data that is exactly 15 seconds old.  So, make sure
    // 15 seconds have elapsed since the update_data test.
    await new Promise(r => setTimeout(r, 16000));
    const output = execSync(
      `${crudCmd} read-stale ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk, MarketingBudget: 100000/,
    );
    assert.match(
      output,
      /SingerId: 2, AlbumId: 2, AlbumTitle: Forever Hold your Peace, MarketingBudget: 500000/,
    );
  });

  // query_data_with_new_column
  it('should query an example table with an additional column and return matching rows', async () => {
    const output = execSync(
      `${schemaCmd} queryNewColumn ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, MarketingBudget: 100000/);
    assert.match(output, /SingerId: 2, AlbumId: 2, MarketingBudget: 500000/);
  });

  // create_index
  it('should create an index in an example table', async () => {
    const output = execSync(
      `node index-create ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Waiting for operation to complete\.\.\./);
    assert.match(output, /Added the AlbumsByAlbumTitle index\./);
  });

  // create_storing_index
  it('should create a storing index in an example table', async function () {
    this.retries(5);
    // Delay the start of the test, if this is a retry.
    await delay(this.test);

    const output = execSync(
      `node index-create-storing ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Waiting for operation to complete\.\.\./);
    assert.match(output, /Added the AlbumsByAlbumTitle2 index\./);
  });

  // query_data_with_index
  it('should query an example table with an index and return matching rows', async () => {
    const output = execSync(
      `node index-query-data ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /AlbumId: 2, AlbumTitle: Go, Go, Go, MarketingBudget:/,
    );
    assert.notMatch(
      output,
      /AlbumId: 1, AlbumTitle: Total Junk, MarketingBudget:/,
    );
  });

  it('should respect query boundaries when querying an example table with an index', async () => {
    const output = execSync(
      `node index-query-data ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID} "Ardvark" "Zoo"`,
    );
    assert.match(
      output,
      /AlbumId: 1, AlbumTitle: Total Junk, MarketingBudget:/,
    );
    assert.match(
      output,
      /AlbumId: 2, AlbumTitle: Go, Go, Go, MarketingBudget:/,
    );
  });

  // read_data_with_index
  it('should read an example table with an index', async () => {
    const output = execSync(
      `node index-read-data ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // read_data_with_storing_index
  it('should read an example table with a storing index', async () => {
    const output = execSync(
      `node index-read-data-with-storing ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // spanner_create_client_with_query_options
  it('should use query options from a database reference', async () => {
    const output = execSync(
      `${queryOptionsCmd} databaseWithQueryOptions ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /AlbumId: 2, AlbumTitle: Forever Hold your Peace, MarketingBudget:/,
    );
  });

  // spanner_query_with_query_options
  it('should use query options on request', async () => {
    const output = execSync(
      `${queryOptionsCmd} queryWithQueryOptions ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /AlbumId: 2, AlbumTitle: Forever Hold your Peace, MarketingBudget:/,
    );
  });

  // query with RPC priority for run command
  it('should use RPC priority from request options for run command', async () => {
    const output = execSync(
      `${rpcPriorityRunCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully fetched \d rows using low RPC priority\./,
    );
    assert.match(
      output,
      /AlbumId: 2, AlbumTitle: Forever Hold your Peace, MarketingBudget:/,
    );
  });

  // query with RPC priority for Read command
  it('should use RPC priority from request options for read command', async () => {
    const output = execSync(
      `${rpcPriorityReadCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully fetched \d rows using low RPC priority\./,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // query with RPC priority for transaction command
  it('should use RPC priority from request options for transaction command', async () => {
    const output = execSync(
      `${rpcPriorityTransactionCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully inserted 1 record into the Singers table using low RPC priority\./,
    );
  });

  // query with RPC priority for batch DML command
  it('should use RPC priority from request options for batch DML command', async () => {
    const output = execSync(
      `${rpcPriorityBatchDMLCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully executed 2 SQL statements using Batch DML using low RPC priority\./,
    );
  });

  // query with RPC priority for partitioned DML command
  it('should use RPC priority from request options for partitioned DML command', async () => {
    const output = execSync(
      `${rpcPriorityPartitionedDMLCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp('Successfully updated (\\d+) records using low RPC priority.'),
    );
  });

  // query with RPC priority for Query partitions command
  it('should use RPC priority from request options for Query partition command', async () => {
    const output = execSync(
      `${rpcPriorityQueryPartitionsCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully created \d query partitions using low RPC priority\./,
    );
    assert.match(output, /Successfully received \d from executed partitions\./);
  });

  // read_only_transactioni
  it('should read an example table using transactions', async () => {
    const output = execSync(
      `${transactionCmd} readOnly ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk/);
    assert.match(output, /Successfully executed read-only transaction\./);
  });

  // read_write_transaction
  it('should read from and write to an example table using transactions', async () => {
    let output = execSync(
      `${transactionCmd} readWrite ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /The first album's marketing budget: 100000/);
    assert.match(output, /The second album's marketing budget: 500000/);
    assert.match(
      output,
      /Successfully executed read-write transaction to transfer 200000 from Album 2 to Album 1./,
    );
    output = execSync(
      `${schemaCmd} queryNewColumn ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, MarketingBudget: 300000/);
    assert.match(output, /SingerId: 2, AlbumId: 2, MarketingBudget: 300000/);
  });

  // batch_client
  it('should create and execute query partitions', async () => {
    const output = execSync(
      `${batchCmd} create-and-execute-query-partitions ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully created \d query partitions\./);
    assert.match(output, /Successfully received \d from executed partitions\./);
  });

  // execute_partition
  it('should execute a partition', async () => {
    const instance = spanner.instance(INSTANCE_ID);
    const database = instance.database(DATABASE_ID);
    const [transaction] = await database.createBatchTransaction();
    const identifier = JSON.stringify(transaction.identifier());

    const query = 'SELECT SingerId FROM Albums';
    const [partitions] = await transaction.createQueryPartitions(query);
    const partition = JSON.stringify(partitions[0]);

    const output = execSync(
      `${batchCmd} execute-partition ${INSTANCE_ID} ${DATABASE_ID} '${identifier}' '${partition}' ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully received \d from executed partition\./);
    await transaction.close();
  });

  // add_timestamp_column
  it('should add a timestamp column to a table', async () => {
    const output = execSync(
      `${timestampCmd} addTimestampColumn ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Waiting for operation to complete\.\.\./);
    assert.match(
      output,
      /Added LastUpdateTime as a commit timestamp column in Albums table\./,
    );
  });

  // update_data_with_timestamp_column
  it('should update existing rows in an example table with commit timestamp column', async () => {
    const output = execSync(
      `${timestampCmd} updateWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Updated data\./);
  });

  // query_data_with_timestamp_column
  it('should query an example table with an additional timestamp column and return matching rows', async () => {
    const output = execSync(
      `${timestampCmd} queryWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /SingerId: 1, AlbumId: 1, MarketingBudget: 1000000, LastUpdateTime:/,
    );
    assert.match(
      output,
      /SingerId: 2, AlbumId: 2, MarketingBudget: 750000, LastUpdateTime:/,
    );
  });

  // create_table_with_timestamp_column
  it('should create an example table with a timestamp column', async () => {
    const output = execSync(
      `${timestampCmd} createTableWithTimestamp "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );

    assert.match(
      output,
      new RegExp(`Waiting for operation on ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(`Created table Performances in database ${DATABASE_ID}.`),
    );
  });

  // insert_data_with_timestamp
  it('should insert rows into an example table with timestamp column', async () => {
    const output = execSync(
      `${timestampCmd} insertWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Inserted data\./);
  });

  // query_new_table_with_timestamp
  it('should query an example table with a non-null timestamp column and return matching rows', async () => {
    const output = execSync(
      `${timestampCmd} queryTableWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, VenueId: 4, EventDate:/);
    assert.match(output, /Revenue: 15000, LastUpdateTime:/);
  });

  // write_data_for_struct_queries
  it('should insert rows into an example table for use with struct query examples', async () => {
    const output = execSync(
      `${structCmd} writeDataForStructQueries ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Inserted data\./);
  });

  // query_with_struct_param
  it('should query an example table with a STRUCT param', async () => {
    const output = execSync(
      `${structCmd} queryDataWithStruct ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 6/);
  });

  // query_with_array_of_struct_param
  it('should query an example table with an array of STRUCT param', async () => {
    const output = execSync(
      `${structCmd} queryWithArrayOfStruct ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 6\nSingerId: 7\nSingerId: 8/);
  });

  // query_with_struct_field_param
  it('should query an example table with a STRUCT field param', async () => {
    const output = execSync(
      `${structCmd} queryStructField ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 6/);
  });

  // query_with_nested_struct_param
  it('should query an example table with a nested STRUCT param', async () => {
    const output = execSync(
      `${structCmd} queryNestedStructField ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /SingerId: 6, SongName: Imagination\nSingerId: 9, SongName: Imagination/,
    );
  });

  // dml_standard_insert
  it('should insert rows into an example table using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} insertUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully inserted 1 record into the Singers table/,
    );
  });

  // dml_standard_update
  it('should update a row in an example table using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} updateUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully updated 1 record/);
  });

  // dml_standard_delete
  it('should delete a row from an example table using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} deleteUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully deleted 1 record\./);
  });

  // dml_standard_update_with_timestamp
  it('should update the timestamp of multiple records in an example table using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} updateUsingDmlWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully updated 3 records/);
  });

  // dml_write_then_read
  it('should insert a record in an example table using a DML statement and then query the record', async () => {
    const output = execSync(
      `${dmlCmd} writeAndReadUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Timothy Campbell/);
  });

  // dml_structs
  it('should update a record in an example table using a DML statement along with a struct value', async () => {
    const output = execSync(
      `${dmlCmd} updateUsingDmlWithStruct ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully updated 1 record/);
  });

  // dml_getting_started_insert
  it('should insert multiple records into an example table using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} writeUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /4 records inserted/);
  });

  // dml_query_with_parameter
  it('should use a parameter query to query record that was inserted using a DML statement', async () => {
    const output = execSync(
      `${dmlCmd} queryWithParameter ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 12, FirstName: Melissa, LastName: Garcia/);
  });

  // dml_getting_started_update
  it('should transfer value from one record to another using DML statements within a transaction', async () => {
    const output = execSync(
      `${dmlCmd} writeWithTransactionUsingDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully executed read-write transaction using DML to transfer 200000 from Album 2 to Album 1/,
    );
  });

  //  dml_partitioned_update
  it('should update multiple records using a partitioned DML statement', async () => {
    const output = execSync(
      `${dmlCmd} updateUsingPartitionedDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully updated 3 records/);
  });

  //  dml_partitioned_delete
  it('should delete multiple records using a partitioned DML statement', async () => {
    const output = execSync(
      `${dmlCmd} deleteUsingPartitionedDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Successfully deleted 6 records/);
  });

  //  dml_batch_update
  it('should insert and update records using Batch DML', async () => {
    const output = execSync(
      `${dmlCmd} updateUsingBatchDml ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /Successfully executed 2 SQL statements using Batch DML/,
    );
  });

  // dml_returning_insert
  it('should insert records using DML Returning', async () => {
    const output = execSync(
      `node dml-returning-insert ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp('Successfully inserted 1 record into the Singers table'),
    );
    assert.match(output, new RegExp('Virginia Watson'));
  });

  // dml_returning_update
  it('should update records using DML Returning', async () => {
    const output = execSync(
      `node dml-returning-update ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp('Successfully updated 1 record into the Albums table'),
    );
    assert.match(output, new RegExp('2000000'));
  });

  // dml_returning_delete
  it('should delete records using DML Returning', async () => {
    const output = execSync(
      `node dml-returning-delete ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp('Successfully deleted 1 record from the Singers table'),
    );
    assert.match(output, new RegExp('Virginia Watson'));
  });

  // batch_write
  it('should perform CRUD operations using batch write', async () => {
    const output = execSync(
      `${batchWriteCmd} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    ).toString();

    const successRegex =
      /Mutation group indexes [\d,]+ have been applied with commit timestamp \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/;
    const failureRegex =
      /Mutation group indexes [\d,]+, could not be applied with error code \d+, and error message .+/;

    const successMatch = successRegex.test(output);
    const errorMatch = failureRegex.test(output);

    if (successMatch || errorMatch) {
      assert.include(output, 'Request completed successfully');
    } else {
      assert.ifError(output);
    }
  });

  // create_table_with_datatypes
  it('should create Venues example table with supported datatype columns', async () => {
    const output = execSync(
      `${datatypesCmd} createVenuesTable "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );

    assert.match(
      output,
      new RegExp(`Waiting for operation on ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(`Created table Venues in database ${DATABASE_ID}.`),
    );
  });

  // insert_datatypes_data
  it('should insert multiple records into Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} insertData ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Inserted data./);
  });

  // query_with_array_parameter
  it('should use an ARRAY query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithArray ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /VenueId: 19, VenueName: Venue 19, AvailableDate: 2020-11-01/,
    );
    assert.match(
      output,
      /VenueId: 42, VenueName: Venue 42, AvailableDate: 2020-10-01/,
    );
  });

  // query_with_bool_parameter
  it('should use a BOOL query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithBool ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /VenueId: 19, VenueName: Venue 19, OutdoorVenue: true/,
    );
  });

  // query_with_bytes_parameter
  it('should use a BYTES query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithBytes ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 4, VenueName: Venue 4/);
  });

  // query_with_date_parameter
  it('should use a DATE query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithDate ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /VenueId: 4, VenueName: Venue 4, LastContactDate: 2018-09-02/,
    );
    assert.match(
      output,
      /VenueId: 42, VenueName: Venue 42, LastContactDate: 2018-10-01/,
    );
  });

  // query_with_float_parameter
  it('should use a FLOAT64 query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithFloat ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      /VenueId: 4, VenueName: Venue 4, PopularityScore: 0.8/,
    );
    assert.match(
      output,
      /VenueId: 19, VenueName: Venue 19, PopularityScore: 0.9/,
    );
  });

  // query_with_int_parameter
  it('should use a INT64 query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithInt ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 19, VenueName: Venue 19, Capacity: 6300/);
    assert.match(output, /VenueId: 42, VenueName: Venue 42, Capacity: 3000/);
  });

  // query_with_string_parameter
  it('should use a STRING query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithString ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 42, VenueName: Venue 42/);
  });

  // query_with_timestamp_parameter
  it('should use a TIMESTAMP query parameter to query record from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithTimestamp ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 4, VenueName: Venue 4, LastUpdateTime:/);
    assert.match(output, /VenueId: 19, VenueName: Venue 19, LastUpdateTime:/);
    assert.match(output, /VenueId: 42, VenueName: Venue 42, LastUpdateTime:/);
  });

  // add_numeric_column
  it('should add a Revenue column to Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} addNumericColumn "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );

    assert.include(
      output,
      `Waiting for operation on ${DATABASE_ID} to complete...`,
    );
    assert.include(
      output,
      `Added Revenue column to Venues table in database ${DATABASE_ID}.`,
    );
  });

  // update_data_with_numeric
  it('should update rows in Venues example table to add data in Revenue column', async () => {
    const output = execSync(
      `${datatypesCmd} updateWithNumericData ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Updated data./);
  });

  // query_with_numeric_parameter
  it('should use a NUMERIC query parameter to query records from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithNumericParameter ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 4, Revenue: 35000/);
  });

  // query with request tag
  it('should execute a query with a request tag', async () => {
    const output = execSync(
      `${requestTagCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /SingerId: 1, AlbumId: 1, AlbumTitle: Total Junk/);
  });

  // read_write_transaction with transaction tag
  it('should execute a read/write transaction with a transaction tag', async () => {
    const output = execSync(
      `${transactionTagCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.include(output, 'Inserted new outdoor venue');
  });

  // read_write_transaction with transaction timeout
  it('should execute a read/write transaction with a transaction timeout of 60 seconds', async () => {
    const output = execSync(
      `${transactionTimeoutCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.include(output, '1 record inserted.');
  });

  // read_write_transaction with statement timeout
  it('should execute a read/write transaction with a statement timeout of 60 seconds', async () => {
    const output = execSync(
      `${statementTimeoutCommand} ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.include(output, '1 record inserted.');
  });

  // add_json_column
  it('should add a VenueDetails column to Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} addJsonColumn "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );

    assert.include(
      output,
      `Waiting for operation on ${DATABASE_ID} to complete...`,
    );
    assert.include(
      output,
      `Added VenueDetails column to Venues table in database ${DATABASE_ID}.`,
    );
  });

  // update_data_with_json
  it('should update rows in Venues example table to add data in VenueDetails column', async () => {
    const output = execSync(
      `${datatypesCmd} updateWithJsonData ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Updated data./);
  });

  // query_with_json_parameter
  it('should use a JSON query parameter to query records from the Venues example table', async () => {
    const output = execSync(
      `${datatypesCmd} queryWithJsonParameter ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /VenueId: 19, Details: {"open":true,"rating":9}/);
  });

  // add_and_drop_new_database_role
  it('should add and drop new database roles', async () => {
    const output = execSync(
      `node add-and-drop-new-database-role.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, new RegExp('Waiting for operation to complete...'));
    assert.match(
      output,
      new RegExp('Created roles child and parent and granted privileges'),
    );
    assert.match(
      output,
      new RegExp('Revoked privileges and dropped role child'),
    );
  });

  // read_data_with_database_role
  it('should read data with database role', async () => {
    const output = execSync(
      `node read-data-with-database-role.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp('SingerId: 1, FirstName: Marc, LastName: Richards'),
    );
  });

  // get_database_roles
  it('should list database roles', async () => {
    const output = execSync(
      `node get-database-roles.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(
        `Role: projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/databaseRoles/public`,
      ),
    );
  });

  it('shoud create a full backup schedule', async () => {
    const output = execSync(
      `node create-full-backup-schedule.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID} full-backup-schedule`,
    );
    assert.match(output, new RegExp('Created full backup schedule'));
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/full-backup-schedule`,
      ),
    );
  });

  it('shoud create an incremental backup schedule', async () => {
    const output = execSync(
      `node create-incremental-backup-schedule.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID} incremental-backup-schedule`,
    );
    assert.match(output, new RegExp('Created incremental backup schedule'));
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/incremental-backup-schedule`,
      ),
    );
  });

  it('shoud list backup schedules', async () => {
    const output = execSync(
      `node list-backup-schedules.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID}`,
    );
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/full-backup-schedule`,
      ),
    );
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/incremental-backup-schedule`,
      ),
    );
  });

  it('shoud get a backup schedule', async () => {
    const output = execSync(
      `node get-backup-schedule.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID} full-backup-schedule`,
    );
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/full-backup-schedule`,
      ),
    );
  });

  it('shoud update a backup schedule', async () => {
    const output = execSync(
      `node update-backup-schedule.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID} full-backup-schedule`,
    );
    assert.match(output, new RegExp('Updated backup schedule'));
    assert.match(
      output,
      new RegExp(
        `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/databases/${DATABASE_ID}/backupSchedules/full-backup-schedule`,
      ),
    );
  });

  it('shoud delete a backup schedule', async () => {
    const output = execSync(
      `node delete-backup-schedule.js ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID} full-backup-schedule`,
    );
    assert.match(output, new RegExp('Deleted backup schedule'));
  });

  // create_backup
  it('should create a backup of the database', async () => {
    const instance = spanner.instance(INSTANCE_ID);
    const database = instance.database(DATABASE_ID);
    const query = {
      sql: 'SELECT CURRENT_TIMESTAMP() as Timestamp',
    };
    const [rows] = await database.run(query);
    const versionTime = rows[0].toJSON().Timestamp.toISOString();

    const output = execSync(
      `${backupsCmd} createBackup ${INSTANCE_ID} ${DATABASE_ID} ${BACKUP_ID} ${PROJECT_ID} ${versionTime}`,
    );
    assert.match(output, new RegExp(`Backup (.+)${BACKUP_ID} of size`));
  });

  // create_backup_with_encryption_key
  it('should create an encrypted backup of the database', async () => {
    const key = await getCryptoKey(KEY_LOCATION_ID1);

    const output = execSync(
      `${backupsCmd} createBackupWithEncryptionKey ${INSTANCE_ID} ${DATABASE_ID} ${ENCRYPTED_BACKUP_ID} ${PROJECT_ID} ${key.name}`,
    );
    assert.match(
      output,
      new RegExp(`Backup (.+)${ENCRYPTED_BACKUP_ID} of size`),
    );
    assert.include(output, `using encryption key ${key.name}`);
  });

  // copy_backup
  it('should create a copy of a backup', async () => {
    const sourceBackupPath = `projects/${PROJECT_ID}/instances/${INSTANCE_ID}/backups/${BACKUP_ID}`;
    const output = execSync(
      `node backups-copy.js ${INSTANCE_ID} ${COPY_BACKUP_ID} ${sourceBackupPath} ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(`(.*)Backup copy(.*)${COPY_BACKUP_ID} of size(.*)`),
    );
  });

  // cancel_backup
  it('should cancel a backup of the database', async () => {
    const output = execSync(
      `${backupsCmd} cancelBackup ${INSTANCE_ID} ${DATABASE_ID} ${CANCELLED_BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Backup cancelled./);
  });

  // get_backups
  it('should list backups in the instance', async () => {
    const output = execSync(
      `${backupsCmd} getBackups ${INSTANCE_ID} ${DATABASE_ID} ${BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.include(output, 'All backups:');
    assert.include(output, 'Backups matching backup name:');
    assert.include(output, 'Backups expiring within 30 days:');
    assert.include(output, 'Backups matching database name:');
    assert.include(output, 'Backups filtered by size:');
    assert.include(output, 'Ready backups filtered by create time:');
    assert.include(output, 'Get backups paginated:');
    const count = (output.match(new RegExp(`${BACKUP_ID}`, 'g')) || []).length;
    assert.equal(count, 14);
  });

  // list_backup_operations
  it('should list backup operations in the instance', async () => {
    const output = execSync(
      `${backupsCmd} getBackupOperations ${INSTANCE_ID} ${DATABASE_ID} ${BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Create Backup Operations:/);
    assert.match(
      output,
      new RegExp(`Backup (.+)${BACKUP_ID} (.+) is 100% complete`),
    );
    assert.match(output, /Copy Backup Operations:/);
    assert.match(
      output,
      new RegExp(`Backup (.+)${COPY_BACKUP_ID} (.+) is 100% complete`),
    );
  });

  // update_backup_expire_time
  it('should update the expire time of a backup', async () => {
    const output = execSync(
      `${backupsCmd} updateBackup ${INSTANCE_ID} ${BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Expire time updated./);
  });

  // restore_backup
  it('should restore database from a backup', async function () {
    // Restoring a backup can be a slow operation so the test may timeout and
    // we'll have to retry.
    this.retries(5);
    // Delay the start of the test, if this is a retry.
    await delay(this.test);

    const output = execSync(
      `${backupsCmd} restoreBackup ${INSTANCE_ID} ${RESTORE_DATABASE_ID} ${BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Database restored from backup./);
    assert.match(
      output,
      new RegExp(
        `Database (.+) was restored to ${RESTORE_DATABASE_ID} from backup ` +
          `(.+)${BACKUP_ID} with version time (.+)`,
      ),
    );
  });

  // restore_backup_with_encryption_key
  it('should restore database from a backup using an encryption key', async function () {
    // Restoring a backup can be a slow operation so the test may timeout and
    // we'll have to retry.
    this.retries(5);
    // Delay the start of the test, if this is a retry.
    await delay(this.test);

    const key = await getCryptoKey(KEY_LOCATION_ID1);

    const output = execSync(
      `${backupsCmd} restoreBackupWithEncryptionKey ${INSTANCE_ID} ${ENCRYPTED_RESTORE_DATABASE_ID} ${ENCRYPTED_BACKUP_ID} ${PROJECT_ID} ${key.name}`,
    );
    assert.match(output, /Database restored from backup./);
    assert.match(
      output,
      new RegExp(
        `Database (.+) was restored to ${ENCRYPTED_RESTORE_DATABASE_ID} from backup ` +
          `(.+)${ENCRYPTED_BACKUP_ID} using encryption key ${key.name}`,
      ),
    );
  });

  // list_database_operations
  it('should list database operations in the instance', async () => {
    const output = execSync(
      `${backupsCmd} getDatabaseOperations ${INSTANCE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Optimize Database Operations:/);
    assert.match(
      output,
      new RegExp(
        `Database (.+)${RESTORE_DATABASE_ID} restored from backup is (\\d+)% ` +
          'optimized',
      ),
    );
  });

  // delete_backup
  it('should delete a backup', async () => {
    function sleep(timeMillis) {
      return new Promise(resolve => setTimeout(resolve, timeMillis));
    }

    // Wait for database to finish optimizing - cannot delete a backup if a database restored from it
    const instance = spanner.instance(INSTANCE_ID);
    const database = instance.database(RESTORE_DATABASE_ID);
    while ((await database.getState()) === 'READY_OPTIMIZING') {
      await sleep(1000);
    }

    const output = execSync(
      `${backupsCmd} deleteBackup ${INSTANCE_ID} ${BACKUP_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /Backup deleted./);
  });

  // custom_timeout_and_retry
  it('should insert with custom timeout and retry settings', async () => {
    const output = execSync(
      `${dmlCmd} insertWithCustomTimeoutAndRetrySettings ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, /record inserted./);
  });

  // get_commit_stats
  it('should update rows in Albums example table and return CommitStats', async () => {
    const output = execSync(
      `${crudCmd} getCommitStats ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
    );
    assert.match(output, new RegExp('Updated data with (\\d+) mutations'));
  });

  // create_database_with_version_retention_period
  it('should create a database with a version retention period', async () => {
    const output = execSync(
      `${schemaCmd} createDatabaseWithVersionRetentionPeriod "${INSTANCE_ID}" "${VERSION_RETENTION_DATABASE_ID}" ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(
        `Waiting for operation on ${VERSION_RETENTION_DATABASE_ID} to complete...`,
      ),
    );
    assert.match(
      output,
      new RegExp(
        `Created database ${VERSION_RETENTION_DATABASE_ID} with version retention period.`,
      ),
    );
    assert.include(output, 'Version retention period: 1d');
    assert.include(output, 'Earliest version time:');
  });

  it('should create a table with foreign key delete cascade', async () => {
    const output = execSync(
      `${createTableWithForeignKeyDeleteCascadeCommand} "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(`Waiting for operation on ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(
        'Created Customers and ShoppingCarts table with FKShoppingCartsCustomerId',
      ),
    );
  });

  it('should alter a table with foreign key delete cascade', async () => {
    const output = execSync(
      `${alterTableWithForeignKeyDeleteCascadeCommand} "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(`Waiting for operation on ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(
        'Altered ShoppingCarts table with FKShoppingCartsCustomerName',
      ),
    );
  });

  it('should drop a foreign key constraint delete cascade', async () => {
    const output = execSync(
      `${dropForeignKeyConstraintDeleteCascaseCommand} "${INSTANCE_ID}" "${DATABASE_ID}" ${PROJECT_ID}`,
    );
    assert.match(
      output,
      new RegExp(`Waiting for operation on ${DATABASE_ID} to complete...`),
    );
    assert.match(
      output,
      new RegExp(
        'Altered ShoppingCarts table to drop FKShoppingCartsCustomerName',
      ),
    );
  });

  describe('observability', () => {
    it('traces', () => {
      const output = execSync(
        `${traceObservabilityCommand} ${PROJECT_ID} ${INSTANCE_ID} ${DATABASE_ID}`,
      );
      assert.match(output, /Query: \d+ found./);
    });
  });

  describe('leader options', () => {
    before(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      const [, operation] = await instance.create({
        config: 'nam6',
        nodes: 1,
        displayName: 'Multi-region options test',
        labels: {
          ['cloud_spanner_samples']: 'true',
          created: Math.round(Date.now() / 1000).toString(), // current time
        },
      });
      await operation.promise();
    });

    after(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      await instance.delete();
    });

    // create_instance_config
    it('should create an example custom instance config', async () => {
      const output = execSync(
        `node instance-config-create.js ${SAMPLE_INSTANCE_CONFIG_ID} ${BASE_INSTANCE_CONFIG_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for create operation for ${SAMPLE_INSTANCE_CONFIG_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Created instance config ${SAMPLE_INSTANCE_CONFIG_ID}.`),
      );
    });

    // update_instance_config
    it('should update an example custom instance config', async () => {
      const output = execSync(
        `node instance-config-update.js ${SAMPLE_INSTANCE_CONFIG_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for update operation for ${SAMPLE_INSTANCE_CONFIG_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(`Updated instance config ${SAMPLE_INSTANCE_CONFIG_ID}.`),
      );
    });

    // delete_instance_config
    it('should delete an example custom instance config', async () => {
      const output = execSync(
        `node instance-config-delete.js ${SAMPLE_INSTANCE_CONFIG_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(`Deleting ${SAMPLE_INSTANCE_CONFIG_ID}...`),
      );
      assert.match(
        output,
        new RegExp(`Deleted instance config ${SAMPLE_INSTANCE_CONFIG_ID}.`),
      );
    });

    // list_instance_config_operations
    it('should list all instance config operations', async () => {
      const output = execSync(
        `node instance-config-get-operations.js ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Available instance config operations for project ${PROJECT_ID}:`,
        ),
      );
      assert.include(output, 'Instance config operation for');
      assert.include(
        output,
        'type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata',
      );
    });

    // list_instance_configs
    it('should list available instance configs', async () => {
      const output = execSync(`node list-instance-configs.js ${PROJECT_ID}`);
      assert.match(
        output,
        new RegExp(`Available instance configs for project ${PROJECT_ID}:`),
      );
      assert.include(output, 'Available leader options for instance config');
    });

    // get_instance_config
    // TODO: Enable when the feature has been released.
    it.skip('should get a specific instance config', async () => {
      const output = execSync(`node get-instance-config.js ${PROJECT_ID}`);
      assert.include(output, 'Available leader options for instance config');
    });

    // create_database_with_default_leader
    it('should create a database with a default leader', async () => {
      const output = execSync(
        `node database-create-with-default-leader.js "${SAMPLE_INSTANCE_ID}" "${DEFAULT_LEADER_DATABASE_ID}" "${DEFAULT_LEADER}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for creation of ${DEFAULT_LEADER_DATABASE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(
          `Created database ${DEFAULT_LEADER_DATABASE_ID} with default leader ${DEFAULT_LEADER}.`,
        ),
      );
    });

    // update_database_with_default_leader
    it('should update a database with a default leader', async () => {
      const output = execSync(
        `node database-update-default-leader.js "${SAMPLE_INSTANCE_ID}" "${DEFAULT_LEADER_DATABASE_ID}" "${DEFAULT_LEADER_2}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Waiting for updating of ${DEFAULT_LEADER_DATABASE_ID} to complete...`,
        ),
      );
      assert.match(
        output,
        new RegExp(
          `Updated database ${DEFAULT_LEADER_DATABASE_ID} with default leader ${DEFAULT_LEADER_2}.`,
        ),
      );
    });

    // get_default_leader
    it('should get the default leader option of a database', async () => {
      const output = execSync(
        `node database-get-default-leader.js "${SAMPLE_INSTANCE_ID}" "${DEFAULT_LEADER_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.include(
        output,
        `The default_leader for ${DEFAULT_LEADER_DATABASE_ID} is ${DEFAULT_LEADER_2}`,
      );
    });

    // list_databases
    it('should list databases on the instance', async () => {
      const output = execSync(
        `node list-databases.js "${SAMPLE_INSTANCE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Databases for projects/${PROJECT_ID}/instances/${SAMPLE_INSTANCE_ID}:`,
        ),
      );
      assert.include(output, `(default leader = ${DEFAULT_LEADER_2}`);
    });

    // get_database_ddl
    it('should get the ddl of a database', async () => {
      const output = execSync(
        `node database-get-ddl.js "${SAMPLE_INSTANCE_ID}" "${DEFAULT_LEADER_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Retrieved database DDL for projects/${PROJECT_ID}/instances/${SAMPLE_INSTANCE_ID}/databases/${DEFAULT_LEADER_DATABASE_ID}:`,
        ),
      );
      assert.include(output, 'CREATE TABLE Singers');
    });

    // max_commit_delay
    it('should update rows in Albums example table when max commit delay is set', async () => {
      const output = execSync(
        `node max-commit-delay.js "${INSTANCE_ID}" "${DATABASE_ID}" "${PROJECT_ID}"`,
      );
      assert.match(
        output,
        new RegExp(
          'Successfully inserted (\\d+) record into the Singers table.',
        ),
      );
    });
  });

  describe('sequence', () => {
    before(async () => {
      const instance = spanner.instance(INSTANCE_ID);
      const database = instance.database(SEQUENCE_DATABASE_ID);
      const [, operation_seq] = await database.create();
      await operation_seq.promise();
    });

    after(async () => {
      await spanner
        .instance(INSTANCE_ID)
        .database(SEQUENCE_DATABASE_ID)
        .delete();
    });

    // create_sequence
    it('should create a sequence', async () => {
      const output = execSync(
        `node sequence-create.js "${INSTANCE_ID}" "${SEQUENCE_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Created Seq sequence and Customers table'),
      );
      assert.match(
        output,
        new RegExp('Number of customer records inserted is: 3'),
      );
    });

    // alter_sequence
    it('should alter a sequence', async () => {
      const output = execSync(
        `node sequence-alter.js "${INSTANCE_ID}" "${SEQUENCE_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          'Altered Seq sequence to skip an inclusive range between 1000 and 5000000.',
        ),
      );
      assert.match(
        output,
        new RegExp('Number of customer records inserted is: 3'),
      );
    });

    // drop_sequence
    it('should drop a sequence', async () => {
      const output = execSync(
        `node sequence-drop.js "${INSTANCE_ID}" "${SEQUENCE_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          'Altered Customers table to drop DEFAULT from CustomerId column and dropped the Seq sequence.',
        ),
      );
    });
  });

  describe('instance partition', () => {
    before(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      const [, operation] = await instance.create({
        config: 'regional-us-central1',
        nodes: 1,
        edition: 'ENTERPRISE_PLUS',
        displayName: 'Instance partitions test',
        labels: {
          ['cloud_spanner_samples']: 'true',
          created: Math.round(Date.now() / 1000).toString(), // current time
        },
      });
      await operation.promise();
    });

    after(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      await instance.delete();
    });

    // create_instance_partition
    it('should create an instance partition', async () => {
      const output = execSync(
        `node instance-partition-create.js "${SAMPLE_INSTANCE_ID}" "my-instance-partition" "${PROJECT_ID}"`,
      );
      assert.match(
        output,
        new RegExp(
          'Waiting for operation on my-instance-partition to complete...',
        ),
      );
      assert.match(
        output,
        new RegExp('Created instance partition my-instance-partition.'),
      );
    });
  });

  describe('postgreSQL', () => {
    before(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      const [, operation] = await instance.create({
        config: PG_LOCATION_ID,
        nodes: 1,
        displayName: 'PostgreSQL Test',
        labels: {
          ['cloud_spanner_samples']: 'true',
          created: Math.round(Date.now() / 1000).toString(), // current time
        },
      });
      await operation.promise();
    });

    after(async () => {
      const instance = spanner.instance(SAMPLE_INSTANCE_ID);
      await instance.delete();
    });

    // create_pg_database
    it('should create an example PostgreSQL database', async () => {
      const output = execSync(
        `node pg-database-create.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(`Waiting for operation on ${PG_DATABASE_ID} to complete...`),
      );
      assert.match(
        output,
        new RegExp(
          `Created database ${PG_DATABASE_ID} on instance ${SAMPLE_INSTANCE_ID} with dialect POSTGRESQL.`,
        ),
      );
    });

    // pg_interleaving
    it('should create an interleaved table hierarchy using PostgreSQL dialect', async () => {
      const output = execSync(
        `node pg-interleaving.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(`Waiting for operation on ${PG_DATABASE_ID} to complete...`),
      );
      assert.match(
        output,
        new RegExp(
          `Created an interleaved table hierarchy in database ${PG_DATABASE_ID} using PostgreSQL dialect.`,
        ),
      );
    });

    // pg_dml_with_parameter
    it('should execute a DML statement with parameters on a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-with-parameter.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Successfully executed 1 postgreSQL statements using DML'),
      );
    });

    // pg_dml_batch
    it('should execute a batch of DML statements on a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-batch.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          'Successfully executed 3 postgreSQL statements using Batch DML.',
        ),
      );
    });

    // pg_dml_partitioned
    it('should execute a partitioned DML on a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-partitioned.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Successfully deleted 1 record.'));
    });

    // pg_query_with_parameters
    it('should execute a query with parameters on a Spanner PostgreSQL database.', async () => {
      const output = execSync(
        `node pg-query-parameter.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('SingerId: 1, FirstName: Alice, LastName: Henderson'),
      );
    });

    // pg_dml_update
    it('should update a table using parameterized queries on a Spanner PostgreSQL database.', async () => {
      const output = execSync(
        `node pg-dml-getting-started-update.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Successfully updated 1 record in the Singers table.'),
      );
    });

    // pg_add_column
    it('should add a column to a table in the Spanner PostgreSQL database.', async () => {
      const output = execSync(
        `node pg-add-column.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Added MarketingBudget column to Albums table in database ${PG_DATABASE_ID}`,
        ),
      );
    });

    //pg_create_index
    it('should create an index in the Spanner PostgreSQL database.', async () => {
      const output = execSync(
        `node pg-index-create-storing.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Added the AlbumsByAlbumTitle index.'));
    });

    // pg_schema_information
    it('should query the information schema metadata in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-schema-information.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Table: public.albums'));
      assert.match(output, new RegExp('Table: public.author'));
      assert.match(output, new RegExp('Table: public.book'));
      assert.match(output, new RegExp('Table: public.singers'));
    });

    // pg_ordering_nulls
    it('should order nulls as per clause in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-ordering-nulls.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Author ORDER BY FirstName'));
      assert.match(output, new RegExp('Author ORDER BY FirstName DESC'));
      assert.match(output, new RegExp('Author ORDER BY FirstName NULLS FIRST'));
      assert.match(
        output,
        new RegExp('Author ORDER BY FirstName DESC NULLS LAST'),
      );
    });

    // pg_numeric_data_type
    it('should create a table, insert and query pg numeric data', async () => {
      const output = execSync(
        `node pg-numeric-data-type.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(`Waiting for operation on ${PG_DATABASE_ID} to complete...`),
      );
      assert.match(
        output,
        new RegExp(`Added table venues to database ${PG_DATABASE_ID}.`),
      );
      assert.match(output, new RegExp('Inserted data.'));
      assert.match(output, new RegExp('VenueId: 4, Revenue: 97372.3863'));
      assert.match(output, new RegExp('VenueId: 19, Revenue: 7629'));
      assert.match(output, new RegExp('VenueId: 398, Revenue: 0.000000123'));
    });

    // pg_jsonb_add_column
    it('should add a jsonb column to a table', async () => {
      const output = execSync(
        `node pg-jsonb-add-column.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(`Waiting for operation on ${PG_DATABASE_ID} to complete...`),
      );
      assert.match(
        output,
        new RegExp(
          `Added jsonb column to table venues to database ${PG_DATABASE_ID}.`,
        ),
      );
    });

    // pg_jsonb_insert_data
    it('should insert pg jsonb data', async () => {
      const output = execSync(
        `node pg-jsonb-update-data.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Updated data.'));
    });

    // pg_jsonb_query_data
    it('should query pg jsonb data', async () => {
      const output = execSync(
        `node pg-jsonb-query-parameter.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('VenueId: 19, Details: {"value":{"open":true,"rating":9}}'),
      );
    });

    // pg_case_sensitivity
    it('should create case sensitive table and query the information in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-case-sensitivity.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Created table with case sensitive names in database ${PG_DATABASE_ID} using PostgreSQL dialect.`,
        ),
      );
      assert.match(output, new RegExp('Inserted data using mutations.'));
      assert.match(output, new RegExp('Concerts Table Data using Mutations:'));
      assert.match(output, new RegExp('Concerts Table Data using Aliases:'));
      assert.match(output, new RegExp('Inserted data using DML.'));
    });

    // pg_datatypes_casting
    it('should use cast operator to cast from one data type to another in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-datatypes-casting.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Data types after casting'));
    });

    // pg_functions
    it('should call a server side function on a Spanner PostgreSQL database.', async () => {
      const output = execSync(
        `node pg-functions.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('1284352323 seconds after epoch is'));
    });

    // pg_dml_returning_insert
    it('should insert records using DML Returning in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-returning-insert ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Successfully inserted 1 record into the Singers table'),
      );
      assert.match(output, new RegExp('Virginia Watson'));
    });

    // pg_dml_returning_update
    it('should update records using DML Returning in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-returning-update ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Successfully updated 1 record into the Singers table'),
      );
      assert.match(output, new RegExp('Virginia1 Watson1'));
    });

    // pg_dml_returning_delete
    it('should delete records using DML Returning in a Spanner PostgreSQL database', async () => {
      const output = execSync(
        `node pg-dml-returning-delete ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Successfully deleted 1 record from the Singers table'),
      );
      assert.match(output, new RegExp('Virginia1 Watson1'));
    });

    // pg_create_sequence
    it('should create a sequence', async () => {
      const output = execSync(
        `node pg-sequence-create.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp('Created Seq sequence and Customers table'),
      );
      assert.match(
        output,
        new RegExp('Number of customer records inserted is: 3'),
      );
    });

    // pg_alter_sequence
    it('should alter a sequence', async () => {
      const output = execSync(
        `node pg-sequence-alter.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          'Altered Seq sequence to skip an inclusive range between 1000 and 5000000.',
        ),
      );
      assert.match(
        output,
        new RegExp('Number of customer records inserted is: 3'),
      );
    });

    // pg_drop_sequence
    it('should drop a sequence', async () => {
      const output = execSync(
        `node pg-sequence-drop.js ${SAMPLE_INSTANCE_ID} ${PG_DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          'Altered Customers table to drop DEFAULT from CustomerId column and dropped the Seq sequence.',
        ),
      );
    });

    // directed_read_options
    it('should run read-only transaction with directed read options set', async () => {
      const output = execSync(
        `node directed-reads.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
      );
      console.log(output);
      assert.match(
        output,
        new RegExp(
          'SingerId: 2, AlbumId: 2, AlbumTitle: Forever Hold your Peace',
        ),
      );
      assert.match(
        output,
        new RegExp(
          'Successfully executed read-only transaction with directedReadOptions',
        ),
      );
    });
  });

  describe('proto columns', () => {
    before(async () => {
      // Setup database for Proto columns
      const databaseAdminClient = spanner.getDatabaseAdminClient();
      const [operation] = await databaseAdminClient.createDatabase({
        createStatement: 'CREATE DATABASE `' + PROTO_DATABASE_ID + '`',
        extraStatements: [
          `
            CREATE TABLE Singers (
              SingerId    INT64 NOT NULL,
              FirstName   STRING(1024),
              LastName    STRING(1024),
            ) PRIMARY KEY (SingerId)`,
          `CREATE TABLE Albums (
              SingerId    INT64 NOT NULL,
              AlbumId     INT64 NOT NULL,
              AlbumTitle  STRING(MAX)
            ) PRIMARY KEY (SingerId, AlbumId),
            INTERLEAVE IN PARENT Singers ON DELETE CASCADE`,
        ],
        parent: databaseAdminClient.instancePath(PROJECT_ID, INSTANCE_ID),
      });

      console.log(
        `Waiting for creation of ${PROTO_DATABASE_ID} to complete...`,
      );
      await operation.promise();
      console.log(
        `Created database ${PROTO_DATABASE_ID} on instance ${INSTANCE_ID}.`,
      );

      // Insert seed data into the database tables
      execSync(
        `${crudCmd} insert ${INSTANCE_ID} ${PROTO_DATABASE_ID} ${PROJECT_ID}`,
      );
    });

    after(async () => {
      await spanner.instance(INSTANCE_ID).database(PROTO_DATABASE_ID).delete();
    });

    it('should add proto message and enum columns', async () => {
      const output = execSync(
        `node proto-type-add-column.js "${INSTANCE_ID}" "${PROTO_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(
        output,
        new RegExp(
          `Altered table "Singers" on database ${PROTO_DATABASE_ID} on instance ${INSTANCE_ID} with proto descriptors.`,
        ),
      );
    });

    it('update data with proto message and enum columns', async () => {
      const output = execSync(
        `node proto-update-data.js "${INSTANCE_ID}" "${PROTO_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Data updated'));
    });

    it('update data with proto message and enum columns using DML', async () => {
      const output = execSync(
        `node proto-update-data-dml.js "${INSTANCE_ID}" "${PROTO_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.include(output, '1 record updated.');
    });

    it('query data with proto message and enum columns', async () => {
      const output = execSync(
        `node proto-query-data.js "${INSTANCE_ID}" "${PROTO_DATABASE_ID}" ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('SingerId: 2'));
    });
  });

  describe('encrypted database and backups with multiple KMS keys', () => {
    const MR_CMEK_DB = `test-mr-${CURRENT_TIME}-db`;
    const MR_CMEK_BACKUP = `test-mr-${CURRENT_TIME}-backup`;
    const MR_CMEK_COPIED = `test-mr-${CURRENT_TIME}-copied`;
    const MR_CMEK_RESTORED = `test-mr-${CURRENT_TIME}-restored`;
    let instance_already_exists = false;
    let key1, key2, key3;
    before(async () => {
      // Create multiple KMS keys covering `nam3`.
      key1 = await getCryptoKey(KEY_LOCATION_ID1);
      key2 = await getCryptoKey(KEY_LOCATION_ID2);
      key3 = await getCryptoKey(KEY_LOCATION_ID3);

      const multi_region_instance = spanner.instance(MULTI_REGION_INSTANCE_ID);
      [instance_already_exists] = await multi_region_instance.exists();
      if (!instance_already_exists) {
        const [, operation] = await multi_region_instance.create({
          config: MULTI_REGION_LOCATION_ID,
          nodes: 1,
          labels: {
            [LABEL]: 'true',
            created: CURRENT_TIME,
          },
          gaxOptions: GAX_OPTIONS,
        });
        await operation.promise();
        console.log(
          `Created temp instance, using + ${multi_region_instance.formattedName_}...`,
        );
      } else {
        console.log(
          `Not creating temp instance, using + ${multi_region_instance.formattedName_}...`,
        );
      }
    });

    after(async () => {
      const instance = spanner.instance(MULTI_REGION_INSTANCE_ID);
      const restored_db = instance.database(MR_CMEK_RESTORED);
      function sleep(timeMillis) {
        return new Promise(resolve => setTimeout(resolve, timeMillis));
      }
      // Backup cannot be deleted when restored db is not in READY_OPTIMIZING state.
      while ((await restored_db.getState()) === 'READY_OPTIMIZING') {
        await sleep(1000);
      }
      await Promise.all([
        instance.database(MR_CMEK_DB).delete(GAX_OPTIONS),
        instance.database(MR_CMEK_RESTORED).delete(),
        instance.backup(MR_CMEK_BACKUP).delete(GAX_OPTIONS),
        instance.backup(MR_CMEK_COPIED).delete(GAX_OPTIONS),
      ]);
      if (!instance_already_exists) {
        await spanner.instance(MULTI_REGION_INSTANCE_ID).delete(GAX_OPTIONS);
      }
    });

    it('should create a database with multiple KMS keys', async () => {
      const output = execSync(
        `node database-create-with-multiple-kms-keys.js \
          "${MULTI_REGION_INSTANCE_ID}" \
          "${MR_CMEK_DB}" \
          "${PROJECT_ID}" \
          "${key1.name},${key2.name},${key3.name}"`,
      );
      assert.match(
        output,
        new RegExp(`Waiting for operation on ${MR_CMEK_DB} to complete...`),
      );
      assert.match(
        output,
        new RegExp(
          `Created database ${MR_CMEK_DB} on instance ${MULTI_REGION_INSTANCE_ID}.`,
        ),
      );
      assert.match(output, new RegExp('Database encrypted with keys'));
    });

    it('should create backup with multiple KMS keys', async () => {
      const output = execSync(
        `node backups-create-with-multiple-kms-keys.js \
          ${MULTI_REGION_INSTANCE_ID} \
          ${MR_CMEK_DB} \
          ${MR_CMEK_BACKUP} \
          ${PROJECT_ID} \
          "${key1.name},${key2.name},${key3.name}"`,
      );
      assert.match(output, new RegExp(`Backup (.+)${MR_CMEK_BACKUP} of size`));
      assert.include(output, 'using encryption key');
    });

    it('should copy backup with multiple KMS keys', async () => {
      const sourceBackupPath = `projects/${PROJECT_ID}/instances/${MULTI_REGION_INSTANCE_ID}/backups/${MR_CMEK_BACKUP}`;
      const output = execSync(
        `node backups-copy-with-multiple-kms-keys.js \
          ${MULTI_REGION_INSTANCE_ID} \
          ${MR_CMEK_COPIED} \
          ${sourceBackupPath} \
          ${PROJECT_ID} \
          "${key1.name},${key2.name},${key3.name}"`,
      );
      assert.match(
        output,
        new RegExp(`(.*)Backup copy(.*)${MR_CMEK_COPIED} of size(.*)`),
      );
    });

    it('should restore backup with multiple KMS keys', async function () {
      // Restoring a backup can be a slow operation so the test may timeout and
      // we'll have to retry.
      this.retries(5);
      // Delay the start of the test, if this is a retry.
      await delay(this.test);

      const output = execSync(
        `node backups-restore-with-multiple-kms-keys.js \
          ${MULTI_REGION_INSTANCE_ID} \
          ${MR_CMEK_RESTORED} \
          ${MR_CMEK_BACKUP} \
          ${PROJECT_ID} \
          "${key1.name},${key2.name},${key3.name}"`,
      );
      assert.match(output, /Database restored from backup./);
      assert.match(
        output,
        new RegExp(
          `Database (.+) was restored to ${MR_CMEK_RESTORED} from backup ` +
            `(.+)${MR_CMEK_BACKUP}.`,
        ),
      );
    });

    // add split points, enable when drop database automatically reclaims quota
    it.skip('should add split points', async () => {
      const output = execSync(
        `node database-add-split-points.js ${INSTANCE_ID} ${DATABASE_ID} ${PROJECT_ID}`,
      );
      assert.match(output, new RegExp('Added Split Points'));
    });
  });
});
