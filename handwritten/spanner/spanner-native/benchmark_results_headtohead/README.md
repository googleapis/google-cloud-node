# Go versus Rust shared-core head-to-head

## Result

**Rust wins three of six shapes by median paired-baseline improvement, but Go B2 wins the critical 1000-row/concurrency-16 shape.** At that largest concurrent shape, Go B2's direct native p95 is **34.81 ms** versus Rust's **41.35 ms**. Go B2 is 15.81% lower.

Rust has the highest median latency improvement at 100 rows/concurrency 1, 100 rows/concurrency 16, and 1000 rows/concurrency 1. Go B2 leads at 1 row/concurrency 16 and 1000 rows/concurrency 16. Go A leads at 1 row/concurrency 1. Direct native p95, which removes paired Node.js baseline drift, puts Rust ahead of B2 at 1 row/concurrency 16, 100 rows/concurrency 16, and 1000 rows/concurrency 1.

## Measurement conditions

- Host: `irahul-test`, `n1-standard-1`, 1 vCPU, Linux x86-64.
- Target: `projects/span-cloud-testing/instances/irahul-load-test/databases/db`.
- Query: `SELECT Key, SUBSTR(Value, 1, 80) AS Value FROM T ORDER BY Key LIMIT {rows}`.
- Shapes: 1, 100, and 1000 rows; concurrency 1 and 16.
- Repetitions: three 30-second runs after a 5-second warmup per shape and arm.
- Baseline: paired Node.js baseline measured in each repetition, with order alternated.
- Versions: Node.js `v20.20.2`; Go `go1.25.3 linux/amd64`; Rust `rustc 1.97.1 (8bab26f4f 2026-07-14)`.
- Commits: Go A `cacdec97d08f6755e4830cd54ff10410ea150f06`; Go B2 and Rust `e79ce61983a2ad78104decd39adb06db40c619ef`.
- Build machine: `c3d-standard-16`; measurement machine: `n1-standard-1`. No build-machine timing is included.

Go A was rebuilt from its authoritative reflection implementation at `cacdec97d0`. Go B2 and Rust were rebuilt from `e79ce61983`. No stored binary from an earlier run was reused.

## Authentication and transport

Every native arm and every paired Node.js baseline used the VM default service account, `rain-service-account@span-cloud-testing.iam.gserviceaccount.com`, through the metadata server.

The benchmark processes had `GOOGLE_APPLICATION_CREDENTIALS`, `CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE`, and `SPANNER_NODE_CREDENTIALS` absent. No well-known ADC file existed. The benchmark-only `PATH` excluded `gcloud`, preventing `gcp_auth 0.7.6` from selecting the signed-in gcloud user ahead of VM metadata. This forced Rust, Go, and Node.js onto the same VM identity.

DirectPath was off for every arm and paired baseline. The harness rejected either enable variable if present, then set both disable variables to `true`. Go used the explicit GFE `grpc.Dial` path; Rust used `spanner.googleapis.com:443`. Every result JSON records the checked transport state.

## Correctness gate

Before timing, all three rebuilt arms ran all six shapes on `n1-standard-1`. Captured JSON was byte-identical between Go A, Go B2, and Rust for every shape. `verification.txt` records byte counts and SHA-256 hashes.

The Rust integration regressions also passed:

1. low-level success callback has three arguments
2. `executeSqlNative('SELECT 1 AS one')` returns one row
3. malformed SQL rejects through the stream `error` path
4. constructor auth failure returns to JavaScript without aborting

## Median p95 latency improvement

Values are percentages versus the paired Node.js baseline. Brackets show `[min, max]` across three repetitions.

| Rows | Concurrency | Go A reflection | Go B2 raw vtprotobuf | Rust |
|---:|---:|---:|---:|---:|
| 1 | 1 | **45.66** [40.59, 46.04] | 42.45 [27.18, 42.61] | 39.11 [30.80, 40.17] |
| 1 | 16 | 76.07 [74.32, 77.01] | **80.02** [78.50, 82.08] | 77.99 [77.85, 79.06] |
| 100 | 1 | 42.90 [41.75, 48.20] | 34.73 [24.13, 36.58] | **47.08** [40.86, 50.61] |
| 100 | 16 | 75.81 [73.67, 76.18] | 80.90 [80.04, 81.55] | **81.02** [80.17, 82.41] |
| 1000 | 1 | 55.73 [55.38, 58.32] | 58.37 [57.97, 61.63] | **61.32** [60.85, 62.50] |
| 1000 | 16 | 80.63 [80.62, 81.15] | **91.59** [91.59, 91.91] | 89.99 [89.96, 90.37] |

## Direct native p95

Values are milliseconds. Brackets show `[min, max]` across three repetitions.

| Rows | Concurrency | Go A reflection | Go B2 raw vtprotobuf | Rust |
|---:|---:|---:|---:|---:|
| 1 | 1 | **8.04** [7.93, 8.36] | 8.12 [8.05, 8.19] | 8.46 [8.40, 8.67] |
| 1 | 16 | 9.93 [9.90, 10.54] | 8.83 [8.81, 8.86] | **8.69** [8.54, 8.95] |
| 100 | 1 | 8.96 [8.67, 8.97] | **8.72** [8.72, 10.73] | 8.74 [8.58, 8.85] |
| 100 | 16 | 15.50 [15.33, 15.54] | 12.24 [12.02, 12.29] | **11.75** [11.58, 11.90] |
| 1000 | 1 | 14.94 [14.56, 15.06] | 13.00 [12.81, 13.24] | **12.87** [12.82, 13.08] |
| 1000 | 16 | 80.87 [80.67, 81.19] | **34.81** [33.37, 35.09] | 41.35 [40.62, 41.77] |

## Evidence

- `arm_a.json`, `arm_b2.json`, `rust.json`: structured results and environment metadata.
- `arm_a.txt`, `arm_b2.txt`, `rust.txt`: raw benchmark logs.
- `verification.txt`: credential/transport contract, artifact hashes, correctness hashes, and result hashes.
