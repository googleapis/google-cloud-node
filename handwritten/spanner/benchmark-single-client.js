const { performance } = require('perf_hooks');

const projectId = 'appdev-soda-spanner-staging';
const instanceId = 'knut-test-ycsb';
const databaseId = 'spring-data-jpa';

const SQL = `SELECT
  MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2) = 0 AS random_bool,
  CAST(GENERATE_UUID() AS BYTES) AS random_bytes,
  DATE_FROM_UNIX_DATE(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2932896))) AS random_date,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT32) AS random_float32,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT64) AS random_float64,
  MAKE_INTERVAL(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 10)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 12)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 28)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 24)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60))) AS random_interval,
  TO_JSON('{"key": "' || GENERATE_UUID() || '"}') AS random_json,
  ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 9007199254740991)) AS random_int64,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS NUMERIC) AS random_numeric,
  GENERATE_UUID() AS random_string,
  TIMESTAMP_MICROS(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 1230219000000000))) AS random_timestamp,
  NEW_UUID() AS random_uuid
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

const numRows = 30000;
const iterations = 10;

async function runBenchmark(db, queryOptions) {
  const start = performance.now();
  let firstRowTime = null;
  let count = 0;

  const query = {
    sql: SQL,
    params: { num_rows: numRows },
    types: { num_rows: 'int64' },
    ...queryOptions
  };

  const stream = db.runStream(query);
  const keepAlive = setInterval(() => {}, 10); // Keep Node.js event loop alive
  await new Promise((resolve, reject) => {
    stream
      .on('data', (row) => {
        if (firstRowTime === null) {
          firstRowTime = performance.now() - start;
        }
        if (queryOptions.arrow) {
          // In Arrow mode, we receive a Table object containing all rows in the batch
          count += row.numRows;
        } else {
          count++;
        }
      })
      .on('end', () => {
        clearInterval(keepAlive);
        if (count !== numRows) {
          reject(new Error(`Row count mismatch: expected ${numRows}, got ${count}`));
        } else {
          resolve();
        }
      })
      .on('error', (err) => {
        clearInterval(keepAlive);
        reject(err);
      });
  });

  const end = performance.now();
  const total = end - start;
  const rows2toN = total - (firstRowTime || 0);
  const cpuTime = stream.cpuTime || 0;
  return { total, rows2toN, cpuTime };
}

function calculateStats(runs) {
  const totals = runs.map(r => r.total);
  const rows2toNs = runs.map(r => r.rows2toN);
  const cpuTimes = runs.map(r => r.cpuTime);
  
  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  const stddev = (arr, mean) => Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / arr.length);

  const meanTotal = avg(totals);
  const meanRows2toN = avg(rows2toNs);
  const meanCpuTime = avg(cpuTimes);

  return {
    meanTotal,
    stddevTotal: stddev(totals, meanTotal),
    meanRows2toN,
    stddevRows2toN: stddev(rows2toNs, meanRows2toN),
    meanCpuTime,
    stddevCpuTime: stddev(cpuTimes, meanCpuTime)
  };
}

async function main() {
  console.log('=== BENCHMARK: SINGLE PERSISTENT CLIENT SETUP ===\n');

  // ==========================================
  //            1. PURE JS STACK
  // ==========================================
  console.log('Initializing Pure JS Client...');
  process.env.USE_NATIVE_PROXY = 'false';
  process.env.USE_ARROW_PARSER = 'false';
  const { Spanner } = require('/Users/loite/google-cloud-node/handwritten/spanner/build/src');
  const spannerJs = new Spanner({ projectId });
  const dbJs = spannerJs.instance(instanceId).database(databaseId);

  // Warmup run to lease session and establish connection
  console.log('Warming up Pure JS connection pool...');
  await runBenchmark(dbJs, {});

  // Run JS Mode: Standard Row
  const jsRowRuns = [];
  console.log(`Running ${iterations} iterations for Pure JS (Standard Row)...`);
  for (let i = 0; i < iterations; i++) {
    const res = await runBenchmark(dbJs, { json: false });
    console.log(`  Iteration ${i + 1}: E2E=${res.total.toFixed(2)}ms, Rows2..N=${res.rows2toN.toFixed(2)}ms, CPU=${res.cpuTime.toFixed(2)}ms`);
    jsRowRuns.push(res);
  }
  console.log('Done.');

  // Run JS Mode: JSON (wrapNumbers: false)
  const jsJsonRuns = [];
  console.log(`Running ${iterations} iterations for Pure JS (JSON, wrapNumbers: false)...`);
  for (let i = 0; i < iterations; i++) {
    const res = await runBenchmark(dbJs, { json: true, jsonOptions: { wrapNumbers: false } });
    console.log(`  Iteration ${i + 1}: E2E=${res.total.toFixed(2)}ms, Rows2..N=${res.rows2toN.toFixed(2)}ms, CPU=${res.cpuTime.toFixed(2)}ms`);
    jsJsonRuns.push(res);
  }
  console.log('Done.');

  // ==========================================
  //          2. NATIVE PROXY STACKS
  // ==========================================
  console.log('\nInitializing Native Proxy Client...');
  process.env.USE_NATIVE_PROXY = 'true';
  process.env.USE_ARROW_PARSER = 'true';
  
  const spannerNative = new Spanner({ projectId });
  const dbNative = spannerNative.instance(instanceId).database(databaseId);

  console.log('Warming up Native Proxy connection pool...');
  await runBenchmark(dbNative, {});

  // Run Rust Mode: Standard Row (Compatibility)
  const nativeRowRuns = [];
  console.log(`Running ${iterations} iterations for Native Proxy (Compatibility Standard Row)...`);
  for (let i = 0; i < iterations; i++) {
    const res = await runBenchmark(dbNative, { json: false });
    console.log(`  Iteration ${i + 1}: E2E=${res.total.toFixed(2)}ms, Rows2..N=${res.rows2toN.toFixed(2)}ms, CPU=${res.cpuTime.toFixed(2)}ms`);
    nativeRowRuns.push(res);
  }
  console.log('Done.');

  // Run Rust Mode: JSON (Compatibility, wrapNumbers: false)
  const nativeJsonRuns = [];
  console.log(`Running ${iterations} iterations for Native Proxy (Compatibility JSON)...`);
  for (let i = 0; i < iterations; i++) {
    const res = await runBenchmark(dbNative, { json: true, jsonOptions: { wrapNumbers: false } });
    console.log(`  Iteration ${i + 1}: E2E=${res.total.toFixed(2)}ms, Rows2..N=${res.rows2toN.toFixed(2)}ms, CPU=${res.cpuTime.toFixed(2)}ms`);
    nativeJsonRuns.push(res);
  }
  console.log('Done.');

  // Run Rust Mode: Pure Arrow
  const arrowRuns = [];
  console.log(`Running ${iterations} iterations for Native Proxy (Pure Arrow)...`);
  for (let i = 0; i < iterations; i++) {
    const res = await runBenchmark(dbNative, { arrow: true });
    console.log(`  Iteration ${i + 1}: E2E=${res.total.toFixed(2)}ms, Rows2..N=${res.rows2toN.toFixed(2)}ms, CPU=${res.cpuTime.toFixed(2)}ms`);
    arrowRuns.push(res);
  }
  console.log('Done.');

  // ==========================================
  //             CALCULATE STATS
  // ==========================================
  const jsRowStats = calculateStats(jsRowRuns);
  const jsJsonStats = calculateStats(jsJsonRuns);
  const nativeRowStats = calculateStats(nativeRowRuns);
  const nativeJsonStats = calculateStats(nativeJsonRuns);
  const arrowStats = calculateStats(arrowRuns);

  console.log('\n### Comparative Benchmark Results (Single Warmed-Up Client, 10 Iterations) ###\n');
  console.log('| Stack | Mean E2E (ms) | Mean Rows 2..N (ms) | Mean CPU Decoding (ms) | Std Dev CPU (ms) |');
  console.log('|---|---|---|---|---|');
  console.log(`| **1. Pure JS (Standard Row)** | ${jsRowStats.meanTotal.toFixed(2)} | ${jsRowStats.meanRows2toN.toFixed(2)} | ${jsRowStats.meanCpuTime.toFixed(2)} | ${jsRowStats.stddevCpuTime.toFixed(2)} |`);
  console.log(`| **2. Pure JS (JSON wrapNumbers: false)** | ${jsJsonStats.meanTotal.toFixed(2)} | ${jsJsonStats.meanRows2toN.toFixed(2)} | ${jsJsonStats.meanCpuTime.toFixed(2)} | ${jsJsonStats.stddevCpuTime.toFixed(2)} |`);
  console.log(`| **3. Native Proxy (Compatibility Row)** | ${nativeRowStats.meanTotal.toFixed(2)} | ${nativeRowStats.meanRows2toN.toFixed(2)} | ${nativeRowStats.meanCpuTime.toFixed(2)} | ${nativeRowStats.stddevCpuTime.toFixed(2)} |`);
  console.log(`| **4. Native Proxy (Compatibility JSON)** | ${nativeJsonStats.meanTotal.toFixed(2)} | ${nativeJsonStats.meanRows2toN.toFixed(2)} | ${nativeJsonStats.meanCpuTime.toFixed(2)} | ${nativeJsonStats.stddevCpuTime.toFixed(2)} |`);
  console.log(`| **5. Native Proxy (Pure Arrow)** | ${arrowStats.meanTotal.toFixed(2)} | ${arrowStats.meanRows2toN.toFixed(2)} | ${arrowStats.meanCpuTime.toFixed(2)} | ${arrowStats.stddevCpuTime.toFixed(2)} |`);
}

main().catch(console.error);
