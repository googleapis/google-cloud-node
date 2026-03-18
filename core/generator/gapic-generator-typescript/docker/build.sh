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
git log | head -n 3 > docker/gitlog.txt
npm pack

VERSION=`cat package.json | grep version | awk -F'"' '{ print $4; }'`

cp "google-cloud-gapic-generator-$VERSION.tgz" "docker/package.tgz"
cd docker

docker build -t gapic-generator-typescript .

# Cleanup
rm -f gitlog.txt package.tgz
