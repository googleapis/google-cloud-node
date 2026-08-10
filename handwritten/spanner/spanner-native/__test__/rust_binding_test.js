'use strict';

const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const {once} = require('node:events');
const path = require('node:path');
const {after, before, test} = require('node:test');

const {NativeSpannerDatabase} = require('./poc_bridge.js');
const {spannerRustNative} = require('./native_binding.js');
const spannerProto = require('../../build/protos/protos.js').google.spanner.v1;

const PROJECT = process.env.SPANNER_BENCHMARK_PROJECT || 'span-cloud-testing';
const INSTANCE = process.env.SPANNER_BENCHMARK_INSTANCE || 'irahul-load-test';
const DATABASE = process.env.SPANNER_BENCHMARK_DATABASE || 'db';

let database;

before(() => {
  database = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 1, 'rust');
});

after(async () => {
  if (database) await database.close();
});

test('low-level Rust success callback has three arguments', async () => {
  const sessionName = await database._getSessionName();
  const request = spannerProto.ExecuteSqlRequest.create({
    session: sessionName,
    sql: 'SELECT 1 AS one',
  });
  const requestBytes = spannerProto.ExecuteSqlRequest.encode(request).finish();
  const metadata = [
    ['x-goog-request-params', `session=${encodeURIComponent(sessionName)}`],
    ['x-goog-user-project', PROJECT],
  ];

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error('Rust low-level callback timed out')),
      30_000
    );
    let successSeen = false;

    spannerRustNative.executeStreamingSqlNative(
      database._nativeBinding._coreClientHandle,
      sessionName,
      metadata,
      requestBytes,
      {},
      function (...args) {
        try {
          assert.equal(args.length, 3);
          const [error, batch, telemetry] = args;
          assert.equal(error, null);
          if (batch === null) {
            assert.equal(telemetry, null);
            assert.equal(successSeen, true);
            clearTimeout(timeout);
            resolve();
            return;
          }

          assert.deepEqual(batch, [['1']]);
          assert.equal(typeof telemetry, 'object');
          successSeen = true;
        } catch (error) {
          clearTimeout(timeout);
          reject(error);
        }
      }
    );
  });
});

test("executeSqlNative('SELECT 1 AS one') resolves one row", async () => {
  assert.deepEqual(await database.executeSqlNative('SELECT 1 AS one'), [['1']]);
});

test('malformed SQL rejects through the stream error path', async () => {
  const stream = await database.runStream('SELECT FROM');
  const [error] = await once(stream, 'error');
  assert.match(error.message, /Syntax error|SELECT list must not be empty/);
});

test('constructor auth failure returns to JavaScript without aborting', () => {
  const fixture = path.join(__dirname, 'fixtures', 'invalid-authorized-user.json');
  const addon = path.join(__dirname, '..', 'index.js');
  const script = `
    const addon = require(${JSON.stringify(addon)});
    try {
      new addon.CoreClientHandle(1);
      process.exitCode = 2;
    } catch (error) {
      if (!/auth|credential|profile/i.test(error.message)) process.exitCode = 3;
    }
  `;
  const environment = {...process.env, GOOGLE_APPLICATION_CREDENTIALS: fixture};
  delete environment.CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE;
  delete environment.SPANNER_NODE_CREDENTIALS;

  const result = spawnSync(process.execPath, ['-e', script], {
    encoding: 'utf8',
    env: environment,
    timeout: 30_000,
  });

  assert.equal(result.signal, null, result.stderr);
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(result.stderr, /panicked|aborting/i);
});
