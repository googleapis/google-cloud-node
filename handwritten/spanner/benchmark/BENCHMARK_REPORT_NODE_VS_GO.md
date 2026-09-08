# Cloud Spanner Official Client Libraries Benchmark: Node.js vs. Go

This report compares standard customer usage of the official **Node.js client library** (`@google-cloud/spanner`) and the official **Go client library** (`cloud.google.com/go/spanner`) across concurrency levels using default dynamic channel pooling.

## 1. System & Environment Information

* **OS**: `Linux 6.1.0-47-cloud-amd64 (x64)`
* **CPU Cores**: `1 core(s)`
* **Node.js Version**: `v20.20.2`
* **Database Target**: `projects/span-cloud-testing/instances/suvham-testing/databases/benchmark_db_async`
* **Channel Pooling**: `Dynamic (Default customer library behavior)`
* **Duration Per Point**: `10 seconds` (`+2s warmup`)

## 2. Scenario 1: Point Select Query

**Query**: `SELECT 1 as col_int, 'CONSTANT' as col_const`

| Concurrency | Channel Pool | Node QPS | Go QPS | Go/Node QPS Ratio | Node P50 | Go P50 | Node P95 | Go P95 | Node CPU | Go CPU |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Dynamic (Default) | 135.9 | 262.2 | **1.93x** | 6.60 ms | 3.68 ms | 12.25 ms | 5.13 ms | 51.5% | 13.2% |
| **2** | Dynamic (Default) | 302.6 | 468.2 | **1.55x** | 5.86 ms | 4.18 ms | 11.03 ms | 6.04 ms | 58.7% | 19.5% |
| **4** | Dynamic (Default) | 467.1 | 769.6 | **1.65x** | 7.11 ms | 5.10 ms | 19.98 ms | 7.22 ms | 77.2% | 25.2% |
| **8** | Dynamic (Default) | 588.9 | 1854.8 | **3.15x** | 11.04 ms | 4.16 ms | 26.14 ms | 6.53 ms | 91.8% | 51.6% |
| **16** | Dynamic (Default) | 689.4 | 2786.2 | **4.04x** | 18.27 ms | 5.27 ms | 37.15 ms | 9.48 ms | 98.7% | 65.8% |
| **25** | Dynamic (Default) | 681.1 | 3489.7 | **5.12x** | 29.96 ms | 6.82 ms | 58.83 ms | 11.01 ms | 99.0% | 69.5% |

## 2. Scenario 2: 1000 Row Read Query

**Query**: `SELECT * FROM AsyncBenchmarkTable LIMIT 1000`

| Concurrency | Channel Pool | Node QPS | Go QPS | Go/Node QPS Ratio | Node P50 | Go P50 | Node P95 | Go P95 | Node CPU | Go CPU |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Dynamic (Default) | 26.3 | 43.9 | **1.67x** | 30.04 ms | 22.52 ms | 100.22 ms | 26.38 ms | 72.4% | 53.0% |
| **2** | Dynamic (Default) | 36.0 | 71.0 | **1.97x** | 44.08 ms | 25.60 ms | 138.45 ms | 42.70 ms | 94.2% | 78.7% |
| **4** | Dynamic (Default) | 36.2 | 84.4 | **2.33x** | 91.69 ms | 44.43 ms | 185.28 ms | 67.14 ms | 92.6% | 90.7% |
| **8** | Dynamic (Default) | 35.3 | 96.0 | **2.72x** | 240.28 ms | 79.51 ms | 290.83 ms | 133.22 ms | 91.8% | 99.7% |
| **16** | Dynamic (Default) | 35.7 | 102.0 | **2.86x** | 442.82 ms | 124.06 ms | 527.54 ms | 329.41 ms | 91.4% | 99.8% |
| **25** | Dynamic (Default) | 35.4 | 106.1 | **3.00x** | 719.29 ms | 224.32 ms | 760.48 ms | 426.15 ms | 92.6% | 99.9% |

