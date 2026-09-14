# Cloud Spanner Node.js Benchmarks

This directory contains the Node.js implementation of the Cloud Spanner client benchmarks, written in TypeScript. It is designed to test the performance of the `@google-cloud/spanner` client library under highly concurrent Poisson process arrival workloads.

---

## Scenarios
The benchmark provides the standard workload scenarios. See the top-level [README](../README.md#implemented-benchmarks) for details.

---

## Configuration Options

The benchmark supports all standard options described in the top-level [README](../README.md#configuration-options).

Supported arguments here:
- `--project`, `--instance`, `--database`: (Required) Connection details.
- `--table`: (Required) Target database table name.
- `--tps`, `--threads`, `--num-rows`: Execution parameters.
- `--burst-factor`, `--burst-duration`, `--burst-fraction`: Bursty load configuration.

---

## Features
1. **Latest Source Integration**: Automatically clones `googleapis/google-cloud-node` into a temporary directory, compiles the Spanner package from source, and packages/installs it cleanly.
2. **No Broken Symlinks**: Leverages `npm pack` to package the unreleased client library as a physical `.tgz` archive, ensuring the workspace remains robust and fully operational after temporary folder cleanups.
3. **Event Loop Performance Tuning**: Implements a high-performance hybrid scheduler. When the next Poisson task arrival is more than `1ms` away, the Event Loop yields execution using `setTimeout`, preventing busy-waiting, dropping CPU utilization to `<2%`, and eliminating I/O callback queuing latencies.
4. **Workspace Cleanliness**: Proactively backs up and restores `package.json` modifications via a shell trap on exit to keep git statuses pristine.

---

## Prerequisites
- **Node.js 18** or later
- Authenticated `gcloud` credentials

---

## Running the Benchmark

It is recommended to run the benchmark from the project root directory using the unified runner scripts:

```bash
# Run locally (compiles Spanner from source and executes point-select)
./run_benchmark_locally.sh node --project <PROJECT_ID> --instance <INSTANCE_ID> --database <DATABASE_ID> --duration 60s point-select --table <TABLE_NAME>
```
