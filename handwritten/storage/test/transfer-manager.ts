/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import {ServiceObject, ServiceObjectConfig, util} from '../src/nodejs-common';
import * as pLimit from 'p-limit';
import * as proxyquire from 'proxyquire';
import {
  Bucket,
  CRC32C,
  CreateWriteStreamOptions,
  DownloadOptions,
  FileOptions,
  IdempotencyStrategy,
  MultiPartHelperGenerator,
  MultiPartUploadError,
  MultiPartUploadHelper,
  UploadOptions,
} from '../src';
import * as assert from 'assert';
import * as path from 'path';
import * as stream from 'stream';
import * as extend from 'extend';
import * as fs from 'fs';
import * as sinon from 'sinon';
import {GaxiosResponse} from 'gaxios';

const fakeUtil = Object.assign({}, util);
fakeUtil.noop = util.noop;

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

class FakeAcl {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeFile {
  calledWith_: IArguments;
  bucket: Bucket;
  name: string;
  options: FileOptions;
  metadata: {};
  createWriteStream: Function;
  isSameFile = () => false;
  constructor(bucket: Bucket, name: string, options?: FileOptions) {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
    this.bucket = bucket;
    this.name = name;
    this.options = options || {};
    this.metadata = {};

    this.createWriteStream = (options: CreateWriteStreamOptions) => {
      this.metadata = options.metadata;
      const ws = new stream.Writable();
      ws.write = () => {
        ws.emit('complete');
        ws.end();
        return true;
      };
      return ws;
    };
  }
}

class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

let pLimitOverride: Function | null;
const fakePLimit = (limit: number) => (pLimitOverride || pLimit)(limit);
const fakeFs = extend(true, {}, fs, {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createReadStream(path: string, _options: {}): stream.Stream {
    return new stream.PassThrough();
  },
  get promises() {
    return {
      open: () => {
        return {
          close: () => {},
          write: (buffer: Buffer) => {
            return Promise.resolve({buffer});
          },
        };
      },
      lstat: () => {
        return {
          isDirectory: () => {
            return false;
          },
        };
      },
    };
  },
});

describe('Transfer Manager', () => {
  let TransferManager: any;
  let transferManager: any;
  let Bucket: any;
  let bucket: any;
  let File: any;

  const STORAGE: any = {
    createBucket: util.noop,
    apiEndpoint: 'https://test.notvalid.com',
    retryOptions: {
      autoRetry: true,
      maxRetries: 3,
      retryDelayMultipier: 2,
      totalTimeout: 600,
      maxRetryDelay: 60,
      retryableErrorFn: (err: HTTPError) => {
        return err.code === 500;
      },
      idempotencyStrategy: IdempotencyStrategy.RetryConditional,
    },
    crc32cGenerator: () => new CRC32C(),
  };
  const BUCKET_NAME = 'test-bucket';

  before(() => {
    Bucket = proxyquire('../src/bucket.js', {
      'p-limit': fakePLimit,
      './nodejs-common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      './acl.js': {Acl: FakeAcl},
      './file.js': {File: FakeFile},
    }).Bucket;

    File = proxyquire('../src/file.js', {
      './nodejs-common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    }).File;

    TransferManager = proxyquire('../src/transfer-manager.js', {
      'p-limit': fakePLimit,
      './nodejs-common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      './acl.js': {Acl: FakeAcl},
      './file.js': {File: FakeFile},
      fs: fakeFs,
      fsp: fakeFs,
    }).TransferManager;
  });

  beforeEach(() => {
    bucket = new Bucket(STORAGE, BUCKET_NAME);
    transferManager = new TransferManager(bucket);
  });

  describe('instantiation', () => {
    it('should correctly set the bucket', () => {
      assert.strictEqual(transferManager.bucket, bucket);
    });
  });

  describe('uploadManyFiles', () => {
    it('calls upload with the provided file paths', async () => {
      const paths = ['/a/b/c', '/d/e/f', '/h/i/j'];
      let count = 0;

      bucket.upload = (path: string) => {
        count++;
        assert(paths.includes(path));
      };

      await transferManager.uploadManyFiles(paths);
      assert.strictEqual(count, paths.length);
    });

    it('sets ifGenerationMatch to 0 if skipIfExists is set', async () => {
      const paths = ['/a/b/c'];

      bucket.upload = (_path: string, options: UploadOptions) => {
        assert.strictEqual(options.preconditionOpts?.ifGenerationMatch, 0);
      };

      await transferManager.uploadManyFiles(paths, {skipIfExists: true});
    });

    it('sets destination to prefix + filename when prefix is supplied', async () => {
      const paths = ['/a/b/foo/bar.txt'];
      const expectedDestination = path.normalize('hello/world/a/b/foo/bar.txt');

      bucket.upload = (_path: string, options: UploadOptions) => {
        assert.strictEqual(options.destination, expectedDestination);
      };

      await transferManager.uploadManyFiles(paths, {prefix: 'hello/world'});
    });

    it('returns a promise with the uploaded file if there is no callback', async () => {
      const paths = [path.join(__dirname, '../../test/testdata/testfile.json')];
      const result = await transferManager.uploadManyFiles(paths);
      assert.strictEqual(result[0][0].name, paths[0]);
    });
  });

  describe('downloadManyFiles', () => {
    it('calls download for each provided file', async () => {
      let count = 0;
      const download = () => {
        count++;
      };
      const firstFile = new File(bucket, 'first.txt');
      firstFile.download = download;
      const secondFile = new File(bucket, 'second.txt');
      secondFile.download = download;

      const files = [firstFile, secondFile];
      await transferManager.downloadManyFiles(files);
      assert.strictEqual(count, 2);
    });

    it('sets the destination correctly when provided a prefix', async () => {
      const prefix = 'test-prefix';
      const filename = 'first.txt';
      const expectedDestination = path.normalize(`${prefix}/${filename}`);
      const download = (options: DownloadOptions) => {
        assert.strictEqual(options.destination, expectedDestination);
      };

      const file = new File(bucket, filename);
      file.download = download;
      await transferManager.downloadManyFiles([file], {prefix});
    });

    it('sets the destination correctly when provided a strip prefix', async () => {
      const stripPrefix = 'should-be-removed/';
      const filename = 'should-be-removed/first.txt';
      const expectedDestination = 'first.txt';
      const download = (options: DownloadOptions) => {
        assert.strictEqual(options.destination, expectedDestination);
      };

      const file = new File(bucket, filename);
      file.download = download;
      await transferManager.downloadManyFiles([file], {stripPrefix});
    });
  });

  describe('downloadFileInChunks', () => {
    let file: any;

    beforeEach(() => {
      file = new File(bucket, 'some-large-file');
      file.get = () => {
        return [
          {
            metadata: {
              size: 1024,
            },
          },
        ];
      };
    });

    it('should download a single chunk if file size is below threshold', async () => {
      let downloadCallCount = 0;
      file.download = () => {
        downloadCallCount++;
        return Promise.resolve([Buffer.alloc(100)]);
      };

      await transferManager.downloadFileInChunks(file);
      assert.strictEqual(downloadCallCount, 1);
    });

    it('should call fromFile when validation is set to crc32c', async () => {
      let callCount = 0;
      file.download = () => {
        return Promise.resolve([Buffer.alloc(0)]);
      };
      CRC32C.fromFile = () => {
        callCount++;
        return Promise.resolve(new CRC32C(0));
      };

      await transferManager.downloadFileInChunks(file, {validation: 'crc32c'});
      assert.strictEqual(callCount, 1);
    });
  });

  describe('uploadFileInChunks', () => {
    let mockGeneratorFunction: MultiPartHelperGenerator;
    let fakeHelper: sinon.SinonStubbedInstance<MultiPartUploadHelper>;
    let sandbox: sinon.SinonSandbox;
    let readStreamStub: sinon.SinonStub;
    const path = '/a/b/c.txt';
    const pThrough = new stream.PassThrough();
    class FakeXMLHelper implements MultiPartUploadHelper {
      bucket: Bucket;
      fileName: string;
      uploadId?: string | undefined;
      partsMap?: Map<number, string> | undefined;
      constructor(bucket: Bucket, fileName: string) {
        this.bucket = bucket;
        this.fileName = fileName;
      }
      initiateUpload(): Promise<void> {
        throw new Error('Method not implemented.');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      uploadPart(partNumber: number, chunk: Buffer): Promise<void> {
        throw new Error('Method not implemented.');
      }
      completeUpload(): Promise<GaxiosResponse | undefined> {
        throw new Error('Method not implemented.');
      }
    }

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      readStreamStub = sandbox
        .stub(fakeFs, 'createReadStream')
        .returns(pThrough);
      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.resolves();
        fakeHelper.completeUpload.resolves();
        return fakeHelper;
      };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call initiateUpload, uploadPart, and completeUpload', async () => {
      process.nextTick(() => {
        pThrough.push('hello world');
        pThrough.end();
      });
      await transferManager.uploadFileInChunks(path, {}, mockGeneratorFunction);
      assert.strictEqual(fakeHelper.initiateUpload.calledOnce, true);
      assert.strictEqual(fakeHelper.uploadPart.calledOnce, true);
      assert.strictEqual(fakeHelper.completeUpload.calledOnce, true);
    });

    it('should call createReadStream with a highWaterMark equal to chunkSize', async () => {
      const options = {highWaterMark: 32 * 1024 * 1024, start: 0};

      await transferManager.uploadFileInChunks(
        path,
        {
          chunkSizeBytes: 32 * 1024 * 1024,
        },
        mockGeneratorFunction
      );

      assert.strictEqual(readStreamStub.calledOnceWith(path, options), true);
    });

    it('should set the correct start offset when called with an existing parts map', async () => {
      const options = {
        highWaterMark: 32 * 1024 * 1024,
        start: 64 * 1024 * 1024,
      };

      await transferManager.uploadFileInChunks(
        path,
        {
          uploadId: '123',
          partsMap: new Map<number, string>([
            [1, '123'],
            [2, '321'],
          ]),
          chunkSizeBytes: 32 * 1024 * 1024,
        },
        mockGeneratorFunction
      );

      assert.strictEqual(readStreamStub.calledOnceWith(path, options), true);
    });

    it('should not call initiateUpload if an uploadId is provided', async () => {
      await transferManager.uploadFileInChunks(
        path,
        {
          uploadId: '123',
          partsMap: new Map<number, string>([
            [1, '123'],
            [2, '321'],
          ]),
        },
        mockGeneratorFunction
      );

      assert.strictEqual(fakeHelper.uploadId, '123');
      assert.strictEqual(fakeHelper.initiateUpload.notCalled, true);
    });

    it('should reject with an error with empty uploadId and partsMap', async () => {
      const expectedErr = new MultiPartUploadError(
        'Hello World',
        '',
        new Map<number, string>()
      );
      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.rejects(new Error(expectedErr.message));
        fakeHelper.uploadPart.resolves();
        fakeHelper.completeUpload.resolves();
        return fakeHelper;
      };
      assert.rejects(
        transferManager.uploadFileInChunks(path, {}, mockGeneratorFunction),
        expectedErr
      );
    });
  });
});
