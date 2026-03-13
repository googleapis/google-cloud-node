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

# Publishing from the current branch
sh docker/build.sh
sh docker/test.sh
docker tag gapic-generator-typescript gcr.io/gapic-images/gapic-generator-typescript
docker push gcr.io/gapic-images/gapic-generator-typescript
