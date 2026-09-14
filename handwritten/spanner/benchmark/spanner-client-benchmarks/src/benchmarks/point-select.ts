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

    // LOCAL DEVIATION FROM UPSTREAM (olavloite/spanner-client-benchmarks).
    //
    // Upstream assumes a reference table whose primary key is `id INT64`. The
    // table we benchmark against, benchmark_db_async.AsyncBenchmarkTable, has
    // a STRING(36) primary key of the form `user-<n>` (user-0 .. user-99999),
    // so the unmodified workload fails with:
    //   INVALID_ARGUMENT: No matching signature for operator =
    //   for argument types: STRING, INT64
    //
    // Only the *parameter shape* changes here; the SQL, the random key
    // selection and everything that is measured are untouched, so this remains
    // a single-row primary-key lookup.
    //
    // Set POINT_SELECT_ID_FORMAT=int64 to restore the upstream behaviour.
    // Set POINT_SELECT_ID_PREFIX to change the key prefix.
    const useInt64Id = process.env.POINT_SELECT_ID_FORMAT === 'int64';
    const idPrefix = process.env.POINT_SELECT_ID_PREFIX ?? 'user-';

    const query = {
      sql: `SELECT * FROM ${tableName} WHERE id = @id`,
      params: {
        id: useInt64Id ? randomId : `${idPrefix}${randomId}`,
      },
      types: {
        id: useInt64Id ? 'int64' : 'string',
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
