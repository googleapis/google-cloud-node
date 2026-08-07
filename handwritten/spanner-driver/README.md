# Google Spanner Node.js Driver (`@google-cloud/spanner-driver`)

The `@google-cloud/spanner-driver` package provides a high-performance, `node-postgres` (`pg`) compatible client and connection pool interface for Google Spanner. It bridges Node.js applications directly to Spanner using a native Go CGO engine, delivering full PostgreSQL dialect support.

[![npm version](https://img.shields.io/npm/v/@google-cloud/spanner-driver.svg)](https://www.npmjs.com/package/@google-cloud/spanner-driver)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

---

## Key Features

- **`node-postgres` Compatibility**: Drop-in compatible `Client` and `Pool` interfaces matching standard PostgreSQL drivers.
- **Connection Pooling**: Full-featured connection pool (`Pool`) with idle eviction, connection recycling (`maxUses`, `maxLifetimeSeconds`), and backpressure wait queues.
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

  // Close connection (or call client.release())
  await client.end();
}

main().catch(console.error);
```

### 2. Connection Pooling via `Pool`

```typescript
import { Pool } from '@google-cloud/spanner-driver';

const pool = new Pool({
  project: 'my-gcp-project',
  instance: 'my-spanner-instance',
  database: 'my-spanner-database',
  max: 20, // Maximum pool connections (default: 10)
  min: 2, // Minimum idle connections retained (default: 0)
  idleTimeoutMillis: 30000, // Disconnect idle clients after 30s (default: 10000)
  connectionTimeoutMillis: 5000, // Timeout if acquisition exceeds 5s (default: 0 / indefinite)
  maxUses: 5000, // Automatically recycle client after 5000 checkouts (default: Infinity)
  maxLifetimeSeconds: 3600, // Max connection lifespan in seconds (default: 0 / disabled)
  allowExitOnIdle: false, // Unref timers to allow Node.js event loop to exit when idle (default: false)
  onConnect: async (client) => {
    // ⏳ Awaited initialization on each new connection before it is checked out
    // (e.g. setting session variables or running setup queries)
  },
});

// Pool Lifecycle Events (Fire-and-forget notifications)
// Note: 'connect' event listeners do NOT wait for async functions; use onConnect option for async setup.
pool.on('connect', client => console.log('New client connected to pool'));
pool.on('acquire', client => console.log('Client checked out from pool'));
pool.on('release', (err, client) => console.log('Client returned to pool'));
pool.on('remove', client => console.log('Client removed and closed from pool'));
pool.on('error', (err, client) => console.error('Unexpected pool error', err));

async function runPoolQueries() {
  // Option A: Auto-acquired and auto-released single query execution
  const res = await pool.query('SELECT current_timestamp()');
  console.log('Result:', res.rows);

  // Option B: Manual checkout for sequential multi-statement operations
  const client = await pool.connect();
  try {
    const userRes = await client.query('SELECT * FROM users WHERE user_id = $1', [101]);
    console.log('User:', userRes.rows);
  } finally {
    // Returns client back to the pool
    client.release();
  }
}

// Gracefully drain pool on application shutdown
async function shutdown() {
  await pool.end();
}
```

#### Monitoring Pool Metrics

You can inspect real-time connection metrics on the `Pool` instance:

```typescript
console.log(`Total Connections: ${pool.totalCount}`);   // Total clients in pool (active + idle)
console.log(`Idle Connections:  ${pool.idleCount}`);    // Clients currently available for checkout
console.log(`Waiting Requests:  ${pool.waitingCount}`); // Queued queries waiting for an available client
```

### 3. Streaming Rows & Callbacks

```typescript
import { Client } from '@google-cloud/spanner-driver';

const client = new Client({
  project: 'my-gcp-project',
  instance: 'my-spanner-instance',
  database: 'my-spanner-database',
});

// Streaming row events
client.query('SELECT * FROM large_table')
  .on('row', row => console.log('Received Row:', row))
  .on('end', result => console.log('Query finished. Total rows:', result.rowCount))
  .on('error', err => console.error('Error:', err));
```

---

## Configuration Reference

### `PoolConfig`

`PoolConfig` extends `ClientConfig` with pool management parameters:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `project` | `string` | `process.env.GOOGLE_CLOUD_PROJECT` | GCP Project ID. |
| `instance` | `string` | — | Cloud Spanner Instance ID. |
| `database` | `string` | — | Cloud Spanner Database ID. |
| `connectionString` | `string` | — | Full Spanner resource path or `postgresql://` DSN URL. |
| `host` | `string` | — | Optional custom endpoint or emulator host. |
| `port` | `number` | — | Optional custom endpoint port. |
| `max` | `number` | `10` | Maximum number of active and idle connections in the pool. |
| `min` | `number` | `0` | Minimum number of idle connections to retain without evicting. |
| `idleTimeoutMillis` | `number` | `10000` (10s) | Time a connection can remain idle before being closed (set `0` to disable). |
| `connectionTimeoutMillis` | `number` | `0` | Timeout in ms for connection acquisition or handshake (set `0` to wait indefinitely). |
| `allowExitOnIdle` | `boolean` | `false` | Unrefs idle timers so Node.js CLI / batch processes can exit cleanly. |
| `maxUses` | `number` | `Infinity` | Number of times a client can be checked out before being closed and replaced. |
| `maxLifetimeSeconds` | `number` | `0` | Maximum lifetime of a connection in seconds before retirement (set `0` to disable). |
| `onConnect` | `function` | `undefined` | Async hook awaited once when a new connection is established, before it is checked out (`(client: Client) => void \| Promise<void>`). |

---

## Public API Reference

| Export | Type | Description |
| :--- | :--- | :--- |
| `Client` | Class | Single database connection client (`connect()`, `query()`, `release()`, `end()`). |
| `Pool` | Class | Connection pool manager (`connect()`, `query()`, `end()`, getters: `totalCount`, `idleCount`, `waitingCount`). |
| `DatabaseError` | Class | Enriched database error containing PostgreSQL SQLSTATE `.code` and `.severity`. |
| `ClientConfig` | Interface | Client connection configuration options (`project`, `instance`, `database`, `connectionString`). |
| `PoolConfig` | Interface | Pool management configuration options extending `ClientConfig`. |
| `QueryResult` | Interface | Result set container (`rows`, `fields`, `rowCount`, `command`). |
| `QueryConfig` | Interface | Query options object (`text`, `values`, `rowMode`). |
| `escapeIdentifier` | Function | Escapes PostgreSQL identifiers with double quotes (`"my_table"`). |
| `escapeLiteral` | Function | Escapes PostgreSQL string literals with single quotes (`'val'`). |

---

## License

[Apache 2.0](LICENSE) - Google LLC
