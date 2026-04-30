#!/usr/bin/env node
'use strict';

const {spawn} = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const buildEntry = path.join(root, 'build', 'src', 'index.js');
const goMockDir = path.join(__dirname, 'spanner-go-mock');

const cfg = {
  hostPort: process.env.SPANNER_MOCK_HOST_PORT || 'localhost:9010',
  statsUrl: process.env.SPANNER_MOCK_STATS_URL || 'http://localhost:9011',
  grpcAddr: process.env.SPANNER_MOCK_ADDR || ':9010',
  metricsAddr: process.env.SPANNER_MOCK_METRICS_ADDR || ':9011',
  commitLatencyMicros: Number(process.env.SPANNER_MOCK_COMMIT_LATENCY_MICROS || 50000),
  maxConcurrentStreams: Number(process.env.SPANNER_MOCK_MAX_CONCURRENT_STREAMS || 100),
  concurrency: Number(process.env.CONCURRENCY || 110),
  total: Number(process.env.TOTAL_REQUESTS || process.env.CONCURRENCY || 110),
  projectId: process.env.SPANNER_PROJECT_ID || 'p',
  instanceId: process.env.SPANNER_INSTANCE_ID || 'i',
  databaseId: process.env.SPANNER_DATABASE_ID || 'd',
  tableId: process.env.SPANNER_TABLE_ID || 'T',
  externalMock: process.env.SPANNER_MOCK_EXTERNAL === 'true',
};

function percentile(values, p) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, Math.min(sorted.length - 1, idx))];
}

function parseWireMap(value) {
  if (!value || value === '-') return {};
  const out = {};
  for (const part of value.split(',')) {
    const idx = part.lastIndexOf('=');
    if (idx <= 0) continue;
    out[part.slice(0, idx)] = Number(part.slice(idx + 1));
  }
  return out;
}

function parseSnapshot(text) {
  const out = {};
  for (const section of text.trim().split(';')) {
    const idx = section.indexOf('=');
    if (idx <= 0) continue;
    const value = section.slice(idx + 1);
    out[section.slice(0, idx)] = /^\d+$/.test(value)
      ? Number(value)
      : parseWireMap(value);
  }
  return out;
}

async function request(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`${options?.method || 'GET'} ${url}: ${res.status}`);
  return res.text();
}

async function waitForMock() {
  const deadline = Date.now() + 30000;
  let lastErr;
  while (Date.now() < deadline) {
    try {
      await request(`${cfg.statsUrl}/healthz`);
      return;
    } catch (err) {
      lastErr = err;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error(`mock server not healthy: ${lastErr && lastErr.message}`);
}

function startMock() {
  if (cfg.externalMock) return null;
  const child = spawn(
    'go',
    [
      'run',
      '.',
      `-addr=${cfg.grpcAddr}`,
      `-metrics_addr=${cfg.metricsAddr}`,
      '-operation=commit',
      `-commit_latency_micros=${cfg.commitLatencyMicros}`,
      `-max_concurrent_streams=${cfg.maxConcurrentStreams}`,
    ],
    {cwd: goMockDir, stdio: ['ignore', 'pipe', 'pipe']},
  );
  child.stdout.on('data', data => process.stdout.write(`[mock] ${data}`));
  child.stderr.on('data', data => process.stderr.write(`[mock] ${data}`));
  child.on('exit', (code, signal) => {
    if (code !== 0 && signal !== 'SIGTERM') {
      console.error(`[mock] exited code=${code} signal=${signal}`);
    }
  });
  return child;
}

async function runPool(total, concurrency, fn) {
  const latencies = [];
  let next = 0;
  let failed = 0;
  async function worker() {
    while (next < total) {
      const i = next++;
      const start = process.hrtime.bigint();
      try {
        await fn(i);
      } catch (err) {
        failed++;
        console.error(`request ${i} failed: ${err.message}`);
      } finally {
        const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;
        latencies.push(elapsedMs);
      }
    }
  }
  await Promise.all(Array.from({length: Math.min(concurrency, total)}, worker));
  return {latencies, failed};
}

async function main() {
  if (!fs.existsSync(buildEntry)) {
    throw new Error(`missing ${buildEntry}; run: npm install && npm run compile`);
  }
  if (!cfg.externalMock && !fs.existsSync(path.join(goMockDir, 'main.go'))) {
    throw new Error(`missing Go mock dir: ${goMockDir}`);
  }

  const mock = startMock();
  const cleanup = () => {
    if (mock && !mock.killed) mock.kill('SIGTERM');
  };
  process.once('SIGINT', () => { cleanup(); process.exit(130); });
  process.once('SIGTERM', () => { cleanup(); process.exit(143); });

  try {
    await waitForMock();
    process.env.SPANNER_EMULATOR_HOST = cfg.hostPort;

    const {Spanner} = require(buildEntry);
    const spanner = new Spanner({projectId: cfg.projectId});
    const database = spanner.instance(cfg.instanceId).database(cfg.databaseId);
    const table = database.table(cfg.tableId);

    console.log(JSON.stringify({
      hostPort: cfg.hostPort,
      statsUrl: cfg.statsUrl,
      operation: 'table.insert -> Commit',
      commitLatencyMicros: cfg.commitLatencyMicros,
      maxConcurrentStreams: cfg.maxConcurrentStreams,
      concurrency: cfg.concurrency,
      total: cfg.total,
      multiplexedEnv: process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS || '<default>',
      multiplexedRwEnv: process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW || '<default>',
    }));

    // Warm one request so default mux/regular session setup does not pollute measurement.
    await table.insert({Id: `warmup-${Date.now()}`, Name: 'warmup'});
    await request(`${cfg.statsUrl}/reset`, {method: 'POST'});

    const result = await runPool(cfg.total, cfg.concurrency, i =>
      table.insert({Id: `${Date.now()}-${i}`, Name: `name-${i}`}),
    );

    const snapshotText = await request(`${cfg.statsUrl}/snapshot`);
    const statsText = await request(`${cfg.statsUrl}/stats`);
    const snapshot = parseSnapshot(snapshotText);
    const transports = Object.keys(snapshot.callsByTransport || {});
    const maxActiveTotal = Object.values(snapshot.maxActiveByTransport || {}).reduce((a, b) => a + b, 0);

    console.log(JSON.stringify({
      latencyMs: {
        p50: Number(percentile(result.latencies, 50).toFixed(2)),
        p90: Number(percentile(result.latencies, 90).toFixed(2)),
        p99: Number(percentile(result.latencies, 99).toFixed(2)),
        max: Number(Math.max(...result.latencies).toFixed(2)),
      },
      requests: {total: cfg.total, failed: result.failed},
      channelObservation: {
        transportCount: transports.length,
        callsByTransport: snapshot.callsByTransport || {},
        maxActiveByTransport: snapshot.maxActiveByTransport || {},
        maxActiveTotal,
        callsByRequestIdChannel: snapshot.callsByRequestIdChannel || {},
        txnAffinityHits: snapshot.txnAffinityHits || 0,
        txnAffinityMisses: snapshot.txnAffinityMisses || 0,
        txnAffinityUnknown: snapshot.txnAffinityUnknown || 0,
      },
      callsByMethod: snapshot.callsByMethod || {},
      rawStats: statsText.trim().split('\n'),
    }, null, 2));

    database.close(() => {});
    spanner.close();
  } finally {
    cleanup();
  }
}

main().catch(err => {
  console.error(err.stack || err.message);
  process.exitCode = 1;
});
