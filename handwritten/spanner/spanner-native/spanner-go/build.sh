#!/usr/bin/env bash
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

TARGET_OS="$(go env GOOS)"

# 1. In-process FFI transport: cgo shared library loaded by spanner_go.node.
case "${TARGET_OS}" in
  darwin)
    CGO_ENABLED=1 go build -buildmode=c-shared -o libspanner_go.dylib .
    ;;
  windows)
    CGO_ENABLED=1 go build -buildmode=c-shared -o spanner_go.dll .
    ;;
  *)
    CGO_ENABLED=1 go build -buildmode=c-shared -o libspanner_go.so .
    ;;
esac

# 2. Out-of-process IPC transport: pure-Go sidecar executable spawned by
#    spanner_ipc.node (see ../IPC_PROTOCOL.md). Static, no cgo.
case "${TARGET_OS}" in
  windows)
    CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o spanner-go-sidecar.exe ./sidecar
    ;;
  *)
    CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o spanner-go-sidecar ./sidecar
    ;;
esac
