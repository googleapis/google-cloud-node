use std::str::FromStr;
use std::sync::{Arc, OnceLock};

static USE_NO_COPY: OnceLock<bool> = OnceLock::new();

use napi_derive::napi;
use napi::{JsFunction, Result, Error, Status, Env, JsUnknown, JsObject};
use napi::bindgen_prelude::Buffer;
use napi::threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode};

use google_cloud_spanner::google::spanner::v1::PartialResultSet;
use google_cloud_spanner::client::Spanner;
use google_cloud_gax::options::internal::RequestOptionsExt;

// Define payload enum for pass-through bytes vs V8 direct mapped rows
#[derive(Clone, Debug)]
pub enum ProxyPayload {
    Bytes(Vec<u8>),
    Rows {
        rows: Vec<Vec<google_cloud_spanner::value::Value>>,
        metadata: Option<google_cloud_spanner::result::ResultSetMetadata>,
    },
}

// Macro to wrap threadsafe function calls and print status on failure
macro_rules! call_tsfn_batch {
    ($tsfn:expr, $stream_id:expr, $batch:expr) => {
        let status = $tsfn.call(Ok(($stream_id, Ok($batch))), ThreadsafeFunctionCallMode::NonBlocking);
        if status != napi::Status::Ok {
            println!("[Rust Proxy] stream_tsfn.call failed with status: {:?}", status);
        }
    };
}

macro_rules! call_tsfn_error {
    ($tsfn:expr, $stream_id:expr, $err:expr) => {
        let status = $tsfn.call(Ok(($stream_id, Err($err))), ThreadsafeFunctionCallMode::NonBlocking);
        if status != napi::Status::Ok {
            println!("[Rust Proxy] stream_tsfn.call failed with status: {:?}", status);
        }
    };
}

// ==========================================
//          SPANNER gRPC CLIENT PROXY
// ==========================================

#[napi]
pub struct NativeGrpcProxy {
    endpoint: String,
    spanner_client: Spanner,
    stream_tsfn: ThreadsafeFunction<(u32, std::result::Result<Vec<(u32, ProxyPayload)>, Error>)>,
    runtime: Arc<tokio::runtime::Runtime>,
}



fn convert_prost_value_to_js(env: &Env, val: &prost_types::Value) -> Result<JsUnknown> {
    use prost_types::value::Kind;
    match &val.kind {
        Some(Kind::NullValue(_)) | None => env.get_null().map(|n| n.into_unknown()),
        Some(Kind::BoolValue(b)) => env.get_boolean(*b).map(|b| b.into_unknown()),
        Some(Kind::NumberValue(n)) => env.create_double(*n).map(|n| n.into_unknown()),
        Some(Kind::StringValue(s)) => env.create_string(s).map(|s| s.into_unknown()),
        Some(Kind::ListValue(l)) => {
            let mut js_arr = env.create_array_with_length(l.values.len())?;
            for (i, item) in l.values.iter().enumerate() {
                let js_item = convert_prost_value_to_js(env, item)?;
                js_arr.set_element(i as u32, js_item)?;
            }
            Ok(js_arr.into_unknown())
        }
        Some(Kind::StructValue(s)) => {
            let mut js_obj = env.create_object()?;
            for (k, v) in &s.fields {
                let js_val = convert_prost_value_to_js(env, v)?;
                js_obj.set_named_property(k, js_val)?;
            }
            Ok(js_obj.into_unknown())
        }
    }
}

fn convert_spanner_value_to_js(env: &Env, val: &google_cloud_spanner::value::Value) -> Result<JsUnknown> {
    use google_cloud_spanner::value::Kind;
    match val.kind() {
        Kind::Null => env.get_null().map(|n| n.into_unknown()),
        Kind::Bool => env.get_boolean(val.as_bool()).map(|b| b.into_unknown()),
        Kind::Number => env.create_double(val.as_f64()).map(|n| n.into_unknown()),
        Kind::String => env.create_string(val.as_string()).map(|s| s.into_unknown()),
        Kind::List => {
            let list = val.as_list();
            let mut js_arr = env.create_array_with_length(list.len())?;
            for (i, item) in list.iter().enumerate() {
                let js_item = convert_spanner_value_to_js(env, item)?;
                js_arr.set_element(i as u32, js_item)?;
            }
            Ok(js_arr.into_unknown())
        }
        Kind::Struct => {
            let st = val.as_struct();
            let mut js_obj = env.create_object()?;
            for (k, v) in st.fields() {
                let js_v = convert_spanner_value_to_js(env, v)?;
                js_obj.set_named_property(k, js_v)?;
            }
            Ok(js_obj.into_unknown())
        }
    }
}

fn convert_type_to_js(env: &Env, t: &google_cloud_spanner::types::Type) -> Result<JsObject> {
    let mut js_type = env.create_object()?;
    let code_val: i32 = t.code().into();
    js_type.set_named_property("code", env.create_int32(code_val)?)?;
    if let Some(elem_type) = t.array_element_type() {
        let js_elem_type = convert_type_to_js(env, &elem_type)?;
        js_type.set_named_property("arrayElementType", js_elem_type)?;
    }
    Ok(js_type)
}

#[napi]
impl NativeGrpcProxy {
    #[napi(constructor)]
    pub fn new(
        endpoint: String,
        #[napi(ts_arg_type = "(streamId: number, err: Error | null, events: Array<{ typeFlag: number, payload: any }> | null) => void")]
        stream_dispatcher: JsFunction,
    ) -> Result<Self> {
        let stream_tsfn = stream_dispatcher.create_threadsafe_function(
            0,
            |ctx: napi::threadsafe_function::ThreadSafeCallContext<(u32, std::result::Result<Vec<(u32, ProxyPayload)>, Error>)>| {
                let env = ctx.env;
                let (stream_id, result) = ctx.value;
                let js_stream_id = env.create_uint32(stream_id)?;
                
                match result {
                    Ok(events) => {
                        let js_real_err = env.get_null()?;
                        
                        let use_no_copy = *USE_NO_COPY.get_or_init(|| {
                            std::env::var("SPANNER_NATIVE_NO_COPY_BUFFER")
                                .map(|v| v == "true")
                                .unwrap_or(false)
                        });

                        let mut js_events_array = env.create_array_with_length(events.len())?;
                        for (idx, (type_flag, payload)) in events.into_iter().enumerate() {
                            let mut event_obj = env.create_object()?;
                            event_obj.set_named_property("typeFlag", env.create_uint32(type_flag)?)?;
                            
                            let js_payload = match payload {
                                ProxyPayload::Bytes(bytes) => {
                                    if type_flag == 0 && bytes.is_empty() {
                                        env.get_null()?.into_unknown()
                                    } else if use_no_copy {
                                        let js_buffer = env.create_buffer_with_data(bytes)?;
                                        js_buffer.into_raw().into_unknown()
                                    } else {
                                        let mut js_arraybuffer = env.create_arraybuffer(bytes.len())?;
                                        js_arraybuffer.as_mut().copy_from_slice(&bytes);
                                        js_arraybuffer.into_unknown()
                                    }
                                }
                                ProxyPayload::Rows { rows, metadata } => {
                                    let mut js_payload_obj = env.create_object()?;
                                    
                                    // Convert rows
                                    let mut js_rows = env.create_array_with_length(rows.len())?;
                                    for (r_idx, row) in rows.into_iter().enumerate() {
                                        let mut js_row = env.create_array_with_length(row.len())?;
                                        for (c_idx, cell) in row.into_iter().enumerate() {
                                            let js_val = convert_spanner_value_to_js(&env, &cell)?;
                                            js_row.set_element(c_idx as u32, js_val)?;
                                        }
                                        js_rows.set_element(r_idx as u32, js_row)?;
                                    }
                                    js_payload_obj.set_named_property("rows", js_rows)?;
                                    
                                    // Convert metadata if present
                                    if let Some(meta) = metadata {
                                        let mut js_fields = env.create_array_with_length(meta.column_names().len())?;
                                        for (f_idx, (name, col_type)) in meta.column_names().iter().zip(meta.column_types().iter()).enumerate() {
                                            let mut js_field = env.create_object()?;
                                            js_field.set_named_property("name", env.create_string(name)?)?;
                                            let js_type = convert_type_to_js(&env, col_type)?;
                                            js_field.set_named_property("type", js_type)?;
                                            js_fields.set_element(f_idx as u32, js_field)?;
                                        }
                                        let mut js_metadata_obj = env.create_object()?;
                                        js_metadata_obj.set_named_property("fields", js_fields)?;
                                        js_payload_obj.set_named_property("metadata", js_metadata_obj)?;
                                    } else {
                                        js_payload_obj.set_named_property("metadata", env.get_null()?)?;
                                    }
                                    
                                    js_payload_obj.into_unknown()
                                }
                            };
                            event_obj.set_named_property("payload", js_payload)?;
                            
                            js_events_array.set_element(idx as u32, event_obj)?;
                        }

                        Ok(vec![
                            js_stream_id.into_unknown(),
                            js_real_err.into_unknown(),
                            js_events_array.into_unknown(),
                        ])
                    }
                    Err(e) => {
                        let js_real_err = env.create_error(e)?;
                        let js_events = env.get_null()?;
                        Ok(vec![
                            js_stream_id.into_unknown(),
                            js_real_err.into_unknown(),
                            js_events.into_unknown(),
                        ])
                    }
                }
            }
        )?;

        let runtime = Arc::new(
            tokio::runtime::Builder::new_multi_thread()
                .worker_threads(std::thread::available_parallelism().map(|n| n.get()).unwrap_or(4))
                .enable_all()
                .build()
                .expect("Failed to build Proxy Tokio runtime"),
        );

        let endpoint_clone = endpoint.clone();
        let spanner_client = runtime.block_on(async move {
            Spanner::builder()
                .with_endpoint(endpoint_clone)
                .build()
                .await
        }).map_err(|e| Error::new(Status::GenericFailure, format!("Failed to build Spanner client: {}", e)))?;

        Ok(Self {
            endpoint,
            spanner_client,
            stream_tsfn,
            runtime,
        })
    }

    #[napi]
    pub async fn make_unary_call(
        &self,
        method_path: String,
        request_bytes: Buffer,
        headers: Vec<String>,
        channel_hint: u32,
    ) -> Result<Buffer> {
        let spanner_client = self.spanner_client.clone();
        
        let mut options = google_cloud_gax::options::RequestOptions::default();
        
        let mut metadata = http::HeaderMap::new();
        for chunk in headers.chunks_exact(2) {
            let key = &chunk[0];
            let val = &chunk[1];
            let key_lower = key.to_lowercase();
            if key_lower.starts_with(':')
                || key_lower == "host"
                || key_lower == "content-length"
                || key_lower == "connection"
                || key_lower == "transfer-encoding"
                || key_lower == "content-type"
                || key_lower == "te"
            {
                continue;
            }
            if let Ok(m_key) = http::header::HeaderName::from_str(key) {
                if let Ok(m_val) = http::header::HeaderValue::from_str(val) {
                    metadata.insert(m_key, m_val);
                }
            }
        }
        options = options.insert_extension(metadata);
        
        let response_res = spanner_client.make_unary_call(
            &method_path,
            request_bytes.to_vec(),
            options,
            channel_hint as usize,
        )
        .await;

        match response_res {
            Ok(bytes) => Ok(Buffer::from(bytes)),
            Err(e) => Err(Error::new(Status::GenericFailure, format!("gRPC Call Error: {}", e))),
        }
    }

    #[napi]
    pub fn make_streaming_call(
        &self,
        method_path: String,
        request_bytes: Buffer,
        headers: Vec<String>,
        channel_hint: u32,
        stream_id: u32,
    ) -> Result<()> {
        let spanner_client = self.spanner_client.clone();
        let stream_tsfn = self.stream_tsfn.clone();

        self.runtime.spawn(async move {
            let mut options = google_cloud_gax::options::RequestOptions::default();
            
            let mut metadata = http::HeaderMap::new();
            for chunk in headers.chunks_exact(2) {
                let key = &chunk[0];
                let val = &chunk[1];
                let key_lower = key.to_lowercase();
                if key_lower.starts_with(':')
                    || key_lower == "host"
                    || key_lower == "content-length"
                    || key_lower == "connection"
                    || key_lower == "transfer-encoding"
                    || key_lower == "content-type"
                    || key_lower == "te"
                {
                    continue;
                }
                if let Ok(m_key) = http::header::HeaderName::from_str(key) {
                    if let Ok(m_val) = http::header::HeaderValue::from_str(val) {
                        metadata.insert(m_key, m_val);
                    }
                }
            }
            options = options.insert_extension(metadata);

            let use_v8 = std::env::var("SPANNER_NATIVE_V8")
                .map(|v| v == "true" || v == "1")
                .unwrap_or(false);

            if method_path == "/google.spanner.v1.Spanner/ExecuteStreamingSql" {
                if use_v8 {
                    let mut result_set = match spanner_client.execute_sql_bytes(request_bytes.to_vec(), Some(options), channel_hint as usize).await {
                        Ok(rs) => rs,
                        Err(e) => {
                            println!("[Rust Proxy] execute_sql_bytes failed: {}", e);
                            call_tsfn_error!(
                                stream_tsfn,
                                stream_id,
                                Error::new(Status::Unknown, format!("Spanner Query Error: {}", e))
                            );
                            return;
                        }
                    };

                    let mut event_batch = Vec::new();
                    let mut row_batch = Vec::new();
                    let mut sent_metadata = false;

                    while let Some(row_res) = result_set.next().await {
                        match row_res {
                            Ok(row) => {
                                let metadata = if !sent_metadata {
                                    sent_metadata = true;
                                    result_set.metadata().cloned()
                                } else {
                                    None
                                };
                                let raw_vals = row.raw_values().to_vec();
                                row_batch.push(raw_vals);

                                if metadata.is_some() || row_batch.len() >= 100 {
                                    let batch_rows = std::mem::take(&mut row_batch);
                                    event_batch.push((4u32, ProxyPayload::Rows {
                                        rows: batch_rows,
                                        metadata,
                                    }));
                                    let batch_to_send = std::mem::take(&mut event_batch);
                                    call_tsfn_batch!(stream_tsfn, stream_id, batch_to_send);
                                }
                            }
                            Err(e) => {
                                println!("[Rust Proxy] ResultSet row error: {}", e);
                                call_tsfn_error!(
                                    stream_tsfn,
                                    stream_id,
                                    Error::new(Status::Unknown, format!("Spanner Stream Row Error: {}", e))
                                );
                                return;
                            }
                        }
                    }

                    // Flush any remaining buffered rows
                    if !row_batch.is_empty() {
                        event_batch.push((4u32, ProxyPayload::Rows {
                            rows: row_batch,
                            metadata: None,
                        }));
                        call_tsfn_batch!(stream_tsfn, stream_id, event_batch);
                    }

                    // EOF marker
                    let eof_event = vec![(0u32, ProxyPayload::Bytes(Vec::new()))];
                    call_tsfn_batch!(stream_tsfn, stream_id, eof_event);
                    return;
                }

            }

            let response_res = spanner_client.make_streaming_call(
                &method_path,
                request_bytes.to_vec(),
                options,
                channel_hint as usize,
            )
            .await;
            match response_res {
                Ok(mut stream) => {
                    let mut event_batch = Vec::new();
                    while let Ok(Some(chunk)) = stream.message().await {
                        event_batch.push((0u32, ProxyPayload::Bytes(chunk.0)));
                        if event_batch.len() >= 10 {
                            let batch_to_send = std::mem::take(&mut event_batch);
                            call_tsfn_batch!(stream_tsfn, stream_id, batch_to_send);
                        }
                    }
                    let eof_prs = PartialResultSet {
                        last: true,
                        ..Default::default()
                    };
                    let eof_bytes = prost::Message::encode_to_vec(&eof_prs);
                    event_batch.push((0u32, ProxyPayload::Bytes(eof_bytes)));
                    event_batch.push((0u32, ProxyPayload::Bytes(vec![])));
                    call_tsfn_batch!(stream_tsfn, stream_id, event_batch);
                }
                Err(e) => {
                    println!("[Rust Proxy] Generic streaming call failed: {}", e);
                    call_tsfn_error!(
                        stream_tsfn,
                        stream_id,
                        Error::new(Status::Unknown, format!("gRPC Streaming Error: {}", e))
                    );
                }
            }
        });

        Ok(())
    }
}


use napi::threadsafe_function::ErrorStrategy;

#[napi]
pub fn execute_streaming_sql_proxy_native(
    proxy: &NativeGrpcProxy,
    request_bytes: Buffer,
    headers: Vec<String>,
    channel_hint: u32,

    #[napi(ts_arg_type = "(err: Error | null, batch: Array<any> | Buffer | null, schemaMetadata: any | null, isEof: boolean) => void")]
    callback: JsFunction,
) -> Result<()> {
    let spanner_client = proxy.spanner_client.clone();

    let tsfn: ThreadsafeFunction<
        ((Vec<prost_types::Value>, usize), Option<google_cloud_spanner::result::ResultSetMetadata>, bool),
        ErrorStrategy::CalleeHandled
    > = callback.create_threadsafe_function(
        0,
        move |ctx: napi::threadsafe_function::ThreadSafeCallContext<
            ((Vec<prost_types::Value>, usize), Option<google_cloud_spanner::result::ResultSetMetadata>, bool)
        >| {
            let env = ctx.env;
            let ((vals, num_cols), metadata, is_eof) = ctx.value;

            let mut js_batch = env.get_null()?.into_unknown();

            let num_rows = if num_cols > 0 { vals.len() / num_cols } else { 0 };
            let mut js_rows = env.create_array_with_length(num_rows)?;
            if num_cols > 0 {
                for (r_idx, chunk) in vals.chunks_exact(num_cols).enumerate() {
                    let mut js_row = env.create_array_with_length(num_cols)?;
                    for (c_idx, cell) in chunk.iter().enumerate() {
                        let js_val = convert_prost_value_to_js(&env, cell)?;
                        js_row.set_element(c_idx as u32, js_val)?;
                    }
                    js_rows.set_element(r_idx as u32, js_row)?;
                }
            }
            js_batch = js_rows.into_unknown();

            // Convert metadata
            let mut js_metadata = env.get_null()?.into_unknown();
            if let Some(meta) = metadata {
                let mut js_fields = env.create_array_with_length(meta.column_names().len())?;
                for (f_idx, (name, col_type)) in meta.column_names().iter().zip(meta.column_types().iter()).enumerate() {
                    let mut js_field = env.create_object()?;
                    js_field.set_named_property("name", env.create_string(name)?)?;
                    let js_type = convert_type_to_js(&env, col_type)?;
                    js_field.set_named_property("type", js_type)?;
                    js_fields.set_element(f_idx as u32, js_field)?;
                }
                let mut js_metadata_obj = env.create_object()?;
                js_metadata_obj.set_named_property("fields", js_fields)?;
                js_metadata = js_metadata_obj.into_unknown();
            }

            Ok(vec![
                js_batch,
                js_metadata,
                env.get_boolean(is_eof)?.into_unknown(),
            ])
        }
    )?;

    proxy.runtime.spawn(async move {
        let mut options = google_cloud_gax::options::RequestOptions::default();
        
        let mut metadata = http::HeaderMap::new();
        for chunk in headers.chunks_exact(2) {
            let key = &chunk[0];
            let val = &chunk[1];
            let key_lower = key.to_lowercase();
            if key_lower.starts_with(':')
                || key_lower == "host"
                || key_lower == "content-length"
                || key_lower == "connection"
                || key_lower == "transfer-encoding"
                || key_lower == "content-type"
                || key_lower == "te"
            {
                continue;
            }
            if let Ok(m_key) = http::header::HeaderName::from_str(key) {
                if let Ok(m_val) = http::header::HeaderValue::from_str(val) {
                    metadata.insert(m_key, m_val);
                }
            }
        }
        options = options.insert_extension(metadata);

        let mut result_set = match spanner_client.execute_sql_bytes(request_bytes.to_vec(), Some(options), channel_hint as usize).await {
            Ok(rs) => rs,
            Err(e) => {
                let err = Error::new(Status::Unknown, format!("Spanner Query Error: {}", e));
                tsfn.call(Err(err), ThreadsafeFunctionCallMode::NonBlocking);
                return;
            }
        };

        let initial_metadata = result_set.metadata().cloned();
        let (tx, mut rx) = tokio::sync::mpsc::channel(100);

            let mut values_stream = result_set.into_values_stream();
            let num_cols = match &initial_metadata {
                Some(m) => m.column_names().len(),
                None => 1,
            };

            // Producer task: fetches flat values from stream and pushes to channel
            tokio::spawn(async move {
                use futures::StreamExt;
                let mut pending_metadata = initial_metadata;
                let mut carry_values = Vec::new();

                while let Some(vals_res) = values_stream.next().await {
                    match vals_res {
                        Ok(mut vals) => {
                            carry_values.append(&mut vals);
                            let complete_len = (carry_values.len() / num_cols) * num_cols;
                            if complete_len > 0 {
                                let mut complete_vals = carry_values.split_off(complete_len);
                                std::mem::swap(&mut carry_values, &mut complete_vals);
                                let meta_to_send = pending_metadata.take();
                                if tx.send(Ok(((complete_vals, num_cols), meta_to_send, false))).await.is_err() {
                                    return; // consumer dropped rx
                                }
                            }
                        }
                        Err(e) => {
                            let _ = tx.send(Err(e)).await;
                            return;
                        }
                    }
                }

                let meta_to_send = pending_metadata.take();
                let _ = tx.send(Ok(((carry_values, num_cols), meta_to_send, true))).await;
            });

        // Consumer loop: receives batches from channel and pushes to V8
        let start_task = std::time::Instant::now();
        while let Some(res) = rx.recv().await {
            match res {
                Ok((vals, metadata, is_eof)) => {
                    tsfn.call(
                        Ok((vals, metadata, is_eof)),
                        ThreadsafeFunctionCallMode::NonBlocking
                    );
                }
                Err(e) => {
                    let err = Error::new(Status::Unknown, format!("Spanner Stream Row Error: {}", e));
                    tsfn.call(Err(err), ThreadsafeFunctionCallMode::NonBlocking);
                    return;
                }
            }
        }
    });

    Ok(())
}

