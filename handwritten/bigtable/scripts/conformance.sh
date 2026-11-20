#!/bin/bash

# Copyright 2023 Google LLC
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

set -eo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
## cd to the parent directory, i.e. handwritten/bigtable
cd "${SCRIPT_DIR}/.."

PORT="${PORT:-9999}"

# Ensure the testproxy is compiled before launching it in the background
if [ ! -f build/testproxy/index.js ]; then
    pnpm run compile
fi

# Stop the testbench & cleanup environment variables
function cleanup() {
    echo "Cleanup testbench"
    # Stop the proxy
    if [ -n "${proxyPID:-}" ]; then
        kill "${proxyPID}" 2>/dev/null || true
    fi
}
trap cleanup EXIT

# Start the proxy in a separate process
PORT="${PORT}" node build/testproxy/index.js &
proxyPID=$!

# Wait for the testproxy to bind its port before running tests
node -e "
const net = require('net');
const deadline = Date.now() + 30000;
(function check() {
  try {
    process.kill(${proxyPID}, 0);
  } catch {
    console.error('testproxy exited unexpectedly');
    process.exit(1);
  }
  const socket = net.createConnection({host: '127.0.0.1', port: ${PORT}});
  socket.on('connect', () => {
    socket.destroy();
    process.exit(0);
  });
  socket.on('error', () => {
    socket.destroy();
    if (Date.now() > deadline) {
      console.error('Timed out waiting for testproxy on port ${PORT}');
      process.exit(1);
    }
    setTimeout(check, 200);
  });
})();
"

# Run the conformance test skipping known unsupported features
SKIP_PATTERN=$(tr -d '\r\n\\' < testproxy/known_unsupported.txt | sed 's/^|//; s/|$//')
cd cloud-bigtable-clients-test/tests
RETURN_CODE=0
if [ -n "${SKIP_PATTERN}" ]; then
    go test -v -proxy_addr=":${PORT}" -skip "${SKIP_PATTERN}" || RETURN_CODE=$?
else
    go test -v -proxy_addr=":${PORT}" || RETURN_CODE=$?
fi

# fix output location of logs
bash "${SCRIPT_DIR}/coerce_logs.sh"

echo "exiting with ${RETURN_CODE}"
exit "${RETURN_CODE}"
