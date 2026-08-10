/**
 * Apples-to-apples Spanner shared-core benchmark.
 *
 * Runs one native arm per process against a paired Node.js baseline at the
 * exact design-document shapes: 1/100/1000 rows and concurrency 1/16.
 */

const enableDirectPathVars = [
  'GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS',
  'GOOGLE_CLOUD_ENABLE_DIRECT_PATH',
];
const presentDirectPathVars = enableDirectPathVars.filter(name =>
  Object.prototype.hasOwnProperty.call(process.env, name)
);
if (presentDirectPathVars.length > 0) {
  throw new Error(
    `DirectPath enable variables must be absent, found: ${presentDirectPathVars.join(', ')}`
  );
}
process.env.GOOGLE_CLOUD_DISABLE_DIRECT_PATH = 'true';
process.env.DISABLE_DIRECT_PATH = 'true';
process.env.SPANNER_GO_DIRECT_DESERIALIZATION = 'true';
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

const fs = require('fs');
const os = require('os');
const path = require('path');
const {execFileSync} = require('child_process');
const {performance} = require('perf_hooks');
const {NativeSpannerDatabase} = require('./poc_bridge.js');
const {NativeBinding} = require('./native_binding.js');

const PROJECT = process.env.SPANNER_BENCHMARK_PROJECT || 'span-cloud-testing';
const INSTANCE = process.env.SPANNER_BENCHMARK_INSTANCE || 'irahul-load-test';
const DATABASE = process.env.SPANNER_BENCHMARK_DATABASE;
const TABLE = process.env.SPANNER_BENCHMARK_TABLE;
const QUERY_TEMPLATE = process.env.SPANNER_BENCHMARK_QUERY_TEMPLATE ||
  (TABLE ? `SELECT * FROM ${TABLE} LIMIT {rows}` : undefined);
const ENGINE = (process.env.BENCHMARK_ENGINE || 'go').toLowerCase();
const ARM = process.env.BENCHMARK_ARM || ENGINE;
const CREDENTIAL_PROVIDER = process.env.SPANNER_BENCHMARK_CREDENTIAL_PROVIDER;
const ROW_COUNTS = [1, 100, 1000];
const CONCURRENCY_LEVELS = [1, 16];
const DURATION_MS = Number(process.env.BENCHMARK_DURATION_MS || 30_000);
const WARMUP_MS = Number(process.env.BENCHMARK_WARMUP_MS || 5_000);
const REPETITIONS = Number(process.env.BENCHMARK_REPETITIONS || 3);
const VERIFY_ONLY = process.env.BENCHMARK_VERIFY_BINDINGS === '1';
const CAPTURE_ONLY = process.env.BENCHMARK_CAPTURE_ONLY === '1';
const OUTPUT = process.env.BENCHMARK_OUTPUT || `benchmark_results_${ARM}.json`;
const CAPTURE_DIR = process.env.BENCHMARK_CAPTURE_DIR;

function commandOutput(command, args, fallback = 'unknown') {
  try {
    return execFileSync(command, args, {encoding: 'utf8'}).trim();
  } catch (_) {
    return fallback;
  }
}

function validateCredentialProvider() {
  if (CREDENTIAL_PROVIDER !== 'vm-metadata') {
    throw new Error(
      'SPANNER_BENCHMARK_CREDENTIAL_PROVIDER must be vm-metadata for this comparison'
    );
  }

  const credentialVariables = [
    'GOOGLE_APPLICATION_CREDENTIALS',
    'CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE',
    'SPANNER_NODE_CREDENTIALS',
  ];
  const presentVariables = credentialVariables.filter(name =>
    Object.prototype.hasOwnProperty.call(process.env, name)
  );
  if (presentVariables.length > 0) {
    throw new Error(
      `VM metadata auth requires credential variables to be absent, found: ${presentVariables.join(', ')}`
    );
  }

  const wellKnownAdc = path.join(
    os.homedir(),
    '.config',
    'gcloud',
    'application_default_credentials.json'
  );
  if (fs.existsSync(wellKnownAdc)) {
    throw new Error(`VM metadata auth requires ${wellKnownAdc} to be absent`);
  }

  const gcloudOnPath = (process.env.PATH || '')
    .split(path.delimiter)
    .filter(Boolean)
    .some(directory => fs.existsSync(path.join(directory, 'gcloud')));
  if (gcloudOnPath) {
    throw new Error(
      'VM metadata auth requires gcloud to be absent from PATH because gcp_auth prefers it over metadata'
    );
  }
}

function percentile(sorted, fraction) {
  if (sorted.length === 0) return 0;
  const index = Math.min(sorted.length - 1, Math.ceil(sorted.length * fraction) - 1);
  return sorted[Math.max(0, index)];
}

async function runBenchmark(execute, concurrency, durationMs) {
  const latencies = [];
  let errors = 0;
  let stopping = false;
  const start = performance.now();

  async function worker() {
    while (!stopping) {
      const requestStart = performance.now();
      try {
        await execute();
        latencies.push(performance.now() - requestStart);
      } catch (error) {
        errors++;
        if (errors <= 3) console.error(`[${ARM}] request error:`, error.message);
      }
    }
  }

  const workers = Array.from({length: concurrency}, () => worker());
  await new Promise(resolve => setTimeout(resolve, durationMs));
  stopping = true;
  await Promise.all(workers);
  const elapsedMs = performance.now() - start;
  latencies.sort((a, b) => a - b);
  const totalLatency = latencies.reduce((sum, value) => sum + value, 0);

  return {
    totalTimeMs: elapsedMs,
    qps: latencies.length / (elapsedMs / 1000),
    p50: percentile(latencies, 0.50),
    p90: percentile(latencies, 0.90),
    p95: percentile(latencies, 0.95),
    p99: percentile(latencies, 0.99),
    avgDuration: latencies.length ? totalLatency / latencies.length : 0,
    minDuration: latencies[0] || 0,
    maxDuration: latencies[latencies.length - 1] || 0,
    errorRate: latencies.length + errors ? errors / (latencies.length + errors) : 0,
    total: latencies.length,
  };
}

function aggregate(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return {
    min: sorted[0],
    median: percentile(sorted, 0.50),
    max: sorted[sorted.length - 1],
  };
}

function environmentMetadata() {
	const gitSha = process.env.BENCHMARK_HARNESS_COMMIT ||
	  commandOutput('git', ['rev-parse', 'HEAD']);
  const trackedStatus = commandOutput(
    'git',
    ['status', '--porcelain', '--untracked-files=no'],
    'status-unavailable'
  );
  return {
    hostname: os.hostname(),
    machineShape: process.env.BENCHMARK_MACHINE_SHAPE || 'unspecified',
    vcpuCount: os.cpus().length,
    platform: `${os.platform()}-${os.arch()}`,
    nodeVersion: process.version,
    goVersion: process.env.BENCHMARK_GO_VERSION || commandOutput('go', ['version']),
    rustVersion: process.env.BENCHMARK_RUST_VERSION || commandOutput('rustc', ['--version']),
    credentialProvider: CREDENTIAL_PROVIDER,
    armCommitSha: process.env.BENCHMARK_ARM_COMMIT || gitSha,
    armTreeCleanAtBuild: process.env.BENCHMARK_ARM_TREE_CLEAN || 'unknown',
    harnessCommitSha: gitSha,
    harnessTrackedTreeClean: trackedStatus === '',
    targetDatabase: `projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE || '<unset>'}`,
	queryTemplate: QUERY_TEMPLATE || '<unset>',
    directPath: {
      enabled: false,
      enableVariablesAbsentAtProcessStart: true,
      googleCloudDisableDirectPath: process.env.GOOGLE_CLOUD_DISABLE_DIRECT_PATH,
      disableDirectPath: process.env.DISABLE_DIRECT_PATH,
      transport: ENGINE === 'rust' ? 'rust GFE-only implementation' : 'Go explicit GFE grpc.Dial path',
    },
  };
}

async function verifyBinding() {
  const binding = new NativeBinding(1, ENGINE);
  binding.close();
  console.log(JSON.stringify({
    verified: true,
    arm: ARM,
    engine: ENGINE,
    environment: environmentMetadata(),
  }, null, 2));
}

async function captureRows(client, rows, concurrency) {
  if (!CAPTURE_DIR) return;
  fs.mkdirSync(CAPTURE_DIR, {recursive: true});
	const query = queryForRows(rows);
  const results = await Promise.all(
    Array.from({length: concurrency}, () => client.executeSqlNative(query))
  );
  const filename = path.join(CAPTURE_DIR, `${ARM}-rows${rows}-c${concurrency}.json`);
  fs.writeFileSync(filename, JSON.stringify(results));
}

function queryForRows(rows) {
	if (!QUERY_TEMPLATE || !QUERY_TEMPLATE.includes('{rows}')) {
	  throw new Error('SPANNER_BENCHMARK_QUERY_TEMPLATE must contain {rows}');
	}
	return QUERY_TEMPLATE.replaceAll('{rows}', String(rows));
}

async function main() {
  if (!['go', 'rust'].includes(ENGINE)) {
    throw new Error(`BENCHMARK_ENGINE must be go or rust, got ${ENGINE}`);
  }
  validateCredentialProvider();
  if (VERIFY_ONLY) {
    await verifyBinding();
    return;
  }
	if (!DATABASE || !QUERY_TEMPLATE) {
	  throw new Error('SPANNER_BENCHMARK_DATABASE and a table or query template are required');
	}
  if (CAPTURE_ONLY && !CAPTURE_DIR) {
    throw new Error('BENCHMARK_CAPTURE_DIR is required with BENCHMARK_CAPTURE_ONLY=1');
  }
  if (!Number.isInteger(REPETITIONS) || REPETITIONS < 3) {
    throw new Error(`BENCHMARK_REPETITIONS must be at least 3, got ${REPETITIONS}`);
  }
  if (!Number.isFinite(DURATION_MS) || DURATION_MS < 1000) {
    throw new Error(`BENCHMARK_DURATION_MS must be at least 1000, got ${DURATION_MS}`);
  }

  const environment = environmentMetadata();
  console.log('='.repeat(100));
  console.log(`Arm ${ARM}: ${ENGINE}; p95 latency improvement versus paired Node.js baseline`);
  console.log(JSON.stringify(environment, null, 2));
  console.log('='.repeat(100));

  const clients = new Map();
  for (const concurrency of CONCURRENCY_LEVELS) {
    clients.set(
      concurrency,
      new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, concurrency, ENGINE)
    );
  }

  const shapes = [];
	try {
	  for (const rows of ROW_COUNTS) {
		const query = queryForRows(rows);
      for (const concurrency of CONCURRENCY_LEVELS) {
        const client = clients.get(concurrency);
        await captureRows(client, rows, concurrency);
        if (CAPTURE_ONLY) {
          console.log(`captured rows=${rows} concurrency=${concurrency}`);
          continue;
        }
        console.log(`\nrows=${rows} concurrency=${concurrency}: warmup`);
        await Promise.all([
          runBenchmark(() => client.executeSqlJs(query), concurrency, WARMUP_MS),
          runBenchmark(() => client.executeSqlNative(query), concurrency, WARMUP_MS),
        ]);

        const runs = [];
        for (let repetition = 1; repetition <= REPETITIONS; repetition++) {
          let jsBaseline;
          let native;
          if ((repetition + rows + concurrency) % 2 === 0) {
            jsBaseline = await runBenchmark(() => client.executeSqlJs(query), concurrency, DURATION_MS);
            native = await runBenchmark(() => client.executeSqlNative(query), concurrency, DURATION_MS);
          } else {
            native = await runBenchmark(() => client.executeSqlNative(query), concurrency, DURATION_MS);
            jsBaseline = await runBenchmark(() => client.executeSqlJs(query), concurrency, DURATION_MS);
          }
          if (jsBaseline.errorRate !== 0 || native.errorRate !== 0) {
            throw new Error(`non-zero error rate at rows=${rows}, concurrency=${concurrency}, repetition=${repetition}`);
          }
          const latencyImprovementPercent =
            ((jsBaseline.p95 - native.p95) / jsBaseline.p95) * 100;
          runs.push({repetition, jsBaseline, native, latencyImprovementPercent});
          console.log(
            `run=${repetition} js.p95=${jsBaseline.p95.toFixed(2)}ms ` +
            `native.p95=${native.p95.toFixed(2)}ms improvement=${latencyImprovementPercent.toFixed(2)}%`
          );
        }

        shapes.push({
          rows,
          concurrency,
          sql: query,
          metric: 'p95 latency improvement percent versus paired Node.js baseline',
          runs,
          spread: {
            jsP95Ms: aggregate(runs.map(run => run.jsBaseline.p95)),
            nativeP95Ms: aggregate(runs.map(run => run.native.p95)),
            latencyImprovementPercent: aggregate(runs.map(run => run.latencyImprovementPercent)),
          },
        });
      }
    }
  } finally {
    for (const client of clients.values()) await client.close();
  }

  if (CAPTURE_ONLY) {
    console.log(`Captured all correctness shapes under ${CAPTURE_DIR}`);
    return;
  }

  const output = {
    schemaVersion: 1,
    suiteName: 'Spanner shared core exact-shape comparison',
    arm: ARM,
    engine: ENGINE,
    directPath: false,
    environment,
    repetitions: REPETITIONS,
    durationMs: DURATION_MS,
    warmupMs: WARMUP_MS,
    shapes,
  };
  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2) + '\n');
  console.log(`\nSaved ${OUTPUT}`);
}

main().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
