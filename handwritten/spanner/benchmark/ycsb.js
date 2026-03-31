/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

const bounds = require('binary-search-bounds');
const dedent = require('dedent');
const fs = require('fs');
const path = require('path');
const stats = require('stats-lite');

const {Spanner} = require('../');
const Workload = require('./workload');

require('yargs')
  .version(false)
  .strict()
  .command(
    'run [args]',
    'Run the workload',
    {
      P: {
        alias: 'workload',
        type: 'string',
        description: 'The path to a YCSB workload file',
        coerce: parseWorkloadFile,
      },
      p: {
        alias: 'parameter',
        description: 'The key=value pair of parameter',
        coerce: parseKeyValuePairs,
      },
      b: {
        alias: 'num_bucket',
        default: 1000,
        type: 'number',
        describe: 'The number of buckets in output',
      },
    },
    runWorkloads,
  ).argv;

function formatOptions(argv) {
  const options = argv.workload.concat(argv.parameter, [
    ['numBucket', argv.num_bucket],
  ]);

  return new Map(options);
}

function parseKeyValuePairs(pairs) {
  return pairs.map(pair => pair.split('='));
}

function parseWorkloadFile(filePath) {
  const contents = fs.readFileSync(path.resolve(filePath));
  return parseKeyValuePairs(contents.toString().split('\n'));
}

function printMetrics(workload) {
  const numBucket = workload.options.get('numBucket');
  let totalOps = 0;

  workload.operations.forEach(operation => {
    totalOps += workload.latencies[operation].length;
  });

  console.log(
    dedent`[OVERALL], RunTime(ms), ${workload.duration}
    [OVERALL], Throughput(ops/sec), ${totalOps / (workload.duration / 1000)}`,
  );

  workload.operations.forEach(operation => {
    const lats = workload.latencies[operation].sort((a, b) => a - b);
    const ops = lats.length;
    const opName = `[${operation.toUpperCase()}]`;

    console.log(
      dedent`${opName}, Operations, ${ops}
      ${opName}, AverageLatency(us), ${stats.mean(lats)}
      ${opName}, LatencyVariance(us), ${stats.stdev(lats)}
      ${opName}, MinLatency(us), ${lats[0]}
      ${opName}, MaxLatency(us), ${lats[lats.length - 1]}
      ${opName}, 95thPercentileLatency(us), ${stats.percentile(lats, 0.95)}
      ${opName}, 99thPercentileLatency(us), ${stats.percentile(lats, 0.99)}
      ${opName}, 99.9thPercentileLatency(us), ${stats.percentile(lats, 0.999)}
      ${opName}, Return=OK, ${ops}`,
    );

    for (let i = 0; i < numBucket; i++) {
      const hi = bounds.lt(lats, i + 1);
      const lo = bounds.le(lats, i);
      console.log(`${opName}, ${i}, ${hi - lo}`);
    }

    const lo = bounds.le(lats, numBucket);
    console.log(`${opName}, ${numBucket}, ${ops - lo}`);
  });
}

function runWorkload(database, options) {
  const workload = new Workload(database, options);

  return workload
    .loadKeys()
    .then(() => workload.run())
    .then(() => printMetrics(workload))
    .catch(err => console.error(err));
}

function runWorkloads(argv) {
  const options = formatOptions(argv);

  const spanner = new Spanner({
    projectId: options.get('cloudspanner.project'),
  });

  const database = spanner
    .instance(options.get('cloudspanner.instance'))
    .database(options.get('cloudspanner.database'));

  return Promise.all(
    Array(options.get('num_worker') || 1)
      .fill(0)
      .map(() => runWorkload(database, options)),
  );
}
