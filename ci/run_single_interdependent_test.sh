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

retval=0

# In this run, we're running both 1) cascading tests, as well as
# 2) individual tests for a given package. The reason we run them separately
# is because cascading tests need to run without compilation; so, we're
# also running individual package tests to ensure compilation is done correctly

set +e
case ${TEST_TYPE} in
lint)
    npm install --ignore-scripts --engine-strict
    npm run prelint
    npm run lint
    retval=$?
    ;;
samples)
    ${PROJECT_ROOT}/ci/run-interdependent-tests.sh "${TEST_TYPE}-test"
    npm install --ignore-scripts --engine-strict; npm install
    npm run ${TEST_TYPE}-test
    retval=$?
    ;;
system)
    ${PROJECT_ROOT}/ci/run-interdependent-tests.sh "${TEST_TYPE}-test"
    npm install --ignore-scripts --engine-strict; npm install
    npm run ${TEST_TYPE}-test
    retval=$?
    ;;
units)
    ${PROJECT_ROOT}/ci/run-interdependent-tests.sh "test"
    npm install --ignore-scripts --engine-strict; npm install
    npm run test
    retval=$?
    ;;
*)
    ${PROJECT_ROOT}/ci/run-interdependent-tests.sh "$TEST_TYPE"
    retval=$?
    ;;
esac
set -e

exit ${retval}
