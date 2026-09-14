import {Database} from '@google-cloud/spanner';
import {Histogram, Counter} from '@opentelemetry/api';
import {AbstractBenchmark, LoadType} from './abstract-benchmark';

const SQL = `SELECT
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64_1,
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64_2
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

export class ReadNarrowResultSetBenchmark extends AbstractBenchmark {
  private numRows: number;

  constructor(
    database: Database,
    latencyHistogram: Histogram,
    operationCounter: Counter,
    errorCounter: Counter,
    memoryUsageHistogram: Histogram | null,
    cpuUtilizationHistogram: Histogram | null,
    resourceProbeIntervalStr: string,
    tableName: string,
    minId: number,
    maxId: number,
    tps: number,
    threads: number,
    durationMs: number | null,
    forAlerting: boolean,
    benchmarkName: string,
    numRows: number,
    loadType: LoadType = LoadType.Steady,
    cycleDurationMs: number | null = null,
    peakFactor = 2.0,
    burstFactor = 1.0,
    burstDuration = 1.0,
    burstFraction = 0.1,
    isMock = false,
  ) {
    super(
      database,
      latencyHistogram,
      operationCounter,
      errorCounter,
      memoryUsageHistogram,
      cpuUtilizationHistogram,
      resourceProbeIntervalStr,
      tableName,
      minId,
      maxId,
      tps,
      threads,
      durationMs,
      forAlerting,
      benchmarkName,
      loadType,
      cycleDurationMs,
      peakFactor,
      burstFactor,
      burstDuration,
      burstFraction,
      isMock,
    );
    this.numRows = numRows;
  }

  public getName(): string {
    return 'Read Narrow Result Set Benchmark';
  }

  public getType(): string {
    return 'read-narrow-result-set';
  }

  // INTENTIONAL: Do not change shouldMeasureEntireMethod to return true.
  // We intentionally exclude the initial query execution and the first row fetch
  // to measure purely the iteration and decoding latency of the remaining rows.
  protected shouldMeasureEntireMethod(): boolean {
    return false;
  }

  protected getAttributes(): Record<string, any> {
    const attrs = super.getAttributes();
    return {
      ...attrs,
      num_rows: this.numRows,
    };
  }

  public async execute(
    database: Database,
    tableName: string,
    minId: number,
    maxId: number,
  ): Promise<void> {
    const query = {
      sql: SQL,
      params: {
        num_rows: this.numRows,
      },
      types: {
        num_rows: 'int64',
      },
    };

    const stream = database.runStream(query);

    let firstRowDecoded = false;
    let startTimeNs = 0n;

    await new Promise<void>((resolve, reject) => {
      stream
        .on('data', row => {
          row.toJSON({wrapNumbers: true});

          if (!firstRowDecoded) {
            firstRowDecoded = true;
            startTimeNs = process.hrtime.bigint();
          }
        })
        .on('end', () => {
          if (firstRowDecoded) {
            const endTimeNs = process.hrtime.bigint();
            const durationUs = Number(endTimeNs - startTimeNs) / 1000;
            this.latencyHistogram.record(durationUs, this.getAttributes());
          }
          resolve();
        })
        .on('error', err => {
          reject(err);
        });
    });
  }
}
