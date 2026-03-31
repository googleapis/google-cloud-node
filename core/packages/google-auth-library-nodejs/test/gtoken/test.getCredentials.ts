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

import * as assert from 'assert';
import {describe, it, after} from 'mocha';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {getCredentials} from '../../src/gtoken/getCredentials';

describe('getCredentials', () => {
  const filePaths: string[] = [];

  function writeTempFile(name: string, data: string): string {
    const filePath = path.join(os.tmpdir(), name);
    fs.writeFileSync(filePath, data);
    filePaths.push(filePath);
    return filePath;
  }

  after(() => {
    filePaths.forEach(fs.unlinkSync);
  });

  it('should return correct credentials for .json extension', async () => {
    const creds = {private_key: 'private-key', client_email: 'client-email'};
    const keyPath = writeTempFile('key.json', JSON.stringify(creds));
    const credentials = await getCredentials(keyPath);
    assert.deepStrictEqual(credentials, {
      privateKey: creds.private_key,
      clientEmail: creds.client_email,
    });
  });

  it('should throw if private_key is missing from JSON', async () => {
    const creds = {client_email: 'client-email'};
    const keyPath = writeTempFile('key-no-pk.json', JSON.stringify(creds));
    await assert.rejects(getCredentials(keyPath), (err: any) => {
      assert.strictEqual(err.code, 'MISSING_CREDENTIALS');
      return true;
    });
  });

  it('should throw if client_email is missing from JSON', async () => {
    const creds = {private_key: 'private-key'};
    const keyPath = writeTempFile('key-no-email.json', JSON.stringify(creds));
    await assert.rejects(getCredentials(keyPath), (err: any) => {
      assert.strictEqual(err.code, 'MISSING_CREDENTIALS');
      return true;
    });
  });

  it('should return correct credentials for .pem extension', async () => {
    const privateKey = '-----BEGIN PRIVATE KEY-----...';
    const keyPath = writeTempFile('key.pem', privateKey);
    const credentials = await getCredentials(keyPath);
    assert.deepStrictEqual(credentials, {privateKey});
  });

  it('should return correct credentials for .crt extension', async () => {
    const privateKey = '-----BEGIN CERTIFICATE-----...';
    const keyPath = writeTempFile('key.crt', privateKey);
    const credentials = await getCredentials(keyPath);
    assert.deepStrictEqual(credentials, {privateKey});
  });

  it('should return correct credentials for .der extension', async () => {
    const privateKey = '-----BEGIN CERTIFICATE-----...';
    const keyPath = writeTempFile('key.der', privateKey);
    const credentials = await getCredentials(keyPath);
    assert.deepStrictEqual(credentials, {privateKey});
  });

  it('should throw for .p12 extension', async () => {
    await assert.rejects(
      getCredentials('key.p12'),
      /certificates are not supported/,
    );
  });

  it('should throw for .pfx extension', async () => {
    await assert.rejects(
      getCredentials('key.pfx'),
      /certificates are not supported/,
    );
  });

  it('should throw for unknown extension', async () => {
    await assert.rejects(getCredentials('key.txt'), /Unknown certificate type/);
  });
});
