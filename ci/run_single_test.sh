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
echo "pnpm install --ignore-scripts --engine-strict --prod; pnpm install"
pnpm install --ignore-scripts --engine-strict --prod; pnpm install


retval=0

set +e
case ${TEST_TYPE} in
lint)
    pnpm prelint
    pnpm lint
    retval=$?
    ;;
samples)
    pnpm samples-test
    retval=$?
    ;;
system)
    pnpm system-test
    retval=$?
    ;;
units)
    pnpm test
    retval=$?
    ;;
*)
    ;;
esac
set -e

# Run flakybot for non-presubmit builds
if [ ${BUILD_TYPE} != "presubmit" ]; then
    if [ ${TEST_TYPE} == "system" ] || [ ${TEST_TYPE} == "samples" ]; then
        if [ -f "${PROJECT}_sponge_log.xml" ]; then
            echo "Contents in ${PROJECT}_sponge_log.xml:"
            cat ${PROJECT}_sponge_log.xml

            echo "Calling flakybot --repo ${REPO_OWNER}/${REPO_NAME} --commit_hash ${COMMIT_SHA} --build_url https://console.cloud.google.com/cloud-build/builds;region=global/${BUILD_ID}?project=${PROJECT_ID}"
            flakybot \
                --repo "${REPO_OWNER}/${REPO_NAME}" \
                --commit_hash "${COMMIT_SHA}" \
                --build_url \
                "https://console.cloud.google.com/cloud-build/builds;region=global/${BUILD_ID}?project=${PROJECT_ID}"
        else
            echo "Missing sponge log: ${PROJECT}_sponge_log.xml"
        fi
    fi
fi

exit ${retval}
