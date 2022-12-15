#!/bin/sh
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
set -e

MONO_REPO_NAME="google-cloud-node"
cd  "${MONO_REPO_PATH}/packages/gapic-node-templating"
npm i
npm run compile
npm link .

cd "${MONO_REPO_PATH}/containers/node-bootstrap-container"
FOLDER_NAME=$(node /create-folder-name.js "${API_ID}") || node /create-gh-issue.js
echo "${FOLDER_NAME}"
echo "${API_ID}"
mkdir -p "${MONO_REPO_PATH}/packages/${FOLDER_NAME}" || node /create-gh-issue.js
node /add-to-well-known-path.js "${INTER_CONTAINER_VARS_PATH}" "${FOLDER_NAME}"
cd  "${MONO_REPO_PATH}"

/usr/local/bin/gapic-node-templating bootstrap-library --api-id "${API_ID}" --destination-folder "${MONO_REPO_PATH}/packages/${FOLDER_NAME}" --mono-repo-name "${MONO_REPO_NAME}" --folder-name "${FOLDER_NAME}" --service-config-path "${SERVICE_CONFIG_PATH}" || node /create-gh-issue.js
