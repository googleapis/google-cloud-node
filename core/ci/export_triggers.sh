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

echo "change directory to the project root"
export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)
pushd ${PROJECT_ROOT}
pwd

echo "exporting Cloud Build triggers"
echo "exporting presubmit build for node"
gcloud beta builds triggers export "gcnc-system-presubmit-node" --destination "ci/export/gcnc-system-presubmit-node.yaml"
echo "exporting continuous build for node"
gcloud beta builds triggers export "gcnc-system-continuous-node" --destination "ci/export/gcnc-system-continuous-node.yaml"
echo "exporting nightly build for node"
gcloud beta builds triggers export "gcnc-system-nightly-node" --destination "ci/export/gcnc-system-nightly-node.yaml"
echo "exporting presubmit build for node"
gcloud beta builds triggers export "gcnc-samples-presubmit-node" --destination "ci/export/gcnc-samples-presubmit-node.yaml"
echo "exporting continuous build for node"
gcloud beta builds triggers export "gcnc-samples-continuous-node" --destination "ci/export/gcnc-samples-continuous-node.yaml"
echo "exporting nightly build for node"
gcloud beta builds triggers export "gcnc-samples-nightly-node" --destination "ci/export/gcnc-samples-nightly-node.yaml"
echo "exporting presubmit build for node with credentials"
gcloud beta builds triggers export "gcnc-samples-presubmit-node-with-credentials" --destination "ci/export/gcnc-samples-presubmit-node-with-credentials.yaml"
