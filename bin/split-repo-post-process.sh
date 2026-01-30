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

# find owner from lower-level CODEOWNERS and add to top-level CODEOWNERS
LOWER_CODEOWNERS="${PACKAGE_PATH}/.github/CODEOWNERS"
if [[ -f "${LOWER_CODEOWNERS}" ]]; then
  echo "Found ${LOWER_CODEOWNERS}, extracting owner..."
  OWNER=$(grep -v '^#' "${LOWER_CODEOWNERS}" | grep '\*' | head -n 1 | awk '{print $NF}')
  if [[ ! -z "${OWNER}" ]]; then
    # check if entry already exists
    if ! grep -q "^/${PACKAGE_PATH} " ./.github/CODEOWNERS; then
      echo "Adding /${PACKAGE_PATH} ${OWNER} to ./.github/CODEOWNERS"
      echo "/${PACKAGE_PATH} ${OWNER}" >> ./.github/CODEOWNERS
    else
      echo "Entry for /${PACKAGE_PATH} already exists in ./.github/CODEOWNERS"
    fi
  fi
  echo "Removing ${LOWER_CODEOWNERS}"
  rm "${LOWER_CODEOWNERS}"
fi

# move any .github/workflows files to the top-level .github/workflows
if [[ -d "${PACKAGE_PATH}/.github/workflows" ]]; then
  if [ -n "$(ls -A "${PACKAGE_PATH}/.github/workflows")" ]; then
    echo "Moving .github/workflows from ${PACKAGE_PATH} to root..."
    cp -r "${PACKAGE_PATH}/.github/workflows/"* ./.github/workflows/
  fi
fi

 
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
gsed -i "/docker:/d" "${PACKAGE_PATH}/.OwlBot.yaml"
# remove `image:` line
gsed -i "/image:/d" "${PACKAGE_PATH}/.OwlBot.yaml"
 
if grep -q "/owl-bot-staging/\$1/\$2" "${PACKAGE_PATH}/.OwlBot.yaml"
then
  echo "OwlBot config is copying each folder"
  gsed -i 's/\.\*-nodejs\/(.*)/.*-nodejs/' "${PACKAGE_PATH}/.OwlBot.yaml"
  gsed -i "s/dest: \/owl-bot-staging\/\$1\/\$2/dest: \/owl-bot-staging\/${PACKAGE_NAME}\/\$1/" "${PACKAGE_PATH}/.OwlBot.yaml"
else
  gsed -i "s/dest: \/owl-bot-staging/dest: \/owl-bot-staging\/${PACKAGE_NAME}/" "${PACKAGE_PATH}/.OwlBot.yaml"
fi
 
echo "fixing owlbot.py file"
 
if test -f "${PACKAGE_PATH}/owlbot.py"; then
  gsed -i "s/import synthtool.languages.node as node/import synthtool.languages.node_mono_repo as node/" "${PACKAGE_PATH}/owlbot.py"
  echo gsed -i "s/node.owlbot_main(/node.owlbot_main(relative_dir=${PACKAGE_PATH},/" "${PACKAGE_PATH}/owlbot.py"
  gsed -i "s|node.owlbot_main(|node.owlbot_main(relative_dir=\"${PACKAGE_PATH}\",|" "${PACKAGE_PATH}/owlbot.py"
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
 
echo "updating repository object type"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".repository = {\"type\": \"git\", \"directory\": \"${PACKAGE_PATH}\", \"url\": \"https://github.com/googleapis/google-cloud-node.git\"}" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json
 
echo "updating homepage"
# using a temp file because jq doesn't like writing to the input file as it reads
jq -r ".homepage = \"https://github.com/googleapis/google-cloud-node/tree/main/${PACKAGE_PATH}\"" ${PACKAGE_PATH}/package.json > ${PACKAGE_PATH}/package2.json
mv ${PACKAGE_PATH}/package2.json ${PACKAGE_PATH}/package.json
 

# remove .github folder from package
if [[ -d "${PACKAGE_PATH}/.github" ]]; then
  echo "Removing ${PACKAGE_PATH}/.github"
  rm -rf "${PACKAGE_PATH}/.github"
fi


# update repo name in .kokoro files from SPLIT_REPO to PACKAGE_PATH
KOKORO_DIR="${PACKAGE_PATH}/.kokoro"
PACKAGE_PATH_REPLACEMENT="${SPLIT_REPO}/${PACKAGE_PATH}"
if [[ -d "${KOKORO_DIR}" ]]; then
  echo "Updating repo name in .kokoro files..."
  if [[ -n "${SPLIT_REPO}" ]]; then
    find "${KOKORO_DIR}" -type f -print0 | while IFS= read -r -d '' file; do
      echo "Processing ${file}"
      gsed -i -E "s|${SPLIT_REPO}|${PACKAGE_PATH_REPLACEMENT}|g" "${file}"
    done
  fi
fi

echo "Fixing .trampolinerc for populate-secrets.sh"
gsed -i 's|source ${PROJECT_ROOT}/.kokoro/populate-secrets.sh|source ${PROJECT_ROOT}/'"${PACKAGE_PATH}"'/.kokoro/populate-secrets.sh|' "${PACKAGE_PATH}"/.trampolinerc
 
# add changes to local git directory
git add .
git commit -am "build: add release-please config, fix owlbot-config"
