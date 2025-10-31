// Copyright 2019 Google LLC
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

import * as crypto from 'crypto';

import {Crypto} from '../shared';

export class NodeCrypto implements Crypto {
  async sha256DigestBase64(str: string): Promise<string> {
    return crypto.createHash('sha256').update(str).digest('base64');
  }

  randomBytesBase64(count: number): string {
    return crypto.randomBytes(count).toString('base64');
  }

  async verify(
    pubkey: string,
    data: string | Buffer,
    signature: string,
  ): Promise<boolean> {
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(data);
    verifier.end();
    return verifier.verify(pubkey, signature, 'base64');
  }

  async sign(privateKey: string, data: string | Buffer): Promise<string> {
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(data);
    signer.end();
    return signer.sign(privateKey, 'base64');
  }

  decodeBase64StringUtf8(base64: string): string {
    return Buffer.from(base64, 'base64').toString('utf-8');
  }

  encodeBase64StringUtf8(text: string): string {
    return Buffer.from(text, 'utf-8').toString('base64');
  }

  /**
   * Computes the SHA-256 hash of the provided string.
   * @param str The plain text string to hash.
   * @return A promise that resolves with the SHA-256 hash of the provided
   *   string in hexadecimal encoding.
   */
  async sha256DigestHex(str: string): Promise<string> {
    return crypto.createHash('sha256').update(str).digest('hex');
  }

  /**
   * Computes the HMAC hash of a message using the provided crypto key and the
   * SHA-256 algorithm.
   * @param key The secret crypto key in utf-8 or ArrayBuffer format.
   * @param msg The plain text message.
   * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
   *   format.
   */
  async signWithHmacSha256(
    key: string | ArrayBuffer,
    msg: string,
  ): Promise<ArrayBuffer> {
    const cryptoKey = typeof key === 'string' ? key : toBuffer(key);
    return toArrayBuffer(
      crypto.createHmac('sha256', cryptoKey).update(msg).digest(),
    );
  }
}

/**
 * Converts a Node.js Buffer to an ArrayBuffer.
 * https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
 * @param buffer The Buffer input to covert.
 * @return The ArrayBuffer representation of the input.
 */
function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  );
}

/**
 * Converts an ArrayBuffer to a Node.js Buffer.
 * @param arrayBuffer The ArrayBuffer input to covert.
 * @return The Buffer representation of the input.
 */
function toBuffer(arrayBuffer: ArrayBuffer): Buffer {
  return Buffer.from(arrayBuffer);
}
