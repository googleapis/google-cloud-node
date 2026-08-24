#include <node_api.h>
#include <string>
#include <vector>
#include <cstring>
#include <cstdlib>
#include <cstdint>
#include <iostream>

// Callback signature matching Go exported C type
typedef enum {
    CELL_KIND_NULL = 0,
    CELL_KIND_BOOL = 1,
    CELL_KIND_NUMBER = 2,
    CELL_KIND_STRING = 3
} CellKind;

typedef struct {
    uint8_t kind;
    uint8_t bool_val;
    uint16_t _pad;
    uint32_t str_len;
    double number_val;
    const char* str_val;
} CSpannerCell;

typedef struct {
    int format; // 0 = JSON string, 1 = Direct Native Cells
    char* json_rows;
    CSpannerCell* cells;
    int row_count;
    int col_count;
    char* string_arena;
    char* server_timing;
    int attempt_count;
    char* error_msg;
    int error_code;
    int is_last;
} CSpannerBatch;

typedef void (*StreamDataCallback)(void* user_data, CSpannerBatch* batch);

// Declarations of Go C-shared exported functions
extern "C" {
    uintptr_t InitGoCoreClient(int channel_count);
    void CloseGoCoreClient(uintptr_t handle);
    void ExecuteStreamingSqlGo(
        uintptr_t handle,
        const char* routing_key,
        const char** meta_keys,
        const char** meta_vals,
        int meta_count,
        const char* req_bytes,
        int req_len,
        StreamDataCallback cb,
        void* user_data
    );
}

struct StreamCallbackContext {
    napi_threadsafe_function tsfn;
};

// C callback called by Go on background goroutine
extern "C" void OnGoStreamData(void* user_data, CSpannerBatch* batch) {
    StreamCallbackContext* ctx = static_cast<StreamCallbackContext*>(user_data);
    if (!ctx || !ctx->tsfn) {
        if (batch) {
            if (batch->cells) free(batch->cells);
            if (batch->string_arena) free(batch->string_arena);
            if (batch->json_rows) free(batch->json_rows);
            if (batch->server_timing) free(batch->server_timing);
            if (batch->error_msg) free(batch->error_msg);
            free(batch);
        }
        return;
    }

    napi_call_threadsafe_function(ctx->tsfn, batch, napi_tsfn_nonblocking);
}

// CallJsHandler runs on the V8 main event loop thread
void CallJsHandler(napi_env env, napi_value js_cb, void* context, void* data) {
    CSpannerBatch* batch = static_cast<CSpannerBatch*>(data);
    StreamCallbackContext* ctx = static_cast<StreamCallbackContext*>(context);

    if (env != nullptr && js_cb != nullptr && batch != nullptr) {
        napi_value global;
        napi_get_global(env, &global);

        napi_value null_val;
        napi_get_null(env, &null_val);

        if (batch->error_msg != nullptr) {
            napi_value err_obj, err_msg_val, err_code_val;
            napi_create_string_utf8(env, batch->error_msg, NAPI_AUTO_LENGTH, &err_msg_val);
            napi_create_error(env, nullptr, err_msg_val, &err_obj);
            napi_create_int32(env, batch->error_code, &err_code_val);
            napi_set_named_property(env, err_obj, "code", err_code_val);

            napi_value argv[3] = { err_obj, null_val, null_val };
            napi_call_function(env, global, js_cb, 3, argv, nullptr);
        } else if (batch->is_last && batch->row_count == 0) {
            // End of stream signal
            napi_value argv[3] = { null_val, null_val, null_val };
            napi_call_function(env, global, js_cb, 3, argv, nullptr);
        } else {
            napi_value rows_val = null_val;

            if (batch->format == 1 && batch->cells != nullptr && batch->row_count > 0 && batch->col_count > 0) {
                // DIRECT N-API NATIVE CELLS INSTANTIATION (ZERO JSON.PARSE)
                const int row_count = batch->row_count;
                const int col_count = batch->col_count;
                const CSpannerCell* cells = batch->cells;

                napi_create_array_with_length(env, row_count, &rows_val);

                for (int r = 0; r < row_count; ++r) {
                    napi_value row_arr;
                    napi_create_array_with_length(env, col_count, &row_arr);

                    for (int c = 0; c < col_count; ++c) {
                        const CSpannerCell& cell = cells[r * col_count + c];
                        napi_value js_cell = nullptr;

                        switch (cell.kind) {
                            case CELL_KIND_NULL:
                                napi_get_null(env, &js_cell);
                                break;
                            case CELL_KIND_BOOL:
                                napi_get_boolean(env, cell.bool_val != 0, &js_cell);
                                break;
                            case CELL_KIND_NUMBER:
                                napi_create_double(env, cell.number_val, &js_cell);
                                break;
                            case CELL_KIND_STRING:
                                if (cell.str_len > 0 && cell.str_val != nullptr) {
                                    napi_create_string_utf8(env, cell.str_val, cell.str_len, &js_cell);
                                } else {
                                    napi_create_string_utf8(env, "", 0, &js_cell);
                                }
                                break;
                            default:
                                napi_get_null(env, &js_cell);
                                break;
                        }
                        napi_set_element(env, row_arr, c, js_cell);
                    }
                    napi_set_element(env, rows_val, r, row_arr);
                }
            } else if (batch->format == 0 && batch->json_rows != nullptr) {
                // LEGACY JSON.PARSE ROUTE (OPT-IN VIA SPANNER_GO_DIRECT_DESERIALIZATION=false)
                napi_value json_global, parse_fn, json_str;
                napi_get_named_property(env, global, "JSON", &json_global);
                napi_get_named_property(env, json_global, "parse", &parse_fn);
                napi_create_string_utf8(env, batch->json_rows, NAPI_AUTO_LENGTH, &json_str);
                napi_call_function(env, json_global, parse_fn, 1, &json_str, &rows_val);
            }

            napi_value telemetry_obj;
            napi_create_object(env, &telemetry_obj);
            if (batch->server_timing != nullptr) {
                napi_value st_val;
                napi_create_string_utf8(env, batch->server_timing, NAPI_AUTO_LENGTH, &st_val);
                napi_set_named_property(env, telemetry_obj, "serverTiming", st_val);
            }
            napi_value attempt_val;
            napi_create_uint32(env, (uint32_t)batch->attempt_count, &attempt_val);
            napi_set_named_property(env, telemetry_obj, "attemptCount", attempt_val);

            napi_value argv[3] = { null_val, rows_val, telemetry_obj };
            napi_call_function(env, global, js_cb, 3, argv, nullptr);

            if (batch->is_last) {
                // If this was the final batch with data, send EOF after it
                napi_value eof_argv[3] = { null_val, null_val, null_val };
                napi_call_function(env, global, js_cb, 3, eof_argv, nullptr);
            }
        }
    }

    if (batch != nullptr) {
        if (batch->cells != nullptr) free(batch->cells);
        if (batch->string_arena != nullptr) free(batch->string_arena);
        if (batch->json_rows != nullptr) free(batch->json_rows);
        if (batch->server_timing != nullptr) free(batch->server_timing);
        if (batch->error_msg != nullptr) free(batch->error_msg);
        bool is_final = (batch->is_last != 0) || (batch->error_msg != nullptr);
        free(batch);

        if (is_final && ctx != nullptr) {
            if (ctx->tsfn != nullptr) {
                napi_release_threadsafe_function(ctx->tsfn, napi_tsfn_release);
                ctx->tsfn = nullptr;
            }
            delete ctx;
        }
    }
}

// Native CoreClientHandle wrapper
static napi_ref constructor_ref;

struct CoreClientHandleWrapper {
    uintptr_t handle;
};

void CoreClientHandleDestructor(napi_env env, void* nativeObject, void* finalize_hint) {
    CoreClientHandleWrapper* wrap = static_cast<CoreClientHandleWrapper*>(nativeObject);
    if (wrap != nullptr) {
        if (wrap->handle != 0) {
            CloseGoCoreClient(wrap->handle);
            wrap->handle = 0;
        }
        delete wrap;
    }
}

napi_value CoreClientHandleConstructor(napi_env env, napi_callback_info info) {
    napi_value jsthis;
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, &jsthis, nullptr);

    int channel_count = 1;
    if (argc >= 1) {
        int32_t val;
        if (napi_get_value_int32(env, args[0], &val) == napi_ok) {
            channel_count = (int)val;
        }
    }

    uintptr_t handle = InitGoCoreClient(channel_count);
    CoreClientHandleWrapper* wrap = new CoreClientHandleWrapper{ handle };

    napi_wrap(env, jsthis, wrap, CoreClientHandleDestructor, nullptr, nullptr);
    return jsthis;
}

napi_value CoreClientHandleClose(napi_env env, napi_callback_info info) {
    napi_value jsthis;
    napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr);

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, jsthis, reinterpret_cast<void**>(&wrap));
    if (wrap != nullptr && wrap->handle != 0) {
        CloseGoCoreClient(wrap->handle);
        wrap->handle = 0;
    }

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

// Function: executeStreamingSqlNative
napi_value ExecuteStreamingSqlNative(napi_env env, napi_callback_info info) {
    size_t argc = 6;
    napi_value args[6];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc < 6) {
        napi_throw_type_error(env, nullptr, "Wrong number of arguments for executeStreamingSqlNative");
        return nullptr;
    }

    // 1. Unwrap CoreClientHandle
    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, args[0], reinterpret_cast<void**>(&wrap));
    if (wrap == nullptr || wrap->handle == 0) {
        napi_throw_error(env, nullptr, "Invalid CoreClientHandle");
        return nullptr;
    }

    // 2. Routing key string
    char routing_key_buf[256];
    size_t routing_key_len = 0;
    napi_get_value_string_utf8(env, args[1], routing_key_buf, sizeof(routing_key_buf), &routing_key_len);

    // 3. Metadata array [[k, v], ...]
    uint32_t meta_len = 0;
    napi_get_array_length(env, args[2], &meta_len);

    std::vector<std::string> meta_keys_str;
    std::vector<std::string> meta_vals_str;
    std::vector<const char*> meta_keys_ptr;
    std::vector<const char*> meta_vals_ptr;

    meta_keys_str.reserve(meta_len);
    meta_vals_str.reserve(meta_len);
    meta_keys_ptr.reserve(meta_len);
    meta_vals_ptr.reserve(meta_len);

    for (uint32_t i = 0; i < meta_len; i++) {
        napi_value pair_val;
        napi_get_element(env, args[2], i, &pair_val);
        uint32_t pair_len = 0;
        napi_get_array_length(env, pair_val, &pair_len);
        if (pair_len == 2) {
            napi_value k_val, v_val;
            napi_get_element(env, pair_val, 0, &k_val);
            napi_get_element(env, pair_val, 1, &v_val);

            char k_buf[512], v_buf[512];
            size_t k_len = 0, v_len = 0;
            napi_get_value_string_utf8(env, k_val, k_buf, sizeof(k_buf), &k_len);
            napi_get_value_string_utf8(env, v_val, v_buf, sizeof(v_buf), &v_len);

            meta_keys_str.emplace_back(k_buf, k_len);
            meta_vals_str.emplace_back(v_buf, v_len);
        }
    }

    for (size_t i = 0; i < meta_keys_str.size(); i++) {
        meta_keys_ptr.push_back(meta_keys_str[i].c_str());
        meta_vals_ptr.push_back(meta_vals_str[i].c_str());
    }

    // 4. Request bytes (Uint8Array / Buffer)
    void* req_data = nullptr;
    size_t req_len = 0;
    bool is_typedarray = false;
    napi_is_typedarray(env, args[3], &is_typedarray);
    if (is_typedarray) {
        napi_typedarray_type type;
        napi_value arraybuffer;
        size_t byte_offset;
        napi_get_typedarray_info(env, args[3], &type, &req_len, &req_data, &arraybuffer, &byte_offset);
    } else {
        bool is_buffer = false;
        napi_is_buffer(env, args[3], &is_buffer);
        if (is_buffer) {
            napi_get_buffer_info(env, args[3], &req_data, &req_len);
        }
    }

    // 5. Callback function
    napi_value callback_val = args[5];

    StreamCallbackContext* cb_ctx = new StreamCallbackContext();

    napi_value resource_name;
    napi_create_string_utf8(env, "SpannerGoStream", NAPI_AUTO_LENGTH, &resource_name);

    napi_status status = napi_create_threadsafe_function(
        env,
        callback_val,
        nullptr,
        resource_name,
        0,
        1,
        nullptr,
        nullptr,
        cb_ctx,
        CallJsHandler,
        &(cb_ctx->tsfn)
    );

    if (status != napi_ok) {
        delete cb_ctx;
        napi_throw_error(env, nullptr, "Failed to create threadsafe function for Go stream callback");
        return nullptr;
    }

    // 6. Invoke Go streaming execution
    ExecuteStreamingSqlGo(
        wrap->handle,
        routing_key_buf,
        meta_keys_ptr.data(),
        meta_vals_ptr.data(),
        (int)meta_keys_ptr.size(),
        static_cast<const char*>(req_data),
        (int)req_len,
        OnGoStreamData,
        cb_ctx
    );

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

// Module initialization
napi_value Init(napi_env env, napi_value exports) {
    napi_property_descriptor properties[] = {
        { "close", nullptr, CoreClientHandleClose, nullptr, nullptr, nullptr, napi_default, nullptr }
    };

    napi_value cons;
    napi_define_class(
        env,
        "CoreClientHandle",
        NAPI_AUTO_LENGTH,
        CoreClientHandleConstructor,
        nullptr,
        1,
        properties,
        &cons
    );

    napi_create_reference(env, cons, 1, &constructor_ref);
    napi_set_named_property(env, exports, "CoreClientHandle", cons);

    napi_property_descriptor fn_prop = {
        "executeStreamingSqlNative", nullptr, ExecuteStreamingSqlNative, nullptr, nullptr, nullptr, napi_default, nullptr
    };
    napi_define_properties(env, exports, 1, &fn_prop);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
