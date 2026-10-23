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
#include "spanner_batch_js.h"

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

using spanner_native::BuildJsBatchObject;

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
