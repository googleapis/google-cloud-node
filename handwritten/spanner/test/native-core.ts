/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as assert from 'assert';
import {before, after, beforeEach, afterEach, describe, it} from 'mocha';
import * as path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {PreciseDate} from '@google-cloud/precise-date';
import {
  isNativeCoreEnabled,
  loadNativeAddon,
  closeNativeCore,
} from '../src/native-core';
import {Spanner, Float, Float32, Int, Struct} from '../src';

const SPANNER_PKG_DIR = path.resolve(__dirname, '..', '..');
const PROTO_DIR = path.join(SPANNER_PKG_DIR, 'protos');

describe('Go Shared Native Core (NATIVE_CORE_ENABLED)', () => {
  const savedEnv: NodeJS.ProcessEnv = {};
  const envKeys = [
    'NATIVE_CORE_ENABLED',
    'SPANNER_ENABLE_NATIVE_CORE',
    'SPANNER_NATIVE_CORE',
    'SPANNER_EMULATOR_HOST',
    'SPANNER_NATIVE_QUIET',
  ];

  beforeEach(() => {
    for (const k of envKeys) {
      savedEnv[k] = process.env[k];
      delete process.env[k];
    }
    process.env.SPANNER_NATIVE_QUIET = '1';
  });

  afterEach(() => {
    for (const k of envKeys) {
      if (savedEnv[k] === undefined) {
        delete process.env[k];
      } else {
        process.env[k] = savedEnv[k];
      }
    }
  });

  describe('Environment Variable Gating (isNativeCoreEnabled)', () => {
    it('should default to false when no environment variable is set', () => {
      assert.strictEqual(isNativeCoreEnabled(), false);
    });

    it('should enable when NATIVE_CORE_ENABLED is truthy', () => {
      for (const val of ['true', 'TRUE', '1', 'yes', 'on', 'go']) {
        process.env.NATIVE_CORE_ENABLED = val;
        assert.strictEqual(isNativeCoreEnabled(), true, `Failed for ${val}`);
      }
    });

    it('should disable when NATIVE_CORE_ENABLED is falsy', () => {
      for (const val of ['false', 'FALSE', '0', 'no', 'off', '']) {
        process.env.NATIVE_CORE_ENABLED = val;
        assert.strictEqual(isNativeCoreEnabled(), false, `Failed for ${val}`);
      }
    });

    it('should support legacy aliases SPANNER_ENABLE_NATIVE_CORE and SPANNER_NATIVE_CORE', () => {
      process.env.SPANNER_ENABLE_NATIVE_CORE = 'true';
      assert.strictEqual(isNativeCoreEnabled(), true);

      delete process.env.SPANNER_ENABLE_NATIVE_CORE;
      process.env.SPANNER_NATIVE_CORE = 'go';
      assert.strictEqual(isNativeCoreEnabled(), true);
    });

    it('should give NATIVE_CORE_ENABLED precedence over legacy aliases', () => {
      process.env.NATIVE_CORE_ENABLED = 'false';
      process.env.SPANNER_ENABLE_NATIVE_CORE = 'true';
      process.env.SPANNER_NATIVE_CORE = 'go';
      assert.strictEqual(isNativeCoreEnabled(), false);
    });
  });

  describe('End-to-End Mock gRPC Server Integration', function () {
    this.timeout(20000);

    let server: grpc.Server;
    let serverHost: string;
    let unavailableAttempt = 0;
    let lastReceivedSql = '';

    const SESSION_NAME =
      'projects/test-proj/instances/test-inst/databases/test-db/sessions/mux-test-session';

    before(function (done) {
      const addon = loadNativeAddon();
      if (!addon) {
        this.skip();
      }

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const protosJson = require('@google-cloud/spanner-api/build/protos/protos.json');
      const packageDefinition = protoLoader.fromJSON(protosJson, {
        keepCase: false,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const proto = grpc.loadPackageDefinition(packageDefinition) as any;
      const spannerService = proto.google.spanner.v1.Spanner.service;

      server = new grpc.Server();
      server.addService(spannerService, {
        CreateSession: (
          _call: grpc.ServerUnaryCall<unknown, unknown>,
          cb: grpc.sendUnaryData<unknown>,
        ) => {
          cb(null, {name: SESSION_NAME, multiplexed: true});
        },
        BatchCreateSessions: (
          _call: grpc.ServerUnaryCall<unknown, unknown>,
          cb: grpc.sendUnaryData<unknown>,
        ) => {
          cb(null, {session: [{name: SESSION_NAME, multiplexed: true}]});
        },
        GetSession: (
          _call: grpc.ServerUnaryCall<unknown, unknown>,
          cb: grpc.sendUnaryData<unknown>,
        ) => {
          cb(null, {name: SESSION_NAME, multiplexed: true});
        },
        DeleteSession: (
          _call: grpc.ServerUnaryCall<unknown, unknown>,
          cb: grpc.sendUnaryData<unknown>,
        ) => {
          cb(null, {});
        },
        BeginTransaction: (
          _call: grpc.ServerUnaryCall<unknown, unknown>,
          cb: grpc.sendUnaryData<unknown>,
        ) => {
          cb(null, {
            id: Buffer.from('tx-explicit-1'),
            readTimestamp: {seconds: 1700000100, nanos: 500000000},
          });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ExecuteStreamingSql: (call: any) => {
          const req = call.request;
          const sql: string = req.sql || '';
          lastReceivedSql = sql;

          // Emit server-timing header for GFE/AFE telemetry verification
          const initialMd = new grpc.Metadata();
          initialMd.set('server-timing', 'gfet4t7; dur=4.25, afe; dur=1.5');
          call.sendMetadata(initialMd);

          if (sql.includes('ERROR_INVALID_ARG')) {
            call.emit('error', {
              code: grpc.status.INVALID_ARGUMENT,
               details: 'Syntax error: Unexpected identifier "BAD_SQL"',
              message: 'Syntax error: Unexpected identifier "BAD_SQL"',
            });
            return;
          }

          if (sql.includes('COMPLEX_TYPES')) {
            call.write({
              metadata: {
                rowType: {
                  fields: [
                    {
                      name: 'tags',
                      type: {
                        code: 'ARRAY',
                        arrayElementType: {code: 'STRING'},
                      },
                    },
                    {
                      name: 'nums',
                      type: {
                        code: 'ARRAY',
                        arrayElementType: {code: 'INT64'},
                      },
                    },
                    {
                      name: 'info',
                      type: {
                        code: 'STRUCT',
                        structType: {
                          fields: [
                            {name: 'key', type: {code: 'STRING'}},
                            {name: 'count', type: {code: 'INT64'}},
                          ],
                        },
                      },
                    },
                  ],
                },
              },
              values: [
                {
                  listValue: {
                    values: [
                      {stringValue: 'alpha'},
                      {nullValue: 'NULL_VALUE'},
                      {stringValue: 'omega'},
                    ],
                  },
                },
                {
                  listValue: {
                    values: [{stringValue: '10'}, {stringValue: '20'}],
                  },
                },
                {
                  listValue: {
                    values: [{stringValue: 'struct-key'}, {stringValue: '99'}],
                  },
                },
              ],
              resumeToken: Buffer.from('tok-complex'),
            });
            call.end();
            return;
          }

          if (sql.includes('CHUNKED_REASSEMBLY')) {
            call.write({
              metadata: {
                rowType: {
                  fields: [
                    {name: 'id', type: {code: 'INT64'}},
                    {name: 'text', type: {code: 'STRING'}},
                  ],
                },
              },
              values: [{stringValue: '1'}, {stringValue: 'part1-'}],
              chunkedValue: true,
            });
            call.write({
              values: [{stringValue: 'part2-'}],
              chunkedValue: true,
            });
            call.write({
              values: [
                {stringValue: 'part3'},
                {stringValue: '2'},
                {stringValue: 'second-row'},
              ],
              chunkedValue: false,
              resumeToken: Buffer.from('tok-chunked'),
              stats: {rowCountExact: '2'},
            });
            call.end();
            return;
          }

          if (sql.includes('RESUME_RETRY')) {
            const resumeStr = req.resumeToken
              ? Buffer.from(req.resumeToken).toString('utf8')
              : '';
            if (!resumeStr) {
              unavailableAttempt++;
              call.write({
                metadata: {
                  rowType: {
                    fields: [
                      {name: 'id', type: {code: 'INT64'}},
                      {name: 'label', type: {code: 'STRING'}},
                    ],
                  },
                },
                values: [{stringValue: '1'}, {stringValue: 'row-before-drop'}],
                resumeToken: Buffer.from('resume-after-1'),
              });
              call.emit('error', {
                code: grpc.status.UNAVAILABLE,
                details: 'Simulated transient mid-stream disconnect',
              });
              return;
            }
            if (resumeStr === 'resume-after-1') {
              call.write({
                values: [{stringValue: '2'}, {stringValue: 'row-after-resume'}],
                resumeToken: Buffer.from('resume-after-2'),
              });
              call.end();
              return;
            }
          }

          if (sql.includes('SPECIAL_FLOATS')) {
            call.write({
              metadata: {
                rowType: {
                  fields: [
                    {name: 'f64_nan', type: {code: 'FLOAT64'}},
                    {name: 'f64_inf', type: {code: 'FLOAT64'}},
                    {name: 'f64_ninf', type: {code: 'FLOAT64'}},
                    {name: 'f32_val', type: {code: 'FLOAT32'}},
                  ],
                },
              },
              values: [
                {stringValue: 'NaN'},
                {stringValue: 'Infinity'},
                {stringValue: '-Infinity'},
                {numberValue: 3.5},
              ],
              resumeToken: Buffer.from('tok-floats'),
            });
            call.end();
            return;
          }

          // Default: all scalar types + inline transaction metadata
          call.write({
            metadata: {
              rowType: {
                fields: [
                  {name: 'id', type: {code: 'INT64'}},
                  {name: 'name', type: {code: 'STRING'}},
                  {name: 'score', type: {code: 'FLOAT64'}},
                  {name: 'active', type: {code: 'BOOL'}},
                  {name: 'raw_bytes', type: {code: 'BYTES'}},
                  {name: 'created_at', type: {code: 'TIMESTAMP'}},
                  {name: 'amount', type: {code: 'NUMERIC'}},
                  {name: 'birth_date', type: {code: 'DATE'}},
                  {name: 'meta_json', type: {code: 'JSON'}},
                  {name: 'null_col', type: {code: 'STRING'}},
                ],
              },
              transaction: {
                id: Buffer.from('tx-inline-99'),
                readTimestamp: {seconds: 1700000200, nanos: 123456789},
                precommitToken: {
                  precommitToken: Buffer.from('precommit-tok-1'),
                  seqNum: 7,
                },
              },
            },
            values: [
              {stringValue: '42'},
              {stringValue: 'Ada Lovelace'},
              {numberValue: 99.5},
              {boolValue: true},
              {stringValue: Buffer.from('binary-data').toString('base64')},
              {stringValue: '2026-07-01T12:34:56.123456789Z'},
              {stringValue: '12345.6789'},
              {stringValue: '1815-12-10'},
              {stringValue: '{"role":"pioneer"}'},
              {nullValue: 'NULL_VALUE'},
            ],
            resumeToken: Buffer.from('tok-scalar'),
          });
          call.end();
        },
      });

      server.bindAsync(
        '127.0.0.1:0',
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
          if (err) {
            done(err);
            return;
          }
          serverHost = `127.0.0.1:${port}`;
          done();
        },
      );
    });

    after(done => {
      if (server) {
        server.tryShutdown(() => done());
      } else {
        done();
      }
    });

    it('should execute Database#run via Go Shared Core with full scalar type and Row prototype parity', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        // Execute twice to verify schema cache hit (skipMetadata=true on 2nd run)
        const [rows1] = await db.run('SELECT * FROM ScalarTable');
        const [rows2] = await db.run('SELECT * FROM ScalarTable');

        assert.strictEqual(rows1.length, 1);
        assert.strictEqual(rows2.length, 1);

        // Prototype-based RowImpl check: toJSON method must be shared
        const r1 = rows1[0] as unknown as {toJSON: () => Record<string, unknown>};
        const r2 = rows2[0] as unknown as {toJSON: () => Record<string, unknown>};
        assert.strictEqual(r1.toJSON, r2.toJSON);

        const json = r1.toJSON();
        assert.strictEqual(json.id, 42);
        assert.strictEqual(json.name, 'Ada Lovelace');
        assert.strictEqual(json.score, 99.5);
        assert.strictEqual(json.active, true);
        assert.ok(Buffer.isBuffer(json.raw_bytes));
        assert.strictEqual(
          (json.raw_bytes as Buffer).toString('utf8'),
          'binary-data',
        );
        assert.ok(json.created_at instanceof PreciseDate);
        assert.strictEqual(
          (json.created_at as PreciseDate).toISOString(),
          '2026-07-01T12:34:56.123456789Z',
        );
        assert.deepStrictEqual(json.meta_json, {role: 'pioneer'});
        assert.strictEqual(json.null_col, null);
      } finally {
        await db.close();
      }
    });

    it('should support json: true and wrapNumbers options directly without Row wrapper allocation', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        const [rows] = await db.run({
          sql: 'SELECT * FROM ScalarTable',
          json: true,
          jsonOptions: {wrapNumbers: true},
        });
        assert.strictEqual(rows.length, 1);
        const row = rows[0] as Record<string, unknown>;
        assert.strictEqual(Array.isArray(row), false);
        assert.ok(row.id instanceof Int);
        assert.strictEqual((row.id as Int).value, '42');
        assert.ok(row.score instanceof Float);
      } finally {
        await db.close();
      }
    });

    it('should decode special FLOAT64 (NaN, Infinity, -Infinity) and FLOAT32 values accurately', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        const [rows] = await db.run('SELECT * FROM T /* SPECIAL_FLOATS */');
        assert.strictEqual(rows.length, 1);
        const cells = rows[0] as Array<{name: string; value: unknown}>;
        assert.ok(cells[0].value instanceof Float);
        assert.strictEqual((cells[0].value as Float).value, 'NaN');
        assert.ok(Number.isNaN((cells[0].value as Float).valueOf()));
        assert.strictEqual((cells[1].value as Float).value, 'Infinity');
        assert.strictEqual((cells[1].value as Float).valueOf(), Infinity);
        assert.strictEqual((cells[2].value as Float).value, '-Infinity');
        assert.strictEqual((cells[2].value as Float).valueOf(), -Infinity);
        assert.ok(cells[3].value instanceof Float32);
        assert.strictEqual((cells[3].value as Float32).value, 3.5);
      } finally {
        await db.close();
      }
    });

    it('should decode recursive ARRAY and STRUCT types in contiguous cell arena', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        const [rows] = await db.run('SELECT * FROM T /* COMPLEX_TYPES */');
        assert.strictEqual(rows.length, 1);
        const r = rows[0] as unknown as {
          toJSON: () => Record<string, unknown>;
        } & Array<{name: string; value: unknown}>;
        assert.ok(r[2].value instanceof Struct);
        const json = r.toJSON();
        assert.deepStrictEqual(json.tags, ['alpha', null, 'omega']);
        assert.deepStrictEqual(json.nums, [10, 20]);
        assert.deepStrictEqual(json.info, {key: 'struct-key', count: 99});
      } finally {
        await db.close();
      }
    });

    it('should reassemble chunkedValue strings and emit response, stats, data, and end events on runStream', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        let responseEmitted = false;
        let statsObj: unknown = null;
        const rows: Array<Record<string, unknown>> = [];

        await new Promise<void>((resolve, reject) => {
          db.runStream('SELECT * FROM T /* CHUNKED_REASSEMBLY */')
            .on('response', () => {
              responseEmitted = true;
            })
            .on('stats', s => {
              statsObj = s;
            })
            .on('data', row => {
              rows.push(row.toJSON());
            })
            .on('error', reject)
            .on('end', () => resolve());
        });

        assert.strictEqual(responseEmitted, true);
        assert.ok(statsObj !== null);
        assert.deepStrictEqual(rows, [
          {id: 1, text: 'part1-part2-part3'},
          {id: 2, text: 'second-row'},
        ]);
      } finally {
        await db.close();
      }
    });

    it('should transparently retry mid-stream UNAVAILABLE errors using resumeToken', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;
      unavailableAttempt = 0;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        const [rows] = await db.run('SELECT * FROM T /* RESUME_RETRY */');
        assert.ok(unavailableAttempt >= 1);
        const jsonRows = rows.map(r =>
          (r as unknown as {toJSON: () => Record<string, unknown>}).toJSON(),
        );
        assert.deepStrictEqual(jsonRows, [
          {id: 1, label: 'row-before-drop'},
          {id: 2, label: 'row-after-resume'},
        ]);
      } finally {
        await db.close();
      }
    });

    it('should propagate canonical gRPC error codes and clean messages', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        let caught: (Error & {code?: number}) | null = null;
        try {
          await db.run('SELECT * FROM T /* ERROR_INVALID_ARG */');
        } catch (err) {
          caught = err as Error & {code?: number};
        }
        assert.ok(caught !== null);
        assert.strictEqual(caught!.code, grpc.status.INVALID_ARGUMENT);
        assert.ok(
          caught!.message.includes(
            'Syntax error: Unexpected identifier "BAD_SQL"',
          ),
        );
      } finally {
        await db.close();
      }
    });

    it('should support early stream.destroy() without hanging or leaking resources', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      process.env.SPANNER_EMULATOR_HOST = serverHost;

      const spanner = new Spanner({
        projectId: 'test-proj',
        disableBuiltInMetrics: true,
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        await new Promise<void>(resolve => {
          const stream = db.runStream('SELECT * FROM ScalarTable');
          stream.on('data', () => {
            stream.destroy();
          });
          stream.on('close', () => resolve());
        });
        assert.ok(lastReceivedSql.includes('ScalarTable'));
      } finally {
        await db.close();
      }
    });

    it('should create and close native core service handles cleanly', () => {
      const addon = loadNativeAddon();
      assert.ok(addon !== null);
      const handle = addon!.init(serverHost, 1, 1, 1, 0, 'test-agent/1.0');
      assert.ok(handle > 0);
      assert.strictEqual(addon!.close(handle), 0);
      closeNativeCore();
    });

    it('should support opt-in dynamicChannelPoolConfig matching Go Spanner client', async () => {
      process.env.NATIVE_CORE_ENABLED = 'true';
      delete process.env.SPANNER_EMULATOR_HOST;

      const [host, portStr] = serverHost.split(':');
      const spanner = new Spanner({
        projectId: 'test-proj',
        servicePath: host,
        port: Number(portStr),
        sslCreds: grpc.credentials.createInsecure(),
        disableBuiltInAuth: true,
        disableBuiltInMetrics: true,
        dynamicChannelPoolConfig: {
          enabled: true,
          initialChannels: 4,
          minChannels: 2,
          maxChannels: 10,
          selectionStrategy: 'POWER_OF_TWO_LEAST_BUSY',
        },
      });
      const db = spanner.instance('test-inst').database('test-db');

      try {
        const [rows] = await db.run('SELECT * FROM ScalarTable');
        assert.strictEqual(rows.length, 1);
      } finally {
        await db.close();
      }
    });
  });
});
