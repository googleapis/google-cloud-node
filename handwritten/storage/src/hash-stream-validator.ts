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

import {createHash, Hash} from 'crypto';
import {Transform} from 'stream';

import {
  CRC32CValidatorGenerator,
  CRC32C_DEFAULT_VALIDATOR_GENERATOR,
  CRC32CValidator,
} from './crc32c.js';
import {FileExceptionMessages, RequestError} from './file.js';

interface HashStreamValidatorOptions {
  /** Enables CRC32C calculation. To validate a provided value use `crc32cExpected`. */
  crc32c: boolean;
  /** Enables MD5 calculation. To validate a provided value use `md5Expected`. */
  md5: boolean;
  /** Set a custom CRC32C generator */
  crc32cGenerator: CRC32CValidatorGenerator;
  /** Sets the expected CRC32C value to verify once all data has been consumed. Also sets the `crc32c` option to `true` */
  crc32cExpected?: string;
  /** Sets the expected MD5 value to verify once all data has been consumed. Also sets the `md5` option to `true` */
  md5Expected?: string;
  /** Indicates whether or not to run a validation check or only update the hash values */
  updateHashesOnly?: boolean;
}
class HashStreamValidator extends Transform {
  readonly crc32cEnabled: boolean;
  readonly md5Enabled: boolean;
  readonly crc32cExpected: string | undefined;
  readonly md5Expected: string | undefined;
  readonly updateHashesOnly: boolean = false;

  #crc32cHash?: CRC32CValidator = undefined;
  #md5Hash?: Hash = undefined;
  #md5Digest = '';

  constructor(options: Partial<HashStreamValidatorOptions> = {}) {
    super();

    this.crc32cEnabled = !!options.crc32c;
    this.md5Enabled = !!options.md5;
    this.updateHashesOnly = !!options.updateHashesOnly;
    this.crc32cExpected = options.crc32cExpected;
    this.md5Expected = options.md5Expected;

    if (this.crc32cEnabled) {
      const crc32cGenerator =
        options.crc32cGenerator || CRC32C_DEFAULT_VALIDATOR_GENERATOR;

      this.#crc32cHash = crc32cGenerator();
    }

    if (this.md5Enabled) {
      this.#md5Hash = createHash('md5');
    }
  }

  _flush(callback: (error?: Error | null | undefined) => void) {
    if (this.#md5Hash) {
      this.#md5Digest = this.#md5Hash.digest('base64');
    }

    if (this.updateHashesOnly) {
      callback();
      return;
    }

    // If we're doing validation, assume the worst-- a data integrity
    // mismatch. If not, these tests won't be performed, and we can assume
    // the best.
    // We must check if the server decompressed the data on serve because hash
    // validation is not possible in this case.
    let failed = this.crc32cEnabled || this.md5Enabled;

    if (this.crc32cEnabled && this.crc32cExpected) {
      failed = !this.test('crc32c', this.crc32cExpected);
    }

    if (this.md5Enabled && this.md5Expected) {
      failed = !this.test('md5', this.md5Expected);
    }

    if (failed) {
      const mismatchError = new RequestError(
        FileExceptionMessages.DOWNLOAD_MISMATCH
      );
      mismatchError.code = 'CONTENT_DOWNLOAD_MISMATCH';

      callback(mismatchError);
    } else {
      callback();
    }
  }

  _transform(
    chunk: Buffer,
    encoding: BufferEncoding,
    callback: (e?: Error) => void
  ) {
    this.push(chunk, encoding);

    try {
      if (this.#crc32cHash) this.#crc32cHash.update(chunk);
      if (this.#md5Hash) this.#md5Hash.update(chunk);
      callback();
    } catch (e) {
      callback(e as Error);
    }
  }

  test(hash: 'crc32c' | 'md5', sum: Buffer | string): boolean {
    const check = Buffer.isBuffer(sum) ? sum.toString('base64') : sum;

    if (hash === 'crc32c' && this.#crc32cHash) {
      return this.#crc32cHash.validate(check);
    }

    if (hash === 'md5' && this.#md5Hash) {
      return this.#md5Digest === check;
    }

    return false;
  }
}

export {HashStreamValidator, HashStreamValidatorOptions};
