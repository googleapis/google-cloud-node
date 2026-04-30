# Spanner Go mock channel-pool benchmark

Minimal Node.js diagnostic for Spanner channel-pool scaling under write load.

What it does:

- starts Go in-memory Spanner mock on `:9010`
- injects `Commit` latency, default `50ms`
- runs Node.js `table.insert()` workload, default `110` concurrent / `110` total
- prints P50/P90/P99 plus server-observed transport count and per-transport max active RPCs

Run from `handwritten/spanner`:

```sh
npm install
npm run compile
node scripts/channel-pool-commit-benchmark.js
```

Useful variants:

```sh
# default mux session behavior, 110 concurrent writes, 50ms Commit delay
node scripts/channel-pool-commit-benchmark.js

# compare with regular session pool
GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS=false node scripts/channel-pool-commit-benchmark.js

# custom load
CONCURRENCY=220 TOTAL_REQUESTS=220 SPANNER_MOCK_COMMIT_LATENCY_MICROS=50000 node scripts/channel-pool-commit-benchmark.js

# use separately started mock
SPANNER_MOCK_EXTERNAL=true node scripts/channel-pool-commit-benchmark.js
```

Interpretation:

- `channelObservation.transportCount` = number of HTTP/2 transports seen by mock for Commit RPCs.
- `maxActiveByTransport` shows peak concurrent Commit RPCs per transport.
- `callsByRequestIdChannel` is not reliable for actual Node channel ID today because Spanner request-id channel ID is hardcoded to `1` in this client.
