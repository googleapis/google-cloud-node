// Copyright 2021 Google LLC
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

/**
 * Imports the Google Auth and Google Cloud libraries.
 */
const {
  OAuth2Client,
  GoogleAuth,
  DownscopedClient,
} = require('google-auth-library');
const {Storage} = require('@google-cloud/storage');

/**
 * The following sample demonstrates how to initialize a DownscopedClient using
 * a credential access boundary and a client obtained via ADC. The
 * DownscopedClient is used to create downscoped tokens which can be consumed
 * via the OAuth2Client. A refresh handler is used to obtain new downscoped
 * tokens seamlessly when they expire. Then the oauth2Client is used to define
 * a cloud storage object and call GCS APIs to access specified object and
 * print the contents.
 */
async function main() {
  const bucketName = process.env.BUCKET_NAME;
  const objectName = process.env.OBJECT_NAME;
  // Defines a credential access boundary that grants objectViewer access in
  // the specified bucket.
  const credentialAccessBoundary = {
    accessBoundary: {
      accessBoundaryRules: [
        {
          availableResource: `//storage.googleapis.com/projects/_/buckets/${bucketName}`,
          availablePermissions: ['inRole:roles/storage.objectViewer'],
          availabilityCondition: {
            expression:
              "resource.name.startsWith('projects/_/buckets/" +
              `${bucketName}/objects/${objectName}')`,
          },
        },
      ],
    },
  };

  const googleAuth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  });
  const projectId = await googleAuth.getProjectId();
  // Obtain an authenticated client via ADC.
  const client = await googleAuth.getClient();
  // Use the client to generate a DownscopedClient.
  const cabClient = new DownscopedClient({
    authClient: client,
    credentialAccessBoundary,
  });

  // OAuth 2.0 Client
  const authClient = new OAuth2Client();
  // Define a refreshHandler that will be used to refresh the downscoped token
  // when it expires.
  authClient.refreshHandler = async () => {
    const refreshedAccessToken = await cabClient.getAccessToken();
    return {
      access_token: refreshedAccessToken.token,
      expiry_date: refreshedAccessToken.expirationTime,
    };
  };

  const storageOptions = {
    projectId,
    authClient: new GoogleAuth({authClient}),
  };

  const storage = new Storage(storageOptions);
  const downloadFile = await storage
    .bucket(bucketName)
    .file(objectName)
    .download();
  console.log('Successfully retrieved file. Contents:');
  console.log(downloadFile.toString('utf8'));
}

main().catch(console.error);
