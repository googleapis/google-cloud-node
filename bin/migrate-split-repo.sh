#!/bin/bash
# Copyright 2022 Google LLC
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

set -e

if [ $# -lt 2 ]
then
  echo "Usage: $0 <split-repo-name> <target-path>"
  exit 1
fi

# repo name (e.g. nodejs-asset)
SPLIT_REPO=$1
# destination directory (e.g. google-cloud-asset)
ARTIFACT_NAME=$2

## Get the directory of the build script
SCRIPT_DIR=$(realpath $(dirname "${BASH_SOURCE[0]}"))

export UPDATE_SCRIPT="${SCRIPT_DIR}/split-repo-post-process.sh"
export PACKAGE_PATH="packages/${ARTIFACT_NAME}"

# run the migrate script, remove .kokoro and .github folders
# keep the .github/.OwlBot.yaml config
${SCRIPT_DIR}/migrate-git-history.sh \
  "googleapis/${SPLIT_REPO}" \
  "googleapis/google-cloud-node" \
  "" \
  "${PACKAGE_PATH}" \
  ".kokoro,.github,.trampolinerc,SECURITY.md,renovate.json,samples" \
  ".github/.OwlBot.yaml,samples/quickstart.js,samples/test/quickstart.js,samples/.eslintrc.yml,samples/test/sample.test.js,samples/test/quickstart.test.js,system-test/test/quickstart.test.js,system-test/test/quickstart.js,samples/README.md,samples/package.json,samples/generated"

# run the script to update the split repo and either delete all the samples or just update the README
${SCRIPT_DIR}/delete-everything-split-repo.sh "${SPLIT_REPO}" "${ARTIFACT_NAME}" "${PACKAGE_PATH}"
${SCRIPT_DIR}/update-readme-only-split-repo.sh "${SPLIT_REPO}"" "${ARTIFACT_NAME}" "${PACKAGE_PATH}"
