#!/bin/bash

# Copyright 2024 Google LLC
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

export NPM_CONFIG_PREFIX=${HOME}/.npm-global

## cd to the parent directory, i.e. the root of the git repo
cd $(dirname $0)/..

# Stop the testbench & cleanup environment variables
function cleanup() {
    echo "Cleanup testbench"
    # Stop the proxy
    kill $proxyPID
}
trap cleanup EXIT

# Build and start the proxy in a separate process
pushd .
npm install
nohup npm run testproxy &
proxyPID=$!
popd

# Run the conformance test skipping known failures
cd cloud-bigtable-clients-test/tests
eval "go test -v -proxy_addr=:9999 -skip `tr -d '\n' < ../../testproxy/known_failures.txt``tr -d '\n' < ../../testproxy/known_unsupported.txt`"
RETURN_CODE=$?

echo "exiting with ${RETURN_CODE}"
exit ${RETURN_CODE}
