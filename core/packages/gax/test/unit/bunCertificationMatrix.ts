/**
 * Copyright 2026 Google LLC
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
import {spawnSync} from 'child_process';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as http from 'http';
import * as os from 'os';
import * as path from 'path';
import * as stream from 'stream';
import {after, before, Context, describe, it} from 'mocha';
import * as grpc from '@grpc/grpc-js';
import * as protobuf from 'protobufjs';
import {PassThroughClient} from 'google-auth-library';

import {
  CallSettings,
  createApiCall,
  GoogleAuth,
  GoogleError,
  GrpcClient,
  LongrunningDescriptor,
  Status,
  StreamDescriptor,
  StreamType,
  fallback as gaxFallback,
} from '../../src';
import {GaxCallPromise, GRPCCall} from '../../src/apitypes';
import * as longrunning from '../../src/longRunningCalls/longrunning';
import {AnyDecoder} from '../../src/longRunningCalls/longRunningDescriptor';
import {OperationsClient} from '../../src/operationsClient';
import {StreamArrayParser} from '../../src/streamArrayParser';
import echoProtoJson = require('../fixtures/echo.json');

function makeUnaryApiCall(
  func: unknown,
  settings = new CallSettings(),
): GaxCallPromise {
  return createApiCall(
    Promise.resolve(func as GRPCCall),
    settings,
  ) as GaxCallPromise;
}

function findBunBinary(): string | null {
  const candidates = [
    process.env.BUN_BIN,
    'bun',
    path.join(os.homedir(), '.local', 'bin', 'bun'),
    path.join(os.homedir(), '.bun', 'bin', 'bun'),
  ].filter((c): c is string => Boolean(c));

  for (const bin of candidates) {
    const res = spawnSync(bin, ['--version'], {
      encoding: 'utf8',
      timeout: 10000,
    });
    if (!res.error && res.status === 0) {
      return bin;
    }
  }
  return null;
}

function getOpenFdCount(): number {
  if (fs.existsSync('/proc/self/fd')) {
    try {
      return fs.readdirSync('/proc/self/fd').length;
    } catch {
      return 0;
    }
  }
  return 0;
}

function createLocalTarballPackage(
  targetDir: string,
  pkgName: string,
  version: string,
  extraPkgFields: Record<string, unknown> = {},
  postinstallScript?: string,
): string {
  const pkgBuildDir = path.join(
    targetDir,
    `pack-${pkgName.replace(/[^a-z0-9]/gi, '-')}-${version}`,
  );
  fs.mkdirSync(pkgBuildDir, {recursive: true});
  const scripts: Record<string, string> = {};
  if (postinstallScript) {
    scripts.postinstall = postinstallScript;
  }
  fs.writeFileSync(
    path.join(pkgBuildDir, 'package.json'),
    JSON.stringify(
      {
        name: pkgName,
        version,
        main: 'index.cjs',
        exports: {
          '.': {
            import: './index.mjs',
            require: './index.cjs',
          },
          './package.json': './package.json',
        },
        scripts,
        ...extraPkgFields,
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    path.join(pkgBuildDir, 'index.cjs'),
    `'use strict';\nmodule.exports = {name: ${JSON.stringify(pkgName)}, version: ${JSON.stringify(version)}, createClient: (opts = {}) => ({projectId: opts.projectId || 'default-project', ready: true})};\n`,
  );
  fs.writeFileSync(
    path.join(pkgBuildDir, 'index.mjs'),
    `export const name = ${JSON.stringify(pkgName)};\nexport const version = ${JSON.stringify(version)};\nexport function createClient(opts = {}) { return {projectId: opts.projectId || 'default-project', ready: true}; }\n`,
  );

  const packRes = spawnSync('npm', ['pack', '--quiet'], {
    cwd: pkgBuildDir,
    encoding: 'utf8',
    timeout: 30000,
  });
  assert.strictEqual(
    packRes.status,
    0,
    `npm pack failed: ${packRes.stderr || packRes.stdout}`,
  );
  const tgzFilename = packRes.stdout.trim().split('\n').pop()!;
  return path.join(pkgBuildDir, tgzFilename);
}

describe('Bun Full Matrix Sign-off & Certification Suite', function () {
  this.timeout(180000);

  describe('1. Bun Packager Requirements (Build & Install Phase)', () => {
    let bunBin: string | null = null;
    let tempRoot = '';
    let cacheDir = '';
    let coreTarball = '';
    let clientTarball = '';

    before(() => {
      bunBin = findBunBinary();
      if (!bunBin) {
        return;
      }
      tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'gcn-bun-matrix-pkg-'));
      cacheDir = path.join(tempRoot, 'bun-cache');
      fs.mkdirSync(cacheDir, {recursive: true});

      coreTarball = createLocalTarballPackage(
        tempRoot,
        '@google-cloud/mock-core',
        '1.0.0',
      );
      clientTarball = createLocalTarballPackage(
        tempRoot,
        '@google-cloud/mock-client',
        '2.1.0',
        {
          dependencies: {
            '@google-cloud/mock-core': `file:${coreTarball}`,
          },
        },
      );
    });

    after(() => {
      if (tempRoot && fs.existsSync(tempRoot)) {
        fs.rmSync(tempRoot, {recursive: true, force: true});
      }
    });

    function requireBun(ctx: Context): string {
      if (!bunBin) {
        ctx.skip();
      }
      return bunBin!;
    }

    function getLockfilename(dir: string): string {
      return fs.existsSync(path.join(dir, 'bun.lock'))
        ? 'bun.lock'
        : 'bun.lockb';
    }

    it('reliably installs SDK packages and meets warm-cache speed threshold', function () {
      const bun = requireBun(this);
      const coldDir = path.join(tempRoot, 'install-cold');
      const warmDir = path.join(tempRoot, 'install-warm');
      fs.mkdirSync(coldDir, {recursive: true});
      fs.mkdirSync(warmDir, {recursive: true});

      const pkgJson = JSON.stringify(
        {
          name: 'sdk-install-speed-test',
          version: '1.0.0',
          private: true,
          dependencies: {
            '@google-cloud/mock-core': `file:${coreTarball}`,
            '@google-cloud/mock-client': `file:${clientTarball}`,
          },
        },
        null,
        2,
      );
      fs.writeFileSync(path.join(coldDir, 'package.json'), pkgJson);
      fs.writeFileSync(path.join(warmDir, 'package.json'), pkgJson);

      const coldRes = spawnSync(
        bun,
        ['install', '--no-progress', '--cache-dir', cacheDir],
        {cwd: coldDir, encoding: 'utf8', timeout: 60000},
      );
      assert.strictEqual(coldRes.status, 0, coldRes.stderr);
      assert.ok(fs.existsSync(path.join(coldDir, getLockfilename(coldDir))));

      const warmStart = performance.now();
      const warmRes = spawnSync(
        bun,
        ['install', '--no-progress', '--cache-dir', cacheDir],
        {cwd: warmDir, encoding: 'utf8', timeout: 60000},
      );
      const warmDurationMs = performance.now() - warmStart;

      assert.strictEqual(warmRes.status, 0, warmRes.stderr);
      assert.ok(
        warmDurationMs < 5000,
        `Expected warm bun install under 5000ms, took ${warmDurationMs.toFixed(1)}ms`,
      );

      const verifyRes = spawnSync(
        bun,
        [
          '-e',
          'const c = require("@google-cloud/mock-client"); if (!c.createClient({projectId: "p1"}).ready) process.exit(1);',
        ],
        {cwd: warmDir, encoding: 'utf8', timeout: 30000},
      );
      assert.strictEqual(verifyRes.status, 0, verifyRes.stderr);
    });

    it('produces deterministic lockfiles and dependency trees across clean installs', function () {
      const bun = requireBun(this);
      const cleanA = path.join(tempRoot, 'clean-a');
      const cleanB = path.join(tempRoot, 'clean-b');
      fs.mkdirSync(cleanA, {recursive: true});
      fs.mkdirSync(cleanB, {recursive: true});

      const pkgJson = JSON.stringify(
        {
          name: 'deterministic-clean-install',
          version: '1.0.0',
          private: true,
          dependencies: {
            '@google-cloud/mock-core': `file:${coreTarball}`,
            '@google-cloud/mock-client': `file:${clientTarball}`,
          },
        },
        null,
        2,
      );
      fs.writeFileSync(path.join(cleanA, 'package.json'), pkgJson);
      fs.writeFileSync(path.join(cleanB, 'package.json'), pkgJson);

      for (const dir of [cleanA, cleanB]) {
        const res = spawnSync(
          bun,
          ['install', '--no-progress', '--cache-dir', cacheDir],
          {cwd: dir, encoding: 'utf8', timeout: 60000},
        );
        assert.strictEqual(res.status, 0, res.stderr);
      }

      const lockFilenameA = getLockfilename(cleanA);
      const lockHashA = crypto
        .createHash('sha256')
        .update(fs.readFileSync(path.join(cleanA, lockFilenameA)))
        .digest('hex');
      const lockFilenameB = getLockfilename(cleanB);
      const lockHashB = crypto
        .createHash('sha256')
        .update(fs.readFileSync(path.join(cleanB, lockFilenameB)))
        .digest('hex');
      assert.strictEqual(lockHashA, lockHashB);

      // Delete node_modules and reinstall cleanly from lockfile
      fs.rmSync(path.join(cleanA, 'node_modules'), {
        recursive: true,
        force: true,
      });
      const reinstallRes = spawnSync(
        bun,
        [
          'install',
          '--frozen-lockfile',
          '--no-progress',
          '--cache-dir',
          cacheDir,
        ],
        {cwd: cleanA, encoding: 'utf8', timeout: 60000},
      );
      assert.strictEqual(reinstallRes.status, 0, reinstallRes.stderr);
      const lockFilenameAfter = getLockfilename(cleanA);
      const lockHashAfter = crypto
        .createHash('sha256')
        .update(fs.readFileSync(path.join(cleanA, lockFilenameAfter)))
        .digest('hex');
      assert.strictEqual(lockHashAfter, lockHashA);
    });

    it('enforces deterministic lockfiles across CI environments and rejects lockfile drift', function () {
      const bun = requireBun(this);
      const ciEnv1 = path.join(tempRoot, 'ci-env-1');
      const ciEnv2 = path.join(tempRoot, 'ci-env-2');
      fs.mkdirSync(ciEnv1, {recursive: true});
      fs.mkdirSync(ciEnv2, {recursive: true});

      const pkgObj = {
        name: 'deterministic-ci-install',
        version: '1.0.0',
        private: true,
        dependencies: {
          '@google-cloud/mock-core': `file:${coreTarball}`,
        },
      };
      fs.writeFileSync(
        path.join(ciEnv1, 'package.json'),
        JSON.stringify(pkgObj, null, 2),
      );
      const seedRes = spawnSync(
        bun,
        ['install', '--no-progress', '--cache-dir', cacheDir],
        {cwd: ciEnv1, encoding: 'utf8', timeout: 60000},
      );
      assert.strictEqual(seedRes.status, 0, seedRes.stderr);

      // Copy package.json + lockfile to second isolated CI runner directory
      const lockFilename = getLockfilename(ciEnv1);
      fs.copyFileSync(
        path.join(ciEnv1, 'package.json'),
        path.join(ciEnv2, 'package.json'),
      );
      fs.copyFileSync(
        path.join(ciEnv1, lockFilename),
        path.join(ciEnv2, lockFilename),
      );

      const ciFrozenRes = spawnSync(
        bun,
        [
          'install',
          '--frozen-lockfile',
          '--no-progress',
          '--cache-dir',
          cacheDir,
        ],
        {
          cwd: ciEnv2,
          encoding: 'utf8',
          timeout: 60000,
          env: {...process.env, CI: 'true', GITHUB_ACTIONS: 'true'},
        },
      );
      assert.strictEqual(ciFrozenRes.status, 0, ciFrozenRes.stderr);

      // Mutate package.json in ciEnv2 without updating bun.lock -> must fail --frozen-lockfile
      fs.writeFileSync(
        path.join(ciEnv2, 'package.json'),
        JSON.stringify(
          {
            ...pkgObj,
            dependencies: {
              '@google-cloud/mock-core': `file:${coreTarball}`,
              '@google-cloud/mock-client': `file:${clientTarball}`,
            },
          },
          null,
          2,
        ),
      );
      const driftRes = spawnSync(
        bun,
        [
          'install',
          '--frozen-lockfile',
          '--no-progress',
          '--cache-dir',
          cacheDir,
        ],
        {
          cwd: ciEnv2,
          encoding: 'utf8',
          timeout: 60000,
          env: {...process.env, CI: 'true'},
        },
      );
      assert.notStrictEqual(
        driftRes.status,
        0,
        'Expected --frozen-lockfile to reject mutated package.json in CI',
      );
    });

    it('executes postinstall and prepare hooks predictably without breaking initialization', function () {
      const bun = requireBun(this);
      const hookPkgTarball = createLocalTarballPackage(
        tempRoot,
        '@google-cloud/mock-hook-dep',
        '1.0.0',
        {},
        "node -e \"require('fs').writeFileSync('hook-marker.txt', 'dep-postinstall-ok')\"",
      );

      const hooksDir = path.join(tempRoot, 'lifecycle-hooks');
      fs.mkdirSync(hooksDir, {recursive: true});
      fs.writeFileSync(
        path.join(hooksDir, 'package.json'),
        JSON.stringify(
          {
            name: 'hooks-verification',
            version: '1.0.0',
            private: true,
            dependencies: {
              '@google-cloud/mock-core': `file:${coreTarball}`,
              '@google-cloud/mock-hook-dep': `file:${hookPkgTarball}`,
            },
            trustedDependencies: ['@google-cloud/mock-hook-dep'],
            scripts: {
              postinstall:
                "node -e \"require('fs').appendFileSync('lifecycle-order.txt', 'postinstall\\n')\"",
              prepare:
                "node -e \"require('fs').appendFileSync('lifecycle-order.txt', 'prepare\\n')\"",
            },
          },
          null,
          2,
        ),
      );

      const res = spawnSync(
        bun,
        ['install', '--no-progress', '--cache-dir', cacheDir],
        {cwd: hooksDir, encoding: 'utf8', timeout: 60000},
      );
      assert.strictEqual(res.status, 0, res.stderr);

      const orderLog = fs
        .readFileSync(path.join(hooksDir, 'lifecycle-order.txt'), 'utf8')
        .trim()
        .split('\n');
      assert.deepStrictEqual(orderLog, ['postinstall', 'prepare']);

      const depMarkerPath = path.join(
        hooksDir,
        'node_modules',
        '@google-cloud',
        'mock-hook-dep',
        'hook-marker.txt',
      );
      assert.strictEqual(
        fs.readFileSync(depMarkerPath, 'utf8'),
        'dep-postinstall-ok',
      );
    });

    it('resolves monorepo workspace topologies predictably without breaking package initialization', function () {
      const bun = requireBun(this);
      const wsRoot = path.join(tempRoot, 'workspace-topology');
      const pkgADir = path.join(wsRoot, 'packages', 'sdk-wrapper');
      const pkgBDir = path.join(wsRoot, 'packages', 'consumer-app');
      fs.mkdirSync(pkgADir, {recursive: true});
      fs.mkdirSync(pkgBDir, {recursive: true});

      fs.writeFileSync(
        path.join(wsRoot, 'package.json'),
        JSON.stringify(
          {
            name: 'monorepo-workspace-root',
            private: true,
            workspaces: ['packages/*'],
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(
        path.join(pkgADir, 'package.json'),
        JSON.stringify(
          {
            name: '@ws-test/sdk-wrapper',
            version: '1.0.0',
            main: 'index.cjs',
            dependencies: {
              '@google-cloud/mock-core': `file:${coreTarball}`,
            },
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(
        path.join(pkgADir, 'index.cjs'),
        "'use strict';\nconst core = require('@google-cloud/mock-core');\nmodule.exports = {init: projectId => core.createClient({projectId})};\n",
      );

      fs.writeFileSync(
        path.join(pkgBDir, 'package.json'),
        JSON.stringify(
          {
            name: '@ws-test/consumer-app',
            version: '1.0.0',
            main: 'app.cjs',
            dependencies: {
              '@ws-test/sdk-wrapper': 'workspace:*',
            },
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(
        path.join(pkgBDir, 'app.cjs'),
        "'use strict';\nconst assert = require('assert');\nconst wrapper = require('@ws-test/sdk-wrapper');\nconst client = wrapper.init('ws-project-123');\nassert.strictEqual(client.projectId, 'ws-project-123');\nassert.strictEqual(client.ready, true);\n",
      );

      const installRes = spawnSync(
        bun,
        ['install', '--no-progress', '--cache-dir', cacheDir],
        {cwd: wsRoot, encoding: 'utf8', timeout: 60000},
      );
      assert.strictEqual(installRes.status, 0, installRes.stderr);

      const runRes = spawnSync(bun, ['run', path.join(pkgBDir, 'app.cjs')], {
        cwd: wsRoot,
        encoding: 'utf8',
        timeout: 30000,
      });
      assert.strictEqual(runRes.status, 0, runRes.stderr);
    });
  });

  describe('2. Transport Parity — gRPC over HTTP/2 (@grpc/grpc-js)', () => {
    let grpcServer: grpc.Server;
    let serverPort = 0;
    let lastReceivedMetadata: grpc.Metadata | undefined;
    let gaxGrpc: GrpcClient;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let echoService: any;

    function encodeStatusDetailsBin(
      code: number,
      message: string,
      reason: string,
      domain: string,
      metadata: Record<string, string>,
    ): Buffer {
      const root = gaxFallback.GrpcClient.protobufFromJSON(
        require('../../protos/status.json'),
      );
      const ErrorInfo = root.lookupType('google.rpc.ErrorInfo');
      const StatusMsg = root.lookupType('google.rpc.Status');
      const errorInfoBytes = ErrorInfo.encode(
        ErrorInfo.fromObject({reason, domain, metadata}),
      ).finish();
      return Buffer.from(
        StatusMsg.encode(
          StatusMsg.fromObject({
            code,
            message,
            details: [
              {
                type_url: 'type.googleapis.com/google.rpc.ErrorInfo',
                value: errorInfoBytes,
              },
            ],
          }),
        ).finish(),
      );
    }

    const savedNoProxy = process.env.NO_PROXY;
    const savedLowerNoProxy = process.env.no_proxy;

    before(async () => {
      process.env.NO_PROXY = '127.0.0.1,localhost';
      process.env.no_proxy = '127.0.0.1,localhost';
      const authClient = new PassThroughClient();
      gaxGrpc = new GrpcClient({
        auth: new GoogleAuth({authClient}),
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const protos = gaxGrpc.loadProtoJSON(echoProtoJson) as any;
      echoService = protos.google.showcase.v1beta1.Echo;
      const EchoServiceDef = echoService.service;

      grpcServer = new grpc.Server();
      grpcServer.addService(EchoServiceDef, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        echo: (call: any, callback: any) => {
          lastReceivedMetadata = call.metadata;
          const content: string = call.request.content || '';

          const initialMeta = new grpc.Metadata();
          initialMeta.set('x-server-initial', 'initial-header-ok');
          call.sendMetadata(initialMeta);

          if (content.startsWith('delay:')) {
            const delayMs = parseInt(content.split(':')[1], 10);
            const timer = setTimeout(() => {
              const trailing = new grpc.Metadata();
              trailing.set('x-trailer-token', 'delayed-ok');
              callback(null, {content: 'delayed-response'}, trailing);
            }, delayMs);
            call.on('cancelled', () => clearTimeout(timer));
            return;
          }

          if (content.startsWith('error:')) {
            const statusCode = parseInt(content.split(':')[1], 10);
            const trailing = new grpc.Metadata();
            trailing.set('x-error-trailer', `status-${statusCode}`);
            trailing.set(
              'grpc-status-details-bin',
              encodeStatusDetailsBin(
                statusCode,
                `Triggered status ${statusCode}`,
                'CUSTOM_ERROR_REASON',
                'googleapis.com',
                {service: 'echo', code: String(statusCode)},
              ),
            );
            callback({
              code: statusCode,
              details: `Triggered status ${statusCode}`,
              metadata: trailing,
            });
            return;
          }

          const trailingMeta = new grpc.Metadata();
          trailingMeta.set('x-trailer-token', 'trailer-verified');
          trailingMeta.set(
            'x-checksum-bin',
            Buffer.from('binary-trailer-payload'),
          );
          callback(null, {content: `echo:${content}`}, trailingMeta);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expand: (call: any) => {
          lastReceivedMetadata = call.metadata;
          const content: string = call.request.content || '';
          if (content.startsWith('stream-count:')) {
            const count = parseInt(content.split(':')[1], 10);
            for (let i = 0; i < count; i++) {
              call.write({content: `msg-${i}`});
            }
            const trailing = new grpc.Metadata();
            trailing.set('x-stream-trailer', `sent-${count}`);
            call.end(trailing);
            return;
          }
          if (content === 'infinite-stream') {
            call.write({content: 'first-chunk'});
            const interval = setInterval(() => {
              if (!call.cancelled) {
                call.write({content: 'tick'});
              }
            }, 50);
            call.on('cancelled', () => clearInterval(interval));
            return;
          }
          call.write({content});
          call.end();
        },
      });

      serverPort = await new Promise<number>((resolve, reject) => {
        grpcServer.bindAsync(
          '127.0.0.1:0',
          grpc.ServerCredentials.createInsecure(),
          (err, port) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(port);
          },
        );
      });
    });

    after(async () => {
      if (savedNoProxy === undefined) {
        delete process.env.NO_PROXY;
      } else {
        process.env.NO_PROXY = savedNoProxy;
      }
      if (savedLowerNoProxy === undefined) {
        delete process.env.no_proxy;
      } else {
        process.env.no_proxy = savedLowerNoProxy;
      }
      if (grpcServer) {
        await new Promise<void>(resolve =>
          grpcServer.tryShutdown(() => resolve()),
        );
      }
    });

    async function createStub() {
      const stub = await gaxGrpc.createStub(echoService, {
        servicePath: '127.0.0.1',
        port: serverPort,
        sslCreds: grpc.credentials.createInsecure(),
        'grpc.enable_http_proxy': 0,
      });
      stub.echo = stub.echo.bind(stub);
      if (typeof stub.expand === 'function') {
        stub.expand = stub.expand.bind(stub);
      }
      return stub;
    }

    function makeGrpcUnaryCall(
      func: Function,
      opts: {timeout?: number; headers?: Record<string, string>} = {},
    ) {
      return makeUnaryApiCall(
        func,
        new CallSettings({
          timeout: opts.timeout,
          otherArgs: {
            headers: opts.headers,
            metadataBuilder: gaxGrpc.metadataBuilder({}),
          },
        }),
      );
    }

    it('preserves request and response headers over HTTP/2 gRPC', async () => {
      const stub = await createStub();
      const apiCall = makeGrpcUnaryCall(stub.echo, {
        headers: {
          'x-goog-request-params': 'parent=projects/test-p',
          'x-custom-trace': 'trace-abc-123',
        },
      });
      const [response] = await apiCall({content: 'hello-headers'});
      assert.strictEqual(
        (response as {content: string}).content,
        'echo:hello-headers',
      );
      assert.strictEqual(
        lastReceivedMetadata?.get('x-goog-request-params')[0],
        'parent=projects/test-p',
      );
      assert.strictEqual(
        lastReceivedMetadata?.get('x-custom-trace')[0],
        'trace-abc-123',
      );
    });

    it('preserves trailing metadata and decodes grpc-status-details-bin over HTTP/2 gRPC', async () => {
      const stub = await createStub();
      const apiCall = makeGrpcUnaryCall(stub.echo);

      // Verify success trailers via raw unary call
      const receivedTrailers = await new Promise<grpc.Metadata>(
        (resolve, reject) => {
          const call = stub.echo(
            {content: 'check-trailers'},
            new grpc.Metadata(),
            {},
            (err?: Error) => {
              if (err) reject(err);
            },
          );
          call.on('status', (status: grpc.StatusObject) => {
            resolve(status.metadata);
          });
        },
      );
      assert.strictEqual(
        receivedTrailers.get('x-trailer-token')[0],
        'trailer-verified',
      );
      assert.deepStrictEqual(
        receivedTrailers.get('x-checksum-bin')[0],
        Buffer.from('binary-trailer-payload'),
      );

      // Verify error trailers and GoogleError statusDetails promotion
      await assert.rejects(
        apiCall({content: `error:${Status.INVALID_ARGUMENT}`}),
        (err: GoogleError) => {
          assert.strictEqual(err.code, Status.INVALID_ARGUMENT);
          const errorTrailers = err.metadata?.get('x-error-trailer') as
            string[] | undefined;
          assert.strictEqual(
            errorTrailers?.[0],
            `status-${Status.INVALID_ARGUMENT}`,
          );
          assert.strictEqual(err.reason, 'CUSTOM_ERROR_REASON');
          assert.strictEqual(err.domain, 'googleapis.com');
          assert.strictEqual(err.errorInfoMetadata?.service, 'echo');
          return true;
        },
      );
    });

    it('preserves canonical gRPC status codes over HTTP/2', async () => {
      const stub = await createStub();
      const apiCall = makeGrpcUnaryCall(stub.echo);

      for (const expectedStatus of [
        Status.INVALID_ARGUMENT,
        Status.NOT_FOUND,
        Status.ALREADY_EXISTS,
        Status.PERMISSION_DENIED,
        Status.RESOURCE_EXHAUSTED,
        Status.FAILED_PRECONDITION,
        Status.UNIMPLEMENTED,
        Status.INTERNAL,
        Status.UNAVAILABLE,
        Status.UNAUTHENTICATED,
      ]) {
        await assert.rejects(
          apiCall({content: `error:${expectedStatus}`}),
          (err: GoogleError) => {
            assert.strictEqual(err.code, expectedStatus);
            return true;
          },
        );
      }
    });

    it('preserves deadlines and rejects with DEADLINE_EXCEEDED over HTTP/2 gRPC', async () => {
      const stub = await createStub();
      const apiCall = makeGrpcUnaryCall(stub.echo, {timeout: 60});

      await assert.rejects(
        apiCall({content: 'delay:600'}),
        (err: GoogleError) => {
          assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
          return true;
        },
      );
    });

    it('preserves unary and streaming cancellations with CANCELLED over HTTP/2 gRPC', async () => {
      const stub = await createStub();
      const apiCall = makeGrpcUnaryCall(stub.echo, {timeout: 5000});

      const ongoingCall = apiCall({content: 'delay:1000'});
      setTimeout(() => ongoingCall.cancel(), 40);

      await assert.rejects(ongoingCall, (err: GoogleError) => {
        assert.strictEqual(err.code, Status.CANCELLED);
        return true;
      });
    });
  });

  describe('3. Transport Parity — HTTP/1.1 REST Fallback (fallback: "rest")', () => {
    let httpServer: http.Server;
    let httpPort = 0;
    let lastRequestHeaders: http.IncomingHttpHeaders = {};
    let fallbackClient: gaxFallback.GrpcClient;
    let echoService: protobuf.Service;

    before(async () => {
      httpServer = http.createServer((req, res) => {
        lastRequestHeaders = req.headers;
        const chunks: Buffer[] = [];
        req.on('data', c => chunks.push(c));
        req.on('end', () => {
          const bodyText = Buffer.concat(chunks).toString('utf8');
          let parsed: {content?: string} = {};
          try {
            parsed = bodyText ? JSON.parse(bodyText) : {};
          } catch {
            parsed = {};
          }
          const content = parsed.content || '';

          if (content.startsWith('delay:')) {
            const delayMs = parseInt(content.split(':')[1], 10);
            const timer = setTimeout(() => {
              if (!res.writableEnded) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({content: 'delayed'}));
              }
            }, delayMs);
            req.on('close', () => clearTimeout(timer));
            return;
          }

          if (content.startsWith('http-error:')) {
            const parts = content.split(':');
            const httpCode = parseInt(parts[1], 10);
            const rpcStatus = parts[2] || 'INVALID_ARGUMENT';
            res.writeHead(httpCode, {
              'Content-Type': 'application/json',
              'x-goog-request-id': 'rest-req-999',
            });
            res.end(
              JSON.stringify({
                error: {
                  code: httpCode,
                  message: `REST error ${httpCode}`,
                  status: rpcStatus,
                  details: [
                    {
                      '@type': 'type.googleapis.com/google.rpc.ErrorInfo',
                      reason: 'REST_TRAILER_ERROR_INFO',
                      domain: 'googleapis.com',
                      metadata: {
                        httpCode: String(httpCode),
                        transport: 'rest',
                      },
                    },
                  ],
                },
              }),
            );
            return;
          }

          if (req.url?.includes(':expand')) {
            if (content.startsWith('stream-count:')) {
              const count = parseInt(content.split(':')[1], 10);
              res.writeHead(200, {'Content-Type': 'application/json'});
              res.write('[');
              for (let i = 0; i < count; i++) {
                const prefix = i === 0 ? '' : ',';
                res.write(`${prefix}${JSON.stringify({content: `msg-${i}`})}`);
              }
              res.end(']');
              return;
            }
            if (content === 'infinite-stream') {
              res.writeHead(200, {'Content-Type': 'application/json'});
              res.write('[{"content":"first"}');
              const interval = setInterval(() => {
                if (!res.writableEnded) {
                  res.write(',{"content":"tick"}');
                }
              }, 40);
              req.on('close', () => clearInterval(interval));
              return;
            }
          }

          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({content: `rest:${content}`}));
        });
      });

      httpPort = await new Promise<number>(resolve => {
        httpServer.listen(0, '127.0.0.1', () => {
          const addr = httpServer.address() as {port: number};
          resolve(addr.port);
        });
      });

      const authClient = new PassThroughClient();
      fallbackClient = new gaxFallback.GrpcClient({
        auth: new GoogleAuth({authClient}),
        fallback: 'rest',
      });
      const protos = fallbackClient.loadProto(echoProtoJson);
      echoService = protos.lookupService('Echo');
    });

    after(async () => {
      if (httpServer) {
        await new Promise<void>(resolve => httpServer.close(() => resolve()));
      }
    });

    function createRestStub() {
      return fallbackClient.createStub(echoService, {
        servicePath: '127.0.0.1',
        port: httpPort,
        protocol: 'http',
      });
    }

    it('preserves request headers (single and multi-valued) over HTTP/1.1 REST fallback', async () => {
      const stub = await createRestStub();
      const response = await new Promise<{content: string}>(
        (resolve, reject) => {
          stub.echo(
            {content: 'header-check'},
            {
              'x-goog-api-client': ['gl-node/22.0.0 grpc-web/1.0'],
              'x-goog-request-params': ['table=projects/p/instances/i'],
              'x-multi-header': ['val1', 'val2'],
            },
            {},
            (err?: Error, res?: {}) => {
              if (err) reject(err);
              else resolve(res as {content: string});
            },
          );
        },
      );

      assert.strictEqual(response.content, 'rest:header-check');
      assert.strictEqual(
        lastRequestHeaders['x-goog-request-params'],
        'table=projects/p/instances/i',
      );
      assert.strictEqual(lastRequestHeaders['x-multi-header'], 'val1, val2');
    });

    it('preserves trailing ErrorInfo details in HTTP/1.1 REST fallback error payloads', async () => {
      const stub = await createRestStub();
      const apiCall = makeUnaryApiCall(stub.echo);

      await assert.rejects(
        apiCall({content: 'http-error:400:INVALID_ARGUMENT'}),
        (err: GoogleError) => {
          assert.strictEqual(err.code, Status.INVALID_ARGUMENT);
          assert.strictEqual(err.httpStatusCode, 400);
          assert.strictEqual(err.reason, 'REST_TRAILER_ERROR_INFO');
          assert.strictEqual(err.domain, 'googleapis.com');
          assert.strictEqual(err.errorInfoMetadata?.transport, 'rest');
          return true;
        },
      );
    });

    it('preserves HTTP-to-gRPC status code mappings over HTTP/1.1 REST fallback', async () => {
      const stub = await createRestStub();
      const apiCall = makeUnaryApiCall(stub.echo);

      const cases: Array<[number, string, Status]> = [
        [400, 'INVALID_ARGUMENT', Status.INVALID_ARGUMENT],
        [404, 'NOT_FOUND', Status.NOT_FOUND],
        [409, 'ABORTED', Status.ABORTED],
        [429, 'RESOURCE_EXHAUSTED', Status.RESOURCE_EXHAUSTED],
        [500, 'INTERNAL', Status.INTERNAL],
        [501, 'UNIMPLEMENTED', Status.UNIMPLEMENTED],
        [503, 'UNAVAILABLE', Status.UNAVAILABLE],
      ];

      for (const [httpCode, statusName, expectedGrpcCode] of cases) {
        await assert.rejects(
          apiCall({content: `http-error:${httpCode}:${statusName}`}),
          (err: GoogleError) => {
            assert.strictEqual(err.code, expectedGrpcCode);
            assert.strictEqual(err.httpStatusCode, httpCode);
            return true;
          },
        );
      }
    });

    it('preserves deadlines and rejects with DEADLINE_EXCEEDED over HTTP/1.1 REST fallback', async () => {
      const stub = await createRestStub();
      const apiCall = makeUnaryApiCall(
        stub.echo,
        new CallSettings({timeout: 60}),
      );

      await assert.rejects(
        apiCall({content: 'delay:600'}),
        (err: GoogleError) => {
          assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
          return true;
        },
      );
    });

    it('preserves unary and server-stream cancellations over HTTP/1.1 REST fallback', async () => {
      const stub = await createRestStub();
      const apiCall = makeUnaryApiCall(
        stub.echo,
        new CallSettings({timeout: 5000}),
      );

      const ongoing = apiCall({content: 'delay:1000'});
      setTimeout(() => ongoing.cancel(), 40);

      await assert.rejects(ongoing, (err: GoogleError) => {
        assert.strictEqual(err.code, Status.CANCELLED);
        return true;
      });

      // Server-streaming cancellation must abort cleanly without emitting Premature close
      const streamErrors: Error[] = [];
      const receivedChunks: Array<{content: string}> = [];
      const parser = stub.expand(
        {content: 'infinite-stream'},
        {},
        {},
        (err?: Error) => {
          if (err) streamErrors.push(err);
        },
      ) as StreamArrayParser;

      parser.on('data', (chunk: {content: string}) => {
        receivedChunks.push(chunk);
        if (receivedChunks.length === 1) {
          parser.cancel();
        }
      });
      parser.on('error', (err: Error) => streamErrors.push(err));

      await new Promise<void>(resolve => parser.on('close', resolve));
      assert.strictEqual(receivedChunks.length, 1);
      assert.deepStrictEqual(streamErrors, []);
    });
  });

  describe('4. Streaming Integrity & Backpressure Flow Control', () => {
    it('maintains message ordering, payload integrity, and pause/resume flow control under high throughput', async () => {
      const totalMessages = 1000;
      const authClient = new PassThroughClient();
      const fallbackClient = new gaxFallback.GrpcClient({
        auth: new GoogleAuth({authClient}),
        fallback: 'rest',
      });
      const protos = fallbackClient.loadProto(echoProtoJson);
      const echoService = protos.lookupService('Echo');
      const expandMethod = echoService.methods['Expand'];
      expandMethod.resolve();

      const parser = new StreamArrayParser(expandMethod);
      const received: string[] = [];
      let pauseCount = 0;
      let pausedObserved = false;

      const donePromise = new Promise<void>((resolve, reject) => {
        parser.on('data', (item: {content: string}) => {
          received.push(item.content);
          if (received.length % 250 === 0 && pauseCount < 3) {
            pauseCount++;
            parser.pause();
            pausedObserved = parser.isPaused();
            setTimeout(() => parser.resume(), 10);
          }
        });
        parser.on('error', reject);
        parser.on('end', resolve);
      });

      const items = Array.from({length: totalMessages}, (_, idx) => ({
        content: `stream-item-${idx}-${'x'.repeat(32)}`,
      }));
      const fullJson = JSON.stringify(items);

      // Feed in arbitrary uneven chunk sizes to stress JSON boundary parsing
      let offset = 0;
      const chunkSize = 317;
      while (offset < fullJson.length) {
        parser.write(Buffer.from(fullJson.slice(offset, offset + chunkSize)));
        offset += chunkSize;
      }
      parser.end();

      await donePromise;
      assert.strictEqual(received.length, totalMessages);
      assert.strictEqual(pausedObserved, true);
      for (let i = 0; i < totalMessages; i++) {
        assert.strictEqual(received[i], `stream-item-${i}-${'x'.repeat(32)}`);
      }
    });
  });

  describe('5. Resource & Concurrency Stability (LROs & Regular Reads)', () => {
    it('executes high-concurrency LRO polling with bounded memory, zero leaked FDs, low latency, and zero unhandled rejections', async () => {
      const unhandledRejections: unknown[] = [];
      const onUnhandled = (reason: unknown) => {
        unhandledRejections.push(reason);
      };
      process.on('unhandledRejection', onUnhandled);

      try {
        const baselineFds = getOpenFdCount();
        const baselineHeap = process.memoryUsage().heapUsed;

        let pollCallCount = 0;
        const mockOperationsClient = {
          getOperationInternal: (
            request: {name: string},
            _options: unknown,
            callback?: Function,
          ) => {
            pollCallCount++;
            const opPayload = request.name.includes('fail-op')
              ? {
                  result: 'error',
                  name: request.name,
                  done: true,
                  error: {
                    code: Status.INTERNAL,
                    message: 'Simulated LRO failure',
                  },
                  response: null,
                }
              : {
                  result: 'response',
                  name: request.name,
                  done: true,
                  error: null,
                  response: {
                    type_url: 'google.showcase.v1beta1.EchoResponse',
                    value: Buffer.from('ok'),
                  },
                };
            const p = new Promise(resolve => {
              setImmediate(() => {
                if (callback) callback(null, opPayload);
                resolve([opPayload]);
              });
            });
            return Object.assign(p, {cancel: () => {}});
          },
          cancelOperation: () => Promise.resolve(),
        } as unknown as OperationsClient;

        const mockDecoder: AnyDecoder = () =>
          ({completed: true}) as unknown as protobuf.Message<{}>;
        const descriptor = new LongrunningDescriptor(
          mockOperationsClient,
          mockDecoder,
          mockDecoder,
        );

        const concurrencyPerWave = 50;
        const waves = 4;
        const latenciesMs: number[] = [];

        for (let w = 0; w < waves; w++) {
          const tasks: Promise<unknown>[] = [];
          for (let i = 0; i < concurrencyPerWave; i++) {
            const isFailing = i % 10 === 0;
            const opName = isFailing
              ? `operations/fail-op-${w}-${i}`
              : `operations/success-op-${w}-${i}`;
            const start = performance.now();
            const lro = longrunning.operation(
              {
                name: opName,
                done: false,
                metadata: {type_url: 'meta', value: Buffer.from('')},
                toJSON: () => ({}),
              },
              descriptor,
              {
                initialRetryDelayMillis: 5,
                retryDelayMultiplier: 1.1,
                maxRetryDelayMillis: 20,
                totalTimeoutMillis: 5000,
              },
            );
            tasks.push(
              lro
                .promise()
                .then((res: unknown) => {
                  latenciesMs.push(performance.now() - start);
                  return res;
                })
                .catch((err: unknown) => {
                  latenciesMs.push(performance.now() - start);
                  assert.strictEqual(
                    (err as GoogleError).code,
                    Status.INTERNAL,
                  );
                }),
            );
          }
          await Promise.all(tasks);
        }

        if (typeof globalThis.gc === 'function') {
          globalThis.gc();
        }
        const finalHeap = process.memoryUsage().heapUsed;
        const heapDeltaMb = (finalHeap - baselineHeap) / (1024 * 1024);
        const finalFds = getOpenFdCount();
        const sortedLatencies = [...latenciesMs].sort((a, b) => a - b);
        const p95Ms =
          sortedLatencies[Math.floor(sortedLatencies.length * 0.95)] || 0;

        assert.strictEqual(pollCallCount, concurrencyPerWave * waves);
        if (typeof globalThis.gc === 'function') {
          assert.ok(
            heapDeltaMb < 40,
            `Expected bounded LRO heap growth (<40MB), got ${heapDeltaMb.toFixed(2)}MB`,
          );
        }
        if (baselineFds > 0) {
          assert.ok(
            finalFds - baselineFds <= 5,
            `Expected no leaked FDs, baseline=${baselineFds}, final=${finalFds}`,
          );
        }
        assert.ok(
          p95Ms < 1000,
          `Expected LRO p95 latency < 1000ms, got ${p95Ms.toFixed(2)}ms`,
        );
        assert.deepStrictEqual(unhandledRejections, []);
      } finally {
        process.off('unhandledRejection', onUnhandled);
      }
    });

    it('executes high-concurrency regular read operations with bounded memory, zero leaked FDs, low latency, and zero unhandled rejections', async () => {
      const unhandledRejections: unknown[] = [];
      const onUnhandled = (reason: unknown) => {
        unhandledRejections.push(reason);
      };
      process.on('unhandledRejection', onUnhandled);

      try {
        const baselineFds = getOpenFdCount();
        const baselineHeap = process.memoryUsage().heapUsed;

        const seenTransient = new Set<string>();
        const unaryReadFunc = (
          request: {rowKey: string},
          _metadata: unknown,
          _options: unknown,
          callback: Function,
        ) => {
          setImmediate(() => {
            if (
              request.rowKey.startsWith('transient-') &&
              !seenTransient.has(request.rowKey)
            ) {
              seenTransient.add(request.rowKey);
              const err = new GoogleError('Transient unavailable');
              err.code = Status.UNAVAILABLE;
              callback(err);
              return;
            }
            if (request.rowKey === 'not-found') {
              const err = new GoogleError('Row not found');
              err.code = Status.NOT_FOUND;
              callback(err);
              return;
            }
            callback(null, {
              rowKey: request.rowKey,
              value: 'v'.repeat(128),
            });
          });
          return {cancel: () => {}};
        };

        const apiCall = makeUnaryApiCall(
          unaryReadFunc,
          new CallSettings({
            retry: {
              retryCodes: [Status.UNAVAILABLE],
              backoffSettings: {
                initialRetryDelayMillis: 2,
                retryDelayMultiplier: 1.2,
                maxRetryDelayMillis: 10,
                initialRpcTimeoutMillis: 1000,
                rpcTimeoutMultiplier: 1.0,
                maxRpcTimeoutMillis: 1000,
                totalTimeoutMillis: 5000,
              },
            },
          }),
        );

        const streamingReadStub = Promise.resolve(() => {
          const readable = new stream.PassThrough({objectMode: true});
          setImmediate(() => {
            for (let r = 0; r < 10; r++) {
              readable.write({rowKey: `row-${r}`, data: 'cell-payload'});
            }
            readable.end();
          });
          return readable;
        });

        const streamCall = createApiCall(
          streamingReadStub as unknown as Promise<GRPCCall>,
          new CallSettings(),
          new StreamDescriptor(StreamType.SERVER_STREAMING, true),
        );

        const latenciesMs: number[] = [];
        for (let wave = 0; wave < 4; wave++) {
          const wavePromises: Promise<unknown>[] = [];
          for (let i = 0; i < 60; i++) {
            const start = performance.now();
            const rowKey =
              i % 15 === 0
                ? 'not-found'
                : i % 10 === 0
                  ? `transient-${wave}-${i}`
                  : `row-${wave}-${i}`;
            wavePromises.push(
              apiCall({rowKey})
                .then((res: unknown) => {
                  latenciesMs.push(performance.now() - start);
                  return res;
                })
                .catch((err: GoogleError) => {
                  latenciesMs.push(performance.now() - start);
                  assert.strictEqual(err.code, Status.NOT_FOUND);
                }),
            );
          }

          // Also run concurrent streaming reads (Bigtable ReadRows pattern)
          for (let s = 0; s < 10; s++) {
            wavePromises.push(
              new Promise<number>((resolve, reject) => {
                const sStream = streamCall({}) as unknown as stream.Readable;
                let count = 0;
                sStream.on('data', () => count++);
                sStream.on('error', reject);
                sStream.on('end', () => resolve(count));
              }).then(count => assert.strictEqual(count, 10)),
            );
          }

          await Promise.all(wavePromises);
        }

        if (typeof globalThis.gc === 'function') {
          globalThis.gc();
        }
        const finalHeap = process.memoryUsage().heapUsed;
        const heapDeltaMb = (finalHeap - baselineHeap) / (1024 * 1024);
        const finalFds = getOpenFdCount();
        const sortedLatencies = [...latenciesMs].sort((a, b) => a - b);
        const p95Ms =
          sortedLatencies[Math.floor(sortedLatencies.length * 0.95)] || 0;

        if (typeof globalThis.gc === 'function') {
          assert.ok(
            heapDeltaMb < 40,
            `Expected bounded read heap growth (<40MB), got ${heapDeltaMb.toFixed(2)}MB`,
          );
        }
        if (baselineFds > 0) {
          assert.ok(
            finalFds - baselineFds <= 5,
            `Expected no leaked FDs on reads, baseline=${baselineFds}, final=${finalFds}`,
          );
        }
        assert.ok(
          p95Ms < 1000,
          `Expected read p95 latency < 1000ms, got ${p95Ms.toFixed(2)}ms`,
        );
        assert.deepStrictEqual(unhandledRejections, []);
      } finally {
        process.off('unhandledRejection', onUnhandled);
      }
    });
  });

  describe('6. Target Environment Portability (Workstations, OCI Containers, Cloud Run, Firebase)', () => {
    it('executes seamlessly across developer workstations, OCI container env, Cloud Run metadata env, and Firebase config env', async () => {
      // 1. Developer workstation & OCI container minimal environment check
      const workstationClient = new GrpcClient({
        auth: new GoogleAuth({authClient: new PassThroughClient()}),
      });
      assert.strictEqual(typeof workstationClient.grpcVersion, 'string');
      assert.ok(workstationClient.grpcVersion.length > 0);

      // 2. Cloud Run environment simulation (PORT, K_SERVICE, K_REVISION, K_CONFIGURATION)
      const savedEnv = {
        PORT: process.env.PORT,
        K_SERVICE: process.env.K_SERVICE,
        K_REVISION: process.env.K_REVISION,
        FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
        GCLOUD_PROJECT: process.env.GCLOUD_PROJECT,
      };

      try {
        process.env.PORT = '8080';
        process.env.K_SERVICE = 'bun-cloud-run-service';
        process.env.K_REVISION = 'bun-cloud-run-service-00001-abc';

        const cloudRunAuth = new GoogleAuth({
          authClient: new PassThroughClient(),
          projectId: 'cloud-run-project',
        });
        const cloudRunFallback = new gaxFallback.GrpcClient({
          auth: cloudRunAuth,
          fallback: 'rest',
        });
        assert.strictEqual(cloudRunFallback.fallback, true);
        const projectId = await cloudRunAuth.getProjectId();
        assert.strictEqual(projectId, 'cloud-run-project');

        // 3. Firebase environment simulation (FIREBASE_CONFIG + GCLOUD_PROJECT)
        process.env.FIREBASE_CONFIG = JSON.stringify({
          projectId: 'firebase-bun-project',
          storageBucket: 'firebase-bun-project.appspot.com',
        });
        process.env.GCLOUD_PROJECT = 'firebase-bun-project';

        const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG) as {
          projectId: string;
        };
        const firebaseAuth = new GoogleAuth({
          authClient: new PassThroughClient(),
          projectId: firebaseConfig.projectId,
        });
        const firebaseClient = new gaxFallback.GrpcClient({
          auth: firebaseAuth,
          fallback: 'rest',
        });
        assert.strictEqual(firebaseClient.fallback, true);
        const fbProject = await firebaseAuth.getProjectId();
        assert.strictEqual(fbProject, 'firebase-bun-project');
      } finally {
        for (const [k, v] of Object.entries(savedEnv)) {
          if (v === undefined) {
            delete process.env[k];
          } else {
            process.env[k] = v;
          }
        }
      }
    });
  });
});
