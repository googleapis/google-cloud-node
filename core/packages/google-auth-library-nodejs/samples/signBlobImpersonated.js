// Copyright 2023 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {GoogleAuth, Impersonated} = require('google-auth-library');

/**
 * Use the iamcredentials API to sign a blob of data.
 */
async function main() {
  // get source credentials
  const auth = new GoogleAuth();
  const client = await auth.getClient();

  // First impersonate
  const scopes = ['https://www.googleapis.com/auth/cloud-platform'];

  const targetPrincipal = 'target@project.iam.gserviceaccount.com';
  const targetClient = new Impersonated({
    sourceClient: client,
    targetPrincipal: targetPrincipal,
    lifetime: 30,
    delegates: [],
    targetScopes: [scopes],
  });

  const signedData = await targetClient.sign('some data');
  console.log(signedData.signedBlob);

  // or use the client to create a GCS signedURL
  // const { Storage } = require('@google-cloud/storage');

  // const projectId = 'yourProjectID'
  // const bucketName = 'yourBucket'
  // const objectName = 'yourObject'

  // // use the impersonated client to access gcs
  // const storageOptions = {
  //   projectId,
  //   authClient: targetClient,
  // };

  // const storage = new Storage(storageOptions);

  // const signOptions = {
  //   version: 'v4',
  //   action: 'read',
  //   expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  // };

  // const  signedURL = await storage
  //   .bucket(bucketName)
  //   .file(objectName)
  //   .getSignedUrl(signOptions);

  // console.log(signedURL);
}

main().catch(e => {
  console.error(e);
  throw e;
});
