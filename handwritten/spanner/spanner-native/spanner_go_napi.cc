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
    const char* wire_val;
    uint32_t wire_len;
} CSpannerRawValue;

typedef struct {
    int format; // 0 = JSON string, 1 = Direct Native Cells
    char* json_rows;
    CSpannerCell* cells;
    int row_count;
    int col_count;
    char* string_arena;
    CSpannerRawValue* raw_values;
    char* raw_arena;
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
            if (batch->raw_values) free(batch->raw_values);
            if (batch->raw_arena) free(batch->raw_arena);
            if (batch->json_rows) free(batch->json_rows);
            if (batch->server_timing) free(batch->server_timing);
            if (batch->error_msg) free(batch->error_msg);
            free(batch);
        }
        return;
    }

    napi_call_threadsafe_function(ctx->tsfn, batch, napi_tsfn_nonblocking);
}

static bool ReadRawVarint(const uint8_t* data, size_t len, size_t* index, uint64_t* value) {
    uint64_t result = 0;
    for (unsigned shift = 0; shift < 64; shift += 7) {
        if (*index >= len) return false;
        uint8_t byte = data[(*index)++];
        result |= static_cast<uint64_t>(byte & 0x7f) << shift;
        if (byte < 0x80) {
            *value = result;
            return true;
        }
    }
    return false;
}

static bool ReadRawBytes(
    const uint8_t* data,
    size_t len,
    size_t* index,
    const uint8_t** field,
    size_t* field_len
) {
    uint64_t raw_len = 0;
    if (!ReadRawVarint(data, len, index, &raw_len)) return false;
    if (raw_len > len - *index) return false;
    *field = data + *index;
    *field_len = static_cast<size_t>(raw_len);
    *index += *field_len;
    return true;
}

static bool SkipRawField(const uint8_t* data, size_t len, size_t* index, unsigned wire_type) {
    switch (wire_type) {
        case 0: {
            uint64_t ignored = 0;
            return ReadRawVarint(data, len, index, &ignored);
        }
        case 1:
            if (len - *index < 8) return false;
            *index += 8;
            return true;
        case 2: {
            const uint8_t* ignored = nullptr;
            size_t ignored_len = 0;
            return ReadRawBytes(data, len, index, &ignored, &ignored_len);
        }
        case 5:
            if (len - *index < 4) return false;
            *index += 4;
            return true;
        default:
            return false;
    }
}

static bool DecodeRawValue(
    napi_env env,
    const uint8_t* data,
    size_t len,
    napi_value* result,
    unsigned depth
);

static bool DecodeRawList(
    napi_env env,
    const uint8_t* data,
    size_t len,
    napi_value* result,
    unsigned depth
) {
    if (napi_create_array(env, result) != napi_ok) return false;
    uint32_t output_index = 0;
    for (size_t index = 0; index < len;) {
        uint64_t tag = 0;
        if (!ReadRawVarint(data, len, &index, &tag)) return false;
        unsigned field_number = static_cast<unsigned>(tag >> 3);
        unsigned wire_type = static_cast<unsigned>(tag & 7);
        if (field_number == 1) {
            if (wire_type != 2) return false;
            const uint8_t* value_wire = nullptr;
            size_t value_len = 0;
            if (!ReadRawBytes(data, len, &index, &value_wire, &value_len)) return false;
            napi_value value;
            if (!DecodeRawValue(env, value_wire, value_len, &value, depth + 1)) return false;
            if (napi_set_element(env, *result, output_index++, value) != napi_ok) return false;
        } else if (!SkipRawField(data, len, &index, wire_type)) {
            return false;
        }
    }
    return true;
}

static bool DecodeRawStructEntry(
    napi_env env,
    napi_value object,
    const uint8_t* data,
    size_t len,
    unsigned depth
) {
    const uint8_t* key = nullptr;
    size_t key_len = 0;
    const uint8_t* value_wire = nullptr;
    size_t value_len = 0;
    for (size_t index = 0; index < len;) {
        uint64_t tag = 0;
        if (!ReadRawVarint(data, len, &index, &tag)) return false;
        unsigned field_number = static_cast<unsigned>(tag >> 3);
        unsigned wire_type = static_cast<unsigned>(tag & 7);
        if (field_number == 1 || field_number == 2) {
            if (wire_type != 2) return false;
            const uint8_t* field = nullptr;
            size_t field_len = 0;
            if (!ReadRawBytes(data, len, &index, &field, &field_len)) return false;
            if (field_number == 1) {
                key = field;
                key_len = field_len;
            } else {
                value_wire = field;
                value_len = field_len;
            }
        } else if (!SkipRawField(data, len, &index, wire_type)) {
            return false;
        }
    }

    napi_value key_value;
    const char* key_chars = key == nullptr ? "" : reinterpret_cast<const char*>(key);
    if (napi_create_string_utf8(env, key_chars, key_len, &key_value) != napi_ok) return false;
    napi_value value;
    if (value_wire == nullptr) {
        if (napi_get_null(env, &value) != napi_ok) return false;
    } else if (!DecodeRawValue(env, value_wire, value_len, &value, depth + 1)) {
        return false;
    }
    return napi_set_property(env, object, key_value, value) == napi_ok;
}

static bool DecodeRawStruct(
    napi_env env,
    const uint8_t* data,
    size_t len,
    napi_value* result,
    unsigned depth
) {
    if (napi_create_object(env, result) != napi_ok) return false;
    for (size_t index = 0; index < len;) {
        uint64_t tag = 0;
        if (!ReadRawVarint(data, len, &index, &tag)) return false;
        unsigned field_number = static_cast<unsigned>(tag >> 3);
        unsigned wire_type = static_cast<unsigned>(tag & 7);
        if (field_number == 1) {
            if (wire_type != 2) return false;
            const uint8_t* entry = nullptr;
            size_t entry_len = 0;
            if (!ReadRawBytes(data, len, &index, &entry, &entry_len)) return false;
            if (!DecodeRawStructEntry(env, *result, entry, entry_len, depth + 1)) return false;
        } else if (!SkipRawField(data, len, &index, wire_type)) {
            return false;
        }
    }
    return true;
}

static bool DecodeRawValue(
    napi_env env,
    const uint8_t* data,
    size_t len,
    napi_value* result,
    unsigned depth
) {
    if (depth > 64) return false;
    enum ValueKind { VALUE_UNSET, VALUE_NULL, VALUE_NUMBER, VALUE_STRING, VALUE_BOOL, VALUE_STRUCT, VALUE_LIST };
    ValueKind kind = VALUE_UNSET;
    uint64_t scalar = 0;
    const uint8_t* nested = nullptr;
    size_t nested_len = 0;

    for (size_t index = 0; index < len;) {
        uint64_t tag = 0;
        if (!ReadRawVarint(data, len, &index, &tag)) return false;
        unsigned field_number = static_cast<unsigned>(tag >> 3);
        unsigned wire_type = static_cast<unsigned>(tag & 7);
        switch (field_number) {
            case 1:
            case 4:
                if (wire_type != 0 || !ReadRawVarint(data, len, &index, &scalar)) return false;
                kind = field_number == 1 ? VALUE_NULL : VALUE_BOOL;
                break;
            case 2:
                if (wire_type != 1 || len - index < 8) return false;
                scalar = 0;
                for (unsigned i = 0; i < 8; ++i) {
                    scalar |= static_cast<uint64_t>(data[index + i]) << (8 * i);
                }
                index += 8;
                kind = VALUE_NUMBER;
                break;
            case 3:
            case 5:
            case 6:
                if (wire_type != 2 || !ReadRawBytes(data, len, &index, &nested, &nested_len)) return false;
                kind = field_number == 3 ? VALUE_STRING : (field_number == 5 ? VALUE_STRUCT : VALUE_LIST);
                break;
            default:
                if (!SkipRawField(data, len, &index, wire_type)) return false;
                break;
        }
    }

    switch (kind) {
        case VALUE_NUMBER: {
            double number = 0;
            static_assert(sizeof(number) == sizeof(scalar), "double must be 64-bit");
            std::memcpy(&number, &scalar, sizeof(number));
            return napi_create_double(env, number, result) == napi_ok;
        }
        case VALUE_STRING: {
            // N-API creates a V8-owned string; no raw wire pointer survives.
            const char* chars = nested == nullptr ? "" : reinterpret_cast<const char*>(nested);
            return napi_create_string_utf8(env, chars, nested_len, result) == napi_ok;
        }
        case VALUE_BOOL:
            return napi_get_boolean(env, scalar != 0, result) == napi_ok;
        case VALUE_STRUCT:
            return DecodeRawStruct(env, nested, nested_len, result, depth + 1);
        case VALUE_LIST:
            return DecodeRawList(env, nested, nested_len, result, depth + 1);
        case VALUE_NULL:
        case VALUE_UNSET:
        default:
            return napi_get_null(env, result) == napi_ok;
    }
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
            napi_create_int32(env, batch->error_code, &err_code_val);
            napi_create_error(env, err_code_val, err_msg_val, &err_obj);

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
            } else if (batch->format == 2 && batch->raw_values != nullptr && batch->row_count > 0 && batch->col_count > 0) {
                // Raw protobuf Values are decoded on the V8 thread. Every
                // N-API constructor copies scalar/string data into V8-owned
                // values before the C arena is freed below.
                const int row_count = batch->row_count;
                const int col_count = batch->col_count;
                napi_create_array_with_length(env, row_count, &rows_val);
                for (int r = 0; r < row_count; ++r) {
                    napi_value row_arr;
                    napi_create_array_with_length(env, col_count, &row_arr);
                    for (int c = 0; c < col_count; ++c) {
                        const CSpannerRawValue& raw = batch->raw_values[r * col_count + c];
                        napi_value js_cell;
                        bool decoded = raw.wire_val != nullptr && DecodeRawValue(
                            env,
                            reinterpret_cast<const uint8_t*>(raw.wire_val),
                            raw.wire_len,
                            &js_cell,
                            0
                        );
                        if (!decoded) napi_get_null(env, &js_cell);
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
        if (batch->raw_values != nullptr) free(batch->raw_values);
        if (batch->raw_arena != nullptr) free(batch->raw_arena);
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
