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
// ResumableUploadService using the generated client in ./client.

'use strict';

const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {Readable} = require('stream');
const {GoogleAuth, googleAuthLibrary} = require('google-gax');
const {ResumableUploadServiceClient} = require('./client');

const GRANULARITY = 256 * 1024; // 256 KiB server chunk granularity

/**
 * Helper to create a temporary payload file with random bytes.
 */
function createTempPayload(size, prefix = 'showcase-test-') {
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
function createClient(port, customAuth) {
  const auth =
    customAuth ||
    new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    });
  return new ResumableUploadServiceClient({
    servicePath: '127.0.0.1',
    port,
    protocol: 'http',
    auth,
  });
}

/**
 * Baseline upload of UPLOAD_FILE if provided by run.sh.
 */
async function runBaselineUpload(port, filePath) {
  console.log('\n=== Baseline Upload (from UPLOAD_FILE) ===');
  const size = fs.statSync(filePath).size;
  const client = createClient(port);
  try {
    console.log(
      `Uploading ${filePath} (${size} bytes) through ${client.apiEndpoint}:${port}`,
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
    const response = await session.finished();
    const uploadedSize = Number(response.size);
    assert.strictEqual(
      uploadedSize,
      size,
      `Uploaded size mismatch: expected ${size}, got ${response.size}`,
    );
    console.log(`Baseline upload complete: ${JSON.stringify(response)}`);
  } finally {
    await client.close();
  }
}

/**
 * Test 1: Multi-block upload
 * Uploads a payload spanning multiple 256 KiB blocks plus a partial final block.
 */
async function testMultiBlockUpload(port) {
  console.log('\n=== Test 1: Multi-block Upload ===');
  // 4 full 256 KiB blocks + 100 KiB partial block = 1,126,400 bytes
  const size = 4 * GRANULARITY + 100 * 1024;
  const payload = createTempPayload(size, 'multi-block-');
  const client = createClient(port);

  try {
    const session = await client.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const progressUpdates = [];

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

    const response = await session.finished();
    const uploadedSize = Number(response.size);

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
async function testSmallerThanOneBlockUpload(port) {
  console.log('\n=== Test 2: Smaller Than One Block Upload ===');
  const size = 64 * 1024; // 64 KiB (< 256 KiB granularity and < 512 KiB chunk size)
  const payload = createTempPayload(size, 'small-block-');
  const client = createClient(port);

  try {
    const session = await client.uploadMedia({
      name: path.basename(payload.filePath),
    });
    const progressUpdates = [];

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

    const response = await session.finished();
    const uploadedSize = Number(response.size);

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
 * Test 3: Upload with a failure and retry
 * Exercises both:
 * - Category 1 transient failure (HTTP 503) -> exponential backoff retry
 * - Category 2 state mismatch (HTTP 412 after server commit) -> server offset query recovery
 */
async function testUploadWithFailureAndRetry(port) {
  console.log('\n=== Test 3: Upload With Failure and Retry ===');
  const size = 3 * GRANULARITY; // 3 blocks of 256 KiB
  const payload = createTempPayload(size, 'retry-test-');

  const baseAuth = new GoogleAuth({
    authClient: new googleAuthLibrary.PassThroughClient(),
  });
  const realRequest = baseAuth.request.bind(baseAuth);

  let injected503 = false;
  let retriedAfter503 = false;
  let injected412 = false;
  let queriedAfter412 = false;

  baseAuth.request = async opts => {
    const command = opts.headers && opts.headers['x-goog-upload-command'];
    const offset =
      opts.headers && Number(opts.headers['x-goog-upload-offset'] ?? -1);

    // 1. Inject Category 1 transient HTTP 503 error on first attempt of block 2 (offset 256 KiB)
    if (command === 'upload' && offset === GRANULARITY && !injected503) {
      injected503 = true;
      console.log(
        `  [Fault Injection] Returning transient HTTP 503 at offset ${offset}`,
      );
      return {
        status: 503,
        headers: {'x-goog-upload-status': 'active'},
        arrayBuffer: async () => new ArrayBuffer(0),
      };
    }

    if (command === 'upload' && offset === GRANULARITY && injected503) {
      retriedAfter503 = true;
    }

    // 2. Inject Category 2 HTTP 412 state mismatch on block 3 (offset 512 KiB)
    // Client enters RECOVERY, sends `query` to gapic-showcase to check server-committed offset,
    // discovers offset is still 512 KiB, and retries uploading block 3.
    if (command === 'upload' && offset === 2 * GRANULARITY && !injected412) {
      injected412 = true;
      console.log(
        `  [Fault Injection] Returning HTTP 412 state mismatch at offset ${offset}`,
      );
      return {
        status: 412,
        headers: {},
        arrayBuffer: async () => new ArrayBuffer(0),
      };
    }

    if (command === 'query' && injected412) {
      queriedAfter412 = true;
      console.log(
        '  [Recovery] Client sent query command to reconcile offset with server',
      );
    }

    return realRequest(opts);
  };

  const client = createClient(port, baseAuth);

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
        },
      },
      onProgress: status => {
        console.log(
          `  [Retry-test] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    const response = await session.finished();
    const uploadedSize = Number(response.size);

    assert.strictEqual(uploadedSize, size);
    assert.ok(injected503, 'Expected HTTP 503 fault to be injected');
    assert.ok(retriedAfter503, 'Expected client to retry chunk after HTTP 503');
    assert.ok(injected412, 'Expected HTTP 412 fault to be injected');
    assert.ok(
      queriedAfter412,
      'Expected client to send query command after HTTP 412',
    );
    console.log(
      'PASSED: Upload succeeded after Category 1 retry and Category 2 recovery.',
    );
  } finally {
    payload.cleanup();
    await client.close();
  }
}

/**
 * Test 4: Test emulating giving the resume URL to another process
 * (same process, but brand new client, session, and upload source objects)
 */
async function testCrossProcessResume(port) {
  console.log(
    '\n=== Test 4: Cross-Process Resume (New Objects via resumeUrl) ===',
  );
  const size = 4 * GRANULARITY; // 1 MiB (4 blocks of 256 KiB)
  const crashAfterBytes = 2 * GRANULARITY; // Crash after 512 KiB (2 blocks)
  const payload = createTempPayload(size, 'cross-process-');

  // --- Process 1: Uploads 512 KiB then crashes ---
  const client1 = createClient(port);
  let savedResumeUrl = null;

  try {
    const session1 = await client1.uploadMedia({
      name: path.basename(payload.filePath),
    });

    const crashingSource = {
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

    savedResumeUrl = session1.uploadUrl;
    assert.ok(savedResumeUrl, 'Expected session1 to have a valid uploadUrl');

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
    const process2Progress = [];

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

    const response2 = await session2.finished();
    const uploadedSize = Number(response2.size);

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
 * Test 5: Timeout and resume
 * Exercises both:
 * - Part A: In-flight stall timeout (`stallTimeoutMs`) -> automatic query & stream reopen
 * - Part B: Session deadline timeout (`globalDeadlineMs`) -> manual resume via `resumeUrl`
 */
async function testTimeoutAndResume(port) {
  console.log('\n=== Test 5: Timeout and Resume ===');
  const size = 3 * GRANULARITY; // 768 KiB (3 blocks)
  const payload = createTempPayload(size, 'timeout-test-');

  // --- Part A: In-flight stall timeout and automatic recovery ---
  console.log('  --- Part A: In-flight Stall Timeout (Auto-Resume) ---');
  const stallAuth = new GoogleAuth({
    authClient: new googleAuthLibrary.PassThroughClient(),
  });
  const realRequest = stallAuth.request.bind(stallAuth);
  let stalledOnce = false;
  let queriedAfterStall = false;

  stallAuth.request = async opts => {
    const command = opts.headers && opts.headers['x-goog-upload-command'];
    const offset =
      opts.headers && Number(opts.headers['x-goog-upload-offset'] ?? -1);

    if (command === 'upload' && offset === GRANULARITY && !stalledOnce) {
      stalledOnce = true;
      console.log(
        `  [Stall Injection] Delaying upload at offset ${offset} beyond stallTimeoutMs (250ms)`,
      );
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 1000);
        if (opts.signal) {
          opts.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(opts.signal.reason || new Error('Aborted due to stall'));
          });
        }
      });
    }

    if (command === 'query' && stalledOnce) {
      queriedAfterStall = true;
      console.log('  [Stall Recovery] Client queried server after stall abort');
    }

    return realRequest(opts);
  };

  const clientA = createClient(port, stallAuth);
  try {
    const sessionA = await clientA.uploadMedia({
      name: path.basename(payload.filePath),
    });

    await sessionA.start({
      uploadSource: clientA.getResumableSource(payload.filePath),
      chunkSize: GRANULARITY,
      stallTimeoutMs: 250,
      onProgress: status => {
        console.log(
          `  [Stall-test] ${status.bytesUploaded} / ${size} bytes committed`,
        );
      },
    });

    const responseA = await sessionA.finished();
    assert.strictEqual(Number(responseA.size), size);
    assert.ok(stalledOnce, 'Expected in-flight stall to be triggered');
    assert.ok(
      queriedAfterStall,
      'Expected client to query server offset after stall',
    );
    console.log(
      '  PASSED Part A: In-flight stall timeout automatically recovered and finished.',
    );
  } finally {
    await clientA.close();
  }

  // --- Part B: Global deadline timeout and manual resume via resumeUrl ---
  console.log(
    '  --- Part B: Global Deadline Timeout & Manual Resume via resumeUrl ---',
  );
  const clientB1 = createClient(port);
  let timedOutUrl = null;

  try {
    const sessionB1 = await clientB1.uploadMedia({
      name: path.basename(payload.filePath),
    });

    const throttledSource = {
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
    const progressB2 = [];

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

    const responseB2 = await sessionB2.finished();
    assert.strictEqual(Number(responseB2.size), size);
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

async function main() {
  const filePath = process.env.UPLOAD_FILE;
  const port = Number(process.env.SHOWCASE_PORT || 7469);

  if (filePath && fs.existsSync(filePath)) {
    await runBaselineUpload(port, filePath);
  }

  await testMultiBlockUpload(port);
  await testSmallerThanOneBlockUpload(port);
  await testUploadWithFailureAndRetry(port);
  await testCrossProcessResume(port);
  await testTimeoutAndResume(port);

  console.log('\nAll showcase resumable upload tests passed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
