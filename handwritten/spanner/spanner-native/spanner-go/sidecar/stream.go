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

// Stream execution: the sidecar counterpart of the goroutine started by the
// FFI export SpannerCoreExecuteStreamingSqlAsync, plus the flow-control
// exports (pause/resume/ack/close) and the zero-copy BATCH frame writer.

import (
	"context"
	"fmt"
	"net"
	"sync"
	"sync/atomic"

	"cloud.google.com/go/spanner/sharedcore"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// batchTooLargeError ends a stream whose next batch cannot be represented in
// a single frame (payload_len is capped at 1 GiB).
type batchTooLargeError struct{ size, limit int }

func (e *batchTooLargeError) Error() string {
	return fmt.Sprintf("result batch of %d bytes exceeds the %d byte IPC frame limit; use a smaller batch row size", e.size, e.limit)
}

func (e *batchTooLargeError) GRPCStatus() *status.Status {
	return status.New(codes.ResourceExhausted, e.Error())
}

// isBatchTooLarge reports whether writeBatch rejected the batch because of its
// size (writeBatch returns that error unwrapped; a type assertion avoids the
// heap allocation errors.As would cost on every FINAL batch).
func isBatchTooLarge(err error) bool {
	_, ok := err.(*batchTooLargeError)
	return ok
}

// stream is one EXECUTE. Every stream is registered in its connection's
// stream map (keyed by the Node.js stream id) so that CANCEL can reach it.
// Cancellable streams carry the FFI flow-control state and a cancellable
// context; nonCancellable streams (Database#run / Snapshot#run fast path) use
// context.Background() and are stopped through the abandoned flag, exactly
// like the FFI abandonedFlag that the C++ side sets when JS gives up.
type stream struct {
	c   *conn
	id  uint64
	se  *serviceEntry
	req executeRequest

	nonCancellable bool
	ctx            context.Context
	cancel         context.CancelFunc
	abandoned      atomic.Bool

	inFlight atomic.Int32
	paused   atomic.Bool
	flowCh   chan struct{}
}

func (st *stream) signalFlow() {
	if st != nil && st.flowCh != nil {
		select {
		case st.flowCh <- struct{}{}:
		default:
		}
	}
}

func (st *stream) close() {
	if st != nil {
		st.abandoned.Store(true)
		st.paused.Store(false)
		if st.cancel != nil {
			st.cancel()
		}
		st.signalFlow()
	}
}

// maxBatchIovecs: frame+batch header, cells, then data+padding for the other
// 10 regions.
const maxBatchIovecs = 2 + 2*10

var zeroPad [8]byte

// streamWriter holds the per-stream scratch state for BATCH frames so that the
// hot path performs no allocations: the 128-byte header buffer, the iovec
// list for a single writev, and the reusable outBatch.
type streamWriter struct {
	hdr         [frameHeaderSize + batchHeaderSize]byte
	slots       [maxBatchIovecs][]byte
	bufs        net.Buffers
	batch       outBatch
	cellScratch []byte // big-endian hosts only
}

var streamWriterPool = sync.Pool{New: func() any { return new(streamWriter) }}

func getStreamWriter() *streamWriter {
	w := streamWriterPool.Get().(*streamWriter)
	w.batch.reset()
	return w
}

func putStreamWriter(w *streamWriter) {
	w.batch = outBatch{}
	clear(w.slots[:])
	w.bufs = nil
	if cap(w.cellScratch) > 1<<20 {
		w.cellScratch = nil
	}
	streamWriterPool.Put(w)
}

func strRegionSize(n int) int {
	if n == 0 {
		return 0
	}
	return pad8(n + 1)
}

func appendRegion(bufs net.Buffers, data []byte) net.Buffers {
	if len(data) == 0 {
		return bufs
	}
	bufs = append(bufs, data)
	if p := pad8(len(data)) - len(data); p > 0 {
		bufs = append(bufs, zeroPad[:p])
	}
	return bufs
}

// appendStringRegion appends a string region: the bytes, then the NUL
// terminator and the zero padding to the next multiple of 8 (1..8 bytes).
func appendStringRegion(bufs net.Buffers, data []byte) net.Buffers {
	if len(data) == 0 {
		return bufs
	}
	return append(bufs, data, zeroPad[:pad8(len(data)+1)-len(data)])
}

// build lays out w.batch as a BATCH frame in w.bufs, ready for one writev:
// [16-byte frame header + 112-byte batch header] [cells] [arena][pad] ...
// The length fields are derived from the region slices so the header always
// matches the payload. limit is the maximum payload_len (1 GiB).
func (w *streamWriter) build(id uint64, final bool, limit int) error {
	b := &w.batch
	cells := cellsWireBytes(b.cells, &w.cellScratch)
	size := batchHeaderSize + len(cells) +
		pad8(len(b.arena)) + pad8(len(b.metadata)) + pad8(len(b.stats)) +
		pad8(len(b.precommit)) + pad8(len(b.retryInfo)) + pad8(len(b.statusPB)) +
		strRegionSize(len(b.errorMsg)) + strRegionSize(len(b.requestID)) +
		strRegionSize(len(b.logs)) + strRegionSize(len(b.trailers))
	if size > limit {
		return &batchTooLargeError{size: size, limit: limit}
	}

	h := &b.hdr
	h.totalCells = int32(len(b.cells))
	h.byteArenaLen = int32(len(b.arena))
	h.errorMsgLen = uint32(len(b.errorMsg))
	h.retryInfoLen = uint32(len(b.retryInfo))
	h.metadataLen = uint32(len(b.metadata))
	h.statsLen = uint32(len(b.stats))
	h.precommitLen = uint32(len(b.precommit))
	h.logsLen = uint32(len(b.logs))
	h.requestIDLen = uint32(len(b.requestID))
	h.statusLen = uint32(len(b.statusPB))
	h.trailersLen = uint32(len(b.trailers))

	var flags uint8
	if final {
		flags = flagFinal
	}
	putFrameHeader(w.hdr[:frameHeaderSize], uint32(size), frameBatch, flags, id)
	h.encode(w.hdr[frameHeaderSize:])

	bufs := net.Buffers(w.slots[:0])
	bufs = append(bufs, w.hdr[:])
	if len(cells) > 0 {
		bufs = append(bufs, cells) // 24-byte cells: always 8-byte aligned
	}
	bufs = appendRegion(bufs, b.arena)
	bufs = appendRegion(bufs, b.metadata)
	bufs = appendRegion(bufs, b.stats)
	bufs = appendRegion(bufs, b.precommit)
	bufs = appendRegion(bufs, b.retryInfo)
	bufs = appendRegion(bufs, b.statusPB)
	bufs = appendStringRegion(bufs, stringBytes(b.errorMsg))
	bufs = appendStringRegion(bufs, stringBytes(b.requestID))
	bufs = appendStringRegion(bufs, b.logs)
	bufs = appendStringRegion(bufs, b.trailers)
	w.bufs = bufs
	return nil
}

// writeBatch writes w.batch as one BATCH frame with a single vectored write.
// The cells and arena are sent straight from sharedcore's buffers, so the
// write must complete before onBatch returns.
func (c *conn) writeBatch(w *streamWriter, id uint64, final bool) error {
	if c.dead.Load() {
		return errConnClosed
	}
	if err := w.build(id, final, c.srv.maxBatchPayload); err != nil {
		return err
	}
	c.writeMu.Lock()
	_, err := w.bufs.WriteTo(c.nc)
	c.writeMu.Unlock()
	clear(w.slots[:])
	w.bufs = nil
	if err != nil {
		c.fail(err)
		return err
	}
	return nil
}

// execute handles an EXECUTE frame on the reader goroutine. Everything here is
// O(1): parse the fixed header, resolve the service, register the stream (so
// that control frames that follow are never lost), then hand off to a
// goroutine.
func (c *conn) execute(id uint64, payload []byte) {
	srv := c.srv
	srv.activeStreams.Add(1)
	req, err := parseExecutePayload(payload)
	if err != nil {
		go c.failStream(id, status.Errorf(codes.Internal, "malformed EXECUTE payload: %v", err))
		return
	}
	if srv.shuttingDown.Load() {
		go c.failStream(id, status.Error(codes.Unavailable, "spanner-go-sidecar is shutting down"))
		return
	}
	se, ok := srv.reg.load(req.serviceHandle)
	if !ok {
		go c.failStream(id, status.Error(codes.FailedPrecondition, "invalid or closed SpannerCore service handle"))
		return
	}
	se.onRPCStart()

	st := &stream{
		c:              c,
		id:             id,
		se:             se,
		req:            req,
		nonCancellable: req.skipMetadata&execNonCancellable != 0,
	}
	if st.nonCancellable {
		st.ctx = context.Background()
	} else {
		st.ctx, st.cancel = context.WithCancel(context.Background())
		st.flowCh = make(chan struct{}, 1)
	}
	c.addStream(st)
	go st.run()
}

// failStream sends the single FINAL error batch of a stream that never started.
func (c *conn) failStream(id uint64, err error) {
	defer c.srv.activeStreams.Add(-1)
	w := getStreamWriter()
	defer putStreamWriter(w)
	populateErrorBatch(&w.batch, err)
	_ = c.writeBatch(w, id, true)
}

// run mirrors the goroutine of SpannerCoreExecuteStreamingSqlAsync. Exactly
// one FINAL batch is sent: EOF (status 1, possibly with the last rows) or an
// error (status < 0), including for cancelled streams and Go panics.
func (st *stream) run() {
	c, se := st.c, st.se
	w := getStreamWriter()
	var (
		finalSent bool
		started   bool
	)
	sendFinal := func() {
		if finalSent {
			return
		}
		finalSent = true
		if err := c.writeBatch(w, st.id, true); isBatchTooLarge(err) {
			w.batch.clearRowData()
			populateErrorBatch(&w.batch, err)
			_ = c.writeBatch(w, st.id, true)
		}
	}

	defer func() {
		r := recover()
		c.removeStream(st)
		if st.cancel != nil {
			st.cancel()
		}
		se.onRPCEnd()
		if r != nil && !finalSent {
			where := "SpannerCoreExecuteStreamingSqlAsync"
			if started {
				where = "ExecuteStreamingSQL goroutine"
			}
			w.batch.reset()
			populateErrorBatch(&w.batch, status.Errorf(codes.Internal, "panic in %s: %v", where, r))
			sendFinal()
		}
		putStreamWriter(w)
		c.srv.activeStreams.Add(-1)
	}()

	var (
		hdrEntry *cachedHeaderEntry
		reqID    string
	)
	if len(st.req.headers) > 0 {
		hdrEntry, reqID = se.resolveHeadersAndRequestID(st.req.headers)
	}
	skip := st.req.skipMetadata
	skipMeta := skip&execSkipMetadata != 0
	req := sharedcore.StreamRequest{
		RoutingKey:              st.req.routingKey,
		RequestID:               reqID,
		RequestBytes:            st.req.request,
		SkipMetadata:            skipMeta,
		SkipReadTimestamp:       skip&execSkipReadTimestamp != 0,
		SkipTelemetry:           skip&execTelemetryEnabled == 0,
		ExpectedSchemaHash:      uint32(skip) >> execSchemaHashShift,
		FlushOnChunkBoundary:    !st.nonCancellable,
		MaxUncheckpointedChunks: 10,
		ReuseArenaBuffers:       true,
		TimeoutMs:               int64(st.req.timeoutMs),
		HasTimeout:              st.req.timeoutMs != 0,
		BatchRowSize:            int(st.req.batchRowSize),
	}
	if hdrEntry != nil {
		req.Metadata = hdrEntry.headers
		req.MetadataPairs = hdrEntry.headerPairs
		req.OutgoingMD = hdrEntry.outgoingMD
		req.SkipTraceContext = !hdrEntry.hasTraceparent
	} else {
		req.SkipTraceContext = true
	}

	started = true
	tel, err := se.svc.ExecuteStreamingSQL(st.ctx, req, func(sb sharedcore.StreamBatch) error {
		// A dead connection or a CANCEL from Node.js (sent when the JS callback
		// gives up) is the IPC equivalent of the FFI abandoned flag.
		if c.dead.Load() || st.abandoned.Load() {
			if st.cancel != nil {
				st.cancel()
			}
			return context.Canceled
		}
		if err := st.ctx.Err(); err != nil {
			return err
		}
		if !sb.IsLast && !st.nonCancellable {
			for st.paused.Load() || st.inFlight.Load() >= 2 {
				if c.dead.Load() {
					st.close()
					return context.Canceled
				}
				select {
				case <-st.ctx.Done():
					return st.ctx.Err()
				case <-st.flowCh:
				}
			}
			if c.dead.Load() {
				st.close()
				return context.Canceled
			}
			st.inFlight.Add(1)
		}
		w.batch.reset()
		populateSuccessBatchWithSkip(&w.batch, &sb, skipMeta)
		attachLogsToBatch(&w.batch, se.drainLogs())
		if sb.IsLast {
			populateTelemetry(&w.batch, &sb.Telemetry)
			w.batch.hdr.status = 1 // EOF (plus any final rows/metadata/stats)
			sendFinal()
			return nil
		}
		if err := c.writeBatch(w, st.id, false); err != nil {
			if isBatchTooLarge(err) {
				return err
			}
			if st.cancel != nil {
				st.cancel()
			}
			return context.Canceled
		}
		if c.dead.Load() {
			if st.cancel != nil {
				st.cancel()
			}
			return context.Canceled
		}
		return nil
	})

	if finalSent {
		return
	}
	w.batch.reset()
	attachLogsToBatch(&w.batch, se.drainLogs())
	populateTelemetry(&w.batch, &tel)
	if err != nil {
		populateErrorBatch(&w.batch, err)
	} else {
		w.batch.hdr.status = 1 // EOF
	}
	sendFinal()
}

func (c *conn) addStream(st *stream) {
	c.streamsMu.Lock()
	closed := c.streamsClosed
	if !closed {
		c.streams[st.id] = st
	}
	c.streamsMu.Unlock()
	if closed {
		st.close()
	}
}

func (c *conn) removeStream(st *stream) {
	c.streamsMu.Lock()
	if c.streams[st.id] == st {
		delete(c.streams, st.id)
	}
	c.streamsMu.Unlock()
}

func (c *conn) lookupStream(id uint64) *stream {
	c.streamsMu.Lock()
	st := c.streams[id]
	c.streamsMu.Unlock()
	return st
}

// ackStream mirrors SpannerCoreAckBatch.
func (c *conn) ackStream(id uint64) {
	if st := c.lookupStream(id); st != nil {
		if st.inFlight.Add(-1) < 0 {
			st.inFlight.Store(0)
		}
		if !st.paused.Load() {
			st.signalFlow()
		}
	}
}

// pauseStream mirrors SpannerCorePauseStream.
func (c *conn) pauseStream(id uint64) {
	if st := c.lookupStream(id); st != nil {
		if st.se != nil && st.se.closing.Load() {
			st.close()
			return
		}
		st.paused.Store(true)
	}
}

// resumeStream mirrors SpannerCoreResumeStream.
func (c *conn) resumeStream(id uint64) {
	if st := c.lookupStream(id); st != nil {
		st.paused.Store(false)
		st.signalFlow()
	}
}

// cancelStream mirrors SpannerCoreCloseStream.
func (c *conn) cancelStream(id uint64) {
	c.streamsMu.Lock()
	st := c.streams[id]
	if st != nil {
		delete(c.streams, id)
	}
	c.streamsMu.Unlock()
	if st != nil {
		st.close()
	}
}

// streamSnapshot returns the registered streams.
func (c *conn) streamSnapshot() []*stream {
	c.streamsMu.Lock()
	defer c.streamsMu.Unlock()
	out := make([]*stream, 0, len(c.streams))
	for _, st := range c.streams {
		out = append(out, st)
	}
	return out
}
