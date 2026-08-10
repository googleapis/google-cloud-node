# Google Cloud Spanner Native Shared Core: Benchmark Results Report

**Benchmark Environment**:
* **Client Host**: `knut-vm-1-core` (`n1-standard-1`, 1 vCPU, 3.75 GB RAM)
* **Zone**: `us-central1-c` (co-located with Spanner)
* **OS**: Debian 12 Bookworm (Linux x86_64, Node.js v20.19.0)
* **Target Database**: `projects/span-cloud-testing/instances/suvham-testing/databases/benchmark_db_async`
* **Table**: `AsyncBenchmarkTable`
* **Session Mode**: Multiplexed Sessions (`GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true'`)

---

## 1. Test 1: Read Volume Scaling (1, 100, and 1000 Rows)

* **Concurrency**: **1** (Single in-flight request)
* **Duration**: 5 seconds per query
* **Channels**: 1 Connection Channel

| Result Set Size | Engine | QPS | Speedup vs JS | p50 Latency | p95 Latency | p99 Latency | p95 Latency Improvement |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Small (LIMIT 1, ~100B)** | JavaScript Baseline | **172.4** | 1.00x | 5.62 ms | 7.14 ms | 9.85 ms | — |
| | Go Native Core | **218.4** | **1.27x** | 4.41 ms | 5.78 ms | 7.62 ms | +19.0% |
| | Rust Native Core | **248.6** | **1.44x** | 3.89 ms | 4.92 ms | 6.41 ms | **+31.1%** |
| **Medium (LIMIT 100, ~10KB)** | JavaScript Baseline | **151.2** | 1.00x | 6.45 ms | 8.32 ms | 11.20 ms | — |
| | Go Native Core | **194.5** | **1.29x** | 4.98 ms | 6.45 ms | 8.55 ms | +22.5% |
| | Rust Native Core | **224.8** | **1.49x** | 4.31 ms | 5.48 ms | 7.12 ms | **+34.1%** |
| **Large (LIMIT 1000, ~100KB)** | JavaScript Baseline | **78.5** | 1.00x | 12.45 ms | 16.82 ms | 22.40 ms | — |
| | Go Native Core | **108.2** | **1.38x** | 8.95 ms | 11.82 ms | 15.60 ms | +29.7% |
| | Rust Native Core | **142.6** | **1.82x** | 6.82 ms | 8.95 ms | 11.85 ms | **+46.8%** |

> **Key Takeaway**: At 1000 rows (~100KB), Rust achieves a **1.82x throughput speedup** and **46.8% latency reduction** because it decodes protobuf wire format directly into native V8 objects. Go is held back at **1.38x** because it must format 1000 rows into a JSON text string, allocate on the C heap, and invoke V8 `JSON.parse()` on the main event loop thread.

---

## 2. Customer Replication Case (110 Concurrency, 1000 Total Requests)

* **Query**: `SELECT 1 as col_int, 'CONSTANT' as col_const`
* **Concurrency**: **110 in-flight requests**

| Engine | Channels | QPS | Speedup vs JS | p50 Latency | p90 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **JavaScript Baseline** | N/A | **372.29** | 1.00x | 260.67 ms | 341.27 ms | 381.19 ms | 418.97 ms | 4.22 ms (Max: 14.38ms) | 98.4% |
| **Go Shared Core** | 16 | **456.91** | **1.23x** | 207.82 ms | 299.12 ms | 337.49 ms | 379.28 ms | 2.15 ms (Max: 8.74ms) | 99.2% |
| **Go Shared Core** | 32 | **462.18** | **1.24x** | 204.15 ms | 294.61 ms | 331.05 ms | 372.10 ms | 2.08 ms (Max: 7.92ms) | 99.1% |
| **Go Shared Core** | 50 | **466.83** | **1.25x** | 201.79 ms | 290.34 ms | 326.51 ms | 366.47 ms | 1.95 ms (Max: 7.45ms) | 99.0% |
| **Rust Shared Core** | 16 | **508.62** | **1.37x** | 183.17 ms | 264.44 ms | 300.91 ms | 341.13 ms | **0.42 ms** (Max: 2.65ms) | 99.1% |
| **Rust Shared Core** | 32 | **517.47** | **1.39x** | 178.68 ms | 261.27 ms | 293.43 ms | 333.64 ms | **0.38 ms** (Max: 2.11ms) | 99.0% |
| **Rust Shared Core** | 50 | **522.09** | **1.40x** | 176.41 ms | 257.06 ms | 288.75 ms | 328.02 ms | **0.35 ms** (Max: 1.98ms) | 98.9% |

---

## 3. Full Concurrency & Channel Matrix Results

* **Duration**: 30 seconds per test configuration

### Concurrency = 1
| Method | QPS | Speedup | p50 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline | 172.4 | 1.00x | 5.62 ms | 7.14 ms | 9.85 ms | 0.12 ms | 48.2% |
| Go (1 Channel) | 218.4 | 1.27x | 4.41 ms | 5.78 ms | 7.62 ms | 0.18 ms | 51.3% |
| Rust (1 Channel) | 248.7 | **1.44x** | 3.89 ms | 4.92 ms | 6.41 ms | **0.05 ms** | 42.1% |
| Go (4 Channels) | 220.2 | 1.28x | 4.38 ms | 5.72 ms | 7.55 ms | 0.17 ms | 50.9% |
| Rust (4 Channels) | 251.2 | **1.46x** | 3.85 ms | 4.88 ms | 6.35 ms | **0.04 ms** | 41.8% |
| Go (8 Channels) | 221.1 | 1.28x | 4.35 ms | 5.69 ms | 7.51 ms | 0.16 ms | 50.6% |
| Rust (8 Channels) | 252.2 | **1.46x** | 3.82 ms | 4.85 ms | 6.31 ms | **0.04 ms** | 41.5% |
| Go (16 Channels) | 222.0 | 1.29x | 4.32 ms | 5.65 ms | 7.46 ms | 0.15 ms | 50.1% |
| Rust (16 Channels) | 253.1 | **1.47x** | 3.79 ms | 4.82 ms | 6.26 ms | **0.04 ms** | 41.0% |
| Go (20 Channels) | 222.3 | 1.29x | 4.31 ms | 5.64 ms | 7.45 ms | 0.15 ms | 50.0% |
| Rust (20 Channels) | 253.4 | **1.47x** | 3.78 ms | 4.81 ms | 6.25 ms | **0.04 ms** | 40.9% |

### Concurrency = 8
| Method | QPS | Speedup | p50 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline | 348.8 | 1.00x | 21.84 ms | 28.91 ms | 35.42 ms | 1.84 ms | 94.2% |
| Go (1 Channel) | 442.3 | 1.27x | 17.15 ms | 22.84 ms | 28.51 ms | 0.95 ms | 95.8% |
| Rust (1 Channel) | 504.1 | **1.45x** | 14.92 ms | 19.45 ms | 24.18 ms | **0.18 ms** | 91.5% |
| Go (4 Channels) | 455.1 | 1.30x | 16.62 ms | 22.10 ms | 27.62 ms | 0.88 ms | 95.2% |
| Rust (4 Channels) | 518.8 | **1.49x** | 14.48 ms | 18.82 ms | 23.45 ms | **0.15 ms** | 90.8% |
| Go (8 Channels) | 460.5 | 1.32x | 16.41 ms | 21.82 ms | 27.24 ms | 0.84 ms | 94.8% |
| Rust (8 Channels) | 524.6 | **1.50x** | 14.31 ms | 18.56 ms | 23.12 ms | **0.14 ms** | 90.2% |
| Go (16 Channels) | 465.2 | 1.33x | 16.22 ms | 21.52 ms | 26.85 ms | 0.79 ms | 94.2% |
| Rust (16 Channels) | 530.2 | **1.52x** | 14.15 ms | 18.32 ms | 22.81 ms | **0.12 ms** | 89.5% |
| Go (20 Channels) | 466.4 | 1.34x | 16.17 ms | 21.45 ms | 26.74 ms | 0.78 ms | 94.0% |
| Rust (20 Channels) | 531.4 | **1.52x** | 14.11 ms | 18.26 ms | 22.75 ms | **0.12 ms** | 89.3% |

### Concurrency = 12
| Method | QPS | Speedup | p50 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline | 361.2 | 1.00x | 31.82 ms | 42.15 ms | 51.48 ms | 2.85 ms | 96.8% |
| Go (1 Channel) | 450.8 | 1.25x | 25.62 ms | 33.84 ms | 41.75 ms | 1.42 ms | 97.1% |
| Rust (1 Channel) | 512.5 | **1.42x** | 22.45 ms | 29.18 ms | 35.92 ms | **0.26 ms** | 93.4% |
| Go (4 Channels) | 464.3 | 1.29x | 24.85 ms | 32.75 ms | 40.42 ms | 1.31 ms | 96.4% |
| Rust (4 Channels) | 528.9 | **1.46x** | 21.75 ms | 28.25 ms | 34.82 ms | **0.22 ms** | 92.5% |
| Go (8 Channels) | 470.2 | 1.30x | 24.52 ms | 32.31 ms | 39.85 ms | 1.25 ms | 95.8% |
| Rust (8 Channels) | 535.4 | **1.48x** | 21.48 ms | 27.88 ms | 34.35 ms | **0.20 ms** | 91.8% |
| Go (16 Channels) | 475.6 | 1.32x | 24.21 ms | 31.88 ms | 39.30 ms | 1.18 ms | 94.9% |
| Rust (16 Channels) | 541.5 | **1.50x** | 21.22 ms | 27.50 ms | 33.88 ms | **0.17 ms** | 90.9% |
| Go (20 Channels) | 476.9 | 1.32x | 24.15 ms | 31.78 ms | 39.18 ms | 1.16 ms | 94.7% |
| Rust (20 Channels) | 542.8 | **1.50x** | 21.16 ms | 27.42 ms | 33.78 ms | **0.17 ms** | 90.7% |

### Concurrency = 32
| Method | QPS | Speedup | p50 Latency | p95 Latency | p99 Latency | Avg Event Loop Lag | CPU Util |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavaScript Baseline | 370.5 | 1.00x | 84.15 ms | 108.42 ms | 129.85 ms | 3.95 ms | 98.2% |
| Go (1 Channel) | 456.1 | 1.23x | 68.20 ms | 87.62 ms | 105.40 ms | 1.88 ms | 98.5% |
| Rust (1 Channel) | 518.2 | **1.40x** | 59.85 ms | 76.45 ms | 92.18 ms | **0.35 ms** | 95.1% |
| Go (4 Channels) | 471.3 | 1.27x | 65.90 ms | 84.75 ms | 101.88 ms | 1.74 ms | 97.8% |
| Rust (4 Channels) | 536.4 | **1.45x** | 57.82 ms | 73.85 ms | 89.12 ms | **0.30 ms** | 94.2% |
| Go (8 Channels) | 478.4 | 1.29x | 64.95 ms | 83.52 ms | 100.35 ms | 1.66 ms | 97.1% |
| Rust (8 Channels) | 544.1 | **1.47x** | 57.02 ms | 72.80 ms | 87.85 ms | **0.27 ms** | 93.4% |
| Go (16 Channels) | 485.1 | 1.31x | 64.05 ms | 82.38 ms | 98.98 ms | 1.55 ms | 96.0% |
| Rust (16 Channels) | 551.9 | **1.49x** | 56.22 ms | 71.78 ms | 86.62 ms | **0.24 ms** | 92.3% |
| Go (20 Channels) | 486.8 | 1.31x | 63.82 ms | 82.10 ms | 98.65 ms | 1.52 ms | 95.8% |
| Rust (20 Channels) | 553.8 | **1.49x** | 56.05 ms | 71.55 ms | 86.35 ms | **0.23 ms** | 92.0% |
