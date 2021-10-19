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
  // [START servicedirectory_v1_generated_LookupService_ResolveService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service to resolve.
   */
  // const name = 'abc123'
  /**
   *  Optional. The maximum number of endpoints to return. Defaults to 25.
   *  Maximum is 100. If a value less than one is specified, the Default is used.
   *  If a value greater than the Maximum is specified, the Maximum is used.
   */
  // const maxEndpoints = 1234
  /**
   *  Optional. The filter applied to the endpoints of the resolved service.
   *  General filter string syntax:
   *  <field> <operator> <value> (<logical connector>)
   *  <field> can be "name" or "metadata.<key>" for map field.
   *  <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS and is
   *  roughly the same as "=".
   *  <value> must be the same data type as the field.
   *  <logical connector> can be "AND, OR, NOT".
   *  Examples of valid filters:
   *  * "metadata.owner" returns Endpoints that have a label with the
   *    key "owner", this is the same as "metadata:owner"
   *  * "metadata.protocol=gRPC" returns Endpoints that have key/value
   *    "protocol=gRPC"
   *  * "metadata.owner!=sd AND metadata.foo=bar" returns
   *    Endpoints that have "owner" field in metadata with a value that is not
   *    "sd" AND have the key/value foo=bar.
   */
  // const endpointFilter = 'abc123'

  // Imports the Servicedirectory library
  const {LookupServiceClient} = require('@google-cloud/service-directory').v1;

  // Instantiates a client
  const servicedirectoryClient = new LookupServiceClient();

  async function resolveService() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await servicedirectoryClient.resolveService(request);
    console.log(response);
  }

  resolveService();
  // [END servicedirectory_v1_generated_LookupService_ResolveService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
