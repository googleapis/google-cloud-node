#!/bin/bash
# Copyright 2017 Google Inc.

# Auto-injected conditional check
# Check if the package directory has changes. If not, skip tests.
if [[ "${RUNNING_IN_CI:-}" == "true" ]]; then
    # The package path is hardcoded during migration
    RELATIVE_PKG_PATH="handwritten/firestore"
    
    echo "Checking for changes in ${RELATIVE_PKG_PATH}..."
    
    # Determine the diff range based on the CI system/event
    # Safe default: HEAD~1..HEAD
    DIFF_RANGE="HEAD~1..HEAD"

    if git diff --quiet "${DIFF_RANGE}" -- "${RELATIVE_PKG_PATH}"; then
        echo "No changes detected in ${RELATIVE_PKG_PATH}. Skipping tests."
        exit 0
    else
        echo "Changes detected in ${RELATIVE_PKG_PATH}. Proceeding with tests."
    fi
fi
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

set -eo pipefail

# Always run the cleanup script, regardless of the success of bouncing into
# the container.
function cleanup() {
    chmod +x ${KOKORO_GFILE_DIR}/trampoline_cleanup.sh
    ${KOKORO_GFILE_DIR}/trampoline_cleanup.sh
    echo "cleanup";
}
trap cleanup EXIT

$(dirname $0)/populate-secrets.sh # Secret Manager secrets.
python3 "${KOKORO_GFILE_DIR}/trampoline_v1.py"
