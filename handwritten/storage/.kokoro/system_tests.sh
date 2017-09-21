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

# Each of these steps should match the `system_tests` job in
# `.circleci/config.yml`. Failure to keep these in sync will probably
# result in failed test runs in Kokoro.

# Decrypt credentials.
openssl aes-256-cbc -d -in .circleci/key.json.enc \
  -out .circleci/key.json \
  -k "${SYSTEM_TESTS_ENCRYPTION_KEY}"

# Decrypt second account credentials (storage-specific).
openssl aes-256-cbc -d -in .circleci/no-whitelist-key.json.enc \
  -out .circleci/no-whitelist-key.json \
  -k "${SYSTEM_TESTS_ENCRYPTION_KEY}"

# Install modules and dependencies.
npm install

# Run system tests.
GCN_STORAGE_2ND_PROJECT_ID=gcloud-node-whitelist-ci-tests \
  GCN_STORAGE_2ND_PROJECT_KEY=.circleci/no-whitelist-key.json \
  GOOGLE_APPLICATION_CREDENTIALS=.circleci/key.json \
  npm run system-test
