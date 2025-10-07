/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {assert} = require('chai');
const {describe, it, before, after} = require('mocha');
const cp = require('child_process');
const http = require('http');
const {promisify} = require('util');

const exec = promisify(cp.exec);

function handleRequest(req, res) {
  res.setHeader('Connection', 'close'); // Important to prevent hanging.
  res.setHeader('Metadata-Flavor', 'Google');

  if (req.url.includes('/instance')) {
    res.end(JSON.stringify({id: 'mock-instance-id'}));
  } else if (req.url.includes('/project')) {
    res.end(JSON.stringify({projectId: 'mock-project-id'}));
  } else {
    // Handles the isAvailable() check which hits the root URL.
    res.end('true');
  }
}

describe('gcp-metadata samples', () => {
  let server;
  let port;

  before(async () => {
    // Start a local server to mock the metadata service.
    server = http.createServer(handleRequest);
    await promisify(server.listen.bind(server))(0);
    port = server.address().port;
  });

  after(async () => {
    await promisify(server.close.bind(server))();
  });

  it('should run the quickstart', async () => {
    // Use process.execPath to ensure the same node executable is used to run the sample.
    // This is more robust for CI/CD environments.
    const command = `${process.execPath} quickstart.js`;
    const {stdout} = await exec(command, {env: {GCE_METADATA_HOST: `localhost:${port}`}});
    assert.match(stdout, /Is available: true/);
  });
});
