const { Spanner } = require('./build/src');

// Force native proxy
process.env.USE_NATIVE_PROXY = 'true';
// Set either Go or Rust
process.env.USE_GO_PROXY = process.argv[2] === 'go' ? 'true' : 'false';

console.log(`Starting proxy test. USE_GO_PROXY=${process.env.USE_GO_PROXY}`);

async function main() {
  const spanner = new Spanner({
    projectId: 'appdev-soda-spanner-staging',
  });

  const instance = spanner.instance('knut-test-ycsb');
  const database = instance.database('spring-data-jpa');

  try {
    // ----------------------------------------------------
    // TEST CASE 1: Simple Select 1 (Unary/Single-Row stream)
    // ----------------------------------------------------
    console.log('\n--- TEST CASE 1: SELECT 1 ---');
    const [rows1] = await database.run({
      sql: 'SELECT 1 as val',
    });
    console.log('Success! Result:', rows1);

    // ----------------------------------------------------
    // TEST CASE 2: Multi-Row Query (Large stream)
    // ----------------------------------------------------
    console.log('\n--- TEST CASE 2: Multi-Row Query (1000 rows) ---');
    const [rows2] = await database.run({
      sql: 'SELECT x FROM UNNEST(GENERATE_ARRAY(1, 1000)) as x',
    });
    console.log(`Success! Retrieved ${rows2.length} rows.`);
    console.log('First row:', rows2[0]);
    console.log('Last row:', rows2[rows2.length - 1]);

    // ----------------------------------------------------
    // TEST CASE 3: Concurrent Queries (Parallel execution)
    // ----------------------------------------------------
    console.log('\n--- TEST CASE 3: Concurrent Queries (5 parallel) ---');
    const promises = Array.from({ length: 5 }).map((_, idx) => {
      console.log(`Launching query index: ${idx}`);
      return database.run({
        sql: `SELECT ${idx} as idx`,
      }).then(([res]) => {
        console.log(`Query index ${idx} completed:`, res);
        return res;
      });
    });
    const results = await Promise.all(promises);
    console.log('Success! All concurrent queries completed. Results count:', results.length);

    // ----------------------------------------------------
    // TEST CASE 4: Read-Write Transaction Lifecycle
    // ----------------------------------------------------
    console.log('\n--- TEST CASE 4: Read-Write Transaction ---');
    await database.runTransactionAsync(async (transaction) => {
      console.log('Transaction runner block entered.');
      const [txnRows] = await transaction.run({
        sql: 'SELECT 1 as val',
      });
      console.log('Transaction read completed:', txnRows);
      console.log('Committing transaction...');
      await transaction.commit();
      console.log('Transaction commit succeeded!');
    });

  } catch (err) {
    console.error('Test Suite Failed with Error:', err);
  } finally {
    console.log('\nClosing database connection...');
    await database.close();
    console.log('Database closed. Exiting test script.');
    process.exit(0);
  }
}

main();
