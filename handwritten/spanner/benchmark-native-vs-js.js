const { Spanner } = require('/Users/loite/google-cloud-node/handwritten/spanner/build/src');
const { performance } = require('perf_hooks');

const projectId = 'appdev-soda-spanner-staging';
const instanceId = 'knut-test-ycsb';
const databaseId = 'spring-data-jpa';

const SQL = `SELECT
  MOD(n, 2) = 0 AS random_bool,
  CAST('bytes-constant' AS BYTES) AS random_bytes,
  DATE '2026-07-03' AS random_date,
  CAST(1.23 AS FLOAT32) AS random_float32,
  CAST(4.56 AS FLOAT64) AS random_float64,
  MAKE_INTERVAL(1, 2, 3, 4, 5, 6) AS random_interval,
  TO_JSON('{"key": "json-value"}') AS random_json,
  n AS random_int64,
  CAST(7.89 AS NUMERIC) AS random_numeric,
  'string-constant-value-to-benchmark-performance-correctly-without-spanner-side-overhead' AS random_string,
  TIMESTAMP '2026-07-03T11:00:00Z' AS random_timestamp,
  'd935acb2-35a6-45c0-be5b-c1c75e298604' AS random_uuid
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

const numRows = 30000;
const iterations = 10;

async function executeQuery(database, options, useNativeProxy) {
  process.env.USE_NATIVE_PROXY = useNativeProxy ? 'true' : 'false';

  const query = {
    sql: SQL,
    params: { num_rows: numRows },
    types: { num_rows: 'int64' },
    ...options
  };

  const startTime = performance.now();
  let firstRowTime = null;
  let rowCount = 0;

  const stream = database.runStream(query);

  await new Promise((resolve, reject) => {
    stream
      .on('data', (row) => {
        if (firstRowTime === null) {
          firstRowTime = performance.now() - startTime;
        }
        if (options.arrow) {
          rowCount += row.numRows;
        } else {
          rowCount++;
        }
      })
      .on('end', () => {
        if (rowCount !== numRows) {
          reject(new Error(`Row count mismatch: expected ${numRows}, got ${rowCount}`));
        } else {
          resolve();
        }
      })
      .on('error', reject);
  });

  const totalTime = performance.now() - startTime;
  const deliveryTime = totalTime - (firstRowTime || 0);

  return { totalTime, deliveryTime, rowCount };
}

function calculateStats(runs) {
  const totals = runs.map(r => r.totalTime);
  const deliveries = runs.map(r => r.deliveryTime);

  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  const stddev = (arr, mean) => Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / arr.length);

  const meanTotal = avg(totals);
  const meanDelivery = avg(deliveries);

  return {
    meanTotal,
    stddevTotal: stddev(totals, meanTotal),
    meanDelivery,
    stddevDelivery: stddev(deliveries, meanDelivery)
  };
}

async function run() {
  console.log(`Starting Benchmark: ${numRows} rows, ${iterations} iterations per mode.\n`);

  const spanner = new Spanner({ projectId });
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const modes = [
    { name: '1. Pure JS - Standard Row', options: { json: false }, useNativeProxy: false },
    { name: '2. Pure JS - JSON Mode', options: { json: true, jsonOptions: { wrapNumbers: false } }, useNativeProxy: false },
    { name: '3. Native Proxy - Standard Row (Compatibility)', options: { json: false }, useNativeProxy: true },
    { name: '4. Native Proxy - JSON Mode (Compatibility)', options: { json: true, jsonOptions: { wrapNumbers: false } }, useNativeProxy: true },
    { name: '5. Native Proxy - Pure Arrow', options: { arrow: true }, useNativeProxy: true }
  ];

  const results = {};

  try {
    for (const mode of modes) {
      console.log(`\n=== Mode: ${mode.name} ===`);
      
      // Warm-up run
      console.log('  Performing warm-up run...');
      await executeQuery(database, mode.options, mode.useNativeProxy);

      // Iterations
      const runs = [];
      for (let i = 0; i < iterations; i++) {
        process.stdout.write(`  Iteration ${i + 1}/${iterations}... `);
        const res = await executeQuery(database, mode.options, mode.useNativeProxy);
        runs.push(res);
        console.log(`E2E = ${res.totalTime.toFixed(2)}ms, Delivery = ${res.deliveryTime.toFixed(2)}ms`);
      }

      results[mode.name] = calculateStats(runs);
    }

    console.log('\n========================================================================================');
    console.log(`                     BENCHMARK RESULTS (${numRows} Rows, ${iterations} Iterations)`);
    console.log('========================================================================================\n');
    console.log('| Stack | Mean E2E (ms) | Std Dev E2E (ms) | Mean Delivery (ms) | Std Dev Delivery (ms) |');
    console.log('|---|---|---|---|---|');

    for (const name in results) {
      const stats = results[name];
      console.log(`| **${name}** | ${stats.meanTotal.toFixed(2)} | ${stats.stddevTotal.toFixed(2)} | ${stats.meanDelivery.toFixed(2)} | ${stats.stddevDelivery.toFixed(2)} |`);
    }

    console.log('\n========================================================================================\n');

  } catch (err) {
    console.error('Benchmark failed:', err);
  } finally {
    await database.close();
  }
}

run();
