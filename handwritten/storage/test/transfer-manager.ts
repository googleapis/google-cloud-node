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
import {describe, it, beforeEach, before, afterEach, after} from 'mocha';
import * as path from 'path';
import {
  Gaxios,
  GaxiosError,
  GaxiosOptions,
  GaxiosOptionsPrepared,
  GaxiosResponse,
} from 'gaxios';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {
  AuthClient,
  GoogleAuth,
  OAuth2Client,
  PassThroughClient,
} from 'google-auth-library';
import {tmpdir} from 'os';
import fs, {promises as fsp, Stats} from 'fs';
import * as sinon from 'sinon';
import {DownloadResponseWithStatus, SkipReason} from '../src/file.js';

describe('Transfer Manager', () => {
  const BUCKET_NAME = 'test-bucket';
  let sandbox: sinon.SinonSandbox;
  let transferManager: TransferManager;
  let bucket: Bucket;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    const storage = sandbox.stub(
      new Storage({
        retryOptions: {
          autoRetry: true,
          maxRetries: 3,
          retryDelayMultiplier: 2,
          totalTimeout: 600,
          maxRetryDelay: 60,
          retryableErrorFn: (err: GaxiosError) => {
            return err.status === 500;
          },
          idempotencyStrategy: IdempotencyStrategy.RetryConditional,
        },
      }),
    );
    bucket = new Bucket(storage, BUCKET_NAME);
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
          0,
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
          expectedDestination,
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
        paths[0].split(path.sep).join(path.posix.sep),
      );
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      const paths = ['/a/b/foo/bar.txt'];

      sandbox.stub(bucket, 'upload').callsFake(async (_path, options) => {
        assert.strictEqual(
          (options as UploadOptions)[GCCL_GCS_CMD_KEY],
          'tm.upload_many',
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
          expectedDestination,
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
          expectedDestination,
        );
      });
      await transferManager.downloadManyFiles([file], {stripPrefix});
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      const file = new File(bucket, 'first.txt');

      sandbox.stub(file, 'download').callsFake(async options => {
        assert.strictEqual(
          (options as DownloadOptions)[GCCL_GCS_CMD_KEY],
          'tm.download_many',
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
        `${passthroughOptions.destination}/${filename}`,
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
          0,
        );
      });
      const secondFile = new File(bucket, 'second.txt');
      sandbox.stub(secondFile, 'download').callsFake(options => {
        assert.strictEqual(
          (options as DownloadManyFilesOptions).skipIfExists,
          0,
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
      const expectedDir = path.resolve(prefix, folder);
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
        passthroughOptions: {destination: prefix},
      });
      assert.strictEqual(
        mkdirSpy.calledWith(expectedDir, {recursive: true}),
        true,
      );
    });

    it('skips files that attempt path traversal via dot-segments (../) and returns them in skippedFiles', async () => {
      const destination = 'download-directory';
      const maliciousFilename = '../../etc/passwd';
      const validFilename = 'valid.txt';

      const maliciousFile = new File(bucket, maliciousFilename);
      const validFile = new File(bucket, validFilename);

      const downloadStub = sandbox
        .stub(validFile, 'download')
        .resolves([Buffer.alloc(0)]);
      const maliciousDownloadStub = sandbox.stub(maliciousFile, 'download');

      const result = (await transferManager.downloadManyFiles(
        [maliciousFile, validFile],
        {passthroughOptions: {destination: destination}},
      )) as DownloadResponseWithStatus[];

      assert.strictEqual(maliciousDownloadStub.called, false);
      assert.strictEqual(downloadStub.calledOnce, true);

      const skipped = result.find(r => r.fileName === maliciousFilename);
      assert.ok(skipped);
      assert.strictEqual(skipped!.skipped, true);
      assert.strictEqual(skipped!.reason, SkipReason.PATH_TRAVERSAL);
    });

    it('allows files with relative segments that resolve within the target directory', async () => {
      const destination = 'safe-directory';
      const filename = './subdir/../subdir/file.txt';
      const file = new File(bucket, filename);

      const downloadStub = sandbox
        .stub(file, 'download')
        .resolves([Buffer.alloc(0)]);

      await transferManager.downloadManyFiles([file], {
        passthroughOptions: {destination: destination},
      });

      assert.strictEqual(downloadStub.calledOnce, true);
    });

    it('prevents traversal when no prefix is provided', async () => {
      const maliciousFilename = '../../../traversal.txt';
      const file = new File(bucket, maliciousFilename);
      const downloadStub = sandbox.stub(file, 'download');

      const result = (await transferManager.downloadManyFiles([
        file,
      ])) as DownloadResponseWithStatus[];

      assert.strictEqual(downloadStub.called, false);
      assert.strictEqual(result[0].skipped, true);
      assert.strictEqual(result[0].reason, SkipReason.PATH_TRAVERSAL);
    });

    it('jails absolute-looking paths with nested segments into the target directory', async () => {
      const destination = './downloads';
      const filename = '/tmp/shady.txt';
      const file = new File(bucket, filename);
      const expectedDestination = path.resolve(
        destination,
        filename.replace(/^\/+/, ''),
      );

      const downloadStub = sandbox
        .stub(file, 'download')
        .resolves([Buffer.alloc(0)]);

      const result = (await transferManager.downloadManyFiles([file], {
        passthroughOptions: {destination: destination},
      })) as DownloadResponseWithStatus[];

      assert.strictEqual(downloadStub.called, true);
      const options = downloadStub.firstCall.args[0] as DownloadOptions;
      assert.strictEqual(options.destination, expectedDestination);

      assert.strictEqual(result.length, 1);
      assert.strictEqual(result[0].skipped, false);
    });

    it('jails absolute-looking Unix paths (e.g. /etc/passwd) into the target directory instead of skipping', async () => {
      const destination = 'downloads';
      const filename = '/etc/passwd';
      const expectedDestination = path.resolve(
        destination,
        filename.replace(/^\/+/, ''),
      );

      const file = new File(bucket, filename);
      const downloadStub = sandbox
        .stub(file, 'download')
        .resolves([Buffer.alloc(0)]);

      const result = (await transferManager.downloadManyFiles([file], {
        passthroughOptions: {destination: destination},
      })) as DownloadResponseWithStatus[];

      assert.strictEqual(downloadStub.calledOnce, true);
      const options = downloadStub.firstCall.args[0] as DownloadOptions;
      assert.strictEqual(options.destination, expectedDestination);
      assert.strictEqual(result[0].skipped, false);
    });

    it('correctly handles stripPrefix and verifies the resulting path is still safe', async () => {
      const options = {
        stripPrefix: 'secret/',
        prefix: 'local-folder',
      };
      const filename = 'secret/../../escape.txt';
      const file = new File(bucket, filename);

      const downloadStub = sandbox.stub(file, 'download');

      const result = (await transferManager.downloadManyFiles(
        [file],
        options,
      )) as DownloadResponseWithStatus[];

      assert.strictEqual(downloadStub.called, false);
      assert.strictEqual(result[0].skipped, true);
      assert.strictEqual(result[0].reason, SkipReason.PATH_TRAVERSAL);
    });

    it('should skip files containing Windows volume separators (:) to prevent drive-injection attacks', async () => {
      const destination = 'C:\\local\\target';
      const maliciousFile = new File(bucket, 'C:\\system\\win32');

      const result = (await transferManager.downloadManyFiles([maliciousFile], {
        passthroughOptions: {destination: destination},
      })) as DownloadResponseWithStatus[];

      assert.strictEqual(result.length, 1);

      const response = result[0];
      assert.strictEqual(response.skipped, true);
      assert.strictEqual(response.reason, SkipReason.ILLEGAL_CHARACTER);
      assert.strictEqual(response.fileName, 'C:\\system\\win32');
    });

    it('should account for every input file (Parity Check)', async () => {
      const isWindows = process.platform === 'win32';
      const destination = '/local/target';
      const fileNames = [
        'data/file.txt', // Normal (Download)
        'data/../sibling.txt', // Internal Traversal (Download)
        '../escape.txt', // External Traversal (Skip - Path Traversal '..')
        '/etc/passwd', // Leading Slash (Download)
        '/local/usr/a.txt', // Path matches prefix (Download)
        'dir/./file.txt', // Dot segment (Download)
        'windows\\file.txt', // Windows separator (Download)
        'data\\..\\sibling.txt', // Windows traversal (Download) | LINUX: Skip (traversal)
        '..\\escape.txt', // Windows escape (Skip - Path Traversal '..')
        'C:\\system\\win32', // Windows Drive (Skip - Illegal Char ':')
        'C:\\local\\target\\a.txt', // Windows Absolute (Skip - Illegal Char ':')
        '..temp.txt', // Leading dots in filename (Download - Not a traversal)
        'test-2026:01:01.txt', // GCS Timestamps (Download - Colon is middle, not drive)
        '\\a\\b\\c.txt', // Leading backslash (Should stay in base)
        '/abs/path/file.txt', // Leading forward slash (Should stay in base)
        '\\\\network\\share', // UNC-style leading double backslash
        '//multiple//slashes', // Multiple leading forward slashes
      ];

      const files = fileNames.map(name => bucket.file(name));

      sandbox.stub(File.prototype, 'download').resolves([Buffer.alloc(0)]);
      sandbox.stub(fsp, 'mkdir').resolves();

      const result = (await transferManager.downloadManyFiles(files, {
        passthroughOptions: {destination: destination},
      })) as DownloadResponseWithStatus[];

      assert.strictEqual(
        result.length,
        fileNames.length,
        `Parity Failure: Processed ${result.length} files but input had ${fileNames.length}`,
      );

      const downloads = result.filter(r => !r.skipped);
      const skips = result.filter(r => r.skipped);

      const expectedDownloads = isWindows ? 13 : 12;
      const expectedSkips = isWindows ? 4 : 5;
      const expectedTraversalSkips = isWindows ? 2 : 3;

      assert.strictEqual(
        downloads.length,
        expectedDownloads,
        `Expected ${expectedDownloads} downloads but got ${downloads.length}`,
      );

      assert.strictEqual(
        skips.length,
        expectedSkips,
        `Expected ${expectedSkips} skips but got ${skips.length}`,
      );

      const traversalSkips = skips.filter(
        f => f.reason === SkipReason.PATH_TRAVERSAL,
      );
      assert.strictEqual(traversalSkips.length, expectedTraversalSkips);

      const illegalCharSkips = skips.filter(
        f => f.reason === SkipReason.ILLEGAL_CHARACTER,
      );
      assert.strictEqual(illegalCharSkips.length, 2);
    });
  });

  describe('downloadFileInChunks', () => {
    let file: File;
    let fromFileStub: sinon.SinonStub;

    beforeEach(() => {
      sandbox.stub(fsp, 'open').resolves({
        close: () => Promise.resolve(),
        write: (buffer: unknown) => Promise.resolve({buffer}),
      } as fsp.FileHandle);

      fromFileStub = sandbox.stub(CRC32C, 'fromFile').resolves(new CRC32C(0));

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
      sandbox.stub(file, 'download').resolves([Buffer.alloc(0)]);

      await transferManager.downloadFileInChunks(file, {validation: 'crc32c'});
      assert.strictEqual(fromFileStub.callCount, 1);
    });

    it('should perform CRC32C validation by default', async () => {
      sandbox.stub(file, 'download').resolves([Buffer.alloc(0)]);

      await transferManager.downloadFileInChunks(file);
      assert.strictEqual(fromFileStub.callCount, 1);
    });

    it('should not perform validation when validation is false', async () => {
      sandbox.stub(file, 'download').resolves([Buffer.alloc(0)]);

      await transferManager.downloadFileInChunks(file, {validation: false});
      assert.strictEqual(fromFileStub.callCount, 0);
    });

    it('should disable individual sharded chunk validation in download calls', async () => {
      let shardedValidationOption: boolean | string | undefined = undefined;
      sandbox.stub(file, 'download').callsFake(async options => {
        shardedValidationOption = (options as DownloadOptions).validation;
        return [Buffer.alloc(100)];
      });

      await transferManager.downloadFileInChunks(file);
      assert.strictEqual(shardedValidationOption, false);
    });

    it('should throw an error if crc32c validation fails', async () => {
      sandbox.stub(file, 'download').resolves([Buffer.alloc(0)]);

      fromFileStub.resolves(new CRC32C(1)); // Set non-expected initial value

      await assert.rejects(
        transferManager.downloadFileInChunks(file, {validation: 'crc32c'}),
        {
          code: 'CONTENT_DOWNLOAD_MISMATCH',
        },
      );
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      sandbox.stub(file, 'download').callsFake(async options => {
        assert.strictEqual(
          (options as DownloadOptions)[GCCL_GCS_CMD_KEY],
          'tm.download_sharded',
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
        path.join(tmpdir(), 'tm-uploadFileInChunks-'),
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
        mockGeneratorFunction,
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
        mockGeneratorFunction,
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
        mockGeneratorFunction,
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
        mockGeneratorFunction,
      );

      assert.strictEqual(fakeHelper.uploadId, '123');
      assert.strictEqual(fakeHelper.initiateUpload.notCalled, true);
    });

    it('should reject with an error with empty uploadId and partsMap', async () => {
      const expectedErr = new MultiPartUploadError(
        'Hello World',
        '',
        new Map<number, string>(),
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
      await assert.rejects(
        transferManager.uploadFileInChunks(
          filePath,
          {autoAbortFailure: false},
          mockGeneratorFunction,
        ),
        expectedErr,
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
        mockGeneratorFunction,
      );
    });

    it('should call abortUpload and reject with the original error when a failure occurs after an uploadID is established', async () => {
      const fakeId = '123';
      const fakePartsMap = new Map<number, string>([[1, 'etag-1']]);
      const expectedErr = new MultiPartUploadError(
        'Hello World',
        fakeId,
        fakePartsMap,
      );

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.callsFake(() => {
          fakeHelper.uploadId = fakeId;
          fakeHelper.partsMap = fakePartsMap;
          return Promise.reject(new Error(expectedErr.message));
        });
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.callsFake(() => {
          assert.strictEqual(fakeHelper.uploadId, fakeId);
          return Promise.resolve();
        });
        return fakeHelper;
      };

      await assert.rejects(
        transferManager.uploadFileInChunks(filePath, {}, mockGeneratorFunction),
        expectedErr,
      );
      assert.strictEqual(fakeHelper.abortUpload.calledOnce, true);
    });

    it('should not call abortUpload when autoAbortFailure is false and a failure occurs after an uploadID is established', async () => {
      const fakeId = '123';
      const fakePartsMap = new Map<number, string>([[1, 'etag-1']]);
      const expectedErr = new MultiPartUploadError(
        'Hello World',
        fakeId,
        fakePartsMap,
      );

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.callsFake(() => {
          fakeHelper.uploadId = fakeId;
          fakeHelper.partsMap = fakePartsMap;
          return Promise.reject(new Error(expectedErr.message));
        });
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.resolves();
        return fakeHelper;
      };

      await assert.rejects(
        transferManager.uploadFileInChunks(
          filePath,
          {autoAbortFailure: false},
          mockGeneratorFunction,
        ),
        expectedErr,
      );
      assert.strictEqual(fakeHelper.abortUpload.notCalled, true);
    });

    it('should reject with an error containing both messages when both uploadPart and abortUpload fail', async () => {
      const fakeId = '123';
      const fakePartsMap = new Map<number, string>([[1, 'etag-1']]);
      const uploadErr = new Error('Chunk upload failed');
      const abortErr = new Error('Abort upload failed');
      const expectedErr = new MultiPartUploadError(
        `${uploadErr.message}\n${abortErr.message}`,
        fakeId,
        fakePartsMap,
      );

      mockGeneratorFunction = (bucket, fileName, uploadId, partsMap) => {
        fakeHelper = sandbox.createStubInstance(FakeXMLHelper);
        fakeHelper.uploadId = uploadId || '';
        fakeHelper.partsMap = partsMap || new Map<number, string>();
        fakeHelper.initiateUpload.resolves();
        fakeHelper.uploadPart.callsFake(() => {
          fakeHelper.uploadId = fakeId;
          fakeHelper.partsMap = fakePartsMap;
          return Promise.reject(uploadErr);
        });
        fakeHelper.completeUpload.resolves();
        fakeHelper.abortUpload.callsFake(() => {
          assert.strictEqual(fakeHelper.uploadId, fakeId);
          return Promise.reject(abortErr);
        });
        return fakeHelper;
      };

      await assert.rejects(
        transferManager.uploadFileInChunks(filePath, {}, mockGeneratorFunction),
        expectedErr,
      );
      assert.strictEqual(fakeHelper.abortUpload.calledOnce, true);
    });

    it('should set the appropriate `GCCL_GCS_CMD_KEY`', async () => {
      let called = false;
      class TestAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders(): Promise<Headers> {
          return new Headers({});
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async request(opts: any): Promise<any> {
          called = true;
          const headers = Object.fromEntries(
            (opts.headers as Headers).entries(),
          );
          assert(headers);
          assert('x-goog-api-client' in headers);
          assert.match(
            headers['x-goog-api-client'],
            /gccl-gcs-cmd\/tm.upload_sharded/,
          );

          return {
            data: Buffer.from(
              `<InitiateMultipartUploadResult>
                <UploadId>1</UploadId>
              </InitiateMultipartUploadResult>`,
            ),
            headers: {},
          } as GaxiosResponse;
        }
      }

      transferManager.bucket.storage.storageTransport.authClient =
        new GoogleAuth({
          authClient: new TestAuthClient(),
        });

      await transferManager.uploadFileInChunks(filePath);

      assert(called);
    });

    describe('universe domain', () => {
      const OTHER_UNIVERSE = 'example-universe.test';
      let authClient: GoogleAuth;
      let requestStub: sinon.SinonStub;

      beforeEach(() => {
        authClient = new GoogleAuth({
          credentials: {
            type: 'service_account',
            client_email: 'test@example.iam.gserviceaccount.com',
            private_key: 'not-a-real-key',
            universe_domain: OTHER_UNIVERSE,
          },
        });
        requestStub = sandbox.stub(authClient, 'request');
        transferManager.bucket.storage.storageTransport.authClient = authClient;
      });

      // Each step makes its own requests: the first one starts the upload,
      // the second one uploads a part, the third one completes the upload.
      // The last two also abort the upload once they fail.
      const steps = {
        starting: {},
        resuming: {uploadId: '123', partsMap: new Map<number, string>()},
        completing: {uploadId: '123', partsMap: new Map([[1, 'etag']])},
      };

      for (const [step, options] of Object.entries(steps)) {
        it(`should not send a request with credentials of another universe domain when ${step} an upload`, async () => {
          await assert.rejects(
            transferManager.uploadFileInChunks(filePath, options),
            /does not match the universe domain found in the credentials/,
          );
          assert.strictEqual(requestStub.called, false);
        });
      }

      it('should send a request with credentials of the configured universe domain', async () => {
        requestStub.rejects(new Error('request sent'));
        transferManager.bucket.storage.universeDomain = OTHER_UNIVERSE;

        await assert.rejects(
          transferManager.uploadFileInChunks(filePath),
          /request sent/,
        );
        assert.strictEqual(requestStub.called, true);
      });
    });

    it('should set User-Agent correctly based on package.json', async () => {
      let called = false;
      class TestAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders(): Promise<Headers> {
          return new Headers({});
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async request(opts: any): Promise<any> {
          called = true;
          const headers = Object.fromEntries(
            (opts.headers as Headers).entries(),
          );
          assert(headers);
          assert('user-agent' in headers);
          assert.match(headers['user-agent'], /gcloud-node/);

          return {
            data: Buffer.from(
              `<InitiateMultipartUploadResult>
                <UploadId>1</UploadId>
              </InitiateMultipartUploadResult>`,
            ),
            headers: {},
          } as GaxiosResponse;
        }
      }

      transferManager.bucket.storage.storageTransport.authClient =
        new GoogleAuth({
          authClient: new TestAuthClient(),
        });

      await transferManager.uploadFileInChunks(filePath);

      assert(called);
    });

    it('should throw an error if UploadId cannot be parsed from initiateUpload response', async () => {
      class TestAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders(): Promise<Headers> {
          return new Headers({});
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async request(): Promise<any> {
          return {
            data: Buffer.from(
              '<InitiateMultipartUploadResult></InitiateMultipartUploadResult>',
            ),
            headers: {},
          } as GaxiosResponse;
        }
      }

      transferManager.bucket.storage.storageTransport.authClient =
        new GoogleAuth({
          authClient: new TestAuthClient(),
        });

      await assert.rejects(
        transferManager.uploadFileInChunks(filePath, {autoAbortFailure: false}),
        /Failed to parse UploadId from response/,
      );
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
        mockGeneratorFunction,
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
        mockGeneratorFunction,
      );

      assert.strictEqual(fakeHelper.uploadPart.calledOnce, true);
      assert.strictEqual(assertionMade, true);
    });

    describe('custom endpoint authentication', () => {
      const CUSTOM_ENDPOINT = 'http://localhost:4443';
      const OTHER_UNIVERSE = 'example-universe.test';
      const OTHER_UNIVERSE_CREDENTIALS = {
        type: 'service_account',
        client_email: 'test@example.iam.gserviceaccount.com',
        private_key: 'not-a-real-key',
        universe_domain: OTHER_UNIVERSE,
      };
      let savedEmulatorHost: string | undefined;

      beforeEach(() => {
        savedEmulatorHost = process.env.STORAGE_EMULATOR_HOST;
        delete process.env.STORAGE_EMULATOR_HOST;
      });

      afterEach(() => {
        if (savedEmulatorHost === undefined) {
          delete process.env.STORAGE_EMULATOR_HOST;
        } else {
          process.env.STORAGE_EMULATOR_HOST = savedEmulatorHost;
        }
      });

      function stubXmlResponses(
        stub: sinon.SinonStub,
        options: {failUploadPart?: boolean} = {},
      ) {
        stub.callsFake(async (opts?: GaxiosOptions) => {
          const headers = new Headers(opts?.headers);
          assert.strictEqual(headers.get('authorization'), null);
          const urlStr = String(opts?.url ?? '');
          if (opts?.method === 'POST' && urlStr.includes('?uploads')) {
            return {
              data: Buffer.from(
                '<InitiateMultipartUploadResult><UploadId>upload-1</UploadId></InitiateMultipartUploadResult>',
              ),
              headers: new Headers(),
              status: 200,
            } as unknown as GaxiosResponse;
          }
          if (opts?.method === 'PUT') {
            if (options.failUploadPart) {
              throw new Error('part upload failed');
            }
            return {
              data: '',
              headers: new Headers({etag: '"etag-1"'}),
              status: 200,
            } as unknown as GaxiosResponse;
          }
          if (opts?.method === 'DELETE') {
            return {
              data: '',
              headers: new Headers(),
              status: 204,
            } as unknown as GaxiosResponse;
          }
          return {
            data: '<CompleteMultipartUploadResult/>',
            headers: new Headers(),
            status: 200,
          } as unknown as GaxiosResponse;
        });
      }

      for (const useAuthWithCustomEndpoint of [undefined, false]) {
        it(`should use plain Gaxios and skip GoogleAuth without ADC when apiEndpoint is set and useAuthWithCustomEndpoint is ${String(useAuthWithCustomEndpoint)}`, async () => {
          const adcError = new Error('Could not load the default credentials');
          const authRequestStub = sandbox
            .stub(GoogleAuth.prototype, 'request')
            .rejects(adcError);
          const getClientStub = sandbox
            .stub(GoogleAuth.prototype, 'getClient')
            .rejects(adcError);
          const getProjectIdStub = sandbox
            .stub(GoogleAuth.prototype, 'getProjectId')
            .rejects(adcError);

          const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request');
          stubXmlResponses(gaxiosRequestStub);

          const customStorage = new Storage({
            apiEndpoint: CUSTOM_ENDPOINT,
            useAuthWithCustomEndpoint,
          });
          const customTm = new TransferManager(
            customStorage.bucket(BUCKET_NAME),
          );

          await customTm.uploadFileInChunks(filePath);

          // initiateUpload (POST) + uploadPart (PUT) + completeUpload (POST)
          assert.strictEqual(gaxiosRequestStub.callCount, 3);
          assert.strictEqual(authRequestStub.called, false);
          assert.strictEqual(getClientStub.called, false);
          assert.strictEqual(getProjectIdStub.called, false);
        });
      }

      it('should use plain Gaxios for abortUpload as well on unauthenticated custom endpoint', async () => {
        const adcError = new Error('Could not load the default credentials');
        const authRequestStub = sandbox
          .stub(GoogleAuth.prototype, 'request')
          .rejects(adcError);
        const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request');
        stubXmlResponses(gaxiosRequestStub, {failUploadPart: true});

        const customStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          retryOptions: {autoRetry: false},
        });
        const customTm = new TransferManager(customStorage.bucket(BUCKET_NAME));

        await assert.rejects(
          customTm.uploadFileInChunks(filePath),
          /part upload failed/,
        );

        // initiateUpload (POST) + uploadPart (PUT, fails) + abortUpload (DELETE)
        assert.strictEqual(gaxiosRequestStub.callCount, 3);
        assert.strictEqual(
          gaxiosRequestStub.thirdCall.args[0]?.method,
          'DELETE',
        );
        assert.strictEqual(authRequestStub.called, false);
      });

      it('should bypass GoogleAuth and not attach Authorization header when STORAGE_EMULATOR_HOST is set even if credentials exist', async () => {
        process.env.STORAGE_EMULATOR_HOST = CUSTOM_ENDPOINT;
        const oauthClient = new OAuth2Client();
        oauthClient.setCredentials({
          access_token: 'leaked-token',
          expiry_date: Date.now() + 3_600_000,
        });
        const getRequestHeadersSpy = sandbox.spy(
          oauthClient,
          'getRequestHeaders',
        );
        const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request');
        stubXmlResponses(gaxiosRequestStub);

        const emulatorStorage = new Storage({authClient: oauthClient});
        const authRequestSpy = sandbox.spy(
          emulatorStorage.storageTransport.authClient,
          'request',
        );
        const emulatorTm = new TransferManager(
          emulatorStorage.bucket(BUCKET_NAME),
        );

        await emulatorTm.uploadFileInChunks(filePath);

        assert.strictEqual(gaxiosRequestStub.callCount, 3);
        assert.strictEqual(authRequestSpy.called, false);
        assert.strictEqual(getRequestHeadersSpy.called, false);
      });

      it('should use authClient.request and send Authorization header when customEndpoint is true and useAuthWithCustomEndpoint is true', async () => {
        const oauthClient = new OAuth2Client();
        oauthClient.setCredentials({
          access_token: 'xml-token',
          expiry_date: Date.now() + 3_600_000,
        });

        const capturedAuthHeaders: Array<string | null> = [];
        const mockFetch: GaxiosOptions['fetchImplementation'] = async (
          url,
          init,
        ) => {
          const headers = new Headers(init?.headers);
          capturedAuthHeaders.push(headers.get('authorization'));
          const urlStr = String(url);
          if (init?.method === 'POST' && urlStr.includes('?uploads')) {
            return new Response(
              '<InitiateMultipartUploadResult><UploadId>upload-1</UploadId></InitiateMultipartUploadResult>',
              {status: 200},
            );
          }
          if (init?.method === 'PUT') {
            return new Response('', {status: 200, headers: {etag: '"etag-1"'}});
          }
          return new Response('<CompleteMultipartUploadResult/>', {
            status: 200,
          });
        };
        oauthClient.transporter.defaults.fetchImplementation = mockFetch;

        const customStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          useAuthWithCustomEndpoint: true,
          authClient: oauthClient,
        });
        const authRequestSpy = sandbox.spy(
          customStorage.storageTransport.authClient,
          'request',
        );
        const customTm = new TransferManager(customStorage.bucket(BUCKET_NAME));

        await customTm.uploadFileInChunks(filePath);

        assert.strictEqual(authRequestSpy.callCount, 3);
        assert.deepStrictEqual(capturedAuthHeaders, [
          'Bearer xml-token',
          'Bearer xml-token',
          'Bearer xml-token',
        ]);
      });

      it('should skip universe domain validation when useAuthWithCustomEndpoint is false and enforce it when true', async () => {
        const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request');
        stubXmlResponses(gaxiosRequestStub);

        const unauthStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          useAuthWithCustomEndpoint: false,
          credentials: OTHER_UNIVERSE_CREDENTIALS,
        });
        const unauthTm = new TransferManager(unauthStorage.bucket(BUCKET_NAME));
        await unauthTm.uploadFileInChunks(filePath);
        assert.strictEqual(gaxiosRequestStub.callCount, 3);

        const authStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          useAuthWithCustomEndpoint: true,
          credentials: OTHER_UNIVERSE_CREDENTIALS,
        });
        const authRequestStub = sandbox.stub(
          authStorage.storageTransport.authClient,
          'request',
        );
        const authTm = new TransferManager(authStorage.bucket(BUCKET_NAME));

        await assert.rejects(
          authTm.uploadFileInChunks(filePath),
          /does not match the universe domain found in the credentials/,
        );
        assert.strictEqual(authRequestStub.called, false);
      });

      it('should allow PassThroughClient when useAuthWithCustomEndpoint is true and universeDomain is non-default', async () => {
        const passThrough = new PassThroughClient();
        const capturedMethods: Array<string | undefined> = [];
        const capturedAuthHeaders: Array<string | null> = [];
        const mockFetch: GaxiosOptions['fetchImplementation'] = async (
          url,
          init,
        ) => {
          capturedMethods.push(init?.method);
          capturedAuthHeaders.push(
            new Headers(init?.headers).get('authorization'),
          );
          const urlStr = String(url);
          if (init?.method === 'POST' && urlStr.includes('?uploads')) {
            return new Response(
              '<InitiateMultipartUploadResult><UploadId>upload-1</UploadId></InitiateMultipartUploadResult>',
              {status: 200},
            );
          }
          if (init?.method === 'PUT') {
            return new Response('', {status: 200, headers: {etag: '"etag-1"'}});
          }
          return new Response('<CompleteMultipartUploadResult/>', {
            status: 200,
          });
        };
        passThrough.transporter.defaults.fetchImplementation = mockFetch;

        const customStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          useAuthWithCustomEndpoint: true,
          authClient: passThrough,
          universeDomain: OTHER_UNIVERSE,
        });
        const customTm = new TransferManager(customStorage.bucket(BUCKET_NAME));

        await customTm.uploadFileInChunks(filePath);

        assert.deepStrictEqual(capturedMethods, ['POST', 'PUT', 'POST']);
        assert.deepStrictEqual(capturedAuthHeaders, [null, null, null]);
      });

      it('should safely handle undefined storageTransport or gaxiosInstance on unauthenticated custom endpoints', async () => {
        const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request');
        stubXmlResponses(gaxiosRequestStub);

        // Missing storageTransport
        const storageNoTransport = new Storage({apiEndpoint: CUSTOM_ENDPOINT});
        (
          storageNoTransport as unknown as {storageTransport?: unknown}
        ).storageTransport = undefined;
        const tmNoTransport = new TransferManager(
          storageNoTransport.bucket(BUCKET_NAME),
        );
        await tmNoTransport.uploadFileInChunks(filePath);
        assert.strictEqual(gaxiosRequestStub.callCount, 3);

        // Missing gaxiosInstance on storageTransport
        const storageNoGaxios = new Storage({apiEndpoint: CUSTOM_ENDPOINT});
        (
          storageNoGaxios.storageTransport as unknown as {
            gaxiosInstance?: unknown;
          }
        ).gaxiosInstance = undefined;
        const tmNoGaxios = new TransferManager(
          storageNoGaxios.bucket(BUCKET_NAME),
        );
        await tmNoGaxios.uploadFileInChunks(filePath);
        assert.strictEqual(gaxiosRequestStub.callCount, 6);
      });

      it('should inherit gaxiosInstance defaults and preserve HTTP error messages across initiate, uploadPart, complete, and abort failures', async () => {
        const seenDefaultHeaders: Array<string | null> = [];
        let failPhase: 'initiate' | 'part' | 'complete' | 'part-and-abort' =
          'initiate';

        const mockFetch: GaxiosOptions['fetchImplementation'] = async (
          url,
          init,
        ) => {
          const headers = new Headers(init?.headers);
          assert.strictEqual(headers.get('authorization'), null);
          seenDefaultHeaders.push(headers.get('x-custom-default'));
          const urlStr = String(url);

          if (init?.method === 'POST' && urlStr.includes('?uploads')) {
            if (failPhase === 'initiate') {
              return new Response(
                JSON.stringify({error: {message: 'Initiate forbidden'}}),
                {status: 403, headers: {'content-type': 'application/json'}},
              );
            }
            return new Response(
              '<InitiateMultipartUploadResult><UploadId>upload-err-1</UploadId></InitiateMultipartUploadResult>',
              {status: 200},
            );
          }

          if (init?.method === 'PUT') {
            if (failPhase === 'part' || failPhase === 'part-and-abort') {
              return new Response('Part failed', {status: 500});
            }
            return new Response('', {
              status: 200,
              headers: {etag: '"etag-1"'},
            });
          }

          if (init?.method === 'POST' && urlStr.includes('uploadId=')) {
            if (failPhase === 'complete') {
              return new Response('Complete bad request', {status: 400});
            }
            return new Response('<CompleteMultipartUploadResult/>', {
              status: 200,
            });
          }

          if (init?.method === 'DELETE') {
            if (failPhase === 'part-and-abort') {
              return new Response('Abort unavailable', {status: 503});
            }
            return new Response(null, {status: 204});
          }

          return new Response('', {status: 200});
        };

        const customStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          retryOptions: {autoRetry: false},
        });
        customStorage.storageTransport.gaxiosInstance.defaults = {
          fetchImplementation: mockFetch,
          headers: {'x-custom-default': 'inherited-header'},
        };
        const customTm = new TransferManager(customStorage.bucket(BUCKET_NAME));

        // 1. initiateUpload HTTP 403 error
        failPhase = 'initiate';
        await assert.rejects(
          customTm.uploadFileInChunks(filePath),
          (err: MultiPartUploadError) => {
            assert(err instanceof MultiPartUploadError);
            assert.match(err.message, /Initiate forbidden/);
            assert.strictEqual(
              (err as unknown as {uploadId: string}).uploadId,
              '',
            );
            return true;
          },
        );

        // 2. uploadPart HTTP 500 error (auto-aborts cleanly)
        failPhase = 'part';
        await assert.rejects(
          customTm.uploadFileInChunks(filePath),
          (err: MultiPartUploadError) => {
            assert(err instanceof MultiPartUploadError);
            assert.match(err.message, /Part failed/);
            assert.strictEqual(
              (err as unknown as {uploadId: string}).uploadId,
              'upload-err-1',
            );
            return true;
          },
        );

        // 3. completeUpload HTTP 400 error (auto-aborts cleanly)
        failPhase = 'complete';
        await assert.rejects(
          customTm.uploadFileInChunks(filePath),
          (err: MultiPartUploadError) => {
            assert(err instanceof MultiPartUploadError);
            assert.match(err.message, /Complete bad request/);
            assert.strictEqual(
              (err as unknown as {uploadId: string}).uploadId,
              'upload-err-1',
            );
            return true;
          },
        );

        // 4. uploadPart HTTP 500 + abortUpload HTTP 503 preserves both messages
        failPhase = 'part-and-abort';
        await assert.rejects(
          customTm.uploadFileInChunks(filePath),
          (err: MultiPartUploadError) => {
            assert(err instanceof MultiPartUploadError);
            assert.match(err.message, /Part failed/);
            assert.match(err.message, /Abort unavailable/);
            assert.strictEqual(
              (err as unknown as {uploadId: string}).uploadId,
              'upload-err-1',
            );
            return true;
          },
        );

        assert.ok(seenDefaultHeaders.length > 0);
        for (const hdr of seenDefaultHeaders) {
          assert.strictEqual(hdr, 'inherited-header');
        }
      });

      it('should copy request and response interceptors from storageTransport.gaxiosInstance and strip defaults.adapter on unauthenticated custom endpoints', async () => {
        const seenInterceptorHeaders: Array<string | null> = [];
        const requestInterceptorSpy = sandbox.spy(
          async (config: GaxiosOptionsPrepared) => {
            config.headers.set('x-tm-req-interceptor', 'applied');
            return config;
          },
        );
        const responseInterceptorSpy = sandbox.spy(
          async (res: GaxiosResponse) => res,
        );
        const recursiveAdapterSpy = sandbox.spy(async () => {
          throw new Error(
            'defaults.adapter should not be copied to XMLMultiPartUploadHelper',
          );
        });

        const mockFetch: GaxiosOptions['fetchImplementation'] = async (
          url,
          init,
        ) => {
          const headers = new Headers(init?.headers);
          assert.strictEqual(headers.get('authorization'), null);
          seenInterceptorHeaders.push(headers.get('x-tm-req-interceptor'));
          const urlStr = String(url);
          if (init?.method === 'POST' && urlStr.includes('?uploads')) {
            return new Response(
              '<InitiateMultipartUploadResult><UploadId>upload-inter-1</UploadId></InitiateMultipartUploadResult>',
              {status: 200},
            );
          }
          if (init?.method === 'PUT') {
            return new Response('', {
              status: 200,
              headers: {etag: '"etag-1"'},
            });
          }
          return new Response('<CompleteMultipartUploadResult/>', {
            status: 200,
          });
        };

        const customStorage = new Storage({
          apiEndpoint: CUSTOM_ENDPOINT,
          retryOptions: {autoRetry: false},
        });
        customStorage.storageTransport.gaxiosInstance.defaults = {
          fetchImplementation: mockFetch,
          adapter: recursiveAdapterSpy,
        };
        customStorage.storageTransport.gaxiosInstance.interceptors.request.add({
          resolved: requestInterceptorSpy,
        });
        customStorage.storageTransport.gaxiosInstance.interceptors.response.add(
          {
            resolved: responseInterceptorSpy,
          },
        );

        const customTm = new TransferManager(customStorage.bucket(BUCKET_NAME));
        await customTm.uploadFileInChunks(filePath);

        // initiateUpload (POST) + uploadPart (PUT) + completeUpload (POST)
        assert.strictEqual(requestInterceptorSpy.callCount, 3);
        assert.strictEqual(responseInterceptorSpy.callCount, 3);
        assert.deepStrictEqual(seenInterceptorHeaders, [
          'applied',
          'applied',
          'applied',
        ]);
        assert.strictEqual(recursiveAdapterSpy.called, false);
        // Original transport defaults were not mutated
        assert.strictEqual(
          customStorage.storageTransport.gaxiosInstance.defaults.adapter,
          recursiveAdapterSpy,
        );
      });
    });
  });
});
