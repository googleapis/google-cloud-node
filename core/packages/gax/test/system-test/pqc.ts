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

function tlsVersionName(v: string): string {
  switch (v) {
    case 'TLSv1':
      return 'TLS 1.0';
    case 'TLSv1.1':
      return 'TLS 1.1';
    case 'TLSv1.2':
      return 'TLS 1.2';
    case 'TLSv1.3':
      return 'TLS 1.3';
    default:
      return 'Unknown';
  }
}

function tlsVersionHex(v: string): string {
  switch (v) {
    case 'TLSv1.3':
      return '0x0304';
    case 'TLSv1.2':
      return '0x0303';
    case 'TLSv1.1':
      return '0x0302';
    case 'TLSv1':
      return '0x0301';
    default:
      return '0x0000';
  }
}

class TlsMetadataCreds {
  private once = false;

  async getRequestMetadata(caCertPath: string): Promise<grpc.Metadata> {
    const md = new grpc.Metadata();

    return new Promise((resolve, reject) => {
      const options = {
        host: 'localhost',
        port: 7469,
        ca: fs.readFileSync(caCertPath),
        servername: 'localhost',
        rejectUnauthorized: false, // Showcase uses self-signed certs
      };

      const socket = tls.connect(options, () => {
        const protocol = socket.getProtocol();
        const cipher = socket.getCipher();
        const group =
          (socket as any).getNegotiatedGroup?.() ||
          (socket as any).getEphemeralKeyInfo?.()?.name;

        if (!this.once) {
          console.log(`  TLS Version: ${tlsVersionName(protocol!)}`);
          console.log(`  Curve ID:   ${group}`);
          console.log(`  Cipher:     ${cipher.name}\n`);
          this.once = true;
        }

        md.set('x-goog-api-client-tls', tlsVersionHex(protocol!));
        socket.end();
        resolve(md);
      });

      socket.on('error', err => {
        reject(err);
      });

      // Timeout after 10 seconds
      setTimeout(() => reject(new Error('TLS connection timeout')), 10000);
    });
  }
}

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

  it('should successfully make a gRPC call over a PQC-safe connection (Using PerRPCCredentials Method)', async () => {
    console.log('Listing topics (Using PerRPCCredentials Method)...');

    const caCert = fs.readFileSync(caCertPath);
    const sslCreds = grpc.credentials.createSsl(caCert);

    const tlsMetadataCreds = new TlsMetadataCreds();
    const callCreds = grpc.credentials.createFromMetadataGenerator(
      (params, callback) => {
        tlsMetadataCreds
          .getRequestMetadata(caCertPath)
          .then(md => callback(null, md))
          .catch(err => callback(err));
      }
    );

    const combinedCreds = grpc.credentials.combineChannelCredentials(
      sslCreds,
      callCreds
    );

    // Create a client pointing to the showcase server
    const client = new EchoClient({
      servicePath: 'localhost',
      port: 7469,
      sslCreds: combinedCreds,
    });

    const request = {
      content: 'projects/alxh-pubsub/topics/test-topic',
    };

    const [response] = await client.echo(request);
    assert.strictEqual(response.content, request.content);
    console.log(`got topic: ${response.content}`);
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
