# Spanner Go Shared Core — IPC Transport (protocol v1)

This document specifies the out-of-process (IPC) transport between the Node.js
client (`spanner_ipc.node` N-API addon) and the Go Shared Core sidecar
(`spanner-go/spanner-go-sidecar`, built from `spanner-go/sidecar/`).

The IPC transport is a drop-in alternative to the in-process FFI transport
(`spanner_go.node` + `libspanner_go.so`). Both transports:

* run the same Go Shared Core (`cloud.google.com/go/spanner/sharedcore`
  `Service.ExecuteStreamingSQL` → `spanner.SharedCoreTransport`);
* receive the same pre-encoded `ExecuteSqlRequest` bytes from Node.js (request
  encoding stays in Node.js);
* deliver the same packed cell arena (`sharedcore.PackedCell` + byte arena) and
  the same out-of-band metadata/stats/telemetry fields;
* materialize JS values with the same C++ code (`spanner_batch_js.h`).

The only difference is the boundary: FFI calls Go in-process through cgo and
receives batches through a `napi_threadsafe_function`; IPC writes request
frames to a Unix domain socket and a native reader thread receives batch
frames, then posts them to the same kind of `napi_threadsafe_function`.

Select the transport with `SPANNER_NATIVE_CORE_TRANSPORT=ipc|ffi` (on this
branch the default is `ipc` whenever `NATIVE_CORE_ENABLED=true`).

## 1. Process model

* One sidecar process per Node.js **process** (shared by the main thread and
  all `worker_threads`, exactly like the single in-process Go runtime of the
  FFI transport). It is spawned lazily by the addon (`posix_spawn`) on the
  first `init()`.
* The addon creates `N` `socketpair(AF_UNIX, SOCK_STREAM)` connections
  (`SPANNER_NATIVE_IPC_CONNECTIONS`, default 1) and passes the child ends as
  file descriptors `3 .. 3+N-1`. The sidecar is started as
  `spanner-go-sidecar --fds=3[,4,...] --parent-pid=<node pid>`.
  Unnamed socket pairs are not reachable by any other process.
* The sidecar stays in the Node.js process group (job control applies to
  both) but ignores `SIGINT`, `SIGHUP` and `SIGTERM`, so a terminal Ctrl-C or a
  service manager's group-wide `SIGTERM` cannot kill in-flight queries while
  Node.js drains gracefully. It exits when:
  1. every connection reached EOF (the Node.js process exited or closed the
     sockets — this is the primary lifeline and also covers `SIGKILL` of the
     Node.js process),
  2. it receives a `SHUTDOWN` frame, or
  3. its parent pid changes (checked once per second).
  (`SIGKILL` still stops it; the debug `--socket` mode also honors `SIGTERM`.)
* If the sidecar dies, the addon fails every in-flight stream with
  `UNAVAILABLE`, and transparently respawns the sidecar and re-initializes
  service handles on the next call. After a failed spawn or service INIT,
  calls fail fast for 2 s instead of each blocking on another attempt.
* Locking: blocking round trips (INIT, CLOSE, STATS) never hold the addon's
  process-wide lock, so one isolate creating a client cannot stall queries of
  other isolates. CLOSE is fire-and-forget.
* Debug mode: `spanner-go-sidecar --socket=/path/to.sock` listens on a
  filesystem socket instead of inherited fds and does not exit on EOF.

## 2. Framing

All integers are little-endian. Every frame is a 16-byte header followed by
`payload_len` bytes.

| Offset | Type  | Field                                                           |
| -----: | :---- | :-------------------------------------------------------------- |
|      0 | `u32` | `payload_len` (bytes after the header, at most 1 GiB)           |
|      4 | `u8`  | `type`                                                          |
|      5 | `u8`  | `flags`                                                         |
|      6 | `u16` | reserved, `0`                                                   |
|      8 | `u64` | `id` (stream id for stream frames, request id for request/reply) |

Strings inside payloads are encoded as `u32 length` + bytes (no terminator)
unless stated otherwise.

### 2.1 Frame types

Node.js → sidecar:

| Type | Name             | `id`        | Payload                                   | Reply          |
| ---: | :--------------- | :---------- | :---------------------------------------- | :------------- |
| 0x02 | `INIT`           | request id  | see §3                                    | `INIT_RESULT`  |
| 0x03 | `CLOSE_SERVICE`  | request id  | `i64 service_handle`                      | `CLOSE_RESULT` |
| 0x04 | `SET_ROOT_CERTS` | 0           | PEM bytes (raw, no length prefix)         | none           |
| 0x05 | `EXECUTE`        | stream id   | see §4                                    | `BATCH`...     |
| 0x06 | `ACK`            | stream id   | empty                                     | none           |
| 0x07 | `PAUSE`          | stream id   | empty                                     | none           |
| 0x08 | `RESUME`         | stream id   | empty                                     | none           |
| 0x09 | `CANCEL`         | stream id   | empty                                     | none           |
| 0x0A | `STATS`          | request id  | empty                                     | `STATS_RESULT` |
| 0x0B | `PING`           | request id  | empty                                     | `PONG`         |
| 0x0C | `SHUTDOWN`       | 0           | empty                                     | none           |

Sidecar → Node.js:

| Type | Name           | `id`       | Payload                                                     |
| ---: | :------------- | :--------- | :---------------------------------------------------------- |
| 0x01 | `READY`        | 0          | `u32 protocol_version (=1)`, `u32 pid`, `u32 gomaxprocs`, `u32 num_cpu` |
| 0x81 | `INIT_RESULT`  | request id | `i64 handle` (`<= 0` = failure), `str error`                 |
| 0x82 | `CLOSE_RESULT` | request id | `i32 rc` (`0` = OK, `-1` = unknown handle / error)           |
| 0x83 | `BATCH`        | stream id  | see §5; `flags` bit 0 (`0x01`) = FINAL                       |
| 0x84 | `STATS_RESULT` | request id | 16 × `u64` (see §6)                                          |
| 0x85 | `PONG`         | request id | empty                                                        |

The sidecar sends `READY` on every connection immediately after it starts
serving it. Unknown frame types are a protocol error: the receiver closes the
connection.

## 3. `INIT` payload

Mirrors the arguments of the FFI export `SpannerCoreInit` plus the pending
universe domain set by `setNextUniverseDomain`:

```
str endpoint
i32 num_channels
i32 use_plaintext
i32 disable_builtin_auth
i32 enable_direct_access
str user_agent
i32 dcp_enabled
i32 dcp_initial_channels
i32 dcp_min_channels
i32 dcp_max_channels
f64 dcp_max_rpc_per_channel
f64 dcp_min_rpc_per_channel
i32 dcp_selection_strategy
str universe_domain
```

Semantics are identical to `SpannerCoreInit`: services are de-duplicated by
the full configuration key and reference counted; `CLOSE_SERVICE` mirrors
`SpannerCoreClose` (decrement; on the last reference mark the service closing,
close paused streams, and close the underlying transport once no RPC is
active).

## 4. `EXECUTE` payload

```
off  0  i64 service_handle
off  8  i32 timeout_ms
off 12  i32 skip_metadata     (FFI bit layout, see below)
off 16  i32 batch_row_size
off 20  u32 routing_key_len
off 24  u32 headers_len
off 28  u32 request_len
off 32  routing_key bytes | headers bytes | request bytes (ExecuteSqlRequest wire bytes)
```

`skip_metadata` bits (identical to the FFI `SpannerCoreExecuteStreamingSqlAsync`
argument): bit 0 `SkipMetadata`, bit 1 `SkipReadTimestamp`, bit 2
`nonCancellable` (`Database#run` / `Snapshot#run` fast path), bit 3 telemetry
enabled (`SkipTelemetry = bit3 == 0`), bits 8..31 `ExpectedSchemaHash`.

The headers string uses the same `\n`-delimited `key:value` format (or JSON
object) as FFI, including the `x-goog-spanner-request-id` split.

Stream semantics are identical to the FFI goroutine in
`SpannerCoreExecuteStreamingSqlAsync`:

* `nonCancellable`: `context.Background()`, no flow control,
  `FlushOnChunkBoundary = false`. The stream is still registered so that a
  `CANCEL` (sent by Node.js when the JS callback gives up, like the FFI
  abandoned flag) stops it at the next batch.
* otherwise: cancellable context, flow-control entry (`inFlight`, `paused`),
  `FlushOnChunkBoundary = true`. Before sending a non-last batch the sidecar
  waits while `paused || inFlight >= 2`; every sent non-last batch increments
  `inFlight`; `ACK` decrements it; `PAUSE`/`RESUME` toggle `paused`; `CANCEL`
  cancels the context.
* `StreamRequest` fields: `MaxUncheckpointedChunks = 10`,
  `ReuseArenaBuffers = true`, `HasTimeout = timeout_ms != 0`, header cache and
  trace context handling identical to FFI.
* The sidecar sends **exactly one** FINAL batch per stream (EOF `status = 1`,
  possibly carrying the last rows, or error `status < 0`), including for
  cancelled streams and unknown service handles
  (`FAILED_PRECONDITION: invalid or closed SpannerCore service handle`).
  Go panics are converted to an `INTERNAL` FINAL batch.
* Stream ids are allocated by Node.js and are unique per connection; control
  frames for a stream are sent on the connection that carried its `EXECUTE`.

## 5. `BATCH` payload

A 112-byte fixed header followed by 11 variable regions. Field meanings are
identical to `CSpannerBatch` in `spanner-go/main.go`.

```
off   0  i32 status               0 = rows (non-final), 1 = EOF (final), <0 = error (final)
off   4  i32 error_code           gRPC code when status < 0
off   8  i32 num_rows
off  12  i32 num_cols
off  16  i32 total_cells          number of 24-byte cells in region 1 (top-level + nested)
off  20  i32 byte_arena_len
off  24  i32 has_read_timestamp
off  28  i32 read_timestamp_nanos
off  32  i64 read_timestamp_sec
off  40  f64 gfe_latency_ms       -1 when absent
off  48  f64 afe_latency_ms       -1 when absent
off  56  i32 attempt_count
off  60  i32 direct_path_used
off  64  u32 schema_hash
off  68  u32 error_msg_len
off  72  u32 retry_info_len
off  76  u32 metadata_len
off  80  u32 stats_len
off  84  u32 precommit_len
off  88  u32 logs_len
off  92  u32 request_id_len
off  96  u32 status_len
off 100  u32 trailers_len
off 104  u32 reserved (0)
off 108  u32 reserved (0)
```

Regions follow in this exact order. Each region starts at an offset that is a
multiple of 8 (relative to the payload start) and is zero-padded to the next
multiple of 8. String regions carry a trailing NUL byte when their length is
non-zero (the NUL is not counted in the `*_len` field).

| # | Region          | Size                                  |
| -: | :-------------- | :------------------------------------ |
| 1 | cells           | `total_cells * 24` (`PackedCell` / `CSpannerCell` layout: `i32 kind`, `u32 flags`, `u64 num`, `u32 offset`, `u32 len`) |
| 2 | byte arena      | `byte_arena_len`                      |
| 3 | metadata (`ResultSetMetadata` proto) | `metadata_len` |
| 4 | stats (`ResultSetStats` proto)       | `stats_len`    |
| 5 | precommit token proto                | `precommit_len` |
| 6 | `google.rpc.RetryInfo` proto         | `retry_info_len` |
| 7 | `google.rpc.Status` proto            | `status_len`   |
| 8 | error message (string + NUL)         | `error_msg_len (+1)` |
| 9 | request id (string + NUL)            | `request_id_len (+1)` |
| 10 | logs JSON (string + NUL)            | `logs_len (+1)` |
| 11 | error trailers JSON (string + NUL)  | `trailers_len (+1)` |

`payload_len = 112 + Σ pad8(region_size)`.

Population rules mirror `populateSuccessBatchWithSkip`, `populateTelemetry`,
`populateErrorBatch` and `attachLogsToBatch` in `spanner-go/main.go`
(`schema_hash` only when `!SkipMetadata || len(metadata) > 0`; telemetry only on
FINAL batches; `-bin` trailer values base64-encoded; logs drained on every
batch).

The receiver validates every length, every string/bytes cell
(`offset + len <= byte_arena_len`) and every ARRAY/STRUCT cell
(`child_start > cell_index`, `child_start + count <= total_cells`) on the
reader thread before the batch reaches V8.

## 6. `STATS_RESULT` payload

16 × `u64`: `utime_us`, `stime_us`, `maxrss_kb`, `nvcsw`, `nivcsw`,
`goroutines`, `gomaxprocs`, `num_cpu`, `pid`, `active_streams`, `services`,
`heap_alloc_bytes`, `heap_sys_bytes`, `num_gc`, `rss_bytes` (current resident
set size; Linux `/proc/self/statm`, `0` when unavailable), reserved.

Benchmarks must add the sidecar CPU (`utime_us + stime_us`, or
`/proc/<pid>/stat`) and memory (`rss_bytes`) to the Node.js process numbers
when comparing IPC with FFI; the FFI transport's Go runtime CPU and memory are
already part of the Node.js process (`process.cpuUsage()`,
`process.memoryUsage().rss`). From JavaScript use
`getNativeCoreSidecarStats()` / `getNativeCoreTransportInfo()` exported by
`build/src/native-core.js`.

## 7. Known limitations

* Node.js threads never block on the sidecar: every request write is a single
  non-blocking `sendmsg`; when the socket buffer is full the remainder goes to
  an ordered userspace queue (capped at 64 MiB) drained by a per-connection
  writer thread. A sidecar that accepts no request bytes for 30 s is treated as
  wedged: its streams fail with `UNAVAILABLE` and it is killed and respawned on
  the next call. There is no liveness probe beyond that, so a sidecar that is
  stalled (e.g. `SIGSTOP`ped) while no request is pending holds its streams
  until it resumes; query deadlines are enforced inside Go.
* Spawning (first use, or after a crash) runs synchronously on the calling
  thread, like the FFI `init()`: normally tens of milliseconds, bounded by
  `SPANNER_NATIVE_IPC_STARTUP_TIMEOUT_MS` (15 s) if the sidecar never becomes
  ready.
* Crash detection relies on the addon reaping its own child (`waitid` with
  `WNOWAIT`); another library calling `waitpid(-1)` in the same process could
  steal the exit status (detection then still happens through socket EOF).
* Unix only (Linux, macOS). Windows keeps the FFI transport by default.
* Payload frames are limited to 1 GiB; larger batches end the stream with
  `RESOURCE_EXHAUSTED` (use a smaller batch row size).
