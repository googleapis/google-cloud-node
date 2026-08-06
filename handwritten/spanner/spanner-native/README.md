# Spanner Shared Native Core (Rust & Go) Benchmark POC

## 1. Executive Summary

This Proof of Concept (POC) evaluates a **shared native core architecture** for Google Cloud Spanner client libraries (Node.js and Python) to overcome single-thread CPU bottlenecks (V8 event loop / Python GIL). 

In standard Node.js applications under high concurrency, the single V8 execution thread blocks during CPU-intensive Protobuf serialization/deserialization and gRPC stream coordination, saturating at ~3000–5000 QPS. By offloading Protobuf processing, background gRPC stream decoding, connection pooling, and network I/O to a compiled native shared core running on background OS threads, the main V8 thread remains completely free from per-request blocking CPU overhead.

To provide design reviewers with an **apples-to-apples performance comparison**, this repository includes:
1. **Node.js Baseline (Pure JS):** Official `@google-cloud/spanner` library using `grpc-js`.
2. **Node.js + Rust Shared Core:** Compiled native Rust crate (`spanner-core`) using `tonic`, `prost`, and `tokio`, bound to Node.js via `napi-rs` ThreadsafeFunction.
3. **Node.js + Go Shared Core:** Compiled native Go module (`spanner-go`) compiled with `-buildmode=c-shared`, using standard `google.golang.org/grpc` with disabled DirectPath and bound to Node.js via a high-performance Node-API C++ bridge.

---

## 2. Shared Core Architecture & Apples-to-Apples Design

### 🎯 Apples-to-Apples Network Alignment (Disabled DirectPath)
By default in GCP Compute environments, the official Go gRPC stack enables DirectPath (bypassing Google Frontend load balancers to route directly to Spanner backends via IPv6). In contrast, Node.js (`grpc-js`) and standard Rust (`tonic`) route through the Google Frontend (GFE) endpoint `spanner.googleapis.com:443`.

To guarantee an exact **apples-to-apples network comparison**:
* **DirectPath is explicitly disabled** in the Go shared core via `os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")` and `grpc.WithDisableServiceConfig()`.
* Both Rust and Go shared cores connect to the exact same GFE endpoint (`spanner.googleapis.com:443`) over standard TLS.
* Both Rust and Go cores maintain identical **multiplexed gRPC connection pool architectures** with round-robin stream dispatch.
* Both cores handle lock-free in-memory GCP OAuth2 token caching and automatic background refresh.

```
                  ┌───────────────────────────────────────────────────────────┐
                  │                   Node.js Client Layer                    │
                  │ (NativeSpannerDatabase / poc_bridge.js / benchmark.js)    │
                  └───────────────┬───────────────────────────┬───────────────┘
                                  │                           │
                   ┌──────────────┴──────────┐ ┌──────────────┴──────────┐
                   │    Rust Native Bridge   │ │     Go Native Bridge    │
                   │ (napi-rs ThreadsafeFn)  │ │ (Node-API C++ Bridge)   │
                   └──────────────┬──────────┘ └──────────────┬──────────┘
                                  │                           │
                   ┌──────────────┴──────────┐ ┌──────────────┴──────────┐
                   │    Rust Core Engine     │ │     Go Core Engine      │
                   │ (spanner-core / tonic)  │ │ (spanner-go / c-shared) │
                   └──────────────┬──────────┘ └──────────────┬──────────┘
                                  │                           │
                                  │   Standard GFE Routing    │
                                  │ (spanner.googleapis.com)  │
                                  └─────────────┬─────────────┘
                                                │
                                  ┌─────────────┴─────────────┐
                                  │    Cloud Spanner API      │
                                  └───────────────────────────┘
```

---

## 3. Directory & Module Structure

```
spanner-native/
├── __test__/
│   ├── benchmark.js       # Unified 3-way benchmark suite (JS vs Rust vs Go)
│   ├── poc_bridge.js      # Client library bridge supporting 'rust' and 'go' engines
│   └── native_binding.js  # Dynamic loader for Rust (.node) and Go (.node) bindings
├── spanner-core/          # Rust Shared Core crate
│   ├── Cargo.toml
│   └── src/lib.rs         # Tonic gRPC streaming, prost decoding, channel pooling
├── spanner-go/            # Go Shared Core module
│   ├── go.mod             # Go module definition
│   ├── client.go          # Go CoreClient, connection pool, Disabled DirectPath, GCP auth
│   ├── decode.go          # Protobuf decoding, chunk stitching (mergeProtoValues)
│   ├── main.go            # cgo exports: InitGoCoreClient, CloseGoCoreClient, ExecuteStreamingSqlGo
│   ├── spanner_go_napi.cc # Node-API C++ wrapper linking libspanner_go.so/.dylib
│   └── build.sh           # Build script compiling Go c-shared library & spanner_go.node
├── src/
│   └── lib.rs             # Rust napi-rs bridge layer
├── Cargo.toml             # Rust workspace definition
├── package.json           # Node.js package manifest
└── setup_and_run.sh       # Unified build & benchmark runner
```

---

## 4. Compilation & Execution

### Prerequisites
* **Node.js:** Version 18 or higher.
* **Rust:** Rust 1.80+ (`rustc` & `cargo`).
* **Go:** Go 1.21+ (`go`).
* **C++ Compiler:** `clang++` (macOS) or `g++` (Linux).
* **GCP Credentials:** Active Application Default Credentials (`gcloud auth application-default login` or `GOOGLE_APPLICATION_CREDENTIALS`).

### Automated Setup and Benchmark Execution
Run the automated orchestrator script:
```bash
chmod +x setup_and_run.sh
./setup_and_run.sh
```

This orchestrator will automatically:
1. Verify Node.js, Rust, and Go toolchain installations (installing them if missing).
2. Clone Google APIs protobuf definitions to `/tmp/googleapis`.
3. Install npm dependencies.
4. Compile the Rust native extension in release mode (`npx napi build --platform --release`).
5. Compile the Go shared core in `-buildmode=c-shared` and build `spanner_go.node`.
6. Verify all compiled binary outputs (`index.js`, `*.node`, `libspanner_go.so`/`.dylib`).
7. Launch the complete 3-way comparative performance benchmark.

---

## 5. Benchmark Metrics & Output

The benchmark runner executes and records metrics for:
* **Node.js Baseline (Pure JS)**
* **Node.js + Rust Core**
* **Node.js + Go Core**

### Benchmark Phases:
1. **Warmup Phase:** Pre-warms connection pools, JIT compiler, and OAuth2 token caches for all 3 engines.
2. **Verification Plan Tests:**
   * **Test 1 (Read Volume Scaling):** Evaluates payload sizes (Small 100B, Medium 10KB, Large 100KB) across JS, Rust, and Go.
   * **Test 2 (Wide Rows & Data Types Correctness):** Verifies type decoding consistency across INT64, FLOAT64, STRING, BOOL, TIMESTAMP, DATE, BYTES, JSON, NUMERIC, and ARRAY.
   * **Test 4 (Multiplexed Session Scaling):** Compares session pool pressure and scaling under high concurrency.
3. **Customer Replication Benchmark:** Fixed-count benchmark (110 concurrency, 1000 requests) comparing JS baseline against Rust and Go across 16, 32, and 50 channels.
4. **Concurrency & Channel Matrix:** Concurrency levels (1, 8, 12, 32) across channel configurations (1, 4, 8, 10, 12, 16, 20 channels), recording:
   * Throughput (QPS)
   * Latencies: p50, p90, p95, p99
   * Event Loop Lag: Average and Maximum (ms)
   * Host CPU Utilization (%)
   * Throughput Speedup (x) and Latency Improvement (%) vs pure Node.js baseline.
5. **Results File:** Saves full structured JSON report to `benchmark_results.json`.
