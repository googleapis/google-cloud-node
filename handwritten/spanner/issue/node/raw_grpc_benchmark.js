'use strict';

const { performance } = require('perf_hooks');
const crypto = require('crypto');
const grpc = require('@grpc/grpc-js');
const grpcGcp = require('grpc-gcp')(grpc);
const gcpApiConfig = require('@google-cloud/spanner/build/src/spanner_grpc_config.json');
const { v1 } = require('@google-cloud/spanner');

// Defaults match what is used in benchmark.js / benchmark-insert-repl.ts
const DB_PROJECT_ID = process.env.DB_PROJECT_ID || 'emulator';
const DB_INSTANCE = process.env.DB_INSTANCE || 'device-tracking';
const DB_DATABASE = process.env.DB_DATABASE || 'device-tracking';
const TABLE_NAME = process.env.TABLE_NAME || 'tracking.DeviceRecentActivityLog';
const READ_COUNT = envInt('READ_COUNT', 1000);
const CONCURRENCY = envInt('CONCURRENCY', 10);

// Write benchmark configuration
const SAMPLE_SIZE = envInt('SAMPLE_SIZE', 10000);
const INSERT_COUNT = envInt('INSERT_COUNT', 1000);
const INSERT_CONCURRENCY = envInt('INSERT_CONCURRENCY', 110);
const BATCH_COUNT = envInt('BATCH_COUNT', 1);
const DUPLICATE_INSERT = process.env.DUPLICATE_INSERT === 'true';

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

function protoValue(val) {
  if (val === null || val === undefined) {
    return { nullValue: 0 };
  }
  return { stringValue: val.toString() };
}

async function runBenchmark() {
  const databasePath = `projects/${DB_PROJECT_ID}/instances/${DB_INSTANCE}/databases/${DB_DATABASE}`;

  console.log(`Target Database: ${databasePath}`);
  console.log(`Target Table: ${TABLE_NAME}`);
  console.log(`Read Config: READ_COUNT=${READ_COUNT}, CONCURRENCY=${CONCURRENCY}`);
  console.log(`Write Config: SAMPLE_SIZE=${SAMPLE_SIZE}, INSERT_COUNT=${INSERT_COUNT}, INSERT_CONCURRENCY=${INSERT_CONCURRENCY}, BATCH_COUNT=${BATCH_COUNT}, DUPLICATE_INSERT=${DUPLICATE_INSERT}`);

  // Customize grpc-gcp channel pool configuration for a constant 4 channels
  const customGcpConfig = JSON.parse(JSON.stringify(gcpApiConfig));
  customGcpConfig.channelPool.minSize = 4;
  customGcpConfig.channelPool.maxSize = 4;
  customGcpConfig.channelPool.maxConcurrentStreamsLowWatermark = 1;

  // Initialize a single GAPIC client with grpc-gcp channel pooling enabled
  const client = new v1.SpannerClient({
    grpc,
    'grpc.callInvocationTransformer': grpcGcp.gcpCallInvocationTransformer,
    'grpc.channelFactoryOverride': grpcGcp.gcpChannelFactoryOverride,
    'grpc.gcpApiConfig': grpcGcp.createGcpApiConfig(customGcpConfig),
  });

  console.log('\nCreating 4 multiplexed sessions (one per channel) via raw gRPC...');
  const sessions = await Promise.all(
    Array.from({ length: 1 }, () =>
      client.createSession({
        database: databasePath,
        session: {
          multiplexed: true,
        },
      }).then(([s]) => s)
    )
  );
  console.log(`Created 4 Multiplexed Sessions.`);

  try {
    console.log('Fetching actual seeded keys from the database via SDK bootstrap to ensure 100% hit rate...');
    const { Spanner } = require('@google-cloud/spanner');
    const bootstrapSpanner = new Spanner({ projectId: DB_PROJECT_ID });
    const bootstrapDb = bootstrapSpanner.instance(DB_INSTANCE).database(DB_DATABASE);
    const [existingRows] = await bootstrapDb.run({
      sql: `SELECT deviceRecentActivityLogId FROM ${TABLE_NAME} LIMIT ${SAMPLE_SIZE}`
    });
    if (existingRows.length === 0) {
      throw new Error('No seeded rows found in the database! Please seed the database first.');
    }
    const targetKeys = existingRows.map(r => r.toJSON().deviceRecentActivityLogId);
    console.log(`Successfully retrieved ${targetKeys.length} active keys. Preparing read tasks...`);
    await bootstrapDb.close();
    bootstrapSpanner.close();

    // ==========================================
    // 1. READ BENCHMARK
    // ==========================================
    const readItems = Array.from({ length: READ_COUNT });
    const readDurations = new Array(READ_COUNT);

    console.log(`\nStarting READ benchmark (SQL ExecuteSql) with concurrency ${CONCURRENCY}...`);
    const readOverallStartTime = performance.now();

    await asyncMap(
      readItems,
      async (_, i) => {
        const startTime = performance.now();
        const session = sessions[i % sessions.length];
        const key = targetKeys[i % targetKeys.length];
        const request = {
          session: session.name,
          sql: `SELECT deviceRecentActivityLogId, deviceRecordId, deviceDetailsId, userId, createdAt FROM ${TABLE_NAME} WHERE deviceRecentActivityLogId = @id`,
          params: {
            fields: {
              id: {
                stringValue: key,
              },
            },
          },
          paramTypes: {
            id: {
              code: 6, // STRING
            },
          },
        };

        await client.executeSql(request);
        const duration = performance.now() - startTime;

        readDurations[i] = duration;
      },
      { concurrency: CONCURRENCY }
    );

    const readOverallDuration = performance.now() - readOverallStartTime;
    const readOpsPerSecond = READ_COUNT / (readOverallDuration / 1000);

    const readSum = readDurations.reduce((a, b) => a + b, 0);
    const readAvg = readSum / readDurations.length;

    const readSorted = [...readDurations].sort((a, b) => a - b);
    const rp50 = percentile(readSorted, 0.5);
    const rp90 = percentile(readSorted, 0.9);
    const rp95 = percentile(readSorted, 0.95);
    const rp99 = percentile(readSorted, 0.99);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('  Raw gRPC Benchmark Summary (Node.js - READ)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`  Total Reads:        ${READ_COUNT}`);
    console.log(`  Concurrency:        ${CONCURRENCY}`);
    console.log(`  Total Time:         ${readOverallDuration.toFixed(2)}ms`);
    console.log(`  Reads/Second:       ${readOpsPerSecond.toFixed(2)}`);
    console.log(`  Avg Latency:        ${readAvg.toFixed(2)}ms`);
    console.log(`  P50 Latency:        ${rp50.toFixed(2)}ms`);
    console.log(`  P90 Latency:        ${rp90.toFixed(2)}ms`);
    console.log(`  P95 Latency:        ${rp95.toFixed(2)}ms`);
    console.log(`  P99 Latency:        ${rp99.toFixed(2)}ms`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // ==========================================
    // 2. SLEEP 5 SECONDS
    // ==========================================
    console.log('Sleeping for 5 seconds before starting writes...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // ==========================================
    // 3. WRITE BENCHMARK
    // ==========================================
    console.log(`\nStarting WRITE benchmark with concurrency ${INSERT_CONCURRENCY}...`);

    const totalRecords = INSERT_COUNT * BATCH_COUNT;
    const totalInserts = DUPLICATE_INSERT ? totalRecords * 2 : totalRecords;

    // Pre-generate batches
    const batches = [];
    for (let i = 0; i < INSERT_COUNT; i++) {
      const batch = [];
      for (let j = 0; j < BATCH_COUNT; j++) {
        const idx = i * BATCH_COUNT + j;
        const deviceRecordId = sha256(`device-${idx % SAMPLE_SIZE}`);
        const deviceDetailsId = sha256(`detail-${idx % SAMPLE_SIZE}`);
        const httpRequestDetailsId = sha256(`request-${idx % SAMPLE_SIZE}`);
        const httpRequestLocationId = sha256(`location-${idx % SAMPLE_SIZE}`);
        const xRequestId = crypto.randomUUID();
        const sessionId = crypto.randomUUID();
        const createdAt = new Date(Date.now() + idx * 1000);

        const deviceRecentActivityLogId = sha256(`benchmark-${idx}${deviceDetailsId}${httpRequestDetailsId}${createdAt.getTime()}${sessionId}`);

        batch.push({
          deviceRecentActivityLogId,
          deviceRecordId,
          deviceDetailsId,
          httpRequestDetailsId,
          ipAddress: Buffer.from([192, 168, 1, 100]).toString('base64'),
          institutionId: 'benchmark-institution',
          userId: Math.random() > 0.5 ? 'user-123' : null,
          username: null,
          xRequestId,
          httpRequestLocationId,
          latency: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null,
          sessionId,
          createdAt: createdAt.toISOString(),
        });
      }
      batches.push(batch);
    }

    const writeDurations = [];
    let alreadyExistsCount = 0;
    const writeOverallStartTime = performance.now();

    await asyncMap(
      batches,
      async (batch, i) => {
        const startTime = performance.now();

        const mutations = batch.map(rec => ({
          insert: {
            table: TABLE_NAME,
            columns: [
              'deviceRecentActivityLogId',
              'deviceRecordId',
              'deviceDetailsId',
              'httpRequestDetailsId',
              'ipAddress',
              'institutionId',
              'userId',
              'username',
              'xRequestId',
              'httpRequestLocationId',
              'latency',
              'sessionId',
              'createdAt',
            ],
            values: [
              {
                values: [
                  protoValue(rec.deviceRecentActivityLogId),
                  protoValue(rec.deviceRecordId),
                  protoValue(rec.deviceDetailsId),
                  protoValue(rec.httpRequestDetailsId),
                  protoValue(rec.ipAddress),
                  protoValue(rec.institutionId),
                  protoValue(rec.userId),
                  protoValue(rec.username),
                  protoValue(rec.xRequestId),
                  protoValue(rec.httpRequestLocationId),
                  protoValue(rec.latency),
                  protoValue(rec.sessionId),
                  protoValue(rec.createdAt),
                ],
              },
            ],
          },
        }));

        const session = sessions[i % sessions.length];

        const commitRequest = {
          session: session.name,
          singleUseTransaction: {
            readWrite: {},
          },
          mutations,
        };

        try {
          await client.commit(commitRequest);
        } catch (e) {
          if (e.code === 6) { // ALREADY_EXISTS
            alreadyExistsCount++;
          } else {
            throw e;
          }
        }

        if (DUPLICATE_INSERT) {
          try {
            await client.commit(commitRequest);
          } catch (e) {
            if (e.code === 6) {
              alreadyExistsCount++;
            } else {
              throw e;
            }
          }
        }

        const duration = performance.now() - startTime;
        writeDurations.push(duration);

        if ((i + 1) % 100 === 0 || (i + 1) === INSERT_COUNT) {
          const slice = writeDurations.slice(-100);
          const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
          console.log(`  [${i + 1}/${INSERT_COUNT}] Last batches avg: ${avg.toFixed(2)}ms (${BATCH_COUNT} records/batch)`);
        }
      },
      { concurrency: INSERT_CONCURRENCY }
    );

    const writeOverallDuration = performance.now() - writeOverallStartTime;
    const writeInsertsPerSecond = totalInserts / (writeOverallDuration / 1000);

    const writeSum = writeDurations.reduce((a, b) => a + b, 0);
    const writeAvg = writeSum / writeDurations.length;
    const writeMin = Math.min(...writeDurations);
    const writeMax = Math.max(...writeDurations);

    const writeSorted = [...writeDurations].sort((a, b) => a - b);
    const wp50 = percentile(writeSorted, 0.5);
    const wp90 = percentile(writeSorted, 0.9);
    const wp95 = percentile(writeSorted, 0.95);
    const wp99 = percentile(writeSorted, 0.99);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('  Raw gRPC Benchmark Summary (Node.js - WRITE)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`  Total Batches:      ${INSERT_COUNT}`);
    console.log(`  Batch Size:         ${BATCH_COUNT}`);
    console.log(`  Total Records:      ${totalRecords}`);
    console.log(`  Total Inserts:      ${totalInserts} (includes ${alreadyExistsCount} duplicates)`);
    console.log(`  Concurrency:        ${INSERT_CONCURRENCY}`);
    console.log(`  Total Time:         ${writeOverallDuration.toFixed(2)}ms`);
    console.log(`  Inserts/Second:     ${writeInsertsPerSecond.toFixed(2)}`);
    console.log(`  Avg Batch Duration: ${writeAvg.toFixed(2)}ms`);
    console.log(`  Min Batch Duration: ${writeMin.toFixed(2)}ms`);
    console.log(`  Max Batch Duration: ${writeMax.toFixed(2)}ms`);
    console.log(`  P50:                ${wp50.toFixed(2)}ms`);
    console.log(`  P90:                ${wp90.toFixed(2)}ms`);
    console.log(`  P95:                ${wp95.toFixed(2)}ms`);
    console.log(`  P99:                ${wp99.toFixed(2)}ms`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } finally {
    console.log('\nBenchmark finished. Multiplexed session is left to be managed by server.');
  }
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

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => processNext());
  await Promise.all(workers);
  return results;
}

function percentile(sorted, fraction) {
  if (!sorted.length) return 0;
  const index = Math.min(sorted.length - 1, Math.floor(sorted.length * fraction));
  return sorted[index];
}

function envInt(key, fallback) {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : parseInt(value, 10);
}

runBenchmark().catch(console.error);
