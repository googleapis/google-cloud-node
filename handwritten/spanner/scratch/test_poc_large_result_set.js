const { Spanner } = require('../build/src/index');

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
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS NUMERIC) AS random_numeric,
  GENERATE_UUID() AS random_string,
  TIMESTAMP_MICROS(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 1230219000000000))) AS random_timestamp,
  NEW_UUID() AS random_uuid
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

async function main() {
  const spanner = new Spanner({ projectId });
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  console.log(`Connecting to: projects/${projectId}/instances/${instanceId}/databases/${databaseId}`);
  console.log(`USE_RUST_POC2 is set to: ${process.env.USE_RUST_POC2}`);

  const query = {
    sql: SQL,
    params: {
      num_rows: 10000,
    },
    types: {
      num_rows: 'int64',
    },
  };

  try {
    console.log('Executing warmup query (ignored)...');
    const [warmupRows] = await database.run(query);
    console.log(`Warmup completed (retrieved ${warmupRows.length} rows). Sleeping 1s for credentials/sessions to settle...`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const runs = 10;
    const durations = [];
    let lastRows;
    for (let i = 1; i <= runs; i++) {
      console.log(`Executing run ${i}/${runs}...`);
      const startTime = Date.now();
      const [rows] = await database.run(query);
      const duration = Date.now() - startTime;
      console.log(`  Run ${i} completed in ${duration}ms`);
      durations.push(duration);
      lastRows = rows;
    }
    const avgDuration = durations.reduce((a, b) => a + b, 0) / runs;
    console.log(`\n=== BENCHMARK RESULTS ===`);
    console.log(`Individual runs: ${durations.join(', ')} ms`);
    console.log(`Average warm duration: ${avgDuration.toFixed(2)} ms\n`);

    const rows = lastRows;

    if (rows.length !== 10000) {
      console.error(`❌ Error: Expected 10,000 rows but got ${rows.length}!`);
      process.exit(1);
    }

    const firstRow = rows[0];
    console.log('--- Verifying Decoded Types for First Row ---');
    let typeChecksPassed = true;

    const expectedTypes = {
      random_bool: (v) => typeof v === 'boolean',
      random_bytes: (v) => v instanceof Buffer,
      random_date: (v) => v.constructor.name === 'SpannerDate' || v instanceof Date,
      random_float32: (v) => v.constructor.name === 'Float32',
      random_float64: (v) => v.constructor.name === 'Float',
      random_interval: (v) => v.constructor.name === 'Interval',
      random_json: (v) => typeof v === 'string',
      random_int64: (v) => v.constructor.name === 'Int',
      random_numeric: (v) => v.constructor.name === 'Numeric',
      random_string: (v) => typeof v === 'string',
      random_timestamp: (v) => v.constructor.name === 'PreciseDate',
      random_uuid: (v) => typeof v === 'string',
    };

    for (const cell of firstRow) {
      const checker = expectedTypes[cell.name];
      if (!checker) {
        console.error(`❌ Unknown column: ${cell.name}`);
        typeChecksPassed = false;
        continue;
      }
      const passed = checker(cell.value);
      console.log(`Column '${cell.name}': value: ${cell.name === 'random_bytes' ? 'Buffer' : JSON.stringify(cell.value)}, type: ${typeof cell.value}, constructor: ${cell.value && cell.value.constructor ? cell.value.constructor.name : 'none'} -> ${passed ? '✅ PASSED' : '❌ FAILED'}`);
      if (!passed) {
        typeChecksPassed = false;
      }
    }

    if (typeChecksPassed) {
      console.log('✅ Success: All decoded values in the row array have the correct constructor types!');
      process.exit(0);
    } else {
      console.error('❌ Error: Decoded values type mismatch!');
      process.exit(1);
    }

  } catch (err) {
    console.error('Error executing query:', err);
    process.exit(1);
  } finally {
    await database.close();
  }
}

main();
