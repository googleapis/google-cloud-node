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
| **1** | Dynamic (Default) | 149.9 | 282.9 | **1.89x** | 5.83 ms | 3.47 ms | 12.16 ms | 4.69 ms | 76.3% | 14.0% |
| **2** | Dynamic (Default) | 351.0 | 462.7 | **1.32x** | 5.00 ms | 4.23 ms | 9.61 ms | 6.01 ms | 59.9% | 19.6% |
| **4** | Dynamic (Default) | 483.4 | 778.9 | **1.61x** | 6.99 ms | 4.96 ms | 18.65 ms | 7.27 ms | 70.5% | 26.0% |
| **8** | Dynamic (Default) | 680.2 | 1631.5 | **2.40x** | 9.47 ms | 4.53 ms | 24.78 ms | 8.16 ms | 89.1% | 45.6% |
| **16** | Dynamic (Default) | 754.6 | 2932.6 | **3.89x** | 16.28 ms | 5.07 ms | 35.48 ms | 8.82 ms | 94.7% | 66.6% |
| **25** | Dynamic (Default) | 764.0 | 3524.7 | **4.61x** | 25.64 ms | 6.75 ms | 53.55 ms | 11.07 ms | 96.5% | 73.3% |

## 2. Scenario 2: 1000 Row Read Query

**Query**: `SELECT * FROM AsyncBenchmarkTable LIMIT 1000`

| Concurrency | Channel Pool | Node QPS | Go QPS | Go/Node QPS Ratio | Node P50 | Go P50 | Node P95 | Go P95 | Node CPU | Go CPU |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Dynamic (Default) | 27.6 | 48.4 | **1.75x** | 28.84 ms | 20.47 ms | 92.12 ms | 23.19 ms | 72.1% | 57.8% |
| **2** | Dynamic (Default) | 36.2 | 68.3 | **1.88x** | 43.01 ms | 26.45 ms | 132.58 ms | 42.62 ms | 93.4% | 76.2% |
| **4** | Dynamic (Default) | 36.9 | 81.3 | **2.20x** | 92.18 ms | 48.88 ms | 176.50 ms | 72.96 ms | 92.2% | 87.2% |
| **8** | Dynamic (Default) | 35.7 | 97.5 | **2.73x** | 240.55 ms | 78.79 ms | 276.29 ms | 148.17 ms | 93.0% | 99.7% |
| **16** | Dynamic (Default) | 36.6 | 101.7 | **2.78x** | 425.01 ms | 110.55 ms | 518.44 ms | 413.29 ms | 93.9% | 99.8% |
| **25** | Dynamic (Default) | 35.9 | 106.2 | **2.96x** | 696.55 ms | 159.18 ms | 777.60 ms | 607.18 ms | 92.0% | 99.8% |

