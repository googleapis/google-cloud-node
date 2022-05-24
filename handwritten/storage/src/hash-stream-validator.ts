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
} from './crc32c';

interface HashStreamValidatorOptions {
  crc32c: boolean;
  md5: boolean;
  crc32cGenerator: CRC32CValidatorGenerator;
}

class HashStreamValidator extends Transform {
  readonly crc32cEnabled: boolean;
  readonly md5Enabled: boolean;

  #crc32cHash?: CRC32CValidator = undefined;
  #md5Hash?: Hash = undefined;

  #md5Digest = '';

  constructor(options: Partial<HashStreamValidatorOptions> = {}) {
    super();

    this.crc32cEnabled = !!options.crc32c;
    this.md5Enabled = !!options.md5;

    if (this.crc32cEnabled) {
      const crc32cGenerator =
        options.crc32cGenerator || CRC32C_DEFAULT_VALIDATOR_GENERATOR;

      this.#crc32cHash = crc32cGenerator();
    }

    if (this.md5Enabled) {
      this.#md5Hash = createHash('md5');
    }
  }

  _flush(callback: () => void) {
    if (this.#md5Hash) {
      this.#md5Digest = this.#md5Hash.digest('base64');
    }

    callback();
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
