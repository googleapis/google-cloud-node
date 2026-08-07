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

// Hermetic end-to-end test for the resumable upload protocol: a real HTTP
// server (no credentials required) exercises the full state machine,
// including a simulated crash and cross-helper session resume.

/* eslint-disable @typescript-eslint/no-explicit-any */

import assert from 'assert';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as http from 'http';
import {AddressInfo} from 'net';
import * as os from 'os';
import * as path from 'path';
import * as protobuf from 'protobufjs';
import {Readable} from 'stream';
import {after, before, describe, it} from 'mocha';

import * as gax from '../../src';
import {ResumableUploadContext} from '../../src/resumableUpload';

const GRANULARITY = 1024 * 1024;
const CHUNK_SIZE = 2 * 1024 * 1024;

const PROTO = `
syntax = "proto3";
package test.v1;
message UploadRequest { string name = 1; }
message UploadResponse { string status = 1; }
service UploadService {
  rpc CreateUpload(UploadRequest) returns (UploadResponse);
}
`;

class MockResumableUploadServer {
  server: http.Server;
  port = 0;
  sessionUrl = '';
  received = Buffer.alloc(0);
  commands: Array<{command: string; offset: number; bodyLength: number}> = [];

  constructor() {
    this.server = http.createServer((req, res) => {
      void this.handle(req, res);
    });
  }

  private async handle(req: http.IncomingMessage, res: http.ServerResponse) {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk as Buffer);
    }
    const body = Buffer.concat(chunks);
    const command = String(req.headers['x-goog-upload-command'] ?? '');
    const offset = parseInt(
      String(req.headers['x-goog-upload-offset'] ?? '-1'),
      10,
    );
    this.commands.push({command, offset, bodyLength: body.length});

    const send = (
      status: number,
      headers: {[name: string]: string},
      responseBody = '',
    ) => {
      res.writeHead(status, headers);
      res.end(responseBody);
    };
    const active = (extra: {[name: string]: string} = {}) => ({
      'x-goog-upload-status': 'active',
      'x-goog-upload-size-received': String(this.received.length),
      ...extra,
    });

    if (req.url === '/resumable/upload' && command === 'start') {
      JSON.parse(body.toString());
      return send(200, {
        'x-goog-upload-status': 'active',
        'x-goog-upload-url': this.sessionUrl,
        'x-goog-upload-chunk-granularity': String(GRANULARITY),
      });
    }
    if (req.url !== '/upload/session-1') {
      return send(404, active(), 'not found');
    }
    if (command === 'query') {
      return send(200, active());
    }
    if (command === 'cancel') {
      return send(200, {'x-goog-upload-status': 'cancelled'});
    }
    if (command === 'upload' || command === 'upload, finalize') {
      if (offset !== this.received.length) {
        return send(416, active(), 'offset mismatch');
      }
      this.received = Buffer.concat([this.received, body]);
      if (command === 'upload, finalize') {
        return send(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({status: 'done'}),
        );
      }
      return send(200, active());
    }
    if (command === 'finalize') {
      if (offset !== this.received.length) {
        return send(416, active(), 'offset mismatch');
      }
      return send(
        200,
        {'x-goog-upload-status': 'final'},
        JSON.stringify({status: 'done'}),
      );
    }
    return send(400, active(), `unknown command ${command}`);
  }

  listen(): Promise<void> {
    return new Promise(resolve => {
      this.server.listen(0, '127.0.0.1', () => {
        this.port = (this.server.address() as AddressInfo).port;
        this.sessionUrl = `http://127.0.0.1:${this.port}/upload/session-1`;
        resolve();
      });
    });
  }

  close(): Promise<void> {
    return new Promise(resolve => this.server.close(() => resolve()));
  }
}

class CrashingStream extends Readable {
  private data: Buffer;
  private pos = 0;
  private limit: number;

  constructor(data: Buffer, limit: number) {
    super();
    this.data = data;
    this.limit = limit;
  }

  _read(): void {
    if (this.pos >= this.limit) {
      this.destroy(new Error('simulated process crash'));
      return;
    }
    const end = Math.min(this.pos + 65536, this.limit);
    const chunk = this.data.subarray(this.pos, end);
    this.pos = end;
    this.push(chunk);
  }
}

// A minimal authenticated client that forwards requests to the local mock
// server through the real fetch implementation.
const fakeAuth = {
  async request(opts: {
    url?: string;
    method?: string;
    headers?: {[name: string]: string};
    body?: string | Buffer;
    signal?: AbortSignal;
  }) {
    return fetch(opts.url!, {
      method: opts.method,
      headers: opts.headers,
      body: opts.body,
      signal: opts.signal,
    });
  },
};

describe('resumable upload (system)', () => {
  let server: MockResumableUploadServer;
  let context: ResumableUploadContext;
  let data: Buffer;
  let file: string;

  before(async () => {
    server = new MockResumableUploadServer();
    await server.listen();
    const root = protobuf.parse(PROTO).root;
    const service = root.lookupService('test.v1.UploadService');
    service.resolveAll();
    context = {
      auth: fakeAuth as any,
      servicePath: `127.0.0.1:${server.port}`,
      servicePort: server.port,
      protocol: 'http',
      rpc: service.methods.CreateUpload,
      request: {name: 'test'},
      uploadPrefix: '/resumable/upload',
    };
    data = crypto.randomBytes(Math.floor(5.5 * GRANULARITY));
    file = path.join(os.tmpdir(), 'gax-resumable-upload-e2e.bin');
    fs.writeFileSync(file, data);
  });

  after(async () => {
    try {
      fs.unlinkSync(file);
    } catch {
      // ignore
    }
    await server.close();
  });

  it('uploads a payload over HTTP and completes the session', async () => {
    const helper = new gax.ResumableUpload(context);
    const progress: Array<{bytesUploaded: number}> = [];
    await helper.start({
      uploadStream: fs.createReadStream(file),
      chunkSize: CHUNK_SIZE,
      onProgress: status => progress.push(status),
    });
    const response = (await helper.finished()) as {status: string};

    assert.strictEqual(response.status, 'done');
    assert.ok(server.received.equals(data));
    assert.deepStrictEqual(
      server.commands.map(c => c.command),
      ['start', 'upload', 'upload', 'upload, finalize'],
    );
    assert.deepStrictEqual(
      server.commands.slice(1).map(c => c.offset),
      [0, 2 * GRANULARITY, 4 * GRANULARITY],
    );
    assert.ok(progress.length >= 2);
  });

  it('recovers from a simulated crash using a saved session URL', async () => {
    server.received = Buffer.alloc(0);
    server.commands = [];

    const crashed = new gax.ResumableUpload(context);
    await crashed.start({
      uploadStream: new CrashingStream(data, 2 * CHUNK_SIZE),
      chunkSize: CHUNK_SIZE,
    });
    await assert.rejects(crashed.finished(), /simulated process crash/);
    const committed = server.received.length;
    assert.strictEqual(committed, 2 * CHUNK_SIZE);
    const sessionUrl = crashed.uploadUrl!;

    const resumed = new gax.ResumableUpload(context);
    const resumedProgress: Array<{bytesUploaded: number}> = [];
    await resumed.start({
      uploadStream: fs.createReadStream(file),
      resumeUrl: sessionUrl,
      chunkSize: CHUNK_SIZE,
      onProgress: status => resumedProgress.push(status),
    });
    const response = (await resumed.finished()) as {status: string};

    assert.strictEqual(response.status, 'done');
    assert.ok(server.received.equals(data));
    assert.strictEqual(resumedProgress[0].bytesUploaded, committed);
  });
});
