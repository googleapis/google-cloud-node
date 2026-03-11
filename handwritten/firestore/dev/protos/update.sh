#!/bin/bash

# Copyright 2018 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -euo pipefail
IFS=$'\n\t'

echo "Running update.sh"
echo $(npm --version)
# Variables
PROTOS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
WORK_DIR=`mktemp -d`
cd ${PROTOS_DIR}

# deletes the temp directory on exit
function cleanup {
  rm -rf "$WORK_DIR"
  echo "Deleted temp working directory $WORK_DIR"
}

# register the cleanup function to be called on the EXIT signal
trap cleanup EXIT

# Capture location of pbjs / pbts before we pushd.
PBJS="$(npm root)/.bin/pbjs"
PBTS="$(npm root)/.bin/pbts"

# Enter work dir
pushd "$WORK_DIR"

# Clone necessary git repos.
# If the USE_PREVIEW_BRANCH environment variable is set, clone the 'preview' branch.
if [[ -n "${USE_PREVIEW_BRANCH-}" ]]; then
  echo "Cloning 'preview' branch of googleapis.git..."
  git clone --depth 1 --branch preview https://github.com/googleapis/googleapis.git
else
  echo "Cloning default branch of googleapis.git..."
  git clone --depth 1 https://github.com/googleapis/googleapis.git
fi
# Protobuf may have breaking changes, so it will be pinned to a specific release.
# TODO(version) nodejs-firestore should maintain the version number of protobuf manually
git clone --single-branch --branch v26.1 --depth 1 https://github.com/google/protobuf.git

# Copy necessary protos.
mkdir -p "${PROTOS_DIR}/google/api"
cp googleapis/google/api/{annotations,client,field_behavior,http,launch_stage,resource,routing}.proto \
   "${PROTOS_DIR}/google/api/"

mkdir -p "${PROTOS_DIR}/google/firestore/v1"
cp googleapis/google/firestore/v1/*.proto \
   "${PROTOS_DIR}/google/firestore/v1/"

# If the USE_PREVIEW_BRANCH environment variable is set, skip v1beta1.
# v1beta1/ does not exist in the 'preview' branch
mkdir -p "${PROTOS_DIR}/google/firestore/v1beta1"
if [[ -n "${USE_PREVIEW_BRANCH-}" ]]; then
  echo "Skipping v1beta1 for 'preview' branch"
else
  cp googleapis/google/firestore/v1beta1/*.proto \
   "${PROTOS_DIR}/google/firestore/v1beta1/"
fi

mkdir -p "${PROTOS_DIR}/google/firestore/admin/v1"
cp googleapis/google/firestore/admin/v1/*.proto \
   "${PROTOS_DIR}/google/firestore/admin/v1/"

mkdir -p "${PROTOS_DIR}/google/longrunning"
cp googleapis/google/longrunning/operations.proto \
   "${PROTOS_DIR}/google/longrunning/"

mkdir -p "${PROTOS_DIR}/google/rpc"
cp googleapis/google/rpc/status.proto \
   "${PROTOS_DIR}/google/rpc/"

mkdir -p "${PROTOS_DIR}/google/type"
cp googleapis/google/type/{latlng,dayofweek}.proto \
   "${PROTOS_DIR}/google/type/"

mkdir -p "${PROTOS_DIR}/google/protobuf"
cp protobuf/src/google/protobuf/{any,descriptor,empty,field_mask,struct,timestamp,wrappers,duration}.proto \
   "${PROTOS_DIR}/google/protobuf/"

popd

# Generate the Protobuf typings
PBJS_ARGS=( -p . \
  --js_out=import_style=commonjs,binary:library \
  --target=static-module \
  --no-create \
  --no-encode \
  --no-decode \
  --no-verify \
  --no-delimited \
  --force-enum-string)

"${PBJS}" "${PBJS_ARGS[@]}" -o firestore_v1_proto_api.js \
  -r firestore_v1 \
  "google/firestore/v1/*.proto" \
  "firestore/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto" \
  "google/longrunning/*.proto"
perl -pi -e 's/number\|Long/number\|string/g' firestore_v1_proto_api.js
"${PBTS}" -o firestore_v1_proto_api.d.ts firestore_v1_proto_api.js

"${PBJS}" "${PBJS_ARGS[@]}" -o firestore_admin_v1_proto_api.js \
  -r firestore_admin_v1 \
  "google/firestore/admin/v1/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto" \
  "google/longrunning/*.proto"
perl -pi -e 's/number\|Long/number\|string/g' firestore_admin_v1_proto_api.js
"${PBTS}" -o firestore_admin_v1_proto_api.d.ts firestore_admin_v1_proto_api.js

"${PBJS}" "${PBJS_ARGS[@]}" -o firestore_v1beta1_proto_api.js \
  -r firestore_v1beta1 \
  "google/firestore/v1beta1/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto" \
  "google/longrunning/*.proto"
perl -pi -e 's/number\|Long/number\|string/g' firestore_v1beta1_proto_api.js
"${PBTS}" -o firestore_v1beta1_proto_api.d.ts firestore_v1beta1_proto_api.js

"${PBJS}" -p . --target=json -o v1.json \
  -r firestore_v1 \
  "google/firestore/v1/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto"

"${PBJS}" -p . --target=json -o admin_v1.json \
  -r firestore_admin_v1 \
  "google/firestore/admin/v1/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto" \
  "google/longrunning/*.proto"

"${PBJS}" -p . --target=json -o v1beta1.json \
  -r firestore_v1beta1 \
  "google/firestore/v1beta1/*.proto" \
  "google/protobuf/*.proto" "google/type/*.proto" \
  "google/rpc/*.proto" "google/api/*.proto"

echo "Finished running update.sh"

node  ../../scripts/license.js ../../build ../protos
