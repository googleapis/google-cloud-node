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
//
// Bucket resolution directly limits percentile resolution. The previous set
// jumped from 50us steps straight to 1000us steps above 5ms, so every p50 in
// (5ms, 6ms] reported as exactly "6.00 ms" and never moved between runs.
// Keep 100us resolution across the entire range where point-select and
// narrow-read latencies actually live (0.1ms - 20ms).
const latencyBoundaries = [];
for (let i = 100; i <= 20000; i += 100) latencyBoundaries.push(i); // 0.1-20ms @ 100us
for (let i = 21000; i <= 100000; i += 1000) latencyBoundaries.push(i); // 20-100ms @ 1ms
for (let i = 110000; i <= 1000000; i += 10000) latencyBoundaries.push(i); // 0.1-1s @ 10ms
latencyBoundaries.push(2000000, 5000000, 10000000, 30000000); // tail

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

// Returns a linearly interpolated percentile.
//
// Returning the bucket's upper boundary (the previous behaviour) quantizes the
// result to the bucket grid, which is why repeated runs reported an identical
// p50. Interpolating across the bucket recovers sub-bucket resolution and lets
// small run-to-run differences show up.
function percentileFromBuckets(hist, p) {
  const counts = hist.buckets.counts;
  const bounds = hist.buckets.boundaries;
  const total = hist.count;
  if (!total) return null;

  const target = total * p;
  let cumulative = 0;

  for (let i = 0; i < counts.length; i++) {
    const c = counts[i];
    if (c === 0) continue;
    if (cumulative + c >= target) {
      // Bucket i covers (lo, hi]. Clamp the open ends to the observed min/max
      // so the first and +Inf buckets cannot report absurd values.
      let lo = i === 0 ? hist.min : bounds[i - 1];
      let hi = i >= bounds.length ? hist.max : bounds[i];
      if (typeof lo !== 'number') lo = 0;
      if (typeof hi !== 'number') hi = bounds[bounds.length - 1];
      if (hi < lo) hi = lo;
      const frac = (target - cumulative) / c;
      return lo + (hi - lo) * frac;
    }
    cumulative += c;
  }
  return typeof hist.max === 'number' ? hist.max : bounds[bounds.length - 1];
}

function fmtUs(us) {
  if (us === null || us === undefined) return 'n/a';
  return `${(us / 1000).toFixed(2)} ms`;
}

// Captured at preload time, i.e. before the benchmark starts, so it brackets
// the whole run. Used only to derive achieved throughput.
const START_MS = Date.now();

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
  let opCount = null;
  let cpuUtilMean = null;

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
          opCount = v.count;
          console.log(`  mean  : ${fmtUs(v.sum / v.count)}`);
          console.log(`  min   : ${fmtUs(v.min)}`);
          console.log(`  p50   : ${fmtUs(percentileFromBuckets(v, 0.5))}`);
          console.log(`  p95   : ${fmtUs(percentileFromBuckets(v, 0.95))}`);
          console.log(`  p99   : ${fmtUs(percentileFromBuckets(v, 0.99))}`);
          console.log(`  max   : ${fmtUs(v.max)}`);
        } else {
          if (/cpu_utilization/.test(name)) {
            cpuUtilMean = v.sum / v.count;
          }
          console.log(`  sum   : ${v.sum}`);
          console.log(`  min   : ${v.min}`);
          console.log(`  max   : ${v.max}`);
        }
      }
    }
  }

  if (!any) console.log('\n(no data points recorded)');

  // Derived, machine-independent numbers.
  //
  // cpu_utilization is recorded as a fraction of ALL cores on the box, so it is
  // only comparable between runs on the same machine. CPU-milliseconds per
  // operation is not: it is the cost of one query to the client, and it is what
  // a single-core customer actually pays.
  const os = require('os');
  const cores = os.availableParallelism
    ? os.availableParallelism()
    : os.cpus().length;
  const durationSec = (Date.now() - START_MS) / 1000;

  if (opCount && cpuUtilMean !== null && durationSec > 0) {
    const achievedTps = opCount / durationSec;
    // cpuUtilMean is already normalised by core count, so undo that to get
    // absolute core-seconds consumed per wall second.
    const coreSecPerSec = cpuUtilMean * cores;
    const cpuMsPerOp = (coreSecPerSec / achievedTps) * 1000;

    console.log('\nderived');
    console.log(`  machine cores       : ${cores}`);
    console.log(`  wall duration       : ${durationSec.toFixed(1)} s`);
    console.log(`  achieved throughput : ${achievedTps.toFixed(1)} ops/s`);
    console.log(
      `  CPU per operation   : ${cpuMsPerOp.toFixed(2)} ms  <- compare THIS between paths`,
    );
    console.log(
      `  CPU at 1 core       : ${(coreSecPerSec * 100).toFixed(1)}% of one core`,
    );
    console.log(
      `  est. max throughput : ${(1000 / cpuMsPerOp).toFixed(0)} ops/s on a single saturated core`,
    );
  }

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
