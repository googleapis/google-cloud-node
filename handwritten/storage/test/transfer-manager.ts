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

import {
  ApiError,
  Bucket,
  File,
  CRC32C,
  DownloadCallback,
  DownloadOptions,
  IdempotencyStrategy,
  MultiPartHelperGenerator,
  MultiPartUploadError,
  MultiPartUploadHelper,
  UploadOptions,
  TransferManager,
  Storage,
  DownloadResponse,
  DownloadManyFilesOptions,
} from '../src/index.js';
import assert from 'assert';
import * as path from 'path';
import {GaxiosOptions, GaxiosResponse} from 'gaxios';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {AuthClient, GoogleAuth} from 'google-auth-library';
import {tmpdir} from 'os';
import fs from 'fs';
import {promises as fsp, Stats} from 'fs';

import * as sinon from 'sinon';

describe('Transfer Manager', () => {
  const BUCKET_NAME = 'test-bucket';
  const STORAGE = sinon.stub(
    new Storage({
      retryOptions: {
        autoRetry: true,
        maxRetries: 3,
        retryDelayMultiplier: 2,
        totalTimeout: 600,
        maxRetryDelay: 60,
        retryableErrorFn: (err: ApiError) => {
          return err.code === 500;
        },
        idempotencyStrategy: IdempotencyStrategy.RetryConditional,
      },
    })
  );
  let sandbox: sinon.SinonSandbox;
  let transferManager: TransferManager;
  let bucket: Bucket;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    bucket = new Bucket(STORAGE, BUCKET_NAME);
    transferManager = new TransferManager(bucket);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should correctly set the bucket', () => {
      assert.strictEqual(transferManager.bucket, bucket);
    });
  });

  describe('uploadManyFiles', () => {
    beforeEach(() => {
      sandbox.stub(fsp, 'lstat').resolves({
        isDirectory: () => {
          return false;
        },
      } as Stats);
    });

    it('calls upload with the provided file paths', async () => {
      const paths = ['/a/b/c', '/d/e/f', '/h/i/j'];
      let count = 0;
      sandbox.stub(bucket, 'upload').callsFake(path => {
        count++;
        assert(paths.includes(path));
      });

      await transferManager.uploadManyFiles(paths);
      assert.strictEqual(count, paths.length);
    });

    it('sets ifGenerationMatch to 0 if skipIfExists is set', async () => {
      const paths = ['/a/b/c'];
      sandbox.stub(bucket, 'upload').callsFake((path, options) => {
        assert.strictEqual(
          (options as UploadOptions).preconditionOpts?.ifGenerationMatch,
          0
        );
      });

      await transferManager.uploadManyFiles(paths, {skipIfExists: true});
    });

    it('sets destination to prefix + filename when prefix is supplied', async () => {
      const filePaths = ['a', 'b', 'foo', 'bar.txt'].join(path.sep);
      const expectedDestination = [
        'hello',
        'world',
        'a',
        'b',
        'foo',
        'bar.txt',
      ].join(path.posix.sep);
      sandbox.stub(bucket, 'upload').callsFake((path, options) => {
        assert.strictEqual(
          (options as UploadOptions).destination,
          expectedDestination
        );
      });

      await transferManager.uploadManyFiles([filePaths], {
        prefix: ['hello', 'world'].join(path.sep),
      });
    });

    it('returns a promise with the uploaded file if there is no callback', async () => {
      const paths = [['a', 'b', 'foo', 'bar.txt'].join(path.sep)];
      sandbox.stub(bucket, 'upload').callsFake(() => {
        const resp = [{name: paths[0].split(path.sep).join(path.posix.sep)}];
        return Promise.resolve(resp);
      });

      const result = await transferManager.uploadManyFiles(paths);
      assert.strictEqual(
        result[0][0].name,
        paths[0].split(path.sep).join(path.posix.sep)
      );
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      const paths = ['/a/b/foo/bar.txt'];

      sandbox.stub(bucket, 'upload').callsFake(async (_path, options) => {
        assert.strictEqual(
          (options as UploadOptions)[GCCL_GCS_CMD_KEY],
          'tm.upload_many'
        );
      });

      await transferManager.uploadManyFiles(paths, {prefix: 'hello/world'});
    });

    it('replaces OS specific separator with posix separator when calling bucket.upload', async () => {
      const filePath = ['a', 'b', 'c'].join(path.sep);
      const expected = ['a', 'b', 'c'].join(path.posix.sep);

      sandbox.stub(bucket, 'upload').callsFake((path, options) => {
        assert.strictEqual(expected, (options as UploadOptions).destination);
      });

      await transferManager.uploadManyFiles([filePath]);
    });

    it('allows the user to apply a custom destination transformation when supplied a custom function', async () => {
      const paths = ['a', 'b', 'foo/bar', 'bar.txt'];
      const expected = ['foo/a', 'b/bar', 'foo/foo/bar', 'bar.txt/bar'];
      sandbox.stub(bucket, 'upload').callsFake((path, options) => {
        const uploadOpts = options as UploadOptions;
        assert(expected.includes(uploadOpts.destination as string));
      });

      let callCount = 0;
      const transformationFunc = (path: string) => {
        assert.strictEqual(path, paths[callCount]);
        return expected[callCount++];
      };
      await transferManager.uploadManyFiles(paths, {
        customDestinationBuilder: transformationFunc,
      });
    });
  });

  describe('downloadManyFiles', () => {
    beforeEach(() => {
      sandbox.stub(fs, 'existsSync').returns(true);
    });

    it('calls download for each provided file', async () => {
      let count = 0;
      const firstFile = new File(bucket, 'first.txt');
      sandbox.stub(firstFile, 'download').callsFake(() => {
        count++;
      });
      const secondFile = new File(bucket, 'second.txt');
      sandbox.stub(secondFile, 'download').callsFake(() => {
        count++;
      });

      const files = [firstFile, secondFile];
      await transferManager.downloadManyFiles(files);
      assert.strictEqual(count, 2);
    });

    it('sets the destination correctly when provided a prefix', async () => {
      const prefix = 'test-prefix';
      const filename = 'first.txt';
      const expectedDestination = path.normalize(`${prefix}/${filename}`);

      const file = new File(bucket, filename);
      sandbox.stub(file, 'download').callsFake(options => {
        assert.strictEqual(
          (options as DownloadOptions).destination,
          expectedDestination
        );
      });
      await transferManager.downloadManyFiles([file], {prefix});
    });

    it('sets the destination correctly when provided a strip prefix', async () => {
      const stripPrefix = 'should-be-removed/';
      const filename = 'should-be-removed/first.txt';
      const expectedDestination = 'first.txt';

      const file = new File(bucket, filename);
      sandbox.stub(file, 'download').callsFake(options => {
        assert.strictEqual(
          (options as DownloadOptions).destination,
          expectedDestination
        );
      });
      await transferManager.downloadManyFiles([file], {stripPrefix});
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      const file = new File(bucket, 'first.txt');

      sandbox.stub(file, 'download').callsFake(async options => {
        assert.strictEqual(
          (options as DownloadOptions)[GCCL_GCS_CMD_KEY],
          'tm.download_many'
        );
      });

      await transferManager.downloadManyFiles([file]);
    });

    it('sets the destination correctly when provided a passthroughOptions.destination', async () => {
      const passthroughOptions = {
        destination: 'test-destination',
      };
      const filename = 'first.txt';
      const expectedDestination = path.normalize(
        `${passthroughOptions.destination}/${filename}`
      );
      const download = (optionsOrCb?: DownloadOptions | DownloadCallback) => {
        if (typeof optionsOrCb === 'function') {
          optionsOrCb(null, Buffer.alloc(0));
        } else if (optionsOrCb) {
          assert.strictEqual(optionsOrCb.destination, expectedDestination);
        }
        return Promise.resolve([Buffer.alloc(0)]) as Promise<DownloadResponse>;
      };

      const file = new File(bucket, filename);
      file.download = download;
      await transferManager.downloadManyFiles([file], {passthroughOptions});
    });

    it('does not download files that already exist locally when skipIfExists is true', async () => {
      const firstFile = new File(bucket, 'first.txt');
      sandbox.stub(firstFile, 'download').callsFake(options => {
        assert.strictEqual(
          (options as DownloadManyFilesOptions).skipIfExists,
          0
        );
      });
      const secondFile = new File(bucket, 'second.txt');
      sandbox.stub(secondFile, 'download').callsFake(options => {
        assert.strictEqual(
          (options as DownloadManyFilesOptions).skipIfExists,
          0
        );
      });

      const files = [firstFile, secondFile];
      const options = {skipIfExists: true};
      await transferManager.downloadManyFiles(files, options);
    });

    it('does not set the destination when prefix, strip prefix and passthroughOptions.destination are not provided', async () => {
      const options = {};
      const filename = 'first.txt';
      const download = (optionsOrCb?: DownloadOptions | DownloadCallback) => {
        if (typeof optionsOrCb === 'function') {
          optionsOrCb(null, Buffer.alloc(0));
        } else if (optionsOrCb) {
          assert.strictEqual(optionsOrCb.destination, undefined);
        }
        return Promise.resolve([Buffer.alloc(0)]) as Promise<DownloadResponse>;
      };

      const file = new File(bucket, filename);
      file.download = download;
      await transferManager.downloadManyFiles([file], options);
    });

    it('should recursively create directory and write file contents if destination path is nested', async () => {
      const prefix = 'text-prefix';
      const folder = 'nestedFolder/';
      const file = 'first.txt';
      const filesOrFolder = [folder, path.join(folder, file)];
      const expectedFilePath = path.join(prefix, folder, file);
      const expectedDir = path.join(prefix, folder);
      const mkdirSpy = sandbox.spy(fsp, 'mkdir');
      const download = (optionsOrCb?: DownloadOptions | DownloadCallback) => {
        if (typeof optionsOrCb === 'function') {
          optionsOrCb(null, Buffer.alloc(0));
        } else if (optionsOrCb) {
          assert.strictEqual(optionsOrCb.destination, expectedFilePath);
        }
        return Promise.resolve([Buffer.alloc(0)]) as Promise<DownloadResponse>;
      };

      sandbox.stub(bucket, 'file').callsFake(filename => {
        const file = new File(bucket, filename);
        file.download = download;
        return file;
      });
      await transferManager.downloadManyFiles(filesOrFolder, {
        prefix: prefix,
      });
      assert.strictEqual(
        mkdirSpy.calledOnceWith(expectedDir, {
          recursive: true,
        }),
        true
      );
    });
  });

  describe('downloadFileInChunks', () => {
    let file: File;

    beforeEach(() => {
      sandbox.stub(fsp, 'open').resolves({
        close: () => Promise.resolve(),
        write: (buffer: unknown) => Promise.resolve({buffer}),
      } as fsp.FileHandle);

      file = new File(bucket, 'some-large-file');
      sandbox.stub(file, 'get').resolves([
        {
          metadata: {
            size: 1024,
            crc32c: 'AAAAAA==',
          },
        },
      ]);
    });

    it('should download a single chunk if file size is below threshold', async () => {
      let downloadCallCount = 0;
      sandbox.stub(file, 'download').callsFake(() => {
        downloadCallCount++;
        return Promise.resolve([Buffer.alloc(100)]);
      });

      await transferManager.downloadFileInChunks(file);
      assert.strictEqual(downloadCallCount, 1);
    });

    it('should return downloaded data', async () => {
      sandbox.stub(file, 'download').callsFake(() => {
        return Promise.resolve([Buffer.alloc(100)]);
      });

      const data = await transferManager.downloadFileInChunks(file);
      assert.deepStrictEqual(data, [Buffer.alloc(1024)]);
    });

    it('should not return downloaded data when noReturnData flag is set', async () => {
      sandbox.stub(file, 'download').callsFake(() => {
        return Promise.resolve([Buffer.alloc(100)]);
      });

      const data = await transferManager.downloadFileInChunks(file, {
        noReturnData: true,
      });
      assert.strictEqual(data, undefined);
    });

    it('should call fromFile when validation is set to crc32c', async () => {
      let callCount = 0;
      file.download = () => {
        return Promise.resolve([Buffer.alloc(0)]) as Promise<DownloadResponse>;
      };
      CRC32C.fromFile = () => {
        callCount++;
        return Promise.resolve(new CRC32C(0));
      };

      await transferManager.downloadFileInChunks(file, {validation: 'crc32c'});
      assert.strictEqual(callCount, 1);
    });

    it('should throw an error if crc32c validation fails', async () => {
      file.download = () => {
        return Promise.resolve([Buffer.alloc(0)]) as Promise<DownloadResponse>;
      };
      CRC32C.fromFile = () => {
        return Promise.resolve(new CRC32C(1)); // Set non-expected initial value
      };

      await assert.rejects(
        transferManager.downloadFileInChunks(file, {validation: 'crc32c'}),
        {
          code: 'CONTENT_DOWNLOAD_MISMATCH',
        }
      );
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      sandbox.stub(file, 'download').callsFake(async options => {
        assert.strictEqual(
          (options as DownloadOptions)[GCCL_GCS_CMD_KEY],
          'tm.download_sharded'
        );
        return [Buffer.alloc(100)];
      });

      await transferManager.downloadFileInChunks(file);
    });
  });

  describe('uploadFileInChunks', () => {
    let mockGeneratorFunction: MultiPartHelperGenerator;
    let fakeHelper: sinon.SinonStubbedInstance<MultiPartUploadHelper>;
    let readStreamSpy: sinon.SinonSpy;
    let directory: string;
    let filePath: string;
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
      abortUpload(): Promise<void> {
        throw new Error('Method not implemented.');
      }
    }

    before(async () => {
      directory = await fsp.mkdtemp(
        path.join(tmpdir(), 'tm-uploadFileInChunks-')
      );

      filePath = path.join(directory, 't.txt');

      await fsp.writeFile(filePath, 'hello');
    });

    beforeEach(async () => {
      readStreamSpy = sandbox.spy(fs, 'createReadStream');
      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.resolves();
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };
    });

    after(async () => {
      await fsp.rm(directory, {force: true, recursive: true});
    });

    it('should call initiateUpload, uploadPart, and completeUpload', async () => {
      await transferManager.uploadFileInChunks(
        filePath,
        {},
        mockGeneratorFunction
      );
      assert.strictEqual(fakeHelper.initiateUpload.calledOnce, true);
      assert.strictEqual(fakeHelper.uploadPart.calledOnce, true);
      assert.strictEqual(fakeHelper.completeUpload.calledOnce, true);
    });

    it('should call createReadStream with a highWaterMark equal to chunkSize', async () => {
      const options = {highWaterMark: 32 * 1024 * 1024, start: 0};

      await transferManager.uploadFileInChunks(
        filePath,
        {
          chunkSizeBytes: 32 * 1024 * 1024,
        },
        mockGeneratorFunction
      );

      assert.strictEqual(readStreamSpy.calledOnceWith(filePath, options), true);
    });

    it('should set the correct start offset when called with an existing parts map', async () => {
      const options = {
        highWaterMark: 32 * 1024 * 1024,
        start: 64 * 1024 * 1024,
      };

      await transferManager.uploadFileInChunks(
        filePath,
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

      assert.strictEqual(readStreamSpy.calledOnceWith(filePath, options), true);
    });

    it('should not call initiateUpload if an uploadId is provided', async () => {
      await transferManager.uploadFileInChunks(
        filePath,
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
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };
      assert.rejects(
        transferManager.uploadFileInChunks(
          filePath,
          {autoAbortFailure: false},
          mockGeneratorFunction
        ),
        expectedErr
      );
    });

    it('should pass through headers to initiateUpload', async () => {
      const headersToAdd = {
        'Content-Type': 'foo/bar',
        'x-goog-meta-foo': 'foobar',
        'User-Agent': 'barfoo',
      };

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.callsFake(headers => {
          assert.deepStrictEqual(headers, headersToAdd);
          return Promise.resolve();
        });
        fakeHelper.uploadPart.resolves();
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };

      await transferManager.uploadFileInChunks(
        filePath,
        {headers: headersToAdd},
        mockGeneratorFunction
      );
    });

    it('should call abortUpload when a failure occurs after an uploadID is established', async () => {
      const expectedErr = new MultiPartUploadError(
        'Hello World',
        '',
        new Map<number, string>()
      );
      const fakeId = '123';

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.callsFake(() => {
          fakeHelper.uploadId = fakeId;
          return Promise.reject(expectedErr);
        });
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.callsFake(() => {
          assert.strictEqual(fakeHelper.uploadId, fakeId);
          return Promise.resolve();
        });
        return fakeHelper;
      };

      assert.doesNotThrow(() =>
        transferManager.uploadFileInChunks(filePath, {}, mockGeneratorFunction)
      );
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      let called = false;
      class TestAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders() {
          return {};
        }

        async request(opts: GaxiosOptions) {
          called = true;

          assert(opts.headers);
          assert('x-goog-api-client' in opts.headers);
          assert.match(
            opts.headers['x-goog-api-client'],
            /gccl-gcs-cmd\/tm.upload_sharded/
          );

          return {
            data: Buffer.from(
              `<InitiateMultipartUploadResult>
                <UploadId>1</UploadId>
              </InitiateMultipartUploadResult>`
            ),
            headers: {},
          } as GaxiosResponse;
        }
      }

      transferManager.bucket.storage.authClient = new GoogleAuth({
        authClient: new TestAuthClient(),
      });

      await transferManager.uploadFileInChunks(filePath);

      assert(called);
    });

    it('should set User-Agent correctly based on package.json', async () => {
      let called = false;
      class TestAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders() {
          return {};
        }

        async request(opts: GaxiosOptions) {
          called = true;

          assert(opts.headers);
          assert('User-Agent' in opts.headers);
          assert.match(opts.headers['User-Agent'], /gcloud-node/);

          return {
            data: Buffer.from(
              `<InitiateMultipartUploadResult>
                <UploadId>1</UploadId>
              </InitiateMultipartUploadResult>`
            ),
            headers: {},
          } as GaxiosResponse;
        }
      }

      transferManager.bucket.storage.authClient = new GoogleAuth({
        authClient: new TestAuthClient(),
      });

      await transferManager.uploadFileInChunks(filePath);

      assert(called);
    });

    it('should use CRC32C validation when specified', async () => {
      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.callsFake((partNumber, chunk, validation) => {
          assert.strictEqual(validation, 'crc32c');

          return Promise.resolve();
        });
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };

      await transferManager.uploadFileInChunks(
        filePath,
        {validation: 'crc32c'},
        mockGeneratorFunction
      );

      assert.strictEqual(fakeHelper.uploadPart.calledOnce, true);
    });

    it('should apply crc32c validation by default', async () => {
      let assertionMade = false;

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();

        fakeHelper.uploadPart.callsFake((partNumber, chunk, validation) => {
          // Confirm the validation is set to 'crc32c' by default.
          assert.strictEqual(validation, 'crc32c');
          assertionMade = true;
          return Promise.resolve();
        });

        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };

      // Call the function without specifying any validation option.
      await transferManager.uploadFileInChunks(
        filePath,
        {},
        mockGeneratorFunction
      );

      assert.strictEqual(fakeHelper.uploadPart.calledOnce, true);
      assert.strictEqual(assertionMade, true);
    });
  });
});
