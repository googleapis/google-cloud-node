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


if [ ${BUILD_TYPE} == "presubmit" ]; then
    # For presubmit build, we want to know the difference from the
    # common commit in origin/main.
    GIT_DIFF_ARG="origin/main..."

    # Then fetch enough history for finding the common commit.
    git fetch origin main --deepen=300

elif [ ${BUILD_TYPE} == "continuous" ]; then
    # For continuous build, we want to know the difference in the last
    # commit. This assumes we use squash commit when merging PRs.
    GIT_DIFF_ARG="HEAD~.."

    # Then fetch one last commit for getting the diff.
    git fetch origin main --deepen=1

else
    # Run everything.
    GIT_DIFF_ARG=""
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
    containers
    packages
    scripts
)

RETVAL=0
# These following APIs need an explicit credential file to run properly (or oAuth2, which we don't support in this repo). 
# When we hit these packages, we will run the "samples with credentials" trigger, which contains the credentials as an env variable

tests_with_credentials="packages/google-analytics-admin/ packages/google-area120-tables/ packages/google-analytics-data/ packages/google-iam-credentials/ packages/google-apps-meet/ packages/google-chat/ packages/google-streetview-publish/ packages/google-cloud-developerconnect/"

for subdir in ${subdirs[@]}; do
    for d in `ls -d ${subdir}/*/`; do
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
                if [[ "${TEST_TYPE}" == "system" ]] || [[ "${TEST_TYPE}" == "lint" ]] || [[ "${TEST_TYPE}" == "units" ]]; then
                    echo "change detected in ${d} for system test"
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
            if [[ "${TEST_TYPE}" == "system" ]] || [[ "${TEST_TYPE}" == "lint" ]] || [[ "${TEST_TYPE}" == "units" ]]; then
                echo "run system test for ${d}"
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
            echo "running test in ${d}"
            pushd ${d}
            # Temporarily allow failure.
            set +e
            ${test_script}
            ret=$?
            set -e
            if [ ${ret} -ne 0 ]; then
                RETVAL=${ret}
                # Since there are so many APIs, we should exit early if there's an error
                break
            fi
            popd
        fi
    done
done

exit ${RETVAL}
