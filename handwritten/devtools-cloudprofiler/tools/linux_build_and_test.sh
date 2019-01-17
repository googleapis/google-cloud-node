#!/bin/bash
# Copyright 2018 Google Inc. All Rights Reserved.
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

# Fail on any error.
set -e pipefail

# Display commands
set -x

case $KOKORO_JOB_TYPE in
  CONTINUOUS_GITHUB)
    BUILD_TYPE=continuous
    ;;
  PRESUBMIT_GITHUB)
    BUILD_TYPE=presubmit
    ;;
  RELEASE)
    BUILD_TYPE=release
    ;;
  *)
    echo "Unknown build type: ${KOKORO_JOB_TYPE}"
    exit 1
    ;;
esac

cd $(dirname $0)/..
BASE_DIR=$(pwd)

docker build -t kokoro-image tools/linux
docker run -v /var/run/docker.sock:/var/run/docker.sock -v \
    "${BASE_DIR}":"${BASE_DIR}" kokoro-image \
    "${BASE_DIR}/tools/build.sh"

GCS_LOCATION="cprof-e2e-nodejs-artifacts/nodejs/kokoro/${BUILD_TYPE}/${KOKORO_BUILD_NUMBER}"
gcloud auth activate-service-account --key-file="${KOKORO_KEYSTORE_DIR}/72935_cloud-profiler-e2e-service-account-key"

gsutil cp -r "${BASE_DIR}/artifacts/." "gs://${GCS_LOCATION}/"

# Test the agent
export BINARY_HOST="https://storage.googleapis.com/${GCS_LOCATION}"
"${BASE_DIR}/testing/integration_test.sh"

if [ "$BUILD_TYPE" -eq "release" ]; then
  gsutil cp -r "${BASE_DIR}/artifacts/." "gs://cloud-profiler/nodejs/release"
fi
