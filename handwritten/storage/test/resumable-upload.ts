// Copyright 2022 Google LLC
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

import assert from 'assert';
import {describe, it, beforeEach, before, afterEach, after} from 'mocha';
import * as crypto from 'crypto';
import * as mockery from 'mockery';
import nock from 'nock';
import * as path from 'path';
import * as sinon from 'sinon';
import {Readable, Writable} from 'stream';
import {
  RETRY_DELAY_MULTIPLIER_DEFAULT,
  TOTAL_TIMEOUT_DEFAULT,
  MAX_RETRY_DELAY_DEFAULT,
  AUTO_RETRY_DEFAULT,
  MAX_RETRY_DEFAULT,
  RETRYABLE_ERR_FN_DEFAULT,
} from '../src/storage.js';

import {
  ApiError,
  CreateUriCallback,
  PROTOCOL_REGEX,
  UploadConfig,
} from '../src/resumable-upload.js';
import {GaxiosOptions, GaxiosError, GaxiosResponse} from 'gaxios';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {getDirName} from '../src/util.js';
import {FileExceptionMessages} from '../src/file.js';

nock.disableNetConnect();

class AbortController {
  aborted = false;
  signal = this;
  abort() {
    this.aborted = true;
  }
}

const RESUMABLE_INCOMPLETE_STATUS_CODE = 308;
/** 256 KiB */
const CHUNK_SIZE_MULTIPLE = 2 ** 18;
const queryPath = '/?userProject=user-project-id';
const X_GOOG_API_HEADER_REGEX =
  /^gl-node\/(?<nodeVersion>[^W]+) gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+) gccl-gcs-cmd\/(?<gcclGcsCmd>[^W]+)$/;
const USER_AGENT_REGEX = /^gcloud-node-storage\/(?<libVersion>[^W]+)$/;
const CORRECT_CLIENT_CRC32C = 'Q2hlY2tzdW0h';
const INCORRECT_SERVER_CRC32C = 'Q2hlY2tzdVUa';
const CORRECT_CLIENT_MD5 = 'CorrectMD5Hash';
const INCORRECT_SERVER_MD5 = 'IncorrectMD5Hash';

function mockAuthorizeRequest(
  code = 200,
  data: {} | string = {
    access_token: 'abc123',
  }
) {
  return nock('https://www.googleapis.com')
    .post('/oauth2/v4/token')
    .reply(code, data);
}

describe('resumable-upload', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let upload: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let up: any;

  const BUCKET = 'bucket-name';
  const CUSTOM_REQUEST_OPTIONS = {headers: {'X-My-Header': 'My custom value'}};
  const FILE = 'file-name';
  const GENERATION = Date.now();
  const METADATA = {contentLength: 1024, contentType: 'application/json'};
  const ORIGIN = '*';
  const PARAMS = {ifMetagenerationNotMatch: 3};
  const PREDEFINED_ACL = 'authenticatedRead';
  const USER_PROJECT = 'user-project-id';
  const API_ENDPOINT = 'https://fake.googleapis.com';
  const BASE_URI = `${API_ENDPOINT}/upload/storage/v1/b`;
  const RETRY_OPTIONS = {
    retryDelayMultiplier: RETRY_DELAY_MULTIPLIER_DEFAULT,
    totalTimeout: TOTAL_TIMEOUT_DEFAULT,
    maxRetryDelay: MAX_RETRY_DELAY_DEFAULT,
    autoRetry: AUTO_RETRY_DEFAULT,
    maxRetries: MAX_RETRY_DEFAULT,
    retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
  };
  let REQ_OPTS: GaxiosOptions;
  const keyFile = path.join(getDirName(), '../../../test/fixtures/keys.json');

  before(() => {
    mockery.registerMock('abort-controller', AbortController);
    mockery.enable({useCleanCache: true, warnOnUnregistered: false});
    upload = require('../src/resumable-upload').upload;
  });

  beforeEach(() => {
    REQ_OPTS = {url: 'http://fake.local'};
    up = upload({
      bucket: BUCKET,
      file: FILE,
      customRequestOptions: CUSTOM_REQUEST_OPTIONS,
      generation: GENERATION,
      metadata: METADATA,
      origin: ORIGIN,
      params: PARAMS,
      predefinedAcl: PREDEFINED_ACL,
      userProject: USER_PROJECT,
      authConfig: {keyFile},
      apiEndpoint: API_ENDPOINT,
      retryOptions: {...RETRY_OPTIONS},
      [GCCL_GCS_CMD_KEY]: 'sample.command',
      clientCrc32c: CORRECT_CLIENT_CRC32C,
      clientMd5Hash: CORRECT_CLIENT_MD5,
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  after(() => {
    mockery.deregisterAll();
    mockery.disable();
  });

  describe('ctor', () => {
    it('should be a Writable', () => {
      assert(up instanceof Writable);
    });

    it('should throw if a bucket or file is not given', () => {
      assert.throws(() => {
        upload();
      }, /A bucket and file name are required/);
    });

    it('should localize the bucket', () => {
      assert.strictEqual(up.bucket, BUCKET);
    });

    it('should localize the cacheKey', () => {
      assert.strictEqual(up.cacheKey, [BUCKET, FILE, GENERATION].join('/'));
    });

    it('should localize customRequestOptions', () => {
      assert.strictEqual(up.customRequestOptions, CUSTOM_REQUEST_OPTIONS);
    });

    it('should default customRequestOptions to empty object', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });
      assert.deepStrictEqual(up.customRequestOptions, {});
    });

    it('should include ZERO generation value in the cacheKey', () => {
      const upWithZeroGeneration = upload({
        bucket: BUCKET,
        file: FILE,
        generation: 0,
        metadata: METADATA,
        origin: ORIGIN,
        predefinedAcl: PREDEFINED_ACL,
        userProject: USER_PROJECT,
        authConfig: {keyFile},
        apiEndpoint: API_ENDPOINT,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(
        upWithZeroGeneration.cacheKey,
        [BUCKET, FILE, 0].join('/')
      );
    });

    it('should not include a generation in the cacheKey if it was not set', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });

      assert.strictEqual(up.cacheKey, [BUCKET, FILE].join('/'));
    });

    it('should localize the file', () => {
      assert.strictEqual(up.file, FILE);
    });

    it('should localize the generation', () => {
      assert.strictEqual(up.generation, GENERATION);
    });

    it('should localize the apiEndpoint', () => {
      assert.strictEqual(up.apiEndpoint, API_ENDPOINT);
      assert.strictEqual(up.baseURI, BASE_URI);
    });

    it('should prepend https:// to apiEndpoint if not present', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        apiEndpoint: 'fake.googleapis.com',
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.apiEndpoint, API_ENDPOINT);
      assert.strictEqual(up.baseURI, BASE_URI);
    });

    it('should localize the KMS key name', () => {
      const kmsKeyName = 'kms-key-name';
      const up = upload({
        bucket: 'BUCKET',
        file: FILE,
        kmsKeyName,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.kmsKeyName, kmsKeyName);
    });

    it('should localize metadata or default to empty object', () => {
      assert.strictEqual(up.metadata, METADATA);

      const upWithoutMetadata = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });
      assert.deepStrictEqual(upWithoutMetadata.metadata, {});
    });

    it('should set the offset if it is provided', () => {
      const offset = 10;
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        offset,
        uri: 'https://example.com',
        retryOptions: RETRY_OPTIONS,
      });

      assert.strictEqual(up.offset, offset);
    });

    it('should localize the origin', () => {
      assert.strictEqual(up.origin, ORIGIN);
    });

    it('should localize the params', () => {
      assert.strictEqual(up.params, PARAMS);
    });

    it('should localize userProject', () => {
      assert.strictEqual(up.userProject, USER_PROJECT);
    });

    it('should localize an encryption object from a key', () => {
      const key = crypto.randomBytes(32);
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        key,
        retryOptions: RETRY_OPTIONS,
      });
      const expectedKey = key.toString('base64');
      const expectedHash = crypto
        .createHash('sha256')
        .update(key)
        .digest('base64');
      assert.deepStrictEqual(up.encryption, {
        key: expectedKey,
        hash: expectedHash,
      });
    });

    it('should localize the predefinedAcl', () => {
      assert.strictEqual(up.predefinedAcl, PREDEFINED_ACL);
    });

    it('should set the predefinedAcl with public: true', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        public: true,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.predefinedAcl, 'publicRead');
    });

    it('should set the predefinedAcl with private: true', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        private: true,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.predefinedAcl, 'private');
    });

    it('should set numBytesWritten to 0', () => {
      assert.strictEqual(up.numBytesWritten, 0);
    });

    it('should set numRetries to 0', () => {
      assert.strictEqual(up.numRetries, 0);
    });

    it('should set the contentLength if provided', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        metadata: {contentLength: METADATA.contentLength},
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.contentLength, METADATA.contentLength);
    });

    it('should default the contentLength to *', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.contentLength, '*');
    });

    it('should localize the uri', () => {
      const uri = 'http://www.blah.com/';
      const upWithUri = upload({
        bucket: BUCKET,
        file: FILE,
        uri,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(upWithUri.uriProvidedManually, true);
      assert.strictEqual(upWithUri.uri, uri);
    });

    it('should not have `chunkSize` by default', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.chunkSize, undefined);
    });

    it('should accept and set `chunkSize`', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        chunkSize: 123,
        retryOptions: RETRY_OPTIONS,
      });
      assert.strictEqual(up.chunkSize, 123);
    });

    it('should have a default `writableHighWaterMark`', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
      });

      assert(up.writableHighWaterMark);
    });

    it('should accept a `highWaterMark` and set a `writableHighWaterMark`', () => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
        highWaterMark: 123,
      });
      assert.strictEqual(up.writableHighWaterMark, 123);
    });

    describe('on write', () => {
      let uri = '';

      beforeEach(() => {
        uri = 'uri';
      });

      it("should emit 'writing' when piped", done => {
        let read = false;
        const upstreamBuffer = new Readable({
          read() {
            if (!read) {
              this.push(Buffer.alloc(1));
              read = true;
            }
          },
        });

        up.createURI = () => {};
        up.once('writing', () => {
          upstreamBuffer.push(null);
          done();
        });
        upstreamBuffer.pipe(up);
      });

      it("should set `upstreamEnded` to `true` and emit 'upstreamFinished' on `#end()`", done => {
        const upstreamBuffer = new Readable({
          read() {
            this.push(Buffer.alloc(1));
            this.push(null);
          },
        });

        up.createURI = () => {};
        up.once('writing', () => {
          up.on('upstreamFinished', () => {
            assert.equal(up.upstreamEnded, true);
            done();
          });

          assert.equal(up.upstreamEnded, false);

          up.once('wroteToChunkBuffer', () => up.emit('readFromChunkBuffer'));
        });
        upstreamBuffer.pipe(up);
      });

      it('should continue uploading', done => {
        up.uri = uri;
        up.continueUploading = done;
        up.emit('writing');
      });

      it('should create an upload', done => {
        up.startUploading = done;
        up.createURI = (callback: CreateUriCallback) => {
          callback(null);
        };
        up.emit('writing');
      });

      it('should destroy the stream from an error', done => {
        const error: ApiError = {
          message: ':(',
          name: ':(',
          code: 123,
        };
        up.destroy = (err: ApiError) => {
          assert(err.message.indexOf(error.message) > -1);
          assert(err.name.indexOf(error.name) > -1);
          assert.strictEqual(err.code, 123);
          done();
        };
        up.createURI = (callback: CreateUriCallback) => {
          callback(error);
        };
        up.emit('writing');
      });
    });
  });

  describe('upstream', () => {
    beforeEach(() => {
      up.createURI = () => {};
    });

    it('should handle writes to class', done => {
      up.on('wroteToChunkBuffer', () => {
        assert.equal(up.writeBuffers[0].byteLength, 16);
        done();
      });

      up.write(Buffer.alloc(16));
    });

    it("should setup a 'uploadFinished' handler on 'upstreamFinished'", done => {
      assert.equal(up.eventNames().includes('uploadFinished'), false);

      up.on('upstreamFinished', () => {
        assert.equal(up.eventNames().includes('uploadFinished'), true);
        done();
      });

      up.end();
    });

    it("should finish only after 'uploadFinished' is emitted", done => {
      const upstreamBuffer = new Readable({
        read() {
          this.push(Buffer.alloc(1));
          this.push(null);
        },
      });

      // Readable has ended
      upstreamBuffer.on('end', () => {
        // The data has been written to the buffer
        up.on('wroteToChunkBuffer', () => {
          // Allow the writer's callback be called immediately
          up.emit('readFromChunkBuffer');

          // setting up the listener now to prove it hasn't been fired before
          up.on('finish', done);
          process.nextTick(() => up.emit('uploadFinished'));
        });
      });

      upstreamBuffer.pipe(up);
    });
  });

  describe('#_write', () => {
    beforeEach(() => {
      up.createURI = () => {};
    });

    it('should append buffer to existing `writeBuffers`', () => {
      up.writeBuffers = [Buffer.from('abc')];
      up.write(Buffer.from('def'));

      assert.equal(
        Buffer.compare(Buffer.concat(up.writeBuffers), Buffer.from('abcdef')),
        0
      );
    });

    it('should convert string with encoding to Buffer and append to existing `writeBuffers`', () => {
      const existing = 'a ';
      const sample = '🦃';
      const concat = existing + sample;

      up.writeBuffers = [Buffer.from(existing)];

      up.write(sample, 'utf-8', () => {});

      for (const buf of up.writeBuffers) {
        assert(Buffer.isBuffer(buf));
      }
      assert.equal(Buffer.concat(up.writeBuffers), concat);
    });

    it("should callback on 'readFromChunkBuffer'", done => {
      // The 'done' here is a callback from 'readFromChunkBuffer'
      up.write('sample', 'utf-8', done);
      up.emit('readFromChunkBuffer');
    });

    it("should emit 'wroteToChunkBuffer' asynchronously", done => {
      up.write('sample', 'utf-8', () => {});

      // setting this here proves it's async
      up.on('wroteToChunkBuffer', done);
    });
  });

  describe('#prependLocalBufferToUpstream', () => {
    it('should synchronously prepend to existing buffer', () => {
      up.localWriteCache = [Buffer.from('123')];
      up.localWriteCacheByteLength = up.localWriteCache[0].byteLength;
      up.writeBuffers = [Buffer.from('456')];

      up.prependLocalBufferToUpstream();

      assert.equal(up.localWriteCache.length, 0);
      // shouldn't concat any buffers, thus writeBuffers.length = 2
      assert.equal(up.writeBuffers.length, 2);
      assert.equal(Buffer.concat(up.writeBuffers).toString(), '123456');
      assert.equal(up.localWriteCacheByteLength, 0);
    });

    it('should keep the desired last few bytes', () => {
      up.localWriteCache = [Buffer.from('123'), Buffer.from('456')];
      up.localWriteCacheByteLength = up.localWriteCache.reduce(
        (a: Buffer, b: number) => a.byteLength + b
      );
      up.writeBuffers = [Buffer.from('789')];

      up.prependLocalBufferToUpstream(2);

      assert.equal(up.localWriteCache.length, 0);
      // shouldn't concat any buffers, thus writeBuffers.length = 2
      assert.equal(up.writeBuffers.length, 2);
      assert.equal(Buffer.concat(up.writeBuffers).toString(), '56789');
      assert.equal(up.localWriteCacheByteLength, 0);
    });
  });

  describe('#pullFromChunkBuffer', () => {
    it('should retrieve from the beginning of the `writeBuffers`', () => {
      up.writeBuffers = [Buffer.from('ab')];

      const [chunk] = [...up.pullFromChunkBuffer(1)];
      assert.equal(chunk.toString(), 'a');
      assert.equal(up.writeBuffers.length, 1);
      assert.equal(up.writeBuffers[0].toString(), 'b');
    });

    it('should retrieve no more than the limit provided', () => {
      up.writeBuffers = [Buffer.from('0123456789')];

      const chunks = [...up.pullFromChunkBuffer(4)];
      assert.equal(chunks.join('').toString(), '0123');

      // length should be 1
      assert.equal(up.writeBuffers.length, 1);
      assert.equal(up.writeBuffers[0].toString(), '456789');
    });

    it('should retrieve less than the limit if no more data is available (single write)', () => {
      up.writeBuffers = [Buffer.from('0123456789')];

      const chunks = [...up.pullFromChunkBuffer(512)];
      assert.equal(chunks.join('').toString(), '0123456789');
      assert.equal(up.writeBuffers.length, 0);
    });

    it('should retrieve less than the limit if no more data is available (multi write)', () => {
      // an array of 1-char buffers
      up.writeBuffers = '0123456789'.split('').map(c => Buffer.from(c));

      const chunks = [...up.pullFromChunkBuffer(512)];
      assert.equal(chunks.join('').toString(), '0123456789');
      assert.equal(up.writeBuffers.length, 0);
    });

    it('should retrieve a subset of part of a buffer and prepend the remainder', () => {
      up.writeBuffers = [
        Buffer.from('0'),
        Buffer.from('123'),
        Buffer.from('456'), // this buffer should be split
        Buffer.from('789'),
      ];

      const chunks = [...up.pullFromChunkBuffer(5)];
      assert.equal(chunks.join('').toString(), '01234');
      assert.equal(up.writeBuffers.length, 2);
      assert.equal(up.writeBuffers[0].toString(), '56');
      assert.equal(up.writeBuffers[1].toString(), '789');
    });

    it('should return all data if `Infinity` is provided', () => {
      up.writeBuffers = [Buffer.from('012345'), Buffer.from('6789')];
      const chunks = [...up.pullFromChunkBuffer(Infinity)];
      assert.equal(chunks.join('').toString(), '0123456789');
      assert.equal(up.writeBuffers.length, 0);
    });

    it("should emit 'readFromChunkBuffer' synchronously on each iterator", () => {
      up.writeBuffers = [Buffer.from('012345'), Buffer.from('6789')];

      const iter = up.pullFromChunkBuffer(Infinity);
      let count = 0;
      let loop = 0;

      up.on('readFromChunkBuffer', () => count++);

      while (!iter.next().done) {
        assert.equal(count, loop++);
      }
    });
  });

  describe('#waitForNextChunk', () => {
    it('should resolve `true` asynchronously if `writeBuffers.length` has data', async () => {
      up.writeBuffers = [Buffer.from('ab')];

      assert(await up.waitForNextChunk());
    });

    it('should resolve `false` asynchronously if `upstreamEnded`', async () => {
      up.upstreamEnded = true;

      assert.equal(await up.waitForNextChunk(), false);
    });

    it('should resolve `true` asynchronously if `writeBuffers.length` and `upstreamEnded`', async () => {
      up.writeBuffers = [Buffer.from('ab')];
      up.upstreamEnded = true;

      assert(await up.waitForNextChunk());
    });

    it('should wait for `wroteToChunkBuffer` if !`writeBuffers.length` && !`upstreamEnded`', async () => {
      const result = await new Promise(resolve => {
        up.waitForNextChunk().then(resolve);
        up.emit('wroteToChunkBuffer');
      });

      assert(result);
    });

    it("should wait for 'upstreamFinished' if !`writeBuffers.length` && !`upstreamEnded`", async () => {
      await new Promise(resolve => {
        up.waitForNextChunk().then(resolve);
        up.emit('upstreamFinished');
      });
    });

    it("should wait for 'upstreamFinished' and resolve `false` if data is not available", async () => {
      const result = await new Promise(resolve => {
        up.waitForNextChunk().then(resolve);
        up.emit('upstreamFinished');
      });

      assert.equal(result, false);
    });

    it("should wait for 'upstreamFinished' and resolve `true` if data is available", async () => {
      const result = await new Promise(resolve => {
        up.on('newListener', (event: string) => {
          if (event === 'upstreamFinished') {
            // Update the `writeBuffers` before emitting 'upstreamFinished'
            up.writeBuffers = [Buffer.from('abc')];

            process.nextTick(() => up.emit('upstreamFinished'));
          }
        });

        up.waitForNextChunk().then(resolve);
      });

      assert.equal(result, true);
    });

    it("should wait for 'upstreamFinished' if !`writeBuffers.length` && !`upstreamEnded`", async () => {
      await new Promise(resolve => {
        up.waitForNextChunk().then(resolve);
        up.emit('upstreamFinished');
      });
    });

    it("should wait for 'upstreamFinished' and resolve `false` if data is not available", async () => {
      const result = await new Promise(resolve => {
        up.waitForNextChunk().then(resolve);
        up.emit('upstreamFinished');
      });

      assert.equal(result, false);
    });

    it("should wait for 'upstreamFinished' and resolve `true` if data is available", async () => {
      const result = await new Promise(resolve => {
        up.on('newListener', (event: string) => {
          if (event === 'upstreamFinished') {
            // Update the `writeBuffers` before emitting 'upstreamFinished'
            up.writeBuffers = [Buffer.from('abc')];

            process.nextTick(() => up.emit('upstreamFinished'));
          }
        });

        up.waitForNextChunk().then(resolve);
      });

      assert.equal(result, true);
    });

    it('should remove listeners after calling back from `wroteToChunkBuffer`', async () => {
      assert.equal(up.listenerCount('wroteToChunkBuffer'), 0);
      assert.equal(up.listenerCount('upstreamFinished'), 0);

      await new Promise(resolve => {
        up.on('newListener', (event: string) => {
          if (event === 'wroteToChunkBuffer') {
            process.nextTick(() => up.emit('wroteToChunkBuffer'));
          }
        });

        up.waitForNextChunk().then(resolve);
      });

      assert.equal(up.listenerCount('wroteToChunkBuffer'), 0);
      assert.equal(up.listenerCount('upstreamFinished'), 0);
    });

    it("should remove listeners after calling back from 'upstreamFinished'", async () => {
      assert.equal(up.listenerCount('wroteToChunkBuffer'), 0);
      assert.equal(up.listenerCount('upstreamFinished'), 0);

      await new Promise(resolve => {
        up.on('newListener', (event: string) => {
          if (event === 'upstreamFinished') {
            process.nextTick(() => up.emit('upstreamFinished'));
          }
        });

        up.waitForNextChunk().then(resolve);
      });

      assert.equal(up.listenerCount('wroteToChunkBuffer'), 0);
      assert.equal(up.listenerCount('upstreamFinished'), 0);
    });
  });

  describe('#upstreamIterator', () => {
    it('should yield all data from upstream by default', done => {
      up.writeBuffers = [Buffer.alloc(1)];
      assert(up.writableHighWaterMark);

      up.pullFromChunkBuffer = (limit: number) => {
        assert.equal(limit, Infinity);
        done();
      };

      const iterator = up.upstreamIterator();
      iterator.next();
    });

    it('should yield up to limit if provided', async () => {
      up.writeBuffers = [Buffer.alloc(16)];

      let data = Buffer.alloc(0);

      for await (const chunk of up.upstreamIterator(8)) {
        data = Buffer.concat([data, chunk]);
      }

      assert.equal(data.byteLength, 8);
    });

    it("should yield less than the limit if that's all that's available", async () => {
      up.writeBuffers = [Buffer.alloc(8)];
      up.upstreamEnded = true;

      let data = Buffer.alloc(0);

      for await (const chunk of up.upstreamIterator(16)) {
        data = Buffer.concat([data, chunk]);
      }

      assert.equal(data.byteLength, 8);
    });

    it('should yield many, arbitrarily sized chunks', async () => {
      up.waitForNextChunk = () => true;
      up.pullFromChunkBuffer = () => [Buffer.from('a')];

      let data = Buffer.alloc(0);
      let count = 0;

      for await (const chunk of up.upstreamIterator(16)) {
        data = Buffer.concat([data, chunk]);
        count++;
      }

      assert.equal(data.toString(), 'a'.repeat(16));
      assert.equal(count, 16);
    });
  });

  describe('#createURI', () => {
    it('should make the correct request', done => {
      up.makeRequest = async (reqOpts: GaxiosOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.url, `${BASE_URI}/${BUCKET}/o`);
        assert.deepStrictEqual(reqOpts.params, {
          predefinedAcl: up.predefinedAcl,
          name: FILE,
          uploadType: 'resumable',
          ifGenerationMatch: GENERATION,
          ifMetagenerationNotMatch: PARAMS.ifMetagenerationNotMatch,
        });
        const metadataNoHeaders = {...up.metadata};
        delete metadataNoHeaders.contentLength;
        delete metadataNoHeaders.contentType;
        assert.deepStrictEqual(reqOpts.data, metadataNoHeaders);
        done();
        return {headers: {location: '/foo'}};
      };
      up.createURI();
    });

    it('should pass through the KMS key name', done => {
      const kmsKeyName = 'kms-key-name';
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        kmsKeyName,
        retryOptions: RETRY_OPTIONS,
      });

      up.makeRequest = async (reqOpts: GaxiosOptions) => {
        assert.strictEqual(reqOpts.params.kmsKeyName, kmsKeyName);
        done();
        return {headers: {location: '/foo'}};
      };

      up.createURI();
    });

    it('should respect 0 as a generation', done => {
      up.makeRequest = async (reqOpts: GaxiosOptions) => {
        assert.strictEqual(reqOpts.params.ifGenerationMatch, 0);
        done();
        return {headers: {location: '/foo'}};
      };
      up.generation = 0;
      up.createURI();
    });

    describe('error', () => {
      const error = new Error(':(');

      beforeEach(() => {
        up.makeRequest = async () => {
          throw error;
        };
      });

      it('should exec callback with error', done => {
        up.createURI((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('currentInvocationId.uri should remain the same on error', done => {
        const beforeCallInvocationId = up.currentInvocationId.uri;
        up.createURI((err: Error) => {
          assert(err);
          assert.equal(beforeCallInvocationId, up.currentInvocationId.uri);
          done();
        });
      });
    });

    describe('success', () => {
      const URI = 'uri';
      const RESP = {headers: {location: URI}};

      beforeEach(() => {
        up.makeRequest = async () => {
          return RESP;
        };
      });

      it('should localize the uri', done => {
        up.createURI((err: Error) => {
          assert.ifError(err);
          assert.strictEqual(up.uri, URI);
          assert.strictEqual(up.offset, 0);
          done();
        });
      });

      it('should default the offset to 0', done => {
        up.createURI((err: Error) => {
          assert.ifError(err);
          assert.strictEqual(up.offset, 0);
          done();
        });
      });

      it('should exec callback with URI', done => {
        up.createURI((err: Error, uri: string) => {
          assert.ifError(err);
          assert.strictEqual(uri, URI);
          done();
        });
      });

      it('currentInvocationId.uri should be different after success', done => {
        const beforeCallInvocationId = up.currentInvocationId.uri;
        up.createURI(() => {
          assert.notEqual(beforeCallInvocationId, up.currentInvocationId.uri);
          done();
        });
      });
    });
  });

  describe('#continueUploading', () => {
    it('should start uploading if an offset was set', done => {
      up.offset = 0;
      up.startUploading = async () => {
        done();
      };
      up.continueUploading();
    });

    it('should get and set offset if no offset was set', done => {
      up.getAndSetOffset = async () => {
        done();
      };
      up.startUploading = () => Promise.resolve();
      up.continueUploading();
    });

    it('should start uploading when done', done => {
      up.startUploading = async function () {
        assert.strictEqual(this, up);
        done();
      };
      up.getAndSetOffset = () => Promise.resolve();
      up.continueUploading();
    });
  });

  describe('#startUploading', () => {
    beforeEach(() => {
      up.makeRequestStream = async () => null;
      up.writeBuffers = [Buffer.alloc(16)];
    });

    it('should reset `numChunksReadInRequest` to 0', async () => {
      up.numChunksReadInRequest = 1;

      await up.startUploading();

      assert.equal(up.numChunksReadInRequest, 0);
    });

    it('should set `offset` to 0 when not set', async () => {
      assert.equal(up.offset, undefined);

      await up.startUploading();

      assert.equal(up.offset, 0);
    });

    it('should emit error if `offset` < `numBytesWritten`', done => {
      up.numBytesWritten = 1;

      const expectedSent = up.numBytesWritten;
      const expectedServer = 0;
      const expectedDelta = expectedSent - expectedServer;

      up.on('error', (error: Error) => {
        assert(error instanceof RangeError);

        const m = error.message;
        assert(m.includes('offset is lower than the number of bytes written'));
        assert(m.includes(`server has ${expectedServer} bytes`));
        assert(m.includes(`${expectedSent} bytes has been uploaded`));
        assert(m.includes(`${expectedDelta} bytes are missing`));
        done();
      });

      up.startUploading();
    });

    it("should 'fast-forward' upstream if `numBytesWritten` < `offset`", async () => {
      up.writeBuffers = [Buffer.alloc(24)];

      up.offset = 9;
      up.numBytesWritten = 1;

      await up.startUploading();

      // Should fast-forward (up.offset - up.numBytesWritten) bytes
      assert.equal(up.offset, 9);
      assert.equal(up.numBytesWritten, 9);
      assert.equal(up.writeBuffers.length, 1);
      assert.equal(up.writeBuffers[0].byteLength, 16);
    });

    it('should emit a progress event with the bytes written', done => {
      up.writeBuffers = [Buffer.alloc(24)];
      up.upstreamEnded = true;
      up.contentLength = 24;

      up.on(
        'progress',
        (data: {bytesWritten: number; contentLength: number}) => {
          assert.equal(data.bytesWritten, 24);
          assert.equal(data.contentLength, 24);

          done();
        }
      );

      up.makeRequestStream = async (reqOpts: GaxiosOptions) => {
        reqOpts.body.on('data', () => {});
      };

      up.startUploading();
    });

    it('should destroy the stream if the request failed', done => {
      const error = new Error('Error.');
      up.on('error', (e: Error) => {
        assert.strictEqual(e, error);
        done();
      });

      up.makeRequestStream = async () => {
        throw error;
      };
      up.startUploading();
    });

    it('should retry retryable errors if the request failed', done => {
      const error = new Error('Error.');

      // mock as retryable
      up.retryOptions.retryableErrorFn = () => true;

      up.on('error', done);
      up.attemptDelayedRetry = () => done();

      up.makeRequestStream = async () => {
        throw error;
      };

      up.startUploading();
    });

    describe('request preparation', () => {
      // Simulating the amount of data written from upstream (exhaustive)
      const UPSTREAM_BUFFER_SIZE = 512;
      const UPSTREAM_ENDED = true;
      // a convenient handle for getting the request options
      let reqOpts: GaxiosOptions;

      async function getAllDataFromRequest() {
        let payload = Buffer.alloc(0);

        await new Promise(resolve => {
          reqOpts.body.on('data', (data: Buffer) => {
            payload = Buffer.concat([payload, data]);
          });

          reqOpts.body.on('end', () => {
            resolve(payload);
          });
        });

        return payload;
      }

      beforeEach(() => {
        reqOpts = {};
        up.makeRequestStream = async (requestOptions: GaxiosOptions) => {
          assert.equal(requestOptions.method, 'PUT');
          assert.equal(requestOptions.url, up.uri);
          assert.equal(typeof requestOptions.headers, 'object');
          assert(requestOptions.body instanceof Readable);

          reqOpts = requestOptions;
        };
        up.writeBuffers = [Buffer.alloc(UPSTREAM_BUFFER_SIZE)];
        up.upstreamEnded = UPSTREAM_ENDED;
      });

      describe('single chunk', () => {
        it('should use `contentLength` and `offset` if set', async () => {
          const OFFSET = 100;
          const CONTENT_LENGTH = 123;

          up.offset = OFFSET;
          up.contentLength = CONTENT_LENGTH;

          await up.startUploading();

          assert(reqOpts.headers);
          assert.equal(
            reqOpts.headers['Content-Range'],
            `bytes ${OFFSET}-*/${CONTENT_LENGTH}`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
          );
          assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));

          const data = await getAllDataFromRequest();

          assert.equal(data.byteLength, 23);
        });

        it('should prepare a valid request if `contentLength` is unknown', async () => {
          up.contentLength = '*';

          await up.startUploading();

          assert(reqOpts.headers);
          assert.equal(reqOpts.headers['Content-Range'], 'bytes 0-*/*');
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
          );
          assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));

          const data = await getAllDataFromRequest();

          assert.equal(data.byteLength, 512);
        });
      });

      describe('multiple chunk', () => {
        const CHUNK_SIZE = 256;

        beforeEach(() => {
          up.chunkSize = CHUNK_SIZE;
        });

        it('should use `chunkSize` if less than `contentLength`', async () => {
          const OFFSET = 100;
          const CONTENT_LENGTH = 512;

          up.offset = OFFSET;
          up.contentLength = CONTENT_LENGTH;

          await up.startUploading();

          const endByte = OFFSET + CHUNK_SIZE - 1;
          assert(reqOpts.headers);
          assert.equal(reqOpts.headers['Content-Length'], CHUNK_SIZE);
          assert.equal(
            reqOpts.headers['Content-Range'],
            `bytes ${OFFSET}-${endByte}/${CONTENT_LENGTH}`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
          );
          assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));

          const data = await getAllDataFromRequest();

          assert.equal(data.byteLength, CHUNK_SIZE);
        });

        it('should prepare a valid request if `contentLength` is unknown', async () => {
          const OFFSET = 100;
          const EXPECTED_STREAM_AMOUNT = Math.min(
            UPSTREAM_BUFFER_SIZE - OFFSET,
            CHUNK_SIZE
          );
          const ENDING_BYTE = EXPECTED_STREAM_AMOUNT + OFFSET - 1;

          up.offset = OFFSET;
          up.contentLength = '*';

          await up.startUploading();

          assert(reqOpts.headers);
          assert.equal(
            reqOpts.headers['Content-Length'],
            EXPECTED_STREAM_AMOUNT
          );
          assert.equal(
            reqOpts.headers['Content-Range'],
            `bytes ${OFFSET}-${ENDING_BYTE}/*`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
          );
          assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));

          const data = await getAllDataFromRequest();

          assert.equal(data.byteLength, CHUNK_SIZE);
        });

        it('should prepare a valid request if the remaining data is less than `chunkSize`', async () => {
          const NUM_BYTES_WRITTEN = 400;
          const OFFSET = NUM_BYTES_WRITTEN;
          const CONTENT_LENGTH = 512;

          up.offset = OFFSET;
          up.numBytesWritten = NUM_BYTES_WRITTEN;
          up.contentLength = CONTENT_LENGTH;

          await up.startUploading();

          const endByte = CONTENT_LENGTH - NUM_BYTES_WRITTEN + OFFSET - 1;
          assert(reqOpts.headers);
          assert.equal(
            reqOpts.headers['Content-Length'],
            CONTENT_LENGTH - NUM_BYTES_WRITTEN
          );
          assert.equal(
            reqOpts.headers['Content-Range'],
            `bytes ${OFFSET}-${endByte}/${CONTENT_LENGTH}`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
          );
          assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));
          const data = await getAllDataFromRequest();

          assert.equal(data.byteLength, CONTENT_LENGTH - NUM_BYTES_WRITTEN);
        });
      });
    });

    describe('X-Goog-Hash header injection', () => {
      const CALCULATED_CRC32C = 'bzKmHw==';
      const CALCULATED_MD5 = 'VpBzljOcorCZvRIkX5Nt3A==';
      const DUMMY_CONTENT = Buffer.alloc(512, 'a');
      const CHUNK_SIZE = 256;

      let requestCount: number;

      /**
       * Creates a mocked HashValidator object with forced getters to return
       * predefined hash values, bypassing internal stream calculation logic.
       */
      function createMockHashValidator(
        crc32cEnabled: boolean,
        md5Enabled: boolean
      ) {
        const mockValidator = {
          crc32cEnabled: crc32cEnabled,
          md5Enabled: md5Enabled,
          end: () => {}, // Mock the end method
          write: () => {},
        };

        Object.defineProperty(mockValidator, 'crc32c', {
          get: () => CALCULATED_CRC32C,
          configurable: true,
        });
        Object.defineProperty(mockValidator, 'md5Digest', {
          get: () => CALCULATED_MD5,
          configurable: true,
        });
        return mockValidator;
      }

      const MOCK_AUTH_CLIENT = {
        // Mock the request method to return a dummy response
        request: async (opts: GaxiosOptions) => {
          return {
            status: 200,
            data: {},
            headers: {},
            config: opts,
            statusText: 'OK',
          } as GaxiosResponse;
        },
        getRequestHeaders: async () => ({}),
        getRequestMetadata: async () => ({}),
        getRequestMetadataAsync: async () => ({}),
        getClient: async () => MOCK_AUTH_CLIENT,
      };

      /**
       * Sets up the `up` instance for hash injection tests.
       * @param configOptions Partial UploadConfig to apply.
       */
      function setupHashUploadInstance(
        configOptions: Partial<UploadConfig> & {crc32c?: boolean; md5?: boolean}
      ) {
        up = upload({
          bucket: BUCKET,
          file: FILE,
          authClient: MOCK_AUTH_CLIENT,
          retryOptions: {...RETRY_OPTIONS, maxRetries: 0},
          metadata: {
            contentLength: DUMMY_CONTENT.byteLength,
            contentType: 'text/plain',
          },
          ...configOptions,
        });

        // Manually inject the mock HashStreamValidator if needed
        const calculateCrc32c =
          !configOptions.clientCrc32c && configOptions.crc32c;
        const calculateMd5 = !configOptions.clientMd5Hash && configOptions.md5;

        if (calculateCrc32c || calculateMd5) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (up as any)['#hashValidator'] = createMockHashValidator(
            !!calculateCrc32c,
            !!calculateMd5
          );
        }
      }

      async function performUpload(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        uploadInstance: any,
        data: Buffer,
        isMultiChunk: boolean,
        expectedCrc32c?: string,
        expectedMd5?: string
      ): Promise<GaxiosOptions[]> {
        const capturedReqOpts: GaxiosOptions[] = [];
        requestCount = 0;

        uploadInstance.makeRequestStream = async (
          requestOptions: GaxiosOptions
        ) => {
          requestCount++;
          capturedReqOpts.push(requestOptions);

          await new Promise<void>(resolve => {
            requestOptions.body.on('data', () => {});
            requestOptions.body.on('end', resolve);
          });

          const serverCrc32c = expectedCrc32c || CALCULATED_CRC32C;
          const serverMd5 = expectedMd5 || CALCULATED_MD5;
          if (
            isMultiChunk &&
            requestCount < Math.ceil(DUMMY_CONTENT.byteLength / CHUNK_SIZE)
          ) {
            const lastByteReceived = requestCount * CHUNK_SIZE - 1;
            return {
              data: '',
              status: RESUMABLE_INCOMPLETE_STATUS_CODE,
              headers: {range: `bytes=0-${lastByteReceived}`},
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any;
          } else {
            return {
              status: 200,
              data: {
                crc32c: serverCrc32c,
                md5Hash: serverMd5,
                name: FILE,
                bucket: BUCKET,
                size: DUMMY_CONTENT.byteLength.toString(),
              },
              headers: {},
              config: {},
              statusText: 'OK',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any;
          }
        };

        return new Promise((resolve, reject) => {
          uploadInstance.on('error', reject);
          uploadInstance.on('uploadFinished', () => {
            resolve(capturedReqOpts);
          });

          const upstreamBuffer = new Readable({
            read() {
              this.push(data);
              this.push(null);
            },
          });
          upstreamBuffer.pipe(uploadInstance);
        });
      }

      describe('single chunk', () => {
        it('should include X-Goog-Hash header with crc32c when crc32c is enabled (via validator)', async () => {
          setupHashUploadInstance({crc32c: true});
          const reqOpts = await performUpload(up, DUMMY_CONTENT, false);
          assert.strictEqual(reqOpts.length, 1);
          assert.equal(
            reqOpts[0].headers!['X-Goog-Hash'],
            `crc32c=${CALCULATED_CRC32C}`
          );
        });

        it('should include X-Goog-Hash header with md5 when md5 is enabled (via validator)', async () => {
          setupHashUploadInstance({md5: true});
          const reqOpts = await performUpload(up, DUMMY_CONTENT, false);
          assert.strictEqual(reqOpts.length, 1);
          assert.equal(
            reqOpts[0].headers!['X-Goog-Hash'],
            `md5=${CALCULATED_MD5}`
          );
        });

        it('should include both crc32c and md5 in X-Goog-Hash when both are enabled (via validator)', async () => {
          setupHashUploadInstance({crc32c: true, md5: true});
          const reqOpts = await performUpload(up, DUMMY_CONTENT, false);
          assert.strictEqual(reqOpts.length, 1);
          const xGoogHash = reqOpts[0].headers!['X-Goog-Hash'];
          assert.ok(xGoogHash);
          const expectedHashes = [
            `crc32c=${CALCULATED_CRC32C}`,
            `md5=${CALCULATED_MD5}`,
          ];
          const actualHashes = xGoogHash
            .split(',')
            .map((s: string) => s.trim());
          assert.deepStrictEqual(actualHashes.sort(), expectedHashes.sort());
        });

        it('should use clientCrc32c if provided (pre-calculated hash)', async () => {
          const customCrc32c = 'CUSTOMCRC';
          setupHashUploadInstance({crc32c: true, clientCrc32c: customCrc32c});
          const reqOpts = await performUpload(
            up,
            DUMMY_CONTENT,
            false,
            customCrc32c
          );
          assert.strictEqual(reqOpts.length, 1);
          assert.strictEqual(
            reqOpts[0].headers!['X-Goog-Hash'],
            `crc32c=${customCrc32c}`
          );
        });

        it('should use clientMd5Hash if provided (pre-calculated hash)', async () => {
          const customMd5 = 'CUSTOMMD5';
          setupHashUploadInstance({md5: true, clientMd5Hash: customMd5});
          const reqOpts = await performUpload(
            up,
            DUMMY_CONTENT,
            false,
            undefined,
            customMd5
          );
          assert.strictEqual(reqOpts.length, 1);
          assert.strictEqual(
            reqOpts[0].headers!['X-Goog-Hash'],
            `md5=${customMd5}`
          );
        });

        it('should not include X-Goog-Hash if neither crc32c nor md5 are enabled', async () => {
          setupHashUploadInstance({});
          const reqOpts = await performUpload(up, DUMMY_CONTENT, false);
          assert.strictEqual(reqOpts.length, 1);
          assert.strictEqual(reqOpts[0].headers!['X-Goog-Hash'], undefined);
        });
      });

      describe('multiple chunk', () => {
        beforeEach(() => {
          setupHashUploadInstance({
            crc32c: true,
            md5: true,
            chunkSize: CHUNK_SIZE,
          });
        });

        it('should NOT include X-Goog-Hash header on intermediate multi-chunk requests', async () => {
          const reqOpts = await performUpload(up, DUMMY_CONTENT, true);
          assert.strictEqual(reqOpts.length, 2);

          assert.strictEqual(reqOpts[0].headers!['Content-Length'], CHUNK_SIZE);
          assert.strictEqual(reqOpts[0].headers!['X-Goog-Hash'], undefined);
        });

        it('should include X-Goog-Hash header ONLY on the final multi-chunk request', async () => {
          const expectedHashHeader = `crc32c=${CALCULATED_CRC32C},md5=${CALCULATED_MD5}`;
          const reqOpts = await performUpload(up, DUMMY_CONTENT, true);
          assert.strictEqual(reqOpts.length, 2);

          assert.strictEqual(reqOpts[1].headers!['Content-Length'], CHUNK_SIZE);
          assert.equal(reqOpts[1].headers!['X-Goog-Hash'], expectedHashHeader);
        });
      });
    });
  });

  describe('#responseHandler', () => {
    it('should emit the metadata', done => {
      const BODY = {hi: 1};
      const RESP = {data: BODY, status: 200};
      up.on('metadata', (body: {}) => {
        assert.strictEqual(body, BODY);
        done();
      });
      up.upstreamEnded = true;

      up.responseHandler(RESP);
    });

    it('should return response data size as number', done => {
      const metadata = {
        size: '0',
      };
      const RESP = {data: metadata, status: 200};
      up.on('metadata', (data: {size: number}) => {
        assert.strictEqual(Number(metadata.size), data.size);
        assert.strictEqual(typeof data.size, 'number');
        done();
      });
      up.upstreamEnded = true;

      up.responseHandler(RESP);
    });

    it('should destroy the stream if an error occurred', done => {
      const RESP = {data: {error: new Error('Error.')}};
      up.on('metadata', done);
      // metadata shouldn't be emitted... will blow up test if called
      up.destroy = (err: Error) => {
        assert.strictEqual(err, RESP.data.error);
        done();
      };
      up.upstreamEnded = true;
      up.responseHandler(RESP);
    });

    it('should destroy the stream if the status code is out of range', done => {
      const RESP = {data: {}, status: 300};
      up.on('metadata', done);
      // metadata shouldn't be emitted... will blow up test if called
      up.destroy = (err: Error) => {
        assert.strictEqual(err.message, 'Upload failed');
        done();
      };
      up.upstreamEnded = true;
      up.responseHandler(RESP);
    });

    it('should destroy the stream on CRC32C checksum mismatch', done => {
      const CLIENT_CRC = 'client_hash';
      const SERVER_CRC = 'server_hash';
      const RESP = {
        data: {
          crc32c: SERVER_CRC,
          md5Hash: 'md5_match',
          size: '100',
        },
        status: 200,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (up as any)['#hashValidator'] = {
        crc32cEnabled: true,
        md5Enabled: true,
        crc32c: CLIENT_CRC,
        md5Digest: 'md5_match',
      };
      up.upstreamEnded = true;

      up.destroy = (err: Error) => {
        assert.strictEqual(err.message, FileExceptionMessages.UPLOAD_MISMATCH);
        done();
      };

      up.responseHandler(RESP);
    });

    it('should destroy the stream on MD5 checksum mismatch', done => {
      const CLIENT_MD5 = 'client_md5';
      const SERVER_MD5 = 'server_md5';
      const RESP = {
        data: {
          crc32c: 'crc32c_match',
          md5Hash: SERVER_MD5,
          size: '100',
        },
        status: 200,
      };

      up.md5 = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (up as any)['#hashValidator'] = {
        crc32c: 'crc32c_match',
        md5Digest: CLIENT_MD5,
      };
      up.upstreamEnded = true;

      up.destroy = (err: Error) => {
        assert.strictEqual(err.message, FileExceptionMessages.UPLOAD_MISMATCH);
        done();
      };

      up.responseHandler(RESP);
    });

    it('should continue with multi-chunk upload when incomplete', done => {
      const lastByteReceived = 9;

      const RESP = {
        data: '',
        status: RESUMABLE_INCOMPLETE_STATUS_CODE,
        headers: {
          range: `bytes=0-${lastByteReceived}`,
        },
      };

      up.chunkSize = 1;
      up.writeBuffers = [Buffer.alloc(0)];

      up.continueUploading = () => {
        assert.equal(up.offset, lastByteReceived + 1);

        done();
      };

      up.responseHandler(RESP);
    });

    it('should not continue with multi-chunk upload when incomplete if a partial upload has finished', done => {
      const lastByteReceived = 9;

      const RESP = {
        data: '',
        status: RESUMABLE_INCOMPLETE_STATUS_CODE,
        headers: {
          range: `bytes=0-${lastByteReceived}`,
        },
      };

      up.chunkSize = 1;
      up.upstreamEnded = true;
      up.isPartialUpload = true;

      up.on('uploadFinished', done);

      up.responseHandler(RESP);
    });

    it('should error when upload is incomplete and the upstream is not a partial upload', done => {
      const lastByteReceived = 9;

      const RESP = {
        data: '',
        status: RESUMABLE_INCOMPLETE_STATUS_CODE,
        headers: {
          range: `bytes=0-${lastByteReceived}`,
        },
      };

      up.chunkSize = 1;
      up.upstreamEnded = true;

      up.on('error', (e: Error) => {
        assert.match(e.message, /Upload failed/);

        done();
      });

      up.responseHandler(RESP);
    });

    it('should unshift missing data if server did not receive the entire chunk', done => {
      const NUM_BYTES_WRITTEN = 20;
      const LAST_CHUNK_LENGTH = 256;
      const UPSTREAM_BUFFER_LENGTH = 1024;
      const lastByteReceived = 9;
      const expectedUnshiftAmount = NUM_BYTES_WRITTEN - lastByteReceived - 1;

      const RESP = {
        data: '',
        status: RESUMABLE_INCOMPLETE_STATUS_CODE,
        headers: {
          range: `bytes=0-${lastByteReceived}`,
        },
      };

      up.chunkSize = 256;
      up.numBytesWritten = NUM_BYTES_WRITTEN;
      up.writeBuffers = [Buffer.alloc(UPSTREAM_BUFFER_LENGTH, 'b')];

      up.localWriteCache = [
        Buffer.alloc(LAST_CHUNK_LENGTH, 'c'),
        // different to ensure this is the data that's prepended
        Buffer.alloc(expectedUnshiftAmount, 'a'),
      ];

      up.continueUploading = () => {
        assert.equal(up.offset, lastByteReceived + 1);
        assert.equal(
          Buffer.concat(up.writeBuffers).byteLength,
          UPSTREAM_BUFFER_LENGTH + expectedUnshiftAmount
        );
        assert.equal(
          Buffer.concat(up.writeBuffers)
            .subarray(0, expectedUnshiftAmount)
            .toString(),
          'a'.repeat(expectedUnshiftAmount)
        );

        // we should discard part of the last chunk, as we know what the server
        // has at this point.
        assert.deepEqual(up.localWriteCache, []);

        done();
      };

      up.responseHandler(RESP);
    });

    it('currentInvocationId.chunk should be different after success', done => {
      const beforeCallInvocationId = up.currentInvocationId.chunk;
      const RESP = {data: '', status: 200};
      up.upstreamEnded = true;

      up.on('uploadFinished', () => {
        assert.notEqual(beforeCallInvocationId, up.currentInvocationId.chunk);
        done();
      });
      up.responseHandler(RESP);
    });

    it('currentInvocationId.chunk should be the same after error', done => {
      const beforeCallInvocationId = up.currentInvocationId.chunk;
      const RESP = {data: {error: new Error('Error.')}};
      up.destroy = () => {
        assert.equal(beforeCallInvocationId, up.currentInvocationId.chunk);
        done();
      };
      up.responseHandler(RESP);
    });
  });

  it('currentInvocationId.checkUploadStatus should be different after success', async () => {
    const beforeCallInvocationId = up.currentInvocationId.checkUploadStatus;
    up.makeRequest = () => {
      return {};
    };
    await up.getAndSetOffset();
    assert.notEqual(
      beforeCallInvocationId,
      up.currentInvocationId.checkUploadStatus
    );
  });

  it('currentInvocationId.checkUploadStatus should be the same on error', done => {
    const beforeCallInvocationId = up.currentInvocationId.checkUploadStatus;
    up.destroy = () => {
      assert.equal(
        beforeCallInvocationId,
        up.currentInvocationId.checkUploadStatus
      );
      done();
    };
    up.makeRequest = () => {
      throw new Error() as GaxiosError;
    };

    up.getAndSetOffset().catch(done);
  });

  describe('#getAndSetOffset', () => {
    const RANGE = 123456;
    const RESP = {status: 308, headers: {range: `range-${RANGE}`}};

    it('should make the correct request', done => {
      const URI = 'uri';
      up.uri = URI;
      up.makeRequest = async (reqOpts: GaxiosOptions) => {
        assert.strictEqual(reqOpts.method, 'PUT');
        assert.strictEqual(reqOpts.url, URI);
        assert(reqOpts.headers);
        assert.equal(reqOpts.headers['Content-Length'], 0);
        assert.equal(reqOpts.headers['Content-Range'], 'bytes */*');
        assert.ok(
          X_GOOG_API_HEADER_REGEX.test(reqOpts.headers['x-goog-api-client'])
        );
        assert.ok(USER_AGENT_REGEX.test(reqOpts.headers['User-Agent']));
        done();
        return {};
      };
      up.getAndSetOffset();
    });

    it('should set the offset from the range', async () => {
      up.makeRequest = async () => RESP;
      await up.getAndSetOffset();
      assert.strictEqual(up.offset, RANGE + 1);
    });

    it('should set the offset to 0 if no range is back from the API', async () => {
      up.makeRequest = async () => {
        return {};
      };
      await up.getAndSetOffset();
      assert.strictEqual(up.offset, 0);
    });

    it('should retry retryable errors if the request failed', done => {
      const error = new Error('Error.');

      // mock as retryable
      up.retryOptions.retryableErrorFn = () => true;

      up.on('error', done);
      up.attemptDelayedRetry = () => done();

      up.makeRequest = async () => {
        throw error;
      };

      up.getAndSetOffset();
    });
  });

  describe('#makeRequest', () => {
    it('should set encryption headers', async () => {
      const key = crypto.randomBytes(32);
      up = upload({
        bucket: 'BUCKET',
        file: FILE,
        key,
        authConfig: {keyFile},
        retryOptions: RETRY_OPTIONS,
      });
      const scopes = [
        mockAuthorizeRequest(),
        nock(REQ_OPTS.url!).get('/').reply(200, {}),
      ];
      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      const headers = res.config.headers;
      assert.strictEqual(headers['x-goog-encryption-algorithm'], 'AES256');
      assert.strictEqual(headers['x-goog-encryption-key'], up.encryption.key);
      assert.strictEqual(
        headers['x-goog-encryption-key-sha256'],
        up.encryption.hash
      );
    });

    it('should set userProject', async () => {
      const scopes = [
        mockAuthorizeRequest(),
        nock(REQ_OPTS.url!).get(queryPath).reply(200, {}),
      ];
      const res: GaxiosResponse = await up.makeRequest(REQ_OPTS);
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      scopes.forEach(x => x.done());
    });

    it('should set validate status', done => {
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          assert.strictEqual(reqOpts.validateStatus!(100), false);
          assert.strictEqual(reqOpts.validateStatus!(199), false);
          assert.strictEqual(reqOpts.validateStatus!(300), false);
          assert.strictEqual(reqOpts.validateStatus!(400), false);
          assert.strictEqual(reqOpts.validateStatus!(500), false);

          assert.strictEqual(reqOpts.validateStatus!(200), true);
          assert.strictEqual(reqOpts.validateStatus!(299), true);
          assert.strictEqual(reqOpts.validateStatus!(308), true);

          done();

          return {};
        },
      };
      up.makeRequest(REQ_OPTS);
    });

    it('should make the correct request', async () => {
      const scopes = [
        mockAuthorizeRequest(),
        nock(REQ_OPTS.url!).get(queryPath).reply(200, undefined, {}),
      ];
      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      assert.deepStrictEqual(res.headers, {});
    });

    it('should bypass authentication if emulator context detected', async () => {
      up = upload({
        bucket: BUCKET,
        file: FILE,
        customRequestOptions: CUSTOM_REQUEST_OPTIONS,
        generation: GENERATION,
        metadata: METADATA,
        origin: ORIGIN,
        params: PARAMS,
        predefinedAcl: PREDEFINED_ACL,
        userProject: USER_PROJECT,
        authConfig: {keyFile},
        apiEndpoint: 'https://fake.endpoint.com',
        retryOptions: RETRY_OPTIONS,
      });
      const scopes = [
        nock(REQ_OPTS.url!).get(queryPath).reply(200, undefined, {}),
      ];
      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      assert.deepStrictEqual(res.headers, {});
    });

    it('should use authentication with custom endpoint when useAuthWithCustomEndpoint is true', async () => {
      up = upload({
        bucket: BUCKET,
        file: FILE,
        customRequestOptions: CUSTOM_REQUEST_OPTIONS,
        generation: GENERATION,
        metadata: METADATA,
        origin: ORIGIN,
        params: PARAMS,
        predefinedAcl: PREDEFINED_ACL,
        userProject: USER_PROJECT,
        authConfig: {keyFile},
        apiEndpoint: 'https://custom-proxy.example.com',
        useAuthWithCustomEndpoint: true,
        retryOptions: RETRY_OPTIONS,
      });

      // Mock the authorization request
      mockAuthorizeRequest();

      // Mock the actual request with auth header expectation
      const scopes = [
        nock(REQ_OPTS.url!)
          .matchHeader('authorization', /Bearer .+/)
          .get(queryPath)
          .reply(200, undefined, {}),
      ];

      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      // Headers should include authorization
      assert.ok(res.config.headers?.['Authorization']);
    });

    it('should bypass authentication with custom endpoint when useAuthWithCustomEndpoint is false', async () => {
      up = upload({
        bucket: BUCKET,
        file: FILE,
        customRequestOptions: CUSTOM_REQUEST_OPTIONS,
        generation: GENERATION,
        metadata: METADATA,
        origin: ORIGIN,
        params: PARAMS,
        predefinedAcl: PREDEFINED_ACL,
        userProject: USER_PROJECT,
        authConfig: {keyFile},
        apiEndpoint: 'https://storage-emulator.local',
        useAuthWithCustomEndpoint: false,
        retryOptions: RETRY_OPTIONS,
      });

      const scopes = [
        nock(REQ_OPTS.url!).get(queryPath).reply(200, undefined, {}),
      ];
      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      // When auth is bypassed, no auth headers should be present
      assert.deepStrictEqual(res.headers, {});
    });

    it('should bypass authentication with custom endpoint when useAuthWithCustomEndpoint is undefined (backward compatibility)', async () => {
      up = upload({
        bucket: BUCKET,
        file: FILE,
        customRequestOptions: CUSTOM_REQUEST_OPTIONS,
        generation: GENERATION,
        metadata: METADATA,
        origin: ORIGIN,
        params: PARAMS,
        predefinedAcl: PREDEFINED_ACL,
        userProject: USER_PROJECT,
        authConfig: {keyFile},
        apiEndpoint: 'https://storage-emulator.local',
        // useAuthWithCustomEndpoint is intentionally not set
        retryOptions: RETRY_OPTIONS,
      });

      const scopes = [
        nock(REQ_OPTS.url!).get(queryPath).reply(200, undefined, {}),
      ];
      const res = await up.makeRequest(REQ_OPTS);
      scopes.forEach(x => x.done());
      assert.strictEqual(res.config.url, REQ_OPTS.url + queryPath.slice(1));
      // When auth is bypassed (backward compatibility), no auth headers should be present
      assert.deepStrictEqual(res.headers, {});
    });

    it('should combine customRequestOptions', done => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
        customRequestOptions: {
          headers: {
            'X-My-Header': 'My custom value',
          },
        },
      });
      mockAuthorizeRequest();
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          const customHeader =
            reqOpts.headers && reqOpts.headers['X-My-Header'];
          assert.strictEqual(customHeader, 'My custom value');
          setImmediate(done);
          return {};
        },
      };
      up.makeRequest(REQ_OPTS);
    });

    it('should execute the callback with a body error & response', async () => {
      const error = new GaxiosError('Error message', {}, {
        config: {},
        data: {},
        status: 500,
        statusText: 'sad trombone',
        headers: {},
      } as GaxiosResponse);
      mockAuthorizeRequest();
      const scope = nock(REQ_OPTS.url!).get(queryPath).reply(500, {error});
      await assert.rejects(up.makeRequest(REQ_OPTS), (err: GaxiosError) => {
        scope.done();
        assert.strictEqual(err.status, 500);
        return true;
      });
    });

    it('should execute the callback with a body error & response for non-2xx status codes', async () => {
      const error = new GaxiosError('Error message', {}, {
        config: {},
        data: {},
        status: 500,
        statusText: 'sad trombone',
        headers: {},
      } as GaxiosResponse);
      mockAuthorizeRequest();
      const scope = nock(REQ_OPTS.url!).get(queryPath).reply(500, {error});
      await assert.rejects(up.makeRequest(REQ_OPTS), (err: GaxiosError) => {
        scope.done();
        assert.deepStrictEqual(err.status, 500);
        return true;
      });
    });

    it('should execute the callback', async () => {
      const data = {red: 'tape'};
      mockAuthorizeRequest();
      up.onResponse = () => true;
      const scope = nock(REQ_OPTS.url!).get(queryPath).reply(200, data);
      const res = await up.makeRequest(REQ_OPTS);
      scope.done();
      assert.strictEqual(res.status, 200);
      assert.deepStrictEqual(res.data, data);
    });
  });

  describe('#makeRequestStream', () => {
    beforeEach(() => {
      up.authClient = {request: () => {}};
      up.onResponse = () => {};
    });

    it('should pass a signal from the abort controller', done => {
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          assert(reqOpts.signal instanceof AbortController);
          done();
        },
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should abort on an error', done => {
      up.on('error', () => {});

      let abortController: AbortController;
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          abortController = reqOpts.signal as any;
        },
      };

      up.makeRequestStream(REQ_OPTS);
      up.emit('error', new Error('Error.'));

      setImmediate(() => {
        assert.strictEqual(abortController.aborted, true);
        done();
      });
    });

    it('should set userProject', done => {
      up.userProject = 'user-project';
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          assert.deepStrictEqual(reqOpts.params, {userProject: 'user-project'});
          done();
        },
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should not remove existing params when userProject is set', done => {
      REQ_OPTS.params = {a: 'b', c: 'd'};
      up.userProject = 'user-project';
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          assert.deepStrictEqual(reqOpts.params, {
            userProject: 'user-project',
            a: 'b',
            c: 'd',
          });
          done();
        },
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should always validate the status', done => {
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          assert.strictEqual(reqOpts.validateStatus!(0), true);
          done();
        },
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should combine customRequestOptions', done => {
      const up = upload({
        bucket: BUCKET,
        file: FILE,
        retryOptions: RETRY_OPTIONS,
        customRequestOptions: {
          headers: {
            'X-My-Header': 'My custom value',
          },
        },
      });
      mockAuthorizeRequest();
      up.authClient = {
        request: (reqOpts: GaxiosOptions) => {
          const customHeader =
            reqOpts.headers && reqOpts.headers['X-My-Header'];
          assert.strictEqual(customHeader, 'My custom value');
          setImmediate(done);
          return {};
        },
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should pass the response to the handler', done => {
      const response = {};
      up.authClient = {
        request: async () => response,
      };
      up.onResponse = (res: GaxiosResponse) => {
        assert.strictEqual(res, response);
        done();
      };
      up.makeRequestStream(REQ_OPTS);
    });

    it('should return the response if successful', async () => {
      const response = {some: 'response'};
      up.authClient = {
        request: async () => response,
      };
      up.onResponse = () => true;

      const stream = await up.makeRequestStream(REQ_OPTS);
      assert.strictEqual(stream, response);
    });

    it('should return `null` if the response is unsuccessful', async () => {
      const response = {some: 'response'};
      up.authClient = {
        request: async () => response,
      };
      up.onResponse = () => false;

      const stream = await up.makeRequestStream(REQ_OPTS);
      assert.strictEqual(stream, null);
    });
  });

  describe('#onResponse', () => {
    beforeEach(() => {
      up.numRetries = 0;
      up.startUploading = () => {};
      up.continueUploading = () => {};
    });

    describe('500s', () => {
      const RESP = {status: 500, data: 'error message from server'};

      it('should increase the retry count if less than limit', () => {
        up.getRetryDelay = () => 1;
        assert.strictEqual(up.numRetries, 0);
        assert.strictEqual(up.onResponse(RESP), false);
        assert.strictEqual(up.numRetries, 1);
      });

      it('should destroy the stream if greater than limit', done => {
        up.getRetryDelay = () => 1;
        up.destroy = (err: Error) => {
          assert.strictEqual(
            err.message,
            `Retry limit exceeded - ${JSON.stringify(RESP.data)}`
          );
          done();
        };

        up.onResponse(RESP);
        up.onResponse(RESP);
        up.onResponse(RESP);
        up.onResponse(RESP);
      });

      describe('exponential back off', () => {
        let clock: sinon.SinonFakeTimers;
        let setTimeoutSpy: sinon.SinonSpy;
        beforeEach(() => {
          clock = sinon.useFakeTimers({toFake: ['setTimeout']});
          setTimeoutSpy = sinon.spy(global, 'setTimeout');
        });
        afterEach(() => {
          clock.restore();
        });

        it('should continue uploading after retry count^2 * random', done => {
          up.continueUploading = function () {
            assert.strictEqual(this, up);

            const minTime = Math.pow(2, up.numRetries - 1) * 1000;
            const maxTime = minTime + 1000;

            const delay = setTimeoutSpy.lastCall.args[1];
            assert(delay >= minTime);
            assert(delay <= maxTime);

            // make it keep retrying until the limit is reached
            up.onResponse(RESP);
          };

          up.on('error', (err: Error) => {
            assert.strictEqual(up.numRetries, 3);
            assert.strictEqual(
              err.message,
              `Retry limit exceeded - ${JSON.stringify(RESP.data)}`
            );
            done();
          });

          up.onResponse(RESP);
          clock.runAll();
        });
      });
    });

    describe('all others', () => {
      const RESP = {status: 200};

      it('should emit the response on the stream', done => {
        up.getRetryDelay = () => 1;
        up.on('response', (resp: {}) => {
          assert.strictEqual(resp, RESP);
          done();
        });
        up.onResponse(RESP);
      });

      it('should return true', () => {
        up.getRetryDelay = () => 1;
        assert.strictEqual(up.onResponse(RESP), true);
      });

      it('should handle a custom status code when passed a retry function', () => {
        up.getRetryDelay = () => 1;
        const RESP = {status: 1000};
        const customHandlerFunction = (err: ApiError) => {
          return err.code === 1000;
        };
        up.retryOptions.retryableErrorFn = customHandlerFunction;

        assert.strictEqual(up.onResponse(RESP), false);
      });
    });
  });

  describe('#attemptDelayedRetry', () => {
    beforeEach(() => {
      up.startUploading = () => {};
      up.continueUploading = () => {};
      up.getRetryDelay = () => 1;
    });

    it('should increment numRetries', () => {
      assert.equal(up.numRetries, 0);

      up.attemptDelayedRetry({});

      assert.equal(up.numRetries, 1);
    });

    it('should call `startUploading` on 404 && !this.numChunksReadInRequest', done => {
      up.startUploading = done;
      up.continueUploading = () => done('wanted `startUploading`');

      up.attemptDelayedRetry({status: 404});
    });

    it('should not call `startUploading` when on 404 && this.numChunksReadInRequest != 0', done => {
      up.startUploading = () => done('wanted `continueUploading`');
      up.continueUploading = done;

      up.numChunksReadInRequest = 1;
      up.attemptDelayedRetry({status: 404});
    });

    it('should not call `startUploading` when !this.numChunksReadInRequest && status != 404', done => {
      up.startUploading = () => done('wanted `continueUploading`');
      up.continueUploading = done;

      up.attemptDelayedRetry({status: 400});
    });

    it('should call `getRetryDelay` when not calling `startUploading`', done => {
      up.startUploading = () => done('wanted `continueUploading`');
      up.getRetryDelay = () => {
        process.nextTick(done);
        return 1;
      };

      up.attemptDelayedRetry({});
    });

    it('should unshift the write buffer, unset `offset`, and call `continueUploading` when not calling `startUploading`', done => {
      up.startUploading = () => done('wanted `continueUploading`');
      up.continueUploading = () => {
        assert.equal(up.numBytesWritten, 4);
        assert.equal(up.localWriteCache.length, 0);
        assert.equal(
          Buffer.concat(up.writeBuffers).toString(),
          'a'.repeat(12) + 'b'.repeat(10)
        );
        assert.equal(up.offset, undefined);

        done();
      };

      up.numBytesWritten = 16;
      up.localWriteCache = [Buffer.alloc(12, 'a')];
      up.localWriteCacheByteLength = up.localWriteCache[0].byteLength;
      up.writeBuffers = [Buffer.alloc(10, 'b')];
      up.offset = 16;

      up.attemptDelayedRetry({});
    });

    it('should destroy if retry total time limit exceeded (0)', done => {
      up.getRetryDelay = () => 0;
      up.on('error', (error: Error) => {
        assert(error.message.match(/Retry total time limit exceeded/));
        done();
      });

      up.attemptDelayedRetry({});
    });

    it('should destroy if retry total time limit exceeded (< 0)', done => {
      up.getRetryDelay = () => -123;
      up.on('error', (error: Error) => {
        assert(error.message.match(/Retry total time limit exceeded/));
        done();
      });

      up.attemptDelayedRetry({});
    });

    it('should destroy the object if this.numRetries > this.retryLimit', done => {
      up.startUploading = () => done("shouldn't have called this");
      up.continueUploading = () => done("shouldn't have called this");
      up.getRetryDelay = () => done("shouldn't have called this");

      up.on('error', (error: Error) => {
        assert(error.message.match(/Retry limit exceeded/));
        done();
      });

      up.numRetries = 4;
      up.retryLimit = 3;

      up.attemptDelayedRetry({});
    });

    it('should destroy the object if this.numRetries === this.retryLimit', done => {
      up.startUploading = () => done("shouldn't have called this");
      up.continueUploading = () => done("shouldn't have called this");
      up.getRetryDelay = () => done("shouldn't have called this");

      up.on('error', (error: Error) => {
        assert(error.message.match(/Retry limit exceeded/));
        done();
      });

      up.numRetries = 3;
      up.retryLimit = 3;

      up.attemptDelayedRetry({});
    });
  });

  describe('PROTOCOL_REGEX', () => {
    it('should match a protocol', () => {
      const urls = [
        {input: 'http://www.hi.com', match: 'http'},
        {input: 'mysite://www.hi.com', match: 'mysite'},
        {input: 'www.hi.com', match: null},
      ];

      for (const url of urls) {
        assert.strictEqual(
          url.input.match(PROTOCOL_REGEX) &&
            url.input.match(PROTOCOL_REGEX)![1],
          url.match
        );
      }
    });
  });

  describe('#sanitizeEndpoint', () => {
    const USER_DEFINED_SHORT_API_ENDPOINT = 'myapi.com:8080';
    const USER_DEFINED_PROTOCOL = 'myproto';
    const USER_DEFINED_FULL_API_ENDPOINT = `${USER_DEFINED_PROTOCOL}://myapi.com:8080`;

    it('should default protocol to https', () => {
      const endpoint = up.sanitizeEndpoint(USER_DEFINED_SHORT_API_ENDPOINT);
      assert.strictEqual(endpoint.match(PROTOCOL_REGEX)![1], 'https');
    });

    it('should not override protocol', () => {
      const endpoint = up.sanitizeEndpoint(USER_DEFINED_FULL_API_ENDPOINT);
      assert.strictEqual(
        endpoint.match(PROTOCOL_REGEX)![1],
        USER_DEFINED_PROTOCOL
      );
    });

    it('should remove trailing slashes from URL', () => {
      const endpointsWithTrailingSlashes = [
        `${USER_DEFINED_FULL_API_ENDPOINT}/`,
        `${USER_DEFINED_FULL_API_ENDPOINT}//`,
      ];
      for (const endpointWithTrailingSlashes of endpointsWithTrailingSlashes) {
        const endpoint = up.sanitizeEndpoint(endpointWithTrailingSlashes);
        assert.strictEqual(endpoint.endsWith('/'), false);
      }
    });
  });

  describe('#getRetryDelay', () => {
    beforeEach(() => {
      up.timeOfFirstRequest = Date.now();
    });

    it('should return exponential retry delay', () => {
      const min = Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000;
      const max =
        Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000 + 1000;
      const delayValue = up.getRetryDelay();

      assert(delayValue >= min && delayValue <= max);
    });

    it('allows overriding the delay multiplier', () => {
      [1, 2, 3].forEach(delayMultiplier => {
        up.retryDelayMultiplier = delayMultiplier;
        const min = Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000;
        const max =
          Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000 + 1000;
        const delayValue = up.getRetryDelay();

        assert(delayValue >= min && delayValue <= max);
      });
    });

    it('allows overriding the number of retries', () => {
      [1, 2, 3].forEach(numRetry => {
        up.retryOptions.maxRetries = numRetry;
        const min = Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000;
        const max =
          Math.pow(up.retryDelayMultiplier, up.numRetries) * 1000 + 1000;
        const delayValue = up.getRetryDelay();

        assert(delayValue >= min && delayValue <= max);
      });
    });

    it('returns the value of totaltimeout when calculated values are larger', () => {
      up.retryOptions.totalTimeout = 1;
      const delayValue = up.getRetryDelay();

      // This is a timing-based test, there could be a few milliseconds of lag
      assert(delayValue <= 1000 && delayValue >= 995);
    });
  });

  describe('upload', () => {
    describe('single chunk', () => {
      let uri = '';

      beforeEach(() => {
        uri = 'uri';

        up.contentLength = CHUNK_SIZE_MULTIPLE * 8;
        up.createURI = (
          callback: (error: Error | null, uri: string) => void
        ) => {
          up.uri = uri;
          up.offset = 0;
          callback(null, uri);
        };
      });

      it('should make the correct request', done => {
        // For additional information:
        // - https://cloud.google.com/storage/docs/performing-resumable-uploads#single-chunk-upload

        const CHUNK_SIZE = CHUNK_SIZE_MULTIPLE * 2;
        const NON_CHUNK_SIZE_DIVISIBLE_AMOUNT = 2;
        const CONTENT_LENGTH = CHUNK_SIZE * 8 + NON_CHUNK_SIZE_DIVISIBLE_AMOUNT;
        const EXPECTED_NUM_REQUESTS = 1;

        // We want the class to be able to handle varying chunk sizes uniformly.
        let wrote = 0;
        let wroteChunkLargerThanChunkSize = false;
        let wroteChunkEqualToChunkSize = false;
        let wroteChunkLessThanChunkSize = false;

        const upstreamBuffer = new Readable({
          read() {
            const remainingToWrite = CONTENT_LENGTH - wrote;

            if (!remainingToWrite) {
              // signal finish
              this.push(null);
            } else if (remainingToWrite > CHUNK_SIZE * 3) {
              // write large chunk
              const LARGE_CHUNK = Buffer.alloc(CHUNK_SIZE * 2);

              wrote += LARGE_CHUNK.byteLength;
              wroteChunkLargerThanChunkSize = true;

              this.push(LARGE_CHUNK);
            } else if (remainingToWrite > CHUNK_SIZE) {
              // write chunk-sized chunk
              const EQUAL_CHUNK = Buffer.alloc(CHUNK_SIZE);

              wrote += EQUAL_CHUNK.byteLength;
              wroteChunkEqualToChunkSize = true;

              this.push(EQUAL_CHUNK);
            } else {
              // write small chunk
              const SMALL_CHUNK = Buffer.alloc(remainingToWrite);

              wrote += SMALL_CHUNK.byteLength;
              wroteChunkLessThanChunkSize = true;

              this.push(SMALL_CHUNK);
            }
          },
        });

        const requests: {
          dataReceived: number;
          opts: GaxiosOptions;
          chunkWritesInRequest: number;
        }[] = [];
        let overallDataReceived = 0;

        up.contentLength = CONTENT_LENGTH;

        up.makeRequestStream = async (opts: GaxiosOptions) => {
          let dataReceived = 0;
          let chunkWritesInRequest = 0;

          const res = await new Promise(resolve => {
            opts.body.on('data', (data: Buffer) => {
              dataReceived += data.byteLength;
              overallDataReceived += data.byteLength;
              chunkWritesInRequest++;
            });

            opts.body.on('end', () => {
              requests.push({dataReceived, opts, chunkWritesInRequest});

              resolve({
                status: 200,
                data: {},
              });

              resolve(null);
            });
          });

          return res;
        };

        up.on('error', done);

        up.on('finish', () => {
          // Ensure the correct number of requests and data look correct
          assert.equal(requests.length, EXPECTED_NUM_REQUESTS);
          assert.equal(overallDataReceived, CONTENT_LENGTH);

          // Make sure we wrote the desire mix of chunk sizes
          assert(wroteChunkLargerThanChunkSize);
          assert(wroteChunkEqualToChunkSize);
          assert(wroteChunkLessThanChunkSize);

          // Validate the single request
          const request = requests[0];

          assert.strictEqual(request.opts.method, 'PUT');
          assert.strictEqual(request.opts.url, uri);

          // We should be writing multiple buffers down the wire
          assert(request.chunkWritesInRequest > 1);

          assert.equal(request.dataReceived, CONTENT_LENGTH);
          assert(request.opts.headers);
          assert.equal(
            request.opts.headers['Content-Range'],
            `bytes 0-*/${CONTENT_LENGTH}`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(
              request.opts.headers['x-goog-api-client']
            )
          );
          assert.ok(USER_AGENT_REGEX.test(request.opts.headers['User-Agent']));

          done();
        });

        // init the request
        upstreamBuffer.pipe(up);
      });
    });

    describe('multiple chunk', () => {
      let uri = '';

      beforeEach(() => {
        uri = 'uri';

        up.chunkSize = CHUNK_SIZE_MULTIPLE;
        up.contentLength = CHUNK_SIZE_MULTIPLE * 8;
        up.createURI = (
          callback: (error: Error | null, uri: string) => void
        ) => {
          up.uri = uri;
          up.offset = 0;
          callback(null, uri);
        };
      });

      it('should make the correct requests', done => {
        // For additional information:
        // - https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
        // - https://cloud.google.com/storage/docs/resumable-uploads#resent-data

        const CHUNK_SIZE = CHUNK_SIZE_MULTIPLE * 2;
        // This is important - we want to make sure requests
        // where `CONTENT_LENGTH % CHUNK_SIZE !== 0` are fine.
        const LAST_REQUEST_SIZE = 2;
        const CONTENT_LENGTH = CHUNK_SIZE * 8 + LAST_REQUEST_SIZE;
        const EXPECTED_NUM_REQUESTS =
          Math.floor(CONTENT_LENGTH / CHUNK_SIZE) + 1;

        // We want the class to be able to handle varying chunk sizes uniformly.
        let wrote = 0;
        let wroteChunkLargerThanChunkSize = false;
        let wroteChunkEqualToChunkSize = false;
        let wroteChunkLessThanChunkSize = false;

        const upstreamBuffer = new Readable({
          read() {
            const remainingToWrite = CONTENT_LENGTH - wrote;

            if (!remainingToWrite) {
              // signal finish
              this.push(null);
            } else if (remainingToWrite > CHUNK_SIZE * 3) {
              // write large chunk
              const LARGE_CHUNK = Buffer.alloc(CHUNK_SIZE * 2);

              wrote += LARGE_CHUNK.byteLength;
              wroteChunkLargerThanChunkSize = true;

              this.push(LARGE_CHUNK);
            } else if (remainingToWrite > CHUNK_SIZE) {
              // write chunk-sized chunk
              const EQUAL_CHUNK = Buffer.alloc(CHUNK_SIZE);

              wrote += EQUAL_CHUNK.byteLength;
              wroteChunkEqualToChunkSize = true;

              this.push(EQUAL_CHUNK);
            } else {
              // write small chunk
              const SMALL_CHUNK = Buffer.alloc(remainingToWrite);

              wrote += SMALL_CHUNK.byteLength;
              wroteChunkLessThanChunkSize = true;

              this.push(SMALL_CHUNK);
            }
          },
        });

        const requests: {
          dataReceived: number;
          opts: GaxiosOptions;
          chunkWritesInRequest: number;
        }[] = [];
        let overallDataReceived = 0;

        up.chunkSize = CHUNK_SIZE;
        up.contentLength = CONTENT_LENGTH;

        up.makeRequestStream = async (opts: GaxiosOptions) => {
          let dataReceived = 0;
          let chunkWritesInRequest = 0;

          const res = await new Promise(resolve => {
            opts.body.on('data', (data: Buffer) => {
              dataReceived += data.byteLength;
              overallDataReceived += data.byteLength;
              chunkWritesInRequest++;
            });

            opts.body.on('end', () => {
              requests.push({dataReceived, opts, chunkWritesInRequest});

              if (overallDataReceived < CONTENT_LENGTH) {
                const lastByteReceived = overallDataReceived
                  ? overallDataReceived - 1
                  : 0;

                resolve({
                  status: RESUMABLE_INCOMPLETE_STATUS_CODE,
                  headers: {
                    range: `bytes=0-${lastByteReceived}`,
                  },
                  data: {},
                });
              } else {
                resolve({
                  status: 200,
                  data: {},
                });
              }
            });
          });

          return res;
        };

        up.on('error', done);

        up.on('finish', () => {
          // Ensure the correct number of requests and data look correct
          assert.equal(requests.length, EXPECTED_NUM_REQUESTS);
          assert.equal(overallDataReceived, CONTENT_LENGTH);

          // Make sure we wrote the desire mix of chunk sizes
          assert(wroteChunkLargerThanChunkSize);
          assert(wroteChunkEqualToChunkSize);
          assert(wroteChunkLessThanChunkSize);

          // Validate each request
          for (let i = 0; i < requests.length; i++) {
            const request = requests[i];
            const offset = i * CHUNK_SIZE;

            assert.strictEqual(request.opts.method, 'PUT');
            assert.strictEqual(request.opts.url, uri);

            // We should be writing N buffers down the wire, although
            // the request is "1 chunk"
            assert(request.chunkWritesInRequest >= 1);

            if (requests.length - i === 1) {
              // The last chunk
              const endByte = offset + LAST_REQUEST_SIZE - 1;

              assert.equal(request.dataReceived, LAST_REQUEST_SIZE);
              assert(request.opts.headers);
              assert.equal(
                request.opts.headers['Content-Length'],
                LAST_REQUEST_SIZE
              );
              assert.equal(
                request.opts.headers['Content-Range'],
                `bytes ${offset}-${endByte}/${CONTENT_LENGTH}`
              );
              assert.ok(
                X_GOOG_API_HEADER_REGEX.test(
                  request.opts.headers['x-goog-api-client']
                )
              );
              assert.ok(
                USER_AGENT_REGEX.test(request.opts.headers['User-Agent'])
              );
            } else {
              // The preceding chunks
              const endByte = offset + CHUNK_SIZE - 1;

              assert.equal(request.dataReceived, CHUNK_SIZE);
              assert(request.opts.headers);
              assert.equal(request.opts.headers['Content-Length'], CHUNK_SIZE);
              assert.equal(
                request.opts.headers['Content-Range'],
                `bytes ${offset}-${endByte}/${CONTENT_LENGTH}`
              );
              assert.ok(
                X_GOOG_API_HEADER_REGEX.test(
                  request.opts.headers['x-goog-api-client']
                )
              );
              assert.ok(
                USER_AGENT_REGEX.test(request.opts.headers['User-Agent'])
              );
            }
          }

          done();
        });

        // init the request
        upstreamBuffer.pipe(up);
      });
    });

    describe('empty object', () => {
      let uri = '';

      beforeEach(() => {
        uri = 'uri';

        up.contentLength = 0;
        up.createURI = (
          callback: (error: Error | null, uri: string) => void
        ) => {
          up.uri = uri;
          up.offset = 0;
          callback(null, uri);
        };
      });

      it('should support uploading empty objects', done => {
        const CONTENT_LENGTH = 0;
        const EXPECTED_NUM_REQUESTS = 1;

        const upstreamBuffer = new Readable({
          read() {
            this.push(null);
          },
        });

        const requests: {
          dataReceived: number;
          opts: GaxiosOptions;
          chunkWritesInRequest: number;
        }[] = [];
        let overallDataReceived = 0;

        up.makeRequestStream = async (opts: GaxiosOptions) => {
          let dataReceived = 0;
          let chunkWritesInRequest = 0;

          const res = await new Promise(resolve => {
            opts.body.on('data', (data: Buffer) => {
              dataReceived += data.byteLength;
              overallDataReceived += data.byteLength;
              chunkWritesInRequest++;
            });

            opts.body.on('end', () => {
              requests.push({dataReceived, opts, chunkWritesInRequest});

              resolve({
                status: 200,
                data: {},
              });

              resolve(null);
            });
          });

          return res;
        };

        up.on('error', done);

        up.on('finish', () => {
          // Ensure the correct number of requests and data look correct
          assert.equal(requests.length, EXPECTED_NUM_REQUESTS);
          assert.equal(overallDataReceived, CONTENT_LENGTH);

          // Validate the single request
          const request = requests[0];

          assert.strictEqual(request.opts.method, 'PUT');
          assert.strictEqual(request.opts.url, uri);

          // No data should be written
          assert(request.chunkWritesInRequest === 0);

          assert.equal(request.dataReceived, CONTENT_LENGTH);
          assert(request.opts.headers);

          assert.equal(
            request.opts.headers['Content-Range'],
            `bytes 0-*/${CONTENT_LENGTH}`
          );
          assert.ok(
            X_GOOG_API_HEADER_REGEX.test(
              request.opts.headers['x-goog-api-client']
            )
          );
          assert.ok(USER_AGENT_REGEX.test(request.opts.headers['User-Agent']));

          done();
        });

        // init the request
        upstreamBuffer.pipe(up);
      });
    });
  });

  describe('Validation of Client Checksums Against Server Response', () => {
    const DUMMY_CONTENT = Buffer.alloc(CHUNK_SIZE_MULTIPLE * 2);
    let URI = '';
    beforeEach(() => {
      up.contentLength = DUMMY_CONTENT.byteLength;
      URI = 'uri';
      up.createURI = (callback: (error: Error | null, uri: string) => void) => {
        up.uri = URI;
        up.offset = 0;
        callback(null, URI);
      };
    });
    const checksumScenarios = [
      {
        type: 'CRC32C',
        match: true,
        desc: 'successfully finish the upload if server-reported CRC32C matches client CRC32C',
        serverCrc: CORRECT_CLIENT_CRC32C,
        serverMd5: CORRECT_CLIENT_MD5,
      },
      {
        type: 'CRC32C',
        match: false,
        desc: 'fail and destroy the stream if server-reported CRC32C mismatches client CRC32C',
        serverCrc: INCORRECT_SERVER_CRC32C,
        serverMd5: CORRECT_CLIENT_MD5,
        errorPart: 'CRC32C checksum mismatch.',
      },
      {
        type: 'MD5',
        match: true,
        desc: 'successfully finish the upload if server-reported MD5 matches client MD5',
        serverCrc: CORRECT_CLIENT_CRC32C,
        serverMd5: CORRECT_CLIENT_MD5,
      },
      {
        type: 'MD5',
        match: false,
        desc: 'fail and destroy the stream if server-reported MD5 mismatches client MD5',
        serverCrc: CORRECT_CLIENT_CRC32C,
        serverMd5: INCORRECT_SERVER_MD5,
        errorPart: 'MD5 checksum mismatch.',
      },
    ];

    checksumScenarios.forEach(scenario => {
      it(`should ${scenario.desc}`, done => {
        up.makeRequestStream = async (opts: GaxiosOptions) => {
          await new Promise<void>(resolve => {
            opts.body.on('data', () => {});
            opts.body.on('end', resolve);
          });

          return {
            status: 200,
            data: {
              crc32c: scenario.serverCrc,
              md5Hash: scenario.serverMd5,
              name: up.file,
              bucket: up.bucket,
              size: DUMMY_CONTENT.byteLength.toString(),
            },
            headers: {},
            config: opts,
            statusText: 'OK',
          };
        };

        if (scenario.match) {
          up.on('error', (err: Error) => {
            done(new Error(`Upload failed unexpectedly: ${err.message}`));
          });
          up.on('finish', () => {
            done();
          });
        } else {
          up.on('error', (err: Error) => {
            assert.strictEqual(
              err.message,
              FileExceptionMessages.UPLOAD_MISMATCH
            );

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const detailError = (err as any).errors && (err as any).errors[0];
            assert.ok(
              detailError && detailError.message.includes(scenario.errorPart!),
              `Error message should contain: ${scenario.errorPart}`
            );
            assert.strictEqual(up.uri, URI);
            done();
          });

          up.on('finish', () => {
            done(
              new Error(
                `Upload should have failed due to ${scenario.type} mismatch, but emitted finish.`
              )
            );
          });
        }

        const upstreamBuffer = new Readable({
          read() {
            this.push(DUMMY_CONTENT);
            this.push(null);
          },
        });
        upstreamBuffer.pipe(up);
      });
    });
  });
});
