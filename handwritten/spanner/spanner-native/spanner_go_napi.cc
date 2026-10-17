// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include <node_api.h>
#include <cmath>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <atomic>
#include <condition_variable>
#include <deque>
#include <mutex>
#include <string>
#include <thread>
#include <unordered_map>
#include <vector>

#include "spanner-go/libspanner_go.h"

namespace {

struct BatchGuard {
  CSpannerBatch* batch;
  explicit BatchGuard(CSpannerBatch* b) : batch(b) {}
  ~BatchGuard() {
    if (batch != nullptr) {
      FreeSpannerBatch(batch);
    }
  }
};

struct JsBatchHelpers {
  napi_value null_val;
  napi_value true_val;
  napi_value false_val;
  napi_value sec_key;
  napi_value nano_key;
};

napi_value ConvertCellToJs(
    napi_env env,
    const CSpannerCell* cell,
    const CSpannerBatch* batch,
    JsBatchHelpers& helpers) {
  napi_value result = helpers.null_val;

  switch (cell->kind) {
    case CELL_KIND_NULL:
      return helpers.null_val;

    case CELL_KIND_BOOL:
      return cell->flags != 0 ? helpers.true_val : helpers.false_val;

    case CELL_KIND_FLOAT64:
    case CELL_KIND_FLOAT32: {
      double fv = cell->num.f64_val;
      if (std::isnan(fv)) {
        napi_create_string_utf8(env, "NaN", 3, &result);
      } else if (std::isinf(fv)) {
        if (fv > 0) {
          napi_create_string_utf8(env, "Infinity", 8, &result);
        } else {
          napi_create_string_utf8(env, "-Infinity", 9, &result);
        }
      } else {
        napi_create_double(env, fv, &result);
      }
      return result;
    }

    case CELL_KIND_STRING: {
      const char* ptr =
          (batch->byte_arena != nullptr) ? (batch->byte_arena + cell->offset) : "";
      napi_create_string_utf8(env, ptr, cell->len, &result);
      return result;
    }

    case CELL_KIND_BYTES: {
      const void* ptr =
          (batch->byte_arena != nullptr && cell->len > 0)
              ? static_cast<const void*>(batch->byte_arena + cell->offset)
              : nullptr;
      napi_create_buffer_copy(env, cell->len, ptr, nullptr, &result);
      return result;
    }

    case CELL_KIND_TIMESTAMP: {
      if (helpers.sec_key == nullptr) {
        napi_create_string_utf8(
            env, "seconds", NAPI_AUTO_LENGTH, &helpers.sec_key);
        napi_create_string_utf8(
            env, "nanos", NAPI_AUTO_LENGTH, &helpers.nano_key);
      }
      napi_value ts_obj, sec_val, nano_val;
      napi_create_object(env, &ts_obj);
      napi_create_double(env, static_cast<double>(cell->num.i64_val), &sec_val);
      napi_create_uint32(env, cell->flags, &nano_val);
      napi_set_property(env, ts_obj, helpers.sec_key, sec_val);
      napi_set_property(env, ts_obj, helpers.nano_key, nano_val);
      return ts_obj;
    }

    case CELL_KIND_ARRAY:
    case CELL_KIND_STRUCT: {
      uint32_t count = cell->len;
      uint32_t start = cell->offset;
      napi_create_array_with_length(env, count, &result);
      for (uint32_t i = 0; i < count; ++i) {
        napi_value child =
            ConvertCellToJs(env, &batch->cells[start + i], batch, helpers);
        napi_set_element(env, result, i, child);
      }
      return result;
    }

    default:
      return helpers.null_val;
  }
}

napi_value BuildJsBatchObject(
    napi_env env,
    const CSpannerBatch* b,
    napi_value null_val) {
  napi_value res_obj;
  napi_create_object(env, &res_obj);

  napi_value status_val;
  napi_create_int32(env, b->status, &status_val);
  napi_set_named_property(env, res_obj, "status", status_val);

  if (b->status < 0) {
    napi_value code_val, msg_val;
    napi_create_int32(env, b->error_code, &code_val);
    napi_set_named_property(env, res_obj, "errorCode", code_val);

    const char* msg =
        b->error_msg != nullptr ? b->error_msg : "Unknown SpannerCore error";
    napi_create_string_utf8(env, msg, NAPI_AUTO_LENGTH, &msg_val);
    napi_set_named_property(env, res_obj, "errorMessage", msg_val);

    if (b->retry_info_pb != nullptr && b->retry_info_len > 0) {
      napi_value retry_buf;
      napi_create_buffer_copy(
          env, b->retry_info_len, b->retry_info_pb, nullptr, &retry_buf);
      napi_set_named_property(env, res_obj, "retryInfoBytes", retry_buf);
    }

    if (b->status_pb != nullptr && b->status_len > 0) {
      napi_value status_buf;
      napi_create_buffer_copy(
          env, b->status_len, b->status_pb, nullptr, &status_buf);
      napi_set_named_property(env, res_obj, "statusBytes", status_buf);
    }

    if (b->trailers_json != nullptr && b->trailers_len > 0) {
      napi_value trailers_val;
      napi_create_string_utf8(
          env, b->trailers_json, b->trailers_len, &trailers_val);
      napi_set_named_property(env, res_obj, "trailersJson", trailers_val);
    }
  }

  if (b->schema_hash != 0) {
    napi_value hash_val;
    napi_create_uint32(env, b->schema_hash, &hash_val);
    napi_set_named_property(env, res_obj, "schemaHash", hash_val);
  }

  if (b->request_id != nullptr) {
    napi_value req_id_val;
    napi_create_string_utf8(
        env, b->request_id, NAPI_AUTO_LENGTH, &req_id_val);
    napi_set_named_property(env, res_obj, "requestId", req_id_val);
  }

  if (b->has_read_timestamp != 0) {
    napi_value has_ts_val, ts_sec_val, ts_nanos_val;
    napi_get_boolean(env, true, &has_ts_val);
    napi_create_double(
        env, static_cast<double>(b->read_timestamp_sec), &ts_sec_val);
    napi_create_int32(env, b->read_timestamp_nanos, &ts_nanos_val);
    napi_set_named_property(env, res_obj, "hasReadTimestamp", has_ts_val);
    napi_set_named_property(env, res_obj, "readTimestampSec", ts_sec_val);
    napi_set_named_property(env, res_obj, "readTimestampNanos", ts_nanos_val);
  }

  if (b->metadata_pb != nullptr && b->metadata_len > 0) {
    napi_value meta_buf;
    napi_create_buffer_copy(
        env, b->metadata_len, b->metadata_pb, nullptr, &meta_buf);
    napi_set_named_property(env, res_obj, "metadataBytes", meta_buf);
  }

  if (b->stats_pb != nullptr && b->stats_len > 0) {
    napi_value stats_buf;
    napi_create_buffer_copy(
        env, b->stats_len, b->stats_pb, nullptr, &stats_buf);
    napi_set_named_property(env, res_obj, "statsBytes", stats_buf);
  }

  if (b->precommit_pb != nullptr && b->precommit_len > 0) {
    napi_value precommit_buf;
    napi_create_buffer_copy(
        env, b->precommit_len, b->precommit_pb, nullptr, &precommit_buf);
    napi_set_named_property(env, res_obj, "precommitBytes", precommit_buf);
  }

  if (b->gfe_latency_ms >= 0) {
    napi_value gfe_val;
    napi_create_double(env, b->gfe_latency_ms, &gfe_val);
    napi_set_named_property(env, res_obj, "gfeLatencyMs", gfe_val);
  }

  if (b->afe_latency_ms >= 0) {
    napi_value afe_val;
    napi_create_double(env, b->afe_latency_ms, &afe_val);
    napi_set_named_property(env, res_obj, "afeLatencyMs", afe_val);
  }

  if (b->attempt_count > 0) {
    napi_value att_val;
    napi_create_int32(env, b->attempt_count, &att_val);
    napi_set_named_property(env, res_obj, "attemptCount", att_val);
  }

  if (b->direct_path_used > 0) {
    napi_value dp_val;
    napi_get_boolean(env, true, &dp_val);
    napi_set_named_property(env, res_obj, "directPathUsed", dp_val);
  }

  if (b->logs_json != nullptr && b->logs_len > 0) {
    napi_value logs_val;
    napi_create_string_utf8(env, b->logs_json, b->logs_len, &logs_val);
    napi_set_named_property(env, res_obj, "logsJson", logs_val);
  }

  if (b->num_rows > 0 && b->num_cols > 0 && b->cells != nullptr) {
    JsBatchHelpers helpers;
    helpers.null_val = null_val;
    napi_get_boolean(env, true, &helpers.true_val);
    napi_get_boolean(env, false, &helpers.false_val);
    helpers.sec_key = nullptr;
    helpers.nano_key = nullptr;

    int32_t num_rows = b->num_rows;
    int32_t num_cols = b->num_cols;
    int32_t top_cells = num_rows * num_cols;

    napi_value nr_val, nc_val, cells_arr;
    napi_create_int32(env, num_rows, &nr_val);
    napi_create_int32(env, num_cols, &nc_val);
    napi_create_array_with_length(env, top_cells, &cells_arr);

    for (int32_t i = 0; i < top_cells; ++i) {
      napi_value cell_val = ConvertCellToJs(env, &b->cells[i], b, helpers);
      napi_set_element(env, cells_arr, i, cell_val);
    }

    napi_set_named_property(env, res_obj, "numRows", nr_val);
    napi_set_named_property(env, res_obj, "numCols", nc_val);
    napi_set_named_property(env, res_obj, "cells", cells_arr);
  }

  return res_obj;
}

struct EnvDispatchContext;

struct AsyncStreamContext {
  EnvDispatchContext* env_ctx = nullptr;
  napi_ref cb_ref = nullptr;
  CSpannerBatch* inline_batch = nullptr;
  std::atomic<bool> inline_used{false};
  int64_t stream_id = 0;
  bool enable_backpressure = false;
  std::atomic<int32_t> abandoned{0};
  AsyncStreamContext* prev = nullptr;
  AsyncStreamContext* next = nullptr;
};

struct BatchCompletionEvent {
  AsyncStreamContext* ctx;
  CSpannerBatch* batch;
};

struct EnvDispatchContext {
  napi_env env = nullptr;
  napi_threadsafe_function tsfn = nullptr;
  std::mutex tsfn_mu;
  std::atomic<bool> closing{false};
  std::atomic<int32_t> ref_count{1};
  int32_t active_rpcs = 0;
  bool tsfn_refed = false;
  AsyncStreamContext* head = nullptr;
  std::unordered_map<int64_t, AsyncStreamContext*> active_streams;

  explicit EnvDispatchContext(napi_env e) : env(e) {}

  void AddRef() {
    ref_count.fetch_add(1, std::memory_order_relaxed);
  }

  void Release() {
    if (ref_count.fetch_sub(1, std::memory_order_acq_rel) == 1) {
      delete this;
    }
  }

  void InsertContext(AsyncStreamContext* ctx) {
    std::lock_guard<std::mutex> lk(tsfn_mu);
    ctx->prev = nullptr;
    ctx->next = head;
    if (head != nullptr) {
      head->prev = ctx;
    }
    head = ctx;
  }

  void RemoveContext(AsyncStreamContext* ctx) {
    std::lock_guard<std::mutex> lk(tsfn_mu);
    if (ctx->prev != nullptr) {
      ctx->prev->next = ctx->next;
    } else if (head == ctx) {
      head = ctx->next;
    }
    if (ctx->next != nullptr) {
      ctx->next->prev = ctx->prev;
    }
    ctx->prev = nullptr;
    ctx->next = nullptr;
  }

  inline void OnRpcStarted(napi_env e) {
    if (++active_rpcs == 1 && !closing.load(std::memory_order_relaxed) &&
        tsfn != nullptr && !tsfn_refed) {
      napi_ref_threadsafe_function(e, tsfn);
      tsfn_refed = true;
    }
  }

  inline void OnRpcCompleted(napi_env e) {
    if (--active_rpcs == 0 && !closing.load(std::memory_order_relaxed) &&
        tsfn != nullptr && tsfn_refed) {
      napi_unref_threadsafe_function(e, tsfn);
      tsfn_refed = false;
    }
  }

  void Shutdown() {
    std::unique_lock<std::mutex> lk(tsfn_mu);
    bool expected = false;
    if (!closing.compare_exchange_strong(expected, true)) {
      return;
    }
    std::vector<int64_t> streams_to_close;
    for (AsyncStreamContext* cur = head; cur != nullptr; cur = cur->next) {
      cur->abandoned.store(1, std::memory_order_release);
      if (cur->stream_id != 0) {
        streams_to_close.push_back(cur->stream_id);
      }
    }
    active_streams.clear();
    if (tsfn != nullptr) {
      napi_release_threadsafe_function(tsfn, napi_tsfn_abort);
      tsfn = nullptr;
    }
    lk.unlock();
    for (int64_t sid : streams_to_close) {
      SpannerCoreCloseStream(static_cast<long long>(sid));
    }
  }
};

extern "C" void OnGoBatchCallback(void* user_data, CSpannerBatch* batch) {
  AsyncStreamContext* ctx = static_cast<AsyncStreamContext*>(user_data);
  if (ctx == nullptr || ctx->env_ctx == nullptr) {
    if (batch != nullptr) {
      FreeSpannerBatch(batch);
    }
    return;
  }

  bool is_final = (batch == nullptr) || (batch->status != 0);
  EnvDispatchContext* ec = ctx->env_ctx;

  if (!is_final && ctx->abandoned.load(std::memory_order_acquire) != 0) {
    FreeSpannerBatch(batch);
    return;
  }

  std::unique_lock<std::mutex> lk(ec->tsfn_mu);
  if (ec->closing.load(std::memory_order_relaxed) || ec->tsfn == nullptr) {
    if (batch != nullptr) {
      FreeSpannerBatch(batch);
    }
    if (is_final) {
      if (ctx->prev != nullptr) {
        ctx->prev->next = ctx->next;
      } else if (ec->head == ctx) {
        ec->head = ctx->next;
      }
      if (ctx->next != nullptr) {
        ctx->next->prev = ctx->prev;
      }
      lk.unlock();
      delete ctx;
      ec->Release();
    }
    return;
  }

  if (is_final &&
      !ctx->inline_used.exchange(true, std::memory_order_acq_rel)) {
    ctx->inline_batch = batch;
    // Tag low bit = 0 (direct AsyncStreamContext* pointer)
    napi_status st = napi_call_threadsafe_function(
        ec->tsfn, ctx, napi_tsfn_nonblocking);
    if (st != napi_ok) {
      if (batch != nullptr) {
        FreeSpannerBatch(batch);
      }
      if (ctx->prev != nullptr) {
        ctx->prev->next = ctx->next;
      } else if (ec->head == ctx) {
        ec->head = ctx->next;
      }
      if (ctx->next != nullptr) {
        ctx->next->prev = ctx->prev;
      }
      lk.unlock();
      delete ctx;
      ec->Release();
    }
    return;
  }

  BatchCompletionEvent* ev = new BatchCompletionEvent{ctx, batch};
  // Tag low bit = 1 to distinguish multi-batch heap event from direct ctx pointer
  void* tagged = reinterpret_cast<void*>(reinterpret_cast<uintptr_t>(ev) | 1ULL);
  napi_status st = napi_call_threadsafe_function(
      ec->tsfn, tagged, napi_tsfn_nonblocking);
  if (st != napi_ok) {
    if (batch != nullptr) {
      FreeSpannerBatch(batch);
    }
    delete ev;
    if (is_final) {
      if (ctx->prev != nullptr) {
        ctx->prev->next = ctx->next;
      } else if (ec->head == ctx) {
        ec->head = ctx->next;
      }
      if (ctx->next != nullptr) {
        ctx->next->prev = ctx->prev;
      }
      lk.unlock();
      delete ctx;
      ec->Release();
    }
  }
}

void CallJsBatchHandler(
    napi_env env,
    napi_value /*js_cb_unused*/,
    void* /*context*/,
    void* data) {
  if (data == nullptr) {
    return;
  }
  uintptr_t raw = reinterpret_cast<uintptr_t>(data);
  AsyncStreamContext* ctx = nullptr;
  CSpannerBatch* b = nullptr;

  if ((raw & 1ULL) != 0) {
    BatchCompletionEvent* ev =
        reinterpret_cast<BatchCompletionEvent*>(raw & ~uintptr_t(1ULL));
    ctx = ev->ctx;
    b = ev->batch;
    delete ev;
  } else {
    ctx = reinterpret_cast<AsyncStreamContext*>(raw);
    b = ctx->inline_batch;
  }

  BatchGuard guard(b);
  bool is_final = (b == nullptr) || (b->status != 0);
  napi_value pending_exc = nullptr;

  if (env != nullptr && ctx != nullptr && ctx->cb_ref != nullptr &&
      b != nullptr && ctx->abandoned.load(std::memory_order_relaxed) == 0) {
    napi_value global, null_val, js_cb;
    napi_get_global(env, &global);
    napi_get_null(env, &null_val);
    napi_get_reference_value(env, ctx->cb_ref, &js_cb);

    napi_value res_obj = BuildJsBatchObject(env, b, null_val);
    napi_value argv[2] = {null_val, res_obj};
    napi_value ret_val = nullptr;
    napi_status call_st =
        napi_call_function(env, global, js_cb, 2, argv, &ret_val);
    if (call_st != napi_ok) {
      ctx->abandoned.store(1, std::memory_order_release);
      bool has_exception = false;
      if (napi_is_exception_pending(env, &has_exception) == napi_ok &&
          has_exception) {
        napi_get_and_clear_last_exception(env, &pending_exc);
      }
      if (!is_final && ctx->stream_id != 0) {
        SpannerCoreCloseStream(static_cast<long long>(ctx->stream_id));
      }
    } else if (ret_val != nullptr) {
      bool keep_going = true;
      if (napi_get_value_bool(env, ret_val, &keep_going) == napi_ok &&
          !keep_going) {
        ctx->abandoned.store(1, std::memory_order_release);
        if (!is_final && ctx->stream_id != 0) {
          SpannerCoreCloseStream(static_cast<long long>(ctx->stream_id));
        }
      }
    }
  }

  if (!is_final && ctx != nullptr && ctx->enable_backpressure &&
      ctx->stream_id != 0 &&
      ctx->abandoned.load(std::memory_order_relaxed) == 0) {
    SpannerCoreAckBatch(static_cast<long long>(ctx->stream_id));
  }

  if (is_final && ctx != nullptr) {
    EnvDispatchContext* ec = ctx->env_ctx;
    if (ec != nullptr) {
      ec->RemoveContext(ctx);
    }
    if (env != nullptr) {
      if (ctx->cb_ref != nullptr) {
        napi_delete_reference(env, ctx->cb_ref);
        ctx->cb_ref = nullptr;
      }
      if (ec != nullptr) {
        if (ctx->stream_id != 0) {
          ec->active_streams.erase(ctx->stream_id);
        }
        ec->OnRpcCompleted(env);
      }
    }
    delete ctx;
    if (ec != nullptr) {
      ec->Release();
    }
  }

  if (env != nullptr && pending_exc != nullptr) {
    napi_fatal_exception(env, pending_exc);
  }
}

napi_value NoopJsCallback(napi_env env, napi_callback_info /*info*/) {
  napi_value undef;
  napi_get_undefined(env, &undef);
  return undef;
}

void CleanupEnvDispatchContext(
    napi_env /*env*/,
    void* finalize_data,
    void* /*finalize_hint*/) {
  EnvDispatchContext* env_ctx = static_cast<EnvDispatchContext*>(finalize_data);
  if (env_ctx != nullptr) {
    env_ctx->Shutdown();
    env_ctx->Release();
  }
}

EnvDispatchContext* GetOrCreateEnvDispatchContext(napi_env env) {
  void* data = nullptr;
  if (napi_get_instance_data(env, &data) == napi_ok && data != nullptr) {
    return static_cast<EnvDispatchContext*>(data);
  }
  EnvDispatchContext* env_ctx = new EnvDispatchContext(env);
  napi_value noop_fn, resource_name;
  napi_create_function(
      env, "noop", NAPI_AUTO_LENGTH, NoopJsCallback, nullptr, &noop_fn);
  napi_create_string_utf8(
      env, "SpannerCoreStreamTSFN", NAPI_AUTO_LENGTH, &resource_name);
  napi_status st = napi_create_threadsafe_function(
      env,
      noop_fn,
      nullptr,
      resource_name,
      0,
      1,
      nullptr,
      nullptr,
      env_ctx,
      CallJsBatchHandler,
      &env_ctx->tsfn);
  if (st != napi_ok || env_ctx->tsfn == nullptr) {
    env_ctx->Shutdown();
    delete env_ctx;
    return nullptr;
  }
  napi_unref_threadsafe_function(env, env_ctx->tsfn);
  napi_set_instance_data(env, env_ctx, CleanupEnvDispatchContext, nullptr);
  return env_ctx;
}

struct NextBatchWork {
  napi_async_work work;
  napi_ref callback_ref;
  long long stream_handle;
  CSpannerBatch* batch;
};

void ExecuteNextBatch(napi_env env, void* data) {
  NextBatchWork* ctx = static_cast<NextBatchWork*>(data);
  ctx->batch = SpannerCoreNextBatch(ctx->stream_handle);
}

void CompleteNextBatch(napi_env env, napi_status status, void* data) {
  NextBatchWork* ctx = static_cast<NextBatchWork*>(data);
  BatchGuard guard(ctx->batch);

  napi_value callback;
  napi_get_reference_value(env, ctx->callback_ref, &callback);
  napi_value global;
  napi_get_global(env, &global);

  napi_value null_val;
  napi_get_null(env, &null_val);

  CSpannerBatch* b = ctx->batch;
  if (status != napi_ok || b == nullptr) {
    napi_value err_msg, err_obj;
    napi_create_string_utf8(
        env,
        "N-API async work failed in SpannerCoreNextBatch",
        NAPI_AUTO_LENGTH,
        &err_msg);
    napi_create_error(env, nullptr, err_msg, &err_obj);
    napi_value argv[2] = {err_obj, null_val};
    napi_call_function(env, global, callback, 2, argv, nullptr);
    napi_delete_reference(env, ctx->callback_ref);
    napi_delete_async_work(env, ctx->work);
    delete ctx;
    return;
  }

  napi_value res_obj = BuildJsBatchObject(env, b, null_val);
  napi_value argv[2] = {null_val, res_obj};
  napi_call_function(env, global, callback, 2, argv, nullptr);

  napi_delete_reference(env, ctx->callback_ref);
  napi_delete_async_work(env, ctx->work);
  delete ctx;
}

std::string GetStringArg(napi_env env, napi_value val) {
  size_t len = 0;
  if (napi_get_value_string_utf8(env, val, nullptr, 0, &len) != napi_ok ||
      len == 0) {
    return "";
  }
  std::string out(len, '\0');
  napi_get_value_string_utf8(env, val, &out[0], len + 1, &len);
  return out;
}

napi_value InitService(napi_env env, napi_callback_info info) {
  size_t argc = 13;
  napi_value args[13];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  std::string endpoint = argc > 0 ? GetStringArg(env, args[0]) : "";
  int32_t num_channels = 4;
  if (argc > 1) napi_get_value_int32(env, args[1], &num_channels);
  int32_t use_plaintext = 0;
  if (argc > 2) napi_get_value_int32(env, args[2], &use_plaintext);
  int32_t disable_auth = 0;
  if (argc > 3) napi_get_value_int32(env, args[3], &disable_auth);
  int32_t enable_direct = 0;
  if (argc > 4) napi_get_value_int32(env, args[4], &enable_direct);
  std::string user_agent = argc > 5 ? GetStringArg(env, args[5]) : "";
  int32_t dcp_enabled = 0;
  if (argc > 6) napi_get_value_int32(env, args[6], &dcp_enabled);
  int32_t dcp_initial_channels = 0;
  if (argc > 7) napi_get_value_int32(env, args[7], &dcp_initial_channels);
  int32_t dcp_min_channels = 0;
  if (argc > 8) napi_get_value_int32(env, args[8], &dcp_min_channels);
  int32_t dcp_max_channels = 0;
  if (argc > 9) napi_get_value_int32(env, args[9], &dcp_max_channels);
  double dcp_max_rpc_per_channel = 0.0;
  if (argc > 10) napi_get_value_double(env, args[10], &dcp_max_rpc_per_channel);
  double dcp_min_rpc_per_channel = 0.0;
  if (argc > 11) napi_get_value_double(env, args[11], &dcp_min_rpc_per_channel);
  int32_t dcp_selection_strategy = 0;
  if (argc > 12) napi_get_value_int32(env, args[12], &dcp_selection_strategy);

  long long handle = SpannerCoreInit(
      const_cast<char*>(endpoint.c_str()),
      num_channels,
      use_plaintext,
      disable_auth,
      enable_direct,
      const_cast<char*>(user_agent.c_str()),
      dcp_enabled,
      dcp_initial_channels,
      dcp_min_channels,
      dcp_max_channels,
      dcp_max_rpc_per_channel,
      dcp_min_rpc_per_channel,
      dcp_selection_strategy);

  napi_value result;
  napi_create_int64(env, static_cast<int64_t>(handle), &result);
  return result;
}

napi_value CloseService(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &handle);

  int rc = SpannerCoreClose(static_cast<long long>(handle));
  napi_value result;
  napi_create_int32(env, rc, &result);
  return result;
}

napi_value SetRootCertsPEM(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  if (argc > 0) {
    std::string pem = GetStringArg(env, args[0]);
    SpannerCoreSetRootCertsPEM(const_cast<char*>(pem.c_str()));
  }
  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value SetNextUniverseDomain(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  std::string ud = argc > 0 ? GetStringArg(env, args[0]) : "";
  SpannerCoreSetNextUniverseDomain(const_cast<char*>(ud.c_str()));
  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value GetLastInitError(napi_env env, napi_callback_info /*info*/) {
  char* c_err = SpannerCoreGetLastInitError();
  if (c_err == nullptr) {
    napi_value empty_str;
    napi_create_string_utf8(env, "", 0, &empty_str);
    return empty_str;
  }
  napi_value err_str;
  napi_create_string_utf8(env, c_err, NAPI_AUTO_LENGTH, &err_str);
  SpannerCoreFreeString(c_err);
  return err_str;
}

struct StackStringArg {
  char stack_buf[512];
  std::string heap_str;
  char* ptr;
  size_t len;

  StackStringArg(napi_env env, napi_value val) : ptr(stack_buf), len(0) {
    stack_buf[0] = '\0';
    size_t copied = 0;
    if (napi_get_value_string_utf8(
            env, val, stack_buf, sizeof(stack_buf), &copied) != napi_ok) {
      return;
    }
    len = copied;
    if (copied >= sizeof(stack_buf) - 4) {
      size_t full_len = 0;
      if (napi_get_value_string_utf8(env, val, nullptr, 0, &full_len) ==
              napi_ok &&
          full_len > 0) {
        heap_str.resize(full_len);
        napi_get_value_string_utf8(
            env, val, &heap_str[0], full_len + 1, &full_len);
        ptr = &heap_str[0];
        len = full_len;
      }
    }
  }
};

napi_value ExecuteStreamingSql(napi_env env, napi_callback_info info) {
  size_t argc = 8;
  napi_value args[8];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t service_handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &service_handle);

  StackStringArg routing_key(env, argc > 1 ? args[1] : nullptr);

  void* req_data = nullptr;
  size_t req_len = 0;
  if (argc > 2) {
    bool is_buf = false;
    napi_is_buffer(env, args[2], &is_buf);
    if (is_buf) {
      napi_get_buffer_info(env, args[2], &req_data, &req_len);
    }
  }

  StackStringArg headers_json(env, argc > 3 ? args[3] : nullptr);

  int32_t timeout_ms = 0;
  if (argc > 4) napi_get_value_int32(env, args[4], &timeout_ms);

  int32_t skip_metadata = 0;
  if (argc > 5) napi_get_value_int32(env, args[5], &skip_metadata);

  int32_t batch_row_size = 0;
  if (argc > 6) napi_get_value_int32(env, args[6], &batch_row_size);

  if (argc >= 8) {
    napi_valuetype cb_type = napi_undefined;
    napi_typeof(env, args[7], &cb_type);
    if (cb_type == napi_function) {
      EnvDispatchContext* env_ctx = GetOrCreateEnvDispatchContext(env);
      if (env_ctx == nullptr) {
        napi_throw_error(
            env, nullptr, "Failed to initialize SpannerCore dispatch context");
        return nullptr;
      }

      AsyncStreamContext* ctx = new AsyncStreamContext();
      ctx->env_ctx = env_ctx;
      ctx->enable_backpressure = (skip_metadata & 4) == 0;
      env_ctx->AddRef();
      napi_create_reference(env, args[7], 1, &ctx->cb_ref);
      env_ctx->OnRpcStarted(env);
      env_ctx->InsertContext(ctx);

      long long stream_id = SpannerCoreExecuteStreamingSqlAsync(
          static_cast<long long>(service_handle),
          routing_key.ptr,
          req_data,
          static_cast<int>(req_len),
          headers_json.ptr,
          timeout_ms,
          skip_metadata,
          batch_row_size,
          OnGoBatchCallback,
          ctx,
          reinterpret_cast<int32_t*>(&ctx->abandoned));

      if (stream_id > 0) {
        ctx->stream_id = static_cast<int64_t>(stream_id);
        env_ctx->active_streams[ctx->stream_id] = ctx;
      }

      napi_value result;
      napi_create_int64(env, static_cast<int64_t>(stream_id), &result);
      return result;
    }
  }

  long long stream_id = SpannerCoreExecuteStreamingSql(
      static_cast<long long>(service_handle),
      routing_key.ptr,
      req_data,
      static_cast<int>(req_len),
      headers_json.ptr,
      timeout_ms,
      skip_metadata,
      batch_row_size);

  napi_value result;
  napi_create_int64(env, static_cast<int64_t>(stream_id), &result);
  return result;
}

napi_value NextBatch(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value args[2];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t stream_handle = 0;
  napi_get_value_int64(env, args[0], &stream_handle);

  NextBatchWork* ctx = new NextBatchWork();
  ctx->stream_handle = static_cast<long long>(stream_handle);
  ctx->batch = nullptr;
  napi_create_reference(env, args[1], 1, &ctx->callback_ref);

  napi_value resource_name;
  napi_create_string_utf8(
      env, "SpannerCoreNextBatch", NAPI_AUTO_LENGTH, &resource_name);
  napi_create_async_work(
      env,
      nullptr,
      resource_name,
      ExecuteNextBatch,
      CompleteNextBatch,
      ctx,
      &ctx->work);
  napi_queue_async_work(env, ctx->work);

  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value PauseStream(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t stream_handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &stream_handle);

  if (stream_handle > 0) {
    SpannerCorePauseStream(static_cast<long long>(stream_handle));
  }

  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value ResumeStream(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t stream_handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &stream_handle);

  if (stream_handle > 0) {
    SpannerCoreResumeStream(static_cast<long long>(stream_handle));
  }

  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value CloseStream(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  int64_t stream_handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &stream_handle);

  void* data = nullptr;
  if (stream_handle > 0 && napi_get_instance_data(env, &data) == napi_ok &&
      data != nullptr) {
    EnvDispatchContext* env_ctx = static_cast<EnvDispatchContext*>(data);
    auto it = env_ctx->active_streams.find(stream_handle);
    if (it != env_ctx->active_streams.end() && it->second != nullptr) {
      AsyncStreamContext* sctx = it->second;
      sctx->abandoned.store(1, std::memory_order_release);
    }
  }

  SpannerCoreCloseStream(static_cast<long long>(stream_handle));

  napi_value undefined_val;
  napi_get_undefined(env, &undefined_val);
  return undefined_val;
}

napi_value InitModule(napi_env env, napi_value exports) {
  napi_property_descriptor props[] = {
      {"init",
       nullptr,
       InitService,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"close",
       nullptr,
       CloseService,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"setRootCertsPEM",
       nullptr,
       SetRootCertsPEM,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"setNextUniverseDomain",
       nullptr,
       SetNextUniverseDomain,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"getLastInitError",
       nullptr,
       GetLastInitError,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"executeStreamingSql",
       nullptr,
       ExecuteStreamingSql,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"nextBatch",
       nullptr,
       NextBatch,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"pauseStream",
       nullptr,
       PauseStream,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"resumeStream",
       nullptr,
       ResumeStream,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
      {"closeStream",
       nullptr,
       CloseStream,
       nullptr,
       nullptr,
       nullptr,
       napi_enumerable,
       nullptr},
  };
  napi_define_properties(env, exports, sizeof(props) / sizeof(props[0]), props);
  return exports;
}

}  // namespace

NAPI_MODULE(NODE_GYP_MODULE_NAME, InitModule)
