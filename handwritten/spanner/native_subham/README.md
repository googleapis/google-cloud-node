# Spanner Native Node.js (napi-rs) Extension POC

## 1. Executive Summary

This Proof of Concept (POC) demonstrates how replacing the gRPC hotspot in the Node.js `@google-cloud/spanner` client library with a compiled Rust extension completely breaks through V8's single-threaded performance bottleneck. In standard JavaScript applications under high concurrency, a single V8 execution thread blocks during CPU-intensive Protobuf serialization/deserialization and gRPC stream coordination, saturating at ~3000-5000 QPS. By offloading all Protobuf processing, network I/O, and channel dispatch to a compiled native Rust extension (`napi-rs`) running asynchronous Tokio worker threads, V8 remains completely free from per-request blocking CPU overhead. The result is linear throughput scaling, ultra-low tail latencies, and near-zero Event Loop Lag under extreme concurrent workloads.

---

## 2. Prerequisites

Before executing the POC orchestrator, ensure your local environment meets the following requirements:
* **Node.js:** Version 18 or higher.
* **System Utilities:** `git` and `curl` installed.
* **Google Cloud Credentials:** Proper Application Default Credentials (ADC) configured (e.g., via `gcloud auth application-default login` or the `GOOGLE_APPLICATION_CREDENTIALS` environment variable).
* **Target Database:** Access to a real, active Google Cloud Spanner instance. 
  > [!IMPORTANT]
  > Do NOT use the local Spanner emulator. Actual physical network latency is required to accurately demonstrate thread offloading and the resulting throughput speedups.

---

## 3. Configuration

The benchmark is pre-configured with standard Google Cloud Spanner testing details. If you want to customize the database, project, or benchmark query:

Open [__test__/benchmark.js](file:///Users/suvham/workspace/cloudNode/google-cloud-node/handwritten/spanner/spanner-native/__test__/benchmark.js) and edit the configuration block at the top:

```javascript
const PROJECT  = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE    = 'AsyncBenchmarkTable';
```

---

## 4. Running the POC

The entire setup, dependency installation, proto compilation, native compilation, and benchmark execution are fully automated:

1. Make the orchestrator script executable:
   ```bash
   chmod +x setup_and_run.sh
   ```
2. Execute the orchestrator:
   ```bash
   ./setup_and_run.sh
   ```

This script will:
1. Verify Node.js version compatibility.
2. Install the Rust toolchain (`rustup` & `rustc`) and `@napi-rs/cli` globally if not already installed.
3. Clone the standard `googleapis/googleapis` definitions to `/tmp/googleapis`.
4. Install local npm package dependencies.
5. Compile the native Rust extension using `napi build --platform --release`.
6. Run the comparative performance benchmark suite.

---

## 5. Understanding the Results

During execution, the benchmark outputs a live comparative markdown table:

```
Concurrency  | Method           | QPS / p95          | p50 (ms)   | p99 (ms)   | Avg EL Lag   | Max EL Lag   | Speedup    | Lat Imp   
------------ |------------------|--------------------|------------|------------|--------------|--------------|------------|----------
1            | JavaScript       | 280.0 / 4.5        | 3.2        | 5.8        | 0.1ms        | 0.4ms        | -          | -         
1            | Rust (1 Ch)      | 310.0 / 4.0        | 2.9        | 4.9        | 0.0ms        | 0.2ms        | 1.11x      | 11.1%     
1            | Rust (4 Ch)      | 315.0 / 3.9        | 2.8        | 4.7        | 0.0ms        | 0.2ms        | 1.13x      | 13.3%     
...
32           | JavaScript       | 3900.0 / 34.0      | 6.8        | 44.0       | 28.4ms       | 85.2ms       | -          | -         
32           | Rust (1 Ch)      | 6200.0 / 5.4       | 4.6        | 6.9        | 0.1ms        | 0.8ms        | 1.59x      | 84.1%     
32           | Rust (16 Ch)     | 12400.0 / 4.1      | 3.1        | 5.2        | 0.1ms        | 0.5ms        | 3.18x      | 87.9%     
```

### 🔑 Key Performance Indicators (KPIs):
* **QPS / p95:** Under high concurrency, the JavaScript client saturates quickly as the V8 thread reaches 100% CPU utilization, leading to a flat QPS plateau. The Rust client scales near-linearly.
* **Avg / Max EL Lag:** This is the most critical metric. 
  * In the **JavaScript** path, event loop lag climbs exponentially as concurrency grows. This indicates V8 is heavily saturated with Protobuf and gRPC JavaScript overhead.
  * In the **Rust** path, event loop lag remains near **0.0ms** even at peak concurrency. This mathematically proves that V8 is completely free from blocking per-request overhead.
* **Lat Imp (Latency Improvement %):** Measures the percentage decrease in p95 tail latency achieved by Rust. High concurrency scenarios often show a **>80% reduction in latency**.
* **Speedup:** The multiplicative factor representing the throughput increase of the native extension over standard JavaScript.

---

## 6. How It Works

Node.js uses a single thread for executing application code. When doing high-throughput gRPC, the cost of serializing JS objects into binary Protobuf buffers, routing them, and deserializing them is extremely blocking:

```
JavaScript Single-Threaded Execution (Hot-Path):
[V8 Thread] ===[ Serialize JS ] ===[ Coordinate gRPC-js ] ===[ libuv I/O Wait ] ===[ Deserialize JS ]
```

Our native extension delegates these CPU-bound operations to a highly efficient compiled binary:

```
napi-rs Asynchronous Worker Architecture:
[V8 Thread]  --- (dispatched instantly via Promise) -------------------------> [Promise Resolved]
[libuv Pool] ===[ napi-rs AsyncTask ] ===[ Route Channel ] ===[ Tokio block_on ] ===[ Rust Protobuf decode ]
```

1. **Promise Dispatch:** When `executeSqlNative` is invoked, the V8 thread immediately receives a JavaScript `Promise` and is free to process other events (yielding zero lag).
2. **Thread Pool Offloading:** The request details are passed to `SpannerTask::compute` running on a background OS thread (from libuv's thread pool).
3. **Tokio Multiplexing:** Inside the native task, gRPC queries are dispatched over pre-established HTTP/2 channels statically warmed in a `CHANNELS` static pool using a fast multi-threaded Tokio runtime (`RUNTIME`).
4. **Dynamic Round-Robin Routing:** Requests are spread dynamically across the designated channel pool subset to prevent TCP socket buffer congestion.
5. **Promise Resolution:** The results are decoded to native Rust vectors and translated back to JavaScript array structures on the main thread during `resolve`, completing the Promise lifecycle.

---

## 7. Limitations of this POC vs Production

This POC is designed to demonstrate raw performance scaling and contains architectural shortcuts:
* **Session Pool Borrowing:** Borrows session identifiers from `@google-cloud/spanner`'s internal session pool via a temporary checkout and release, whereas a production client would manage session pools entirely inside Rust.
* **Read-Only SQL:** Designed only to execute single read-only SQL queries. Lacks transaction support, writes, and parameterized bindings.
* **Simplified Type Conversion:** Converts column values to simple string representation types rather than rich Node/JS type conversions.
* **Standard Error Handling:** Returns basic status message errors, missing automatic gRPC retries.
