import {Database} from '@google-cloud/spanner';
import {AbstractBenchmark} from './abstract-benchmark';

/**
 * Implements a 1-to-1 parity Select and Update benchmark workload.
 * Executes a query and an insert/update conditional block within a Read-Write transaction.
 */
export class SelectAndUpdateBenchmark extends AbstractBenchmark {
  public getName(): string {
    return 'Select and Update Benchmark';
  }

  public getType(): string {
    return 'select-update';
  }

  /**
   * Executes a single Select and Update transaction.
   */
  public async execute(
    database: Database,
    tableName: string,
    minId: number,
    maxId: number,
  ): Promise<void> {
    // Pick a random ID in range [minId, maxId] (inclusive)
    const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;

    // Run a simple read/write transaction that selects one random row.
    // If the row exists, the row is updated. If it does not exist, it is inserted.
    await database.runTransactionAsync(async transaction => {
      const selectQuery = {
        sql: `SELECT id FROM ${tableName} WHERE id = @id`,
        params: {
          id: randomId,
        },
        types: {
          id: 'int64',
        },
      };

      // 1. Execute Select Query within the transaction
      const [rows] = await transaction.run(selectQuery);
      const exists = rows.length > 0;

      // Generate random alphanumeric string between 75 and 150 characters (parity with Go/Java)
      const randomStrLength = Math.floor(Math.random() * 76) + 75;
      const randomValue = this.generateRandomString(randomStrLength);

      // 2. Execute conditional DML statement (Update or Insert)
      if (exists) {
        const updateQuery = {
          sql: `UPDATE ${tableName} SET value = @value WHERE id = @id`,
          params: {
            id: randomId,
            value: randomValue,
          },
          types: {
            id: 'int64',
            value: 'string',
          },
        };
        await transaction.runUpdate(updateQuery);
      } else {
        const insertQuery = {
          sql: `INSERT INTO ${tableName} (id, value) VALUES (@id, @value)`,
          params: {
            id: randomId,
            value: randomValue,
          },
          types: {
            id: 'int64',
            value: 'string',
          },
        };
        await transaction.runUpdate(insertQuery);
      }

      // 3. Commit the transaction explicitly (mandatory in Node client library)
      await transaction.commit();
    });
  }

  /**
   * Generates a random alphanumeric string using the exact Java and Go benchmark alphabet.
   */
  private generateRandomString(length: number): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charsLength = chars.length;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
  }
}
