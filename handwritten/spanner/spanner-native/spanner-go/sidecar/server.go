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

// Connection serving and frame dispatch. Each connection has exactly one
// reader goroutine that never blocks on stream work, a write mutex that
// serializes whole frames, and a map of its cancellable streams.

import (
	"bufio"
	"encoding/binary"
	"errors"
	"io"
	"net"
	"os"
	"runtime"
	"sync"
	"sync/atomic"
	"time"

	"cloud.google.com/go/spanner/sharedcore"
)

const (
	readBufferSize      = 64 << 10
	defaultDrainTimeout = 2 * time.Second
)

var errConnClosed = errors.New("spanner-go-sidecar: connection closed")

type serverOptions struct {
	// sockBuf sets SO_SNDBUF/SO_RCVBUF on every connection when > 0.
	sockBuf int
	// exitOnAllEOF requests a shutdown once every inherited connection has
	// reached EOF (--fds mode).
	exitOnAllEOF bool
	// drainTimeout bounds how long shutdown waits for in-flight streams to
	// deliver their FINAL batch.
	drainTimeout time.Duration
	// debugf receives lifecycle messages; warnf receives protocol errors.
	debugf func(format string, args ...any)
	warnf  func(format string, args ...any)
	// maxBatchPayload lowers the BATCH payload_len limit (tests only;
	// defaults to the protocol maximum of 1 GiB).
	maxBatchPayload int
}

type server struct {
	reg             *serviceRegistry
	sockBuf         int
	exitOnAllEOF    bool
	drainTimeout    time.Duration
	maxBatchPayload int
	debugf          func(format string, args ...any)
	warnf           func(format string, args ...any)

	mu       sync.Mutex
	conns    map[*conn]struct{}
	listener net.Listener

	liveInherited atomic.Int64
	activeStreams atomic.Int64
	shuttingDown  atomic.Bool
	shutdownOnce  sync.Once
	// exitCh receives the process exit code once shutdown has completed.
	exitCh chan int
}

func newServer(opts serverOptions) *server {
	s := &server{
		reg:             newServiceRegistry(),
		sockBuf:         opts.sockBuf,
		exitOnAllEOF:    opts.exitOnAllEOF,
		drainTimeout:    opts.drainTimeout,
		maxBatchPayload: opts.maxBatchPayload,
		debugf:          opts.debugf,
		warnf:           opts.warnf,
		conns:           make(map[*conn]struct{}),
		exitCh:          make(chan int, 1),
	}
	if s.drainTimeout <= 0 {
		s.drainTimeout = defaultDrainTimeout
	}
	if s.maxBatchPayload <= 0 || s.maxBatchPayload > maxPayloadLen {
		s.maxBatchPayload = maxPayloadLen
	}
	if s.debugf == nil {
		s.debugf = func(string, ...any) {}
	}
	if s.warnf == nil {
		s.warnf = func(string, ...any) {}
	}
	return s
}

type conn struct {
	srv       *server
	nc        net.Conn
	inherited bool

	writeMu   sync.Mutex
	dead      atomic.Bool
	closeOnce sync.Once

	streamsMu     sync.Mutex
	streams       map[uint64]*stream
	streamsClosed bool
}

// serveInherited serves the connections passed with --fds. The sidecar shuts
// down once all of them have reached EOF (when exitOnAllEOF is set).
func (s *server) serveInherited(ncs []net.Conn) {
	s.liveInherited.Add(int64(len(ncs)))
	for _, nc := range ncs {
		s.serveConn(nc, true)
	}
}

func (s *server) serveConn(nc net.Conn, inherited bool) {
	if s.sockBuf > 0 {
		setSockBuf(nc, s.sockBuf)
	}
	c := &conn{
		srv:       s,
		nc:        nc,
		inherited: inherited,
		streams:   make(map[uint64]*stream),
	}
	s.mu.Lock()
	s.conns[c] = struct{}{}
	s.mu.Unlock()
	go c.serve()
}

func setSockBuf(nc net.Conn, n int) {
	type bufferSetter interface {
		SetReadBuffer(int) error
		SetWriteBuffer(int) error
	}
	if bs, ok := nc.(bufferSetter); ok {
		_ = bs.SetReadBuffer(n)
		_ = bs.SetWriteBuffer(n)
	}
}

func (s *server) connSnapshot() []*conn {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]*conn, 0, len(s.conns))
	for c := range s.conns {
		out = append(out, c)
	}
	return out
}

func (s *server) removeConn(c *conn) {
	s.mu.Lock()
	delete(s.conns, c)
	s.mu.Unlock()
}

func (s *server) forEachStream(fn func(*stream)) {
	for _, c := range s.connSnapshot() {
		for _, st := range c.streamSnapshot() {
			fn(st)
		}
	}
}

// closeService mirrors SpannerCoreClose: decrement the reference count; on
// the last reference mark the service closing, close its paused streams and
// close the transport once no RPC is active.
func (s *server) closeService(handle int64) (rc int32) {
	defer func() {
		if r := recover(); r != nil {
			rc = -1
		}
	}()
	se, last, ok := s.reg.release(handle)
	if !ok {
		return -1
	}
	if !last {
		return 0
	}
	s.forEachStream(func(st *stream) {
		if st.se == se && st.paused.Load() {
			st.close()
		}
	})
	if se.activeRPCs.Load() <= 0 {
		if err := se.closeServiceUnderlying(); err != nil {
			return -1
		}
	}
	return 0
}

// shutdown cancels every stream, closes every service, gives in-flight
// streams a bounded amount of time to deliver their FINAL batch, closes all
// connections and finally publishes the exit code on exitCh.
func (s *server) shutdown(code int) {
	s.shutdownOnce.Do(func() {
		s.shuttingDown.Store(true)
		s.mu.Lock()
		ln := s.listener
		s.mu.Unlock()
		if ln != nil {
			_ = ln.Close()
		}
		s.forEachStream(func(st *stream) { st.close() })
		s.reg.closeAll()
		deadline := time.Now().Add(s.drainTimeout)
		for s.activeStreams.Load() > 0 && time.Now().Before(deadline) {
			time.Sleep(5 * time.Millisecond)
		}
		for _, c := range s.connSnapshot() {
			c.close()
		}
		s.debugf("shutdown complete (exit code %d)", code)
		s.exitCh <- code
	})
}

// listen serves the debug --socket mode: accept connections on a filesystem
// socket; connection EOF never terminates the sidecar.
func (s *server) listen(path string) error {
	if fi, err := os.Lstat(path); err == nil && fi.Mode()&os.ModeSocket != 0 {
		_ = os.Remove(path)
	}
	ln, err := net.Listen("unix", path)
	if err != nil {
		return err
	}
	_ = os.Chmod(path, 0o600)
	s.mu.Lock()
	s.listener = ln
	s.mu.Unlock()
	go s.acceptLoop(ln)
	return nil
}

func (s *server) acceptLoop(ln net.Listener) {
	for {
		nc, err := ln.Accept()
		if err != nil {
			if s.shuttingDown.Load() || errors.Is(err, net.ErrClosed) {
				return
			}
			s.warnf("accept failed: %v", err)
			time.Sleep(10 * time.Millisecond)
			continue
		}
		if s.shuttingDown.Load() {
			_ = nc.Close()
			continue
		}
		s.serveConn(nc, false)
	}
}

// serve is the connection's reader goroutine. It only parses frames and
// performs O(1) dispatch; anything that can block runs in its own goroutine.
func (c *conn) serve() {
	defer c.finish()
	if err := c.writeReady(); err != nil {
		return
	}
	br := bufio.NewReaderSize(c.nc, readBufferSize)
	hdr := make([]byte, frameHeaderSize)
	for {
		if _, err := io.ReadFull(br, hdr); err != nil {
			if err != io.EOF && !c.dead.Load() {
				c.srv.warnf("connection read failed: %v", err)
			}
			return
		}
		fh := parseFrameHeader(hdr)
		if fh.payloadLen > maxPayloadLen {
			c.srv.warnf("protocol error: frame type 0x%02x has payload_len %d > %d; closing connection", fh.typ, fh.payloadLen, maxPayloadLen)
			return
		}
		if !c.dispatch(br, fh) {
			return
		}
	}
}

func (c *conn) dispatch(br *bufio.Reader, fh frameHeader) bool {
	switch fh.typ {
	case frameAck:
		if !c.skipPayload(br, fh) {
			return false
		}
		c.ackStream(fh.id)
	case framePause:
		if !c.skipPayload(br, fh) {
			return false
		}
		c.pauseStream(fh.id)
	case frameResume:
		if !c.skipPayload(br, fh) {
			return false
		}
		c.resumeStream(fh.id)
	case frameCancel:
		if !c.skipPayload(br, fh) {
			return false
		}
		c.cancelStream(fh.id)
	case frameExecute:
		payload, ok := c.readPayload(br, fh)
		if !ok {
			return false
		}
		c.execute(fh.id, payload)
	case frameInit:
		payload, ok := c.readPayload(br, fh)
		if !ok {
			return false
		}
		go c.handleInit(fh.id, payload)
	case frameCloseService:
		payload, ok := c.readPayload(br, fh)
		if !ok {
			return false
		}
		go c.handleCloseService(fh.id, payload)
	case frameSetRootCerts:
		payload, ok := c.readPayload(br, fh)
		if !ok {
			return false
		}
		// Applied synchronously so that it precedes any INIT that follows.
		sharedcore.SetFallbackRootCAPEM(string(payload))
	case frameStats:
		if !c.skipPayload(br, fh) {
			return false
		}
		go c.handleStats(fh.id)
	case framePing:
		if !c.skipPayload(br, fh) {
			return false
		}
		go c.writeFrame(framePong, 0, fh.id, nil)
	case frameShutdown:
		if !c.skipPayload(br, fh) {
			return false
		}
		c.srv.debugf("SHUTDOWN received")
		go c.srv.shutdown(0)
	default:
		c.srv.warnf("protocol error: unknown frame type 0x%02x; closing connection", fh.typ)
		return false
	}
	return true
}

func (c *conn) readPayload(br *bufio.Reader, fh frameHeader) ([]byte, bool) {
	if fh.payloadLen == 0 {
		return nil, true
	}
	p := make([]byte, fh.payloadLen)
	if _, err := io.ReadFull(br, p); err != nil {
		if !c.dead.Load() {
			c.srv.warnf("connection read failed in frame type 0x%02x payload: %v", fh.typ, err)
		}
		return nil, false
	}
	return p, true
}

func (c *conn) skipPayload(br *bufio.Reader, fh frameHeader) bool {
	if fh.payloadLen == 0 {
		return true
	}
	_, err := br.Discard(int(fh.payloadLen))
	return err == nil
}

// finish runs when the reader exits (EOF, read error or protocol error).
func (c *conn) finish() {
	c.close()
	if c.inherited && c.srv.liveInherited.Add(-1) == 0 && c.srv.exitOnAllEOF {
		c.srv.debugf("all connections reached EOF; shutting down")
		c.srv.shutdown(0)
	}
}

// close marks the connection dead, cancels its cancellable streams and closes
// the socket (which also unblocks any writer).
func (c *conn) close() {
	c.closeOnce.Do(func() {
		c.dead.Store(true)
		c.streamsMu.Lock()
		c.streamsClosed = true
		streams := make([]*stream, 0, len(c.streams))
		for id, st := range c.streams {
			streams = append(streams, st)
			delete(c.streams, id)
		}
		c.streamsMu.Unlock()
		for _, st := range streams {
			st.close()
		}
		_ = c.nc.Close()
		c.srv.removeConn(c)
	})
}

// fail tears the connection down after a write error.
func (c *conn) fail(err error) {
	if !c.dead.Load() {
		c.srv.warnf("connection write failed: %v", err)
	}
	c.close()
}

// writeFrame writes a small control/reply frame.
func (c *conn) writeFrame(typ, flags uint8, id uint64, payload []byte) error {
	if c.dead.Load() {
		return errConnClosed
	}
	buf := make([]byte, frameHeaderSize+len(payload))
	putFrameHeader(buf, uint32(len(payload)), typ, flags, id)
	copy(buf[frameHeaderSize:], payload)
	c.writeMu.Lock()
	_, err := c.nc.Write(buf)
	c.writeMu.Unlock()
	if err != nil {
		c.fail(err)
	}
	return err
}

func (c *conn) writeReady() error {
	var p [readyPayloadSize]byte
	le := binary.LittleEndian
	le.PutUint32(p[0:], protocolVersion)
	le.PutUint32(p[4:], uint32(os.Getpid()))
	le.PutUint32(p[8:], uint32(runtime.GOMAXPROCS(0)))
	le.PutUint32(p[12:], uint32(runtime.NumCPU()))
	return c.writeFrame(frameReady, 0, 0, p[:])
}

func (c *conn) handleInit(reqID uint64, payload []byte) {
	var (
		handle int64
		errMsg string
	)
	if c.srv.shuttingDown.Load() {
		handle, errMsg = -1, "spanner-go-sidecar is shutting down"
	} else if req, err := parseInitPayload(payload); err != nil {
		handle, errMsg = -1, "malformed INIT payload: "+err.Error()
	} else {
		handle, errMsg = c.srv.reg.initService(req)
	}
	p := make([]byte, 0, 12+len(errMsg))
	p = binary.LittleEndian.AppendUint64(p, uint64(handle))
	p = binary.LittleEndian.AppendUint32(p, uint32(len(errMsg)))
	p = append(p, errMsg...)
	_ = c.writeFrame(frameInitResult, 0, reqID, p)
}

func (c *conn) handleCloseService(reqID uint64, payload []byte) {
	rc := int32(-1)
	if len(payload) == 8 {
		rc = c.srv.closeService(int64(binary.LittleEndian.Uint64(payload)))
	}
	var p [4]byte
	binary.LittleEndian.PutUint32(p[:], uint32(rc))
	_ = c.writeFrame(frameCloseResult, 0, reqID, p[:])
}

func (c *conn) handleStats(reqID uint64) {
	var ms runtime.MemStats
	runtime.ReadMemStats(&ms)
	ru := getRusage()
	vals := [statsFieldCount]uint64{
		ru.utimeUs,
		ru.stimeUs,
		ru.maxRSSKB,
		ru.nvcsw,
		ru.nivcsw,
		uint64(runtime.NumGoroutine()),
		uint64(runtime.GOMAXPROCS(0)),
		uint64(runtime.NumCPU()),
		uint64(os.Getpid()),
		uint64(max(c.srv.activeStreams.Load(), 0)),
		uint64(c.srv.reg.count()),
		ms.HeapAlloc,
		ms.HeapSys,
		uint64(ms.NumGC),
		currentRSSBytes(),
		0, // reserved
	}
	p := make([]byte, statsFieldCount*8)
	for i, v := range vals {
		binary.LittleEndian.PutUint64(p[i*8:], v)
	}
	_ = c.writeFrame(frameStatsResult, 0, reqID, p)
}
