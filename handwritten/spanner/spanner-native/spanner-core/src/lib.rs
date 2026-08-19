// ==============================================================================
// LAYER 3: SHARED CORE LAYER (RUST)
// Language-agnostic core logic. standalone spanner-core crate.
// Boundary crossing: The core takes opaque protobuf bytes and routing info, 
// handles all gRPC/tonic internals, and yields strictly-typed SpannerValue structs.
// ==============================================================================

use prost::Message;
use std::sync::atomic::{AtomicUsize, Ordering};
use tokio::runtime::Runtime;
use tokio::sync::mpsc;
use tonic::{transport::{Channel, ClientTlsConfig}, Request};

// Protobuf generated types
pub mod google {
    pub mod rpc {
        tonic::include_proto!("google.rpc");
    }
    pub mod spanner {
        pub mod v1 {
            tonic::include_proto!("google.spanner.v1");
        }
    }
}
use google::spanner::v1::{ExecuteSqlRequest, spanner_client::SpannerClient, struct_type::Field, Type, TypeCode};

/// CoreClient handle created once at init
#[derive(Clone)]
pub struct CoreClient {
    pub runtime: std::sync::Arc<Runtime>,
    pub channels: Vec<Channel>,
    pub request_counter: std::sync::Arc<AtomicUsize>,
    pub auth_manager: std::sync::Arc<gcp_auth::AuthenticationManager>,
}

impl CoreClient {
    pub fn new(channel_count: usize) -> Self {
        let runtime = std::sync::Arc::new(
            tokio::runtime::Builder::new_multi_thread()
                .worker_threads(num_cpus::get())
                .enable_all()
                .build()
                .expect("Failed to build Core Tokio runtime"),
        );

        let endpoint = "https://spanner.googleapis.com:443";
        let mut tls_config = ClientTlsConfig::new().domain_name("spanner.googleapis.com");
        tls_config = tls_config.with_enabled_roots();

        let (channels, auth_manager) = runtime.block_on(async {
            let auth_manager = gcp_auth::AuthenticationManager::new().await.expect("Failed to init GCP auth");
            let mut channels = Vec::new();
            let limit = if channel_count == 0 { 1 } else { channel_count };
            for _ in 0..limit {
                let ep = tonic::transport::Endpoint::from_static(endpoint)
                    .tls_config(tls_config.clone())
                    .expect("TLS config error")
                    .initial_stream_window_size(Some(4 * 1024 * 1024))
                    .initial_connection_window_size(Some(16 * 1024 * 1024));
                channels.push(ep.connect().await.expect("Connect error"));
            }
            (channels, auth_manager)
        });

        Self {
            runtime,
            channels,
            request_counter: std::sync::Arc::new(AtomicUsize::new(0)),
            auth_manager: std::sync::Arc::new(auth_manager),
        }
    }

    pub fn close(&self) {
        // Cleanup resources if needed
    }
}

#[derive(Debug, Clone)]
pub enum SpannerValue {
    Null,
    Bool(bool),
    Int64(String),
    Float64(f64),
    String(String),
    Bytes(String),
    Timestamp(String),
    Date(String),
    Numeric(String),
    Json(String),
    Array(Vec<SpannerValue>),
    Struct(Vec<(String, SpannerValue)>),
}

#[derive(Clone)]
pub struct SpannerResult {
    pub rows: Vec<u8>,
    pub telemetry: Telemetry,
}

#[derive(Default, Clone)]
pub struct Telemetry {
    pub server_timing: Option<String>,
    pub attempt_count: u32,
}

pub struct SpannerError {
    pub code: i32,
    pub message: String,
    pub details: Vec<u8>,
}

/// Helper to convert a protobuf Value to a native SpannerValue using metadata row_type.

fn encode_value(val: &prost_types::Value, buf: &mut Vec<u8>) {
    use prost_types::value::Kind;
    if val.kind.is_none() {
        buf.push(0); // Null
        return;
    }
    match val.kind.as_ref().unwrap() {
        Kind::NullValue(_) => buf.push(0), // Null
        Kind::BoolValue(b) => {
            buf.push(3);
            buf.push(if *b { 1 } else { 0 });
        }
        Kind::NumberValue(n) => {
            buf.push(2);
            buf.extend_from_slice(&n.to_le_bytes());
        }
        Kind::StringValue(s) => {
            buf.push(1);
            let bytes = s.as_bytes();
            buf.extend_from_slice(&(bytes.len() as u32).to_le_bytes());
            buf.extend_from_slice(bytes);
        }
        _ => buf.push(0), // Fallback complex types to Null (like Go)
    }
}

/// Helper to merge chunked Protobuf values recursively
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

/// The core execute_streaming_sql function signature
pub async fn execute_streaming_sql(
    client: &CoreClient,
    routing_key: String,
    metadata: Vec<(String, String)>,
    request_bytes: Vec<u8>,
    sender: mpsc::Sender<Result<SpannerResult, SpannerError>>
) {
    let mut last_resume_token: Vec<u8> = Vec::new();
    let mut attempt_count = 0;
    
    // Maintain decoding state across retries
    let mut current_row: Vec<prost_types::Value> = Vec::new();
    let mut row_type: Option<Vec<Field>> = None;
    let mut pending_value: Option<prost_types::Value> = None;
    let mut batch: Vec<u8> = Vec::with_capacity(16 * 1024);
    let mut batch_row_count = 0u32;
    let mut col_count_saved = false;

    loop {
        attempt_count += 1;

        // Decode opaque bytes into prost struct (fresh for every retry to attach the token)
        let mut request = match ExecuteSqlRequest::decode(&request_bytes[..]) {
            Ok(req) => req,
            Err(e) => {
                let _ = sender.send(Err(SpannerError {
                    code: 3, // INVALID_ARGUMENT
                    message: format!("Failed to decode request bytes: {}", e),
                    details: vec![],
                })).await;
                return;
            }
        };

        // PRODUCTION: Attach resume_token if we are retrying a dropped connection
        if !last_resume_token.is_empty() {
            request.resume_token = last_resume_token.clone();
        }

        // Attach the metadata headers to the outgoing gRPC call
        let mut grpc_req = Request::new(request);
        for (k, v) in &metadata {
            if let Ok(meta_k) = tonic::metadata::MetadataKey::from_bytes(k.as_bytes()) {
                if let Ok(meta_v) = tonic::metadata::MetadataValue::try_from(v) {
                    grpc_req.metadata_mut().insert(meta_k, meta_v);
                }
            }
        }

        // PRODUCTION: Fetch auth token from memory cache (lock-free) and attach to every request
        match client.auth_manager.get_token(&["https://www.googleapis.com/auth/spanner.data"]).await {
            Ok(token) => {
                if let Ok(meta_v) = tonic::metadata::MetadataValue::try_from(format!("Bearer {}", token.as_str())) {
                    grpc_req.metadata_mut().insert("authorization", meta_v);
                }
            }
            Err(e) => {
                let _ = sender.send(Err(SpannerError {
                    code: 16, // UNAUTHENTICATED
                    message: format!("Failed to fetch GCP auth token: {}", e),
                    details: vec![],
                })).await;
                return;
            }
        }

        // routing_key resolves to a cached channel; here we round-robin.
        let count = client.channels.len();
        let idx = client.request_counter.fetch_add(1, Ordering::Relaxed) % count;
        let channel = client.channels[idx].clone();
        let mut spanner_client = SpannerClient::new(channel);

        let response = match spanner_client.execute_streaming_sql(grpc_req).await {
            Ok(res) => res,
            Err(e) => {
                if (e.code() == tonic::Code::Unavailable || e.code() == tonic::Code::Internal) && !last_resume_token.is_empty() {
                    continue; // Retry loop entirely transparent to JS
                }
                let _ = sender.send(Err(SpannerError {
                    code: e.code() as i32,
                    message: e.message().to_string(),
                    details: e.details().to_vec(),
                })).await;
                return;
            }
        };

        // Telemetry from header if available
        let mut telemetry = Telemetry::default();
        telemetry.attempt_count = attempt_count;
        if let Some(timing) = response.metadata().get("server-timing") {
            if let Ok(t_str) = timing.to_str() {
                telemetry.server_timing = Some(t_str.to_string());
            }
        }

        let mut stream = response.into_inner();
        let mut should_retry = false;

        loop {
            match stream.message().await {
                Ok(Some(chunk)) => {
                    // Cache the resume token for potential future retries
                    if !chunk.resume_token.is_empty() {
                        last_resume_token = chunk.resume_token.clone();
                    }

                    if row_type.is_none() {
                        if let Some(meta) = &chunk.metadata {
                            if let Some(rt) = &meta.row_type {
                                row_type = Some(rt.fields.clone());
                            }
                        }
                    }

                    let num_fields = row_type.as_ref().map(|f| f.len()).unwrap_or(0);
                    let mut values_iter = chunk.values.into_iter();

                    if let Some(pending) = pending_value.take() {
                        if let Some(first) = values_iter.next() {
                            let merged = merge_proto_values(pending, first);
                            let field_idx = current_row.len();
                        current_row.push(val);
                        
                        if num_fields > 0 && current_row.len() == num_fields {
                            
                        if !col_count_saved {
                            batch.extend_from_slice(&0u32.to_le_bytes()); // placeholder for row_count
                            batch.extend_from_slice(&(current_row.len() as u32).to_le_bytes());
                            col_count_saved = true;
                        }
                        for val in &current_row {
                            encode_value(val, &mut batch);
                        }
                        batch_row_count += 1;
                        current_row.clear();

                            if batch.len() >= 100 {
                                let mut tel = Telemetry::default();
                                tel.attempt_count = telemetry.attempt_count;
                                tel.server_timing = telemetry.server_timing.clone();
                                let _ = sender.send(Ok(SpannerResult {
                                    rows: {
                                        if batch_row_count > 0 {
                                            let rc_bytes = batch_row_count.to_le_bytes().await;
                                            batch[0..4].copy_from_slice(&rc_bytes);
                                        }
                                        let out = std::mem::take(&mut batch);
                                        batch_row_count = 0;
                                        col_count_saved = false;
                                        out
                                    },
                                    telemetry: tel
                                }));
                            }
                        }
                    }
                }
                Ok(None) => {
                    break;
                }
                Err(e) => {
                    // Check if stream dropped mid-flight
                    if (e.code() == tonic::Code::Unavailable || e.code() == tonic::Code::Internal) && !last_resume_token.is_empty() {
                        should_retry = true;
                        break; // Break inner stream consumption loop, trigger outer loop retry
                    }
                    
                    let _ = sender.send(Err(SpannerError {
                        code: e.code() as i32,
                        message: e.message().to_string(),
                        details: e.details().to_vec(),
                    })).await;
                    return;
                }
            }
        }

        if should_retry {
            continue; // Resume stream from last_resume_token
        }

        // Check trailers after consumption for server-timing usually sent here
        if let Ok(Some(trailers)) = stream.trailers().await {
            if let Some(timing) = trailers.get("server-timing") {
                if let Ok(t_str) = timing.to_str() {
                    telemetry.server_timing = Some(t_str.to_string());
                }
            }
        }

        if let Some(pending) = pending_value {
            let field_idx = current_row.len();
            let field_type = row_type.as_ref().and_then(|f| f.get(field_idx)).and_then(|f| f.r#type.as_ref());
            current_row.push(decode_value(&pending, field_type));
        }
        if !current_row.is_empty() {
            batch.push(current_row);
        }
        
        // Always send the remaining batch, or at least the telemetry if batch is empty
        let mut tel = Telemetry::default();
        tel.attempt_count = telemetry.attempt_count;
        tel.server_timing = telemetry.server_timing.clone();
        let _ = sender.send(Ok(SpannerResult {
            rows: {
            if batch_row_count > 0 {
                let rc_bytes = batch_row_count.to_le_bytes().await;
                batch[0..4].copy_from_slice(&rc_bytes);
            }
            batch
        },
            telemetry: tel
        }));
        
        break; // Stream fully consumed, exit outer retry loop
    }
}
