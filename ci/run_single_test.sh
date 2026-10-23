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
# Cap the V8 heap at 2 GB on Windows (instead of 6 GB) so parallel Mocha worker
# processes do not exhaust the 14 GB Windows runner VM pagefile and crash with OOM.
if [[ "$OSTYPE" == "msys"* || "$OSTYPE" == "cygwin"* || "$OS" == "Windows_NT" ]]; then
    MAX_OLD_SPACE_SIZE=2048
else
    MAX_OLD_SPACE_SIZE=6144
fi
export NODE_OPTIONS="${NODE_OPTIONS} --max_old_space_size=${MAX_OLD_SPACE_SIZE} --no-deprecation"

if [ -z "${BUILD_TYPE}" ]; then
    echo "missing BUILD_TYPE env var"
    exit 1
fi

if [ -z "${TEST_TYPE}" ]; then
    TEST_TYPE="units"
fi

TEST_CMD=${TEST_CMD:-pnpm}

d=$(pwd)
PROJECT=$(basename ${d})

if [ ${BUILD_TYPE} != "presubmit" ]; then
    # Activate mocha config
    export MOCHA_REPORTER_OUTPUT=${PROJECT}_sponge_log.xml
    export MOCHA_REPORTER_SUITENAME=${PROJECT}
    export MOCHA_REPORTER=xunit
else
    export MOCHA_REPORTER=dot
fi

# Install workspace dependencies only if not already installed at the monorepo root.
# In CI, .github/actions/pnpm-lockfile-check already installs the workspace once per job;
# skipping redundant per-package installs avoids re-linking all 280+ workspace packages on every test.
if [ ! -d "${PROJECT_ROOT}/node_modules/.pnpm" ]; then
    pnpm --dir "${PROJECT_ROOT}" install --frozen-lockfile --ignore-scripts
fi

retval=0

if [ "${RUN_INTERDEPENDENT_TESTS}" = "true" ]; then
    case ${TEST_TYPE} in
    lint)
        # Skip interdependent tests for lint
        ;;
    samples)
        ${PROJECT_ROOT}/ci/run_interdependent_tests.sh "samples-test"
        ;;
    system)
        ${PROJECT_ROOT}/ci/run_interdependent_tests.sh "system-test"
        ;;
    units)
        ${PROJECT_ROOT}/ci/run_interdependent_tests.sh "test"
        ;;
    *)
        ${PROJECT_ROOT}/ci/run_interdependent_tests.sh "${TEST_TYPE}"
        ;;
    esac
fi

set +e
case ${TEST_TYPE} in
lint)
    ${TEST_CMD} prelint
    ${TEST_CMD} lint
    retval=$?
    ;;
samples)
    ${TEST_CMD} samples-test
    retval=$?
    ;;
system)
    ${TEST_CMD} system-test
    retval=$?
    ;;
units)
    if [ ! -d "build" ] && grep -q '"compile":' package.json; then
        ${TEST_CMD} compile || exit $?
    fi
    ${TEST_CMD} test
    retval=$?
    ;;
*)
    ;;
esac

exit ${retval}
