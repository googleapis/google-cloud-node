// Copyright 2020 Google LLC
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

import * as fs from 'fs';
import {strict as assert} from 'assert';
import {describe, it} from 'mocha';
import {createCrypto, fromArrayBufferToHex} from '../src/crypto/crypto';
import {NodeCrypto} from '../src/crypto/node/crypto';

const publicKey = fs.readFileSync('./test/fixtures/public.pem', 'utf-8');
const privateKey = fs.readFileSync('./test/fixtures/private.pem', 'utf-8');

/**
 * Converts a Node.js Buffer to an ArrayBuffer.
 * https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
 * @param buffer The Buffer input to covert.
 * @return The ArrayBuffer representation of the input.
 */
function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  const arrayBuffer = new ArrayBuffer(buffer.length);
  const arrayBufferView = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; i++) {
    arrayBufferView[i] = buffer[i];
  }
  return arrayBuffer;
}

describe('crypto', () => {
  const crypto = createCrypto();

  it('should create a NodeCrypto instance', () => {
    assert(crypto instanceof NodeCrypto);
  });

  it('should calculate SHA256 digest', async () => {
    const input = 'I can calculate SHA256';
    const expectedDigest = 'c9CEhti/1PtLwS3YkDYE3b3lrZW276VnvXI86BqIESI=';
    const calculatedDigest = await crypto.sha256DigestBase64(input);
    assert.strictEqual(calculatedDigest, expectedDigest);
  });

  it('should generate random bytes', () => {
    const requestedLength = 20;
    const generated1Base64 = crypto.randomBytesBase64(requestedLength);
    const generated1 = Buffer.from(generated1Base64, 'base64');
    assert.strictEqual(generated1.length, requestedLength);
    const generated2Base64 = crypto.randomBytesBase64(requestedLength);
    const generated2 = Buffer.from(generated2Base64, 'base64');
    assert.strictEqual(generated2.length, requestedLength);
    // random strings are random! let's just check they are different.
    // if they are the same, we have a problem.
    assert.notStrictEqual(generated1Base64, generated2Base64);
  });

  it('should verify a signature', async () => {
    const message = 'This message is signed';
    const signatureBase64 = [
      'ufyKBV+Ar7Yq8CSmSIN9m38ch4xnWBz8CP4qHh6V+',
      'm4cCbeXdR1MEmWVhNJjZQFv3KL3tDAnl0Q4bTcSR/',
      'mmhXaRjdxyJ6xAUp0KcbVq6xsDIbnnYHSgYr3zVoS',
      'dRRefWSWTknN1S69fNmKEfUeBIJA93xitr3pbqtLC',
      'bP28XNU',
    ].join(''); // note: no padding
    const verified = await crypto.verify(publicKey, message, signatureBase64);
    assert(verified);
  });

  it('should sign a message', async () => {
    const message = 'This message is signed';
    const expectedSignatureBase64 = [
      'ufyKBV+Ar7Yq8CSmSIN9m38ch4xnWBz8CP4qHh6V+',
      'm4cCbeXdR1MEmWVhNJjZQFv3KL3tDAnl0Q4bTcSR/',
      'mmhXaRjdxyJ6xAUp0KcbVq6xsDIbnnYHSgYr3zVoS',
      'dRRefWSWTknN1S69fNmKEfUeBIJA93xitr3pbqtLC',
      'bP28XNU=',
    ].join('');

    const signatureBase64 = await crypto.sign(privateKey, message);
    assert.strictEqual(signatureBase64, expectedSignatureBase64);
  });

  it('should decode unpadded base64', () => {
    const originalString = 'test string';
    const base64String = 'dGVzdCBzdHJpbmc';
    const decodedString = crypto.decodeBase64StringUtf8(base64String);
    assert.strictEqual(decodedString, originalString);
  });

  it('should encode to base64 and pad the result', () => {
    const originalString = 'test string';
    const base64String = 'dGVzdCBzdHJpbmc=';
    const encodedString = crypto.encodeBase64StringUtf8(originalString);
    assert.strictEqual(encodedString, base64String);
  });

  it('should calculate SHA256 digest in hex encoding', async () => {
    const input = 'I can calculate SHA256';
    const expectedHexDigest =
      '73d08486d8bfd4fb4bc12dd8903604ddbde5ad95b6efa567bd723ce81a881122';

    const calculatedHexDigest = await crypto.sha256DigestHex(input);
    assert.strictEqual(calculatedHexDigest, expectedHexDigest);
  });

  describe('should compute the HMAC-SHA256 hash of a message', () => {
    it('using string key', async () => {
      const message = 'The quick brown fox jumps over the lazy dog';
      const key = 'key';
      const expectedHexHash =
        'f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8';
      const extectedHash = new Uint8Array(
        (expectedHexHash.match(/.{1,2}/g) as string[]).map(byte =>
          parseInt(byte, 16),
        ),
      );

      const calculatedHash = await crypto.signWithHmacSha256(key, message);
      assert.deepStrictEqual(calculatedHash, extectedHash.buffer);
    });

    it('using an ArrayBuffer key', async () => {
      const message = 'The quick brown fox jumps over the lazy dog';
      const key = toArrayBuffer(Buffer.from('key'));
      const expectedHexHash =
        'f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8';
      const extectedHash = new Uint8Array(
        (expectedHexHash.match(/.{1,2}/g) as string[]).map(byte =>
          parseInt(byte, 16),
        ),
      );

      const calculatedHash = await crypto.signWithHmacSha256(key, message);
      assert.deepStrictEqual(calculatedHash, extectedHash.buffer);
    });
  });

  it('should expose a method to convert an ArrayBuffer to hex', () => {
    const arrayBuffer = new Uint8Array([4, 8, 0, 12, 16, 0])
      .buffer as ArrayBuffer;
    const expectedHexEncoding = '0408000c1000';

    const calculatedHexEncoding = fromArrayBufferToHex(arrayBuffer);
    assert.strictEqual(calculatedHexEncoding, expectedHexEncoding);
  });
});
