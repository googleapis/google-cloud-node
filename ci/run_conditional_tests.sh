#!/bin/bash
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


# `-e` enables the script to automatically fail when a command fails
# `-o pipefail` sets the exit code to the rightmost comment to exit
# with a non-zero
set -eo pipefail

export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)

# Exit early if owl-bot-staging directory exists. The PR is not ready to merge.
if test -d "${PROJECT_ROOT}/owl-bot-staging"; then
  echo "Found owl-bot-staging directory, skipping all tests and failing the run."
  exit 1
fi

# A script file for running the test in a sub project.
test_script="${PROJECT_ROOT}/ci/run_single_test.sh"


if [[ "$(node -v)" == v22* ]]; then
  export NODE_OPTIONS="${NODE_OPTIONS} --no-warnings=DEP0040"
  export NODE_OPTIONS="${NODE_OPTIONS} --no-experimental-require-module"
fi

for arg in "$@"; do
    case "${arg}" in
        --strict)
            STRICT=true
            ;;
    esac
done

if [[ "${STRICT}" == "true" || "${STRICT}" == "1" ]]; then
    if [ -z "${GIT_DIFF_ARG}" ]; then
        echo "Error: STRICT mode requires GIT_DIFF_ARG to be set." >&2
        exit 1
    fi
    if [[ -z "${RUN_TESTS_MODE}" ]]; then
        echo "Error: STRICT mode requires RUN_TESTS_MODE to be set." >&2
        exit 1
    fi
    set +e
    git diff --quiet ${GIT_DIFF_ARG}
    diff_status=$?
    set -e
    if [[ ${diff_status} -ne 0 && ${diff_status} -ne 1 ]]; then
        echo "Error: STRICT mode git diff ${GIT_DIFF_ARG} failed with exit code ${diff_status}." >&2
        exit 1
    fi
else
    if [ -z "${GIT_DIFF_ARG}" ]; then
        if [ "${BUILD_TYPE}" == "presubmit" ]; then
            # For presubmit build, we want to know the difference from the
            # common commit in origin/main.
            GIT_DIFF_ARG="origin/main..."

            # Then fetch enough history for finding the common commit.
            git fetch origin main --deepen=300

        elif [ "${BUILD_TYPE}" == "continuous" ]; then
            # For continuous build, we want to know the difference in the last
            # commit. This assumes we use squash commit when merging PRs.
            GIT_DIFF_ARG="HEAD~.."

            # Then fetch one last commit for getting the diff.
            git fetch origin main --deepen=1

        else
            # Run everything.
            GIT_DIFF_ARG=""
        fi
    fi
fi

if [[ -n "${RUN_TESTS_MODE}" ]]; then
    if [[ "${RUN_TESTS_MODE}" != "CALCULATE_SHARD_MATRIX" && "${RUN_TESTS_MODE}" != "RUN_UNIT_TESTS" ]]; then
        echo "Error: RUN_TESTS_MODE must be either CALCULATE_SHARD_MATRIX or RUN_UNIT_TESTS." >&2
        exit 1
    fi
fi

if [[ "${RUN_TESTS_MODE}" == "RUN_UNIT_TESTS" ]]; then
    if [[ -z "${SHARD_TOTAL}" || -z "${SHARD_INDEX}" ]]; then
        echo "Error: SHARD_TOTAL and SHARD_INDEX must be set when RUN_TESTS_MODE is RUN_UNIT_TESTS." >&2
        exit 1
    fi
fi

# Then detect changes in the test scripts.

set +e
git diff --quiet ${GIT_DIFF_ARG} ci
changed=$?
set -e
if [[ "${changed}" -eq 0 ]]; then
    echo "no change detected in ci"
else
    echo "change detected in ci, we should test everything"
    echo "result of git diff ${GIT_DIFF_ARG} ci:"
    git diff ${GIT_DIFF_ARG} ci
    GIT_DIFF_ARG=""
fi

# Now we have a fixed list, but we can change it to autodetect if
# necessary.

subdirs=(
    core
    containers
    packages
    handwritten
    .github/scripts
    core/packages
    core/dev-packages
)

RETVAL=0
# These following APIs need an explicit credential file to run properly (or oAuth2, which we don't support in this repo).
# When we hit these packages, we will run the "samples with credentials" trigger, which contains the credentials as an env variable

tests_with_credentials="core/packages/google-auth-library-nodejs/ packages/google-analytics-admin/ packages/google-area120-tables/ packages/google-analytics-data/ packages/google-iam-credentials/ packages/google-apps-meet/ packages/google-chat/ packages/google-streetview-publish/ packages/google-cloud-developerconnect/"

# Some packages are only used by our bots and automation. These packages do not need to run on Windows and
# often employ platform specific code like file system interaction. Some packages may also fail
# on Windows due to incompatible npm scripts.
#
# Until these packages can be updated to be OS agnostic, we will skip them on Windows.
windows_exempt_tests="core/ core/packages/ core/dev-packages/ .github/scripts/fixtures/ .github/scripts/tests/ core/packages/gapic-node-processing/ core/packages/typeless-sample-bot/ handwritten/cloud-profiler/"

# Gather all test directories into an array
test_dirs=()

for subdir in ${subdirs[@]}; do
    for d in `ls -d ${subdir}/*/`; do
        if [ -s "ignore.json" ] && jq -e ".ignored[] | select(. == \"$d\")" ignore.json > /dev/null 2>&1; then
            echo "Skipping ${d} (explicitly ignored in ignore.json)"
            continue
        fi
        if [ ! -f "${d}/package.json" ]; then
            echo "Skipping ${d} (no package.json found)"
            continue
        fi
        if [[ "${TEST_TYPE}" == "samples" && ! -f "${d}/samples/package.json" ]]; then
            echo "Skipping ${TEST_TYPE} test for ${d} (no samples/package.json found)"
            continue
        fi
        if [[ ("${subdir}" == "handwritten" || "${subdir}" == "core") && ("${TEST_TYPE}" == "samples" || "${TEST_TYPE}" == "system") ]]; then
            echo "Skipping ${TEST_TYPE} test for handwritten and core packages: ${d}"
            continue
        fi

        # System tests for packages are broken and blocking PRs.
        # See https://github.com/googleapis/google-cloud-node/issues/7976.
        #
        # Per https://github.com/googleapis/google-cloud-node/issues/7921,
        # we are likely to permanently remove these tests in the near future.
        if [[ "${subdir}" == "packages" && "${TEST_TYPE}" == "system" ]]; then
            echo "Skipping ${TEST_TYPE} test for packages: ${d}"
            continue
        fi

        # Sample tests for packages are broken/flaky and blocking PRs.
        # See https://github.com/googleapis/google-cloud-node/issues/7976#issuecomment-4210458096.
        #
        # Per https://github.com/googleapis/google-cloud-node/issues/7921,
        # we are likely to permanently remove these tests in the near future.
        if [[ "${subdir}" == "packages" && "${TEST_TYPE}" == "samples" ]]; then
            echo "Skipping ${TEST_TYPE} test for packages: ${d}"
            continue
        fi

        # Our CI uses Git Bash on Windows to execute this script, which returns "msys" or "cygwin" for OSTYPE.
        if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OS" == "Windows_NT" ]]; then
            is_exempt=false
            for exempt in ${windows_exempt_tests}; do
                if [[ "${d}" == "${exempt}" || "${d}" == "${exempt}/"* ]]; then
                    is_exempt=true
                    break
                fi
            done
            if [[ "${is_exempt}" == "true" ]]; then
                echo "Skipping ${d} on Windows (in exemption list)"
                continue
            fi
        fi

        should_test=false
        if [ -n "${GIT_DIFF_ARG}" ]; then
            echo "checking changes with 'git diff --quiet ${GIT_DIFF_ARG} ${d}'"
            set +e
            git diff --quiet ${GIT_DIFF_ARG} ${d}
            changed=$?
            set -e
            if [[ "${changed}" -eq 0 ]]; then
                echo "no change detected in ${d}, skipping"
            else
                if ([[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]) && [[ "${IS_CORE}" == "true" ]] && [[ "${TEST_TYPE}" == "system" ]]; then
                    echo "run system tests for core/packages in ${d}"
                    export RUN_INTERDEPENDENT_TESTS=true
                    should_test=true
                elif ([[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]) && [[ "${IS_CORE}" == "true" ]] && [[ "${TEST_TYPE}" == "samples" ]]; then
                    if [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -n "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                        echo "run samples tests with credentials for core/packages in ${d}"
                        should_test=true
                    elif ! [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                        echo "run samples tests for core/packages in ${d}"
                        should_test=true
                    fi
                elif [[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]; then
                    echo "skipping core package ${d} in non-core trigger"
                elif [[ "${TEST_TYPE}" == "system" ]] || [[ "${TEST_TYPE}" == "lint" ]] || [[ "${TEST_TYPE}" == "units" ]]; then
                    echo "change detected in ${d} for ${TEST_TYPE} test"
                    should_test=true
                elif [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -n "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                    echo "change detected in ${d} in a directory that needs credentials"
                    should_test=true
                elif ! [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                    echo "change detected in ${d}"
                    should_test=true
                fi
            fi
        else
            # If GIT_DIFF_ARG is empty, run all the tests.
            if ([[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]) && [[ "${IS_CORE}" == "true" ]] && [[ "${TEST_TYPE}" == "system" ]]; then
                echo "run system tests for core/packages in ${d}"
                export RUN_INTERDEPENDENT_TESTS=true
                should_test=true
            elif ([[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]) && [[ "${IS_CORE}" == "true" ]] && [[ "${TEST_TYPE}" == "samples" ]]; then
                if [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -n "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                    echo "run samples tests with credentials for core/packages in ${d}"
                    should_test=true
                elif ! [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                    echo "run samples tests for core/packages in ${d}"
                    should_test=true
                fi
            # elif [[ "${d}" == core/packages/* ]] || [[ "${d}" == core/dev-packages/* ]]; then
            #     echo "skipping core package ${d} in non-core trigger"
            elif [[ "${TEST_TYPE}" == "system" ]] || [[ "${TEST_TYPE}" == "lint" ]] || [[ "${TEST_TYPE}" == "units" ]]; then
                echo "run ${TEST_TYPE} test for ${d}"
                should_test=true
            elif [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -n "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                echo "run tests with credentials in ${d}"
                should_test=true
            elif ! [[ "${tests_with_credentials[*]}" =~ "${d}" ]] && [[ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
                echo "run tests in ${d}"
                should_test=true
            fi
        fi
        if [ "${should_test}" = true ]; then
            test_dirs+=("${d}")
        fi
    done
done
# If RUN_TESTS_MODE is CALCULATE_SHARD_MATRIX, output dynamic matrix values to GitHub Actions and exit
if [[ "${RUN_TESTS_MODE}" == "CALCULATE_SHARD_MATRIX" ]]; then
    count=${#test_dirs[@]}
    if [[ $count -gt 15 ]]; then
        matrix="[0, 1, 2, 3, 4]"
        total="5"
    else
        matrix="[0]"
        total="1"
    fi
    if [[ -n "${GITHUB_OUTPUT}" ]]; then
        echo "shard_matrix=${matrix}" >> "${GITHUB_OUTPUT}"
        echo "shard_total=${total}" >> "${GITHUB_OUTPUT}"
    else
        echo "shard_matrix=${matrix}"
        echo "shard_total=${total}"
    fi
    exit 0
fi

# If SHARD_TOTAL and SHARD_INDEX are provided, we will only run a subset of the tests.
for i in "${!test_dirs[@]}"; do
    d="${test_dirs[$i]}"

    if [[ -n "${SHARD_TOTAL}" && -n "${SHARD_INDEX}" ]]; then
        if (( SHARD_TOTAL > 0 && i % SHARD_TOTAL != SHARD_INDEX )); then
            continue
        fi
    fi

    echo "running test in ${d}"
    pushd "${d}" >/dev/null
    # Temporarily allow failure.
    set +e
    "${test_script}"
    ret=$?
    set -e
    if [ ${ret} -ne 0 ]; then
        exit ${ret}
    fi
    popd >/dev/null
done

exit 0
