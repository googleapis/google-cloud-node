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

openssl aes-256-cbc -K $encrypted_b8aa0887832a_key -iv $encrypted_b8aa0887832a_iv -in key.json.enc -out key.json -d

npm run docs
npm run system-test

git config --global user.name "travis-ci"
git config --global user.email "travis@travis-ci.org"

## Attempt to update docs/manifest.json with the new version.
git checkout master
node -e "
file = require('./docs/manifest.json')
if (file.versions.indexOf('${TRAVIS_TAG}') === -1) file.versions.unshift('${TRAVIS_TAG}')
require('fs').writeFileSync('docs/manifest.json', JSON.stringify(file, null, 2) + '\n')
"
# allow "git add" to fail if there aren't new files.
set +e
git add docs/manifest.json
set -e
git commit -m "Update docs/manifest.json for ${TRAVIS_TAG} [ci skip]"
git status
if [[ -n "$(git status --porcelain)" ]]; then
  git push https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} HEAD:master
else
  echo "docs/manifest.json already includes the new version. Skipping commit."
fi

## Upload the docs to gh-pages.
git submodule add -f -b gh-pages https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} ghpages
test -d "ghpages/json/${TRAVIS_TAG}" && exit 0 || mkdir ghpages/json/${TRAVIS_TAG}
cp -R docs/json/master/* ghpages/json/${TRAVIS_TAG}
cp docs/*{.md,.html} ghpages/json/${TRAVIS_TAG}
cp docs/toc.json ghpages/json/${TRAVIS_TAG}
cp docs/home.html ghpages/json
cp docs/manifest.json ghpages
cd ghpages
git add json
git add manifest.json
git commit -m "Update docs for ${TRAVIS_TAG}"
git status
git push https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME} HEAD:gh-pages
