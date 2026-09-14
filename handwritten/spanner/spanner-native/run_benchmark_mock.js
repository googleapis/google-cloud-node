#!/usr/bin/env node
/**
 * Local smoke-test launcher for the vendored spanner-client-benchmarks.
 *
 * Why this exists
 * ---------------
 * The benchmark's built-in `--mock` flag binds its mock Spanner server to
 * `127.0.0.1:0` (a random port) *inside the benchmark process*. The Go shared
 * core, however, must be told its endpoint via the `SPANNER_EMULATOR_HOST`
 * environment variable, and it reads that variable from the real process
 * environment when its shared library loads. A port that is only discovered
 * after the process has started is therefore unusable.
 *
 * So this launcher:
 *   1. starts the benchmark's OWN MockSpannerServer here, on a known port,
 *   2. spawns the unmodified benchmark CLI as a child process with both
 *      `--host <that port>` (a supported, documented CLI flag) and
 *      `SPANNER_EMULATOR_HOST` exported in the child's real environment.
 *
 * No benchmark source is modified, and no `--mock` flag is used.
 *
 * Usage:
 *   node run_benchmark_mock.js <workload> [extra CLI args...]
 *
 *   workload: point-select | read-narrow-result-set | read-large-result-set
 *
 * Env:
 *   SPANNER_NATIVE_CORE=go   run through the Go shared core (default: stock JS)
 *   SPANNER_NATIVE_CHANNELS  gRPC channel count for the core (default 4)
 *   BENCH_DURATION           benchmark duration (default 10s)
 *   BENCH_THREADS            concurrency (default 1)
 *   BENCH_TABLE              table name (default 'benchmark_table')
 */

'use strict';

const path = require('path');
const {spawn} = require('child_process');

const BENCH_DIR = path.resolve(
  __dirname,
  '..',
  'benchmark',
  'spanner-client-benchmarks',
);

const WORKLOAD = process.argv[2] || 'point-select';
const EXTRA_ARGS = process.argv.slice(3);

const PROJECT = 'test-project';
const INSTANCE = 'test-instance';
const DATABASE = 'test-database';
const TABLE = process.env.BENCH_TABLE || 'benchmark_table';
const DURATION = process.env.BENCH_DURATION || '10s';
const THREADS = process.env.BENCH_THREADS || '1';

/**
 * The benchmark's own mock server resolves `google/api/*.proto` by probing for
 * `<benchmark>/node_modules/google-gax/build/protos`. When @google-cloud/spanner
 * is installed from npm, google-gax is hoisted there automatically. We instead
 * depend on the local package via a `file:` symlink, which prevents hoisting,
 * so google-gax lives under handwritten/spanner/node_modules. Recreate the
 * layout npm would have produced. This touches only module resolution — no
 * benchmark source is modified.
 */
function ensureGaxVisible() {
  const fs = require('fs');
  const link = path.join(BENCH_DIR, 'node_modules', 'google-gax');
  if (fs.existsSync(link)) {
    return;
  }
  const target = path.resolve(__dirname, '..', 'node_modules', 'google-gax');
  if (!fs.existsSync(target)) {
    console.warn(`[launcher] google-gax not found at ${target}`);
    return;
  }
  fs.symlinkSync(target, link, 'dir');
  console.log('[launcher] linked google-gax into benchmark node_modules');
}

async function main() {
  ensureGaxVisible();

  let MockSpannerServer;
  try {
    ({MockSpannerServer} = require(
      path.join(BENCH_DIR, 'dist', 'src', 'spanner', 'mock-spanner.js'),
    ));
  } catch (e) {
    console.error(
      `Could not load the compiled mock server from ${BENCH_DIR}/dist.\n` +
        "Run 'corepack npm run build' in that directory first.\n",
    );
    throw e;
  }

  const mockServer = new MockSpannerServer();
  mockServer.registerAllMockResults(TABLE);
  const port = await mockServer.start();
  const host = `127.0.0.1:${port}`;
  console.log(`[launcher] mock Spanner listening on ${host}`);

  const usingCore = ['go', '1', 'true'].includes(
    (process.env.SPANNER_NATIVE_CORE || '').toLowerCase(),
  );
  console.log(
    `[launcher] path = ${usingCore ? 'GO SHARED CORE' : 'stock pure-JS'}`,
  );

  // Print a local latency summary unless explicitly disabled. The benchmark
  // itself only exports to Cloud Monitoring, so without this a local run
  // produces no numbers.
  const consoleMetrics = process.env.BENCH_METRICS_CONSOLE !== '0';

  const args = [
    ...(consoleMetrics
      ? ['--require', path.join(__dirname, 'otel_console_preload.js')]
      : []),
    path.join(BENCH_DIR, 'dist', 'index.js'),
    '-p',
    PROJECT,
    '-i',
    INSTANCE,
    '-d',
    DATABASE,
    '--host',
    host,
    '--duration',
    DURATION,
    '--no-metrics',
    WORKLOAD,
    '-t',
    TABLE,
    '--threads',
    THREADS,
    ...EXTRA_ARGS,
  ];

  console.log(`[launcher] node ${args.join(' ')}\n`);

  const child = spawn(process.execPath, args, {
    cwd: BENCH_DIR,
    stdio: 'inherit',
    env: {
      ...process.env,
      // The Go core reads this from the real environment at library load.
      SPANNER_EMULATOR_HOST: host,
      GOOGLE_CLOUD_PROJECT: PROJECT,
    },
  });

  child.on('exit', async code => {
    try {
      await mockServer.stop();
    } catch (e) {
      /* ignore */
    }
    process.exit(code === null ? 1 : code);
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
