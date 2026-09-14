import {workerData, parentPort} from 'worker_threads';
import {LoadType} from './load-type';

try {
  const {
    tps,
    loadType,
    burstDuration,
    burstFraction,
    cycleDurationMs,
    peakFactor,
    rBurst,
    rNormal,
    sab,
  } = workerData;

  const int32Array = new Int32Array(sab);

  const startTimeNs = process.hrtime.bigint();
  let nextTaskTimeNs = startTimeNs;

  let mu2 = 0;
  let mu1 = 0;
  let inBurst = false;
  let nextStateChangeTimeNs = startTimeNs;

  if (loadType === LoadType.Spiky) {
    mu2 = 1.0 / burstDuration;
    mu1 = (mu2 * burstFraction) / (1.0 - burstFraction);
    nextStateChangeTimeNs = startTimeNs + calculatePoissonDelayNs(mu1);
  }

  function calculatePoissonDelayNs(rate: number): bigint {
    if (rate <= 0) {
      return 3600000000000n; // 1 hour in nanoseconds
    }
    const u = Math.random();
    const safeU = u === 1.0 ? 0.999999999 : u;
    const delaySeconds = -Math.log(1.0 - safeU) / rate;
    return BigInt(Math.floor(delaySeconds * 1_000_000_000));
  }

  function calculateCurrentRate(
    nowNs: bigint,
    startTimeNs: bigint,
    inBurst: boolean,
  ): number {
    if (loadType === LoadType.Spiky) {
      return inBurst ? rBurst : rNormal;
    } else if (loadType === LoadType.Gradual) {
      const elapsedNs = Number(nowNs - startTimeNs);
      const cycleDurationNs = (cycleDurationMs || 3600000) * 1000000;
      const amplitude = tps * (peakFactor - 1.0);
      const angle =
        (2.0 * Math.PI * (elapsedNs % cycleDurationNs)) / cycleDurationNs;
      return tps + amplitude * Math.cos(angle - Math.PI);
    }
    return tps;
  }

  while (true) {
    const nowNs = process.hrtime.bigint();

    if (loadType === LoadType.Spiky) {
      if (nowNs >= nextStateChangeTimeNs) {
        inBurst = !inBurst;
        const nextDelayNs = inBurst
          ? calculatePoissonDelayNs(mu2)
          : calculatePoissonDelayNs(mu1);
        nextStateChangeTimeNs = nowNs + nextDelayNs;
      }
    }

    const currentRate = calculateCurrentRate(nowNs, startTimeNs, inBurst);

    let spawnCount = 0;
    while (nowNs >= nextTaskTimeNs) {
      spawnCount++;
      const delayNs = calculatePoissonDelayNs(currentRate);

      if (loadType === LoadType.Spiky) {
        const timeToStateChangeNs = nextStateChangeTimeNs - nextTaskTimeNs;
        if (delayNs > timeToStateChangeNs) {
          nextTaskTimeNs = nextStateChangeTimeNs;
          break;
        }
      }
      nextTaskTimeNs += delayNs;
    }

    if (spawnCount > 0 && parentPort) {
      parentPort.postMessage({type: 'spawn', count: spawnCount});
    }

    // Sleep using Atomics.wait
    const nextNowNs = process.hrtime.bigint();
    const remainingNs = nextTaskTimeNs - nextNowNs;

    if (remainingNs > 0n) {
      const timeoutMs = Number(remainingNs / 1000000n);
      if (timeoutMs > 0) {
        Atomics.wait(int32Array, 0, 0, timeoutMs);
      }
    }
  }
} catch (err) {
  console.error('UNHANDLED EXCEPTION IN SCHEDULER WORKER THREAD:', err);
  throw err;
}
