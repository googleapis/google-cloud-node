#!/bin/bash
#
# Copyright 2022 Google LLC
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

set -e

export REGION_ID='uc'
export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)
export NODE_OPTIONS=--max_old_space_size=4096

if [ -z "${BUILD_TYPE}" ]; then
    echo "missing BUILD_TYPE env var"
    exit 1
fi

if [ -z "${TEST_TYPE}" ]; then
    TEST_TYPE="units"
fi

d=$(pwd)
PROJECT=$(basename ${d})

if [ ${BUILD_TYPE} != "presubmit" ]; then
    # Activate mocha config
    export MOCHA_REPORTER_OUTPUT=${PROJECT}_sponge_log.xml
    export MOCHA_REPORTER_SUITENAME=${PROJECT}
    export MOCHA_REPORTER=xunit
fi

# Install dependencies
#
# The filter is needed to prevent bun from installing all packages in the repo
# from the root. By default it prefers to analyze, install, and at the root
# so dependencies can be deduplicated. We will try that in a separate PR for
# comparison.
echo "bun install --ignore-scripts --prod --filter .; bun install --filter ."
bun install --ignore-scripts --prod --filter . ; bun install --filter .


retval=0

set +e
case ${TEST_TYPE} in
lint)
    bun run prelint
    bun run lint
    retval=$?
    ;;
samples)
    bun run samples-test
    retval=$?
    ;;
system)
    bun run system-test
    retval=$?
    ;;
units)
    bun run test
    retval=$?
    ;;
*)
    ;;
esac
set -e

exit ${retval}
