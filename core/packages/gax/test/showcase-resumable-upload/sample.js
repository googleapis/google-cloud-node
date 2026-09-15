// Copyright 2026 Google LLC
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

// Runs a resumable upload against the gapic-showcase ResumableUploadService
// using the generated client in ./fixtures.

'use strict';

const fs = require('fs');
const path = require('path');
const {GoogleAuth, googleAuthLibrary} = require('google-gax');
const {ResumableUploadServiceClient} = require('./fixtures');

async function main() {
  const filePath = process.env.UPLOAD_FILE;
  const port = Number(process.env.SHOWCASE_PORT || 7469);
  if (!filePath) {
    throw new Error('Set UPLOAD_FILE to the path of the file to upload.');
  }
  if (!fs.existsSync(filePath)) {
    throw new Error(`Upload file does not exist: ${filePath}`);
  }

  const size = fs.statSync(filePath).size;
  const client = new ResumableUploadServiceClient({
    servicePath: '127.0.0.1',
    port,
    protocol: 'http',
    auth: new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    }),
  });

  try {
    console.log(
      `Uploading ${filePath} (${size} bytes) through ${client.apiEndpoint}`
    );

    const session = await client.uploadMedia({
      name: path.basename(filePath),
    });

    await session.start({
      uploadSource: client.getResumableSource(filePath),
      chunkSize: 512 * 1024,
      onProgress: status => {
        console.log(`  ${status.bytesUploaded} / ${size} bytes committed`);
      },
    });

    console.log(`Upload session: ${session.uploadUrl}`);
    const response = await session.finished();
    const uploadedSize = Number(response.size);
    if (uploadedSize !== size) {
      throw new Error(
        `Uploaded size mismatch: expected ${size}, got ${response.size}`
      );
    }
    console.log(`Upload complete: ${JSON.stringify(response)}`);
  } finally {
    await client.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
