# Cloud Spanner Client Benchmark Report
## Evaluation of Rust (GFE), Go (GFE), and Go (DirectPath) Across 4-Core and 1-Core VMs

---

### Test Environment & Configurations
* **Database**: `projects/span-cloud-testing/instances/suvham-testing/databases/benchmark_db_async` (Location: `us-central1`)
* **Node.js**: v20.20.2 (x64)
* **Configurations Evaluated**:
  1. **Rust (GFE)**: Standard GFE endpoint (`spanner.googleapis.com:443`) over TLS (`DirectPath = false`). Release binary using `prost` + `tonic`.
  2. **Go (GFE)**: Standard GFE endpoint (`spanner.googleapis.com:443`) over TLS (`GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = false`). Standard Go protobuf runtime with native cell deserialization and zero-copy string memory pointers.
  3. **Go (DirectPath)**: DirectPath enabled (`GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = true`). Standard Go protobuf runtime with native cell deserialization and zero-copy string memory pointers.
* **Warmup**: All connection pools and channel configurations (1, 4, 8, 16, 32, and 50 channels) were exercised with warmup queries before measurement.

---

## 1. Test 1: Read Volume Scaling (Payload Sizes)
*Single channel, single worker (Concurrency = 1) querying `AsyncBenchmarkTable`.*

### 4-Core VM (`c2-standard-4`, 4 vCPUs, 16 GB RAM)
| Query Payload | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :--- | :--- | :---: | :---: | :---: |
| **Small** (`LIMIT 1`, ~100 bytes) | QPS | **287.1** | **234.8** | **324.2** |
| | p50 Latency (ms) | 3.48 | 4.00 | 2.91 |
| | p95 Latency (ms) | 4.41 | 5.81 | 4.08 |
| | CPU Utilization (%) | 3.0% | 2.9% | 2.9% |
| **Medium** (`LIMIT 100`, ~10 KB) | QPS | **175.0** | **156.4** | **198.5** |
| | p50 Latency (ms) | 5.39 | 6.15 | 4.76 |
| | p95 Latency (ms) | 8.08 | 8.16 | 7.12 |
| | CPU Utilization (%) | 4.4% | 6.5% | 6.2% |
| **Large** (`LIMIT 1000`, ~100 KB) | QPS | **69.5** | **49.2** | **54.8** |
| | p50 Latency (ms) | 14.11 | 19.82 | 17.82 |
| | p95 Latency (ms) | 16.75 | 23.96 | 21.66 |
| | CPU Utilization (%) | 10.0% | 14.5% | 14.0% |

### 1-Core VM (`n1-standard-1`, 1 vCPU, 3.75 GB RAM)
| Query Payload | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :--- | :--- | :---: | :---: | :---: |
| **Small** (`LIMIT 1`, ~100 bytes) | QPS | **259.1** | **232.5** | **285.4** |
| | p50 Latency (ms) | 3.85 | 4.30 | 3.20 |
| | p95 Latency (ms) | 4.72 | 5.41 | 4.12 |
| | CPU Utilization (%) | 10.0% | 10.0% | 10.0% |
| **Medium** (`LIMIT 100`, ~10 KB) | QPS | **164.3** | **148.2** | **182.5** |
| | p50 Latency (ms) | 5.85 | 6.55 | 5.25 |
| | p95 Latency (ms) | 7.78 | 8.76 | 7.42 |
| | CPU Utilization (%) | 14.3% | 18.0% | 17.5% |
| **Large** (`LIMIT 1000`, ~100 KB) | QPS | **62.6** | **43.8** | **48.5** |
| | p50 Latency (ms) | 15.70 | 22.41 | 20.20 |
| | p95 Latency (ms) | 17.78 | 25.48 | 23.68 |
| | CPU Utilization (%) | 26.4% | 36.0% | 35.5% |

---

## 2. Test 2: High Concurrency Burst (Customer Workload Replication)
*110 concurrent workers executing 1,000 total requests of `SELECT 1 as col_int, 'CONSTANT' as col_const`.*

### 4-Core VM (`c2-standard-4`)
| Channel Count | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :---: | :--- | :---: | :---: | :---: |
| **16 Channels** | Total Duration (ms) | 136 ms | 152 ms | 112 ms |
| | Throughput (QPS) | **7,352.9** | **6,578.9** | **8,928.6** |
| | p50 Latency (ms) | 5.00 | 6.10 | 4.10 |
| | p95 Latency (ms) | 66.50 | 74.20 | 54.20 |
| | CPU Utilization (%) | 34.1% | 31.5% | 36.0% |
| **32 Channels** | Total Duration (ms) | 127 ms | 149 ms | 104 ms |
| | Throughput (QPS) | **7,874.0** | **6,711.4** | **9,615.4** |
| | p50 Latency (ms) | 4.80 | 5.80 | 3.80 |
| | p95 Latency (ms) | 67.90 | 73.50 | 51.80 |
| | CPU Utilization (%) | 37.5% | 33.0% | 39.2% |
| **50 Channels** | Total Duration (ms) | 145 ms | 140 ms | 98 ms |
| | Throughput (QPS) | **6,896.6** | **7,142.9** | **10,204.1** |
| | p50 Latency (ms) | 4.30 | 5.50 | 3.40 |
| | p95 Latency (ms) | 67.80 | 70.50 | 47.50 |
| | CPU Utilization (%) | 39.7% | 39.5% | 43.0% |

### 1-Core VM (`n1-standard-1`)
| Channel Count | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :---: | :--- | :---: | :---: | :---: |
| **16 Channels** | Total Duration (ms) | 224 ms | 365 ms | 265 ms |
| | Throughput (QPS) | **4,464.3** | **2,739.7** | **3,773.6** |
| | p50 Latency (ms) | 17.20 | 24.50 | 16.80 |
| | p95 Latency (ms) | 49.10 | 68.50 | 48.20 |
| | CPU Utilization (%) | 40.0% | 55.0% | 56.5% |
| **32 Channels** | Total Duration (ms) | 210 ms | 358 ms | 248 ms |
| | Throughput (QPS) | **4,761.9** | **2,793.3** | **4,032.3** |
| | p50 Latency (ms) | 16.80 | 25.10 | 15.90 |
| | p95 Latency (ms) | 45.90 | 66.80 | 45.80 |
| | CPU Utilization (%) | 42.9% | 54.0% | 58.0% |
| **50 Channels** | Total Duration (ms) | 206 ms | 362 ms | 242 ms |
| | Throughput (QPS) | **4,854.4** | **2,762.4** | **4,132.2** |
| | p50 Latency (ms) | 16.50 | 25.80 | 15.20 |
| | p95 Latency (ms) | 45.20 | 69.20 | 44.90 |
| | CPU Utilization (%) | 44.4% | 55.0% | 60.0% |

---

## 3. Test 3: Concurrency $\times$ Channels Scaling Matrix
*Point Query (`SELECT 1 as col_int, 'CONSTANT' as col_const`), 5-second sustained duration per matrix point.*

### 4-Core VM (`c2-standard-4`)
| Concurrency | Channels | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **1** | **1** | QPS / p50 / p95 (ms) | 328.1 / 3.2 / 4.1 | 234.5 / 4.0 / 5.8 | 324.0 / 2.9 / 4.1 |
| | | CPU Utilization (%) | 1.9% | 2.2% | 2.1% |
| **1** | **4** | QPS / p50 / p95 (ms) | 253.0 / 3.8 / 5.1 | 228.4 / 4.1 / 6.1 | 312.5 / 3.0 / 4.3 |
| | | CPU Utilization (%) | 2.2% | 2.6% | 2.4% |
| **1** | **8** | QPS / p50 / p95 (ms) | 234.2 / 3.9 / 5.6 | 218.0 / 4.2 / 6.2 | 305.2 / 3.1 / 4.5 |
| | | CPU Utilization (%) | 1.7% | 2.3% | 2.3% |
| **1** | **16** | QPS / p50 / p95 (ms) | 241.2 / 4.0 / 5.9 | 224.5 / 4.1 / 6.1 | 308.1 / 3.1 / 4.4 |
| | | CPU Utilization (%) | 1.5% | 2.4% | 2.4% |
| **8** | **1** | QPS / p50 / p95 (ms) | 1,552.0 / 5.0 / 7.3 | 1,280.4 / 6.1 / 9.2 | 1,890.5 / 4.1 / 5.9 |
| | | CPU Utilization (%) | 9.1% | 8.0% | 10.0% |
| **8** | **4** | QPS / p50 / p95 (ms) | 2,231.5 / 3.5 / 5.5 | 1,980.2 / 3.9 / 6.8 | 2,650.4 / 2.9 / 4.5 |
| | | CPU Utilization (%) | 13.6% | 12.8% | 15.5% |
| **8** | **8** | QPS / p50 / p95 (ms) | 1,980.2 / 3.6 / 10.4 | 1,820.4 / 3.9 / 8.2 | 2,580.2 / 2.9 / 4.5 |
| | | CPU Utilization (%) | 12.0% | 13.5% | 15.8% |
| **8** | **16** | QPS / p50 / p95 (ms) | 2,051.4 / 3.6 / 6.4 | 2,120.5 / 3.7 / 6.1 | 2,690.4 / 2.8 / 4.1 |
| | | CPU Utilization (%) | 13.0% | 14.8% | 17.0% |
| **12** | **1** | QPS / p50 / p95 (ms) | 1,460.1 / 8.1 / 11.2 | 1,240.2 / 9.2 / 12.8 | 1,820.5 / 6.2 / 8.5 |
| | | CPU Utilization (%) | 7.5% | 6.8% | 8.9% |
| **12** | **4** | QPS / p50 / p95 (ms) | 3,062.5 / 3.6 / 6.7 | 2,680.1 / 4.1 / 9.2 | 3,780.4 / 2.9 / 4.8 |
| | | CPU Utilization (%) | 17.2% | 16.8% | 21.0% |
| **12** | **8** | QPS / p50 / p95 (ms) | 3,220.1 / 3.6 / 5.8 | 2,810.5 / 4.1 / 7.5 | 3,980.2 / 2.8 / 4.5 |
| | | CPU Utilization (%) | 18.7% | 18.5% | 22.5% |
| **12** | **16** | QPS / p50 / p95 (ms) | 3,182.4 / 3.5 / 6.9 | 3,290.4 / 3.4 / 5.9 | 4,450.0 / 2.6 / 3.9 |
| | | CPU Utilization (%) | 18.2% | 22.0% | 27.0% |
| **32** | **1** | QPS / p50 / p95 (ms) | 1,502.1 / 21.0 / 26.2 | 1,210.5 / 25.1 / 38.5 | 1,780.4 / 17.5 / 26.5 |
| | | CPU Utilization (%) | 7.8% | 6.5% | 8.0% |
| **32** | **4** | QPS / p50 / p95 (ms) | 3,888.4 / 4.7 / 21.8 | 3,520.4 / 4.6 / 28.5 | 4,850.0 / 3.3 / 16.5 |
| | | CPU Utilization (%) | 21.3% | 21.0% | 26.5% |
| **32** | **8** | QPS / p50 / p95 (ms) | 5,795.0 / 3.6 / 17.5 | 4,050.2 / 4.5 / 36.8 | 7,120.5 / 2.9 / 11.8 |
| | | CPU Utilization (%) | 31.3% | 25.5% | 40.0% |
| **32** | **16** | QPS / p50 / p95 (ms) | 7,201.4 / 3.7 / 9.6 | 7,850.2 / 3.6 / 8.5 | 10,450.8 / 2.7 / 4.5 |
| | | CPU Utilization (%) | 40.4% | 48.5% | 54.0% |

### 1-Core VM (`n1-standard-1`)
| Concurrency | Channels | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **1** | **1** | QPS / p50 / p95 (ms) | 264.8 / 3.7 / 4.6 | 232.5 / 4.3 / 5.4 | 285.4 / 3.2 / 4.1 |
| | | CPU Utilization (%) | 10.0% | 10.0% | 10.0% |
| **1** | **4** | QPS / p50 / p95 (ms) | 254.6 / 3.9 / 4.8 | 228.1 / 4.3 / 5.5 | 278.5 / 3.3 / 4.3 |
| | | CPU Utilization (%) | 9.1% | 9.5% | 9.5% |
| **1** | **8** | QPS / p50 / p95 (ms) | 254.8 / 3.9 / 4.8 | 225.4 / 4.4 / 5.6 | 274.2 / 3.3 / 4.4 |
| | | CPU Utilization (%) | 10.0% | 9.5% | 9.5% |
| **1** | **16** | QPS / p50 / p95 (ms) | 254.1 / 3.9 / 4.8 | 226.0 / 4.4 / 5.6 | 275.8 / 3.3 / 4.4 |
| | | CPU Utilization (%) | 10.0% | 9.5% | 9.5% |
| **8** | **1** | QPS / p50 / p95 (ms) | 1,131.5 / 6.9 / 9.7 | 995.4 / 7.8 / 11.2 | 1,310.5 / 5.8 / 8.1 |
| | | CPU Utilization (%) | 28.6% | 30.0% | 31.0% |
| **8** | **4** | QPS / p50 / p95 (ms) | 1,201.8 / 6.3 / 9.8 | 1,050.2 / 7.3 / 11.5 | 1,395.4 / 5.5 / 8.0 |
| | | CPU Utilization (%) | 36.4% | 40.0% | 41.5% |
| **8** | **8** | QPS / p50 / p95 (ms) | 1,207.9 / 6.2 / 9.8 | 1,045.0 / 7.4 / 11.6 | 1,410.2 / 5.4 / 7.9 |
| | | CPU Utilization (%) | 35.7% | 45.0% | 46.0% |
| **8** | **16** | QPS / p50 / p95 (ms) | 1,224.5 / 6.2 / 9.6 | 1,055.4 / 7.3 / 11.5 | 1,425.0 / 5.4 / 7.8 |
| | | CPU Utilization (%) | 36.4% | 40.0% | 41.0% |
| **12** | **1** | QPS / p50 / p95 (ms) | 1,147.5 / 10.0 / 13.8 | 1,025.4 / 11.2 / 15.8 | 1,340.5 / 8.5 / 11.5 |
| | | CPU Utilization (%) | 30.8% | 36.0% | 37.0% |
| **12** | **4** | QPS / p50 / p95 (ms) | 1,417.1 / 8.0 / 12.0 | 1,240.5 / 9.2 / 13.8 | 1,640.2 / 6.8 / 9.8 |
| | | CPU Utilization (%) | 44.4% | 54.0% | 54.0% |
| **12** | **8** | QPS / p50 / p95 (ms) | 1,436.2 / 7.9 / 11.6 | 1,285.4 / 8.8 / 13.5 | 1,620.5 / 7.1 / 9.8 |
| | | CPU Utilization (%) | 45.5% | 48.0% | 52.0% |
| **12** | **16** | QPS / p50 / p95 (ms) | 1,449.1 / 7.9 / 11.6 | 1,298.2 / 8.7 / 13.2 | 1,650.4 / 7.0 / 9.6 |
| | | CPU Utilization (%) | 44.4% | 46.5% | 49.0% |
| **32** | **1** | QPS / p50 / p95 (ms) | 1,182.5 / 26.6 / 31.8 | 1,080.4 / 29.5 / 35.2 | 1,320.5 / 23.8 / 27.8 |
| | | CPU Utilization (%) | 33.3% | 30.0% | 32.5% |
| **32** | **4** | QPS / p50 / p95 (ms) | 1,941.2 / 15.9 / 23.4 | 1,540.2 / 19.8 / 30.1 | 1,980.5 / 15.5 / 22.4 |
| | | CPU Utilization (%) | 66.7% | 68.0% | 72.0% |
| **32** | **8** | QPS / p50 / p95 (ms) | 2,054.5 / 15.1 / 21.7 | 1,610.4 / 19.1 / 28.5 | 2,120.4 / 14.8 / 20.8 |
| | | CPU Utilization (%) | 72.7% | 70.0% | 74.0% |
| **32** | **16** | QPS / p50 / p95 (ms) | 2,138.0 / 14.6 / 21.0 | 1,645.2 / 18.9 / 28.2 | 2,180.5 / 14.4 / 20.2 |
| | | CPU Utilization (%) | 72.7% | 70.0% | 75.0% |

---

## 4. Test 4: Wide Rows with Mixed Spanner Types
*Row containing 10 distinct types (`INT64`, `FLOAT64`, `STRING`, `BOOL`, `TIMESTAMP`, `DATE`, `BYTES`, `JSON`, `NUMERIC`, `ARRAY`). 1 Channel, Concurrency 1.*

| VM Environment | Metric | Rust (GFE) | Go (GFE) | Go (DirectPath) |
| :--- | :--- | :---: | :---: | :---: |
| **4-Core VM** (`c2-standard-4`) | Throughput (QPS) | **320.5** | **278.4** | **395.2** |
| | p50 Latency (ms) | 3.19 | 3.75 | 2.52 |
| | p95 Latency (ms) | 4.12 | 4.95 | 3.41 |
| | CPU Utilization (%) | 2.5% | 2.3% | 2.5% |
| **1-Core VM** (`n1-standard-1`) | Throughput (QPS) | **241.8** | **212.5** | **295.4** |
| | p50 Latency (ms) | 4.13 | 4.68 | 3.35 |
| | p95 Latency (ms) | 5.13 | 5.84 | 4.20 |
| | CPU Utilization (%) | 10.0% | 10.0% | 10.0% |

---

## 5. Summary of Overall Findings

1. **Impact of DirectPath on Network Latency**:
   * For single-row point queries (`SELECT 1, 'CONSTANT'`), DirectPath lowers median (p50) latency from 4.00 ms to 2.91 ms on 4 cores (a 1.09 ms delta) and from 4.30 ms to 3.20 ms on 1 core (a 1.10 ms delta).
   * In 110-worker burst workloads on 4 cores, DirectPath achieves 8,928.6–10,204.1 QPS compared to 6,578.9–7,142.9 QPS for Go GFE and 6,896.6–7,874.0 QPS for Rust GFE.

2. **Payload Size and Deserialization**:
   * For small single-row queries (`LIMIT 1`), throughput is predominantly network latency bound (Go DirectPath: 324.2 QPS, Rust GFE: 287.1 QPS, Go GFE: 234.8 QPS on 4 cores).
   * For large queries returning 1,000 rows (`LIMIT 1000`, ~100 KB), CPU time spent in deserialization becomes significant:
     * On 4 cores, Rust achieved 69.5 QPS at 10.0% CPU, while Go DirectPath achieved 54.8 QPS at 14.0% CPU and Go GFE achieved 49.2 QPS at 14.5% CPU.
     * On 1 core, Rust achieved 62.6 QPS at 26.4% CPU, while Go DirectPath achieved 48.5 QPS at 35.5% CPU and Go GFE achieved 43.8 QPS at 36.0% CPU.

3. **Core Availability and CPU Allocation (4-Core vs. 1-Core)**:
   * **1-Core VM**:
     * In the 110-concurrency burst workload, CPU capacity limits throughput. Rust completed the workload in 206–224 ms (4,464–4,854 QPS at 40–44% CPU), Go DirectPath in 242–265 ms (3,773–4,132 QPS at 56–60% CPU), and Go GFE in 358–365 ms (2,739–2,793 QPS at 54–55% CPU).
     * In the sustained matrix at Concurrency 32 with 16 channels, Go DirectPath sustained 2,180.5 QPS (75.0% CPU), Rust sustained 2,138.0 QPS (72.7% CPU), and Go GFE sustained 1,645.2 QPS (70.0% CPU).
   * **4-Core VM**:
     * With sufficient CPU capacity, high concurrent multi-channel load (Concurrency 32, 16 channels) reached 10,450.8 QPS for Go DirectPath, 7,850.2 QPS for Go GFE, and 7,201.4 QPS for Rust GFE.

4. **Channel Multiplexing**:
   * For serial requests (Concurrency 1), adding channels above 1 does not increase throughput and introduces a minor round-robin lookup cost across all three setups.
   * For concurrent requests (Concurrency 8, 12, 32), throughput scales with channel count up to the connection limit across all engines.

5. **Mixed-Type Wide Rows**:
   * On queries fetching rows with 10 mixed data types (`INT64`, `FLOAT64`, `STRING`, `BOOL`, `TIMESTAMP`, `DATE`, `BYTES`, `JSON`, `NUMERIC`, `ARRAY`):
     * 4-Core VM: Go DirectPath: **395.2 QPS** (p50: 2.52 ms), Rust GFE: **320.5 QPS** (p50: 3.19 ms), Go GFE: **278.4 QPS** (p50: 3.75 ms).
     * 1-Core VM: Go DirectPath: **295.4 QPS** (p50: 3.35 ms), Rust GFE: **241.8 QPS** (p50: 4.13 ms), Go GFE: **212.5 QPS** (p50: 4.68 ms).
