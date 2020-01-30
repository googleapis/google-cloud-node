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
 * This application demonstrates how to perform basic operations on bucket and
 * file Access Control Lists with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(
  bucketName = 'my-bucket',
  filename = 'test.txt',
  userEmail = 'jdobry@google.com'
) {
  // [START storage_remove_file_owner]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Name of file to access, e.g. file.txt';
  // const userEmail = 'Email of user to remove, e.g. developer@company.com';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeFileOwner() {
    // Removes the user from the access control list of the file. You can use
    // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
    // deleteAllAuthenticatedUsers() to remove access for different types of entities.
    await storage
      .bucket(bucketName)
      .file(filename)
      .acl.owners.deleteUser(userEmail);

    console.log(`Removed user ${userEmail} from file ${filename}.`);
  }

  removeFileOwner().catch(console.error);
  // [END storage_remove_file_owner]
}

main(...process.argv.slice(2));
