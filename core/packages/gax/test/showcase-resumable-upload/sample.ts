// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Runs end-to-end resumable upload tests against the gapic-showcase
// ResumableUploadService using the generated client in ./fixtures.

import assert from 'assert';
import * as crypto from 'crypto';
import * as fs from 'fs';
import {createRequire} from 'module';
import * as os from 'os';
import * as path from 'path';
import {Readable} from 'stream';
import {
  ClientOptions,
  GoogleAuth,
  googleAuthLibrary,
  GoogleError,
  grpc,
  ResumableSource,
  ResumableUploadSession,
} from '../../src';

const GRANULARITY = 256 * 1024;

interface UploadMediaRequest {
  name?: string;
}

interface UploadMediaResponse {
  size?: number | string;
}

interface ShowcaseResumableUploadClient {
  apiEndpoint: string;
  getResumableSource(filePath: string): ResumableSource;
  uploadMedia(request?: UploadMediaRequest): Promise<ResumableUploadSession>;
  close(): Promise<void>;
}

interface ShowcaseFixturesModule {
  ResumableUploadServiceClient: new (
    opts?: ClientOptions,
  ) => ShowcaseResumableUploadClient;
}

interface TempPayload {
  filePath: string;
  size: number;
  data: Buffer;
  cleanup(): void;
}

interface RequestLogEntry {
  command: string | undefined;
  offset: number;
  status: number;
  bodyLength: number;
}

interface UploadRequestOptions {
  headers?: Record<string, string | undefined>;
  body?: string | Uint8Array;
}

interface RequestHookContext {
  command: string | undefined;
  offset: number;
  log: RequestLogEntry[];
}

type RequestHook = (
  opts: UploadRequestOptions,
  context: RequestHookContext,
) => void | Promise<void>;

const localRequire = createRequire(__filename);
const fixturesPath = fs.existsSync(path.join(__dirname, 'fixtures'))
  ? path.join(__dirname, 'fixtures')
  : path.resolve(__dirname, '../../../test/showcase-resumable-upload/fixtures');
const {ResumableUploadServiceClient} = localRequire(
  fixturesPath,
) as ShowcaseFixturesModule;

/**
 * Helper to create a temporary payload file with random bytes.
 */
function createTempPayload(
  size: number,
  prefix = 'showcase-test-',
): TempPayload {
  const filePath = path.join(
    os.tmpdir(),
    `${prefix}${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}.bin`,
  );
  const data = crypto.randomBytes(size);
  fs.writeFileSync(filePath, data);
  return {
    filePath,
    size,
    data,
    cleanup() {
      try {
        fs.unlinkSync(filePath);
      } catch {
        // ignore cleanup errors
      }
    },
  };
}

/**
 * Helper to create a ResumableUploadServiceClient pointing at the showcase server.
 */
function createClient(
  port: number,
  customAuth?: GoogleAuth,
  extraOpts?: Partial<ClientOptions>,
): ShowcaseResumableUploadClient {
  const auth =
    customAuth ??
    new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    });
  return new ResumableUploadServiceClient({
    servicePath: '127.0.0.1',
    port,
    protocol: 'http',
    auth,
    ...extraOpts,
  });
}

/**
 * Extracts the committed byte size from a finished UploadMedia response.
 */
async function getFinishedSize(
  session: ResumableUploadSession,
): Promise<number> {
  const response = (await session.finished()) as UploadMediaResponse;
  return Number(response.size);
}

/**
 * Baseline upload of UPLOAD_FILE if provided by run.sh.
 */
async function runBaselineUpload(
  port: number,
  filePath: string,
): Promise<void> {
  console.log('\n=== Baseline Upload (from UPLOAD_FILE) ===');
  const size = fs.statSync(filePath).size;
  const client = createClient(port);
  try {
    console.log(
      `Uploading ${filePath} (${size} bytes) through ${client.apiEndpoint}`,
    );

    const session = await client.uploadMedia({
      name: path.basename(filePath),
    });

    await session.start({
      uploadSource: client.getResumableSource(filePath),
      chunkSize: 512 * 1024,
      onProgress: status => {
        console.log(`  ${status.bytesUploaded} / ${size} bytes committed`);
      },
    });

    console.log(`Upload session: ${session.uploadUrl}`);
    const response = (await session.finished()) as UploadMediaResponse;
    const uploadedSize = Number(response.size);
    if (uploadedSize !== size) {
      throw new Error(
        `Uploaded size mismatch: expected ${size}, got ${response.size}`,
      );
    }
    console.log(`Upload complete: ${JSON.stringify(response)}`);
  } finally {
    await client.close();
  }
}

/**
 * Test 1: Multi-block upload
 * Uploads a payload spanning multiple 256 KiB blocks plus a partial final block.
 */
async function testMultiBlockUpload(port: number): Promise<void> {
  console.log('\n=== Test 1: Multi-block Upload ===');
  // 4 full 256 KiB blocks + 100 KiB partial block = 1,126,400 bytes
  const size = 4 * GRANULARITY + 100 * 1024;
  const payload = createTempPayload(size, 'multi-block-');
  const client = createClient(port);

  try {
    const session = await client.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const progressUpdates: number[] = [];

    await session.start({
      uploadSource: client.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      onProgress: status => {
        progressUpdates.push(status.bytesUploaded);
        console.log(
          `  [Multi-block] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    const uploadedSize = await getFinishedSize(session);

    assert.strictEqual(
      uploadedSize,
      size,
      `Expected uploaded size ${size}, got ${uploadedSize}`,
    );
    assert.strictEqual(
      progressUpdates.length,
      5,
      `Expected 5 progress updates for 5 chunks, got ${progressUpdates.length}`,
    );
    assert.deepStrictEqual(progressUpdates, [
      GRANULARITY,
      2 * GRANULARITY,
      3 * GRANULARITY,
      4 * GRANULARITY,
      size,
    ]);
    console.log('PASSED: Multi-block upload verified across 5 blocks.');
  } finally {
    payload.cleanup();
    await client.close();
  }
}

/**
 * Test 2: Smaller than one block upload
 * Uploads a 64 KiB payload when chunkSize is 512 KiB (single `upload, finalize`).
 */
async function testSmallerThanOneBlockUpload(port: number): Promise<void> {
  console.log('\n=== Test 2: Smaller Than One Block Upload ===');
  const size = 64 * 1024; // 64 KiB (< 256 KiB granularity and < 512 KiB chunk size)
  const payload = createTempPayload(size, 'small-block-');
  const client = createClient(port);

  try {
    const session = await client.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const progressUpdates: number[] = [];

    await session.start({
      uploadSource: client.getResumableSource(payload.filePath),
      chunkSize: 512 * 1024,
      onProgress: status => {
        progressUpdates.push(status.bytesUploaded);
        console.log(
          `  [Small-block] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    const uploadedSize = await getFinishedSize(session);

    assert.strictEqual(
      uploadedSize,
      size,
      `Expected uploaded size ${size}, got ${uploadedSize}`,
    );
    assert.strictEqual(
      progressUpdates.length,
      1,
      `Expected single progress update for sub-block payload, got ${progressUpdates.length}`,
    );
    assert.strictEqual(progressUpdates[0], size);
    console.log(
      'PASSED: Smaller than one block upload completed in single step.',
    );
  } finally {
    payload.cleanup();
    await client.close();
  }
}

/**
 * Wraps a PassThrough GoogleAuth instance to observe HTTP requests/responses
 * sent to gapic-showcase (and optionally mutate request headers on the fly).
 */
function createInstrumentedAuth(onRequest?: RequestHook): {
  auth: GoogleAuth;
  log: RequestLogEntry[];
} {
  const auth = new GoogleAuth({
    authClient: new googleAuthLibrary.PassThroughClient(),
  });
  const realRequest = auth.request.bind(auth);
  const log: RequestLogEntry[] = [];

  auth.request = (async <T>(opts: Parameters<GoogleAuth['request']>[0]) => {
    const reqOpts = opts as UploadRequestOptions;
    const command = reqOpts.headers?.['x-goog-upload-command'];
    const rawOffset = reqOpts.headers?.['x-goog-upload-offset'];
    const offset = rawOffset !== undefined ? Number(rawOffset) : -1;
    if (onRequest) {
      await onRequest(reqOpts, {command, offset, log});
    }
    const response = await realRequest<T>(opts);
    log.push({
      command,
      offset,
      status: response.status,
      bodyLength: reqOpts.body ? reqOpts.body.length : 0,
    });
    return response;
  }) as GoogleAuth['request'];

  return {auth, log};
}

/**
 * Test 3: non_fatal_error_on_start & fatal_error_on_start
 * Exercises gapic-showcase start-phase failure injection via X-Goog-Test-Scenario:
 * - Part A: `non_fatal_error_on_start` with `client_uuid`, `error_code: 503`, `failure_count: 2`
 * - Part B: `fatal_error_on_start` with `error_code: 403`
 */
async function testStartErrorScenarios(port: number): Promise<void> {
  console.log(
    '\n=== Test 3: Start Error Scenarios (non_fatal_error_on_start & fatal_error_on_start) ===',
  );
  const size = GRANULARITY + 32 * 1024;
  const payload = createTempPayload(size, 'start-scenarios-');

  // --- Part A: non_fatal_error_on_start ---
  console.log(
    '  --- Part A: X-Goog-Test-Scenario: non_fatal_error_on_start ---',
  );
  const {auth: authA, log: logA} = createInstrumentedAuth();
  const clientA = createClient(port, authA);
  const clientUuid = `test-client-run-${process.pid}-${Date.now()}`;

  try {
    const sessionA = await clientA.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionA.start({
      uploadSource: clientA.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      startHeaders: {
        'X-Goog-Test-Scenario': 'non_fatal_error_on_start',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          client_uuid: clientUuid,
          error_code: 503,
          failure_count: 2,
        }),
      },
      retry: {
        backoffSettings: {
          initialRetryDelayMillis: 20,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 100,
          maxRetries: 4,
          initialRpcTimeoutMillis: 0,
          rpcTimeoutMultiplier: 1,
          maxRpcTimeoutMillis: 0,
          totalTimeoutMillis: 0,
        },
      },
    });

    assert.strictEqual(await getFinishedSize(sessionA), size);

    const startCallsA = logA.filter(entry => entry.command === 'start');
    assert.strictEqual(
      startCallsA.length,
      3,
      `Expected 3 start attempts (2 injected 503s + 1 success), got ${startCallsA.length}`,
    );
    assert.deepStrictEqual(
      startCallsA.map(entry => entry.status),
      [503, 503, 200],
    );
    console.log(
      '  PASSED Part A: non_fatal_error_on_start retried twice after 503 and succeeded.',
    );
  } finally {
    await clientA.close();
  }

  // --- Part B: fatal_error_on_start ---
  console.log('  --- Part B: X-Goog-Test-Scenario: fatal_error_on_start ---');
  const {auth: authB, log: logB} = createInstrumentedAuth();
  const clientB = createClient(port, authB);

  try {
    const sessionB = await clientB.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await assert.rejects(
      sessionB.start({
        uploadSource: clientB.getResumableSource(payload.filePath),
        chunkSize: GRANULARITY,
        startHeaders: {
          'X-Goog-Test-Scenario': 'fatal_error_on_start',
          'X-Goog-Test-Scenario-Config': JSON.stringify({
            error_code: 403,
          }),
        },
      }),
      /(?:HTTP|status) 403/,
      'Expected sessionB.start() to reject with HTTP 403 on fatal_error_on_start',
    );
    await assert.rejects(sessionB.finished(), /(?:HTTP|status) 403/);

    const startCallsB = logB.filter(entry => entry.command === 'start');
    assert.strictEqual(
      startCallsB.length,
      1,
      `Expected fatal_error_on_start not to retry (got ${startCallsB.length} calls)`,
    );
    assert.strictEqual(startCallsB[0].status, 403);
    console.log(
      '  PASSED Part B: fatal_error_on_start failed immediately with HTTP 403 without retrying.',
    );
  } finally {
    payload.cleanup();
    await clientB.close();
  }
}

/**
 * Test 4: non_fatal_error_on_chunk_upload
 * Exercises gapic-showcase chunk upload failure injection via X-Goog-Test-Scenario:
 * - Part A: Category 1 transient failure (`error_code: 503`, `failure_count: 2`, `after_offset: 256 KiB`)
 * - Part B: Category 2 state mismatch (`error_code: 412`, `failure_count: 1`, `after_offset: 256 KiB`)
 * - Part C: Session termination (`action_after_failures: "terminate"`)
 */
async function testUploadWithFailureAndRetry(port: number): Promise<void> {
  console.log(
    '\n=== Test 4: Chunk Upload Failure Scenarios (non_fatal_error_on_chunk_upload) ===',
  );
  const size = 3 * GRANULARITY; // 3 blocks of 256 KiB
  const payload = createTempPayload(size, 'retry-test-');

  const fastRetry = {
    backoffSettings: {
      initialRetryDelayMillis: 20,
      retryDelayMultiplier: 1.2,
      maxRetryDelayMillis: 100,
      maxRetries: 3,
      initialRpcTimeoutMillis: 0,
      rpcTimeoutMultiplier: 1,
      maxRpcTimeoutMillis: 0,
      totalTimeoutMillis: 0,
    },
  };

  // --- Part A: Category 1 transient HTTP 503 injected by gapic-showcase ---
  console.log(
    '  --- Part A: non_fatal_error_on_chunk_upload (HTTP 503 transient retry) ---',
  );
  const {auth: authA, log: logA} = createInstrumentedAuth();
  const clientA = createClient(port, authA);

  try {
    const sessionA = await clientA.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionA.start({
      uploadSource: clientA.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      retry: fastRetry,
      startHeaders: {
        'X-Goog-Test-Scenario': 'non_fatal_error_on_chunk_upload',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          error_code: 503,
          failure_count: 2,
          after_offset: GRANULARITY,
          action_after_failures: 'succeed',
        }),
      },
    });

    assert.strictEqual(await getFinishedSize(sessionA), size);

    const block2CallsA = logA.filter(
      entry => entry.command === 'upload' && entry.offset === GRANULARITY,
    );
    assert.deepStrictEqual(
      block2CallsA.map(entry => entry.status),
      [503, 503, 200],
      'Expected gapic-showcase to inject two 503 responses at offset 256 KiB before succeeding',
    );
    console.log(
      '  PASSED Part A: Server-injected HTTP 503 on chunk upload retried and succeeded.',
    );
  } finally {
    await clientA.close();
  }

  // --- Part B: Category 2 HTTP 412 state mismatch injected by gapic-showcase ---
  console.log(
    '  --- Part B: non_fatal_error_on_chunk_upload (HTTP 412 recovery via query) ---',
  );
  const {auth: authB, log: logB} = createInstrumentedAuth();
  const clientB = createClient(port, authB);

  try {
    const sessionB = await clientB.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionB.start({
      uploadSource: clientB.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      retry: fastRetry,
      startHeaders: {
        'X-Goog-Test-Scenario': 'non_fatal_error_on_chunk_upload',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          error_code: 412,
          failure_count: 1,
          after_offset: GRANULARITY,
          action_after_failures: 'succeed',
        }),
      },
    });

    assert.strictEqual(await getFinishedSize(sessionB), size);

    assert.ok(
      logB.some(
        entry =>
          entry.command === 'upload' &&
          entry.offset === GRANULARITY &&
          entry.status === 412,
      ),
      'Expected gapic-showcase to return HTTP 412 at offset 256 KiB',
    );
    assert.ok(
      logB.some(entry => entry.command === 'query' && entry.status === 200),
      'Expected client to send query command to gapic-showcase after HTTP 412',
    );
    console.log(
      '  PASSED Part B: Server-injected HTTP 412 triggered query recovery and succeeded.',
    );
  } finally {
    await clientB.close();
  }

  // --- Part C: action_after_failures: "terminate" ---
  console.log(
    '  --- Part C: non_fatal_error_on_chunk_upload (action_after_failures: "terminate") ---',
  );
  const {auth: authC, log: logC} = createInstrumentedAuth();
  const clientC = createClient(port, authC);

  try {
    const sessionC = await clientC.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionC.start({
      uploadSource: clientC.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      retry: {
        backoffSettings: {
          initialRetryDelayMillis: 10,
          retryDelayMultiplier: 1.1,
          maxRetryDelayMillis: 30,
          maxRetries: 2,
          initialRpcTimeoutMillis: 0,
          rpcTimeoutMultiplier: 1,
          maxRpcTimeoutMillis: 0,
          totalTimeoutMillis: 0,
        },
      },
      startHeaders: {
        'X-Goog-Test-Scenario': 'non_fatal_error_on_chunk_upload',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          error_code: 503,
          failure_count: 1,
          after_offset: 0,
          action_after_failures: 'terminate',
        }),
      },
    });

    await assert.rejects(
      sessionC.finished(),
      /Exceeded the maximum number of retries/,
      'Expected session to reject when action_after_failures is terminate',
    );
    const uploadStatusesC = logC
      .filter(entry => entry.command === 'upload')
      .map(entry => entry.status);
    assert.deepStrictEqual(uploadStatusesC, [503, 500, 500]);
    console.log(
      '  PASSED Part C: action_after_failures="terminate" returned 503 then 500 and rejected as expected.',
    );
  } finally {
    payload.cleanup();
    await clientC.close();
  }
}

/**
 * Test 5: partial_commit_on_chunk_upload
 * Exercises gapic-showcase partial commit fault injection (`partial_commit_on_chunk_upload`):
 * Server commits `partial_bytes` (100 KiB) of a 256 KiB chunk and returns 503, then returns
 * 409 Conflict when the client retries offset 0. Client queries offset (100 KiB), transmits
 * the 156 KiB tail at offset 100 KiB, and finishes the remaining blocks.
 */
async function testPartialCommitOnChunkUpload(port: number): Promise<void> {
  console.log(
    '\n=== Test 5: Partial Commit on Chunk Upload (partial_commit_on_chunk_upload) ===',
  );
  const size = 2 * GRANULARITY; // 512 KiB
  const partialBytes = 100 * 1024; // 100 KiB partial commit
  const payload = createTempPayload(size, 'partial-commit-');
  const {auth, log} = createInstrumentedAuth();
  const client = createClient(port, auth);

  try {
    const session = await client.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await session.start({
      uploadSource: client.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      retry: {
        backoffSettings: {
          initialRetryDelayMillis: 20,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 100,
          maxRetries: 3,
          initialRpcTimeoutMillis: 0,
          rpcTimeoutMultiplier: 1,
          maxRpcTimeoutMillis: 0,
          totalTimeoutMillis: 0,
        },
      },
      startHeaders: {
        'X-Goog-Test-Scenario': 'partial_commit_on_chunk_upload',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          partial_bytes: partialBytes,
          error_code: 503,
          failure_count: 1,
          after_offset: 0,
        }),
      },
    });

    assert.strictEqual(await getFinishedSize(session), size);

    assert.ok(
      log.some(
        entry =>
          entry.command === 'upload' &&
          entry.offset === 0 &&
          entry.status === 503,
      ),
      'Expected initial partial commit to return HTTP 503',
    );
    assert.ok(
      log.some(
        entry =>
          entry.command === 'upload' &&
          entry.offset === 0 &&
          entry.status === 409,
      ),
      'Expected retry at offset 0 after partial commit to return HTTP 409 Conflict',
    );
    assert.ok(
      log.some(entry => entry.command === 'query' && entry.status === 200),
      'Expected client to query committed offset after HTTP 409 Conflict',
    );
    assert.ok(
      log.some(
        entry =>
          entry.command === 'upload' &&
          entry.offset === partialBytes &&
          entry.bodyLength === GRANULARITY - partialBytes &&
          entry.status === 200,
      ),
      `Expected client to transmit the remaining ${GRANULARITY - partialBytes}-byte tail at offset ${partialBytes}`,
    );
    console.log(
      'PASSED: partial_commit_on_chunk_upload recovered from partial commit and transmitted chunk tail.',
    );
  } finally {
    payload.cleanup();
    await client.close();
  }
}

/**
 * Test 6: non_fatal_error_on_query & chunk_granularity
 * Exercises the remaining two gapic-showcase scenarios:
 * - Part A: `non_fatal_error_on_query` (`error_code: 503`, `failure_count: 2`)
 * - Part B: `chunk_granularity` (server sets 256-byte granularity and rejects unaligned chunks with 400)
 */
async function testQueryAndChunkGranularityScenarios(
  port: number,
): Promise<void> {
  console.log(
    '\n=== Test 6: Query Retry & Chunk Granularity Scenarios (non_fatal_error_on_query & chunk_granularity) ===',
  );

  // --- Part A: non_fatal_error_on_query ---
  console.log(
    '  --- Part A: X-Goog-Test-Scenario: non_fatal_error_on_query ---',
  );
  const sizeA = 2 * GRANULARITY;
  const payloadA = createTempPayload(sizeA, 'query-scenario-');
  const {auth: authA, log: logA} = createInstrumentedAuth();
  const clientA = createClient(port, authA);

  try {
    // Session 1 creates the session configured with non_fatal_error_on_query and uploads 1 block
    const sessionA1 = await clientA.uploadMedia({
      name: path.basename(payloadA.filePath),
    });
    const oneBlockSource: ResumableSource = {
      size: sizeA,
      getStream(offset = 0) {
        return Readable.from(
          (async function* () {
            yield payloadA.data.subarray(offset, GRANULARITY);
            throw new Error('Stop after 1 block to trigger resume query');
          })(),
        );
      },
    };

    await sessionA1.start({
      uploadSource: oneBlockSource,
      chunkSize: GRANULARITY,
      startHeaders: {
        'X-Goog-Test-Scenario': 'non_fatal_error_on_query',
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          error_code: 503,
          failure_count: 2,
        }),
      },
    });
    const resumeUrl = sessionA1.uploadUrl;
    assert.ok(resumeUrl, 'Expected sessionA1 to have an uploadUrl');
    await assert.rejects(sessionA1.finished(), /Stop after 1 block/);

    // Session 2 resumes from resumeUrl -> sends `query` which fails twice with 503 before succeeding
    const sessionA2 = await clientA.uploadMedia({
      name: path.basename(payloadA.filePath),
    });
    await sessionA2.start({
      uploadSource: clientA.getResumableSource(payloadA.filePath),
      resumeUrl,
      chunkSize: GRANULARITY,
      retry: {
        backoffSettings: {
          initialRetryDelayMillis: 20,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 100,
          maxRetries: 4,
          initialRpcTimeoutMillis: 0,
          rpcTimeoutMultiplier: 1,
          maxRpcTimeoutMillis: 0,
          totalTimeoutMillis: 0,
        },
      },
    });

    assert.strictEqual(await getFinishedSize(sessionA2), sizeA);

    const queryCalls = logA.filter(entry => entry.command === 'query');
    assert.deepStrictEqual(
      queryCalls.map(entry => entry.status),
      [503, 503, 200],
      'Expected gapic-showcase to return two 503 responses on query before 200 OK',
    );
    console.log(
      '  PASSED Part A: non_fatal_error_on_query retried query twice after 503 and resumed upload.',
    );
  } finally {
    payloadA.cleanup();
    await clientA.close();
  }

  // --- Part B: chunk_granularity ---
  console.log('  --- Part B: X-Goog-Test-Scenario: chunk_granularity ---');
  const sizeB = 1500; // 1500 bytes across 256-byte server granularity
  const payloadB = createTempPayload(sizeB, 'granularity-scenario-');
  const {auth: authB, log: logB} = createInstrumentedAuth();
  const clientB = createClient(port, authB);

  try {
    const sessionB = await clientB.uploadMedia({
      name: path.basename(payloadB.filePath),
    });

    // Pass an unaligned chunkSize (600 bytes); server returns X-Goog-Upload-Chunk-Granularity: 256,
    // so client must round effective chunkSize down to 512 (2 * 256) to avoid HTTP 400 from showcase.
    await sessionB.start({
      uploadSource: clientB.getResumableSource(payloadB.filePath),
      chunkSize: 600,
      startHeaders: {
        'X-Goog-Test-Scenario': 'chunk_granularity',
      },
    });

    assert.strictEqual(
      sessionB.chunkSize,
      512,
      `Expected session.chunkSize to be rounded down to 512 (multiple of 256), got ${sessionB.chunkSize}`,
    );

    assert.strictEqual(await getFinishedSize(sessionB), sizeB);

    const uploadLengths = logB
      .filter(
        entry =>
          entry.command === 'upload' || entry.command === 'upload, finalize',
      )
      .map(entry => entry.bodyLength);
    assert.deepStrictEqual(uploadLengths, [512, 512, 476]);
    console.log(
      '  PASSED Part B: chunk_granularity rounded 600-byte chunkSize to 512 bytes and completed 1500-byte upload.',
    );
  } finally {
    payloadB.cleanup();
    await clientB.close();
  }
}

/**
 * Test 7: Test emulating giving the resume URL to another process
 * (same process, but brand new client, session, and upload source objects)
 */
async function testCrossProcessResume(port: number): Promise<void> {
  console.log(
    '\n=== Test 7: Cross-Process Resume (New Objects via resumeUrl) ===',
  );
  const size = 4 * GRANULARITY; // 1 MiB (4 blocks of 256 KiB)
  const crashAfterBytes = 2 * GRANULARITY; // Crash after 512 KiB (2 blocks)
  const payload = createTempPayload(size, 'cross-process-');

  // --- Process 1: Uploads 512 KiB then crashes ---
  const client1 = createClient(port);
  let savedResumeUrl = '';

  try {
    const session1 = await client1.uploadMedia({
      name: path.basename(payload.filePath),
    });

    const crashingSource: ResumableSource = {
      size,
      getStream(offset = 0) {
        return Readable.from(
          (async function* () {
            const slice = payload.data.subarray(offset, crashAfterBytes);
            const step = 64 * 1024;
            for (let i = 0; i < slice.length; i += step) {
              yield slice.subarray(i, i + step);
            }
            throw new Error('Process 1 simulated crash after 512 KiB');
          })(),
        );
      },
    };

    await session1.start({
      uploadSource: crashingSource,
      chunkSize: GRANULARITY,
      onProgress: status => {
        console.log(
          `  [Process 1] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    assert.ok(
      session1.uploadUrl,
      'Expected session1 to have a valid uploadUrl',
    );
    savedResumeUrl = session1.uploadUrl;

    await assert.rejects(
      session1.finished(),
      /Process 1 simulated crash after 512 KiB/,
      'Expected Process 1 upload to fail with simulated crash',
    );
    assert.strictEqual(
      session1.committedBytes,
      crashAfterBytes,
      `Expected Process 1 to have committed ${crashAfterBytes} bytes before crash`,
    );
    console.log(
      `  [Process 1] Terminated at ${session1.committedBytes} bytes. Saved resumeUrl: ${savedResumeUrl}`,
    );
  } finally {
    await client1.close();
  }

  // --- Process 2: New client, new session, new source resuming from savedResumeUrl ---
  const client2 = createClient(port);
  try {
    const session2 = await client2.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const process2Progress: number[] = [];

    await session2.start({
      uploadSource: client2.getResumableSource(payload.filePath),
      resumeUrl: savedResumeUrl,
      chunkSize: GRANULARITY,
      onProgress: status => {
        process2Progress.push(status.bytesUploaded);
        console.log(
          `  [Process 2] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    const uploadedSize = await getFinishedSize(session2);

    assert.strictEqual(uploadedSize, size);
    assert.ok(
      process2Progress.length >= 2,
      'Expected Process 2 to report progress during recovery and remaining chunks',
    );
    assert.strictEqual(
      process2Progress[0],
      crashAfterBytes,
      `Expected Process 2 initial recovery offset to be ${crashAfterBytes}`,
    );
    assert.strictEqual(
      process2Progress[process2Progress.length - 1],
      size,
      `Expected Process 2 final committed bytes to be ${size}`,
    );
    console.log(
      'PASSED: Process 2 resumed from Process 1 URL and completed upload.',
    );
  } finally {
    payload.cleanup();
    await client2.close();
  }
}

/**
 * Test 8: Timeout and resume
 * Exercises both:
 * - Part A: Server-injected delay (`X-Goog-Test-Scenario-Config: {"delay_ms": 600}`)
 *   exceeding `stallTimeoutMs` -> automatic query & stream reopen
 * - Part B: Session deadline timeout (`globalDeadlineMs`) -> manual resume via `resumeUrl`
 */
async function testTimeoutAndResume(port: number): Promise<void> {
  console.log(
    '\n=== Test 8: Timeout and Resume (Server delay_ms & Global Deadline) ===',
  );
  const size = 3 * GRANULARITY; // 768 KiB (3 blocks)
  const payload = createTempPayload(size, 'timeout-test-');

  // --- Part A: Server-injected delay_ms triggering stallTimeoutMs and automatic recovery ---
  console.log(
    '  --- Part A: Server delay_ms via X-Goog-Test-Scenario-Config (Auto-Resume) ---',
  );
  let queriedAfterStall = false;
  const {auth: stallAuth} = createInstrumentedAuth((opts, {command}) => {
    if (command === 'query' && opts.headers) {
      queriedAfterStall = true;
      // Clear server-side delay_ms on recovery query so subsequent uploads do not stall again
      opts.headers['X-Goog-Test-Scenario-Config'] = JSON.stringify({
        delay_ms: 0,
      });
      console.log(
        '  [Stall Recovery] Client queried server after server delay_ms stall; cleared delay_ms',
      );
    }
  });

  const clientA = createClient(port, stallAuth);
  try {
    const sessionA = await clientA.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionA.start({
      uploadSource: clientA.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      stallTimeoutMs: 200,
      startHeaders: {
        'X-Goog-Test-Scenario-Config': JSON.stringify({
          delay_ms: 600,
          after_offset: GRANULARITY,
        }),
      },
      onProgress: status => {
        console.log(
          `  [Stall-test] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    assert.strictEqual(await getFinishedSize(sessionA), size);
    assert.ok(
      queriedAfterStall,
      'Expected client to query server offset after server delay_ms stall',
    );
    console.log(
      '  PASSED Part A: Server delay_ms stall automatically recovered and finished.',
    );
  } finally {
    await clientA.close();
  }

  // --- Part B: Global deadline timeout and manual resume via resumeUrl ---
  console.log(
    '  --- Part B: Global Deadline Timeout & Manual Resume via resumeUrl ---',
  );
  const clientB1 = createClient(port);
  let timedOutUrl = '';

  try {
    const sessionB1 = await clientB1.uploadMedia({
      name: path.basename(payload.filePath),
    });

    const throttledSource: ResumableSource = {
      size,
      getStream(offset = 0) {
        return Readable.from(
          (async function* () {
            // Yield first block immediately (256 KiB)
            yield payload.data.subarray(offset, offset + GRANULARITY);
            // Stall stream longer than globalDeadlineMs (300 ms)
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield payload.data.subarray(offset + GRANULARITY);
          })(),
        );
      },
    };

    await sessionB1.start({
      uploadSource: throttledSource,
      chunkSize: GRANULARITY,
      globalDeadlineMs: 300,
      onProgress: status => {
        console.log(
          `  [Deadline-test Session 1] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    assert.ok(
      sessionB1.uploadUrl,
      'Expected sessionB1 to have a valid uploadUrl',
    );
    timedOutUrl = sessionB1.uploadUrl;
    await assert.rejects(
      sessionB1.finished(),
      /exceeded its global deadline/,
      'Expected sessionB1 to reject with global deadline exceeded',
    );
    assert.strictEqual(
      sessionB1.committedBytes,
      GRANULARITY,
      `Expected sessionB1 to commit ${GRANULARITY} bytes before deadline timeout`,
    );
    console.log(
      `  [Deadline-test Session 1] Timed out after ${sessionB1.committedBytes} bytes. Saved resumeUrl: ${timedOutUrl}`,
    );
  } finally {
    await clientB1.close();
  }

  const clientB2 = createClient(port);
  try {
    const sessionB2 = await clientB2.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const progressB2: number[] = [];

    await sessionB2.start({
      uploadSource: clientB2.getResumableSource(payload.filePath),
      resumeUrl: timedOutUrl,
      chunkSize: GRANULARITY,
      onProgress: status => {
        progressB2.push(status.bytesUploaded);
        console.log(
          `  [Deadline-test Session 2] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    assert.strictEqual(await getFinishedSize(sessionB2), size);
    assert.strictEqual(
      progressB2[0],
      GRANULARITY,
      `Expected Session 2 to resume at offset ${GRANULARITY}`,
    );
    console.log(
      '  PASSED Part B: Timed-out session resumed via resumeUrl and finished.',
    );
  } finally {
    payload.cleanup();
    await clientB2.close();
  }
}

/**
 * Test 9: Client transport modes (`fallback: true` and `sslCreds` guard)
 * Verifies that `ResumableUploadServiceClient` works when configured with
 * `fallback: true`, and rejects `uploadMedia()` with a `GoogleError` when
 * `sslCreds` is passed without `fallback: true`.
 */
async function testClientTransportModes(port: number): Promise<void> {
  console.log(
    '\n=== Test 9: Client Transport Modes (fallback: true & sslCreds guard) ===',
  );
  const size = 64 * 1024;
  const payload = createTempPayload(size, 'transport-modes-');
  const fallbackClient = createClient(port, undefined, {fallback: true});

  try {
    const session = await fallbackClient.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await session.start({
      uploadSource: fallbackClient.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
    });

    const uploadedSize = await getFinishedSize(session);
    assert.strictEqual(
      uploadedSize,
      size,
      `Expected fallback: true client to upload ${size} bytes, got ${uploadedSize}`,
    );

    // Also verify getResumableSource() fails cleanly if _gaxModule lacks resumableSourceFromFile
    const clientWithCustomGax = Object.create(
      fallbackClient,
    ) as ShowcaseResumableUploadClient & {
      _gaxModule: Record<string, unknown>;
    };
    clientWithCustomGax._gaxModule = {};
    assert.throws(
      () => clientWithCustomGax.getResumableSource(payload.filePath),
      /getResumableSource is not supported when using the fallback transport/,
      'Expected getResumableSource() to throw when _gaxModule lacks resumableSourceFromFile',
    );

    console.log(
      '  PASSED Part A: fallback: true client uploaded payload and guarded getResumableSource().',
    );
  } finally {
    payload.cleanup();
    await fallbackClient.close();
  }

  const sslCredsClient = createClient(port, undefined, {
    sslCreds: grpc.credentials.createInsecure(),
  });
  try {
    await assert.rejects(
      sslCredsClient.uploadMedia({name: 'ssl-creds-rejected.bin'}),
      (err: unknown) =>
        err instanceof GoogleError &&
        /Resumable upload methods require HTTP\(S\) authentication/.test(
          err.message,
        ),
      'Expected uploadMedia() with sslCreds and fallback: false to reject with GoogleError',
    );
    console.log(
      '  PASSED Part B: sslCreds without fallback: true rejected with GoogleError.',
    );
  } finally {
    await sslCredsClient.close();
  }
}

async function main(): Promise<void> {
  const filePath = process.env.UPLOAD_FILE;
  const port = Number(process.env.SHOWCASE_PORT || 7469);

  if (filePath && fs.existsSync(filePath)) {
    await runBaselineUpload(port, filePath);
  }

  await testMultiBlockUpload(port);
  await testSmallerThanOneBlockUpload(port);
  await testStartErrorScenarios(port);
  await testUploadWithFailureAndRetry(port);
  await testPartialCommitOnChunkUpload(port);
  await testQueryAndChunkGranularityScenarios(port);
  await testCrossProcessResume(port);
  await testTimeoutAndResume(port);
  await testClientTransportModes(port);

  console.log('\nAll showcase resumable upload tests passed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
