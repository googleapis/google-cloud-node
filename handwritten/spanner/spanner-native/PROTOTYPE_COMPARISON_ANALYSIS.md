# Spanner Native Shared Core: Rust vs. Go Prototype Fairness Analysis

## 1. Original User Prompt

> This workspace contains the Spanner Node.js client library. A coworker has been prototyping a shared library that takes over the responsibility of the gRPC calls and some of the protobuf decoding from the Node.js client to improve performance. They have created two different versions of that prototype: One in Rust and one in Go.
>
> The one for Rust is here: `spanner-native/spanner-core/Cargo.toml`
>
> The one for Go is here: `spanner-native/spanner-go/go.mod`
>
> Can you compare the two? Is the coworker doing a fair comparison of the two prototypes, or is one using a more efficient setup than the other? And if so, could the one that is using a less efficient setup be improved so that it is more like the other?
>
> Do not make any code changes, only do the analysis and report back to me. Please do make a very thorough analysis.

---

## 2. Executive Summary

The current comparison between the Rust (`spanner-core`) and Go (`spanner-go`) prototypes is **not fair**. Both implementations have distinct asymmetric optimizations and architectural bottlenecks:

1. **Go is heavily penalized at the FFI / V8 boundary (Major Bottleneck):**
   The Go prototype encodes row batches into JSON-formatted text buffers, allocates memory on the C heap using `C.CString`, passes them across CGO to a C++ Node-API addon, and forces the main Node.js event loop thread (V8) to execute `JSON.parse()`. In contrast, Rust constructs V8 JavaScript objects directly in memory via `napi-rs` without intermediate JSON serialization or C-heap allocations.
2. **Rust is penalized at the network transport layer (Advantage Go):**
   The Go prototype explicitly configures HTTP/2 flow control windows to 4MB (per stream) and 16MB (per connection) in [client.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/client.go#L68-L71), allowing high-throughput streaming. The Rust prototype in [spanner-core/src/lib.rs](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-core/src/lib.rs#L55-L60) leaves `tonic` transport settings at the 64KB default, causing network stalls on large result sets.

---

## 3. Architecture & Data Flow

```mermaid
flowchart TD
    subgraph JS["Node.js Application Layer (V8 Event Loop)"]
        JS_App["poc_bridge.js / NativeSpannerDatabase"]
    end

    subgraph RustPath["Rust Prototype Pipeline"]
        R_NAPI["napi-rs Bridge (cdylib)"]
        R_Core["spanner-core (Tonic + Tokio)"]
        R_Convert["Direct V8 Object Creation via N-API (convert_to_js)"]
    end

    subgraph GoPath["Go Prototype Pipeline (Unfair Serialization Bottleneck)"]
        G_NAPI["spanner_go_napi.cc (Node-API C++)"]
        G_CGO["CGO Boundary (libspanner_go.dylib/so)"]
        G_JSON["Go JSON Formatter (writeValueJson + C.CString)"]
        G_Parse["V8 JSON.parse Call on Main Thread"]
    end

    subgraph GCP["Cloud Spanner GFE Endpoint"]
        Spanner["spanner.googleapis.com:443"]
    end

    JS_App -->|napi call| R_NAPI
    JS_App -->|napi call| G_NAPI

    R_NAPI <--> R_Core
    R_Core -->|Direct N-API| R_Convert
    R_Convert --> JS_App
    R_Core <-->|Tonic gRPC (Default 64KB Window)| Spanner

    G_NAPI <--> G_CGO
    G_CGO <--> G_JSON
    G_JSON -->|char* json_rows| G_NAPI
    G_NAPI -->|JSON.parse| G_Parse
    G_Parse --> JS_App
    G_CGO <-->|Go gRPC (Tuned 4MB/16MB Window)| Spanner
```

---

## 4. Component Comparison Matrix

| Architectural Dimension | Rust Prototype (`spanner-core`) | Go Prototype (`spanner-go`) |
| :--- | :--- | :--- |
| **Module Compilation** | Direct `cdylib` N-API C-extension loaded natively via Node.js `dlopen`. | `-buildmode=c-shared` dynamic library linked to a custom C++ Node-API addon (`spanner_go.node`). |
| **gRPC & Protobuf Stack** | [tonic](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-core/Cargo.toml#L8) + [prost](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-core/Cargo.toml#L9) (Rust async native). | [google.golang.org/grpc](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/go.mod#L8) + [google.golang.org/protobuf](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/go.mod#L9). |
| **Async Runtime & GC** | Zero GC; Tokio multi-threaded background task worker pool. | Go Runtime embedded into dynamic library (GC goroutines + CGO stack management). |
| **FFI / Data Transfer** | **Direct V8 Object Construction:** Maps Rust `SpannerValue` directly to V8 JS objects via N-API in [src/lib.rs](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/src/lib.rs#L40-L72). | **Double Serialization / `JSON.parse`:** Serializes to JSON string in Go, allocates C memory, and invokes V8 `JSON.parse` in C++. |
| **HTTP/2 Transport Tuning** | Default HTTP/2 settings (64KB stream window size). | Explicitly tuned: 4MB stream window, 16MB connection window in [client.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/client.go#L68-L71). |

---

## 5. Detailed Breakdown of Inequities

### 5.1 Go Serialization & Parsing Overhead

In [spanner-go/main.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/main.go#L98-L123) and [spanner-go/decode.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/decode.go#L14-L88), Go converts decoded protobuf rows into a JSON string buffer:

```go
func writeBatchJson(batch [][]*structpb.Value, rowType []*spannerpb.StructType_Field) *C.char {
    var buf bytes.Buffer
    // ... string escaping & JSON formatting ...
    return C.CString(buf.String()) // C-heap allocation!
}
```

Then in [spanner_go_napi.cc](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner_go_napi.cc#L108-L116), the C++ Node-API bridge parses that string on the main V8 thread using `JSON.parse`:

```cpp
napi_get_named_property(env, global, "JSON", &json_global);
napi_get_named_property(env, json_global, "parse", &parse_fn);
napi_create_string_utf8(env, batch->json_rows, NAPI_AUTO_LENGTH, &json_str);
napi_call_function(env, json_global, parse_fn, 1, &json_str, &rows_val);
```

**Penalties on the Go Prototype:**
- **Triple Allocation:** Allocate Go `bytes.Buffer` $\rightarrow$ Allocate `C.CString` on C-heap via `malloc` $\rightarrow$ Allocate V8 String in JS heap $\rightarrow$ Parse into JS objects.
- **V8 Main-Thread CPU Overhead:** Defeats the purpose of native offloading by forcing V8 to parse JSON text on the main event loop thread.
- **Memory Pressure:** Every batch payload exists simultaneously across Go memory, C heap memory, V8 string memory, and V8 object memory.

### 5.2 CGO Stack-Switching & Callback Cost

Every batch transmitted from Go calls back to C via `bridge_callback` in [spanner-go/main.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/main.go#L18-L32). CGO function invocations incur non-trivial overhead (goroutine stack switching, OS thread locking, and scheduler preemption checks). Rust compiles directly into a native C ABI `cdylib` using `napi-rs` with zero stack-switching overhead.

### 5.3 Go Runtime & `structpb.Value` Allocation Pressure

Go uses `structpb.Value` to hold protobuf values. In Go, `structpb.Value` contains an interface field (`isStruct_Value_Kind`), causing heavy heap allocations per cell. Because Go `-buildmode=c-shared` embeds the Go runtime and garbage collector inside the `.dylib`/`.so`, this triggers frequent GC sweep cycles under high read throughput.

### 5.4 Rust Missing HTTP/2 Transport Window Tuning

While Go is penalized at the FFI layer, Rust is penalized at the network layer. In [spanner-go/client.go](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-go/client.go#L68-L71), Go tunes HTTP/2 flow control windows:
- 4MB per-stream window size
- 16MB per-connection window size

Rust's [spanner-core/src/lib.rs](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-core/src/lib.rs#L55-L60) leaves Tonic's `Endpoint` at default HTTP/2 window sizes (64KB), causing network stream stalls when streaming medium-to-large result sets.

---

## 6. Actionable Improvements to Make the Setup Fair

### 1. Replace JSON Formatting in Go with Direct C-Struct / Binary Buffer Passing
- **Option A (Direct C Struct Passing):** Allocate flat C arrays of row/cell primitives in C memory and pass pointers across CGO, constructing V8 objects directly in `spanner_go_napi.cc` without text conversion.
- **Option B (Packed Binary ArrayBuffer Transfer):** Encode row batches into a compact binary buffer in Go and pass it as an `ArrayBuffer` directly to Node.js, letting JavaScript unpack typed arrays without running `JSON.parse`.

### 2. Eliminate Per-Batch `C.CString` `malloc` / `free`
Instead of calling `C.CString(buf.String())` (which executes `malloc` and `strcpy`), pass Go slice pointers `unsafe.Pointer(&slice[0])` and lengths directly to CGO.

### 3. Avoid `structpb.Value` Heap Boxing in Go
Decode `spannerpb.PartialResultSet` bytes directly into flat native Go primitives (`string`, `float64`, `int64`, `[]byte`) rather than wrapping every cell in a heap-allocated `structpb.Value` interface struct.

### 4. Align Rust HTTP/2 Transport Settings
Update [spanner-core/src/lib.rs](file:///Users/loite/google-cloud-node/handwritten/spanner/spanner-native/spanner-core/src/lib.rs#L55-L60) to tune Tonic's transport options to match Go:
```rust
let ep = tonic::transport::Endpoint::from_static(endpoint)
    .tls_config(tls_config.clone())?
    .initial_stream_window_size(Some(4 * 1024 * 1024))
    .initial_connection_window_size(Some(16 * 1024 * 1024));
```

---

## 7. Re-Benchmark Checklist

- [ ] **Go FFI:** Remove `writeBatchJson` and `JSON.parse`. Use direct C-struct or binary buffer passing.
- [ ] **Go Memory:** Eliminate `C.CString` heap allocations; pass Go byte slices directly to C.
- [ ] **Go Proto:** Bypass `structpb.Value` intermediate structures during stream consumption.
- [ ] **Rust Network:** Configure 4MB stream / 16MB connection HTTP/2 windows in `tonic`.
