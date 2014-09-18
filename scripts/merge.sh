#!/bin/bash

# Copyright 2014 Google Inc. All rights reserved.
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

# if merging to master and not a pull request, execute regression tests and update docs
if [ "${TRAVIS_BRANCH}" == "master" ] && [ "${TRAVIS_PULL_REQUEST}" == "false" ]; then
  openssl aes-256-cbc -K $encrypted_b8aa0887832a_key -iv $encrypted_b8aa0887832a_iv -in key.json.enc -out key.json -d
  npm run regression-test

  # generate new set of json files in docs/json/master
  npm run docs
  git submodule add -b gh-pages https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} ghpages
  # copy all the docs file that might have changed, excluding versions.txt (to avoid overriding it)
  cd docs
  cp -R `ls --ignore 'versions.txt'` ../ghpages/
  cd ../ghpages
  git add .
  # commit to gh-pages branch to apply changes
  git config user.name "selfiebot"
  git commit -m "Update docs after merge to master"
  git push https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} HEAD:gh-pages
fi
