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
 
PACKAGE_NAME=$(basename ${PACKAGE_PATH})
 
echo "Detecting the latest version in ${PACKAGE_PATH}"
LATEST_VERSION=$(cat "${PACKAGE_PATH}/package.json" | jq -r ".version")
echo "Latest version: ${LATEST_VERSION}"
 
echo "Adding release-please config"
# using a temp file because jq doesn't like writing to the input file as it reads
cat release-please-config.json | jq --sort-keys ". * {\"packages\": {\"${PACKAGE_PATH}\": {}}}" > release-please-config2.json
mv release-please-config2.json release-please-config.json
 
echo "Adding release-please manifest version"
# using a temp file because jq doesn't like writing to the input file as it reads
cat .release-please-manifest.json | jq --sort-keys ". * {\"${PACKAGE_PATH}\": \"${LATEST_VERSION}\"}" > .release-please-manifest2.json
mv .release-please-manifest2.json .release-please-manifest.json
 
# update .repo and .issue_tracker in .repo-metadata.json
echo "Update .repo-metadata.json"
echo "updating .repo to googleapis/google-cloud-node-core"
jq ".repo = \"googleapis/google-cloud-node-core\"" "${PACKAGE_PATH}/.repo-metadata.json" > "${PACKAGE_PATH}/.repo-metadata2.json"
mv "${PACKAGE_PATH}/.repo-metadata2.json" "${PACKAGE_PATH}/.repo-metadata.json"
if jq -r ".issue_tracker" "${PACKAGE_PATH}/.repo-metadata.json" | grep "github.com"
then
  echo "updating .issue_tracker to https://github.com/googleapis/google-cloud-node-core/issues"
  jq ".issue_tracker = \"https://github.com/googleapis/google-cloud-node-core/issues\"" "${PACKAGE_PATH}/.repo-metadata.json" > "${PACKAGE_PATH}/.repo-metadata2.json"
  mv "${PACKAGE_PATH}/.repo-metadata2.json" "${PACKAGE_PATH}/.repo-metadata.json"
fi
 
# update system tests scripts
echo "adding compile step to system-test"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".scripts[\"system-test\"] = \"npm run compile && c8 mocha build/system-test\"" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json
 
echo "adding compile step to samples-test"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".scripts[\"samples-test\"] = \"npm run compile && cd samples/ && npm link ../ && npm i && npm test\"" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json
 
echo "updating repository object type"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".repository = {\"type\": \"git\", \"directory\": \"packages/${PACKAGE_NAME}\", \"url\": \"https://github.com/googleapis/google-cloud-node-core.git\"}" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json
 
echo "updating homepage"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".homepage = \"https://github.com/googleapis/google-cloud-node-core/tree/main/packages/${PACKAGE_NAME}\"" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json

 
# add changes to local git directory
git add .
git commit -am "build: add release-please config, delete owlbot-config"
