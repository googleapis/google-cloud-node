/**
 * Verification harness for the Go shared-core integration.
 *
 * Starts an in-process mock Spanner gRPC server, then runs the SAME query
 * through both execution paths and asserts the results are identical:
 *
 *   1. stock pure-JS path        (SPANNER_NATIVE_CORE unset)
 *   2. Go shared-core path       (SPANNER_NATIVE_CORE=go)
 *
 * This proves the native path returns real Spanner Row objects whose
 * toJSON() output matches the stock client exactly -- which is what the
 * unmodified external benchmarks depend on.
 *
 * Run:  node handwritten/spanner/spanner-native/verify_native_core.js
 */

'use strict';

const path = require('path');
const assert = require('assert');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const SPANNER_PKG = path.resolve(__dirname, '..');
const PROTO_DIR = path.join(SPANNER_PKG, 'protos');
const PORT = process.env.MOCK_PORT || '9099';
const HOST = `127.0.0.1:${PORT}`;

const PROJECT = 'test-project';
const INSTANCE = 'test-instance';
const DATABASE = 'test-database';
const SESSION_NAME =
  `projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}/sessions/mux-1`;

// ---------------------------------------------------------------------------
// Result set exercising the scalar types the core must carry correctly.
// ---------------------------------------------------------------------------

const FIELDS = [
  {name: 'id', type: {code: 'INT64'}},
  {name: 'name', type: {code: 'STRING'}},
  {name: 'score', type: {code: 'FLOAT64'}},
  {name: 'active', type: {code: 'BOOL'}},
  {name: 'created', type: {code: 'TIMESTAMP'}},
  {name: 'payload', type: {code: 'BYTES'}},
  {name: 'amount', type: {code: 'NUMERIC'}},
  {name: 'missing', type: {code: 'STRING'}},
  // Additional scalar types exercised by the read-large-result-set workload.
  {name: 'day', type: {code: 'DATE'}},
  {name: 'doc', type: {code: 'JSON'}},
  {name: 'ratio32', type: {code: 'FLOAT32'}},
  {name: 'span', type: {code: 'INTERVAL'}},
  {name: 'uid', type: {code: 'UUID'}},
];

// PartialResultSet.values are google.protobuf.Value.
// INT64/TIMESTAMP/BYTES/NUMERIC arrive on the wire as strings.
function makeRowValues(i) {
  return [
    {stringValue: String(1000 + i)},
    {stringValue: `row-${i}`},
    {numberValue: 1.5 + i},
    {boolValue: i % 2 === 0},
    {stringValue: '2026-01-02T03:04:05.123456000Z'},
    {stringValue: Buffer.from(`blob-${i}`).toString('base64')},
    {stringValue: '1234.5678'},
    {nullValue: 'NULL_VALUE'},
    {stringValue: '2026-03-04'},
    {stringValue: JSON.stringify({k: `v-${i}`, n: i})},
    {numberValue: 0.25 + i},
    {stringValue: 'P1Y2M3DT4H5M6S'},
    {stringValue: '9d2f1e7a-0000-4000-8000-00000000000' + (i % 10)},
  ];
}

const ROW_COUNT = 3;

// ---------------------------------------------------------------------------
// Mock Spanner server
// ---------------------------------------------------------------------------

/**
 * Every ExecuteStreamingSql request the mock received, in order. Used to prove
 * the two paths put the same thing on the wire (same SQL, same encoded params,
 * same single-use transaction) -- not merely that they return the same rows.
 */
const capturedRequests = [];
const capturedCommits = [];
const capturedBeginTx = [];
const capturedBatchDml = [];
const capturedSqlDml = [];

function startMockServer() {
  const packageDefinition = protoLoader.loadSync(
    'google/spanner/v1/spanner.proto',
    {
      keepCase: false,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [
        PROTO_DIR,
        path.join(SPANNER_PKG, 'node_modules/google-gax/build/protos'),
        path.join(SPANNER_PKG, 'node_modules/google-proto-files'),
      ],
    },
  );
  const proto = grpc.loadPackageDefinition(packageDefinition);
  const spannerService = proto.google.spanner.v1.Spanner.service;

  const server = new grpc.Server();

  server.addService(spannerService, {
    CreateSession: (call, callback) => {
      callback(null, {name: SESSION_NAME, multiplexed: true});
    },
    BatchCreateSessions: (call, callback) => {
      const count = call.request.sessionCount || 1;
      const session = [];
      for (let i = 0; i < count; i++) {
        session.push({name: `${SESSION_NAME}-${i}`});
      }
      callback(null, {session});
    },
    GetSession: (call, callback) => {
      callback(null, {name: call.request.name, multiplexed: true});
    },
    DeleteSession: (call, callback) => callback(null, {}),
    BeginTransaction: (call, callback) => {
      capturedBeginTx.push(call.request);
      callback(null, {id: Buffer.from('tx-1')});
    },
    Commit: (call, callback) => {
      capturedCommits.push(call.request);
      callback(null, {commitTimestamp: {seconds: 1700000000, nanos: 123456000}});
    },
    Rollback: (call, callback) => callback(null, {}),
    ExecuteBatchDml: (call, callback) => {
      capturedBatchDml.push(call.request);
      const stmts = call.request.statements || [];
      callback(null, {
        resultSets: stmts.map(() => ({stats: {rowCountExact: 5}})),
        status: {code: 0},
      });
    },
    ExecuteSql: (call, callback) => {
      capturedSqlDml.push(call.request);
      callback(null, {
        stats: {rowCountExact: 7},
        metadata: {transaction: {id: Buffer.from('tx-dml-1')}},
      });
    },

    ExecuteStreamingSql: call => {
      capturedRequests.push(call.request);
      if (process.env.MOCK_DEBUG) {
        console.log(
          '    [mock] ExecuteStreamingSql request:',
          JSON.stringify(call.request, null, 2),
        );
      }
      if (call.request.sql && call.request.sql.startsWith('UPDATE')) {
        call.write({
          stats: {rowCountExact: 7},
          metadata: {
            rowType: {fields: []},
            transaction: {id: Buffer.from('tx-dml-1')},
          },
        });
        call.end();
        return;
      }
      const txMeta =
        call.request.transaction && call.request.transaction.begin
          ? {id: Buffer.from('tx-stream-inline')}
          : undefined;

      if (call.request.sql && call.request.sql.includes('999999')) {
        call.write({
          metadata: {
            rowType: {fields: FIELDS},
            transaction: txMeta,
          },
        });
        call.end();
        return;
      }

      // First chunk: metadata only.
      call.write({
        metadata: {
          rowType: {fields: FIELDS},
          transaction: txMeta,
        },
      });
      // Then one chunk per row.
      for (let i = 0; i < ROW_COUNT; i++) {
        call.write({values: makeRowValues(i)});
      }
      call.end();
    },
  });

  return new Promise((resolve, reject) => {
    server.bindAsync(
      HOST,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) return reject(err);
        resolve({server, port});
      },
    );
  });
}

// ---------------------------------------------------------------------------
// Query execution
// ---------------------------------------------------------------------------

const QUERY = {
  sql: 'SELECT * FROM Foo WHERE id = @id',
  params: {id: 1},
  types: {id: 'int64'},
};

async function runOnce(useNativeCore, bounds) {
  capturedRequests.length = 0;

  // Force a clean module + client state for each path.
  for (const key of Object.keys(require.cache)) {
    if (key.includes(`${path.sep}spanner${path.sep}build${path.sep}src`)) {
      delete require.cache[key];
    }
  }

  // NOTE: the core is enabled by default, so selecting the stock path means
  // disabling it explicitly. Leaving the variable unset would run the Go core
  // twice and the comparison would pass vacuously.
  if (useNativeCore) {
    process.env.SPANNER_NATIVE_CORE = 'go';
  } else {
    process.env.SPANNER_NATIVE_CORE = 'off';
  }

  const {Spanner} = require(path.join(SPANNER_PKG, 'build', 'src', 'index.js'));

  // Definitive path probe: instrument the stock JS stream so we can prove the
  // native run never touched it (otherwise an identical result could simply be
  // a silent fallback to stock).
  const {Database} = require(
    path.join(SPANNER_PKG, 'build', 'src', 'database.js'),
  );
  let stockStreamCalls = 0;
  const origStock = Database.prototype.runStreamStock_;
  Database.prototype.runStreamStock_ = function (...args) {
    stockStreamCalls++;
    return origStock.apply(this, args);
  };

  const nativeCore = require(
    path.join(SPANNER_PKG, 'build', 'src', 'native-core.js'),
  );
  const coreEnabled = nativeCore.isNativeCoreEnabled();

  // Count dispatches INTO the core directly. Inferring provenance from the
  // absence of stock-stream calls is not safe: upstream added a run() path
  // that calls neither, which would make such a check pass vacuously.
  let nativeCalls = 0;
  const origStreamNative = nativeCore.runStreamNative;
  nativeCore.runStreamNative = function (...args) {
    nativeCalls++;
    return origStreamNative.apply(this, args);
  };
  const origRunNative = nativeCore.runNative;
  nativeCore.runNative = function (...args) {
    nativeCalls++;
    return origRunNative.apply(this, args);
  };

  const spanner = new Spanner({projectId: PROJECT});
  const database = spanner.instance(INSTANCE).database(DATABASE);
  database.on('error', () => {});

  try {
    const [rows] = bounds
      ? await database.run(QUERY, bounds)
      : await database.run(QUERY);
    return {
      coreEnabled,
      stockStreamCalls,
      nativeCalls,
      request: capturedRequests[0],
      rowCount: rows.length,
      json: rows.map(r => r.toJSON()),
      jsonWrapped: rows.map(r => r.toJSON({wrapNumbers: true})),
      shape: rows.map(r => r.map(f => f.name)),
      isArray: rows.every(r => Array.isArray(r)),
      hasToJSON: rows.every(r => typeof r.toJSON === 'function'),
      fieldShape: rows.every(r =>
        r.every(
          f =>
            f &&
            typeof f === 'object' &&
            'name' in f &&
            'value' in f,
        ),
      ),
    };
  } finally {
    try {
      await database.close();
    } catch (e) {
      /* ignore */
    }
  }
}

// Values may contain class instances (Int, Float, Numeric, PreciseDate,
// Buffer). Normalize to a comparable string form.
function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (key, v) => {
      if (v === null || v === undefined) return v;
      if (Buffer.isBuffer(v)) return `<buf:${v.toString('base64')}>`;
      if (v && v.type === 'Buffer' && Array.isArray(v.data)) {
        return `<buf:${Buffer.from(v.data).toString('base64')}>`;
      }
      return v;
    }),
  );
}

// ---------------------------------------------------------------------------

async function main() {
  // IMPORTANT: the Go shared core snapshots the process environment when its
  // shared library is loaded, so assigning `process.env.SPANNER_EMULATOR_HOST`
  // from JS is NOT visible to Go's os.Getenv. If we did that, the core would
  // silently dial real Cloud Spanner instead of the mock. Re-exec ourselves
  // once with the variable present in the actual environment.
  if (process.env.SPANNER_EMULATOR_HOST !== HOST) {
    const {spawnSync} = require('child_process');
    const res = spawnSync(process.execPath, [__filename], {
      stdio: 'inherit',
      env: {
        ...process.env,
        SPANNER_EMULATOR_HOST: HOST,
        GOOGLE_CLOUD_PROJECT: PROJECT,
      },
    });
    process.exit(res.status === null ? 1 : res.status);
  }

  process.env.GOOGLE_CLOUD_PROJECT = PROJECT;

  const {server} = await startMockServer();
  console.log(`Mock Spanner server listening on ${HOST}\n`);

  let failures = 0;
  try {
    console.log('--- Running stock pure-JS path ---');
    const stock = await runOnce(false);
    console.log(`    rows: ${stock.rowCount}`);
    console.log(`    json[0]: ${JSON.stringify(normalize(stock.json[0]))}`);

    console.log('\n--- Running Go shared-core path ---');
    const native = await runOnce(true);
    console.log(`    rows: ${native.rowCount}`);
    console.log(`    json[0]: ${JSON.stringify(normalize(native.json[0]))}`);

    // The shape the standard point-select benchmark uses.
    const STALENESS = {exactStaleness: 15000};
    console.log(
      '\n--- Running both paths with {exactStaleness: 15000} ---',
    );
    const staleStock = await runOnce(false, STALENESS);
    const staleNative = await runOnce(true, STALENESS);
    console.log(
      `    stock rows: ${staleStock.rowCount}, core rows: ${staleNative.rowCount}`,
    );
    console.log(
      `    core transaction: ${JSON.stringify(
        normalize(staleNative.request.transaction),
      )}`,
    );

    console.log('\n--- Assertions ---');

    const checks = [
      [
        'stock run did NOT touch the Go core (provenance)',
        () => {
          assert.strictEqual(stock.coreEnabled, false, 'core was enabled');
          assert.strictEqual(
            stock.nativeCalls,
            0,
            'the stock run dispatched into the native core',
          );
        },
      ],
      [
        'native run DID dispatch into the Go core (provenance)',
        () => {
          assert.strictEqual(
            native.coreEnabled,
            true,
            'addon failed to load / core disabled',
          );
          assert.strictEqual(
            native.nativeCalls,
            1,
            'run() never reached the native core -- the integration point is ' +
              'wrong (upstream run() may bypass runStream)',
          );
          assert.strictEqual(
            native.stockStreamCalls,
            0,
            'the core fell back to the stock JS stream',
          );
        },
      ],
      [
        'row count matches',
        () => assert.strictEqual(native.rowCount, stock.rowCount),
      ],
      [
        `row count is ${ROW_COUNT}`,
        () => assert.strictEqual(native.rowCount, ROW_COUNT),
      ],
      ['rows are arrays', () => assert.ok(native.isArray)],
      ['rows expose toJSON()', () => assert.ok(native.hasToJSON)],
      [
        'cells are {name, value}',
        () => assert.ok(native.fieldShape),
      ],
      [
        'column names match',
        () =>
          assert.deepStrictEqual(
            normalize(native.shape),
            normalize(stock.shape),
          ),
      ],
      [
        'toJSON() output matches stock exactly',
        () =>
          assert.deepStrictEqual(
            normalize(native.json),
            normalize(stock.json),
          ),
      ],
      [
        'toJSON({wrapNumbers:true}) matches stock exactly',
        () =>
          assert.deepStrictEqual(
            normalize(native.jsonWrapped),
            normalize(stock.jsonWrapped),
          ),
      ],

      // --- wire-level equivalence (no bounds) -----------------------------
      [
        'SQL and encoded params sent to the server match stock',
        () => {
          assert.deepStrictEqual(native.request.sql, stock.request.sql);
          assert.deepStrictEqual(
            normalize(native.request.params),
            normalize(stock.request.params),
            'encoded query parameters differ',
          );
          assert.deepStrictEqual(
            normalize(native.request.paramTypes),
            normalize(stock.request.paramTypes),
            'param types differ',
          );
        },
      ],
      [
        'single-use transaction sent to the server matches stock',
        () =>
          assert.deepStrictEqual(
            normalize(native.request.transaction),
            normalize(stock.request.transaction),
          ),
      ],

      // --- staleness bounds ------------------------------------------------
      // The standard point-select benchmark issues
      //   database.run(query, {exactStaleness: 15000})
      // so a core that silently ignored bounds -- or refused them and fell
      // back to pure JS -- would make that benchmark measure nothing.
      [
        'staleness-bounded query still uses the Go core (no silent fallback)',
        () => {
          assert.strictEqual(
            staleNative.nativeCalls,
            1,
            'the bounded query never reached the native core',
          );
          assert.strictEqual(
            staleStock.nativeCalls,
            0,
            'the bounded stock run dispatched into the native core',
          );
          assert.strictEqual(
            staleNative.stockStreamCalls,
            0,
            'bounded query fell back to the stock JS stream',
          );
        },
      ],
      [
        'staleness bound is forwarded to the server',
        () => {
          const ro = staleNative.request.transaction.singleUse.readOnly;
          assert.ok(ro, 'no readOnly in single-use transaction');
          assert.ok(
            ro.exactStaleness,
            `exactStaleness missing; got ${JSON.stringify(ro)}`,
          );
          assert.strictEqual(String(ro.exactStaleness.seconds), '15');
        },
      ],
      [
        'staleness-bounded transaction matches stock byte-for-byte',
        () =>
          assert.deepStrictEqual(
            normalize(staleNative.request.transaction),
            normalize(staleStock.request.transaction),
          ),
      ],
      [
        'staleness-bounded rows match stock exactly',
        () =>
          assert.deepStrictEqual(
            normalize(staleNative.json),
            normalize(staleStock.json),
          ),
      ],
    ];

    console.log('\n--- Running Write / Update / Mutation tests (stock vs Go shared core) ---');
    const stockWrite = await runWriteAndUpdateOnce(false);
    const nativeWrite = await runWriteAndUpdateOnce(true);

    checks.push(
      [
        'write/update stock run did NOT touch Go shared core (provenance)',
        () => {
          assert.strictEqual(stockWrite.nativeCommitCalls, 0);
          assert.strictEqual(stockWrite.nativeBatchUpdateCalls, 0);
          assert.strictEqual(stockWrite.nativeSqlDmlCalls, 0);
          assert.strictEqual(stockWrite.nativeTxRunCalls, 0);
        },
      ],
      [
        'write/update native run DID dispatch into Go shared core (provenance)',
        () => {
          assert.strictEqual(nativeWrite.nativeCommitCalls, 8, 'expected 8 commits through native core');
          assert.strictEqual(nativeWrite.nativeBatchUpdateCalls, 1, 'expected 1 batchUpdate through native core');
          assert.strictEqual(nativeWrite.nativeSqlDmlCalls, 3, 'expected 3 runUpdate calls through native core');
          assert.strictEqual(nativeWrite.nativeTxRunCalls, 2, 'expected 2 transaction.run(SELECT) calls through native core');
        },
      ],
      [
        'select-update benchmark flow (SELECT -> runUpdate -> commit) works end-to-end on native core',
        () => {
          assert.strictEqual(nativeWrite.selectUpdateFoundCount, 3);
          assert.strictEqual(nativeWrite.selectUpdateZeroRowsCount, 0);
        },
      ],
      [
        'table.insert / upsert / update / deleteRows wire CommitRequest mutations match stock byte-for-byte',
        () => {
          assert.strictEqual(nativeWrite.commits.length, stockWrite.commits.length);
          for (let i = 0; i < stockWrite.commits.length; i++) {
            assert.deepStrictEqual(
              normalize(nativeWrite.commits[i].mutations),
              normalize(stockWrite.commits[i].mutations),
              `CommitRequest[${i}].mutations differ between stock and Go shared core`,
            );
          }
        },
      ],
      [
        'transaction.batchUpdate wire ExecuteBatchDmlRequest statements and params match stock byte-for-byte',
        () => {
          assert.strictEqual(nativeWrite.batchDml.length, 1);
          assert.deepStrictEqual(
            normalize(nativeWrite.batchDml[0].statements),
            normalize(stockWrite.batchDml[0].statements),
            'ExecuteBatchDmlRequest statements differ between stock and Go shared core',
          );
          assert.deepStrictEqual(nativeWrite.batchRowCounts, stockWrite.batchRowCounts);
          assert.deepStrictEqual(nativeWrite.batchRowCounts, [5, 5]);
        },
      ],
      [
        'transaction.runUpdate wire ExecuteSqlRequest statement and params match stock byte-for-byte',
        () => {
          assert.strictEqual(nativeWrite.sqlDml.length, 3);
          const stockDmls = stockWrite.streamingRequests.filter(
            r => r.sql && (r.sql.startsWith('UPDATE') || r.sql.startsWith('INSERT')),
          );
          assert.strictEqual(stockDmls.length, 3);
          for (let i = 0; i < 3; i++) {
            const stockDml = stockDmls[i];
            const nativeDml = nativeWrite.sqlDml[i];
            assert.strictEqual(nativeDml.sql, stockDml.sql);
            assert.deepStrictEqual(
              normalize(nativeDml.params),
              normalize(stockDml.params),
              `ExecuteSqlRequest[${i}] params differ between stock and Go shared core`,
            );
            assert.deepStrictEqual(
              normalize(nativeDml.paramTypes),
              normalize(stockDml.paramTypes),
              `ExecuteSqlRequest[${i}] paramTypes differ between stock and Go shared core`,
            );
          }
          assert.strictEqual(nativeWrite.singleRowCount, stockWrite.singleRowCount);
          assert.strictEqual(nativeWrite.singleRowCount, 7);
        },
      ],
    );

    for (const [name, fn] of checks) {
      try {
        fn();
        console.log(`  PASS  ${name}`);
      } catch (e) {
        failures++;
        console.log(`  FAIL  ${name}`);
        console.log(`        ${e.message.split('\n').slice(0, 12).join('\n        ')}`);
      }
    }
  } catch (e) {
    failures++;
    console.error('\nHarness error:', e);
  } finally {
    server.forceShutdown();
  }

  console.log(
    failures === 0
      ? '\nAll checks passed: the Go shared core is API-compatible with the stock client.'
      : `\n${failures} check(s) FAILED.`,
  );
  process.exit(failures === 0 ? 0 : 1);
}

async function runWriteAndUpdateOnce(useNativeCore) {
  capturedRequests.length = 0;
  capturedCommits.length = 0;
  capturedBeginTx.length = 0;
  capturedBatchDml.length = 0;
  capturedSqlDml.length = 0;

  for (const key of Object.keys(require.cache)) {
    if (key.includes(`${path.sep}spanner${path.sep}build${path.sep}src`)) {
      delete require.cache[key];
    }
  }

  process.env.SPANNER_NATIVE_CORE = useNativeCore ? 'go' : 'off';

  const {Spanner} = require(path.join(SPANNER_PKG, 'build', 'src', 'index.js'));
  const nativeCore = require(
    path.join(SPANNER_PKG, 'build', 'src', 'native-core.js'),
  );

  let nativeCommitCalls = 0;
  let nativeBatchUpdateCalls = 0;
  let nativeSqlDmlCalls = 0;
  let nativeTxRunCalls = 0;

  const origCommit = nativeCore.executeNativeCommit;
  nativeCore.executeNativeCommit = function (...args) {
    nativeCommitCalls++;
    return origCommit.apply(this, args);
  };
  const origBatch = nativeCore.executeNativeBatchUpdate;
  nativeCore.executeNativeBatchUpdate = function (...args) {
    nativeBatchUpdateCalls++;
    return origBatch.apply(this, args);
  };
  const origSqlDml = nativeCore.executeNativeSqlDml;
  nativeCore.executeNativeSqlDml = function (...args) {
    nativeSqlDmlCalls++;
    return origSqlDml.apply(this, args);
  };
  const origTxRun = nativeCore.executeNativeTransactionRun;
  nativeCore.executeNativeTransactionRun = function (...args) {
    nativeTxRunCalls++;
    return origTxRun.apply(this, args);
  };

  const spanner = new Spanner({projectId: PROJECT});
  const database = spanner.instance(INSTANCE).database(DATABASE);
  database.on('error', () => {});
  const table = database.table('Users');

  const rows = [
    {
      id: 101,
      name: 'Alice',
      score: 98.75,
      active: true,
      payload: Buffer.from('hello-bytes-1'),
      amount: Spanner.numeric('1234.5678'),
      day: Spanner.date('2026-03-16'),
      created: new Date('2026-03-16T12:34:56.789Z'),
      missing: null,
    },
    {
      id: 102,
      name: 'Bob',
      score: -42.5,
      active: false,
      payload: Buffer.from('hello-bytes-2'),
      amount: Spanner.numeric('99999.0001'),
      day: Spanner.date('2026-03-17'),
      created: new Date('2026-03-17T00:00:00.000Z'),
      missing: 'not-null',
    },
  ];

  let batchRowCounts = null;
  let singleRowCount = null;

  try {
    // 1. table.insert (batch insert)
    await table.insert(rows);

    // 2. table.upsert (batch upsert)
    await table.upsert(rows);

    // 3. table.update (batch update)
    await table.update(rows);

    // 4. table.deleteRows (batch delete)
    await table.deleteRows([101, 102]);

    // 5. transaction.batchUpdate + transaction.commit
    await database.runTransactionAsync(async tx => {
      const [counts] = await tx.batchUpdate([
        {
          sql: 'INSERT INTO Users (id, name, score, active) VALUES (@id, @name, @score, @active)',
          params: {id: 103, name: 'Charlie', score: 77.25, active: true},
        },
        {
          sql: 'UPDATE Users SET amount = @amount WHERE id = @id',
          params: {id: 103, amount: Spanner.numeric('555.55')},
        },
      ]);
      batchRowCounts = counts;
      await tx.commit();
    });

    // 6. transaction.runUpdate + transaction.commit
    await database.runTransactionAsync(async tx => {
      const [count] = await tx.runUpdate({
        sql: 'UPDATE Users SET score = @score, payload = @payload WHERE id = @id',
        params: {
          id: 101,
          score: 100.0,
          payload: Buffer.from('updated-bytes'),
        },
      });
      singleRowCount = count;
      await tx.commit();
    });

    // 7. select-update benchmark flow (existing row: SELECT -> UPDATE -> COMMIT)
    let selectUpdateFoundCount = 0;
    await database.runTransactionAsync(async tx => {
      const [foundRows] = await tx.run({
        sql: 'SELECT * FROM Users WHERE id = @id',
        params: {id: 101},
        types: {id: 'int64'},
      });
      selectUpdateFoundCount = foundRows.length;
      await tx.runUpdate({
        sql: 'UPDATE Users SET name = @name WHERE id = @id',
        params: {id: 101, name: 'UpdatedAlice'},
      });
      await tx.commit();
    });

    // 8. select-update benchmark flow (0 rows found: SELECT -> INSERT -> COMMIT)
    let selectUpdateZeroRowsCount = -1;
    await database.runTransactionAsync(async tx => {
      const [zeroRows] = await tx.run({
        sql: 'SELECT * FROM Users WHERE id = 999999',
      });
      selectUpdateZeroRowsCount = zeroRows.length;
      await tx.runUpdate({
        sql: 'INSERT INTO Users (id, name) VALUES (@id, @name)',
        params: {id: 999999, name: 'NewUser'},
      });
      await tx.commit();
    });

    return {
      nativeCommitCalls,
      nativeBatchUpdateCalls,
      nativeSqlDmlCalls,
      nativeTxRunCalls,
      selectUpdateFoundCount,
      selectUpdateZeroRowsCount,
      commits: capturedCommits.slice(),
      batchDml: capturedBatchDml.slice(),
      sqlDml: capturedSqlDml.slice(),
      streamingRequests: capturedRequests.slice(),
      batchRowCounts,
      singleRowCount,
    };
  } finally {
    try {
      await database.close();
    } catch (e) {
      /* ignore */
    }
  }
}

main();
