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

//go:build linux || darwin

package main

import (
	"bufio"
	"bytes"
	"encoding/base64"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"io"
	"math"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"reflect"
	"runtime"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"testing"
	"time"
	"unsafe"

	sppb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"cloud.google.com/go/spanner/sharedcore"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	spb "google.golang.org/genproto/googleapis/rpc/status"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/durationpb"
	proto3 "google.golang.org/protobuf/types/known/structpb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const testTimeout = 15 * time.Second

// ---------------------------------------------------------------------------
// Independent reference codec (written from IPC_PROTOCOL.md, not from the
// production encoder).
// ---------------------------------------------------------------------------

type wireFrameHeader struct {
	payloadLen uint32
	typ        uint8
	flags      uint8
	reserved   uint16
	id         uint64
}

func decodeFrameHeaderForTest(b []byte) wireFrameHeader {
	return wireFrameHeader{
		payloadLen: binary.LittleEndian.Uint32(b[0:4]),
		typ:        b[4],
		flags:      b[5],
		reserved:   binary.LittleEndian.Uint16(b[6:8]),
		id:         binary.LittleEndian.Uint64(b[8:16]),
	}
}

type wireBatch struct {
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

	cellBytes []byte
	cells     []sharedcore.PackedCell
	arena     []byte
	metadata  []byte
	stats     []byte
	precommit []byte
	retryInfo []byte
	statusPB  []byte
	errorMsg  string
	requestID string
	logs      string
	trailers  string
}

// decodeBatchForTest parses a BATCH payload and enforces every layout rule of
// IPC_PROTOCOL.md §5: 112-byte header, 11 regions in order, each starting at a
// multiple of 8, zero padding, NUL-terminated string regions, payload_len =
// 112 + Σ pad8(region), plus the receiver-side cell validation.
func decodeBatchForTest(t *testing.T, payload []byte) wireBatch {
	t.Helper()
	if len(payload) < 112 {
		t.Fatalf("BATCH payload is %d bytes, want >= 112", len(payload))
	}
	le := binary.LittleEndian
	i32 := func(off int) int32 { return int32(le.Uint32(payload[off:])) }
	u32 := func(off int) uint32 { return le.Uint32(payload[off:]) }
	wb := wireBatch{
		status:             i32(0),
		errorCode:          i32(4),
		numRows:            i32(8),
		numCols:            i32(12),
		totalCells:         i32(16),
		byteArenaLen:       i32(20),
		hasReadTimestamp:   i32(24),
		readTimestampNanos: i32(28),
		readTimestampSec:   int64(le.Uint64(payload[32:])),
		gfeLatencyMs:       math.Float64frombits(le.Uint64(payload[40:])),
		afeLatencyMs:       math.Float64frombits(le.Uint64(payload[48:])),
		attemptCount:       i32(56),
		directPathUsed:     i32(60),
		schemaHash:         u32(64),
	}
	errorMsgLen := int(u32(68))
	retryInfoLen := int(u32(72))
	metadataLen := int(u32(76))
	statsLen := int(u32(80))
	precommitLen := int(u32(84))
	logsLen := int(u32(88))
	requestIDLen := int(u32(92))
	statusLen := int(u32(96))
	trailersLen := int(u32(100))
	if u32(104) != 0 || u32(108) != 0 {
		t.Fatalf("reserved header words are not zero: %d %d", u32(104), u32(108))
	}
	if wb.totalCells < 0 || wb.byteArenaLen < 0 {
		t.Fatalf("negative total_cells %d / byte_arena_len %d", wb.totalCells, wb.byteArenaLen)
	}

	off := 112
	region := func(name string, n int, isString bool) []byte {
		t.Helper()
		if off%8 != 0 {
			t.Fatalf("region %s starts at unaligned offset %d", name, off)
		}
		if n == 0 {
			return nil
		}
		size := n
		if isString {
			size++ // NUL terminator, not counted in *_len
		}
		end := off + (size+7)/8*8
		if end > len(payload) {
			t.Fatalf("region %s [%d,%d) exceeds payload of %d bytes", name, off, end, len(payload))
		}
		data := payload[off : off+n]
		for i := off + n; i < end; i++ {
			if payload[i] != 0 {
				t.Fatalf("region %s: byte %d after data (NUL/padding) is 0x%02x, want 0", name, i-off, payload[i])
			}
		}
		off = end
		return data
	}
	wb.cellBytes = region("cells", int(wb.totalCells)*24, false)
	wb.arena = region("arena", int(wb.byteArenaLen), false)
	wb.metadata = region("metadata", metadataLen, false)
	wb.stats = region("stats", statsLen, false)
	wb.precommit = region("precommit", precommitLen, false)
	wb.retryInfo = region("retry_info", retryInfoLen, false)
	wb.statusPB = region("status", statusLen, false)
	wb.errorMsg = string(region("error_msg", errorMsgLen, true))
	wb.requestID = string(region("request_id", requestIDLen, true))
	wb.logs = string(region("logs", logsLen, true))
	wb.trailers = string(region("trailers", trailersLen, true))
	if off != len(payload) {
		t.Fatalf("payload_len %d != 112 + Σ pad8(region) = %d", len(payload), off)
	}

	wb.cells = make([]sharedcore.PackedCell, wb.totalCells)
	for i := range wb.cells {
		c := wb.cellBytes[i*24 : (i+1)*24]
		wb.cells[i] = sharedcore.PackedCell{
			Kind:    int32(le.Uint32(c[0:])),
			Flags:   le.Uint32(c[4:]),
			NumBits: le.Uint64(c[8:]),
			Offset:  le.Uint32(c[16:]),
			Len:     le.Uint32(c[20:]),
		}
	}
	for i, c := range wb.cells {
		switch sharedcore.ValueKind(c.Kind) {
		case sharedcore.KindString, sharedcore.KindBytes:
			if uint64(c.Offset)+uint64(c.Len) > uint64(wb.byteArenaLen) {
				t.Fatalf("cell %d: arena slice [%d,+%d) out of bounds (%d)", i, c.Offset, c.Len, wb.byteArenaLen)
			}
		case sharedcore.KindArray, sharedcore.KindStruct:
			if int(c.Offset) <= i || uint64(c.Offset)+uint64(c.Len) > uint64(wb.totalCells) {
				t.Fatalf("cell %d: child range [%d,+%d) invalid (total %d)", i, c.Offset, c.Len, wb.totalCells)
			}
		}
	}
	if int64(wb.numRows)*int64(wb.numCols) > int64(wb.totalCells) {
		t.Fatalf("num_rows*num_cols = %d exceeds total_cells %d", wb.numRows*wb.numCols, wb.totalCells)
	}
	return wb
}

type structVal []any
type nanVal struct{}
type tsVal struct {
	sec   int64
	nanos uint32
}

func cellValue(wb *wireBatch, idx int) any {
	c := wb.cells[idx]
	switch sharedcore.ValueKind(c.Kind) {
	case sharedcore.KindNull:
		return nil
	case sharedcore.KindBool:
		return c.Flags != 0
	case sharedcore.KindFloat64, sharedcore.KindFloat32:
		f := math.Float64frombits(c.NumBits)
		if math.IsNaN(f) {
			return nanVal{}
		}
		return f
	case sharedcore.KindString:
		return string(wb.arena[c.Offset : c.Offset+c.Len])
	case sharedcore.KindBytes:
		return append([]byte{}, wb.arena[c.Offset:c.Offset+c.Len]...)
	case sharedcore.KindTimestamp:
		return tsVal{sec: int64(c.NumBits), nanos: c.Flags}
	case sharedcore.KindArray:
		out := make([]any, c.Len)
		for i := range out {
			out[i] = cellValue(wb, int(c.Offset)+i)
		}
		return out
	case sharedcore.KindStruct:
		out := make(structVal, c.Len)
		for i := range out {
			out[i] = cellValue(wb, int(c.Offset)+i)
		}
		return out
	}
	return fmt.Sprintf("unknown kind %d", c.Kind)
}

func batchRows(wb *wireBatch) [][]any {
	rows := make([][]any, 0, wb.numRows)
	for r := 0; r < int(wb.numRows); r++ {
		row := make([]any, wb.numCols)
		for c := range row {
			row[c] = cellValue(wb, r*int(wb.numCols)+c)
		}
		rows = append(rows, row)
	}
	return rows
}

func encodeInitForTest(r initRequest) []byte {
	le := binary.LittleEndian
	var b []byte
	str := func(s string) {
		b = le.AppendUint32(b, uint32(len(s)))
		b = append(b, s...)
	}
	i32 := func(v int32) { b = le.AppendUint32(b, uint32(v)) }
	f64 := func(v float64) { b = le.AppendUint64(b, math.Float64bits(v)) }
	str(r.endpoint)
	i32(r.numChannels)
	i32(r.usePlaintext)
	i32(r.disableBuiltinAuth)
	i32(r.enableDirectAccess)
	str(r.userAgent)
	i32(r.dcpEnabled)
	i32(r.dcpInitialChannels)
	i32(r.dcpMinChannels)
	i32(r.dcpMaxChannels)
	f64(r.dcpMaxRPCPerChannel)
	f64(r.dcpMinRPCPerChannel)
	i32(r.dcpSelectionStrategy)
	str(r.universeDomain)
	return b
}

func encodeExecuteForTest(handle int64, timeoutMs, skip, batchRowSize int32, routingKey, headers string, request []byte) []byte {
	le := binary.LittleEndian
	b := make([]byte, 32, 32+len(routingKey)+len(headers)+len(request))
	le.PutUint64(b[0:], uint64(handle))
	le.PutUint32(b[8:], uint32(timeoutMs))
	le.PutUint32(b[12:], uint32(skip))
	le.PutUint32(b[16:], uint32(batchRowSize))
	le.PutUint32(b[20:], uint32(len(routingKey)))
	le.PutUint32(b[24:], uint32(len(headers)))
	le.PutUint32(b[28:], uint32(len(request)))
	b = append(b, routingKey...)
	b = append(b, headers...)
	b = append(b, request...)
	return b
}

// ---------------------------------------------------------------------------
// Shared fixtures: a result set with every cell kind, nested ARRAY/STRUCT.
// ---------------------------------------------------------------------------

func typedFields() []*sppb.StructType_Field {
	return []*sppb.StructType_Field{
		{Name: "id", Type: &sppb.Type{Code: sppb.TypeCode_INT64}},
		{Name: "name", Type: &sppb.Type{Code: sppb.TypeCode_STRING}},
		{Name: "score", Type: &sppb.Type{Code: sppb.TypeCode_FLOAT64}},
		{Name: "active", Type: &sppb.Type{Code: sppb.TypeCode_BOOL}},
		{Name: "data", Type: &sppb.Type{Code: sppb.TypeCode_BYTES}},
		{Name: "ts", Type: &sppb.Type{Code: sppb.TypeCode_TIMESTAMP}},
		{Name: "tags", Type: &sppb.Type{Code: sppb.TypeCode_ARRAY, ArrayElementType: &sppb.Type{Code: sppb.TypeCode_STRING}}},
		{Name: "info", Type: &sppb.Type{Code: sppb.TypeCode_STRUCT, StructType: &sppb.StructType{Fields: []*sppb.StructType_Field{
			{Name: "k", Type: &sppb.Type{Code: sppb.TypeCode_STRING}},
			{Name: "v", Type: &sppb.Type{Code: sppb.TypeCode_ARRAY, ArrayElementType: &sppb.Type{Code: sppb.TypeCode_FLOAT64}}},
		}}}},
		{Name: "missing", Type: &sppb.Type{Code: sppb.TypeCode_STRING}},
		{Name: "f32", Type: &sppb.Type{Code: sppb.TypeCode_FLOAT32}},
	}
}

func listValue(vs ...*proto3.Value) *proto3.Value {
	return proto3.NewListValue(&proto3.ListValue{Values: vs})
}

func typedRowValues() [][]*proto3.Value {
	return [][]*proto3.Value{
		{
			proto3.NewStringValue("1"),
			proto3.NewStringValue("hello"),
			proto3.NewNumberValue(1.5),
			proto3.NewBoolValue(true),
			proto3.NewStringValue(base64.StdEncoding.EncodeToString([]byte{0, 1, 0xff})),
			proto3.NewStringValue("2026-07-01T00:00:01.000000500Z"),
			listValue(proto3.NewStringValue("a"), proto3.NewNullValue(), proto3.NewStringValue("c")),
			listValue(proto3.NewStringValue("key1"), listValue(proto3.NewNumberValue(1.25), proto3.NewStringValue("NaN"))),
			proto3.NewNullValue(),
			proto3.NewNumberValue(0.5),
		},
		{
			proto3.NewStringValue("2"),
			proto3.NewStringValue("world"),
			proto3.NewStringValue("Infinity"),
			proto3.NewBoolValue(false),
			proto3.NewStringValue(""),
			proto3.NewStringValue("1970-01-01T00:00:00Z"),
			listValue(),
			listValue(proto3.NewStringValue("key2"), listValue()),
			proto3.NewNullValue(),
			proto3.NewStringValue("-Infinity"),
		},
	}
}

func typedRowsExpected() [][]any {
	ts := time.Date(2026, 7, 1, 0, 0, 1, 500, time.UTC)
	return [][]any{
		{"1", "hello", 1.5, true, []byte{0, 1, 0xff}, tsVal{ts.Unix(), 500}, []any{"a", nil, "c"}, structVal{"key1", []any{1.25, nanVal{}}}, nil, 0.5},
		{"2", "world", math.Inf(1), false, []byte{}, tsVal{0, 0}, []any{}, structVal{"key2", []any{}}, nil, math.Inf(-1)},
	}
}

// typedSpannerValues is typedRowValues decoded into the legacy Rows form.
func typedSpannerValues() [][]sharedcore.SpannerValue {
	ts := time.Date(2026, 7, 1, 0, 0, 1, 500, time.UTC)
	str := func(s string) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindString, StrVal: s}
	}
	f64 := func(f float64) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindFloat64, Float64Val: f}
	}
	f32 := func(f float64) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindFloat32, Float64Val: f}
	}
	boolean := func(b bool) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindBool, BoolVal: b}
	}
	byts := func(b []byte) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindBytes, BytesVal: b}
	}
	stamp := func(sec int64, nanos int32) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindTimestamp, SecVal: sec, NanoVal: nanos}
	}
	arr := func(kids ...sharedcore.SpannerValue) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindArray, Children: kids}
	}
	strct := func(kids ...sharedcore.SpannerValue) sharedcore.SpannerValue {
		return sharedcore.SpannerValue{Kind: sharedcore.KindStruct, Children: kids}
	}
	null := sharedcore.SpannerValue{Kind: sharedcore.KindNull}
	return [][]sharedcore.SpannerValue{
		{str("1"), str("hello"), f64(1.5), boolean(true), byts([]byte{0, 1, 0xff}), stamp(ts.Unix(), 500),
			arr(str("a"), null, str("c")), strct(str("key1"), arr(f64(1.25), f64(math.NaN()))), null, f32(0.5)},
		{str("2"), str("world"), f64(math.Inf(1)), boolean(false), byts([]byte{}), stamp(0, 0),
			arr(), strct(str("key2"), arr()), null, f32(math.Inf(-1))},
	}
}

// buildFrameForTest returns the exact bytes the batch writer would writev.
func buildFrameForTest(t *testing.T, w *streamWriter, id uint64, final bool) []byte {
	t.Helper()
	if err := w.build(id, final, maxPayloadLen); err != nil {
		t.Fatalf("build: %v", err)
	}
	if len(w.bufs) > maxBatchIovecs {
		t.Fatalf("frame uses %d iovecs, max %d", len(w.bufs), maxBatchIovecs)
	}
	var out []byte
	for _, b := range w.bufs {
		if len(b) == 0 {
			t.Fatalf("empty iovec in frame")
		}
		out = append(out, b...)
	}
	clear(w.slots[:])
	w.bufs = nil
	return out
}

func decodeFrameForTest(t *testing.T, frame []byte, wantID uint64, wantFinal bool) wireBatch {
	t.Helper()
	if len(frame) < 16 {
		t.Fatalf("frame is %d bytes", len(frame))
	}
	fh := decodeFrameHeaderForTest(frame)
	if fh.typ != 0x83 || fh.id != wantID || fh.reserved != 0 {
		t.Fatalf("frame header = %+v, want BATCH id %d", fh, wantID)
	}
	if got := fh.flags&0x01 != 0; got != wantFinal || fh.flags&^0x01 != 0 {
		t.Fatalf("frame flags = 0x%02x, want final=%v", fh.flags, wantFinal)
	}
	if int(fh.payloadLen) != len(frame)-16 {
		t.Fatalf("payload_len %d != %d bytes after header", fh.payloadLen, len(frame)-16)
	}
	return decodeBatchForTest(t, frame[16:])
}

// ---------------------------------------------------------------------------
// 1. Frame header and BATCH payload encoding.
// ---------------------------------------------------------------------------

func TestPackedCellLayout(t *testing.T) {
	if got := unsafe.Sizeof(sharedcore.PackedCell{}); got != 24 {
		t.Fatalf("sizeof(PackedCell) = %d, want 24", got)
	}
	cells := []sharedcore.PackedCell{
		{Kind: 3, Flags: 0xA1A2A3A4, NumBits: 0x0102030405060708, Offset: 0x11223344, Len: 0x55667788},
		{Kind: -1, Flags: 1, NumBits: math.Float64bits(math.Pi), Offset: 2, Len: 3},
	}
	want := []byte{
		3, 0, 0, 0, 0xA4, 0xA3, 0xA2, 0xA1, 8, 7, 6, 5, 4, 3, 2, 1, 0x44, 0x33, 0x22, 0x11, 0x88, 0x77, 0x66, 0x55,
	}
	var scratch []byte
	enc := encodeCellsLE(&scratch, cells)
	if !bytes.Equal(enc[:24], want) {
		t.Fatalf("encodeCellsLE = % x, want % x", enc[:24], want)
	}
	var scratch2 []byte
	if view := cellsWireBytes(cells, &scratch2); !bytes.Equal(view, enc) {
		t.Fatalf("cellsWireBytes = % x, want % x", view, enc)
	}
	if hostLittleEndian && len(scratch2) != 0 {
		t.Fatalf("little-endian host must not use the scratch buffer")
	}
}

func TestFrameHeaderRoundTrip(t *testing.T) {
	buf := make([]byte, frameHeaderSize)
	putFrameHeader(buf, 0x01020304, frameBatch, flagFinal, 0x1122334455667788)
	want := []byte{0x04, 0x03, 0x02, 0x01, 0x83, 0x01, 0, 0, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11}
	if !bytes.Equal(buf, want) {
		t.Fatalf("frame header = % x, want % x", buf, want)
	}
	fh := parseFrameHeader(want)
	if fh.payloadLen != 0x01020304 || fh.typ != frameBatch || fh.flags != flagFinal || fh.reserved != 0 || fh.id != 0x1122334455667788 {
		t.Fatalf("parseFrameHeader = %+v", fh)
	}
	ref := decodeFrameHeaderForTest(buf)
	if ref.payloadLen != fh.payloadLen || ref.typ != fh.typ || ref.flags != fh.flags || ref.id != fh.id {
		t.Fatalf("reference decode %+v != %+v", ref, fh)
	}
	// Frame type numbers are part of the contract.
	types := map[string][2]uint8{
		"READY": {frameReady, 0x01}, "INIT": {frameInit, 0x02}, "CLOSE_SERVICE": {frameCloseService, 0x03},
		"SET_ROOT_CERTS": {frameSetRootCerts, 0x04}, "EXECUTE": {frameExecute, 0x05}, "ACK": {frameAck, 0x06},
		"PAUSE": {framePause, 0x07}, "RESUME": {frameResume, 0x08}, "CANCEL": {frameCancel, 0x09},
		"STATS": {frameStats, 0x0A}, "PING": {framePing, 0x0B}, "SHUTDOWN": {frameShutdown, 0x0C},
		"INIT_RESULT": {frameInitResult, 0x81}, "CLOSE_RESULT": {frameCloseResult, 0x82}, "BATCH": {frameBatch, 0x83},
		"STATS_RESULT": {frameStatsResult, 0x84}, "PONG": {framePong, 0x85},
	}
	for name, v := range types {
		if v[0] != v[1] {
			t.Errorf("%s = 0x%02x, want 0x%02x", name, v[0], v[1])
		}
	}
}

func TestBatchEncodingSuccessRoundTrip(t *testing.T) {
	fields := typedFields()
	cells, arena, numRows, numCols := sharedcore.PackRowsIntoArena(typedRowValues(), fields)
	if len(cells) <= numRows*numCols {
		t.Fatalf("fixture must contain nested cells; got %d cells for %dx%d", len(cells), numRows, numCols)
	}
	metaBytes, _ := proto.Marshal(&sppb.ResultSetMetadata{
		RowType:     &sppb.StructType{Fields: fields},
		Transaction: &sppb.Transaction{Id: []byte("tx-1")},
	})
	statsBytes, _ := proto.Marshal(&sppb.ResultSetStats{RowCount: &sppb.ResultSetStats_RowCountExact{RowCountExact: 2}})
	precommitBytes, _ := proto.Marshal(&sppb.MultiplexedSessionPrecommitToken{PrecommitToken: []byte("pt"), SeqNum: 7})
	sb := sharedcore.StreamBatch{
		Cells:               cells,
		ArenaBytes:          arena,
		NumRows:             numRows,
		NumCols:             numCols,
		SchemaHash:          0xABCDEF,
		MetadataBytes:       metaBytes,
		StatsBytes:          statsBytes,
		PrecommitTokenBytes: precommitBytes,
		HasReadTimestamp:    true,
		ReadTimestampSec:    1700000000,
		ReadTimestampNanos:  123456789,
	}

	w := getStreamWriter()
	defer putStreamWriter(w)
	populateSuccessBatchWithSkip(&w.batch, &sb, false)
	wb := decodeFrameForTest(t, buildFrameForTest(t, w, 42, false), 42, false)

	if wb.status != 0 || wb.errorCode != 0 || wb.numRows != 2 || wb.numCols != 10 ||
		int(wb.totalCells) != len(cells) || int(wb.byteArenaLen) != len(arena) {
		t.Fatalf("unexpected header: %+v", wb)
	}
	if wb.hasReadTimestamp != 1 || wb.readTimestampSec != 1700000000 || wb.readTimestampNanos != 123456789 {
		t.Errorf("read timestamp = %d/%d/%d", wb.hasReadTimestamp, wb.readTimestampSec, wb.readTimestampNanos)
	}
	if wb.gfeLatencyMs != -1 || wb.afeLatencyMs != -1 || wb.attemptCount != 0 || wb.directPathUsed != 0 {
		t.Errorf("non-final batch must carry default telemetry, got gfe=%v afe=%v attempts=%d dp=%d",
			wb.gfeLatencyMs, wb.afeLatencyMs, wb.attemptCount, wb.directPathUsed)
	}
	if wb.schemaHash != 0xABCDEF {
		t.Errorf("schema_hash = %#x", wb.schemaHash)
	}
	if !reflect.DeepEqual(wb.cells, cells) {
		t.Errorf("cells mismatch:\n got %+v\nwant %+v", wb.cells, cells)
	}
	if !bytes.Equal(wb.arena, arena) || !bytes.Equal(wb.metadata, metaBytes) ||
		!bytes.Equal(wb.stats, statsBytes) || !bytes.Equal(wb.precommit, precommitBytes) {
		t.Errorf("binary region mismatch")
	}
	if wb.retryInfo != nil || wb.statusPB != nil || wb.errorMsg != "" || wb.requestID != "" || wb.logs != "" || wb.trailers != "" {
		t.Errorf("unexpected optional regions: %+v", wb)
	}
	if got, want := batchRows(&wb), typedRowsExpected(); !reflect.DeepEqual(got, want) {
		t.Errorf("rows mismatch:\n got %#v\nwant %#v", got, want)
	}

	// FINAL EOF batch with telemetry and logs.
	w.batch.reset()
	populateSuccessBatchWithSkip(&w.batch, &sb, false)
	attachLogsToBatch(&w.batch, []logRecord{{Level: "DEBUG", Message: `hello "log"`}, {Level: "INFO", Message: "two"}})
	populateTelemetry(&w.batch, &sharedcore.StreamTelemetry{
		GFELatencyMs:   12.5,
		HasGFELatency:  true,
		AFELatencyMs:   99, // ignored: HasAFELatency is false
		AttemptCount:   3,
		DirectPathUsed: true,
		RequestID:      "1.2.3.4.5.3",
	})
	w.batch.hdr.status = 1
	fin := decodeFrameForTest(t, buildFrameForTest(t, w, 43, true), 43, true)
	if fin.status != 1 || fin.gfeLatencyMs != 12.5 || fin.afeLatencyMs != -1 || fin.attemptCount != 3 || fin.directPathUsed != 1 {
		t.Errorf("final telemetry: %+v", fin)
	}
	if fin.requestID != "1.2.3.4.5.3" {
		t.Errorf("request_id = %q", fin.requestID)
	}
	var logs []logRecord
	if err := json.Unmarshal([]byte(fin.logs), &logs); err != nil || len(logs) != 2 || logs[0].Message != `hello "log"` || logs[1].Level != "INFO" {
		t.Errorf("logs = %q (%v)", fin.logs, err)
	}
	if !reflect.DeepEqual(batchRows(&fin), typedRowsExpected()) {
		t.Errorf("final batch rows mismatch")
	}
}

func TestBatchEncodingErrorRoundTrip(t *testing.T) {
	st, err := status.New(codes.Aborted, "Transaction was aborted.").WithDetails(
		&errdetails.RetryInfo{RetryDelay: durationpb.New(1500 * time.Millisecond)},
		&errdetails.ErrorInfo{Reason: "ABORTED", Domain: "spanner.googleapis.com"},
	)
	if err != nil {
		t.Fatal(err)
	}
	w := getStreamWriter()
	defer putStreamWriter(w)
	attachLogsToBatch(&w.batch, []logRecord{{Level: "WARN", Message: "retrying"}})
	populateTelemetry(&w.batch, &sharedcore.StreamTelemetry{
		AttemptCount: 2,
		RequestID:    "1.ab.1.1.9.2",
		ErrorTrailers: map[string][]string{
			"x-goog-trailer":          {"v1", "v2"},
			"grpc-status-details-bin": {"\x00\x01\x02"},
			"X-Mixed-Bin":             {"\xff"},
		},
	})
	populateErrorBatch(&w.batch, st.Err())
	wb := decodeFrameForTest(t, buildFrameForTest(t, w, 99, true), 99, true)

	if wb.status != -1 || wb.errorCode != int32(codes.Aborted) || wb.errorMsg != "Transaction was aborted." {
		t.Fatalf("error header: status=%d code=%d msg=%q", wb.status, wb.errorCode, wb.errorMsg)
	}
	if wb.totalCells != 0 || wb.numRows != 0 || len(wb.cellBytes) != 0 {
		t.Errorf("error batch must not carry rows")
	}
	if wb.gfeLatencyMs != -1 || wb.afeLatencyMs != -1 || wb.attemptCount != 2 || wb.requestID != "1.ab.1.1.9.2" {
		t.Errorf("telemetry: gfe=%v afe=%v attempts=%d request_id=%q", wb.gfeLatencyMs, wb.afeLatencyMs, wb.attemptCount, wb.requestID)
	}
	var ri errdetails.RetryInfo
	if err := proto.Unmarshal(wb.retryInfo, &ri); err != nil || ri.GetRetryDelay().AsDuration() != 1500*time.Millisecond {
		t.Errorf("retry_info = %v (%v)", &ri, err)
	}
	var sp spb.Status
	if err := proto.Unmarshal(wb.statusPB, &sp); err != nil || sp.GetCode() != int32(codes.Aborted) || len(sp.GetDetails()) != 2 {
		t.Errorf("status = %v (%v)", &sp, err)
	}
	var trailers map[string][]string
	if err := json.Unmarshal([]byte(wb.trailers), &trailers); err != nil {
		t.Fatalf("trailers JSON %q: %v", wb.trailers, err)
	}
	wantTrailers := map[string][]string{
		"x-goog-trailer":          {"v1", "v2"},
		"grpc-status-details-bin": {base64.StdEncoding.EncodeToString([]byte{0, 1, 2})},
		"X-Mixed-Bin":             {base64.StdEncoding.EncodeToString([]byte{0xff})},
	}
	if !reflect.DeepEqual(trailers, wantTrailers) {
		t.Errorf("trailers = %v, want %v", trailers, wantTrailers)
	}
	if wb.logs != `[{"level":"WARN","msg":"retrying"}]` {
		t.Errorf("logs = %q", wb.logs)
	}

	// Error batches carry gfe/afe when present, and panics map to INTERNAL.
	w.batch.reset()
	populateTelemetry(&w.batch, &sharedcore.StreamTelemetry{AFELatencyMs: 3.25, HasAFELatency: true, AttemptCount: 1})
	populateErrorBatch(&w.batch, status.Errorf(codes.Internal, "panic in ExecuteStreamingSQL goroutine: %v", "boom"))
	wb = decodeFrameForTest(t, buildFrameForTest(t, w, 100, true), 100, true)
	if wb.errorCode != int32(codes.Internal) || wb.errorMsg != "panic in ExecuteStreamingSQL goroutine: boom" ||
		wb.gfeLatencyMs != -1 || wb.afeLatencyMs != 3.25 || wb.retryInfo != nil || wb.statusPB != nil {
		t.Errorf("panic batch: %+v", wb)
	}
}

func TestBatchEncodingRowsPathMatchesPackedCells(t *testing.T) {
	cells, arena, numRows, numCols := sharedcore.PackRowsIntoArena(typedRowValues(), typedFields())
	w := getStreamWriter()
	defer putStreamWriter(w)
	populateSuccessBatchWithSkip(&w.batch, &sharedcore.StreamBatch{Cells: cells, ArenaBytes: arena, NumRows: numRows, NumCols: numCols}, false)
	packed := buildFrameForTest(t, w, 5, false)

	w.batch.reset()
	populateSuccessBatchWithSkip(&w.batch, &sharedcore.StreamBatch{Rows: typedSpannerValues()}, false)
	legacy := buildFrameForTest(t, w, 5, false)
	if !bytes.Equal(packed, legacy) {
		t.Fatalf("legacy Rows encoding differs from packed cells:\n packed % x\n legacy % x", packed, legacy)
	}
	wb := decodeFrameForTest(t, legacy, 5, false)
	if !reflect.DeepEqual(batchRows(&wb), typedRowsExpected()) {
		t.Fatalf("legacy rows mismatch")
	}
}

func TestBatchEncodingPaddingAndPopulationRules(t *testing.T) {
	w := getStreamWriter()
	defer putStreamWriter(w)

	// Header-only FINAL EOF batch.
	w.batch.hdr.status = 1
	frame := buildFrameForTest(t, w, 7, true)
	if len(frame) != 16+112 {
		t.Fatalf("empty batch frame is %d bytes, want 128", len(frame))
	}
	if wb := decodeFrameForTest(t, frame, 7, true); wb.status != 1 || wb.gfeLatencyMs != -1 || wb.afeLatencyMs != -1 {
		t.Fatalf("empty batch: %+v", wb)
	}

	// Every region length modulo 8, for strings and binary regions.
	for n := 0; n < 20; n++ {
		w.batch.reset()
		w.batch.hdr.status = -1
		w.batch.errorMsg = strings.Repeat("e", n)
		w.batch.requestID = strings.Repeat("r", (n+3)%11)
		w.batch.logs = bytes.Repeat([]byte("l"), n%9)
		w.batch.trailers = bytes.Repeat([]byte("t"), (n*7)%13)
		w.batch.metadata = bytes.Repeat([]byte{0xAA}, n%10)
		w.batch.stats = bytes.Repeat([]byte{0xBB}, (n+1)%10)
		w.batch.precommit = bytes.Repeat([]byte{0xCC}, (n+2)%10)
		w.batch.retryInfo = bytes.Repeat([]byte{0xDD}, (n+3)%10)
		w.batch.statusPB = bytes.Repeat([]byte{0xEE}, (n+4)%10)
		w.batch.arena = bytes.Repeat([]byte{0x11}, n)
		w.batch.cells = make([]sharedcore.PackedCell, n%3)
		for i := range w.batch.cells {
			w.batch.cells[i] = sharedcore.PackedCell{Kind: int32(sharedcore.KindString), Len: uint32(n)}
		}
		wb := decodeFrameForTest(t, buildFrameForTest(t, w, uint64(n), true), uint64(n), true)
		if wb.errorMsg != w.batch.errorMsg || wb.requestID != w.batch.requestID || wb.logs != string(w.batch.logs) ||
			wb.trailers != string(w.batch.trailers) || !bytes.Equal(wb.metadata, w.batch.metadata) ||
			!bytes.Equal(wb.stats, w.batch.stats) || !bytes.Equal(wb.precommit, w.batch.precommit) ||
			!bytes.Equal(wb.retryInfo, w.batch.retryInfo) || !bytes.Equal(wb.statusPB, w.batch.statusPB) ||
			!bytes.Equal(wb.arena, w.batch.arena) || len(wb.cells) != len(w.batch.cells) {
			t.Fatalf("n=%d: region round trip mismatch: %+v", n, wb)
		}
	}

	// schema_hash only when !SkipMetadata || len(metadata) > 0.
	for _, tc := range []struct {
		skipMeta bool
		meta     []byte
		want     uint32
	}{
		{false, nil, 0x123},
		{true, nil, 0},
		{true, []byte{1}, 0x123},
	} {
		w.batch.reset()
		populateSuccessBatchWithSkip(&w.batch, &sharedcore.StreamBatch{SchemaHash: 0x123, MetadataBytes: tc.meta}, tc.skipMeta)
		wb := decodeFrameForTest(t, buildFrameForTest(t, w, 1, false), 1, false)
		if wb.schemaHash != tc.want || wb.numRows != 0 || wb.numCols != 0 {
			t.Errorf("skipMeta=%v meta=%v: schema_hash=%#x rows=%d cols=%d", tc.skipMeta, tc.meta, wb.schemaHash, wb.numRows, wb.numCols)
		}
	}
}

// ---------------------------------------------------------------------------
// 2. INIT / EXECUTE payload parsing, request-id split, header cache.
// ---------------------------------------------------------------------------

func TestInitPayloadParse(t *testing.T) {
	want := initRequest{
		endpoint:             "spanner.googleapis.com:443",
		numChannels:          4,
		usePlaintext:         0,
		disableBuiltinAuth:   1,
		enableDirectAccess:   1,
		userAgent:            "gl-node/22.0.0 gccl/8.0.0",
		dcpEnabled:           1,
		dcpInitialChannels:   2,
		dcpMinChannels:       1,
		dcpMaxChannels:       10,
		dcpMaxRPCPerChannel:  100.5,
		dcpMinRPCPerChannel:  0.25,
		dcpSelectionStrategy: 1,
		universeDomain:       "example-universe.com",
	}
	p := encodeInitForTest(want)
	got, err := parseInitPayload(p)
	if err != nil || got != want {
		t.Fatalf("parseInitPayload = %+v, %v; want %+v", got, err, want)
	}
	empty, err := parseInitPayload(encodeInitForTest(initRequest{}))
	if err != nil || empty != (initRequest{}) {
		t.Fatalf("empty INIT = %+v, %v", empty, err)
	}
	for _, n := range []int{0, 3, 4, 10, len(p) - 1} {
		if _, err := parseInitPayload(p[:n]); err == nil {
			t.Errorf("truncated INIT (%d bytes) accepted", n)
		}
	}
	if _, err := parseInitPayload(append(append([]byte{}, p...), 0)); err == nil {
		t.Errorf("INIT with trailing bytes accepted")
	}
	huge := binary.LittleEndian.AppendUint32(nil, 0xFFFFFFFF)
	if _, err := parseInitPayload(huge); err == nil {
		t.Errorf("INIT with oversized string length accepted")
	}
}

func TestExecutePayloadParse(t *testing.T) {
	reqBytes := []byte{0x0a, 0x02, 's', '1', 0x12, 0x01, 'X'}
	hdrs := "authorization:Bearer t\nx-goog-spanner-request-id:1.2.3.4.5.1"
	skipBits := uint32(execSkipMetadata|execSkipReadTimestamp|execNonCancellable|execTelemetryEnabled) | uint32(0xABCDEF)<<execSchemaHashShift
	skip := int32(skipBits) // bits 8..31 make the i32 negative
	p := encodeExecuteForTest(-7, 30000, skip, 64, "projects/p/instances/i/databases/d/sessions/s", hdrs, reqBytes)
	got, err := parseExecutePayload(p)
	if err != nil {
		t.Fatal(err)
	}
	if got.serviceHandle != -7 || got.timeoutMs != 30000 || got.skipMetadata != skip || got.batchRowSize != 64 ||
		got.routingKey != "projects/p/instances/i/databases/d/sessions/s" || got.headers != hdrs || !bytes.Equal(got.request, reqBytes) {
		t.Fatalf("parseExecutePayload = %+v", got)
	}
	if uint32(got.skipMetadata)>>execSchemaHashShift != 0xABCDEF {
		t.Errorf("expected schema hash bits lost")
	}
	if cap(got.request) != len(got.request) {
		t.Errorf("request slice must be capacity-limited")
	}

	empty, err := parseExecutePayload(encodeExecuteForTest(1, 0, 0, 0, "", "", nil))
	if err != nil || empty.routingKey != "" || empty.headers != "" || empty.request != nil {
		t.Fatalf("empty EXECUTE = %+v, %v", empty, err)
	}
	if _, err := parseExecutePayload(p[:31]); err == nil {
		t.Errorf("short EXECUTE accepted")
	}
	if _, err := parseExecutePayload(p[:len(p)-1]); err == nil {
		t.Errorf("EXECUTE with inconsistent lengths accepted")
	}
	bad := append([]byte{}, p...)
	binary.LittleEndian.PutUint32(bad[28:], 0xFFFFFFFF)
	if _, err := parseExecutePayload(bad); err == nil {
		t.Errorf("EXECUTE with overflowing request_len accepted")
	}
}

func TestSplitRequestIDFromHeaders(t *testing.T) {
	for _, tc := range []struct {
		in, static, reqID string
	}{
		{"", "", ""},
		{"a:1\nb:2", "a:1\nb:2", ""},
		{"x-goog-spanner-request-id:1.2.3", "", "1.2.3"},
		{"x-goog-spanner-request-id:1.2.3\na:1", "a:1", "1.2.3"},
		{"a:1\nx-goog-spanner-request-id:1.2.3\nb:2", "a:1\nb:2", "1.2.3"},
		{"a:1\nx-goog-spanner-request-id:1.2.3", "a:1", "1.2.3"},
		{"a:x-goog-spanner-request-id:9\nb:2", "a:x-goog-spanner-request-id:9\nb:2", ""},
		{"a:x-goog-spanner-request-id:9\nx-goog-spanner-request-id:7", "a:x-goog-spanner-request-id:9", "7"},
		{`{"a":"1","X-Goog-Spanner-Request-Id":"4.5.6"}`, `{"a":"1"}`, "4.5.6"},
		{`{"x-goog-spanner-request-id":"4.5.6"}`, "", "4.5.6"},
		{`{"a":"1"}`, `{"a":"1"}`, ""},
		{`{not json`, `{not json`, ""},
	} {
		static, reqID := splitRequestIDFromHeaders(tc.in)
		if static != tc.static || reqID != tc.reqID {
			t.Errorf("split(%q) = (%q, %q), want (%q, %q)", tc.in, static, reqID, tc.static, tc.reqID)
		}
	}
}

func TestHeaderCache(t *testing.T) {
	se := &serviceEntry{}
	if e, id := se.resolveHeadersAndRequestID(""); e != nil || id != "" {
		t.Fatalf("empty headers = %v, %q", e, id)
	}

	// The request id is the last line, so the static part is a substring of
	// the payload buffer; the cache must store its own copy.
	const traceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
	payload := []byte("Authorization:Bearer tok\nTraceparent:" + traceparent + "\nx-goog-spanner-request-id:1.a.1.1.1.1")
	e1, id1 := se.resolveHeadersAndRequestID(bytesToString(payload))
	if id1 != "1.a.1.1.1.1" || e1 == nil || !e1.hasTraceparent {
		t.Fatalf("first resolve = %+v, %q", e1, id1)
	}
	if got := e1.outgoingMD.Get("authorization"); len(got) != 1 || got[0] != "Bearer tok" {
		t.Errorf("outgoing authorization = %v", got)
	}
	if got := e1.outgoingMD.Get("traceparent"); len(got) != 1 || got[0] != traceparent {
		t.Errorf("outgoing traceparent = %v", got)
	}
	if len(e1.outgoingMD.Get("x-goog-spanner-request-id")) != 0 {
		t.Errorf("request id must not be cached in outgoing metadata")
	}
	wantPairs := []string{"Authorization", "Bearer tok", "Traceparent", traceparent}
	if !reflect.DeepEqual(e1.headerPairs, wantPairs) {
		t.Errorf("header pairs = %q", e1.headerPairs)
	}
	rawBefore := strings.Clone(e1.raw)
	for i := range payload {
		payload[i] = 'z'
	}
	if e1.raw != rawBefore || !reflect.DeepEqual(e1.headerPairs, wantPairs) {
		t.Fatalf("cache entry aliases the payload buffer: %q %q", e1.raw, e1.headerPairs)
	}

	e2, id2 := se.resolveHeadersAndRequestID("Authorization:Bearer tok\nTraceparent:" + traceparent + "\nx-goog-spanner-request-id:1.a.1.1.2.1")
	if e2 != e1 || id2 != "1.a.1.1.2.1" {
		t.Fatalf("expected cache hit with new request id, got %p vs %p, %q", e2, e1, id2)
	}
	e3, id3 := se.resolveHeadersAndRequestID("x-goog-spanner-request-id:1.a.1.1.3.1\nAuthorization:Bearer tok\nTraceparent:" + traceparent)
	if e3 != e1 || id3 != "1.a.1.1.3.1" {
		t.Fatalf("request id position must not affect the cache key: %p vs %p, %q", e3, e1, id3)
	}

	noID := []byte("Authorization:Bearer other")
	e4, id4 := se.resolveHeadersAndRequestID(bytesToString(noID))
	if e4 == e1 || e4.hasTraceparent || id4 != "" {
		t.Fatalf("different headers must not hit the same entry")
	}
	copy(noID, "zzzzzzzzzzzzzz")
	if e4.raw != "Authorization:Bearer other" {
		t.Fatalf("cache entry aliases the payload buffer: %q", e4.raw)
	}

	only, id := se.resolveHeadersAndRequestID("x-goog-spanner-request-id:9.9")
	if only == nil || only.outgoingMD != nil || id != "9.9" {
		t.Fatalf("request-id-only headers = %+v, %q", only, id)
	}
	js, jsID := se.resolveHeadersAndRequestID(`{"Authorization":"Bearer j","x-goog-spanner-request-id":"3.3"}`)
	if jsID != "3.3" || js.headers["Authorization"] != "Bearer j" || js.headerPairs != nil || js.outgoingMD.Get("authorization")[0] != "Bearer j" {
		t.Fatalf("JSON headers = %+v, %q", js, jsID)
	}
}

// ---------------------------------------------------------------------------
// 3. End-to-end against an in-process fake Spanner gRPC server.
// ---------------------------------------------------------------------------

type fakeSpanner struct {
	sppb.UnimplementedSpannerServer
	mu      sync.Mutex
	headers []metadata.MD
}

func (f *fakeSpanner) allHeaders() []metadata.MD {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]metadata.MD(nil), f.headers...)
}

func twoColumnMetadata() *sppb.ResultSetMetadata {
	return &sppb.ResultSetMetadata{RowType: &sppb.StructType{Fields: []*sppb.StructType_Field{
		{Name: "id", Type: &sppb.Type{Code: sppb.TypeCode_INT64}},
		{Name: "label", Type: &sppb.Type{Code: sppb.TypeCode_STRING}},
	}}}
}

func manyRow(i int) []any { return []any{strconv.Itoa(i), fmt.Sprintf("row-%d", i)} }

func (f *fakeSpanner) ExecuteStreamingSql(req *sppb.ExecuteSqlRequest, stream sppb.Spanner_ExecuteStreamingSqlServer) error {
	if md, ok := metadata.FromIncomingContext(stream.Context()); ok {
		f.mu.Lock()
		f.headers = append(f.headers, md)
		f.mu.Unlock()
	}
	sql := req.GetSql()
	switch {
	case sql == "SELECT types":
		rows := typedRowValues()
		flat := append(append([]*proto3.Value{}, rows[0]...), rows[1]...)
		// "hello" is split across two PartialResultSets ("hel" + "lo").
		if err := stream.Send(&sppb.PartialResultSet{
			Metadata: &sppb.ResultSetMetadata{
				RowType:     &sppb.StructType{Fields: typedFields()},
				Transaction: &sppb.Transaction{Id: []byte("tx-e2e"), ReadTimestamp: timestamppb.New(time.Unix(1700000000, 42))},
			},
			Values:       []*proto3.Value{flat[0], proto3.NewStringValue("hel")},
			ChunkedValue: true,
		}); err != nil {
			return err
		}
		return stream.Send(&sppb.PartialResultSet{
			Values: append([]*proto3.Value{proto3.NewStringValue("lo")}, flat[2:]...),
			Stats:  &sppb.ResultSetStats{RowCount: &sppb.ResultSetStats_RowCountExact{RowCountExact: 2}},
			Last:   true,
		})
	case strings.HasPrefix(sql, "SELECT many "):
		n, err := strconv.Atoi(strings.TrimPrefix(sql, "SELECT many "))
		if err != nil || n <= 0 {
			return status.Error(codes.InvalidArgument, "bad row count")
		}
		for i := 0; i < n; i++ {
			prs := &sppb.PartialResultSet{
				Values:      []*proto3.Value{proto3.NewStringValue(strconv.Itoa(i)), proto3.NewStringValue(fmt.Sprintf("row-%d", i))},
				ResumeToken: []byte(fmt.Sprintf("rt-%d", i)),
				Last:        i == n-1,
			}
			if i == 0 {
				prs.Metadata = twoColumnMetadata()
			}
			if err := stream.Send(prs); err != nil {
				return err
			}
		}
		return nil
	case sql == "SELECT slow":
		if err := stream.Send(&sppb.PartialResultSet{
			Metadata:    twoColumnMetadata(),
			Values:      []*proto3.Value{proto3.NewStringValue("0"), proto3.NewStringValue("row-0")},
			ResumeToken: []byte("rt-0"),
		}); err != nil {
			return err
		}
		<-stream.Context().Done()
		return status.FromContextError(stream.Context().Err()).Err()
	case sql == "SELECT error":
		stream.SetTrailer(metadata.Pairs("x-test-trailer", "trailer-value", "x-test-bin", string([]byte{0, 1, 2, 250})))
		st, _ := status.New(codes.InvalidArgument, "Syntax error: Unexpected end of script").WithDetails(
			&errdetails.RetryInfo{RetryDelay: durationpb.New(1500 * time.Millisecond)})
		return st.Err()
	}
	return status.Errorf(codes.Unimplemented, "unexpected SQL %q", sql)
}

func startFakeSpanner(t *testing.T) (*fakeSpanner, string) {
	t.Helper()
	lis, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	gs := grpc.NewServer()
	fake := &fakeSpanner{}
	sppb.RegisterSpannerServer(gs, fake)
	go func() { _ = gs.Serve(lis) }()
	t.Cleanup(gs.Stop)
	return fake, lis.Addr().String()
}

func sqlRequest(t *testing.T, sql string) []byte {
	t.Helper()
	b, err := proto.Marshal(&sppb.ExecuteSqlRequest{Session: "projects/p/instances/i/databases/d/sessions/s1", Sql: sql})
	if err != nil {
		t.Fatal(err)
	}
	return b
}

type testFrame struct {
	typ     uint8
	flags   uint8
	id      uint64
	payload []byte
}

type testClient struct {
	t      *testing.T
	nc     net.Conn
	frames chan testFrame
	stash  []testFrame
	wmu    sync.Mutex
}

func newTestClient(t *testing.T, nc net.Conn) *testClient {
	tc := &testClient{t: t, nc: nc, frames: make(chan testFrame, 4096)}
	go func() {
		defer close(tc.frames)
		br := bufio.NewReader(nc)
		hdr := make([]byte, 16)
		for {
			if _, err := io.ReadFull(br, hdr); err != nil {
				return
			}
			fh := decodeFrameHeaderForTest(hdr)
			p := make([]byte, fh.payloadLen)
			if _, err := io.ReadFull(br, p); err != nil {
				return
			}
			tc.frames <- testFrame{typ: fh.typ, flags: fh.flags, id: fh.id, payload: p}
		}
	}()
	return tc
}

func (tc *testClient) send(typ uint8, id uint64, payload []byte) {
	tc.t.Helper()
	buf := make([]byte, 16+len(payload))
	binary.LittleEndian.PutUint32(buf[0:], uint32(len(payload)))
	buf[4] = typ
	binary.LittleEndian.PutUint64(buf[8:], id)
	copy(buf[16:], payload)
	tc.wmu.Lock()
	defer tc.wmu.Unlock()
	if _, err := tc.nc.Write(buf); err != nil {
		tc.t.Fatalf("send frame 0x%02x: %v", typ, err)
	}
}

// waitFrame returns the next frame matching pred; other frames are stashed.
// ok is false on timeout or EOF.
func (tc *testClient) waitFrame(timeout time.Duration, pred func(testFrame) bool) (testFrame, bool) {
	for i, f := range tc.stash {
		if pred(f) {
			tc.stash = append(tc.stash[:i], tc.stash[i+1:]...)
			return f, true
		}
	}
	timer := time.NewTimer(timeout)
	defer timer.Stop()
	for {
		select {
		case f, ok := <-tc.frames:
			if !ok {
				return testFrame{}, false
			}
			if pred(f) {
				return f, true
			}
			tc.stash = append(tc.stash, f)
		case <-timer.C:
			return testFrame{}, false
		}
	}
}

func (tc *testClient) mustFrame(what string, pred func(testFrame) bool) testFrame {
	tc.t.Helper()
	f, ok := tc.waitFrame(testTimeout, pred)
	if !ok {
		tc.t.Fatalf("timed out (or EOF) waiting for %s", what)
	}
	return f
}

func isBatchFor(id uint64) func(testFrame) bool {
	return func(f testFrame) bool { return f.typ == frameBatch && f.id == id }
}

func (tc *testClient) nextBatch(id uint64) (bool, wireBatch) {
	tc.t.Helper()
	f := tc.mustFrame(fmt.Sprintf("BATCH for stream %d", id), isBatchFor(id))
	if f.flags&^flagFinal != 0 {
		tc.t.Fatalf("unexpected BATCH flags 0x%02x", f.flags)
	}
	return f.flags&flagFinal != 0, decodeBatchForTest(tc.t, f.payload)
}

func (tc *testClient) expectNoBatch(id uint64, d time.Duration) {
	tc.t.Helper()
	if f, ok := tc.waitFrame(d, isBatchFor(id)); ok {
		tc.t.Fatalf("unexpected BATCH for stream %d (flags 0x%02x)", id, f.flags)
	}
}

// ping performs a PING/PONG round trip, which also flushes any frame that the
// sidecar wrote before replying.
func (tc *testClient) ping(id uint64) {
	tc.t.Helper()
	tc.send(framePing, id, nil)
	f := tc.mustFrame("PONG", func(f testFrame) bool { return f.typ == framePong && f.id == id })
	if len(f.payload) != 0 {
		tc.t.Fatalf("PONG payload is %d bytes", len(f.payload))
	}
}

// collectStream reads every batch of stream id until its FINAL batch and
// verifies that nothing else arrives for that stream afterwards.
func (tc *testClient) collectStream(id uint64, ack bool) []wireBatch {
	tc.t.Helper()
	var out []wireBatch
	for {
		final, wb := tc.nextBatch(id)
		out = append(out, wb)
		if final {
			break
		}
		if wb.status != 0 {
			tc.t.Fatalf("non-final batch with status %d", wb.status)
		}
		if ack {
			tc.send(frameAck, id, nil)
		}
	}
	tc.ping(id + 1_000_000)
	tc.expectNoBatch(id, 50*time.Millisecond)
	return out
}

func (tc *testClient) initService(reqID uint64, req initRequest) (int64, string) {
	tc.t.Helper()
	tc.send(frameInit, reqID, encodeInitForTest(req))
	f := tc.mustFrame("INIT_RESULT", func(f testFrame) bool { return f.typ == frameInitResult && f.id == reqID })
	if len(f.payload) < 12 {
		tc.t.Fatalf("INIT_RESULT payload is %d bytes", len(f.payload))
	}
	n := binary.LittleEndian.Uint32(f.payload[8:])
	if int(n) != len(f.payload)-12 {
		tc.t.Fatalf("INIT_RESULT error length %d != %d", n, len(f.payload)-12)
	}
	return int64(binary.LittleEndian.Uint64(f.payload)), string(f.payload[12:])
}

func (tc *testClient) closeService(reqID uint64, payload []byte) int32 {
	tc.t.Helper()
	tc.send(frameCloseService, reqID, payload)
	f := tc.mustFrame("CLOSE_RESULT", func(f testFrame) bool { return f.typ == frameCloseResult && f.id == reqID })
	if len(f.payload) != 4 {
		tc.t.Fatalf("CLOSE_RESULT payload is %d bytes", len(f.payload))
	}
	return int32(binary.LittleEndian.Uint32(f.payload))
}

func handlePayload(h int64) []byte { return binary.LittleEndian.AppendUint64(nil, uint64(h)) }

func socketPair(t testing.TB) (net.Conn, net.Conn) {
	t.Helper()
	fds, err := syscall.Socketpair(syscall.AF_UNIX, syscall.SOCK_STREAM, 0)
	if err != nil {
		t.Fatal(err)
	}
	a, err := fileConn(fds[0])
	if err != nil {
		t.Fatal(err)
	}
	b, err := fileConn(fds[1])
	if err != nil {
		t.Fatal(err)
	}
	return a, b
}

func expectReady(t *testing.T, tc *testClient) {
	t.Helper()
	f := tc.mustFrame("READY", func(f testFrame) bool { return true })
	if f.typ != frameReady || f.id != 0 || f.flags != 0 || len(f.payload) != 16 {
		t.Fatalf("first frame = type 0x%02x id %d flags %d len %d, want READY", f.typ, f.id, f.flags, len(f.payload))
	}
	le := binary.LittleEndian
	if v, pid := le.Uint32(f.payload[0:]), le.Uint32(f.payload[4:]); v != 1 || pid != uint32(os.Getpid()) {
		t.Fatalf("READY version=%d pid=%d", v, pid)
	}
	if procs, cpus := le.Uint32(f.payload[8:]), le.Uint32(f.payload[12:]); procs != uint32(runtime.GOMAXPROCS(0)) || cpus != uint32(runtime.NumCPU()) {
		t.Fatalf("READY gomaxprocs=%d num_cpu=%d", procs, cpus)
	}
}

// connect serves one end of a socketpair (exactly like an inherited --fds
// connection) and returns a client for the other end.
func connect(t *testing.T, srv *server, inherited bool) (*testClient, net.Conn) {
	t.Helper()
	serverEnd, clientEnd := socketPair(t)
	if inherited {
		srv.serveInherited([]net.Conn{serverEnd})
	} else {
		srv.serveConn(serverEnd, false)
	}
	tc := newTestClient(t, clientEnd)
	t.Cleanup(func() { _ = clientEnd.Close() })
	expectReady(t, tc)
	return tc, clientEnd
}

func newTestServer(t *testing.T, opts serverOptions) *server {
	t.Helper()
	if opts.drainTimeout == 0 {
		opts.drainTimeout = 500 * time.Millisecond
	}
	// Server goroutines may outlive the test, so never call t.Log from them.
	var (
		logMu sync.Mutex
		logs  []string
	)
	opts.warnf = func(format string, args ...any) {
		logMu.Lock()
		logs = append(logs, fmt.Sprintf(format, args...))
		logMu.Unlock()
	}
	srv := newServer(opts)
	t.Cleanup(func() {
		srv.shutdown(0)
		if t.Failed() {
			logMu.Lock()
			for _, l := range logs {
				t.Log("sidecar: " + l)
			}
			logMu.Unlock()
		}
	})
	return srv
}

type e2eEnv struct {
	fake   *fakeSpanner
	addr   string
	srv    *server
	tc     *testClient
	handle int64
}

func newE2E(t *testing.T) *e2eEnv {
	t.Helper()
	return newE2EWithOptions(t, serverOptions{})
}

func newE2EWithOptions(t *testing.T, opts serverOptions) *e2eEnv {
	t.Helper()
	fake, addr := startFakeSpanner(t)
	srv := newTestServer(t, opts)
	tc, _ := connect(t, srv, false)
	handle, errMsg := tc.initService(1, initRequest{endpoint: addr, numChannels: 1, usePlaintext: 1, disableBuiltinAuth: 1, userAgent: "ipc-test/1.0"})
	if handle <= 0 || errMsg != "" {
		t.Fatalf("INIT = %d, %q", handle, errMsg)
	}
	return &e2eEnv{fake: fake, addr: addr, srv: srv, tc: tc, handle: handle}
}

func concatRows(batches []wireBatch) [][]any {
	var rows [][]any
	for i := range batches {
		rows = append(rows, batchRows(&batches[i])...)
	}
	return rows
}

func TestE2EExecuteTypedRows(t *testing.T) {
	env := newE2E(t)
	for _, mode := range []struct {
		name string
		skip int32
	}{
		{"nonCancellable", execNonCancellable | execTelemetryEnabled},
		{"cancellable", execTelemetryEnabled},
	} {
		t.Run(mode.name, func(t *testing.T) {
			id := uint64(100 + mode.skip)
			env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, mode.skip, 0, "", "", sqlRequest(t, "SELECT types")))
			batches := env.tc.collectStream(id, true)
			fin := batches[len(batches)-1]
			if fin.status != 1 || fin.errorCode != 0 {
				t.Fatalf("FINAL status=%d code=%d msg=%q", fin.status, fin.errorCode, fin.errorMsg)
			}
			if got := concatRows(batches); !reflect.DeepEqual(got, typedRowsExpected()) {
				t.Fatalf("rows mismatch:\n got %#v\nwant %#v", got, typedRowsExpected())
			}
			var meta sppb.ResultSetMetadata
			if err := proto.Unmarshal(batches[0].metadata, &meta); err != nil || len(meta.GetRowType().GetFields()) != 10 {
				t.Errorf("first batch metadata: %v (%v)", &meta, err)
			}
			if batches[0].schemaHash == 0 || batches[0].hasReadTimestamp != 1 ||
				batches[0].readTimestampSec != 1700000000 || batches[0].readTimestampNanos != 42 {
				t.Errorf("first batch: schema_hash=%#x read_ts=%d/%d/%d", batches[0].schemaHash,
					batches[0].hasReadTimestamp, batches[0].readTimestampSec, batches[0].readTimestampNanos)
			}
			var stats sppb.ResultSetStats
			if err := proto.Unmarshal(fin.stats, &stats); err != nil || stats.GetRowCountExact() != 2 {
				t.Errorf("final stats: %v (%v)", &stats, err)
			}
			if fin.attemptCount != 1 || fin.gfeLatencyMs != -1 || fin.afeLatencyMs != -1 {
				t.Errorf("final telemetry: attempts=%d gfe=%v afe=%v", fin.attemptCount, fin.gfeLatencyMs, fin.afeLatencyMs)
			}
		})
	}
}

func TestE2ENonCancellableHasNoFlowControl(t *testing.T) {
	env := newE2E(t)
	const id = 200
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, execNonCancellable, 2, "", "", sqlRequest(t, "SELECT many 40")))
	batches := env.tc.collectStream(id, false) // never ACKs
	if len(batches) < 3 {
		t.Fatalf("expected many batches without ACKs, got %d", len(batches))
	}
	rows := concatRows(batches)
	if len(rows) != 40 {
		t.Fatalf("got %d rows, want 40", len(rows))
	}
	for i, r := range rows {
		if !reflect.DeepEqual(r, manyRow(i)) {
			t.Fatalf("row %d = %v", i, r)
		}
	}
	if fin := batches[len(batches)-1]; fin.status != 1 {
		t.Fatalf("FINAL status %d", fin.status)
	}
}

func TestE2ECancellableFlowControl(t *testing.T) {
	env := newE2E(t)
	const id = 300
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, execTelemetryEnabled, 2, "", "", sqlRequest(t, "SELECT many 40")))

	rows := 0
	for i := 0; i < 2; i++ {
		final, wb := env.tc.nextBatch(id)
		if final {
			t.Fatalf("batch %d is FINAL", i)
		}
		rows += int(wb.numRows)
	}
	// Two un-ACKed batches are in flight: the sidecar must hold the third.
	env.tc.expectNoBatch(id, 300*time.Millisecond)

	// While paused, ACKs must not release more batches.
	env.tc.send(framePause, id, nil)
	env.tc.send(frameAck, id, nil)
	env.tc.send(frameAck, id, nil)
	env.tc.expectNoBatch(id, 300*time.Millisecond)

	env.tc.send(frameResume, id, nil)
	outstanding := 0
	finals := 0
	for finals == 0 {
		final, wb := env.tc.nextBatch(id)
		rows += int(wb.numRows)
		if final {
			finals++
			if wb.status != 1 || wb.attemptCount != 1 {
				t.Fatalf("FINAL status=%d attempts=%d msg=%q", wb.status, wb.attemptCount, wb.errorMsg)
			}
			break
		}
		outstanding++
		if outstanding > 2 {
			t.Fatalf("more than 2 un-ACKed batches in flight")
		}
		// ACK immediately; outstanding drops back.
		env.tc.send(frameAck, id, nil)
		outstanding--
	}
	if rows != 40 {
		t.Fatalf("got %d rows, want 40", rows)
	}
	env.tc.ping(9001)
	env.tc.expectNoBatch(id, 50*time.Millisecond)
}

func TestE2ECancel(t *testing.T) {
	env := newE2E(t)
	const id = 400
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, 0, 0, "", "", sqlRequest(t, "SELECT slow")))
	final, wb := env.tc.nextBatch(id)
	if final || wb.numRows != 1 {
		t.Fatalf("first batch final=%v rows=%d", final, wb.numRows)
	}
	env.tc.send(frameCancel, id, nil)
	final, wb = env.tc.nextBatch(id)
	if !final || wb.status >= 0 || wb.errorCode != int32(codes.Canceled) {
		t.Fatalf("after CANCEL: final=%v status=%d code=%d msg=%q", final, wb.status, wb.errorCode, wb.errorMsg)
	}
	// Control frames for a finished stream are ignored.
	env.tc.send(frameCancel, id, nil)
	env.tc.send(frameAck, id, nil)
	env.tc.ping(9002)
	env.tc.expectNoBatch(id, 100*time.Millisecond)
}

func TestE2ECancelAbandonsNonCancellableStream(t *testing.T) {
	env := newE2E(t)
	const id = 550
	const total = 20000
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, execNonCancellable, 5, "", "", sqlRequest(t, fmt.Sprintf("SELECT many %d", total))))
	if final, _ := env.tc.nextBatch(id); final {
		t.Fatalf("first batch is FINAL")
	}
	// Like the FFI abandonedFlag: Node.js sends CANCEL when the JS callback
	// gives up on a nonCancellable (Database#run) stream, and the sidecar must
	// stop at the next batch instead of streaming the whole result.
	env.tc.send(frameCancel, id, nil)
	rows := 0
	for {
		final, wb := env.tc.nextBatch(id)
		rows += int(wb.numRows)
		if final {
			if wb.status >= 0 {
				t.Fatalf("FINAL status %d after CANCEL; want an error", wb.status)
			}
			break
		}
	}
	if rows >= total-5 {
		t.Fatalf("stream was not abandoned: received %d of %d rows", rows, total)
	}
	env.tc.ping(9004)
	env.tc.expectNoBatch(id, 50*time.Millisecond)
}

func TestE2ECancelWhileFlowBlocked(t *testing.T) {
	env := newE2E(t)
	const id = 500
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, 0, 2, "", "", sqlRequest(t, "SELECT many 40")))
	for i := 0; i < 2; i++ {
		if final, _ := env.tc.nextBatch(id); final {
			t.Fatalf("batch %d is FINAL", i)
		}
	}
	env.tc.expectNoBatch(id, 100*time.Millisecond)
	env.tc.send(frameCancel, id, nil)
	final, wb := env.tc.nextBatch(id)
	// Like FFI, a stream cancelled inside the flow-control wait reports the
	// raw context error (UNKNOWN); one cancelled inside gRPC reports CANCELLED.
	if !final || wb.status >= 0 || (wb.errorCode != int32(codes.Canceled) && wb.errorCode != int32(codes.Unknown)) ||
		!strings.Contains(wb.errorMsg, "cancel") {
		t.Fatalf("after CANCEL: final=%v status=%d code=%d msg=%q", final, wb.status, wb.errorCode, wb.errorMsg)
	}
	env.tc.ping(9003)
	env.tc.expectNoBatch(id, 100*time.Millisecond)
}

func TestE2EServerError(t *testing.T) {
	env := newE2E(t)
	const id = 600
	headers := "x-ipc-test:from-node\nx-goog-spanner-request-id:1.4e5f.1.1.1.1"
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, execTelemetryEnabled, 0, "", headers, sqlRequest(t, "SELECT error")))
	batches := env.tc.collectStream(id, true)
	if len(batches) != 1 {
		t.Fatalf("got %d batches, want only the FINAL error", len(batches))
	}
	wb := batches[0]
	if wb.status >= 0 || wb.errorCode != int32(codes.InvalidArgument) || wb.errorMsg != "Syntax error: Unexpected end of script" {
		t.Fatalf("error batch: status=%d code=%d msg=%q", wb.status, wb.errorCode, wb.errorMsg)
	}
	var ri errdetails.RetryInfo
	if err := proto.Unmarshal(wb.retryInfo, &ri); err != nil || ri.GetRetryDelay().AsDuration() != 1500*time.Millisecond {
		t.Errorf("retry_info = %v (%v)", &ri, err)
	}
	var sp spb.Status
	if err := proto.Unmarshal(wb.statusPB, &sp); err != nil || sp.GetCode() != int32(codes.InvalidArgument) || len(sp.GetDetails()) != 1 {
		t.Errorf("status = %v (%v)", &sp, err)
	}
	var trailers map[string][]string
	if err := json.Unmarshal([]byte(wb.trailers), &trailers); err != nil {
		t.Fatalf("trailers %q: %v", wb.trailers, err)
	}
	if got := trailers["x-test-trailer"]; len(got) != 1 || got[0] != "trailer-value" {
		t.Errorf("x-test-trailer = %v", got)
	}
	if got := trailers["x-test-bin"]; len(got) != 1 || got[0] != base64.StdEncoding.EncodeToString([]byte{0, 1, 2, 250}) {
		t.Errorf("x-test-bin = %v", got)
	}
	if wb.requestID != "1.4e5f.1.1.1.1" || wb.attemptCount != 1 {
		t.Errorf("request_id=%q attempts=%d", wb.requestID, wb.attemptCount)
	}

	hdrs := env.fake.allHeaders()
	last := hdrs[len(hdrs)-1]
	if got := last.Get("x-goog-spanner-request-id"); len(got) != 1 || got[0] != "1.4e5f.1.1.1.1" {
		t.Errorf("server saw x-goog-spanner-request-id %v", got)
	}
	if got := last.Get("x-ipc-test"); len(got) != 1 || got[0] != "from-node" {
		t.Errorf("server saw x-ipc-test %q", got)
	}
}

func TestE2EUnknownHandleAndMalformedExecute(t *testing.T) {
	env := newE2E(t)
	env.tc.send(frameExecute, 700, encodeExecuteForTest(424242, 0, 0, 0, "", "", sqlRequest(t, "SELECT types")))
	b := env.tc.collectStream(700, false)
	if len(b) != 1 || b[0].status != -1 || b[0].errorCode != int32(codes.FailedPrecondition) ||
		b[0].errorMsg != "invalid or closed SpannerCore service handle" {
		t.Fatalf("unknown handle: %+v", b)
	}
	if b[0].gfeLatencyMs != -1 || b[0].afeLatencyMs != -1 || b[0].attemptCount != 0 {
		t.Errorf("unknown handle telemetry: %+v", b[0])
	}

	env.tc.send(frameExecute, 701, []byte{1, 2, 3})
	b = env.tc.collectStream(701, false)
	if len(b) != 1 || b[0].status != -1 || b[0].errorCode != int32(codes.Internal) || !strings.HasPrefix(b[0].errorMsg, "malformed EXECUTE payload") {
		t.Fatalf("malformed EXECUTE: %+v", b)
	}
	// The connection survives both.
	env.tc.send(frameExecute, 702, encodeExecuteForTest(env.handle, 0, execNonCancellable, 0, "", "", sqlRequest(t, "SELECT types")))
	if b = env.tc.collectStream(702, false); b[len(b)-1].status != 1 {
		t.Fatalf("stream after errors failed: %+v", b[len(b)-1])
	}
}

func TestE2ECloseServiceRefcount(t *testing.T) {
	env := newE2E(t)
	tc := env.tc
	cfg := initRequest{endpoint: env.addr, numChannels: 1, usePlaintext: 1, disableBuiltinAuth: 1, userAgent: "ipc-test/1.0"}
	h2, errMsg := tc.initService(2, cfg)
	if h2 != env.handle || errMsg != "" {
		t.Fatalf("identical INIT returned %d (%q), want shared handle %d", h2, errMsg, env.handle)
	}
	other := cfg
	other.userAgent = "ipc-test/2.0"
	h3, _ := tc.initService(3, other)
	if h3 <= 0 || h3 == env.handle {
		t.Fatalf("different config returned handle %d", h3)
	}
	if n := env.srv.reg.count(); n != 2 {
		t.Fatalf("registry has %d services, want 2", n)
	}

	if rc := tc.closeService(10, handlePayload(env.handle)); rc != 0 {
		t.Fatalf("first CLOSE_SERVICE rc=%d", rc)
	}
	tc.send(frameExecute, 800, encodeExecuteForTest(env.handle, 0, execNonCancellable, 0, "", "", sqlRequest(t, "SELECT types")))
	if b := tc.collectStream(800, false); b[len(b)-1].status != 1 {
		t.Fatalf("service must survive while referenced: %+v", b[len(b)-1])
	}
	if rc := tc.closeService(11, handlePayload(env.handle)); rc != 0 {
		t.Fatalf("last CLOSE_SERVICE rc=%d", rc)
	}
	if rc := tc.closeService(12, handlePayload(env.handle)); rc != -1 {
		t.Fatalf("CLOSE_SERVICE on closed handle rc=%d, want -1", rc)
	}
	if rc := tc.closeService(13, []byte{1, 2, 3, 4}); rc != -1 {
		t.Fatalf("malformed CLOSE_SERVICE rc=%d, want -1", rc)
	}
	tc.send(frameExecute, 801, encodeExecuteForTest(env.handle, 0, 0, 0, "", "", sqlRequest(t, "SELECT types")))
	b := tc.collectStream(801, false)
	if len(b) != 1 || b[0].errorCode != int32(codes.FailedPrecondition) {
		t.Fatalf("EXECUTE on closed handle: %+v", b)
	}
	if rc := tc.closeService(14, handlePayload(h3)); rc != 0 {
		t.Fatalf("CLOSE_SERVICE h3 rc=%d", rc)
	}
	if n := env.srv.reg.count(); n != 0 {
		t.Fatalf("registry has %d services after closing all", n)
	}
	// A new INIT after the last close creates a fresh service.
	h4, _ := tc.initService(4, cfg)
	if h4 <= 0 || h4 == env.handle {
		t.Fatalf("re-INIT returned %d", h4)
	}

	// Malformed INIT and SET_ROOT_CERTS.
	tc.send(frameSetRootCerts, 0, []byte("# no certificates\n"))
	tc.send(frameInit, 5, []byte{1, 2, 3})
	f := tc.mustFrame("INIT_RESULT", func(f testFrame) bool { return f.typ == frameInitResult && f.id == 5 })
	if h := int64(binary.LittleEndian.Uint64(f.payload)); h > 0 || !strings.Contains(string(f.payload[12:]), "malformed INIT payload") {
		t.Fatalf("malformed INIT = %d %q", h, f.payload[12:])
	}
}

func TestE2EConcurrentStreams(t *testing.T) {
	env := newE2E(t)
	const n = 16
	type result struct {
		cancellable bool
		rows        [][]any
		finals      int
		status      int32
	}
	results := make(map[uint64]*result, n)
	for i := 0; i < n; i++ {
		id := uint64(1000 + i)
		r := &result{cancellable: i%2 == 1}
		results[id] = r
		if r.cancellable {
			env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, 0, 3, "", "", sqlRequest(t, "SELECT many 30")))
		} else {
			env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, execNonCancellable, 0, "", "", sqlRequest(t, "SELECT types")))
		}
	}
	for done := 0; done < n; {
		f := env.tc.mustFrame("BATCH", func(f testFrame) bool { return f.typ == frameBatch })
		r := results[f.id]
		if r == nil {
			t.Fatalf("BATCH for unknown stream %d", f.id)
		}
		if r.finals > 0 {
			t.Fatalf("stream %d: frame after FINAL", f.id)
		}
		wb := decodeBatchForTest(t, f.payload)
		r.rows = append(r.rows, batchRows(&wb)...)
		if f.flags&flagFinal != 0 {
			r.finals++
			r.status = wb.status
			done++
		} else if r.cancellable {
			env.tc.send(frameAck, f.id, nil)
		}
	}
	env.tc.ping(9004)
	if f, ok := env.tc.waitFrame(50*time.Millisecond, func(f testFrame) bool { return f.typ == frameBatch }); ok {
		t.Fatalf("unexpected BATCH for stream %d after all FINALs", f.id)
	}
	for id, r := range results {
		if r.finals != 1 || r.status != 1 {
			t.Errorf("stream %d: finals=%d status=%d", id, r.finals, r.status)
		}
		if r.cancellable {
			if len(r.rows) != 30 {
				t.Errorf("stream %d: %d rows", id, len(r.rows))
			}
			for i, row := range r.rows {
				if !reflect.DeepEqual(row, manyRow(i)) {
					t.Errorf("stream %d row %d = %v", id, i, row)
					break
				}
			}
		} else if !reflect.DeepEqual(r.rows, typedRowsExpected()) {
			t.Errorf("stream %d rows mismatch", id)
		}
	}
}

// TestE2EOversizedBatch lowers the payload_len limit to exercise the 1 GiB
// frame-cap path: a batch that cannot fit in one frame ends the stream with a
// single FINAL RESOURCE_EXHAUSTED error (no partial frame is ever written).
func TestE2EOversizedBatch(t *testing.T) {
	env := newE2EWithOptions(t, serverOptions{maxBatchPayload: 4096})
	// Non-final batch too large. nonCancellable streams only flush at
	// batch_row_size (no chunk-boundary flushes), so the first batch is
	// deterministically the 300-row one.
	env.tc.send(frameExecute, 1600, encodeExecuteForTest(env.handle, 0, execNonCancellable, 300, "", "", sqlRequest(t, "SELECT many 400")))
	batches := env.tc.collectStream(1600, false)
	fin := batches[len(batches)-1]
	if len(batches) != 1 || fin.status >= 0 || fin.errorCode != int32(codes.ResourceExhausted) || !strings.Contains(fin.errorMsg, "IPC frame limit") {
		t.Fatalf("oversized non-final batch: batches=%d status=%d code=%d msg=%q", len(batches), fin.status, fin.errorCode, fin.errorMsg)
	}
	// FINAL (IsLast) batch too large: replaced by an error FINAL that keeps
	// the telemetry.
	env.tc.send(frameExecute, 1601, encodeExecuteForTest(env.handle, 0, execNonCancellable|execTelemetryEnabled, 1000, "", "", sqlRequest(t, "SELECT many 400")))
	batches = env.tc.collectStream(1601, false)
	if len(batches) != 1 {
		t.Fatalf("got %d batches, want a single FINAL error", len(batches))
	}
	fin = batches[0]
	if fin.status >= 0 || fin.errorCode != int32(codes.ResourceExhausted) || fin.totalCells != 0 || fin.attemptCount != 1 {
		t.Fatalf("oversized final batch: status=%d code=%d cells=%d attempts=%d msg=%q",
			fin.status, fin.errorCode, fin.totalCells, fin.attemptCount, fin.errorMsg)
	}
	// Small results still work on the same connection.
	env.tc.send(frameExecute, 1602, encodeExecuteForTest(env.handle, 0, execNonCancellable, 0, "", "", sqlRequest(t, "SELECT many 3")))
	if b := env.tc.collectStream(1602, false); b[len(b)-1].status != 1 || len(concatRows(b)) != 3 {
		t.Fatalf("small stream after oversized batches failed")
	}
}

func TestE2EPingStatsShutdown(t *testing.T) {
	env := newE2E(t)
	env.tc.ping(77)
	env.tc.send(frameStats, 78, nil)
	f := env.tc.mustFrame("STATS_RESULT", func(f testFrame) bool { return f.typ == frameStatsResult && f.id == 78 })
	if len(f.payload) != 16*8 {
		t.Fatalf("STATS_RESULT payload is %d bytes", len(f.payload))
	}
	v := func(i int) uint64 { return binary.LittleEndian.Uint64(f.payload[i*8:]) }
	if v(0)+v(1) == 0 || v(2) == 0 || v(5) == 0 {
		t.Errorf("rusage/goroutines look empty: utime=%d stime=%d maxrss=%d goroutines=%d", v(0), v(1), v(2), v(5))
	}
	if v(6) != uint64(runtime.GOMAXPROCS(0)) || v(7) != uint64(runtime.NumCPU()) || v(8) != uint64(os.Getpid()) {
		t.Errorf("gomaxprocs=%d num_cpu=%d pid=%d", v(6), v(7), v(8))
	}
	if v(10) != 1 || v(11) == 0 || v(12) < v(11) {
		t.Errorf("services=%d heap_alloc=%d heap_sys=%d", v(10), v(11), v(12))
	}
	if runtime.GOOS == "linux" && (v(14) == 0 || v(14)/1024 > v(2)*2) {
		t.Errorf("rss_bytes=%d (maxrss_kb=%d)", v(14), v(2))
	}
	if v(15) != 0 {
		t.Errorf("reserved slot 15 = %d", v(15))
	}

	env.tc.send(frameShutdown, 0, nil)
	select {
	case code := <-env.srv.exitCh:
		if code != 0 {
			t.Fatalf("exit code %d", code)
		}
	case <-time.After(testTimeout):
		t.Fatalf("SHUTDOWN did not complete")
	}
	if _, ok := env.tc.waitFrame(testTimeout, func(testFrame) bool { return false }); ok {
		t.Fatalf("connection still open after SHUTDOWN")
	}
	if n := env.srv.reg.count(); n != 0 {
		t.Fatalf("%d services still registered after SHUTDOWN", n)
	}
}

func TestShutdownDeliversFinalForInFlightStreams(t *testing.T) {
	env := newE2E(t)
	const id = 1500
	env.tc.send(frameExecute, id, encodeExecuteForTest(env.handle, 0, 0, 0, "", "", sqlRequest(t, "SELECT slow")))
	if final, _ := env.tc.nextBatch(id); final {
		t.Fatalf("first batch is FINAL")
	}
	go env.srv.shutdown(0)
	final, wb := env.tc.nextBatch(id)
	if !final || wb.status >= 0 {
		t.Fatalf("in-flight stream at shutdown: final=%v status=%d", final, wb.status)
	}
	if code := <-env.srv.exitCh; code != 0 {
		t.Fatalf("exit code %d", code)
	}
}

func TestAllInheritedConnectionsEOFExits(t *testing.T) {
	srv := newTestServer(t, serverOptions{exitOnAllEOF: true})
	serverA, clientA := socketPair(t)
	serverB, clientB := socketPair(t)
	srv.serveInherited([]net.Conn{serverA, serverB})
	expectReady(t, newTestClient(t, clientA))
	expectReady(t, newTestClient(t, clientB))

	_ = clientA.Close()
	select {
	case code := <-srv.exitCh:
		t.Fatalf("exited (%d) while a connection is still open", code)
	case <-time.After(200 * time.Millisecond):
	}
	_ = clientB.Close()
	select {
	case code := <-srv.exitCh:
		if code != 0 {
			t.Fatalf("exit code %d", code)
		}
	case <-time.After(testTimeout):
		t.Fatalf("did not exit after all connections reached EOF")
	}
}

func TestUnknownFrameTypeClosesConnection(t *testing.T) {
	srv := newTestServer(t, serverOptions{exitOnAllEOF: true})
	other, _ := connect(t, srv, true) // keeps the sidecar alive
	tc, _ := connect(t, srv, true)
	tc.send(0x7F, 1, []byte("junk"))
	if _, ok := tc.waitFrame(testTimeout, func(testFrame) bool { return false }); ok {
		t.Fatalf("connection not closed after unknown frame type")
	}
	other.ping(5)
	select {
	case code := <-srv.exitCh:
		t.Fatalf("sidecar exited (%d) although another connection is open", code)
	default:
	}
}

func TestSocketMode(t *testing.T) {
	dir, err := os.MkdirTemp("", "sc") // short path: sun_path is limited to ~104 bytes
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { _ = os.RemoveAll(dir) })
	path := filepath.Join(dir, "s.sock")
	if err := os.WriteFile(path, nil, 0o600); err != nil { // stale regular file is not removed
		t.Fatal(err)
	}
	srv := newTestServer(t, serverOptions{})
	if err := srv.listen(path); err == nil {
		t.Fatalf("listen over a regular file must fail")
	}
	_ = os.Remove(path)
	if err := srv.listen(path); err != nil {
		t.Fatal(err)
	}
	if fi, err := os.Stat(path); err != nil || fi.Mode().Perm() != 0o600 {
		t.Fatalf("socket mode = %v (%v)", fi.Mode(), err)
	}
	for i := 0; i < 2; i++ { // EOF does not terminate the debug sidecar
		nc, err := net.Dial("unix", path)
		if err != nil {
			t.Fatal(err)
		}
		tc := newTestClient(t, nc)
		expectReady(t, tc)
		tc.ping(uint64(i))
		_ = nc.Close()
	}
	select {
	case code := <-srv.exitCh:
		t.Fatalf("socket mode exited (%d) on EOF", code)
	case <-time.After(100 * time.Millisecond):
	}
	srv.shutdown(0)
	if code := <-srv.exitCh; code != 0 {
		t.Fatalf("exit code %d", code)
	}
	if _, err := os.Stat(path); !os.IsNotExist(err) {
		t.Fatalf("socket file not removed on shutdown: %v", err)
	}
}

func TestWatchParent(t *testing.T) {
	child := exec.Command("sleep", "30")
	if err := child.Start(); err != nil {
		t.Skipf("cannot start child process: %v", err)
	}
	srv := newTestServer(t, serverOptions{})
	go watchParent(srv, child.Process.Pid, 20*time.Millisecond)
	select {
	case code := <-srv.exitCh:
		t.Fatalf("exited (%d) while the parent is alive", code)
	case <-time.After(150 * time.Millisecond):
	}
	_ = child.Process.Kill()
	_ = child.Wait()
	select {
	case code := <-srv.exitCh:
		if code != 0 {
			t.Fatalf("exit code %d", code)
		}
	case <-time.After(testTimeout):
		t.Fatalf("did not exit after the parent died")
	}
}

func TestRunFlags(t *testing.T) {
	var out, errOut bytes.Buffer
	if rc := run([]string{"--version"}, &out, &errOut); rc != 0 || out.String() != "1\n" {
		t.Fatalf("--version: rc=%d out=%q", rc, out.String())
	}
	for _, args := range [][]string{
		nil,
		{"--fds=3", "--socket=/tmp/x.sock"},
		{"--fds=abc"},
		{"--fds=3,3"},
		{"--fds=987654"},
		{"--bogus"},
		{"--fds=3", "extra"},
	} {
		errOut.Reset()
		if rc := run(args, &out, &errOut); rc != 2 {
			t.Errorf("run(%q) = %d, want 2 (stderr %q)", args, rc, errOut.String())
		}
	}
	if fds, err := parseFDs(" 3, 4 ,5"); err != nil || !reflect.DeepEqual(fds, []int{3, 4, 5}) {
		t.Errorf("parseFDs = %v, %v", fds, err)
	}
}

// BenchmarkWriteBatch measures the per-batch hot path (populate + one writev
// of a 128-row x 10-column batch over a socketpair). It must not allocate.
func BenchmarkWriteBatch(b *testing.B) {
	base := typedRowValues()
	raw := make([][]*proto3.Value, 0, 128)
	for len(raw) < 128 {
		raw = append(raw, base...)
	}
	cells, arena, numRows, numCols := sharedcore.PackRowsIntoArena(raw, typedFields())
	sb := sharedcore.StreamBatch{Cells: cells, ArenaBytes: arena, NumRows: numRows, NumCols: numCols, SchemaHash: 1}

	serverEnd, clientEnd := socketPair(b)
	defer clientEnd.Close()
	go func() { _, _ = io.Copy(io.Discard, clientEnd) }()
	srv := newServer(serverOptions{})
	c := &conn{srv: srv, nc: serverEnd, streams: make(map[uint64]*stream)}
	defer c.close()

	w := getStreamWriter()
	defer putStreamWriter(w)
	b.SetBytes(int64(frameHeaderSize + batchHeaderSize + len(cells)*cellSize + pad8(len(arena))))
	b.ReportAllocs()
	for b.Loop() {
		w.batch.reset()
		populateSuccessBatchWithSkip(&w.batch, &sb, false)
		attachLogsToBatch(&w.batch, nil)
		if err := c.writeBatch(w, 1, false); err != nil {
			b.Fatal(err)
		}
	}
}

// BenchmarkAckDispatch measures the reader-side cost of an ACK frame.
func BenchmarkAckDispatch(b *testing.B) {
	srv := newServer(serverOptions{})
	c := &conn{srv: srv, streams: make(map[uint64]*stream)}
	st := &stream{c: c, id: 9, flowCh: make(chan struct{}, 1)}
	c.addStream(st)
	frame := make([]byte, frameHeaderSize)
	putFrameHeader(frame, 0, frameAck, 0, 9)
	r := bytes.NewReader(nil)
	br := bufio.NewReaderSize(r, readBufferSize)
	hdr := make([]byte, frameHeaderSize)
	b.ReportAllocs()
	for b.Loop() {
		r.Reset(frame)
		br.Reset(r)
		if _, err := io.ReadFull(br, hdr); err != nil {
			b.Fatal(err)
		}
		st.inFlight.Store(1)
		if !c.dispatch(br, parseFrameHeader(hdr)) {
			b.Fatal("dispatch failed")
		}
		select {
		case <-st.flowCh:
		default:
		}
	}
}
