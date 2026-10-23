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

// Shared JS materialization of a Go Shared Core batch.
//
// Both transports use this exact code to turn a packed cell arena into the JS
// batch object consumed by src/native-core.ts:
//   * FFI (spanner_go_napi.cc):  Batch = CSpannerBatch (cgo, in-process C heap)
//   * IPC (spanner_ipc_napi.cc): Batch = IpcBatch (frame received from the sidecar)
// The batch type only needs the CSpannerBatch field names; the cell type only
// needs the CSpannerCell field names (kind, flags, num.f64_val, num.i64_val,
// offset, len).

#ifndef SPANNER_NATIVE_SPANNER_BATCH_JS_H_
#define SPANNER_NATIVE_SPANNER_BATCH_JS_H_

#include <node_api.h>
#include <stdint.h>

#include <cmath>

namespace spanner_native {

// Must match CSpannerCellKind in spanner-go/main.go and sharedcore.ValueKind.
enum : int32_t {
  kCellKindNull = 0,
  kCellKindBool = 1,
  kCellKindFloat64 = 2,
  kCellKindString = 3,
  kCellKindBytes = 4,
  kCellKindTimestamp = 5,
  kCellKindFloat32 = 6,
  kCellKindArray = 7,
  kCellKindStruct = 8,
};

struct JsBatchHelpers {
  napi_value null_val;
  napi_value true_val;
  napi_value false_val;
  napi_value sec_key;
  napi_value nano_key;
};

template <typename Batch, typename Cell>
napi_value ConvertCellToJs(
    napi_env env,
    const Cell* cell,
    const Batch* batch,
    JsBatchHelpers& helpers) {
  napi_value result = helpers.null_val;

  switch (cell->kind) {
    case kCellKindNull:
      return helpers.null_val;

    case kCellKindBool:
      return cell->flags != 0 ? helpers.true_val : helpers.false_val;

    case kCellKindFloat64:
    case kCellKindFloat32: {
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

    case kCellKindString: {
      const char* ptr =
          (batch->byte_arena != nullptr) ? (batch->byte_arena + cell->offset) : "";
      napi_create_string_utf8(env, ptr, cell->len, &result);
      return result;
    }

    case kCellKindBytes: {
      const void* ptr =
          (batch->byte_arena != nullptr && cell->len > 0)
              ? static_cast<const void*>(batch->byte_arena + cell->offset)
              : nullptr;
      napi_create_buffer_copy(env, cell->len, ptr, nullptr, &result);
      return result;
    }

    case kCellKindTimestamp: {
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

    case kCellKindArray:
    case kCellKindStruct: {
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

template <typename Batch>
napi_value BuildJsBatchObject(
    napi_env env,
    const Batch* b,
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

}  // namespace spanner_native

#endif  // SPANNER_NATIVE_SPANNER_BATCH_JS_H_
