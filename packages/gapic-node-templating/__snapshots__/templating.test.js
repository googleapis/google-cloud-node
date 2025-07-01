exports['tests for templates it should create the templates in the directory 1'] = `
# Copyright 2022 Google LLC
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

deep-copy-regex:
    - source: /google/cloud/kms/(.*)/.*-nodejs
      dest: /owl-bot-staging/google-cloud-kms/$1

api-name: kms
`

exports['tests for templates it should create the templates in the directory 2'] = `
{
  "name": "kms",
  "name_pretty": "Key Management Service",
  "product_documentation": "https://cloud.google.com/kms",
  "client_documentation": "https://cloud.google.com/nodejs/docs/reference/kms/latest",
  "issue_tracker": "https://github.com/googleapis/google-cloud-node/issues",
  "release_level": "preview",
  "language": "nodejs",
  "repo": "googleapis/google-cloud-node",
  "distribution_name": "@google-cloud/kms",
  "api_id": "kms.googleapis.com",
  "default_version": "v1",
  "requires_billing": true,
  "library_type": "GAPIC_AUTO",
  "api_shortname": "kms"
}


`
