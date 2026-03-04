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

. .kokoro/setup-vars.sh

# Lease a second service account for testing listing with multiple service accounts
export HMAC_KEY_TEST_SECOND_SERVICE_ACCOUNT=$(./gimmeproj -project=$HMAC_PROJECT lease 15m)
# Add to the list of leased service account for clean up after tests
export LEASED_SERVICE_ACCOUNTS="$LEASED_SERVICE_ACCOUNTS $HMAC_KEY_TEST_SECOND_SERVICE_ACCOUNT"
