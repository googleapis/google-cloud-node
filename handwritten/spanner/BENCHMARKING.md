# Native Addons & GCE Benchmarks Documentation

> [!IMPORTANT]
> **Strict Rule for Benchmarks:** Do not alter the benchmark application itself to bypass default client behaviors or wrappers (for example, do not set `json: true` to avoid legacy row mode compatibility parsing). The benchmark queries must be executed exactly as they are currently implemented to correctly emulate real customer application workflows.

This document describes the current implementation of the Rust and Go native gRPC proxies integrated into the Node.js Cloud Spanner client, and the configurations for running benchmarks on Google Compute Engine (GCE) VMs.

---

## Code Repository Locations and Build Lifecycle

### A. Spanner Client Libraries (Rust and Go)
- **Rust Client Source:** Located in the external `google-cloud-rust` repository (local path: `/Users/loite/RustroverProjects/google-cloud-rust/src/spanner`).
- **Go Client Source:** Cached in the local Go module cache or referenced from the external `google-cloud-go` repository (local path: `/Users/loite/GolandProjects/google-cloud-go/spanner`).
- **Agent Guidelines:** The AI agent is permitted to inspect and edit these source code files locally if necessary.
- **Git Push Lifecycle:** Because the remote GCE VM benchmark builds fetch these libraries via their respective package managers (Cargo and Go modules), **any changes made to the Rust or Go client source files must be committed and pushed to their remote GitHub branches by the human user** before triggering a GCE VM benchmark.

### B. Node.js Client & Benchmark Source
- **Node.js Client Source:** Located in the current workspace under `/Users/loite/google-cloud-node/handwritten/spanner`.
- **Benchmark Source:** Located in the current workspace under `/Users/loite/IdeaProjects/spanner-client-benchmarks`.
- **Agent Guidelines:** The AI agent is permitted to edit these source code files locally.
- **Git Push Lifecycle:** Unlike the Go/Rust libraries, the local Node.js client and benchmark codebases are packed and uploaded directly to Cloud Storage as part of the Cloud Build context. Therefore, **changes to the Node.js client and benchmark files do NOT need to be pushed to GitHub** to be built and tested on GCE VMs.

---

## 1. Native Proxy Addons Architecture

### A. Rust Native Proxy (`native/`)
- **Implementation:** Wraps the `google-cloud-spanner` crate in a C++ N-API addon using `napi-rs`. 
- **Threading Model:** Creates a dedicated multi-threaded `tokio::runtime::Runtime` pool per proxy instance. Background streaming tasks are spawned onto this Tokio runtime, fetching results concurrently and dispatching them back to the Node.js V8 main thread asynchronously using a N-API `ThreadsafeFunction`.
- **Data Conversion:** Extracts flat lists of `prost_types::Value` protobuf values directly from the Rust Spanner client's `ResultSet`. These values are buffered into batches and sent across the FFI boundary, where they are manually translated into nested JavaScript primitives and arrays using individual N-API bindings (`env.create_array`, `env.create_string`, etc.).
- **Data Path:** Rust Spanner client `ResultSet` -> Rust Protobuf values -> N-API FFI calls -> JavaScript primitive structures -> JavaScript custom client types (`SpannerDate`, `Float`, etc.).

### B. Go Native Proxy (`native-go/`)
- **Implementation:** Built as a `c-shared` Go library utilizing `cloud.google.com/go/spanner`'s transport layer.
- **Stream Lifecycle:** We choose to wrap the reconnection stream using the client library's native `RowIterator` (constructed via a custom `NewResumableRowIterator` method inside package `spanner`). This allows us to reuse the client library's built-in, production-tested reconnection, session maintenance, and chunk-merging state machine without duplicating this complex logic.
- **Data Conversion:** Bypasses high-level Go client-side types. To keep the data path zero-copy and zero-serialization, we retrieve the raw values directly using `row.ColumnValue(colIdx)` (which returns pointers to the parsed `*structpb.Value` elements inside the yielded `Row`), completely avoiding any intermediate protobuf byte serialization/deserialization. These raw values are appended directly to Go Arrow builders.
- **Data Path:** Transcodes raw protobuf elements directly into Arrow record batches. Node.js decodes these Arrow arrays to high-level JavaScript objects in compatibility mode.

---

## 2. Core Implementation Patterns

### A. Transaction-Level Channel Affinity
- All operations within a single transaction are pinned to the same connection channel.
- Inside [transaction.ts](file:///Users/loite/google-cloud-node/handwritten/spanner/src/transaction.ts#L389-L394), the channel hint is resolved on the first query and cached on the `Transaction` instance (`this._channelHint`). Subsequent queries within the transaction reuse this cached hint.

### B. Go Proxy Connection Management
- The Go native proxy lazily initializes the `spanner.Client` connection pool in [native-go/main.go](file:///Users/loite/google-cloud-node/handwritten/spanner/native-go/main.go#L54-L87) using a double-checked locking pattern with a `sync.RWMutex`.
- The database path is read from the `SPANNER_NATIVE_DATABASE_PATH` environment variable when the addon proxy is constructed.
- All queries retrieve the client pointer via a read-lock (`RLock()`) fast-path without map lookups or mutex contention.

### C. Session Management & Multiplexed Session
- **No Session Pool:** The Node.js Spanner client in this benchmark setup does not utilize a session pool for query execution.
- **Single Multiplexed Session:** Instead, it uses a single multiplexed session. This single session is designed to execute any number of concurrent transactions or queries simultaneously.
- **Unbounded Concurrency:** The multiplexed session is not a performance bottleneck and does not impose concurrency limits or queueing overhead in either the Node.js client or the native proxy.

---

## 3. GCE VM Benchmarks Configuration

Benchmarks are executed using `run_benchmark.sh node` against a database instance in `europe-north1-a` using `n2-standard-4` machines.

### Exact Benchmark Presets & Execution Commands

#### I. `read-large-result-set` (Closed-Loop)
- **Goal:** Measure throughput and delivery/decoding times for large result sets.
- **Settings:** Closed-loop (1 thread running as fast as possible), 30 minutes duration.
- **Commands:**
  - **Rust Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=false BENCHMARK_TYPE=read-large-result-set LOAD_TYPE=closed-loop THREADS=1 DURATION=30m BENCHMARK_NAME=node-rust-proxy-closed-readlarge FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```
  - **Go Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=true BENCHMARK_TYPE=read-large-result-set LOAD_TYPE=closed-loop THREADS=1 DURATION=30m BENCHMARK_NAME=node-go-proxy-closed-readlarge FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```

#### II. `point-select` (Steady-State)
- **Goal:** Verify low-latency point reads under steady throughput.
- **Settings:** Throttled throughput of **100 TPS** across 100 concurrent threads, 30 minutes duration.
- **Commands:**
  - **Rust Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=false BENCHMARK_TYPE=point-select LOAD_TYPE=steady TPS=100 THREADS=100 DURATION=30m USE_SIDECAR=true BENCHMARK_NAME=node-rust-proxy-steady-pointselect FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```
  - **Go Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=true BENCHMARK_TYPE=point-select LOAD_TYPE=steady TPS=100 THREADS=100 DURATION=30m USE_SIDECAR=true BENCHMARK_NAME=node-go-proxy-steady-pointselect FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```

#### III. `select-update` (Steady-State)
- **Goal:** Verify transactional operations under steady load.
- **Settings:** Throttled throughput of **50 TPS** across 100 concurrent threads, 30 minutes duration.
- **Commands:**
  - **Rust Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=false BENCHMARK_TYPE=select-update LOAD_TYPE=steady TPS=50 THREADS=100 DURATION=30m USE_SIDECAR=true BENCHMARK_NAME=node-rust-proxy-steady-selectupdate FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```
  - **Go Proxy:**
    ```bash
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=true BENCHMARK_TYPE=select-update LOAD_TYPE=steady TPS=50 THREADS=100 DURATION=30m USE_SIDECAR=true BENCHMARK_NAME=node-go-proxy-steady-selectupdate FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```

#### IV. `channel-scaling` (Bursty Load)
- **Goal:** Verify performance and channel scaling under highly bursty/spiky loads.
- **Settings:** Spiky load of **2000 TPS** across 500 concurrent threads, 1 hour duration, burst factor 3.8, burst duration 5s, burst fraction 0.25, with 16 channels, using multi-core VM config (n2-standard-4).
- **Commands:**
  - **Rust Proxy:**
    ```bash
    # point-select
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=false BENCHMARK_TYPE=point-select LOAD_TYPE=spiky TPS=2000 THREADS=500 DURATION=1h BURST_FACTOR=3.8 BURST_DURATION=5.0 BURST_FRACTION=0.25 SPANNER_NUM_CHANNELS=16 USE_SIDECAR=true BENCHMARK_NAME=rust-proxy-channel-scaling-bursty-point-select FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node

    # select-update
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=false BENCHMARK_TYPE=select-update LOAD_TYPE=spiky TPS=2000 THREADS=500 DURATION=1h BURST_FACTOR=3.8 BURST_DURATION=5.0 BURST_FRACTION=0.25 SPANNER_NUM_CHANNELS=16 USE_SIDECAR=true BENCHMARK_NAME=rust-proxy-channel-scaling-bursty-select-update FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node
    ```
  - **Go Proxy:**
    ```bash
    # point-select
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=true BENCHMARK_TYPE=point-select LOAD_TYPE=spiky TPS=2000 THREADS=500 DURATION=1h BURST_FACTOR=3.8 BURST_DURATION=5.0 BURST_FRACTION=0.25 SPANNER_NUM_CHANNELS=16 USE_SIDECAR=true BENCHMARK_NAME=go-proxy-channel-scaling-bursty-point-select FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node

    # select-update
    SPANNER_NATIVE_DATABASE_PATH="projects/appdev-soda-spanner-staging/instances/knut-test-ycsb/databases/spring-data-jpa" BENCHMARK_TARGET=gce USE_NATIVE_PROXY=true USE_GO_PROXY=true BENCHMARK_TYPE=select-update LOAD_TYPE=spiky TPS=2000 THREADS=500 DURATION=1h BURST_FACTOR=3.8 BURST_DURATION=5.0 BURST_FRACTION=0.25 SPANNER_NUM_CHANNELS=16 USE_SIDECAR=true BENCHMARK_NAME=go-proxy-channel-scaling-bursty-select-update FOR_ALERTING=false SKIP_CLEANUP=true ./run_benchmark.sh node

    ```



## 4. Performance Bottlenecks and V8 Heap Allocations

### A. Legacy Row Mode Allocation Bottleneck
When running queries (such as in `read-large-result-set` processing $100,000$ rows) without the native plain JSON option (`json: true`), the client library executes in legacy compat mode. In this mode, `PartialResultStream` decodes the Arrow payload but reconstructs a legacy Node.js `Row` structure (an array of column metadata wrappers).

The use of this legacy compatibility mode in benchmarks is **intentional** because it represents the standard, expected user interaction pattern with the Cloud Spanner Node.js library. Thus, the benchmark must not be bypassed or modified to use `json: true`.

For a single query returning $100,000$ rows and 13 columns, this layer allocates:
- **$100,000$** new JavaScript `Array` objects representing rows.
- **$1,300,000$** individual `{name, value}` column metadata objects.
- **$100,000$** custom `toJSON` function closures defined on the row arrays.
- **$100,000$** final output JSON objects upon calling `row.toJSON()`.

This totals approximately **$1,600,000$ objects** created and garbage-collected inside the V8 engine per query invocation.

### B. Impact on Native Proxy Optimizations
Because this JS-level allocation overhead is the overwhelming bottleneck of the query execution path, it completely hides and offsets any optimization work done at the lower native layer (C++ N-API boundary, Go memory layouts, scheduler scheduling, etc.). As a result, low-level proxy optimizations show close to zero impact on the end-to-end user-facing latency metrics.

