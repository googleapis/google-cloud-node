// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');
const fs = require('fs');
const {
  ClientSideMetricsConfigManager,
} = require('../../../build/src/client-side-metrics/metrics-config-manager.js'); // eslint-disable-line
const {Bigtable} = require('../../../build/src'); // eslint-disable-line

async function main() {
  /**
   * A test implementation of the IMetricsHandler interface.  Used for testing purposes.
   * It logs the metrics and attributes received by the onOperationComplete and onAttemptComplete methods.
   * Doesn't replace the name of the client like the other testing class.
   */
  class TestMetricsHandlerKeepName {
    constructor() {
      this.messages = {value: ''};
      this.projectId = 'projectId';
      this.requestsHandled = [];
    }
    /**
     * Logs the metrics and attributes received for an operation completion.
     * @param {OnOperationCompleteData} data Metrics related to the completed operation.
     */
    onOperationComplete(data) {
      const dataWithProject = Object.assign({projectId: this.projectId}, data);
      this.requestsHandled.push(dataWithProject);
      this.messages.value += 'Recording parameters for onOperationComplete:\n';
      this.messages.value += `${JSON.stringify(dataWithProject)}\n`;
    }

    /**
     * Logs the metrics and attributes received for an attempt completion.
     * @param {OnOperationCompleteData} data Metrics related to the completed attempt.
     */
    onAttemptComplete(data) {
      const dataWithProject = Object.assign({projectId: this.projectId}, data);
      this.requestsHandled.push(dataWithProject);
      this.messages.value += 'Recording parameters for onAttemptComplete:\n';
      this.messages.value += `${JSON.stringify(dataWithProject)}\n`;
    }
  }

  const packagePath = path.join(__dirname, '../../../package.json');

  // Read the file using the absolute path
  const packageJSON = fs.readFileSync(packagePath);
  const expectedVersion = JSON.parse(packageJSON.toString()).version;

  const fakeBigtable = new Bigtable();
  const testMetricsHandler = new TestMetricsHandlerKeepName();
  fakeBigtable._metricsConfigManager = new ClientSideMetricsConfigManager([
    testMetricsHandler,
  ]);

  const instance = fakeBigtable.instance('fake-instance-id');
  const table = instance.table('fake-table-id');
  try {
    await table.getRows();
  } catch (e) {
    // Suppress the error.
    // We just made this call so that the test metrics handler would
    // collect grpc response data.
  }
  if (
    testMetricsHandler.requestsHandled[0].client_name !==
    `nodejs-bigtable/${expectedVersion}`
  ) {
    throw Error('The wrong version is being recorded');
  }
}
main();
