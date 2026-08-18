# Google Spanner Node.js Driver (`@google-cloud/spanner-driver`)

The `@google-cloud/spanner-driver` package provides a high-performance, `node-postgres` (`pg`) compatible client and connection pool interface for Cloud Spanner, delivering full PostgreSQL dialect compatibility with low latency and seamless ORM integration.

[![npm version](https://img.shields.io/npm/v/@google-cloud/spanner-driver.svg)](https://www.npmjs.com/package/@google-cloud/spanner-driver)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

---

## Key Features

- **`node-postgres` Compatibility**: Drop-in compatible `Client` and `Pool` interfaces matching standard PostgreSQL drivers.
- **High Performance**: Optimized, low-overhead communication directly with Cloud Spanner.
- **Transaction Support**: Explicit transaction management (`BEGIN`, `COMMIT`, `ROLLBACK`) with transaction readiness status tracking (`client.txStatus`).
- **Robust Connection Pooling**: Full-featured connection pool (`Pool`) with idle eviction, connection recycling (`maxUses`, `maxLifetimeSeconds`), backpressure wait queues, and async `onConnect` initialization hooks.
- **Custom Type System**: `pg.types`-compatible `TypeOverrides` registry allowing global, per-client, or per-query custom parsers for PostgreSQL OID types.
- **Rich Parameter Serialization**: Automatic encoding of JavaScript primitives, `Date` objects, `Buffer` bytes, JSON, and ORM objects implementing `.toPostgres()`.
- **Flexible Invocation Modes**: Full support for Promises (`async`/`await`), Node callbacks (`(err, res) => ...`), and streaming row event emitters (`.on('row')`, `.on('fields')`).
- **Dual ESM & CommonJS**: Native exports supporting both modern `import` (ESM) and legacy `require()` (CommonJS).
- **PostgreSQL Utilities**: Escaping helpers (`escapeIdentifier`, `escapeLiteral`) and SQLSTATE error code enrichment (`DatabaseError`).

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

// Option B: Connection DSN Resource String
// const client = new Client('projects/my-gcp-project/instances/my-spanner-instance/databases/my-spanner-database');

async function main() {
  // connect() returns Promise<Client>
  await client.connect();

  // Executing queries with positional parameters ($1, $2, etc.)
  const result = await client.query(
    'SELECT user_id, email, created_at FROM users WHERE status = $1',
    ['ACTIVE']
  );

  console.log(`Returned ${result.rowCount} rows:`);
  console.log(result.rows);

  // Close connection (or call client.release())
  await client.end();
}

main().catch(console.error);
```

---

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

You can inspect real-time connection metrics directly on the `Pool` instance:

```typescript
console.log(`Total Connections: ${pool.totalCount}`);   // Total clients in pool (active + idle)
console.log(`Idle Connections:  ${pool.idleCount}`);    // Clients currently available for checkout
console.log(`Waiting Requests:  ${pool.waitingCount}`); // Queued queries waiting for an available client
```

---

### 3. Row & Query Event Listeners

`Query` instances extend `EventEmitter`, allowing you to listen to `row`, `fields`, `end`, and `error` events:

```typescript
import { Client } from '@google-cloud/spanner-driver';

const client = new Client({
  project: 'my-gcp-project',
  instance: 'my-spanner-instance',
  database: 'my-spanner-database',
});

await client.connect();

// Listen to query events as rows are decoded
client.query('SELECT id, name FROM users')
  .on('fields', fields => console.log('Column metadata:', fields))
  .on('row', row => console.log('Received Row:', row))
  .on('end', result => console.log('Query completed. Row count:', result.rowCount))
  .on('error', err => console.error('Query error:', err));
```

> **Note on Memory**: Listening to `.on('row')` events does not bypass in-memory row buffering in `QueryResult.rows`. For large queries, use SQL pagination (`LIMIT` / `OFFSET`).

---

### 4. Custom Type Parsers (`types` & `TypeOverrides`)

The driver provides a `node-postgres` compatible type system (`pg.types`) for customizing how PostgreSQL OID column types are deserialized:

#### Global Type Parser Override

```typescript
import { types, BuiltinOids } from '@google-cloud/spanner-driver';

// Example: Parse INT8 / BIGINT as native JavaScript BigInt globally
types.setTypeParser(BuiltinOids.INT8, (val: string) => BigInt(val));

// Example: Parse exact NUMERIC into a custom Decimal instance globally
types.setTypeParser(BuiltinOids.NUMERIC, (val: string) => new Decimal(val));
```

#### Scoped Type Overrides (Per-Client or Per-Query)

```typescript
import { Client, TypeOverrides, BuiltinOids } from '@google-cloud/spanner-driver';

// 1. Scoped to a specific Client instance
const clientTypes = new TypeOverrides();
clientTypes.setTypeParser(BuiltinOids.INT8, (val) => BigInt(val));

const client = new Client({
  project: 'my-project',
  instance: 'my-instance',
  database: 'my-db',
  types: clientTypes, // Applies to all queries executed on this client
});

// 2. Scoped to a single Query execution
const queryTypes = new TypeOverrides();
queryTypes.setTypeParser(BuiltinOids.INT8, (val) => Number(val));

const res = await client.query({
  text: 'SELECT id, count FROM metrics WHERE id = $1',
  values: [1],
  types: queryTypes, // Only this query uses queryTypes
});
```

#### Supported Data Types & Default Mappings

| Spanner / PG Type | OID Code | Default JavaScript Output | Custom Parser Example |
| :--- | :---: | :--- | :--- |
| `BOOL` | `16` | `boolean` (`true` / `false`) | — |
| `BYTEA` / `BYTES` | `17` | Node.js `Buffer` | Raw hex string |
| `INT8` / `BIGINT` | `20` | `string` *(safe against $> 2^{53}-1$ overflow)* | `BigInt(val)` / `Number(val)` |
| `INT2` / `SMALLINT` | `21` | `number` | — |
| `INT4` / `INTEGER` | `23` | `number` | — |
| `TEXT` / `VARCHAR` | `25` / `1043` | `string` | — |
| `JSON` / `JSONB` | `114` / `3802` | `object` / `any` (`JSON.parse`) | Raw string |
| `FLOAT4` / `REAL` | `700` | `number` | — |
| `FLOAT8` / `FLOAT64` | `701` | `number` | — |
| `DATE` | `1082` | `string` (`YYYY-MM-DD`) | `new Date(val)` |
| `TIMESTAMP` / `TIMESTAMPTZ` | `1114` / `1184` | JavaScript `Date` (UTC) | ISO string |
| `NUMERIC` | `1700` | `string` *(preserves exact decimal precision)* | `new Decimal(val)` |
| `UUID` | `2950` | `string` | — |
| `ARRAY<T>` | `1007`, `1016`, etc. | `T[]` *(nested arrays with element parser)* | Custom element parser |

---

## Spanner PostgreSQL Dialect Considerations

When working with Cloud Spanner's PostgreSQL dialect, keep the following behavioral characteristics in mind:

1. **`TIMESTAMPTZ` (1184) vs. `TIMESTAMP WITHOUT TIME ZONE` (1114)**:
   - Cloud Spanner requires timezone-aware timestamps (`TIMESTAMPTZ`) for table column schemas. Creating a table column with `TIMESTAMP WITHOUT TIME ZONE` will be rejected by Spanner.
   - The driver retains OID `1114` in `BuiltinOids` for backward compatibility with existing ORMs.
2. **Timestamp Literals & Formatting**:
   - Cloud Spanner requires ISO-8601 formatted timestamps (e.g. `'2026-08-11T12:00:00Z'`).
   - The driver serializes JavaScript `Date` parameter values into ISO-8601 UTC strings. Invalid `Date` objects (`new Date('invalid')`) are safely serialized to `null`.
3. **1D Schema Arrays vs. Multidimensional Expressions**:
   - Cloud Spanner table schemas (`DDL`) permit only **1-dimensional arrays** (e.g. `VARCHAR[]`, `BIGINT[]`).
   - SQL query projections and expressions can generate multidimensional arrays (e.g. `SELECT ARRAY[ARRAY[1, 2], ARRAY[3, 4]]`). The driver's array parser recursively decodes nested arrays into multidimensional JavaScript arrays (e.g. `[[1, 2], [3, 4]]`).
4. **64-bit Integer Precision (`INT8` / `BIGINT`)**:
   - By default, `INT8` columns are returned as strings to prevent precision loss beyond JavaScript's 53-bit `Number.MAX_SAFE_INTEGER` ($9,007,199,254,740,991$). Use `types.setTypeParser(BuiltinOids.INT8, BigInt)` or `Number` based on your application's requirements.
5. **Memory Usage & Result Set Buffering**:
   - Like standard `node-postgres`, calling `client.query()` or `pool.query()` buffers all returned rows into the in-memory `QueryResult.rows` array before resolving the Promise or callback.
   - For large datasets, use SQL query pagination (`LIMIT` / `OFFSET`) or selective filtering to avoid excessive memory consumption.
6. **Wire Format & Parsers**:
   - The driver communicates with Cloud Spanner via gRPC Protobuf rather than PostgreSQL's raw TCP wire protocol. Type parsers operate on text, JSON, and structured Protobuf representations; binary wire protocol parsers (`format: 'binary'`) are not applicable.

---

## Configuration Reference

### `PoolConfig`

`PoolConfig` extends `ClientConfig` with pool management parameters:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `project` | `string` | `process.env.GOOGLE_CLOUD_PROJECT` | GCP Project ID. |
| `instance` | `string` | — | Cloud Spanner Instance ID. |
| `database` | `string` | — | Cloud Spanner Database ID. |
| `connectionString` | `string` | — | Full Spanner resource path (`projects/p/instances/i/databases/d`). |
| `host` | `string` | — | Optional custom endpoint or emulator host. |
| `port` | `number` | — | Optional custom endpoint port. |
| `types` | `ITypeOverrides` | `types` (global) | Custom type parser registry instance (`new TypeOverrides()`). |
| `max` | `number` | `10` | Maximum number of active and idle connections in the pool. |
| `min` | `number` | `0` | Minimum number of idle connections to retain without evicting. |
| `idleTimeoutMillis` | `number` | `10000` (10s) | Time a connection can remain idle before being closed (set `0` to disable). |
| `connectionTimeoutMillis` | `number` | `0` | Timeout in ms for connection acquisition, handshake, and onConnect initialization (set `0` to wait indefinitely). |
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
| `Query` | Class | Thenable query class supporting positional parameters, callbacks, rowMode, and event emitters. |
| `types` | Object | Global default `TypeOverrides` registry matching `pg.types` (`getTypeParser()`, `setTypeParser()`, `builtins`). |
| `TypeOverrides` | Class | Instantiable scoped type registry for client/query parser overrides. |
| `BuiltinOids` | Enum | Standard PostgreSQL catalog Object Identifier (OID) constants. |
| `DatabaseError` | Class | Enriched database error containing PostgreSQL SQLSTATE `.code` and `.severity`. |
| `ClientConfig` | Interface | Client connection configuration options (`project`, `instance`, `database`, `connectionString`, `types`). |
| `PoolConfig` | Interface | Pool management configuration options extending `ClientConfig`. |
| `QueryResult` | Interface | Result set container (`rows`, `fields`, `rowCount`, `command`). |
| `QueryConfig` | Interface | Query options object (`text`, `values`, `rowMode`, `types`). |
| `FieldDef` | Interface | Column metadata definition (`name`, `dataTypeID`). |
| `ITypeOverrides` | Interface | Generic dialect-agnostic type codec interface. |
| `TypeParser` | Type | Function type signature for parsing raw wire string into JavaScript value. |
| `escapeIdentifier` | Function | Escapes PostgreSQL identifiers with double quotes (`"my_table"`). |
| `escapeLiteral` | Function | Escapes PostgreSQL string literals with single quotes (`'val'`). |

---

## License

[Apache 2.0](LICENSE) - Google LLC
