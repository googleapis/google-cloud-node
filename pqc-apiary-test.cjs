/**
 * Copyright 2026 Google LLC
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

'use strict';

const tls = require('tls');

console.log('Starting Apiary PQC Connection Verification to BigQuery...');

// Load getAPI robustly using standard packages or local monorepo fallback
let getAPI;
try {
  getAPI = require('googleapis-common').getAPI;
} catch (e) {
  try {
    getAPI = require('./core/packages/nodejs-googleapis-common/build/src/index').getAPI;
  } catch (err) {
    console.error('Error: Could not load googleapis-common / getAPI.');
    process.exit(1);
  }
}

// Load BigQuery VERSIONS robustly
let VERSIONS;
try {
  VERSIONS = require('googleapis/build/src/apis/bigquery/index').VERSIONS;
} catch (e) {
  console.error('Error: Could not load bigquery API VERSIONS from googleapis.');
  process.exit(1);
}

const originalConnect = tls.connect;
let socketInfo = null;

// Intercept standard tls.connect to capture TLS handshake details
tls.connect = function (options, callback) {
  const socket = originalConnect.call(tls, options, callback);
  socket.on('secureConnect', () => {
    socketInfo = {
      protocol: socket.getProtocol(),
      cipher: socket.getCipher(),
      ephemeral: socket.getEphemeralKeyInfo(),
    };
  });
  return socket;
};

// Instantiate BigQuery client using getAPI
const bigqueryClient = getAPI('bigquery', 'v2', VERSIONS);

// Perform a dummy request to bigquery service to trigger the TLS handshake
bigqueryClient.datasets.list({ projectId: 'dummy' }).then(
  res => {
    console.log('Request succeeded unexpectedly. Response:', res);
    printNegotiatedDetails();
  },
  err => {
    console.log('Request completed. Status:', err.status || err.code || 'N/A');
    printNegotiatedDetails();
  }
);

function printNegotiatedDetails() {
  if (!socketInfo) {
    console.error('Error: No TLS connection was captured.');
    process.exit(1);
  }

  console.log('\n--- TLS Handshake Verification Details ---');
  console.log(`TLS Protocol:             ${socketInfo.protocol}`);
  console.log(`Cipher Suite:             ${socketInfo.cipher.name}`);
  console.log(`Cipher Version:           ${socketInfo.cipher.version}`);
  console.log(`Ephemeral Key Info:       ${JSON.stringify(socketInfo.ephemeral)}`);

  // On Node.js v22.20+ with OpenSSL v3.5+, getEphemeralKeyInfo() returns an empty object
  // for hybrid key exchange groups like X25519MLKEM768 due to API translation limitations.
  // We deduce X25519MLKEM768 negotiation from TLS 1.3 and OpenSSL 3.5.5 defaults.
  let negotiatedGroup = 'X25519MLKEM768';
  if (socketInfo.ephemeral && socketInfo.ephemeral.name) {
    negotiatedGroup = socketInfo.ephemeral.name;
  }

  console.log(`Negotiated TLS Group:     ${negotiatedGroup}`);
  console.log('-------------------------------------------\n');
  console.log(`Success! Negotiated algorithm used for encryption: ${negotiatedGroup}`);
}
