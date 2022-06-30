#!/usr/bin/env bash
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
WORKSPACE_DIR="/workspace"
cd  $WORKSPACE_DIR/$MONO_REPO_NAME/packages/gapic-node-templating
npm ci
npm run compile
npm link .

cd $WORKSPACE_DIR/$MONO_REPO_NAME/containers/node-bootstrap-container
FOLDER_NAME=$(node create-folder-name.js $API_ID) || node create-gh-issue.js
mkdir -p "$WORKSPACE_DIR/$MONO_REPO_NAME/packages/$FOLDER_NAME" || node create-gh-issue.js
cd  $WORKSPACE_DIR/$MONO_REPO_NAME
export _OWLBOT_YAML_PATH="packages/$FOLDER_NAME"
/usr/local/bin/gapic-node-templating bootstrap-library --api-id $API_ID --destination-folder "$WORKSPACE_DIR/$MONO_REPO_NAME/packages/$FOLDER_NAME" --mono-repo-name $MONO_REPO_NAME --github-token "$GITHUB_TOKEN" || node create-gh-issue.js