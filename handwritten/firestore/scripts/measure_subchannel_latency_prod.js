const {performance} = require('perf_hooks');
const {Firestore} = require('../build/src');

/**
 * Parses command line flags and arguments.
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    projectId: process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT,
    databaseId: '(default)',
    concurrency: 300,
    numDocs: 50,
    collection: 'subchannel_benchmark',
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
      return options;
    } else if (arg === '--project' || arg === '-p') {
      options.projectId = args[++i];
    } else if (arg === '--database' || arg === '-d') {
      options.databaseId = args[++i];
    } else if (arg === '--concurrency' || arg === '-c') {
      options.concurrency = parseInt(args[++i], 10);
    } else if (arg === '--num-docs' || arg === '-n') {
      options.numDocs = parseInt(args[++i], 10);
    } else if (arg === '--keyfile' || arg === '-k') {
      options.keyFilename = args[++i];
    } else if (arg === '--collection') {
      options.collection = args[++i];
    } else if (!arg.startsWith('-') && !isNaN(parseInt(arg, 10))) {
      options.concurrency = parseInt(arg, 10);
    }
  }

  return options;
}

function printHelp() {
  console.log(`
Usage: node scripts/measure_subchannel_latency_prod.js [options]

Options:
  --project, -p <id>      GCP Project ID (optional, auto-detected if omitted)
  --concurrency, -c <num> Number of concurrent requests (default: 300)
  --database, -d <id>     Firestore Database ID (default: '(default)')
  --num-docs, -n <num>    Number of documents to seed & read across (default: 50)
  --collection <name>     Firestore collection name (default: 'subchannel_benchmark')
  --keyfile, -k <path>    Path to service account key file (optional if using ADC)
  --help, -h              Show this help message

Example:
  node scripts/measure_subchannel_latency_prod.js --concurrency 500
`);
}

function createFirestoreClient(options, extraSettings = {}) {
  const clientSettings = {
    databaseId: options.databaseId,
    keyFilename: options.keyFilename,
    ...extraSettings,
  };
  if (options.projectId) {
    clientSettings.projectId = options.projectId;
  }
  return new Firestore(clientSettings);
}

/**
 * Seeds initial test documents in Firestore to ensure benchmark queries read existing docs.
 */
async function seedDocuments(options) {
  console.log(
    `\n[Setup] Connecting to Firestore (${options.projectId || 'auto-detected project'})...`,
  );
  const db = createFirestoreClient(options);

  try {
    console.log(
      `[Setup] Verifying / writing ${options.numDocs} benchmark documents in collection '${options.collection}'...`,
    );
    const batch = db.batch();
    for (let i = 0; i < options.numDocs; i++) {
      const docRef = db.collection(options.collection).doc('doc_' + i);
      batch.set(docRef, {
        index: i,
        name: `Benchmark Test Doc ${i}`,
        updatedAt: Firestore.FieldValue.serverTimestamp(),
        payload: 'x'.repeat(256),
      });
    }
    await batch.commit();

    // Warmup get
    const warmupDoc = await db
      .collection(options.collection)
      .doc('doc_0')
      .get();
    if (!warmupDoc.exists) {
      throw new Error('Warmup document could not be read');
    }
    console.log(
      `[Setup] Successfully connected and seeded documents in production Firestore.`,
    );
  } finally {
    await db.terminate();
  }
}

/**
 * Runs a concurrency benchmark against production Firestore using the public SDK API.
 */
async function runProdBenchmark(testName, useLocalSubchannelPool, options) {
  const db = createFirestoreClient(options, {
    grpcOptions: {
      'grpc.use_local_subchannel_pool': useLocalSubchannelPool ? 1 : 0,
    },
  });

  // Warmup request to initialize client channel
  await db.collection(options.collection).doc('doc_0').get();

  let maxPoolSize = 0;
  const poolMonitor = setInterval(() => {
    if (db._clientPool && db._clientPool.size > maxPoolSize) {
      maxPoolSize = db._clientPool.size;
    }
  }, 1);

  const latencies = [];
  const errors = [];
  const startTime = performance.now();

  // Issue concurrent doc.get() operations distributed across seeded documents
  const promises = [];
  for (let i = 0; i < options.concurrency; i++) {
    const docId = 'doc_' + (i % options.numDocs);
    const p = (async () => {
      try {
        const reqStart = performance.now();
        const docSnapshot = await db
          .collection(options.collection)
          .doc(docId)
          .get();
        const duration = performance.now() - reqStart;
        latencies.push(duration);
        if (!docSnapshot.exists) {
          errors.push(new Error(`Document ${docId} not found`));
        }
      } catch (err) {
        errors.push(err);
      }
    })();
    promises.push(p);
  }

  await Promise.all(promises);
  const totalWallClock = performance.now() - startTime;
  clearInterval(poolMonitor);

  await db.terminate();

  latencies.sort((a, b) => a - b);
  const sum = latencies.reduce((a, b) => a + b, 0);
  const mean = latencies.length > 0 ? sum / latencies.length : 0;
  const p50 = latencies[Math.floor(latencies.length * 0.5)] || 0;
  const p90 = latencies[Math.floor(latencies.length * 0.9)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
  const p99 = latencies[Math.floor(latencies.length * 0.99)] || 0;
  const max = latencies[latencies.length - 1] || 0;

  return {
    Configuration: testName,
    'Subchannel Pool': useLocalSubchannelPool ? 'Local (1)' : 'Global (0)',
    'Total Requests': options.concurrency,
    Successful: latencies.length,
    Errors: errors.length,
    'Peak GAPIC Clients': maxPoolSize,
    'Total Wall-Clock': `${Math.round(totalWallClock)} ms`,
    'Mean Latency': `${Math.round(mean)} ms`,
    'P50 Latency': `${Math.round(p50)} ms`,
    'P90 Latency': `${Math.round(p90)} ms`,
    'P95 Latency': `${Math.round(p95)} ms`,
    'P99 Latency': `${Math.round(p99)} ms`,
    'Max Latency': `${Math.round(max)} ms`,
  };
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatDelta(legacyValStr, fixedValStr) {
  const legacyVal = parseFloat(legacyValStr);
  const fixedVal = parseFloat(fixedValStr);
  if (isNaN(legacyVal) || isNaN(fixedVal) || legacyVal === 0) {
    return '—';
  }
  const diff = Math.round(legacyVal - fixedVal);
  const pct = Math.round(((legacyVal - fixedVal) / legacyVal) * 100);
  if (diff > 0) {
    return `**${pct}% faster** (-${diff} ms)`;
  } else if (diff < 0) {
    return `${Math.abs(pct)}% slower (+${Math.abs(diff)} ms)`;
  }
  return '0% (no change)';
}

function printMarkdownTable(legacy, fixed) {
  const rows = [
    [
      '**Subchannel Pool**',
      legacy['Subchannel Pool'],
      fixed['Subchannel Pool'],
      'Local subchannel isolation',
    ],
    [
      '**Concurrent Requests**',
      legacy['Total Requests'],
      fixed['Total Requests'],
      '—',
    ],
    [
      '**Peak GAPIC Clients**',
      legacy['Peak GAPIC Clients'],
      fixed['Peak GAPIC Clients'],
      '—',
    ],
    [
      '**Total Wall-Clock**',
      legacy['Total Wall-Clock'],
      fixed['Total Wall-Clock'],
      formatDelta(legacy['Total Wall-Clock'], fixed['Total Wall-Clock']),
    ],
    [
      '**Mean Latency**',
      legacy['Mean Latency'],
      fixed['Mean Latency'],
      formatDelta(legacy['Mean Latency'], fixed['Mean Latency']),
    ],
    [
      '**P50 Latency**',
      legacy['P50 Latency'],
      fixed['P50 Latency'],
      formatDelta(legacy['P50 Latency'], fixed['P50 Latency']),
    ],
    [
      '**P90 Latency**',
      legacy['P90 Latency'],
      fixed['P90 Latency'],
      formatDelta(legacy['P90 Latency'], fixed['P90 Latency']),
    ],
    [
      '**P95 Latency**',
      legacy['P95 Latency'],
      fixed['P95 Latency'],
      formatDelta(legacy['P95 Latency'], fixed['P95 Latency']),
    ],
    [
      '**P99 Latency**',
      legacy['P99 Latency'],
      fixed['P99 Latency'],
      formatDelta(legacy['P99 Latency'], fixed['P99 Latency']),
    ],
    [
      '**Max Latency**',
      legacy['Max Latency'],
      fixed['Max Latency'],
      formatDelta(legacy['Max Latency'], fixed['Max Latency']),
    ],
    ['**Errors**', legacy.Errors, fixed.Errors, '—'],
  ];

  console.log('\n### Benchmark Results (GitHub PR Markdown Table)\n');
  console.log(
    '| Metric | Legacy (`use_local_subchannel_pool: 0`) | Fixed (`use_local_subchannel_pool: 1`) | Improvement / Delta |',
  );
  console.log('| :--- | :--- | :--- | :--- |');
  for (const [metric, leg, fix, delta] of rows) {
    console.log(`| ${metric} | ${leg} | ${fix} | ${delta} |`);
  }
}

async function main() {
  const options = parseArgs();
  if (options.help) {
    printHelp();
    return;
  }

  console.log('='.repeat(80));
  console.log('FIRESTORE PRODUCTION BACKEND LATENCY BENCHMARK');
  console.log(
    `Project:     ${options.projectId || '(auto-detected from environment/ADC)'}`,
  );
  console.log(`Database:    ${options.databaseId}`);
  console.log(`Collection:  ${options.collection}`);
  console.log(`Concurrency: ${options.concurrency} concurrent requests`);
  console.log('='.repeat(80));

  try {
    await seedDocuments(options);
  } catch (err) {
    console.error('\n[Error] Failed to connect/seed Firestore:', err.message);
    console.error(
      '\nPlease ensure you are authenticated with Application Default Credentials:',
    );
    console.error('  $ gcloud auth application-default login');
    console.error(
      'Or pass a project ID via --project <id> or service account key via --keyfile <path>',
    );
    process.exitCode = 1;
    return;
  }

  console.log(
    '\n[1/2] Running benchmark WITHOUT use_local_subchannel_pool (Legacy / Global Pool)...',
  );
  const legacyResult = await runProdBenchmark(
    'Legacy (use_local_subchannel_pool: 0)',
    false,
    options,
  );

  console.log('\nWaiting 3 seconds for connection drain...');
  await sleep(3000);

  console.log(
    '\n[2/2] Running benchmark WITH use_local_subchannel_pool (Fixed / Local Pool)...',
  );
  const fixedResult = await runProdBenchmark(
    'Fixed (use_local_subchannel_pool: 1)',
    true,
    options,
  );

  printMarkdownTable(legacyResult, fixedResult);
}

main().catch(err => {
  console.error('Fatal error during benchmark:', err);
  process.exitCode = 1;
});
