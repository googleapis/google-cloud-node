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


const {assert} = require('chai');
const {describe, it, before} = require('mocha');
const cp = require('child_process');
// Imports the Datacatalog library
const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;


// Instantiates a client
const datacatalogClient = new DataCatalogClient();


const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});


describe('Quickstart', async () => {
 let projectId;


 before(async () => {
   projectId = await datacatalogClient.getProjectId();
 });


 it('quickstart should attach tag to BigQuery table', async () => {
   const output = execSync(
     `node quickstart projects/${projectId}/locations/us-central1`,
   );
   assert(output !== null);
 });
});
