# Copyright 2019 Google LLC
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
"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICMicrogenerator()
# keep v1beta1 for the time being:
library = gapic.typescript_library(
  'secretmanager',
  generator_args={
    "grpc-service-config": "google/cloud/secrets/v1beta1/secretmanager_grpc_service_config.json",
    "package-name": "@google-cloud/secret-manager",
  },
  proto_path='/google/cloud/secrets/v1beta1',
  version='v1beta1')
s.copy(library, excludes=['package.json', 'README.md', 'src/index.ts'])
# run the gapic generator (for all versions except v1beta1):
versions = ['v1']
library = 'secretmanager'
for version in versions:
  library = gapic.typescript_library(
    library,
    generator_args={
      "grpc-service-config": f"google/cloud/{library}/{version}/secretmanager_grpc_service_config.json",
      "package-name": "@google-cloud/secret-manager",
    },
    proto_path=f'/google/cloud/{library}/{version}',
    version=version)
s.copy(library, excludes=['package.json', 'README.md', 'src/index.ts'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates, excludes=[])

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
