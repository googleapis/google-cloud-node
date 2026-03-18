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


'use strict';
// Service has limited quota, adding max results to keep in the limit.
const MAX_RESULTS = 10;


async function main(parent) {
 // [START data_catalog_quickstart]
 /**
  * This snippet has been automatically generated and should be regarded as a code template only.
  * It will require modifications to work.
  * It may require correct/in-range values for request initialization.
  * TODO(developer): Uncomment these variables before running the sample.
  */
 /**
  *  Required. The name of the location that contains the entry groups to list.
  *  Can be provided as a URL.
  */
 // const parent = 'abc123'
 /**
  *  Optional. The maximum number of items to return.
  *  Default is 10. Maximum limit is 1000.
  *  Throws an invalid argument if `page_size` is greater than 1000.
  */
 // const pageSize = 1234
 /**
  *  Optional. Pagination token that specifies the next page to return.
  *  If empty, returns the first page.
  */
 // const pageToken = 'abc123'


 // Imports the Datacatalog library
 const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;


 // Instantiates a client
 const datacatalogClient = new DataCatalogClient();


 async function callListEntryGroups() {
   // Construct request
   const request = {
     parent,
   };


   // Run request
   const result = await datacatalogClient.listEntryGroups(request, {
     autopaginate: false,
     maxResults: MAX_RESULTS,
   });


   console.log(result);
 }


 callListEntryGroups();
 // [END data_catalog_quickstart]
}
main(...process.argv.slice(2));
