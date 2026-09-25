#!/bin/bash

# Copyright 2018 Google LLC
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

set -eo pipefail

export NPM_CONFIG_PREFIX=${HOME}/.npm-global
export PATH="${NPM_CONFIG_PREFIX}/bin:${PATH}"
mkdir -p "${NPM_CONFIG_PREFIX}/lib"
npm config -g ls || npm i -g npm@"$(npm --version)"

cd $(dirname $0)/..

npm install -g pnpm@10
pnpm install --filter @google-cloud/profiler... --frozen-lockfile
pnpm --filter @google-cloud/profiler... run compile
# If tests are running against main branch, configure flakybot
# to open issues on failures:
if [[ $KOKORO_BUILD_ARTIFACTS_SUBDIR = *"continuous"* ]] || [[ $KOKORO_BUILD_ARTIFACTS_SUBDIR = *"nightly"* ]]; then
  export MOCHA_REPORTER_OUTPUT=test_output_sponge_log.xml
  export MOCHA_REPORTER=xunit
  cleanup() {
    if [[ -f "${KOKORO_GFILE_DIR:-}/linux_amd64/flakybot" ]]; then
      chmod +x $KOKORO_GFILE_DIR/linux_amd64/flakybot
      $KOKORO_GFILE_DIR/linux_amd64/flakybot || true
    fi
  }
  trap cleanup EXIT HUP
fi
# Unit tests exercise the entire API surface, which may include
# deprecation warnings:
export MOCHA_THROW_DEPRECATION=false
pnpm test

# codecov combines coverage across integration and unit tests. Include
# the logic below for any environment you wish to collect coverage for:
COVERAGE_NODE=22
if npx check-node-version@3.3.0 --silent --node $COVERAGE_NODE; then
  NYC_BIN=./node_modules/nyc/bin/nyc.js
  if [ -f "$NYC_BIN" ]; then
    $NYC_BIN report || true
  fi
  if [ -f "${KOKORO_GFILE_DIR:-}/codecov.sh" ]; then
    bash $KOKORO_GFILE_DIR/codecov.sh || true
  fi
else
  echo "coverage is only reported for Node $COVERAGE_NODE"
fi
