#!/usr/bin/env node
/**
 * Real-Spanner launcher for the vendored spanner-client-benchmarks.
 *
 * Supplies default project/instance/database/table so a run can be started with
 * no arguments, and guarantees that SPANNER_NATIVE_CORE is present in the real
 * process environment (the Go core snapshots the environment when its shared
 * library loads, so a value assigned to process.env from JS is invisible to it).
 *
 * The benchmark CLI itself is spawned unmodified.
 *
 * Usage:
 *   node run_benchmark.js <workload> [extra CLI args...]
 *
 *   workload: point-select | read-narrow-result-set | read-large-result-set
 *
 * Env overrides:
 *   SPANNER_NATIVE_CORE=go   run through the Go shared core (default: stock JS)
 *   SPANNER_NATIVE_CHANNELS  gRPC channel count for the core (default 4)
 *   BENCH_PROJECT / BENCH_INSTANCE / BENCH_DATABASE / BENCH_TABLE
 *   BENCH_DURATION           default 30s
 *   BENCH_THREADS            default 1
 *   BENCH_METRICS_CONSOLE=0  disable the local console summary
 *   BENCH_CLOUD_METRICS=1    export to Cloud Monitoring instead of console
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

// Defaults:
// projects/span-cloud-testing/instances/suvham-testing/databases/benchmark_db_async
const PROJECT = process.env.BENCH_PROJECT || 'span-cloud-testing';
const INSTANCE = process.env.BENCH_INSTANCE || 'suvham-testing';
const DATABASE = process.env.BENCH_DATABASE || 'benchmark_db_async';
const TABLE = process.env.BENCH_TABLE || 'AsyncBenchmarkTable';

const DURATION = process.env.BENCH_DURATION || '30s';
const THREADS = process.env.BENCH_THREADS || '1';

const WORKLOAD = process.argv[2] || 'read-narrow-result-set';
const EXTRA_ARGS = process.argv.slice(3);

// point-select issues `SELECT * FROM <table> WHERE id = @id`. The parameter is
// formatted as a STRING key (`user-<n>`) to match AsyncBenchmarkTable. Set
// POINT_SELECT_ID_FORMAT=int64 for a table with an INT64 `id` column.
if (WORKLOAD === 'point-select') {
  const idFormat = process.env.POINT_SELECT_ID_FORMAT === 'int64'
    ? 'int64'
    : `string ("${process.env.POINT_SELECT_ID_PREFIX ?? 'user-'}<n>")`;
  console.log(`[launcher] point-select id parameter type: ${idFormat}`);
}

const usingCore = ['go', '1', 'true'].includes(
  (process.env.SPANNER_NATIVE_CORE || '').toLowerCase(),
);

const cloudMetrics = process.env.BENCH_CLOUD_METRICS === '1';
const consoleMetrics = !cloudMetrics && process.env.BENCH_METRICS_CONSOLE !== '0';

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
  '--duration',
  DURATION,
  ...(cloudMetrics ? [] : ['--no-metrics']),
  WORKLOAD,
  '-t',
  TABLE,
  '--threads',
  THREADS,
  ...EXTRA_ARGS,
];

console.log(
  `[launcher] target  : projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}`,
);
console.log(`[launcher] table   : ${TABLE}`);
console.log(
  `[launcher] path    : ${usingCore ? 'GO SHARED CORE' : 'stock pure-JS'}`,
);
console.log(`[launcher] metrics : ${cloudMetrics ? 'Cloud Monitoring' : 'console'}`);
console.log(`[launcher] node ${args.join(' ')}\n`);

const child = spawn(process.execPath, args, {
  cwd: BENCH_DIR,
  stdio: 'inherit',
  env: {
    ...process.env,
    GOOGLE_CLOUD_PROJECT: PROJECT,
  },
});

child.on('exit', code => process.exit(code === null ? 1 : code));
