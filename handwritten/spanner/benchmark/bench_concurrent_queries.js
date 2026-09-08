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

'use strict';

const { randomUUID } = require('crypto');
const { performance } = require('perf_hooks');
const path = require('path');

const thread_execution_times = [];
const transaction_times = [];

// Parse positional or flag CLI arguments
const rawArgs = process.argv.slice(2);
const positionalArgs = rawArgs.filter(a => !a.startsWith('--'));

function getArg(name, defaultValue) {
  const match = rawArgs.find(a => a.startsWith(`--${name}=`));
  if (match) return match.split('=')[1];
  const flagIndex = rawArgs.indexOf(`--${name}`);
  if (flagIndex !== -1 && rawArgs[flagIndex + 1] && !rawArgs[flagIndex + 1].startsWith('--')) {
    return rawArgs[flagIndex + 1];
  }
  return defaultValue;
}

const DEFAULT_PROJECT = process.env.SPANNER_PROJECT || getArg('project', positionalArgs[2] || 'span-cloud-testing');
const DEFAULT_INSTANCE = process.env.SPANNER_INSTANCE || getArg('instance', positionalArgs[0] || 'suvham-testing');
const DEFAULT_DATABASE = process.env.SPANNER_DATABASE || getArg('database', positionalArgs[1] || 'benchmark_db_async');
const DEFAULT_TABLE = process.env.SPANNER_TABLE || getArg('table', 'AsyncBenchmarkTable');

const DEFAULT_METHOD = getArg('method', positionalArgs[3] || 'pointSelect');
const DEFAULT_THREADS = parseInt(getArg('threads', positionalArgs[4] || '1'), 10);
const DEFAULT_QUERIES = parseInt(getArg('queries', positionalArgs[5] || '1000'), 10);
const WARMUP_COUNT = parseInt(process.env.WARMUP_COUNT || getArg('warmup', '1000'), 10);

async function main(
  instanceId = DEFAULT_INSTANCE,
  databaseId = DEFAULT_DATABASE,
  projectId = DEFAULT_PROJECT,
  method = DEFAULT_METHOD,
  numThreads = DEFAULT_THREADS,
  numQueries = DEFAULT_QUERIES,
) {
  const { Spanner } = require('../build/src');
  const table = DEFAULT_TABLE;

  console.log('================================================================================');
  console.log('  Cloud Spanner Concurrent Thread Query Benchmark');
  console.log('================================================================================');
  console.log(`Target Project   : ${projectId}`);
  console.log(`Target Instance  : ${instanceId}`);
  console.log(`Target Database  : ${databaseId}`);
  console.log(`Target Table     : ${table}`);
  console.log(`Workload Method  : ${method}`);
  console.log(`Threads (Workers): ${numThreads}`);
  console.log(`Queries / Thread : ${numQueries} (Total: ${numThreads * numQueries})`);
  console.log(`Warmup Queries   : ${WARMUP_COUNT}`);
  console.log('================================================================================\n');

  const spanner = new Spanner({
    projectId: projectId,
    disableBuiltInMetrics: true,
  });

  // Gets a reference to a Cloud Spanner instance and database with max 400 sessions
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId, { max: 400 });
  database.on('error', () => {});

  // Generate random read queries for target table
  function generateReadQuery() {
    const randomId = `user-${Math.floor(Math.random() * 100000)}`;
    return {
      sql: `SELECT id from ${table} WHERE id = @id`,
      params: { id: randomId },
    };
  }

  // Generate random update queries for target table
  function generateUpdateQuery() {
    const randomId = `user-${Math.floor(Math.random() * 100000)}`;
    const value = randomUUID();
    return {
      sql: `UPDATE ${table} SET field0 = @value WHERE id = @id`,
      params: {
        id: randomId,
        value: value,
      },
    };
  }

  // Warmup queries
  if (WARMUP_COUNT > 0) {
    const warmUpTime = performance.now();
    console.log(`Running ${WARMUP_COUNT} warmup queries...`);
    for (let i = 0; i < WARMUP_COUNT; i++) {
      await database.run(generateReadQuery());
    }
    const elapsedWarmup = performance.now() - warmUpTime;
    console.log(`Warmup completed in ${elapsedWarmup.toFixed(2)} ms.\n`);
  }

  // Case 1: Point select
  async function pointSelect() {
    const startThreadTime = performance.now();

    for (let i = 0; i < numQueries; i++) {
      const startTime = performance.now();
      await database.run(generateReadQuery());
      const operationTime = performance.now() - startTime;
      transaction_times.push(operationTime);
    }

    thread_execution_times.push(
      (performance.now() - startThreadTime).toFixed(2),
    );
  }

  // Case 2: Select update in Read-Write transaction
  async function selectUpdate() {
    const startThreadTime = performance.now();

    for (let i = 0; i < numQueries; i++) {
      const startTime = performance.now();
      await database.runTransactionAsync(async tx => {
        const [rows] = await tx.run(generateReadQuery());
        rows.forEach(row => {
          row.toJSON();
        });
        await tx.runUpdate(generateUpdateQuery());
        await tx.commit();
      });
      const operationTime = performance.now() - startTime;
      transaction_times.push(operationTime);
    }

    thread_execution_times.push(
      (performance.now() - startThreadTime).toFixed(2),
    );
  }

  // Case 3: Read large result set (1000 rows)
  async function readLargeResultSet() {
    const startThreadTime = performance.now();

    for (let i = 0; i < numQueries; i++) {
      const startTime = performance.now();
      const [rows] = await database.run({
        sql: `SELECT * FROM ${table} LIMIT 1000`,
      });
      rows.forEach(row => {
        row.toJSON();
      });
      const operationTime = performance.now() - startTime;
      transaction_times.push(operationTime);
    }

    thread_execution_times.push(
      (performance.now() - startThreadTime).toFixed(2),
    );
  }

  function calculatePercentiles(latencies) {
    if (latencies.length === 0) {
      return { avg: '0.00', p50: '0.00', p90: '0.00', p95: '0.00', p99: '0.00' };
    }
    const sortedLatencies = latencies.slice().sort((a, b) => a - b);
    const sum = sortedLatencies.reduce((acc, num) => acc + parseFloat(num), 0);
    const average = (sum / sortedLatencies.length).toFixed(2);

    const p50Index = Math.floor(0.5 * sortedLatencies.length);
    const p50Latency = parseFloat(sortedLatencies[p50Index]).toFixed(2);

    const p90Index = Math.floor(0.9 * sortedLatencies.length);
    const p90Latency = parseFloat(sortedLatencies[p90Index]).toFixed(2);

    const p95Index = Math.floor(0.95 * sortedLatencies.length);
    const p95Latency = parseFloat(sortedLatencies[p95Index]).toFixed(2);

    const p99Index = Math.floor(0.99 * sortedLatencies.length);
    const p99Latency = parseFloat(sortedLatencies[p99Index]).toFixed(2);

    return {
      avg: average,
      p50: p50Latency,
      p90: p90Latency,
      p95: p95Latency,
      p99: p99Latency,
    };
  }

  // Run the threads concurrently
  async function runConcurrently() {
    const methodMap = {
      pointSelect: pointSelect,
      selectUpdate: selectUpdate,
      readLargeResultSet: readLargeResultSet,
    };
    const funcToRun = methodMap[method];
    if (!funcToRun) {
      throw new Error(`Unknown method "${method}". Available: pointSelect, selectUpdate, readLargeResultSet`);
    }

    const promises = [];
    for (let i = 0; i < numThreads; i++) {
      promises.push(funcToRun());
    }
    await Promise.all(promises);
  }

  try {
    const startCpu = process.cpuUsage();
    const startWallTime = performance.now();

    await runConcurrently();

    const elapsedCpu = process.cpuUsage(startCpu);
    const elapsedWallTime = performance.now() - startWallTime;

    const percentiles = calculatePercentiles(transaction_times);
    const totalRequests = transaction_times.length;
    const qps = (totalRequests / (elapsedWallTime / 1000)).toFixed(1);

    console.log('--------------------------------------------------------------------------------');
    console.log('BENCHMARK RESULTS:');
    console.log('--------------------------------------------------------------------------------');
    console.log(`Total Completed Reqs : ${totalRequests}`);
    console.log(`Total Wall Clock Time: ${(elapsedWallTime / 1000).toFixed(2)}s`);
    console.log(`Throughput (QPS)     : ${qps} req/s`);
    console.log(`Average Latency      : ${percentiles.avg} ms`);
    console.log(`P50 Latency          : ${percentiles.p50} ms`);
    console.log(`P90 Latency          : ${percentiles.p90} ms`);
    console.log(`P95 Latency          : ${percentiles.p95} ms`);
    console.log(`P99 Latency          : ${percentiles.p99} ms`);

    const totalCpuTimeMs = (elapsedCpu.user + elapsedCpu.system) / 1000;
    const cpuPercent = (totalCpuTimeMs / elapsedWallTime) * 100;
    console.log(`CPU Utilization      : ${cpuPercent.toFixed(2)}% (User: ${(elapsedCpu.user / 1000).toFixed(2)}ms, System: ${(elapsedCpu.system / 1000).toFixed(2)}ms, Wall: ${elapsedWallTime.toFixed(2)}ms)`);
    console.log('================================================================================\n');
  } catch (error) {
    console.error('Benchmark execution error:', error);
  } finally {
    try {
      await database.close();
    } catch (e) {}
  }
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(
  DEFAULT_INSTANCE,
  DEFAULT_DATABASE,
  DEFAULT_PROJECT,
  DEFAULT_METHOD,
  DEFAULT_THREADS,
  DEFAULT_QUERIES
).catch(console.error);
