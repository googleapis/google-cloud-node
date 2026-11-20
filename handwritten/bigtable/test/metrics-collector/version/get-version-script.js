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
  const packageJSON = fs.readFileSync(packagePath, 'utf8');
  const expectedVersion = JSON.parse(packageJSON).version;

  // Verify the working directory contains a distinct fake package.json so this
  // test genuinely guards against reading package.json from process.cwd().
  const cwdPackagePath = path.join(process.cwd(), 'package.json');
  const cwdVersion = JSON.parse(
    fs.readFileSync(cwdPackagePath, 'utf8'),
  ).version;
  if (cwdVersion === expectedVersion) {
    throw new Error(
      `Expected cwd package.json version (${cwdVersion}) to differ from @google-cloud/bigtable version (${expectedVersion})`,
    );
  }

  // Disable the default GCPMetricsHandler so constructing Bigtable does not
  // spawn GCE metadata HTTP probes or a 60s PeriodicExportingMetricReader
  // timer before we attach TestMetricsHandlerKeepName.
  const fakeBigtable = new Bigtable({
    projectId: 'projectId',
    metricsEnabled: false,
  });
  const testMetricsHandler = new TestMetricsHandlerKeepName();
  fakeBigtable._metricsConfigManager = new ClientSideMetricsConfigManager([
    testMetricsHandler,
  ]);

  // Close the client before issuing getRows() so the operation completes
  // hermetically without making real DNS, auth, or network calls.
  await fakeBigtable.close();

  const instance = fakeBigtable.instance('fake-instance-id');
  const table = instance.table('fake-table-id');
  table.maxRetries = 0;
  try {
    await table.getRows();
  } catch (e) {
    // Suppress the error.
    // We just made this call so that the test metrics handler would
    // collect grpc response data.
  }
  if (testMetricsHandler.requestsHandled.length === 0) {
    throw new Error('Expected at least one metrics event to be recorded');
  }
  const expectedClientName = `nodejs-bigtable/${expectedVersion}`;
  for (const request of testMetricsHandler.requestsHandled) {
    if (request.client_name !== expectedClientName) {
      throw new Error(
        `The wrong version is being recorded: expected ${expectedClientName}, got ${request.client_name}`,
      );
    }
  }
}
main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
