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
import {ApiError} from '../src/nodejs-common';
import {
  Bucket,
  File,
  CRC32C,
  DownloadOptions,
  IdempotencyStrategy,
  MultiPartHelperGenerator,
  MultiPartUploadError,
  MultiPartUploadHelper,
  UploadOptions,
  TransferManager,
  Storage,
} from '../src';
import * as assert from 'assert';
import * as path from 'path';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as sinon from 'sinon';
import {GaxiosOptions, GaxiosResponse} from 'gaxios';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util';
import {AuthClient, GoogleAuth} from 'google-auth-library';
import {tmpdir} from 'os';

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
      } as fs.Stats);
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
      const paths = ['/a/b/foo/bar.txt'];
      const expectedDestination = path.normalize('hello/world/a/b/foo/bar.txt');
      sandbox.stub(bucket, 'upload').callsFake((path, options) => {
        assert.strictEqual(
          (options as UploadOptions).destination,
          expectedDestination
        );
      });

      await transferManager.uploadManyFiles(paths, {prefix: 'hello/world'});
    });

    it('returns a promise with the uploaded file if there is no callback', async () => {
      const paths = [path.join(__dirname, '../../test/testdata/testfile.json')];
      sandbox.stub(bucket, 'upload').callsFake(() => {
        const resp = [{name: paths[0]}];
        return Promise.resolve(resp);
      });

      const result = await transferManager.uploadManyFiles(paths);
      assert.strictEqual(result[0][0].name, paths[0]);
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
  });

  describe('downloadManyFiles', () => {
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
  });

  describe('downloadFileInChunks', () => {
    let file: File;

    beforeEach(() => {
      sandbox.stub(fsp, 'open').resolves({
        close: () => Promise.resolve(),
        write: (buffer: any) => Promise.resolve({buffer}),
      } as fsp.FileHandle);

      file = new File(bucket, 'some-large-file');
      sandbox.stub(file, 'get').resolves([
        {
          metadata: {
            size: 1024,
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
      let called = true;
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
  });
});
