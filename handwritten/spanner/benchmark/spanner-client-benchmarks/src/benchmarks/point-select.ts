import {Database} from '@google-cloud/spanner';
import {AbstractBenchmark} from './abstract-benchmark';

/**
 * Implements a 1-to-1 parity Point Select benchmark workload.
 * Picks a random ID between minId and maxId and executes an optimized point-select query.
 */
export class PointSelectBenchmark extends AbstractBenchmark {
  public getName(): string {
    return 'Point Select Benchmark';
  }

  public getType(): string {
    return 'point-select';
  }

  /**
   * Executes a single point-select query.
   */
  public async execute(
    database: Database,
    tableName: string,
    minId: number,
    maxId: number,
  ): Promise<void> {
    // Pick random ID in range [minId, maxId] (inclusive)
    const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;

    const query = {
      sql: `SELECT * FROM ${tableName} WHERE id = @id`,
      params: {
        id: randomId,
      },
      types: {
        id: 'int64',
      },
    };

    // Execute statement on the database using a single-use read-only context implicitly
    const [rows] = await database.run(query);

    // Consume all rows and call toJSON to simulate complete object allocation/decoding
    // and prevent modern JS engines from optimizing out unused variables.
    for (const row of rows) {
      row.toJSON();
    }
  }
}
