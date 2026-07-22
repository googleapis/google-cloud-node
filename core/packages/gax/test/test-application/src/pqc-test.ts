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

import * as os from 'os';
import * as tls from 'tls';

/**
 * Tests Post Quantum Cryptography (PQC) using the specified CA cert and port.
 * It verifies both gRPC and HTTP/REST clients by inspecting the negotiated TLS group.
 * @param pemBuffer The CA certificate buffer.
 * @param port The port the TLS showcase server is listening on.
 */
async function testPqc(pemBuffer: Buffer, port: number) {

  const originalTlsConnect = tls.connect;
  let grpcSocket: tls.TLSSocket | undefined;
  let restSocket: tls.TLSSocket | undefined;

  let currentTestType: 'grpc' | 'rest' | 'none' = 'none';

  (tls as any).connect = function (...args: any[]) {
    const socket = originalTlsConnect.apply(this, args as any);
    socket.on('secureConnect', () => {
      // Verify the socket is connecting to the expected test server port
      // to ensure this mock doesn't accidentally affect other tests.
      assert.strictEqual(socket.remotePort, port);
      if (currentTestType === 'grpc') {
        grpcSocket = socket as tls.TLSSocket;
      } else if (currentTestType === 'rest') {
        restSocket = socket as tls.TLSSocket;
      }
    });
    return socket;
  };

  try {
    // --- 1. gRPC PQC Test ---
    currentTestType = 'grpc';
    let negotiatedGroupGrpc: string | undefined;
    let clientSupportedGroupsGrpc: string | undefined;

    const interceptor = (options: any, nextCall: any) => {
      return new grpc.InterceptingCall(nextCall(options), {
        start: (metadata: any, listener: any, next: any) => {
          next(metadata, {
            onReceiveMetadata: (receivedMetadata: any, nextListener: any) => {
              const group = receivedMetadata.get('x-showcase-tls-group');
              if (group && group.length > 0) {
                negotiatedGroupGrpc = group[0].toString();
              }
              const supportedGroups = receivedMetadata.get('x-showcase-tls-client-supported-groups');
              if (supportedGroups && supportedGroups.length > 0) {
                clientSupportedGroupsGrpc = supportedGroups[0].toString();
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
    assert.ok(grpcSocket, 'Expected to intercept gRPC TLS socket');
    assert.strictEqual(grpcSocket.getProtocol(), 'TLSv1.3');
    assert.ok(negotiatedGroupGrpc, 'Expected negotiated TLS group in gRPC response metadata');
    assert.strictEqual(negotiatedGroupGrpc, 'X25519MLKEM768');
    assert.ok(clientSupportedGroupsGrpc, 'Expected client supported groups in gRPC response metadata');
    assert.ok(clientSupportedGroupsGrpc.includes('X25519MLKEM768'), 'Expected client to include X25519MLKEM768 in supported groups');

    // --- 2. HTTP/REST Fallback PQC Test ---
    currentTestType = 'rest';
    let negotiatedGroupRest: string | undefined;
    let clientSupportedGroupsRest: string | undefined;

    const auth = new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    });

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
      const supportedGroups = typeof res.headers.get === 'function' ? res.headers.get('x-showcase-tls-client-supported-groups') : (res.headers as any)['x-showcase-tls-client-supported-groups'];
      if (supportedGroups) {
        clientSupportedGroupsRest = supportedGroups;
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
    assert.ok(restSocket, 'Expected to intercept REST TLS socket');
    assert.strictEqual(restSocket.getProtocol(), 'TLSv1.3');
    assert.ok(negotiatedGroupRest, 'Expected negotiated TLS group in REST response headers');
    assert.strictEqual(negotiatedGroupRest, 'X25519MLKEM768');
    assert.ok(clientSupportedGroupsRest, 'Expected client supported groups in REST response headers');
    assert.ok(clientSupportedGroupsRest.includes('X25519MLKEM768'), 'Expected client to include X25519MLKEM768 in supported groups');
  } finally {
    // Restore the original tls.connect
    (tls as any).connect = originalTlsConnect;
  }
}

/**
 * Spins up a TLS-enabled showcase server and runs the PQC compliance tests.
 * Cleans up the generated certificate file after the tests complete.
 */
export async function runPqcComplianceTests() {
  const [major, minor] = process.version.replace('v', '').split('.').map(Number);
  if (major < 22 || (major === 22 && minor < 20)) {
    console.log(
      `skipping PQC compliance tests because node version is ${process.version}`
    );
    return;
  }

  const originalShowcaseVersion = process.env['SHOWCASE_VERSION'];
  process.env['SHOWCASE_VERSION'] = '0.41.1';
  const showcaseServerTls = new ShowcaseServer();
  const tlsPort = 7443;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pqc-test-'));
  const caCertOutputFile = path.join(tempDir, 'showcase.pem');
  const pemPath = caCertOutputFile;

  try {
    if (fs.existsSync(pemPath)) {
      fs.unlinkSync(pemPath);
    }

    const pemBuffer = await showcaseServerTls.start({
      tls: true,
      port: `:${tlsPort}`,
      caCertOutputFile: caCertOutputFile,
    });

    if (!pemBuffer) {
      throw new Error('Expected showcase server to return CA certificate buffer');
    }

    await testPqc(pemBuffer, tlsPort);
  } finally {
    showcaseServerTls.stop();
    if (originalShowcaseVersion === undefined) {
      delete process.env['SHOWCASE_VERSION'];
    } else {
      process.env['SHOWCASE_VERSION'] = originalShowcaseVersion;
    }
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, {recursive: true, force: true});
    }
  }
}
