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

// Spanner Go Shared Core - IPC transport N-API addon (spanner_ipc.node).
//
// This addon exposes exactly the same JS interface as the in-process FFI addon
// (spanner_go.node): init, close, executeStreamingSql, pauseStream,
// resumeStream, closeStream, setRootCertsPEM, setNextUniverseDomain and
// getLastInitError, plus IPC-only helpers (configure, getSidecarInfo,
// getSidecarStats, shutdownSidecar).
//
// Instead of calling Go in-process, it drives a Go Shared Core sidecar process
// over AF_UNIX socket pairs (see IPC_PROTOCOL.md). It does NOT link the Go
// runtime. One native reader thread per connection receives BATCH frames,
// validates them, and posts them to the owning isolate's
// napi_threadsafe_function; the JS batch object is then built on the V8 thread
// by the same code as the FFI addon (spanner_batch_js.h).

#include <node_api.h>

#include <errno.h>
#include <dlfcn.h>
#include <fcntl.h>
#include <signal.h>
#include <spawn.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/time.h>
#include <sys/types.h>
#include <poll.h>
#include <sys/uio.h>
#include <sys/wait.h>
#include <unistd.h>

#include <atomic>
#include <chrono>
#include <condition_variable>
#include <deque>
#include <memory>
#include <mutex>
#include <string>
#include <thread>
#include <unordered_map>
#include <utility>
#include <vector>

#include "spanner_batch_js.h"

#if defined(__BYTE_ORDER__) && __BYTE_ORDER__ != __ORDER_LITTLE_ENDIAN__
#error "The Spanner Go Shared Core IPC wire format assumes a little-endian host"
#endif

extern char** environ;

namespace {

using spanner_native::BuildJsBatchObject;

// ---------------------------------------------------------------------------
// Wire protocol constants (IPC_PROTOCOL.md, protocol v1)
// ---------------------------------------------------------------------------

constexpr uint32_t kProtocolVersion = 1;
constexpr size_t kFrameHeaderSize = 16;
constexpr size_t kBatchHeaderSize = 112;
constexpr size_t kExecuteFixedSize = 32;
constexpr uint32_t kMaxPayloadLen = 1u << 30;
constexpr size_t kReadBufferSize = 256 * 1024;
constexpr size_t kDirectReadThreshold = 64 * 1024;
// Requests queued while the sidecar does not drain its socket (bounded).
constexpr size_t kMaxQueuedBytes = 64u << 20;
// A sidecar that accepts no request bytes for this long is considered wedged.
constexpr int kWriteStallTimeoutMs = 30000;

constexpr uint8_t kFrameReady = 0x01;
constexpr uint8_t kFrameInit = 0x02;
constexpr uint8_t kFrameCloseService = 0x03;
constexpr uint8_t kFrameSetRootCerts = 0x04;
constexpr uint8_t kFrameExecute = 0x05;
constexpr uint8_t kFrameAck = 0x06;
constexpr uint8_t kFramePause = 0x07;
constexpr uint8_t kFrameResume = 0x08;
constexpr uint8_t kFrameCancel = 0x09;
constexpr uint8_t kFrameStats = 0x0A;
constexpr uint8_t kFramePing = 0x0B;
constexpr uint8_t kFrameShutdown = 0x0C;
constexpr uint8_t kFrameInitResult = 0x81;
constexpr uint8_t kFrameCloseResult = 0x82;
constexpr uint8_t kFrameBatch = 0x83;
constexpr uint8_t kFrameStatsResult = 0x84;
constexpr uint8_t kFramePong = 0x85;

constexpr uint8_t kBatchFlagFinal = 0x01;

// Spanner itself limits nesting; this only bounds materializer recursion.
constexpr uint8_t kMaxNestingDepth = 64;

// After a failed sidecar spawn / service INIT, fail fast for this long instead
// of blocking every caller on another attempt.
constexpr std::chrono::milliseconds kRetryCooldown{2000};

constexpr int32_t kGrpcResourceExhausted = 8;
constexpr int32_t kGrpcFailedPrecondition = 9;
constexpr int32_t kGrpcUnavailable = 14;

#if defined(MSG_NOSIGNAL)
constexpr int kSendFlags = MSG_NOSIGNAL;
#else
constexpr int kSendFlags = 0;  // SO_NOSIGPIPE is set on the socket instead.
#endif

inline void PutU16(uint8_t* p, uint16_t v) { memcpy(p, &v, sizeof(v)); }
inline void PutU32(uint8_t* p, uint32_t v) { memcpy(p, &v, sizeof(v)); }
inline void PutU64(uint8_t* p, uint64_t v) { memcpy(p, &v, sizeof(v)); }
inline void PutI32(uint8_t* p, int32_t v) { memcpy(p, &v, sizeof(v)); }
inline void PutI64(uint8_t* p, int64_t v) { memcpy(p, &v, sizeof(v)); }

template <typename T>
inline T Load(const uint8_t* p) {
  T v;
  memcpy(&v, p, sizeof(T));
  return v;
}

inline uint64_t Pad8(uint64_t n) { return (n + 7) & ~static_cast<uint64_t>(7); }

inline void EncodeFrameHeader(
    uint8_t* h, uint32_t payload_len, uint8_t type, uint8_t flags, uint64_t id) {
  PutU32(h, payload_len);
  h[4] = type;
  h[5] = flags;
  PutU16(h + 6, 0);
  PutU64(h + 8, id);
}

// ---------------------------------------------------------------------------
// Batch representation. Field names intentionally match CSpannerBatch /
// CSpannerCell so that spanner_batch_js.h materializes both transports with
// identical code.
// ---------------------------------------------------------------------------

struct IpcCell {
  int32_t kind;
  uint32_t flags;
  union {
    double f64_val;
    int64_t i64_val;
  } num;
  uint32_t offset;
  uint32_t len;
};
static_assert(sizeof(IpcCell) == 24, "IpcCell must match sharedcore.PackedCell");

struct IpcBatch {
  int32_t status = 0;
  int32_t error_code = 0;
  const char* error_msg = nullptr;
  const uint8_t* retry_info_pb = nullptr;
  int32_t retry_info_len = 0;

  int32_t num_rows = 0;
  int32_t num_cols = 0;
  int32_t total_cells = 0;
  int32_t byte_arena_len = 0;
  const IpcCell* cells = nullptr;
  const char* byte_arena = nullptr;

  const uint8_t* metadata_pb = nullptr;
  int32_t metadata_len = 0;
  const uint8_t* stats_pb = nullptr;
  int32_t stats_len = 0;
  const uint8_t* precommit_pb = nullptr;
  int32_t precommit_len = 0;
  int32_t has_read_timestamp = 0;
  int32_t read_timestamp_nanos = 0;
  int64_t read_timestamp_sec = 0;

  double gfe_latency_ms = -1;
  double afe_latency_ms = -1;
  int32_t attempt_count = 0;
  int32_t direct_path_used = 0;
  const char* logs_json = nullptr;
  int32_t logs_len = 0;
  uint32_t schema_hash = 0;
  const char* request_id = nullptr;
  const uint8_t* status_pb = nullptr;
  int32_t status_len = 0;
  const char* trailers_json = nullptr;
  int32_t trailers_len = 0;

  // Owns the received frame payload that all pointers above refer to.
  uint8_t* storage = nullptr;

  IpcBatch() = default;
  IpcBatch(const IpcBatch&) = delete;
  IpcBatch& operator=(const IpcBatch&) = delete;
  ~IpcBatch() { free(storage); }
};

IpcBatch* MakeErrorBatch(int32_t code, const std::string& msg) {
  IpcBatch* b = new IpcBatch();
  b->status = -1;
  b->error_code = code;
  b->storage = static_cast<uint8_t*>(malloc(msg.size() + 1));
  if (b->storage != nullptr) {
    memcpy(b->storage, msg.data(), msg.size());
    b->storage[msg.size()] = 0;
    b->error_msg = reinterpret_cast<const char*>(b->storage);
  }
  return b;
}

// Parses and validates a BATCH payload. Takes ownership of `payload` (it is
// freed together with the returned batch, or immediately on failure).
IpcBatch* ParseBatchPayload(uint8_t* payload, size_t len, std::string* err) {
  std::unique_ptr<IpcBatch> b(new IpcBatch());
  b->storage = payload;
  if (len < kBatchHeaderSize) {
    *err = "short BATCH header";
    return nullptr;
  }
  const uint8_t* p = payload;
  b->status = Load<int32_t>(p + 0);
  b->error_code = Load<int32_t>(p + 4);
  b->num_rows = Load<int32_t>(p + 8);
  b->num_cols = Load<int32_t>(p + 12);
  b->total_cells = Load<int32_t>(p + 16);
  b->byte_arena_len = Load<int32_t>(p + 20);
  b->has_read_timestamp = Load<int32_t>(p + 24);
  b->read_timestamp_nanos = Load<int32_t>(p + 28);
  b->read_timestamp_sec = Load<int64_t>(p + 32);
  b->gfe_latency_ms = Load<double>(p + 40);
  b->afe_latency_ms = Load<double>(p + 48);
  b->attempt_count = Load<int32_t>(p + 56);
  b->direct_path_used = Load<int32_t>(p + 60);
  b->schema_hash = Load<uint32_t>(p + 64);
  const uint32_t error_msg_len = Load<uint32_t>(p + 68);
  const uint32_t retry_info_len = Load<uint32_t>(p + 72);
  const uint32_t metadata_len = Load<uint32_t>(p + 76);
  const uint32_t stats_len = Load<uint32_t>(p + 80);
  const uint32_t precommit_len = Load<uint32_t>(p + 84);
  const uint32_t logs_len = Load<uint32_t>(p + 88);
  const uint32_t request_id_len = Load<uint32_t>(p + 92);
  const uint32_t status_len = Load<uint32_t>(p + 96);
  const uint32_t trailers_len = Load<uint32_t>(p + 100);

  if (b->num_rows < 0 || b->num_cols < 0 || b->total_cells < 0 ||
      b->byte_arena_len < 0) {
    *err = "negative batch dimension";
    return nullptr;
  }
  if (b->status > 1) {
    *err = "invalid batch status";
    return nullptr;
  }
  if (static_cast<int64_t>(b->num_rows) * b->num_cols > b->total_cells) {
    *err = "num_rows * num_cols exceeds total_cells";
    return nullptr;
  }

  size_t off = kBatchHeaderSize;
  bool ok = true;
  auto take = [&](uint64_t size, bool is_string) -> const uint8_t* {
    if (!ok || size == 0) {
      return nullptr;
    }
    const uint64_t region = is_string ? size + 1 : size;
    const uint64_t padded = Pad8(region);
    if (padded > static_cast<uint64_t>(len - off)) {
      ok = false;
      return nullptr;
    }
    const uint8_t* ptr = payload + off;
    if (is_string && ptr[size] != 0) {
      ok = false;
      return nullptr;
    }
    off += static_cast<size_t>(padded);
    return ptr;
  };

  const uint8_t* cells_ptr =
      take(static_cast<uint64_t>(b->total_cells) * sizeof(IpcCell), false);
  const uint8_t* arena_ptr =
      take(static_cast<uint64_t>(b->byte_arena_len), false);
  const uint8_t* metadata_ptr = take(metadata_len, false);
  const uint8_t* stats_ptr = take(stats_len, false);
  const uint8_t* precommit_ptr = take(precommit_len, false);
  const uint8_t* retry_ptr = take(retry_info_len, false);
  const uint8_t* status_ptr = take(status_len, false);
  const uint8_t* error_ptr = take(error_msg_len, true);
  const uint8_t* request_id_ptr = take(request_id_len, true);
  const uint8_t* logs_ptr = take(logs_len, true);
  const uint8_t* trailers_ptr = take(trailers_len, true);
  if (!ok) {
    *err = "BATCH region out of bounds or missing NUL terminator";
    return nullptr;
  }
  if (off != len) {
    *err = "BATCH payload length does not match its regions";
    return nullptr;
  }

  b->cells = reinterpret_cast<const IpcCell*>(cells_ptr);
  b->byte_arena = reinterpret_cast<const char*>(arena_ptr);
  b->metadata_pb = metadata_ptr;
  b->metadata_len = static_cast<int32_t>(metadata_len);
  b->stats_pb = stats_ptr;
  b->stats_len = static_cast<int32_t>(stats_len);
  b->precommit_pb = precommit_ptr;
  b->precommit_len = static_cast<int32_t>(precommit_len);
  b->retry_info_pb = retry_ptr;
  b->retry_info_len = static_cast<int32_t>(retry_info_len);
  b->status_pb = status_ptr;
  b->status_len = static_cast<int32_t>(status_len);
  b->error_msg = reinterpret_cast<const char*>(error_ptr);
  if (b->status < 0 && b->error_msg == nullptr) {
    // FFI always passes a (possibly empty) C string for errors.
    b->error_msg = "";
  }
  b->request_id = reinterpret_cast<const char*>(request_id_ptr);
  b->logs_json = reinterpret_cast<const char*>(logs_ptr);
  b->logs_len = static_cast<int32_t>(logs_len);
  b->trailers_json = reinterpret_cast<const char*>(trailers_ptr);
  b->trailers_len = static_cast<int32_t>(trailers_len);

  // Validate every cell off the V8 thread so a malformed frame can never make
  // the materializer read out of bounds, recurse unboundedly, or revisit the
  // same cells (ARRAY/STRUCT children must form a forest rooted at the
  // num_rows * num_cols top-level cells, exactly like sharedcore packing).
  const uint32_t total = static_cast<uint32_t>(b->total_cells);
  const uint32_t top_cells =
      static_cast<uint32_t>(b->num_rows) * static_cast<uint32_t>(b->num_cols);
  const uint64_t arena_len = static_cast<uint64_t>(b->byte_arena_len);
  std::vector<uint8_t> depth;  // allocated lazily: only batches with nesting
  for (uint32_t i = 0; i < total; ++i) {
    const IpcCell& c = b->cells[i];
    switch (c.kind) {
      case spanner_native::kCellKindNull:
      case spanner_native::kCellKindBool:
      case spanner_native::kCellKindFloat64:
      case spanner_native::kCellKindFloat32:
      case spanner_native::kCellKindTimestamp:
        break;
      case spanner_native::kCellKindString:
      case spanner_native::kCellKindBytes:
        if (static_cast<uint64_t>(c.offset) + c.len > arena_len) {
          *err = "string/bytes cell exceeds the byte arena";
          return nullptr;
        }
        break;
      case spanner_native::kCellKindArray:
      case spanner_native::kCellKindStruct: {
        if (c.len == 0) {
          break;
        }
        if (c.offset <= i ||
            static_cast<uint64_t>(c.offset) + c.len > total) {
          *err = "invalid ARRAY/STRUCT child range";
          return nullptr;
        }
        if (depth.empty()) {
          depth.assign(total, 0);
          for (uint32_t t = 0; t < top_cells && t < total; ++t) {
            depth[t] = 1;
          }
        }
        const uint8_t d = depth[i];
        if (d == 0) {
          break;  // Not reachable from a top-level cell: never materialized.
        }
        if (d >= kMaxNestingDepth) {
          *err = "ARRAY/STRUCT nesting is too deep";
          return nullptr;
        }
        for (uint32_t j = c.offset; j < c.offset + c.len; ++j) {
          if (depth[j] != 0) {
            *err = "cell referenced by more than one parent";
            return nullptr;
          }
          depth[j] = static_cast<uint8_t>(d + 1);
        }
        break;
      }
      default:
        *err = "unknown cell kind";
        return nullptr;
    }
  }
  return b.release();
}

// ---------------------------------------------------------------------------
// Connections
// ---------------------------------------------------------------------------

class IpcConnection {
 public:
  IpcConnection(int fd, int index, uint64_t generation)
      : fd_(fd), index_(index), generation_(generation) {}
  ~IpcConnection() {
    if (fd_ >= 0) {
      close(fd_);
    }
  }
  IpcConnection(const IpcConnection&) = delete;
  IpcConnection& operator=(const IpcConnection&) = delete;

  int fd() const { return fd_; }
  int index() const { return index_; }
  uint64_t generation() const { return generation_; }
  bool dead() const { return dead_.load(std::memory_order_acquire); }

  // Queues / writes one complete frame (parts[0] starts with the 16-byte
  // header). NEVER blocks the caller (usually a V8 thread): the fast path is a
  // single non-blocking sendmsg; if the socket buffer is full (sidecar slow or
  // stalled) the unsent remainder is appended to an ordered userspace queue
  // that the connection's writer thread drains. Frames never interleave.
  bool Write(const struct iovec* parts, int nparts) {
    if (dead() || nparts <= 0 || nparts > 8) {
      return false;
    }
    size_t total = 0;
    for (int i = 0; i < nparts; ++i) {
      total += parts[i].iov_len;
    }
    std::unique_lock<std::mutex> lk(q_mu_);
    if (dead()) {
      return false;
    }
    size_t written = 0;
    if (queue_.empty() && !writer_busy_) {
      struct iovec iov[8];
      memcpy(iov, parts, sizeof(struct iovec) * nparts);
      int idx = 0;
      while (idx < nparts && iov[idx].iov_len == 0) {
        ++idx;
      }
      while (idx < nparts) {
        struct msghdr msg;
        memset(&msg, 0, sizeof(msg));
        msg.msg_iov = iov + idx;
        msg.msg_iovlen = nparts - idx;
        ssize_t w = sendmsg(fd_, &msg, kSendFlags | MSG_DONTWAIT);
        if (w < 0) {
          if (errno == EINTR) {
            continue;
          }
          if (errno == EAGAIN || errno == EWOULDBLOCK) {
            break;  // Socket buffer full: queue the remainder.
          }
          lk.unlock();
          MarkDead();
          return false;
        }
        written += static_cast<size_t>(w);
        size_t left = static_cast<size_t>(w);
        while (idx < nparts && left >= iov[idx].iov_len) {
          left -= iov[idx].iov_len;
          ++idx;
        }
        if (idx < nparts && left > 0) {
          iov[idx].iov_base = static_cast<char*>(iov[idx].iov_base) + left;
          iov[idx].iov_len -= left;
        }
      }
      if (written == total) {
        return true;
      }
    }
    const size_t remaining = total - written;
    if (total > kFrameHeaderSize &&
        queued_bytes_ + remaining > kMaxQueuedBytes) {
      lk.unlock();
      if (written > 0) {
        // A partial frame was already sent on the socket; tear down the
        // connection so framing cannot desynchronize.
        MarkDead();
      }
      return false;
    }
    std::vector<uint8_t> buf(remaining);
    size_t skip = written;
    size_t out = 0;
    for (int i = 0; i < nparts; ++i) {
      const uint8_t* src = static_cast<const uint8_t*>(parts[i].iov_base);
      size_t len = parts[i].iov_len;
      if (skip >= len) {
        skip -= len;
        continue;
      }
      memcpy(buf.data() + out, src + skip, len - skip);
      out += len - skip;
      skip = 0;
    }
    queued_bytes_ += remaining;
    queue_.push_back(std::move(buf));
    lk.unlock();
    q_cv_.notify_one();
    return true;
  }

  // Writer thread: drains frames queued by Write() with poll-based sends. If
  // the sidecar makes no progress reading for kWriteStallTimeoutMs it is
  // considered wedged: the connection is torn down (streams fail with
  // UNAVAILABLE and the sidecar is killed and respawned on demand).
  void RunWriter() {
    std::unique_lock<std::mutex> lk(q_mu_);
    for (;;) {
      q_cv_.wait(lk, [&] { return !queue_.empty() || dead(); });
      if (dead()) {
        break;
      }
      std::vector<uint8_t> buf = std::move(queue_.front());
      queue_.pop_front();
      writer_busy_ = true;
      lk.unlock();
      const bool ok = SendAllPolling(buf.data(), buf.size());
      lk.lock();
      writer_busy_ = false;
      queued_bytes_ -= buf.size();
      if (!ok) {
        lk.unlock();
        MarkDead();
        lk.lock();
        break;
      }
    }
    queue_.clear();
    queued_bytes_ = 0;
  }

  bool SendControl(uint8_t type, uint64_t id) {
    uint8_t h[kFrameHeaderSize];
    EncodeFrameHeader(h, 0, type, 0, id);
    struct iovec iov;
    iov.iov_base = h;
    iov.iov_len = sizeof(h);
    return Write(&iov, 1);
  }

  // Marks the connection unusable and unblocks the reader. The descriptor is
  // only closed by the destructor, so no other thread can ever write to a
  // recycled descriptor number.
  void MarkDead() {
    if (!dead_.exchange(true, std::memory_order_acq_rel)) {
      shutdown(fd_, SHUT_RDWR);
    }
    {
      std::lock_guard<std::mutex> lk(ready_mu_);
    }
    ready_cv_.notify_all();
    {
      std::lock_guard<std::mutex> lk(q_mu_);
    }
    q_cv_.notify_all();
  }

  void SetReady(uint32_t version, uint32_t pid) {
    {
      std::lock_guard<std::mutex> lk(ready_mu_);
      ready_ = true;
      peer_version_ = version;
      peer_pid_ = pid;
    }
    ready_cv_.notify_all();
  }

  bool WaitReady(
      std::chrono::steady_clock::time_point deadline,
      uint32_t* version,
      uint32_t* pid) {
    std::unique_lock<std::mutex> lk(ready_mu_);
    ready_cv_.wait_until(lk, deadline, [&] { return ready_ || dead(); });
    if (!ready_) {
      return false;
    }
    *version = peer_version_;
    *pid = peer_pid_;
    return true;
  }

 private:
  bool SendAllPolling(const uint8_t* p, size_t n) {
    size_t off = 0;
    while (off < n) {
      if (dead()) {
        return false;
      }
      ssize_t w = send(fd_, p + off, n - off, kSendFlags | MSG_DONTWAIT);
      if (w > 0) {
        off += static_cast<size_t>(w);
        continue;
      }
      if (w < 0 && errno == EINTR) {
        continue;
      }
      if (w < 0 && (errno == EAGAIN || errno == EWOULDBLOCK)) {
        struct pollfd pfd;
        pfd.fd = fd_;
        pfd.events = POLLOUT;
        pfd.revents = 0;
        const int pr = poll(&pfd, 1, kWriteStallTimeoutMs);
        if (pr == 0) {
          return false;  // No progress: the sidecar is wedged.
        }
        if (pr < 0 && errno != EINTR) {
          return false;
        }
        continue;
      }
      return false;
    }
    return true;
  }

  int fd_;
  int index_;
  uint64_t generation_;
  std::atomic<bool> dead_{false};
  std::mutex q_mu_;
  std::condition_variable q_cv_;
  std::deque<std::vector<uint8_t>> queue_;
  size_t queued_bytes_ = 0;
  bool writer_busy_ = false;
  std::mutex ready_mu_;
  std::condition_variable ready_cv_;
  bool ready_ = false;
  uint32_t peer_version_ = 0;
  uint32_t peer_pid_ = 0;
};

// ---------------------------------------------------------------------------
// Per-isolate dispatch (mirrors spanner_go_napi.cc)
// ---------------------------------------------------------------------------

struct EnvDispatchContext;

struct AsyncStreamContext {
  EnvDispatchContext* env_ctx = nullptr;
  napi_ref cb_ref = nullptr;
  IpcBatch* inline_batch = nullptr;
  std::atomic<bool> inline_used{false};
  int64_t stream_id = 0;  // JS-visible handle (0 for non-cancellable streams)
  uint64_t wire_id = 0;   // routing id on the IPC connection (always set)
  std::shared_ptr<IpcConnection> conn;
  bool enable_backpressure = false;
  std::atomic<int32_t> abandoned{0};
  AsyncStreamContext* prev = nullptr;
  AsyncStreamContext* next = nullptr;
};

struct BatchCompletionEvent {
  AsyncStreamContext* ctx;
  IpcBatch* batch;
};

struct EnvDispatchContext {
  napi_env env = nullptr;
  napi_threadsafe_function tsfn = nullptr;
  std::mutex tsfn_mu;
  std::atomic<bool> closing{false};
  std::atomic<int32_t> ref_count{1};
  int32_t active_rpcs = 0;
  bool tsfn_refed = false;
  bool streams_swept = false;
  AsyncStreamContext* head = nullptr;
  std::unordered_map<int64_t, AsyncStreamContext*> active_streams;

  explicit EnvDispatchContext(napi_env e) : env(e) {}

  void AddRef() { ref_count.fetch_add(1, std::memory_order_relaxed); }

  void Release() {
    if (ref_count.fetch_sub(1, std::memory_order_acq_rel) == 1) {
      delete this;
    }
  }

  // Requires tsfn_mu.
  void UnlinkLocked(AsyncStreamContext* ctx) {
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
    UnlinkLocked(ctx);
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

  // Marks the isolate closing, abandons every active stream, and sends CANCEL
  // frames outside tsfn_mu. Called from both OnTsfnFinalize and Shutdown()
  // because Node may run the TSFN finalizer before the instance-data finalizer
  // on worker exit/termination.
  void TeardownStreams(bool release_tsfn) {
    std::vector<std::pair<std::shared_ptr<IpcConnection>, uint64_t>> to_cancel;
    {
      std::lock_guard<std::mutex> lk(tsfn_mu);
      closing.store(true, std::memory_order_relaxed);
      if (!streams_swept) {
        streams_swept = true;
        for (AsyncStreamContext* cur = head; cur != nullptr; cur = cur->next) {
          cur->abandoned.store(1, std::memory_order_release);
          // Cancel every stream, including non-cancellable ones (the sidecar
          // abandons those at the next batch, like the FFI abandoned flag).
          if (cur->conn) {
            to_cancel.emplace_back(cur->conn, cur->wire_id);
          }
        }
        active_streams.clear();
      }
      if (release_tsfn) {
        if (tsfn != nullptr) {
          napi_release_threadsafe_function(tsfn, napi_tsfn_abort);
          tsfn = nullptr;
        }
      } else {
        tsfn = nullptr;
      }
    }
    for (auto& entry : to_cancel) {
      entry.first->SendControl(kFrameCancel, entry.second);
    }
  }

  void Shutdown() { TeardownStreams(/*release_tsfn=*/true); }
};

// Posts a batch to the stream's isolate. Takes ownership of `batch`. Mirrors
// OnGoBatchCallback in spanner_go_napi.cc.
void DispatchBatchToJs(AsyncStreamContext* ctx, IpcBatch* batch) {
  if (ctx == nullptr || ctx->env_ctx == nullptr) {
    delete batch;
    return;
  }
  const bool is_final = (batch == nullptr) || (batch->status != 0);
  EnvDispatchContext* ec = ctx->env_ctx;

  if (!is_final && ctx->abandoned.load(std::memory_order_acquire) != 0) {
    delete batch;
    return;
  }

  std::unique_lock<std::mutex> lk(ec->tsfn_mu);
  if (ec->closing.load(std::memory_order_relaxed) || ec->tsfn == nullptr) {
    delete batch;
    if (is_final) {
      ec->UnlinkLocked(ctx);
      lk.unlock();
      delete ctx;
      ec->Release();
    }
    return;
  }

  if (is_final && !ctx->inline_used.exchange(true, std::memory_order_acq_rel)) {
    ctx->inline_batch = batch;
    // Tag low bit = 0 (direct AsyncStreamContext* pointer).
    napi_status st =
        napi_call_threadsafe_function(ec->tsfn, ctx, napi_tsfn_nonblocking);
    if (st != napi_ok) {
      ctx->inline_batch = nullptr;
      delete batch;
      ec->UnlinkLocked(ctx);
      lk.unlock();
      delete ctx;
      ec->Release();
    }
    return;
  }

  BatchCompletionEvent* ev = new BatchCompletionEvent{ctx, batch};
  // Tag low bit = 1 to distinguish a heap event from a direct ctx pointer.
  void* tagged =
      reinterpret_cast<void*>(reinterpret_cast<uintptr_t>(ev) | 1ULL);
  napi_status st =
      napi_call_threadsafe_function(ec->tsfn, tagged, napi_tsfn_nonblocking);
  if (st != napi_ok) {
    delete batch;
    delete ev;
    if (is_final) {
      ec->UnlinkLocked(ctx);
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
  IpcBatch* b = nullptr;

  if ((raw & 1ULL) != 0) {
    BatchCompletionEvent* ev =
        reinterpret_cast<BatchCompletionEvent*>(raw & ~uintptr_t(1ULL));
    ctx = ev->ctx;
    b = ev->batch;
    delete ev;
  } else {
    ctx = reinterpret_cast<AsyncStreamContext*>(raw);
    b = ctx->inline_batch;
    ctx->inline_batch = nullptr;
  }

  std::unique_ptr<IpcBatch> guard(b);
  const bool is_final = (b == nullptr) || (b->status != 0);
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
      if (!is_final && ctx->conn) {
        ctx->conn->SendControl(kFrameCancel, ctx->wire_id);
      }
    } else if (ret_val != nullptr) {
      bool keep_going = true;
      if (napi_get_value_bool(env, ret_val, &keep_going) == napi_ok &&
          !keep_going) {
        ctx->abandoned.store(1, std::memory_order_release);
        if (!is_final && ctx->conn) {
          ctx->conn->SendControl(kFrameCancel, ctx->wire_id);
        }
      }
    }
  }

  // env == nullptr means the TSFN is draining its queue during teardown: a
  // non-final event must not touch ctx then (a FINAL that raced the teardown
  // may already have deleted it in DispatchBatchToJs).
  if (env != nullptr && !is_final && ctx != nullptr &&
      ctx->enable_backpressure && ctx->stream_id != 0 && ctx->conn &&
      ctx->abandoned.load(std::memory_order_relaxed) == 0) {
    ctx->conn->SendControl(kFrameAck, ctx->wire_id);
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

// Runs when Node destroys the TSFN (which can happen before the instance-data
// finalizer on environment teardown). Afterwards nobody may touch the handle:
// DispatchBatchToJs takes the closing path and Shutdown skips the release.
void OnTsfnFinalize(napi_env /*env*/, void* finalize_data, void* /*hint*/) {
  EnvDispatchContext* env_ctx = static_cast<EnvDispatchContext*>(finalize_data);
  if (env_ctx == nullptr) {
    return;
  }
  env_ctx->TeardownStreams(/*release_tsfn=*/false);
  env_ctx->Release();  // The reference held by the TSFN.
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
      env, "SpannerCoreIpcTSFN", NAPI_AUTO_LENGTH, &resource_name);
  env_ctx->AddRef();  // Owned by the TSFN; released in OnTsfnFinalize.
  napi_status st = napi_create_threadsafe_function(
      env,
      noop_fn,
      nullptr,
      resource_name,
      0,
      1,
      env_ctx,
      OnTsfnFinalize,
      env_ctx,
      CallJsBatchHandler,
      &env_ctx->tsfn);
  if (st != napi_ok || env_ctx->tsfn == nullptr) {
    env_ctx->tsfn = nullptr;
    delete env_ctx;
    return nullptr;
  }
  napi_unref_threadsafe_function(env, env_ctx->tsfn);
  napi_set_instance_data(env, env_ctx, CleanupEnvDispatchContext, nullptr);
  return env_ctx;
}

// ---------------------------------------------------------------------------
// Process-wide state. Intentionally leaked: detached reader / reaper threads
// may still touch it while the process exits.
// ---------------------------------------------------------------------------

struct PendingReply {
  IpcConnection* conn = nullptr;  // identity only
  std::mutex mu;
  std::condition_variable cv;
  bool done = false;
  bool failed = false;
  uint8_t type = 0;
  std::vector<uint8_t> payload;
  std::string error;

  void Complete(uint8_t t, const uint8_t* data, size_t len) {
    {
      std::lock_guard<std::mutex> lk(mu);
      type = t;
      payload.assign(data, data + len);
      done = true;
    }
    cv.notify_all();
  }

  void Fail(const std::string& msg) {
    {
      std::lock_guard<std::mutex> lk(mu);
      failed = true;
      error = msg;
      done = true;
    }
    cv.notify_all();
  }
};

struct RouteTable {
  std::mutex routes_mu;
  std::unordered_map<uint64_t, AsyncStreamContext*> routes;
  std::mutex pending_mu;
  std::unordered_map<uint64_t, std::shared_ptr<PendingReply>> pending;
  std::atomic<uint64_t> next_stream_id{1};
  std::atomic<uint64_t> next_request_id{1};
};

RouteTable& Routes() {
  static RouteTable* table = new RouteTable();
  return *table;
}

void RegisterRoute(uint64_t wire_id, AsyncStreamContext* ctx) {
  RouteTable& rt = Routes();
  std::lock_guard<std::mutex> lk(rt.routes_mu);
  rt.routes[wire_id] = ctx;
}

// Removes the route; only the caller that removes it may deliver the FINAL
// batch, which guarantees exactly-once completion per stream.
AsyncStreamContext* TakeRoute(uint64_t wire_id) {
  RouteTable& rt = Routes();
  std::lock_guard<std::mutex> lk(rt.routes_mu);
  auto it = rt.routes.find(wire_id);
  if (it == rt.routes.end()) {
    return nullptr;
  }
  AsyncStreamContext* ctx = it->second;
  rt.routes.erase(it);
  return ctx;
}

struct ServiceSlot {
  std::string init_payload;
  int64_t remote_handle = 0;
  uint64_t generation = 0;
  int32_t refs = 0;
  // INIT round trips run WITHOUT mgr.mu; concurrent users of the same slot wait
  // on SidecarManager::init_cv while `initializing` is set.
  bool initializing = false;
  std::chrono::steady_clock::time_point retry_not_before{};
  std::string last_error;
};

struct SidecarManager {
  // Guards all fields below. Never held across a blocking round trip to the
  // sidecar (INIT/CLOSE/STATS); only spawning a new sidecar (READY wait) runs
  // under it, because every caller needs a live sidecar at that point anyway.
  std::mutex mu;
  std::condition_variable init_cv;

  // Configuration (configure()).
  std::string sidecar_path;
  int num_connections = 1;
  int socket_buffer = 0;
  int startup_timeout_ms = 15000;
  int request_timeout_ms = 30000;
  std::vector<std::string> extra_args;

  // Sidecar process state.
  uint64_t generation = 0;
  bool running = false;
  pid_t pid = -1;
  uint32_t peer_pid = 0;
  uint64_t spawn_count = 0;
  std::string last_exit;
  std::vector<std::shared_ptr<IpcConnection>> conns;
  std::atomic<uint32_t> rr{0};
  std::chrono::steady_clock::time_point retry_not_before{};

  // Values forwarded to the sidecar.
  std::string root_pem;
  std::string pending_universe_domain;
  std::string last_error;       // most recent transport-level error
  std::string last_init_error;  // getLastInitError() (init failures only)

  // Local service handles (de-duplicated by INIT payload, survive restarts).
  int64_t next_local_handle = 0;
  std::unordered_map<int64_t, std::shared_ptr<ServiceSlot>> services;
  std::unordered_map<std::string, int64_t> services_by_payload;
};

SidecarManager& Mgr() {
  static SidecarManager* mgr = new SidecarManager();
  return *mgr;
}

void ConfigureParentSocket(int fd, int sockbuf) {
  if (sockbuf > 0) {
    setsockopt(fd, SOL_SOCKET, SO_SNDBUF, &sockbuf, sizeof(sockbuf));
    setsockopt(fd, SOL_SOCKET, SO_RCVBUF, &sockbuf, sizeof(sockbuf));
  }
#if defined(SO_NOSIGPIPE)
  int one = 1;
  setsockopt(fd, SOL_SOCKET, SO_NOSIGPIPE, &one, sizeof(one));
#endif
}

bool MakeSocketPair(int sv[2]) {
#if defined(SOCK_CLOEXEC)
  return socketpair(AF_UNIX, SOCK_STREAM | SOCK_CLOEXEC, 0, sv) == 0;
#else
  if (socketpair(AF_UNIX, SOCK_STREAM, 0, sv) != 0) {
    return false;
  }
  fcntl(sv[0], F_SETFD, FD_CLOEXEC);
  fcntl(sv[1], F_SETFD, FD_CLOEXEC);
  return true;
#endif
}

void FailPendingForConnection(IpcConnection* conn, const std::string& msg) {
  RouteTable& rt = Routes();
  std::vector<std::shared_ptr<PendingReply>> failed;
  {
    std::lock_guard<std::mutex> lk(rt.pending_mu);
    for (auto it = rt.pending.begin(); it != rt.pending.end();) {
      if (it->second->conn == conn) {
        failed.push_back(it->second);
        it = rt.pending.erase(it);
      } else {
        ++it;
      }
    }
  }
  for (auto& reply : failed) {
    reply->Fail(msg);
  }
}

// Requires mgr.mu.
void TeardownLocked() {
  SidecarManager& m = Mgr();
  for (auto& c : m.conns) {
    c->MarkDead();
  }
  if (m.pid > 0) {
    // Safe even if the sidecar already exited: the reaper waits with WNOWAIT
    // and only reaps (freeing the pid) after clearing m.pid under mgr.mu.
    kill(m.pid, SIGKILL);
  }
  m.running = false;
  m.conns.clear();
}

// Runs on the connection's reader thread when the connection fails.
void OnConnectionLost(
    const std::shared_ptr<IpcConnection>& conn,
    const std::string& reason) {
  conn->MarkDead();
  const std::string msg = "Spanner Go sidecar connection lost: " + reason;
  FailPendingForConnection(conn.get(), msg);

  std::vector<AsyncStreamContext*> orphans;
  {
    RouteTable& rt = Routes();
    std::lock_guard<std::mutex> lk(rt.routes_mu);
    for (auto it = rt.routes.begin(); it != rt.routes.end();) {
      if (it->second->conn.get() == conn.get()) {
        orphans.push_back(it->second);
        it = rt.routes.erase(it);
      } else {
        ++it;
      }
    }
  }
  for (AsyncStreamContext* ctx : orphans) {
    DispatchBatchToJs(ctx, MakeErrorBatch(kGrpcUnavailable, msg));
  }

  SidecarManager& m = Mgr();
  std::lock_guard<std::mutex> lk(m.mu);
  if (m.generation == conn->generation() && m.running) {
    m.last_error = msg;
    TeardownLocked();
  }
}

std::string DescribeExit(const siginfo_t& info) {
  if (info.si_code == CLD_EXITED) {
    return "exit code " + std::to_string(info.si_status);
  }
  if (info.si_code == CLD_KILLED || info.si_code == CLD_DUMPED) {
    return "killed by signal " + std::to_string(info.si_status);
  }
  return "unknown status";
}

void ReaperMain(
    pid_t pid,
    uint64_t generation,
    std::vector<std::shared_ptr<IpcConnection>> conns) {
  siginfo_t info;
  memset(&info, 0, sizeof(info));
  int rc;
  do {
    rc = waitid(P_PID, static_cast<id_t>(pid), &info, WEXITED | WNOWAIT);
  } while (rc < 0 && errno == EINTR);
  const std::string desc =
      rc == 0 ? DescribeExit(info) : std::string("exit status unavailable");
  {
    SidecarManager& m = Mgr();
    std::lock_guard<std::mutex> lk(m.mu);
    if (m.generation == generation) {
      m.last_exit = desc;
      if (m.running) {
        m.running = false;
        m.last_error = "Spanner Go sidecar exited (" + desc + ")";
      }
    }
    if (m.pid == pid) {
      m.pid = -1;
    }
    if (rc == 0) {
      int status = 0;
      while (waitpid(pid, &status, 0) < 0 && errno == EINTR) {
      }
    }
  }
  for (auto& c : conns) {
    c->MarkDead();
  }
}

bool ReadFully(int fd, uint8_t* dst, size_t n, std::string* reason) {
  size_t got = 0;
  while (got < n) {
    ssize_t r = recv(fd, dst + got, n - got, 0);
    if (r > 0) {
      got += static_cast<size_t>(r);
      continue;
    }
    if (r == 0) {
      *reason = "sidecar closed the connection mid-frame";
      return false;
    }
    if (errno == EINTR) {
      continue;
    }
    *reason = std::string("recv failed: ") + strerror(errno);
    return false;
  }
  return true;
}

// Handles one frame whose payload is owned (malloc'd) by the caller; takes
// ownership. Returns false on a protocol error.
bool HandleFrame(
    const std::shared_ptr<IpcConnection>& conn,
    uint8_t type,
    uint8_t flags,
    uint64_t id,
    uint8_t* payload,
    size_t len,
    std::string* reason) {
  switch (type) {
    case kFrameBatch: {
      std::string err;
      IpcBatch* batch = ParseBatchPayload(payload, len, &err);
      if (batch == nullptr) {
        *reason = "invalid BATCH frame: " + err;
        return false;
      }
      const bool is_final = batch->status != 0;
      if (is_final != ((flags & kBatchFlagFinal) != 0)) {
        delete batch;
        *reason = "BATCH FINAL flag does not match status";
        return false;
      }
      if (is_final) {
        AsyncStreamContext* ctx = TakeRoute(id);
        if (ctx != nullptr) {
          DispatchBatchToJs(ctx, batch);
        } else {
          delete batch;
        }
        return true;
      }
      // Dispatch non-final batches under routes_mu so a concurrent TakeRoute
      // (connection loss / write failure) cannot finalize the stream between
      // the lookup and the post (TSFN delivery is FIFO per isolate).
      RouteTable& rt = Routes();
      std::lock_guard<std::mutex> lk(rt.routes_mu);
      auto it = rt.routes.find(id);
      if (it != rt.routes.end()) {
        DispatchBatchToJs(it->second, batch);
      } else {
        delete batch;
      }
      return true;
    }
    case kFrameReady: {
      if (len < 16) {
        free(payload);
        *reason = "short READY frame";
        return false;
      }
      conn->SetReady(Load<uint32_t>(payload), Load<uint32_t>(payload + 4));
      free(payload);
      return true;
    }
    case kFrameInitResult:
    case kFrameCloseResult:
    case kFrameStatsResult:
    case kFramePong: {
      std::shared_ptr<PendingReply> reply;
      {
        RouteTable& rt = Routes();
        std::lock_guard<std::mutex> lk(rt.pending_mu);
        auto it = rt.pending.find(id);
        if (it != rt.pending.end()) {
          reply = it->second;
          rt.pending.erase(it);
        }
      }
      if (reply) {
        reply->Complete(type, payload, len);
      }
      free(payload);
      return true;
    }
    default:
      free(payload);
      *reason = "unexpected frame type " + std::to_string(type);
      return false;
  }
}

void WriterMain(std::shared_ptr<IpcConnection> conn) { conn->RunWriter(); }

void ReaderMain(std::shared_ptr<IpcConnection> conn) {
  std::vector<uint8_t> buf(kReadBufferSize);
  size_t start = 0;
  size_t end = 0;
  std::string reason;
  const int fd = conn->fd();

  for (;;) {
    bool failed = false;
    while (end - start >= kFrameHeaderSize) {
      const uint8_t* h = buf.data() + start;
      const uint32_t payload_len = Load<uint32_t>(h);
      const uint8_t type = h[4];
      const uint8_t flags = h[5];
      const uint64_t id = Load<uint64_t>(h + 8);
      if (payload_len > kMaxPayloadLen) {
        reason = "frame exceeds the maximum payload size";
        failed = true;
        break;
      }
      const size_t avail = end - start - kFrameHeaderSize;
      if (avail >= payload_len) {
        uint8_t* payload = static_cast<uint8_t*>(malloc(payload_len ? payload_len : 1));
        if (payload == nullptr) {
          reason = "out of memory";
          failed = true;
          break;
        }
        memcpy(payload, h + kFrameHeaderSize, payload_len);
        start += kFrameHeaderSize + payload_len;
        if (!HandleFrame(conn, type, flags, id, payload, payload_len, &reason)) {
          failed = true;
          break;
        }
        continue;
      }
      if (payload_len >= kDirectReadThreshold ||
          kFrameHeaderSize + payload_len > buf.size()) {
        // Large frame: read the remainder straight into its final buffer.
        uint8_t* payload = static_cast<uint8_t*>(malloc(payload_len));
        if (payload == nullptr) {
          reason = "out of memory";
          failed = true;
          break;
        }
        memcpy(payload, h + kFrameHeaderSize, avail);
        start = end = 0;
        if (!ReadFully(fd, payload + avail, payload_len - avail, &reason)) {
          free(payload);
          failed = true;
          break;
        }
        if (!HandleFrame(conn, type, flags, id, payload, payload_len, &reason)) {
          failed = true;
          break;
        }
        continue;
      }
      break;  // Need more bytes; the frame fits in the buffer.
    }
    if (failed) {
      break;
    }
    if (start == end) {
      start = end = 0;
    } else if (start > 0) {
      memmove(buf.data(), buf.data() + start, end - start);
      end -= start;
      start = 0;
    }
    ssize_t n = recv(fd, buf.data() + end, buf.size() - end, 0);
    if (n > 0) {
      end += static_cast<size_t>(n);
      continue;
    }
    if (n == 0) {
      reason = "sidecar closed the connection";
      break;
    }
    if (errno == EINTR) {
      continue;
    }
    reason = std::string("recv failed: ") + strerror(errno);
    break;
  }
  OnConnectionLost(conn, reason);
}

bool RoundTrip(
    const std::shared_ptr<IpcConnection>& conn,
    uint8_t type,
    const uint8_t* payload,
    size_t len,
    int timeout_ms,
    uint8_t expected_reply,
    std::vector<uint8_t>* reply_out,
    std::string* err) {
  RouteTable& rt = Routes();
  auto reply = std::make_shared<PendingReply>();
  reply->conn = conn.get();
  const uint64_t id = rt.next_request_id.fetch_add(1, std::memory_order_relaxed);
  {
    std::lock_guard<std::mutex> lk(rt.pending_mu);
    rt.pending[id] = reply;
  }
  uint8_t h[kFrameHeaderSize];
  EncodeFrameHeader(h, static_cast<uint32_t>(len), type, 0, id);
  struct iovec iov[2];
  iov[0].iov_base = h;
  iov[0].iov_len = sizeof(h);
  iov[1].iov_base = const_cast<uint8_t*>(payload);
  iov[1].iov_len = len;
  if (!conn->Write(iov, len > 0 ? 2 : 1)) {
    std::lock_guard<std::mutex> lk(rt.pending_mu);
    rt.pending.erase(id);
    *err = "failed to write to the Spanner Go sidecar (connection lost)";
    return false;
  }
  std::unique_lock<std::mutex> lk(reply->mu);
  if (!reply->cv.wait_for(lk, std::chrono::milliseconds(timeout_ms), [&] {
        return reply->done;
      })) {
    lk.unlock();
    std::lock_guard<std::mutex> plk(rt.pending_mu);
    rt.pending.erase(id);
    *err = "timed out waiting for the Spanner Go sidecar";
    return false;
  }
  if (reply->failed) {
    *err = reply->error;
    return false;
  }
  if (reply->type != expected_reply) {
    *err = "unexpected reply type from the Spanner Go sidecar";
    return false;
  }
  *reply_out = std::move(reply->payload);
  return true;
}

void SendRootCertsLocked() {
  SidecarManager& m = Mgr();
  if (m.root_pem.empty() || m.conns.empty()) {
    return;
  }
  uint8_t h[kFrameHeaderSize];
  EncodeFrameHeader(
      h, static_cast<uint32_t>(m.root_pem.size()), kFrameSetRootCerts, 0, 0);
  struct iovec iov[2];
  iov[0].iov_base = h;
  iov[0].iov_len = sizeof(h);
  iov[1].iov_base = const_cast<char*>(m.root_pem.data());
  iov[1].iov_len = m.root_pem.size();
  // Control requests always use connection 0 so ordering with INIT is kept.
  m.conns[0]->Write(iov, 2);
}

// Requires mgr.mu.
bool SpawnLocked(std::string* err) {
  SidecarManager& m = Mgr();
  if (m.sidecar_path.empty()) {
    *err = "Spanner Go sidecar path is not configured";
    return false;
  }
  if (access(m.sidecar_path.c_str(), X_OK) != 0) {
    *err = "Spanner Go sidecar is not executable (" + m.sidecar_path +
           "): " + strerror(errno);
    return false;
  }
  const int n = m.num_connections < 1
                    ? 1
                    : (m.num_connections > 16 ? 16 : m.num_connections);
  std::vector<int> parent_fds;
  std::vector<int> child_fds;
  auto close_all = [&]() {
    for (int fd : parent_fds) {
      if (fd >= 0) close(fd);
    }
    for (int fd : child_fds) {
      if (fd >= 0) close(fd);
    }
    parent_fds.clear();
    child_fds.clear();
  };
  for (int i = 0; i < n; ++i) {
    int sv[2];
    if (!MakeSocketPair(sv)) {
      *err = std::string("socketpair failed: ") + strerror(errno);
      close_all();
      return false;
    }
    parent_fds.push_back(sv[0]);
    // Move the child end above the dup2 targets (3..3+n-1) so no dup2 can
    // clobber another child end before it is duplicated.
    int high = fcntl(sv[1], F_DUPFD_CLOEXEC, 64);
    close(sv[1]);
    if (high < 0) {
      *err = std::string("fcntl(F_DUPFD_CLOEXEC) failed: ") + strerror(errno);
      close_all();
      return false;
    }
    child_fds.push_back(high);
  }

  std::string fds_arg = "--fds=";
  for (int i = 0; i < n; ++i) {
    if (i > 0) fds_arg += ",";
    fds_arg += std::to_string(3 + i);
  }
  std::vector<std::string> args = {
      m.sidecar_path, fds_arg,
      "--parent-pid=" + std::to_string(static_cast<long>(getpid()))};
  if (m.socket_buffer > 0) {
    args.push_back("--sockbuf=" + std::to_string(m.socket_buffer));
  }
  for (const auto& a : m.extra_args) {
    args.push_back(a);
  }
  std::vector<char*> argv;
  for (auto& a : args) {
    argv.push_back(const_cast<char*>(a.c_str()));
  }
  argv.push_back(nullptr);

  posix_spawn_file_actions_t fa;
  posix_spawn_file_actions_init(&fa);
  posix_spawn_file_actions_addopen(&fa, 0, "/dev/null", O_RDONLY, 0);
  posix_spawn_file_actions_addopen(&fa, 1, "/dev/null", O_WRONLY, 0);
  // Node.js marks its stdio descriptors close-on-exec, so fd 2 must be passed
  // explicitly (dup2 into a different number clears FD_CLOEXEC); otherwise Go
  // panics, SIGQUIT dumps and SPANNER_NATIVE_IPC_DEBUG output would be lost.
  const int stderr_dup = fcntl(2, F_DUPFD_CLOEXEC, 64);
  if (stderr_dup >= 0) {
    posix_spawn_file_actions_adddup2(&fa, stderr_dup, 2);
  }
  for (int i = 0; i < n; ++i) {
    posix_spawn_file_actions_adddup2(&fa, child_fds[i], 3 + i);
  }
#if defined(__linux__)
  // Close every other inherited descriptor in the child (fds that some other
  // library opened without O_CLOEXEC). Resolved at runtime so the addon does
  // not require glibc >= 2.34 and still works on musl.
  using AddCloseFromFn = int (*)(posix_spawn_file_actions_t*, int);
  static const AddCloseFromFn add_closefrom = reinterpret_cast<AddCloseFromFn>(
      dlsym(RTLD_DEFAULT, "posix_spawn_file_actions_addclosefrom_np"));
  if (add_closefrom != nullptr) {
    add_closefrom(&fa, 3 + n);
  }
#endif

  posix_spawnattr_t attr;
  posix_spawnattr_init(&attr);
  sigset_t mask;
  sigemptyset(&mask);
  posix_spawnattr_setsigmask(&attr, &mask);
  sigset_t defaults;
  sigemptyset(&defaults);
  for (int s : {SIGPIPE, SIGCHLD, SIGUSR1, SIGUSR2}) {
    sigaddset(&defaults, s);
  }
  posix_spawnattr_setsigdefault(&attr, &defaults);
  // The sidecar stays in the Node.js process group (job control such as
  // Ctrl-Z / fg applies to both, and a background group can never get SIGTTOU
  // for writing to the terminal). It ignores SIGINT / SIGHUP / SIGTERM itself
  // and exits on EOF of its sockets, so group-wide signals cannot kill
  // in-flight queries while Node.js drains.
  short spawn_flags = POSIX_SPAWN_SETSIGMASK | POSIX_SPAWN_SETSIGDEF;
#if defined(__APPLE__)
  spawn_flags |= POSIX_SPAWN_CLOEXEC_DEFAULT;
#endif
  posix_spawnattr_setflags(&attr, spawn_flags);

  pid_t pid = -1;
  const int rc = posix_spawn(
      &pid, m.sidecar_path.c_str(), &fa, &attr, argv.data(), environ);
  posix_spawn_file_actions_destroy(&fa);
  posix_spawnattr_destroy(&attr);
  if (stderr_dup >= 0) {
    close(stderr_dup);
  }
  for (int fd : child_fds) {
    close(fd);
  }
  child_fds.clear();
  if (rc != 0) {
    *err = std::string("posix_spawn of the Spanner Go sidecar failed: ") +
           strerror(rc);
    close_all();
    return false;
  }

  const uint64_t gen = ++m.generation;
  std::vector<std::shared_ptr<IpcConnection>> conns;
  for (int i = 0; i < n; ++i) {
    ConfigureParentSocket(parent_fds[i], m.socket_buffer);
    conns.push_back(std::make_shared<IpcConnection>(parent_fds[i], i, gen));
    parent_fds[i] = -1;  // Owned by the connection now.
  }
  m.pid = pid;
  m.conns = conns;
  m.spawn_count++;
  m.last_exit.clear();
  // Start the reaper first so the child is always reaped, then the readers.
  // Thread creation can throw (resource exhaustion); never let that escape
  // through N-API.
  try {
    std::thread(ReaperMain, pid, gen, conns).detach();
  } catch (const std::exception& e) {
    kill(pid, SIGKILL);
    int status = 0;
    while (waitpid(pid, &status, 0) < 0 && errno == EINTR) {
    }
    m.pid = -1;
    m.conns.clear();
    *err = std::string("failed to start the sidecar reaper thread: ") + e.what();
    return false;
  }
  for (auto& c : conns) {
    try {
      std::thread(ReaderMain, c).detach();
      std::thread(WriterMain, c).detach();
    } catch (const std::exception& e) {
      *err = std::string("failed to start a sidecar I/O thread: ") + e.what();
      TeardownLocked();
      return false;
    }
  }

  const auto deadline = std::chrono::steady_clock::now() +
                        std::chrono::milliseconds(m.startup_timeout_ms);
  for (auto& c : conns) {
    uint32_t version = 0;
    uint32_t peer_pid = 0;
    if (!c->WaitReady(deadline, &version, &peer_pid)) {
      *err = c->dead()
                 ? "the Spanner Go sidecar exited during startup (see its "
                   "stderr output)"
                 : "the Spanner Go sidecar did not become ready within " +
                       std::to_string(m.startup_timeout_ms) + " ms";
      TeardownLocked();
      return false;
    }
    if (version != kProtocolVersion) {
      *err = "Spanner Go sidecar protocol version mismatch (sidecar " +
             std::to_string(version) + ", addon " +
             std::to_string(kProtocolVersion) + ")";
      TeardownLocked();
      return false;
    }
    m.peer_pid = peer_pid;
  }
  m.running = true;
  SendRootCertsLocked();
  return true;
}

// Requires mgr.mu. Spawns a sidecar if none is healthy. After a failed spawn
// callers fail fast for kRetryCooldown instead of each attempting another one.
bool EnsureRunningLocked(std::string* err) {
  SidecarManager& m = Mgr();
  if (m.running) {
    bool healthy = !m.conns.empty();
    for (auto& c : m.conns) {
      if (c->dead()) {
        healthy = false;
        break;
      }
    }
    if (healthy) {
      return true;
    }
    TeardownLocked();
  }
  const auto now = std::chrono::steady_clock::now();
  if (now < m.retry_not_before) {
    *err = m.last_error.empty() ? "the Spanner Go sidecar is unavailable"
                                : m.last_error;
    return false;
  }
  if (!SpawnLocked(err)) {
    m.last_error = *err;
    m.retry_not_before = std::chrono::steady_clock::now() + kRetryCooldown;
    return false;
  }
  m.retry_not_before = {};
  return true;
}

// Sends INIT and waits for INIT_RESULT. Must NOT be called with mgr.mu held.
bool RemoteInit(
    const std::shared_ptr<IpcConnection>& conn,
    const std::string& payload,
    int timeout_ms,
    int64_t* remote,
    std::string* err) {
  std::vector<uint8_t> reply;
  if (!RoundTrip(
          conn,
          kFrameInit,
          reinterpret_cast<const uint8_t*>(payload.data()),
          payload.size(),
          timeout_ms,
          kFrameInitResult,
          &reply,
          err)) {
    return false;
  }
  if (reply.size() < 12) {
    *err = "short INIT_RESULT from the Spanner Go sidecar";
    return false;
  }
  const int64_t handle = Load<int64_t>(reply.data());
  const uint32_t err_len = Load<uint32_t>(reply.data() + 8);
  if (handle <= 0) {
    if (err_len > 0 && 12 + static_cast<size_t>(err_len) <= reply.size()) {
      err->assign(reinterpret_cast<const char*>(reply.data() + 12), err_len);
    } else {
      *err = "failed to create Go Shared Core service";
    }
    return false;
  }
  *remote = handle;
  return true;
}

// Fire-and-forget CLOSE_SERVICE helper (must NOT be called with mgr.mu held).
void SendCloseServiceAsync(
    const std::shared_ptr<IpcConnection>& conn,
    int64_t remote) {
  if (!conn || remote <= 0) {
    return;
  }
  uint8_t frame[kFrameHeaderSize + 8];
  EncodeFrameHeader(
      frame,
      8,
      kFrameCloseService,
      0,
      Routes().next_request_id.fetch_add(1, std::memory_order_relaxed));
  PutI64(frame + kFrameHeaderSize, remote);
  struct iovec iov;
  iov.iov_base = frame;
  iov.iov_len = sizeof(frame);
  conn->Write(&iov, 1);
}

// Requires `lk` to hold mgr.mu. Makes sure `slot` has a remote handle for the
// current sidecar generation, spawning the sidecar if needed. The INIT round
// trip itself runs with mgr.mu released, so other isolates' queries on healthy
// services are never blocked by a slow NewService; concurrent users of the same
// slot wait for the in-flight INIT instead of issuing their own.
bool EnsureSlotReadyLocked(
    std::unique_lock<std::mutex>& lk,
    const std::shared_ptr<ServiceSlot>& slot,
    std::string* err) {
  SidecarManager& m = Mgr();
  for (int attempt = 0; attempt < 3; ++attempt) {
    m.init_cv.wait(lk, [&] { return !slot->initializing; });
    if (slot->refs <= 0) {
      *err = "invalid or closed SpannerCore service handle";
      return false;
    }
    if (!EnsureRunningLocked(err)) {
      return false;
    }
    if (slot->generation == m.generation && slot->remote_handle > 0) {
      return true;
    }
    if (std::chrono::steady_clock::now() < slot->retry_not_before) {
      *err = slot->last_error;
      return false;
    }
    slot->initializing = true;
    const uint64_t gen = m.generation;
    const std::shared_ptr<IpcConnection> conn = m.conns[0];
    const int timeout_ms = m.request_timeout_ms;
    lk.unlock();
    int64_t remote = 0;
    std::string init_err;
    const bool ok = RemoteInit(conn, slot->init_payload, timeout_ms, &remote, &init_err);
    lk.lock();
    slot->initializing = false;
    m.init_cv.notify_all();
    if (!ok) {
      slot->last_error = init_err;
      slot->retry_not_before = std::chrono::steady_clock::now() + kRetryCooldown;
      *err = init_err;
      return false;
    }
    if (slot->refs <= 0) {
      // All holders closed the slot while RemoteInit was in flight; release the
      // remote handle on the sidecar so it does not leak.
      const bool same_gen = (gen == m.generation);
      lk.unlock();
      if (same_gen) {
        SendCloseServiceAsync(conn, remote);
      }
      lk.lock();
      *err = "invalid or closed SpannerCore service handle";
      return false;
    }
    slot->retry_not_before = {};
    slot->last_error.clear();
    if (gen == m.generation) {
      slot->remote_handle = remote;
      slot->generation = gen;
      return true;
    }
    // The sidecar was restarted while INIT was in flight; retry on the new one.
  }
  *err = "the Spanner Go sidecar restarted repeatedly during service initialization";
  return false;
}

// Resolves a local service handle to (remote handle, connection), spawning or
// re-initializing the sidecar if needed. Returns 0 or a gRPC status code. The
// common case is a short critical section with no I/O.
int32_t ResolveExecuteTarget(
    int64_t local_handle,
    int64_t* remote,
    std::shared_ptr<IpcConnection>* conn,
    std::string* err) {
  SidecarManager& m = Mgr();
  std::unique_lock<std::mutex> lk(m.mu);
  auto it = m.services.find(local_handle);
  if (it == m.services.end()) {
    *err = "invalid or closed SpannerCore service handle";
    return kGrpcFailedPrecondition;
  }
  const std::shared_ptr<ServiceSlot> slot = it->second;
  if (!m.running || m.conns.empty() || slot->initializing ||
      slot->generation != m.generation || slot->remote_handle <= 0) {
    if (!EnsureSlotReadyLocked(lk, slot, err)) {
      return kGrpcUnavailable;
    }
  }
  *remote = slot->remote_handle;
  const uint32_t idx =
      m.rr.fetch_add(1, std::memory_order_relaxed) %
      static_cast<uint32_t>(m.conns.size());
  *conn = m.conns[idx];
  return 0;
}

// ---------------------------------------------------------------------------
// N-API helpers
// ---------------------------------------------------------------------------

std::string GetStringArg(napi_env env, napi_value val) {
  size_t len = 0;
  if (val == nullptr ||
      napi_get_value_string_utf8(env, val, nullptr, 0, &len) != napi_ok ||
      len == 0) {
    return "";
  }
  std::string out(len, '\0');
  napi_get_value_string_utf8(env, val, &out[0], len + 1, &len);
  return out;
}

struct StackStringArg {
  char stack_buf[512];
  std::string heap_str;
  char* ptr;
  size_t len;

  StackStringArg(napi_env env, napi_value val) : ptr(stack_buf), len(0) {
    stack_buf[0] = '\0';
    size_t copied = 0;
    if (val == nullptr ||
        napi_get_value_string_utf8(
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

class PayloadWriter {
 public:
  void I32(int32_t v) { Append(&v, sizeof(v)); }
  void F64(double v) { Append(&v, sizeof(v)); }
  void Str(const std::string& s) {
    uint32_t n = static_cast<uint32_t>(s.size());
    Append(&n, sizeof(n));
    buf_.append(s);
  }
  const std::string& data() const { return buf_; }

 private:
  void Append(const void* p, size_t n) {
    buf_.append(static_cast<const char*>(p), n);
  }
  std::string buf_;
};

napi_value MakeInt64(napi_env env, int64_t v) {
  napi_value out;
  napi_create_int64(env, v, &out);
  return out;
}

napi_value Undefined(napi_env env) {
  napi_value out;
  napi_get_undefined(env, &out);
  return out;
}

void SetNamedInt64(napi_env env, napi_value obj, const char* name, int64_t v) {
  napi_value val;
  napi_create_int64(env, v, &val);
  napi_set_named_property(env, obj, name, val);
}

void SetNamedString(
    napi_env env,
    napi_value obj,
    const char* name,
    const std::string& v) {
  napi_value val;
  napi_create_string_utf8(env, v.data(), v.size(), &val);
  napi_set_named_property(env, obj, name, val);
}

void SetNamedBool(napi_env env, napi_value obj, const char* name, bool v) {
  napi_value val;
  napi_get_boolean(env, v, &val);
  napi_set_named_property(env, obj, name, val);
}

bool GetNamedInt32(napi_env env, napi_value obj, const char* name, int32_t* out) {
  bool has = false;
  if (napi_has_named_property(env, obj, name, &has) != napi_ok || !has) {
    return false;
  }
  napi_value val;
  napi_get_named_property(env, obj, name, &val);
  napi_valuetype t;
  napi_typeof(env, val, &t);
  if (t != napi_number) {
    return false;
  }
  return napi_get_value_int32(env, val, out) == napi_ok;
}

bool GetNamedString(
    napi_env env,
    napi_value obj,
    const char* name,
    std::string* out) {
  bool has = false;
  if (napi_has_named_property(env, obj, name, &has) != napi_ok || !has) {
    return false;
  }
  napi_value val;
  napi_get_named_property(env, obj, name, &val);
  napi_valuetype t;
  napi_typeof(env, val, &t);
  if (t != napi_string) {
    return false;
  }
  *out = GetStringArg(env, val);
  return true;
}

// ---------------------------------------------------------------------------
// N-API exports
// ---------------------------------------------------------------------------

// configure({sidecarPath, connections, socketBuffer, startupTimeoutMs,
//            requestTimeoutMs, extraArgs}) -- applies to the next spawn.
napi_value Configure(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  if (argc < 1) {
    return Undefined(env);
  }
  napi_valuetype t;
  napi_typeof(env, args[0], &t);
  if (t != napi_object) {
    return Undefined(env);
  }
  SidecarManager& m = Mgr();
  std::lock_guard<std::mutex> lk(m.mu);
  std::string path;
  if (GetNamedString(env, args[0], "sidecarPath", &path) && !path.empty()) {
    m.sidecar_path = path;
  }
  int32_t v = 0;
  if (GetNamedInt32(env, args[0], "connections", &v) && v > 0) {
    m.num_connections = v;
  }
  if (GetNamedInt32(env, args[0], "socketBuffer", &v) && v >= 0) {
    m.socket_buffer = v;
  }
  if (GetNamedInt32(env, args[0], "startupTimeoutMs", &v) && v > 0) {
    m.startup_timeout_ms = v;
  }
  if (GetNamedInt32(env, args[0], "requestTimeoutMs", &v) && v > 0) {
    m.request_timeout_ms = v;
  }
  bool has_extra = false;
  if (napi_has_named_property(env, args[0], "extraArgs", &has_extra) ==
          napi_ok &&
      has_extra) {
    napi_value arr;
    napi_get_named_property(env, args[0], "extraArgs", &arr);
    bool is_arr = false;
    napi_is_array(env, arr, &is_arr);
    if (is_arr) {
      uint32_t n = 0;
      napi_get_array_length(env, arr, &n);
      m.extra_args.clear();
      for (uint32_t i = 0; i < n; ++i) {
        napi_value el;
        napi_get_element(env, arr, i, &el);
        m.extra_args.push_back(GetStringArg(env, el));
      }
    }
  }
  return Undefined(env);
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

  SidecarManager& m = Mgr();
  std::unique_lock<std::mutex> lk(m.mu);

  // Like SpannerCoreInit: the pending universe domain applies to this init only.
  std::string universe_domain;
  universe_domain.swap(m.pending_universe_domain);

  PayloadWriter w;
  w.Str(endpoint);
  w.I32(num_channels);
  w.I32(use_plaintext);
  w.I32(disable_auth);
  w.I32(enable_direct);
  w.Str(user_agent);
  w.I32(dcp_enabled);
  w.I32(dcp_initial_channels);
  w.I32(dcp_min_channels);
  w.I32(dcp_max_channels);
  w.F64(dcp_max_rpc_per_channel);
  w.F64(dcp_min_rpc_per_channel);
  w.I32(dcp_selection_strategy);
  w.Str(universe_domain);
  const std::string& payload = w.data();

  // De-duplicate by configuration like SpannerCoreInit: one remote service per
  // payload per sidecar generation, reference counted locally.
  int64_t local = 0;
  std::shared_ptr<ServiceSlot> slot;
  auto existing = m.services_by_payload.find(payload);
  if (existing != m.services_by_payload.end()) {
    local = existing->second;
    slot = m.services[local];
  } else {
    local = ++m.next_local_handle;
    slot = std::make_shared<ServiceSlot>();
    slot->init_payload = payload;
    m.services.emplace(local, slot);
    m.services_by_payload.emplace(payload, local);
  }
  // Hold a reference across EnsureSlotReadyLocked so a concurrent CloseService
  // from another client sharing this slot cannot drop refs to 0 and erase the
  // slot while RemoteInit runs with mgr.mu unlocked.
  slot->refs++;
  std::string err;
  if (!EnsureSlotReadyLocked(lk, slot, &err)) {
    if (--slot->refs <= 0) {
      auto it = m.services.find(local);
      if (it != m.services.end() && it->second == slot) {
        m.services.erase(it);
        m.services_by_payload.erase(slot->init_payload);
      }
    }
    m.last_init_error = err;
    return MakeInt64(env, -1);
  }
  m.last_init_error.clear();
  return MakeInt64(env, local);
}

napi_value CloseService(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  int64_t handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &handle);

  napi_value result;
  std::shared_ptr<IpcConnection> conn;
  int64_t remote = 0;
  {
    SidecarManager& m = Mgr();
    std::lock_guard<std::mutex> lk(m.mu);
    auto it = m.services.find(handle);
    if (it == m.services.end() || it->second->refs <= 0) {
      napi_create_int32(env, -1, &result);
      return result;
    }
    const std::shared_ptr<ServiceSlot> slot = it->second;
    if (--slot->refs > 0) {
      napi_create_int32(env, 0, &result);
      return result;
    }
    m.services.erase(it);
    m.services_by_payload.erase(slot->init_payload);
    if (m.running && !m.conns.empty() && slot->generation == m.generation &&
        slot->remote_handle > 0) {
      conn = m.conns[0];
      remote = slot->remote_handle;
    }
  }
  SendCloseServiceAsync(conn, remote);
  napi_create_int32(env, 0, &result);
  return result;
}

napi_value SetRootCertsPEM(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  if (argc > 0) {
    std::string pem = GetStringArg(env, args[0]);
    SidecarManager& m = Mgr();
    std::lock_guard<std::mutex> lk(m.mu);
    if (pem == m.root_pem) {
      return Undefined(env);  // Every isolate sends the same bundle.
    }
    m.root_pem = std::move(pem);
    if (m.running) {
      SendRootCertsLocked();
    }
  }
  return Undefined(env);
}

napi_value SetNextUniverseDomain(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  std::string ud = argc > 0 ? GetStringArg(env, args[0]) : "";
  SidecarManager& m = Mgr();
  std::lock_guard<std::mutex> lk(m.mu);
  m.pending_universe_domain = std::move(ud);
  return Undefined(env);
}

napi_value GetLastInitError(napi_env env, napi_callback_info /*info*/) {
  std::string err;
  {
    SidecarManager& m = Mgr();
    std::lock_guard<std::mutex> lk(m.mu);
    err = m.last_init_error;
  }
  napi_value out;
  napi_create_string_utf8(env, err.data(), err.size(), &out);
  return out;
}

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

  StackStringArg headers(env, argc > 3 ? args[3] : nullptr);

  int32_t timeout_ms = 0;
  if (argc > 4) napi_get_value_int32(env, args[4], &timeout_ms);
  int32_t skip_metadata = 0;
  if (argc > 5) napi_get_value_int32(env, args[5], &skip_metadata);
  int32_t batch_row_size = 0;
  if (argc > 6) napi_get_value_int32(env, args[6], &batch_row_size);

  napi_valuetype cb_type = napi_undefined;
  if (argc >= 8) {
    napi_typeof(env, args[7], &cb_type);
  }
  if (cb_type != napi_function) {
    napi_throw_error(
        env,
        nullptr,
        "The Spanner Go Shared Core IPC transport requires a batch callback");
    return nullptr;
  }

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

  RouteTable& rt = Routes();
  ctx->wire_id = rt.next_stream_id.fetch_add(1, std::memory_order_relaxed);
  if ((skip_metadata & 4) == 0) {
    ctx->stream_id = static_cast<int64_t>(ctx->wire_id);
    env_ctx->active_streams[ctx->stream_id] = ctx;
  }
  const int64_t js_handle = ctx->stream_id;

  const uint64_t payload_len64 = static_cast<uint64_t>(kExecuteFixedSize) +
                                 routing_key.len + headers.len + req_len;
  if (payload_len64 > kMaxPayloadLen) {
    DispatchBatchToJs(
        ctx,
        MakeErrorBatch(
            kGrpcResourceExhausted,
            "the ExecuteSqlRequest exceeds the Spanner Go Shared Core IPC "
            "frame limit"));
    return MakeInt64(env, js_handle);
  }

  int64_t remote = 0;
  std::shared_ptr<IpcConnection> conn;
  std::string err;
  const int32_t code =
      ResolveExecuteTarget(service_handle, &remote, &conn, &err);
  if (code != 0) {
    // Delivered asynchronously through the TSFN, like an FFI init error.
    DispatchBatchToJs(ctx, MakeErrorBatch(code, err));
    return MakeInt64(env, js_handle);
  }
  ctx->conn = conn;
  RegisterRoute(ctx->wire_id, ctx);

  uint8_t fixed[kFrameHeaderSize + kExecuteFixedSize];
  EncodeFrameHeader(
      fixed,
      static_cast<uint32_t>(payload_len64),
      kFrameExecute,
      0,
      ctx->wire_id);
  uint8_t* e = fixed + kFrameHeaderSize;
  PutI64(e + 0, remote);
  PutI32(e + 8, timeout_ms);
  PutI32(e + 12, skip_metadata);
  PutI32(e + 16, batch_row_size);
  PutU32(e + 20, static_cast<uint32_t>(routing_key.len));
  PutU32(e + 24, static_cast<uint32_t>(headers.len));
  PutU32(e + 28, static_cast<uint32_t>(req_len));
  struct iovec iov[4];
  iov[0].iov_base = fixed;
  iov[0].iov_len = sizeof(fixed);
  iov[1].iov_base = routing_key.ptr;
  iov[1].iov_len = routing_key.len;
  iov[2].iov_base = headers.ptr;
  iov[2].iov_len = headers.len;
  iov[3].iov_base = req_data;
  iov[3].iov_len = req_len;
  if (!conn->Write(iov, 4)) {
    AsyncStreamContext* owned = TakeRoute(ctx->wire_id);
    if (owned != nullptr) {
      DispatchBatchToJs(
          owned,
          MakeErrorBatch(
              kGrpcUnavailable,
              "failed to send the query to the Spanner Go sidecar "
              "(connection lost)"));
    }
  }
  return MakeInt64(env, js_handle);
}

// The legacy pull-based path is not offered by the IPC transport.
napi_value NextBatch(napi_env env, napi_callback_info /*info*/) {
  napi_throw_error(
      env,
      nullptr,
      "nextBatch is not supported by the Spanner Go Shared Core IPC transport");
  return nullptr;
}

AsyncStreamContext* LookupActiveStream(napi_env env, int64_t handle) {
  if (handle <= 0) {
    return nullptr;
  }
  void* data = nullptr;
  if (napi_get_instance_data(env, &data) != napi_ok || data == nullptr) {
    return nullptr;
  }
  EnvDispatchContext* env_ctx = static_cast<EnvDispatchContext*>(data);
  auto it = env_ctx->active_streams.find(handle);
  if (it == env_ctx->active_streams.end()) {
    return nullptr;
  }
  return it->second;
}

int64_t GetHandleArg(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  int64_t handle = 0;
  if (argc > 0) napi_get_value_int64(env, args[0], &handle);
  return handle;
}

napi_value PauseStream(napi_env env, napi_callback_info info) {
  AsyncStreamContext* ctx = LookupActiveStream(env, GetHandleArg(env, info));
  if (ctx != nullptr && ctx->conn) {
    ctx->conn->SendControl(kFramePause, ctx->wire_id);
  }
  return Undefined(env);
}

napi_value ResumeStream(napi_env env, napi_callback_info info) {
  AsyncStreamContext* ctx = LookupActiveStream(env, GetHandleArg(env, info));
  if (ctx != nullptr && ctx->conn) {
    ctx->conn->SendControl(kFrameResume, ctx->wire_id);
  }
  return Undefined(env);
}

napi_value CloseStream(napi_env env, napi_callback_info info) {
  AsyncStreamContext* ctx = LookupActiveStream(env, GetHandleArg(env, info));
  if (ctx != nullptr) {
    ctx->abandoned.store(1, std::memory_order_release);
    if (ctx->conn) {
      ctx->conn->SendControl(kFrameCancel, ctx->wire_id);
    }
  }
  return Undefined(env);
}

napi_value GetSidecarInfo(napi_env env, napi_callback_info /*info*/) {
  napi_value obj;
  napi_create_object(env, &obj);
  SidecarManager& m = Mgr();
  std::lock_guard<std::mutex> lk(m.mu);
  SetNamedString(env, obj, "transport", "ipc");
  SetNamedBool(env, obj, "running", m.running);
  SetNamedInt64(env, obj, "pid", m.running ? static_cast<int64_t>(m.pid) : -1);
  SetNamedInt64(env, obj, "generation", static_cast<int64_t>(m.generation));
  SetNamedInt64(env, obj, "spawnCount", static_cast<int64_t>(m.spawn_count));
  SetNamedInt64(env, obj, "connections", static_cast<int64_t>(m.conns.size()));
  SetNamedInt64(env, obj, "configuredConnections", m.num_connections);
  SetNamedInt64(env, obj, "protocolVersion", kProtocolVersion);
  SetNamedInt64(env, obj, "services", static_cast<int64_t>(m.services.size()));
  SetNamedString(env, obj, "sidecarPath", m.sidecar_path);
  SetNamedString(env, obj, "lastError", m.last_error);
  SetNamedString(env, obj, "lastExit", m.last_exit);
  return obj;
}

napi_value GetSidecarStats(napi_env env, napi_callback_info /*info*/) {
  std::shared_ptr<IpcConnection> conn;
  int timeout_ms = 0;
  {
    SidecarManager& m = Mgr();
    std::lock_guard<std::mutex> lk(m.mu);
    if (!m.running || m.conns.empty()) {
      napi_value null_val;
      napi_get_null(env, &null_val);
      return null_val;
    }
    conn = m.conns[0];
    timeout_ms = m.request_timeout_ms;
  }
  std::vector<uint8_t> reply;
  std::string err;
  if (!RoundTrip(
          conn, kFrameStats, nullptr, 0, timeout_ms, kFrameStatsResult, &reply,
          &err) ||
      reply.size() < 16 * 8) {
    napi_value null_val;
    napi_get_null(env, &null_val);
    return null_val;
  }
  static const char* const kNames[15] = {
      "utimeUs",       "stimeUs",   "maxRssKb",   "nvcsw",    "nivcsw",
      "goroutines",    "gomaxprocs", "numCpu",    "pid",      "activeStreams",
      "services",      "heapAllocBytes", "heapSysBytes", "numGc", "rssBytes"};
  napi_value obj;
  napi_create_object(env, &obj);
  for (int i = 0; i < 15; ++i) {
    napi_value val;
    napi_create_double(
        env, static_cast<double>(Load<uint64_t>(reply.data() + 8 * i)), &val);
    napi_set_named_property(env, obj, kNames[i], val);
  }
  return obj;
}

// Stops the sidecar (tests / explicit teardown). In-flight streams fail with
// UNAVAILABLE; the next call transparently respawns it.
napi_value ShutdownSidecar(napi_env env, napi_callback_info /*info*/) {
  SidecarManager& m = Mgr();
  std::lock_guard<std::mutex> lk(m.mu);
  if (m.running) {
    for (auto& c : m.conns) {
      c->SendControl(kFrameShutdown, 0);
    }
    m.last_error = "Spanner Go sidecar was shut down";
    TeardownLocked();
  }
  return Undefined(env);
}

napi_value InitModule(napi_env env, napi_value exports) {
  napi_property_descriptor props[] = {
      {"init", nullptr, InitService, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"close", nullptr, CloseService, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"setRootCertsPEM", nullptr, SetRootCertsPEM, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"setNextUniverseDomain", nullptr, SetNextUniverseDomain, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"getLastInitError", nullptr, GetLastInitError, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"executeStreamingSql", nullptr, ExecuteStreamingSql, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"nextBatch", nullptr, NextBatch, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"pauseStream", nullptr, PauseStream, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"resumeStream", nullptr, ResumeStream, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"closeStream", nullptr, CloseStream, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"configure", nullptr, Configure, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"getSidecarInfo", nullptr, GetSidecarInfo, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"getSidecarStats", nullptr, GetSidecarStats, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
      {"shutdownSidecar", nullptr, ShutdownSidecar, nullptr, nullptr, nullptr, napi_enumerable, nullptr},
  };
  napi_define_properties(env, exports, sizeof(props) / sizeof(props[0]), props);
  napi_value transport;
  napi_create_string_utf8(env, "ipc", NAPI_AUTO_LENGTH, &transport);
  napi_set_named_property(env, exports, "transport", transport);
  return exports;
}

}  // namespace

NAPI_MODULE(NODE_GYP_MODULE_NAME, InitModule)
