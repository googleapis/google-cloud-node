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

//go:build linux || darwin || freebsd || netbsd || openbsd || dragonfly

package main

import (
	"bytes"
	"os"
	"runtime"
	"strconv"
	"syscall"
)

type rusageInfo struct {
	utimeUs  uint64
	stimeUs  uint64
	maxRSSKB uint64
	nvcsw    uint64
	nivcsw   uint64
}

func getRusage() rusageInfo {
	var ru syscall.Rusage
	if err := syscall.Getrusage(syscall.RUSAGE_SELF, &ru); err != nil {
		return rusageInfo{}
	}
	maxRSS := uint64(ru.Maxrss)
	if runtime.GOOS == "darwin" {
		maxRSS /= 1024 // ru_maxrss is in bytes on Darwin, kilobytes elsewhere.
	}
	return rusageInfo{
		utimeUs:  timevalMicros(ru.Utime),
		stimeUs:  timevalMicros(ru.Stime),
		maxRSSKB: maxRSS,
		nvcsw:    uint64(ru.Nvcsw),
		nivcsw:   uint64(ru.Nivcsw),
	}
}

func timevalMicros(tv syscall.Timeval) uint64 {
	return uint64(tv.Sec)*1_000_000 + uint64(tv.Usec)
}

// currentRSSBytes returns the current resident set size from
// /proc/self/statm (resident pages × page size), or 0 when unavailable.
func currentRSSBytes() uint64 {
	if runtime.GOOS != "linux" {
		return 0
	}
	b, err := os.ReadFile("/proc/self/statm")
	if err != nil {
		return 0
	}
	fields := bytes.Fields(b)
	if len(fields) < 2 {
		return 0
	}
	pages, err := strconv.ParseUint(string(fields[1]), 10, 64)
	if err != nil {
		return 0
	}
	return pages * uint64(os.Getpagesize())
}

// processAlive reports whether pid exists (EPERM still means it exists).
func processAlive(pid int) bool {
	err := syscall.Kill(pid, 0)
	return err == nil || err == syscall.EPERM
}
