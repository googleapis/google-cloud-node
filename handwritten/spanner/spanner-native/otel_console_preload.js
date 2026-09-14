/**
 * Console metrics preload for the vendored spanner-client-benchmarks.
 *
 * Why this exists
 * ---------------
 * The benchmark records latency ONLY into an OpenTelemetry histogram that is
 * exported to Google Cloud Monitoring. With `--no-metrics` it uses a no-op
 * provider, so a local run prints no numbers at all.
 *
 * `src/metrics/otel.ts` exposes `setTestingMeterProvider()` — an explicit,
 * built-in extension point for injecting a MeterProvider. We use it to install
 * a provider backed by an in-process collecting reader and print a summary when
 * the benchmark finishes.
 *
 * This is loaded via `node --require`, so it runs BEFORE the benchmark's
 * entrypoint registers its meters. No benchmark source is modified.
 *
 * Enabled by the launcher when BENCH_METRICS_CONSOLE=1.
 */

'use strict';

const path = require('path');

const BENCH_DIR = path.resolve(
  __dirname,
  '..',
  'benchmark',
  'spanner-client-benchmarks',
);

const {
  MeterProvider,
  MetricReader,
  AggregationTemporality,
  AggregationType,
  InstrumentType,
} = require(path.join(BENCH_DIR, 'node_modules', '@opentelemetry', 'sdk-metrics'));

const otel = require(path.join(BENCH_DIR, 'dist', 'src', 'metrics', 'otel.js'));

// A reader that never exports on its own; we drive collect() manually at exit.
class CollectingReader extends MetricReader {
  selectAggregationTemporality() {
    return AggregationTemporality.CUMULATIVE;
  }
  async onForceFlush() {}
  async onShutdown() {}
}

const reader = new CollectingReader();

// Latency is recorded in MICROSECONDS by the benchmark.
const latencyBoundaries = [];
for (let i = 50; i <= 5000; i += 50) latencyBoundaries.push(i);
latencyBoundaries.push(
  6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 25000,
  30000, 40000, 50000, 75000, 100000, 150000, 200000, 500000, 1000000,
  5000000, 30000000,
);

const provider = new MeterProvider({
  readers: [reader],
  views: [
    {
      instrumentName: '*latency*',
      instrumentType: InstrumentType.HISTOGRAM,
      aggregation: {
        type: AggregationType.EXPLICIT_BUCKET_HISTOGRAM,
        options: {boundaries: latencyBoundaries},
      },
    },
  ],
});

otel.setTestingMeterProvider(provider);

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function percentileFromBuckets(hist, p) {
  const counts = hist.buckets.counts;
  const bounds = hist.buckets.boundaries;
  const total = hist.count;
  if (!total) return null;
  const target = total * p;
  let cumulative = 0;
  for (let i = 0; i < counts.length; i++) {
    cumulative += counts[i];
    if (cumulative >= target) {
      // counts has one more entry than boundaries (the +Inf bucket).
      if (i >= bounds.length) return bounds[bounds.length - 1];
      return bounds[i];
    }
  }
  return bounds[bounds.length - 1];
}

function fmtUs(us) {
  if (us === null || us === undefined) return 'n/a';
  return `${(us / 1000).toFixed(2)} ms`;
}

let reported = false;
let cached = null;

function printSnapshot(resourceMetrics) {
  if (reported) return;
  reported = true;

  const usingCore = ['go', '1', 'true'].includes(
    (process.env.SPANNER_NATIVE_CORE || '').toLowerCase(),
  );

  console.log('\n===================== BENCHMARK RESULTS =====================');
  console.log(`path: ${usingCore ? 'GO SHARED CORE' : 'stock pure-JS'}`);

  if (!resourceMetrics) {
    console.log('\n(no metrics collected)');
    console.log('=============================================================');
    return;
  }

  let any = false;
  for (const sm of resourceMetrics.scopeMetrics) {
    for (const metric of sm.metrics) {
      for (const dp of metric.dataPoints) {
        const v = dp.value;
        if (!v || typeof v.count !== 'number' || v.count === 0) continue;
        any = true;
        const name = metric.descriptor.name;
        console.log(`\n${name}`);
        console.log(`  count : ${v.count}`);
        if (/latency/.test(name)) {
          console.log(`  mean  : ${fmtUs(v.sum / v.count)}`);
          console.log(`  min   : ${fmtUs(v.min)}`);
          console.log(`  p50   : ${fmtUs(percentileFromBuckets(v, 0.5))}`);
          console.log(`  p95   : ${fmtUs(percentileFromBuckets(v, 0.95))}`);
          console.log(`  p99   : ${fmtUs(percentileFromBuckets(v, 0.99))}`);
          console.log(`  max   : ${fmtUs(v.max)}`);
        } else {
          console.log(`  sum   : ${v.sum}`);
          console.log(`  min   : ${v.min}`);
          console.log(`  max   : ${v.max}`);
        }
      }
    }
  }

  if (!any) console.log('\n(no data points recorded)');
  console.log('\n=============================================================');
}

// The benchmark exits via process.exit(), so 'beforeExit' never fires and we
// cannot await anything during 'exit'. Poll the reader into a cached snapshot
// (metrics are CUMULATIVE, so the newest snapshot holds the running totals)
// and print that synchronously on exit.
const poll = setInterval(() => {
  reader
    .collect()
    .then(r => {
      cached = r.resourceMetrics;
    })
    .catch(() => {});
}, 250);
poll.unref();

process.on('exit', () => {
  clearInterval(poll);
  printSnapshot(cached);
});

process.on('beforeExit', () => {
  reader
    .collect()
    .then(r => printSnapshot(r.resourceMetrics))
    .catch(() => printSnapshot(cached));
});
