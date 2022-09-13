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

echo "Moving ${PACKAGE_PATH}/.github/.OwlBot.yaml"
mv "${PACKAGE_PATH}/.github/.OwlBot.yaml" "${PACKAGE_PATH}/.OwlBot.yaml"

echo "Fixing format of ${PACKAGE_PATH}/.OwlBot.yaml"
# remove `docker:` line
sed -i "/docker:/d" "${PACKAGE_PATH}/.OwlBot.yaml"
# remove `image:` line
sed -i "/image:/d" "${PACKAGE_PATH}/.OwlBot.yaml"

if grep -q "/owl-bot-staging/\$1/\$2" "${PACKAGE_PATH}/.OwlBot.yaml"
then
  echo "OwlBot config is copying each folder"
  sed -i 's/\.\*-nodejs\/(.*)/.*-nodejs/' "${PACKAGE_PATH}/.OwlBot.yaml"
  sed -i "s/dest: \/owl-bot-staging\/\$1\/\$2/dest: \/owl-bot-staging\/${PACKAGE_NAME}\/\$1/" "${PACKAGE_PATH}/.OwlBot.yaml"
else
  sed -i "s/dest: \/owl-bot-staging/dest: \/owl-bot-staging\/${PACKAGE_NAME}/" "${PACKAGE_PATH}/.OwlBot.yaml"
fi

# update .repo and .issue_tracker in .repo-metadata.json
echo "Update .repo-metadata.json"
echo "updating .repo to googleapis/google-cloud-node"
jq ".repo = \"googleapis/google-cloud-node\"" "${PACKAGE_PATH}/.repo-metadata.json" > "${PACKAGE_PATH}/.repo-metadata2.json"
mv "${PACKAGE_PATH}/.repo-metadata2.json" "${PACKAGE_PATH}/.repo-metadata.json"
if jq -r ".issue_tracker" "${PACKAGE_PATH}/.repo-metadata.json" | grep "github.com"
then
  echo "updating .issue_tracker to https://github.com/googleapis/google-cloud-node/issues"
  jq ".issue_tracker = \"https://github.com/googleapis/google-cloud-node/issues\"" "${PACKAGE_PATH}/.repo-metadata.json" > "${PACKAGE_PATH}/.repo-metadata2.json"
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

IMAGE="gcr.io/cloud-devrel-public-resources/owlbot-nodejs-mono-repo:latest"
echo "Running post-processor: ${IMAGE}"
docker pull "${IMAGE}"
docker run --rm \
  --user $(id -u):$(id -g) \
  -v $(pwd):/workspace/google-cloud-node \
  -w /workspace/google-cloud-node \
  -e "DEFAULT_BRANCH=main" \
  "${IMAGE}"

# add changes to local git directory
git add .
git commit -am "build: add release-please config, fix owlbot-config"
