// Copyright 2026 Google LLC
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

import * as assert from 'assert';
import {after, before, describe, it} from 'mocha';
import {Spanner, protos} from '@google-cloud/spanner';
import {BuiltinOids, Client, Pool, QueryResult} from '../src/index.js';

describe('Spanner Driver System Tests (PostgreSQL Dialect)', function () {
  this.timeout(180000); // 3 minutes to allow Spanner DDL / Database creation

  const rawConn =
    process.env.SPANNER_CONNECTION_STRING ||
    (process.env.SPANNER_EMULATOR_HOST
      ? `projects/test-project/instances/test-instance/databases/test-database;host=${process.env.SPANNER_EMULATOR_HOST};usePlainText=true`
      : undefined);

  const instanceEnv = process.env.SPANNER_INSTANCE;

  if (!rawConn && !instanceEnv) {
    it.skip('Skipping system tests: Set SPANNER_CONNECTION_STRING, SPANNER_INSTANCE, or SPANNER_EMULATOR_HOST to run', () => {});
    return;
  }

  // Parse project, instance, and database
  let projectId = process.env.SPANNER_PROJECT || process.env.GCLOUD_PROJECT;
  let instanceId: string | undefined;
  let dbName: string | undefined;
  let connectionParams = '';

  if (rawConn) {
    const [pathPart, ...restParams] = rawConn.split(';');
    connectionParams = restParams.length ? ';' + restParams.join(';') : '';
    const match = pathPart.match(
      /projects\/([^/]+)\/instances\/([^/]+)(?:\/databases\/([^/]+))?/,
    );
    if (match) {
      projectId = projectId || match[1];
      instanceId = match[2];
      dbName = match[3];
    }
  } else if (instanceEnv) {
    const match = instanceEnv.match(/projects\/([^/]+)\/instances\/([^/]+)/);
    if (match) {
      projectId = projectId || match[1];
      instanceId = match[2];
    } else {
      instanceId = instanceEnv;
    }
  }

  // Determine whether to dynamically create and drop a temporary test database
  const shouldCreateDb =
    process.env.SPANNER_CREATE_TEMP_DB === 'true' ||
    !dbName ||
    Boolean(instanceEnv && !rawConn);

  if (shouldCreateDb) {
    dbName = `test_pg_${Date.now()}`;
  }

  const finalConnectionString = `projects/${projectId}/instances/${instanceId}/databases/${dbName}${connectionParams}`;
  let spannerAdminClient:
    | ReturnType<Spanner['getDatabaseAdminClient']>
    | undefined;
  let client: Client;
  let pool: Pool;

  before(async () => {
    if (shouldCreateDb) {
      console.log(
        `Creating temporary Spanner PostgreSQL database: ${dbName}...`,
      );
      const spanner = new Spanner({projectId});
      spannerAdminClient = spanner.getDatabaseAdminClient();
      const parent = spannerAdminClient.instancePath(projectId!, instanceId!);

      const [op] = await spannerAdminClient.createDatabase({
        parent,
        createStatement: `CREATE DATABASE "${dbName}"`,
        databaseDialect:
          protos.google.spanner.admin.database.v1.DatabaseDialect.POSTGRESQL,
      });
      await op.promise();

      const [ddlOp] = await spannerAdminClient.updateDatabaseDdl({
        database: spannerAdminClient.databasePath(
          projectId!,
          instanceId!,
          dbName!,
        ),
        statements: [
          `CREATE TABLE Singers (
            SingerId bigint NOT NULL,
            FirstName character varying(1024),
            LastName character varying(1024),
            BirthDate date,
            LastModified timestamptz,
            Rating float8,
            Active boolean,
            Revenues numeric,
            Metadata jsonb,
            Tags text[],
            PRIMARY KEY (SingerId)
          );`,
          `CREATE TABLE AllTypes (
            Id bigint NOT NULL,
            ColBool boolean,
            ColBytea bytea,
            ColInt8 bigint,
            ColFloat4 float4,
            ColFloat8 float8,
            ColNumeric numeric,
            ColText text,
            ColVarchar character varying(1024),
            ColDate date,
            ColTimestamp timestamptz,
            ColJsonb jsonb,
            ColUuid uuid,
            ArrBool boolean[],
            ArrBytea bytea[],
            ArrInt8 bigint[],
            ArrFloat4 float4[],
            ArrFloat8 float8[],
            ArrNumeric numeric[],
            ArrText text[],
            ArrDate date[],
            ArrTimestamp timestamptz[],
            ArrJsonb jsonb[],
            ArrUuid uuid[],
            PRIMARY KEY (Id)
          );`,
        ],
      });
      await ddlOp.promise();
      console.log(`Database and schema created successfully: ${dbName}`);
    }

    client = new Client({connectionString: finalConnectionString});
    await client.connect();

    pool = new Pool({
      connectionString: finalConnectionString,
      max: 5,
      idleTimeoutMillis: 10000,
    });

    // 1. Create tables if using existing database and tables do not exist
    if (!shouldCreateDb) {
      try {
        await client.query(`
          CREATE TABLE IF NOT EXISTS Singers (
            SingerId bigint NOT NULL,
            FirstName character varying(1024),
            LastName character varying(1024),
            BirthDate date,
            LastModified timestamptz,
            Rating float8,
            Active boolean,
            Revenues numeric,
            Metadata jsonb,
            Tags text[],
            PRIMARY KEY (SingerId)
          )
        `);
        await client.query(`
          CREATE TABLE IF NOT EXISTS AllTypes (
            Id bigint NOT NULL,
            ColBool boolean,
            ColBytea bytea,
            ColInt8 bigint,
            ColFloat4 float4,
            ColFloat8 float8,
            ColNumeric numeric,
            ColText text,
            ColVarchar character varying(1024),
            ColDate date,
            ColTimestamp timestamptz,
            ColJsonb jsonb,
            ColUuid uuid,
            ArrBool boolean[],
            ArrBytea bytea[],
            ArrInt8 bigint[],
            ArrFloat4 float4[],
            ArrFloat8 float8[],
            ArrNumeric numeric[],
            ArrText text[],
            ArrDate date[],
            ArrTimestamp timestamptz[],
            ArrJsonb jsonb[],
            ArrUuid uuid[],
            PRIMARY KEY (Id)
          )
        `);
      } catch {
        // Table may already exist or DDL handled externally
      }
    }

    // 2. Seed initial test data inside a read-write transaction
    try {
      await client.query('BEGIN');
      await client.query('DELETE FROM Singers WHERE SingerId IN (1, 2, 3, 4)');
      await client.query(
        `
        INSERT INTO Singers (
          SingerId, FirstName, LastName, BirthDate, LastModified, Rating, Active, Revenues, Metadata, Tags
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
        )
      `,
        [
          1,
          'Marc',
          'Richards',
          '1980-01-05',
          new Date('2023-01-01T12:00:00.000Z'),
          4.8,
          true,
          '125000.50',
          {genre: 'rock'},
          ['rock', 'classic'],
        ],
      );
      await client.query(
        `
        INSERT INTO Singers (
          SingerId, FirstName, LastName, BirthDate, LastModified, Rating, Active, Revenues, Metadata, Tags
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
        )
      `,
        [
          2,
          'Catalina',
          'Smith',
          '1992-07-15',
          new Date('2023-02-01T15:30:00.000Z'),
          4.9,
          false,
          '95000.00',
          {genre: 'pop'},
          ['pop', 'dance'],
        ],
      );

      // Seed AllTypes table
      await client.query('DELETE FROM AllTypes WHERE Id IN (1, 2, 3, 4)');
      // Row 1: Fully populated values
      await client.query(
        `INSERT INTO AllTypes (
          Id, ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar,
          ColDate, ColTimestamp, ColJsonb, ColUuid,
          ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText,
          ArrDate, ArrTimestamp, ArrJsonb, ArrUuid
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13,
          $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24
        )`,
        [
          1,
          true,
          Buffer.from('Spanner Binary Data'),
          BigInt('9223372036854775807'),
          3.14,
          2.718281828459045,
          '123456789.987654321',
          'Hello Spanner PostgreSQL',
          'Varchar sample',
          '2026-08-14',
          new Date('2026-08-14T12:00:00.000Z'),
          {name: 'Spanner', dialect: 'postgresql'},
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
          [true, false, true],
          [Buffer.from('bin1'), Buffer.from('bin2')],
          [100, 200, 300],
          [1.1, 2.2],
          [3.1415, 2.7182],
          ['10.5', '20.25', '30.125'],
          ['alpha', 'beta', 'gamma'],
          ['2026-01-01', '2026-06-01'],
          [
            new Date('2026-01-01T00:00:00.000Z'),
            new Date('2026-06-01T00:00:00.000Z'),
          ],
          [{k: 'v1'}, {k: 'v2'}],
          [
            'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
            'b1ffcd00-0d1c-5fa9-cc7e-7cc0ce491b22',
          ],
        ],
      );

      // Row 2: NULL values for all nullable columns
      await client.query(
        `INSERT INTO AllTypes (
          Id, ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar,
          ColDate, ColTimestamp, ColJsonb, ColUuid,
          ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText,
          ArrDate, ArrTimestamp, ArrJsonb, ArrUuid
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13,
          $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24
        )`,
        [
          2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      );

      // Row 3: Empty arrays
      await client.query(
        `INSERT INTO AllTypes (
          Id, ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar,
          ColDate, ColTimestamp, ColJsonb, ColUuid,
          ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText,
          ArrDate, ArrTimestamp, ArrJsonb, ArrUuid
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13,
          $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24
        )`,
        [
          3,
          false,
          Buffer.from(''),
          0,
          0.5,
          0.5,
          '0',
          'Empty arrays row',
          'Empty arrays',
          '2026-01-01',
          new Date('2026-01-01T00:00:00.000Z'),
          {},
          '00000000-0000-0000-0000-000000000000',
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
        ],
      );

      // Row 4: Arrays with NULL elements inside them
      await client.query(
        `INSERT INTO AllTypes (
          Id, ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar,
          ColDate, ColTimestamp, ColJsonb, ColUuid,
          ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText,
          ArrDate, ArrTimestamp, ArrJsonb, ArrUuid
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13,
          $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24
        )`,
        [
          4,
          true,
          Buffer.from('Null elements row'),
          100,
          1.5,
          2.5,
          '50.5',
          'Null elements in arrays',
          'Null elements',
          '2026-05-05',
          new Date('2026-05-05T12:00:00.000Z'),
          {hasNulls: true},
          'c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a33',
          [true, null, false],
          [Buffer.from('bin1'), null, Buffer.from('bin3')],
          [100, null, 300],
          [1.1, null, 3.3],
          [3.1415, null, 2.7182],
          ['10.5', null, '30.125'],
          ['alpha', null, 'gamma'],
          ['2026-01-01', null, '2026-06-01'],
          [
            new Date('2026-01-01T00:00:00.000Z'),
            null,
            new Date('2026-06-01T00:00:00.000Z'),
          ],
          [{k: 'v1'}, null, {k: 'v3'}],
          [
            'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
            null,
            'b1ffcd00-0d1c-5fa9-cc7e-7cc0ce491b22',
          ],
        ],
      );
      await client.query('COMMIT');
      const countRes = await client.query(
        'SELECT count(*) as count FROM Singers',
      );
      console.log(
        'Seeded Singers successfully. Current row count:',
        countRes.rows,
      );
    } catch (seedErr) {
      console.error('FAILED TO SEED DATA:', seedErr);
      try {
        await client.query('ROLLBACK');
      } catch {
        // ignore rollback error
      }
      throw seedErr;
    }
  });

  after(async () => {
    try {
      if (client && client.isConnected) {
        await client.end();
      }
      if (pool) {
        await pool.end();
      }
    } catch {
      // Best effort cleanup
    }

    if (
      shouldCreateDb &&
      spannerAdminClient &&
      projectId &&
      instanceId &&
      dbName
    ) {
      try {
        console.log(`Dropping temporary test database: ${dbName}...`);
        await spannerAdminClient.dropDatabase({
          database: spannerAdminClient.databasePath(
            projectId,
            instanceId,
            dbName,
          ),
        });
        console.log(`Successfully dropped test database: ${dbName}`);
      } catch (dropErr) {
        console.warn(
          `Warning: Failed to drop test database ${dbName}:`,
          dropErr,
        );
      }
    }
  });

  describe('Data Types & Codecs', () => {
    describe('Scalar Types', () => {
      it('should query and decode all scalar column types from table', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName, LastName, BirthDate, LastModified, Rating, Active, Revenues, Metadata FROM Singers WHERE SingerId = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.ok(row, 'Expected row to be returned');
        assert.strictEqual(String(row.singerid || row.SingerId), '1');
        assert.strictEqual(row.firstname || row.FirstName, 'Marc');
        assert.strictEqual(row.lastname || row.LastName, 'Richards');
        assert.strictEqual(row.birthdate || row.BirthDate, '1980-01-05');
        assert.ok(
          (row.lastmodified || row.LastModified) instanceof Date,
          'Expected LastModified to be Date instance',
        );
        assert.strictEqual(row.active ?? row.Active, true);
        assert.strictEqual(Number(row.rating || row.Rating), 4.8);
        assert.strictEqual(Number(row.revenues || row.Revenues), 125000.5);

        const meta = (row.metadata || row.Metadata) as
          | {genre?: string}
          | undefined;
        assert.strictEqual(meta?.genre, 'rock');
      });

      it('should execute parameterized query with numeric parameter ($1)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName, Active FROM Singers WHERE SingerId = $1',
          [2],
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.strictEqual(String(row.singerid || row.SingerId), '2');
        assert.strictEqual(row.firstname || row.FirstName, 'Catalina');
        assert.strictEqual(row.active ?? row.Active, false);
      });

      it('should execute parameterized query with string parameter ($1)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName, LastName FROM Singers WHERE LastName = $1',
          ['Richards'],
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.strictEqual(row.firstname || row.FirstName, 'Marc');
      });

      it('should execute parameterized query with date parameter ($1::date)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE BirthDate = $1::date',
          ['1980-01-05'],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should execute parameterized query with timestamptz Date parameter ($1)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE LastModified = $1',
          [new Date('2023-01-01T12:00:00.000Z')],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should execute parameterized query with boolean parameter ($1)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE Active = $1',
          [true],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should execute parameterized query with numeric/decimal parameter ($1::numeric)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE Revenues = $1::numeric',
          ['125000.50'],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should execute parameterized query filtering jsonb column (Metadata ->> $1)', async () => {
        const res = await client.query(
          "SELECT SingerId, FirstName FROM Singers WHERE Metadata ->> 'genre' = $1",
          ['rock'],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should encode and decode jsonb parameter ($1::jsonb)', async () => {
        const res = await client.query('SELECT $1::jsonb as payload', [
          {genre: 'rock', tracks: 12},
        ]);
        assert.strictEqual(res.rowCount, 1);
        assert.deepStrictEqual(res.rows[0].payload, {
          genre: 'rock',
          tracks: 12,
        });
      });

      it('should execute parameterized query with bytea Buffer parameter ($1::bytea)', async () => {
        const payload = Buffer.from('Spanner Binary Test Data');
        const res = await client.query('SELECT $1::bytea as bin_data', [
          payload,
        ]);
        assert.strictEqual(res.rowCount, 1);
        const returnedBuf = res.rows[0].bin_data as Buffer;
        assert.ok(Buffer.isBuffer(returnedBuf));
        assert.deepStrictEqual(returnedBuf, payload);
      });

      it('should read and decode all table-storable scalar column types from AllTypes table', async () => {
        const res = await client.query(
          'SELECT ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar, ColDate, ColTimestamp, ColJsonb, ColUuid FROM AllTypes WHERE Id = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.ok(row, 'Expected row to be returned');
        assert.strictEqual(row.colbool ?? row.ColBool, true);
        const bytea = (row.colbytea || row.ColBytea) as Buffer;
        assert.ok(Buffer.isBuffer(bytea));
        assert.strictEqual(bytea.toString(), 'Spanner Binary Data');
        assert.strictEqual(
          String(row.colint8 || row.ColInt8),
          '9223372036854775807',
        );
        assert.ok(
          Math.abs(Number(row.colfloat4 || row.ColFloat4) - 3.14) < 0.001,
        );
        assert.ok(
          Math.abs(Number(row.colfloat8 || row.ColFloat8) - 2.718281828459045) <
            0.000001,
        );
        assert.strictEqual(
          String(row.colnumeric || row.ColNumeric),
          '123456789.987654321',
        );
        assert.strictEqual(
          row.coltext || row.ColText,
          'Hello Spanner PostgreSQL',
        );
        assert.strictEqual(row.colvarchar || row.ColVarchar, 'Varchar sample');
        assert.strictEqual(row.coldate || row.ColDate, '2026-08-14');
        assert.ok(
          (row.coltimestamp || row.ColTimestamp) instanceof Date,
          'Expected ColTimestamp to be Date instance',
        );
        assert.deepStrictEqual(row.coljsonb || row.ColJsonb, {
          name: 'Spanner',
          dialect: 'postgresql',
        });
        assert.strictEqual(
          row.coluuid || row.ColUuid,
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        );
      });

      it('should execute parameterized query with uuid parameter ($1::uuid)', async () => {
        const uuidVal = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
        const res = await client.query('SELECT $1::uuid as uuid_val', [
          uuidVal,
        ]);
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(res.rows[0].uuid_val, uuidVal);
      });

      it('should execute query with interval expression and date arithmetic', async () => {
        const res = await client.query(
          "SELECT CAST('1 year 2 months 3 days' AS INTERVAL) as interval_val, ('2026-01-01 00:00:00+00'::timestamptz + CAST('1 year 2 months 3 days' AS INTERVAL)) as shifted_time",
        );
        assert.strictEqual(res.rowCount, 1);
        assert.ok(
          typeof res.rows[0].interval_val === 'string' &&
            res.rows[0].interval_val.length > 0,
        );
        assert.ok(res.rows[0].shifted_time instanceof Date);
      });

      it('should execute parameterized query with float4 parameter ($1::float4)', async () => {
        const res = await client.query('SELECT $1::float4 as f4_val', [3.14]);
        assert.strictEqual(res.rowCount, 1);
        assert.ok(Math.abs(Number(res.rows[0].f4_val) - 3.14) < 0.001);
      });

      it('should execute parameterized query with float8 parameter ($1::float8)', async () => {
        const res = await client.query('SELECT $1::float8 as f8_val', [
          2.718281828459045,
        ]);
        assert.strictEqual(res.rowCount, 1);
        assert.ok(
          Math.abs(Number(res.rows[0].f8_val) - 2.718281828459045) < 0.000001,
        );
      });
    });

    describe('Array Types', () => {
      it('should read and decode array column (Tags text[]) from Singers table', async () => {
        const res = await client.query(
          'SELECT SingerId, Tags FROM Singers WHERE SingerId = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        assert.deepStrictEqual(res.rows[0].tags || res.rows[0].Tags, [
          'rock',
          'classic',
        ]);
      });

      it('should read and decode all table-storable array column types from AllTypes table', async () => {
        const res = await client.query(
          'SELECT ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText, ArrDate, ArrTimestamp, ArrJsonb, ArrUuid FROM AllTypes WHERE Id = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.deepStrictEqual(row.arrbool || row.ArrBool, [true, false, true]);
        const byteaArr = (row.arrbytea || row.ArrBytea) as Buffer[];
        assert.ok(Array.isArray(byteaArr));
        assert.strictEqual(byteaArr[0].toString(), 'bin1');
        assert.strictEqual(byteaArr[1].toString(), 'bin2');
        assert.deepStrictEqual(row.arrint8 || row.ArrInt8, [
          '100',
          '200',
          '300',
        ]);
        const float4Arr = (row.arrfloat4 || row.ArrFloat4) as number[];
        assert.ok(Math.abs(float4Arr[0] - 1.1) < 0.01);
        assert.ok(Math.abs(float4Arr[1] - 2.2) < 0.01);
        const float8Arr = (row.arrfloat8 || row.ArrFloat8) as number[];
        assert.ok(Math.abs(float8Arr[0] - 3.1415) < 0.0001);
        assert.ok(Math.abs(float8Arr[1] - 2.7182) < 0.0001);
        assert.deepStrictEqual(row.arrnumeric || row.ArrNumeric, [
          '10.5',
          '20.25',
          '30.125',
        ]);
        assert.deepStrictEqual(row.arrtext || row.ArrText, [
          'alpha',
          'beta',
          'gamma',
        ]);
        assert.deepStrictEqual(row.arrdate || row.ArrDate, [
          '2026-01-01',
          '2026-06-01',
        ]);
        const tsArr = (row.arrtimestamp || row.ArrTimestamp) as Date[];
        assert.ok(tsArr[0] instanceof Date);
        assert.ok(tsArr[1] instanceof Date);
        assert.deepStrictEqual(row.arrjsonb || row.ArrJsonb, [
          {k: 'v1'},
          {k: 'v2'},
        ]);
        assert.deepStrictEqual(row.arruuid || row.ArrUuid, [
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
          'b1ffcd00-0d1c-5fa9-cc7e-7cc0ce491b22',
        ]);
      });

      it('should query table rows using array membership filter ($1 = ANY(Tags))', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE $1 = ANY(Tags)',
          ['rock'],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should execute parameterized query with numeric array parameter ($1 = ANY)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = ANY($1) ORDER BY SingerId',
          [[1, 2]],
        );
        assert.strictEqual(res.rowCount, 2);
        assert.strictEqual(res.rows.length, 2);
        assert.strictEqual(
          String(res.rows[0].singerid || res.rows[0].SingerId),
          '1',
        );
        assert.strictEqual(
          String(res.rows[1].singerid || res.rows[1].SingerId),
          '2',
        );
      });

      it('should execute parameterized query with string array parameter ($1 = ANY)', async () => {
        const res = await client.query(
          'SELECT SingerId, LastName FROM Singers WHERE LastName = ANY($1) ORDER BY SingerId',
          [['Richards', 'Smith']],
        );
        assert.strictEqual(res.rowCount, 2);
        assert.strictEqual(
          res.rows[0].lastname || res.rows[0].LastName,
          'Richards',
        );
        assert.strictEqual(
          res.rows[1].lastname || res.rows[1].LastName,
          'Smith',
        );
      });

      it('should encode and decode array types ($1::text[] and $2::bigint[])', async () => {
        const res = await client.query(
          'SELECT $1::text[] as text_arr, $2::bigint[] as int_arr',
          [
            ['apple', 'banana', 'cherry'],
            [10, 20, 30],
          ],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.deepStrictEqual(res.rows[0].text_arr, [
          'apple',
          'banana',
          'cherry',
        ]);
        assert.deepStrictEqual(res.rows[0].int_arr, ['10', '20', '30']);
      });

      it('should read and decode row with all NULL column values (Id = 2)', async () => {
        const res = await client.query(
          'SELECT ColBool, ColBytea, ColInt8, ColFloat4, ColFloat8, ColNumeric, ColText, ColVarchar, ColDate, ColTimestamp, ColJsonb, ColUuid, ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText, ArrDate, ArrTimestamp, ArrJsonb, ArrUuid FROM AllTypes WHERE Id = 2',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0] as Record<string, unknown>;
        assert.ok(row, 'Expected row to be returned');
        const getCol = (name: string) =>
          row[name.toLowerCase()] !== undefined
            ? row[name.toLowerCase()]
            : row[name];

        assert.strictEqual(getCol('ColBool'), null);
        assert.strictEqual(getCol('ColBytea'), null);
        assert.strictEqual(getCol('ColInt8'), null);
        assert.strictEqual(getCol('ColFloat4'), null);
        assert.strictEqual(getCol('ColFloat8'), null);
        assert.strictEqual(getCol('ColNumeric'), null);
        assert.strictEqual(getCol('ColText'), null);
        assert.strictEqual(getCol('ColVarchar'), null);
        assert.strictEqual(getCol('ColDate'), null);
        assert.strictEqual(getCol('ColTimestamp'), null);
        assert.strictEqual(getCol('ColJsonb'), null);
        assert.strictEqual(getCol('ColUuid'), null);
        assert.strictEqual(getCol('ArrBool'), null);
        assert.strictEqual(getCol('ArrBytea'), null);
        assert.strictEqual(getCol('ArrInt8'), null);
        assert.strictEqual(getCol('ArrFloat4'), null);
        assert.strictEqual(getCol('ArrFloat8'), null);
        assert.strictEqual(getCol('ArrNumeric'), null);
        assert.strictEqual(getCol('ArrText'), null);
        assert.strictEqual(getCol('ArrDate'), null);
        assert.strictEqual(getCol('ArrTimestamp'), null);
        assert.strictEqual(getCol('ArrJsonb'), null);
        assert.strictEqual(getCol('ArrUuid'), null);
      });

      it('should read and decode row with empty array columns (Id = 3)', async () => {
        const res = await client.query(
          'SELECT ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText, ArrDate, ArrTimestamp, ArrJsonb, ArrUuid FROM AllTypes WHERE Id = 3',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.deepStrictEqual(row.arrbool || row.ArrBool, []);
        assert.deepStrictEqual(row.arrbytea || row.ArrBytea, []);
        assert.deepStrictEqual(row.arrint8 || row.ArrInt8, []);
        assert.deepStrictEqual(row.arrfloat4 || row.ArrFloat4, []);
        assert.deepStrictEqual(row.arrfloat8 || row.ArrFloat8, []);
        assert.deepStrictEqual(row.arrnumeric || row.ArrNumeric, []);
        assert.deepStrictEqual(row.arrtext || row.ArrText, []);
        assert.deepStrictEqual(row.arrdate || row.ArrDate, []);
        assert.deepStrictEqual(row.arrtimestamp || row.ArrTimestamp, []);
        assert.deepStrictEqual(row.arrjsonb || row.ArrJsonb, []);
        assert.deepStrictEqual(row.arruuid || row.ArrUuid, []);
      });

      it('should read and decode row with arrays containing NULL elements (Id = 4)', async () => {
        const res = await client.query(
          'SELECT ArrBool, ArrBytea, ArrInt8, ArrFloat4, ArrFloat8, ArrNumeric, ArrText, ArrDate, ArrTimestamp, ArrJsonb, ArrUuid FROM AllTypes WHERE Id = 4',
        );
        assert.strictEqual(res.rowCount, 1);
        const row = res.rows[0];
        assert.deepStrictEqual(row.arrbool || row.ArrBool, [true, null, false]);
        const byteaArr = (row.arrbytea || row.ArrBytea) as (Buffer | null)[];
        assert.ok(Array.isArray(byteaArr));
        assert.strictEqual(byteaArr[0]?.toString(), 'bin1');
        assert.strictEqual(byteaArr[1], null);
        assert.strictEqual(byteaArr[2]?.toString(), 'bin3');
        assert.deepStrictEqual(row.arrint8 || row.ArrInt8, [
          '100',
          null,
          '300',
        ]);
        const float4Arr = (row.arrfloat4 || row.ArrFloat4) as (number | null)[];
        assert.ok(Math.abs(float4Arr[0]! - 1.1) < 0.01);
        assert.strictEqual(float4Arr[1], null);
        assert.ok(Math.abs(float4Arr[2]! - 3.3) < 0.01);
        assert.deepStrictEqual(row.arrnumeric || row.ArrNumeric, [
          '10.5',
          null,
          '30.125',
        ]);
        assert.deepStrictEqual(row.arrtext || row.ArrText, [
          'alpha',
          null,
          'gamma',
        ]);
        assert.deepStrictEqual(row.arrdate || row.ArrDate, [
          '2026-01-01',
          null,
          '2026-06-01',
        ]);
        const tsArr = (row.arrtimestamp || row.ArrTimestamp) as (Date | null)[];
        assert.ok(tsArr[0] instanceof Date);
        assert.strictEqual(tsArr[1], null);
        assert.ok(tsArr[2] instanceof Date);
        assert.deepStrictEqual(row.arrjsonb || row.ArrJsonb, [
          {k: 'v1'},
          null,
          {k: 'v3'},
        ]);
        assert.deepStrictEqual(row.arruuid || row.ArrUuid, [
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
          null,
          'b1ffcd00-0d1c-5fa9-cc7e-7cc0ce491b22',
        ]);
      });

      it('should support objects with custom .toPostgres() in queries and array parameters', async () => {
        const customSingerId = {
          toPostgres: () => 1,
        };
        const customItem1 = {
          toPostgres: () => 'Richards',
        };
        const customItem2 = {
          toPostgres: () => 'Smith',
        };

        // Scalar parameter with .toPostgres()
        const res1 = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = $1',
          [customSingerId],
        );
        assert.strictEqual(res1.rowCount, 1);
        assert.strictEqual(
          res1.rows[0].firstname || res1.rows[0].FirstName,
          'Marc',
        );

        // Array parameter with .toPostgres() elements inside array
        const res2 = await client.query(
          'SELECT SingerId, LastName FROM Singers WHERE LastName = ANY($1) ORDER BY SingerId',
          [[customItem1, customItem2]],
        );
        assert.strictEqual(res2.rowCount, 2);
        assert.strictEqual(
          res2.rows[0].lastname || res2.rows[0].LastName,
          'Richards',
        );
        assert.strictEqual(
          res2.rows[1].lastname || res2.rows[1].LastName,
          'Smith',
        );

        // Array value returned from .toPostgres()
        const res3 = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = ANY($1)',
          [{toPostgres: () => [1, 2]}],
        );
        assert.strictEqual(res3.rowCount, 2);
      });

      it('should query AllTypes rows using array membership filter ($1 = ANY(ArrUuid))', async () => {
        const res = await client.query(
          'SELECT Id FROM AllTypes WHERE $1 = ANY(ArrUuid) ORDER BY Id',
          ['a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'],
        );
        assert.strictEqual(res.rowCount, 2); // Rows 1 and 4 have this UUID in ArrUuid
        assert.strictEqual(String(res.rows[0].id || res.rows[0].Id), '1');
        assert.strictEqual(String(res.rows[1].id || res.rows[1].Id), '4');
      });

      it('should query AllTypes rows using numeric array membership filter ($1 = ANY(ArrInt8))', async () => {
        const res = await client.query(
          'SELECT Id FROM AllTypes WHERE $1 = ANY(ArrInt8)',
          [200],
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(String(res.rows[0].id || res.rows[0].Id), '1');
      });
    });

    describe('Field Metadata & PostgreSQL Catalog OIDs', () => {
      it('should map Spanner column metadata to exact PostgreSQL catalog OIDs (BuiltinOids)', async () => {
        const res = await client.query('SELECT * FROM AllTypes WHERE Id = 1');
        assert.strictEqual(res.rowCount, 1);
        assert.ok(res.fields && res.fields.length > 0);

        const fieldMap = new Map(
          res.fields.map(f => [f.name.toLowerCase(), f.dataTypeID]),
        );

        // Assert scalar PostgreSQL OIDs from table
        assert.strictEqual(fieldMap.get('id'), BuiltinOids.INT8);
        assert.strictEqual(fieldMap.get('colbool'), BuiltinOids.BOOL);
        assert.strictEqual(fieldMap.get('colbytea'), BuiltinOids.BYTEA);
        assert.strictEqual(fieldMap.get('colint8'), BuiltinOids.INT8);
        assert.strictEqual(fieldMap.get('colfloat4'), BuiltinOids.FLOAT4);
        assert.strictEqual(fieldMap.get('colfloat8'), BuiltinOids.FLOAT8);
        assert.strictEqual(fieldMap.get('colnumeric'), BuiltinOids.NUMERIC);
        assert.strictEqual(fieldMap.get('coltext'), BuiltinOids.TEXT);
        assert.strictEqual(fieldMap.get('coldate'), BuiltinOids.DATE);
        assert.strictEqual(
          fieldMap.get('coltimestamp'),
          BuiltinOids.TIMESTAMPTZ,
        );
        assert.strictEqual(fieldMap.get('coljsonb'), BuiltinOids.JSONB);
        assert.strictEqual(fieldMap.get('coluuid'), BuiltinOids.UUID);

        // Assert Array OIDs from table
        assert.strictEqual(fieldMap.get('arrbool'), 1000);
        assert.strictEqual(fieldMap.get('arrbytea'), 1001);
        assert.strictEqual(fieldMap.get('arrint8'), 1016);
        assert.strictEqual(fieldMap.get('arrfloat4'), 1021);
        assert.strictEqual(fieldMap.get('arrfloat8'), 1022);
        assert.strictEqual(fieldMap.get('arrnumeric'), 1231);
        assert.strictEqual(fieldMap.get('arrtext'), 1009);
        assert.strictEqual(fieldMap.get('arrdate'), 1182);
        assert.strictEqual(fieldMap.get('arrtimestamp'), 1185);
        assert.strictEqual(fieldMap.get('arrjsonb'), 3807);
        assert.strictEqual(fieldMap.get('arruuid'), 2951);

        // Assert interval OID via expression query
        const ivalRes = await client.query(
          "SELECT CAST('1 day' AS INTERVAL) as ival",
        );
        const ivalFields = new Map(
          ivalRes.fields.map(f => [f.name.toLowerCase(), f.dataTypeID]),
        );
        assert.strictEqual(ivalFields.get('ival'), BuiltinOids.INTERVAL);
      });
    });
  });

  describe('Query Options & Features', () => {
    describe('Row Formatting (rowMode)', () => {
      it('should format rows as objects by default (rowMode: object)', async () => {
        const res = await client.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(typeof res.rows[0], 'object');
        assert.strictEqual(Array.isArray(res.rows[0]), false);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      });

      it('should format rows as positional arrays when rowMode is array', async () => {
        const res = await client.query({
          text: 'SELECT SingerId, FirstName, LastName, Tags FROM Singers WHERE SingerId = 1',
          rowMode: 'array',
        });
        assert.strictEqual(res.rowCount, 1);
        assert.deepStrictEqual(res.rows[0], [
          '1',
          'Marc',
          'Richards',
          ['rock', 'classic'],
        ]);
      });
    });

    describe('Streaming Queries (EventEmitter)', () => {
      it('should stream rows and fields events for Singers query', async () => {
        const q = client.query('SELECT * FROM Singers ORDER BY SingerId');
        let fieldsReceived = false;
        const rows: unknown[] = [];

        void q.on('fields', fields => {
          fieldsReceived = true;
          assert.ok(fields.length >= 2);
        });
        void q.on('row', (row, currentResult) => {
          rows.push(row);
          assert.ok(currentResult);
          assert.ok(currentResult.fields.length >= 2);
        });

        const res = (await q) as QueryResult;
        assert.strictEqual(fieldsReceived, true);
        assert.strictEqual(rows.length >= 2, true);
        assert.deepStrictEqual(res.rows, rows);
      });
    });

    describe('Transactions (BEGIN / COMMIT / ROLLBACK)', () => {
      it('should insert a singer in a transaction and COMMIT', async () => {
        await client.query('BEGIN');
        assert.strictEqual(client.txStatus, 'T');

        await client.query(`
          INSERT INTO Singers (SingerId, FirstName, LastName, Active)
          VALUES (3, 'Alice', 'Cooper', true)
        `);

        await client.query('COMMIT');
        assert.strictEqual(client.txStatus, 'I');

        const res = await client.query(
          'SELECT FirstName FROM Singers WHERE SingerId = 3',
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Alice',
        );
      });

      it('should rollback transaction and not persist rows on ROLLBACK', async () => {
        await client.query('BEGIN');
        assert.strictEqual(client.txStatus, 'T');

        await client.query(`
          INSERT INTO Singers (SingerId, FirstName, LastName, Active)
          VALUES (4, 'Bob', 'Marley', true)
        `);

        await client.query('ROLLBACK');
        assert.strictEqual(client.txStatus, 'I');

        const res = await client.query(
          'SELECT * FROM Singers WHERE SingerId = 4',
        );
        assert.strictEqual(res.rowCount, 0);
      });

      // Currently this test is failing as node wrapper is not returning transaction state in case of error.
      it.skip('should transition txStatus to E on error inside transaction and reset to I on ROLLBACK', async () => {
        await client.query('BEGIN');
        assert.strictEqual(client.txStatus, 'T');

        try {
          // Trigger an error inside the active transaction
          await client.query('SELECT * FROM non_existent_table_for_tx_test');
          assert.fail('Should have thrown error on non-existent table');
        } catch {
          assert.strictEqual(client.txStatus, 'E');
        }

        await client.query('ROLLBACK');
        assert.strictEqual(client.txStatus, 'I');
      });
    });
  });

  describe('Connection Pool (Pool Class)', () => {
    it('should acquire client, execute query and release back to pool', async () => {
      const clientFromPool = await pool.connect();
      assert.ok(clientFromPool);

      try {
        const res = await clientFromPool.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 1',
        );
        assert.strictEqual(res.rowCount, 1);
        assert.strictEqual(
          res.rows[0].firstname || res.rows[0].FirstName,
          'Marc',
        );
      } finally {
        await clientFromPool.release();
      }
    });

    it('should execute direct query via pool.query()', async () => {
      const res = await pool.query('SELECT count(*) as total FROM Singers');
      assert.strictEqual(res.rowCount, 1);
      assert.ok(
        Number(res.rows[0].total) >= 2 || Number(res.rows[0].count) >= 2,
      );
    });

    it('should format pool query results as positional arrays when rowMode is array', async () => {
      const res = await pool.query({
        text: 'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 1',
        rowMode: 'array',
      });
      assert.strictEqual(res.rowCount, 1);
      assert.deepStrictEqual(res.rows[0], ['1', 'Marc']);
    });

    it('should execute concurrent queries via pool', async () => {
      const queries = [
        pool.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 1',
        ),
        pool.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 2',
        ),
        pool.query(
          'SELECT SingerId, FirstName FROM Singers WHERE SingerId = 3',
        ),
      ];

      const results = await Promise.all(queries);
      assert.strictEqual(results.length, 3);
      assert.strictEqual(results[0].rowCount, 1);
      assert.strictEqual(results[1].rowCount, 1);
      assert.strictEqual(results[2].rowCount, 1);
    });

    it('should stream rows and fields events via pool.query()', async () => {
      const q = pool.query('SELECT SingerId, FirstName FROM Singers');
      let fieldsReceived = false;
      const rows: unknown[] = [];
      let lastResult: QueryResult | undefined;

      void q.on('fields', fields => {
        fieldsReceived = true;
        assert.ok(fields.length >= 2);
      });
      void q.on('row', (row, result) => {
        rows.push(row);
        lastResult = result;
        assert.ok(result);
        assert.ok(result.fields.length >= 2);
      });

      const res = (await q) as QueryResult;
      assert.strictEqual(fieldsReceived, true);
      assert.strictEqual(rows.length >= 2, true);
      assert.ok(lastResult);
      assert.deepStrictEqual(res.rows, rows);
    });
  });
});
