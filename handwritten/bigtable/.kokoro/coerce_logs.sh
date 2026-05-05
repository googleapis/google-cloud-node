#!/bin/bash
# Copyright 2024 Google LLC
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

# This script finds and moves sponge logs so that they can be found by placer
# and are not flagged as flaky by sponge.

set -eo pipefail

## Get the directory of the build script
scriptDir=$(realpath $(dirname "${BASH_SOURCE[0]}"))
## cd to the parent directory, i.e. the root of the git repo
cd ${scriptDir}/..

job=$(basename ${KOKORO_JOB_NAME})

echo "coercing sponge logs..."
for xml in `find . -name *-sponge_log.xml`
do
  class=$(basename ${xml} | cut -d- -f2)
  dir=$(dirname ${xml})/${job}/${class}
  text=$(dirname ${xml})/${class}-sponge_log.txt
  mkdir -p ${dir}
  mv ${xml} ${dir}/sponge_log.xml
  mv ${text} ${dir}/sponge_log.txt
done