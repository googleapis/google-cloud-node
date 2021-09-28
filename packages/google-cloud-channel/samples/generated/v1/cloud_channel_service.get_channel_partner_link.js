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

function main(name) {
  // [START cloudchannel_v1_generated_CloudChannelService_GetChannelPartnerLink_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the channel partner link to retrieve.
   *  Name uses the format: accounts/{account_id}/channelPartnerLinks/{id}
   *  where {id} is the Cloud Identity ID of the partner.
   */
  // const name = 'abc123'
  /**
   *  Optional. The level of granularity the ChannelPartnerLink will display.
   */
  // const view = ''

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function getChannelPartnerLink() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await channelClient.getChannelPartnerLink(request);
    console.log(response);
  }

  getChannelPartnerLink();
  // [END cloudchannel_v1_generated_CloudChannelService_GetChannelPartnerLink_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
