/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import {DateStruct, PreciseDate} from '@google-cloud/precise-date';
import * as assert from 'assert';
import {describe, it, before, after, beforeEach} from 'mocha';
import pLimit = require('p-limit');
import concat = require('concat-stream');
import * as crypto from 'crypto';
import * as extend from 'extend';
import * as uuid from 'uuid';
import {
  Backup,
  Database,
  Spanner,
  Instance,
  InstanceConfig,
  Session,
  protos,
  Float,
  Interval,
} from '../src';
import {Key} from '../src/table';
import {
  ReadRequest,
  ExecuteSqlRequest,
  TimestampBounds,
  MutationGroup,
  ReadResponse,
  RunResponse,
} from '../src/transaction';
import {Row} from '../src/partial-result-stream';
import {GetDatabaseConfig} from '../src/database';
import {grpc, CallOptions} from 'google-gax';
import {google} from '../protos/protos';
import CreateDatabaseMetadata = google.spanner.admin.database.v1.CreateDatabaseMetadata;
import CreateBackupMetadata = google.spanner.admin.database.v1.CreateBackupMetadata;
import CreateInstanceConfigMetadata = google.spanner.admin.instance.v1.CreateInstanceConfigMetadata;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
const singer = require('../test/data/singer');
const music = singer.examples.spanner.music;
import {util} from 'protobufjs';
import {MetricsTracerFactory} from '../src/metrics/metrics-tracer-factory';
import Long = util.Long;
import {
  CreateQueryPartitionsResponse,
  CreateReadPartitionsResponse,
} from '../src/batch-transaction';
import {isNull, isNumber} from '../src/helper';
const fs = require('fs');

const SKIP_BACKUPS = process.env.SKIP_BACKUPS;
const KOKORO_JOB_NAME = process.env.KOKORO_JOB_NAME;
const SKIP_FGAC_TESTS = (process.env.SKIP_FGAC_TESTS || 'false').toLowerCase();

const IAM_MEMBER = process.env.IAM_MEMBER;
const PREFIX = 'gcloud-tests-';
const RUN_ID = shortUUID();
const LABEL = `node-spanner-systests-${RUN_ID}`;
const spanner = new Spanner({
  projectId: process.env.GCLOUD_PROJECT,
  apiEndpoint: process.env.API_ENDPOINT,
});
const GAX_OPTIONS: CallOptions = {
  retry: {
    retryCodes: [
      grpc.status.RESOURCE_EXHAUSTED,
      grpc.status.DEADLINE_EXCEEDED,
      grpc.status.UNAVAILABLE,
    ],
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

const CURRENT_TIME = Math.round(Date.now() / 1000).toString();

describe('Spanner', () => {
  const envInstanceName = process.env.SPANNERTEST_INSTANCE;
  // True if a new instance has been created for this test run, false if reusing an existing instance
  const generateInstanceForTest = !envInstanceName;
  const IS_EMULATOR_ENABLED =
    typeof process.env.SPANNER_EMULATOR_HOST !== 'undefined';
  const RESOURCES_TO_CLEAN: Array<Instance | Backup | Database> = [];
  const INSTANCE_CONFIGS_TO_CLEAN: Array<InstanceConfig> = [];
  const instanceId = generateInstanceForTest
    ? generateName('instance')
    : envInstanceName;
  const instanceConfigId = 'custom-' + generateName('instance-config');
  const gSQLdatabaseId1 = generateName('database');
  const gSQLdatabaseId2 = generateName('database');
  const pgdatabaseId = generateName('pg-db');
  const projectId = process.env.GCLOUD_PROJECT;
  let instance;
  let instanceConfig;
  let DATABASE;
  let PG_DATABASE;
  let DATABASE_DROP_PROTECTION;
  const TABLE_NAME = 'Singers';
  const INSTANCE_CONFIG = {
    config: 'regional-us-central1',
    nodes: 1,
    labels: {
      [LABEL]: 'true',
      created: CURRENT_TIME,
    },
    gaxOptions: GAX_OPTIONS,
  };

  async function createInstance(id) {
    const instanceAdminClient = spanner.getInstanceAdminClient();
    const [instanceCreationOperation] =
      await instanceAdminClient.createInstance({
        instanceId: id,
        parent: instanceAdminClient.projectPath(projectId!),
        instance: {
          config: instanceAdminClient.instanceConfigPath(
            projectId!,
            INSTANCE_CONFIG.config,
          ),
          nodeCount: 1,
          displayName: 'Test name for instance.',
          labels: {
            created: Math.round(Date.now() / 1000).toString(), // current time
          },
        },
      });
    await instanceCreationOperation.promise();
  }

  async function creategSQLDatabase(gSQLdatabaseId, protoDescriptor) {
    const databaseAdminClient = spanner.getDatabaseAdminClient();
    const createSingersTableStatement = protoDescriptor
      ? [
          `CREATE PROTO BUNDLE (
          examples.spanner.music.SingerInfo,
          examples.spanner.music.Genre,
          )`,
          `
        CREATE TABLE ${TABLE_NAME} (
          SingerId STRING(1024) NOT NULL,
          Name STRING(1024),
        ) PRIMARY KEY(SingerId)`,
        ]
      : [
          `CREATE TABLE ${TABLE_NAME} (
        SingerId STRING(1024) NOT NULL,
        Name STRING(1024),
      ) PRIMARY KEY(SingerId)`,
        ];

    const [googleSqlOperation] = await databaseAdminClient.createDatabase({
      createStatement: 'CREATE DATABASE `' + gSQLdatabaseId + '`',
      extraStatements: createSingersTableStatement,
      parent: databaseAdminClient.instancePath(projectId!, instanceId!),
      protoDescriptors: protoDescriptor ? protoDescriptor : null,
    });
    await googleSqlOperation.promise();
  }

  async function createPostgresDatabase(pgdatabaseId) {
    const databaseAdminClient = spanner.getDatabaseAdminClient();
    const [pgOperation] = await databaseAdminClient.createDatabase({
      createStatement: 'CREATE DATABASE "' + pgdatabaseId + '"',
      parent: databaseAdminClient.instancePath(projectId!, instanceId!),
      databaseDialect:
        protos.google.spanner.admin.database.v1.DatabaseDialect.POSTGRESQL,
    });
    await pgOperation.promise();
    const statements = [
      `CREATE TABLE ${TABLE_NAME} (
        SingerId VARCHAR(1024) NOT NULL,
        Name VARCHAR(1024),
        PRIMARY KEY (SingerId)
      );`,
    ];
    const [postgreSqlOperationUpdateDDL] =
      await databaseAdminClient.updateDatabaseDdl({
        database: databaseAdminClient.databasePath(
          projectId!,
          instanceId!,
          pgdatabaseId,
        ),
        statements: statements,
      });
    await postgreSqlOperationUpdateDDL.promise();
  }

  async function createBackup(database, backupId, expireTime) {
    const databaseAdminClient = spanner.getDatabaseAdminClient();
    const [operation] = await databaseAdminClient.createBackup({
      parent: databaseAdminClient.instancePath(projectId!, instanceId),
      backupId: backupId,
      backup: {
        database: database.formattedName_,
        expireTime: Spanner.timestamp(expireTime).toStruct(),
        name: databaseAdminClient.backupPath(projectId!, instanceId, backupId),
      },
    });

    if ('database' in operation.metadata!) {
      assert.strictEqual(
        operation.metadata!.name,
        `${instance.formattedName_}/backups/${backupId}`,
      );
    }

    if ('database' in operation.metadata!) {
      assert.strictEqual(operation.metadata!.database, database.formattedName_);
    }

    await operation.promise();
  }

  before(async () => {
    await MetricsTracerFactory.resetInstance();
    await deleteOldTestInstances();
    if (generateInstanceForTest) {
      await createInstance(instanceId!);
      instance = spanner.instance(instanceId!);
      RESOURCES_TO_CLEAN.push(instance);
    } else {
      instance = spanner.instance(envInstanceName);
      console.log(
        `Not creating temp instance, using + ${instance.formattedName_}...`,
      );
    }
    if (IS_EMULATOR_ENABLED) {
      await creategSQLDatabase(gSQLdatabaseId1, null);
      DATABASE = instance.database(gSQLdatabaseId1);
      RESOURCES_TO_CLEAN.push(DATABASE);
    } else {
      // Reading proto descriptor file
      const protoDescriptor = fs
        .readFileSync('test/data/descriptors.pb')
        .toString('base64');
      await creategSQLDatabase(gSQLdatabaseId1, protoDescriptor);
      DATABASE = instance.database(gSQLdatabaseId1);
      RESOURCES_TO_CLEAN.push(DATABASE);
    }
    await createPostgresDatabase(pgdatabaseId);
    PG_DATABASE = instance.database(pgdatabaseId, {incStep: 1});
    RESOURCES_TO_CLEAN.push(PG_DATABASE);

    await creategSQLDatabase(gSQLdatabaseId2, null);
    DATABASE_DROP_PROTECTION = instance.database(gSQLdatabaseId2, {
      incStep: 1,
    });
    RESOURCES_TO_CLEAN.push(DATABASE_DROP_PROTECTION);
  });

  after(async () => {
    await MetricsTracerFactory.resetInstance();
    try {
      if (generateInstanceForTest) {
        // Sleep for 30 seconds before cleanup, just in case
        await new Promise(resolve => setTimeout(resolve, 30000));
        // Deleting all backups before an instance can be deleted.
        await Promise.all(
          RESOURCES_TO_CLEAN.filter(resource => resource instanceof Backup).map(
            backup => backup.delete(GAX_OPTIONS),
          ),
        );
        /**
         * Deleting instances created during this test.
         * All databasess will automatically be deleted with instance.
         * @see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance}
         */
        await Promise.all(
          RESOURCES_TO_CLEAN.filter(
            resource => resource instanceof Instance,
          ).map(async instance => {
            await deleteInstance(instance);
          }),
        );
      } else {
        /**
         * Limit the number of concurrent 'Administrative requests per minute'
         * Not to exceed quota
         * @see {@link https://cloud.google.com/spanner/quotas#administrative_limits}
         */
        const limit = pLimit(5);
        await Promise.all(
          RESOURCES_TO_CLEAN.map(resource =>
            limit(() => resource.delete(GAX_OPTIONS)),
          ),
        );
      }
      await MetricsTracerFactory.resetInstance();
    } catch (err) {
      console.error('Cleanup failed:', err);
    }
  });

  describe('Autogenerated Admin Client', async () => {
    const instanceAdminClient = spanner.getInstanceAdminClient();
    const databaseAdminClient = spanner.getDatabaseAdminClient();

    describe('Instances', () => {
      it('should have created the instance', async () => {
        assert(projectId);
        try {
          const [metadata] = await instanceAdminClient.getInstance({
            name: instanceAdminClient.instancePath(projectId, instanceId),
          });
          assert.strictEqual(
            metadata!.name,
            instanceAdminClient.instancePath(projectId, instanceId),
          );
        } catch (err) {
          if (!err) {
            assert.ifError(err);
          }
        }
      });

      it('should list the instances', async () => {
        assert(projectId);
        const [instances] = await instanceAdminClient.listInstances({
          parent: instanceAdminClient.projectPath(projectId),
        });
        assert(instances!.length > 0);
      });
    });

    describe('Databases', () => {
      async function createDatabase(database, dialect) {
        assert(projectId);
        const [metadata] = await databaseAdminClient.getDatabase({
          name: databaseAdminClient.databasePath(
            projectId,
            instanceId,
            database.id,
          ),
        });
        assert.strictEqual(
          metadata!.name,
          databaseAdminClient.databasePath(projectId, instanceId, database.id),
        );
        assert.strictEqual(metadata!.state, 'READY');
        assert.strictEqual(metadata!.databaseDialect, dialect);
      }

      it('GOOGLE_STANDARD_SQL should have created the database', async () => {
        await createDatabase(DATABASE, 'GOOGLE_STANDARD_SQL');
      });

      it('POSTGRESQL should have created the database', async () => {
        await createDatabase(PG_DATABASE, 'POSTGRESQL');
      });
    });
  });

  describe('types', () => {
    const TABLE_NAME = 'TypeCheck';
    let googleSqlTable;
    let postgreSqlTable;

    before(async () => {
      googleSqlTable = DATABASE.table(TABLE_NAME);
      postgreSqlTable = PG_DATABASE.table(TABLE_NAME);
      if (IS_EMULATOR_ENABLED) {
        const [googleSqlOperationUpdateDDL] = await DATABASE.updateSchema(
          `
              CREATE TABLE ${TABLE_NAME}
              (
                Key             STRING( MAX) NOT NULL,
                BytesValue      BYTES( MAX),
                BoolValue       BOOL,
                DateValue       DATE,
                UUIDValue       UUID,
                Float32Value    FLOAT32,
                FloatValue      FLOAT64,
                IntValue        INT64,
                NumericValue    NUMERIC,
                StringValue     STRING( MAX),
                TimestampValue  TIMESTAMP,
                BytesArray      ARRAY<BYTES(MAX)>,
                BoolArray       ARRAY<BOOL>,
                DateArray       ARRAY< DATE >,
                UUIDArray       ARRAY<UUID>,
                Float32Array    ARRAY<FLOAT32>,
                FloatArray      ARRAY<FLOAT64>,
                IntArray        ARRAY<INT64>,
                NumericArray    ARRAY< NUMERIC >,
                StringArray     ARRAY<STRING(MAX)>,
                TimestampArray  ARRAY< TIMESTAMP >,
                CommitTimestamp TIMESTAMP OPTIONS (allow_commit_timestamp= true)
              ) PRIMARY KEY (Key)
            `,
        );
        await googleSqlOperationUpdateDDL.promise();
        // TODO: Add column "UUID"(type UUID) and "UUIDArray"(type UUID[]), while using uuid type.(currently UUID type is not supported for postgreSql dialect)
        const [postgreSqlOperationUpdateDDL] = await PG_DATABASE.updateSchema(
          `
                CREATE TABLE ${TABLE_NAME}
                (
                  "Key"             VARCHAR NOT NULL PRIMARY KEY,
                  "BytesValue"      BYTEA,
                  "BoolValue"       BOOL,
                  "Float32Value"    DOUBLE PRECISION,
                  "FloatValue"      DOUBLE PRECISION,
                  "IntValue"        BIGINT,
                  "NumericValue"    NUMERIC,
                  "StringValue"     VARCHAR,
                  "TimestampValue"  TIMESTAMPTZ,
                  "DateValue"       DATE,
                  "JsonbValue"      JSONB,
                  "BytesArray"      BYTEA[],
                  "BoolArray"       BOOL[],
                  "Float32Array"    DOUBLE PRECISION[],
                  "FloatArray"      DOUBLE PRECISION[],
                  "IntArray"        BIGINT[],
                  "NumericArray"    NUMERIC[],
                  "StringArray"     VARCHAR[],
                  "TimestampArray"  TIMESTAMPTZ[],
                  "DateArray"       DATE[],
                  "JsonbArray"      JSONB[],
                  "CommitTimestamp" SPANNER.COMMIT_TIMESTAMP
                );
            `,
        );
        await postgreSqlOperationUpdateDDL.promise();
      } else {
        const [googleSqlOperationUpdateDDL] = await DATABASE.updateSchema(
          `
              CREATE TABLE ${TABLE_NAME}
              (
                Key             STRING( MAX) NOT NULL,
                BytesValue      BYTES( MAX),
                BoolValue       BOOL,
                DateValue       DATE,
                UUIDValue       UUID,
                Float32Value    FLOAT32,
                FloatValue      FLOAT64,
                JsonValue       JSON,
                IntValue        INT64,
                NumericValue    NUMERIC,
                StringValue     STRING( MAX),
                TimestampValue  TIMESTAMP,
                ProtoMessageValue examples.spanner.music.SingerInfo,
                ProtoEnumValue examples.spanner.music.Genre,
                BytesArray      ARRAY<BYTES(MAX)>,
                BoolArray       ARRAY<BOOL>,
                DateArray       ARRAY< DATE >,
                UUIDArray       ARRAY<UUID>,
                Float32Array    ARRAY<FLOAT32>,
                FloatArray      ARRAY<FLOAT64>,
                JsonArray       ARRAY<JSON>,
                IntArray        ARRAY<INT64>,
                NumericArray    ARRAY< NUMERIC >,
                StringArray     ARRAY<STRING(MAX)>,
                TimestampArray  ARRAY< TIMESTAMP >,
                ProtoMessageArray ARRAY<examples.spanner.music.SingerInfo>,
                ProtoEnumArray ARRAY<examples.spanner.music.Genre>,
                CommitTimestamp TIMESTAMP OPTIONS (allow_commit_timestamp= true)
              ) PRIMARY KEY (Key)
            `,
        );
        await googleSqlOperationUpdateDDL.promise();
        // TODO: add columns using Interval Value and Interval Array Value.
        // TODO: add column "UUIDValue" (type UUID) and "UUIDArray" (type UUID[]) while using uuid type. (currently uuid type is not supported in postgreSql)
        const [postgreSqlOperationUpdateDDL] = await PG_DATABASE.updateSchema(
          `
                CREATE TABLE ${TABLE_NAME}
                (
                  "Key"             VARCHAR NOT NULL PRIMARY KEY,
                  "BytesValue"      BYTEA,
                  "BoolValue"       BOOL,
                  "Float32Value"    DOUBLE PRECISION,
                  "FloatValue"      DOUBLE PRECISION,
                  "IntValue"        BIGINT,
                  "NumericValue"    NUMERIC,
                  "StringValue"     VARCHAR,
                  "TimestampValue"  TIMESTAMPTZ,
                  "DateValue"       DATE,
                  "JsonbValue"      JSONB,
                  "BytesArray"      BYTEA[],
                  "BoolArray"       BOOL[],
                  "Float32Array"    DOUBLE PRECISION[],
                  "FloatArray"      DOUBLE PRECISION[],
                  "IntArray"        BIGINT[],
                  "NumericArray"    NUMERIC[],
                  "StringArray"     VARCHAR[],
                  "TimestampArray"  TIMESTAMPTZ[],
                  "DateArray"       DATE[],
                  "JsonbArray"      JSONB[],
                  "CommitTimestamp" SPANNER.COMMIT_TIMESTAMP
                );
            `,
        );
        await postgreSqlOperationUpdateDDL.promise();
      }
    });

    /**
     *
     * @param insertData data to insert
     * @param dialect sql dialect
     * @param callback
     * @param columnsMetadataForRead Optional parameter use for read/query for
     *      deserializing Proto messages and enum
     */
    async function insert(insertData, dialect, columnsMetadataForRead?: {}) {
      const id = generateName('id');

      insertData.Key = id;

      let table = googleSqlTable;
      let query: ExecuteSqlRequest = {
        sql: 'SELECT * FROM `' + table.name + '` WHERE Key = @id',
        params: {
          id,
        },
        columnsMetadata: columnsMetadataForRead,
      };
      let database = DATABASE;
      if (dialect === Spanner.POSTGRESQL) {
        table = postgreSqlTable;
        query = {
          sql: 'SELECT * FROM ' + table.name + ' WHERE "Key" = $1',
          params: {
            p1: id,
          },
        };
        database = PG_DATABASE;
      }
      const [insertResp] = await table.insert(insertData);
      const [rows, readResp] = await database.run(query);
      return {
        row: rows.shift(),
        insertResp,
        readResp,
      };
    }

    const incorrectValueType = async table => {
      try {
        await table.insert({BoolValue: 'abc'});
        assert.fail('Expected an error to be thrown, but it was not.');
      } catch (err: any) {
        KOKORO_JOB_NAME?.includes('system-test-regular-session')
          ? assert.strictEqual(err.code, grpc.status.FAILED_PRECONDITION)
          : assert.strictEqual(err.code, grpc.status.INVALID_ARGUMENT);
      }
    };

    it('GOOGLE_STANDARD_SQL should throw an error for incorrect value types', async () => {
      await incorrectValueType(googleSqlTable);
    });

    it('POSTGRESQL should throw an error for incorrect value types', async () => {
      await incorrectValueType(postgreSqlTable);
    });

    describe('uneven rows', () => {
      const differentlyOrderedRows = async dialect => {
        const data = [
          {
            Key: generateName('id'),
            BoolValue: true,
            IntValue: 10,
          },
          {
            Key: generateName('id'),
            IntValue: 10,
            BoolValue: true,
          },
        ];

        let table = googleSqlTable;
        let database = DATABASE;
        let query: ExecuteSqlRequest = {
          sql: `SELECT * FROM \`${table.name}\` WHERE Key = @a OR KEY = @b`,
          params: {
            a: data[0].Key,
            b: data[1].Key,
          },
        };
        if (dialect === Spanner.POSTGRESQL) {
          table = postgreSqlTable;
          database = PG_DATABASE;
          query = {
            sql: `SELECT * FROM ${table.name} WHERE "Key" = $1 OR "Key" = $2`,
            params: {
              p1: data[0].Key,
              p2: data[1].Key,
            },
          };
        }
        try {
          await table.insert(data);
          const [rows] = await database.run(query);
          const row1 = rows![0].toJSON();
          assert.deepStrictEqual(row1.IntValue, data[0].IntValue);
          assert.deepStrictEqual(row1.BoolValue, data[0].BoolValue);

          const row2 = rows![1].toJSON();
          assert.deepStrictEqual(row2.IntValue, data[1].IntValue);
          assert.deepStrictEqual(row2.BoolValue, data[1].BoolValue);
        } catch (err) {
          assert.ifError(err);
        }
      };

      it('GOOGLE_STANDARD_SQL should allow differently-ordered rows', async () => {
        await differentlyOrderedRows(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should allow differently-ordered rows}', async () => {
        await differentlyOrderedRows(Spanner.POSTGRESQL);
      });
    });

    describe('structs', () => {
      it('GOOGLE_STANDARD_SQL should correctly decode structs', async () => {
        const query = 'SELECT ARRAY(SELECT as struct 1, "hello")';
        const expected = [
          {
            name: '',
            value: [
              [
                {
                  name: '',
                  value: {
                    value: '1',
                  },
                },
                {
                  name: '',
                  value: 'hello',
                },
              ],
            ],
          },
        ];
        try {
          const [rows] = await DATABASE.run(query);
          assert.deepStrictEqual(
            JSON.stringify(rows![0][0].value[0][0]),
            JSON.stringify(expected[0].value[0][0]),
          );
          assert.deepStrictEqual(
            JSON.stringify(rows![0][0].value[0][1]),
            JSON.stringify(expected[0].value[0][1]),
          );
        } catch (err) {
          assert.ifError(err);
        }
      });

      it('GOOGLE_STANDARD_SQL should correctly decode structs', async () => {
        const query =
          'SELECT 1 as id, ARRAY(select as struct 2 as id, "hello" as name)';

        const expected = [
          {
            name: 'id',
            value: {
              value: '1',
            },
          },
          {
            name: '',
            value: [
              [
                {
                  name: 'id',
                  value: {
                    value: '2',
                  },
                },
                {
                  name: 'name',
                  value: 'hello',
                },
              ],
            ],
          },
        ];

        try {
          const [rows] = await DATABASE.run(query);
          assert.deepStrictEqual(
            JSON.stringify(rows![0][0]),
            JSON.stringify(expected[0]),
          );
          assert.deepStrictEqual(
            JSON.stringify(rows![0][1].value[0][0]),
            JSON.stringify(expected[1].value[0][0]),
          );
          assert.deepStrictEqual(
            JSON.stringify(rows![0][1].value[0][1]),
            JSON.stringify(expected[1].value[0][1]),
          );
        } catch (err) {
          assert.ifError(err);
        }
      });
    });

    describe('booleans', () => {
      const booleanInsert = async (dialect, value) => {
        const {row} = await insert({BoolValue: value}, dialect);
        assert.strictEqual(row.toJSON().BoolValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write boolean values', async () => {
        await booleanInsert(Spanner.GOOGLE_STANDARD_SQL, true);
      });

      it('POSTGRESQL should write boolean values', async () => {
        await booleanInsert(Spanner.POSTGRESQL, true);
      });

      it('GOOGLE_STANDARD_SQL should write null boolean values', async () => {
        await booleanInsert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null boolean values', async () => {
        await booleanInsert(Spanner.POSTGRESQL, null);
      });

      it('GOOGLE_STANDARD_SQL should write empty boolean array values', async () => {
        const {row} = await insert(
          {BoolArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BoolArray, []);
      });

      it('POSTGRESQL should write empty boolean array values', async () => {
        const {row} = await insert({BoolArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().BoolArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null boolean array values', async () => {
        const {row} = await insert(
          {BoolArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BoolArray, [null]);
      });

      it('POSTGRESQL should write null boolean array values', async () => {
        const {row} = await insert({BoolArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().BoolArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write boolean array values', async () => {
        const {row} = await insert(
          {BoolArray: [true, false]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BoolArray, [true, false]);
      });

      it('POSTGRESQL should write boolean array values', async () => {
        const {row} = await insert(
          {BoolArray: [true, false]},
          Spanner.POSTGRESQL,
        );
        assert.deepStrictEqual(row.toJSON().BoolArray, [true, false]);
      });
    });

    describe('int64s', () => {
      const int64Insert = async (dialect, value) => {
        const {row} = await insert({IntValue: value}, dialect);
        if (value) {
          value = value.valueOf();
        }
        assert.deepStrictEqual(row.toJSON().IntValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write int64 values', async () => {
        await int64Insert(Spanner.GOOGLE_STANDARD_SQL, Spanner.int(1234));
      });

      it('POSTGRESQL should write int64 values', async () => {
        await int64Insert(Spanner.POSTGRESQL, Spanner.int(1234));
      });

      it('GOOGLE_STANDARD_SQL should write null int64 values', async () => {
        await int64Insert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null int64 values', async () => {
        await int64Insert(Spanner.POSTGRESQL, null);
      });

      const int64OutOfBounds = async dialect => {
        const value = '9223372036854775807';
        const {row} = await insert({IntValue: value}, dialect);
        assert.throws(() => {
          row.toJSON();
        }, new RegExp('Serializing column "IntValue" encountered an error'));
      };

      it('GOOGLE_STANDARD_SQL should throw for of bounds integers', async () => {
        await int64OutOfBounds(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should throw for of bounds integers', async () => {
        await int64OutOfBounds(Spanner.POSTGRESQL);
      });

      const int64WrapOutOfBounds = async dialect => {
        const value = '9223372036854775807';
        const {row} = await insert({IntValue: value}, dialect);
        const expected = Spanner.int(value);
        const actual = row.toJSON({wrapNumbers: true}).IntValue;
        assert.deepStrictEqual(actual, expected);
      };

      it('GOOGLE_STANDARD_SQL should optionally wrap out of bounds integers', async () => {
        await int64WrapOutOfBounds(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should optionally wrap out of bounds integers', async () => {
        await int64WrapOutOfBounds(Spanner.POSTGRESQL);
      });

      it('GOOGLE_STANDARD_SQL should write empty in64 array values', async () => {
        const {row} = await insert({IntArray: []}, Spanner.GOOGLE_STANDARD_SQL);
        assert.deepStrictEqual(row.toJSON().IntArray, []);
      });

      it('POSTGRESQL should write empty in64 array values', async () => {
        const {row} = await insert({IntArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().IntArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null int64 array values', async () => {
        const {row} = await insert(
          {IntArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().IntArray, [null]);
      });

      it('POSTGRESQL should write null int64 array values', async () => {
        const {row} = await insert({IntArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().IntArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write int64 array values', async () => {
        const values = [1, 2, 3];
        const {row} = await insert(
          {IntArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().IntArray, values);
      });

      it('POSTGRESQL should write int64 array values', async () => {
        const values = [1, 2, 3];
        const {row} = await insert({IntArray: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().IntArray, values);
      });
    });

    describe('oids', () => {
      it('POSTGRESQL should read non-null pgOid values', async () => {
        const [rows] = await PG_DATABASE.run('SELECT 123::oid');
        let queriedValue = rows[0][0].value;
        if (rows[0][0].value) {
          queriedValue = rows[0][0].value.value;
        }
        assert.strictEqual(queriedValue, '123');
      });

      it('POSTGRESQL should read null pgOid values', async () => {
        const [rows] = await PG_DATABASE.run('SELECT null::oid');
        let queriedValue = rows[0][0].value;
        if (rows[0][0].value) {
          queriedValue = rows[0][0].value.value;
        }
        assert.strictEqual(queriedValue, null);
      });
    });

    describe('uuids', () => {
      const uuidInsert = async (dialect, value) => {
        const {row} = await insert({UUIDValue: value}, dialect);

        let expectedValue = value;
        if (typeof value === 'object' && value !== null) {
          expectedValue = value.value;
        }

        assert.deepStrictEqual(row.toJSON().UUIDValue, expectedValue);
      };

      it('GOOGLE_STANDARD_SQL should write uuid values', async () => {
        await uuidInsert(Spanner.GOOGLE_STANDARD_SQL, uuid.v4());
      });

      it.skip('POSTGRESQL should write uuid values', async () => {
        await uuidInsert(Spanner.POSTGRESQL, uuid.v4());
      });

      it('GOOGLE_STANDARD_SQL should write empty uuid array values', async () => {
        const {row} = await insert(
          {UUIDArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().UUIDArray, []);
      });

      it.skip('POSTGRESQL should write empty uuid array values', async () => {
        const {row} = await insert({UUIDArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().UUIDArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write uuid array values', async () => {
        const values = [uuid.v4(), uuid.v4(), uuid.v4()];
        const {row} = await insert(
          {UUIDArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().UUIDArray, values);
      });

      it.skip('POSTGRESQL should write uuid array values', async () => {
        const values = [uuid.v4(), uuid.v4(), uuid.v4()];
        const {row} = await insert({UUIDArray: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().UUIDArray, values);
      });
    });

    describe('float32s', () => {
      const float32Insert = async (dialect, value) => {
        const {row} = await insert({Float32Value: value}, dialect);
        if (typeof value === 'object' && value !== null) {
          value = value.value;
        }
        if (Number.isNaN(row.toJSON().Float32Value)) {
          assert.deepStrictEqual(row.toJSON().Float32Value, value);
        } else if (row.toJSON().Float32Value === value) {
          assert.deepStrictEqual(row.toJSON().Float32Value, value);
        } else {
          assert.ok(row.toJSON().Float32Value - value <= 0.00001);
        }
      };

      it('GOOGLE_STANDARD_SQL should write float32 values', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, 8.2);
      });

      it('POSTGRESQL should write float32 values', async () => {
        await float32Insert(Spanner.POSTGRESQL, 8.2);
      });

      it('GOOGLE_STANDARD_SQL should write null float32 values', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null float32 values', async () => {
        await float32Insert(Spanner.POSTGRESQL, null);
      });

      it('GOOGLE_STANDARD_SQL should accept a Float object with an Int-like value', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, Spanner.float32(8));
      });

      it('POSTGRESQL should accept a Float object with an Int-like value', async () => {
        await float32Insert(Spanner.POSTGRESQL, Spanner.float32(8));
      });

      it('GOOGLE_STANDARD_SQL should handle Infinity', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, Infinity);
      });

      it('POSTGRESQL should handle Infinity', async () => {
        await float32Insert(Spanner.POSTGRESQL, Infinity);
      });

      it('GOOGLE_STANDARD_SQL should handle -Infinity', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, -Infinity);
      });

      it('POSTGRESQL should handle -Infinity', async () => {
        await float32Insert(Spanner.POSTGRESQL, -Infinity);
      });

      it('GOOGLE_STANDARD_SQL should handle NaN', async () => {
        await float32Insert(Spanner.GOOGLE_STANDARD_SQL, NaN);
      });

      it('POSTGRESQL should handle NaN', async () => {
        await float32Insert(Spanner.POSTGRESQL, NaN);
      });

      it('GOOGLE_STANDARD_SQL should write empty float32 array values', async () => {
        const {row} = await insert(
          {Float32Array: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().Float32Array, []);
      });

      it('POSTGRESQL should write empty float32 array values', async () => {
        const {row} = await insert({Float32Array: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().Float32Array, []);
      });

      it('GOOGLE_STANDARD_SQL should write null float32 array values', async () => {
        const {row} = await insert(
          {Float32Array: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().Float32Array, [null]);
      });

      it('POSTGRESQL should write null float32 array values', async () => {
        const {row} = await insert({Float32Array: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().Float32Array, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write float32 array values', async () => {
        const values = [1.2, 2.3, 3.4];
        const {row} = await insert(
          {Float32Array: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        for (let i = 0; i < values.length; i++) {
          assert.ok(row.toJSON().Float32Array[i] - values[i] <= 0.00001);
        }
      });

      it('POSTGRESQL should write float32 array values', async () => {
        const values = [1.2, 2.3, 3.4];
        const {row} = await insert({Float32Array: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().Float32Array, values);
      });
    });

    describe('float64s', () => {
      const float64Insert = async (dialect, value) => {
        const {row} = await insert({FloatValue: value}, dialect);
        if (typeof value === 'object' && value !== null) {
          value = value.value;
        }
        assert.deepStrictEqual(row.toJSON().FloatValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write float64 values', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, 8.2);
      });

      it('POSTGRESQL should write float64 values', async () => {
        await float64Insert(Spanner.POSTGRESQL, 8.2);
      });

      it('GOOGLE_STANDARD_SQL should write null float64 values', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null float64 values', async () => {
        await float64Insert(Spanner.POSTGRESQL, null);
      });

      it('GOOGLE_STANDARD_SQL should accept a Float object with an Int-like value', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, Spanner.float(8));
      });

      it('POSTGRESQL should accept a Float object with an Int-like value', async () => {
        await float64Insert(Spanner.POSTGRESQL, Spanner.float(8));
      });

      it('GOOGLE_STANDARD_SQL should handle Infinity', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, Infinity);
      });

      it('POSTGRESQL should handle Infinity', async () => {
        await float64Insert(Spanner.POSTGRESQL, Infinity);
      });

      it('GOOGLE_STANDARD_SQL should handle -Infinity', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, -Infinity);
      });

      it('POSTGRESQL should handle -Infinity', async () => {
        await float64Insert(Spanner.POSTGRESQL, -Infinity);
      });

      it('GOOGLE_STANDARD_SQL should handle NaN', async () => {
        await float64Insert(Spanner.GOOGLE_STANDARD_SQL, NaN);
      });

      it('POSTGRESQL should handle NaN', async () => {
        await float64Insert(Spanner.POSTGRESQL, NaN);
      });

      it('GOOGLE_STANDARD_SQL should write empty float64 array values', async () => {
        const {row} = await insert(
          {FloatArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().FloatArray, []);
      });

      it('POSTGRESQL should write empty float64 array values', async () => {
        const {row} = await insert({FloatArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().FloatArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null float64 array values', async () => {
        const {row} = await insert(
          {FloatArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().FloatArray, [null]);
      });

      it('POSTGRESQL should write null float64 array values', async () => {
        const {row} = await insert({FloatArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().FloatArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write float64 array values', async () => {
        const values = [1.2, 2.3, 3.4];
        const {row} = await insert(
          {FloatArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().FloatArray, values);
      });

      it('POSTGRESQL should write float64 array values', async () => {
        const values = [1.2, 2.3, 3.4];
        const {row} = await insert({FloatArray: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().FloatArray, values);
      });
    });

    describe('numerics', () => {
      const numericInsert = async (dialect, value) => {
        const {row} = await insert({NumericValue: value}, dialect);
        assert.deepStrictEqual(row.toJSON().NumericValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write numeric values', async () => {
        await numericInsert(
          Spanner.GOOGLE_STANDARD_SQL,
          Spanner.numeric('3.141592653'),
        );
      });

      it('POSTGRESQL should write numeric values', async () => {
        await numericInsert(
          Spanner.POSTGRESQL,
          Spanner.pgNumeric('3.141592653'),
        );
      });

      it('GOOGLE_STANDARD_SQL should write null numeric values', async () => {
        await numericInsert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null numeric values', async () => {
        await numericInsert(Spanner.POSTGRESQL, null);
      });

      it('POSTGRESQL should bind NaN', async () => {
        await numericInsert(Spanner.POSTGRESQL, Spanner.pgNumeric('NaN'));
      });

      const numericInsertOutOfBounds = async (dialect, value) => {
        try {
          await insert({NumericValue: value}, dialect);
          assert.fail('Expected an error to be thrown, but it was not.');
        } catch (err: any) {
          KOKORO_JOB_NAME?.includes('system-test-regular-session')
            ? assert.strictEqual(err.code, grpc.status.FAILED_PRECONDITION)
            : assert.strictEqual(err.code, grpc.status.INVALID_ARGUMENT);
        }
      };

      it('GOOGLE_STANDARD_SQL should throw for out of bounds values', async () => {
        await numericInsertOutOfBounds(
          Spanner.GOOGLE_STANDARD_SQL,
          Spanner.numeric('3.1415926535'),
        );
      });

      it('POSTGRESQL should throw for out of bounds values', async () => {
        await numericInsertOutOfBounds(
          Spanner.POSTGRESQL,
          Spanner.pgNumeric('1e131072'),
        );
      });

      it('GOOGLE_STANDARD_SQL should write empty numeric array values', async () => {
        const {row} = await insert(
          {NumericArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().NumericArray, []);
      });

      it('POSTGRESQL should write empty numeric array values', async () => {
        const {row} = await insert({NumericArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().NumericArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null numeric array values', async () => {
        const {row} = await insert(
          {NumericArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().NumericArray, [null]);
      });

      it('POSTGRESQL should write null numeric array values', async () => {
        try {
          const {row} = await insert(
            {NumericArray: [null]},
            Spanner.POSTGRESQL,
          );
          assert.deepStrictEqual(row.toJSON().NumericArray, [null]);
        } catch (err) {
          assert.ifError(err);
        }
      });

      it('GOOGLE_STANDARD_SQL should write numeric array values', async () => {
        const values = [
          Spanner.numeric('-99999999999999999999999999999.999999999'),
          Spanner.numeric('3.141592653'),
          Spanner.numeric('99999999999999999999999999999.999999999'),
        ];

        const {row} = await insert(
          {NumericArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().NumericArray, values);
      });

      it('POSTGRESQL should write numeric array values', async () => {
        const values = [
          Spanner.pgNumeric('-99999999999999999999999999999.999999999'),
          Spanner.pgNumeric('3.141592653'),
          Spanner.pgNumeric('99999999999999999999999999999.999999999'),
        ];

        const {row} = await insert({NumericArray: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().NumericArray, values);
      });
    });

    describe('strings', () => {
      const stringInsert = async (dialect, value) => {
        const {row} = await insert({StringValue: value}, dialect);
        assert.strictEqual(row.toJSON().StringValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write string values', async () => {
        await stringInsert(Spanner.GOOGLE_STANDARD_SQL, 'abc');
      });

      it('POSTGRESQL should write string values', async () => {
        await stringInsert(Spanner.POSTGRESQL, 'abc');
      });

      it('GOOGLE_STANDARD_SQL should write null string values', async () => {
        await stringInsert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null string values', async () => {
        await stringInsert(Spanner.POSTGRESQL, null);
      });

      it('GOOGLE_STANDARD_SQL should write empty string array values', async () => {
        const {row} = await insert(
          {StringArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().StringArray, []);
      });

      it('POSTGRESQL should write empty string array values', async () => {
        const {row} = await insert({StringArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().StringArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null string array values', async () => {
        const {row} = await insert(
          {StringArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().StringArray, [null]);
      });

      it('POSTGRESQL should write null string array values', async () => {
        const {row} = await insert({StringArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().StringArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write string array values', async () => {
        const {row} = await insert(
          {StringArray: ['abc', 'def']},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().StringArray, ['abc', 'def']);
      });

      it('POSTGRESQL should write string array values', async () => {
        const {row} = await insert(
          {StringArray: ['abc', 'def']},
          Spanner.POSTGRESQL,
        );
        assert.deepStrictEqual(row.toJSON().StringArray, ['abc', 'def']);
      });
    });

    describe('bytes', () => {
      const bytesInsert = async (dialect, value) => {
        const {row} = await insert({BytesValue: value}, dialect);
        assert.deepStrictEqual(row.toJSON().BytesValue, value);
      };

      it('GOOGLE_STANDARD_SQL should write bytes values', async () => {
        await bytesInsert(Spanner.GOOGLE_STANDARD_SQL, Buffer.from('abc'));
      });

      it('POSTGRESQL should write bytes values', async () => {
        await bytesInsert(Spanner.POSTGRESQL, Buffer.from('abc'));
      });

      it('GOOGLE_STANDARD_SQL should write null bytes values', async () => {
        await bytesInsert(Spanner.GOOGLE_STANDARD_SQL, null);
      });

      it('POSTGRESQL should write null bytes values', async () => {
        await bytesInsert(Spanner.POSTGRESQL, null);
      });

      it('GOOGLE_STANDARD_SQL should write empty bytes array values', async () => {
        const {row} = await insert(
          {BytesArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BytesArray, []);
      });

      it('POSTGRESQL should write empty bytes array values', async () => {
        const {row} = await insert({BytesArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().BytesArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null bytes array values', async () => {
        const {row} = await insert(
          {BytesArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BytesArray, [null]);
      });

      it('POSTGRESQL should write null bytes array values', async () => {
        const {row} = await insert({BytesArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().BytesArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write bytes array values', async () => {
        const values = [Buffer.from('a'), Buffer.from('b')];
        const {row} = await insert(
          {BytesArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().BytesArray, values);
      });

      it('POSTGRESQL should write bytes array values', async () => {
        const values = [Buffer.from('a'), Buffer.from('b')];
        const {row} = await insert({BytesArray: values}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().BytesArray, values);
      });
    });

    describe('jsons', () => {
      before(async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
      });

      it('GOOGLE_STANDARD_SQL should write json values', async () => {
        const {row} = await insert(
          {JsonValue: {key1: 'value1', key2: 'value2'}},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().JsonValue, {
          key1: 'value1',
          key2: 'value2',
        });
      });

      it('GOOGLE_STANDARD_SQL should write null json values', async () => {
        const {row} = await insert(
          {JsonValue: null},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.strictEqual(row.toJSON().JsonValue, null);
      });

      it('GOOGLE_STANDARD_SQL should write empty json array values', async () => {
        const {row} = await insert(
          {JsonArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().JsonArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null json array values', async () => {
        const {row} = await insert(
          {JsonArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().JsonArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write json array values', async () => {
        const {row} = await insert(
          {JsonArray: [{key1: 'value1'}, {key2: 'value2'}]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().JsonArray, [
          {key1: 'value1'},
          {key2: 'value2'},
        ]);
      });
    });

    describe('timestamps', () => {
      const timestampInsert = async dialect => {
        const date = Spanner.timestamp();
        const {row} = await insert({TimestampValue: date}, dialect);
        const time = row.toJSON().TimestampValue.getTime();
        assert.strictEqual(time, date.getTime());
      };

      it('GOOGLE_STANDARD_SQL should write timestamp values', async () => {
        await timestampInsert(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should write timestamp values', async () => {
        await timestampInsert(Spanner.POSTGRESQL);
      });

      const timestampInsertNull = async dialect => {
        const {row} = await insert({TimestampValue: null}, dialect);
        assert.strictEqual(row.toJSON().TimestampValue, null);
      };

      it('GOOGLE_STANDARD_SQL should write null timestamp values', async () => {
        await timestampInsertNull(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should write null timestamp values', async () => {
        await timestampInsertNull(Spanner.POSTGRESQL);
      });

      it('GOOGLE_STANDARD_SQL should write empty timestamp array values', async () => {
        const {row} = await insert(
          {TimestampArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().TimestampArray, []);
      });

      it('POSTGRESQL should write empty timestamp array values', async () => {
        const {row} = await insert({TimestampArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().TimestampArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null timestamp array values', async () => {
        const {row} = await insert(
          {TimestampArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().TimestampArray, [null]);
      });

      it('POSTGRESQL should write null timestamp array values', async () => {
        const {row} = await insert(
          {TimestampArray: [null]},
          Spanner.POSTGRESQL,
        );
        assert.deepStrictEqual(row.toJSON().TimestampArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write timestamp array values', async () => {
        const values = [Spanner.timestamp(), Spanner.timestamp('3-3-1933')];
        const {row} = await insert(
          {TimestampArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().TimestampArray, values);
      });

      it('POSTGRESQL should write timestamp array values', async () => {
        const values = [Spanner.timestamp(), Spanner.timestamp('3-3-1933')];
        const {row} = await insert(
          {TimestampArray: values},
          Spanner.POSTGRESQL,
        );
        assert.deepStrictEqual(row.toJSON().TimestampArray, values);
      });
    });

    describe('dates', () => {
      const dateInsert = async dialect => {
        const {row} = await insert({DateValue: Spanner.date()}, dialect);
        assert.deepStrictEqual(
          Spanner.date(row.toJSON().DateValue),
          Spanner.date(),
        );
      };

      it('GOOGLE_STANDARD_SQL should write date values', async () => {
        await dateInsert(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should write date values', async () => {
        await dateInsert(Spanner.POSTGRESQL);
      });

      const dateInsertNull = async dialect => {
        const {row} = await insert({DateValue: null}, dialect);
        assert.strictEqual(row.toJSON().DateValue, null);
      };

      it('GOOGLE_STANDARD_SQL should write null date values', async () => {
        await dateInsertNull(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should write null date values', async () => {
        await dateInsertNull(Spanner.POSTGRESQL);
      });

      it('GOOGLE_STANDARD_SQL should write empty date array values', async () => {
        const {row} = await insert(
          {DateArray: []},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().DateArray, []);
      });

      it('POSTGRESQL should write empty date array values', async () => {
        const {row} = await insert({DateArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().DateArray, []);
      });

      it('GOOGLE_STANDARD_SQL should write null date array values', async () => {
        const {row} = await insert(
          {DateArray: [null]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().DateArray, [null]);
      });

      it('POSTGRESQL should write null date array values', async () => {
        const {row} = await insert({DateArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().DateArray, [null]);
      });

      it('GOOGLE_STANDARD_SQL should write date array values', async () => {
        const values = [Spanner.date(), Spanner.date('3-3-1933')];
        const {row} = await insert(
          {DateArray: values},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        const {DateArray} = row.toJSON();
        assert.deepStrictEqual(DateArray, values);
      });

      it('POSTGRESQL should write date array values', async () => {
        const values = [Spanner.date(), Spanner.date('3-3-1933')];
        const {row} = await insert({DateArray: values}, Spanner.POSTGRESQL);
        const {DateArray} = row.toJSON();
        assert.deepStrictEqual(DateArray, values);
      });
    });

    describe('protoMessage', () => {
      before(async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
      });

      const protoMessageParams = {
        value: music.SingerInfo.create({
          singerId: new Long(1),
          genre: music.Genre.POP,
          birthDate: 'January',
          nationality: 'Country1',
        }),
        messageFunction: music.SingerInfo,
        fullName: 'examples.spanner.music.SingerInfo',
      };

      it('GOOGLE_STANDARD_SQL should write protoMessage values', async () => {
        const value = Spanner.protoMessage(protoMessageParams);
        const {row} = await insert(
          {ProtoMessageValue: value},
          Spanner.GOOGLE_STANDARD_SQL,
          {ProtoMessageValue: music.SingerInfo},
        );
        assert.deepStrictEqual(
          row.toJSON().ProtoMessageValue,
          music.SingerInfo.toObject(protoMessageParams.value),
        );
      });

      it('GOOGLE_STANDARD_SQL should write bytes in the protoMessage column', async () => {
        const value = music.SingerInfo.encode(
          protoMessageParams.value,
        ).finish();
        const {row} = await insert(
          {ProtoMessageValue: value},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(
          row.toJSON().ProtoMessageValue,
          value.toString(),
        );
      });

      it('GOOGLE_STANDARD_SQL should write null in the protoMessage column', async () => {
        const {row} = await insert(
          {ProtoMessageValue: null},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.equal(row.toJSON().ProtoMessageValue, null);
      });

      it('GOOGLE_STANDARD_SQL should write protoMessageArray', async () => {
        const value = Spanner.protoMessage(protoMessageParams);
        const {row} = await insert(
          {ProtoMessageArray: [value]},
          Spanner.GOOGLE_STANDARD_SQL,
          {ProtoMessageArray: music.SingerInfo},
        );
        assert.deepStrictEqual(row.toJSON().ProtoMessageArray, [
          music.SingerInfo.toObject(protoMessageParams.value),
        ]);
      });

      it('GOOGLE_STANDARD_SQL should write bytes array in the protoMessageArray column', async () => {
        const value = music.SingerInfo.encode(
          protoMessageParams.value,
        ).finish();
        const {row} = await insert(
          {ProtoMessageArray: [value]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().ProtoMessageArray, [
          value.toString(),
        ]);
      });

      it('GOOGLE_STANDARD_SQL should write null in the protoMessageArray column', async () => {
        const {row} = await insert(
          {ProtoMessageArray: null},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.equal(row.toJSON().ProtoMessageArray, null);
      });
    });

    describe('protoEnum', () => {
      before(async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
      });

      const enumParams = {
        value: music.Genre.JAZZ,
        enumObject: music.Genre,
        fullName: 'examples.spanner.music.Genre',
      };

      it('GOOGLE_STANDARD_SQL should write protoEnum values', async () => {
        const value = Spanner.protoEnum(enumParams);
        const {row} = await insert(
          {ProtoEnumValue: value},
          Spanner.GOOGLE_STANDARD_SQL,
          {ProtoEnumValue: music.Genre},
        );
        assert.deepStrictEqual(
          row.toJSON().ProtoEnumValue,
          Object.getPrototypeOf(music.Genre)[enumParams.value],
        );
      });

      it('GOOGLE_STANDARD_SQL should write int in the protoEnum column', async () => {
        const value = 2;
        const {row} = await insert(
          {ProtoEnumValue: value},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().ProtoEnumValue, value.toString());
      });

      it('GOOGLE_STANDARD_SQL should write null in the protoEnum column', async () => {
        const {row} = await insert(
          {ProtoEnumValue: null},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.equal(row.toJSON().ProtoEnumValue, null);
      });

      it('GOOGLE_STANDARD_SQL should write protoEnumArray', async () => {
        const value = Spanner.protoEnum(enumParams);
        const {row} = await insert(
          {ProtoEnumArray: [value]},
          Spanner.GOOGLE_STANDARD_SQL,
          {ProtoEnumArray: music.Genre},
        );
        assert.deepStrictEqual(row.toJSON().ProtoEnumArray, [
          Object.getPrototypeOf(music.Genre)[enumParams.value],
        ]);
      });

      it('GOOGLE_STANDARD_SQL should write int array in the protoEnumArray column', async () => {
        const value = 3;
        const {row} = await insert(
          {ProtoEnumArray: [value]},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.deepStrictEqual(row.toJSON().ProtoEnumArray, [value.toString()]);
      });

      it('GOOGLE_STANDARD_SQL should write null in the protoEnumArray column', async () => {
        const {row} = await insert(
          {ProtoEnumArray: null},
          Spanner.GOOGLE_STANDARD_SQL,
        );
        assert.equal(row.toJSON().ProtoEnumArray, null);
      });
    });

    describe('jsonb', () => {
      before(async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
      });

      it('POSTGRESQL should write jsonb values', async () => {
        const value = Spanner.pgJsonb({
          key1: 'value1',
          key2: 'value2',
        });
        const {row} = await insert({JsonbValue: value}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().JsonbValue, value);
      });

      it('POSTGRESQL should write null jsonb values', async () => {
        const {row} = await insert({JsonbValue: null}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().JsonbValue, null);
      });

      it('POSTGRESQL should write empty json array values', async () => {
        const {row} = await insert({JsonbArray: []}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().JsonbArray, []);
      });

      it('POSTGRESQL should write null json array values', async () => {
        const {row} = await insert({JsonbArray: [null]}, Spanner.POSTGRESQL);
        assert.deepStrictEqual(row.toJSON().JsonbArray, [null]);
      });

      it('POSTGRESQL should write json array values', async () => {
        const {row} = await insert(
          {JsonbArray: [{key1: 'value1'}, {key2: 'value2'}]},
          Spanner.POSTGRESQL,
        );
        assert.deepStrictEqual(row.toJSON().JsonbArray, [
          Spanner.pgJsonb({key1: 'value1'}),
          Spanner.pgJsonb({key2: 'value2'}),
        ]);
      });
    });

    describe('commit timestamp', () => {
      const commitTimestamp = async dialect => {
        const data = {CommitTimestamp: Spanner.COMMIT_TIMESTAMP};

        const {row, insertResp} = await insert(data, dialect);
        const timestampFromCommit = Spanner.timestamp(
          insertResp.commitTimestamp,
        );
        const timestampFromRead = row.toJSON().CommitTimestamp;

        assert.deepStrictEqual(timestampFromCommit, timestampFromRead);
      };

      it('GOOGLE_STANDARD_SQL should accept the commit timestamp placeholder', async () => {
        await commitTimestamp(Spanner.GOOGLE_STANDARD_SQL);
      });

      it('POSTGRESQL should accept the commit timestamp placeholder', async () => {
        await commitTimestamp(Spanner.POSTGRESQL);
      });
    });
  });

  describe('Instances', () => {
    it('should have created the instance', async () => {
      const [metadata] = await instance.getMetadata();
      assert.strictEqual(metadata!.name, instance.formattedName_);
    });

    it('should respect the FieldMask', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const fieldNames = ['name', 'displayName'];

      const [metadata] = await instance.getMetadata({fieldNames});
      assert.deepStrictEqual(metadata['endpointUris'], []);
      assert.deepStrictEqual(metadata['labels'], {});
      assert.strictEqual(metadata.name, instance.formattedName_);
      assert.ok(!metadata['config']);
      assert.ok(metadata['displayName']);
      assert.strictEqual(metadata['nodeCount'], 0);
      assert.strictEqual(metadata['state'], 'STATE_UNSPECIFIED');
    });

    it('should auto create an instance', async () => {
      const instance = spanner.instance(generateName('instance'));

      const config = extend(
        {
          autoCreate: true,
        },
        INSTANCE_CONFIG,
      );

      await instance.get(config);
      RESOURCES_TO_CLEAN.push(instance);
      await instance.getMetadata();
    });

    it('should list the instances', async () => {
      const [instances] = await spanner.getInstances();
      assert(instances!.length > 0);
    });

    it('should list the instances in promise mode', async () => {
      const [instances] = await spanner.getInstances();
      assert(instances.length > 0);
    });

    it('should list the instances in stream mode', done => {
      spanner
        .getInstancesStream()
        .on('error', done)
        .pipe(
          concat(instances => {
            assert(instances.length > 0);
            done();
          }),
        );
    });

    it('should update the metadata', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }

      const newData = {
        displayName: 'new-display-name-' + shortUUID(),
      };
      const [operation] = await instance.setMetadata(newData);
      await operation.promise();
      const [metadata] = await instance.getMetadata();
      assert.strictEqual(metadata.displayName, newData.displayName);
    });

    it('should return true for instances that exist', async () => {
      const [exists] = await instance.exists();
      assert.strictEqual(exists, true);
    });

    it('should return false for instances that do not exist', async () => {
      const [exists] = await spanner.instance('bad-instance').exists();
      assert.strictEqual(exists, false);
    });
  });

  describe('instanceConfigs', () => {
    before(async () => {
      if (!IS_EMULATOR_ENABLED) {
        // Create a user-managed instance config from a base instance config.
        const instanceAdminClient = spanner.getInstanceAdminClient();
        const [baseInstanceConfig] =
          await instanceAdminClient.getInstanceConfig({
            name: instanceAdminClient.instanceConfigPath(
              projectId!,
              INSTANCE_CONFIG.config,
            ),
          });
        const [instanceConfigCreationOperation] =
          await instanceAdminClient.createInstanceConfig({
            instanceConfigId: instanceConfigId,
            parent: instanceAdminClient.projectPath(projectId!),
            instanceConfig: {
              name: instanceAdminClient.instanceConfigPath(
                projectId!,
                instanceConfigId,
              ),
              baseConfig: instanceAdminClient.instanceConfigPath(
                projectId!,
                INSTANCE_CONFIG.config,
              ),
              displayName: instanceConfigId,
              replicas: baseInstanceConfig.replicas!.concat(
                baseInstanceConfig.optionalReplicas![0],
              ),
            },
          });
        await instanceConfigCreationOperation.promise();
        instanceConfig = spanner.instanceConfig(instanceConfigId);
        INSTANCE_CONFIGS_TO_CLEAN.push(instanceConfig);
      }
    });

    after(async () => {
      /**
       * Deleting instance configs created during this test.
       * @see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig}
       */
      await Promise.all(
        INSTANCE_CONFIGS_TO_CLEAN.map(instanceConfig =>
          instanceConfig.delete({gaxOpts: GAX_OPTIONS}),
        ),
      );
    });

    it('should have created the instance config', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [metadata] = await instanceConfig.get();
      assert.strictEqual(metadata!.name, instanceConfig.formattedName_);
    });

    it('should list the available instanceConfigs', async () => {
      const [instanceConfigs] = await spanner.getInstanceConfigs();
      assert(instanceConfigs!.length > 0);
    });

    it('should list the instanceConfigs in promise mode', async () => {
      const [instanceConfigs] = await spanner.getInstanceConfigs();
      assert(instanceConfigs.length > 0);
    });

    it('should list the instanceConfigs in stream mode', done => {
      spanner
        .getInstanceConfigsStream()
        .on('error', done)
        .pipe(
          concat(instanceConfigs => {
            assert(instanceConfigs.length > 0);
            done();
          }),
        );
    });

    it("should get an instanceConfig's metadata using getInstanceConfig", async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [instanceConfig] = await spanner.getInstanceConfig('nam6');
      assert(instanceConfig!.displayName);
    });

    it("should get an instanceConfig's metadata in promise mode using getInstanceConfig", async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [instanceConfig] = await spanner.getInstanceConfig('nam6');
      assert(instanceConfig.displayName);
    });

    it("should get an instanceConfig's metadata using get", async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [instanceConfig] = await spanner.instanceConfig('nam6').get();
      assert(instanceConfig.displayName);
    });

    it("should list an instanceConfig's operations without filter", async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }

      const [operationsWithoutFilter] =
        await spanner.getInstanceConfigOperations();
      const operationForCurrentInstanceConfig = operationsWithoutFilter!.find(
        operation =>
          operation.name &&
          operation.name.includes(instanceConfig.formattedName_),
      );
      assert.ok(operationForCurrentInstanceConfig);
      assert.strictEqual(
        operationForCurrentInstanceConfig!.metadata!.type_url,
        'type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata',
      );
    });

    it("should list an instanceConfig's operations with filter", async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }

      const [operationsWithFilter] = await spanner.getInstanceConfigOperations({
        filter: `(metadata.@type:type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata) AND
                    (name:${instanceConfig.formattedName_})`,
      });
      const operationForCurrentInstanceConfigWithFilter =
        operationsWithFilter[0];
      assert.ok(operationForCurrentInstanceConfigWithFilter);
      const operationForCurrentInstanceConfigWithFilterMetadata =
        CreateInstanceConfigMetadata.decode(
          operationForCurrentInstanceConfigWithFilter!.metadata!
            .value! as Uint8Array,
        );
      assert.strictEqual(
        operationForCurrentInstanceConfigWithFilterMetadata.instanceConfig!
          .name,
        `${instanceConfig.formattedName_}`,
      );
    });

    it('should update the instance config metadata', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }

      const newData = {
        instanceConfig: {
          displayName: 'new-display-name-' + shortUUID(),
        },
      };
      const [operation] = await instanceConfig.setMetadata(newData);
      await operation.promise();
      const [metadata] = await instanceConfig.get();
      assert.strictEqual(
        metadata.displayName,
        newData.instanceConfig.displayName,
      );
    });

    it('should return true for instance config that exist', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const doesExist = await instanceConfig.exists();
      assert.strictEqual(doesExist, true);
    });

    it('should return false for instance configs that do not exist', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const doesExist = await spanner
        .instanceConfig('bad-instance-config')
        .exists();
      assert.strictEqual(doesExist, false);
    });
  });

  describe('Databases', () => {
    const TABLE_NAME = 'SingersTest';
    const autoCreateDatabase = async databaseId => {
      const database = instance.database(generateName(databaseId));
      await database.get({autoCreate: true} as GetDatabaseConfig);
      RESOURCES_TO_CLEAN.push(database);
      await database.getMetadata();
    };

    it('GOOGLE_STANDARD_SQL should auto create a database', async () => {
      await autoCreateDatabase('database');
    });

    it('POSTGRESQL should auto create a database', async () => {
      await autoCreateDatabase('pg-db');
    });

    const createDatabase = async (database, dialect) => {
      const [metadata] = await database.getMetadata();
      assert.strictEqual(metadata!.name, database.formattedName_);
      assert.strictEqual(metadata!.state, 'READY');
      assert.strictEqual(metadata!.databaseDialect, dialect);
    };

    it('GOOGLE_STANDARD_SQL should have created the database', async () => {
      await createDatabase(DATABASE, 'GOOGLE_STANDARD_SQL');
    });

    it('POSTGRESQL should have created the database', async () => {
      await createDatabase(PG_DATABASE, 'POSTGRESQL');
    });

    it('should list the databases from an instance', async () => {
      const [databases] = await instance.getDatabases();
      assert(databases!.length > 0);
      // check if enableDropProtection is populated for databases.
      databases!.map(db => {
        assert.notStrictEqual(db.metadata.enableDropProtection, null);
      });
    });

    it('should list the databases in promise mode', async () => {
      const [databases] = await instance.getDatabases();
      assert(databases.length > 0);
    });

    it('should list the databases in stream mode', done => {
      instance
        .getDatabasesStream()
        .on('error', done)
        .pipe(
          concat(databases => {
            assert(databases.length > 0);
            done();
          }),
        );
    });

    it('should return true for databases that exist', async () => {
      const [exists] = await DATABASE.exists();
      assert.strictEqual(exists, true);
    });

    it('should return false for databases that do not exist', async () => {
      const [exists] = await instance.database('bad-database').exists();
      assert.strictEqual(exists, false);
    });

    const createTable = async (database, dialect, createTableStatement) => {
      const [operation] = await database.updateSchema([createTableStatement]);
      await operation.promise();
      function replaceNewLinesAndSpacing(str, dialect) {
        const schema = str.replace(/\n\s*/g, '').replace(/\s+/g, ' ');
        if (dialect === Spanner.GOOGLE_STANDARD_SQL) {
          return schema;
        } else {
          return schema.toLowerCase();
        }
      }
      const [statements] = await database.getSchema();
      assert.ok(
        statements.some(
          s =>
            replaceNewLinesAndSpacing(s, dialect) ===
            replaceNewLinesAndSpacing(createTableStatement, dialect),
        ),
      );
    };

    it('GOOGLE_STANDARD_SQL should create a table', async () => {
      const createTableStatement = `
        CREATE TABLE ${TABLE_NAME} (
          SingerId INT64 NOT NULL,
          FirstName STRING(1024),
          LastName STRING(1024),
          SingerInfo BYTES(MAX),
        ) PRIMARY KEY(SingerId)`;

      await createTable(
        DATABASE,
        Spanner.GOOGLE_STANDARD_SQL,
        createTableStatement,
      );
    });

    it('POSTGRESQL should create a table', async () => {
      const createTableStatement = `
        CREATE TABLE ${TABLE_NAME} (
          SingerId BIGINT NOT NULL,
          FirstName CHARACTER VARYING,
          LastName CHARACTER VARYING,
          SingerInfo BYTEA,
          PRIMARY KEY(SingerId)
        )`;

      await createTable(PG_DATABASE, Spanner.POSTGRESQL, createTableStatement);
    });

    it('should list database operations on an instance', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      // Look up the database full name from the metadata to expand any {{projectId}} tokens.
      const [databaseMetadata] = await DATABASE.getMetadata();
      const databaseFullName = databaseMetadata.name;

      // List operations and ensure operation for creation of test database exists.
      const [databaseCreateOperations] = await instance.getDatabaseOperations({
        filter: `(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CreateDatabaseMetadata) AND
                 (metadata.database:${DATABASE.formattedName_})`,
      });

      // Validate operation and its metadata.
      assert.strictEqual(databaseCreateOperations.length, 1);
      const databaseCreateOperation = databaseCreateOperations[0];
      assert.strictEqual(
        databaseCreateOperation.metadata!.type_url,
        'type.googleapis.com/google.spanner.admin.database.v1.CreateDatabaseMetadata',
      );
      const createMeta = CreateDatabaseMetadata.decode(
        databaseCreateOperation.metadata!.value! as Uint8Array,
      );
      assert.strictEqual(createMeta.database, databaseFullName);
    });

    const listDatabaseOperation = async function (database) {
      // Look up the database full name from the metadata to expand any {{projectId}} tokens.
      const [databaseMetadata] = await database.getMetadata();
      const databaseFullName = databaseMetadata.name;

      // List operations.
      const [databaseOperations] = await database.getOperations();

      // Validate operation has at least the create operation for the database.
      assert.ok(databaseOperations.length > 0);
      const databaseCreateOperation = databaseOperations.find(
        op =>
          op.metadata!.type_url ===
          'type.googleapis.com/google.spanner.admin.database.v1.CreateDatabaseMetadata',
      );
      const createMeta = CreateDatabaseMetadata.decode(
        databaseCreateOperation!.metadata!.value! as Uint8Array,
      );
      assert.strictEqual(createMeta.database, databaseFullName);
    };

    it('GOOGLE_STANDARD_SQL should list database operations on a database', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      await listDatabaseOperation(DATABASE);
    });

    it('POSTGRESQL should list database operations on a database', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      await listDatabaseOperation(PG_DATABASE);
    });

    it('enable_drop_protection should be disabled by default', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [databaseMetadata] = await DATABASE_DROP_PROTECTION.getMetadata();
      assert.strictEqual(databaseMetadata!.enableDropProtection, false);
    });

    it('enable_drop_protection on database', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [operation1] = await DATABASE_DROP_PROTECTION.setMetadata({
        enableDropProtection: true,
      });
      await operation1.promise();

      try {
        await DATABASE_DROP_PROTECTION.delete();
        assert.ok(false);
      } catch (err) {
        assert.ok(true);
      }

      const [operation2] = await DATABASE_DROP_PROTECTION.setMetadata({
        enableDropProtection: false,
      });
      await operation2.promise();
    });

    describe('FineGrainedAccessControl', () => {
      before(function () {
        if (SKIP_FGAC_TESTS === 'true') {
          this.skip();
        }
      });
      const createUserDefinedDatabaseRole = async (database, query) => {
        const [operation] = await database.updateSchema([query]);
        await operation.promise();
        const [statements] = await database.getSchema();
        assert.ok(statements.includes(query));
      };

      it('GOOGLE_STANDARD_SQL should create a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await createUserDefinedDatabaseRole(DATABASE, 'CREATE ROLE parent');
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      it('POSTGRESQL should create a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await createUserDefinedDatabaseRole(PG_DATABASE, 'CREATE ROLE parent');
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      const grantAccessToRole = async (
        database,
        createRoleQuery,
        grantAccessQuery,
      ) => {
        const [operation] = await database.updateSchema([
          createRoleQuery,
          grantAccessQuery,
        ]);
        await operation.promise();
        const [statements] = await database.getSchema();
        assert.ok(statements.includes(createRoleQuery));
        assert.ok(statements.includes(grantAccessQuery));
      };

      it('GOOGLE_STANDARD_SQL should grant access to a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessToRole(
          DATABASE,
          'CREATE ROLE child',
          'GRANT SELECT ON TABLE Singers TO ROLE child',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      it('POSTGRESQL should grant access to a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessToRole(
          PG_DATABASE,
          'CREATE ROLE child',
          'GRANT SELECT ON TABLE singers TO child',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      const userDefinedDatabaseRoleRevoked = async (
        database,
        createRoleQuery,
        grantPermissionQuery,
        revokePermissionQuery,
      ) => {
        const [grantOperation] = await database.updateSchema([
          createRoleQuery,
          grantPermissionQuery,
        ]);
        await grantOperation.promise();
        const [statementsAfterGrant] = await database.getSchema();
        assert.ok(statementsAfterGrant.includes(createRoleQuery));
        assert.ok(statementsAfterGrant.includes(grantPermissionQuery));
        const [revokeOperation] = await database.updateSchema([
          revokePermissionQuery,
        ]);
        await revokeOperation.promise();
        const [statementsAfterRevoke] = await database.getSchema();
        assert.ok(!statementsAfterRevoke.includes(grantPermissionQuery));
      };

      it('GOOGLE_STANDARD_SQL should revoke permissions of a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await userDefinedDatabaseRoleRevoked(
          DATABASE,
          'CREATE ROLE orphan',
          'GRANT SELECT ON TABLE Singers TO ROLE orphan',
          'REVOKE SELECT ON TABLE Singers FROM ROLE orphan',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      it('POSTGRESQL should revoke permissions of a user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await userDefinedDatabaseRoleRevoked(
          PG_DATABASE,
          'CREATE ROLE orphan',
          'GRANT SELECT ON TABLE singers TO orphan',
          'REVOKE SELECT ON TABLE singers FROM orphan',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      const userDefinedDatabaseRoleDropped = async (
        database,
        createRoleQuery,
        dropRoleQuery,
      ) => {
        const [createOperation] = await database.updateSchema([
          createRoleQuery,
        ]);
        await createOperation.promise();
        const [statementsAfterCreate] = await database.getSchema();
        assert.ok(statementsAfterCreate.includes(createRoleQuery));
        const [dropOperation] = await database.updateSchema([dropRoleQuery]);
        await dropOperation.promise();
        const [statementsAfterDrop] = await database.getSchema();
        assert.ok(!statementsAfterDrop.includes(createRoleQuery));
      };

      it('GOOGLE_STANDARD_SQL should drop the user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await userDefinedDatabaseRoleDropped(
          DATABASE,
          'CREATE ROLE new_parent',
          'DROP ROLE new_parent',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      it('POSTGRESQL should drop the user defined role', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await userDefinedDatabaseRoleDropped(
          PG_DATABASE,
          'CREATE ROLE new_parent',
          'DROP ROLE new_parent',
        );
        await new Promise(resolve => setTimeout(resolve, 60000));
      });

      const grantAccessSuccess = async (database, grantPermissionQuery) => {
        const id = 7;
        const [operation] = await database.updateSchema([
          'CREATE ROLE read_access',
          grantPermissionQuery,
        ]);
        await operation.promise();
        const table = database.table('Singers');
        await table.insert({
          SingerId: id,
        });
        const dbReadRole = instance.database(database.formattedName_, {
          databaseRole: 'read_access',
        });
        const query = {
          sql: 'SELECT SingerId, Name FROM Singers',
        };
        const [rows] = await dbReadRole.run(query);
        assert.ok(rows.length > 0);
        await table.deleteRows([id]);
      };

      it('GOOGLE_STANDARD_SQL should run query with access granted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessSuccess(
          DATABASE,
          'GRANT SELECT ON TABLE Singers TO ROLE read_access',
        );
      });

      it('POSTGRESQL should run query with access granted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessSuccess(
          PG_DATABASE,
          'GRANT SELECT ON TABLE singers TO read_access',
        );
      });

      const grantAccessFailure = async (database, grantPermissionQuery) => {
        const id = 8;
        const [operation] = await database.updateSchema([
          'CREATE ROLE write_access',
          grantPermissionQuery,
        ]);
        await operation.promise();
        const table = database.table('Singers');
        await table.insert({
          SingerId: id,
        });
        const dbWriteRole = instance.database(database.formattedName_, {
          databaseRole: 'write_access',
        });

        const query = {
          sql: 'SELECT SingerId, Name FROM Singers',
        };
        await assert.rejects(async () => {
          await dbWriteRole.run(query);
        });
        await table.deleteRows([id]);
      };

      it('GOOGLE_STANDARD_SQL should fail run query due to no access granted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessFailure(
          DATABASE,
          'GRANT INSERT ON TABLE Singers TO ROLE write_access',
        );
      });

      it('POSTGRESQL should fail run query due to no access granted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await grantAccessFailure(
          PG_DATABASE,
          'GRANT INSERT ON TABLE singers TO write_access',
        );
      });

      const listDatabaseRoles = async database => {
        const [updateRole] = await database.updateSchema([
          'CREATE ROLE new_parent',
        ]);
        await updateRole.promise();

        const [databaseRoles] = await database.getDatabaseRoles();
        assert.ok(databaseRoles.length > 0);
        assert.ok(
          databaseRoles.find(
            role =>
              role.name ===
              database.formattedName_ + '/databaseRoles/new_parent',
          ),
        );
      };

      it('GOOGLE_STANDARD_SQL should list database roles', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await listDatabaseRoles(DATABASE);
      });

      it('POSTGRESQL should list database roles', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await listDatabaseRoles(PG_DATABASE);
      });

      const getIamPolicy = async database => {
        const [policy] = await database.getIamPolicy();
        assert.strictEqual(policy!.version, 0);
        assert.deepStrictEqual(policy!.bindings, []);
      };

      it('GOOGLE_STANDARD_SQL should get IAM Policy', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await getIamPolicy(DATABASE);
      });

      it('POSTGRESQL should should get IAM Policy', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await getIamPolicy(PG_DATABASE);
      });

      const setIamPolicy = async database => {
        const newBinding = {
          role: 'roles/spanner.fineGrainedAccessUser',
          members: [`user:${IAM_MEMBER}`],
          condition: {
            title: 'new condition',
            expression: 'resource.name.endsWith("/databaseRoles/parent")',
          },
        };
        const policy = {
          bindings: [newBinding],
          version: 3,
        };
        await database.setIamPolicy({policy: policy}, (err, policy) => {
          assert.ifError(err);
          assert.strictEqual(policy.version, 3);
          assert.deepStrictEqual(policy.bindings, newBinding);
        });
      };

      it('GOOGLE_STANDARD_SQL should set IAM Policy', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await setIamPolicy(DATABASE);
      });

      it('POSTGRESQL should should set IAM Policy', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await setIamPolicy(PG_DATABASE);
      });
    });

    describe('ForeignKeyDeleteCascadeAction', () => {
      before(async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
      });

      const fkadc_database_id = generateName('fkadc');
      const fkadc_database_pg_id = generateName('fkadc-pg');

      const fkadc_schema = [
        `CREATE TABLE Customers (
            CustomerId INT64,
            CustomerName STRING(62) NOT NULL
            ) PRIMARY KEY (CustomerId)`,
        `CREATE TABLE ShoppingCarts (
            CartId INT64 NOT NULL,
            CustomerId INT64 NOT NULL,
            CustomerName STRING(62) NOT NULL,
            CONSTRAINT FKShoppingCartsCustomerId FOREIGN KEY (CustomerId)
            REFERENCES Customers (CustomerId) ON DELETE CASCADE,
          ) PRIMARY KEY (CartId)`,
      ];
      const fkadc_pg_schema = [
        `CREATE TABLE Customers (
            CustomerId BIGINT,
            CustomerName VARCHAR(62) NOT NULL,
            PRIMARY KEY (CustomerId)
         ) `,
        `CREATE TABLE ShoppingCarts (
            CartId BIGINT,
            CustomerId BIGINT NOT NULL,
            CustomerName VARCHAR(62) NOT NULL,
            CONSTRAINT "FKShoppingCartsCustomerId" FOREIGN KEY (CustomerId)
            REFERENCES Customers (CustomerId) ON DELETE CASCADE,
            PRIMARY KEY (CartId)
          )`,
      ];

      const createDatabaseWithFKADC = async (
        dialect,
        database_id,
        database_schema,
      ) => {
        const [database, operation] = await instance.createDatabase(
          database_id,
          {databaseDialect: dialect},
        );
        await operation.promise();

        const [operationUpdateDDL] =
          await database.updateSchema(database_schema);
        await operationUpdateDDL.promise();

        const [schema] = await database.getSchema();
        assert.strictEqual(
          schema.filter(x => x.includes('FKShoppingCartsCustomerId')).length,
          1,
        );
      };

      it('GOOGLE_STANDARD_SQL should create a database with foreign key delete cascade action', async () => {
        await createDatabaseWithFKADC(
          Spanner.GOOGLE_STANDARD_SQL,
          fkadc_database_id,
          fkadc_schema,
        );
      });

      it('POSTGRESQL should create a database with foreign key delete cascade action', async () => {
        await createDatabaseWithFKADC(
          Spanner.POSTGRESQL,
          fkadc_database_pg_id,
          fkadc_pg_schema,
        );
      });

      const alterDatabaseWithFKADC = async (dialect, database) => {
        const constraint_name =
          dialect === Spanner.POSTGRESQL
            ? '"FKShoppingCartsCustomerName"'
            : 'FKShoppingCartsCustomerName';

        const ddl_statements_add_constraints = [
          `ALTER TABLE ShoppingCarts ADD CONSTRAINT ${constraint_name} FOREIGN KEY (CustomerName) REFERENCES Customers(CustomerName) ON DELETE CASCADE`,
        ];
        const [operationAddConstraint] = await database.updateSchema(
          ddl_statements_add_constraints,
        );
        await operationAddConstraint.promise();
        const [schema] = await database.getSchema();
        assert.strictEqual(
          schema.filter(x => x.includes('FKShoppingCartsCustomerName')).length,
          1,
        );

        const ddl_statements_drop_constraints = [
          'ALTER TABLE ShoppingCarts DROP CONSTRAINT FKShoppingCartsCustomerName',
        ];
        const [operationDropConstraint] = await database.updateSchema(
          ddl_statements_drop_constraints,
        );
        await operationDropConstraint.promise();
        const [schema1] = await database.getSchema();
        assert.strictEqual(
          schema1.filter(x => x.includes('FKShoppingCartsCustomerName')).length,
          0,
        );
      };

      it('GOOGLE_STANDARD_SQL should alter a database with foreign key delete cascade action', async () => {
        const fkadc_database = instance.database(fkadc_database_id);
        await alterDatabaseWithFKADC(
          Spanner.GOOGLE_STANDARD_SQL,
          fkadc_database,
        );
      });

      it('POSTGRESQL should alter a database with foreign key delete cascade action', async () => {
        const fkadc_database_pg = instance.database(fkadc_database_pg_id);
        await alterDatabaseWithFKADC(Spanner.POSTGRESQL, fkadc_database_pg);
      });

      const insertAndDeleteRowWithFKADC = async database => {
        const customersTable = database.table('Customers');
        await customersTable.insert({
          CustomerId: 1,
          CustomerName: 'Marc',
        });

        const cartsTable = database.table('ShoppingCarts');
        await cartsTable.insert({
          CartId: 1,
          CustomerId: 1,
          CustomerName: 'Marc',
        });

        const [rows] = await cartsTable.read({
          columns: ['CartId', 'CustomerId'],
        });
        assert.strictEqual(rows.length, 1);

        await customersTable.deleteRows([1]);
        const [rows1] = await cartsTable.read({
          columns: ['CartId', 'CustomerId'],
        });
        assert.strictEqual(rows1.length, 0);
      };

      it('GOOGLE_STANDARD_SQL should insert a row and then delete with all references', async () => {
        const fkadc_database = instance.database(fkadc_database_id);
        await insertAndDeleteRowWithFKADC(fkadc_database);
      });

      it('POSTGRESQL should insert a row and then delete with all references', async () => {
        const fkadc_database_pg = instance.database(fkadc_database_pg_id);
        await insertAndDeleteRowWithFKADC(fkadc_database_pg);
      });

      const insertRowErrorWithFKADC = async database => {
        const cartsTable = database.table('ShoppingCarts');
        await cartsTable.insert({
          CartId: 2,
          CustomerId: 2,
          CustomerName: 'Jack',
        });
      };

      it('GOOGLE_STANDARD_SQL should throw error when insert a row without reference', async () => {
        try {
          const fkadc_database = instance.database(fkadc_database_id);
          await insertRowErrorWithFKADC(fkadc_database);
        } catch (err) {
          assert.match(
            (err as grpc.ServiceError).message,
            /Foreign key constraint `FKShoppingCartsCustomerId` is violated on table `ShoppingCarts`\./,
          );
        }
      });

      it('POSTGRESQL should throw error when insert a row without reference', async () => {
        try {
          const fkadc_database_pg = instance.database(fkadc_database_pg_id);
          await insertRowErrorWithFKADC(fkadc_database_pg);
        } catch (err) {
          assert.match(
            (err as grpc.ServiceError).message,
            /Foreign key constraint `FKShoppingCartsCustomerId` is violated on table `shoppingcarts`\./,
          );
        }
      });

      const insertAndDeleteInSameTransactionErrorWithFKADC = async database => {
        await database.runTransactionAsync(async transaction => {
          transaction!.insert('Customers', {
            CustomerId: 2,
            CustomerName: 'John',
          });
          transaction!.deleteRows('Customers', [2]);
          try {
            await transaction!.commit();
          } catch (err) {
            assert.match(
              (err as grpc.ServiceError).message.toLowerCase(),
              /9 failed_precondition: cannot write a value for the referenced column `customers.customerid` and delete it in the same transaction\./,
            );
          }
        });
      };

      it('GOOGLE_STANDARD_SQL should throw error when insert and delete a referenced key', async () => {
        const fkadc_database = instance.database(fkadc_database_id);
        await insertAndDeleteInSameTransactionErrorWithFKADC(fkadc_database);
      });

      it('POSTGRESQL should throw error when insert and delete a referenced key', async () => {
        const fkadc_database_pg = instance.database(fkadc_database_pg_id);
        await insertAndDeleteInSameTransactionErrorWithFKADC(fkadc_database_pg);
      });

      const insertReferencingKeyAndDeleteReferencedKeyErrorWithFKADC =
        async database => {
          const customersTable = database.table('Customers');
          const cartsTable = database.table('ShoppingCarts');
          await customersTable.insert([
            {
              CustomerId: 2,
              CustomerName: 'Marc',
            },
            {
              CustomerId: 3,
              CustomerName: 'John',
            },
          ]);
          await cartsTable.insert({
            CartId: 2,
            CustomerId: 2,
            CustomerName: 'Marc',
          });

          await database.runTransactionAsync(async transaction => {
            transaction!.update('ShoppingCarts', {
              CartId: 2,
              CustomerId: 3,
              CustomerName: 'John',
            });
            transaction!.deleteRows('Customers', [2]);
            try {
              await transaction!.commit();
            } catch (err) {
              assert.match(
                (err as grpc.ServiceError).message.toLowerCase(),
                /9 failed_precondition: cannot modify a row in the table `shoppingcarts` because a referential action is deleting it in the same transaction\./,
              );
            }
          });
        };

      it('GOOGLE_STANDARD_SQL should throw error when insert a referencing key and delete a referenced key', async () => {
        const fkadc_database = instance.database(fkadc_database_id);
        await insertReferencingKeyAndDeleteReferencedKeyErrorWithFKADC(
          fkadc_database,
        );
      });

      it('POSTGRESQL should throw error when insert a referencing key and delete a referenced key', async () => {
        const fkadc_database_pg = instance.database(fkadc_database_pg_id);
        await insertReferencingKeyAndDeleteReferencedKeyErrorWithFKADC(
          fkadc_database_pg,
        );
      });

      const deleteRuleOnInformationSchemaReferentialConstraints =
        async database => {
          const [transaction] = await database.getSnapshot();
          const [rows] = await transaction!.run(
            "SELECT DELETE_RULE FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_NAME = 'FKShoppingCartsCustomerId'",
          );
          assert.strictEqual(rows[0][0].value, 'CASCADE');
          transaction!.end();
        };

      it('GOOGLE_STANDARD_SQL should test information schema referential constraints', async () => {
        const fkadc_database = instance.database(fkadc_database_id);
        await deleteRuleOnInformationSchemaReferentialConstraints(
          fkadc_database,
        );
      });

      it('POSTGRESQL should test information schema referential constraints', async () => {
        const fkadc_database_pg = instance.database(fkadc_database_pg_id);
        await deleteRuleOnInformationSchemaReferentialConstraints(
          fkadc_database_pg,
        );
      });
    });
  });

  describe('Backups', () => {
    const SKIP_POSTGRESQL_BACKUP_TESTS = true;

    let googleSqlDatabase1: Database;
    let googleSqlRestoreDatabase: Database;
    let postgreSqlRestoreDatabase: Database;
    let postgreSqlDatabase1: Database;
    let googleSqlBackup1: Backup;
    let postgreSqlBackup1: Backup;
    const googleSqlBackup1Name = generateName('backup');
    const postgreSqlBackup1Name = generateName('pg-backup');
    const backupExpiryDate = futureDateByHours(12);
    const backupExpiryPreciseDate = Spanner.timestamp(backupExpiryDate);

    before(async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      if (SKIP_BACKUPS === 'true' || KOKORO_JOB_NAME?.includes('presubmit')) {
        this.skip();
      }
      googleSqlDatabase1 = DATABASE;
      postgreSqlDatabase1 = PG_DATABASE;

      await googleSqlDatabase1.table(TABLE_NAME).insert({
        SingerId: generateName('id'),
        Name: generateName('name'),
      });

      googleSqlBackup1 = instance.backup(googleSqlBackup1Name);

      if (!SKIP_POSTGRESQL_BACKUP_TESTS) {
        await postgreSqlDatabase1.table(TABLE_NAME).insert({
          SingerId: generateName('id'),
          Name: generateName('name'),
        });
        postgreSqlBackup1 = instance.backup(postgreSqlBackup1Name);
      }
    });

    function futureDateByHours(futureHours: number): number {
      return Date.now() + 1000 * 60 * 60 * futureHours;
    }

    const completedBackup = async (backup1, backup1Name, database1) => {
      // Validate backup has completed.
      const [backupInfo] = await backup1.getMetadata();
      assert.strictEqual(backupInfo.state, 'READY');
      assert.strictEqual(
        backupInfo.name,
        `${instance.formattedName_}/backups/${backup1Name}`,
      );
      assert.strictEqual(backupInfo.database, database1.formattedName_);
      assert.ok(backupInfo.createTime);
      assert.deepStrictEqual(
        Number(backupInfo.expireTime!.seconds),
        backupExpiryPreciseDate.toStruct().seconds,
      );
      assert.ok(backupInfo.sizeBytes! > 0);

      // Validate additional metadata functions on backup.
      const backupState = await backup1.getState();
      assert.strictEqual(backupState, 'READY');
      const expireTime = await backup1.getExpireTime();
      assert.deepStrictEqual(
        expireTime!.getFullTime(),
        backupExpiryPreciseDate.getFullTime(),
      );
      const exists = await backup1.exists();
      assert.strictEqual(exists, true);
    };

    it('GOOGLE_STANDARD_SQL should have completed a backup', async () => {
      // Create backups.
      await createBackup(
        googleSqlDatabase1,
        googleSqlBackup1Name,
        backupExpiryDate,
      );
      await completedBackup(
        googleSqlBackup1,
        googleSqlBackup1Name,
        googleSqlDatabase1,
      );
    });

    it.skip('POSTGRESQL should have completed a backup', async () => {
      await createBackup(
        postgreSqlDatabase1,
        postgreSqlBackup1Name,
        backupExpiryDate,
      );
      await completedBackup(
        postgreSqlBackup1,
        postgreSqlBackup1Name,
        postgreSqlDatabase1,
      );
    });

    const pastBackupExpirationTimeError = async database1 => {
      // Create backup.
      const backupName = generateName('backup');
      const backupExpiryDate = futureDateByHours(-12);
      const backup = instance.backup(backupName);
      try {
        await backup.create({
          databasePath: database1.formattedName_,
          expireTime: backupExpiryDate,
        });
        assert.fail(
          'Backup should have failed for expiration time in the past',
        );
      } catch (err) {
        // Expect to get invalid argument error indicating the expiry date
        assert.strictEqual(
          (err as grpc.ServiceError).code,
          grpc.status.INVALID_ARGUMENT,
        );
      }
    };

    it('GOOGLE_STANDARD_SQL should return error for backup expiration time in the past', async () => {
      await pastBackupExpirationTimeError(googleSqlDatabase1);
    });

    it.skip('POSTGRESQL should return error for backup expiration time in the past', async () => {
      await pastBackupExpirationTimeError(postgreSqlDatabase1);
    });

    it('should return false for a backup that does not exist', async () => {
      // This backup won't exist, we're just generating the name without creating the backup itself.
      const backupName = generateName('backup');
      const backup = instance.backup(backupName);

      const exists = await backup.exists();
      assert.strictEqual(exists, false);
    });

    it('should list backups', async () => {
      const [backups] = await instance.getBackups();
      assert.ok(backups.length > 0);
      assert.ok(
        backups.find(
          backup => backup.formattedName_ === googleSqlBackup1.formattedName_,
        ),
      );
      if (!SKIP_POSTGRESQL_BACKUP_TESTS) {
        assert.ok(
          backups.find(
            backup =>
              backup.formattedName_ === postgreSqlBackup1.formattedName_,
          ),
        );
      }
    });

    it('should list backups with pagination', async () => {
      const [page1, , resp1] = await instance.getBackups({
        pageSize: 1,
        gaxOptions: {autoPaginate: false},
      });

      let totalPageSize = 1;
      if (!SKIP_POSTGRESQL_BACKUP_TESTS) {
        totalPageSize = 2;
      }
      const [totalPages] = await instance.getBackups({
        pageSize: totalPageSize,
        gaxOptions: {autoPaginate: false},
      });
      assert.strictEqual(page1.length, 1);
      assert.strictEqual(totalPages.length, totalPageSize);
      assert.ok(
        totalPages.find(
          backup => backup.formattedName_ === googleSqlBackup1.formattedName_,
        ),
      );
      if (!SKIP_POSTGRESQL_BACKUP_TESTS) {
        assert.ok(
          totalPages.find(
            backup =>
              backup.formattedName_ === postgreSqlBackup1.formattedName_,
          ),
        );
      }
    });

    const restoreBackup = async (restoreDatabaseId, backup1, database1) => {
      // Perform restore to a different database.
      const databaseAdminClient = spanner.getDatabaseAdminClient();
      const [restoreOperation] = await databaseAdminClient.restoreDatabase({
        parent: databaseAdminClient.instancePath(projectId!, instanceId),
        databaseId: restoreDatabaseId,
        backup: backup1.formattedName_,
      });

      // Wait for restore to complete.
      await restoreOperation.promise();

      const restoreDatabase = instance.database(restoreDatabaseId);

      const [databaseMetadata] = await restoreDatabase.getMetadata();
      assert.ok(
        databaseMetadata.state === 'READY' ||
          databaseMetadata.state === 'READY_OPTIMIZING',
      );

      // Validate restore state of database directly.
      const restoreState = await restoreDatabase.getState();
      assert.ok(
        restoreState === 'READY' || restoreState === 'READY_OPTIMIZING',
      );

      // Validate new database has restored data.
      const [rows] = await restoreDatabase
        .table(TABLE_NAME)
        .read({columns: ['SingerId', 'Name']});
      const results = rows.map(row => row.toJSON);
      assert.strictEqual(results.length, 1);

      // Validate restore info of database.
      const restoreInfo = await restoreDatabase.getRestoreInfo();
      assert.strictEqual(
        restoreInfo!.backupInfo!.backup,
        backup1.formattedName_,
      );
      const [originalDatabaseMetadata] = await database1.getMetadata();
      assert.strictEqual(
        restoreInfo!.backupInfo!.sourceDatabase,
        originalDatabaseMetadata.name,
      );
      assert.strictEqual(restoreInfo!.sourceType, 'BACKUP');

      // Check that restore operation ends up in the operations list.
      const [restoreOperations] = await restoreDatabase.getOperations({
        filter: 'metadata.@type:RestoreDatabaseMetadata',
      });
      assert.strictEqual(restoreOperations.length, 1);

      return restoreDatabase;
    };

    it('GOOGLE_STANDARD_SQL should restore a backup', async () => {
      const googleSqlRestoreDatabaseId = generateName('database');
      googleSqlRestoreDatabase = await restoreBackup(
        googleSqlRestoreDatabaseId,
        googleSqlBackup1,
        googleSqlDatabase1,
      );
    });

    it.skip('POSTGRESQL should restore a backup', async () => {
      const postgreSqlRestoreDatabaseId = generateName('pg-db');
      postgreSqlRestoreDatabase = await restoreBackup(
        postgreSqlRestoreDatabaseId,
        postgreSqlBackup1,
        postgreSqlDatabase1,
      );
    });

    const restoreExistingDatabaseFail = async (database1, backup1) => {
      // Perform restore to the same database - should fail.
      try {
        await database1.restore(backup1.formattedName_);
        assert.fail('Should not have restored backup over existing database');
      } catch (err) {
        // Expect to get error indicating database already exists.
        assert.strictEqual(
          (err as grpc.ServiceError).code,
          grpc.status.ALREADY_EXISTS,
        );
      }
    };

    it('GOOGLE_STANDARD_SQL should not be able to restore to an existing database', async () => {
      await restoreExistingDatabaseFail(
        googleSqlRestoreDatabase,
        googleSqlBackup1,
      );
    });

    it.skip('POSTGRESQL should not be able to restore to an existing database', async () => {
      await restoreExistingDatabaseFail(
        postgreSqlRestoreDatabase,
        postgreSqlBackup1,
      );
    });

    const updateBackupExpiry = async backup1 => {
      // Update backup expiry date.
      const updatedBackupExpiryDate = futureDateByHours(24);
      await backup1.updateExpireTime(updatedBackupExpiryDate);

      // Read metadata, verify expiry date was updated.
      const [updatedMetadata] = await backup1.getMetadata();
      const expiryDateFromMetadataAfterUpdate = new PreciseDate(
        updatedMetadata.expireTime as DateStruct,
      );

      assert.deepStrictEqual(
        expiryDateFromMetadataAfterUpdate,
        Spanner.timestamp(updatedBackupExpiryDate),
      );
    };

    it('GOOGLE_STANDARD_SQL should update backup expiry', async () => {
      await updateBackupExpiry(googleSqlBackup1);
    });

    it.skip('POSTGRESQL should update backup expiry', async () => {
      await updateBackupExpiry(postgreSqlBackup1);
    });

    const pastBackupUpdateExpiryDateFail = async backup1 => {
      // Attempt to update expiry date to the past.
      const expiryDateInPast = futureDateByHours(-24);
      try {
        await backup1.updateExpireTime(expiryDateInPast);
        assert.fail(
          'Backup should have failed for expiration time in the past',
        );
      } catch (err) {
        // Expect to get invalid argument error indicating the expiry date.
        assert.strictEqual(
          (err as grpc.ServiceError).code,
          grpc.status.INVALID_ARGUMENT,
        );
      }
    };

    it('GOOGLE_STANDARD_SQL should not update backup expiry to the past', async () => {
      await pastBackupUpdateExpiryDateFail(googleSqlBackup1);
    });

    it.skip('POSTGRESQL should not update backup expiry to the past', async () => {
      await pastBackupUpdateExpiryDateFail(postgreSqlBackup1);
    });

    const deleteBackup = async backup2 => {
      // Delete backup.
      await backup2.delete();

      // Verify backup is gone by querying metadata.
      // Expect backup not to be found.
      try {
        const [deletedMetadata] = await backup2.getMetadata();
        assert.fail('Backup was not deleted: ' + deletedMetadata.name);
      } catch (err) {
        assert.strictEqual(
          (err as grpc.ServiceError).code,
          grpc.status.NOT_FOUND,
        );
      }
    };

    const listBackupOperations = async (backup1, database1) => {
      // List operations and ensure operation for current backup exists.
      // Without a filter.
      const [operationsWithoutFilter] = await instance.getBackupOperations();
      const operationForCurrentBackup = operationsWithoutFilter.find(
        operation =>
          operation.name && operation.name.includes(backup1.formattedName_),
      );
      assert.ok(operationForCurrentBackup);
      assert.strictEqual(
        operationForCurrentBackup!.metadata!.type_url,
        'type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata',
      );

      // With a filter.
      const [operationsWithFilter] = await instance.getBackupOperations({
        filter: `(metadata.@type:CreateBackupMetadata AND
                    metadata.name:${backup1.formattedName_})`,
      });
      const operationForCurrentBackupWithFilter = operationsWithFilter[0];
      assert.ok(operationForCurrentBackupWithFilter);
      assert.strictEqual(
        operationForCurrentBackupWithFilter!.metadata!.type_url,
        'type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata',
      );
      const operationForCurrentBackupWithFilterMetadata =
        CreateBackupMetadata.decode(
          operationForCurrentBackupWithFilter!.metadata!.value! as Uint8Array,
        );
      assert.strictEqual(
        operationForCurrentBackupWithFilterMetadata.database,
        database1.formattedName_,
      );
    };

    it('GOOGLE_STANDARD_SQL should list backup operations', async () => {
      await listBackupOperations(googleSqlBackup1, googleSqlDatabase1);
    });

    it.skip('POSTGRESQL should list backup operations', async () => {
      await listBackupOperations(postgreSqlBackup1, postgreSqlDatabase1);
    });

    it('GOOGLE_STANDARD_SQL should delete backups', async () => {
      // Delete the restored database before deleting the backup, as backup deletion can fail if the restored database remains in the READY_OPTIMIZING state.
      await googleSqlRestoreDatabase.delete();
      await deleteBackup(googleSqlBackup1);
    });

    it.skip('POSTGRESQL should delete backups', async () => {
      // Delete the restored database before deleting the backup, as backup deletion can fail if the restored database remains in the READY_OPTIMIZING state.
      await postgreSqlRestoreDatabase.delete();
      await deleteBackup(postgreSqlBackup1);
    });
  });

  describe('Sessions', () => {
    let session;
    let dbNewRole;
    let sessionWithDatabaseRole;
    let sessionWithRole: Session;
    let sessionWithOverridingRole: Session;

    before(async () => {
      session = DATABASE.session();

      dbNewRole = instance.database(DATABASE.formattedName_, {
        databaseRole: 'parent_role',
      });

      sessionWithDatabaseRole = dbNewRole.session();
      await session.create();
      if (!IS_EMULATOR_ENABLED) {
        const [operation] = await DATABASE.updateSchema([
          'CREATE ROLE parent_role',
          'CREATE ROLE child_role',
          'CREATE ROLE orphan_role',
        ]);
        await operation.promise();
        await sessionWithDatabaseRole.create();
        [sessionWithRole] = await DATABASE.createSession({
          databaseRole: 'child_role',
        });
        [sessionWithOverridingRole] = await dbNewRole.createSession({
          databaseRole: 'orphan_role',
        });
      }
    });

    after(async () => {
      await session.delete();
      if (!IS_EMULATOR_ENABLED) {
        await sessionWithDatabaseRole.delete();
        await sessionWithRole.delete();
      }
    });

    it('should have created the session', async () => {
      const [metadata] = await session.getMetadata();
      assert.strictEqual(session.formattedName_, metadata!.name);
    });

    it('should get a session by name', async () => {
      const shortName = session.formattedName_!.split('/').pop();
      const sessionByShortName = DATABASE.session(shortName);

      const [metadataByName] = await sessionByShortName.getMetadata();
      const [metadata] = await session.getMetadata();
      assert.strictEqual(metadataByName!.name, metadata!.name);
    });

    it('should keep the session alive', async () => {
      await session.keepAlive();
    });

    it('should batch create sessions', async () => {
      const count = 5;
      const [sessions] = await DATABASE.batchCreateSessions({count});

      assert.strictEqual(sessions.length, count);

      await Promise.all(sessions.map(session => session.delete()));
    });

    it('should have created the session with database database role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const [metadata] = await sessionWithDatabaseRole.getMetadata();
      assert.strictEqual('parent_role', metadata!.databaseRole);
    });

    it('should have created the session with database role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const metadata = await sessionWithRole.getMetadata();
      assert.strictEqual('child_role', metadata[0]!.databaseRole);
    });

    it('should have created the session by overriding database database role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const metadata = await sessionWithOverridingRole.getMetadata();
      assert.strictEqual('orphan_role', metadata[0]!.databaseRole);
    });

    it('should batch create sessions with database role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const count = 5;
      const [sessions] = await dbNewRole.batchCreateSessions({count});

      assert.strictEqual(sessions.length, count);
      await Promise.all(
        sessions.map(async session => {
          const metadata = await session.getMetadata();
          assert.strictEqual('parent_role', metadata[0].databaseRole);
          await session.delete();
        }),
      );
    });

    it('should batch create sessions with database role by overriding session database-role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const count = 5;
      const [sessions] = await DATABASE.batchCreateSessions({
        count,
        databaseRole: 'child_role',
      });

      assert.strictEqual(sessions.length, count);
      await Promise.all(
        sessions.map(async session => {
          const metadata = await session.getMetadata();
          assert.strictEqual('child_role', metadata[0].databaseRole);
          await session.delete();
        }),
      );
    });

    it('should batch create sessions with database role by overriding database-role', async function () {
      if (IS_EMULATOR_ENABLED) {
        this.skip();
      }
      const count = 5;
      const [sessions] = await dbNewRole.batchCreateSessions({
        count,
        databaseRole: 'orphan_role',
      });

      assert.strictEqual(sessions.length, count);
      await Promise.all(
        sessions.map(async session => {
          const metadata = await session.getMetadata();
          assert.strictEqual('orphan_role', metadata[0].databaseRole);
          await session.delete();
        }),
      );
    });
  });

  describe('Tables', () => {
    const TABLE_NAME = 'SingersTables';
    let googleSqlTable;
    let postgreSqlTable;

    before(async () => {
      googleSqlTable = DATABASE.table(TABLE_NAME);
      postgreSqlTable = PG_DATABASE.table(TABLE_NAME);
      const googleSqlCreateTable = await googleSqlTable.create(
        `CREATE TABLE ${TABLE_NAME}
                (
                  SingerId     STRING(1024) NOT NULL,
                  Name         STRING(1024),
                  UUID         UUID,
                  Float32      FLOAT32,
                  Float        FLOAT64,
                  Int          INT64,
                  Info         BYTES( MAX),
                  Created      TIMESTAMP,
                  DOB          DATE,
                  Accents      ARRAY<STRING(1024)>,
                  PhoneNumbers ARRAY<INT64>,
                  HasGear      BOOL,
                ) PRIMARY KEY(SingerId)`,
        GAX_OPTIONS,
      );
      await onPromiseOperationComplete(googleSqlCreateTable);

      // TODO: Add column "UUID" UUID while using uuid type.(currently UUID type is not supported for postgreSql dialect)
      const postgreSqlCreateTable = await postgreSqlTable.create(
        `CREATE TABLE ${TABLE_NAME}
            (
              "SingerId" VARCHAR(1024) NOT NULL PRIMARY KEY,
              "Name"     VARCHAR(1024),
              "Float32"  DOUBLE PRECISION,
              "Float"    DOUBLE PRECISION,
              "Int"      BIGINT,
              "Info"     BYTEA,
              "Created"  TIMESTAMPTZ,
              "HasGear"  BOOL
            )`,
        GAX_OPTIONS,
      );
      await onPromiseOperationComplete(postgreSqlCreateTable);
    });

    const nonExistentTable = async database => {
      const table = database.table(generateName('nope'));

      try {
        await table.insert({SingerId: generateName('id')});
        assert.fail('Expected an error to be thrown, but it was not.');
      } catch (err: any) {
        assert.strictEqual(err!.code, grpc.status.NOT_FOUND);
      }
    };

    it('GOOGLE_STANDARD_SQL should throw an error for non-existent tables', async () => {
      await nonExistentTable(DATABASE);
    });

    it('POSTGRESQL should throw an error for non-existent tables', async () => {
      await nonExistentTable(PG_DATABASE);
    });

    const nonExistentColumn = async table => {
      try {
        await table.insert({SingerId: generateName('id'), Nope: 'abc'});
        assert.fail('Expected an error to be thrown, but it was not.');
      } catch (err: any) {
        assert.strictEqual(err!.code, grpc.status.NOT_FOUND);
      }
    };

    it('GOOGLE_STANDARD_SQL should throw an error for non-existent columns', async () => {
      await nonExistentColumn(googleSqlTable);
    });

    it('POSTGRESQL should throw an error for non-existent columns', async () => {
      await nonExistentColumn(postgreSqlTable);
    });

    const readRowsStream = (done, table) => {
      const id = generateName('id');
      const name = generateName('name');

      table.insert(
        {
          SingerId: id,
          Name: name,
        },
        err => {
          assert.ifError(err);

          let rows: Array<{}> = [];

          table
            .createReadStream({
              keys: [id],
              columns: ['SingerId', 'Name'],
            })
            .on('error', done)
            .on('data', row => {
              rows.push(row);
            })
            .on('end', () => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              rows = rows.map(x => (x as any).toJSON());

              assert.deepStrictEqual(rows, [
                {
                  SingerId: id,
                  Name: name,
                },
              ]);

              done();
            });
        },
      );
    };

    it('GOOGLE_STANDARD_SQL should read rows as a stream', done => {
      readRowsStream(done, googleSqlTable);
    });

    it('POSTGRESQL should read rows as a stream', done => {
      readRowsStream(done, postgreSqlTable);
    });

    const automaticallyConvertToJson = (done, table) => {
      const id = generateName('id');
      const name = generateName('name');

      table.insert(
        {
          SingerId: id,
          Name: name,
        },
        err => {
          assert.ifError(err);

          const rows: Array<{}> = [];

          table
            .createReadStream({
              keys: [id],
              columns: ['SingerId', 'name'],
              json: true,
            })
            .on('error', done)
            .on('data', row => rows.push(row))
            .on('end', () => {
              assert.deepStrictEqual(rows, [
                {
                  SingerId: id,
                  Name: name,
                },
              ]);

              done();
            });
        },
      );
    };

    it('GOOGLE_STANDARD_SQL should automatically convert to JSON', done => {
      automaticallyConvertToJson(done, googleSqlTable);
    });

    it('POSTGRESQL should automatically convert to JSON', done => {
      automaticallyConvertToJson(done, postgreSqlTable);
    });

    const automaticallyConvertToJsonWithOptions = (done, table) => {
      const id = generateName('id');

      table.insert(
        {
          SingerId: id,
          Int: 8,
        },
        err => {
          assert.ifError(err);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const rows: any[] = [];

          table
            .createReadStream({
              keys: [id],
              columns: ['SingerId', 'Int'],
              json: true,
              jsonOptions: {wrapNumbers: true},
            })
            .on('error', done)
            .on('data', row => {
              rows.push(row);
            })
            .on('end', () => {
              assert.strictEqual(rows[0].Int.value, '8');
              done();
            });
        },
      );
    };

    it('GOOGLE_STANDARD_SQL should automatically convert to JSON with options', done => {
      automaticallyConvertToJsonWithOptions(done, googleSqlTable);
    });

    it('POSTGRESQL should automatically convert to JSON with options', done => {
      automaticallyConvertToJsonWithOptions(done, postgreSqlTable);
    });

    const insertAndDeleteSingleRow = (done, table) => {
      const id = generateName('id');
      const name = generateName('name');

      table.insert(
        {
          SingerId: id,
          Name: name,
        },
        err => {
          assert.ifError(err);

          table.deleteRows([id], err => {
            assert.ifError(err);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rows: any[] = [];

            table
              .createReadStream({
                keys: [id],
                columns: ['SingerId'],
              })
              .on('error', done)
              .on('data', row => {
                rows.push(row);
              })
              .on('end', () => {
                assert.strictEqual(rows.length, 0);
                done();
              });
          });
        },
      );
    };

    it('GOOGLE_STANDARD_SQL should insert and delete a row', done => {
      insertAndDeleteSingleRow(done, googleSqlTable);
    });

    it('POSTGRESQL should insert and delete a row', done => {
      insertAndDeleteSingleRow(done, postgreSqlTable);
    });

    const insertAndDeleteMultipleRows = (done, table) => {
      const id = generateName('id');
      const id2 = generateName('id2');

      const name = generateName('name');

      table.insert(
        [
          {
            SingerId: id,
            Name: name,
          },
          {
            SingerId: id2,
            Name: name,
          },
        ],
        err => {
          assert.ifError(err);

          table.deleteRows([id, id2], err => {
            assert.ifError(err);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rows: any[] = [];

            table
              .createReadStream({
                keys: [id, id2],
                columns: ['SingerId'],
              })
              .on('error', done)
              .on('data', row => {
                rows.push(row);
              })
              .on('end', () => {
                assert.strictEqual(rows.length, 0);
                done();
              });
          });
        },
      );
    };

    it('GOOGLE_STANDARD_SQL should insert and delete multiple rows', done => {
      insertAndDeleteMultipleRows(done, googleSqlTable);
    });

    it('POSTGRESQL should insert and delete multiple rows', done => {
      insertAndDeleteMultipleRows(done, postgreSqlTable);
    });

    const insertAndDeleteMultipleCompositeKeyRows = async (
      database,
      createTableStatement,
    ) => {
      const id1 = 1;
      const name1 = generateName('name1');

      const id2 = 2;
      const name2 = generateName('name2');

      const table = database.table('SingersComposite');

      const keys = [
        [id1, name1],
        [id2, name2],
      ] as {} as string[];

      const [, operation] = await table.create(createTableStatement);
      await operation.promise();
      await table.insert([
        {SingerId: id1, Name: name1},
        {SingerId: id2, Name: name2},
      ]);
      const [rows] = await table.read({keys, columns: ['SingerId', 'Name']});
      assert.strictEqual(rows.length, 2);
      await table.deleteRows(keys as Key[]);
      const [rowsAfterDelete] = await table.read({
        keys,
        columns: ['SingerId', 'Name'],
      });
      assert.strictEqual(rowsAfterDelete.length, 0);
    };

    it('GOOGLE_STANDARD_SQL should insert and delete composite key rows', async () => {
      const createTableStatement = `
          CREATE TABLE SingersComposite (
            SingerId INT64 NOT NULL,
            Name STRING(1024),
          ) PRIMARY KEY(SingerId, Name)
          `;
      await insertAndDeleteMultipleCompositeKeyRows(
        DATABASE,
        createTableStatement,
      );
    });

    it('POSTGRESQL should insert and delete multiple composite key rows', async () => {
      const createTableStatement = `
          CREATE TABLE SingersComposite (
            "SingerId" BIGINT NOT NULL,
            "Name" VARCHAR(1024),
            PRIMARY KEY("SingerId", "Name")
          )`;
      await insertAndDeleteMultipleCompositeKeyRows(
        PG_DATABASE,
        createTableStatement,
      );
    });

    const insertAndQueryMultipleRows = async (database, table, query) => {
      const id1 = generateName('id1');
      const name1 = generateName('name');

      const id2 = generateName('id2');
      const name2 = generateName('name');

      await table.insert([
        {SingerId: id1, Name: name1},
        {SingerId: id2, Name: name2},
      ]);
      const [rows] = await database.run(query);
      // We just want the two most recent ones.
      rows!.splice(0, rows!.length - 2);

      const rowJson = rows!.map(x => x.toJSON());

      assert.strictEqual(rowJson[0].SingerId, id1);
      assert.strictEqual(rowJson[0].Name, name1);

      assert.strictEqual(rowJson[1].SingerId, id2);
      assert.strictEqual(rowJson[1].Name, name2);
    };

    it('GOOGLE_STANDARD_SQL should insert and query multiple rows', async () => {
      await insertAndQueryMultipleRows(
        DATABASE,
        googleSqlTable,
        `SELECT * FROM ${TABLE_NAME} ORDER BY SingerId`,
      );
    });

    it('POSTGRESQL should should insert and query multiple rows', async () => {
      await insertAndQueryMultipleRows(
        PG_DATABASE,
        postgreSqlTable,
        `SELECT * FROM ${TABLE_NAME} ORDER BY "SingerId"`,
      );
    });

    const insertThenReplaceRow = async table => {
      const originalRow = {
        SingerId: generateName('id'),
        Name: generateName('name'),
      };

      const replacedRow = {
        SingerId: originalRow.SingerId,
      };

      await table.insert(originalRow);
      await table.replace(replacedRow);
      const [rows] = await table.read({
        keys: [originalRow.SingerId],
        columns: Object.keys(originalRow),
      });
      const row = rows![0].toJSON();
      assert.strictEqual(row.SingerId, replacedRow.SingerId);
      assert.strictEqual(row.Name, null);
    };

    it('GOOGLE_STANDARD_SQL should insert then replace a row', async () => {
      await insertThenReplaceRow(googleSqlTable);
    });

    it('POSTGRESQL should insert then replace a row', async () => {
      await insertThenReplaceRow(postgreSqlTable);
    });

    const insertThenUpdateRow = async table => {
      const originalRow = {
        SingerId: generateName('id'),
        Name: generateName('name'),
      };

      const updatedRow = {
        SingerId: originalRow.SingerId,
        Name: generateName('name'),
      };

      await table.insert(originalRow);
      await table.update(updatedRow);
      const [rows] = await table.read({
        keys: [originalRow.SingerId],
        columns: Object.keys(originalRow),
      });
      const row = rows![0].toJSON();
      assert.strictEqual(row.SingerId, updatedRow.SingerId);
      assert.strictEqual(row.Name, updatedRow.Name);
    };

    it('GOOGLE_STANDARD_SQL should insert then replace a row', async () => {
      await insertThenUpdateRow(googleSqlTable);
    });

    it('POSTGRESQL should insert then replace a row', async () => {
      await insertThenUpdateRow(postgreSqlTable);
    });

    describe('insert & query', () => {
      const ID = generateName('id');
      const NAME = generateName('name');
      const UUID = uuid.v4();
      const FLOAT32 = 8.2;
      const FLOAT = 8.2;
      const INT = 2;
      const INFO = Buffer.from(generateName('info'));
      const CREATED = Spanner.timestamp();
      const DOB = Spanner.date('1969-08-20');
      const ACCENTS = ['jamaican'];
      const PHONE_NUMBERS = [123123123, 234234234];
      const HAS_GEAR = true;

      const GOOGLE_SQL_INSERT_ROW = {
        SingerId: ID,
        Name: NAME,
        UUID: UUID,
        Float32: FLOAT32,
        Float: FLOAT,
        Int: INT,
        Info: INFO,
        Created: CREATED,
        DOB,
        Accents: ACCENTS,
        PhoneNumbers: PHONE_NUMBERS,
        HasGear: HAS_GEAR,
      };

      const POSTGRESQL_INSERT_ROW = {
        SingerId: ID,
        Name: NAME,
        // UUID: UUID,  // TODO: Uncomment while using uuid type.
        Float32: FLOAT32,
        Float: FLOAT,
        Int: INT,
        Info: INFO,
        Created: CREATED,
        HasGear: HAS_GEAR,
      };

      const GOOGLE_SQL_EXPECTED_ROW = extend(true, {}, GOOGLE_SQL_INSERT_ROW);
      const POSTGRESQL_EXPECTED_ROW = extend(true, {}, POSTGRESQL_INSERT_ROW);

      before(async () => {
        await googleSqlTable.insert(GOOGLE_SQL_INSERT_ROW);
        await postgreSqlTable.insert(POSTGRESQL_INSERT_ROW);
      });

      const queryCallbackMode = async (database, query, EXPECTED_ROW) => {
        const options = {
          strong: true,
        };

        const [rows] = await database.run(query, options);
        const actualRows = rows!.shift()!.toJSON() as {} as Row[];
        for (const [key, value] of Object.entries(actualRows)) {
          if (value && key === 'Float32') {
            assert.ok(
              EXPECTED_ROW[key] - (value as unknown as number) <= 0.00001,
            );
          } else {
            assert.deepStrictEqual(EXPECTED_ROW[key], value);
          }
        }
      };

      it('GOOGLE_STANDARD_SQL should query in callback mode', async () => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE SingerId=@id`,
          params: {id: ID},
        };
        await queryCallbackMode(DATABASE, query, GOOGLE_SQL_EXPECTED_ROW);
      });

      it('POSTGRESQL should query in callback mode', async () => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE "SingerId"=$1`,
          params: {p1: ID},
        };
        await queryCallbackMode(PG_DATABASE, query, POSTGRESQL_EXPECTED_ROW);
      });

      const queryPromiseMode = async (database, query, EXPECTED_ROW) => {
        const options = {
          strong: true,
        };

        const data = await database.run(query, options);
        const rows = data[0]!.shift()!.toJSON() as {} as Row[];
        for (const [key, value] of Object.entries(rows)) {
          if (key === 'Float32') {
            assert.ok(
              EXPECTED_ROW[key] - (value as unknown as number) <= 0.00001,
            );
          } else {
            assert.deepStrictEqual(EXPECTED_ROW[key], value);
          }
        }
      };

      it('GOOGLE_STANDARD_SQL should query in promise mode', async () => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE SingerId=@id`,
          params: {id: ID},
        };
        await queryPromiseMode(DATABASE, query, GOOGLE_SQL_EXPECTED_ROW);
      });

      it('POSTGRESQL should query in promise mode', async () => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE "SingerId"=$1`,
          params: {p1: ID},
        };
        await queryPromiseMode(PG_DATABASE, query, POSTGRESQL_EXPECTED_ROW);
      });

      const queryStreamMode = (done, database, query, EXPECTED_ROW) => {
        const options = {
          strong: true,
        };
        let row;

        const stream = database
          .runStream(query, options)
          .on('error', done)
          .once('data', row_ => {
            row = row_;
            stream.end();
          })
          .on('end', () => {
            const actualRows = row!.toJSON() as {} as Row[];
            for (const [key, value] of Object.entries(actualRows)) {
              if (key === 'Float32') {
                assert.ok(
                  EXPECTED_ROW[key] - (value as unknown as number) <= 0.00001,
                );
              } else {
                assert.deepStrictEqual(EXPECTED_ROW[key], value);
              }
            }
            done();
          });
      };

      it('GOOGLE_STANDARD_SQL should query in stream mode', done => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE SingerId=@id`,
          params: {id: ID},
        };
        queryStreamMode(done, DATABASE, query, GOOGLE_SQL_EXPECTED_ROW);
      });

      it('POSTGRESQL should query in stream mode', done => {
        const query = {
          sql: `SELECT * FROM ${TABLE_NAME} WHERE "SingerId"=$1`,
          params: {p1: ID},
        };
        queryStreamMode(done, PG_DATABASE, query, POSTGRESQL_EXPECTED_ROW);
      });

      it('GOOGLE_STANDARD_SQL should execute mutation group using Batch write', function (done) {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const mutationGroup = new MutationGroup();
        mutationGroup.upsert(TABLE_NAME, {SingerId: ID, Name: NAME});
        DATABASE.batchWriteAtLeastOnce([mutationGroup], {})
          .on('data', data => {
            assert.strictEqual(data.status.code, 0);
          })
          .on('end', () => {
            done();
          })
          .on('error', error => {
            done(error);
          });
      });

      it('GOOGLE_STANDARD_SQL should execute multiple mutation groups with success and failure using Batch write', function (done) {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const id = generateName('id');

        // Valid mutation group
        const mutationGroup1 = new MutationGroup();
        mutationGroup1.insert(TABLE_NAME, {SingerId: id, Name: NAME});

        // InValid mutation group with duplicate data
        const mutationGroup2 = new MutationGroup();
        mutationGroup2.insert(TABLE_NAME, {SingerId: id, Name: NAME});

        // Valid mutation group with invalid signer id
        const mutationGroup3 = new MutationGroup();
        mutationGroup3.insert(TABLE_NAME, {
          SingerId: null,
          Name: NAME,
        });

        // Array of expected status code
        // Code 0 is for mutation group with valid id
        // Code 6 is for mutation group with duplicate id
        // Code 9 is for mutation group with null id
        const expectedStatusCode: number[] = [0, 6, 9];

        // Array of status codes in the stream
        const actualStatusCode: number[] = [];

        DATABASE.batchWriteAtLeastOnce([
          mutationGroup1,
          mutationGroup2,
          mutationGroup3,
        ])
          .on('data', data => {
            actualStatusCode.push(data.status.code);
          })
          .on('error', error => {
            done(error);
          })
          .on('end', () => {
            // make sure two mutation groups are failing and
            // one mutation group is getting success
            assert.deepStrictEqual(
              actualStatusCode.sort(),
              expectedStatusCode.sort(),
            );
            done();
          });
      });

      it('POSTGRESQL should execute mutation group using Batch write', function (done) {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const mutationGroup = new MutationGroup();
        mutationGroup.upsert(TABLE_NAME, {SingerId: ID, Name: NAME});
        PG_DATABASE.batchWriteAtLeastOnce([mutationGroup], {})
          .on('data', data => {
            assert.strictEqual(data.status.code, 0);
          })
          .on('end', () => {
            done();
          })
          .on('error', error => {
            done(error);
          });
      });

      it('GOOGLE_STANDARD_SQL should allow "SELECT 1" queries', done => {
        DATABASE.run('SELECT 1', done);
      });

      it('POSTGRESQL should allow "SELECT 1" queries', done => {
        PG_DATABASE.run('SELECT 1', done);
      });

      it('GOOGLE_STANDARD_SQL should return metadata', async () => {
        const [rows, , metadata] = await DATABASE.run({
          sql: `SELECT * FROM ${TABLE_NAME} WHERE SingerId=@id`,
          params: {id: ID},
        });
        assert.strictEqual(rows.length, 1);
        for (const [key, value] of Object.entries(rows[0].toJSON())) {
          if (value && key === 'Float32') {
            assert.ok(
              GOOGLE_SQL_EXPECTED_ROW[key] - (value as unknown as number) <=
                0.00001,
            );
          } else {
            assert.deepStrictEqual(GOOGLE_SQL_EXPECTED_ROW[key], value);
          }
        }
        assert.ok(metadata);
        assert.strictEqual(metadata.rowType!.fields!.length, 12);
        assert.strictEqual(metadata.rowType!.fields![0].name, 'SingerId');
        assert.strictEqual(metadata.rowType!.fields![1].name, 'Name');
        assert.strictEqual(metadata.rowType!.fields![2].name, 'UUID');
        assert.strictEqual(metadata.rowType!.fields![3].name, 'Float32');
        assert.strictEqual(metadata.rowType!.fields![4].name, 'Float');
        assert.strictEqual(metadata.rowType!.fields![5].name, 'Int');
        assert.strictEqual(metadata.rowType!.fields![6].name, 'Info');
        assert.strictEqual(metadata.rowType!.fields![7].name, 'Created');
        assert.strictEqual(metadata.rowType!.fields![8].name, 'DOB');
        assert.strictEqual(metadata.rowType!.fields![9].name, 'Accents');
        assert.strictEqual(metadata.rowType!.fields![10].name, 'PhoneNumbers');
        assert.strictEqual(metadata.rowType!.fields![11].name, 'HasGear');
      });

      it('POSTGRESQL should return metadata', async () => {
        const [rows, , metadata] = await PG_DATABASE.run({
          sql: `SELECT * FROM ${TABLE_NAME} WHERE "SingerId"=$1`,
          params: {p1: ID},
        });
        assert.strictEqual(rows.length, 1);
        for (const [key, value] of Object.entries(rows[0].toJSON())) {
          if (value && key === 'Float32') {
            assert.ok(
              POSTGRESQL_EXPECTED_ROW[key] - (value as unknown as number) <=
                0.00001,
            );
          } else {
            assert.deepStrictEqual(POSTGRESQL_EXPECTED_ROW[key], value);
          }
        }
        assert.ok(metadata);
        assert.strictEqual(metadata.rowType!.fields!.length, 8);
        assert.strictEqual(metadata.rowType!.fields![0].name, 'SingerId');
        assert.strictEqual(metadata.rowType!.fields![1].name, 'Name');
        // uncomment while using uuid type.
        // assert.strictEqual(metadata.rowType!.fields![2].name, 'UUID');
        assert.strictEqual(metadata.rowType!.fields![2].name, 'Float32');
        assert.strictEqual(metadata.rowType!.fields![3].name, 'Float');
        assert.strictEqual(metadata.rowType!.fields![4].name, 'Int');
        assert.strictEqual(metadata.rowType!.fields![5].name, 'Info');
        assert.strictEqual(metadata.rowType!.fields![6].name, 'Created');
        assert.strictEqual(metadata.rowType!.fields![7].name, 'HasGear');
      });

      const invalidQueries = async database => {
        try {
          await database.run('SELECT Apples AND Oranges');
        } catch (err: any) {
          assert.strictEqual(err!.code, 3);
        }
      };

      it('GOOGLE_STANDARD_SQL should allow "SELECT 1" queries', async () => {
        await invalidQueries(DATABASE);
      });

      it('POSTGRESQL should allow "SELECT 1" queries', async () => {
        await invalidQueries(PG_DATABASE);
      });

      it('GOOGLE_STANDARD_SQL should query an array of structs', async () => {
        const query = `
          SELECT ARRAY(SELECT AS STRUCT C1, C2
            FROM (SELECT 'a' AS C1, 1 AS C2 UNION ALL SELECT 'b' AS C1, 2 AS C2)
            ORDER BY C1 ASC)`;

        const [rows] = await DATABASE.run(query);
        const values = rows![0][0].value;
        assert.strictEqual(values.length, 2);

        assert.strictEqual(values[0][0].value, 'a');
        assert.deepStrictEqual(
          JSON.stringify(values[0][1].value),
          JSON.stringify({value: '1'}),
        );

        assert.strictEqual(values[1][0].value, 'b');
        assert.deepStrictEqual(
          JSON.stringify(values[1][1].value),
          JSON.stringify({value: '2'}),
        );
      });

      it('GOOGLE_STANDARD_SQL should query an empty array of structs', async () => {
        const query = `
          SELECT ARRAY(SELECT AS STRUCT * FROM (SELECT 'a', 1) WHERE 0 = 1)`;

        const [rows] = await DATABASE.run(query);
        assert.strictEqual(rows![0][0].value.length, 0);
      });

      describe('params', () => {
        describe('boolean', () => {
          const booleanQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            assert.strictEqual(rows[0][0].value, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: true,
              },
            };
            await booleanQuery(DATABASE, query, true);
          });

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: true,
              },
            };
            await booleanQuery(PG_DATABASE, query, true);
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'bool',
              },
            };
            await booleanQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'bool',
              },
            };
            await booleanQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [false, true, false];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'bool',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'bool',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('int64', () => {
          const int64Query = async (database, query, value) => {
            const [rows] = await database.run(query);
            let queriedValue = rows[0][0].value;
            if (rows[0][0].value) {
              queriedValue = rows[0][0].value.value;
            }
            assert.strictEqual(queriedValue, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: 1234,
              },
            };
            await int64Query(DATABASE, query, '1234');
          });

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: 1234,
              },
            };
            await int64Query(PG_DATABASE, query, '1234');
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'int64',
              },
            };
            await int64Query(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'int64',
              },
            };
            await int64Query(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [1, 2, 3, null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);

            const expected = values.map(val => {
              return isNumber(val) ? {value: String(val)} : val;
            });

            assert.strictEqual(
              JSON.stringify(rows[0][0].value),
              JSON.stringify(expected),
            );
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'int64',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'int64',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('pgOid', () => {
          const oidQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            let queriedValue = rows[0][0].value;
            if (rows[0][0].value) {
              queriedValue = rows[0][0].value.value;
            }
            assert.strictEqual(queriedValue, value);
          };

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: 1234,
              },
              types: {
                v: 'pgOid',
              },
            };
            await oidQuery(PG_DATABASE, query, '1234');
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'pgOid',
              },
            };
            await oidQuery(PG_DATABASE, query, null);
          });
        });

        describe('uuid', () => {
          const uuidQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            const queriedValue = rows[0][0].value;
            assert.deepStrictEqual(queriedValue, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value when param type uuid is used', async () => {
            const value = uuid.v4();
            const query = {
              sql: 'SELECT @v',
              params: {
                v: value,
              },
              types: {
                v: 'uuid',
              },
            };
            await uuidQuery(DATABASE, query, value);
          });

          it('GOOGLE_STANDARD_SQL should bind the value as uuid when param type is not specified', async () => {
            const val = uuid.v4();
            const id = generateName('id');
            try {
              await googleSqlTable.insert({SingerId: id, UUID: val});
              const query = {
                sql:
                  'SELECT SingerId, UUID FROM `' +
                  googleSqlTable.name +
                  '` WHERE UUID = @v',
                params: {
                  v: val,
                },
              };
              const [rows] = await DATABASE.run(query);
              assert.strictEqual(rows[0][0].value, id);
              assert.strictEqual(uuid.validate(rows[0][1].value), true);
            } catch (err) {
              assert.ifError(err);
            }
          });

          it.skip('POSTGRESQL should bind the value when param type uuid is used', async () => {
            const value = uuid.v4();
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: value,
              },
              types: {
                p1: 'uuid',
              },
            };
            await uuidQuery(PG_DATABASE, query, value);
          });

          it.skip('POSTGRESQL should bind the value as uuid when param type is not specified', async () => {
            const val = uuid.v4();
            const id = generateName('id');
            try {
              await postgreSqlTable.insert({SingerId: id, UUID: val});
              const query = {
                sql:
                  'SELECT "SingerId", "UUID" FROM ' +
                  postgreSqlTable.name +
                  ' WHERE "UUID" = $1',
                params: {
                  p1: val,
                },
              };
              const [rows] = await PG_DATABASE.run(query);
              assert.strictEqual(rows[0][0].value, id);
              assert.strictEqual(uuid.validate(rows[0][1].value), true);
            } catch (err) {
              assert.ifError(err);
            }
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [uuid.v4(), uuid.v4(), uuid.v4()];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'uuid',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'uuid',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it.skip('POSTGRESQL should bind arrays', async () => {
            const values = [uuid.v4(), uuid.v4(), uuid.v4()];

            const query = {
              sql: 'SELECT $1',
              params: {
                p1: values,
              },
              types: {
                p1: {
                  type: 'array',
                  child: 'uuid',
                },
              },
            };

            const [rows] = await PG_DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it.skip('POSTGRESQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT $1',
              params: {
                p1: values,
              },
              types: {
                p1: {
                  type: 'array',
                  child: 'uuid',
                },
              },
            };

            const [rows] = await PG_DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });
        });

        describe('float32', () => {
          const float32Query = async (database, query, value) => {
            const [rows] = await database.run(query);
            let queriedValue = rows[0][0].value;
            if (rows[0][0].value) {
              queriedValue = rows[0][0].value.value;
            }
            if (Number.isNaN(queriedValue)) {
              assert.deepStrictEqual(queriedValue, value);
            } else if (queriedValue === value) {
              assert.deepStrictEqual(queriedValue, value);
            } else {
              assert.ok(queriedValue - value <= 0.00001);
            }
          };

          it('GOOGLE_STANDARD_SQL should bind the value when param type float32 is used', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: 2.2,
              },
              types: {
                v: 'float32',
              },
            };
            await float32Query(DATABASE, query, 2.2);
          });

          it('GOOGLE_STANDARD_SQL should bind the value when spanner.float32 is used', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: Spanner.float32(2.2),
              },
            };
            await float32Query(DATABASE, query, 2.2);
          });

          it('GOOGLE_STANDARD_SQL should bind the value as float64 when param type is not specified', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: 2.2,
              },
            };
            const [rows] = await DATABASE.run(query);
            assert.strictEqual(rows[0][0].value instanceof Float, true);
          });

          it('POSTGRESQL should bind the value when param type float32 is used', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: 2.2,
              },
              types: {
                p1: 'float32',
              },
            };
            await float32Query(PG_DATABASE, query, 2.2);
          });

          it('POSTGRESQL should bind the value when Spanner.float32 is used', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: Spanner.float32(2.2),
              },
            };
            await float32Query(PG_DATABASE, query, 2.2);
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'float32',
              },
            };
            await float32Query(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'float32',
              },
            };
            await float32Query(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [null, 1.1, 2.3, 3.5, null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float32',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            const expected = values.map(val => {
              return isNumber(val) ? Spanner.float32(val) : val;
            });

            for (let i = 0; i < rows[0][0].value.length; i++) {
              if (rows[0][0].value[i] === null || expected[i] === null) {
                assert.deepStrictEqual(rows[0][0].value[i], expected[i]);
              } else {
                assert.ok(
                  rows[0][0].value[i] - expected[i]!['value'] <= 0.00001,
                );
              }
            }
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float32',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float32',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });

          it('GOOGLE_STANDARD_SQL should bind Infinity', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: Infinity,
              },
              types: {
                v: 'float32',
              },
            };
            await float32Query(DATABASE, query, 'Infinity');
          });

          it('POSTGRESQL should bind Infinity', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: Infinity,
              },
              types: {
                p1: 'float32',
              },
            };
            await float32Query(PG_DATABASE, query, 'Infinity');
          });

          it('GOOGLE_STANDARD_SQL should bind -Infinity', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: -Infinity,
              },
              types: {
                v: 'float32',
              },
            };
            await float32Query(DATABASE, query, '-Infinity');
          });

          it('POSTGRESQL should bind -Infinity', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: -Infinity,
              },
              types: {
                p1: 'float32',
              },
            };
            await float32Query(PG_DATABASE, query, '-Infinity');
          });

          it('GOOGLE_STANDARD_SQL should bind NaN', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: NaN,
              },
              types: {
                v: 'float32',
              },
            };
            await float32Query(DATABASE, query, 'NaN');
          });

          it('POSTGRESQL should bind NaN', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: NaN,
              },
              types: {
                p1: 'float32',
              },
            };
            await float32Query(PG_DATABASE, query, 'NaN');
          });

          it('GOOGLE_STANDARD_SQL should bind an array of Infinity and NaN', async () => {
            const values = [Infinity, -Infinity, NaN];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float32',
                },
              },
            };

            const [rows] = await DATABASE.run(query);

            const expected = values.map(val => {
              return isNumber(val) ? {value: val + ''} : val;
            });

            assert.strictEqual(
              JSON.stringify(rows[0][0].value),
              JSON.stringify(expected),
            );
          });
        });

        describe('float64', () => {
          const float64Query = async (database, query, value) => {
            const [rows] = await database.run(query);
            let queriedValue = rows[0][0].value;
            if (rows[0][0].value) {
              queriedValue = rows[0][0].value.value;
            }
            assert.strictEqual(queriedValue, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: 2.2,
              },
            };
            await float64Query(DATABASE, query, 2.2);
          });

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: 2.2,
              },
            };
            await float64Query(PG_DATABASE, query, 2.2);
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'float64',
              },
            };
            await float64Query(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'float64',
              },
            };
            await float64Query(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [null, 1.1, 2.3, 3.5, null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);

            const expected = values.map(val => {
              return isNumber(val) ? {value: val} : val;
            });

            assert.strictEqual(
              JSON.stringify(rows[0][0].value),
              JSON.stringify(expected),
            );
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float64',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'float64',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });

          it('GOOGLE_STANDARD_SQL should bind Infinity', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: Infinity,
              },
            };
            await float64Query(DATABASE, query, 'Infinity');
          });

          it('POSTGRESQL should bind Infinity', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: Infinity,
              },
            };
            await float64Query(PG_DATABASE, query, 'Infinity');
          });

          it('GOOGLE_STANDARD_SQL should bind -Infinity', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: -Infinity,
              },
            };
            await float64Query(DATABASE, query, '-Infinity');
          });

          it('POSTGRESQL should bind -Infinity', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: -Infinity,
              },
            };
            await float64Query(PG_DATABASE, query, '-Infinity');
          });

          it('GOOGLE_STANDARD_SQL should bind NaN', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: NaN,
              },
            };
            await float64Query(DATABASE, query, 'NaN');
          });

          it('POSTGRESQL should bind NaN', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: NaN,
              },
            };
            await float64Query(PG_DATABASE, query, 'NaN');
          });

          it('GOOGLE_STANDARD_SQL should bind an array of Infinity and NaN', async () => {
            const values = [Infinity, -Infinity, NaN];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);

            const expected = values.map(val => {
              return isNumber(val) ? {value: val + ''} : val;
            });

            assert.strictEqual(
              JSON.stringify(rows[0][0].value),
              JSON.stringify(expected),
            );
          });
        });

        describe('string', () => {
          const stringQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            assert.strictEqual(rows[0][0].value, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: 'abc',
              },
            };
            await stringQuery(DATABASE, query, 'abc');
          });

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: 'abc',
              },
            };
            await stringQuery(PG_DATABASE, query, 'abc');
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'string',
              },
            };
            await stringQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'string',
              },
            };
            await stringQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = ['a', 'b', 'c', null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'string',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'string',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('bytes', () => {
          const bytesQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            assert.deepStrictEqual(rows[0][0].value, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: Buffer.from('abc'),
              },
            };
            await bytesQuery(DATABASE, query, Buffer.from('abc'));
          });

          it('POSTGRESQL should bind the value', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: Buffer.from('abc'),
              },
            };
            await bytesQuery(PG_DATABASE, query, Buffer.from('abc'));
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'bytes',
              },
            };
            await bytesQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'bytes',
              },
            };
            await bytesQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [Buffer.from('a'), Buffer.from('b'), null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'bytes',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'bytes',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('timestamp', () => {
          const timestampQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            assert.deepStrictEqual(rows[0][0].value, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const timestamp = Spanner.timestamp();
            const query = {
              sql: 'SELECT @v',
              params: {
                v: timestamp,
              },
            };
            await timestampQuery(DATABASE, query, timestamp);
          });

          it('POSTGRESQL should bind the value', async () => {
            const timestamp = Spanner.timestamp();
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: timestamp,
              },
            };
            await timestampQuery(PG_DATABASE, query, timestamp);
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'timestamp',
              },
            };
            await timestampQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'timestamp',
              },
            };
            await timestampQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [
              Spanner.timestamp(),
              Spanner.timestamp('3-3-1999'),
              null,
            ];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows[0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'timestamp',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'timestamp',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('date', () => {
          const dateQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            let returnedDate = Spanner.date(rows[0][0].value);
            if (value === null) {
              returnedDate = rows[0][0].value;
            }
            assert.deepStrictEqual(returnedDate, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value', async () => {
            const date = Spanner.date();
            const query = {
              sql: 'SELECT @v',
              params: {
                v: date,
              },
            };
            await dateQuery(DATABASE, query, date);
          });

          it('POSTGRESQL should bind the value', async () => {
            const date = Spanner.date();
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: date,
              },
            };
            await dateQuery(PG_DATABASE, query, date);
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'date',
              },
            };
            await dateQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'date',
              },
            };
            await dateQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [Spanner.date(), Spanner.date('3-3-1999'), null];

            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
            };

            const [rows] = await DATABASE.run(query);
            const returnedValues = rows[0][0].value.map(val => {
              return isNull(val) ? val : Spanner.date(val);
            });

            assert.deepStrictEqual(returnedValues, values);
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];

            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'date',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'date',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });

        describe('structs', () => {
          it('GOOGLE_STANDARD_SQL should bind a simple struct', async () => {
            const query = {
              sql: 'SELECT @structParam.userf, @p4',
              params: {
                structParam: Spanner.struct({
                  userf: 'bob',
                  threadf: Spanner.int(1),
                }),
                p4: Spanner.int(10),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0].toJSON();
            assert.strictEqual(row.userf, 'bob');
          });

          it('GOOGLE_STANDARD_SQL should bind null structs', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @structParam.userf is NULL',
              params: {
                structParam: null,
              },
              types: {
                structParam: {
                  type: 'struct',
                  fields: [
                    {
                      name: 'userf',
                      type: 'string',
                    },
                    {
                      name: 'threadf',
                      type: 'int64',
                    },
                  ],
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows![0];
            assert.strictEqual(row[0].value, true);
          });

          it('GOOGLE_STANDARD_SQL should bind nested structs', async () => {
            const query = {
              sql: 'SELECT @structParam.structf.nestedf',
              params: {
                structParam: Spanner.struct({
                  structf: Spanner.struct({
                    nestedf: 'bob',
                  }),
                }),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0].toJSON();
            assert.strictEqual(row.nestedf, 'bob');
          });

          it('GOOGLE_STANDARD_SQL should bind null nested structs', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @structParam.structf.nestedf',
              params: {
                structParam: null,
              },
              types: {
                structParam: {
                  type: 'struct',
                  fields: [
                    {
                      name: 'structf',
                      type: 'struct',
                      fields: [
                        {
                          name: 'nestedf',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows![0].toJSON();
            assert.strictEqual(row.nestedf, null);
          });

          it('GOOGLE_STANDARD_SQL should bind empty structs', async () => {
            const query = {
              sql: 'SELECT @structParam IS NULL',
              params: {
                structParam: Spanner.struct(),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, false);
          });

          it('GOOGLE_STANDARD_SQL should bind null structs with no fields', async () => {
            const query = {
              sql: 'SELECT @structParam IS NULL',
              params: {
                structParam: null,
              },
              types: {
                structParam: 'struct',
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, true);
          });

          it('GOOGLE_STANDARD_SQL should bind structs with null fields', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @structParam.f1',
              params: {
                structParam: Spanner.struct({
                  f1: null,
                }),
              },
              types: {
                structParam: {
                  type: 'struct',
                  fields: [
                    {
                      name: 'f1',
                      type: 'int64',
                    },
                  ],
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows![0].toJSON();
            assert.strictEqual(row.f1, null);
          });

          it('GOOGLE_STANDARD_SQL should bind structs with duplicate fields', async () => {
            const query = {
              sql: 'SELECT @structParam=STRUCT<f1 INT64, f1 INT64>(10, 11)',
              params: {
                structParam: Spanner.struct([
                  {
                    name: 'f1',
                    value: Spanner.int(10),
                  },
                  {
                    name: 'f1',
                    value: Spanner.int(11),
                  },
                ]),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, true);
          });

          it('GOOGLE_STANDARD_SQL should bind structs with missing field names', async () => {
            const query = {
              sql: 'SELECT @structParam=STRUCT<INT64>(5)',
              params: {
                structParam: Spanner.struct([{value: Spanner.int(5)}]),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, true);
          });

          it('GOOGLE_STANDARD_SQL should allow equality checks', async () => {
            const query = {
              sql: 'SELECT @structParam=STRUCT<threadf INT64, userf STRING>(1, "bob")',
              params: {
                structParam: Spanner.struct({
                  threadf: Spanner.int(1),
                  userf: 'bob',
                }),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, true);
          });

          it('GOOGLE_STANDARD_SQL should allow nullness checks', async () => {
            const query = {
              sql: 'SELECT @structParam IS NULL',
              params: {
                structParam: Spanner.struct({
                  userf: 'bob',
                  threadf: Spanner.int(1),
                }),
              },
            };

            const [rows] = await DATABASE.run(query);
            const row = rows[0];
            assert.strictEqual(row[0].value, false);
          });

          it('GOOGLE_STANDARD_SQL should allow an array of non-null structs', async () => {
            const query = {
              sql: 'SELECT a.threadid FROM UNNEST(@arraysf) a',
              params: {
                arraysf: [
                  Spanner.struct({
                    threadid: Spanner.int(12),
                  }),
                  Spanner.struct({
                    threadid: Spanner.int(13),
                  }),
                ],
              },
            };
            let rows;
            [rows] = await DATABASE.run(query);
            rows = rows.map(row => row.toJSON());

            assert.strictEqual(rows.length, 2);
            assert.strictEqual(rows[0].threadid, 12);
            assert.strictEqual(rows[1].threadid, 13);
          });

          it('GOOGLE_STANDARD_SQL should allow an array of structs with null fields', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT a.threadid FROM UNNEST(@structParam.arraysf) a',
              params: {
                structParam: Spanner.struct({
                  intf: Spanner.int(10),
                  arraysf: null,
                }),
              },
              types: {
                structParam: {
                  type: 'struct',
                  fields: [
                    {
                      name: 'intf',
                      type: 'int64',
                    },
                    {
                      name: 'arraysf',
                      type: 'array',
                      child: {
                        type: 'struct',
                        fields: [
                          {
                            name: 'threadid',
                            type: 'int64',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.strictEqual(rows!.length, 0);
          });

          it('GOOGLE_STANDARD_SQL should allow a null array of structs', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT a.threadid FROM UNNEST(@structParamArray) a',
              params: {
                structParamArray: null,
              },
              types: {
                structParamArray: {
                  type: 'array',
                  child: {
                    type: 'struct',
                    fields: [
                      {
                        name: 'threadid',
                        type: 'int64',
                      },
                    ],
                  },
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.strictEqual(rows!.length, 0);
          });
        });

        describe('interval', () => {
          before(function () {
            // TODO: Remove this check once Interval is supported in emulator
            if (IS_EMULATOR_ENABLED) {
              this.skip();
            }
          });

          const intervalQuery = async (database, query, value) => {
            const [rows] = await database.run(query);
            const queriedValue = rows[0][0].value;
            assert.deepStrictEqual(queriedValue, value);
          };

          it('GOOGLE_STANDARD_SQL should bind the value when param type interval is used', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: new Interval(19, 768, BigInt('123456789123')),
              },
              types: {
                v: 'interval',
              },
            };
            await intervalQuery(
              DATABASE,
              query,
              new Interval(19, 768, BigInt('123456789123')),
            );
          });

          it('GOOGLE_STANDARD_SQL should bind the value when spanner.interval is used', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: Spanner.interval(19, 768, BigInt('123456789123')),
              },
            };
            await intervalQuery(
              DATABASE,
              query,
              new Interval(19, 768, BigInt('123456789123')),
            );
          });

          it('POSTGRESQL should bind the value when param type interval is used', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: new Interval(19, 768, BigInt('123456789123')),
              },
              types: {
                p1: 'interval',
              },
            };
            await intervalQuery(
              PG_DATABASE,
              query,
              new Interval(19, 768, BigInt('123456789123')),
            );
          });

          it('POSTGRESQL should bind the value when Spanner.interval is used', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: Spanner.interval(-19, -768, BigInt('123456789123')),
              },
            };
            await intervalQuery(
              PG_DATABASE,
              query,
              new Interval(-19, -768, BigInt('123456789123')),
            );
          });

          it('GOOGLE_STANDARD_SQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: 'interval',
              },
            };
            await intervalQuery(DATABASE, query, null);
          });

          it('POSTGRESQL should allow for null values', async () => {
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: 'interval',
              },
            };
            await intervalQuery(PG_DATABASE, query, null);
          });

          it('GOOGLE_STANDARD_SQL should bind arrays', async () => {
            const values = [
              null,
              new Interval(100, 200, BigInt('123456789123')),
              Interval.ZERO,
              new Interval(-100, -200, BigInt('-123456789123')),
              null,
            ];
            const query = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            const expected = values;
            for (let i = 0; i < rows[0][0].value.length; i++) {
              assert.deepStrictEqual(rows[0][0].value[i], expected[i]);
            }
          });

          it('GOOGLE_STANDARD_SQL should handle interval passed as string', async () => {
            const query = {
              sql: "SELECT INTERVAL '1' DAY + @v",
              params: {
                v: new Interval(100, 200, BigInt('123456789123')).toISO8601(),
              },
              types: {
                v: 'interval',
              },
            };
            await intervalQuery(
              DATABASE,
              query,
              new Interval(100, 201, BigInt('123456789123')),
            );
          });

          it('GOOGLE_STANDARD_SQL should bind empty arrays', async () => {
            const values = [];
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: values,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('GOOGLE_STANDARD_SQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT @v',
              params: {
                v: null,
              },
              types: {
                v: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });

          it('POSTGRESQL should bind arrays', async () => {
            const values = [
              null,
              new Interval(100, 200, BigInt('123456789123')),
              Interval.ZERO,
              new Interval(-100, -200, BigInt('-123456789123')),
              null,
            ];
            const query = {
              sql: 'SELECT $1',
              params: {
                p1: values,
              },
              types: {
                p1: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await PG_DATABASE.run(query);
            const expected = values;
            for (let i = 0; i < rows[0][0].value.length; i++) {
              assert.deepStrictEqual(rows[0][0].value[i], expected[i]);
            }
          });

          it('POSTGRESQL should bind empty arrays', async () => {
            const values = [];
            const query: ExecuteSqlRequest = {
              sql: 'SELECT $1',
              params: {
                p1: values,
              },
              types: {
                p1: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await PG_DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, values);
          });

          it('POSTGRESQL should bind null arrays', async () => {
            const query: ExecuteSqlRequest = {
              sql: 'SELECT $1',
              params: {
                p1: null,
              },
              types: {
                p1: {
                  type: 'array',
                  child: 'interval',
                },
              },
            };

            const [rows] = await PG_DATABASE.run(query);
            assert.deepStrictEqual(rows![0][0].value, null);
          });
        });
      });

      describe('large reads', () => {
        const TABLE_NAME = 'LargeReads';
        let googleSqlTable;
        let postgreSqlTable;

        const googleSqlExpectedRow = {
          Key: generateName('key'),
          StringValue: string(),
          StringArray: [string(), string(), string(), string()],
          BytesValue: bytes(),
          BytesArray: [bytes(), bytes(), bytes(), bytes()],
        };

        const postgreSqlExpectedRow = {
          Key: generateName('key'),
          StringValue: string(),
          BytesValue: bytes(),
        };

        function string() {
          const offset = Math.floor(Math.random() * 500);

          return new Array(25000 + offset)
            .fill('The quick brown fox jumps over the lazy dog.')
            .join('\n');
        }

        function bytes() {
          const offset = Math.floor(Math.random() * 2048);

          return crypto.randomBytes(1024 * 1024 + offset);
        }

        function base64ToBuffer(bytes) {
          return Buffer.from(bytes, 'base64');
        }

        before(async () => {
          googleSqlTable = DATABASE.table(TABLE_NAME);
          postgreSqlTable = PG_DATABASE.table(TABLE_NAME);
          const googleSqlCreateTable = await googleSqlTable.create(
            `
              CREATE TABLE ${TABLE_NAME} (
                                           Key STRING(MAX) NOT NULL,
                                           StringValue STRING(MAX),
                                           StringArray ARRAY<STRING(MAX)>,
                                           BytesValue BYTES(MAX),
                                           BytesArray ARRAY<BYTES(MAX)>
              ) PRIMARY KEY (Key)`,
            GAX_OPTIONS,
          );
          await onPromiseOperationComplete(googleSqlCreateTable);
          await googleSqlTable.insert(googleSqlExpectedRow);

          const postgreSqlCreateTable = await postgreSqlTable.create(
            `CREATE TABLE ${TABLE_NAME} (
                                          "Key" VARCHAR NOT NULL PRIMARY KEY,
                                          "StringValue" VARCHAR,
                                          "BytesValue" BYTEA
              )`,
            GAX_OPTIONS,
          );
          await onPromiseOperationComplete(postgreSqlCreateTable);
          await postgreSqlTable.insert(postgreSqlExpectedRow);
        });

        it('GOOGLE_STANDARD_SQL should read large datasets', async () => {
          const [rows] = await googleSqlTable.read({
            keys: [googleSqlExpectedRow.Key],
            columns: [
              'Key',
              'StringValue',
              'StringArray',
              'BytesValue',
              'BytesArray',
            ],
          });

          const row = rows[0].toJSON();

          assert.strictEqual(row.Key, googleSqlExpectedRow.Key);
          assert.strictEqual(row.StringValue, googleSqlExpectedRow.StringValue);
          assert.deepStrictEqual(
            row.StringArray,
            googleSqlExpectedRow.StringArray,
          );

          row.BytesValue = base64ToBuffer(row.BytesValue);
          row.BytesArray = row.BytesArray.map(base64ToBuffer);

          assert.deepStrictEqual(
            row.BytesValue,
            googleSqlExpectedRow.BytesValue,
          );
          assert.deepStrictEqual(
            row.BytesArray,
            googleSqlExpectedRow.BytesArray,
          );
        });

        it('POSTGRESQL should read large datasets', async () => {
          const [rows] = await postgreSqlTable.read({
            keys: [postgreSqlExpectedRow.Key],
            columns: ['Key', 'StringValue', 'BytesValue'],
          });

          const row = rows[0].toJSON();

          assert.strictEqual(row.Key, postgreSqlExpectedRow.Key);
          assert.strictEqual(
            row.StringValue,
            postgreSqlExpectedRow.StringValue,
          );

          row.BytesValue = base64ToBuffer(row.BytesValue);
          assert.deepStrictEqual(
            row.BytesValue,
            postgreSqlExpectedRow.BytesValue,
          );
        });

        it('GOOGLE_STANDARD_SQL should query large datasets', async () => {
          const query = {
            sql: 'SELECT * FROM ' + googleSqlTable.name + ' WHERE Key = @key',
            params: {
              key: googleSqlExpectedRow.Key,
            },
          };

          const [rows] = await DATABASE.run(query);
          const row = rows[0].toJSON();

          assert.strictEqual(row.Key, googleSqlExpectedRow.Key);
          assert.strictEqual(row.StringValue, googleSqlExpectedRow.StringValue);
          assert.deepStrictEqual(
            row.StringArray,
            googleSqlExpectedRow.StringArray,
          );

          row.BytesValue = base64ToBuffer(row.BytesValue);
          row.BytesArray = row.BytesArray.map(base64ToBuffer);

          assert.deepStrictEqual(
            row.BytesValue,
            googleSqlExpectedRow.BytesValue,
          );
          assert.deepStrictEqual(
            row.BytesArray,
            googleSqlExpectedRow.BytesArray,
          );
        });

        it('POSTGRESQL should query large datasets', async () => {
          const query = {
            sql: 'SELECT * FROM ' + postgreSqlTable.name + ' WHERE "Key" = $1',
            params: {
              p1: postgreSqlExpectedRow.Key,
            },
          };

          const [rows] = await PG_DATABASE.run(query);
          const row = rows[0].toJSON();

          assert.strictEqual(row.Key, postgreSqlExpectedRow.Key);
          assert.strictEqual(
            row.StringValue,
            postgreSqlExpectedRow.StringValue,
          );

          row.BytesValue = base64ToBuffer(row.BytesValue);
          assert.deepStrictEqual(
            row.BytesValue,
            postgreSqlExpectedRow.BytesValue,
          );
        });
      });
    });

    describe('upsert', () => {
      const ROW = {
        SingerId: generateName('id'),
        Name: generateName('name'),
      };

      const updateRow = async table => {
        const row = {
          SingerId: ROW.SingerId,
          Name: generateName('name'),
        };

        await table.insert(row);
        await table.upsert(ROW);
        const [rows] = await table.read({
          keys: [ROW.SingerId],
          columns: Object.keys(ROW),
        });
        assert.deepStrictEqual(rows![0].toJSON(), ROW);
      };

      it('GOOGLE_STANDARD_SQL should update a row', async () => {
        await updateRow(googleSqlTable);
      });

      it('POSTGRESQL should update a row', async () => {
        await updateRow(postgreSqlTable);
      });

      const insertRow = async table => {
        await table.upsert(ROW);
        const [rows] = await table.read({
          keys: [ROW.SingerId],
          columns: Object.keys(ROW),
        });
        assert.deepStrictEqual(rows![0].toJSON(), ROW);
      };

      it('GOOGLE_STANDARD_SQL should update a row', async () => {
        await insertRow(googleSqlTable);
      });

      it('POSTGRESQL should update a row', async () => {
        await insertRow(postgreSqlTable);
      });
    });

    describe('read', () => {
      const TABLE_NAME = 'ReadTestTable';
      let googleSqlTable;
      let postgreSqlTable;

      const ALL_COLUMNS = ['Key', 'StringValue'];

      before(async () => {
        googleSqlTable = DATABASE.table(TABLE_NAME);
        postgreSqlTable = PG_DATABASE.table(TABLE_NAME);
        const googleSqlCreateTable = await googleSqlTable.create(
          `
            CREATE TABLE ${TABLE_NAME} (
              Key STRING(MAX) NOT NULL,
              StringValue STRING(MAX)
            ) PRIMARY KEY (Key)`,
          GAX_OPTIONS,
        );
        await onPromiseOperationComplete(googleSqlCreateTable);
        const googleSqlCreateIndex = await DATABASE.updateSchema(`
              CREATE INDEX ReadByValue ON ${TABLE_NAME}(StringValue)`);
        await onPromiseOperationComplete(googleSqlCreateIndex);

        const data: Array<{}> = [];

        for (let i = 0; i < 15; ++i) {
          data.push({
            Key: 'k' + i,
            StringValue: 'v' + i,
          });
        }
        await googleSqlTable.insert(data);

        const postgreSqlCreateTable = await postgreSqlTable.create(
          `CREATE TABLE ${TABLE_NAME} (
              "Key" VARCHAR NOT NULL PRIMARY KEY,
              "StringValue" VARCHAR
          )`,
          GAX_OPTIONS,
        );
        await onPromiseOperationComplete(postgreSqlCreateTable);
        const postgreSqlCreateIndex = await PG_DATABASE.updateSchema(`
            CREATE INDEX ReadByValue ON ${TABLE_NAME}("StringValue")`);
        await onPromiseOperationComplete(postgreSqlCreateIndex);
        await postgreSqlTable.insert(data);
      });

      // all of these tests require testing with and without an index,
      // to cut back on duplication, the core sections of the tests have been
      // turned into configurations
      [
        {
          test: 'should perform an empty read',
          query: {
            ranges: [
              {
                startClosed: 'k99',
                endOpen: 'z',
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 0);
          },
        },
        {
          test: 'should read a single key',
          query: {
            keys: ['k1'],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 1);

            const row = rows[0].toJSON();

            assert.strictEqual(row.Key, 'k1');
            assert.strictEqual(row.StringValue, 'v1');
          },
        },
        {
          test: 'should read a non-existant single key',
          query: {
            keys: ['k999'],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 0);
          },
        },
        {
          test: 'should read using partial keys',
          query: {
            ranges: [
              {
                startClosed: 'k7',
                endClosed: null,
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);

            assert.strictEqual(rows.length, 3);

            rows = rows.map(row => {
              return row.toJSON();
            });

            assert.strictEqual(rows[0].Key, 'k7');
            assert.strictEqual(rows[1].Key, 'k8');
            assert.strictEqual(rows[2].Key, 'k9');
          },
        },
        {
          test: 'should read using an open-open range',
          query: {
            ranges: [
              {
                startOpen: 'k3',
                endOpen: 'k5',
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 1);

            const row = rows[0].toJSON();

            assert.strictEqual(row.Key, 'k4');
          },
        },
        {
          test: 'should read using an open-closed range',
          query: {
            ranges: [
              {
                startOpen: 'k3',
                endClosed: 'k5',
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 2);

            rows = rows.map(row => {
              return row.toJSON();
            });

            assert.strictEqual(rows[0].Key, 'k4');
            assert.strictEqual(rows[1].Key, 'k5');
          },
        },
        {
          test: 'should read using a closed-closed range',
          query: {
            ranges: [
              {
                startClosed: 'k3',
                endClosed: 'k5',
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 3);

            rows = rows.map(row => {
              return row.toJSON();
            });

            assert.strictEqual(rows[0].Key, 'k3');
            assert.strictEqual(rows[1].Key, 'k4');
            assert.strictEqual(rows[2].Key, 'k5');
          },
        },
        {
          test: 'should read using a closed-open range',
          query: {
            ranges: [
              {
                startClosed: 'k3',
                endOpen: 'k5',
              },
            ],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 2);

            rows = rows.map(row => {
              return row.toJSON();
            });

            assert.strictEqual(rows[0].Key, 'k3');
            assert.strictEqual(rows[1].Key, 'k4');
          },
        },
        {
          test: 'should accept a limit',
          query: {
            ranges: [
              {
                startClosed: 'k3',
                endClosed: 'k7',
              },
            ],
            columns: ALL_COLUMNS,
            limit: 2,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 2);
          },
        },
        {
          test: 'should ignore limits of 0',
          query: {
            ranges: [
              {
                startClosed: 'k3',
                endClosed: 'k7',
              },
            ],
            columns: ALL_COLUMNS,
            limit: 0,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 5);
          },
        },
        {
          test: 'should read using point keys',
          query: {
            keys: ['k3', 'k5', 'k7'],
            columns: ALL_COLUMNS,
          },
          assertions(err, rows) {
            assert.ifError(err);
            assert.strictEqual(rows.length, 3);

            rows = rows.map(row => {
              return row.toJSON();
            });

            assert.strictEqual(rows[0].Key, 'k3');
            assert.strictEqual(rows[1].Key, 'k5');
            assert.strictEqual(rows[2].Key, 'k7');
          },
        },
      ].forEach(test => {
        // test normally
        it(`GOOGLE_STANDARD_SQL ${test.test}`, async () => {
          let rows;
          try {
            [rows] = await googleSqlTable.read(test.query as ReadRequest);
          } catch (err) {
            test.assertions(err, rows);
          }
        });

        it(`POSTGRESQL ${test.test}`, async () => {
          let rows;
          try {
            await postgreSqlTable.read(test.query as ReadRequest);
          } catch (err) {
            test.assertions(err, rows);
          }
        });

        // test using an index
        const readUsingIndex = async (test, table) => {
          const query = extend(
            {
              index: 'ReadByValue',
            },
            test.query,
          );

          if (query.keys) {
            query.keys = query.keys.map(key => {
              return key.replace('k', 'v');
            });
          }

          if (query.ranges) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query.ranges = (query as any).ranges.map(range_ => {
              const range = extend({}, range_);
              Object.keys(range).forEach(bound => {
                if (range[bound]) {
                  range[bound] = range[bound].replace('k', 'v');
                }
              });
              return range;
            });
          }

          table.read(query as ReadRequest, (err, rows) => {
            test.assertions(err, rows);
          });
        };

        it(`GOOGLE_STANDARD_SQL ${test.test}` + ' with an index', async () => {
          await readUsingIndex(test, googleSqlTable);
        });

        it(`POSTGRESQL ${test.test}` + ' with an index', async () => {
          await readUsingIndex(test, postgreSqlTable);
        });
      });

      it('should read over invalid database fails', async () => {
        const database = instance.database(generateName('invalid'));
        const table = database.table(TABLE_NAME);

        const query = {
          keys: ['k1'],
          columns: ALL_COLUMNS,
        };

        try {
          await table.read(query);
        } catch (err: any) {
          assert.strictEqual(err.code, 5);
        }

        await database.close();
      });

      const readInvalidTable = async database => {
        const table = database.table('ReadTestTablezzz');

        const query = {
          keys: ['k1'],
          columns: ALL_COLUMNS,
        };

        try {
          await table.read(query);
        } catch (err: any) {
          assert.strictEqual(err.code, 5);
        }
      };

      it('GOOGLE_STANDARD_SQL should read over invalid table fails', async () => {
        await readInvalidTable(DATABASE);
      });

      it('POSTGRESQL should read over invalid table fails', async () => {
        await readInvalidTable(PG_DATABASE);
      });

      const readInvalidColumn = async table => {
        const query = {
          keys: ['k1'],
          columns: ['ohnoes'],
        };

        try {
          table.read(query);
        } catch (err: any) {
          assert.strictEqual(err.code, 5);
        }
      };

      it('GOOGLE_STANDARD_SQL should read over invalid column fails', async () => {
        await readInvalidColumn(googleSqlTable);
      });

      it('POSTGRESQL should read over invalid column fails', async () => {
        await readInvalidColumn(postgreSqlTable);
      });

      const failDeadlineExceed = async table => {
        const query = {
          keys: ['k1'],
          columns: ALL_COLUMNS,
          gaxOptions: {
            timeout: 0.1,
          },
        };

        try {
          await table.read(query);
        } catch (err: any) {
          assert.strictEqual(err.code, 4);
        }
      };

      it('GOOGLE_STANDARD_SQL should fail if deadline exceeds', async function () {
        // This test case somehow causes the emulator to return a RESOURCE_EXHAUSTED
        // error for this or following gRPC calls.
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await failDeadlineExceed(googleSqlTable);
      });

      it('POSTGRESQL should fail if deadline exceeds', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await failDeadlineExceed(postgreSqlTable);
      });
    });
  });

  describe('Multiplexed Sessions', () => {
    let table;

    before(() => {
      table = DATABASE.table(TABLE_NAME);
    });

    it('should insert and query a row', async () => {
      const id = generateName('id');
      const name = generateName('name');

      await table.insert({
        SingerId: id,
        Name: name,
      });

      const [rows] = await DATABASE.run(`SELECT * FROM ${TABLE_NAME}`);
      assert.ok(
        rows!.some(
          r =>
            JSON.stringify(r.toJSON()) ===
            JSON.stringify({SingerId: id, Name: name}),
        ),
      );
    });

    it('should insert and query multiple rows', async () => {
      const id1 = generateName('id1');
      const name1 = generateName('name');

      const id2 = generateName('id2');
      const name2 = generateName('name');

      await table.insert([
        {
          SingerId: id1,
          Name: name1,
        },
        {
          SingerId: id2,
          Name: name2,
        },
      ]);
      const [rows] = await DATABASE.run(
        `SELECT * FROM ${TABLE_NAME} ORDER BY SingerId`,
      );
      // We just want the two most recent ones.
      rows!.splice(0, rows!.length - 2);

      const rowJson = rows!.map(x => x.toJSON());

      assert.deepStrictEqual(rowJson, [
        {
          SingerId: id1,
          Name: name1,
        },
        {
          SingerId: id2,
          Name: name2,
        },
      ]);
    });

    it('should read rows as a stream', done => {
      const id = generateName('id');
      const name = generateName('name');

      table.insert(
        {
          SingerId: id,
          Name: name,
        },
        err => {
          assert.ifError(err);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let rows: any[] = [];

          table
            .createReadStream({
              keys: [id],
              columns: ['SingerId', 'name'],
            })
            .on('error', done)
            .on('data', row => {
              rows.push(row);
            })
            .on('end', () => {
              rows = rows.map(x => x.toJSON());

              assert.deepStrictEqual(rows, [
                {
                  SingerId: id,
                  Name: name,
                },
              ]);

              done();
            });
        },
      );
    });

    it('should read rows', async () => {
      const id = generateName('id');
      const name = generateName('name');

      await table.insert({SingerId: id, Name: name});
      let rows;
      [rows] = await table.read({keys: [id], columns: ['SingerId', 'Name']});
      rows = rows!.map(x => x.toJSON());

      assert.deepStrictEqual(rows, [
        {
          SingerId: id,
          Name: name,
        },
      ]);
    });
  });

  describe('Transactions', () => {
    const TABLE_NAME = 'TxnTable';
    let googleSqlTable;
    let postgreSqlTable;

    const googleSqlSchema = `
      CREATE TABLE ${TABLE_NAME} (
        Key STRING(MAX) NOT NULL,
        StringValue STRING(MAX),
        NumberValue INT64
      ) PRIMARY KEY (Key)
    `;
    const postgreSqlSchema = `
      CREATE TABLE ${TABLE_NAME} (
        "Key" VARCHAR NOT NULL PRIMARY KEY,
        "StringValue" VARCHAR ,
        "NumberValue" BIGINT
      )`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const googleSqlRecords = [];
    const postgreSqlRecords = [];

    before(async () => {
      googleSqlTable = DATABASE.table(TABLE_NAME);
      postgreSqlTable = PG_DATABASE.table(TABLE_NAME);
      const insertRecords = async function (table, records) {
        for (let i = 0; i < 5; i++) {
          const entry = {Key: `k${i}`, StringValue: `v${i}`};

          const [{commitTimestamp}] = await table.insert(entry);
          const record = Object.assign(entry, {
            commitTimestamp,
            localTimestamp: Date.now(),
          });

          records.push(record);
          await wait(1000);
        }
      };
      await onPromiseOperationComplete(
        await googleSqlTable.create(googleSqlSchema, GAX_OPTIONS),
      );
      await insertRecords(googleSqlTable, googleSqlRecords);

      await onPromiseOperationComplete(
        await postgreSqlTable.create(postgreSqlSchema, GAX_OPTIONS),
      );
      await insertRecords(postgreSqlTable, postgreSqlRecords);
    });

    describe('snapshots', () => {
      const readOnlyTransaction = async (database, records) => {
        const options = {
          strong: true,
        };

        const [transaction] = await database.getSnapshot(options);
        const [rows] = await transaction!.run(`SELECT * FROM ${TABLE_NAME}`);
        assert.strictEqual(rows.length, records.length);
        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should run a read only transaction', async () => {
        await readOnlyTransaction(DATABASE, googleSqlRecords);
      });

      it('POSTGRESQL should run a read only transaction', async () => {
        await readOnlyTransaction(PG_DATABASE, postgreSqlRecords);
      });

      const readKeysFromTable = async (database, table, records) => {
        const [transaction] = await database.getSnapshot();
        const query = {
          ranges: [
            {
              startClosed: 'k0',
              endClosed: 'k4',
            },
          ],
          columns: ['Key'],
        } as {} as ReadRequest;

        const [rows] = await transaction!.read(table.name, query);
        assert.strictEqual(rows!.length, records.length);
        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should read keys from a table', async () => {
        await readKeysFromTable(DATABASE, googleSqlTable, googleSqlRecords);
      });

      it('POSTGRESQL should read keys from a table', async () => {
        await readKeysFromTable(
          PG_DATABASE,
          postgreSqlTable,
          postgreSqlRecords,
        );
      });

      const acceptReadTimestamp = async (database, records) => {
        const options = {
          readTimestamp: records[0].commitTimestamp,
        };

        const [transaction] = await database.getSnapshot(options);
        const [rows] = await transaction!.run(`SELECT * FROM ${TABLE_NAME}`);
        assert.strictEqual(rows.length, 1);

        const row = rows[0].toJSON();

        assert.strictEqual(row.Key, records[0].Key);
        assert.strictEqual(row.StringValue, records[0].StringValue);

        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should accept a read timestamp', async () => {
        await acceptReadTimestamp(DATABASE, googleSqlRecords);
      });

      it('POSTGRESQL should accept a read timestamp', async () => {
        await acceptReadTimestamp(PG_DATABASE, postgreSqlRecords);
      });

      const acceptMinTimestamp = async (database, records) => {
        const query = 'SELECT * FROM ' + TABLE_NAME;

        const options = {
          minReadTimestamp: new PreciseDate(),
        } as TimestampBounds;

        // minTimestamp can only be used in single use transactions
        // so we can't use database.getSnapshot here
        const [rows] = await database.run(query, options);
        assert.strictEqual(rows!.length, records.length);
      };

      it('GOOGLE_STANDARD_SQL should accept a min timestamp', async () => {
        await acceptMinTimestamp(DATABASE, googleSqlRecords);
      });

      it('POSTGRESQL should accept a min timestamp', async () => {
        await acceptMinTimestamp(PG_DATABASE, postgreSqlRecords);
      });

      const acceptExactStaleness = async (database, records, query) => {
        const options = {
          exactStaleness: Date.now() - records[1].localTimestamp,
        };

        const [transaction] = await database.getSnapshot(options);
        const [rows] = await transaction!.run(query);
        assert.strictEqual(rows.length, 2);

        const rowJson = rows.map(x => x.toJSON());

        assert.strictEqual(rowJson[0].Key, 'k0');
        assert.strictEqual(rowJson[0].StringValue, 'v0');
        assert.strictEqual(rowJson[1].Key, 'k1');
        assert.strictEqual(rowJson[1].StringValue, 'v1');

        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should accept an exact staleness', async () => {
        await acceptExactStaleness(
          DATABASE,
          googleSqlRecords,
          `SELECT * FROM ${TABLE_NAME} ORDER BY Key`,
        );
      });

      it('POSTGRESQL should accept an exact staleness', async () => {
        await acceptExactStaleness(
          PG_DATABASE,
          postgreSqlRecords,
          `SELECT * FROM ${TABLE_NAME} ORDER BY "Key"`,
        );
      });

      const acceptMaxStaleness = (database, records) => {
        const query = 'SELECT * FROM TxnTable';

        const options = {
          maxStaleness: 1,
        };

        // maxStaleness can only be used in single use transactions
        // so we can't use database.getSnapshot here
        database.run(query, options, (err, rows) => {
          assert.ifError(err);
          assert.strictEqual(rows!.length, records.length);
        });
      };

      it('GOOGLE_STANDARD_SQL should accept a max staleness', async () => {
        await acceptMaxStaleness(DATABASE, googleSqlRecords);
      });

      it('POSTGRESQL should accept a max staleness', async () => {
        await acceptMaxStaleness(PG_DATABASE, postgreSqlRecords);
      });

      const strongReadWithConcurrentUpdates = async (
        database,
        table,
        records,
      ) => {
        const options = {
          strong: true,
        };

        const [transaction] = await database.getSnapshot(options);
        const query = 'SELECT * FROM TxnTable';

        const [rows] = await transaction!.run(query);
        assert.strictEqual(rows.length, records.length);

        await table.update({Key: 'k4', StringValue: 'v44'});
        const [rows_] = await transaction!.run(query);
        const row = rows_!.pop()!.toJSON();
        assert.strictEqual(row.StringValue, 'v4');

        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should do a strong read with concurrent updates', async () => {
        await strongReadWithConcurrentUpdates(
          DATABASE,
          googleSqlTable,
          googleSqlRecords,
        );
      });

      it('POSTGRESQL should do a strong read with concurrent updates', async () => {
        await strongReadWithConcurrentUpdates(
          PG_DATABASE,
          postgreSqlTable,
          postgreSqlRecords,
        );
      });

      const exactReadWithConcurrentUpdates = async (
        database,
        table,
        records,
      ) => {
        const options = {
          readTimestamp: records[records.length - 1].commitTimestamp,
        };

        const [transaction] = await database.getSnapshot(options);
        const query = 'SELECT * FROM TxnTable';

        const [rows] = await transaction!.run(query);
        const originalRows = extend(true, {}, rows);

        // Make arbitrary update.
        await table.update({
          Key: rows[0].toJSON().Key,
          StringValue: 'overridden value',
        });
        let rows_;
        [rows_] = await transaction!.run(query);
        rows_ = extend(true, {}, rows_);

        assert.deepStrictEqual(rows_, originalRows);

        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should do a strong read with concurrent updates', async () => {
        await exactReadWithConcurrentUpdates(
          DATABASE,
          googleSqlTable,
          googleSqlRecords,
        );
      });

      it('POSTGRESQL should do a strong read with concurrent updates', async () => {
        await exactReadWithConcurrentUpdates(
          PG_DATABASE,
          postgreSqlTable,
          postgreSqlRecords,
        );
      });

      const readWithStalenessAndConcurrentUpdates = async (
        database,
        table,
        records,
      ) => {
        const options = {
          exactStaleness: Date.now() - records[0].localTimestamp,
        };

        const [transaction] = await database.getSnapshot(options);
        const query = 'SELECT * FROM TxnTable';

        const [rows1] = await transaction!.run(query);
        assert.strictEqual(rows1.length, 1);

        await table.update({Key: 'k4', StringValue: 'overridden value'});
        const [rows2] = await transaction!.run(query);
        assert.strictEqual(rows2.length, 1);

        transaction!.end();
      };

      it('GOOGLE_STANDARD_SQL should read with staleness & concurrent updates', async () => {
        await readWithStalenessAndConcurrentUpdates(
          DATABASE,
          googleSqlTable,
          googleSqlRecords,
        );
      });

      it('POSTGRESQL should read with staleness & concurrent updates', async () => {
        await readWithStalenessAndConcurrentUpdates(
          PG_DATABASE,
          postgreSqlTable,
          postgreSqlRecords,
        );
      });

      it('GOOGLE_STANDARD_SQL should pass directedReadOptions at query level read-only transactions', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const directedReadOptionsForRequest = {
          includeReplicas: {
            replicaSelections: [
              {
                type: protos.google.spanner.v1.DirectedReadOptions
                  .ReplicaSelection.Type.READ_ONLY,
              },
            ],
            autoFailoverDisabled: true,
          },
        };

        const [transaction] = await DATABASE.getSnapshot();
        const [rows] = await transaction!.run({
          sql: `SELECT * FROM ${TABLE_NAME}`,
          directedReadOptions: directedReadOptionsForRequest,
        });
        assert.strictEqual(rows.length, googleSqlRecords.length);
        transaction!.end();
      });
    });

    describe('dml', () => {
      before(async () => {
        const psqlTransaction = await PG_DATABASE.runTransactionAsync(
          async transaction => {
            await transaction!.runUpdate({
              sql:
                'INSERT INTO ' +
                TABLE_NAME +
                ' ("Key", "StringValue") VALUES($1, $2)',
              params: {
                p1: 'k999',
                p2: 'abc',
              },
            });
            await transaction!.commit();
          },
        );

        const gsqlTransaction = DATABASE.runTransactionAsync(
          async transaction => {
            await transaction!.runUpdate({
              sql:
                'INSERT INTO ' +
                TABLE_NAME +
                ' (Key, StringValue) VALUES(@key, @str)',
              params: {
                key: 'k999',
                str: 'abc',
              },
            });
            await transaction!.commit();
          },
        );

        return Promise.all([psqlTransaction, gsqlTransaction]);
      });

      const rowCountRunUpdate = async (database, query) => {
        await database.runTransactionAsync(async transaction => {
          const [rowCount] = await transaction!.runUpdate(query);
          assert.strictEqual(rowCount, 1);
          await transaction!.rollback();
        });
      };

      it('GOOGLE_STANDARD_SQL should return rowCount from runUpdate', async () => {
        const query = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.StringValue = @str WHERE t.Key = @key',
          params: {
            key: 'k999',
            str: 'abcd',
          },
        };
        await rowCountRunUpdate(DATABASE, query);
      });

      it('POSTGRESQL should return rowCount from runUpdate', async () => {
        const query = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "StringValue" = $1 WHERE "Key" = $2',
          params: {
            p1: 'abcd',
            p2: 'k999',
          },
        };
        await rowCountRunUpdate(PG_DATABASE, query);
      });

      const rowCountRun = async (database, query) => {
        await database.runTransactionAsync(async transaction => {
          const [rows, stats] = await transaction!.run(query);
          const rowCount = Math.floor(stats[stats.rowCount!] as number);
          assert.strictEqual(rowCount, 1);
          await transaction!.rollback();
        });
      };
      it('GOOGLE_STANDARD_SQL should return rowCount from run', async () => {
        const query = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.StringValue = @str WHERE t.Key = @key',
          params: {
            key: 'k999',
            str: 'abcd',
          },
        };
        await rowCountRun(DATABASE, query);
      });

      it('POSTGRESQL should return rowCount from run', async () => {
        const query = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "StringValue" = $1 WHERE "Key" = $2',
          params: {
            p1: 'abcd',
            p2: 'k999',
          },
        };
        await rowCountRun(PG_DATABASE, query);
      });

      const multipleDmlOnTxn = async (
        database,
        insertQuery,
        updateQuery,
        selectQuery,
      ) => {
        await database.runTransactionAsync(async transaction => {
          const [insertRowCount] = await transaction!.runUpdate(insertQuery);
          assert.strictEqual(insertRowCount, 1);
          const [updateRowCount] = await transaction!.runUpdate(updateQuery);
          assert.strictEqual(updateRowCount, 1);
          let rows;
          [rows] = await transaction!.run(selectQuery);
          rows = rows.map(row => row.toJSON());
          assert.strictEqual(rows.length, 1);
          assert.deepStrictEqual(rows[0], {
            Key: 'k1000',
            StringValue: 'abcd',
            NumberValue: 11,
          });
          await transaction!.rollback();
        });
      };

      it('GOOGLE_STANDARD_SQL should exec multiple dml statements on the same txn', async () => {
        const key = 'k1000';
        const str = 'abcd';
        const num = 11;
        const insertQuery = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' (Key, StringValue) VALUES (@key, @str)',
          params: {key, str},
        };
        const updateQuery = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.NumberValue = @num WHERE t.KEY = @key',
          params: {key, num},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE Key = @key',
          params: {key},
        };
        await multipleDmlOnTxn(DATABASE, insertQuery, updateQuery, selectQuery);
      });

      it('POSTGRESQL should exec multiple dml statements on the same txn', async () => {
        const key = 'k1000';
        const str = 'abcd';
        const num = 11;
        const insertQuery = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' ("Key", "StringValue") VALUES ($1, $2)',
          params: {p1: key, p2: str},
        };
        const updateQuery = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "NumberValue" = $1 WHERE "Key" = $2',
          params: {p1: num, p2: key},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE "Key" = $1',
          params: {p1: key},
        };
        await multipleDmlOnTxn(
          PG_DATABASE,
          insertQuery,
          updateQuery,
          selectQuery,
        );
      });

      const dmlChangesInQueryResults = async (
        database,
        updateQuery,
        selectQuery,
      ) => {
        await database.runTransactionAsync(async transaction => {
          await transaction!.runUpdate(updateQuery);
          let rows;
          [rows] = await transaction!.run(selectQuery);
          rows = rows.map(row => row.toJSON());
          assert.strictEqual(rows.length, 1);
          assert.strictEqual(rows[0].StringValue, 'abcd');
          await transaction!.rollback();
        });
      };

      it('GOOGLE_STANDARD_SQL should show dml changes in query results', async () => {
        const key = 'k999';
        const str = 'abcd';
        const updateQuery = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.StringValue = @str WHERE t.Key = @key',
          params: {key, str},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE Key = @key',
          params: {key},
        };
        await dmlChangesInQueryResults(DATABASE, updateQuery, selectQuery);
      });

      it('POSTGRESQL should show dml changes in query results', async () => {
        const key = 'k999';
        const str = 'abcd';
        const updateQuery = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "StringValue" = $1 WHERE "Key" = $2',
          params: {p1: str, p2: key},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE "Key" = $1',
          params: {p1: key},
        };
        await dmlChangesInQueryResults(PG_DATABASE, updateQuery, selectQuery);
      });

      const rollbackDmlStatement = async (
        database,
        updateQuery,
        selectQuery,
      ) => {
        await database.runTransactionAsync(async transaction => {
          await transaction!.runUpdate(updateQuery);
          await transaction!.rollback();
          let rows;
          [rows] = await database.run(selectQuery);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rows = rows.map(row => (row as any).toJSON());
          assert.notStrictEqual(rows[0].StringValue, 'abcd');
        });
      };

      it('GOOGLE_STANDARD_SQL should rollback a dml statement', async () => {
        const key = 'k999';
        const str = 'abcd';
        const updateQuery = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.StringValue = @str WHERE t.Key = @key',
          params: {key, str},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE Key = @key',
          params: {key},
        };
        await rollbackDmlStatement(DATABASE, updateQuery, selectQuery);
      });

      it('POSTGRESQL should rollback a dml statement', async () => {
        const key = 'k999';
        const str = 'abcd';
        const updateQuery = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "StringValue" = $1 WHERE "Key" = $2',
          params: {p1: str, p2: key},
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE "Key" = $1',
          params: {p1: key},
        };
        await rollbackDmlStatement(PG_DATABASE, updateQuery, selectQuery);
      });

      const handleDmlAndInsert = async (database, insertQuery, selectQuery) => {
        await database.runTransactionAsync(async transaction => {
          await transaction!.runUpdate(insertQuery);
          transaction!.insert('TxnTable', {
            Key: 'k1002',
            StringValue: 'dml+mutation',
          });

          await transaction!.commit();
          const [rows] = await database.run(selectQuery);
          assert.strictEqual(rows.length, 2);
        });
      };

      it('GOOGLE_STANDARD_SQL should handle using both dml and insert methods', async () => {
        const str = 'dml+mutation';
        const insertQuery = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' (Key, StringValue) VALUES (@key, @str)',
          params: {
            key: 'k1001',
            str,
          },
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE StringValue = @str',
          params: {str},
        };
        await handleDmlAndInsert(DATABASE, insertQuery, selectQuery);
      });

      it('POSTGRESQL should handle using both dml and insert methods', async () => {
        const str = 'dml+mutation';
        const insertQuery = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' ("Key", "StringValue") VALUES ($1, $2)',
          params: {
            p1: 'k1001',
            p2: str,
          },
        };
        const selectQuery = {
          sql: 'SELECT * FROM ' + TABLE_NAME + ' WHERE "StringValue" = $1',
          params: {p1: str},
        };
        await handleDmlAndInsert(PG_DATABASE, insertQuery, selectQuery);
      });

      describe('dml returning', () => {
        const key = 'k1003';
        const str = 'abcd';
        const num = 11;

        const googleSqlInsertReturning = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' (Key, StringValue) VALUES (@key, @str) ' +
            'THEN RETURN *',
          params: {key, str},
        };

        const googleSqlUpdateReturning = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.NumberValue = @num WHERE t.KEY = @key ' +
            'THEN RETURN *',
          params: {num, key},
        };

        const googleSqlDeleteReturning = {
          sql:
            'DELETE FROM ' +
            TABLE_NAME +
            ' t WHERE t.KEY = @key ' +
            'THEN RETURN *',
          params: {key},
        };

        const googleSqlDelete = {
          sql: 'DELETE FROM ' + TABLE_NAME + ' t WHERE t.KEY = @key',
          params: {key, num},
        };

        const postgreSqlUpdateReturning = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' SET "NumberValue" = $1 WHERE "Key" = $2 ' +
            'RETURNING *',
          params: {p1: num, p2: key},
        };

        const postgreSqlDeleteReturning = {
          sql:
            'DELETE FROM ' + TABLE_NAME + ' WHERE "Key" = $1 ' + 'RETURNING *',
          params: {p1: key},
        };

        const postgreSqlInsertReturning = {
          sql:
            'INSERT INTO ' +
            TABLE_NAME +
            ' ("Key", "StringValue") VALUES ($1, $2) ' +
            'RETURNING *',
          params: {p1: key, p2: str},
        };

        const postgreSqlDelete = {
          sql: 'DELETE FROM ' + TABLE_NAME + ' WHERE "Key" = $1',
          params: {p1: key},
        };

        const rowCountRunUpdate = async (
          database,
          insertQuery,
          updateQuery,
          deletequery,
        ) => {
          await database.runTransactionAsync(async transaction => {
            const [insertRowCount] = await transaction!.runUpdate(insertQuery);
            assert.strictEqual(insertRowCount, 1);
            const [updateRowCount] = await transaction!.runUpdate(updateQuery);
            assert.strictEqual(updateRowCount, 1);
            const [deleteRowCount] = await transaction!.runUpdate(deletequery);
            assert.strictEqual(deleteRowCount, 1);
            await transaction!.commit();
          });
        };

        it('GOOGLE_STANDARD_SQL should return rowCount from runUpdate with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await rowCountRunUpdate(
            DATABASE,
            googleSqlInsertReturning,
            googleSqlUpdateReturning,
            googleSqlDeleteReturning,
          );
        });

        it('POSTGRESQL should return rowCount from runUpdate with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await rowCountRunUpdate(
            PG_DATABASE,
            postgreSqlInsertReturning,
            postgreSqlUpdateReturning,
            postgreSqlDeleteReturning,
          );
        });

        const assertRowsAndRowCount = data => {
          const rows = data[0];
          const stats = data[1];
          const rowCount = Math.floor(stats[stats.rowCount!] as number);
          assert.strictEqual(rowCount, 1);
          rows.forEach(row => {
            const json = row.toJSON();
            assert.strictEqual(json.Key, key);
            assert.strictEqual(json.StringValue, str);
          });
        };

        const rowCountRun = async (
          database,
          insertQuery,
          updateQuery,
          deletequery,
        ) => {
          await database.runTransactionAsync(async transaction => {
            const rows = await transaction!.run(insertQuery);
            assertRowsAndRowCount(rows);
            const updateRowsCount = await transaction!.run(updateQuery);
            assertRowsAndRowCount(updateRowsCount);
            const deleteRowsCount = await transaction!.run(deletequery);
            assertRowsAndRowCount(deleteRowsCount);
            await transaction!.commit();
          });
        };

        it('GOOGLE_STANDARD_SQL should return rowCount and rows from run with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await rowCountRun(
            DATABASE,
            googleSqlInsertReturning,
            googleSqlUpdateReturning,
            googleSqlDeleteReturning,
          );
        });

        it('POSTGRESQL should return rowCount and rows from run with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }

          await rowCountRun(
            PG_DATABASE,
            postgreSqlInsertReturning,
            postgreSqlUpdateReturning,
            postgreSqlDeleteReturning,
          );
        });

        const partitionedUpdate = async (database, query) => {
          try {
            await database.runPartitionedUpdate(query);
          } catch (err: any) {
            assert.match(
              err.details,
              /THEN RETURN is not supported in Partitioned DML\./,
            );
          }
        };

        it('GOOGLE_STANDARD_SQL should throw error from partitioned update with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await partitionedUpdate(DATABASE, googleSqlUpdateReturning);
        });

        it('POSTGRESQL should throw error from partitioned update with dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }

          await partitionedUpdate(PG_DATABASE, postgreSqlUpdateReturning);
        });

        const batchUpdate = async (
          database,
          insertquery,
          updateQuery,
          deleteQuery,
        ) => {
          const rowCounts = await database.runTransactionAsync(async txn => {
            const [rowCounts] = await txn.batchUpdate([
              insertquery,
              updateQuery,
              deleteQuery,
            ]);
            await txn.commit();
            return rowCounts;
          });
          assert.deepStrictEqual(rowCounts, [1, 1, 1]);
        };

        it('GOOGLE_STANDARD_SQL should run multiple statements from batch update with mix of dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await batchUpdate(
            DATABASE,
            googleSqlInsertReturning,
            googleSqlUpdateReturning,
            googleSqlDelete,
          );
        });

        it('POSTGRESQL should run multiple statements from batch update with mix of dml returning', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }

          await batchUpdate(
            PG_DATABASE,
            postgreSqlInsertReturning,
            postgreSqlUpdateReturning,
            postgreSqlDelete,
          );
        });
      });
    });

    describe('pdml', () => {
      const simplePdml = async (database, query) => {
        const [rowCount] = await database.runPartitionedUpdate(query);
        assert.strictEqual(rowCount, 1);
      };

      it('GOOGLE_STANDARD_SQL should execute a simple pdml statement', async () => {
        const query = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' t SET t.StringValue = @str WHERE t.Key = @key',
          params: {
            key: 'k1',
            str: 'abcde',
          },
        };
        await simplePdml(DATABASE, query);
      });

      it('POSTGRESQL should execute a simple pdml statement', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const query = {
          sql:
            'UPDATE ' + TABLE_NAME + ' SET "StringValue" = $1 WHERE "Key" = $2',
          params: {
            p1: 'abcde',
            p2: 'k1',
          },
        };
        await simplePdml(PG_DATABASE, query);
      });

      const longRunningPdml = async function (
        database,
        updateQuery,
        selectQuery,
      ) {
        const count = 10000;

        const tableData = new Array(count).fill(0).map((_, i) => {
          return {Key: `longpdml${i}`, StringValue: 'a'};
        });

        await database.runTransactionAsync(async transaction => {
          transaction.insert('TxnTable', tableData);
          await transaction.commit();
        });
        const [rowCount] = await database.runPartitionedUpdate(updateQuery);
        assert.strictEqual(rowCount, count);
        const [rows] = await database.run(selectQuery);
        assert.strictEqual(rows.length, count);
      };

      it('GOOGLE_STANDARD_SQL should execute a long running pdml statement', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const str = new Array(1000).fill('b').join('\n');
        const updateQuery = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            " t SET t.StringValue = @str WHERE t.StringValue = 'a'",
          params: {str},
        };
        const selectQuery = {
          sql: 'SELECT Key FROM ' + TABLE_NAME + ' WHERE StringValue = @str',
          params: {str},
        };
        await longRunningPdml(DATABASE, updateQuery, selectQuery);
      });

      it('POSTGRESQL should execute a long running pdml statement', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const str = new Array(1000).fill('b').join('\n');
        const updateQuery = {
          sql:
            'UPDATE ' +
            TABLE_NAME +
            ' SET "StringValue" = $1 WHERE "StringValue" = \'a\'',
          params: {p1: str},
        };
        const selectQuery = {
          sql: 'SELECT "Key" FROM ' + TABLE_NAME + ' WHERE "StringValue" = $1',
          params: {p1: str},
        };
        await longRunningPdml(PG_DATABASE, updateQuery, selectQuery);
      });
    });

    describe('batch dml', () => {
      const key = 'k1234';
      const str = 'abcd';
      const num = 11;

      const googleSqlInsert = {
        sql:
          'INSERT INTO ' +
          TABLE_NAME +
          ' (Key, StringValue) VALUES (@key, @str)',
        params: {key, str},
      };

      const postgreSqlInsert = {
        sql:
          'INSERT INTO ' +
          TABLE_NAME +
          ' ("Key", "StringValue") VALUES ($1, $2)',
        params: {p1: key, p2: str},
      };

      const googleSqlUpdate = {
        sql:
          'UPDATE ' +
          TABLE_NAME +
          ' t SET t.NumberValue = @num WHERE t.KEY = @key',
        params: {key, num},
      };

      const posgreSqlUpdate = {
        sql:
          'UPDATE ' + TABLE_NAME + ' SET "NumberValue" = $1 WHERE "Key" = $2',
        params: {p1: num, p2: key},
      };

      // this should fail since we're not binding params
      const googleSqlBorked = {
        sql:
          'UPDATE ' +
          TABLE_NAME +
          ' t SET t.NumberValue = @num WHERE t.KEY = @key',
      };

      const postgreSqlBorked = {
        sql:
          'UPDATE ' + TABLE_NAME + ' SET "NumberValue" = $1 WHERE "Key" = $2',
      };

      const executeSingleStatement = async (database, insert) => {
        const rowCounts = await database.runTransactionAsync(async txn => {
          const [rowCounts] = await txn.batchUpdate([insert]);
          await txn.rollback();
          return rowCounts;
        });

        assert.deepStrictEqual(rowCounts, [1]);
      };

      it('GOOGLE_STANDARD_SQL should execute a single statement', async () => {
        await executeSingleStatement(DATABASE, googleSqlInsert);
      });

      it('POSTGRESQL should execute a single statement', async () => {
        await executeSingleStatement(PG_DATABASE, postgreSqlInsert);
      });

      const noStatementError = async database => {
        const err = await database.runTransactionAsync(async txn => {
          let err;

          try {
            await txn.batchUpdate(null as unknown as []);
          } catch (e) {
            err = e;
          }

          txn.end();
          return err;
        });

        assert.strictEqual(
          err.message,
          'batchUpdate requires at least 1 DML statement.',
        );
        assert.strictEqual(err.code, 3);
      };

      it('GOOGLE_STANDARD_SQL should return an error when no statements are supplied', async () => {
        await noStatementError(DATABASE);
      });

      it('POSTGRESQL should return an error when no statements are supplied', async () => {
        await noStatementError(PG_DATABASE);
      });

      const multipleDependingStatements = async (database, insert, update) => {
        const rowCounts = await database.runTransactionAsync(async txn => {
          const [rowCounts] = await txn.batchUpdate([insert, update]);
          await txn.rollback();
          return rowCounts;
        });

        assert.deepStrictEqual(rowCounts, [1, 1]);
      };

      it('GOOGLE_STANDARD_SQL should run multiple statements that depend on each other', async () => {
        await multipleDependingStatements(
          DATABASE,
          googleSqlInsert,
          googleSqlUpdate,
        );
      });

      it('POSTGRESQL should run multiple statements that depend on each other', async () => {
        await multipleDependingStatements(
          PG_DATABASE,
          postgreSqlInsert,
          posgreSqlUpdate,
        );
      });

      const runAfterRunUpdate = async (database, insert, update) => {
        const rowCounts = await database.runTransactionAsync(async txn => {
          await txn.runUpdate(insert);
          const [rowCounts] = await txn.batchUpdate([update]);
          await txn.rollback();
          return rowCounts;
        });

        assert.deepStrictEqual(rowCounts, [1]);
      };

      it('GOOGLE_STANDARD_SQL should run after a runUpdate call', async () => {
        await runAfterRunUpdate(DATABASE, googleSqlInsert, googleSqlUpdate);
      });

      it('POSTGRESQL should run after a runUpdate call', async () => {
        await runAfterRunUpdate(PG_DATABASE, postgreSqlInsert, posgreSqlUpdate);
      });

      const runBeforeRunUpdate = async (database, insert, update) => {
        const rowCounts = await database.runTransactionAsync(async txn => {
          const [rowCounts] = await txn.batchUpdate([insert]);
          await txn.runUpdate(update);
          await txn.rollback();
          return rowCounts;
        });

        assert.deepStrictEqual(rowCounts, [1]);
      };

      it('GOOGLE_STANDARD_SQL should run before a runUpdate call', async () => {
        await runBeforeRunUpdate(DATABASE, googleSqlInsert, googleSqlUpdate);
      });

      it('POSTGRESQL should run before a runUpdate call', async () => {
        await runBeforeRunUpdate(
          PG_DATABASE,
          postgreSqlInsert,
          posgreSqlUpdate,
        );
      });

      const stopExecutingStatementsIfError = async (
        database,
        insert,
        borked,
        update,
      ) => {
        const err = await database.runTransactionAsync(async txn => {
          let err;

          try {
            await txn.batchUpdate([insert, borked, update]);
          } catch (e) {
            // Re-throw if the transaction was aborted to trigger a retry.
            if ((err as grpc.ServiceError)?.code === grpc.status.ABORTED) {
              throw e;
            }
            err = e;
          }

          await txn.rollback();
          return err;
        });

        assert.strictEqual(err.code, grpc.status.INVALID_ARGUMENT);
        assert.deepStrictEqual(err.rowCounts, [1]);
      };

      it('GOOGLE_STANDARD_SQL should stop executing statements if an error occurs', async () => {
        await stopExecutingStatementsIfError(
          DATABASE,
          googleSqlInsert,
          googleSqlBorked,
          googleSqlUpdate,
        );
      });

      it('POSTGRESQL should stop executing statements if an error occurs', async () => {
        await stopExecutingStatementsIfError(
          PG_DATABASE,
          postgreSqlInsert,
          postgreSqlBorked,
          posgreSqlUpdate,
        );
      });

      const ignoreAdditionalStatementErrors = async (
        database,
        insert,
        borked,
      ) => {
        const err = await database.runTransactionAsync(async txn => {
          let err;

          try {
            await txn.batchUpdate([insert, borked, borked]);
          } catch (e) {
            err = e;
          }

          await txn.rollback();
          return err;
        });

        assert.strictEqual(err.code, 3);
        assert.deepStrictEqual(err.rowCounts, [1]);
      };

      it('GOOGLE_STANDARD_SQL should ignore any additional statement errors', async () => {
        await ignoreAdditionalStatementErrors(
          DATABASE,
          googleSqlInsert,
          googleSqlBorked,
        );
      });

      it('POSTGRESQL should ignore any additional statement errors', async () => {
        await ignoreAdditionalStatementErrors(
          PG_DATABASE,
          postgreSqlInsert,
          postgreSqlBorked,
        );
      });
    });

    describe('read/write', () => {
      const mismatchedColumnError = async (database, table) => {
        await database.runTransactionAsync(transaction => {
          const rows = [
            {
              Key: 'k1',
              StringValue: 'hi',
            },
            {
              Key: 'k2',
              NumberValue: 4,
            },
          ];

          const expectedErrorMessage = [
            'Row at index 0 does not contain the correct number of columns.',
            `Missing columns: ${JSON.stringify(['NumberValue'])}`,
          ].join('\n\n');
          let caughtErrorMessage;
          try {
            transaction!.insert(table.name, rows);
          } catch (e) {
            caughtErrorMessage = (e as grpc.ServiceError).message;
          }
          assert.strictEqual(caughtErrorMessage, expectedErrorMessage);

          transaction!.end();
        });
      };

      it('GOOGLE_STANDARD_SQL should throw an error for mismatched columns', async () => {
        await mismatchedColumnError(DATABASE, googleSqlTable);
      });

      it('GOOGLE_STANDARD_SQL should use getTransaction for executing sql', async () => {
        const transaction = (
          await DATABASE.getTransaction({readLockMode: ReadLockMode.OPTIMISTIC})
        )[0];

        try {
          const [rows] = await transaction!.run('SELECT * FROM TxnTable');
          assert.strictEqual(rows.length, googleSqlRecords.length);
        } catch (err) {
          // flaky failures are acceptable here as long as the error is not due to a lock conflict
          if ((err as grpc.ServiceError).code === grpc.status.ABORTED) {
            assert.ok(err, 'Transaction is aborted');
          }
        } finally {
          transaction.end();
        }
      });

      it('POSTGRESQL should throw an error for mismatched columns', async () => {
        await mismatchedColumnError(PG_DATABASE, postgreSqlTable);
      });

      const commitTransaction = async (database, table) => {
        await database.runTransactionAsync(async transaction => {
          transaction!.insert(table.name, {
            Key: 'k5',
            StringValue: 'v5',
          });

          await transaction!.commit();
        });
      };

      it('GOOGLE_STANDARD_SQL should commit a transaction', async () => {
        await commitTransaction(DATABASE, googleSqlTable);
      });

      it('POSTGRESQL should commit a transaction', async () => {
        await commitTransaction(PG_DATABASE, postgreSqlTable);
      });

      describe('parallel transactions', async () => {
        async function insertAndCommitTransaction(database, sync, table, key) {
          await database.runTransactionAsync(async transaction => {
            // read from table TxnTable
            await transaction.run('SELECT * FROM TxnTable');

            // insert mutation
            transaction!.insert(table.name, {
              Key: key,
              StringValue: 'v6',
            });

            // increment the shared counter
            sync.count++;
            if (sync.count === sync.target) {
              // resolve the commit promise so that both the threads can continue to commit the transaction
              sync.resolveCommitPromise();
            }

            // wait till the commit promise is resolved
            await sync.promise;

            // commit transaction once both the transactions are ready to commit
            await transaction!.commit();
          });
        }

        it('should insert and commit transaction when running parallely', async () => {
          const promises: Promise<void>[] = [];
          let resolvePromise;
          const commitPromise = new Promise(
            resolve => (resolvePromise = resolve),
          );
          const sync = {
            target: 2, // both the transactions to be ready
            count: 0, // 0 transactions are ready so far
            promise: commitPromise, // the promise both the transactions wait at
            resolveCommitPromise: () => resolvePromise(), // the function to resolve the commit promise
          };
          // run the transactions in parallel
          promises.push(
            insertAndCommitTransaction(DATABASE, sync, googleSqlTable, 'k1100'),
          );
          promises.push(
            insertAndCommitTransaction(DATABASE, sync, googleSqlTable, 'k1101'),
          );

          // wait for both the transactions to complete their execution
          await Promise.all(promises);
        });
      });

      const rollbackTransaction = async database => {
        await database.runTransactionAsync(async transaction => {
          await transaction!.run('SELECT * FROM TxnTable');
          await transaction!.rollback();
        });
      };

      it('GOOGLE_STANDARD_SQL should rollback a transaction', async () => {
        await rollbackTransaction(DATABASE);
      });

      it('POSTGRESQL should rollback a transaction', async () => {
        await rollbackTransaction(PG_DATABASE);
      });

      describe('concurrent transactions', () => {
        const defaultRowValues = {
          Key: 'k0',
          NumberValue: 0,
        };

        beforeEach(async () => {
          await googleSqlTable.update(defaultRowValues);
          if (!IS_EMULATOR_ENABLED) {
            await postgreSqlTable.update(defaultRowValues);
          }
        });

        const readConcurrentTransaction = async (database, table) => {
          await database.runTransactionAsync(async transaction => {
            await incrementValue();
            const value = await getValue(transaction);
            assert.strictEqual(value, defaultRowValues.NumberValue + 1);
          });

          async function incrementValue() {
            await database.runTransactionAsync(async transaction => {
              const value = await getValue(transaction);
              transaction!.update(table.name, {
                Key: defaultRowValues.Key,
                NumberValue: value + 1,
              });

              await transaction!.commit();
            });
          }

          async function getValue(txn) {
            try {
              const [rows] = await txn.read(table.name, {
                keys: [defaultRowValues.Key],
                columns: ['NumberValue'],
              });
              const row = rows[0].toJSON();
              return row.NumberValue;
            } catch (err) {
              return err;
            }
          }
        };

        it('GOOGLE_STANDARD_SQL should handle concurrent transactions with read', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await readConcurrentTransaction(DATABASE, googleSqlTable);
        });

        it('POSTGRESQL should handle concurrent transactions with read', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          await readConcurrentTransaction(PG_DATABASE, postgreSqlTable);
        });

        const queryConcurrentTransaction = async (database, table, query) => {
          await database.runTransactionAsync(async transaction => {
            await incrementValue();
            const value = await getValue(transaction);
            assert.strictEqual(value, defaultRowValues.NumberValue + 1);
          });

          async function incrementValue() {
            await database.runTransactionAsync(async transaction => {
              const value = await getValue(transaction);
              transaction!.update(table.name, {
                Key: defaultRowValues.Key,
                NumberValue: value + 1,
              });

              await transaction!.commit();
            });
          }

          async function getValue(txn) {
            let rows;
            try {
              [rows] = await txn.run(query);
              const row = rows[0].toJSON();
              return row.NumberValue;
            } catch (err) {
              return err;
            }
          }
        };

        it('GOOGLE_STANDARD_SQL should handle concurrent transactions with query', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          const query = {
            sql: 'SELECT * FROM ' + googleSqlTable.name + ' WHERE Key = @key',
            params: {
              key: defaultRowValues.Key,
            },
          };
          await queryConcurrentTransaction(DATABASE, googleSqlTable, query);
        });

        it('POSTGRESQL should handle concurrent transactions with query', async function () {
          if (IS_EMULATOR_ENABLED) {
            this.skip();
          }
          const query = {
            sql: 'SELECT * FROM ' + postgreSqlTable.name + ' WHERE "Key" = $1',
            params: {
              p1: defaultRowValues.Key,
            },
          };
          await queryConcurrentTransaction(PG_DATABASE, postgreSqlTable, query);
        });
      });

      const retryAbortedTxnWhenReadingFails = async (
        database,
        table,
        query,
      ) => {
        const key = 'k888';
        let attempts = 0;
        const expectedRow = {
          Key: key,
          NumberValue: null,
          StringValue: 'abc',
        };
        const runOtherTransaction = async () => {
          await database.runTransactionAsync(async transaction => {
            await transaction.run(query);
            transaction.insert(table.name, expectedRow);
            await transaction.commit();
          });
        };

        await database.runTransactionAsync(async transaction => {
          attempts++;
          const [rows] = await transaction.run(query);
          if (attempts === 1) {
            await runOtherTransaction();
          }
          transaction.insert(table.name, {
            Key: generateName('key'),
            StringValue: generateName('val'),
          });
          if (attempts > 1 && rows.length > 0) {
            const lastRow = rows.pop().toJSON();
            assert.deepStrictEqual(lastRow, expectedRow);
          }
          await transaction.commit();
        });
        assert.ok(attempts >= 2);
      };

      it('GOOGLE_STANDARD_SQL should retry an aborted txn when reading fails', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const key = 'k888';
        const query = `SELECT * FROM ${googleSqlTable.name} WHERE Key = '${key}'`;

        await retryAbortedTxnWhenReadingFails(DATABASE, googleSqlTable, query);
      });

      it('POSTGRESQL should retry an aborted txn when reading fails', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const key = 'k888';
        const query = {
          sql: `SELECT * FROM ${postgreSqlTable.name} WHERE "Key" = $1`,
          params: {
            p1: key,
          },
        };

        await retryAbortedTxnWhenReadingFails(
          PG_DATABASE,
          postgreSqlTable,
          query,
        );
      });

      const retryAbortedTxnWhenCommitFails = async (database, table, query) => {
        const key = 'k9999';
        let attempts = 0;

        const expectedRow = {
          Key: key,
          NumberValue: null,
          StringValue: 'abc',
        };

        const runOtherTransaction = async () => {
          await database.runTransactionAsync(async transaction => {
            await transaction.run(query);
            transaction.insert(table.name, expectedRow);
            await transaction.commit();
          });
        };

        await database.runTransactionAsync(async transaction => {
          attempts++;
          const [rows] = await transaction.run(query);
          transaction.insert(table.name, {
            Key: generateName('key'),
            StringValue: generateName('val'),
          });
          if (attempts === 1) {
            await runOtherTransaction();
          }
          if (attempts > 1 && rows.length > 0) {
            const lastRow = rows.pop().toJSON();
            assert.deepStrictEqual(lastRow, expectedRow);
          }
          await transaction.commit();
        });
        assert.ok(attempts >= 2);
      };

      it('GOOGLE_STANDARD_SQL should retry an aborted txn when commit fails', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const key = 'k9999';
        const query = `SELECT * FROM ${googleSqlTable.name} WHERE Key = '${key}'`;
        await retryAbortedTxnWhenCommitFails(DATABASE, googleSqlTable, query);
      });

      it('POSTGRESQL should retry an aborted txn when commit fails', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const key = 'k9999';
        const query = {
          sql: `SELECT * FROM ${postgreSqlTable.name} WHERE "Key" = $1`,
          params: {
            p1: key,
          },
        };
        await retryAbortedTxnWhenCommitFails(
          PG_DATABASE,
          postgreSqlTable,
          query,
        );
      });

      const deadlineErrorInsteadOfAbort = async (database, table) => {
        const options = {
          timeout: 10,
        };

        const query = `SELECT * FROM ${table.name}`;
        const runOtherTransaction = async () => {
          await database.runTransactionAsync(async transaction => {
            await transaction.run(query);
            transaction.insert(table.name, {
              Key: generateName('key'),
            });
            await transaction.commit();
          });
        };
        await assert.rejects(
          async () => {
            await database.runTransactionAsync(options, async transaction => {
              await transaction.run(query);
              transaction.insert(table.name, {
                Key: generateName('key'),
              });
              await runOtherTransaction();
              await transaction.commit();
            });
          },
          (err: any) => {
            assert.strictEqual(err.code, 4);
            assert.ok(
              err.message.startsWith('Deadline for Transaction exceeded'),
            );
            return true;
          },
        );
      };

      it('GOOGLE_STANDARD_SQL should return a deadline error instead of aborted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await deadlineErrorInsteadOfAbort(DATABASE, googleSqlTable);
      });

      it('POSTGRESQL should return a deadline error instead of aborted', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        await deadlineErrorInsteadOfAbort(PG_DATABASE, postgreSqlTable);
      });

      it('GOOGLE_STANDARD_SQL should throw error when directedReadOptions at query level is set with read-write transactions', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const directedReadOptionsForRequest = {
          includeReplicas: {
            replicaSelections: [
              {
                type: protos.google.spanner.v1.DirectedReadOptions
                  .ReplicaSelection.Type.READ_WRITE,
              },
            ],
            autoFailoverDisabled: true,
          },
        };

        await DATABASE.runTransactionAsync(async transaction => {
          const expectedErrorMessage =
            'Directed reads can only be performed in a read-only transaction.';
          try {
            await transaction!.run({
              sql: `SELECT * FROM ${googleSqlTable.name}`,
              directedReadOptions: directedReadOptionsForRequest,
            });
          } catch (err: any) {
            assert.strictEqual(err?.details, expectedErrorMessage);
            await transaction!.end();
          }
        });
      });

      const handleReadAndMutation = async database => {
        await database.runTransactionAsync(async transaction => {
          try {
            await transaction.run('SELECT abc');
          } catch (err) {
            // add a sleep to let the explicit begin call finish
            await new Promise<void>(resolve => {
              setTimeout(() => {
                resolve();
              }, 4000);
            });
          }
          transaction!.insert('TxnTable', {
            Key: 'k1003',
            StringValue: 'mutation',
          });
          await transaction.commit();
        });
      };

      it('GOOGLE_STANDARD_SQL should handle commit retry based on multiplexed enable or not', async () => {
        await handleReadAndMutation(DATABASE);
      });
    });

    describe('batch transactions', () => {
      before(async () => {
        if (!IS_EMULATOR_ENABLED) {
          await DATABASE.runTransactionAsync(async transaction => {
            await transaction!.runUpdate({
              sql:
                'INSERT INTO ' +
                TABLE_NAME +
                ' (Key, StringValue) VALUES(@key, @str)',
              params: {
                key: 'k998',
                str: 'abc',
              },
            });
            await transaction!.commit();
          });
        }
      });

      it('should create and execute a query partition using callback', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const selectQuery = {
          sql: 'SELECT * FROM TxnTable where Key = @id',
          params: {
            id: 'k998',
          },
        };

        let row_count = 0;
        const [transaction] = await DATABASE.createBatchTransaction();
        const [partitions] =
          await transaction!.createQueryPartitions(selectQuery);
        assert.deepStrictEqual(partitions.length, 1);
        partitions.forEach(async partition => {
          const [results] = await transaction!.execute(partition);
          row_count += results.map(row => row.toJSON()).length;
          assert.deepStrictEqual(row_count, 1);
          await transaction!.close();
        });
      });

      it('should create and execute a read partition using callback', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const key = 'k998';
        const QUERY = {
          table: googleSqlTable.name,
          // Set databoostenabled to true for enabling serveless analytics.
          dataBoostEnabled: true,
          keys: [key],
          columns: ['Key'],
        };

        let read_row_count = 0;
        const [transaction] = await DATABASE.createBatchTransaction();
        const [partitions] = await transaction!.createReadPartitions(QUERY);
        assert.deepStrictEqual(partitions.length, 1);
        partitions.forEach(async partition => {
          const [results] = await transaction!.execute(partition);
          read_row_count += results.map(row => row.toJSON()).length;
          assert.deepStrictEqual(read_row_count, 1);
          await transaction!.close();
        });
      });

      it('should create and execute a query partition using await', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }

        const [transaction] = await DATABASE.createBatchTransaction();
        const selectQuery = {
          sql: 'SELECT * FROM TxnTable where Key = @id',
          params: {
            id: 'k998',
          },
        };

        let row_count = 0;
        try {
          const [queryPartitions]: CreateQueryPartitionsResponse =
            await transaction.createQueryPartitions(selectQuery);
          assert.deepStrictEqual(queryPartitions.length, 1);

          const promises = queryPartitions.map(async queryPartition => {
            const [results]: RunResponse =
              await transaction.execute(queryPartition);
            row_count += results.map(row => row.toJSON()).length;
            assert.strictEqual(row_count, 1);
          });

          await Promise.all(promises);
        } catch (err) {
          assert.ifError(err);
        }
      });

      it('should create and execute a read partition using await', async function () {
        if (IS_EMULATOR_ENABLED) {
          this.skip();
        }
        const [transaction] = await DATABASE.createBatchTransaction();
        const key = 'k998';
        const QUERY = {
          table: googleSqlTable.name,
          // Set databoostenabled to true for enabling serveless analytics.
          dataBoostEnabled: true,
          keys: [key],
          columns: ['Key'],
        };

        let read_row_count = 0;
        try {
          const [readPartitions]: CreateReadPartitionsResponse =
            await transaction.createReadPartitions(QUERY);
          assert.deepStrictEqual(readPartitions.length, 1);

          const promises = readPartitions.map(async readPartition => {
            const [results]: ReadResponse =
              await transaction.execute(readPartition);
            read_row_count += results.map(row => row.toJSON()).length;
            assert.strictEqual(read_row_count, 1);
          });

          await Promise.all(promises);
        } catch (err) {
          assert.ifError(err);
        }
      });
    });
  });
});

function shortUUID() {
  return uuid.v4().split('-').shift();
}

function generateName(resourceType) {
  return PREFIX + resourceType + '-' + shortUUID();
}

function onPromiseOperationComplete(data) {
  const length =
    data[data.length - 1] === undefined ? data.length - 1 : data.length;
  const operation = data[length - 2];
  return operation.promise();
}

async function deleteOldTestInstances() {
  const [instances] = await spanner.getInstances();
  const currentTimestampSeconds = Math.round(Date.now() / 1000);
  // Leave only instances that contain PREFIX in their name
  // and where created more that an hour ago.
  function isOld(timestampCreated: number) {
    return currentTimestampSeconds - timestampCreated >= 60 * 60 * 4;
  }
  const toDelete = instances.filter(
    instance =>
      instance.id.includes(PREFIX) &&
      isOld(Number(instance.metadata!.labels!.created)),
  );

  return deleteInstanceArray(toDelete);
}

function deleteInstanceArray(instanceArray) {
  /**
   * Delay to allow instance and its databases to fully clear.
   * Refer to "Soon afterwards"
   *  @see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance}
   */
  const delay = 500;
  const limit = pLimit(5);
  return Promise.all(
    instanceArray.map(instance =>
      limit(() => setTimeout(deleteInstance, delay, instance)),
    ),
  );
}
async function deleteInstance(instance: Instance) {
  const [backups] = await instance.getBackups();
  await Promise.all(backups.map(backup => backup.delete(GAX_OPTIONS)));
  return instance.delete(GAX_OPTIONS);
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
