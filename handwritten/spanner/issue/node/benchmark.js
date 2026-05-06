'use strict';

const {performance} = require('perf_hooks');
const {randomUUID, webcrypto} = require('crypto');
const {Spanner} = require('@google-cloud/spanner');
const {status: Status} = require('@grpc/grpc-js');

const subtle = webcrypto.subtle;

const SAMPLE_SIZE = envInt('SAMPLE_SIZE', 10000);
const TOTAL_INSERT_COUNT = envInt('INSERT_COUNT', 1000);
const TOTAL_INSERT_CONCURRENCY = envInt('INSERT_CONCURRENCY', 110);
const BATCH_COUNT = envInt('BATCH_COUNT', 1);
const DUPLICATE_INSERT = process.env.DUPLICATE_INSERT === 'true';
const VERBOSE_BATCH_LOGS = envBool('VERBOSE_BATCH_LOGS', true);

const DB_PROJECT_ID = process.env.DB_PROJECT_ID || 'emulator';
const DB_INSTANCE = process.env.DB_INSTANCE || 'device-tracking';
const DB_DATABASE = process.env.DB_DATABASE || 'device-tracking';
const DB_SCHEMA = process.env.DB_SCHEMA || 'tracking';
const SPANNER_NUM_CHANNELS = envInt('SPANNER_NUM_CHANNELS', 0);
const DISABLE_BUILT_IN_METRICS = envBool('SPANNER_DISABLE_BUILT_IN_METRICS', true);
const POOL_OPTIONS = process.env.POOL_OPTIONS
  ? JSON.parse(process.env.POOL_OPTIONS)
  : {
      max: 20,
      min: 1,
      incStep: 5,
      maxIdle: 1,
      idlesAfter: 1,
      keepAlive: 10,
      acquireTimeout: 10_000,
      fail: false,
    };

async function runBenchmark(options = {}) {
  const workerIndex = options.workerIndex ?? envInt('WORKER_INDEX', 0);
  const workerCount = options.workerCount ?? envInt('WORKER_COUNT', 1);
  const partition = partitionRange(TOTAL_INSERT_COUNT, workerIndex, workerCount);
  const concurrency = partitionCount(TOTAL_INSERT_CONCURRENCY, workerIndex, workerCount);
  const insertCount = partition.count;

  console.log('Initializing database connection...');
  console.log(
    `Configuration: SAMPLE_SIZE=${SAMPLE_SIZE}, INSERT_COUNT=${TOTAL_INSERT_COUNT}, ` +
      `INSERT_CONCURRENCY=${TOTAL_INSERT_CONCURRENCY}, BATCH_COUNT=${BATCH_COUNT}, ` +
      `DUPLICATE_INSERT=${DUPLICATE_INSERT}, WORKER_INDEX=${workerIndex}, ` +
      `WORKER_COUNT=${workerCount}, WORKER_INSERT_COUNT=${insertCount}, ` +
      `WORKER_CONCURRENCY=${concurrency}`,
  );

  const spannerOptions = {
    projectId: DB_PROJECT_ID,
    disableBuiltInMetrics: DISABLE_BUILT_IN_METRICS,
  };
  if (SPANNER_NUM_CHANNELS > 0) spannerOptions.numChannels = SPANNER_NUM_CHANNELS;

  const spanner = new Spanner(spannerOptions);
  const instance = spanner.instance(DB_INSTANCE);
  const poolOpts =
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false'
      ? POOL_OPTIONS
      : {};
  const database = instance.database(DB_DATABASE, poolOpts);
  const table = database.table(`${DB_SCHEMA}.DeviceRecentActivityLog`);

  try {
    console.log('Generating benchmark data...');
    console.log(`  Will generate IDs with cardinality: ${SAMPLE_SIZE}`);

    const numDevices = SAMPLE_SIZE;
    const numDetails = SAMPLE_SIZE;
    const numRequests = SAMPLE_SIZE;
    const numLocations = SAMPLE_SIZE;

    const totalRecords = insertCount * BATCH_COUNT;
    const totalInserts = DUPLICATE_INSERT ? totalRecords * 2 : totalRecords;
    console.log(`\nCreating ${totalRecords} records in ${insertCount} batches of ${BATCH_COUNT}...\n`);
    console.log(
      DUPLICATE_INSERT
        ? `Total insert operations: ${totalInserts} (${totalRecords} + ${totalRecords} duplicates)\n`
        : `Total insert operations: ${totalInserts} (no duplicates)\n`,
    );

    const batches = [];
    for (let i = 0; i < insertCount; i++) {
      const batch = [];
      const globalBatchIndex = partition.start + i;
      for (let j = 0; j < BATCH_COUNT; j++) {
        batch.push(
          await createBenchmarkRecord({
            index: globalBatchIndex * BATCH_COUNT + j,
            numDevices,
            numDetails,
            numRequests,
            numLocations,
          }),
        );
      }
      batches.push(batch);
    }

    console.log(`\nStarting ${insertCount} batch inserts with concurrency: ${concurrency}...\n`);

    const durations = new Array(insertCount);
    let alreadyExistsCount = 0;
    const overallStartTime = performance.now();

    await asyncMap(
      batches,
      async (batch, i) => {
        const globalBatchIndex = partition.start + i;
        const label = `worker-${workerIndex} batch-${globalBatchIndex} (${BATCH_COUNT} records, concurrency: ${concurrency})`;
        const startTime = performance.now();
        if (VERBOSE_BATCH_LOGS) console.log(label);

        try {
          await table.insert(batch);
        } catch (e) {
          if (e.code === Status.ALREADY_EXISTS) {
            alreadyExistsCount++;
            if (VERBOSE_BATCH_LOGS) console.log(`  ${label} - ALREADY_EXISTS (expected on retry)`);
          } else {
            throw e;
          }
        }

        if (DUPLICATE_INSERT) {
          try {
            await table.insert(batch);
          } catch (e) {
            if (e.code === Status.ALREADY_EXISTS) {
              alreadyExistsCount++;
              if (VERBOSE_BATCH_LOGS) console.log(`  ${label} - ALREADY_EXISTS (expected on duplicate)`);
            } else {
              throw e;
            }
          }
        }

        const duration = performance.now() - startTime;
        durations[i] = duration;

        if (VERBOSE_BATCH_LOGS && (i + 1) % 10 === 0) {
          const last = durations.slice(Math.max(0, i - 9), i + 1).filter(Number.isFinite);
          const avg = last.reduce((a, b) => a + b, 0) / last.length;
          console.log(
            `  [${i + 1}/${insertCount}] Last ${last.length} batches avg: ${avg.toFixed(2)}ms ` +
              `(${BATCH_COUNT} records/batch, ${concurrency} concurrent)\n`,
          );
        }
      },
      {concurrency},
    );

    const overallDuration = performance.now() - overallStartTime;
    const summary = buildSummary({
      workerIndex,
      workerCount,
      insertCount,
      batchCount: BATCH_COUNT,
      totalRecords,
      totalInserts,
      alreadyExistsCount,
      concurrency,
      overallDuration,
      durations,
    });
    printSummary(summary);
    return summary;
  } finally {
    await database.close();
    spanner.close();
  }
}

async function sha256Hash(str) {
  const encoder = new TextEncoder();
  return Array.from(new Uint8Array(await subtle.digest('SHA-256', encoder.encode(str))))
    .map(b => `00${b.toString(16)}`.slice(-2))
    .join('');
}

async function createDeviceRecentActivityLogId(opts) {
  return sha256Hash(
    `${opts.deviceId}${opts.deviceDetailsId}${opts.httpRequestDetailsId}${opts.createdAt.getTime()}${opts.sessionId ?? ''}`,
  );
}

function ipToBytes(ipAddress) {
  const octets = ipAddress.split('.');
  if (octets.length !== 4) throw new Error('Invalid IP address format');
  const bytes = Buffer.alloc(4);
  for (let i = 0; i < 4; i++) bytes[i] = parseInt(octets[i], 10);
  return bytes;
}

async function asyncMap(items, mapperFn, opts = {}) {
  const concurrency = Math.max(1, opts.concurrency ?? Infinity);
  const results = new Array(items.length);
  let currentIndex = 0;

  async function processNext() {
    while (currentIndex < items.length) {
      const index = currentIndex++;
      results[index] = await mapperFn(items[index], index);
    }
  }

  const workers = Array.from({length: Math.min(concurrency, items.length)}, () => processNext());
  await Promise.all(workers);
  return results;
}

async function createBenchmarkRecord(opts) {
  const deviceRecordId = await sha256Hash(`device-${opts.index % opts.numDevices}`);
  const deviceDetailsId = await sha256Hash(`detail-${opts.index % opts.numDetails}`);
  const httpRequestDetailsId = await sha256Hash(`request-${opts.index % opts.numRequests}`);
  const httpRequestLocationId =
    opts.numLocations > 0 ? await sha256Hash(`location-${opts.index % opts.numLocations}`) : null;
  const xRequestId = randomUUID();
  const createdAt = new Date(Date.now() + opts.index * 1000);
  const sessionId = randomUUID();
  const deviceRecentActivityLogId = await createDeviceRecentActivityLogId({
    deviceId: `benchmark-${opts.index}`,
    deviceDetailsId,
    httpRequestDetailsId,
    createdAt,
    sessionId,
  });

  return {
    deviceRecentActivityLogId,
    deviceRecordId,
    deviceDetailsId,
    httpRequestDetailsId,
    ipAddress: ipToBytes('192.168.1.100'),
    institutionId: 'benchmark-institution',
    userId: Math.random() > 0.5 ? 'user-123' : null,
    username: null,
    xRequestId,
    httpRequestLocationId,
    latency: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null,
    sessionId,
    createdAt,
  };
}

function buildSummary(input) {
  const durations = input.durations.filter(Number.isFinite);
  const sorted = [...durations].sort((a, b) => a - b);
  const sum = durations.reduce((a, b) => a + b, 0);
  return {
    workerIndex: input.workerIndex,
    workerCount: input.workerCount,
    totalBatches: input.insertCount,
    batchSize: input.batchCount,
    totalRecords: input.totalRecords,
    totalInserts: input.totalInserts,
    alreadyExistsCount: input.alreadyExistsCount,
    concurrency: input.concurrency,
    totalTimeMs: input.overallDuration,
    insertsPerSecond: input.totalInserts / (input.overallDuration / 1000),
    avgBatchDurationMs: durations.length ? sum / durations.length : 0,
    minBatchDurationMs: durations.length ? Math.min(...durations) : 0,
    maxBatchDurationMs: durations.length ? Math.max(...durations) : 0,
    p50Ms: percentile(sorted, 0.5),
    p90Ms: percentile(sorted, 0.9),
    p95Ms: percentile(sorted, 0.95),
    p99Ms: percentile(sorted, 0.99),
    durations,
  };
}

function printSummary(summary, title = 'Benchmark Summary') {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  ${title}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (summary.workerCount > 1) {
    console.log(`  Worker:             ${summary.workerIndex}/${summary.workerCount}`);
  }
  console.log(`  Total Batches:      ${summary.totalBatches}`);
  console.log(`  Batch Size:         ${summary.batchSize}`);
  console.log(`  Total Records:      ${summary.totalRecords}`);
  console.log(`  Total Inserts:      ${summary.totalInserts} (includes ${summary.alreadyExistsCount} duplicates)`);
  console.log(`  Concurrency:        ${summary.concurrency}`);
  console.log(`  Total Time:         ${summary.totalTimeMs.toFixed(2)}ms`);
  console.log(`  Inserts/Second:     ${summary.insertsPerSecond.toFixed(2)}`);
  console.log(`  Avg Batch Duration:  ${summary.avgBatchDurationMs.toFixed(2)}ms`);
  console.log(`  Min Batch Duration:  ${summary.minBatchDurationMs.toFixed(2)}ms`);
  console.log(`  Max Batch Duration:  ${summary.maxBatchDurationMs.toFixed(2)}ms`);
  console.log(`  P50:                ${summary.p50Ms.toFixed(2)}ms`);
  console.log(`  P90:                ${summary.p90Ms.toFixed(2)}ms`);
  console.log(`  P95:                ${summary.p95Ms.toFixed(2)}ms`);
  console.log(`  P99:                ${summary.p99Ms.toFixed(2)}ms`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

function aggregateSummaries(summaries, totalWallTimeMs) {
  const durations = summaries.flatMap(summary => summary.durations || []);
  return buildSummary({
    workerIndex: 0,
    workerCount: summaries.length,
    insertCount: summaries.reduce((sum, summary) => sum + summary.totalBatches, 0),
    batchCount: summaries[0]?.batchSize || BATCH_COUNT,
    totalRecords: summaries.reduce((sum, summary) => sum + summary.totalRecords, 0),
    totalInserts: summaries.reduce((sum, summary) => sum + summary.totalInserts, 0),
    alreadyExistsCount: summaries.reduce((sum, summary) => sum + summary.alreadyExistsCount, 0),
    concurrency: summaries.reduce((sum, summary) => sum + summary.concurrency, 0),
    overallDuration: totalWallTimeMs,
    durations,
  });
}

function percentile(sorted, fraction) {
  if (!sorted.length) return 0;
  const index = Math.min(sorted.length - 1, Math.floor(sorted.length * fraction));
  return sorted[index];
}

function partitionRange(total, index, count) {
  const start = Math.floor((total * index) / count);
  const end = Math.floor((total * (index + 1)) / count);
  return {start, end, count: end - start};
}

function partitionCount(total, index, count) {
  return partitionRange(total, index, count).count;
}

function envInt(key, fallback) {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : parseInt(value, 10);
}

function envBool(key, fallback) {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : value.toLowerCase() === 'true';
}

if (require.main === module) {
  runBenchmark().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {aggregateSummaries, printSummary, runBenchmark};
