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

package main

/*
#include <stdlib.h>
#include <stdint.h>

typedef enum {
  CELL_KIND_NULL      = 0,
  CELL_KIND_BOOL      = 1,
  CELL_KIND_FLOAT64   = 2,
  CELL_KIND_STRING    = 3,
  CELL_KIND_BYTES     = 4,
  CELL_KIND_TIMESTAMP = 5,
  CELL_KIND_FLOAT32   = 6,
  CELL_KIND_ARRAY     = 7,
  CELL_KIND_STRUCT    = 8
} CSpannerCellKind;

// CSpannerCell is a 24-byte, 8-byte-aligned, pointer-free value descriptor.
// Because it contains NO pointers, Go's cgo pointer checker (cgocheck=1/2)
// never scans individual cells, and an entire batch (including nested ARRAY
// and STRUCT elements) requires at most 2 C heap allocations:
//   1. batch->cells      (flat array of CSpannerCell)
//   2. batch->byte_arena (contiguous byte buffer for all strings and bytes)
typedef struct {
  int32_t  kind;     // CSpannerCellKind
  uint32_t flags;    // TIMESTAMP: nanos (0..999,999,999); BOOL: 1 or 0
  union {
    double  f64_val; // CELL_KIND_FLOAT64, CELL_KIND_FLOAT32
    int64_t i64_val; // CELL_KIND_TIMESTAMP (unix seconds)
  } num;
  uint32_t offset;   // STRING/BYTES: byte offset into batch->byte_arena
                     // ARRAY/STRUCT: child start index into batch->cells
  uint32_t len;      // STRING/BYTES: byte length in batch->byte_arena
                     // ARRAY/STRUCT: number of contiguous child cells
} CSpannerCell;

typedef struct {
  int32_t       status;         // 0 = OK, 1 = EOF (may also carry final rows), <0 = Error
  int32_t       error_code;     // gRPC status code when status < 0
  char*         error_msg;      // C string error description (NULL if none)
  uint8_t*      retry_info_pb;  // google.rpc.RetryInfo protobuf bytes (NULL if none)
  int32_t       retry_info_len;

  // Contiguous Row / Cell Arena
  int32_t       num_rows;
  int32_t       num_cols;
  int32_t       total_cells;
  int32_t       byte_arena_len;
  CSpannerCell* cells;          // Flat array of total_cells elements
  char*         byte_arena;     // Contiguous byte buffer of length byte_arena_len

  // Out-of-band ResultSetMetadata & ResultSetStats
  uint8_t*      metadata_pb;    // ResultSetMetadata protobuf bytes (NULL if none)
  int32_t       metadata_len;
  uint8_t*      stats_pb;       // ResultSetStats protobuf bytes (NULL if none)
  int32_t       stats_len;
  uint8_t*      precommit_pb;   // MultiplexedSessionPrecommitToken protobuf bytes (NULL if none)
  int32_t       precommit_len;
  int32_t       has_read_timestamp;
  int32_t       read_timestamp_nanos;
  int64_t       read_timestamp_sec;

  // Telemetry & Logs
  double        gfe_latency_ms; // >= 0 if server-timing gfet4t7 header was received, else -1
  double        afe_latency_ms; // >= 0 if server-timing afe header was received, else -1
  int32_t       attempt_count;  // >= 1 on final batch
  int32_t       direct_path_used; // 1 if DirectPath was used
  char*         logs_json;      // JSON array of structured log entries (NULL if none)
  int32_t       logs_len;
} CSpannerBatch;

typedef void (*SpannerBatchCallback)(void* user_data, CSpannerBatch* batch);

static inline void invoke_batch_callback(SpannerBatchCallback cb, void* user_data, CSpannerBatch* batch) {
  if (cb != NULL) {
    cb(user_data, batch);
  }
}
*/
import "C"

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
	"unsafe"

	"cloud.google.com/go/spanner"
	"cloud.google.com/go/spanner/sharedcore"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
)

var (
	serviceMu     sync.Mutex
	nextServiceID atomic.Int64
	services      sync.Map // map[int64]*serviceEntry
	servicesByKey = make(map[string]*serviceEntry)

	nextStreamID atomic.Int64
	streams      sync.Map // map[int64]*streamEntry

	gomaxprocsOnce sync.Once
)

type logRecord struct {
	Level   string `json:"level"`
	Message string `json:"msg"`
}

const headerCacheSlots = 32

type cachedHeaderEntry struct {
	raw            string
	headers        map[string]string
	headerPairs    []string
	outgoingMD     metadata.MD
	hasTraceparent bool
}

type serviceEntry struct {
	id          int64
	key         string
	refCount    int32
	svc         *sharedcore.Service
	logsMu      sync.Mutex
	logs        []logRecord
	hasLogs     atomic.Bool
	headerSlots [headerCacheSlots]atomic.Pointer[cachedHeaderEntry]
	headerOvfl  sync.Map // map[string]*cachedHeaderEntry
}

func fnv32aStr(s string) uint32 {
	var h uint32 = 2166136261
	for i := 0; i < len(s); i++ {
		h ^= uint32(s[i])
		h *= 16777619
	}
	return h
}

func (se *serviceEntry) resolveHeaders(hdrStr string) *cachedHeaderEntry {
	if len(hdrStr) == 0 {
		return nil
	}
	slot := fnv32aStr(hdrStr) & (headerCacheSlots - 1)
	if cur := se.headerSlots[slot].Load(); cur != nil && cur.raw == hdrStr {
		return cur
	}
	if v, ok := se.headerOvfl.Load(hdrStr); ok {
		return v.(*cachedHeaderEntry)
	}
	headers, pairs := parseHeaders(hdrStr)
	var mdPairs []string
	hasTrace := false
	if len(pairs) >= 2 {
		mdPairs = make([]string, 0, len(pairs))
		for i := 0; i+1 < len(pairs); i += 2 {
			lk := strings.ToLower(pairs[i])
			if lk == "traceparent" {
				hasTrace = true
			}
			if lk == "x-goog-spanner-request-id" {
				continue
			}
			mdPairs = append(mdPairs, lk, pairs[i+1])
		}
	} else if len(headers) > 0 {
		mdPairs = make([]string, 0, len(headers)*2)
		for k, v := range headers {
			lk := strings.ToLower(k)
			if lk == "traceparent" {
				hasTrace = true
			}
			if lk == "x-goog-spanner-request-id" {
				continue
			}
			mdPairs = append(mdPairs, lk, v)
		}
	}
	var outMD metadata.MD
	if len(mdPairs) > 0 {
		outMD = metadata.Pairs(mdPairs...)
	}
	entry := &cachedHeaderEntry{
		raw:            hdrStr,
		headers:        headers,
		headerPairs:    pairs,
		outgoingMD:     outMD,
		hasTraceparent: hasTrace,
	}
	se.headerSlots[slot].CompareAndSwap(nil, entry)
	se.headerOvfl.Store(hdrStr, entry)
	return entry
}

func (se *serviceEntry) appendLog(level, message string) {
	se.logsMu.Lock()
	if len(se.logs) < 256 {
		se.logs = append(se.logs, logRecord{Level: level, Message: message})
		se.hasLogs.Store(true)
	}
	se.logsMu.Unlock()
}

func (se *serviceEntry) drainLogs() []logRecord {
	if !se.hasLogs.Load() {
		return nil
	}
	se.logsMu.Lock()
	if len(se.logs) == 0 {
		se.hasLogs.Store(false)
		se.logsMu.Unlock()
		return nil
	}
	out := se.logs
	se.logs = nil
	se.hasLogs.Store(false)
	se.logsMu.Unlock()
	return out
}

func parseHeaders(hdrStr string) (map[string]string, []string) {
	if len(hdrStr) == 0 {
		return nil, nil
	}
	if hdrStr[0] == '{' {
		var headers map[string]string
		_ = json.Unmarshal([]byte(hdrStr), &headers)
		return headers, nil
	}
	pairs := make([]string, 0, 6)
	start := 0
	for start < len(hdrStr) {
		end := strings.IndexByte(hdrStr[start:], '\n')
		var line string
		if end == -1 {
			line = hdrStr[start:]
			start = len(hdrStr)
		} else {
			line = hdrStr[start : start+end]
			start += end + 1
		}
		if len(line) == 0 {
			continue
		}
		colon := strings.IndexByte(line, ':')
		if colon > 0 {
			pairs = append(pairs, line[:colon], line[colon+1:])
		}
	}
	return nil, pairs
}

type batchMsg struct {
	batch *sharedcore.StreamBatch
	tel   *sharedcore.StreamTelemetry
	err   error
	eof   bool
}

type streamEntry struct {
	se      *serviceEntry
	cancel  context.CancelFunc
	ch      chan batchMsg
	initErr error
}

func (s *streamEntry) close() {
	if s != nil && s.cancel != nil {
		s.cancel()
	}
}

func allocBatch() *C.CSpannerBatch {
	batch := (*C.CSpannerBatch)(C.calloc(1, C.size_t(unsafe.Sizeof(C.CSpannerBatch{}))))
	batch.gfe_latency_ms = -1
	batch.afe_latency_ms = -1
	return batch
}

//export SpannerCoreInit
func SpannerCoreInit(
	endpoint *C.char,
	numChannels C.int,
	usePlaintext C.int,
	disableBuiltInAuth C.int,
	enableDirectAccess C.int,
	userAgent *C.char,
	dcpEnabled C.int,
	dcpInitialChannels C.int,
	dcpMinChannels C.int,
	dcpMaxChannels C.int,
	dcpMaxRpcPerChannel C.double,
	dcpMinRpcPerChannel C.double,
	dcpSelectionStrategy C.int,
) (handle C.longlong) {
	defer func() {
		if r := recover(); r != nil {
			handle = -1
		}
	}()

	// Cap default GOMAXPROCS when embedded inside a Node.js process unless
	// explicitly configured via GOMAXPROCS env var, avoiding work-stealing spin
	// loops across 24+ OS threads on high-core-count machines while preserving
	// Go 1.25's cgroup-aware GOMAXPROCS when <= 4.
	gomaxprocsOnce.Do(func() {
		if os.Getenv("GOMAXPROCS") == "" && runtime.GOMAXPROCS(0) > 4 {
			runtime.GOMAXPROCS(4)
		}
	})

	epStr := C.GoString(endpoint)
	uaStr := C.GoString(userAgent)
	key := fmt.Sprintf(
		"%s|%d|%d|%d|%d|%s|%d|%d|%d|%d|%g|%g|%d",
		epStr,
		int(numChannels),
		int(usePlaintext),
		int(disableBuiltInAuth),
		int(enableDirectAccess),
		uaStr,
		int(dcpEnabled),
		int(dcpInitialChannels),
		int(dcpMinChannels),
		int(dcpMaxChannels),
		float64(dcpMaxRpcPerChannel),
		float64(dcpMinRpcPerChannel),
		int(dcpSelectionStrategy),
	)

	serviceMu.Lock()
	if existing, ok := servicesByKey[key]; ok {
		existing.refCount++
		id := existing.id
		serviceMu.Unlock()
		return C.longlong(id)
	}
	serviceMu.Unlock()

	se := &serviceEntry{
		key:      key,
		refCount: 1,
	}
	cfg := sharedcore.ClientConfig{
		Endpoint:           epStr,
		NumChannels:        int(numChannels),
		PlainText:          usePlaintext != 0,
		DisableBuiltInAuth: disableBuiltInAuth != 0,
		EnableDirectAccess: enableDirectAccess != 0,
		UserAgent:          uaStr,
		DynamicChannelPoolConfig: sharedcore.DynamicChannelPoolConfig{
			Enabled:           dcpEnabled != 0,
			InitialChannels:   int(dcpInitialChannels),
			MinChannels:       int(dcpMinChannels),
			MaxChannels:       int(dcpMaxChannels),
			MaxRPCPerChannel:  float64(dcpMaxRpcPerChannel),
			MinRPCPerChannel:  float64(dcpMinRpcPerChannel),
			SelectionStrategy: int(dcpSelectionStrategy),
		},
		LogFunc: se.appendLog,
	}

	svc, err := sharedcore.NewService(context.Background(), cfg)
	if err != nil {
		return -1
	}
	se.svc = svc

	serviceMu.Lock()
	if existing, ok := servicesByKey[key]; ok {
		existing.refCount++
		id := existing.id
		serviceMu.Unlock()
		_ = svc.Close()
		return C.longlong(id)
	}
	id := nextServiceID.Add(1)
	se.id = id
	services.Store(id, se)
	servicesByKey[key] = se
	serviceMu.Unlock()
	return C.longlong(id)
}

//export SpannerCoreClose
func SpannerCoreClose(serviceHandle C.longlong) (rc C.int) {
	defer func() {
		if r := recover(); r != nil {
			rc = -1
		}
	}()

	val, ok := services.Load(int64(serviceHandle))
	if !ok {
		return -1
	}
	se := val.(*serviceEntry)

	serviceMu.Lock()
	se.refCount--
	if se.refCount > 0 {
		serviceMu.Unlock()
		return 0
	}
	services.Delete(int64(serviceHandle))
	delete(servicesByKey, se.key)
	serviceMu.Unlock()

	if err := se.svc.Close(); err != nil {
		return -1
	}
	return 0
}

//export SpannerCoreExecuteStreamingSqlAsync
func SpannerCoreExecuteStreamingSqlAsync(
	serviceHandle C.longlong,
	routingKey *C.char,
	reqBytes unsafe.Pointer,
	reqLen C.int,
	headersJSON *C.char,
	timeoutMs C.int,
	skipMetadata C.int,
	batchRowSize C.int,
	cb C.SpannerBatchCallback,
	userData unsafe.Pointer,
) (streamID C.longlong) {
	nonCancellable := (skipMetadata & 4) != 0
	var id int64
	if !nonCancellable {
		id = nextStreamID.Add(1)
		streamID = C.longlong(id)
	}

	defer func() {
		if r := recover(); r != nil {
			errBatch := allocBatch()
			populateErrorBatch(errBatch, status.Errorf(codes.Internal, "panic in SpannerCoreExecuteStreamingSqlAsync: %v", r))
			C.invoke_batch_callback(cb, userData, errBatch)
		}
	}()

	val, ok := services.Load(int64(serviceHandle))
	if !ok {
		errBatch := allocBatch()
		populateErrorBatch(errBatch, status.Error(codes.FailedPrecondition, "invalid or closed SpannerCore service handle"))
		C.invoke_batch_callback(cb, userData, errBatch)
		return streamID
	}
	se := val.(*serviceEntry)

	var rawReq []byte
	if reqBytes != nil && reqLen > 0 {
		rawReq = C.GoBytes(reqBytes, reqLen)
	}

	var hdrEntry *cachedHeaderEntry
	if headersJSON != nil {
		hdrEntry = se.resolveHeaders(C.GoString(headersJSON))
	}

	var rKey string
	if routingKey != nil {
		rKey = C.GoString(routingKey)
	}

	var (
		ctx    context.Context
		cancel context.CancelFunc
	)
	if nonCancellable {
		ctx = context.Background()
	} else {
		ctx, cancel = context.WithCancel(context.Background())
		entry := &streamEntry{
			se:     se,
			cancel: cancel,
		}
		streams.Store(id, entry)
	}

	req := sharedcore.StreamRequest{
		RoutingKey:        rKey,
		RequestBytes:      rawReq,
		SkipMetadata:      (skipMetadata & 1) != 0,
		SkipReadTimestamp: (skipMetadata & 2) != 0,
		SkipTelemetry:     true,
		ReuseArenaBuffers: true,
		TimeoutMs:         int64(timeoutMs),
		HasTimeout:        timeoutMs > 0,
		BatchRowSize:      int(batchRowSize),
	}
	if hdrEntry != nil {
		req.Metadata = hdrEntry.headers
		req.MetadataPairs = hdrEntry.headerPairs
		req.OutgoingMD = hdrEntry.outgoingMD
		req.SkipTraceContext = !hdrEntry.hasTraceparent
	} else {
		req.SkipTraceContext = true
	}

	go func() {
		defer func() {
			if !nonCancellable {
				streams.Delete(id)
				cancel()
			}
			if r := recover(); r != nil {
				errBatch := allocBatch()
				populateErrorBatch(errBatch, status.Errorf(codes.Internal, "panic in ExecuteStreamingSQL goroutine: %v", r))
				C.invoke_batch_callback(cb, userData, errBatch)
			}
		}()

		var sentEOF bool

		tel, err := se.svc.ExecuteStreamingSQL(ctx, req, func(sb sharedcore.StreamBatch) error {
			if ctx.Err() != nil {
				return ctx.Err()
			}
			cBatch := allocBatch()
			populateSuccessBatch(cBatch, &sb)
			attachLogsToBatch(cBatch, se.drainLogs())
			if sb.IsLast {
				populateTelemetry(cBatch, &sb.Telemetry)
				cBatch.status = 1 // EOF (plus any final rows/metadata/stats)
				sentEOF = true
			}
			C.invoke_batch_callback(cb, userData, cBatch)
			return nil
		})

		if err != nil {
			errBatch := allocBatch()
			attachLogsToBatch(errBatch, se.drainLogs())
			populateTelemetry(errBatch, &tel)
			populateErrorBatch(errBatch, err)
			C.invoke_batch_callback(cb, userData, errBatch)
			return
		}

		if !sentEOF {
			finalBatch := allocBatch()
			attachLogsToBatch(finalBatch, se.drainLogs())
			populateTelemetry(finalBatch, &tel)
			finalBatch.status = 1 // EOF
			C.invoke_batch_callback(cb, userData, finalBatch)
		}
	}()

	return streamID
}

//export SpannerCoreExecuteStreamingSql
func SpannerCoreExecuteStreamingSql(
	serviceHandle C.longlong,
	routingKey *C.char,
	reqBytes unsafe.Pointer,
	reqLen C.int,
	headersJSON *C.char,
	timeoutMs C.int,
	skipMetadata C.int,
	batchRowSize C.int,
) (streamID C.longlong) {
	id := nextStreamID.Add(1)
	streamID = C.longlong(id)

	defer func() {
		if r := recover(); r != nil {
			streams.Store(id, &streamEntry{
				initErr: status.Errorf(codes.Internal, "panic in SpannerCoreExecuteStreamingSql: %v", r),
			})
		}
	}()

	val, ok := services.Load(int64(serviceHandle))
	if !ok {
		streams.Store(id, &streamEntry{
			initErr: status.Error(codes.FailedPrecondition, "invalid or closed SpannerCore service handle"),
		})
		return streamID
	}
	se := val.(*serviceEntry)

	var rawReq []byte
	if reqBytes != nil && reqLen > 0 {
		rawReq = C.GoBytes(reqBytes, reqLen)
	}

	var (
		headers     map[string]string
		headerPairs []string
	)
	if headersJSON != nil {
		headers, headerPairs = parseHeaders(C.GoString(headersJSON))
	}

	var rKey string
	if routingKey != nil {
		rKey = C.GoString(routingKey)
	}

	ctx, cancel := context.WithCancel(context.Background())
	ch := make(chan batchMsg, 8)
	entry := &streamEntry{
		se:     se,
		cancel: cancel,
		ch:     ch,
	}
	streams.Store(id, entry)

	req := sharedcore.StreamRequest{
		RoutingKey:        rKey,
		Metadata:          headers,
		MetadataPairs:     headerPairs,
		RequestBytes:      rawReq,
		SkipMetadata:      (skipMetadata & 1) != 0,
		SkipReadTimestamp: (skipMetadata & 2) != 0,
		TimeoutMs:         int64(timeoutMs),
		HasTimeout:        timeoutMs > 0,
		BatchRowSize:      int(batchRowSize),
	}

	go func() {
		defer func() {
			if r := recover(); r != nil {
				select {
				case ch <- batchMsg{err: status.Errorf(codes.Internal, "panic in ExecuteStreamingSQL goroutine: %v", r)}:
				case <-ctx.Done():
				}
			}
			close(ch)
		}()

		tel, err := se.svc.ExecuteStreamingSQL(ctx, req, func(sb sharedcore.StreamBatch) error {
			sbCopy := sb
			select {
			case ch <- batchMsg{batch: &sbCopy}:
				return nil
			case <-ctx.Done():
				return ctx.Err()
			}
		})
		if err != nil {
			select {
			case ch <- batchMsg{tel: &tel, err: err}:
			case <-ctx.Done():
			}
			return
		}
		select {
		case ch <- batchMsg{tel: &tel, eof: true}:
		case <-ctx.Done():
		}
	}()

	return streamID
}

//export SpannerCoreNextBatch
func SpannerCoreNextBatch(streamHandle C.longlong) (batch *C.CSpannerBatch) {
	batch = allocBatch()

	defer func() {
		if r := recover(); r != nil {
			batch.status = -1
			batch.error_code = C.int32_t(codes.Internal)
			msg := fmt.Sprintf("panic in SpannerCoreNextBatch: %v", r)
			batch.error_msg = C.CString(msg)
		}
	}()

	val, ok := streams.Load(int64(streamHandle))
	if !ok {
		batch.status = -1
		batch.error_code = C.int32_t(codes.Internal)
		batch.error_msg = C.CString("invalid or exhausted stream handle")
		return batch
	}
	entry := val.(*streamEntry)

	if entry.initErr != nil {
		streams.Delete(int64(streamHandle))
		populateErrorBatch(batch, entry.initErr)
		return batch
	}

	msg, open := <-entry.ch
	if entry.se != nil {
		attachLogsToBatch(batch, entry.se.drainLogs())
	}

	if !open || msg.eof {
		streams.Delete(int64(streamHandle))
		entry.close()
		populateTelemetry(batch, msg.tel)
		batch.status = 1 // EOF
		return batch
	}
	if msg.err != nil {
		streams.Delete(int64(streamHandle))
		entry.close()
		populateTelemetry(batch, msg.tel)
		populateErrorBatch(batch, msg.err)
		return batch
	}

	populateSuccessBatch(batch, msg.batch)
	return batch
}

//export SpannerCoreCloseStream
func SpannerCoreCloseStream(streamHandle C.longlong) {
	defer func() {
		_ = recover()
	}()
	if val, ok := streams.LoadAndDelete(int64(streamHandle)); ok {
		val.(*streamEntry).close()
	}
}

//export FreeSpannerBatch
func FreeSpannerBatch(batch *C.CSpannerBatch) {
	if batch == nil {
		return
	}
	if batch.cells != nil {
		C.free(unsafe.Pointer(batch.cells))
	}
	if batch.byte_arena != nil {
		C.free(unsafe.Pointer(batch.byte_arena))
	}
	if batch.error_msg != nil {
		C.free(unsafe.Pointer(batch.error_msg))
	}
	if batch.retry_info_pb != nil {
		C.free(unsafe.Pointer(batch.retry_info_pb))
	}
	if batch.metadata_pb != nil {
		C.free(unsafe.Pointer(batch.metadata_pb))
	}
	if batch.stats_pb != nil {
		C.free(unsafe.Pointer(batch.stats_pb))
	}
	if batch.precommit_pb != nil {
		C.free(unsafe.Pointer(batch.precommit_pb))
	}
	if batch.logs_json != nil {
		C.free(unsafe.Pointer(batch.logs_json))
	}
	C.free(unsafe.Pointer(batch))
}

func populateTelemetry(batch *C.CSpannerBatch, tel *sharedcore.StreamTelemetry) {
	if tel == nil {
		return
	}
	if tel.HasGFELatency {
		batch.gfe_latency_ms = C.double(tel.GFELatencyMs)
	}
	if tel.HasAFELatency {
		batch.afe_latency_ms = C.double(tel.AFELatencyMs)
	}
	batch.attempt_count = C.int32_t(tel.AttemptCount)
	if tel.DirectPathUsed {
		batch.direct_path_used = 1
	}
}

func populateErrorBatch(batch *C.CSpannerBatch, err error) {
	batch.status = -1
	code := spanner.ErrCode(err)
	batch.error_code = C.int32_t(code)

	msg := extractCleanErrorMessage(err)
	batch.error_msg = C.CString(msg)

	if retryPB := extractRetryInfoBytes(err); len(retryPB) > 0 {
		batch.retry_info_pb = (*C.uint8_t)(C.CBytes(retryPB))
		batch.retry_info_len = C.int32_t(len(retryPB))
	}
}

// extractCleanErrorMessage unwraps *spanner.Error or gRPC status so Node.js
// receives the canonical gRPC error description without a "spanner: code = ..." prefix.
func extractCleanErrorMessage(err error) string {
	var spErr *spanner.Error
	if errors.As(err, &spErr) && spErr.Desc != "" {
		return spErr.Desc
	}
	for u := err; u != nil; u = errors.Unwrap(u) {
		if st, ok := status.FromError(u); ok && st.Message() != "" {
			return st.Message()
		}
	}
	msg := err.Error()
	if idx := strings.Index(msg, `, desc = "`); idx != -1 && strings.HasSuffix(msg, `"`) {
		return msg[idx+len(`, desc = "`):len(msg)-1]
	}
	return msg
}

// extractRetryInfoBytes walks the error unwrap chain to find any attached
// google.rpc.RetryInfo protobuf detail.
func extractRetryInfoBytes(err error) []byte {
	for u := err; u != nil; u = errors.Unwrap(u) {
		if st, ok := status.FromError(u); ok {
			for _, d := range st.Details() {
				if ri, ok := d.(*errdetails.RetryInfo); ok {
					b, mErr := proto.Marshal(ri)
					if mErr == nil {
						return b
					}
				}
			}
		}
	}
	return nil
}

func attachLogsToBatch(batch *C.CSpannerBatch, logs []logRecord) {
	if len(logs) == 0 {
		return
	}
	b, err := json.Marshal(logs)
	if err != nil || len(b) == 0 {
		return
	}
	batch.logs_json = (*C.char)(C.CBytes(b))
	batch.logs_len = C.int32_t(len(b))
}

func populateSuccessBatch(batch *C.CSpannerBatch, sb *sharedcore.StreamBatch) {
	batch.status = 0

	if sb.HasReadTimestamp {
		batch.has_read_timestamp = 1
		batch.read_timestamp_sec = C.int64_t(sb.ReadTimestampSec)
		batch.read_timestamp_nanos = C.int32_t(sb.ReadTimestampNanos)
	}
	if len(sb.MetadataBytes) > 0 {
		batch.metadata_pb = (*C.uint8_t)(C.CBytes(sb.MetadataBytes))
		batch.metadata_len = C.int32_t(len(sb.MetadataBytes))
	}
	if len(sb.StatsBytes) > 0 {
		batch.stats_pb = (*C.uint8_t)(C.CBytes(sb.StatsBytes))
		batch.stats_len = C.int32_t(len(sb.StatsBytes))
	}
	if len(sb.PrecommitTokenBytes) > 0 {
		batch.precommit_pb = (*C.uint8_t)(C.CBytes(sb.PrecommitTokenBytes))
		batch.precommit_len = C.int32_t(len(sb.PrecommitTokenBytes))
	}

	if len(sb.Cells) > 0 {
		totalCells := len(sb.Cells)
		totalBytes := len(sb.ArenaBytes)
		batch.num_rows = C.int32_t(sb.NumRows)
		batch.num_cols = C.int32_t(sb.NumCols)
		batch.total_cells = C.int32_t(totalCells)
		batch.byte_arena_len = C.int32_t(totalBytes)

		cellBytes := C.size_t(totalCells) * C.size_t(unsafe.Sizeof(C.CSpannerCell{}))
		batch.cells = (*C.CSpannerCell)(C.malloc(cellBytes))
		dstCells := unsafe.Slice((*sharedcore.PackedCell)(unsafe.Pointer(batch.cells)), totalCells)
		copy(dstCells, sb.Cells)

		if totalBytes > 0 {
			batch.byte_arena = (*C.char)(C.malloc(C.size_t(totalBytes)))
			dstBytes := unsafe.Slice((*byte)(unsafe.Pointer(batch.byte_arena)), totalBytes)
			copy(dstBytes, sb.ArenaBytes)
		}
		return
	}

	numRows := len(sb.Rows)
	if numRows == 0 {
		return
	}
	numCols := len(sb.Rows[0])
	batch.num_rows = C.int32_t(numRows)
	batch.num_cols = C.int32_t(numCols)
	if numCols == 0 {
		return
	}

	totalCells := numRows * numCols
	totalBytes := 0
	for r := 0; r < numRows; r++ {
		row := sb.Rows[r]
		for c := 0; c < numCols; c++ {
			countValueArena(&row[c], &totalCells, &totalBytes)
		}
	}

	batch.total_cells = C.int32_t(totalCells)
	batch.byte_arena_len = C.int32_t(totalBytes)

	cellBytes := C.size_t(totalCells) * C.size_t(unsafe.Sizeof(C.CSpannerCell{}))
	batch.cells = (*C.CSpannerCell)(C.malloc(cellBytes))
	cellsSlice := unsafe.Slice(batch.cells, totalCells)

	var byteSlice []byte
	if totalBytes > 0 {
		batch.byte_arena = (*C.char)(C.malloc(C.size_t(totalBytes)))
		byteSlice = unsafe.Slice((*byte)(unsafe.Pointer(batch.byte_arena)), totalBytes)
	}

	nextCellIdx := numRows * numCols
	nextByteOff := 0

	for r := 0; r < numRows; r++ {
		row := sb.Rows[r]
		baseIdx := r * numCols
		for c := 0; c < numCols; c++ {
			encodeCellIntoArena(&row[c], baseIdx+c, cellsSlice, byteSlice, &nextCellIdx, &nextByteOff)
		}
	}
}

func countValueArena(v *sharedcore.SpannerValue, totalCells *int, totalBytes *int) {
	switch v.Kind {
	case sharedcore.KindString:
		*totalBytes += len(v.StrVal)
	case sharedcore.KindBytes:
		*totalBytes += len(v.BytesVal)
	case sharedcore.KindArray, sharedcore.KindStruct:
		n := len(v.Children)
		*totalCells += n
		for i := 0; i < n; i++ {
			countValueArena(&v.Children[i], totalCells, totalBytes)
		}
	}
}

func encodeCellIntoArena(
	v *sharedcore.SpannerValue,
	dstIdx int,
	cellsSlice []C.CSpannerCell,
	byteSlice []byte,
	nextCellIdx *int,
	nextByteOff *int,
) {
	cell := &cellsSlice[dstIdx]
	switch v.Kind {
	case sharedcore.KindNull:
		*cell = C.CSpannerCell{kind: C.CELL_KIND_NULL}

	case sharedcore.KindBool:
		var flag C.uint32_t
		if v.BoolVal {
			flag = 1
		}
		*cell = C.CSpannerCell{
			kind:  C.CELL_KIND_BOOL,
			flags: flag,
		}

	case sharedcore.KindFloat64:
		*cell = C.CSpannerCell{kind: C.CELL_KIND_FLOAT64}
		*(*float64)(unsafe.Pointer(&cell.num[0])) = v.Float64Val

	case sharedcore.KindFloat32:
		*cell = C.CSpannerCell{kind: C.CELL_KIND_FLOAT32}
		*(*float64)(unsafe.Pointer(&cell.num[0])) = v.Float64Val

	case sharedcore.KindTimestamp:
		*cell = C.CSpannerCell{
			kind:  C.CELL_KIND_TIMESTAMP,
			flags: C.uint32_t(v.NanoVal),
		}
		*(*int64)(unsafe.Pointer(&cell.num[0])) = v.SecVal

	case sharedcore.KindString:
		n := len(v.StrVal)
		off := *nextByteOff
		if n > 0 {
			copy(byteSlice[off:off+n], v.StrVal)
			*nextByteOff += n
		}
		*cell = C.CSpannerCell{
			kind:   C.CELL_KIND_STRING,
			offset: C.uint32_t(off),
			len:    C.uint32_t(n),
		}

	case sharedcore.KindBytes:
		n := len(v.BytesVal)
		off := *nextByteOff
		if n > 0 {
			copy(byteSlice[off:off+n], v.BytesVal)
			*nextByteOff += n
		}
		*cell = C.CSpannerCell{
			kind:   C.CELL_KIND_BYTES,
			offset: C.uint32_t(off),
			len:    C.uint32_t(n),
		}

	case sharedcore.KindArray:
		n := len(v.Children)
		childStart := *nextCellIdx
		*nextCellIdx += n
		*cell = C.CSpannerCell{
			kind:   C.CELL_KIND_ARRAY,
			offset: C.uint32_t(childStart),
			len:    C.uint32_t(n),
		}
		for i := 0; i < n; i++ {
			encodeCellIntoArena(&v.Children[i], childStart+i, cellsSlice, byteSlice, nextCellIdx, nextByteOff)
		}

	case sharedcore.KindStruct:
		n := len(v.Children)
		childStart := *nextCellIdx
		*nextCellIdx += n
		*cell = C.CSpannerCell{
			kind:   C.CELL_KIND_STRUCT,
			offset: C.uint32_t(childStart),
			len:    C.uint32_t(n),
		}
		for i := 0; i < n; i++ {
			encodeCellIntoArena(&v.Children[i], childStart+i, cellsSlice, byteSlice, nextCellIdx, nextByteOff)
		}
	}
}

func decodeBatchForTest(sb *sharedcore.StreamBatch) (rows [][]sharedcore.SpannerValue, totalCells int, totalBytes int) {
	batch := (*C.CSpannerBatch)(C.calloc(1, C.size_t(unsafe.Sizeof(C.CSpannerBatch{}))))
	defer FreeSpannerBatch(batch)

	populateSuccessBatch(batch, sb)
	totalCells = int(batch.total_cells)
	totalBytes = int(batch.byte_arena_len)

	numRows := int(batch.num_rows)
	numCols := int(batch.num_cols)
	if numRows == 0 || numCols == 0 {
		return nil, totalCells, totalBytes
	}

	cellsSlice := unsafe.Slice(batch.cells, totalCells)
	var byteSlice []byte
	if totalBytes > 0 {
		byteSlice = unsafe.Slice((*byte)(unsafe.Pointer(batch.byte_arena)), totalBytes)
	}

	rows = make([][]sharedcore.SpannerValue, numRows)
	for r := 0; r < numRows; r++ {
		row := make([]sharedcore.SpannerValue, numCols)
		for c := 0; c < numCols; c++ {
			row[c] = decodeCellFromArena(&cellsSlice[r*numCols+c], cellsSlice, byteSlice)
		}
		rows[r] = row
	}
	return rows, totalCells, totalBytes
}

func decodeCellFromArena(cell *C.CSpannerCell, cellsSlice []C.CSpannerCell, byteSlice []byte) sharedcore.SpannerValue {
	switch cell.kind {
	case C.CELL_KIND_NULL:
		return sharedcore.SpannerValue{Kind: sharedcore.KindNull}
	case C.CELL_KIND_BOOL:
		return sharedcore.SpannerValue{Kind: sharedcore.KindBool, BoolVal: cell.flags != 0}
	case C.CELL_KIND_FLOAT64:
		return sharedcore.SpannerValue{
			Kind:       sharedcore.KindFloat64,
			Float64Val: *(*float64)(unsafe.Pointer(&cell.num[0])),
		}
	case C.CELL_KIND_FLOAT32:
		return sharedcore.SpannerValue{
			Kind:       sharedcore.KindFloat32,
			Float64Val: *(*float64)(unsafe.Pointer(&cell.num[0])),
		}
	case C.CELL_KIND_TIMESTAMP:
		return sharedcore.SpannerValue{
			Kind:    sharedcore.KindTimestamp,
			SecVal:  *(*int64)(unsafe.Pointer(&cell.num[0])),
			NanoVal: int32(cell.flags),
		}
	case C.CELL_KIND_STRING:
		off := int(cell.offset)
		n := int(cell.len)
		var s string
		if n > 0 {
			s = string(byteSlice[off : off+n])
		}
		return sharedcore.SpannerValue{Kind: sharedcore.KindString, StrVal: s}
	case C.CELL_KIND_BYTES:
		off := int(cell.offset)
		n := int(cell.len)
		b := make([]byte, n)
		if n > 0 {
			copy(b, byteSlice[off:off+n])
		}
		return sharedcore.SpannerValue{Kind: sharedcore.KindBytes, BytesVal: b}
	case C.CELL_KIND_ARRAY, C.CELL_KIND_STRUCT:
		kind := sharedcore.KindArray
		if cell.kind == C.CELL_KIND_STRUCT {
			kind = sharedcore.KindStruct
		}
		off := int(cell.offset)
		n := int(cell.len)
		elems := make([]sharedcore.SpannerValue, n)
		for i := 0; i < n; i++ {
			elems[i] = decodeCellFromArena(&cellsSlice[off+i], cellsSlice, byteSlice)
		}
		return sharedcore.SpannerValue{Kind: kind, Children: elems}
	default:
		return sharedcore.SpannerValue{Kind: sharedcore.KindNull}
	}
}

func main() {}
