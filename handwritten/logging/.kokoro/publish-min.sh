#!/bin/bash

# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# `npm postpublish` script that ships an minified version of this library
# Todo(nicolezhu): Eventually deprecate this script for go/nodejs-logging/handwritten/logging-lite

set -eo pipefail

# Uglify /build to publish a smaller package
for d in $(find ./build/ -maxdepth 8 -type d)
do
  pushd $d
    for f in *.js; do
      [ -f "$f" ] || break

      if [ -f "$f.map" ]; then
        # Keep original .ts source mappings
        uglifyjs --source-map "content='$f.map', url='$f.map'" "$f" --output "$f"
      else
        uglifyjs "$f" --output "$f"
      fi
    done
  popd
done

# Change and publish under package name `@google-cloud/logging-min`
sed -i -e 's/"name": "@google-cloud\/logging"/"name": "@google-cloud\/logging-min"/' package.json
if [ -f "package.json-e" ]; then
  rm package.json-e
fi

# Note: ignore the postpublish script here to avoid an endless publish loop.
npm publish --ignore-scripts --access=public --registry=https://wombat-dressing-room.appspot.com
