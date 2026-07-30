# `@google-cloud/spanner-driver`

> A high-performance, `node-postgres` (`pg`) compatible Node.js driver for **Google Cloud Spanner**.

[![npm version](https://img.shields.io/npm/v/@google-cloud/spanner-driver.svg)](https://www.npmjs.com/package/@google-cloud/spanner-driver)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

---

## Key Features

- **`node-postgres` Compatibility**: Drop-in compatible `Client` and `Pool` interfaces matching standard PostgreSQL drivers.
- **Dual ESM & CommonJS**: Full support for both `import` (ESM) and `require()` (CommonJS) modules.
- **PostgreSQL Dialect Utilities**: Escaping tools (`escapeIdentifier`, `escapeLiteral`) and SQLSTATE error code enrichment (`DatabaseError`).
- **Flexible Invocation Modes**: Supports Promises (`async`/`await`), Node callbacks, and streaming row event emitters.

---

## Installation

```bash
npm install @google-cloud/spanner-driver
```

---

## Usage Examples

### 1. Connecting via `Client`

```typescript
import { Client } from '@google-cloud/spanner-driver';

// Option A: Configuration Object
const client = new Client({
  project: 'my-gcp-project',
  instance: 'my-spanner-instance',
  database: 'my-spanner-database',
});

// Option B: Connection DSN String or postgresql:// URL
// const client = new Client('projects/my-gcp-project/instances/my-spanner-instance/databases/my-spanner-database');

async function main() {
  await client.connect();

  // Executing queries with positional parameters ($1, $2, etc.)
  const result = await client.query(
    'SELECT user_id, email FROM users WHERE status = $1',
    ['ACTIVE']
  );

  console.log(`Returned ${result.rowCount} rows:`);
  console.log(result.rows);

  await client.end();
}

main().catch(console.error);
```

---

### 2. Using Connection Pooling (`Pool`)

```typescript
import { Pool } from '@google-cloud/spanner-driver';

const pool = new Pool({
  project: 'my-gcp-project',
  instance: 'my-spanner-instance',
  database: 'my-spanner-database',
});

async function queryDatabase() {
  // pool.query automatically acquires a client, runs the query, and releases it
  const res = await pool.query('SELECT current_timestamp()');
  console.log('Result:', res.rows);
}

// Drain pool on application shutdown
async function shutdown() {
  await pool.end();
}
```

---

### 3. Callback & Event-Based Invocation

```typescript
// Callback syntax
client.query('SELECT 1', (err, result) => {
  if (err) {
    console.error('Query Error:', err.code, err.message);
    return;
  }
  console.log('Rows:', result.rows);
});

// Streaming row events
client.query('SELECT * FROM large_table')
  .on('row', row => console.log('Received Row:', row))
  .on('end', result => console.log('Query finished. Total rows:', result.rowCount))
  .on('error', err => console.error('Error:', err));
```

---

## Public API Reference

| Export | Type | Description |
| :--- | :--- | :--- |
| `Client` | Class | Database connection client (`connect()`, `query()`, `end()`). |
| `Pool` | Class | Connection pool (`connect()`, `query()`, `end()`). |
| `DatabaseError` | Class | Enriched database error containing PostgreSQL SQLSTATE `.code` and `.severity`. |
| `ClientConfig` | Interface | Client configuration options (`project`, `instance`, `database`, `host`, `port`, `connectionString`). |
| `QueryResult` | Interface | Result set container (`rows`, `fields`, `rowCount`, `command`). |
| `QueryConfig` | Interface | Query options object (`text`, `values`, `rowMode`). |
| `escapeIdentifier` | Function | Escapes PostgreSQL identifiers with double quotes (`"my_table"`). |
| `escapeLiteral` | Function | Escapes PostgreSQL string literals with single quotes (`'val'`). |

---

## License

[Apache 2.0](LICENSE) - Google LLC
