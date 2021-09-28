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

function main(account, serviceAccount) {
  // [START cloudchannel_v1_generated_CloudChannelService_UnregisterSubscriber_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the account.
   */
  // const account = 'abc123'
  /**
   *  Required. Service account to unregister from subscriber access to the topic.
   */
  // const serviceAccount = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function unregisterSubscriber() {
    // Construct request
    const request = {
      account,
      serviceAccount,
    };

    // Run request
    const response = await channelClient.unregisterSubscriber(request);
    console.log(response);
  }

  unregisterSubscriber();
  // [END cloudchannel_v1_generated_CloudChannelService_UnregisterSubscriber_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
