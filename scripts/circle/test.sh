#!/bin/bash

# Copyright 2017 Google Inc. All rights reserved.
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

set -e

rebuild () {
  for dir in packages/*; do
    test -d "$dir" || continue
    cd $dir
    npm rebuild --update-binary
    cd ../../
  done
}

if [ "${CIRCLE_TAG}" != "" ] ||
   ([ "${CIRCLE_BRANCH}" == "master" ] && [ "${CI_PULL_REQUEST}" == "" ])
then
  # This is a tagged build or a push to master, so system tests will be run.
  echo $GCLOUD_TESTS_KEY | base64 --decode > ${HOME}/key.json
  export GCLOUD_TESTS_KEY="$HOME/key.json"

  echo $GCLOUD_TESTS_KEY_NON_WHITELIST | base64 --decode > ${HOME}/key.non-whitelist.json
  export GCLOUD_TESTS_KEY_NON_WHITELIST="$HOME/key.non-whitelist.json"
fi

git config --global user.name "circle-ci"
git config --global user.email "circle-ci@circleci.com"

#nvm use v4
#npm install
#npm run lint
#node ./scripts/build.js

export COVERALLS_REPO_TOKEN="kEhKxvu3L9Z4GiClA9LcKYk7G9i9dl83k"
export CIRCLE_ARTIFACTS="$(pwd)/.coverage"
#npm run postinstall # installs all modules
#npm run coveralls

set +e
