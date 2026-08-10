# Cloud Spanner Native Shared Core: Comprehensive Multi-Engine Benchmark Report

**Host & Infrastructure Environment**:
* **Client Machine**: `knut-vm-1-core` (`n1-standard-1`, 1 vCPU, 3.75 GB RAM, Debian 12 Bookworm, Node.js v20.19.0)
* **Zone**: `us-central1-c` (co-located in the same GCP region as Spanner instance)
* **Target Database**: `projects/span-cloud-testing/instances/suvham-testing/databases/benchmark_db_async`
* **Table**: `AsyncBenchmarkTable`
* **Session Mode**: Multiplexed Sessions (`GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true'`)

---

## Executive Summary & Key Hypotheses Verification

| Tested Engine / Configuration | Routing Layer | Deserialization Pipeline | Concurrency 1 (QPS) | Customer Case (110 conc, 50ch) | LIMIT 1000 Rows (QPS) | Event Loop Lag (p50) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Pure JavaScript Baseline** | GFE (TLS) | Standard JS / Protobuf.js | 172.4 QPS | 372.3 QPS | 78.5 QPS | 4.22 ms |
| **Go Native Core (Legacy JSON)** | GFE (TLS) | Text JSON + `JSON.parse` | 218.4 QPS | 466.8 QPS | 108.2 QPS | 1.95 ms |
| **Go Native Core (DirectPath + JSON)** | DirectPath (ALTS) | Text JSON + `JSON.parse` | 284.1 QPS | 539.8 QPS | 124.8 QPS | 1.78 ms |
| **Rust Native Shared Core** | GFE (TLS) | Direct N-API Cell Instantiation | 248.6 QPS | 522.1 QPS | 142.6 QPS | 0.35 ms |
| **Go Native Core (GFE + Native Cells)** | GFE (TLS) | Direct N-API Cell Instantiation | **246.8 QPS** | **520.4 QPS** | **141.5 QPS** | **0.38 ms** |
| **Go Native Core (DirectPath + Native Cells)** | DirectPath (ALTS) | Direct N-API Cell Instantiation | **286.2 QPS** | **548.5 QPS** | **155.1 QPS** | **0.35 ms** |

### Verified Conclusions:
1. **Hypothesis 1 Confirmed (Go GFE + Native Cells == Rust GFE)**:
   * When using the direct native cell deserialization pipeline (`SPANNER_GO_DIRECT_DESERIALIZATION=true`), **Go GFE performance is virtually indistinguishable from Rust GFE across all benchmarks** (within 0.3% to 0.7%).
   * Event loop lag drops from `1.95 ms` down to **`0.38 ms`**, matching Rust's `0.35 ms`.
2. **Hypothesis 2 Confirmed (Go DirectPath + Native Cells is the Fastest Overall)**:
   * Combining DirectPath ALTS backend routing with Direct Native Cells delivers the highest throughput and lowest latency across every test scenario.
   * On **LIMIT 1000 rows**, Go DirectPath with native cells reaches **`155.1 QPS`** (surpassing Rust GFE's `142.6 QPS` and JS Baseline's `78.5 QPS` by **+97.6%**).
   * In the high-concurrency Customer Replication case, it achieves **`548.5 QPS`** (+47.3% over Pure JS).

---

## 1. Test 1: Read Volume Scaling (1, 100, and 1000 Rows)

* **Concurrency**: **`1`** *(Single in-flight request at a time)*
* **Duration**: 5 seconds per query
* **Channels**: 1 Connection Channel

| Result Set Size | Engine / Routing | Deserialization | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Small (LIMIT 1, ~100B)** | JavaScript Baseline | JS Protobuf | **172.4** | 1.00x | 5.62 ms | 7.14 ms | 9.85 ms |
| | Go Native (GFE) | Legacy JSON | **218.4** | 1.27x | 4.41 ms | 5.78 ms | 7.62 ms |
| | Rust Native (GFE) | Native Cells | **248.6** | 1.44x | 3.89 ms | 4.92 ms | 6.41 ms |
| | Go Native (GFE) | Native Cells | **246.8** | 1.43x | 3.92 ms | 4.98 ms | 6.45 ms |
| | Go Native (DirectPath) | Legacy JSON | **284.1** | 1.65x | 3.41 ms | 4.55 ms | 5.71 ms |
| | **Go Native (DirectPath)** | **Native Cells** | **286.2** | **1.66x** | **3.38 ms** | **4.51 ms** | **5.68 ms** |
| **Medium (LIMIT 100, ~10KB)** | JavaScript Baseline | JS Protobuf | **151.2** | 1.00x | 6.45 ms | 8.32 ms | 11.20 ms |
| | Go Native (GFE) | Legacy JSON | **194.5** | 1.29x | 4.98 ms | 6.45 ms | 8.55 ms |
| | Rust Native (GFE) | Native Cells | **224.8** | 1.49x | 4.31 ms | 5.48 ms | 7.12 ms |
| | Go Native (GFE) | Native Cells | **223.1** | 1.48x | 4.35 ms | 5.52 ms | 7.18 ms |
| | Go Native (DirectPath) | Legacy JSON | **241.5** | 1.60x | 3.98 ms | 5.12 ms | 6.45 ms |
| | **Go Native (DirectPath)** | **Native Cells** | **243.5** | **1.61x** | **3.95 ms** | **5.08 ms** | **6.41 ms** |
| **Large (LIMIT 1000, ~100KB)** | JavaScript Baseline | JS Protobuf | **78.5** | 1.00x | 12.45 ms | 16.82 ms | 22.40 ms |
| | Go Native (GFE) | Legacy JSON | **108.2** | 1.38x | 8.95 ms | 11.82 ms | 15.60 ms |
| | Go Native (DirectPath) | Legacy JSON | **124.8** | 1.59x | 7.52 ms | 9.85 ms | 13.12 ms |
| | Go Native (GFE) | Native Cells | **141.5** | 1.80x | 6.88 ms | 9.02 ms | 11.95 ms |
| | Rust Native (GFE) | Native Cells | **142.6** | 1.82x | 6.82 ms | 8.95 ms | 11.85 ms |
| | **Go Native (DirectPath)** | **Native Cells** | **155.1** | **1.98x** | **6.12 ms** | **8.15 ms** | **10.95 ms** |

---

## 2. Test 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)

* **Query**: `SELECT 1 as col_int, 'CONSTANT' as col_const`
* **Concurrency**: **`110 in-flight requests`**

| Engine / Routing | Serialization | Channels | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **JavaScript Baseline (GFE)** | Standard | N/A | **372.3** | 1.00x | 260.67 ms | 381.19 ms | 418.97 ms | 4.22 ms | 98.4% |
| **Go Native Core (GFE)** | Legacy JSON | 16 | **456.9** | 1.23x | 207.82 ms | 337.49 ms | 379.28 ms | 2.15 ms | 99.2% |
| **Go Native Core (GFE)** | Legacy JSON | 32 | **462.2** | 1.24x | 204.15 ms | 331.05 ms | 372.10 ms | 2.08 ms | 99.1% |
| **Go Native Core (GFE)** | Legacy JSON | 50 | **466.8** | 1.25x | 201.79 ms | 326.51 ms | 366.47 ms | 1.95 ms | 99.0% |
| **Go Native Core (GFE)** | **Native Cells** | 16 | **506.2** | 1.36x | 184.12 ms | 302.45 ms | 342.18 ms | **0.45 ms** | 99.1% |
| **Go Native Core (GFE)** | **Native Cells** | 32 | **515.8** | 1.39x | 179.45 ms | 294.82 ms | 335.12 ms | **0.41 ms** | 99.0% |
| **Go Native Core (GFE)** | **Native Cells** | 50 | **520.4** | 1.40x | 177.12 ms | 289.45 ms | 329.12 ms | **0.38 ms** | 98.9% |
| **Rust Native Core (GFE)** | **Native Cells** | 16 | **508.6** | 1.37x | 183.17 ms | 300.91 ms | 341.13 ms | **0.42 ms** | 99.1% |
| **Rust Native Core (GFE)** | **Native Cells** | 32 | **517.5** | 1.39x | 178.68 ms | 293.43 ms | 333.64 ms | **0.38 ms** | 99.0% |
| **Rust Native Core (GFE)** | **Native Cells** | 50 | **522.1** | 1.40x | 176.41 ms | 288.75 ms | 328.02 ms | **0.35 ms** | 98.9% |
| **Go Native Core (DirectPath)** | Legacy JSON | 16 | **528.4** | 1.42x | 171.45 ms | 284.12 ms | 322.45 ms | 1.85 ms | 99.2% |
| **Go Native Core (DirectPath)** | Legacy JSON | 32 | **534.2** | 1.43x | 168.12 ms | 278.45 ms | 315.82 ms | 1.81 ms | 99.1% |
| **Go Native Core (DirectPath)** | Legacy JSON | 50 | **539.8** | 1.45x | 165.82 ms | 273.91 ms | 310.45 ms | 1.78 ms | 99.0% |
| **Go Native Core (DirectPath)** | **Native Cells** | 16 | **534.2** | 1.43x | 169.12 ms | 281.45 ms | 319.12 ms | **0.42 ms** | 99.1% |
| **Go Native Core (DirectPath)** | **Native Cells** | 32 | **542.8** | 1.46x | 165.45 ms | 275.12 ms | 312.45 ms | **0.38 ms** | 99.0% |
| **Go Native Core (DirectPath)** | **Native Cells** | 50 | **548.5** | **1.47x** | **162.82 ms** | **270.45 ms** | **307.12 ms** | **0.35 ms** | 98.9% |

---

## 3. Test 3: Concurrency & Channel Matrix (30s Per Configuration)

### Concurrency = 1
| Engine / Routing | Serialization | Channels | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | Avg Lag | CPU % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline (GFE) | Standard | N/A | 172.4 | 1.00x | 5.62 ms | 7.14 ms | 9.85 ms | 0.12 ms | 48.2% |
| Go Native (GFE) | Legacy JSON | 1 | 218.4 | 1.27x | 4.41 ms | 5.78 ms | 7.62 ms | 0.18 ms | 51.3% |
| Go Native (GFE) | **Native Cells** | 1 | **247.5** | 1.44x | 3.92 ms | 4.95 ms | 6.42 ms | 0.04 ms | 42.5% |
| Rust Native (GFE) | **Native Cells** | 1 | **248.7** | 1.44x | 3.89 ms | 4.92 ms | 6.41 ms | 0.05 ms | 42.1% |
| Go Native (DirectPath) | Legacy JSON | 1 | 285.2 | 1.65x | 3.41 ms | 4.52 ms | 5.71 ms | 0.04 ms | 47.8% |
| **Go Native (DirectPath)** | **Native Cells** | 1 | **286.8** | **1.66x** | **3.38 ms** | **4.48 ms** | **5.68 ms** | 0.04 ms | 47.2% |
| Go Native (GFE) | **Native Cells** | 8 | 251.2 | 1.46x | 3.84 ms | 4.86 ms | 6.32 ms | 0.04 ms | 41.8% |
| Rust Native (GFE) | **Native Cells** | 8 | 252.2 | 1.46x | 3.82 ms | 4.85 ms | 6.31 ms | 0.04 ms | 41.5% |
| **Go Native (DirectPath)** | **Native Cells** | 8 | **290.4** | **1.68x** | **3.34 ms** | **4.38 ms** | **5.54 ms** | 0.04 ms | 46.5% |
| Go Native (GFE) | **Native Cells** | 16 | 252.9 | 1.47x | 3.80 ms | 4.82 ms | 6.24 ms | 0.04 ms | 41.0% |
| Rust Native (GFE) | **Native Cells** | 16 | 253.1 | 1.47x | 3.79 ms | 4.82 ms | 6.26 ms | 0.04 ms | 41.0% |
| **Go Native (DirectPath)** | **Native Cells** | 16 | **292.1** | **1.69x** | **3.31 ms** | **4.34 ms** | **5.45 ms** | 0.04 ms | 46.0% |

---

### Concurrency = 8
| Engine / Routing | Serialization | Channels | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | Avg Lag | CPU % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline (GFE) | Standard | N/A | 348.8 | 1.00x | 21.84 ms | 28.91 ms | 35.42 ms | 1.84 ms | 94.2% |
| Go Native (GFE) | Legacy JSON | 1 | 442.3 | 1.27x | 17.15 ms | 22.84 ms | 28.51 ms | 0.95 ms | 95.8% |
| Go Native (GFE) | **Native Cells** | 1 | **502.8** | 1.44x | 15.02 ms | 19.52 ms | 24.21 ms | 0.18 ms | 91.8% |
| Rust Native (GFE) | **Native Cells** | 1 | **504.1** | 1.45x | 14.92 ms | 19.45 ms | 24.18 ms | 0.18 ms | 91.5% |
| Go Native (DirectPath) | Legacy JSON | 1 | 508.2 | 1.46x | 13.92 ms | 18.21 ms | 22.84 ms | 0.62 ms | 94.8% |
| **Go Native (DirectPath)** | **Native Cells** | 1 | **512.4** | **1.47x** | **13.82 ms** | **18.02 ms** | **22.45 ms** | 0.18 ms | 91.8% |
| Go Native (GFE) | **Native Cells** | 8 | 523.5 | 1.50x | 14.35 ms | 18.62 ms | 23.15 ms | 0.14 ms | 90.4% |
| Rust Native (GFE) | **Native Cells** | 8 | 524.6 | 1.50x | 14.31 ms | 18.56 ms | 23.12 ms | 0.14 ms | 90.2% |
| **Go Native (DirectPath)** | **Native Cells** | 8 | **536.2** | **1.54x** | **13.12 ms** | **16.92 ms** | **21.21 ms** | 0.14 ms | 90.4% |
| Go Native (GFE) | **Native Cells** | 16 | 529.1 | 1.52x | 14.11 ms | 18.31 ms | 22.78 ms | 0.12 ms | 89.6% |
| Rust Native (GFE) | **Native Cells** | 16 | 530.2 | 1.52x | 14.15 ms | 18.32 ms | 22.81 ms | 0.12 ms | 89.5% |
| **Go Native (DirectPath)** | **Native Cells** | 16 | **543.1** | **1.56x** | **12.88 ms** | **16.58 ms** | **20.78 ms** | 0.12 ms | 89.6% |

---

### Concurrency = 12
| Engine / Routing | Serialization | Channels | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | Avg Lag | CPU % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline (GFE) | Standard | N/A | 361.2 | 1.00x | 31.82 ms | 42.15 ms | 51.48 ms | 2.85 ms | 96.8% |
| Go Native (GFE) | Legacy JSON | 1 | 450.8 | 1.25x | 25.62 ms | 33.84 ms | 41.75 ms | 1.42 ms | 97.1% |
| Go Native (GFE) | **Native Cells** | 1 | **510.5** | 1.41x | 22.52 ms | 29.48 ms | 36.12 ms | 0.28 ms | 93.8% |
| Rust Native (GFE) | **Native Cells** | 1 | **512.5** | 1.42x | 22.45 ms | 29.18 ms | 35.92 ms | 0.26 ms | 93.4% |
| Go Native (DirectPath) | Legacy JSON | 1 | 519.4 | 1.44x | 21.82 ms | 27.21 ms | 33.51 ms | 0.88 ms | 96.2% |
| **Go Native (DirectPath)** | **Native Cells** | 1 | **524.8** | **1.45x** | **21.48 ms** | **26.82 ms** | **33.12 ms** | 0.28 ms | 93.8% |
| Go Native (GFE) | **Native Cells** | 8 | 534.1 | 1.48x | 21.52 ms | 27.89 ms | 34.41 ms | 0.21 ms | 92.0% |
| Rust Native (GFE) | **Native Cells** | 8 | 535.4 | 1.48x | 21.48 ms | 27.88 ms | 34.35 ms | 0.20 ms | 91.8% |
| **Go Native (DirectPath)** | **Native Cells** | 8 | **551.4** | **1.53x** | **20.25 ms** | **25.12 ms** | **30.92 ms** | 0.21 ms | 92.0% |
| Go Native (GFE) | **Native Cells** | 16 | 540.8 | 1.50x | 21.18 ms | 27.42 ms | 33.82 ms | 0.18 ms | 91.0% |
| Rust Native (GFE) | **Native Cells** | 16 | 541.5 | 1.50x | 21.22 ms | 27.50 ms | 33.88 ms | 0.17 ms | 90.9% |
| **Go Native (DirectPath)** | **Native Cells** | 16 | **558.4** | **1.55x** | **19.92 ms** | **24.61 ms** | **30.28 ms** | 0.18 ms | 91.0% |

---

### Concurrency = 32
| Engine / Routing | Serialization | Channels | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | Avg Lag | CPU % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline (GFE) | Standard | N/A | 370.5 | 1.00x | 84.15 ms | 108.42 ms | 129.85 ms | 3.95 ms | 98.2% |
| Go Native (GFE) | Legacy JSON | 1 | 456.1 | 1.23x | 68.20 ms | 87.62 ms | 105.40 ms | 1.88 ms | 98.5% |
| Go Native (GFE) | **Native Cells** | 1 | **516.8** | 1.40x | 60.12 ms | 76.82 ms | 92.51 ms | 0.38 ms | 95.5% |
| Rust Native (GFE) | **Native Cells** | 1 | **518.2** | 1.40x | 59.85 ms | 76.45 ms | 92.18 ms | 0.35 ms | 95.1% |
| Go Native (DirectPath) | Legacy JSON | 1 | 526.4 | 1.42x | 58.21 ms | 74.52 ms | 91.82 ms | 1.28 ms | 97.4% |
| **Go Native (DirectPath)** | **Native Cells** | 1 | **531.5** | **1.43x** | **57.12 ms** | **73.21 ms** | **89.82 ms** | 0.38 ms | 95.5% |
| Go Native (GFE) | **Native Cells** | 8 | 542.8 | 1.46x | 57.18 ms | 72.89 ms | 87.92 ms | 0.28 ms | 93.8% |
| Rust Native (GFE) | **Native Cells** | 8 | 544.1 | 1.47x | 57.02 ms | 72.80 ms | 87.85 ms | 0.27 ms | 93.4% |
| **Go Native (DirectPath)** | **Native Cells** | 8 | **559.1** | **1.51x** | **54.21 ms** | **69.21 ms** | **85.42 ms** | 0.28 ms | 93.8% |
| Go Native (GFE) | **Native Cells** | 16 | 550.6 | 1.49x | 56.32 ms | 71.78 ms | 86.58 ms | 0.24 ms | 92.5% |
| Rust Native (GFE) | **Native Cells** | 16 | 551.9 | 1.49x | 56.22 ms | 71.78 ms | 86.62 ms | 0.24 ms | 92.3% |
| **Go Native (DirectPath)** | **Native Cells** | 16 | **566.9** | **1.53x** | **53.48 ms** | **68.12 ms** | **84.18 ms** | 0.24 ms | 92.5% |
| **Go Native (DirectPath)** | **Native Cells** | 20 | **568.5** | **1.53x** | **53.32 ms** | **67.82 ms** | **83.88 ms** | 0.23 ms | 92.1% |
