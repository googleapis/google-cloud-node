/**
 * Copyright 2024 Google LLC
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

import * as tls from 'node:tls';
import * as grpc from '@grpc/grpc-js';
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
// @ts-ignore
import {EchoClient} from '../showcase-echo-client/src/v1beta1/echo_client';
import {ShowcaseServer} from '../showcase-server/src/index';

describe('Post-Quantum Cryptography (PQC) Integration', () => {
  let server: ShowcaseServer;
  let caCertPath: string;

  before(async function() {
    this.timeout(180000); // Server startup, download, and build can be slow
    server = new ShowcaseServer();
    
    // Start showcase server with PQC enabled and CA cert output.
    // The server will run in .showcase-server-dir
    await server.start(['run', '--pqc', '--ca-cert-output-file', 'ca.crt']);
    
    caCertPath = path.join(process.cwd(), '.showcase-server-dir', 'ca.crt');
    
    // Wait a bit more to ensure the file is written and server is ready
    let retries = 5;
    while (retries > 0 && !fs.existsSync(caCertPath)) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        retries--;
    }
    
    if (!fs.existsSync(caCertPath)) {
        throw new Error(`CA cert not found at ${caCertPath}`);
    }
  });

  after(async () => {
    if (server) {
      server.stop();
    }
  });

  async function getNegotiatedGroup(host: string, port: number, caPath: string): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      const options = {
        host,
        port,
        ca: fs.readFileSync(caPath),
        servername: 'localhost',
        rejectUnauthorized: false, // Showcase uses self-signed certs
      };

      const socket = tls.connect(options, () => {
        // getNegotiatedGroup() is available in Node.js v22+
        // fall back to getEphemeralKeyInfo() for older versions or other info
        const group = (socket as any).getNegotiatedGroup?.() || (socket as any).getEphemeralKeyInfo?.()?.name;
        socket.end();
        resolve(group);
      });

      socket.on('error', (err) => {
        reject(err);
      });
      
      // Timeout after 10 seconds
      setTimeout(() => reject(new Error('TLS connection timeout')), 10000);
    });
  }

  it('should negotiate X25519MLKEM768 hybrid key exchange group', async () => {
    const group = await getNegotiatedGroup('localhost', 7469, caCertPath);
    console.log(`Negotiated TLS group: ${group}`);
    
    // The target PQC hybrid group is X25519MLKEM768.
    // Node.js v25+ with OpenSSL 3.5+ should support this.
    assert.strictEqual(group, 'X25519MLKEM768', 'The connection must use X25519MLKEM768 for PQC safety');
  });

  it('should successfully make a gRPC call over a PQC-safe connection', async () => {
    const caCert = fs.readFileSync(caCertPath);
    const sslCreds = grpc.credentials.createSsl(caCert);
    
    // Create a client pointing to the showcase server
    const client = new EchoClient({
      servicePath: 'localhost',
      port: 7469,
      sslCreds,
    });

    const request = {
      content: 'Post-Quantum safe gRPC greeting!',
    };

    const [response] = await client.echo(request);
    assert.strictEqual(response.content, request.content);
  });

  it('should successfully make an HTTP/REST call over a PQC-safe connection', async () => {
    // Showcase REST server usually runs on a different port, e.g., 7470 or 1337
    // Let's assume it's 7469 for both or we can check showcase docs.
    // In many setups, showcase runs both on the same port or 7469 (gRPC) and 7470 (REST).
    // The background info doesn't specify, but we'll try 7469 first.
    // Actually, gapic-showcase usually runs REST on 1337 or 7469.
    
    const https = await import('node:https');
    const agent = new https.Agent({
        ca: fs.readFileSync(caCertPath),
        servername: 'localhost',
        rejectUnauthorized: false,
    });

    // Make a simple GET request to the showcase echo service
    // Endpoint: https://localhost:7469/v1beta1/echo:echo (if using same port)
    // We'll use the gRPC port for simplicity if it supports both, or 7470.
    const port = 7469; 
    
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: port,
            path: '/v1beta1/echo:echo',
            method: 'POST',
            agent: agent,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const group = (res.socket as any).getNegotiatedGroup?.() || (res.socket as any).getEphemeralKeyInfo?.()?.name;
                    console.log(`HTTP Negotiated TLS group: ${group}`);
                    assert.strictEqual(group, 'X25519MLKEM768', 'HTTP connection must be PQC-safe');
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(JSON.stringify({content: 'Post-Quantum safe HTTP greeting!'}));
        req.end();
    });
  });
});
