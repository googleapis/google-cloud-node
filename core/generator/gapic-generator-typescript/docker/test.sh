#!/bin/sh

# Copyright 2019 Google LLC
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

### Prepare the package and run `docker build`

set -e
SCRIPTDIR=`dirname "$0"`
cd "$SCRIPTDIR"
cd ..   # now in the package.json directory

export TMPDIR=`mktemp -d`

### Test script pulling the docker image and use it against showcase proto.

# Docker image tag: gapic-generator-typescript:latest.
DIR_NAME=$TMPDIR/showcase-typescript
echo "Running Docker container test, TMPDIR: $TMPDIR"
# Remove test directory if it already exists
rm -rf $DIR_NAME
# Create new directory showcase-typescript. 
mkdir $DIR_NAME
# Use Docker Image for generating showcase client library
docker run --rm \
  --mount type=bind,source=`pwd`/test-fixtures/protos/google/showcase/v1beta1,destination=/in/google/showcase/v1beta1,readonly \
  --mount type=bind,source=$DIR_NAME,destination=/out \
  --user $UID \
  gapic-generator-typescript:latest --validation false
# Test generated client library
cd $DIR_NAME
npm install  # install dependencies
npm run fix  # format the code
npm test     # run unit tests

# Test succeeded
echo 'Docker test succeeded! '
rm -rf $TMPDIR
