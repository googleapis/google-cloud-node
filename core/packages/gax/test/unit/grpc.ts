/**
 * Copyright 2020 Google LLC
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

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-var-requires */

import assert from 'assert';
import * as path from 'path';
import proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {mkdirSync, writeFileSync} from 'fs';
import * as fsp from 'fs/promises';
import {afterEach, describe, it, beforeEach} from 'mocha';

import {protobuf} from '../../src/index';
import {
  GoogleProtoFilesRoot,
  GrpcClient,
  GrpcClientOptions,
  GrpcModule,
} from '../../src/grpc';
import {PassThroughClient} from 'google-auth-library';

function gaxGrpc(options?: GrpcClientOptions) {
  return new GrpcClient(options);
}

describe('grpc', () => {
  describe('grpcVersion', () => {
    it('holds the proper grpc version', () => {
      const grpcModule = '@grpc/grpc-js';
      const grpcVersion = require(`${grpcModule}/package.json`).version;
      assert.strictEqual(gaxGrpc().grpcVersion, grpcVersion);
    });

    it('returns unknown when grpc module is mocked', () => {
      const mockGrpc = {} as unknown as GrpcModule;
      assert.strictEqual(gaxGrpc({grpc: mockGrpc}).grpcVersion, '');
    });
  });

  describe('metadataBuilder', () => {
    const grpcClient = gaxGrpc();

    it('builds metadata', () => {
      const headers: {[name: string]: string} = {
        'X-Dummy-Header': 'Dummy value',
        'Other-Header': 'Other value',
        'X-Goog-Api-Client': 'gl-node/6.6.0 gccl/0.7.0 gax/0.11.0 grpc/1.1.0',
      };
      const builder = grpcClient.metadataBuilder(headers);
      const metadata = builder();
      for (const key in headers) {
        assert.deepStrictEqual(metadata.get(key), [headers[key]]);
      }
    });

    it('adds user metadata', () => {
      const headers = {
        'X-Dummy-Header': 'Dummy value',
        'Other-Header': 'Other value',
        'X-Goog-Api-Client': 'gl-node/6.6.0 gccl/0.7.0 gax/0.11.0 grpc/1.1.0',
      };
      const builder = grpcClient.metadataBuilder(headers);
      const abTesting: {} | null = null;
      const moreHeaders = {foo: 'bar'};
      const metadata = builder(abTesting!, moreHeaders);
      assert.deepStrictEqual(metadata.get('foo'), ['bar']);
    });

    it('does not override x-goog-api-client', () => {
      const headers = {
        'X-Dummy-Header': 'Dummy value',
        'Other-Header': 'Other value',
        'X-Goog-Api-Client': 'gl-node/6.6.0 gccl/0.7.0 gax/0.11.0 grpc/1.1.0',
      };
      const builder = grpcClient.metadataBuilder(headers);
      const abTesting: {} | null = null;
      const moreHeaders = {'x-GOOG-api-CLIENT': 'something else'};
      const metadata = builder(abTesting!, moreHeaders);
      assert.deepStrictEqual(metadata.get('x-goog-api-client'), [
        'gl-node/6.6.0 gccl/0.7.0 gax/0.11.0 grpc/1.1.0',
      ]);
    });

    it.skip('customize api-client header for A/B testing', () => {
      const headers = {
        'X-Goog-Api-Client': 'gl-node/nodeVersion gax/gaxVersion',
      };
      const builder = grpcClient.metadataBuilder(headers);
      let metadata = builder({retry: '1'});
      assert.deepStrictEqual(metadata.get('X-Goog-Api-Client'), [
        'gl-node/nodeVersion gax/gaxVersion gl-abkey1/retry gl-abval1/1',
      ]);

      metadata = builder({retry: '2'});
      assert.deepStrictEqual(metadata.get('X-Goog-Api-Client'), [
        'gl-node/nodeVersion gax/gaxVersion gl-abkey1/retry gl-abval1/2',
      ]);

      metadata = builder();
      assert.deepStrictEqual(metadata.get('X-Goog-Api-Client'), [
        'gl-node/nodeVersion gax/gaxVersion',
      ]);
    });
  });

  class DummyStub {
    constructor(
      public address: {},
      public creds: {},
      public options: {[index: string]: string | number | Function},
    ) {}
  }

  describe('createStub', () => {
    let grpcClient: GrpcClient;
    const dummyChannelCreds = {channelCreds: 'dummyChannelCreds'};
    const stubAuth = {getClient: sinon.stub(), getUniverseDomain: sinon.stub()};
    const stubGrpc = {
      credentials: {
        createSsl: sinon.stub(),
        combineChannelCredentials: sinon.stub(),
        createFromGoogleCredential: sinon.stub(),
      },
    };

    beforeEach(() => {
      const dummyAuth = new PassThroughClient();
      dummyAuth.getRequestHeaders = async () => {
        return new Headers(dummyChannelCreds);
      };

      const dummySslCreds = {sslCreds: 'dummySslCreds'};
      const dummyGrpcAuth = {grpcAuth: 'dummyGrpcAuth'};
      stubAuth.getClient.reset();
      stubGrpc.credentials.createSsl.reset();
      stubGrpc.credentials.combineChannelCredentials.reset();
      stubGrpc.credentials.createFromGoogleCredential.reset();

      stubAuth.getClient.resolves(dummyAuth);
      stubAuth.getUniverseDomain.resolves('googleapis.com');
      stubGrpc.credentials.createSsl.returns(dummySslCreds);
      stubGrpc.credentials.createFromGoogleCredential.returns(dummyGrpcAuth);
      stubGrpc.credentials.combineChannelCredentials
        .withArgs(dummySslCreds, dummyGrpcAuth)
        .returns(dummyChannelCreds);
      grpcClient = gaxGrpc({
        auth: stubAuth,
        grpc: stubGrpc,
      } as unknown as GrpcClientOptions);
    });

    it('creates a stub', () => {
      const opts = {servicePath: 'foo.example.com', port: 443};
      // @ts-ignore
      return grpcClient.createStub(DummyStub, opts).then(stub => {
        assert(stub instanceof DummyStub);
        assert.strictEqual(stub.address, 'foo.example.com:443');
        assert.deepStrictEqual(stub.creds, dummyChannelCreds);
        assert.deepStrictEqual(stub.options, {
          'grpc.max_receive_message_length': -1,
          'grpc.max_send_message_length': -1,
          'grpc.initial_reconnect_backoff_ms': 1000,
        });
      });
    });

    it('validates universe domain if set', async () => {
      const opts = {
        servicePath: 'foo.example.com',
        port: 443,
        universeDomain: 'example.com',
      };
      await assert.rejects(
        // @ts-ignore
        grpcClient.createStub(DummyStub, opts),
        /configured universe domain/,
      );
    });

    it('validates universe domain if unset', async () => {
      const opts = {servicePath: 'foo.example.com', port: 443};
      stubAuth.getUniverseDomain.reset();
      stubAuth.getUniverseDomain.resolves('example.com');
      await assert.rejects(
        // @ts-ignore
        grpcClient.createStub(DummyStub, opts),
        /configured universe domain/,
      );
    });

    it('supports optional parameters', () => {
      const opts = {
        servicePath: 'foo.example.com',
        port: 443,
        'grpc.max_send_message_length': 10 * 1024 * 1024,
        'grpc.initial_reconnect_backoff_ms': 10000,
        other_dummy_options: 'test',
        'grpc.callInvocationTransformer': () => {
          return 42;
        },
        'grpc.channelFactoryOverride': () => {},
        'grpc.gcpApiConfig': {},
        'grpc-node.max_session_memory': 10,
      };
      // @ts-ignore
      return grpcClient.createStub(DummyStub, opts).then(stub => {
        assert(stub instanceof DummyStub);
        assert.strictEqual(stub.address, 'foo.example.com:443');
        assert.deepStrictEqual(stub.creds, dummyChannelCreds);
        [
          'grpc.max_send_message_length',
          'grpc.initial_reconnect_backoff_ms',
          'grpc.max_receive_message_length', // added by createStub
          'callInvocationTransformer', // note: no grpc. prefix for grpc-gcp options
          'channelFactoryOverride',
          'gcpApiConfig',
          'grpc-node.max_session_memory',
        ].forEach(k => {
          assert(stub.options.hasOwnProperty(k));
        });
        // check values
        const dummyStub = stub as unknown as DummyStub;
        assert.strictEqual(
          dummyStub.options['grpc.max_send_message_length'],
          10 * 1024 * 1024,
        );
        assert.strictEqual(
          (dummyStub.options['callInvocationTransformer'] as Function)(),
          42,
        );
        assert.strictEqual(
          dummyStub.options['grpc-node.max_session_memory'],
          10,
        );
        ['servicePath', 'port', 'other_dummy_options'].forEach(k => {
          assert.strictEqual(stub.options.hasOwnProperty(k), false);
        });
      });
    });

    it('supports the older grpc options logic for compatibility', () => {
      const opts = {
        servicePath: 'foo.example.com',
        port: 443,
        'grpc.grpc.max_send_message_length': 10 * 1024 * 1024,
      };
      // @ts-ignore
      return grpcClient.createStub(DummyStub, opts).then(stub => {
        assert(stub instanceof DummyStub);
        [
          'grpc.max_send_message_length',
          'grpc.max_receive_message_length', // added by createStub
        ].forEach(k => {
          assert(stub.options.hasOwnProperty(k));
        });
        ['servicePath', 'port'].forEach(k => {
          assert.strictEqual(stub.options.hasOwnProperty(k), false);
        });
      });
    });

    it('makes it possible to override grpc.max_receive_message_length', () => {
      const opts = {
        servicePath: 'foo.example.com',
        port: 443,
        'grpc.max_receive_message_length': 10 * 1024 * 1024,
      };
      // @ts-ignore
      return grpcClient.createStub(DummyStub, opts).then(stub => {
        assert(stub instanceof DummyStub);
        assert(stub.options.hasOwnProperty('grpc.max_receive_message_length'));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['servicePath', 'port'].forEach(k => {
          assert.strictEqual(stub.options.hasOwnProperty(k), false);
        });
        const dummyStub = stub as unknown as DummyStub;
        assert.strictEqual(
          dummyStub.options['grpc.max_receive_message_length'],
          10 * 1024 * 1024,
        );
      });
    });

    it('uses the passed grpc channel credentials', () => {
      const customCreds = {channelCreds: 'custom'};
      const opts = {
        servicePath: 'foo.example.com',
        port: 443,
        sslCreds: customCreds,
      };
      // @ts-ignore
      return grpcClient.createStub(DummyStub, opts).then(stub => {
        assert(stub instanceof DummyStub);
        assert.strictEqual(stub.address, 'foo.example.com:443');
        assert.deepStrictEqual(stub.creds, customCreds);
        assert.strictEqual(stubAuth.getClient.callCount, 0);
        const credentials = stubGrpc.credentials;
        assert.strictEqual(credentials.createSsl.callCount, 0);
        assert.strictEqual(credentials.combineChannelCredentials.callCount, 0);
        assert.strictEqual(credentials.createFromGoogleCredential.callCount, 0);
      });
    });
  });

  describe('loadProto', () => {
    const grpcClient = gaxGrpc();
    const TEST_FILE = path.join(
      'google',
      'example',
      'library',
      'v1',
      'library.proto',
    );
    const TEST_FILE_NO_DEPS = path.join(
      'google',
      'example',
      'library',
      'v1',
      'test.proto',
    );
    const TEST_PATH = path.resolve(__dirname, '..', '..', 'test', 'fixtures');
    const TEST_JSON = path.resolve(
      __dirname,
      '..',
      '..',
      'test',
      'fixtures',
      'library.json',
    );

    it('should load the test file', () => {
      // no-any disabled because if the accessed fields are non-existent, this
      // test will fail anyway.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const protos = grpcClient.loadProto(TEST_PATH, TEST_FILE) as any;
      assert.strictEqual(
        typeof protos.google.example.library.v1.LibraryService,
        'function',
      );
    });

    it('should load the test file as JSON', () => {
      // no-any disabled because if the accessed fields are non-existent, this
      // test will fail anyway.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const protos = grpcClient.loadProtoJSON(require(TEST_JSON)) as any;
      assert.strictEqual(
        typeof protos.google.example.library.v1.LibraryService,
        'function',
      );
    });

    it('should load the test file with no dependencies using single parameter syntax', () => {
      // no-any disabled because if the accessed fields are non-existent, this
      // test will fail anyway.
      const protos = grpcClient.loadProto(
        path.join(TEST_PATH, TEST_FILE_NO_DEPS),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as any;
      assert(protos.test.TestMessage);
    });

    it('should load a common proto', () => {
      const nonExistentDir = path.join(__dirname, 'nonexistent', 'dir');
      const iamService = path.join('google', 'iam', 'v1', 'iam_policy.proto');
      // no-any disabled because if the accessed fields are non-existent, this
      // test will fail anyway.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const protos = grpcClient.loadProto(nonExistentDir, iamService) as any;
      assert.strictEqual(typeof protos.google.iam.v1.IAMPolicy, 'function');
    });

    it('should be able to load no files', () => {
      const protos = grpcClient.loadProto('.', []);
      assert.deepStrictEqual(protos, {});
    });

    it('should load multiple files', () => {
      const iamService = path.join('google', 'iam', 'v1', 'iam_policy.proto');
      // no-any disabled because if the accessed fields are non-existent, this
      // test will fail anyway.
      const protos = grpcClient.loadProto(TEST_PATH, [
        TEST_FILE,
        iamService,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ]) as any;
      assert.strictEqual(
        typeof protos.google.example.library.v1.LibraryService,
        'function',
      );
      assert.strictEqual(typeof protos.google.iam.v1.IAMPolicy, 'function');
    });

    it('should emit an error for not found proto', () => {
      const nonExistentDir = path.join(__dirname, 'nonexistent', 'dir');
      const nonExistentFile = 'nonexistent.proto';
      assert.throws(
        grpcClient.loadProto.bind(null, nonExistentDir, nonExistentFile),
      );
    });

    it('should cache the loaded proto', () => {
      const proto1 = grpcClient.loadProto(TEST_PATH, TEST_FILE);
      const proto2 = grpcClient.loadProto(TEST_PATH, TEST_FILE);
      assert.strictEqual(proto1, proto2);
    });

    it('should cache the loaded JSON proto', () => {
      const proto1 = grpcClient.loadProtoJSON(require(TEST_JSON));
      const proto2 = grpcClient.loadProtoJSON(require(TEST_JSON));
      assert.strictEqual(proto1, proto2);
    });

    it('should not take proto from cache if parameters differ', () => {
      const iamService = path.join('google', 'iam', 'v1', 'iam_policy.proto');
      const proto1 = grpcClient.loadProto(TEST_PATH, TEST_FILE);
      const proto2 = grpcClient.loadProto(TEST_PATH, iamService);
      assert.notStrictEqual(proto1, proto2);
    });

    it('should ignore cache if asked', () => {
      const proto1 = grpcClient.loadProto(
        TEST_PATH,
        TEST_FILE,
        /*ignoreCache:*/ true,
      );
      const proto2 = grpcClient.loadProto(
        TEST_PATH,
        TEST_FILE,
        /*ignoreCache:*/ true,
      );
      assert.notStrictEqual(proto1, proto2);
    });

    it('should ignore cache if asked for JSON protos', () => {
      const proto1 = grpcClient.loadProtoJSON(
        require(TEST_JSON),
        /*ignoreCache:*/ true,
      );
      const proto2 = grpcClient.loadProtoJSON(
        require(TEST_JSON),
        /*ignoreCache:*/ true,
      );
      assert.notStrictEqual(proto1, proto2);
    });

    it('should clear the proto cache if asked', () => {
      const proto1 = grpcClient.loadProto(TEST_PATH, TEST_FILE);
      GrpcClient.clearProtoCache();
      const proto2 = grpcClient.loadProto(TEST_PATH, TEST_FILE);
      assert.notStrictEqual(proto1, proto2);
    });
  });

  describe('GoogleProtoFilesRoot', () => {
    const FIXTURES_DIR = path.join(
      path.resolve(__dirname, '../../test'),
      'fixtures',
      'google',
      'example',
      'library',
      'v1',
    );
    const TEST_FILE = path.join(FIXTURES_DIR, 'library.proto');
    const NON_EXISTENT_FILE = path.join(
      __dirname,
      'does',
      'not',
      'exist.proto',
    );
    const MISSING_INCLUDE_FILE = path.join(
      FIXTURES_DIR,
      'missing_include.proto',
    );

    describe('use with protobufjs load', () => {
      it('should not be able to load test file using protobufjs directly', done => {
        protobuf.load(TEST_FILE).then(
          () => {
            done(Error('should not get here'));
          },
          () => {
            done();
          },
        );
      });

      it('should load a test file', done => {
        protobuf
          .load(TEST_FILE, new GoogleProtoFilesRoot())
          .then(root => {
            assert(root instanceof protobuf.Root);
            assert(
              root.lookup('google.example.library.v1.LibraryService') instanceof
                protobuf.Service,
            );
            assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
            done();
          })
          .catch(done);
      });

      it('should fail trying to load a non existent file.', done => {
        protobuf
          .load(NON_EXISTENT_FILE, new GoogleProtoFilesRoot())
          .then(() => {
            done(Error('should not get here'));
          })
          .catch(() => {
            done();
          });
      });

      it('should fail loading a file with a missing include.', done => {
        protobuf
          .load(MISSING_INCLUDE_FILE, new GoogleProtoFilesRoot())
          .then(() => {
            done(Error('should not get here'));
          })
          .catch(() => {
            done();
          });
      });
    });

    describe('use with protobufjs loadSync', () => {
      it('should not be able to load test file using protobufjs directly', () => {
        assert.throws(() => {
          protobuf.loadSync(TEST_FILE);
        });
      });

      it('should load a test file that relies on common protos', () => {
        const root = protobuf.loadSync(TEST_FILE, new GoogleProtoFilesRoot());
        assert(root instanceof protobuf.Root);
        assert(
          root.lookup('google.example.library.v1.LibraryService') instanceof
            protobuf.Service,
        );
        assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
      });

      it('should fail trying to load a non existent file.', () => {
        assert.throws(
          protobuf.loadSync.bind(
            null,
            NON_EXISTENT_FILE,
            new GoogleProtoFilesRoot(),
          ),
        );
      });

      it('should fail loading a file with a missing include', () => {
        assert.throws(
          protobuf.loadSync.bind(
            null,
            MISSING_INCLUDE_FILE,
            new GoogleProtoFilesRoot(),
          ),
        );
      });
    });

    describe('_findIncludePath', () => {
      const originPath = path.join('test', 'path', 'location');
      const includePath = path.join('example', 'import.proto');

      it('should throw an error if a file is not found', () => {
        const findIncludePath = proxyquire('../../src/grpc', {
          fs: {
            existsSync: () => {
              return false;
            },
          },
        }).GoogleProtoFilesRoot._findIncludePath;
        assert.throws(findIncludePath.bind(null, originPath, includePath));
      });

      it('should return the correct resolved import path', () => {
        const correctPath = path.join('test', 'example', 'import.proto');
        const findIncludePath = proxyquire('../../src/grpc', {
          fs: {
            existsSync(path: string) {
              return path === correctPath;
            },
          },
        }).GoogleProtoFilesRoot._findIncludePath;
        assert.strictEqual(
          findIncludePath(originPath, includePath),
          correctPath,
        );
      });
    });
  });

  describe('_mtlsServicePath', () => {
    afterEach(() => {
      delete process.env.GOOGLE_API_USE_MTLS_ENDPOINT;
    });
    it('returns custom service path if one provided', () => {
      const expected = 'https://foo.googleapis.com';
      const client = gaxGrpc();
      const servicePath = client._mtlsServicePath(expected, true, true);
      assert.strictEqual(servicePath, expected);
    });
    it('returns original service path if GOOGLE_API_USE_MTLS_ENDPOINT=never', () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'never';
      const expected = 'https://foo.googleapis.com';
      const client = gaxGrpc();
      const servicePath = client._mtlsServicePath(expected, false, true);
      assert.strictEqual(servicePath, expected);
    });
    it('returns mTLS service path if certificate found, and discovery is auto', () => {
      const expected = 'https://foo.mtls.googleapis.com';
      const client = gaxGrpc();
      const servicePath = client._mtlsServicePath(
        'https://foo.googleapis.com',
        false,
        true,
      );
      assert.strictEqual(servicePath, expected);
    });
    it('returns mTLS service path if certificate found, and GOOGLE_API_USE_MTLS_ENDPOINT=always', () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      const expected = 'https://foo.mtls.googleapis.com';
      const client = gaxGrpc();
      const servicePath = client._mtlsServicePath(
        'https://foo.googleapis.com',
        false,
        false,
      );
      assert.strictEqual(servicePath, expected);
    });
  });
  describe('_detectClientCertificate', () => {
    const tmpFolder = 'tmp-secure-context';
    const sandbox = sinon.createSandbox();
    const certExpected = `-----BEGIN CERTIFICATE-----
qwerty
-----END CERTIFICATE-----`;
    const keyExpected = `-----BEGIN PRIVATE KEY-----
dvorak
-----END PRIVATE KEY-----`;
    const metadataFileContents = {
      cert_provider_command: ['echo', certExpected, keyExpected],
    };
    afterEach(() => {
      sandbox.restore();
      delete process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE;
    });
    it('does not read certificate if GOOGLE_API_USE_CLIENT_CERTIFICATE not set', async () => {
      const client = gaxGrpc();
      const [cert, key] = await client._detectClientCertificate();
      assert.strictEqual(cert, undefined);
      assert.strictEqual(key, undefined);
    });
    it('reads certificate and key from command in metadata file', async () => {
      // Pretend that "tmp-secure-context" in the current folder is the
      // home directory, so that we can test logic for loading
      // context_aware_metadata.json from well known location:
      const tmpdir = path.join(tmpFolder, '.secureConnect');
      mkdirSync(tmpdir, {recursive: true});
      const metadataFile = path.join(tmpdir, 'context_aware_metadata.json');
      writeFileSync(metadataFile, JSON.stringify(metadataFileContents), 'utf8');
      // Create a client and test the certificate detection flow:
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'true';
      const client = gaxGrpc();
      client.baseDirectory = tmpFolder;
      const [cert, key] = await client._detectClientCertificate();
      assert.ok(cert.includes('qwerty'));
      assert.ok(key.includes('dvorak'));
      await fsp.rm(tmpFolder, {recursive: true, force: true}); // Cleanup.
    });
    it('throws if attempted to use mTLS in non-default universe', async () => {
      // Pretend that "tmp-secure-context" in the current folder is the
      // home directory, so that we can test logic for loading
      // context_aware_metadata.json from well known location:
      const tmpdir = path.join(tmpFolder, '.secureConnect');
      mkdirSync(tmpdir, {recursive: true});
      const metadataFile = path.join(tmpdir, 'context_aware_metadata.json');
      writeFileSync(metadataFile, JSON.stringify(metadataFileContents), 'utf8');
      // Create a client and test the certificate detection flow:
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'true';
      const client = gaxGrpc();
      client.baseDirectory = tmpFolder;
      await assert.rejects(
        // @ts-ignore
        client.createStub(DummyStub, {universeDomain: 'example.com'}),
        /mTLS is not supported outside of googleapis.com universe domain/,
      );
      await fsp.rm(tmpFolder, {recursive: true, force: true}); // Cleanup.
    });
  });
});
