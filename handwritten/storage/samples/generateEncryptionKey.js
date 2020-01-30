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

/**
 * This application demonstrates how to perform basic operations on encrypted
 * files with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main() {
  // [START storage_generate_encryption_key]

  const crypto = require('crypto');
  function generateEncryptionKey() {
    /**
     * Generates a 256 bit (32 byte) AES encryption key and prints the base64
     * representation.
     *
     * This is included for demonstration purposes. You should generate your own
     * key. Please remember that encryption keys should be handled with a
     * comprehensive security policy.
     *
     */
    try {
      const buffer = crypto.randomBytes(32);
      const encodedKey = buffer.toString('base64');
      console.log(`Base 64 encoded encryption key: ${encodedKey}`);

      return encodedKey;
    } catch (err) {
      console.error(err);
    }
  }
  generateEncryptionKey();
  // [END storage_generate_encryption_key]
}
main(...process.argv.slice(2));
