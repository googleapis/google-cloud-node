# Neutral Technical Evaluation: Rust vs. Go as a Shared Native Core for Python and Node.js Clients

**Branch**: `rust_go_comparison` (tracking `origin/go_ext_poc_native_encoding`)  
**Scope**: Code-level audit of the Rust and Go Spanner native prototypes to assess benchmark fairness and architectural viability for addressing single-threaded bottlenecks (Python GIL & Node.js V8 main event loop).

---

## 1. Executive Summary & Fairness Verdict

> [!IMPORTANT]
> **Verdict on Benchmark Fairness: NOT A FAIR COMPARISON**
> Based on a line-by-line inspection of the prototype code in both engines, the current Rust and Go prototypes are **not in a fair comparison**. Several asymmetric network tuning configurations, data-path shortcuts, and pipeline overheads artificially favor one implementation over the other in different benchmark scenarios:
> 1. **Transport / HTTP/2 Window Sizing**: Go tuned HTTP/2 flow control windows to 4MB/16MB, whereas Rust remained at the default 64KB Tonic window, artificially throttling Rust on high-throughput and large payload streams.
> 2. **Deserialization Completeness vs. Specialized Shortcuts**: Go implemented a flat C-struct memory arena (`CSpannerCell`) optimized specifically for scalar queries, which **omits complex nested types** (`ListValue`/`StructValue` fallback to `NULL`). In contrast, Rust implemented a full recursive enum parser (`SpannerValue`) with individual string allocations.
> 3. **Pipeline Task / Channel Overhead**: Rust has an extra Tokio task hop and `mpsc::channel` synchronization per batch, while Go directly invokes the C callback from the gRPC stream goroutine.
> 4. **Network Path Asymmetry**: Go includes Google GAPIC DirectPath support, while Rust connects exclusively through Google Frontend (GFE) TLS proxies. Comparing Go DirectPath with Rust GFE tests network routing architectures, not shared core language performance.

---

## 2. In-Depth Code Comparison & Identified Asymmetries

### 2.1 Transport Layer & HTTP/2 Flow Control
* **Go Prototype** (`spanner-go/client.go:L108-L109`):
  ```go
  grpc.WithInitialWindowSize(4 * 1024 * 1024),      // 4MB per stream window
  grpc.WithInitialConnWindowSize(16 * 1024 * 1024), // 16MB per connection window
  ```
* **Rust Prototype** (`spanner-core/src/lib.rs:L55-L58`):
  ```rust
  let ep = tonic::transport::Endpoint::from_static(endpoint)
      .tls_config(tls_config.clone())
      .expect("TLS config error");
  channels.push(ep.connect().await.expect("Connect error"));
  ```
* **Analysis**: Tonic's default HTTP/2 stream and connection window size is **65,535 bytes (64 KB)**. In streaming queries with large result sets (e.g., 100KB, 1MB, or high QPS batching), 64KB triggers frequent HTTP/2 `WINDOW_UPDATE` frames and TCP stalling. Go was optimized with 4MB/16MB windows to stream at line rate, while Rust was left unconfigured.

---

### 2.2 Memory Serialization & Deserialization (Flat Arena vs. Recursive Enums)
* **Go Native Cells Path** (`spanner-go/main.go:L181-L246` and `spanner_go_napi.cc:L108-L148`):
  - Pre-calculates `totalStringBytes` across all cells in the batch.
  - Allocates a single `string_arena` (`malloc(totalStringBytes)`) and a flat array of `CSpannerCell` structs (`malloc(totalCells * sizeof(CSpannerCell))`).
  - In C++, reads contiguous pointers and passes them directly to `napi_create_string_utf8(env, cell.str_val, cell.str_len, &js_cell)`.
  - **Critical Flaw**: Lines 217–243 in `spanner-go/main.go` only match `NullValue`, `BoolValue`, `NumberValue`, and `StringValue`. Complex nested types (`ListValue` / `StructValue`) fall through to `default: cell.kind = C.CELL_KIND_NULL`. This path is incomplete and lossy for general Spanner workloads.
* **Rust Prototype** (`spanner-core/src/lib.rs:L111-L161` and `src/lib.rs:L40-L72`):
  - Implements full production typing: `SpannerValue` supports `Null`, `Bool`, `Int64`, `Float64`, `String`, `Bytes`, `Timestamp`, `Date`, `Numeric`, `Json`, `Array`, and `Struct`.
  - Recursively parses array and struct fields.
  - However, in Tokio worker threads, `decode_value` performs an individual heap allocation (`s.clone()`) for every string cell in every row, followed by `convert_to_js` allocating V8 objects individually on the V8 main thread.
* **Analysis**: Go achieved lower CPU time on flat queries by taking a lossy shortcut that does not support full Spanner data types, whereas Rust paid the price of full type-safe recursive decoding and per-cell string cloning.

---

### 2.3 Concurrency & Streaming Channel Pipeline
* **Go Execution Path** (`spanner-go/main.go:L294-L449`):
  - The gRPC stream consumption goroutine calls `sendBatch(...)` directly upon reaching 100 rows.
  - `sendBatch` synchronously calls C callback `bridge_callback` -> `OnGoStreamData` -> `napi_call_threadsafe_function`.
  - Zero intermediate queue between gRPC processing and N-API callback dispatch.
* **Rust Execution Path** (`spanner-core/src/lib.rs:L194-L415` and `src/lib.rs:L134-L173`):
  - Task 1 (`execute_streaming_sql`) receives gRPC chunks, decodes rows, and sends them into a `tokio::sync::mpsc::channel(100)`.
  - Task 2 (`client_clone.runtime.spawn`) polls `rx.recv().await` and invokes `tsfn.call(...)`.
* **Analysis**: Rust has an extra Tokio task spawn and an async channel synchronization hop per batch, adding unnecessary thread context switching and latency overhead.

---

### 2.4 FFI, Runtime Architecture & Binary Packaging

```
[Pure Rust Native Core Architecture]
Node.js / Python Runtime
       │ (Direct C-ABI / napi-rs / PyO3)
       ▼
┌────────────────────────────────────────────────────────┐
│ Rust Shared Core (spanner-core)                        │
│ • Tokio Multi-threaded Runtime (no GC, pure OS threads)│
│ • Tonic / Prost gRPC Engine                            │
│ • Lock-free in-memory token cache                      │
└────────────────────────────────────────────────────────┘

[Go Shared Core Architecture]
Node.js / Python Runtime
       │ (N-API / C-wrapper)
       ▼
┌────────────────────────────────────────────────────────┐
│ C++ Bridge (spanner_go_napi.cc)                        │
└────────────────────────────────────────────────────────┘
       │ (Cgo Boundary Crossing)
       ▼
┌────────────────────────────────────────────────────────┐
│ Embedded Go Runtime (libspanner_go.so / .dylib)        │
│ • Go Scheduler (M:N Goroutines)                        │
│ • Go Garbage Collector (running alongside V8/Py GC)   │
│ • Signal Handlers (SIGSEGV / SIGPROF interception)     │
│ • gRPC Go Client / GAPIC Client                        │
└────────────────────────────────────────────────────────┘
```

---

## 3. Evaluation for Shared Core (Node.js & Python)

The primary motivation is **eliminating single-threaded bottlenecks caused by the Python GIL and Node.js V8 main event loop**:

| Dimension | Rust Shared Core | Go Shared Core |
| :--- | :--- | :--- |
| **GIL Bypassing in Python** | **Native & Clean**: Releasing GIL with `py.allow_threads` drops Python lock completely. All gRPC, TLS, chunk merging, and deserialization execute on native OS threads without Python interpreter interference. | **Complex / Dual GC**: Cgo releases GIL when calling Go, but returning data requires acquiring GIL in C callbacks. Python GC and Go GC run concurrently in the same process, causing unpredictable latency spikes. |
| **V8 Event Loop Offloading (Node.js)** | **Direct N-API**: Tokio worker threads handle all network and CPU decoding. Threadsafe function transfers batches to V8 with minimal lock overhead. | **Multi-tier Hop**: Go Goroutine -> Cgo -> C++ -> N-API Threadsafe Function. Introduces Cgo stack switching overhead. |
| **Runtime & Signal Interference** | **Zero Runtime Overhead**: No secondary runtime or GC. Rust compiles to bare-metal machine code. | **Risk of Signal Collisions**: Go runtime installs its own signal handlers (`SIGSEGV`, `SIGPROF` for preemption), which frequently conflict with Python crash reporters (Faulthandler) and Node.js debugging tools. |
| **Memory Footprint & Predictability** | Deterministic memory layout, zero background GC pauses, low memory footprint. | Go runtime retains heap memory and runs concurrent mark-sweep cycles, increasing memory baseline. |
| **Cross-Platform Distribution** | `napi-rs` generates standalone `.node` binaries for Node.js, and `maturin` generates self-contained `.whl` wheels (manylinux/musl/Universal2) for Python with no dynamic runtime dependencies. | Building `-buildmode=c-shared` with Cgo across platforms (manylinux, musl, macOS Universal2, Windows MSVC) is notoriously difficult to maintain in automated CI/CD pipelines. |
| **DirectPath Ready** | Requires custom ALTS & subchannel load balancer implementation in Tonic. | **Advantage Go**: Go has official Google Cloud GAPIC DirectPath support out-of-the-box. |

---

## 4. Required Optimizations to Establish a 100% Fair Comparison

To achieve an objective, apples-to-apples benchmark comparison, the following changes must be made:

### A. Optimizations for Rust:
1. **Configure HTTP/2 Window Sizes** in `spanner-core/src/lib.rs`:
   ```rust
   let ep = tonic::transport::Endpoint::from_static(endpoint)
       .tls_config(tls_config.clone())?
       .initial_stream_window_size(Some(4 * 1024 * 1024))
       .initial_connection_window_size(Some(16 * 1024 * 1024))
       .http2_keep_alive_interval(std::time::Duration::from_secs(30));
   ```
2. **Remove Intermediate Channel Hop**: Eliminate the extra `mpsc::channel` in `src/lib.rs` by passing the `ThreadsafeFunction` or a direct callback handler straight into `execute_streaming_sql`.
3. **Optimize String/Cell Decoding**: Avoid individual string allocations for scalar query benchmarks (or use string slices / flat cell buffers matching Go's arena approach when profiling raw throughput).

### B. Fixes for Go:
1. **Complete Native Cell Deserialization**: Update `spanner-go/main.go:L217-L243` and `spanner_go_napi.cc` to properly support nested arrays (`ListValue`) and structs (`StructValue`) rather than defaulting them to `NULL`.
2. **Strict Network Baseline Isolation**: When benchmarking shared core language overhead, ensure `GOOGLE_CLOUD_DISABLE_DIRECT_PATH=true` is enforced across all runs to isolate language efficiency from GFE vs. DirectPath network routing differences.

---

## 5. Architectural Recommendation

1. **For a Shared Core across Python & Node.js**:
   **Rust is the superior architectural choice** for a shared core:
   - It provides direct, zero-overhead C-ABI compatibility with both `PyO3` (Python) and `napi-rs` (Node.js).
   - It avoids embedding a secondary garbage-collected runtime and scheduler inside Python and Node.js processes.
   - It guarantees 100% GIL release in Python without Cgo marshaling penalties or signal-handling conflicts.
2. **Next Steps**:
   Apply the HTTP/2 window configuration and remove the intermediate `mpsc::channel` in the Rust core, then rerun the 3-way benchmark suite to evaluate true peak throughput and latency under identical transport conditions.
