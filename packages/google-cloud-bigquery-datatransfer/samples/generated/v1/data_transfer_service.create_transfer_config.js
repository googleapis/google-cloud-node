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

function main(parent, transferConfig) {
  // [START bigquerydatatransfer_v1_generated_DataTransferService_CreateTransferConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The BigQuery project id where the transfer configuration should be created.
   *  Must be in the format projects/{project_id}/locations/{location_id} or
   *  projects/{project_id}. If specified location and location of the
   *  destination bigquery dataset do not match - the request will fail.
   */
  // const parent = 'abc123'
  /**
   *  Required. Data transfer configuration to create.
   */
  // const transferConfig = {}
  /**
   *  Optional OAuth2 authorization code to use with this transfer configuration.
   *  This is required if new credentials are needed, as indicated by
   *  `CheckValidCreds`.
   *  In order to obtain authorization_code, please make a
   *  request to
   *  https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
   *  * client_id should be OAuth client_id of BigQuery DTS API for the given
   *    data source returned by ListDataSources method.
   *  * data_source_scopes are the scopes returned by ListDataSources method.
   *  * redirect_uri is an optional parameter. If not specified, then
   *    authorization code is posted to the opener of authorization flow window.
   *    Otherwise it will be sent to the redirect uri. A special value of
   *    urn:ietf:wg:oauth:2.0:oob means that authorization code should be
   *    returned in the title bar of the browser, with the page text prompting
   *    the user to copy the code and paste it in the application.
   */
  // const authorizationCode = 'abc123'
  /**
   *  Optional version info. If users want to find a very recent access token,
   *  that is, immediately after approving access, users have to set the
   *  version_info claim in the token request. To obtain the version_info, users
   *  must use the "none+gsession" response type. which be return a
   *  version_info back in the authorization response which be be put in a JWT
   *  claim in the token request.
   */
  // const versionInfo = 'abc123'
  /**
   *  Optional service account name. If this field is set, transfer config will
   *  be created with this service account credentials. It requires that
   *  requesting user calling this API has permissions to act as this service
   *  account.
   */
  // const serviceAccountName = 'abc123'

  // Imports the Datatransfer library
  const {DataTransferServiceClient} =
    require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function callCreateTransferConfig() {
    // Construct request
    const request = {
      parent,
      transferConfig,
    };

    // Run request
    const response = await datatransferClient.createTransferConfig(request);
    console.log(response);
  }

  callCreateTransferConfig();
  // [END bigquerydatatransfer_v1_generated_DataTransferService_CreateTransferConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
