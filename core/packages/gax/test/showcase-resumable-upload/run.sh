#!/usr/bin/env bash
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Runs sample.js against the gapic-showcase ResumableUploadService using the
# google-gax checkout in this monorepo.
#
# Env overrides:
#   SHOWCASE_VERSION  gapic-showcase release to download (default: 0.43.1)
#   SHOWCASE_BIN      path to an existing gapic-showcase binary
#   SHOWCASE_PORT     port for the showcase server (default: 7469)
#   UPLOAD_FILE       file to upload (default: a generated 512 KiB file)

set -euo pipefail

HARNESS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLIENT_DIR="$HARNESS_DIR/client"
GAX_DIR="$(cd "$HARNESS_DIR/../.." && pwd)"
REPO_ROOT="$(cd "$GAX_DIR/../../.." && pwd)"
TOOLS_DIR="$REPO_ROOT/core/packages/tools"

SHOWCASE_VERSION="${SHOWCASE_VERSION:-0.43.1}"
SHOWCASE_PORT="${SHOWCASE_PORT:-7469}"
SHOWCASE_BIN="${SHOWCASE_BIN:-}"

# Make the local google-gax checkout importable by the sample and client.
mkdir -p "$HARNESS_DIR/node_modules"
ln -sfn "$GAX_DIR" "$HARNESS_DIR/node_modules/google-gax"

echo "Compiling google-gax from $GAX_DIR"
(cd "$GAX_DIR" && npm run compile)

if [[ ! -f "$TOOLS_DIR/build/src/compileProtos.js" ]]; then
  echo "Compiling gapic-tools from $TOOLS_DIR"
  (cd "$TOOLS_DIR" && npm run compile)
fi

echo "Compiling the generated showcase client"
(cd "$CLIENT_DIR" && node "$TOOLS_DIR/build/src/compileProtos.js" src)
(cd "$CLIENT_DIR" && "$GAX_DIR/node_modules/.bin/tsc" -p .)
(cd "$CLIENT_DIR" && cp -R protos build/)

DOWNLOAD_DIR="${TMPDIR:-/tmp}/gapic-showcase-$SHOWCASE_VERSION"
if [[ -z "$SHOWCASE_BIN" ]]; then
  os="$(uname -s | tr '[:upper:]' '[:lower:]')"
  case "$(uname -m)" in
    x86_64|amd64) arch="amd64" ;;
    arm64|aarch64) arch="arm64" ;;
    *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
  esac

  if [[ "$os" != "darwin" && "$os" != "linux" ]]; then
    echo "Unsupported OS: $os (only darwin and linux are supported by this script)" >&2
    exit 1
  fi

  SHOWCASE_BIN="$DOWNLOAD_DIR/gapic-showcase"
  if [[ ! -x "$SHOWCASE_BIN" ]]; then
    mkdir -p "$DOWNLOAD_DIR"
    tarball="$DOWNLOAD_DIR/gapic-showcase-$SHOWCASE_VERSION-$os-$arch.tar.gz"
    echo "Downloading gapic-showcase $SHOWCASE_VERSION from GitHub releases"
    curl -fsSL \
      "https://github.com/googleapis/gapic-showcase/releases/download/v$SHOWCASE_VERSION/gapic-showcase-$SHOWCASE_VERSION-$os-$arch.tar.gz" \
      -o "$tarball"
    tar -xzf "$tarball" -C "$DOWNLOAD_DIR"
  fi
fi

LOG_FILE="$DOWNLOAD_DIR/showcase-$SHOWCASE_PORT.log"
echo "Starting gapic-showcase on port $SHOWCASE_PORT"
"$SHOWCASE_BIN" run --port ":$SHOWCASE_PORT" >"$LOG_FILE" 2>&1 &
SERVER_PID=$!
cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
  wait "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT

for _ in $(seq 1 100); do
  if curl -sS --max-time 1 "http://127.0.0.1:$SHOWCASE_PORT/" >/dev/null 2>&1; then
    break
  fi
  sleep 0.1
done
if ! kill -0 "$SERVER_PID" 2>/dev/null; then
  echo "gapic-showcase failed to start; see $LOG_FILE" >&2
  exit 1
fi

PAYLOAD_FILE="${UPLOAD_FILE:-}"
PAYLOAD_CLEANUP=""
if [[ -z "$PAYLOAD_FILE" ]]; then
  PAYLOAD_FILE="$(mktemp "${TMPDIR:-/tmp}/showcase-upload.XXXXXX")"
  dd if=/dev/zero of="$PAYLOAD_FILE" bs=1024 count=512 2>/dev/null
  PAYLOAD_CLEANUP="$PAYLOAD_FILE"
fi
if [[ -n "$PAYLOAD_CLEANUP" ]]; then
  trap 'cleanup; rm -f "$PAYLOAD_CLEANUP"' EXIT
fi

echo "Running sample.js"
(cd "$HARNESS_DIR" && SHOWCASE_PORT="$SHOWCASE_PORT" UPLOAD_FILE="$PAYLOAD_FILE" node sample.js)
