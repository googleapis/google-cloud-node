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

//go:build !(linux || darwin || freebsd || netbsd || openbsd || dragonfly)

package main

// The IPC transport targets Unix platforms (socketpair + inherited fds); these
// stubs only keep the package compiling elsewhere.

type rusageInfo struct {
	utimeUs  uint64
	stimeUs  uint64
	maxRSSKB uint64
	nvcsw    uint64
	nivcsw   uint64
}

func getRusage() rusageInfo { return rusageInfo{} }

func currentRSSBytes() uint64 { return 0 }

func processAlive(int) bool { return true }

func withPrivateUmask(fn func() error) error { return fn() }
