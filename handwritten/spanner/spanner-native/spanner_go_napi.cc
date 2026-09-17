#include <node_api.h>
#include <string>
#include <vector>
#include <deque>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <atomic>
#include <cstring>
#include <cstdlib>
#include <cstdint>
#include <cmath>
#include <iostream>

// Callback signature matching Go exported C type
typedef enum {
    CELL_KIND_NULL = 0,
    CELL_KIND_BOOL = 1,
    CELL_KIND_NUMBER = 2,
    CELL_KIND_STRING = 3,
    CELL_KIND_PROTO_VALUE = 4
} CellKind;

typedef struct {
    uint8_t kind;
    uint8_t bool_val;
    uint16_t type_code;
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
    // Serialized google.spanner.v1.ResultSetMetadata, present only on the
    // first batch of a stream. Must stay in sync with spanner-go/main.go.
    void* metadata_pb;
    int metadata_len;
} CSpannerBatch;

typedef void (*StreamDataCallback)(void* user_data, CSpannerBatch* batch);

typedef struct {
    void* resp_pb;
    int resp_len;
    void* tx_pb;
    int tx_len;
    int64_t row_count;
    int has_row_count;
    char* error_msg;
    int error_code;
    void* retry_info_pb;
    int retry_info_len;
} CUnaryResponse;

typedef void (*UnaryCallback)(void* user_data, CUnaryResponse* resp);

typedef struct {
    const char* routing_key;
    const char** meta_keys;
    const char** meta_vals;
    int meta_count;
    const uint8_t* base_req_pb;
    int base_req_len;
    int inline_begin;
    const uint8_t* begin_req_pb;
    int begin_req_len;
    int is_mux_rw;
} CSpannerCommitRequest;

typedef struct {
    const char* sql;
    int param_count;
    const char** param_names;
    CSpannerCell* param_cells;
    const uint8_t** param_types_pb;
    int* param_types_len;
} CSpannerStatement;

typedef struct {
    const char* routing_key;
    const char** meta_keys;
    const char** meta_vals;
    int meta_count;
    const char* session;
    const uint8_t* tx_id;
    int tx_id_len;
    int begin_rw;
    const uint8_t* prev_tx_id;
    int prev_tx_id_len;
    int64_t seqno;
    const char* transaction_tag;
    const char* request_tag;
    const uint8_t* base_req_pb;
    int base_req_len;
    int stmt_count;
    CSpannerStatement* statements;
} CSpannerBatchDmlRequest;

// Declarations of Go C-shared exported functions
extern "C" {
    uintptr_t InitGoCoreClient(int channel_count, const char* custom_endpoint);
    void CloseGoCoreClient(uintptr_t handle);
    void ExecuteStreamingSqlGo(
        uintptr_t handle,
        const char* routing_key,
        const char** meta_keys,
        const char** meta_vals,
        int meta_count,
        const char* req_bytes,
        int req_len,
        int skip_metadata,
        StreamDataCallback cb,
        void* user_data
    );
    void CommitNativeGo(
        uintptr_t handle,
        CSpannerCommitRequest* req,
        UnaryCallback cb,
        void* user_data
    );
    void ExecuteBatchDmlNativeGo(
        uintptr_t handle,
        CSpannerBatchDmlRequest* req,
        UnaryCallback cb,
        void* user_data
    );
    void ExecuteSqlDmlNativeGo(
        uintptr_t handle,
        CSpannerBatchDmlRequest* req,
        UnaryCallback cb,
        void* user_data
    );
    void BeginTransactionNativeGo(
        uintptr_t handle,
        const char* routing_key,
        const char** meta_keys,
        const char** meta_vals,
        int meta_count,
        const char* req_bytes,
        int req_len,
        UnaryCallback cb,
        void* user_data
    );
}

// Fast contiguous memory arena for request parameters and strings
struct Arena {
    char inline_buf[4096];
    std::vector<char*> blocks;
    char* current = nullptr;
    size_t offset = 0;
    size_t cap = 0;

    Arena() : current(inline_buf), offset(0), cap(sizeof(inline_buf)) {}

    ~Arena() {
        for (char* b : blocks) {
            free(b);
        }
    }

    char* alloc(size_t size) {
        if (size == 0) return nullptr;
        size_t aligned = (size + 7) & ~static_cast<size_t>(7);
        if (offset + aligned > cap) {
            size_t new_cap = aligned > 65536 ? aligned : 65536;
            current = static_cast<char*>(malloc(new_cap));
            blocks.push_back(current);
            offset = 0;
            cap = new_cap;
        }
        char* ptr = current + offset;
        offset += aligned;
        return ptr;
    }

    char* copy_str(napi_env env, napi_value str_val, size_t* out_len = nullptr) {
        size_t len = 0;
        napi_get_value_string_utf8(env, str_val, nullptr, 0, &len);
        char* dst = alloc(len + 1);
        napi_get_value_string_utf8(env, str_val, dst, len + 1, &len);
        dst[len] = '\0';
        if (out_len) *out_len = len;
        return dst;
    }
};

enum RequestType {
    REQ_STREAMING_SQL = 1,
    REQ_BATCH_DML = 2,
    REQ_SQL_DML = 3,
    REQ_COMMIT = 4,
    REQ_BEGIN_TX = 5
};

struct CoreClientHandleWrapper;

struct RpcRequestContext {
    CoreClientHandleWrapper* wrap;
    RequestType type;
    napi_ref cb_ref;
    Arena arena;

    const char* routing_key = nullptr;
    std::vector<const char*> meta_keys_ptr;
    std::vector<const char*> meta_vals_ptr;

    // For REQ_STREAMING_SQL / REQ_BEGIN_TX
    const char* req_bytes = nullptr;
    int req_len = 0;
    int skip_metadata = 0;

    // For REQ_COMMIT
    CSpannerCommitRequest commit_req;

    // For REQ_BATCH_DML / REQ_SQL_DML
    CSpannerBatchDmlRequest dml_req;

    RpcRequestContext(CoreClientHandleWrapper* w, RequestType t)
        : wrap(w), type(t), cb_ref(nullptr) {
        memset(&commit_req, 0, sizeof(commit_req));
        memset(&dml_req, 0, sizeof(dml_req));
    }
};

struct CompletionEvent {
    RpcRequestContext* ctx;
    CSpannerBatch* batch;
    CUnaryResponse* unary;
};

extern "C" void OnGoStreamData(void* user_data, CSpannerBatch* batch);
extern "C" void OnGoUnaryResponse(void* user_data, CUnaryResponse* resp);

static napi_ref constructor_ref;

struct CoreClientHandleWrapper {
    uintptr_t handle;
    napi_threadsafe_function tsfn = nullptr;
    std::mutex tsfn_mu;
    std::atomic<bool> is_closed{false};
    std::atomic<int> active_rpcs{0};

    std::mutex queue_mu;
    std::condition_variable queue_cv;
    std::deque<RpcRequestContext*> queue;
    bool shutdown = false;
    std::vector<std::thread> workers;

    CoreClientHandleWrapper(uintptr_t h) : handle(h) {
        const int num_workers = 2;
        for (int i = 0; i < num_workers; i++) {
            workers.emplace_back(&CoreClientHandleWrapper::DispatchLoop, this);
        }
    }

    void Enqueue(napi_env env, RpcRequestContext* ctx) {
        if (active_rpcs.fetch_add(1) == 0 && !is_closed.load() && tsfn != nullptr) {
            napi_ref_threadsafe_function(env, tsfn);
        }
        {
            std::lock_guard<std::mutex> lock(queue_mu);
            queue.push_back(ctx);
        }
        queue_cv.notify_one();
    }

    void DispatchLoop() {
        while (true) {
            RpcRequestContext* ctx = nullptr;
            {
                std::unique_lock<std::mutex> lock(queue_mu);
                queue_cv.wait(lock, [this] { return shutdown || !queue.empty(); });
                if (shutdown && queue.empty()) {
                    break;
                }
                ctx = queue.front();
                queue.pop_front();
            }
            if (!ctx) continue;

            switch (ctx->type) {
                case REQ_STREAMING_SQL:
                    ExecuteStreamingSqlGo(
                        handle,
                        ctx->routing_key,
                        ctx->meta_keys_ptr.data(),
                        ctx->meta_vals_ptr.data(),
                        static_cast<int>(ctx->meta_keys_ptr.size()),
                        ctx->req_bytes,
                        ctx->req_len,
                        ctx->skip_metadata,
                        OnGoStreamData,
                        ctx
                    );
                    break;
                case REQ_SQL_DML:
                    ExecuteSqlDmlNativeGo(handle, &ctx->dml_req, OnGoUnaryResponse, ctx);
                    break;
                case REQ_BATCH_DML:
                    ExecuteBatchDmlNativeGo(handle, &ctx->dml_req, OnGoUnaryResponse, ctx);
                    break;
                case REQ_COMMIT:
                    CommitNativeGo(handle, &ctx->commit_req, OnGoUnaryResponse, ctx);
                    break;
                case REQ_BEGIN_TX:
                    BeginTransactionNativeGo(
                        handle,
                        ctx->routing_key,
                        ctx->meta_keys_ptr.data(),
                        ctx->meta_vals_ptr.data(),
                        static_cast<int>(ctx->meta_keys_ptr.size()),
                        ctx->req_bytes,
                        ctx->req_len,
                        OnGoUnaryResponse,
                        ctx
                    );
                    break;
            }
        }
    }

    void Close(napi_env env) {
        bool expected = false;
        if (!is_closed.compare_exchange_strong(expected, true)) {
            return;
        }
        {
            std::lock_guard<std::mutex> lock(queue_mu);
            shutdown = true;
        }
        queue_cv.notify_all();
        for (auto& t : workers) {
            if (t.joinable()) {
                t.join();
            }
        }
        workers.clear();

        while (!queue.empty()) {
            RpcRequestContext* ctx = queue.front();
            queue.pop_front();
            if (env && ctx->cb_ref) {
                napi_delete_reference(env, ctx->cb_ref);
            }
            active_rpcs.fetch_sub(1);
            delete ctx;
        }

        if (handle != 0) {
            CloseGoCoreClient(handle);
            handle = 0;
        }

        {
            std::lock_guard<std::mutex> lock(tsfn_mu);
            if (tsfn != nullptr) {
                napi_release_threadsafe_function(tsfn, napi_tsfn_abort);
                tsfn = nullptr;
            }
        }
    }

    ~CoreClientHandleWrapper() {
        Close(nullptr);
    }
};

extern "C" void OnGoStreamData(void* user_data, CSpannerBatch* batch) {
    RpcRequestContext* ctx = static_cast<RpcRequestContext*>(user_data);
    if (!ctx || !ctx->wrap) {
        if (batch) {
            if (batch->cells) free(batch->cells);
            if (batch->string_arena) free(batch->string_arena);
            if (batch->json_rows) free(batch->json_rows);
            if (batch->server_timing) free(batch->server_timing);
            if (batch->error_msg) free(batch->error_msg);
            if (batch->metadata_pb) free(batch->metadata_pb);
            free(batch);
        }
        return;
    }
    std::lock_guard<std::mutex> lock(ctx->wrap->tsfn_mu);
    if (ctx->wrap->is_closed.load() || ctx->wrap->tsfn == nullptr) {
        if (batch) {
            if (batch->cells) free(batch->cells);
            if (batch->string_arena) free(batch->string_arena);
            if (batch->json_rows) free(batch->json_rows);
            if (batch->server_timing) free(batch->server_timing);
            if (batch->error_msg) free(batch->error_msg);
            if (batch->metadata_pb) free(batch->metadata_pb);
            free(batch);
        }
        return;
    }
    CompletionEvent* ev = new CompletionEvent{ ctx, batch, nullptr };
    napi_call_threadsafe_function(ctx->wrap->tsfn, ev, napi_tsfn_nonblocking);
}

extern "C" void OnGoUnaryResponse(void* user_data, CUnaryResponse* resp) {
    RpcRequestContext* ctx = static_cast<RpcRequestContext*>(user_data);
    if (!ctx || !ctx->wrap) {
        if (resp) {
            if (resp->resp_pb) free(resp->resp_pb);
            if (resp->tx_pb) free(resp->tx_pb);
            if (resp->error_msg) free(resp->error_msg);
            if (resp->retry_info_pb) free(resp->retry_info_pb);
            free(resp);
        }
        return;
    }
    std::lock_guard<std::mutex> lock(ctx->wrap->tsfn_mu);
    if (ctx->wrap->is_closed.load() || ctx->wrap->tsfn == nullptr) {
        if (resp) {
            if (resp->resp_pb) free(resp->resp_pb);
            if (resp->tx_pb) free(resp->tx_pb);
            if (resp->error_msg) free(resp->error_msg);
            if (resp->retry_info_pb) free(resp->retry_info_pb);
            free(resp);
        }
        return;
    }
    CompletionEvent* ev = new CompletionEvent{ ctx, nullptr, resp };
    napi_call_threadsafe_function(ctx->wrap->tsfn, ev, napi_tsfn_nonblocking);
}

// Unified CallJsDispatchHandler runs on the V8 main event loop thread
void CallJsDispatchHandler(napi_env env, napi_value js_cb_unused, void* context, void* data) {
    CompletionEvent* ev = static_cast<CompletionEvent*>(data);
    if (!ev) return;
    RpcRequestContext* ctx = ev->ctx;

    if (env != nullptr && ctx != nullptr && ctx->cb_ref != nullptr) {
        napi_value global, null_val, js_cb;
        napi_get_global(env, &global);
        napi_get_null(env, &null_val);
        napi_get_reference_value(env, ctx->cb_ref, &js_cb);

        if (ev->unary != nullptr) {
            CUnaryResponse* resp = ev->unary;
            if (resp->error_msg != nullptr) {
                napi_value err_obj, err_msg_val, err_code_val;
                napi_create_string_utf8(env, resp->error_msg, NAPI_AUTO_LENGTH, &err_msg_val);
                napi_create_error(env, nullptr, err_msg_val, &err_obj);
                napi_create_int32(env, resp->error_code, &err_code_val);
                napi_set_named_property(env, err_obj, "code", err_code_val);

                if (resp->retry_info_pb != nullptr && resp->retry_info_len > 0) {
                    napi_value retry_buf;
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env, (size_t)resp->retry_info_len, resp->retry_info_pb, &copy_data, &retry_buf);
                    napi_set_named_property(env, err_obj, "retryInfoPb", retry_buf);
                }

                napi_value tx_val = null_val;
                if (resp->tx_pb != nullptr && resp->tx_len > 0) {
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env, (size_t)resp->tx_len, resp->tx_pb, &copy_data, &tx_val);
                }

                napi_value argv[3] = { err_obj, null_val, tx_val };
                napi_call_function(env, global, js_cb, 3, argv, nullptr);
            } else {
                napi_value resp_val = null_val;
                if (resp->resp_pb != nullptr && resp->resp_len > 0) {
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env, (size_t)resp->resp_len, resp->resp_pb, &copy_data, &resp_val);
                }

                napi_value tx_val = null_val;
                if (resp->tx_pb != nullptr && resp->tx_len > 0) {
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env, (size_t)resp->tx_len, resp->tx_pb, &copy_data, &tx_val);
                }

                napi_value row_count_val = null_val;
                if (resp->has_row_count) {
                    napi_create_int64(env, resp->row_count, &row_count_val);
                }

                napi_value argv[4] = { null_val, resp_val, tx_val, row_count_val };
                napi_call_function(env, global, js_cb, 4, argv, nullptr);
            }

            if (resp->resp_pb != nullptr) free(resp->resp_pb);
            if (resp->tx_pb != nullptr) free(resp->tx_pb);
            if (resp->error_msg != nullptr) free(resp->error_msg);
            if (resp->retry_info_pb != nullptr) free(resp->retry_info_pb);
            free(resp);

            if (ctx->wrap) {
                if (ctx->wrap->active_rpcs.fetch_sub(1) == 1 && !ctx->wrap->is_closed.load() && ctx->wrap->tsfn != nullptr) {
                    napi_unref_threadsafe_function(env, ctx->wrap->tsfn);
                }
            }
            napi_delete_reference(env, ctx->cb_ref);
            delete ctx;
        } else if (ev->batch != nullptr) {
            CSpannerBatch* batch = ev->batch;
            bool is_final = (batch->is_last != 0) || (batch->error_msg != nullptr);

            if (batch->error_msg != nullptr) {
                napi_value err_obj, err_msg_val, err_code_val;
                napi_create_string_utf8(env, batch->error_msg, NAPI_AUTO_LENGTH, &err_msg_val);
                napi_create_error(env, nullptr, err_msg_val, &err_obj);
                napi_create_int32(env, batch->error_code, &err_code_val);
                napi_set_named_property(env, err_obj, "code", err_code_val);

                napi_value argv[5] = { err_obj, null_val, null_val, null_val, null_val };
                napi_call_function(env, global, js_cb, 5, argv, nullptr);
            } else if (batch->is_last && batch->row_count == 0) {
                // End of stream signal (may carry metadata_pb if 0 rows were returned)
                napi_value metadata_val = null_val;
                if (batch->metadata_pb != nullptr && batch->metadata_len > 0) {
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env,
                                            (size_t)batch->metadata_len,
                                            batch->metadata_pb,
                                            &copy_data,
                                            &metadata_val);
                }
                napi_value true_val;
                napi_get_boolean(env, true, &true_val);
                napi_value argv[5] = { null_val, null_val, null_val, metadata_val, true_val };
                napi_call_function(env, global, js_cb, 5, argv, nullptr);
            } else {
                napi_value rows_val = null_val;

                if (batch->format == 1 && batch->cells != nullptr && batch->row_count > 0 && batch->col_count > 0) {
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
                    napi_value json_global, parse_fn, json_str;
                    napi_get_named_property(env, global, "JSON", &json_global);
                    napi_get_named_property(env, json_global, "parse", &parse_fn);
                    napi_create_string_utf8(env, batch->json_rows, NAPI_AUTO_LENGTH, &json_str);
                    napi_call_function(env, json_global, parse_fn, 1, &json_str, &rows_val);
                }

                napi_value telemetry_val = null_val;
                if (batch->server_timing != nullptr && batch->server_timing[0] != '\0') {
                    napi_create_object(env, &telemetry_val);
                    napi_value st_val;
                    napi_create_string_utf8(env, batch->server_timing, NAPI_AUTO_LENGTH, &st_val);
                    napi_set_named_property(env, telemetry_val, "serverTiming", st_val);
                    napi_value attempt_val;
                    napi_create_uint32(env, (uint32_t)batch->attempt_count, &attempt_val);
                    napi_set_named_property(env, telemetry_val, "attemptCount", attempt_val);
                }

                napi_value metadata_val = null_val;
                if (batch->metadata_pb != nullptr && batch->metadata_len > 0) {
                    void* copy_data = nullptr;
                    napi_create_buffer_copy(env,
                                            (size_t)batch->metadata_len,
                                            batch->metadata_pb,
                                            &copy_data,
                                            &metadata_val);
                }

                napi_value is_last_val;
                napi_get_boolean(env, batch->is_last != 0, &is_last_val);

                napi_value argv[5] = { null_val, rows_val, telemetry_val, metadata_val, is_last_val };
                napi_call_function(env, global, js_cb, 5, argv, nullptr);
            }

            if (batch->cells != nullptr) free(batch->cells);
            if (batch->string_arena != nullptr) free(batch->string_arena);
            if (batch->json_rows != nullptr) free(batch->json_rows);
            if (batch->server_timing != nullptr) free(batch->server_timing);
            if (batch->error_msg != nullptr) free(batch->error_msg);
            if (batch->metadata_pb != nullptr) free(batch->metadata_pb);
            free(batch);

            if (is_final) {
                if (ctx->wrap) {
                    if (ctx->wrap->active_rpcs.fetch_sub(1) == 1 && !ctx->wrap->is_closed.load() && ctx->wrap->tsfn != nullptr) {
                        napi_unref_threadsafe_function(env, ctx->wrap->tsfn);
                    }
                }
                napi_delete_reference(env, ctx->cb_ref);
                delete ctx;
            }
        }
    } else {
        if (ev->unary != nullptr) {
            CUnaryResponse* resp = ev->unary;
            if (resp->resp_pb) free(resp->resp_pb);
            if (resp->tx_pb) free(resp->tx_pb);
            if (resp->error_msg) free(resp->error_msg);
            if (resp->retry_info_pb) free(resp->retry_info_pb);
            free(resp);
            if (ctx) {
                if (ctx->wrap) ctx->wrap->active_rpcs.fetch_sub(1);
                delete ctx;
            }
        } else if (ev->batch != nullptr) {
            CSpannerBatch* batch = ev->batch;
            bool is_final = (batch->is_last != 0) || (batch->error_msg != nullptr);
            if (batch->cells) free(batch->cells);
            if (batch->string_arena) free(batch->string_arena);
            if (batch->json_rows) free(batch->json_rows);
            if (batch->server_timing) free(batch->server_timing);
            if (batch->error_msg) free(batch->error_msg);
            if (batch->metadata_pb) free(batch->metadata_pb);
            free(batch);
            if (is_final && ctx) {
                if (ctx->wrap) ctx->wrap->active_rpcs.fetch_sub(1);
                delete ctx;
            }
        }
    }
    delete ev;
}

static napi_value NoopCallback(napi_env env, napi_callback_info info) {
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

void CoreClientHandleDestructor(napi_env env, void* nativeObject, void* finalize_hint) {
    CoreClientHandleWrapper* wrap = static_cast<CoreClientHandleWrapper*>(nativeObject);
    if (wrap != nullptr) {
        wrap->Close(env);
        delete wrap;
    }
}

napi_value CoreClientHandleConstructor(napi_env env, napi_callback_info info) {
    napi_value jsthis;
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, &jsthis, nullptr);

    int channel_count = 1;
    if (argc >= 1) {
        int32_t val;
        if (napi_get_value_int32(env, args[0], &val) == napi_ok) {
            channel_count = (int)val;
        }
    }

    char endpoint_buf[256] = {0};
    if (argc >= 2) {
        size_t ep_len = 0;
        napi_get_value_string_utf8(env, args[1], endpoint_buf, sizeof(endpoint_buf), &ep_len);
    }

    uintptr_t handle = InitGoCoreClient(channel_count, endpoint_buf);
    CoreClientHandleWrapper* wrap = new CoreClientHandleWrapper(handle);

    napi_value noop_fn, resource_name;
    napi_create_function(env, "noop", NAPI_AUTO_LENGTH, NoopCallback, nullptr, &noop_fn);
    napi_create_string_utf8(env, "SpannerGoCoreDispatch", NAPI_AUTO_LENGTH, &resource_name);

    napi_status status = napi_create_threadsafe_function(
        env,
        noop_fn,
        nullptr,
        resource_name,
        0,
        1,
        nullptr,
        nullptr,
        wrap,
        CallJsDispatchHandler,
        &(wrap->tsfn)
    );
    if (status == napi_ok && wrap->tsfn != nullptr) {
        napi_unref_threadsafe_function(env, wrap->tsfn);
    }

    napi_wrap(env, jsthis, wrap, CoreClientHandleDestructor, nullptr, nullptr);
    return jsthis;
}

napi_value CoreClientHandleClose(napi_env env, napi_callback_info info) {
    napi_value jsthis;
    napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr);

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, jsthis, reinterpret_cast<void**>(&wrap));
    if (wrap != nullptr) {
        wrap->Close(env);
    }

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static const char B64_TABLE[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

size_t Base64Encode(const uint8_t* src, size_t len, char* dst) {
    size_t i = 0, j = 0;
    while (i + 2 < len) {
        uint32_t v = (static_cast<uint32_t>(src[i]) << 16) |
                     (static_cast<uint32_t>(src[i + 1]) << 8) |
                     static_cast<uint32_t>(src[i + 2]);
        dst[j++] = B64_TABLE[(v >> 18) & 0x3F];
        dst[j++] = B64_TABLE[(v >> 12) & 0x3F];
        dst[j++] = B64_TABLE[(v >> 6) & 0x3F];
        dst[j++] = B64_TABLE[v & 0x3F];
        i += 3;
    }
    if (i < len) {
        uint32_t v = static_cast<uint32_t>(src[i]) << 16;
        if (i + 1 < len) v |= static_cast<uint32_t>(src[i + 1]) << 8;
        dst[j++] = B64_TABLE[(v >> 18) & 0x3F];
        dst[j++] = B64_TABLE[(v >> 12) & 0x3F];
        if (i + 1 < len) {
            dst[j++] = B64_TABLE[(v >> 6) & 0x3F];
        } else {
            dst[j++] = '=';
        }
        dst[j++] = '=';
    }
    return j;
}

void ExtractBytesInfo(napi_env env, napi_value val, const uint8_t** out_ptr, int* out_len) {
    *out_ptr = nullptr;
    *out_len = 0;
    if (val == nullptr) return;
    napi_valuetype vt;
    if (napi_typeof(env, val, &vt) != napi_ok || vt == napi_null || vt == napi_undefined) return;

    bool is_typedarray = false;
    napi_is_typedarray(env, val, &is_typedarray);
    if (is_typedarray) {
        napi_typedarray_type type;
        napi_value arraybuffer;
        size_t byte_offset = 0, byte_len = 0;
        void* data = nullptr;
        if (napi_get_typedarray_info(env, val, &type, &byte_len, &data, &arraybuffer, &byte_offset) == napi_ok) {
            *out_ptr = static_cast<const uint8_t*>(data);
            *out_len = static_cast<int>(byte_len);
        }
        return;
    }
    bool is_buffer = false;
    napi_is_buffer(env, val, &is_buffer);
    if (is_buffer) {
        void* data = nullptr;
        size_t byte_len = 0;
        if (napi_get_buffer_info(env, val, &data, &byte_len) == napi_ok) {
            *out_ptr = static_cast<const uint8_t*>(data);
            *out_len = static_cast<int>(byte_len);
        }
    }
}

void CopyBytesToArena(napi_env env, napi_value val, Arena& arena, const uint8_t** out_ptr, int* out_len) {
    *out_ptr = nullptr;
    *out_len = 0;
    const uint8_t* src_ptr = nullptr;
    int src_len = 0;
    ExtractBytesInfo(env, val, &src_ptr, &src_len);
    if (src_len > 0 && src_ptr != nullptr) {
        char* dst = arena.alloc(src_len);
        memcpy(dst, src_ptr, src_len);
        *out_ptr = reinterpret_cast<const uint8_t*>(dst);
        *out_len = src_len;
    }
}

void ExtractMetadataArena(
    napi_env env,
    napi_value meta_arr,
    Arena& arena,
    std::vector<const char*>& keys_ptr,
    std::vector<const char*>& vals_ptr
) {
    uint32_t meta_len = 0;
    if (napi_get_array_length(env, meta_arr, &meta_len) != napi_ok || meta_len == 0) return;

    keys_ptr.reserve(meta_len);
    vals_ptr.reserve(meta_len);

    for (uint32_t i = 0; i < meta_len; i++) {
        napi_value pair_val;
        if (napi_get_element(env, meta_arr, i, &pair_val) != napi_ok) continue;
        uint32_t pair_len = 0;
        if (napi_get_array_length(env, pair_val, &pair_len) != napi_ok || pair_len != 2) continue;

        napi_value k_val, v_val;
        napi_get_element(env, pair_val, 0, &k_val);
        napi_get_element(env, pair_val, 1, &v_val);

        keys_ptr.push_back(arena.copy_str(env, k_val));
        vals_ptr.push_back(arena.copy_str(env, v_val));
    }
}

void ExtractCellFromJsValue(
    napi_env env,
    napi_value val,
    napi_value fallback_fn,
    CSpannerCell* cell,
    Arena& arena,
    bool need_type_code = false,
    uint16_t explicit_type_code = 0
) {
    memset(cell, 0, sizeof(CSpannerCell));
    napi_valuetype vtype = napi_undefined;
    napi_typeof(env, val, &vtype);

    switch (vtype) {
        case napi_null:
        case napi_undefined:
            cell->kind = CELL_KIND_NULL;
            cell->type_code = explicit_type_code;
            return;

        case napi_boolean: {
            bool b = false;
            napi_get_value_bool(env, val, &b);
            cell->kind = CELL_KIND_BOOL;
            cell->bool_val = b ? 1 : 0;
            cell->type_code = explicit_type_code > 0 ? explicit_type_code : 1; // BOOL
            return;
        }

        case napi_string: {
            size_t len = 0;
            char* dst = arena.copy_str(env, val, &len);
            cell->kind = CELL_KIND_STRING;
            cell->str_val = dst;
            cell->str_len = static_cast<uint32_t>(len);
            cell->type_code = explicit_type_code > 0 ? explicit_type_code : 6; // STRING
            return;
        }

        case napi_number: {
            double d = 0;
            napi_get_value_double(env, val, &d);
            if (explicit_type_code == 3 || explicit_type_code == 15) {
                if (!std::isfinite(d)) {
                    const char* s = std::isnan(d) ? "NaN" : (d > 0 ? "Infinity" : "-Infinity");
                    size_t len = strlen(s);
                    char* dst = arena.alloc(len + 1);
                    memcpy(dst, s, len + 1);
                    cell->kind = CELL_KIND_STRING;
                    cell->str_val = dst;
                    cell->str_len = static_cast<uint32_t>(len);
                } else {
                    cell->kind = CELL_KIND_NUMBER;
                    cell->number_val = d;
                }
                cell->type_code = explicit_type_code;
                return;
            }
            if (explicit_type_code == 2 || (explicit_type_code == 0 && std::floor(d) == d && d >= -9007199254740991.0 && d <= 9007199254740991.0)) {
                char* dst = arena.alloc(32);
                int len = snprintf(dst, 32, "%.0f", d);
                cell->kind = CELL_KIND_STRING;
                cell->str_val = dst;
                cell->str_len = static_cast<uint32_t>(len > 0 ? len : 0);
                cell->type_code = explicit_type_code > 0 ? explicit_type_code : 2; // INT64
                return;
            }
            if (!std::isfinite(d)) {
                const char* s = std::isnan(d) ? "NaN" : (d > 0 ? "Infinity" : "-Infinity");
                size_t len = strlen(s);
                char* dst = arena.alloc(len + 1);
                memcpy(dst, s, len + 1);
                cell->kind = CELL_KIND_STRING;
                cell->str_val = dst;
                cell->str_len = static_cast<uint32_t>(len);
            } else {
                cell->kind = CELL_KIND_NUMBER;
                cell->number_val = d;
            }
            cell->type_code = explicit_type_code > 0 ? explicit_type_code : 3; // FLOAT64
            return;
        }

        case napi_bigint: {
            int64_t i64 = 0;
            bool lossless = false;
            napi_get_value_bigint_int64(env, val, &i64, &lossless);
            char* dst = arena.alloc(32);
            int len = snprintf(dst, 32, "%lld", static_cast<long long>(i64));
            cell->kind = CELL_KIND_STRING;
            cell->str_val = dst;
            cell->str_len = static_cast<uint32_t>(len > 0 ? len : 0);
            cell->type_code = explicit_type_code > 0 ? explicit_type_code : 2; // INT64
            return;
        }

        case napi_object: {
            const uint8_t* raw_bytes = nullptr;
            int raw_len = 0;
            ExtractBytesInfo(env, val, &raw_bytes, &raw_len);
            if (raw_bytes != nullptr) {
                size_t len = static_cast<size_t>(raw_len);
                size_t b64_len = ((len + 2) / 3) * 4;
                char* dst = arena.alloc(b64_len + 1);
                size_t actual = Base64Encode(raw_bytes, len, dst);
                dst[actual] = '\0';
                cell->kind = CELL_KIND_STRING;
                cell->str_val = dst;
                cell->str_len = static_cast<uint32_t>(actual);
                cell->type_code = explicit_type_code > 0 ? explicit_type_code : 7; // BYTES
                return;
            }

            bool has_val = false;
            if (napi_has_named_property(env, val, "value", &has_val) == napi_ok && has_val) {
                napi_value inner_val;
                if (napi_get_named_property(env, val, "value", &inner_val) == napi_ok) {
                    napi_valuetype iv_type = napi_undefined;
                    napi_typeof(env, inner_val, &iv_type);
                    if (iv_type == napi_string) {
                        size_t len = 0;
                        char* dst = arena.copy_str(env, inner_val, &len);
                        cell->kind = CELL_KIND_STRING;
                        cell->str_val = dst;
                        cell->str_len = static_cast<uint32_t>(len);
                        if (explicit_type_code > 0) {
                            cell->type_code = explicit_type_code;
                        } else {
                            cell->type_code = 6;
                            if (need_type_code) {
                                napi_value ctor, ctor_name;
                                if (napi_get_named_property(env, val, "constructor", &ctor) == napi_ok &&
                                    napi_get_named_property(env, ctor, "name", &ctor_name) == napi_ok) {
                                    char cname[32];
                                    size_t clen = 0;
                                    napi_get_value_string_utf8(env, ctor_name, cname, sizeof(cname), &clen);
                                    if (strcmp(cname, "Int") == 0) cell->type_code = 2;
                                    else if (strcmp(cname, "Numeric") == 0 || strcmp(cname, "PGNumeric") == 0) cell->type_code = 10;
                                    else if (strcmp(cname, "SpannerDate") == 0) cell->type_code = 5;
                                }
                            }
                        }
                        return;
                    } else if (iv_type == napi_number) {
                        double d = 0;
                        napi_get_value_double(env, inner_val, &d);
                        if (!std::isfinite(d)) {
                            const char* s = std::isnan(d) ? "NaN" : (d > 0 ? "Infinity" : "-Infinity");
                            size_t len = strlen(s);
                            char* dst = arena.alloc(len + 1);
                            memcpy(dst, s, len + 1);
                            cell->kind = CELL_KIND_STRING;
                            cell->str_val = dst;
                            cell->str_len = static_cast<uint32_t>(len);
                        } else {
                            cell->kind = CELL_KIND_NUMBER;
                            cell->number_val = d;
                        }
                        if (explicit_type_code > 0) {
                            cell->type_code = explicit_type_code;
                        } else {
                            cell->type_code = 3;
                            if (need_type_code) {
                                napi_value ctor, ctor_name;
                                if (napi_get_named_property(env, val, "constructor", &ctor) == napi_ok &&
                                    napi_get_named_property(env, ctor, "name", &ctor_name) == napi_ok) {
                                    char cname[32];
                                    size_t clen = 0;
                                    napi_get_value_string_utf8(env, ctor_name, cname, sizeof(cname), &clen);
                                    if (strcmp(cname, "Float32") == 0) cell->type_code = 15;
                                }
                            }
                        }
                        return;
                    }
                }
            }

            bool is_date = false;
            napi_is_date(env, val, &is_date);
            if (is_date) {
                napi_value global, iso_fn, str_res;
                napi_get_global(env, &global);
                if (napi_get_named_property(env, val, "toISOString", &iso_fn) == napi_ok &&
                    napi_call_function(env, val, iso_fn, 0, nullptr, &str_res) == napi_ok) {
                    size_t len = 0;
                    char* dst = arena.copy_str(env, str_res, &len);
                    cell->kind = CELL_KIND_STRING;
                    cell->str_val = dst;
                    cell->str_len = static_cast<uint32_t>(len);
                    cell->type_code = explicit_type_code > 0 ? explicit_type_code : 4; // TIMESTAMP
                    return;
                }
            }
            break;
        }
        default:
            break;
    }

    if (fallback_fn != nullptr) {
        napi_value global, res;
        napi_get_global(env, &global);
        napi_value argv[1] = { val };
        if (napi_call_function(env, global, fallback_fn, 1, argv, &res) == napi_ok) {
            napi_value kind_val, type_code_val;
            int32_t kind = 0, type_code = 0;
            if (napi_get_named_property(env, res, "kind", &kind_val) == napi_ok) {
                napi_get_value_int32(env, kind_val, &kind);
            }
            if (napi_get_named_property(env, res, "typeCode", &type_code_val) == napi_ok) {
                napi_get_value_int32(env, type_code_val, &type_code);
            }
            cell->type_code = explicit_type_code > 0
                ? explicit_type_code
                : static_cast<uint16_t>(type_code);

            if (kind == CELL_KIND_NULL) {
                cell->kind = CELL_KIND_NULL;
            } else if (kind == CELL_KIND_BOOL) {
                napi_value b_val;
                int32_t b = 0;
                if (napi_get_named_property(env, res, "boolVal", &b_val) == napi_ok) {
                    napi_get_value_int32(env, b_val, &b);
                }
                cell->kind = CELL_KIND_BOOL;
                cell->bool_val = b ? 1 : 0;
            } else if (kind == CELL_KIND_NUMBER) {
                napi_value n_val;
                double d = 0;
                if (napi_get_named_property(env, res, "numVal", &n_val) == napi_ok) {
                    napi_get_value_double(env, n_val, &d);
                }
                cell->kind = CELL_KIND_NUMBER;
                cell->number_val = d;
            } else if (kind == CELL_KIND_STRING) {
                napi_value s_val;
                if (napi_get_named_property(env, res, "strVal", &s_val) == napi_ok) {
                    size_t len = 0;
                    char* dst = arena.copy_str(env, s_val, &len);
                    cell->kind = CELL_KIND_STRING;
                    cell->str_val = dst;
                    cell->str_len = static_cast<uint32_t>(len);
                }
            } else if (kind == CELL_KIND_PROTO_VALUE) {
                napi_value pb_val;
                if (napi_get_named_property(env, res, "pbBytes", &pb_val) == napi_ok) {
                    const uint8_t* pb_ptr = nullptr;
                    int pb_len = 0;
                    ExtractBytesInfo(env, pb_val, &pb_ptr, &pb_len);
                    if (pb_ptr != nullptr && pb_len > 0) {
                        char* dst = arena.alloc(pb_len);
                        memcpy(dst, pb_ptr, pb_len);
                        cell->kind = CELL_KIND_PROTO_VALUE;
                        cell->str_val = dst;
                        cell->str_len = static_cast<uint32_t>(pb_len);
                    }
                }
            }
        }
    }
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

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, args[0], reinterpret_cast<void**>(&wrap));
    if (wrap == nullptr || wrap->handle == 0 || wrap->is_closed.load()) {
        napi_throw_error(env, nullptr, "Invalid CoreClientHandle");
        return nullptr;
    }

    RpcRequestContext* ctx = new RpcRequestContext(wrap, REQ_STREAMING_SQL);
    ctx->routing_key = ctx->arena.copy_str(env, args[1]);
    ExtractMetadataArena(env, args[2], ctx->arena, ctx->meta_keys_ptr, ctx->meta_vals_ptr);

    const uint8_t* req_ptr = nullptr;
    int req_len = 0;
    CopyBytesToArena(env, args[3], ctx->arena, &req_ptr, &req_len);
    ctx->req_bytes = reinterpret_cast<const char*>(req_ptr);
    ctx->req_len = req_len;

    bool skip_meta = false;
    if (napi_get_value_bool(env, args[4], &skip_meta) == napi_ok && skip_meta) {
        ctx->skip_metadata = 1;
    }

    napi_create_reference(env, args[5], 1, &ctx->cb_ref);
    wrap->Enqueue(env, ctx);

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

// Function: commitNative
napi_value CommitNative(napi_env env, napi_callback_info info) {
    size_t argc = 8;
    napi_value args[8];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc < 8) {
        napi_throw_type_error(env, nullptr, "Wrong number of arguments for commitNative");
        return nullptr;
    }

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, args[0], reinterpret_cast<void**>(&wrap));
    if (wrap == nullptr || wrap->handle == 0 || wrap->is_closed.load()) {
        napi_throw_error(env, nullptr, "Invalid CoreClientHandle");
        return nullptr;
    }

    RpcRequestContext* ctx = new RpcRequestContext(wrap, REQ_COMMIT);
    ctx->commit_req.routing_key = ctx->arena.copy_str(env, args[1]);
    ExtractMetadataArena(env, args[2], ctx->arena, ctx->meta_keys_ptr, ctx->meta_vals_ptr);
    ctx->commit_req.meta_keys = ctx->meta_keys_ptr.data();
    ctx->commit_req.meta_vals = ctx->meta_vals_ptr.data();
    ctx->commit_req.meta_count = static_cast<int>(ctx->meta_keys_ptr.size());

    CopyBytesToArena(env, args[3], ctx->arena, &ctx->commit_req.base_req_pb, &ctx->commit_req.base_req_len);

    bool inline_begin = false;
    napi_get_value_bool(env, args[4], &inline_begin);
    ctx->commit_req.inline_begin = inline_begin ? 1 : 0;

    CopyBytesToArena(env, args[5], ctx->arena, &ctx->commit_req.begin_req_pb, &ctx->commit_req.begin_req_len);

    bool is_mux_rw = false;
    napi_get_value_bool(env, args[6], &is_mux_rw);
    ctx->commit_req.is_mux_rw = is_mux_rw ? 1 : 0;

    napi_create_reference(env, args[7], 1, &ctx->cb_ref);
    wrap->Enqueue(env, ctx);

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

// Function: executeBatchDmlNative
napi_value ExecuteBatchDmlNative(napi_env env, napi_callback_info info) {
    size_t argc = 8;
    napi_value args[8];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc < 8) {
        napi_throw_type_error(env, nullptr, "Wrong number of arguments for executeBatchDmlNative");
        return nullptr;
    }

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, args[0], reinterpret_cast<void**>(&wrap));
    if (wrap == nullptr || wrap->handle == 0 || wrap->is_closed.load()) {
        napi_throw_error(env, nullptr, "Invalid CoreClientHandle");
        return nullptr;
    }

    bool is_single_sql = false;
    napi_get_value_bool(env, args[6], &is_single_sql);

    RpcRequestContext* ctx = new RpcRequestContext(wrap, is_single_sql ? REQ_SQL_DML : REQ_BATCH_DML);
    CSpannerBatchDmlRequest& c_req = ctx->dml_req;

    c_req.routing_key = ctx->arena.copy_str(env, args[1]);
    ExtractMetadataArena(env, args[2], ctx->arena, ctx->meta_keys_ptr, ctx->meta_vals_ptr);
    c_req.meta_keys = ctx->meta_keys_ptr.data();
    c_req.meta_vals = ctx->meta_vals_ptr.data();
    c_req.meta_count = static_cast<int>(ctx->meta_keys_ptr.size());

    CopyBytesToArena(env, args[3], ctx->arena, &c_req.base_req_pb, &c_req.base_req_len);
    if (c_req.base_req_pb == nullptr || c_req.base_req_len == 0) {
        napi_valuetype dml_type = napi_undefined;
        napi_typeof(env, args[3], &dml_type);
        if (dml_type == napi_object) {
            napi_value prop_val;
            if (napi_get_named_property(env, args[3], "session", &prop_val) == napi_ok) {
                c_req.session = ctx->arena.copy_str(env, prop_val);
            }
            if (napi_get_named_property(env, args[3], "txId", &prop_val) == napi_ok) {
                CopyBytesToArena(env, prop_val, ctx->arena, &c_req.tx_id, &c_req.tx_id_len);
            }
            if (napi_get_named_property(env, args[3], "beginRw", &prop_val) == napi_ok) {
                bool b = false;
                napi_get_value_bool(env, prop_val, &b);
                c_req.begin_rw = b ? 1 : 0;
            }
            if (napi_get_named_property(env, args[3], "prevTxId", &prop_val) == napi_ok) {
                CopyBytesToArena(env, prop_val, ctx->arena, &c_req.prev_tx_id, &c_req.prev_tx_id_len);
            }
            if (napi_get_named_property(env, args[3], "seqno", &prop_val) == napi_ok) {
                napi_get_value_int64(env, prop_val, &c_req.seqno);
            }
            if (napi_get_named_property(env, args[3], "transactionTag", &prop_val) == napi_ok) {
                c_req.transaction_tag = ctx->arena.copy_str(env, prop_val);
            }
            if (napi_get_named_property(env, args[3], "requestTag", &prop_val) == napi_ok) {
                c_req.request_tag = ctx->arena.copy_str(env, prop_val);
            }
        }
    }

    napi_value stmts_arr = args[4];
    napi_value fallback_fn = args[5];
    napi_value callback_val = args[7];

    uint32_t stmt_count = 0;
    napi_get_array_length(env, stmts_arr, &stmt_count);

    CSpannerStatement* c_stmts = nullptr;
    if (stmt_count > 0) {
        c_stmts = reinterpret_cast<CSpannerStatement*>(ctx->arena.alloc(sizeof(CSpannerStatement) * stmt_count));
        memset(c_stmts, 0, sizeof(CSpannerStatement) * stmt_count);
    }

    for (uint32_t i = 0; i < stmt_count; i++) {
        napi_value stmt_obj;
        napi_get_element(env, stmts_arr, i, &stmt_obj);

        CSpannerStatement& cs = c_stmts[i];

        napi_value sql_val;
        if (napi_get_named_property(env, stmt_obj, "sql", &sql_val) == napi_ok) {
            cs.sql = ctx->arena.copy_str(env, sql_val);
        }

        napi_value names_arr, vals_arr, codes_arr, types_arr;
        uint32_t param_count = 0;
        if (napi_get_named_property(env, stmt_obj, "paramNames", &names_arr) == napi_ok) {
            napi_get_array_length(env, names_arr, &param_count);
        }
        cs.param_count = static_cast<int>(param_count);

        if (param_count > 0) {
            napi_get_named_property(env, stmt_obj, "paramValues", &vals_arr);
            bool has_codes = (napi_get_named_property(env, stmt_obj, "paramTypeCodes", &codes_arr) == napi_ok);
            bool has_types = (napi_get_named_property(env, stmt_obj, "paramTypesPb", &types_arr) == napi_ok);

            cs.param_names = reinterpret_cast<const char**>(ctx->arena.alloc(sizeof(const char*) * param_count));
            cs.param_cells = reinterpret_cast<CSpannerCell*>(ctx->arena.alloc(sizeof(CSpannerCell) * param_count));
            cs.param_types_pb = reinterpret_cast<const uint8_t**>(ctx->arena.alloc(sizeof(const uint8_t*) * param_count));
            cs.param_types_len = reinterpret_cast<int*>(ctx->arena.alloc(sizeof(int) * param_count));

            for (uint32_t p = 0; p < param_count; p++) {
                napi_value name_val, val_item;
                napi_get_element(env, names_arr, p, &name_val);
                napi_get_element(env, vals_arr, p, &val_item);

                int32_t explicit_code = 0;
                if (has_codes) {
                    napi_value code_val;
                    if (napi_get_element(env, codes_arr, p, &code_val) == napi_ok) {
                        napi_get_value_int32(env, code_val, &explicit_code);
                    }
                }

                cs.param_names[p] = ctx->arena.copy_str(env, name_val);
                ExtractCellFromJsValue(
                    env,
                    val_item,
                    fallback_fn,
                    &cs.param_cells[p],
                    ctx->arena,
                    true,
                    static_cast<uint16_t>(explicit_code > 0 ? explicit_code : 0)
                );

                cs.param_types_pb[p] = nullptr;
                cs.param_types_len[p] = 0;
                if (has_types) {
                    napi_value type_pb_val;
                    if (napi_get_element(env, types_arr, p, &type_pb_val) == napi_ok) {
                        CopyBytesToArena(env, type_pb_val, ctx->arena, &cs.param_types_pb[p], &cs.param_types_len[p]);
                    }
                }
            }
        }
    }

    c_req.stmt_count = static_cast<int>(stmt_count);
    c_req.statements = c_stmts;

    napi_create_reference(env, callback_val, 1, &ctx->cb_ref);
    wrap->Enqueue(env, ctx);

    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

// Function: beginTransactionNative
napi_value BeginTransactionNative(napi_env env, napi_callback_info info) {
    size_t argc = 5;
    napi_value args[5];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc < 5) {
        napi_throw_type_error(env, nullptr, "Wrong number of arguments for beginTransactionNative");
        return nullptr;
    }

    CoreClientHandleWrapper* wrap = nullptr;
    napi_unwrap(env, args[0], reinterpret_cast<void**>(&wrap));
    if (wrap == nullptr || wrap->handle == 0 || wrap->is_closed.load()) {
        napi_throw_error(env, nullptr, "Invalid CoreClientHandle");
        return nullptr;
    }

    RpcRequestContext* ctx = new RpcRequestContext(wrap, REQ_BEGIN_TX);
    ctx->routing_key = ctx->arena.copy_str(env, args[1]);
    ExtractMetadataArena(env, args[2], ctx->arena, ctx->meta_keys_ptr, ctx->meta_vals_ptr);

    const uint8_t* req_ptr = nullptr;
    int req_len = 0;
    CopyBytesToArena(env, args[3], ctx->arena, &req_ptr, &req_len);
    ctx->req_bytes = reinterpret_cast<const char*>(req_ptr);
    ctx->req_len = req_len;

    napi_create_reference(env, args[4], 1, &ctx->cb_ref);
    wrap->Enqueue(env, ctx);

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

    napi_property_descriptor fn_props[] = {
        { "executeStreamingSqlNative", nullptr, ExecuteStreamingSqlNative, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "commitNative", nullptr, CommitNative, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "executeBatchDmlNative", nullptr, ExecuteBatchDmlNative, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "beginTransactionNative", nullptr, BeginTransactionNative, nullptr, nullptr, nullptr, napi_default, nullptr }
    };
    napi_define_properties(env, exports, 4, fn_props);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
