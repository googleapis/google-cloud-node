const {Spanner} = require('../build/src');
const {performance, monitorEventLoopDelay} = require('perf_hooks');

// Helper functions for percentile & statistical calculations
function getPercentile(arr, percentile) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const index = Math.ceil((percentile / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function bytesToMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main(
  instanceId = process.env.SPANNER_INSTANCE_ID || 'test-instance',
  databaseId = process.env.SPANNER_DATABASE_ID || 'test-database',
  projectId = process.env.SPANNER_PROJECT_ID || 'test-project',
  workersArg = '50',
  queriesArg = '100',
) {
  const CONCURRENCY_WORKERS = parseInt(workersArg, 10) || 50; // N concurrent workers
  const QUERIES_PER_WORKER = parseInt(queriesArg, 10) || 100; // M sequential queries per worker
  const TOTAL_LOOKUPS = CONCURRENCY_WORKERS * QUERIES_PER_WORKER; // Total Operations

  const spanner = new Spanner({projectId, disableBuiltInMetrics: true});
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  console.log(
    '===================================================================',
  );
  console.log(
    'BENCHMARK B: CONCURRENT POINT LOOKUPS (STEADY-STATE WORKER QUEUE)',
  );
  console.log(
    `Instance: ${instanceId} | Database: ${databaseId} | Project: ${projectId}`,
  );
  console.log(`Total Operations    : ${TOTAL_LOOKUPS}`);
  console.log(
    `Concurrent Workers  : ${CONCURRENCY_WORKERS} parallel in-flight threads`,
  );
  console.log(`Queries per Worker  : ${QUERIES_PER_WORKER} sequential queries`);
  console.log(
    '===================================================================\n',
  );

  // -------------------------------------------------------------------
  // TIMED PARALLEL WARMUP PHASE (5 Seconds under Concurrency)
  // Warm up V8 JIT compiler, gRPC HTTP/2 channels, TLS & Multiplexed Session
  // -------------------------------------------------------------------
  console.log('Warming up V8 JIT & gRPC channels for 5 seconds...');
  const warmupEndTime = Date.now() + 5000;
  const warmupWorkers = [];

  async function runWarmupWorker() {
    while (Date.now() < warmupEndTime) {
      await database.run({ sql: 'SELECT 1' });
    }
  }

  for (let w = 0; w < CONCURRENCY_WORKERS; w++) {
    warmupWorkers.push(runWarmupWorker());
  }
  await Promise.all(warmupWorkers);

  // Clear timeline buffer so warmup marks do not affect benchmark results
  performance.clearMarks();
  performance.clearMeasures();
  console.log('Warmup complete! V8 JIT & gRPC connections at steady state.\n');
  // -------------------------------------------------------------------

  const preTimes = [];
  const externalTimes = [];
  const postTimes = [];
  const sdkTotalTimes = [];

  // Start monitoring Event Loop Delay
  const eldHistogram = monitorEventLoopDelay({resolution: 10});
  eldHistogram.enable();

  // 1. Force GC to establish clean heap baseline
  if (global.gc) global.gc();
  const startHeap = process.memoryUsage().heapUsed;
  let peakHeap = startHeap;

  const benchStartTime = performance.now();

  // Worker function: Executes M queries sequentially in a dedicated worker loop
  async function runWorker(workerId) {
    for (let k = 0; k < QUERIES_PER_WORKER; k++) {
      const singerId = ((workerId * QUERIES_PER_WORKER + k) % 100000) + 1;
      const query = {
        sql: 'SELECT SingerId, FirstName, LastName FROM Singers WHERE SingerId = @id',
        params: {id: singerId},
      };

      // Execute 1 query and await its completion before starting the next one in this worker
      await database.run(query);

      // Track peak heap memory
      const currentHeap = process.memoryUsage().heapUsed;
      if (currentHeap > peakHeap) peakHeap = currentHeap;
    }
  }

  // 2. Spawn N workers simultaneously
  const workers = [];
  for (let w = 0; w < CONCURRENCY_WORKERS; w++) {
    workers.push(runWorker(w));
  }

  // Wait for all N workers to complete their M sequential queries
  await Promise.all(workers);

  const totalBenchDurationSec = (performance.now() - benchStartTime) / 1000;
  eldHistogram.disable();

  // 3. Extract and correlate performance measures by unique request ID (reqId)
  const preMap = new Map();
  const postMap = new Map();

  const measures = performance.getEntriesByType('measure');
  for (const m of measures) {
    const parts = m.name.split('_');
    const reqId = parts[parts.length - 1]; // Extract unique request ID

    if (m.name.startsWith('1_SDK_PreProcessing')) {
      preTimes.push(m.duration);
      preMap.set(reqId, m.duration);
    } else if (m.name.startsWith('2_External')) {
      externalTimes.push(m.duration);
    } else if (m.name.startsWith('3_SDK_PostProcessing')) {
      postTimes.push(m.duration);
      postMap.set(reqId, m.duration);
    }
  }

  // Correlate matching Pre and Post processing durations per request ID
  postMap.forEach((postDur, reqId) => {
    const preDur = preMap.get(reqId) || 0;
    sdkTotalTimes.push(preDur + postDur);
  });

  // Clean performance timeline buffer
  performance.clearMarks();
  performance.clearMeasures();

  if (global.gc) global.gc();
  const endHeap = process.memoryUsage().heapUsed;

  // 4. Output Performance, Memory, and Event Loop Results
  console.log(
    '===================================================================',
  );
  console.log('LATENCY BREAKDOWN (ms)');
  console.log(
    '===================================================================',
  );
  console.log(
    'Metric                     | Avg (ms) | P50 (ms) | P90 (ms) | P99 (ms)',
  );
  console.log(
    '-------------------------------------------------------------------',
  );
  console.log(
    `1. SDK Pre-Processing (M2-M1)| ${getAverage(preTimes).toFixed(3)}   | ${getPercentile(preTimes, 50).toFixed(3)}   | ${getPercentile(preTimes, 90).toFixed(3)}   | ${getPercentile(preTimes, 99).toFixed(3)}`,
  );
  console.log(
    `2. SDK Post-Processing(M4-M3)| ${getAverage(postTimes).toFixed(3)}   | ${getPercentile(postTimes, 50).toFixed(3)}   | ${getPercentile(postTimes, 90).toFixed(3)}   | ${getPercentile(postTimes, 99).toFixed(3)}`,
  );
  console.log(
    '-------------------------------------------------------------------',
  );
  console.log(
    `TOTAL PURE SDK LATENCY     | ${getAverage(sdkTotalTimes).toFixed(3)}   | ${getPercentile(sdkTotalTimes, 50).toFixed(3)}   | ${getPercentile(sdkTotalTimes, 90).toFixed(3)}   | ${getPercentile(sdkTotalTimes, 99).toFixed(3)}`,
  );
  console.log(
    `External (gRPC/Net/Server) | ${getAverage(externalTimes).toFixed(3)}   | ${getPercentile(externalTimes, 50).toFixed(3)}   | ${getPercentile(externalTimes, 90).toFixed(3)}   | ${getPercentile(externalTimes, 99).toFixed(3)}`,
  );
  console.log(
    '===================================================================\n',
  );

  console.log(
    '===================================================================',
  );
  console.log('THROUGHPUT, MEMORY & EVENT LOOP SUMMARY');
  console.log(
    '===================================================================',
  );
  console.log(`Total Operations Executed  : ${TOTAL_LOOKUPS}`);
  console.log(
    `Throughput                 : ${(TOTAL_LOOKUPS / totalBenchDurationSec).toFixed(1)} lookups/sec`,
  );
  console.log(`Baseline Heap (Start)      : ${bytesToMB(startHeap)}`);
  console.log(`Peak Heap (Max Used)       : ${bytesToMB(peakHeap)}`);
  console.log(
    `Peak Allocation Delta      : ${bytesToMB(peakHeap - startHeap)}`,
  );
  console.log(`Retained Memory (Post-GC)  : ${bytesToMB(endHeap)}`);
  console.log(
    `Event Loop Delay (Mean)    : ${(eldHistogram.mean / 1e6).toFixed(3)} ms`,
  );
  console.log(
    `Event Loop Delay (Max)     : ${(eldHistogram.max / 1e6).toFixed(3)} ms`,
  );
  console.log(
    '===================================================================\n',
  );

  await spanner.close();
}

process.on('unhandledRejection', err => {
  console.error(err);
  process.exitCode = 1;
});

const args = process.argv.slice(2);
main(args[0], args[1], args[2], args[3], args[4]).catch(console.error);