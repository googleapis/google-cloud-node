// Copyright 2017, Google, Inc.
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

async function main(
  vmName = 'new_virtual_machine' // VM name of your choice
) {
  // [START compute_engine_quickstart]
  // Imports the Google Cloud client library
  const Compute = require('@google-cloud/compute');

  // Creates a client
  const compute = new Compute();

  async function quickstart() {
    // Create a new VM using the latest OS image of your choice.
    const zone = compute.zone('us-central1-c');

    // TODO(developer): choose a name for the VM
    // const vmName = 'vm-name';

    // Start the VM create task
    const [vm, operation] = await zone.createVM(vmName, {os: 'ubuntu'});
    console.log(vm);

    // `operation` lets you check the status of long-running tasks.
    await operation.promise();

    // Complete!
    console.log('Virtual machine created!');
  }
  quickstart();
  // [END compute_engine_quickstart]
}

main(...process.argv.slice(2));
