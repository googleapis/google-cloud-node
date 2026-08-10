# Go vtprotobuf shared-core experiment

## Answer

**Yes, against the committed Rust reference, the large-result Go-versus-Rust gap closes.** On the required single-core machine at 1000 rows and concurrency 16, median p95 latency improvement versus the paired Node.js baseline was:

- Arm A, native cells + reflection decode: **81.24%**
- Arm B, native cells + safe `UnmarshalVT`: **84.64%**
- Arm B2, native cells + raw protobuf values: **91.45%**
- Rust design-document reference: **approximately 60%** (not rerun)

A fresh Rust comparison was not valid: the unchanged Rust binary built and loaded, but returned zero rows for `SELECT 1` and real table queries. Measuring that output would benchmark a wrong result. Rust values below therefore come from committed/reference results and are not contemporaneous paired runs.

## Environment

All reported Go measurements ran on `irahul-test`, `n1-standard-1`, 1 vCPU, `us-central1-f`, Linux x86-64, Node.js `v20.20.2`, and Go `go1.25.3 linux/amd64`. Each shape used three 30-second repetitions after a 5-second warmup.

DirectPath was disabled for every run. The harness rejected either enable variable if present; each process started with `GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS` and `GOOGLE_CLOUD_ENABLE_DIRECT_PATH` absent and both disable variables true. Safe and raw logs also emitted:

```text
SPANNER_GO_RUNTIME transport=gfe direct_path=false endpoint=spanner.googleapis.com:443
```

The 16-vCPU `c3d-standard-16` phase was build and correctness validation only. None of its timings count here.

## p95 latency improvement versus paired Node.js baseline

Values are median percentages with `[min, max]` spread across three repetitions.

| Rows | Concurrency | A: reflection | B: safe VT | B2: raw VT | C: Rust reference |
|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 43.90 [32.80, 46.17] | 39.60 [31.00, 40.43] | 41.46 [22.82, 44.38] | 31.09† |
| 1 | 16 | 79.12 [78.06, 80.67] | 77.59 [77.54, 78.90] | 76.25 [75.81, 76.59] | ~89‡ |
| 100 | 1 | 43.96 [43.51, 47.56] | 38.98 [35.57, 45.17] | 42.92 [34.74, 54.65] | 34.13† |
| 100 | 16 | 75.64 [74.04, 77.47] | 78.12 [77.17, 78.50] | 79.97 [79.81, 80.20] | ~83‡ |
| 1000 | 1 | 52.09 [51.27, 52.26] | 55.51 [50.62, 55.76] | 57.49 [56.55, 59.05] | 46.79† |
| 1000 | 16 | 81.24 [81.20, 81.80] | 84.64 [84.45, 84.90] | 91.45 [91.39, 91.48] | ~60‡ |

† Derived from committed single-core p95 values in `../benchmark_results_combined.json`; different database and paired baseline.

‡ Approximate design-document chart value supplied in the experiment brief. No three-run spread was available.

Direct native p95 avoids paired-baseline drift. At 1000 rows/concurrency 16 it fell from **75.91 ms** (A), to **62.89 ms** (safe VT, 17.15% lower), to **34.59 ms** (raw VT, 54.43% lower than A).

## What changed

The Spanner dependency remains pinned at `v1.60.0`; matching generated `spannerpb` VT files are vendored. This avoids changing the high-level Spanner client. gRPC changed from `v1.63.2` to `v1.66.1`, the minimum cached version exposing `encoding.CodecV2` and `grpc.ForceCodecV2`; that transport upgrade is a benchmark confound versus Arm A and is recorded explicitly.

The safe codec uses `mem.BufferSlice`, returns an empty codec name, and follows the reference fallback chain: `PartialResultSet`, any VT unmarshaler, then `proto.Message`. `UnmarshalVTUnsafe` is not used.

The raw arm does not materialize ordinary `structpb.Value` objects. It copies each received protobuf message once, retains value wire slices while assembling 100-row batches, then copies the batch into C-owned memory. `spanner_go_napi.cc` constructs V8 numbers, strings, arrays, and objects with N-API copy operations and frees the C arenas after the callback; no Go or gRPC buffer pointer survives in JavaScript.

## Allocation evidence

Single-core, 1000-value decode microbenchmark, median of three runs:

| Decoder | ns/op | B/op | allocs/op |
|---|---:|---:|---:|
| Reflection | 464,035 | 113,640 | 3,012 |
| Safe VT | 203,845 | 113,640 | 3,012 |
| Raw values | 30,394 | 19,072 | 1 |

Safe VT removes reflection work but preserves the `structpb.Value` graph, explaining its modest end-to-end gain. Raw decoding removes the per-value graph and produces the large-result gain. Remaining raw-path costs include one gRPC-message copy, one C-arena copy per batch, N-API/V8 value construction, one cgo callback per 100 rows, and network/server time. Results do not support row-scaled cgo call overhead as the original bottleneck.

## Correctness

A, safe VT, and raw VT outputs were captured with the same deterministic query for all six row/concurrency shapes. `cmp --silent` passed for every pair. `correctness_byte_diff.txt` records byte counts and SHA-256 hashes. The captured real `PartialResultSet` unit test also proves direct `UnmarshalVT` equals reflection decode and remains valid after its input buffer is overwritten.

## Conclusion

The design document's claim that Go necessarily collapses to the Node.js baseline at large results does **not** hold for this native-cell, GFE-only implementation after decode work is fixed. Safe VT helps at the largest concurrent shape; eliminating the value object graph helps much more. Because the Rust prototype could not return correct rows in this checkout, the result closes the gap against committed Rust evidence, not a fresh same-database Rust rerun.
