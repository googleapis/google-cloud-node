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

if [ "${CIRCLE_BRANCH}" != "master" ] &&
   [ "${CI_PULL_REQUEST}" != "" ] &&
   [ "${CIRCLE_TAG}" == "" ]
then
  # Not a push to master, so no doc updates required.
  exit 0
fi

# For a tagged build, we will build the docs for the associated module.
# Otherwise, it will build for master.
export TAGGED_MODULE_NAME=${CIRCLE_TAG/-*}
export TAGGED_MODULE_VERSION=${CIRCLE_TAG/*-}

if [ "${CIRCLE_TAG:0:1}" == "v" ]
then
  export TAGGED_MODULE_NAME="google-cloud"
  export TAGGED_MODULE_VERSION=${CIRCLE_TAG:1}
fi

set +e # allows `git` commands during prepare-ghpages to fail

git fetch origin

npm run prepare-ghpages $TAGGED_MODULE_NAME $TAGGED_MODULE_VERSION

cd gh-pages
git fetch origin
git rebase origin/gh-pages
git push origin gh-pages

cd ..
npm run remove-ghpages

# amend will remove `gh-pages` directory from previous commit
# if it fails, that means the commit would be empty
git commit --amend -C HEAD -n

if [ $? != 0 ]
then
  echo "No changes to master branch."
  exit 0
fi

git fetch origin
git rebase origin/master
git push origin master --follow-tags
