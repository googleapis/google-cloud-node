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
    echo "pnpm --dir \"${PROJECT_ROOT}\" install --frozen-lockfile --ignore-scripts"
    if ! pnpm --dir "${PROJECT_ROOT}" install --frozen-lockfile --ignore-scripts; then
        echo "::error title=PNPM Install Failed::pnpm install failed in ${PROJECT_ROOT}."
        echo ""
        echo "===================================================================================================="
        echo "❌ PNPM Install Failed"
        echo ""
        echo "If this failure is caused by an outdated lockfile or changed package.json dependencies, run:"
        echo "    pnpm install --lockfile-only"
        echo "    git add pnpm-lock.yaml"
        echo "    git commit -m \"chore: update pnpm-lock.yaml\""
        echo "    git push"
        echo "===================================================================================================="
        echo ""
        exit 1
    fi
fi

# Fallback compilation when a package's `build/` directory is missing (for example,
# when `run_single_test.sh` is executed directly outside of `run_conditional_tests.sh`,
# or when a PR only modifies `ci/` so root `turbo run compile --filter="...[HEAD^1]"`
# compiles nothing). When `run_conditional_tests.sh` batch-compiles the shard's packages
# up front, it sets `SHARD_COMPILED=true` so this step is skipped.
#
# We use `turbo run compile --filter="{./<pkg>}"` with `npm_config_enable_pre_post_scripts=true`
# instead of bare `pnpm compile` so that:
#   1. Upstream workspace dependencies (`^compile` in turbo.json) are compiled first.
#   2. `precompile`/`postcompile` scripts (such as copying protos and test fixtures into `build/`
#      in firestore and storage) run under pnpm v10, which disables pre/post scripts by default.
if [ "${SHARD_COMPILED}" != "true" ] && [ ! -d "build" ] && [ -f "package.json" ] && grep -q '"compile":' package.json; then
    rel_dir=$(realpath --relative-to="${PROJECT_ROOT}" ".")
    npm_config_enable_pre_post_scripts=true TURBO_DAEMON=false TURBO_NO_UPDATE_NOTIFIER=1 pnpm --dir "${PROJECT_ROOT}" exec turbo run compile --no-daemon --env-mode=loose --filter="{./${rel_dir}}"
fi

# Because workspace dependencies are installed with `--ignore-scripts` and pnpm v10
# disables `pretest` lifecycle scripts by default, packages that previously relied on
# per-package `pnpm install` or `pretest` hooks need their build artifacts generated explicitly:
# 1. `@google-cloud/profiler` (`handwritten/cloud-profiler`) requires compiling the native `pprof` addon.
if [ -d "node_modules/pprof" ] && [ ! -f "node_modules/pprof/build/Release/pprof.node" ]; then
    pnpm exec node-gyp rebuild --directory node_modules/pprof
fi

# 2. `google-proto-files` (`core/packages/nodejs-proto-files`) requires running `prepublish.js`
# to extract `google/api` proto definitions before unit tests run.
if [ -f "build/tools/prepublish.js" ] && [ ! -d "google/api" ]; then
    node ./build/tools/prepublish.js
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
    ${TEST_CMD} test
    retval=$?
    ;;
*)
    ;;
esac

exit ${retval}
