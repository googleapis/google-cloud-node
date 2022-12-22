#!/bin/bash
# Copyright 2022 Google LLC
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

# A script for exporting Cloud Build build triggers.

# `-e` enables the script to automatically fail when a command fails
# `-o pipefail` sets the exit code to the rightmost comment to exit
# with a non-zero
set -eo pipefail

NODE_VERSIONS=(
    "14"
)

echo "change directory to the project root"
export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)
pushd ${PROJECT_ROOT}
pwd

echo "exporting Cloud Build triggers"

for NODE_VERSION in ${NODE_VERSIONS[@]}; do
    echo "exporting presubmit build for node${NODE_VERSION}"
    gcloud beta builds triggers export "system-presubmit-node${NODE_VERSION}" --destination "ci/export/system-presubmit-node${NODE_VERSION}.yaml"
    echo "exporting continuous build for node${NODE_VERSION}"
    gcloud beta builds triggers export "system-continuous-node${NODE_VERSION}" --destination "ci/export/system-continuous-node${NODE_VERSION}.yaml"
    echo "exporting nightly build for node${NODE_VERSION}"
    gcloud beta builds triggers export "system-nightly-node${NODE_VERSION}" --destination "ci/export/system-nightly-node${NODE_VERSION}.yaml"
    echo "exporting presubmit build for node${NODE_VERSION}"
    gcloud beta builds triggers export "samples-presubmit-node${NODE_VERSION}" --destination "ci/export/samples-presubmit-node${NODE_VERSION}.yaml"
    echo "exporting continuous build for node${NODE_VERSION}"
    gcloud beta builds triggers export "samples-continuous-node${NODE_VERSION}" --destination "ci/export/samples-continuous-node${NODE_VERSION}.yaml"
    echo "exporting nightly build for node${NODE_VERSION}"
    gcloud beta builds triggers export "samples-nightly-node${NODE_VERSION}" --destination "ci/export/samples-nightly-node${NODE_VERSION}.yaml"
    echo "exporting presubmit build for node${NODE_VERSION} with credentials"
    gcloud beta builds triggers export "samples-presubmit-node${NODE_VERSION}-with-credentials" --destination "ci/export/samples-presubmit-node${NODE_VERSION}-with-credentials.yaml"
done

# Since we don't want to run nightly, presubmit, and continuous for node 16 and node 18, adding these outside of the loop
echo "exporting presubmit unit build for node16 unit tests"
gcloud beta builds triggers export "unit-presubmit-node16" --destination "ci/export/unit-presubmit-node16.yaml"
echo "exporting presubmit unit build for node18 unit tests"
gcloud beta builds triggers export "unit-presubmit-node18" --destination "ci/export/unit-presubmit-node18.yaml"