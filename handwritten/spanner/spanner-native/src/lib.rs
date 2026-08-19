// ==============================================================================
// LAYER 2: BINDING LAYER (RUST, NAPI-RS)
// Thin per-language bridge, compiled into the .node module.
// Boundary crossing: JS calls napi functions passing opaque protobuf bytes and 
// metadata array. Core returns SpannerValue rows, which the binding converts to JS types.
// ==============================================================================

use napi::bindgen_prelude::*;
use napi::{Env, Result, JsObject, JsFunction, JsUnknown};
use napi::threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode, ErrorStrategy, ThreadSafeCallContext};
use napi_derive::napi;
use std::sync::Arc;

use spanner_core::{CoreClient, SpannerValue, SpannerResult, execute_streaming_sql};

// A global registry or we can return an External to JS holding the CoreClient
// For simplicity, we wrap CoreClient in a struct and pass it as External.
#[napi]
pub struct CoreClientHandle {
    client: Arc<CoreClient>,
}

#[napi]
impl CoreClientHandle {
    #[napi(constructor)]
    pub fn new(channel_count: i32) -> Self {
        Self {
            client: Arc::new(CoreClient::new(channel_count as usize)),
        }
    }

    #[napi]
    pub fn close(&self) {
        self.client.close();
    }
}

/// Converts a native SpannerValue back to a JS equivalent
/// PRODUCTION: Match existing codec.ts observable behavior exactly
fn convert_to_js(env: &Env, val: &SpannerValue) -> Result<JsUnknown> {
    match val {
        SpannerValue::Null => env.get_null().map(|n| n.into_unknown()),
        SpannerValue::Bool(b) => env.get_boolean(*b).map(|b| b.into_unknown()),
        SpannerValue::Float64(f) => env.create_double(*f).map(|n| n.into_unknown()),
        SpannerValue::String(s) => env.create_string(s).map(|s| s.into_unknown()),
        SpannerValue::Int64(i) => env.create_string(i).map(|s| s.into_unknown()),
        SpannerValue::Bytes(b) => {
            // PRODUCTION: base64-decode `b` into a native JS Buffer (Uint8Array)
            env.create_string(b).map(|s| s.into_unknown())
        }
        SpannerValue::Timestamp(t) => env.create_string(t).map(|s| s.into_unknown()),
        SpannerValue::Date(d) => env.create_string(d).map(|s| s.into_unknown()),
        SpannerValue::Numeric(n) => env.create_string(n).map(|s| s.into_unknown()),
        SpannerValue::Json(j) => env.create_string(j).map(|s| s.into_unknown()),
        SpannerValue::Array(arr) => {
            let mut js_arr = env.create_array_with_length(arr.len())?;
            for (i, item) in arr.iter().enumerate() {
                let js_item = convert_to_js(env, item)?;
                js_arr.set_element(i as u32, js_item)?;
            }
            Ok(js_arr.into_unknown())
        }
        SpannerValue::Struct(st) => {
            let mut js_obj = env.create_object()?;
            for (k, v) in st {
                let js_v = convert_to_js(env, v)?;
                js_obj.set_named_property(k, js_v)?;
            }
            Ok(js_obj.into_unknown())
        }
    }
}

#[napi]
pub fn execute_streaming_sql_native(
    _env: Env,
    handle: &CoreClientHandle,
    routing_key: String,
    metadata_js: Vec<Vec<String>>,
    request_bytes: Uint8Array,
    _gax_options: JsObject,
    callback: JsFunction,
) -> Result<()> {
    // PRODUCTION: Parse gax_options into Rust GAX RetrySettings
    let client_clone = handle.client.clone();
    
    let mut metadata = Vec::new();
    for pair in metadata_js {
        if pair.len() == 2 {
            metadata.push((pair[0].clone(), pair[1].clone()));
        }
    }

    let req_bytes = request_bytes.to_vec();

    // Use ThreadsafeFunction to stream batches back to V8
    let tsfn: ThreadsafeFunction<
        Option<SpannerResult>, // None means end of stream
        ErrorStrategy::CalleeHandled
    > = callback.create_threadsafe_function(
        0,
        |ctx: ThreadSafeCallContext<Option<SpannerResult>>| {
            match ctx.value {
                Some(res) => {
                    
                    let buffer_val = ctx.env.create_buffer_with_data(res.rows)?.into_raw().into_unknown();
                    
                    let mut js_telemetry = ctx.env.create_object()?;
                    if let Some(timing) = res.telemetry.server_timing {
                        js_telemetry.set_named_property("serverTiming", ctx.env.create_string(&timing)?)?;
                    }
                    js_telemetry.set_named_property("attemptCount", ctx.env.create_uint32(res.telemetry.attempt_count)?)?;
                    
                    // We return (err, batch, telemetry)
                    Ok(vec![ctx.env.get_null()?.into_unknown(), buffer_val, js_telemetry.into_unknown()])

                }
                None => {
                    // End of stream, pass null
                    Ok(vec![ctx.env.get_null()?.into_unknown(), ctx.env.get_null()?.into_unknown(), ctx.env.get_null()?.into_unknown()])
                }
            }
        }
    )?;

    // V8 thread returns immediately.
    // RUNTIME.spawn runs the task on the Tokio background threads.
    client_clone.runtime.clone().spawn(async move {
        
        let core_client = client_clone.clone();
        execute_streaming_sql(
            &core_client,
            routing_key,
            metadata,
            req_bytes,
            move |res| {
                match res {
                    Ok(spanner_res) => {
                        tsfn.call(
                            Ok(Some(spanner_res)),
                            ThreadsafeFunctionCallMode::NonBlocking
                        );
                    }
                    Err(e) => {
                        tsfn.call(
                            Err(napi::Error::from_reason(format!("gRPC core error: {} (code: {})", e.message, e.code))),
                            ThreadsafeFunctionCallMode::NonBlocking
                        );
                    }
                }
            }
        ).await;


        // Signal stream end
        tsfn.call(
            Ok(None),
            ThreadsafeFunctionCallMode::NonBlocking
        );
    });

    Ok(())
}
