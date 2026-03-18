// Copyright 2025 Google LLC
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

/**
 * Crypto interface will provide required crypto functions.
 * Use `createCrypto()` factory function to create an instance
 * of Crypto. It will either use Node.js `crypto` module, or
 * use browser's SubtleCrypto interface. Since most of the
 * SubtleCrypto methods return promises, we must make those
 * methods return promises here as well, even though in Node.js
 * they are synchronous.
 */
export interface Crypto {
  sha256DigestBase64(str: string): Promise<string>;
  randomBytesBase64(n: number): string;
  verify(
    pubkey: string | JwkCertificate,
    data: string | Buffer,
    signature: string,
  ): Promise<boolean>;
  sign(
    privateKey: string | JwkCertificate,
    data: string | Buffer,
  ): Promise<string>;
  decodeBase64StringUtf8(base64: string): string;
  encodeBase64StringUtf8(text: string): string;
  /**
   * Computes the SHA-256 hash of the provided string.
   * @param str The plain text string to hash.
   * @return A promise that resolves with the SHA-256 hash of the provided
   *   string in hexadecimal encoding.
   */
  sha256DigestHex(str: string): Promise<string>;

  /**
   * Computes the HMAC hash of a message using the provided crypto key and the
   * SHA-256 algorithm.
   * @param key The secret crypto key in utf-8 or ArrayBuffer format.
   * @param msg The plain text message.
   * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
   *   format.
   */
  signWithHmacSha256(
    key: string | ArrayBuffer,
    msg: string,
  ): Promise<ArrayBuffer>;
}

export interface JwkCertificate {
  kty: string;
  alg: string;
  use?: string;
  kid: string;
  n: string;
  e: string;
}

/**
 * Converts an ArrayBuffer to a hexadecimal string.
 * @param arrayBuffer The ArrayBuffer to convert to hexadecimal string.
 * @return The hexadecimal encoding of the ArrayBuffer.
 */
export function fromArrayBufferToHex(arrayBuffer: ArrayBuffer): string {
  // Convert buffer to byte array.
  const byteArray = Array.from(new Uint8Array(arrayBuffer));
  // Convert bytes to hex string.
  return byteArray
    .map(byte => {
      return byte.toString(16).padStart(2, '0');
    })
    .join('');
}
