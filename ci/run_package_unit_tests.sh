#!/bin/bash
#
# Copyright 2026 Google LLC
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

bun install --ignore-scripts --filter packages

export REGION_ID='uc'
export PROJECT_ROOT=$(realpath $(dirname "${BASH_SOURCE[0]}")/..)
export NODE_OPTIONS=--max_old_space_size=4096

d=$(pwd)
PROJECT=$(basename ${d})
export MOCHA_REPORTER_OUTPUT=${PROJECT}_sponge_log.xml
export MOCHA_REPORTER_SUITENAME=${PROJECT}
export MOCHA_REPORTER=xunit

turbo run test
