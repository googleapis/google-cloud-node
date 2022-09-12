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

if [ $# -lt 1 ]
then
  echo "Usage: $0 <target-path> [--push]"
  exit 1
fi

PATH_NAME=$1
PUSH_ARG=$2
PACKAGE_PATH="packages/${PATH_NAME}"

LIBRARY_NAME=$(jq -r .name ${PACKAGE_PATH}/package.json)
COMPONENT=$(echo ${LIBRARY_NAME} | cut -f2 -d/)
if [[ -z "${COMPONENT}" ]]
then
  # library name does not have a group (i.e. @group/package-name)
  COMPONENT="${LIBRARY_NAME}"
fi

echo "Library: ${LIBRARY_NAME}"
echo "Component: ${COMPONENT}"

LATEST_VERSION=$(jq -r ".[\"${PACKAGE_PATH}\"]" .release-please-manifest.json)
LATEST_RELEASE_SHA=$(git log --format=oneline ${PACKAGE_PATH}/package.json | grep release | head -n 1 | awk '{ print $1 }')
echo "Found latest version: ${LATEST_VERSION} at ${LATEST_RELEASE_SHA}"

COMMAND="git tag ${LATEST_RELEASE_SHA} ${COMPONENT}-v${LATEST_VERSION}"
echo ${COMMAND}

if [[ "${PUSH_ARG}" == "--push" ]]
then
  `${COMMAND}`
  git push --tags
fi
