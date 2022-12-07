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
  UploadOptions,
} from '../src';
import * as assert from 'assert';
import * as path from 'path';
import * as stream from 'stream';
import * as extend from 'extend';
import * as fs from 'fs';

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
});
