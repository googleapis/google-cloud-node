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

// Pure-Go helpers copied from the in-process FFI bridge (spanner-go/main.go) so
// both transports produce identical batches. Differences are limited to the
// output type: the FFI fills a C-heap CSpannerBatch, the sidecar fills an
// outBatch whose regions are written straight to the socket.

import (
	"encoding/base64"
	"encoding/json"
	"errors"
	"math"
	"strings"

	"cloud.google.com/go/spanner"
	"cloud.google.com/go/spanner/sharedcore"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
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

func fnv32aStr(s string) uint32 {
	var h uint32 = 2166136261
	for i := 0; i < len(s); i++ {
		h ^= uint32(s[i])
		h *= 16777619
	}
	return h
}

func splitRequestIDFromHeaders(hdrStr string) (string, string) {
	if len(hdrStr) == 0 {
		return "", ""
	}
	if hdrStr[0] == '{' {
		var headers map[string]string
		if err := json.Unmarshal([]byte(hdrStr), &headers); err != nil || len(headers) == 0 {
			return hdrStr, ""
		}
		var reqID string
		for k, v := range headers {
			if strings.EqualFold(k, "x-goog-spanner-request-id") {
				reqID = v
				delete(headers, k)
			}
		}
		if reqID == "" {
			return hdrStr, ""
		}
		if len(headers) == 0 {
			return "", reqID
		}
		b, err := json.Marshal(headers)
		if err != nil {
			return hdrStr, reqID
		}
		return string(b), reqID
	}

	const prefix = "x-goog-spanner-request-id:"
	idx := strings.Index(hdrStr, prefix)
	for idx >= 0 {
		if idx == 0 || hdrStr[idx-1] == '\n' {
			valStart := idx + len(prefix)
			nl := strings.IndexByte(hdrStr[valStart:], '\n')
			if nl == -1 {
				reqID := hdrStr[valStart:]
				staticStr := hdrStr[:idx]
				if len(staticStr) > 0 && staticStr[len(staticStr)-1] == '\n' {
					staticStr = staticStr[:len(staticStr)-1]
				}
				return staticStr, reqID
			}
			reqID := hdrStr[valStart : valStart+nl]
			staticStr := hdrStr[:idx] + hdrStr[valStart+nl+1:]
			return staticStr, reqID
		}
		next := strings.Index(hdrStr[idx+len(prefix):], prefix)
		if next < 0 {
			break
		}
		idx = idx + len(prefix) + next
	}
	return hdrStr, ""
}

// resolveHeadersAndRequestID is the FFI 32-slot header cache. hdrStr may alias
// an EXECUTE payload buffer, so the static part is cloned before it is stored
// in the cache (the FFI gets a fresh copy from C.GoString instead).
func (se *serviceEntry) resolveHeadersAndRequestID(hdrStr string) (*cachedHeaderEntry, string) {
	if len(hdrStr) == 0 {
		return nil, ""
	}
	staticHdrStr, reqID := splitRequestIDFromHeaders(hdrStr)
	if len(staticHdrStr) == 0 {
		return &cachedHeaderEntry{}, reqID
	}
	slot := fnv32aStr(staticHdrStr) & (headerCacheSlots - 1)
	if cur := se.headerSlots[slot].Load(); cur != nil && cur.raw == staticHdrStr {
		return cur, reqID
	}
	staticHdrStr = strings.Clone(staticHdrStr)
	headers, pairs := parseHeaders(staticHdrStr)
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
		raw:            staticHdrStr,
		headers:        headers,
		headerPairs:    pairs,
		outgoingMD:     outMD,
		hasTraceparent: hasTrace,
	}
	se.headerSlots[slot].Store(entry)
	return entry, reqID
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

// outBatch is the sidecar equivalent of CSpannerBatch: the fixed header plus
// the 11 variable regions in wire order. Region slices may reference
// sharedcore-owned (recycled) memory and are only valid until the batch has
// been written.
type outBatch struct {
	hdr       batchHeader
	cells     []sharedcore.PackedCell // region 1
	arena     []byte                  // region 2
	metadata  []byte                  // region 3: ResultSetMetadata
	stats     []byte                  // region 4: ResultSetStats
	precommit []byte                  // region 5: MultiplexedSessionPrecommitToken
	retryInfo []byte                  // region 6: google.rpc.RetryInfo
	statusPB  []byte                  // region 7: google.rpc.Status
	errorMsg  string                  // region 8
	requestID string                  // region 9
	logs      []byte                  // region 10: JSON array
	trailers  []byte                  // region 11: JSON object
}

// reset clears b to the allocBatch() state (gfe/afe latency = -1).
func (b *outBatch) reset() {
	*b = outBatch{}
	b.hdr.gfeLatencyMs = -1
	b.hdr.afeLatencyMs = -1
}

// clearRowData drops everything populateSuccessBatchWithSkip sets while
// keeping logs and telemetry, so an oversized FINAL batch can be replaced by
// an error batch.
func (b *outBatch) clearRowData() {
	b.hdr.status = 0
	b.hdr.numRows = 0
	b.hdr.numCols = 0
	b.hdr.hasReadTimestamp = 0
	b.hdr.readTimestampNanos = 0
	b.hdr.readTimestampSec = 0
	b.hdr.schemaHash = 0
	b.cells = nil
	b.arena = nil
	b.metadata = nil
	b.stats = nil
	b.precommit = nil
}

func populateTelemetry(b *outBatch, tel *sharedcore.StreamTelemetry) {
	if tel == nil {
		return
	}
	if tel.HasGFELatency {
		b.hdr.gfeLatencyMs = tel.GFELatencyMs
	}
	if tel.HasAFELatency {
		b.hdr.afeLatencyMs = tel.AFELatencyMs
	}
	b.hdr.attemptCount = int32(tel.AttemptCount)
	if tel.DirectPathUsed {
		b.hdr.directPathUsed = 1
	}
	if tel.RequestID != "" && b.requestID == "" {
		b.requestID = tel.RequestID
	}
	if len(tel.ErrorTrailers) > 0 && len(b.trailers) == 0 {
		trailersMap := tel.ErrorTrailers
		for k := range trailersMap {
			if strings.HasSuffix(strings.ToLower(k), "-bin") {
				cloned := make(map[string][]string, len(trailersMap))
				for ck, cv := range trailersMap {
					if strings.HasSuffix(strings.ToLower(ck), "-bin") {
						enc := make([]string, len(cv))
						for i, raw := range cv {
							enc[i] = base64.StdEncoding.EncodeToString([]byte(raw))
						}
						cloned[ck] = enc
					} else {
						cloned[ck] = cv
					}
				}
				trailersMap = cloned
				break
			}
		}
		if bs, err := json.Marshal(trailersMap); err == nil && len(bs) > 0 {
			b.trailers = bs
		}
	}
}

func populateErrorBatch(b *outBatch, err error) {
	b.hdr.status = -1
	b.hdr.errorCode = int32(spanner.ErrCode(err))
	b.errorMsg = extractCleanErrorMessage(err)
	if retryPB := extractRetryInfoBytes(err); len(retryPB) > 0 {
		b.retryInfo = retryPB
	}
	if statusPB := extractStatusProtoBytes(err); len(statusPB) > 0 {
		b.statusPB = statusPB
	}
}

// extractCleanErrorMessage unwraps *spanner.Error or gRPC status so Node.js
// receives the canonical gRPC error description without a "spanner: code = ..." prefix
// or Go commit-specific suffixes.
func extractCleanErrorMessage(err error) string {
	var msg string
	for u := err; u != nil; u = errors.Unwrap(u) {
		if st, ok := status.FromError(u); ok && st.Message() != "" {
			msg = st.Message()
			break
		}
	}
	if msg == "" {
		var spErr *spanner.Error
		if errors.As(err, &spErr) && spErr.Desc != "" {
			msg = spErr.Desc
		}
	}
	if msg == "" {
		msg = err.Error()
		if idx := strings.Index(msg, `, desc = "`); idx != -1 && strings.HasSuffix(msg, `"`) {
			msg = msg[idx+len(`, desc = "`) : len(msg)-1]
		}
	}
	msg = strings.TrimSuffix(msg, ", transaction outcome unknown")
	if idx := strings.Index(msg, "rpc error: code = "); idx != -1 {
		if dIdx := strings.Index(msg[idx:], " desc = "); dIdx != -1 {
			msg = msg[idx+dIdx+len(" desc = "):]
		}
	}
	if msg == "context deadline exceeded" {
		msg = "Deadline exceeded"
	}
	return msg
}

func extractStatusProtoBytes(err error) []byte {
	for u := err; u != nil; u = errors.Unwrap(u) {
		if st, ok := status.FromError(u); ok {
			if p := st.Proto(); p != nil && len(p.Details) > 0 {
				if b, mErr := proto.Marshal(p); mErr == nil {
					return b
				}
			}
		}
	}
	return nil
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

func attachLogsToBatch(b *outBatch, logs []logRecord) {
	if len(logs) == 0 {
		return
	}
	bs, err := json.Marshal(logs)
	if err != nil || len(bs) == 0 {
		return
	}
	b.logs = bs
}

// populateSuccessBatchWithSkip mirrors the FFI function of the same name. The
// packed-cell path (always taken for Service.ExecuteStreamingSQL batches) is
// zero-copy: the cells and arena regions reference sb directly.
func populateSuccessBatchWithSkip(b *outBatch, sb *sharedcore.StreamBatch, skipMeta bool) {
	b.hdr.status = 0
	if !skipMeta || len(sb.MetadataBytes) > 0 {
		b.hdr.schemaHash = sb.SchemaHash
	}

	if sb.HasReadTimestamp {
		b.hdr.hasReadTimestamp = 1
		b.hdr.readTimestampSec = sb.ReadTimestampSec
		b.hdr.readTimestampNanos = sb.ReadTimestampNanos
	}
	if len(sb.MetadataBytes) > 0 {
		b.metadata = sb.MetadataBytes
	}
	if len(sb.StatsBytes) > 0 {
		b.stats = sb.StatsBytes
	}
	if len(sb.PrecommitTokenBytes) > 0 {
		b.precommit = sb.PrecommitTokenBytes
	}

	if len(sb.Cells) > 0 {
		b.hdr.numRows = int32(sb.NumRows)
		b.hdr.numCols = int32(sb.NumCols)
		b.cells = sb.Cells
		if len(sb.ArenaBytes) > 0 {
			b.arena = sb.ArenaBytes
		}
		return
	}

	// Legacy decoded-row path (sharedcore.StreamBatch.Rows).
	numRows := len(sb.Rows)
	if numRows == 0 {
		return
	}
	numCols := len(sb.Rows[0])
	b.hdr.numRows = int32(numRows)
	b.hdr.numCols = int32(numCols)
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

	cells := make([]sharedcore.PackedCell, totalCells)
	var arena []byte
	if totalBytes > 0 {
		arena = make([]byte, totalBytes)
	}
	nextCellIdx := numRows * numCols
	nextByteOff := 0
	for r := 0; r < numRows; r++ {
		row := sb.Rows[r]
		baseIdx := r * numCols
		for c := 0; c < numCols; c++ {
			encodeCellIntoArena(&row[c], baseIdx+c, cells, arena, &nextCellIdx, &nextByteOff)
		}
	}
	b.cells = cells
	b.arena = arena
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
	cells []sharedcore.PackedCell,
	arena []byte,
	nextCellIdx *int,
	nextByteOff *int,
) {
	cell := &cells[dstIdx]
	switch v.Kind {
	case sharedcore.KindNull:
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindNull)}

	case sharedcore.KindBool:
		var flag uint32
		if v.BoolVal {
			flag = 1
		}
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindBool), Flags: flag}

	case sharedcore.KindFloat64:
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindFloat64), NumBits: math.Float64bits(v.Float64Val)}

	case sharedcore.KindFloat32:
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindFloat32), NumBits: math.Float64bits(v.Float64Val)}

	case sharedcore.KindTimestamp:
		*cell = sharedcore.PackedCell{
			Kind:    int32(sharedcore.KindTimestamp),
			Flags:   uint32(v.NanoVal),
			NumBits: uint64(v.SecVal),
		}

	case sharedcore.KindString:
		n := len(v.StrVal)
		off := *nextByteOff
		if n > 0 {
			copy(arena[off:off+n], v.StrVal)
			*nextByteOff += n
		}
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindString), Offset: uint32(off), Len: uint32(n)}

	case sharedcore.KindBytes:
		n := len(v.BytesVal)
		off := *nextByteOff
		if n > 0 {
			copy(arena[off:off+n], v.BytesVal)
			*nextByteOff += n
		}
		*cell = sharedcore.PackedCell{Kind: int32(sharedcore.KindBytes), Offset: uint32(off), Len: uint32(n)}

	case sharedcore.KindArray, sharedcore.KindStruct:
		n := len(v.Children)
		childStart := *nextCellIdx
		*nextCellIdx += n
		*cell = sharedcore.PackedCell{Kind: int32(v.Kind), Offset: uint32(childStart), Len: uint32(n)}
		for i := 0; i < n; i++ {
			encodeCellIntoArena(&v.Children[i], childStart+i, cells, arena, nextCellIdx, nextByteOff)
		}
	}
}
