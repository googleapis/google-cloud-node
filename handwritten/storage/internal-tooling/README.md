# nodejs-storage benchmarking

**This is not a supported Google product**

This benchmarking script intended for use by Storage client library maintainers to benchmark various workloads and collect metrics in order to improve performance of the library. Currently the benchmarking runs a Write-1-Read-3 workload and measures throughput.

## Run example:
This runs 10K iterations of Write-1-Read-3 on 5KiB to 2GiB files, and generates output to a CSV file:
```bash
$ cd nodejs-storage
$ npm install
$ cd build/internal-tooling
$ node performanceTest.js --iterations 10000
```

## CLI parameters

| Parameter | Description | Possible values | Default |
| --------- | ----------- | --------------- |:-------:|
| --iterations | number of iterations to run | any positive integer | `100` |
| --numthreads | number of threads to run | any positive integer | `1` |
| --bucket | bucket to upload/download to/from | any string bucket name | `nodejs-perf-metrics` |
| --small | number of bytes for lower bound file size | any positive integer | `5120` |
| --large | number of bytes for upper bound file size | any positive integer | `2.147e9` |
| --projectid | project ID to use | any string project ID | `undefined` |


## Workload definition and CSV headers

For each invocation of the benchmark, write a new object of random size between `small` and `large` . After the successful write, download the object in full three times. For each of the 4 operations record the following fields:

| Field | Description |
| ----- | ----------- |
| Op | the name of the operations (WRITE, READ[{0,1,2}]) |
| ObjectSize | the number of bytes of the object |
| LibBufferSize | configured to use the library default of 100 MiB |
| Crc32cEnabled | whether crc32c was computed for the operation |
| MD5Enabled | whether MD5 was computed for the operation |
| ApiName | default to JSON|
| ElapsedTimeUs | the elapsed time in microseconds the operation took |
| Status | completion state of the operation [OK, FAIL] |
| AppBufferSize | N/A |
| CpuTimeUs | N/A |