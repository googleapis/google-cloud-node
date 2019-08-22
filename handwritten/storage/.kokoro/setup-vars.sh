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

# nodejs-storage's system tests require additional project and
# system test key
export GOOGLE_APPLICATION_CREDENTIALS=${KOKORO_GFILE_DIR}/storage-key.json
export GCN_STORAGE_2ND_PROJECT_ID=gcloud-node-whitelist-ci-tests
export GCN_STORAGE_2ND_PROJECT_KEY=${KOKORO_GFILE_DIR}/no-whitelist-key.json

export GOOGLE_CLOUD_KMS_KEY_ASIA="projects/long-door-651/locations/asia/keyRings/test-key-asia/cryptoKeys/test-key-asia"
export GOOGLE_CLOUD_KMS_KEY_US="projects/long-door-651/locations/us/keyRings/test-key-us/cryptoKeys/test-key-us"

# For testing SA HMAC
export HMAC_PROJECT=gimme-acc
curl https://storage.googleapis.com/gimme-proj/linux_amd64/gimmeproj > gimmeproj
chmod +x gimmeproj
./gimmeproj version

export HMAC_KEY_TEST_SERVICE_ACCOUNT=$(./gimmeproj -project=$HMAC_PROJECT lease 15m)
echo Leased service account: $HMAC_KEY_TEST_SERVICE_ACCOUNT
export LEASED_SERVICE_ACCOUNTS=$HMAC_KEY_TEST_SERVICE_ACCOUNT

cleanup_service_accounts () {
    for i in $LEASED_SERVICE_ACCOUNTS; do
        ./gimmeproj -project=$HMAC_PROJECT "done" $i
    done
}

trap cleanup_service_accounts EXIT
