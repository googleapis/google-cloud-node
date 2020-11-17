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

'use strict';

const fs = require('fs');
const path = require('path');
const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const {before, after, it, describe} = require('mocha');
const cp = require('child_process');
const fetch = require('node-fetch');
const uuid = require('uuid');
const {promisify} = require('util');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const cwd = path.join(__dirname, '..');
const bucketName = generateName();
const bucket = storage.bucket(bucketName);
const fileName = 'test.txt';
const movedFileName = 'test2.txt';
const copiedFileName = 'test3.txt';
const renamedFileName = 'test4.txt';
const signedFileName = 'signed-upload.txt';
const kmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_US;
const filePath = path.join(cwd, 'resources', fileName);
const folderPath = path.join(cwd, 'resources');
const downloadFilePath = path.join(cwd, 'downloaded.txt');

const fileContent = fs.readFileSync(filePath, 'utf-8');

describe('file', () => {
  before(async () => {
    await bucket.create();
  });

  after(async () => {
    await promisify(fs.unlink)(downloadFilePath).catch(console.error);
    // Try deleting all files twice, just to make sure
    await bucket.deleteFiles({force: true}).catch(console.error);
    await bucket.deleteFiles({force: true}).catch(console.error);
    await bucket.delete().catch(console.error);
  });

  it('should upload a file', async () => {
    const output = execSync(`node uploadFile.js ${bucketName} ${filePath}`);
    assert.match(output, new RegExp(`${filePath} uploaded to ${bucketName}.`));
    const [exists] = await bucket.file(fileName).exists();
    assert.strictEqual(exists, true);
  });

  it('should upload a file with a kms key', async () => {
    const output = execSync(
      `node uploadFileWithKmsKey.js ${bucketName} ${filePath} ${kmsKeyName}`
    );
    assert.include(
      output,
      `${filePath} uploaded to ${bucketName} using ${kmsKeyName}.`
    );
    const [exists] = await bucket.file(fileName).exists();
    assert.strictEqual(exists, true);
  });

  it('should upload a local directory', done => {
    const output = execSync(
      `node uploadDirectory.js ${bucketName} ${folderPath}`
    );

    const fileList = [];
    getFileList(folderPath);

    function getFileList(directory) {
      const items = fs.readdirSync(directory);
      items.forEach(item => {
        const fullPath = path.join(directory, item);
        const stat = fs.lstatSync(fullPath);
        if (stat.isFile()) {
          fileList.push(fullPath);
        } else {
          getFileList(fullPath);
        }
      });
    }

    assert.match(
      output,
      new RegExp(
        `${fileList.length} files uploaded to ${bucketName} successfully.`
      )
    );

    Promise.all(
      fileList.map(file =>
        bucket
          .file(
            path.relative(path.dirname(folderPath), file).replace(/\\/g, '/')
          )
          .exists()
      )
    ).then(resps => {
      const ctr = resps.reduce((acc, cur) => {
        return acc + cur[0];
      }, 0);
      assert.strictEqual(ctr, fileList.length);
      done();
    }, assert.ifError);
  });

  it('should download a file', () => {
    const output = execSync(
      `node downloadFile.js ${bucketName} ${fileName} ${downloadFilePath}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${fileName} downloaded to ${downloadFilePath}.`
      )
    );
    fs.statSync(downloadFilePath);
  });

  it('should move a file', async () => {
    const output = execSync(
      `node moveFile.js ${bucketName} ${fileName} ${movedFileName}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${fileName} moved to gs://${bucketName}/${movedFileName}.`
      )
    );
    const [exists] = await bucket.file(movedFileName).exists();
    assert.strictEqual(exists, true);
  });

  it('should copy a file', async () => {
    const output = execSync(
      `node copyFile.js ${bucketName} ${movedFileName} ${bucketName} ${copiedFileName}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${movedFileName} copied to gs://${bucketName}/${copiedFileName}.`
      )
    );
    const [exists] = await bucket.file(copiedFileName).exists();
    assert.strictEqual(exists, true);
  });

  it('should list files', () => {
    const output = execSync(`node listFiles.js ${bucketName}`);
    assert.match(output, /Files:/);
    assert.match(output, new RegExp(movedFileName));
    assert.match(output, new RegExp(copiedFileName));
  });

  it('should list files by a prefix', () => {
    let output = execSync(`node listFilesByPrefix.js ${bucketName} test "/"`);
    assert.match(output, /Files:/);
    assert.match(output, new RegExp(movedFileName));
    assert.match(output, new RegExp(copiedFileName));

    output = execSync(`node listFilesByPrefix.js ${bucketName} foo`);
    assert.match(output, /Files:/);
    assert.notMatch(output, new RegExp(movedFileName));
    assert.notMatch(output, new RegExp(copiedFileName));
  });

  it('should list files with pagination', () => {
    const output = execSync(`node listFilesPaginate.js ${bucketName}`);
    assert.match(output, /Files:/);
    assert.match(output, new RegExp(movedFileName));
    assert.match(output, new RegExp(copiedFileName));
  });

  it('should rename a file', async () => {
    const output = execSync(
      `node renameFile.js ${bucketName} ${movedFileName} ${renamedFileName}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${movedFileName} renamed to gs://${bucketName}/${renamedFileName}.`
      )
    );
    const [exists] = await bucket.file(renamedFileName).exists();
    assert.strictEqual(exists, true);

    const [oldFileExists] = await bucket.file(movedFileName).exists();
    assert.strictEqual(oldFileExists, false);
  });

  it('should make a file public', () => {
    const output = execSync(
      `node makePublic.js ${bucketName} ${copiedFileName}`
    );
    assert.match(
      output,
      new RegExp(`gs://${bucketName}/${copiedFileName} is now public.`)
    );
  });

  it('should generate a v2 signed URL for a file', async () => {
    const output = await execSync(
      `node generateSignedUrl ${bucketName} ${copiedFileName}`
    );
    assert.match(
      output,
      new RegExp(`The signed url for ${copiedFileName} is `)
    );
  });

  it('should generate a v4 signed URL and read a file', async () => {
    const output = await execSync(
      `node generateV4ReadSignedUrl.js ${bucketName} ${copiedFileName}`
    );

    const expected = /URL:\n([^\s]+)/;
    assert.match(output, expected);

    const match = output.match(expected);
    const res = await fetch(match[1]);
    const text = await res.text();
    assert.strictEqual(text, fileContent);
  });

  it('should generate a v4 signed URL and upload a file', async () => {
    const output = execSync(
      `node generateV4UploadSignedUrl.js ${bucketName} ${signedFileName}`
    );

    const expected = /URL:\n([^\s]+)/;
    assert.match(output, expected);

    const match = output.match(expected);
    const req = {
      method: 'PUT',
      headers: {'Content-Type': 'application/octet-stream'},
      body: fileContent,
    };
    await fetch(match[1], req);

    await new Promise((resolve, reject) => {
      let remoteContent = '';
      bucket
        .file(signedFileName)
        .createReadStream()
        .on('response', res => {
          assert.strictEqual(
            res.headers['content-type'],
            'application/octet-stream'
          );
        })
        .on('data', buf => (remoteContent += buf.toString()))
        .on('end', () => {
          assert.strictEqual(remoteContent, fileContent);
          resolve();
        })
        .on('error', reject);
    });
  });

  it('should generate a v4 signed policy', async () => {
    const output = execSync(
      `node generateV4SignedPolicy.js ${bucketName} ${signedFileName}`
    );

    assert.include(
      output,
      `<form action='https://storage.googleapis.com/${bucketName}/`
    );
    assert.include(output, `<input name='key' value='${signedFileName}'`);
    assert.include(output, "<input name='x-goog-signature'");
    assert.include(output, "<input name='x-goog-date'");
    assert.include(output, "<input name='x-goog-credential'");
    assert.include(
      output,
      "<input name='x-goog-algorithm' value='GOOG4-RSA-SHA256'"
    );
    assert.include(output, "<input name='policy'");
    assert.include(output, "<input name='x-goog-meta-test' value='data'");
    assert.include(output, "<input type='file' name='file'/>");
  });

  it('should get metadata for a file', () => {
    const output = execSync(
      `node getMetadata.js ${bucketName} ${copiedFileName}`
    );
    assert.match(output, new RegExp(`File: ${copiedFileName}`));
    assert.match(output, new RegExp(`Bucket: ${bucketName}`));
  });

  it('should set metadata for a file', () => {
    // used in sample
    const userMetadata = {
      description: 'file description...',
      modified: '1900-01-01',
    };
    const output = execSync(
      `node fileSetMetadata.js ${bucketName} ${copiedFileName}`
    );

    assert.match(
      output,
      new RegExp(`description: '${userMetadata.description}'`)
    );
    assert.match(output, new RegExp(`modified: '${userMetadata.modified}'`));
  });

  it('should delete a file', async () => {
    const output = execSync(
      `node deleteFile.js ${bucketName} ${copiedFileName}`
    );
    assert.match(
      output,
      new RegExp(`gs://${bucketName}/${copiedFileName} deleted.`)
    );
    const [exists] = await bucket.file(copiedFileName).exists();
    assert.strictEqual(exists, false);
  });

  describe('file archived generations', () => {
    const bucketNameWithVersioning = generateName();
    const fileName = 'file-one.txt';
    const bucketWithVersioning = storage.bucket(bucketNameWithVersioning);

    before(async () => {
      const versionedFile = bucketWithVersioning.file(fileName);
      const filesToCreate = [
        {file: versionedFile, contents: '123'},
        {file: versionedFile, contents: '456'},
      ];
      await storage.createBucket(bucketNameWithVersioning, {
        versioning: {
          enabled: true,
        },
      });
      await Promise.all(filesToCreate.map(file => createFileAsync(file)));
    });

    after(async () => {
      await bucketWithVersioning.deleteFiles({
        versions: true,
        force: true,
      });
      await bucketWithVersioning.delete();
    });

    it('should list file with old versions', async () => {
      const output = execSync(
        `node listFilesWithOldVersions.js ${bucketNameWithVersioning}`
      );
      assert.notEqual(output.indexOf(fileName), output.lastIndexOf(fileName));
    });

    it('should copy file with old versions', async () => {
      console.log('bucket: ', bucketNameWithVersioning);
      const destFileName = 'file-two.txt';
      const [files] = await bucketWithVersioning.getFiles({versions: true});
      const generation = files[0].metadata.generation;
      const output = execSync(
        `node copyOldVersionOfFile.js ${bucketNameWithVersioning} ${fileName} ${bucketNameWithVersioning} ${destFileName} ${generation}`
      );
      assert.match(
        output,
        new RegExp(
          `Generation ${generation} of file ${fileName} in bucket ${bucketNameWithVersioning} was copied to ${destFileName} in bucket ${bucketNameWithVersioning}.`
        )
      );
      const [exists] = await bucketWithVersioning.file(destFileName).exists();
      assert.strictEqual(exists, true);
    });

    it('should delete file with versions', async () => {
      const [files] = await bucketWithVersioning.getFiles({versions: true});
      const generation = files[0].metadata.generation;
      const output = execSync(
        `node deleteOldVersionOfFile.js ${bucketNameWithVersioning} ${fileName} ${generation}`
      );
      assert.match(
        output,
        new RegExp(
          `Generation ${generation} of file ${fileName} was deleted from ${bucketNameWithVersioning}.`
        )
      );
      const [exists] = await bucketWithVersioning
        .file(fileName, {
          generation,
        })
        .exists();
      assert.strictEqual(exists, false);
    });
  });
});

function generateName() {
  return `nodejs-storage-samples-${uuid.v4()}`;
}

function createFileAsync(fileObject) {
  return fileObject.file.save(fileObject.contents);
}
