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

/* eslint-disable @typescript-eslint/no-explicit-any */

import assert from 'assert';
import {afterEach, describe, it} from 'mocha';
import * as protobuf from 'protobufjs';
import {Readable} from 'stream';
import * as sinon from 'sinon';

import * as gax from '../../src';
import {createApiCall} from '../../src/createApiCall';
import {ResumableUploadContext} from '../../src/resumableUpload';
import {Status} from '../../src/status';

const GRANULARITY = 1024 * 1024;
const SESSION_URL = 'https://example.com/upload/session-123';

const PROTO = `
syntax = "proto3";
package test.v1;
message UploadRequest { string name = 1; }
message UploadResponse { string name = 1; }
service UploadService {
  rpc CreateUpload(UploadRequest) returns (UploadResponse);
}
`;

interface MockRequestOptions {
  url?: string;
  method?: string;
  headers?: {[name: string]: string};
  body?: string | Buffer;
  signal?: AbortSignal;
  responseType?: string;
  timeout?: number;
  validateStatus?: (status: number) => boolean;
}

interface MockResponse {
  status: number;
  headers: {get(name: string): string | null};
  arrayBuffer(): Promise<ArrayBuffer>;
}

function resumableUploadResponse(
  status: number,
  headers: {[name: string]: string},
  body = '',
): MockResponse {
  const normalized: {[name: string]: string} = {};
  for (const [name, value] of Object.entries(headers)) {
    normalized[name.toLowerCase()] = value;
  }
  return {
    status,
    headers: {
      get(name: string): string | null {
        return normalized[name.toLowerCase()] ?? null;
      },
    },
    async arrayBuffer(): Promise<ArrayBuffer> {
      return Buffer.from(body) as unknown as ArrayBuffer;
    },
  };
}

type RequestHandler = (
  opts: MockRequestOptions,
) => MockResponse | Promise<MockResponse>;

function mockAuth(handler: RequestHandler) {
  return {
    request: sinon.stub().callsFake(async (opts: MockRequestOptions) => {
      return handler(opts);
    }),
  };
}

function commandOf(opts: MockRequestOptions): string {
  return opts.headers?.['x-goog-upload-command'] ?? '';
}

function offsetOf(opts: MockRequestOptions): number {
  const value = opts.headers?.['x-goog-upload-offset'];
  return value === undefined ? -1 : parseInt(value, 10);
}

function bodyLength(opts: MockRequestOptions): number {
  return opts.body === undefined ? 0 : opts.body.length;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const root = protobuf.parse(PROTO).root;
const uploadService = root.lookupService('test.v1.UploadService');
uploadService.resolveAll();
const rpc = uploadService.methods.CreateUpload;

function buildContext(
  auth: any,
  overrides: Partial<ResumableUploadContext> = {},
): ResumableUploadContext {
  return {
    auth,
    servicePath: 'example.com',
    servicePort: 443,
    protocol: 'https',
    rpc,
    request: {name: 'test'},
    uploadPrefix: '/resumable/upload',
    ...overrides,
  };
}

describe('resumable upload', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('uploads a payload in chunks and resolves with the final response', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
          'x-goog-upload-chunk-granularity': String(GRANULARITY),
        });
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const progress: Array<{bytesUploaded: number; uploadUrl: string}> = [];
    const stream = Readable.from([
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY),
    ]);

    await helper.start({
      uploadStream: stream,
      chunkSize: GRANULARITY,
      onProgress: status => progress.push(status),
    });
    const response = await helper.finished();

    assert.deepStrictEqual(response, {name: 'complete'});
    assert.strictEqual(helper.uploadUrl, SESSION_URL);
    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['start', 'upload', 'upload', 'upload', 'finalize'],
    );
    assert.deepStrictEqual(
      requests.slice(1).map(r => offsetOf(r)),
      [0, GRANULARITY, 2 * GRANULARITY, 3 * GRANULARITY],
    );
    assert.deepStrictEqual(
      requests.slice(1, 4).map(r => bodyLength(r)),
      [GRANULARITY, GRANULARITY, GRANULARITY],
    );
    assert.strictEqual(requests[0].body, JSON.stringify({name: 'test'}));
    assert.strictEqual(requests[0].headers!['x-goog-upload-offset'], undefined);
    assert.deepStrictEqual(progress, [
      {bytesUploaded: GRANULARITY, uploadUrl: SESSION_URL},
      {bytesUploaded: 2 * GRANULARITY, uploadUrl: SESSION_URL},
      {bytesUploaded: 3 * GRANULARITY, uploadUrl: SESSION_URL},
    ]);
  });

  it('combines the final partial chunk with the finalize command', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const payload = Buffer.concat([
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY / 2),
    ]);
    await helper.start({
      uploadStream: Readable.from([payload]),
      chunkSize: GRANULARITY,
    });
    await helper.finished();

    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['start', 'upload', 'upload, finalize'],
    );
    assert.deepStrictEqual(
      requests.slice(1).map(r => offsetOf(r)),
      [0, GRANULARITY],
    );
    assert.strictEqual(bodyLength(requests[2]), GRANULARITY / 2);
  });

  it('parses host and port from the service path', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(
      buildContext(auth, {servicePath: 'example.com:8443'}),
    );
    await helper.start({
      uploadStream: Readable.from([]),
      chunkSize: GRANULARITY,
    });
    await helper.finished();

    assert.strictEqual(
      requests[0].url,
      'https://example.com:8443/resumable/upload',
    );
  });

  it('rounds the chunk size down to the server granularity', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
          'x-goog-upload-chunk-granularity': String(GRANULARITY),
        });
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const payload = Buffer.concat([
      Buffer.alloc(3 * GRANULARITY),
      Buffer.alloc(1),
    ]);
    await helper.start({
      uploadStream: Readable.from([payload]),
      chunkSize: 3.5 * GRANULARITY,
    });
    await helper.finished();

    assert.deepStrictEqual(
      requests.slice(1).map(r => bodyLength(r)),
      [3 * GRANULARITY, 1],
    );
  });

  it('retries transient (Category 1) errors with backoff', async () => {
    let uploadAttempts = 0;
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'upload') {
        uploadAttempts += 1;
        if (uploadAttempts === 1) {
          return resumableUploadResponse(503, {'x-goog-upload-status': 'active'});
        }
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(GRANULARITY)]),
      chunkSize: GRANULARITY,
    });
    await helper.finished();

    assert.strictEqual(uploadAttempts, 2);
    const uploads = requests.filter(r => commandOf(r) === 'upload');
    assert.ok(
      Buffer.from(uploads[0].body as Buffer).equals(
        Buffer.from(uploads[1].body as Buffer),
      ),
    );
  });

  it('does not retry transient errors when retries are disabled', async () => {
    let uploadAttempts = 0;
    const auth = mockAuth(async opts => {
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'upload') {
        uploadAttempts += 1;
        return resumableUploadResponse(503, {'x-goog-upload-status': 'active'});
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(GRANULARITY)]),
      chunkSize: GRANULARITY,
      retry: null,
    });
    await assert.rejects(
      helper.finished(),
      (err: gax.GoogleError) => err.code === Status.DEADLINE_EXCEEDED,
    );
    assert.strictEqual(uploadAttempts, 1);
  });

  it('recovers from a 416 state mismatch by querying the offset', async () => {
    const requests: MockRequestOptions[] = [];
    let firstUpload = true;
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': '0',
        });
      }
      if (command === 'upload') {
        if (firstUpload) {
          firstUpload = false;
          return resumableUploadResponse(416, {'x-goog-upload-status': 'active'});
        }
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(GRANULARITY)]),
      chunkSize: GRANULARITY,
    });
    await helper.finished();

    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['start', 'upload', 'query', 'upload', 'finalize'],
    );
    const uploads = requests.filter(r => commandOf(r) === 'upload');
    assert.strictEqual(uploads.length, 2);
    assert.ok(
      Buffer.from(uploads[0].body as Buffer).equals(
        Buffer.from(uploads[1].body as Buffer),
      ),
    );
  });

  it('continues from the committed offset when the chunk was saved', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': String(GRANULARITY),
        });
      }
      if (command === 'upload') {
        if (offsetOf(opts) === 0) {
          return resumableUploadResponse(416, {'x-goog-upload-status': 'active'});
        }
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const stream = Readable.from([
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY),
    ]);
    await helper.start({uploadStream: stream, chunkSize: GRANULARITY});
    await helper.finished();

    const uploads = requests.filter(r => commandOf(r) === 'upload');
    assert.deepStrictEqual(
      uploads.map(r => offsetOf(r)),
      [0, GRANULARITY],
    );
  });

  it('treats a 200 response without X-Goog-Upload-Status as recoverable', async () => {
    const requests: MockRequestOptions[] = [];
    let firstUpload = true;
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': '0',
        });
      }
      if (command === 'upload') {
        if (firstUpload) {
          firstUpload = false;
          return resumableUploadResponse(200, {});
        }
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(GRANULARITY)]),
      chunkSize: GRANULARITY,
    });
    await helper.finished();

    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['start', 'upload', 'query', 'upload', 'finalize'],
    );
  });

  it('throws fatal (Category 3) errors without retrying', async () => {
    let uploadAttempts = 0;
    const auth = mockAuth(async opts => {
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'upload') {
        uploadAttempts += 1;
        return resumableUploadResponse(403, {'x-goog-upload-status': 'active'});
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(GRANULARITY)]),
      chunkSize: GRANULARITY,
    });
    await assert.rejects(
      helper.finished(),
      (err: gax.GoogleError) => err.code === Status.PERMISSION_DENIED,
    );
    assert.strictEqual(uploadAttempts, 1);
  });

  it('resumes from a session URL and fast-forwards the stream', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': String(2 * GRANULARITY),
        });
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const stream = Readable.from([
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY),
      Buffer.alloc(GRANULARITY),
    ]);
    await helper.start({
      uploadStream: stream,
      chunkSize: GRANULARITY,
      resumeUrl: SESSION_URL,
    });
    const response = await helper.finished();

    assert.deepStrictEqual(response, {name: 'complete'});
    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['query', 'upload', 'finalize'],
    );
    assert.strictEqual(offsetOf(requests[1]), 2 * GRANULARITY);
    assert.strictEqual(bodyLength(requests[1]), GRANULARITY);
    assert.strictEqual(offsetOf(requests[2]), 3 * GRANULARITY);
    assert.strictEqual(helper.uploadUrl, SESSION_URL);
  });

  it('resumes from a committed offset that does not align with the chunk boundary', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': '6',
        });
      }
      if (command === 'upload') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    // The committed offset (6) splits the second stream chunk, so the bytes
    // past the boundary must be preserved and transmitted.
    const payload = Buffer.from([...Array(20).keys()]);
    const helper = new gax.ResumableUpload(buildContext(auth));
    const stream = Readable.from([
      payload.subarray(0, 4),
      payload.subarray(4, 12),
      payload.subarray(12, 20),
    ]);
    await helper.start({
      uploadStream: stream,
      chunkSize: 8,
      resumeUrl: SESSION_URL,
    });
    const response = await helper.finished();

    assert.deepStrictEqual(response, {name: 'complete'});
    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['query', 'upload', 'upload, finalize'],
    );
    const uploads = requests.filter(
      r => commandOf(r) === 'upload' || commandOf(r) === 'upload, finalize',
    );
    assert.deepStrictEqual(
      uploads.map(r => offsetOf(r)),
      [6, 14],
    );
    const transmitted = Buffer.concat(
      uploads.map(r => Buffer.from(r.body as Buffer)),
    );
    assert.ok(transmitted.equals(payload.subarray(6)));
  });

  it('skips ahead to the server offset without dropping buffered bytes', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(async opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'query') {
        return resumableUploadResponse(200, {
          'x-goog-upload-status': 'active',
          'x-goog-upload-size-received': '12',
        });
      }
      if (command === 'upload') {
        if (offsetOf(opts) === 0) {
          return resumableUploadResponse(416, {
            'x-goog-upload-status': 'active',
          });
        }
        return resumableUploadResponse(200, {'x-goog-upload-status': 'active'});
      }
      if (command === 'upload, finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      if (command === 'finalize') {
        return resumableUploadResponse(
          200,
          {'x-goog-upload-status': 'final'},
          JSON.stringify({name: 'complete'}),
        );
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    // The first 12-byte stream chunk overflows the 8-byte chunk size, so the
    // remainder (bytes 8-12) sits in the buffer when the server reports it
    // committed 12 bytes; the skip must consume the buffer head, not the
    // next stream chunk.
    const payload = Buffer.from([...Array(20).keys()]);
    const helper = new gax.ResumableUpload(buildContext(auth));
    const stream = Readable.from([
      payload.subarray(0, 12),
      payload.subarray(12, 20),
    ]);
    await helper.start({uploadStream: stream, chunkSize: 8});
    const response = await helper.finished();

    assert.deepStrictEqual(response, {name: 'complete'});
    assert.deepStrictEqual(
      requests.map(r => commandOf(r)),
      ['start', 'upload', 'query', 'upload', 'finalize'],
    );
    const uploads = requests.filter(
      r =>
        (commandOf(r) === 'upload' && offsetOf(r) !== 0) ||
        commandOf(r) === 'finalize',
    );
    assert.deepStrictEqual(
      uploads.map(r => offsetOf(r)),
      [12, 20],
    );
    const transmitted = Buffer.concat(
      uploads.map(r =>
        r.body === undefined ? Buffer.alloc(0) : Buffer.from(r.body as Buffer),
      ),
    );
    assert.ok(transmitted.equals(payload.subarray(12)));
  });

  it('aborts when the global deadline is exceeded', async () => {
    const auth = mockAuth(async opts => {
      const command = commandOf(opts);
      if (command === 'start') {
        await sleep(20);
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    await helper.start({
      uploadStream: Readable.from([Buffer.alloc(10)]),
      globalDeadlineMs: 5,
      uploadSize: 10 * 1024 * 1024 * 1024,
    });
    await assert.rejects(
      helper.finished(),
      (err: gax.GoogleError) => err.code === Status.DEADLINE_EXCEEDED,
    );
  });

  it('cancels an in-flight upload and notifies the server', async () => {
    const requests: MockRequestOptions[] = [];
    const auth = mockAuth(opts => {
      requests.push(opts);
      const command = commandOf(opts);
      if (command === 'start') {
        return resumableUploadResponse(200, {
          'x-goog-upload-url': SESSION_URL,
          'x-goog-upload-status': 'active',
        });
      }
      if (command === 'upload') {
        // Never resolves until the upload is cancelled.
        return new Promise<MockResponse>(() => {});
      }
      if (command === 'cancel') {
        return resumableUploadResponse(200, {'x-goog-upload-status': 'cancelled'});
      }
      throw new Error(`Unexpected command: ${command}`);
    });

    const helper = new gax.ResumableUpload(buildContext(auth));
    const stream = new Readable({read() {}});
    stream.push(Buffer.alloc(GRANULARITY));
    await helper.start({uploadStream: stream, chunkSize: GRANULARITY});

    helper.cancel();
    await assert.rejects(
      helper.finished(),
      (err: gax.GoogleError) => err.code === Status.CANCELLED,
    );
    assert.ok(
      requests.some(r => commandOf(r) === 'cancel'),
      'expected a cancel command to be sent',
    );
  });

  it('resolves the GAPIC method call with a ResumableUpload helper', async () => {
    const auth = mockAuth(() => {
      throw new Error('No request should be made before start()');
    });
    const descriptor = new gax.ResumableUploadDescriptor('/resumable/upload');
    const settings = new gax.CallSettings();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const func = async () => ({cancel() {}});
    const apiCall = createApiCall(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Promise.resolve(func as any),
      settings,
      descriptor,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = (await (apiCall(
      {name: 'test'},
      {resumableUpload: buildContext(auth)},
    ) as Promise<any>)) as any;
    assert.ok(result[0] instanceof gax.ResumableUpload);
    assert.strictEqual(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result[0] as any).context.uploadPrefix,
      '/resumable/upload',
    );
  });

  it('rejects the GAPIC method call when the transport context is missing', async () => {
    const descriptor = new gax.ResumableUploadDescriptor();
    const settings = new gax.CallSettings();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const func = async () => ({cancel() {}});
    const apiCall = createApiCall(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Promise.resolve(func as any),
      settings,
      descriptor,
    );
    await assert.rejects(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiCall({} as any, {} as any) as Promise<any>,
      /resumable upload transport context/,
    );
  });
});
