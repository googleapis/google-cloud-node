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
use napi::{Task, Env, Result, JsObject};
use tokio::runtime::Runtime;
use tonic::transport::{Channel, ClientTlsConfig};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use gcp_auth::{TokenProvider, Token};

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
use google::spanner::v1::{ExecuteSqlRequest, ResultSet};

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
        AUTH_PROVIDER.set(provider).expect("Failed to cache AUTH_PROVIDER in OnceCell");

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

/// Asynchronous task representing one SQL query execution.
pub struct SpannerTask {
    session: String,
    sql: String,
    channel_count: i32,
}

impl Task for SpannerTask {
    type Output = Vec<Vec<String>>;
    type JsValue = JsObject;

    /// Runs on a background thread managed by libuv pool. Safe to block.
    fn compute(&mut self) -> Result<Self::Output> {
        // Select dynamic pool subset round-robin
        let count = self.channel_count.max(1) as usize;
        let idx = REQUEST_COUNTER.fetch_add(1, Ordering::Relaxed) % count.min(CHANNELS.len());
        let channel = CHANNELS[idx].clone();

        let session_clone = self.session.clone();
        let sql_clone = self.sql.clone();

        let result: std::result::Result<ResultSet, tonic::Status> = RUNTIME.block_on(async move {
            // 1. Retrieve pre-initialized Provider from OnceCell and fetch access token
            let provider = AUTH_PROVIDER
                .get()
                .ok_or_else(|| tonic::Status::internal("GCP Authentication Provider was not initialized at startup"))?;
            let token_struct = provider
                .token(&["https://www.googleapis.com/auth/spanner.data"])
                .await
                .map_err(|e| tonic::Status::internal(format!("Failed to fetch GCP token in Rust: {}", e)))?;
            let token_str = token_struct.as_str().to_string();

            // 2. Build AuthInterceptor using the retrieved token
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

            let response = client.execute_sql(request).await?;
            Ok(response.into_inner())
        });

        match result {
            Ok(rs) => Ok(decode_result_set(rs)),
            Err(status) => Err(napi::Error::from_reason(format!(
                "gRPC execute_sql failed: status = {:?}, msg = {}",
                status.code(),
                status.message()
            ))),
        }
    }

    /// Runs back on V8's main thread. Safe to allocate and construct JS Objects.
    fn resolve(&mut self, env: Env, output: Self::Output) -> Result<Self::JsValue> {
        let mut outer_array = env.create_array_with_length(output.len())?;
        for (i, row) in output.into_iter().enumerate() {
            let mut inner_array = env.create_array_with_length(row.len())?;
            for (j, cell) in row.into_iter().enumerate() {
                let js_string = env.create_string(&cell)?;
                inner_array.set_element(j as u32, js_string)?;
            }
            outer_array.set_element(i as u32, inner_array)?;
        }
        Ok(outer_array)
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

/// Asynchronously executes Spanner SQL, returning a JavaScript Promise.
/// Releases the V8 thread immediately while offloading CPU & I/O to Tokio.
#[napi]
pub fn execute_sql_native(
    session_name: String,
    sql: String,
    channel_count: i32,
) -> AsyncTask<SpannerTask> {
    AsyncTask::new(SpannerTask {
        session: session_name,
        sql,
        channel_count,
    })
}
