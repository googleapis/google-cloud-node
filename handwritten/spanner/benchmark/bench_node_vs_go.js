#!/usr/bin/env node
/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Benchmark Suite: Node.js vs. Go Official Cloud Spanner Client Libraries
 * 
 * Compares standard customer usage of:
 * - @google-cloud/spanner (Node.js official npm package)
 * - cloud.google.com/go/spanner (Go official client library)
 * 
 * Matrix:
 * - Concurrency levels: [1, 2, 4, 8, 16, 25]
 * - Channel counts    : [1, 2, 4, 8]
 * - Scenarios:
 *   1. Point Select Query (SELECT 1 as col_int, 'CONSTANT' as col_const)
 *   2. 1000 Row Read Query (SELECT * FROM AsyncBenchmarkTable LIMIT 1000)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const { performance } = require('perf_hooks');
const { execFileSync, execSync } = require('child_process');

// Load compiled @google-cloud/spanner client library
const { Spanner } = require('../build/src');

// ════════════════════════════════════════════════════════════════
// BENCHMARK CONFIGURATION
// ════════════════════════════════════════════════════════════════
const PROJECT = process.env.SPANNER_PROJECT || 'span-cloud-testing';
const INSTANCE = process.env.SPANNER_INSTANCE || 'suvham-testing';
const DATABASE = process.env.SPANNER_DATABASE || 'benchmark_db_async';
const TABLE = process.env.SPANNER_TABLE || 'AsyncBenchmarkTable';

const POINT_SELECT_SQL = "SELECT 1 as col_int, 'CONSTANT' as col_const";
const READ_1000_ROWS_SQL = `SELECT * FROM ${TABLE} LIMIT 1000`;

const DURATION_SEC = parseInt(process.env.BENCHMARK_DURATION_SEC || (process.env.SHORT_BENCHMARK ? '3' : '10'), 10);
const WARMUP_SEC = parseInt(process.env.BENCHMARK_WARMUP_SEC || (process.env.SHORT_BENCHMARK ? '1' : '2'), 10);

const CONCURRENCY_LEVELS = [1, 2, 4, 8, 16, 25];
const CHANNEL_COUNTS = [1, 2, 4, 8];

const GO_BENCH_DIR = path.join(__dirname, 'go-bench');
const GO_BENCH_BIN = path.join(GO_BENCH_DIR, 'spanner_go_bench');

function ensureGoBinary() {
  if (!fs.existsSync(GO_BENCH_BIN)) {
    console.log('Compiling Go Spanner benchmark binary...');
    execSync('go build -o spanner_go_bench main.go', {
      cwd: GO_BENCH_DIR,
      stdio: 'inherit',
    });
    console.log('Go binary compiled successfully.\n');
  }
}

function getCpuUsage() {
  const cpus = os.cpus();
  let user = 0;
  let sys = 0;
  let idle = 0;
  for (const cpu of cpus) {
    user += cpu.times.user;
    sys += cpu.times.sys;
    idle += cpu.times.idle;
  }
  return { user, sys, idle, total: user + sys + idle };
}

function measureEventLoopLag() {
  let last = performance.now();
  let maxLag = 0;
  let totalLag = 0;
  let checks = 0;

  const timer = setInterval(() => {
    const now = performance.now();
    const lag = Math.max(0, now - last - 10);
    if (lag > maxLag) maxLag = lag;
    totalLag += lag;
    checks++;
    last = now;
  }, 10);

  return {
    stop: () => {
      clearInterval(timer);
      return {
        maxLagMs: maxLag,
        avgLagMs: checks > 0 ? totalLag / checks : 0,
      };
    },
  };
}

/**
 * Executes query with Node.js client like a customer
 */
async function executeNodeCustomerQuery(database, sql, isStream) {
  if (isStream) {
    const stream = database.runStream({ sql });
    return new Promise((resolve, reject) => {
      let rowCount = 0;
      stream.on('data', () => {
        rowCount++;
      });
      stream.on('error', reject);
      stream.on('end', () => resolve(rowCount));
    });
  } else {
    const [rows] = await database.run({ sql });
    return rows.length;
  }
}

/**
 * Runs Node.js Spanner Benchmark
 */
async function runNodeBenchmark(database, sql, concurrency, durationSec, warmupSec) {
  const isStream = sql.includes('LIMIT 1000');

  // Warmup
  if (warmupSec > 0) {
    const warmupEnd = Date.now() + warmupSec * 1000;
    const warmupWorkers = Math.min(concurrency, 4);
    const warmupPromises = [];
    for (let i = 0; i < warmupWorkers; i++) {
      warmupPromises.push((async () => {
        while (Date.now() < warmupEnd) {
          try {
            await executeNodeCustomerQuery(database, sql, isStream);
          } catch (e) {
            // ignore warmup errors
          }
        }
      })());
    }
    await Promise.all(warmupPromises);
  }

  const latencies = [];
  let errorCount = 0;
  let isRunning = true;
  let activeInFlight = 0;

  const lagTracker = measureEventLoopLag();
  const startCpu = getCpuUsage();
  const startTime = performance.now();

  const worker = async () => {
    while (isRunning) {
      activeInFlight++;
      const reqStart = performance.now();
      try {
        await executeNodeCustomerQuery(database, sql, isStream);
        const reqDuration = performance.now() - reqStart;
        latencies.push(reqDuration);
      } catch (err) {
        errorCount++;
      } finally {
        activeInFlight--;
      }
    }
  };

  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }

  await new Promise(r => setTimeout(r, durationSec * 1000));
  isRunning = false;

  await Promise.all(workers);
  while (activeInFlight > 0) {
    await new Promise(r => setTimeout(r, 10));
  }

  const totalTimeMs = performance.now() - startTime;
  const lagStats = lagTracker.stop();
  const endCpu = getCpuUsage();

  const totalCpuDiff = endCpu.total - startCpu.total;
  const busyCpuDiff = (endCpu.user + endCpu.sys) - (startCpu.user + startCpu.sys);
  const cpuPercent = totalCpuDiff > 0 ? (busyCpuDiff / totalCpuDiff) * 100 : 0;

  latencies.sort((a, b) => a - b);
  const count = latencies.length;
  const p50 = count > 0 ? latencies[Math.floor(count * 0.50)] : 0;
  const p90 = count > 0 ? latencies[Math.floor(count * 0.90)] : 0;
  const p95 = count > 0 ? latencies[Math.floor(count * 0.95)] : 0;
  const p99 = count > 0 ? latencies[Math.floor(count * 0.99)] : 0;
  const sum = latencies.reduce((acc, v) => acc + v, 0);
  const avg = count > 0 ? sum / count : 0;

  return {
    totalTimeMs,
    qps: count / (totalTimeMs / 1000),
    p50,
    p90,
    p95,
    p99,
    avgDuration: avg,
    minDuration: count > 0 ? latencies[0] : 0,
    maxDuration: count > 0 ? latencies[count - 1] : 0,
    errorRate: count + errorCount > 0 ? (errorCount / (count + errorCount)) * 100 : 0,
    total: count,
    maxLagMs: lagStats.maxLagMs,
    avgLagMs: lagStats.avgLagMs,
    cpuUtil: cpuPercent,
  };
}

/**
 * Runs Go Spanner Benchmark using the compiled standalone Go customer client binary
 */
function runGoBenchmark(sql, channels, concurrency, durationSec, warmupSec) {
  const args = [
    '-project', PROJECT,
    '-instance', INSTANCE,
    '-database', DATABASE,
    '-sql', sql,
    '-channels', String(channels),
    '-concurrency', String(concurrency),
    '-duration', String(durationSec),
    '-warmup', String(warmupSec),
    '-json=true'
  ];

  const stdout = execFileSync(GO_BENCH_BIN, args, {
    cwd: GO_BENCH_DIR,
    encoding: 'utf-8',
    maxBuffer: 50 * 1024 * 1024
  });

  return JSON.parse(stdout.trim());
}

async function runScenario(scenarioName, sql) {
  console.log('\n' + '='.repeat(120));
  console.log(`SCENARIO: ${scenarioName}`);
  console.log(`Query: ${sql}`);
  console.log(`Duration: ${DURATION_SEC}s per test point | Warmup: ${WARMUP_SEC}s`);
  console.log('='.repeat(120));

  console.log([
    'Concurrency'.padEnd(12),
    'Channels'.padEnd(10),
    'Node QPS / P50'.padEnd(20),
    'Go QPS / P50'.padEnd(20),
    'Node P95 / P99'.padEnd(20),
    'Go P95 / P99'.padEnd(20),
    'Node CPU'.padEnd(10),
    'Go CPU'.padEnd(10),
    'Go/Node Ratio'.padEnd(14)
  ].join(' | '));
  console.log('-'.repeat(140));

  const scenarioResults = [];

  // Pre-initialize Node.js clients for each channel configuration
  const nodeDatabases = {};
  for (const ch of CHANNEL_COUNTS) {
    const spanner = new Spanner({
      projectId: PROJECT,
      'grpc.gcp.channel_pool.max_size': ch,
    });
    nodeDatabases[ch] = spanner.instance(INSTANCE).database(DATABASE);
    // Prevent unhandled errors from crashing
    nodeDatabases[ch].on('error', () => {});
  }

  for (const concurrency of CONCURRENCY_LEVELS) {
    for (const channels of CHANNEL_COUNTS) {
      const nodeDb = nodeDatabases[channels];

      // 1. Run Node.js Benchmark
      const nodeRes = await runNodeBenchmark(nodeDb, sql, concurrency, DURATION_SEC, WARMUP_SEC);

      // 2. Run Go Benchmark
      const goRes = runGoBenchmark(sql, channels, concurrency, DURATION_SEC, WARMUP_SEC);

      const ratioQps = nodeRes.qps > 0 ? (goRes.qps / nodeRes.qps).toFixed(2) + 'x' : 'N/A';
      const nodeQpsP50 = `${nodeRes.qps.toFixed(1)} / ${nodeRes.p50.toFixed(1)}ms`;
      const goQpsP50 = `${goRes.qps.toFixed(1)} / ${goRes.p50.toFixed(1)}ms`;
      const nodeP95P99 = `${nodeRes.p95.toFixed(1)} / ${nodeRes.p99.toFixed(1)}ms`;
      const goP95P99 = `${goRes.p95.toFixed(1)} / ${goRes.p99.toFixed(1)}ms`;

      console.log([
        String(concurrency).padEnd(12),
        String(channels).padEnd(10),
        nodeQpsP50.padEnd(20),
        goQpsP50.padEnd(20),
        nodeP95P99.padEnd(20),
        goP95P99.padEnd(20),
        `${nodeRes.cpuUtil.toFixed(1)}%`.padEnd(10),
        `${goRes.cpuUtil.toFixed(1)}%`.padEnd(10),
        ratioQps.padEnd(14)
      ].join(' | '));

      scenarioResults.push({
        concurrency,
        channels,
        node: nodeRes,
        go: goRes,
        qpsRatio: nodeRes.qps > 0 ? goRes.qps / nodeRes.qps : 0,
        p50Ratio: nodeRes.p50 > 0 ? goRes.p50 / nodeRes.p50 : 0
      });
    }
    console.log('-'.repeat(140));
  }

  // Close Node clients
  for (const ch of Object.keys(nodeDatabases)) {
    try {
      await nodeDatabases[ch].close();
    } catch (e) {}
  }

  return scenarioResults;
}

function generateMarkdownReport(results) {
  let md = `# Cloud Spanner Official Client Libraries Benchmark: Node.js vs. Go\n\n`;
  md += `This report compares standard customer usage of the official **Node.js client library** (\`@google-cloud/spanner\`) and the official **Go client library** (\`cloud.google.com/go/spanner\`) across multiple concurrency levels and gRPC channel pool sizes.\n\n`;

  md += `## 1. System & Environment Information\n\n`;
  md += `* **OS**: \`${os.type()} ${os.release()} (${os.arch()})\`\n`;
  md += `* **CPU Cores**: \`${os.cpus().length} core(s)\`\n`;
  md += `* **Node.js Version**: \`${process.version}\`\n`;
  md += `* **Database Target**: \`projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}\`\n`;
  md += `* **Duration Per Point**: \`${DURATION_SEC} seconds\` (\`+${WARMUP_SEC}s warmup\`)\n\n`;

  for (const scenario of results) {
    md += `## 2. ${scenario.name}\n\n`;
    md += `**Query**: \`${scenario.sql}\`\n\n`;

    md += `| Concurrency | Channels | Node QPS | Go QPS | Go/Node QPS Ratio | Node P50 | Go P50 | Node P95 | Go P95 | Node CPU | Go CPU |\n`;
    md += `| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n`;

    for (const r of scenario.data) {
      const qpsRatio = r.qpsRatio.toFixed(2) + 'x';
      md += `| **${r.concurrency}** | **${r.channels}** | ${r.node.qps.toFixed(1)} | ${r.go.qps.toFixed(1)} | **${qpsRatio}** | ${r.node.p50.toFixed(2)} ms | ${r.go.p50.toFixed(2)} ms | ${r.node.p95.toFixed(2)} ms | ${r.go.p95.toFixed(2)} ms | ${r.node.cpuUtil.toFixed(1)}% | ${r.go.cpuUtil.toFixed(1)}% |\n`;
    }
    md += `\n`;
  }

  return md;
}

async function main() {
  console.log('================================================================================');
  console.log('  Cloud Spanner Benchmark: Official Node.js vs. Go Client Libraries (Customer API)');
  console.log('================================================================================');
  console.log(`Node.js Version : ${process.version}`);
  console.log(`OS Platform     : ${os.type()} ${os.arch()} (${os.cpus().length} vCPU cores)`);
  console.log(`Target Database : projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}`);
  console.log(`Concurrency Grid: ${CONCURRENCY_LEVELS.join(', ')}`);
  console.log(`Channels Grid   : ${CHANNEL_COUNTS.join(', ')}\n`);

  ensureGoBinary();

  // Scenario 1: Point Select Query
  const pointSelectResults = await runScenario(
    'Scenario 1: Point Select Query (P50 Latency & Throughput)',
    POINT_SELECT_SQL
  );

  // Scenario 2: 1000 Row Read Query
  const read1000Results = await runScenario(
    'Scenario 2: 1000 Row Read Query (Latency & Throughput)',
    READ_1000_ROWS_SQL
  );

  const fullResults = [
    { name: 'Scenario 1: Point Select Query', sql: POINT_SELECT_SQL, data: pointSelectResults },
    { name: 'Scenario 2: 1000 Row Read Query', sql: READ_1000_ROWS_SQL, data: read1000Results }
  ];

  // Save JSON
  const jsonPath = path.join(__dirname, 'benchmark_results_node_vs_go.json');
  fs.writeFileSync(jsonPath, JSON.stringify(fullResults, null, 2));
  console.log(`\nJSON results saved to: ${jsonPath}`);

  // Save Markdown Report
  const mdReport = generateMarkdownReport(fullResults);
  const mdPath = path.join(__dirname, 'BENCHMARK_REPORT_NODE_VS_GO.md');
  fs.writeFileSync(mdPath, mdReport);
  console.log(`Markdown report saved to: ${mdPath}`);

  console.log('\nBenchmark completed successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error('Benchmark execution error:', err);
  process.exit(1);
});
