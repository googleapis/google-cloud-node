const { Spanner } = require('../');

async function test() {
  const spanner = new Spanner({ projectId: 'span-cloud-testing' });
  const instance = spanner.instance('suvham-testing');
  const database = instance.database('benchmark_db_async');

  try {
    console.log('Querying AsyncBenchmarkTable schema...');
    const [rows] = await database.run({
      sql: "SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'AsyncBenchmarkTable'"
    });
    console.log('Schema retrieved:');
    for (const row of rows) {
      console.log(`  Column: ${row.toJSON().COLUMN_NAME} (${row.toJSON().DATA_TYPE})`);
    }
  } catch (err) {
    console.error('Query Failed with Error:', err.message);
    console.error('Error Details:', JSON.stringify(err, null, 2));
    if (err.statusDetails) {
      console.error('Status Details:', JSON.stringify(err.statusDetails, null, 2));
    }
  } finally {
    await database.close();
  }
}

test();
