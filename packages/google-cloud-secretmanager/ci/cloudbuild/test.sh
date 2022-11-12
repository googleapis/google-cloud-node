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

# samples test
if [ ${TEST_NAME} == "samples" ] && [ -f samples/package.json ]; then
    # Currently this is run by root and we need `--unsafe-perm` option.
    npm install --unsafe-perm

    # Install and link samples
    pushd samples/
    npm link ../
    npm install
    popd

    npm run samples-test
fi

# system test
if [ ${TEST_NAME} == "system" ]; then
    # Currently this is run by root and we need `--unsafe-perm` option.
    npm install --unsafe-perm
    npm run system-test
fi
