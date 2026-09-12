#!/bin/bash
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

set -e

SKIP_CLONE=$1
SPANNER_LIB_BRANCH="${2:-main}"

if ! [ "$SKIP_CLONE" == "true" ]; then
  git clone https://github.com/googleapis/go-sql-spanner.git --branch "$SPANNER_LIB_BRANCH"
fi

mkdir -p spannerlib-node
rm -rf spannerlib-node/*

cp -r go-sql-spanner/spannerlib/wrappers/spannerlib-node/* spannerlib-node/
mkdir -p spannerlib-node/shared
cp -r go-sql-spanner/spannerlib/shared/* spannerlib-node/shared/

# Update build-shared-lib.sh and binding.gyp paths for self-contained spannerlib-node
if [ -f "spannerlib-node/scripts/build-shared-lib.sh" ]; then
  sed -i '' 's|\.\./\.\./\.\./shared|\.\./shared|g' spannerlib-node/scripts/build-shared-lib.sh 2>/dev/null || \
  sed -i 's|\.\./\.\./\.\./shared|\.\./shared|g' spannerlib-node/scripts/build-shared-lib.sh
fi

if [ -f "spannerlib-node/binding.gyp" ]; then
  sed -i '' 's|\.\./\.\./shared|\./shared|g' spannerlib-node/binding.gyp 2>/dev/null || \
  sed -i 's|\.\./\.\./shared|\./shared|g' spannerlib-node/binding.gyp
fi

rm -rf go-sql-spanner
