# Spanner Go shared core (prototype)

A prototype that moves the hot read path of the Node Spanner client -- gRPC
transport, protobuf decoding and result-set assembly -- into a Go shared
library loaded through a N-API addon. Row objects handed back to the
application are the ordinary `Row` objects the stock client produces, so this
is a drop-in replacement.

## Status

Prototype. Only **single-use read-only SQL queries** take the fast path.
Everything else -- explicit transactions, DML, partitioned reads, reads with
`ARRAY`/`STRUCT` columns -- transparently falls back to the stock pure-JS
implementation, and that decision is always made before any row is emitted.

## How it engages

The core is **on by default** whenever the native addon is present. No
configuration is required: `new Spanner({projectId})` is enough.

| Variable | Effect |
| --- | --- |
| `SPANNER_NATIVE_CORE=off` | Force the pure-JS path. |
| `SPANNER_NATIVE_QUIET=1` | Suppress the one-line startup banner. |
| `SPANNER_NATIVE_SKIP_BUILD=1` | Skip the native build during `npm install`. |
| `SPANNER_GO_VERSION=go1.23.4` | Pin the Go toolchain used to build. |

Every process prints exactly one line on first use recording which
implementation is live, for example:

```
[spanner] Go shared core ACTIVE for single-use read-only SQL queries.
```

Check for that line before trusting any measurement taken against this branch.

## Building

The published package contains **source only**. `spanner-native/install.js`
runs as `postinstall` and builds the shared library in place, downloading a Go
toolchain if one is not already available. Building in the target environment
is deliberate: a `.so` produced elsewhere links against the build machine's
glibc and would fail to load on a different base image.

The build is required, not best-effort. If it fails, the install fails, because
a silently pure-JS install would produce benchmarks that look valid but measure
nothing. Use `SPANNER_NATIVE_SKIP_BUILD=1` to opt out.

To rebuild by hand:

```bash
bash spanner-native/spanner-go/build.sh
```

Requires Go >= 1.21 and a C++17 compiler.

## Verifying correctness

`verify_native_core.js` runs the same queries through both paths against an
in-process mock Spanner server and asserts the results are identical, including
`toJSON()` and `toJSON({wrapNumbers: true})` output:

```bash
node spanner-native/verify_native_core.js
```

It also asserts provenance -- that the native run really used the core and did
not silently fall back.

## Layout

| Path | Purpose |
| --- | --- |
| `spanner_go_napi.cc` | N-API bridge; marshals batches from Go onto the V8 thread. |
| `spanner-go/main.go` | Streaming RPC driver and result-set assembly. |
| `spanner-go/client.go` | gRPC channel pool, auth and endpoint configuration. |
| `spanner-go/decode.go` | Protobuf value decoding into the C cell representation. |
| `spanner-go/build.sh` | Compiles the Go shared library and the addon. |
| `install.js` | `postinstall` hook; bootstraps a toolchain and builds. |
| `verify_native_core.js` | Differential correctness harness. |

The JavaScript half lives in [`../src/native-core.ts`](../src/native-core.ts);
dispatch happens in `Database#runStream`.
