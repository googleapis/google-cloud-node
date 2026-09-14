import * as os from 'os';
import {Histogram} from '@opentelemetry/api';
import {parseDuration} from './duration';

export const CPU_LIMIT = (() => {
  let limit = os.availableParallelism
    ? os.availableParallelism()
    : os.cpus().length;
  if (process.env.BENCHMARK_CPU_LIMIT) {
    const parsed = parseFloat(process.env.BENCHMARK_CPU_LIMIT);
    if (!isNaN(parsed) && parsed > 0) {
      limit = parsed;
    }
  }
  return limit;
})();

export class ResourceMonitor {
  private resourceProbeIntervalStr: string;
  private memoryUsageHistogram: Histogram | null;
  private cpuUtilizationHistogram: Histogram | null;
  private attributes: Record<string, any>;
  private isStoppedCheck: () => boolean;

  private lastCpuUsage: NodeJS.CpuUsage | null = null;
  private lastWallTime = 0n;
  private resourceIntervalId: NodeJS.Timeout | null = null;

  constructor(
    resourceProbeIntervalStr: string,
    memoryUsageHistogram: Histogram | null,
    cpuUtilizationHistogram: Histogram | null,
    attributes: Record<string, any>,
    isStoppedCheck: () => boolean,
  ) {
    this.resourceProbeIntervalStr = resourceProbeIntervalStr;
    this.memoryUsageHistogram = memoryUsageHistogram;
    this.cpuUtilizationHistogram = cpuUtilizationHistogram;
    this.attributes = attributes;
    this.isStoppedCheck = isStoppedCheck;
  }

  public start(): void {
    if (
      this.resourceProbeIntervalStr &&
      this.resourceProbeIntervalStr !== '0' &&
      this.resourceProbeIntervalStr !== '0s'
    ) {
      const intervalMs = parseDuration(this.resourceProbeIntervalStr);
      if (intervalMs !== null && intervalMs > 0) {
        this.lastCpuUsage = process.cpuUsage();
        this.lastWallTime = process.hrtime.bigint();
        this.resourceIntervalId = setInterval(
          () => this.probeResourceUsage(),
          intervalMs,
        );
      }
    }
  }

  public stop(): void {
    if (this.resourceIntervalId) {
      clearInterval(this.resourceIntervalId);
      this.resourceIntervalId = null;
    }
  }

  private probeResourceUsage(): void {
    if (this.isStoppedCheck()) return;
    try {
      const mem = process.memoryUsage();
      if (this.memoryUsageHistogram) {
        this.memoryUsageHistogram.record(mem.heapUsed, this.attributes);
      }

      if (this.lastCpuUsage && this.lastWallTime > 0n) {
        const nowCpuUsage = process.cpuUsage(this.lastCpuUsage);
        const nowWallTime = process.hrtime.bigint();
        const elapsedWallSec = Number(nowWallTime - this.lastWallTime) / 1e9;

        if (elapsedWallSec > 0 && this.cpuUtilizationHistogram) {
          const totalCpuSec = (nowCpuUsage.user + nowCpuUsage.system) / 1e6;
          const cpuUtil = totalCpuSec / elapsedWallSec;
          this.cpuUtilizationHistogram.record(
            cpuUtil / CPU_LIMIT,
            this.attributes,
          );
        }

        this.lastCpuUsage = process.cpuUsage();
        this.lastWallTime = nowWallTime;
      }
    } catch (e) {
      console.error('ERROR IN probeResourceUsage:', e);
    }
  }
}
