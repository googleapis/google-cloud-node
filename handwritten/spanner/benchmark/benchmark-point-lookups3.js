const {Spanner} = require('../build/src');
const {performance, monitorEventLoopDelay} = require('perf_hooks');

function getPercentile(arr, percentile) {
  if (!arr || arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const index = Math.ceil((percentile / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}

function getAverage(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function bytesToMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main(instanceId, databaseId, projectId, workersArg, queriesArg) {
  const CONCURRENCY_WORKERS = parseInt(workersArg, 10) || 50;
  const QUERIES_PER_WORKER = parseInt(queriesArg, 10) || 100;
  const TOTAL_LOOKUPS = CONCURRENCY_WORKERS * QUERIES_PER_WORKER;

  const spanner = new Spanner({projectId, disableBuiltInMetrics: true});
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  console.log(
    '===================================================================',
  );
  console.log('BENCHMARK: CONCURRENT POINT LOOKUPS (TRUE LATENCY BREAKDOWN)');
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
  // TIMED PARALLEL WARMUP PHASE (5 Minutes under Concurrency)
  // -------------------------------------------------------------------
  console.log('Warming up V8 JIT & gRPC channels for 5 minutes...');
  const warmupEndTime = Date.now() + 300000;
  const warmupWorkers = [];

  async function runWarmupWorker() {
    while (Date.now() < warmupEndTime) {
      await database.run({sql: 'SELECT 1'});
    }
  }

  for (let w = 0; w < CONCURRENCY_WORKERS; w++) {
    warmupWorkers.push(runWarmupWorker());
  }
  await Promise.all(warmupWorkers);

  performance.clearMarks();
  performance.clearMeasures();
  console.log('Warmup complete! V8 JIT & gRPC connections at steady state.\n');

  // -------------------------------------------------------------------
  // BENCHMARK EXECUTION PHASE
  // -------------------------------------------------------------------
  const b1a_sdkPre = [];
  const b2a_gaxPre = [];
  const b3a_grpcGcpPre = [];
  const b4a_grpcJsPre = [];

  const b5a_extHeader = [];
  const b5b_extServerExec = [];
  const b5_extTotal = [];

  const b4b_grpcJsPost = [];
  const b3b_grpcGcpPost = [];
  const b2b_gaxPost = [];
  const b1b_sdkPost = [];

  const totalSdkOverhead = [];
  const totalGaxOverhead = [];
  const totalGrpcGcpOverhead = [];
  const totalGrpcJsOverhead = [];
  const totalClientOverhead = [];
  const totalEndToEnd = [];

  const eldHistogram = monitorEventLoopDelay({resolution: 10});
  eldHistogram.enable();

  if (global.gc) global.gc();
  const startHeap = process.memoryUsage().heapUsed;
  let peakHeap = startHeap;

  const benchStartTime = performance.now();

  async function runWorker(workerId) {
    for (let k = 0; k < QUERIES_PER_WORKER; k++) {
      const singerId = ((workerId * QUERIES_PER_WORKER + k) % 100000) + 1;
      const query = {
        sql: 'SELECT SingerId, FirstName, LastName FROM Singers WHERE SingerId = @id',
        params: {id: singerId},
      };

      await database.run(query);

      const currentHeap = process.memoryUsage().heapUsed;
      if (currentHeap > peakHeap) peakHeap = currentHeap;
    }
  }

  const workers = [];
  for (let w = 0; w < CONCURRENCY_WORKERS; w++) {
    workers.push(runWorker(w));
  }
  await Promise.all(workers);

  const totalBenchDurationSec = (performance.now() - benchStartTime) / 1000;
  eldHistogram.disable();

  // -------------------------------------------------------------------
  // EXTRACT & CATEGORIZE MEASURES
  // -------------------------------------------------------------------
  const reqIdMap = new Map();
  const measures = performance.getEntriesByType('measure');

  for (const m of measures) {
    const parts = m.name.split('_');
    const reqId = parts[parts.length - 1];

    if (!reqIdMap.has(reqId)) {
      reqIdMap.set(reqId, {});
    }
    const reqObj = reqIdMap.get(reqId);

    if (m.name.startsWith('0_Total_E2E')) {
      reqObj.e2e = m.duration;
    } else if (m.name.startsWith('1a_SDK_PreProcessing')) {
      b1a_sdkPre.push(m.duration);
      reqObj.b1a = m.duration;
    } else if (m.name.startsWith('2a_GAX_PreProcessing')) {
      b2a_gaxPre.push(m.duration);
      reqObj.b2a = m.duration;
    } else if (m.name.startsWith('3a_grpc_gcp_PreProcessing')) {
      b3a_grpcGcpPre.push(m.duration);
      reqObj.b3a = m.duration;
    } else if (m.name.startsWith('4a_grpc_js_PreProcessing')) {
      b4a_grpcJsPre.push(m.duration);
      reqObj.b4a = m.duration;
    } else if (m.name.startsWith('5a_External_Time_To_First_Header')) {
      b5a_extHeader.push(m.duration);
      reqObj.b5a = m.duration;
    } else if (m.name.startsWith('5b_Server_Execution_To_First_Data')) {
      b5b_extServerExec.push(m.duration);
      reqObj.b5b = m.duration;
    } else if (m.name.startsWith('5_True_External_Flight_To_Data')) {
      b5_extTotal.push(m.duration);
      reqObj.b5 = m.duration;
    } else if (m.name.startsWith('4b_grpc_js_PostProcessing')) {
      b4b_grpcJsPost.push(m.duration);
      reqObj.b4b = m.duration;
    } else if (m.name.startsWith('3b_grpc_gcp_PostProcessing')) {
      b3b_grpcGcpPost.push(m.duration);
      reqObj.b3b = m.duration;
    } else if (m.name.startsWith('2b_GAX_PostProcessing')) {
      b2b_gaxPost.push(m.duration);
      reqObj.b2b = m.duration;
    } else if (m.name.startsWith('1b_SDK_PostProcessing')) {
      b1b_sdkPost.push(m.duration);
      reqObj.b1b = m.duration;
    }
  }

  reqIdMap.forEach(reqObj => {
    const sdkTot = (reqObj.b1a || 0) + (reqObj.b1b || 0);
    const gaxTot = (reqObj.b2a || 0) + (reqObj.b2b || 0);
    const gcpTot = (reqObj.b3a || 0) + (reqObj.b3b || 0);
    const grpcTot = (reqObj.b4a || 0) + (reqObj.b4b || 0);
    const clientTot = sdkTot + gaxTot + gcpTot + grpcTot;
    const e2eTot = reqObj.e2e || clientTot + (reqObj.b5 || 0);

    totalSdkOverhead.push(sdkTot);
    totalGaxOverhead.push(gaxTot);
    totalGrpcGcpOverhead.push(gcpTot);
    totalGrpcJsOverhead.push(grpcTot);
    totalClientOverhead.push(clientTot);
    totalEndToEnd.push(e2eTot);
  });

  performance.clearMarks();
  performance.clearMeasures();

  if (global.gc) global.gc();
  const endHeap = process.memoryUsage().heapUsed;

  // -------------------------------------------------------------------
  // FORMATTED RESULTS OUTPUT
  // -------------------------------------------------------------------
  const printRow = (label, arr) => {
    console.log(
      `${label.padEnd(46)}| ${getAverage(arr).toFixed(3).padStart(8)} | ${getPercentile(arr, 50).toFixed(3).padStart(8)} | ${getPercentile(arr, 90).toFixed(3).padStart(8)} | ${getPercentile(arr, 99).toFixed(3).padStart(8)}`,
    );
  };

  console.log(
    '========================================================================================================',
  );
  console.log('TRUE LATENCY BREAKDOWN (ms)');
  console.log(
    '========================================================================================================',
  );
  console.log(
    'Pipeline Stage                                  | Avg (ms) | P50 (ms) | P90 (ms) | P99 (ms)',
  );
  console.log(
    '--------------------------------------------------------------------------------------------------------',
  );
  console.log('[1. OUTBOUND CLIENT PRE-PROCESSING]');
  printRow('  1a. SDK Setup & Session Checkout   (M1->M2)   ', b1a_sdkPre);
  printRow('  2a. GAX Options & Pipeline Setup   (M2->M2g)  ', b2a_gaxPre);
  printRow('  3a. grpc-gcp Affinity Lookup       (M2g->M2e) ', b3a_grpcGcpPre);
  printRow('  4a. grpc-js Proto Serialization    (M2e->M2s) ', b4a_grpcJsPre);
  console.log(
    '========================================================================================================',
  );
  console.log('[2. TRUE EXTERNAL SERVER & NETWORK FLIGHT]');
  printRow('  5a. Wire Flight to First Header    (M2s->M3h) ', b5a_extHeader);
  printRow(
    '  5b. Server Query Execution to Row  (M3h->M3dg)',
    b5b_extServerExec,
  );
  console.log(
    '  ------------------------------------------------------------------------------------------------------',
  );
  printRow('  5.  TOTAL EXTERNAL TIME TO ROW     (M2s->M3dg)', b5_extTotal);
  console.log(
    '========================================================================================================',
  );
  console.log('[3. INBOUND CLIENT POST-PROCESSING]');
  printRow(
    '  4b. grpc-js Protobuf Decode        (Http2->M3cp)',
    b4b_grpcJsPost,
  );
  printRow(
    '  3b. grpc-gcp Interceptor Dispatch  (M3cp->M3dg)',
    b3b_grpcGcpPost,
  );
  printRow('  2b. GAX Handoff to Spanner SDK     (M3dg->M3x) ', b2b_gaxPost);
  printRow('  1b. SDK Row Decode & Conversions   (M3x->M3s)  ', b1b_sdkPost);
  console.log(
    '========================================================================================================',
  );
  console.log('[4. TOTAL ISOLATED LIBRARY OVERHEAD]');
  printRow(
    '  1. TOTAL SPANNER SDK OVERHEAD      (1a + 1b)  ',
    totalSdkOverhead,
  );
  printRow(
    '  2. TOTAL GOOGLE GAX OVERHEAD       (2a + 2b)  ',
    totalGaxOverhead,
  );
  printRow(
    '  3. TOTAL GRPC-GCP-NODE OVERHEAD    (3a + 3b)  ',
    totalGrpcGcpOverhead,
  );
  printRow(
    '  4. TOTAL GRPC-JS OVERHEAD          (4a + 4b)  ',
    totalGrpcJsOverhead,
  );
  console.log(
    '  ------------------------------------------------------------------------------------------------------',
  );
  printRow(
    '  TOTAL OVERALL CLIENT-SIDE OVERHEAD (All 4)    ',
    totalClientOverhead,
  );
  console.log(
    '========================================================================================================',
  );
  printRow('  TOTAL END-TO-END QUERY LATENCY     (M1->M4)   ', totalEndToEnd);
  console.log(
    '========================================================================================================\n',
  );

  console.log(
    '===================================================================',
  );
  console.log('GLOSSARY: HOW TOTALS ARE CALCULATED');
  console.log(
    '===================================================================',
  );
  console.log(
    '1. TOTAL SPANNER SDK OVERHEAD = SDK Pre-Processing (1a) + SDK Post-Processing (1b)',
  );
  console.log(
    '   - Pre (1a) : Session pool checkout, IAM auth token generation, request validation.',
  );
  console.log(
    '   - Post (1b): PartialResultStream transforming raw JSON row chunks into native JS arrays/types.',
  );
  console.log('');
  console.log(
    '2. TOTAL GOOGLE GAX OVERHEAD = GAX Pre-Processing (2a) + GAX Post-Processing (2b)',
  );
  console.log(
    '   - Pre (2a) : Merging retry options, constructing the GAX API pipeline.',
  );
  console.log(
    '   - Post (2b): GAX StreamProxy catching the data event from grpc-js and emitting it to Spanner.',
  );
  console.log('');
  console.log(
    '3. TOTAL GRPC-GCP-NODE OVERHEAD = grpc-gcp Pre-Processing (3a) + grpc-gcp Post-Processing (3b)',
  );
  console.log(
    '   - Pre (3a) : Reading affinity keys and selecting the cached HTTP/2 channel.',
  );
  console.log(
    '   - Post (3b): Bouncing the data event from the inner network layer up to grpc-js.',
  );
  console.log('');
  console.log(
    '4. TOTAL GRPC-JS OVERHEAD = grpc-js Pre-Processing (4a) + grpc-js Post-Processing (4b)',
  );
  console.log(
    '   - Pre (4a) : Encoding JS objects into Protobuf bytes, generating HTTP/2 frames, socket write.',
  );
  console.log(
    '   - Post (4b): [Unmeasured] Protobuf decode occurs in uninstrumented C++ HTTP/2 native bindings.',
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
