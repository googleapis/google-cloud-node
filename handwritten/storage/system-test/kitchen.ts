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
import {Readable} from 'stream';
import {createURI, ErrorWithCode, upload} from '../src/resumable-upload';
import {
  RETRY_DELAY_MULTIPLIER_DEFAULT,
  TOTAL_TIMEOUT_DEFAULT,
  MAX_RETRY_DELAY_DEFAULT,
  AUTO_RETRY_DEFAULT,
  MAX_RETRY_DEFAULT,
  RETRYABLE_ERR_FN_DEFAULT,
} from '../src/storage';

const bucketName = process.env.BUCKET_NAME || 'gcs-resumable-upload-test';
tmp.setGracefulCleanup();
const tmpFileContents = crypto.randomBytes(1024 * 1024 * 20);
const filePath = path.join(os.tmpdir(), '20MB.zip');
const writeStream = fs.createWriteStream(filePath);
const retryOptions = {
  retryDelayMultiplier: RETRY_DELAY_MULTIPLIER_DEFAULT,
  totalTimeout: TOTAL_TIMEOUT_DEFAULT,
  maxRetryDelay: MAX_RETRY_DELAY_DEFAULT,
  autoRetry: AUTO_RETRY_DEFAULT,
  maxRetries: MAX_RETRY_DEFAULT,
  retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
};
writeStream.write(tmpFileContents);
writeStream.close();

async function delay(title: string, retries: number, done: Function) {
  if (retries === 0) return done(); // no retry on the first failure.
  // see: https://cloud.google.com/storage/docs/exponential-backoff:
  const ms = Math.pow(2, retries) * 1000 + Math.random() * 2000;
  console.info(`retrying "${title}" in ${ms}ms`);
  setTimeout(done(), ms);
}

describe('resumable-upload', () => {
  beforeEach(() => {
    upload({
      bucket: bucketName,
      file: filePath,
      retryOptions: retryOptions,
    });
  });

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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type DoUploadCallback = (...args: any[]) => void;
        const doUpload = (
          opts: {interrupt?: boolean},
          callback: DoUploadCallback
        ) => {
          let sizeStreamed = 0;
          let destroyed = false;

          const ws = upload({
            bucket: bucketName,
            file: filePath,
            metadata: {contentType: 'image/jpg'},
            retryOptions: retryOptions,
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
              assert.strictEqual(metadata.size, size);
              assert.strictEqual(typeof metadata.size, 'number');
              done();
            }
          );
        });
      });
    });
  });

  it('should just make an upload URI', done => {
    createURI(
      {
        bucket: bucketName,
        file: filePath,
        metadata: {contentType: 'image/jpg'},
        retryOptions: retryOptions,
      },
      done
    );
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
        assert.strictEqual(err.code, '400');
        done();
      });
  });
});
