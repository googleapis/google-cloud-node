#!/bin/bash
# Copyright 2017 Google Inc.
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

#!/bin/bash

SYSTEM_TESTS_ENCRYPTION_KEY=$(cat $KOKORO_GFILE_DIR/SYSTEM_TESTS_ENCRYPTION_KEY)

cd github/google-cloud-node-storage/

# Each of these steps should match the `sample_tests` job in
# `.circleci/config.yml`. Failure to keep these in sync will probably
# result in failed test runs in Kokoro.

# Decrypt credentials.
openssl aes-256-cbc -d -in .circleci/key.json.enc \
  -out .circleci/key.json \
  -k "${SYSTEM_TESTS_ENCRYPTION_KEY}"

# Install and link the module.
npm install
npm link

# Link the module being tested to the samples.
cd samples/
npm install
npm link @google-cloud/storage
cd ..

# Run sample tests.
GCLOUD_PROJECT=long-door-651 \
  GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/.circleci/key.json \
  npm run samples-test
