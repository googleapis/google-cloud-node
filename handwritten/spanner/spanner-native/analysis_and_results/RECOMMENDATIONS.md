# Performance Optimization Recommendations for Rust & Go Native Spanner Clients

## 1. Rust: Configure gRPC Flow Control Windows
**Status**: Implemented.

**Context**: By default, `tonic` (Rust's gRPC library) uses a 64KB (65,535 bytes) HTTP/2 flow control window. Under high concurrency with large payloads (like a `LIMIT 1000` query), this small window causes the stream to constantly stall waiting for `WINDOW_UPDATE` frames from the network.

**Optimization**: We explicitly configured the `tonic::transport::Endpoint` to use 4MB stream windows and 16MB connection windows, matching the optimized defaults of the Go GFE client. This dramatically increases throughput for large datasets.

## 2. Rust: Remove Tokio Pipeline Task Overhead
**Status**: Reverted (caused performance degradation).

**Context**: The initial Rust prototype spawned a Tokio background task to process the gRPC stream, and then used a `tokio::sync::mpsc::channel` to pipe the parsed result batches back to the task holding the N-API Threadsafe Function (`tsfn`). This introduced unnecessary context switching and channel queueing overhead.

**Optimization**: We attempted to remove the `mpsc::channel`, passing the N-API Threadsafe Function callback directly into the core `execute_streaming_sql` loop. However, this caused a performance regression. By moving the V8 queuing directly into the gRPC socket polling loop, it blocked network I/O momentarily while queuing callbacks to the main thread. We reverted this change so the `mpsc::channel` handles the backpressure and keeps the network socket loop as hot as possible.

## 3. Rust: Eliminate N-API Thrashing via Binary IPC (Future Work)
**Status**: Pending / Architectural Change.

**Context**: Currently, Rust decodes the protobuf bytes into a recursive Rust `enum` (`SpannerValue`). Then, at the N-API boundary, it iterates over every single cell and calls `env.create_string` (or `create_double`, etc.), making thousands of N-API calls per query on the V8 main thread.

**Optimization**: Instead of passing individual JS primitives across the boundary, Rust should serialize the result batch into a single flat binary byte-buffer (like Apache Arrow IPC format or a custom flat array structure) and pass a single `Uint8Array` back to Node.js. Node.js can then parse this binary buffer natively in V8. This would completely eliminate N-API boundary crossings for individual cells, solving the 100% CPU saturation on the V8 event loop.

## 4. Go: Avoid Cgo Allocator Contention (Future Work)
**Status**: Pending / Architectural Change.

**Context**: Go's native cells implementation (`format = 1`) makes continuous calls to `C.malloc` via Cgo to allocate memory for the flat struct arena (`CSpannerBatch`). At high concurrency (e.g., 32 concurrent requests), multiple Goroutines compete for glibc `malloc` locks, causing heavy contention. 

**Optimization**: Go should manage a sync.Pool of pre-allocated C-memory arenas (or byte buffers) to avoid dynamic `C.malloc` calls on every batch under high concurrency, or serialize directly into a `Uint8Array` as described in optimization #3.
