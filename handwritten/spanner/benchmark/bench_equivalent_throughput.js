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
 * Equivalent-Throughput (QPS-Paced) CPU & Latency Benchmark Suite
 *
 * Compares CPU utilization and request latencies at fixed target throughputs:
 *   Target QPS Tiers: [50, 100, 200, 500, 1000, 3000, 5000]
 *
 * Across 3 Spanner Client Architectures:
 *   1. Pure Node.js Client       (@google-cloud/spanner, SPANNER_NATIVE_CORE=off, Default DCP)
 *   2. Go Shared Core Node.js    (@google-cloud/spanner, SPANNER_NATIVE_CORE=go,  QPS-Scaled Channels)
 *   3. Pure Go Client            (cloud.google.com/go/spanner,                    Default DCP)
 *
 * Channel Configuration Details:
 *   - Pure Node & Pure Go use their default Dynamic Channel Pooling (DCP).
 *   - Go Shared Core uses a static gRPC connection pool (`SPANNER_NATIVE_CHANNELS`)
 *     and does NOT have DCP; therefore channel count is scaled according to QPS
 *     (matching DCP's maxConcurrentStreamsLowWatermark=25 and maxSize=10):
 *       50 QPS   -> 1 channel
 *       100 QPS  -> 1 channel
 *       200 QPS  -> 2 channels
 *       500 QPS  -> 2 channels
 *       1000 QPS -> 4 channels
 *       3000 QPS -> 8 channels
 *       5000 QPS -> 10 channels
 *
 * Usage:
 *   node handwritten/spanner/benchmark/bench_equivalent_throughput.js [options]
 *
 * Options:
 *   --project=<id>         GCP Project ID (default: span-cloud-testing)
 *   --instance=<id>        Spanner Instance ID (default: suvham-testing)
 *   --database=<id>        Spanner Database ID (default: benchmark_db_async)
 *   --table=<name>         Spanner Table Name (default: AsyncBenchmarkTable)
 *   --workload=<type>      pointSelect (default), select1, or limit1000
 *   --sql=<query>          Optional custom SQL query override
 *   --qps=<list>           Comma-separated target QPS list (default: 50,100,200,500,1000,3000,5000)
 *   --duration=<sec>       Measured duration in seconds per QPS point (default: 10)
 *   --warmup=<sec>         Warmup duration in seconds per QPS point (default: 3)
 *   --mock                 Run against an in-process mock Spanner gRPC server (for dry-run verification)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const {performance} = require('perf_hooks');
const {execFileSync, execSync} = require('child_process');

// ---------------------------------------------------------------------------
// CLI Argument Parsing
// ---------------------------------------------------------------------------
const rawArgs = process.argv.slice(2);

function getArg(name, defaultValue) {
  const prefix = `--${name}=`;
  const match = rawArgs.find(a => a.startsWith(prefix));
  if (match) return match.slice(prefix.length);
  const idx = rawArgs.indexOf(`--${name}`);
  if (idx !== -1 && rawArgs[idx + 1] && !rawArgs[idx + 1].startsWith('--')) {
    return rawArgs[idx + 1];
  }
  return defaultValue;
}

function hasFlag(name) {
  return rawArgs.includes(`--${name}`) || rawArgs.includes(`--${name}=true`);
}

const PROJECT =
  process.env.SPANNER_PROJECT || getArg('project', 'span-cloud-testing');
const INSTANCE =
  process.env.SPANNER_INSTANCE || getArg('instance', 'suvham-testing');
const DATABASE =
  process.env.SPANNER_DATABASE || getArg('database', 'benchmark_db_async');
const TABLE =
  process.env.SPANNER_TABLE || getArg('table', 'AsyncBenchmarkTable');
const WORKLOAD = getArg('workload', 'pointSelect');
const CUSTOM_SQL = getArg('sql', '');
const DURATION_SEC = parseInt(
  process.env.BENCHMARK_DURATION_SEC || getArg('duration', '10'),
  10,
);
const WARMUP_SEC = parseInt(
  process.env.BENCHMARK_WARMUP_SEC || getArg('warmup', '3'),
  10,
);
const TARGET_QPS_LIST = getArg('qps', '50,100,200,500,1000,3000,5000')
  .split(',')
  .map(s => parseInt(s.trim(), 10))
  .filter(n => !Number.isNaN(n) && n > 0);
const IS_MOCK = hasFlag('mock');
const WORKER_MODE = getArg('worker-mode', '');
const WORKER_TARGET_QPS = parseInt(getArg('target-qps', '100'), 10);

const SPANNER_ROOT = path.resolve(__dirname, '..');
const GO_BENCH_DIR = path.join(__dirname, 'go-bench');
const GO_QPS_BIN = path.join(GO_BENCH_DIR, 'spanner_go_qps_bench');

/**
 * Computes the static channel count for Go Shared Core according to target QPS.
 * Since Go Shared Core does not have Dynamic Channel Pooling (DCP), this scales
 * channels proportionally to QPS up to DCP's default maxSize of 10 channels.
 */
function getGoSharedCoreChannelsForQps(qps) {
  const fixedOverride = getArg('go-core-channels', '');
  if (fixedOverride) {
    return Math.max(1, parseInt(fixedOverride, 10));
  }
  if (qps <= 100) return 1;
  if (qps <= 500) return 2;
  if (qps <= 1000) return 4;
  if (qps <= 3000) return 8;
  return 10;
}

// ---------------------------------------------------------------------------
// Linux /proc/stat & Process CPU Measurement Utilities
// ---------------------------------------------------------------------------
function readLinuxProcStat() {
  try {
    const content = fs.readFileSync('/proc/stat', 'utf8');
    const cpuLine = content.split('\n').find(l => l.startsWith('cpu '));
    if (!cpuLine) return null;
    const parts = cpuLine
      .trim()
      .split(/\s+/)
      .slice(1)
      .map(x => Number(x));
    if (parts.length < 7) return null;
    const [user, nice, system, idle, iowait, irq, softirq, steal = 0] = parts;
    const total = user + nice + system + idle + iowait + irq + softirq + steal;
    const busy = total - idle - iowait;
    return {total, busy};
  } catch (e) {
    return null;
  }
}

function readOsCpusSnapshot() {
  const procSnap = readLinuxProcStat();
  if (procSnap) return procSnap;
  const cpus = os.cpus();
  let busy = 0;
  let idle = 0;
  for (const cpu of cpus) {
    busy += cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.irq;
    idle += cpu.times.idle;
  }
  return {total: busy + idle, busy};
}

// ---------------------------------------------------------------------------
// Worker Mode: Executes a single QPS-paced test point in an isolated Node process
// ---------------------------------------------------------------------------
async function runNodeWorkerProcess() {
  const isGoSharedCore = WORKER_MODE === 'go-shared-core';
  process.env.SPANNER_NATIVE_CORE = isGoSharedCore ? 'go' : 'off';
  process.env.SPANNER_NATIVE_QUIET = '1';

  const channels = isGoSharedCore
    ? getGoSharedCoreChannelsForQps(WORKER_TARGET_QPS)
    : 0;
  if (isGoSharedCore) {
    process.env.SPANNER_NATIVE_CHANNELS = String(channels);
  }

  const {Spanner} = require(path.join(SPANNER_ROOT, 'build', 'src'));
  const spanner = new Spanner({
    projectId: PROJECT,
    disableBuiltInMetrics: true,
  });
  const instance = spanner.instance(INSTANCE);
  const database = instance.database(DATABASE);
  database.on('error', () => {});

  const pointSelectSql =
    CUSTOM_SQL || `SELECT * FROM ${TABLE} WHERE id = @id`;
  const limit1000Sql =
    CUSTOM_SQL || `SELECT * FROM ${TABLE} LIMIT 1000`;
  const select1Sql =
    CUSTOM_SQL || "SELECT 1 as col_int, 'CONSTANT' as col_const";

  async function executeSingleQuery() {
    if (CUSTOM_SQL) {
      if (CUSTOM_SQL.includes('@id')) {
        const randomId = `user-${Math.floor(Math.random() * 100000)}`;
        const [rows] = await database.run({
          sql: CUSTOM_SQL,
          params: {id: randomId},
        });
        for (let i = 0; i < rows.length; i++) {
          rows[i].toJSON();
        }
        return rows.length;
      }
      const [rows] = await database.run({sql: CUSTOM_SQL});
      for (let i = 0; i < rows.length; i++) {
        rows[i].toJSON();
      }
      return rows.length;
    }

    if (WORKLOAD === 'pointSelect') {
      const randomId = `user-${Math.floor(Math.random() * 100000)}`;
      const [rows] = await database.run({
        sql: pointSelectSql,
        params: {id: randomId},
      });
      for (let i = 0; i < rows.length; i++) {
        rows[i].toJSON();
      }
      return rows.length;
    } else if (WORKLOAD === 'limit1000') {
      const [rows] = await database.run({sql: limit1000Sql});
      for (let i = 0; i < rows.length; i++) {
        rows[i].toJSON();
      }
      return rows.length;
    } else {
      const [rows] = await database.run({sql: select1Sql});
      for (let i = 0; i < rows.length; i++) {
        rows[i].toJSON();
      }
      return rows.length;
    }
  }

  /**
   * High-rate unpaced warmup to ensure V8 TurboFan JIT compiles all hot paths
   * (~1,500+ invocations) and warms up all gRPC channels in the pool before
   * starting the low-QPS paced measurement window.
   */
  async function runJitAndChannelWarmup(durationSec) {
    const warmupEnd = performance.now() + durationSec * 1000.0;
    const warmupConcurrency = Math.min(8, Math.max(4, channels || 4));
    const workers = [];
    for (let i = 0; i < warmupConcurrency; i++) {
      workers.push(
        (async () => {
          while (performance.now() < warmupEnd) {
            try {
              await executeSingleQuery();
            } catch (e) {
              // ignore warmup error
            }
          }
        })(),
      );
    }
    await Promise.all(workers);
  }

  /**
   * Computes optimal worker concurrency using Little's Law (L = lambda * W)
   * with a 1.75x headroom factor so low-QPS tiers (e.g. 50, 100 QPS) use
   * 1-2 staggered workers instead of 8+ workers colliding in micro-bursts on 1 vCPU.
   */
  function getWorkersForTargetQps(targetQps) {
    // Assume ~7ms baseline RTT; add 1.75x headroom for tail variance
    const littleLawWorkers = Math.ceil(targetQps * 0.007 * 1.75);
    return Math.min(128, Math.max(1, littleLawWorkers));
  }

  async function runPacedWindow(targetQps, durationSec) {
    const workersCount = getWorkersForTargetQps(targetQps);
    const intervalMs = 1000.0 / targetQps;
    const durationMs = durationSec * 1000.0;

    const latencies = [];
    let errors = 0;
    const startTimeMs = performance.now();
    const endTimeMs = startTimeMs + durationMs;
    let nextSlotMs = startTimeMs;

    const startVmCpu = readOsCpusSnapshot();
    const startProcCpu = process.cpuUsage();

    const workerLoop = async () => {
      while (true) {
        const slotMs = nextSlotMs;
        nextSlotMs += intervalMs;
        if (slotMs >= endTimeMs) {
          break;
        }

        const nowMs = performance.now();
        const waitMs = slotMs - nowMs;

        if (waitMs > 1.5) {
          await new Promise(r => setTimeout(r, Math.round(waitMs)));
        } else if (waitMs > 0.1) {
          await new Promise(r => setImmediate(r));
        } else if (-waitMs > 50) {
          // Client is saturated and falling behind target schedule; advance slot pointer
          // to current clock so we measure steady max saturation without queue buildup.
          nextSlotMs = nowMs + intervalMs;
        }

        if (performance.now() >= endTimeMs) {
          break;
        }

        const reqStart = performance.now();
        try {
          await executeSingleQuery();
          latencies.push(performance.now() - reqStart);
        } catch (err) {
          errors++;
        }
      }
    };

    const workers = [];
    for (let i = 0; i < workersCount; i++) {
      workers.push(workerLoop());
    }
    await Promise.all(workers);

    const elapsedMs = performance.now() - startTimeMs;
    const procDiff = process.cpuUsage(startProcCpu);
    const endVmCpu = readOsCpusSnapshot();

    const procCpuMs = (procDiff.user + procDiff.system) / 1000.0;
    const numCores = os.cpus().length || 1;
    const procCpuUtil =
      elapsedMs > 0 ? (procCpuMs / (elapsedMs * numCores)) * 100.0 : 0;

    let vmCpuUtil = procCpuUtil;
    if (startVmCpu && endVmCpu && endVmCpu.total > startVmCpu.total) {
      vmCpuUtil =
        ((endVmCpu.busy - startVmCpu.busy) /
          (endVmCpu.total - startVmCpu.total)) *
        100.0;
    }

    return {
      latencies,
      errors,
      elapsedMs,
      vmCpuUtil,
      procCpuUtil,
      procCpuMs,
      workersCount,
    };
  }

  // 1. Full JIT & Channel Pool Warmup (ensures V8 TurboFan tier-up even at 50 QPS)
  const effectiveWarmupSec = Math.max(WARMUP_SEC, 3);
  await runJitAndChannelWarmup(effectiveWarmupSec);
  // Brief 100ms settle pause so in-flight warmup events drain completely
  await new Promise(r => setTimeout(r, 100));

  // 2. Measured Run
  const res = await runPacedWindow(WORKER_TARGET_QPS, DURATION_SEC);
  res.latencies.sort((a, b) => a - b);
  const count = res.latencies.length;
  const sum = res.latencies.reduce((acc, v) => acc + v, 0);

  const output = {
    client: isGoSharedCore ? 'Go Shared Core (Node)' : 'Pure Node',
    channelConfig: isGoSharedCore ? `Static (${channels} ch)` : 'DCP (Default)',
    targetQps: WORKER_TARGET_QPS,
    achievedQps: res.elapsedMs > 0 ? count / (res.elapsedMs / 1000.0) : 0,
    totalTimeMs: res.elapsedMs,
    total: count,
    errors: res.errors,
    errorRate:
      count + res.errors > 0 ? (res.errors / (count + res.errors)) * 100.0 : 0,
    avg: count > 0 ? sum / count : 0,
    min: count > 0 ? res.latencies[0] : 0,
    max: count > 0 ? res.latencies[count - 1] : 0,
    p50: count > 0 ? res.latencies[Math.floor(count * 0.5)] : 0,
    p90: count > 0 ? res.latencies[Math.floor(count * 0.9)] : 0,
    p95: count > 0 ? res.latencies[Math.floor(count * 0.95)] : 0,
    p99: count > 0 ? res.latencies[Math.floor(count * 0.99)] : 0,
    vmCpuUtil: res.vmCpuUtil,
    procCpuUtil: res.procCpuUtil,
    cpuUtil: IS_MOCK ? res.procCpuUtil : (res.procCpuUtil > 0 ? res.procCpuUtil : res.vmCpuUtil),
    cpuMsPerReq: count > 0 ? res.procCpuMs / count : 0,
    workersUsed: res.workersCount,
  };

  try {
    await database.close();
  } catch (e) {
    // ignore
  }

  console.log('__BENCHMARK_JSON_START__');
  console.log(JSON.stringify(output));
  console.log('__BENCHMARK_JSON_END__');
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Build & Environment Preparation
// ---------------------------------------------------------------------------
function ensureArtifactsBuilt() {
  // 1. Check compiled TypeScript in handwritten/spanner/build
  const buildIndex = path.join(SPANNER_ROOT, 'build', 'src', 'index.js');
  if (!fs.existsSync(buildIndex)) {
    console.log('Building @google-cloud/spanner TypeScript sources...');
    execSync('npm run compile', {cwd: SPANNER_ROOT, stdio: 'inherit'});
  }

  // 2. Check Go Shared Core addon (spanner_go.node & libspanner_go.so)
  const nativeAddonPath = path.join(
    SPANNER_ROOT,
    'spanner-native',
    'spanner_go.node',
  );
  if (!fs.existsSync(nativeAddonPath)) {
    console.log('Building Go Shared Core native addon (spanner_go.node)...');
    const buildSh = path.join(
      SPANNER_ROOT,
      'spanner-native',
      'spanner-go',
      'build.sh',
    );
    execSync(`bash "${buildSh}"`, {
      cwd: path.dirname(buildSh),
      stdio: 'inherit',
    });
  }

  // 3. Check Pure Go QPS Benchmark binary
  if (!fs.existsSync(GO_QPS_BIN)) {
    console.log('Compiling Pure Go QPS benchmark binary...');
    execSync('go build -o spanner_go_qps_bench qps_bench.go', {
      cwd: GO_BENCH_DIR,
      stdio: 'inherit',
    });
  }
}

// ---------------------------------------------------------------------------
// Child Process Invokers for Each Client Architecture
// ---------------------------------------------------------------------------
function spawnAsync(cmd, args, options) {
  const {spawn} = require('child_process');
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      ...options,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', chunk => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', chunk => {
      stderr += chunk.toString();
    });
    child.on('error', reject);
    child.on('close', code => {
      if (code !== 0) {
        return reject(
          new Error(
            `Child process (${cmd}) exited with code ${code}\nSTDERR:\n${stderr}\nSTDOUT:\n${stdout}`,
          ),
        );
      }
      resolve(stdout);
    });
  });
}

async function invokeNodeClientPoint(workerMode, targetQps, extraEnv = {}) {
  const args = [
    __filename,
    `--worker-mode=${workerMode}`,
    `--target-qps=${targetQps}`,
    `--project=${PROJECT}`,
    `--instance=${INSTANCE}`,
    `--database=${DATABASE}`,
    `--table=${TABLE}`,
    `--workload=${WORKLOAD}`,
    `--duration=${DURATION_SEC}`,
    `--warmup=${WARMUP_SEC}`,
  ];
  if (CUSTOM_SQL) {
    args.push(`--sql=${CUSTOM_SQL}`);
  }

  const stdout = await spawnAsync(process.execPath, args, {
    cwd: __dirname,
    env: {...process.env, ...extraEnv},
  });

  const startIdx = stdout.indexOf('__BENCHMARK_JSON_START__');
  const endIdx = stdout.indexOf('__BENCHMARK_JSON_END__');
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Failed to parse JSON output from worker (${workerMode}):\n${stdout}`,
    );
  }
  const jsonStr = stdout
    .slice(startIdx + '__BENCHMARK_JSON_START__'.length, endIdx)
    .trim();
  return JSON.parse(jsonStr);
}

async function invokePureGoPoint(targetQps, extraEnv = {}) {
  const args = [
    '-project',
    PROJECT,
    '-instance',
    INSTANCE,
    '-database',
    DATABASE,
    '-table',
    TABLE,
    '-workload',
    WORKLOAD,
    '-target-qps',
    String(targetQps),
    '-duration',
    String(DURATION_SEC),
    '-warmup',
    String(WARMUP_SEC),
    '-channels',
    '0', // 0 = Default Dynamic Channel Pooling (DCP)
    '-json=true',
  ];
  if (CUSTOM_SQL) {
    args.push('-sql', CUSTOM_SQL);
  }

  const stdout = await spawnAsync(GO_QPS_BIN, args, {
    cwd: GO_BENCH_DIR,
    env: {...process.env, ...extraEnv},
  });

  const lines = stdout
    .trim()
    .split('\n')
    .filter(l => l.trim().startsWith('{'));
  return JSON.parse(lines[lines.length - 1]);
}

// ---------------------------------------------------------------------------
// Optional Local Mock Spanner Server (for --mock dry-run verification)
// ---------------------------------------------------------------------------
function startLocalMockSpannerServer() {
  const grpc = require('@grpc/grpc-js');
  const protoLoader = require('@grpc/proto-loader');
  const protoDir = path.join(SPANNER_ROOT, 'protos');
  const pkgDef = protoLoader.loadSync('google/spanner/v1/spanner.proto', {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [
      protoDir,
      path.join(SPANNER_ROOT, 'node_modules/google-gax/build/protos'),
      path.join(SPANNER_ROOT, 'node_modules/google-proto-files'),
    ],
  });
  const proto = grpc.loadPackageDefinition(pkgDef);
  const spannerService = proto.google.spanner.v1.Spanner.service;
  const sessionName = `projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}/sessions/mock-mux-session`;

  const fields = [{name: 'id', type: {code: 'STRING'}}];
  for (let i = 0; i < 10; i++) {
    fields.push({name: `field${i}`, type: {code: 'STRING'}});
  }
  const values = [{stringValue: 'user-1'}];
  for (let i = 0; i < 10; i++) {
    values.push({stringValue: `mock-value-column-${i}-payload`});
  }

  const server = new grpc.Server();
  server.addService(spannerService, {
    CreateSession: (call, cb) =>
      cb(null, {name: sessionName, multiplexed: true}),
    BatchCreateSessions: (call, cb) =>
      cb(null, {session: [{name: sessionName, multiplexed: true}]}),
    GetSession: (call, cb) => cb(null, {name: sessionName, multiplexed: true}),
    DeleteSession: (call, cb) => cb(null, {}),
    ExecuteStreamingSql: call => {
      call.write({
        metadata: {
          rowType: {fields},
          transaction: {id: Buffer.from('tx-1')},
        },
        values,
      });
      call.end();
    },
    ExecuteSql: (call, cb) => {
      cb(null, {
        metadata: {rowType: {fields}},
        rows: [{values}],
      });
    },
  });

  return new Promise((resolve, reject) => {
    server.bindAsync(
      '127.0.0.1:0',
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) return reject(err);
        resolve({server, host: `127.0.0.1:${port}`});
      },
    );
  });
}

// ---------------------------------------------------------------------------
// Markdown Report Generator
// ---------------------------------------------------------------------------
function generateMarkdownReport(rows, queryDescription) {
  const numCores = os.cpus().length;
  const cpuModel = os.cpus()[0] ? os.cpus()[0].model : 'Unknown CPU';

  let md = '# Cloud Spanner Equivalent-Throughput (QPS-Paced) Benchmark Report\n\n';
  md +=
    'Compares **CPU Utilization (%)**, **CPU Time per Request (ms/req)**, and **Latency (P50 / P95 / P99)** across equivalent target throughputs (`50, 100, 200, 500, 1000, 3000, 5000` QPS) for:\n';
  md +=
    '1. **Pure Node.js Client** (`@google-cloud/spanner` with `SPANNER_NATIVE_CORE=off`, Default **DCP**)\n';
  md +=
    '2. **Go Shared Core Node.js Client** (`@google-cloud/spanner` with `SPANNER_NATIVE_CORE=go`, **QPS-Scaled Static Channels**)\n';
  md +=
    '3. **Pure Go Client** (`cloud.google.com/go/spanner`, Default **DCP**)\n\n';

  md += '## 1. Environment & Configuration\n\n';
  md += `* **OS / Arch**: \`${os.type()} ${os.release()} (${os.arch()})\`\n`;
  md += `* **CPU Cores**: \`${numCores}x ${cpuModel}\`\n`;
  md += `* **Node.js Version**: \`${process.version}\`\n`;
  md += `* **Target Database**: \`projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}\`\n`;
  md += `* **Workload Query**: \`${queryDescription}\`\n`;
  md += `* **Duration per QPS Tier**: \`${DURATION_SEC}s measured (+${WARMUP_SEC}s warmup)\`\n\n`;

  md += '## 2. CPU Utilization & Achieved Throughput Comparison\n\n';
  md +=
    '| Target QPS | Pure Node QPS (DCP) | Go Shared Core QPS (Channels) | Pure Go QPS (DCP) | Pure Node CPU % | Go Shared Core CPU % | Pure Go CPU % | Node / Go-Core CPU Ratio | Node / Pure-Go CPU Ratio |\n';
  md +=
    '| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n';

  for (const r of rows) {
    const nodeCoreRatio =
      r.goCore.cpuUtil > 0
        ? `${(r.pureNode.cpuUtil / r.goCore.cpuUtil).toFixed(2)}x`
        : 'N/A';
    const nodeGoRatio =
      r.pureGo.cpuUtil > 0
        ? `${(r.pureNode.cpuUtil / r.pureGo.cpuUtil).toFixed(2)}x`
        : 'N/A';

    md += `| **${r.targetQps}** | ${r.pureNode.achievedQps.toFixed(1)} (\`DCP\`) | ${r.goCore.achievedQps.toFixed(1)} (\`${r.goCore.channelConfig}\`) | ${r.pureGo.achievedQps.toFixed(1)} (\`DCP\`) | **${r.pureNode.cpuUtil.toFixed(1)}%** (${r.pureNode.cpuMsPerReq.toFixed(2)} ms/req) | **${r.goCore.cpuUtil.toFixed(1)}%** (${r.goCore.cpuMsPerReq.toFixed(2)} ms/req) | **${r.pureGo.cpuUtil.toFixed(1)}%** (${r.pureGo.cpuMsPerReq.toFixed(2)} ms/req) | **${nodeCoreRatio}** | **${nodeGoRatio}** |\n`;
  }

  md += '\n## 3. Latency Comparison (P50 / P95 / P99 in ms)\n\n';
  md +=
    '| Target QPS | Pure Node P50 / P95 / P99 | Go Shared Core P50 / P95 / P99 | Pure Go P50 / P95 / P99 |\n';
  md += '| :---: | :---: | :---: | :---: |\n';

  for (const r of rows) {
    md += `| **${r.targetQps}** | ${r.pureNode.p50.toFixed(2)} / ${r.pureNode.p95.toFixed(2)} / ${r.pureNode.p99.toFixed(2)} ms | ${r.goCore.p50.toFixed(2)} / ${r.goCore.p95.toFixed(2)} / ${r.goCore.p99.toFixed(2)} ms | ${r.pureGo.p50.toFixed(2)} / ${r.pureGo.p95.toFixed(2)} / ${r.pureGo.p99.toFixed(2)} ms |\n`;
  }

  return md;
}

// ---------------------------------------------------------------------------
// Main Orchestrator
// ---------------------------------------------------------------------------
async function main() {
  if (WORKER_MODE) {
    await runNodeWorkerProcess();
    return;
  }

  ensureArtifactsBuilt();

  let mockServerObj = null;
  const extraEnv = {};
  if (IS_MOCK) {
    mockServerObj = await startLocalMockSpannerServer();
    extraEnv.SPANNER_EMULATOR_HOST = mockServerObj.host;
  }

  const queryDescription =
    CUSTOM_SQL ||
    (WORKLOAD === 'pointSelect'
      ? `SELECT * FROM ${TABLE} WHERE id = @id`
      : WORKLOAD === 'limit1000'
        ? `SELECT * FROM ${TABLE} LIMIT 1000`
        : "SELECT 1 as col_int, 'CONSTANT' as col_const");

  console.log('='.repeat(148));
  console.log(
    '  CLOUD SPANNER EQUIVALENT-THROUGHPUT BENCHMARK: PURE NODE (DCP) vs. GO SHARED CORE (NODE) vs. PURE GO (DCP)',
  );
  console.log('='.repeat(148));
  console.log(`Node.js Version   : ${process.version}`);
  console.log(
    `OS / Platform     : ${os.type()} ${os.release()} (${os.arch()}) - ${os.cpus().length} vCPU(s)`,
  );
  console.log(
    `Target Database   : projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}`,
  );
  console.log(`Workload / Query  : [${WORKLOAD}] ${queryDescription}`);
  console.log(`Target QPS Grid   : ${TARGET_QPS_LIST.join(', ')} QPS`);
  console.log(
    `Channel Configs   : Pure Node = DCP (Default) | Pure Go = DCP (Default) | Go Shared Core = Static scaled per QPS (1..10 ch)`,
  );
  console.log(
    `Window Duration   : ${DURATION_SEC}s measured (+${WARMUP_SEC}s warmup) per test point`,
  );
  if (IS_MOCK) {
    console.log(`Mode              : MOCK SERVER (${mockServerObj.host})`);
  }
  console.log('='.repeat(148));

  console.log(
    [
      'Target QPS'.padEnd(10),
      'Pure Node QPS'.padEnd(15),
      'Go Core QPS (Ch)'.padEnd(20),
      'Pure Go QPS'.padEnd(14),
      'Node CPU %'.padEnd(12),
      'GoCore CPU %'.padEnd(13),
      'PureGo CPU %'.padEnd(13),
      'Node P50/P99'.padEnd(17),
      'GoCore P50/P99'.padEnd(17),
      'PureGo P50/P99'.padEnd(17),
    ].join(' | '),
  );
  console.log('-'.repeat(148));

  const results = [];

  for (const targetQps of TARGET_QPS_LIST) {
    // 1. Run Pure Node Client (SPANNER_NATIVE_CORE=off, Default DCP)
    const pureNodeRes = await invokeNodeClientPoint(
      'pure-node',
      targetQps,
      extraEnv,
    );

    // 2. Run Go Shared Core Node Client (SPANNER_NATIVE_CORE=go, QPS-Scaled Channels)
    const goCoreRes = await invokeNodeClientPoint(
      'go-shared-core',
      targetQps,
      extraEnv,
    );

    // 3. Run Pure Go Client (Default DCP)
    const pureGoRes = await invokePureGoPoint(targetQps, extraEnv);

    const chCount = getGoSharedCoreChannelsForQps(targetQps);
    const goCoreQpsStr = `${goCoreRes.achievedQps.toFixed(1)} (${chCount}ch)`;
    const nodeP50P99 = `${pureNodeRes.p50.toFixed(1)}/${pureNodeRes.p99.toFixed(1)}ms`;
    const goCoreP50P99 = `${goCoreRes.p50.toFixed(1)}/${goCoreRes.p99.toFixed(1)}ms`;
    const pureGoP50P99 = `${pureGoRes.p50.toFixed(1)}/${pureGoRes.p99.toFixed(1)}ms`;

    console.log(
      [
        String(targetQps).padEnd(10),
        pureNodeRes.achievedQps.toFixed(1).padEnd(15),
        goCoreQpsStr.padEnd(20),
        pureGoRes.achievedQps.toFixed(1).padEnd(14),
        `${pureNodeRes.cpuUtil.toFixed(1)}%`.padEnd(12),
        `${goCoreRes.cpuUtil.toFixed(1)}%`.padEnd(13),
        `${pureGoRes.cpuUtil.toFixed(1)}%`.padEnd(13),
        nodeP50P99.padEnd(17),
        goCoreP50P99.padEnd(17),
        pureGoP50P99.padEnd(17),
      ].join(' | '),
    );

    results.push({
      targetQps,
      goCoreChannels: chCount,
      pureNode: pureNodeRes,
      goCore: goCoreRes,
      pureGo: pureGoRes,
    });
  }

  console.log('='.repeat(148));

  const jsonPath = path.join(
    __dirname,
    'benchmark_equivalent_throughput.json',
  );
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        metadata: {
          timestamp: new Date().toISOString(),
          nodeVersion: process.version,
          os: `${os.type()} ${os.release()} (${os.arch()})`,
          vcpus: os.cpus().length,
          project: PROJECT,
          instance: INSTANCE,
          database: DATABASE,
          table: TABLE,
          workload: WORKLOAD,
          query: queryDescription,
          durationSec: DURATION_SEC,
          warmupSec: WARMUP_SEC,
          targetQpsList: TARGET_QPS_LIST,
        },
        results,
      },
      null,
      2,
    ),
  );

  const mdPath = path.join(
    __dirname,
    'BENCHMARK_EQUIVALENT_THROUGHPUT.md',
  );
  const mdReport = generateMarkdownReport(results, queryDescription);
  fs.writeFileSync(mdPath, mdReport);

  console.log(`\nSaved JSON results to    : ${jsonPath}`);
  console.log(`Saved Markdown report to : ${mdPath}\n`);

  if (mockServerObj) {
    mockServerObj.server.forceShutdown();
  }
}

main().catch(err => {
  console.error('Benchmark execution error:', err);
  process.exit(1);
});
