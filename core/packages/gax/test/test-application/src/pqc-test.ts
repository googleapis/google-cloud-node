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

import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
import * as assert from 'assert';
import {grpc, GoogleAuth, googleAuthLibrary} from 'google-gax';
import {EchoClient} from 'showcase-echo-client';
import {ShowcaseServer} from 'showcase-server';

/**
 * Tests Post Quantum Cryptography (PQC) using the specified CA cert and port.
 * It verifies both gRPC and HTTP/REST clients by inspecting the negotiated TLS group.
 * @param pemPath Path to the generated CA certificate file.
 * @param port The port the TLS showcase server is listening on.
 */
async function testPqc(pemPath: string, port: number) {
  console.log('Running Post Quantum Cryptography (PQC) Integration Tests...');

  // Verify the CA certificate file exists
  let pemExists = false;
  for (let i = 0; i < 15; i++) {
    // We loop up to 15 times (waiting 1 second each time) because gapic-showcase
    // generates the CA certificate asynchronously on startup. This ensures the file
    // is completely written to disk before we attempt to use it for our PQC tests.
    if (fs.existsSync(pemPath)) {
      pemExists = true;
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  if (!pemExists) {
    throw new Error(`CA Certificate file not found at ${pemPath}`);
  }

  const pemBuffer = fs.readFileSync(pemPath);

  // --- 1. gRPC PQC Test ---
  console.log('Testing PQC via gRPC...');
  let negotiatedGroupGrpc: string | undefined;

  // Interceptor to capture the 'x-showcase-tls-group' metadata from the response
  const interceptor = (options: any, nextCall: any) => {
    return new grpc.InterceptingCall(nextCall(options), {
      start: (metadata: any, listener: any, next: any) => {
        next(metadata, {
          onReceiveMetadata: (receivedMetadata: any, nextListener: any) => {
            const group = receivedMetadata.get('x-showcase-tls-group');
            if (group && group.length > 0) {
              negotiatedGroupGrpc = group[0].toString();
            }
            nextListener(receivedMetadata);
          },
        });
      },
    });
  };

  const grpcClientOpts = {
    grpc,
    sslCreds: grpc.credentials.createSsl(pemBuffer),
    servicePath: 'localhost',
    port: port,
  };

  const grpcClient = new EchoClient(grpcClientOpts);

  const [responseGrpc] = await grpcClient.echo(
    { content: 'grpc-pqc-test' },
    {
      otherArgs: {
        options: {
          interceptors: [interceptor],
        },
      },
    }
  );

  assert.strictEqual(responseGrpc.content, 'grpc-pqc-test');
  console.log(`gRPC TLS negotiated group: ${negotiatedGroupGrpc}`);
  assert.ok(negotiatedGroupGrpc, 'Expected negotiated TLS group in gRPC response metadata');
  assert.strictEqual(negotiatedGroupGrpc, 'X25519MLKEM768');

  // --- 2. HTTP/REST Fallback PQC Test ---
  console.log('Testing PQC via HTTP/REST Fallback...');
  let negotiatedGroupRest: string | undefined;

  const auth = new GoogleAuth({
    authClient: new googleAuthLibrary.PassThroughClient(),
  });

  // Override fetch to capture the 'x-showcase-tls-group' header from the response
  // and inject the CA certificate via https.Agent for localhost TLS verification.
  const originalFetch = auth.fetch.bind(auth);
  (auth as any).fetch = async (url: string, opts: any) => {
    if (url.startsWith('https:')) {
      opts.agent = new https.Agent({
        ca: pemBuffer,
        keepAlive: true,
      });
    }
    const res = await originalFetch(url, opts);
    const group = typeof res.headers.get === 'function' ? res.headers.get('x-showcase-tls-group') : (res.headers as any)['x-showcase-tls-group'];
    if (group) {
      negotiatedGroupRest = group;
    }
    return res;
  };

  const restClientOpts = {
    fallback: true,
    protocol: 'https',
    servicePath: 'localhost',
    port: port,
    auth: auth,
  };

  const restClient = new EchoClient(restClientOpts);
  const [responseRest] = await restClient.echo({ content: 'rest-pqc-test' });

  assert.strictEqual(responseRest.content, 'rest-pqc-test');
  console.log(`REST TLS negotiated group: ${negotiatedGroupRest}`);
  assert.ok(negotiatedGroupRest, 'Expected negotiated TLS group in REST response headers');
  assert.strictEqual(negotiatedGroupRest, 'X25519MLKEM768');

  console.log('All PQC Integration Tests Passed Successfully!');
}

/**
 * Spins up a TLS-enabled showcase server and runs the PQC compliance tests.
 * Cleans up the generated certificate file after the tests complete.
 */
export async function runPqcComplianceTests() {
  console.log('Starting PQC test with TLS-enabled showcase server...');
  process.env['SHOWCASE_VERSION'] = '0.41.1';
  const showcaseServerTls = new ShowcaseServer();
  const tlsPort = 7443;
  const caCertOutputFile = 'showcase.pem';
  const pemPath = path.join(process.cwd(), caCertOutputFile);

  try {
    if (fs.existsSync(pemPath)) {
      fs.unlinkSync(pemPath);
    }

    await (showcaseServerTls as any).start({
      tls: true,
      port: `:${tlsPort}`,
      caCertOutputFile: caCertOutputFile,
    });

    await testPqc(pemPath, tlsPort);
  } finally {
    showcaseServerTls.stop();
    if (fs.existsSync(pemPath)) {
      fs.unlinkSync(pemPath);
    }
  }
}
