#!/bin/bash

# Copyright 2016 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -ev

rm -rf docs/json
npm run docs
git submodule add -q -b gh-pages https://github.com/GoogleCloudPlatform/google-cloud-node ghpages
cp -rf docs/json/* ghpages/json
cp docs/manifest.json ghpages
cd ghpages
set +e
git add .
set -e
if [[ -z "$(git status --porcelain)" ]]; then
  echo "Nothing to commit. Exiting without pushing changes.";
  exit 0;
fi;
git config user.name "circle-ci"
git config user.email "circle-ci@circleci.com"
git commit -m "Update docs for ${CIRCLE_TAG:-master} [ci skip]"
git status
git remote add origin git@github.com:GoogleCloudPlatform/google-cloud-node
git push origin HEAD:gh-pages