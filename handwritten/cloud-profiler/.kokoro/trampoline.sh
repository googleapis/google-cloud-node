#!/bin/bash
# Copyright 2017 Google Inc.
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

set -eox pipefail # Added 'x' for debugging

# Always run the cleanup script, regardless of the success of bouncing into
# the container.
function cleanup() {
    # Ensure cleanup script is executable
    if [ -f "${KOKORO_GFILE_DIR}/trampoline_cleanup.sh" ]; then
        chmod +x "${KOKORO_GFILE_DIR}/trampoline_cleanup.sh"
        "${KOKORO_GFILE_DIR}/trampoline_cleanup.sh"
    fi
    echo "cleanup done";
}
trap cleanup EXIT

# Source secrets if the script exists
if [ -f "$(dirname $0)/populate-secrets.sh" ]; then
    $(dirname $0)/populate-secrets.sh # Secret Manager secrets.
fi

#!/bin/bash
# Copyright 2017 Google Inc.
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

echo "--- Environment Variables ---"
env | sort
echo "--- End Environment Variables ---"

echo "--- Checking Paths ---"
SCM_DIR="${KOKORO_ARTIFACTS_DIR}/git/cloud-profiler-nodejs"
echo "SCM_DIR: ${SCM_DIR}"

if [ ! -d "${SCM_DIR}" ]; then
  echo "Error: SCM directory not found: ${SCM_DIR}"
  exit 1
fi

TRAMPOLINE_PY="${KOKORO_GFILE_DIR}/trampoline_v1.py"
echo "TRAMPOLINE_PY: ${TRAMPOLINE_PY}"

if [ ! -f "${TRAMPOLINE_PY}" ]; then
  echo "Error: trampoline_v1.py not found: ${TRAMPOLINE_PY}"
  echo "Contents of KOKORO_GFILE_DIR:"
  ls -l "${KOKORO_GFILE_DIR}"
  exit 1
fi

BUILD_FILE_PATH="${SCM_DIR}/${TRAMPOLINE_BUILD_FILE}"
echo "Expected TRAMPOLINE_BUILD_FILE path: ${BUILD_FILE_PATH}"

if [ ! -f "${BUILD_FILE_PATH}" ]; then
  echo "Error: TRAMPOLINE_BUILD_FILE not found: ${BUILD_FILE_PATH}"
  echo "Contents of ${SCM_DIR}/${TRAMPOLINE_WORKDIR}/.kokoro:"
  ls -lR "${SCM_DIR}/handwritten/cloud-profiler/.kokoro"
  exit 1
fi

# Ensure the target test script is executable
chmod +x "${BUILD_FILE_PATH}"
echo "Made ${BUILD_FILE_PATH} executable."

echo "--- Path Checks Passed ---"

echo "Executing trampoline_v1.py"
python3 "${TRAMPOLINE_PY}"
echo "trampoline_v1.py finished"
