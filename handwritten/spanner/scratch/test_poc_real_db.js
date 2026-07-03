const { Spanner } = require('../build/src');

async function main() {
  const projectId = 'appdev-soda-spanner-staging';
  const instanceId = 'knut-test-ycsb';
  const databaseId = 'spring-data-jpa';

  console.log(`Connecting to: projects/${projectId}/instances/${instanceId}/databases/${databaseId}`);
  console.log(`USE_RUST_POC2 is set to: ${process.env.USE_RUST_POC2}`);

  const spanner = new Spanner({ projectId });
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const query = {
    sql: 'SELECT * FROM test WHERE id = @id',
    params: {
      id: 1,
    },
    types: {
      id: 'int64',
    },
  };

  try {
    console.log('Executing query...');
    const [rows] = await database.run(query);
    console.log(`Successfully retrieved ${rows.length} rows!`);
    
    if (rows.length > 0) {
      const row = rows[0];
      console.log('Row object structure keys:', Object.keys(row));
      console.log('Row object fields:', JSON.stringify(row));
      console.log('Calling row.toJSON():', JSON.stringify(row.toJSON()));
    }
    process.exit(0);
  } catch (err) {
    console.error('Error executing query:', err);
  } finally {
    await database.close();
  }
}

main();
