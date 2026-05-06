'use strict';

const cluster = require('cluster');
const os = require('os');
const {performance} = require('perf_hooks');
const {aggregateSummaries, printSummary, runBenchmark} = require('./benchmark');

const workerCount = parseInt(process.env.CLUSTER_WORKERS || process.env.PM2_INSTANCES || '3', 10) || os.availableParallelism?.() || os.cpus().length;

if (cluster.isPrimary) {
  const start = performance.now();
  const summaries = [];
  let failed = false;

  console.log(`Starting node cluster benchmark with ${workerCount} workers`);
  for (let i = 0; i < workerCount; i++) {
    const worker = cluster.fork({
      ...process.env,
      WORKER_INDEX: String(i),
      WORKER_COUNT: String(workerCount),
      CLUSTER_CHILD: 'true',
    });
    worker.on('message', message => {
      if (message?.type === 'summary') summaries.push(message.summary);
      if (message?.type === 'error') {
        failed = true;
        console.error(`worker ${i} failed: ${message.error}`);
      }
    });
  }

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0) {
      failed = true;
      console.error(`worker ${worker.id} exited with code=${code} signal=${signal}`);
    }
    if (Object.keys(cluster.workers).length === 0) {
      const totalWallTimeMs = performance.now() - start;
      if (summaries.length) {
        const aggregate = aggregateSummaries(summaries, totalWallTimeMs);
        printSummary(aggregate, 'Combined Node Cluster Benchmark Summary');
      }
      process.exit(failed ? 1 : 0);
    }
  });
} else {
  runBenchmark({
    workerIndex: parseInt(process.env.WORKER_INDEX || '0', 10),
    workerCount: parseInt(process.env.WORKER_COUNT || '1', 10),
  })
    .then(summary => {
      if (process.send) process.send({type: 'summary', summary});
    })
    .catch(err => {
      if (process.send) process.send({type: 'error', error: err.stack || err.message});
      console.error(err);
      process.exit(1);
    });
}
