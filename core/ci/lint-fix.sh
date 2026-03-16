#!/bin/bash
#
# Copyright 2023 Google LLC
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

export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)

subdirs=(
    dev-packages
    .github/scripts
    packages
    generator
)

for subdir in ${subdirs[@]}; do
    for d in `ls -d ${PROJECT_ROOT}/${subdir}/*/ 2>/dev/null`; do
        if [ -f "${d}package.json" ]; then
            if grep -q '"fix"' "${d}package.json"; then
                echo "running lint fix in ${d}"
                pushd ${d}
                rm -rf node_modules
                rm -rf build
                npm install --ignore-scripts --engine-strict; npm install
                npm run fix
                popd
            fi
        fi
    done
done