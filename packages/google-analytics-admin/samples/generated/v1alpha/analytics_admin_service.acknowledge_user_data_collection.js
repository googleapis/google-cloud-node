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

function main(property, acknowledgement) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_AcknowledgeUserDataCollection_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The property for which to acknowledge user data collection.
   */
  // const property = 'abc123'
  /**
   *  Required. An acknowledgement that the caller of this method understands the terms
   *  of user data collection.
   *  This field must contain the exact value:
   *  "I acknowledge that I have the necessary privacy disclosures and rights
   *  from my end users for the collection and processing of their data,
   *  including the association of such data with the visitation information
   *  Google Analytics collects from my site and/or app property."
   */
  // const acknowledgement = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callAcknowledgeUserDataCollection() {
    // Construct request
    const request = {
      property,
      acknowledgement,
    };

    // Run request
    const response = await adminClient.acknowledgeUserDataCollection(request);
    console.log(response);
  }

  callAcknowledgeUserDataCollection();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_AcknowledgeUserDataCollection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
