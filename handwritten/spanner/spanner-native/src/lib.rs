//! # Spanner Native PyO3/napi-rs Extension — GIL-Releasing gRPC Client
//!
//! ## V8 Event Loop Non-Blocking Architecture
//!
//! Node.js executes all JavaScript code on a single-threaded V8 event loop. If any CPU-heavy
//! serialization (e.g., Protobuf encoding/decoding) or blocking network I/O happens on this
//! main thread, the event loop blocks. High-throughput services frequently experience throughput
//! ceilings and latency spikes due to this V8 thread saturation.
//!
//! This Rust native extension solves the bottleneck by utilizing `napi-rs`'s asynchronous task
//! runner (`AsyncTask`). When `execute_sql_native` is called from JavaScript:
//! 1. napi-rs creates a JavaScript `Promise` and returns it immediately to V8.
//! 2. napi-rs schedules the `SpannerTask` to run on a background OS thread (managed by libuv's thread pool).
//! 3. The `SpannerTask::compute` method runs on this background thread, entirely separate from V8.
//! 4. Inside `compute`, the task dispatches gRPC requests over a highly efficient pre-established
//!    pool of HTTP/2 connection channels and waits for the database response using a global,
//!    persistent multi-threaded Tokio runtime (`RUNTIME`).
//! 5. Once the database returns the Protobuf response, it is deserialized inside Rust in parallel.
//! 6. The event loop is only re-entered in `SpannerTask::resolve` (running back on V8's thread)
//!    to convert the native Rust data types into standard JavaScript objects and resolve the Promise.

#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use once_cell::sync::{Lazy, OnceCell};
use napi::bindgen_prelude::*;
use napi::{Env, Result, JsObject, JsFunction, JsUnknown};
use napi::threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode, ErrorStrategy, ThreadSafeCallContext};
use tokio::runtime::Runtime;
use tonic::transport::{Channel, ClientTlsConfig};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use gcp_auth::TokenProvider;

// Include the generated proto code from tonic-build
pub mod google {
    pub mod spanner {
        pub mod v1 {
            tonic::include_proto!("google.spanner.v1");
        }
    }
    pub mod rpc {
        tonic::include_proto!("google.rpc");
    }
    pub mod api {
        tonic::include_proto!("google.api");
    }
}

use google::spanner::v1::spanner_client::SpannerClient;
use google::spanner::v1::{ExecuteSqlRequest, ResultSet, PartialResultSet};

/// Shared multi-threaded Tokio runtime used to drive async tonic gRPC calls.
/// Dynamically scaled to match the physical CPU core count of the VM for zero work-stealing delays.
static RUNTIME: Lazy<Runtime> = Lazy::new(|| {
    tokio::runtime::Builder::new_multi_thread()
        .worker_threads(num_cpus::get())
        .enable_all()
        .build()
        .expect("Failed to initialize background Tokio runtime")
});

/// Google Cloud Authentication Provider initialized globally inside a OnceCell.
/// Initialized at startup during connection pre-warming to avoid nested block_on panics.
static AUTH_PROVIDER: OnceCell<Arc<dyn TokenProvider>> = OnceCell::new();

/// Static pool of 50 pre-established TCP/TLS connection channels pointing to Spanner.
/// Pre-establishing and reusing these channels prevents TLS/TCP handshakes on every call.
static CHANNELS: Lazy<Vec<Channel>> = Lazy::new(|| {
    let endpoint = "https://spanner.googleapis.com:443";
    let mut tls_config = ClientTlsConfig::new().domain_name("spanner.googleapis.com");

    // System CA bundle paths to load standard certificates
    let ca_paths = [
        "/etc/ssl/certs/ca-certificates.crt",
        "/etc/pki/tls/certs/ca-bundle.crt",
        "/etc/ssl/ca-bundle.pem",
        "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem",
    ];

    let mut cert_loaded = false;
    for path in &ca_paths {
        if let Ok(cert_bytes) = std::fs::read(path) {
            let cert = tonic::transport::Certificate::from_pem(cert_bytes);
            tls_config = tls_config.ca_certificate(cert);
            cert_loaded = true;
            break;
        }
    }

    if !cert_loaded {
        // Fallback: use webpki certificates if native CA bundles are not found (e.g., on macOS)
        tls_config = tls_config.with_enabled_roots();
    }

    let mut channels = Vec::new();
    RUNTIME.block_on(async {
        // 1. Initialize the Google Auth Provider synchronously once inside the startup runtime
        let provider = gcp_auth::provider()
            .await
            .expect("Failed to initialize Google Authentication Provider in Rust");
        if AUTH_PROVIDER.set(provider).is_err() {
            panic!("Failed to cache AUTH_PROVIDER in OnceCell");
        }

        // 2. Pre-warm all 50 connection channels
        for _ in 0..50 {
            let ep = tonic::transport::Endpoint::from_static(endpoint)
                .tls_config(tls_config.clone())
                .expect("Failed to build TLS configuration endpoint");
            let channel = ep.connect()
                .await
                .expect("Failed to establish connection to spanner.googleapis.com");
            channels.push(channel);
        }
    });
    channels
});

/// Global atomic request counter to spread requests round-robin over the pre-established connection pool.
static REQUEST_COUNTER: AtomicUsize = AtomicUsize::new(0);

/// Tonic gRPC interceptor to inject routing headers and Bearer auth tokens on every request.
#[derive(Clone)]
struct AuthInterceptor {
    token: String,
    session_name: String,
}

impl tonic::service::Interceptor for AuthInterceptor {
    fn call(&mut self, mut request: tonic::Request<()>) -> std::result::Result<tonic::Request<()>, tonic::Status> {
        // 1. Inject Bearer authorization header
        let bearer = format!("Bearer {}", self.token);
        let meta_val = tonic::metadata::MetadataValue::try_from(bearer)
            .map_err(|_| tonic::Status::invalid_argument("Invalid auth token string"))?;
        request.metadata_mut().insert("authorization", meta_val);

        // 2. Extract prefix from session name projects/<P>/instances/<I>/databases/<D>/sessions/<S>
        // to inject regional routing prefix header
        if let Some(idx) = self.session_name.find("/sessions/") {
            let prefix = &self.session_name[..idx];
            if let Ok(prefix_val) = tonic::metadata::MetadataValue::try_from(prefix) {
                request.metadata_mut().insert("google-cloud-resource-prefix", prefix_val);
            }
        }
        Ok(request)
    }
}

/// Helper to convert Proto ResultSet rows to native string vectors
fn decode_result_set(rs: ResultSet) -> Vec<Vec<String>> {
    let mut rows = Vec::new();
    for row in rs.rows {
        let mut values = Vec::new();
        for val in row.values {
            values.push(proto_value_to_string(&val));
        }
        rows.push(values);
    }
    rows
}

/// Helper to merge chunked Protobuf values recursively according to Spanner streaming specification
fn merge_proto_values(mut head: prost_types::Value, tail: prost_types::Value) -> prost_types::Value {
    use prost_types::value::Kind;
    match (&mut head.kind, tail.kind) {
        (Some(Kind::StringValue(h_str)), Some(Kind::StringValue(t_str))) => {
            h_str.push_str(&t_str);
        }
        (Some(Kind::ListValue(h_list)), Some(Kind::ListValue(t_list))) => {
            let mut tail_vals = t_list.values;
            if !h_list.values.is_empty() && !tail_vals.is_empty() {
                let h_last = h_list.values.pop().unwrap();
                let t_first = tail_vals.remove(0);
                let merged = merge_proto_values(h_last, t_first);
                h_list.values.push(merged);
            }
            h_list.values.extend(tail_vals);
        }
        (Some(Kind::StructValue(h_struct)), Some(Kind::StructValue(t_struct))) => {
            for (k, v) in t_struct.fields {
                if let Some(existing_val) = h_struct.fields.remove(&k) {
                    h_struct.fields.insert(k, merge_proto_values(existing_val, v));
                } else {
                    h_struct.fields.insert(k, v);
                }
            }
        }
        _ => {}
    }
    head
}

/// Simple converter for prost well-known kinds to basic string representations
fn proto_value_to_string(value: &prost_types::Value) -> String {
    use prost_types::value::Kind;
    match &value.kind {
        Some(Kind::NullValue(_)) => "null".to_string(),
        Some(Kind::NumberValue(n)) => n.to_string(),
        Some(Kind::StringValue(s)) => s.clone(),
        Some(Kind::BoolValue(b)) => b.to_string(),
        Some(Kind::ListValue(l)) => {
            let vals: Vec<String> = l.values.iter().map(proto_value_to_string).collect();
            format!("[{}]", vals.join(", "))
        }
        Some(Kind::StructValue(s)) => {
            let mut pairs = Vec::new();
            for (k, v) in &s.fields {
                pairs.push(format!("\"{}\": {}", k, proto_value_to_string(v)));
            }
            format!("{{{}}}", pairs.join(", "))
        }
        None => "".to_string(),
    }
}

/// Asynchronously executes Spanner SQL query, returning results via a JavaScript callback.
/// Bypasses libuv thread pool completely by spawning task directly to static Tokio RUNTIME.
#[napi]
pub fn execute_sql_native(
    env: Env,
    session_name: String,
    sql: String,
    channel_count: i32,
    callback: JsFunction,
) -> napi::Result<()> {
    // Force eager evaluation of connection channels pool and authentication static
    let _ = &*CHANNELS;

    // Create a ThreadsafeFunction from the JS callback.
    // Closure executes back on the V8 thread to translate results to JS Array.
    let tsfn: ThreadsafeFunction<
        Vec<Vec<String>>,
        ErrorStrategy::CalleeHandled
    > = callback.create_threadsafe_function(
        0,
        |ctx: ThreadSafeCallContext<Vec<Vec<String>>>| {
            let rows = ctx.value;
            let mut outer = ctx.env.create_array_with_length(rows.len())?;
            for (i, row) in rows.into_iter().enumerate() {
                let mut inner = ctx.env.create_array_with_length(row.len())?;
                for (j, cell) in row.into_iter().enumerate() {
                    let js_str = ctx.env.create_string(&cell)?;
                    inner.set_element(j as u32, js_str)?;
                }
                outer.set_element(i as u32, inner)?;
            }
            Ok(vec![outer])
        }
    )?;

    let session_clone = session_name.clone();
    let sql_clone = sql.clone();

    // Spawn task DIRECTLY onto the multi-threaded static Tokio runtime
    RUNTIME.spawn(async move {
        // 1. Retrieve pre-initialized provider from OnceCell and fetch access token
        let provider = match AUTH_PROVIDER.get() {
            Some(p) => p,
            None => {
                tsfn.call(
                    Err(napi::Error::from_reason("GCP Authentication Provider was not initialized at startup")),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
                return;
            }
        };

        let token_struct = match provider.token(&["https://www.googleapis.com/auth/spanner.data"]).await {
            Ok(t) => t,
            Err(e) => {
                tsfn.call(
                    Err(napi::Error::from_reason(format!("Failed to fetch GCP token in Rust: {}", e))),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
                return;
            }
        };
        let token_str = token_struct.as_str().to_string();

        // 2. Channel selection round-robin
        let count = channel_count.max(1) as usize;
        let idx = REQUEST_COUNTER.fetch_add(1, Ordering::Relaxed) % count.min(CHANNELS.len());
        let channel = CHANNELS[idx].clone();

        // 3. Build AuthInterceptor and Client
        let interceptor = AuthInterceptor {
            token: token_str,
            session_name: session_clone.clone(),
        };
        let mut client = SpannerClient::with_interceptor(channel, interceptor);

        let request = ExecuteSqlRequest {
            session: session_clone,
            sql: sql_clone,
            ..Default::default()
        };

        // 4. Execute gRPC call on Tokio thread pool asynchronously
        let result = client.execute_sql(request).await;

        // 5. Call back to V8 thread with decoded results via ThreadsafeFunction
        match result {
            Ok(response) => {
                let rows = decode_result_set(response.into_inner());
                tsfn.call(
                    Ok(rows),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
            }
            Err(status) => {
                tsfn.call(
                    Err(napi::Error::from_reason(format!(
                        "gRPC execute_sql failed: status = {:?}, msg = {}",
                        status.code(),
                        status.message()
                    ))),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
            }
        }
    });

    Ok(())
}

/// Asynchronously executes Spanner SQL query via gRPC streaming, returning results via a JavaScript callback.
/// Bypasses libuv thread pool completely by spawning task directly to static Tokio RUNTIME.
/// Perfect for larger payloads (e.g. LIMIT 1000) for clean comparison.
#[napi]
pub fn execute_streaming_sql_native(
    env: Env,
    session_name: String,
    sql: String,
    channel_count: i32,
    callback: JsFunction,
) -> napi::Result<()> {
    // Force eager evaluation of connection channels pool and authentication static
    let _ = &*CHANNELS;

    // Create a ThreadsafeFunction from the JS callback.
    let tsfn: ThreadsafeFunction<
        Vec<Vec<String>>,
        ErrorStrategy::CalleeHandled
    > = callback.create_threadsafe_function(
        0,
        |ctx: ThreadSafeCallContext<Vec<Vec<String>>>| {
            let rows = ctx.value;
            let mut outer = ctx.env.create_array_with_length(rows.len())?;
            for (i, row) in rows.into_iter().enumerate() {
                let mut inner = ctx.env.create_array_with_length(row.len())?;
                for (j, cell) in row.into_iter().enumerate() {
                    let js_str = ctx.env.create_string(&cell)?;
                    inner.set_element(j as u32, js_str)?;
                }
                outer.set_element(i as u32, inner)?;
            }
            Ok(vec![outer])
        }
    )?;

    let session_clone = session_name.clone();
    let sql_clone = sql.clone();

    // Spawn task DIRECTLY onto the multi-threaded static Tokio runtime
    RUNTIME.spawn(async move {
        // 1. Retrieve pre-initialized provider from OnceCell and fetch access token
        let provider = match AUTH_PROVIDER.get() {
            Some(p) => p,
            None => {
                tsfn.call(
                    Err(napi::Error::from_reason("GCP Authentication Provider was not initialized at startup")),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
                return;
            }
        };

        let token_struct = match provider.token(&["https://www.googleapis.com/auth/spanner.data"]).await {
            Ok(t) => t,
            Err(e) => {
                tsfn.call(
                    Err(napi::Error::from_reason(format!("Failed to fetch GCP token in Rust: {}", e))),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
                return;
            }
        };
        let token_str = token_struct.as_str().to_string();

        // 2. Channel selection round-robin
        let count = channel_count.max(1) as usize;
        let idx = REQUEST_COUNTER.fetch_add(1, Ordering::Relaxed) % count.min(CHANNELS.len());
        let channel = CHANNELS[idx].clone();

        // 3. Build AuthInterceptor and Client
        let interceptor = AuthInterceptor {
            token: token_str,
            session_name: session_clone.clone(),
        };
        let mut client = SpannerClient::with_interceptor(channel, interceptor);

        let request = ExecuteSqlRequest {
            session: session_clone,
            sql: sql_clone,
            ..Default::default()
        };

        // 4. Execute gRPC streaming call on Tokio thread pool asynchronously
        let result = client.execute_streaming_sql(request).await;

        // 5. Stream messages and stitch them
        match result {
            Ok(response) => {
                let mut stream = response.into_inner();
                let mut rows = Vec::new();
                let mut current_row = Vec::new();
                let mut num_fields = 0;
                let mut pending_value: Option<prost_types::Value> = None;

                loop {
                    match stream.message().await {
                        Ok(Some(chunk)) => {
                            if num_fields == 0 {
                                if let Some(metadata) = &chunk.metadata {
                                    if let Some(row_type) = &metadata.row_type {
                                        num_fields = row_type.fields.len();
                                    }
                                }
                            }

                            let mut values_iter = chunk.values.into_iter();

                            if let Some(pending) = pending_value.take() {
                                if let Some(first) = values_iter.next() {
                                    let merged = merge_proto_values(pending, first);
                                    current_row.push(proto_value_to_string(&merged));
                                    if num_fields > 0 && current_row.len() == num_fields {
                                        rows.push(std::mem::take(&mut current_row));
                                    }
                                } else {
                                    pending_value = Some(pending);
                                }
                            }

                            let mut remaining_values: Vec<prost_types::Value> = values_iter.collect();

                            if chunk.chunked_value {
                                if !remaining_values.is_empty() {
                                    pending_value = remaining_values.pop();
                                }
                            }

                            for val in remaining_values {
                                current_row.push(proto_value_to_string(&val));
                                if num_fields > 0 && current_row.len() == num_fields {
                                    rows.push(std::mem::take(&mut current_row));
                                }
                            }
                        }
                        Ok(None) => {
                            break;
                        }
                        Err(status) => {
                            tsfn.call(
                                Err(napi::Error::from_reason(format!(
                                    "gRPC streaming failed during read: status = {:?}, msg = {}",
                                    status.code(),
                                    status.message()
                                ))),
                                ThreadsafeFunctionCallMode::NonBlocking
                            );
                            return;
                        }
                    }
                }

                if let Some(pending) = pending_value {
                    current_row.push(proto_value_to_string(&pending));
                }
                if !current_row.is_empty() {
                    rows.push(current_row);
                }

                tsfn.call(
                    Ok(rows),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
            }
            Err(status) => {
                tsfn.call(
                    Err(napi::Error::from_reason(format!(
                        "gRPC execute_streaming_sql failed: status = {:?}, msg = {}",
                        status.code(),
                        status.message()
                    ))),
                    ThreadsafeFunctionCallMode::NonBlocking
                );
            }
        }
    });

    Ok(())
}

