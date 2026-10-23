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

// Wire constants and payload codecs for the IPC transport (protocol v1).
// The contract is spanner-native/IPC_PROTOCOL.md; keep both in sync.

import (
	"encoding/binary"
	"fmt"
	"math"
	"unsafe"

	"cloud.google.com/go/spanner/sharedcore"
)

const (
	protocolVersion = 1

	frameHeaderSize = 16
	maxPayloadLen   = 1 << 30

	batchHeaderSize  = 112
	cellSize         = 24
	executeFixedSize = 32
	readyPayloadSize = 16
	statsFieldCount  = 16
)

// Frame types sent by Node.js to the sidecar.
const (
	frameInit         uint8 = 0x02
	frameCloseService uint8 = 0x03
	frameSetRootCerts uint8 = 0x04
	frameExecute      uint8 = 0x05
	frameAck          uint8 = 0x06
	framePause        uint8 = 0x07
	frameResume       uint8 = 0x08
	frameCancel       uint8 = 0x09
	frameStats        uint8 = 0x0A
	framePing         uint8 = 0x0B
	frameShutdown     uint8 = 0x0C
)

// Frame types sent by the sidecar to Node.js.
const (
	frameReady       uint8 = 0x01
	frameInitResult  uint8 = 0x81
	frameCloseResult uint8 = 0x82
	frameBatch       uint8 = 0x83
	frameStatsResult uint8 = 0x84
	framePong        uint8 = 0x85
)

// flagFinal marks the single FINAL BATCH frame of a stream.
const flagFinal uint8 = 0x01

// EXECUTE skip_metadata bits (identical to the FFI argument).
const (
	execSkipMetadata      = 1 << 0
	execSkipReadTimestamp = 1 << 1
	execNonCancellable    = 1 << 2
	execTelemetryEnabled  = 1 << 3
	execSchemaHashShift   = 8
)

// The cells region is a raw copy of []sharedcore.PackedCell memory, so its
// layout must be exactly the 24-byte CSpannerCell ABI. These declarations fail
// to compile if the size or any field offset drifts.
var (
	_ [unsafe.Sizeof(sharedcore.PackedCell{}) - cellSize]struct{}
	_ [cellSize - unsafe.Sizeof(sharedcore.PackedCell{})]struct{}
	_ [unsafe.Offsetof(sharedcore.PackedCell{}.Flags) - 4]struct{}
	_ [4 - unsafe.Offsetof(sharedcore.PackedCell{}.Flags)]struct{}
	_ [unsafe.Offsetof(sharedcore.PackedCell{}.NumBits) - 8]struct{}
	_ [8 - unsafe.Offsetof(sharedcore.PackedCell{}.NumBits)]struct{}
	_ [unsafe.Offsetof(sharedcore.PackedCell{}.Offset) - 16]struct{}
	_ [16 - unsafe.Offsetof(sharedcore.PackedCell{}.Offset)]struct{}
	_ [unsafe.Offsetof(sharedcore.PackedCell{}.Len) - 20]struct{}
	_ [20 - unsafe.Offsetof(sharedcore.PackedCell{}.Len)]struct{}
)

// hostLittleEndian reports whether PackedCell memory is already in wire byte
// order (true on every platform Node.js ships the native core for).
var hostLittleEndian = func() bool {
	x := uint16(1)
	return *(*byte)(unsafe.Pointer(&x)) == 1
}()

type frameHeader struct {
	payloadLen uint32
	typ        uint8
	flags      uint8
	reserved   uint16
	id         uint64
}

func putFrameHeader(dst []byte, payloadLen uint32, typ, flags uint8, id uint64) {
	_ = dst[frameHeaderSize-1]
	binary.LittleEndian.PutUint32(dst[0:], payloadLen)
	dst[4] = typ
	dst[5] = flags
	dst[6] = 0
	dst[7] = 0
	binary.LittleEndian.PutUint64(dst[8:], id)
}

func parseFrameHeader(src []byte) frameHeader {
	_ = src[frameHeaderSize-1]
	return frameHeader{
		payloadLen: binary.LittleEndian.Uint32(src[0:]),
		typ:        src[4],
		flags:      src[5],
		reserved:   binary.LittleEndian.Uint16(src[6:]),
		id:         binary.LittleEndian.Uint64(src[8:]),
	}
}

// pad8 rounds n up to the next multiple of 8.
func pad8(n int) int { return (n + 7) &^ 7 }

// bytesToString returns a string that aliases b. The caller guarantees that b
// is never modified afterwards (EXECUTE payload buffers are immutable).
func bytesToString(b []byte) string {
	if len(b) == 0 {
		return ""
	}
	return unsafe.String(unsafe.SliceData(b), len(b))
}

// stringBytes returns a read-only byte view of s (used only for writev).
func stringBytes(s string) []byte {
	if len(s) == 0 {
		return nil
	}
	return unsafe.Slice(unsafe.StringData(s), len(s))
}

// payloadReader decodes the little-endian scalar/string sequence used by the
// INIT payload. The first error is sticky.
type payloadReader struct {
	buf []byte
	off int
	err error
}

func (r *payloadReader) take(n int) []byte {
	if r.err != nil {
		return nil
	}
	if n < 0 || len(r.buf)-r.off < n {
		r.err = fmt.Errorf("truncated at offset %d (need %d bytes, have %d)", r.off, n, len(r.buf)-r.off)
		return nil
	}
	b := r.buf[r.off : r.off+n : r.off+n]
	r.off += n
	return b
}

func (r *payloadReader) u32() uint32 {
	if b := r.take(4); b != nil {
		return binary.LittleEndian.Uint32(b)
	}
	return 0
}

func (r *payloadReader) i32() int32 { return int32(r.u32()) }

func (r *payloadReader) u64() uint64 {
	if b := r.take(8); b != nil {
		return binary.LittleEndian.Uint64(b)
	}
	return 0
}

func (r *payloadReader) i64() int64 { return int64(r.u64()) }

func (r *payloadReader) f64() float64 { return math.Float64frombits(r.u64()) }

func (r *payloadReader) str() string {
	n := r.u32()
	if r.err != nil {
		return ""
	}
	return string(r.take(int(n)))
}

// finish returns the first decode error, or an error if bytes are left over.
func (r *payloadReader) finish() error {
	if r.err != nil {
		return r.err
	}
	if r.off != len(r.buf) {
		return fmt.Errorf("%d unexpected trailing bytes", len(r.buf)-r.off)
	}
	return nil
}

// initRequest mirrors the SpannerCoreInit arguments plus the universe domain.
type initRequest struct {
	endpoint             string
	numChannels          int32
	usePlaintext         int32
	disableBuiltinAuth   int32
	enableDirectAccess   int32
	userAgent            string
	dcpEnabled           int32
	dcpInitialChannels   int32
	dcpMinChannels       int32
	dcpMaxChannels       int32
	dcpMaxRPCPerChannel  float64
	dcpMinRPCPerChannel  float64
	dcpSelectionStrategy int32
	universeDomain       string
}

func parseInitPayload(p []byte) (initRequest, error) {
	r := payloadReader{buf: p}
	req := initRequest{
		endpoint:             r.str(),
		numChannels:          r.i32(),
		usePlaintext:         r.i32(),
		disableBuiltinAuth:   r.i32(),
		enableDirectAccess:   r.i32(),
		userAgent:            r.str(),
		dcpEnabled:           r.i32(),
		dcpInitialChannels:   r.i32(),
		dcpMinChannels:       r.i32(),
		dcpMaxChannels:       r.i32(),
		dcpMaxRPCPerChannel:  r.f64(),
		dcpMinRPCPerChannel:  r.f64(),
		dcpSelectionStrategy: r.i32(),
		universeDomain:       r.str(),
	}
	if err := r.finish(); err != nil {
		return initRequest{}, err
	}
	return req, nil
}

// executeRequest is a decoded EXECUTE payload. routingKey, headers and request
// alias the (immutable) payload buffer, which therefore stays alive for the
// whole stream; RequestBytes is re-read on retries/resumes.
type executeRequest struct {
	serviceHandle int64
	timeoutMs     int32
	skipMetadata  int32
	batchRowSize  int32
	routingKey    string
	headers       string
	request       []byte
}

func parseExecutePayload(p []byte) (executeRequest, error) {
	if len(p) < executeFixedSize {
		return executeRequest{}, fmt.Errorf("payload is %d bytes, need at least %d", len(p), executeFixedSize)
	}
	le := binary.LittleEndian
	rkLen := uint64(le.Uint32(p[20:]))
	hdrLen := uint64(le.Uint32(p[24:]))
	reqLen := uint64(le.Uint32(p[28:]))
	if executeFixedSize+rkLen+hdrLen+reqLen != uint64(len(p)) {
		return executeRequest{}, fmt.Errorf(
			"length mismatch: 32 + routing_key_len %d + headers_len %d + request_len %d != payload_len %d",
			rkLen, hdrLen, reqLen, len(p))
	}
	req := executeRequest{
		serviceHandle: int64(le.Uint64(p[0:])),
		timeoutMs:     int32(le.Uint32(p[8:])),
		skipMetadata:  int32(le.Uint32(p[12:])),
		batchRowSize:  int32(le.Uint32(p[16:])),
	}
	off := executeFixedSize
	req.routingKey = bytesToString(p[off : off+int(rkLen)])
	off += int(rkLen)
	req.headers = bytesToString(p[off : off+int(hdrLen)])
	off += int(hdrLen)
	if reqLen > 0 {
		req.request = p[off : off+int(reqLen) : off+int(reqLen)]
	}
	return req, nil
}

// batchHeader is the 112-byte fixed BATCH header (CSpannerBatch scalars).
type batchHeader struct {
	status             int32
	errorCode          int32
	numRows            int32
	numCols            int32
	totalCells         int32
	byteArenaLen       int32
	hasReadTimestamp   int32
	readTimestampNanos int32
	readTimestampSec   int64
	gfeLatencyMs       float64
	afeLatencyMs       float64
	attemptCount       int32
	directPathUsed     int32
	schemaHash         uint32
	errorMsgLen        uint32
	retryInfoLen       uint32
	metadataLen        uint32
	statsLen           uint32
	precommitLen       uint32
	logsLen            uint32
	requestIDLen       uint32
	statusLen          uint32
	trailersLen        uint32
}

func (h *batchHeader) encode(dst []byte) {
	_ = dst[batchHeaderSize-1]
	le := binary.LittleEndian
	le.PutUint32(dst[0:], uint32(h.status))
	le.PutUint32(dst[4:], uint32(h.errorCode))
	le.PutUint32(dst[8:], uint32(h.numRows))
	le.PutUint32(dst[12:], uint32(h.numCols))
	le.PutUint32(dst[16:], uint32(h.totalCells))
	le.PutUint32(dst[20:], uint32(h.byteArenaLen))
	le.PutUint32(dst[24:], uint32(h.hasReadTimestamp))
	le.PutUint32(dst[28:], uint32(h.readTimestampNanos))
	le.PutUint64(dst[32:], uint64(h.readTimestampSec))
	le.PutUint64(dst[40:], math.Float64bits(h.gfeLatencyMs))
	le.PutUint64(dst[48:], math.Float64bits(h.afeLatencyMs))
	le.PutUint32(dst[56:], uint32(h.attemptCount))
	le.PutUint32(dst[60:], uint32(h.directPathUsed))
	le.PutUint32(dst[64:], h.schemaHash)
	le.PutUint32(dst[68:], h.errorMsgLen)
	le.PutUint32(dst[72:], h.retryInfoLen)
	le.PutUint32(dst[76:], h.metadataLen)
	le.PutUint32(dst[80:], h.statsLen)
	le.PutUint32(dst[84:], h.precommitLen)
	le.PutUint32(dst[88:], h.logsLen)
	le.PutUint32(dst[92:], h.requestIDLen)
	le.PutUint32(dst[96:], h.statusLen)
	le.PutUint32(dst[100:], h.trailersLen)
	le.PutUint32(dst[104:], 0)
	le.PutUint32(dst[108:], 0)
}

// cellsWireBytes returns the cells region for cells. On little-endian hosts it
// is a zero-copy view of the PackedCell memory; otherwise the cells are
// re-encoded into *scratch.
func cellsWireBytes(cells []sharedcore.PackedCell, scratch *[]byte) []byte {
	if len(cells) == 0 {
		return nil
	}
	if hostLittleEndian {
		return unsafe.Slice((*byte)(unsafe.Pointer(unsafe.SliceData(cells))), len(cells)*cellSize)
	}
	return encodeCellsLE(scratch, cells)
}

func encodeCellsLE(scratch *[]byte, cells []sharedcore.PackedCell) []byte {
	need := len(cells) * cellSize
	buf := *scratch
	if cap(buf) < need {
		buf = make([]byte, need)
	}
	buf = buf[:need]
	le := binary.LittleEndian
	for i := range cells {
		c := &cells[i]
		b := buf[i*cellSize : (i+1)*cellSize]
		le.PutUint32(b[0:], uint32(c.Kind))
		le.PutUint32(b[4:], c.Flags)
		le.PutUint64(b[8:], c.NumBits)
		le.PutUint32(b[16:], c.Offset)
		le.PutUint32(b[20:], c.Len)
	}
	*scratch = buf
	return buf
}
