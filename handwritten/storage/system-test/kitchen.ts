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

import * as assert from 'assert';
import {describe, it, beforeEach} from 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import * as tmp from 'tmp';
import * as crypto from 'crypto';
import * as os from 'os';
import {pipeline, Readable} from 'stream';
import {
  checkUploadStatus,
  createURI,
  ErrorWithCode,
  upload,
} from '../src/resumable-upload.js';
import {
  RETRY_DELAY_MULTIPLIER_DEFAULT,
  TOTAL_TIMEOUT_DEFAULT,
  MAX_RETRY_DELAY_DEFAULT,
  AUTO_RETRY_DEFAULT,
  MAX_RETRY_DEFAULT,
  RETRYABLE_ERR_FN_DEFAULT,
  Storage,
} from '../src/storage.js';
import {CRC32C} from '../src/crc32c.js';

const bucketName = process.env.BUCKET_NAME || 'gcs-resumable-upload-test';

/**
 * The known multiple chunk upload size, in bytes
 */
const KNOWN_MULTI_CHUNK_MULTIPLE_BYTES = 256 * 1024;
const FILE_SIZE = 1024 * 1024 * 20;

describe('resumable-upload', () => {
  const retryOptions = {
    retryDelayMultiplier: RETRY_DELAY_MULTIPLIER_DEFAULT,
    totalTimeout: TOTAL_TIMEOUT_DEFAULT,
    maxRetryDelay: MAX_RETRY_DELAY_DEFAULT,
    autoRetry: AUTO_RETRY_DEFAULT,
    maxRetries: MAX_RETRY_DEFAULT,
    retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
  };

  const bucket = new Storage({retryOptions}).bucket(bucketName);
  let filePath: string;

  before(async () => {
    tmp.setGracefulCleanup();
    filePath = path.join(os.tmpdir(), '20MB.zip');

    await fs.promises.writeFile(filePath, crypto.randomBytes(FILE_SIZE));
  });

  beforeEach(() => {
    upload({
      bucket: bucketName,
      file: filePath,
      retryOptions: retryOptions,
    });
  });

  afterEach(async () => {
    await bucket.file(filePath).delete({ignoreNotFound: true});
  });

  after(async () => {
    await fs.promises.rm(filePath, {force: true});
  });

  function createReadable(amount: number) {
    async function* readableGenerator() {
      while (amount > 0) {
        yield crypto.randomBytes(KNOWN_MULTI_CHUNK_MULTIPLE_BYTES);
        amount -= KNOWN_MULTI_CHUNK_MULTIPLE_BYTES;
      }
    }

    return Readable.from(readableGenerator());
  }

  async function delay(title: string, retries: number, done: Function) {
    if (retries === 0) return done(); // no retry on the first failure.
    // see: https://cloud.google.com/storage/docs/exponential-backoff:
    const ms = Math.pow(2, retries) * 1000 + Math.random() * 2000;
    console.info(`retrying "${title}" in ${ms}ms`);
    setTimeout(done(), ms);
  }

  it('should work', done => {
    let uploadSucceeded = false;
    fs.createReadStream(filePath)
      .on('error', done)
      .pipe(
        upload({
          bucket: bucketName,
          file: filePath,
          retryOptions: retryOptions,
          metadata: {contentType: 'image/jpg'},
        })
      )
      .on('error', done)
      .on('response', resp => {
        uploadSucceeded = resp.status === 200;
      })
      .on('finish', () => {
        assert.strictEqual(uploadSucceeded, true);
        done();
      });
  });

  let retries = 0;
  it('should resume an interrupted upload', function (done) {
    this.retries(3);
    delay(this.test!.title, retries, () => {
      retries++;
      // If we've retried, delay.
      fs.stat(filePath, (err, fd) => {
        assert.ifError(err);

        const size = fd.size;
        let uri: string | undefined = undefined;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type DoUploadCallback = (...args: any[]) => void;
        const doUpload = (
          opts: {interrupt?: boolean},
          callback: DoUploadCallback
        ) => {
          let sizeStreamed = 0;
          let destroyed = false;

          const ws = upload({
            uri,
            bucket: bucketName,
            file: filePath,
            metadata: {contentType: 'image/jpg'},
            retryOptions: retryOptions,
          });

          ws.on('uri', (link: string) => {
            uri = link;
          });

          fs.createReadStream(filePath)
            .on('error', callback)
            .on('data', function (this: Readable, chunk) {
              sizeStreamed += chunk.length;

              if (!destroyed && opts.interrupt && sizeStreamed >= size / 2) {
                // stop sending data half way through
                destroyed = true;
                this.destroy();
                process.nextTick(() => ws.destroy(new Error('Interrupted')));
              }
            })
            .pipe(ws)
            .on('error', callback)
            .on('metadata', callback.bind(null, null));
        };

        doUpload({interrupt: true}, (err: Error) => {
          assert.strictEqual(err.message, 'Interrupted');

          doUpload(
            {interrupt: false},
            (err: Error, metadata: {size: number}) => {
              assert.ifError(err);
              assert.ok(uri);
              assert.strictEqual(metadata.size, size);
              assert.strictEqual(typeof metadata.size, 'number');
              done();
            }
          );
        });
      });
    }).catch(done);
  });

  it('should create an upload URI', async () => {
    const uri = await createURI({
      bucket: bucketName,
      file: filePath,
      metadata: {contentType: 'image/jpg'},
      retryOptions: retryOptions,
    });

    const resp = await checkUploadStatus({
      bucket: bucketName,
      file: filePath,
      metadata: {contentType: 'image/jpg'},
      retryOptions: retryOptions,
      uri,
    });

    assert.ok(!resp.data);
    assert.equal(resp.headers['content-length'], '0');
  });

  it('should return a non-resumable failed upload', done => {
    const metadata = {
      metadata: {largeString: 'a'.repeat(2.1e6)},
    };

    fs.createReadStream(filePath)
      .on('error', done)
      .pipe(
        upload({
          bucket: bucketName,
          file: filePath,
          metadata,
          retryOptions: retryOptions,
        })
      )
      .on('error', (err: ErrorWithCode) => {
        assert.strictEqual(err.status, 400);
        done();
      });
  });

  it('should upload an object in multiple chunks', async () => {
    const file = bucket.file(filePath);
    const chunkSize = Math.floor(FILE_SIZE / 4);

    // ensure we're testing a valid size
    assert.ok(chunkSize > KNOWN_MULTI_CHUNK_MULTIPLE_BYTES);

    await new Promise<void>((resolve, reject) =>
      pipeline(
        fs.createReadStream(filePath),
        file.createWriteStream({
          chunkSize,
        }),
        e => (e ? reject(e) : resolve())
      )
    );

    const [results] = await file.getMetadata();

    assert.equal(results.size, FILE_SIZE);
  });

  it('should complete multiple, partial upload session', async () => {
    const count = 4;
    const file = bucket.file(filePath);
    const chunkSize = Math.floor(FILE_SIZE / count);

    // ensure we're testing a valid size and multiple
    assert.equal(chunkSize % KNOWN_MULTI_CHUNK_MULTIPLE_BYTES, 0);

    let uri: string | undefined = undefined;
    let uriGenerated = 0;

    let resumeCRC32C = '';
    let crc32cGenerated = 0;

    for (let i = 0; i < count; i++) {
      const isPartialUpload = !(i + 1 === count);
      const offset = i * chunkSize;

      const readable = createReadable(chunkSize);
      const writable = file.createWriteStream({
        uri,
        chunkSize,
        isPartialUpload,
        offset,
        resumeCRC32C,
      });

      writable.on('uri', link => {
        uri = link;
        uriGenerated++;
      });

      writable.on('crc32c', crc32c => {
        resumeCRC32C = crc32c;
        crc32cGenerated++;
      });

      await new Promise<void>((resolve, reject) =>
        pipeline(readable, writable, e => (e ? reject(e) : resolve()))
      );
    }

    const [results] = await file.getMetadata();

    assert.ok(uri);
    assert.equal(uriGenerated, 1, 'uri should be generated once');
    assert.equal(
      crc32cGenerated,
      count,
      'crc32c should be generated on each upload'
    );
    assert.equal(results.size, FILE_SIZE);
  });

  const KNOWN_CRC32C_OF_ZEROS = 'rthIWA==';
  describe('Validation of Client Checksums Against Server Response', () => {
    let crc32c: string;

    before(async () => {
      crc32c = (await CRC32C.fromFile(filePath)).toString();
    });
    it('should upload successfully when crc32c calculation is enabled', done => {
      let uploadSucceeded = false;

      fs.createReadStream(filePath)
        .on('error', done)
        .pipe(
          upload({
            bucket: bucketName,
            file: filePath,
            crc32c: true,
            clientCrc32c: crc32c,
            retryOptions: retryOptions,
          })
        )
        .on('error', err => {
          console.log(err);
          done(
            new Error(
              `Upload failed unexpectedly on success path: ${err.message}`
            )
          );
        })
        .on('response', resp => {
          uploadSucceeded = resp.status === 200;
        })
        .on('finish', () => {
          assert.strictEqual(uploadSucceeded, true);
          done();
        });
    });

    it('should destroy the stream on a checksum mismatch (client-provided hash mismatch)', done => {
      const EXPECTED_ERROR_MESSAGE_PART = `Provided CRC32C "${KNOWN_CRC32C_OF_ZEROS}" doesn't match calculated CRC32C`;

      fs.createReadStream(filePath)
        .on('error', done)
        .pipe(
          upload({
            bucket: bucketName,
            file: filePath,
            clientCrc32c: KNOWN_CRC32C_OF_ZEROS,
            crc32c: true,
            retryOptions: retryOptions,
          })
        )
        .on('error', (err: Error) => {
          assert.ok(
            err.message.includes(EXPECTED_ERROR_MESSAGE_PART),
            `Expected error message part "${EXPECTED_ERROR_MESSAGE_PART}" not found in: ${err.message}`
          );
          done();
        });
    });
  });
});
