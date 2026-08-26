# Cloud Spanner Shared Native Core: Requirements, Goals & Evaluation Framework

## 1. Executive Summary & Objective

The Google Cloud Spanner single-threaded client libraries (principally **Node.js** and **Python**, with potential future expansion to **PHP** and **Ruby**) encounter performance bottlenecks under streaming workloads, high-throughput execution, and large result set decoding. Because these runtimes execute user code and data processing on single-threaded event loops or under a Global Interpreter Lock (GIL), CPU-heavy tasks—such as protobuf deserialization, stream chunk assembly, and HTTP/2 transport management—can constrain overall application performance.

Furthermore, advanced transport capabilities (such as **DirectPath / ALTS**, location-aware routing, and transport-level optimizations) are complex to maintain independently across every interpreted language SDK.

### Objective
Define an objective, rigorous, and repeatable framework to evaluate candidate programming languages for building a **Shared Native Core** that offloads gRPC transport, location-aware routing, and stream decoding for Node.js and Python (and potentially PHP and Ruby).

### Explicit Project Scope & Goals
The **primary goal** of this project is to **improve client performance**. Lowering maintenance overhead or reducing code duplication is not a goal, and we recognize that introducing a shared native core will likely increase the overall maintenance complexity for these client libraries. However, ongoing maintenance cost remains a vital factor in the architectural evaluation, and the chosen solution must aim to keep long-term maintenance and operational costs at a sustainable level.

### The Core Architectural Trade-Off: Transport Efficiency vs. FFI Ergonomics
Evaluating a shared native core for Cloud Spanner is inherently a **two-dimensional decision**:

1. **The Transport Dimension (Network & Protocol Layer — Millisecond Scale)**:
   In database workloads, the vast majority of end-to-end query latency is spent in the gRPC transport and network stack (connection pooling, HTTP/2 multiplexing, and DirectPath/ALTS bypassing Google Frontend proxies). A candidate language that excels at in-process CPU execution but relies on a gRPC stack lacking advanced transport features will suffer significant latency penalties on real-world queries.
2. **The FFI & Host Integration Dimension (Host Boundary Layer — Microsecond Scale)**:
   The native core must cleanly embed into interpreted host runtimes (Node.js, Python, PHP, Ruby). The language's FFI ecosystem determines developer ergonomics, packaging/cross-compilation complexity, host process stability (panic/signal isolation, Python fork safety), and long-term maintenance overhead.

#### Why This Trade-Off Exists:
These two dimensions naturally pull candidate technologies in different directions:
* **Mature Google Cloud Ecosystems (e.g., Go, C++)**: Feature battle-tested, Tier-1 gRPC transport with native DirectPath and Spanner protocol support, but carry higher FFI integration complexity (e.g., CGO runtime-in-runtime embedding, intermediate C++ glue layers, or complex C++ packaging).
* **Modern Native Systems Languages (e.g., Rust)**: Offer best-in-class, type-safe FFI tooling (e.g., `napi-rs`, `PyO3`) with clean memory safety and zero runtime baggage, but may currently rely on community transport stacks while Google-supported transport crates (such as the new Google-managed `grpc` crate with DirectPath) mature.

**This framework is explicitly designed to quantify, test, and balance this exact trade-off using empirical benchmark data and objective scoring.**

---

## 2. Quantitative Performance Goals

Any proposed candidate must be evaluated against the current pure-language baselines (pure TypeScript/JavaScript and pure Python) across five concrete workloads:

| Workload Category | Benchmark Description | Target Metrics |
| :--- | :--- | :--- |
| **1. End-to-End Latency at Non-Saturated Load** | • Single process running steady, non-saturated load (e.g., 10 QPS)<br>• Multiple processes running steady, non-saturated load concurrently on a single host (e.g., 4 processes × 10 QPS = 40 QPS) | • Latency distribution (p50, p95, p99 in ms)<br>• Host CPU utilization % |
| **2. Simple Operation Max Throughput** | Single-core saturation on:<br>• Point Selects (`SELECT 1` / Single-row key lookup)<br>• Write-only Transactions (Blind mutations) | • Maximum sustainable QPS<br>• Peak Memory RSS (MB) |
| **3. In-Process High Async Concurrency** | High concurrency within a single client instance:<br>• 200–500 concurrent async operations (`Promise.all()` in Node.js / `asyncio.gather()` in Python) | • Sustainable QPS<br>• Tail latency (p95, p99 in ms)<br>• Peak Memory RSS (MB) |
| **4. Complex Transaction Throughput** | Multi-statement transactional workloads (e.g., full TPC-C benchmark suite) | • Transactions per second (TPS)<br>• Latency distribution (p50, p95 in ms) |
| **5. Large Result Set Decoding & Backpressure** | High-volume row ingestion (`SELECT * FROM LargeTable` returning 1,000 to 50,000+ rows):<br>• Fast Consumer: Single stream & 4 concurrent streams on 1 core<br>• Slow Consumer: Throttled client consumption to verify reactive streaming backpressure | • End-to-end wall-clock execution time (ms)<br>• Peak Memory RSS (MB) under slow consumer |

> **Note on Non-Saturated Testing**: Most production applications run well below hardware saturation. Measuring latency under non-saturated steady-state load evaluates the "free performance boost" that standard customer workloads will experience in production.

---

## 3. Mandatory Requirements (Gate Criteria)

Candidates must meet all of the following non-negotiable requirements before proceeding to scoring:

1. **First-Class FFI Support for Target Ecosystems**:
   * The candidate language must support native integration with **Node.js** (Node-API / N-API) and **Python** (CPython C-API / PyO3 / CFFI / ctypes).
   * The FFI architecture should also be capable of extending to **PHP** and **Ruby** in future phases.
   * *Rationale*: The native core must serve interpreted, single-threaded client ecosystems without introducing incompatible runtimes or fragile bridging layers.
2. **Zero Host Dependency Portable Binaries**:
   * The compiled binary must cross-compile to standalone native artifacts on all primary tier-1 platforms:
     * **Linux**: `x86_64`, `aarch64` (both `glibc` and `musl`)
     * **macOS**: `x86_64`, `arm64` (Apple Silicon)
     * **Windows**: `x64`
   * Installation of the client library via standard package managers (`npm install`, `pip install`, `pecl install`, `gem install`) must **not** require the host machine to have additional, non-standard runtime environments installed (e.g., JVM, .NET runtime, or non-standard shared system libraries).
3. **Host Runtime & Process Safety**:
   * Background I/O and stream decoding must execute off the host runtime's main thread to avoid starving the V8 event loop or blocking Python execution.
   * The core must avoid contending on Python's Global Interpreter Lock (GIL) during network I/O and payload parsing.
   * *Rationale*: The native extension must never compromise the responsiveness or stability of the host runtime process.

---

## 4. Evaluation Governance & Process

To guarantee an objective and unbiased assessment:
* **Ex-Ante Weight Locking**: The category and sub-item weights in Section 5 must be formally agreed upon and locked by the engineering team **before** running benchmarks or scoring candidate prototypes.
* **Weights Rule**: Weights must not be adjusted post-hoc after benchmark results are known.

---

## 5. Evaluation Rubric & Scoring Dimensions

Candidates that satisfy all gate criteria will be scored across four weighted categories. Category and sub-item weights are marked **TBD** for team alignment. Refer to **Appendix A** for the 1–5 scoring calibration scale.

### Rubric 1: Spanner Client Feature Parity & Implementation Effort (Weight: TBD)

| Evaluation Criterion | Description & Key Questions | Type / Weight |
| :--- | :--- | :---: |
| **Upfront Core Implementation & Parity Effort** | Measures the engineering effort required to deliver or reuse the core Spanner transport features:<br>• **a. Streaming Query Assembly**: Handling `PartialResultSet` chunks, merging `ChunkedValue` boundaries, and tracking `resume_token` across stream reconnections.<br>• **b. Location-Aware Routing & Omni**: Direct backend routing tokens and SpanFE bypass.<br>• **c. Dynamic Channel Pooling**: Spanner-specific subchannel management, pool sizing, and lifecycle scaling.<br>*(For the rest, the core operates primarily as a standard gRPC proxy).* | **Scored (1-5)** *(Weight: TBD)* |
| **Long-Term Spanner Client Maintenance** | The ongoing operational effort required for the Spanner team to track future Spanner feature changes and backend updates. | **Scored (1-5)** *(Weight: TBD)* |

### Rubric 2: gRPC Transport & Network Feature Maturity (Weight: TBD)

> **Context on gRPC Layer Ownership**: Unlike the Spanner client layer (which the Spanner team directly owns and can modify at will), the underlying gRPC transport stack is maintained by external teams (e.g., Google Core Networking for C-core / gRPC-Go, or the Google Rust gRPC team for the new `grpc` crate). Because the Spanner team does not intend to take on maintenance or development of the gRPC stack itself, the evaluation focuses on current availability, roadmap features, and long-term support commitment from dedicated Google gRPC teams.

| Evaluation Criterion | Description & Key Questions | Type / Weight |
| :--- | :--- | :---: |
| **DirectPath (ALTS) Production Availability Today** | Does the candidate gRPC stack support DirectPath over IPv6/IPv4 with ALTS authentication for production use today out-of-the-box? | **Scored (1-5)** *(Weight: TBD)* |
| **Unary RPCs over Bidirectional Streams** | Does the transport layer support (or actively plan support for) multiplexing unary and streaming RPCs over long-lived bidirectional streams to eliminate per-RPC handshake and auth overhead? | **Scored (1-5)** *(Weight: TBD)* |
| **Long-Term Google gRPC Support & Roadmap** | Beyond current features, is the gRPC stack backed by a dedicated Google gRPC team with an active, long-term commitment to implement future cloud transport optimizations and protocol upgrades for Google Cloud clients? | **Scored (1-5)** *(Weight: TBD)* |

### Rubric 3: FFI Architecture, Safety & Host Runtime Coexistence (Weight: TBD)

| Evaluation Criterion | Description & Key Questions | Type / Weight |
| :--- | :--- | :---: |
| **FFI Tooling Simplicity & Language Count** | Does the language provide standard, type-safe FFI tooling (e.g., `napi-rs`, `PyO3`, `node-addon-api`, `pybind11`), or does it require an intermediate third language (e.g., C++ glue layer)? | **Scored (1-5)** *(Weight: TBD)* |
| **Multi-Language FFI Breadth** | How well does the language support building bindings for Node.js, Python, PHP, and Ruby? | **Scored (1-5)** *(Weight: TBD)* |
| **Python Fork Safety (`os.fork()`)** | Does the native core safely handle process forks without deadlocking or crashing background worker threads in pre-fork servers (e.g., Gunicorn, Celery, uWSGI)? | **Scored (1-5)** *(Weight: TBD)* |
| **Streaming Backpressure & Memory Safety** | How deterministic is memory management across the thread boundary? Does the core support flow-control backpressure to prevent native memory ballooning (OOM) under slow consumers? | **Scored (1-5)** *(Weight: TBD)* |
| **Runtime-in-Runtime Coexistence** | Evaluates how cleanly the native runtime embeds into host processes across four testable dimensions:<br>1. **Baseline Idle Footprint**: Idle memory (RSS) and background thread count on client init.<br>2. **Clean Teardown**: Calling `client.close()` cleanly terminates all threads and releases memory without leaving zombie runtimes.<br>3. **Signal Handler Isolation**: Zero hijacking of host process POSIX signals (`SIGINT`, `SIGTERM`, `SIGSEGV`).<br>4. **Node.js Multi-Isolate Safety**: Native addon is context-aware and safely instantiated across multiple Node.js `worker_threads` without global state collisions. | **Scored (1-5)** *(Weight: TBD)* |
| **Crash & Panic Blast Radius** | Does an unhandled error or panic in the native core cause an unrecoverable process crash (`SIGSEGV`/`SIGABRT`), or can it be safely trapped and returned as a host runtime exception? | **Scored (1-5)** *(Weight: TBD)* |
| **Build System & Release Automation** | How complex is the cross-compilation matrix? *(Demonstrated via a working CI build matrix across the 6 primary target triples: Linux x86_64/aarch64 glibc/musl, macOS x86_64/arm64, Windows x64).* | **Scored (1-5)** *(Weight: TBD)* |
| **Native Profiling & Debuggability** | How easy is it to profile native CPU/memory (e.g., ASan, Valgrind, pprof, lldb) across the FFI boundary? | **Scored (1-5)** *(Weight: TBD)* |

### Rubric 4: Benchmark Performance & Resource Efficiency (Weight: TBD)

| Evaluation Criterion | Description & Key Questions | Type / Weight |
| :--- | :--- | :---: |
| **Non-Saturated Latency (p50 / p95)** | Percentage reduction in p50, p95, and p99 latency compared to pure JS and pure Python baselines at steady non-saturated load (10 QPS single-proc, 40 QPS multi-proc). Measured on both GFE and DirectPath. | **Scored (1-5)** *(Weight: TBD)* |
| **In-Process Async Concurrency Throughput** | Maximum sustainable QPS and tail latency under 200–500 concurrent async operations over a single client instance. | **Scored (1-5)** *(Weight: TBD)* |
| **Peak Throughput Ceiling (QPS / TPS)** | Maximum sustainable operations per second on point selects, mutations, and TPC-C transactions under single-core and multi-core saturation. | **Scored (1-5)** *(Weight: TBD)* |
| **Large Result Set Ingestion Speed** | Total wall-clock execution time and throughput for reading 1,000 to 50,000+ rows across diverse data types. | **Scored (1-5)** *(Weight: TBD)* |
| **Host Resource Efficiency (CPU & RSS)** | Host CPU utilization efficiency and native Resident Set Size (RSS) memory footprint under sustained load and slow-consumer backpressure. | **Scored (1-5)** *(Weight: TBD)* |

---

## 6. Candidate Evaluation Scorecard Template

Use this blank template to record scores and qualitative notes during technical reviews.

### 6.1 Requirement Gate Checks

| Mandatory Requirement | Candidate A: [Language] | Candidate B: [Language] | Candidate C: [Language] |
| :--- | :---: | :---: | :---: |
| 1. Node.js and Python FFI Support (with PHP/Ruby capability) | `[Pass / Fail]` | `[Pass / Fail]` | `[Pass / Fail]` |
| 2. Zero Host Dependency Binaries | `[Pass / Fail]` | `[Pass / Fail]` | `[Pass / Fail]` |
| 3. Host Runtime & Process Safety | `[Pass / Fail]` | `[Pass / Fail]` | `[Pass / Fail]` |
| **Overall Gate Status** | `[Eligible / Ineligible]` | `[Eligible / Ineligible]` | `[Eligible / Ineligible]` |

---

### 6.2 Weighted Scoring Matrix

| Category | Weight | Candidate A: [Language] (Score 1-5) | Candidate B: [Language] (Score 1-5) | Candidate C: [Language] (Score 1-5) |
| :--- | :---: | :---: | :---: | :---: |
| **1. Spanner Client Maturity & Effort** | **TBD** | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Upfront Core Implementation & Parity Effort | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Long-Term Spanner Client Maintenance | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| **2. gRPC Transport Maturity** | **TBD** | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • DirectPath (ALTS) Production Availability Today | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Unary RPCs over Bidirectional Streams | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Long-Term Google gRPC Support & Roadmap | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| **3. FFI Architecture & Host Safety** | **TBD** | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Tooling Simplicity & Language Count | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Multi-Language FFI Breadth (Node, Py, PHP, Ruby) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Python Fork Safety (`os.fork()`) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Streaming Backpressure & Memory Safety | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Runtime-in-Runtime Coexistence | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Crash & Panic Blast Radius | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Build & Distribution Matrix (CI Proven) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Native Profiling & Debuggability | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| **4. Benchmark Performance** | **TBD** | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Non-Saturated Latency (p50 / p95) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • In-Process Async Concurrency Throughput | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Peak Saturated Throughput (QPS / TPS) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Large Result Set Ingestion Speed | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| • Host Resource Efficiency (CPU & RSS) | *(TBD)* | `[ Score ]` | `[ Score ]` | `[ Score ]` |
| **Weighted Total Score** | **100%** | `[ Total / 5.0 ]` | `[ Total / 5.0 ]` | `[ Total / 5.0 ]` |

---

### 6.3 Performance Benchmark Summary Table

*Note: All workloads must be measured and reported under both GFE (DirectPath Disabled) to isolate pure engine and FFI efficiency, and DirectPath Enabled (where supported) to measure peak production capability.*

| Workload Test Case | Pure JS Baseline | Pure Python Baseline | Candidate A (GFE / DP) | Candidate B (GFE / DP) | Candidate C (GFE / DP) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Steady Latency (10 QPS, 1 proc)** | `p50: __ms` | `p50: __ms` | `p50: __ms / __ms` | `p50: __ms / __ms` | `p50: __ms / __ms` |
| **1. Steady Latency (40 QPS, 4 proc)** | `p50: __ms` | `p50: __ms` | `p50: __ms / __ms` | `p50: __ms / __ms` | `p50: __ms / __ms` |
| **2. Max Point Select QPS (1 proc)** | `__ QPS` | `__ QPS` | `__ / __ QPS` | `__ / __ QPS` | `__ / __ QPS` |
| **2. Max Mutation QPS (1 proc)** | `__ QPS` | `__ QPS` | `__ / __ QPS` | `__ / __ QPS` | `__ / __ QPS` |
| **3. In-Process Async Concurrency (500 ops)** | `__ QPS (p95: __ms)` | `__ QPS (p95: __ms)` | `__ / __ QPS (p95: __/__)` | `__ / __ QPS (p95: __/__)` | `__ / __ QPS (p95: __/__)` |
| **4. Complex TPC-C Throughput** | `__ TPS` | `__ TPS` | `__ / __ TPS` | `__ / __ TPS` | `__ / __ TPS` |
| **5. Large Result Set (1,000 rows)** | `__ ms` | `__ ms` | `__ / __ ms` | `__ / __ ms` | `__ / __ ms` |
| **5. Large Result Set (50,000 rows)** | `__ ms` | `__ ms` | `__ / __ ms` | `__ / __ ms` | `__ / __ ms` |
| **5. Slow Consumer Peak RSS** | `__ MB` | `__ MB` | `__ / __ MB` | `__ / __ MB` | `__ / __ MB` |
| **Host Peak CPU Utilization (%)** | `__ %` | `__ %` | `__ / __ %` | `__ / __ %` | `__ / __ %` |
| **Host Peak Memory (RSS)** | `__ MB` | `__ MB` | `__ / __ MB` | `__ / __ MB` | `__ / __ MB` |

---

## 7. Benchmark Methodology & Fair Testing Guidelines

To prevent asymmetric testing or biased results, all candidate evaluations must strictly adhere to these testing rules:

1. **Identical Hardware & Environment**:
   * All tests must execute on the exact same GCP Compute Engine machine type (e.g., standard multi-core N2 or C2 instance) in the same GCP zone as the Spanner instance.
2. **Schema & Data Type Diversity**:
   * The benchmark table schema for large result set testing (`LargeTable`) must contain a balanced variety of types: primitives (`INT64`, `FLOAT64`, `STRING`), specialized Spanner types (`TIMESTAMP`, `NUMERIC`, `JSON`, `BYTES`), and composite types (`ARRAY`s and `STRUCT`s) to comprehensively test protobuf decoding and FFI type conversion across all scalar and complex types.
3. **Symmetric FFI Data Delivery**:
   * Prototypes must be evaluated using equivalent data transfer mechanisms.
   * Batched native memory transfers (e.g., flat C cell arrays, struct arenas, or Arrow buffers) are valid, first-class production FFI architectures.
   * Prototypes must not be artificially handicapped with text serialization (e.g., JSON stringification) unless that serialization is an unavoidable production constraint.
4. **Transport Reporting Equality (GFE vs. DirectPath)**:
   * Explicitly record and report benchmark numbers under **both** configurations:
     * **Non-DirectPath (GFE)**: Isolates pure engine CPU, memory, and FFI execution efficiency across an identical network path.
     * **DirectPath Enabled**: Measures the maximum achievable real-world performance boost available to GCP workloads.
5. **Lifecycle, Backpressure & Error Path Testing**:
   * Benchmarks must include slow-consumer throttling, error injection, and query cancellation tests (e.g., client cancels stream after 1 row) to verify that background tasks terminate cleanly and do not leak native memory or cause unbounded buffer accumulation.

---

## Appendix A: 1–5 Scoring Calibration Guide

To ensure consistent and objective scoring across technical reviewers:

* **Score 5 (Best-in-Class / Production-Ready)**: 
  Full production feature availability out-of-the-box; supported by official Google teams; zero-copy or direct type-safe FFI; optimal CPU/memory efficiency; negligible maintenance overhead.
* **Score 4 (Strong / Minor Friction)**: 
  Production-ready with minor configuration; active upstream commitment; well-tested tooling with minor build or packaging friction.
* **Score 3 (Acceptable / Moderate Effort)**: 
  Functional with moderate implementation or adaptation effort; acceptable trade-offs; straightforward bridging logic required.
* **Score 2 (Challenging / High Maintenance)**: 
  Substantial custom development required; architectural friction across FFI or transport; missing upstream support.
* **Score 1 (Critical Deficiency / Severe Risk)**: 
  Fundamental architectural mismatch; severe unmitigated maintenance burden; high risk of process instability, memory leaks, or runtime crashes.
