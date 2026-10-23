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

// Command spanner-go-sidecar is the out-of-process (IPC) transport of the
// Cloud Spanner Node.js Go Shared Core. It serves the protocol described in
// spanner-native/IPC_PROTOCOL.md over Unix domain sockets inherited from the
// Node.js addon (--fds) or, for debugging, a filesystem socket (--socket).
//
// Build (pure Go, static): CGO_ENABLED=0 go build -trimpath -o spanner-go-sidecar ./sidecar
package main

import (
	"flag"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"syscall"
	"time"
)

func main() {
	os.Exit(run(os.Args[1:], os.Stdout, os.Stderr))
}

func run(args []string, stdout, stderr io.Writer) int {
	fs := flag.NewFlagSet("spanner-go-sidecar", flag.ContinueOnError)
	fs.SetOutput(stderr)
	fdsFlag := fs.String("fds", "", "comma-separated inherited Unix socket file descriptors, e.g. 3,4")
	socketFlag := fs.String("socket", "", "debug mode: listen on this Unix socket path instead of inherited fds (never exits on EOF)")
	parentPID := fs.Int("parent-pid", 0, "exit when this (parent) process goes away; polled every second")
	sockBuf := fs.Int("sockbuf", 0, "SO_SNDBUF/SO_RCVBUF size in bytes for every connection (0 = system default)")
	showVersion := fs.Bool("version", false, "print the IPC protocol version and exit")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *showVersion {
		fmt.Fprintln(stdout, protocolVersion)
		return 0
	}
	if fs.NArg() > 0 {
		fmt.Fprintf(stderr, "spanner-go-sidecar: unexpected arguments: %q\n", fs.Args())
		return 2
	}
	if (*fdsFlag == "") == (*socketFlag == "") {
		fmt.Fprintln(stderr, "spanner-go-sidecar: exactly one of --fds or --socket is required")
		return 2
	}

	warn := log.New(stderr, fmt.Sprintf("spanner-go-sidecar[%d]: ", os.Getpid()), log.LstdFlags|log.Lmicroseconds)
	debugf := func(string, ...any) {}
	if v := os.Getenv("SPANNER_NATIVE_IPC_DEBUG"); v != "" && v != "0" && v != "false" {
		debugf = warn.Printf
	}

	var conns []net.Conn
	if *fdsFlag != "" {
		fds, err := parseFDs(*fdsFlag)
		if err != nil {
			fmt.Fprintf(stderr, "spanner-go-sidecar: --fds: %v\n", err)
			return 2
		}
		for _, fd := range fds {
			nc, err := fileConn(fd)
			if err != nil {
				for _, c := range conns {
					_ = c.Close()
				}
				fmt.Fprintf(stderr, "spanner-go-sidecar: --fds: %v\n", err)
				return 2
			}
			conns = append(conns, nc)
		}
	}

	// A terminal Ctrl-C delivered to the Node.js process group must not kill
	// in-flight queries; EOF on the sockets is the lifeline. SIGPIPE is
	// ignored so that a closed stderr pipe cannot kill the process either.
	signal.Ignore(syscall.SIGINT, syscall.SIGHUP, syscall.SIGPIPE)

	srv := newServer(serverOptions{
		sockBuf:      *sockBuf,
		exitOnAllEOF: *fdsFlag != "",
		debugf:       debugf,
		warnf:        warn.Printf,
	})

	termCh := make(chan os.Signal, 1)
	signal.Notify(termCh, syscall.SIGTERM)
	go func() {
		<-termCh
		debugf("SIGTERM received")
		srv.shutdown(0)
	}()

	if *fdsFlag != "" {
		srv.serveInherited(conns)
	} else if err := srv.listen(*socketFlag); err != nil {
		fmt.Fprintf(stderr, "spanner-go-sidecar: --socket: %v\n", err)
		return 1
	}

	if *parentPID > 0 {
		go watchParent(srv, *parentPID, time.Second)
	}

	return <-srv.exitCh
}

func parseFDs(s string) ([]int, error) {
	parts := strings.Split(s, ",")
	fds := make([]int, 0, len(parts))
	seen := make(map[int]bool, len(parts))
	for _, p := range parts {
		p = strings.TrimSpace(p)
		fd, err := strconv.Atoi(p)
		if err != nil || fd < 0 {
			return nil, fmt.Errorf("invalid file descriptor %q", p)
		}
		if seen[fd] {
			return nil, fmt.Errorf("duplicate file descriptor %d", fd)
		}
		seen[fd] = true
		fds = append(fds, fd)
	}
	return fds, nil
}

// fileConn wraps an inherited socket fd. net.FileConn dups the descriptor, so
// the original is closed here.
func fileConn(fd int) (net.Conn, error) {
	f := os.NewFile(uintptr(fd), "spanner-ipc-fd-"+strconv.Itoa(fd))
	if f == nil {
		return nil, fmt.Errorf("fd %d: invalid file descriptor", fd)
	}
	defer f.Close()
	nc, err := net.FileConn(f)
	if err != nil {
		return nil, fmt.Errorf("fd %d: %w", fd, err)
	}
	return nc, nil
}

// watchParent shuts the sidecar down when its parent changes (re-parented
// after the Node.js process died) or when parentPID no longer exists. This is
// a backstop: socket EOF is the primary lifeline.
func watchParent(s *server, parentPID int, interval time.Duration) {
	initialPPID := os.Getppid()
	gone := func() bool {
		return os.Getppid() != initialPPID || !processAlive(parentPID)
	}
	if !processAlive(parentPID) {
		s.debugf("parent process %d is gone; shutting down", parentPID)
		s.shutdown(0)
		return
	}
	t := time.NewTicker(interval)
	defer t.Stop()
	for range t.C {
		if gone() {
			s.debugf("parent process %d is gone; shutting down", parentPID)
			s.shutdown(0)
			return
		}
	}
}
