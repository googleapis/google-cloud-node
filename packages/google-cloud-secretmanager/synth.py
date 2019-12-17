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

# run the gapic generator
# gapic = gcp.GAPICMicrogenerator()
# versions = ['v1beta1']
#for version in versions:
#  library = gapic.typescript_library(
#    'secretmanager',
#    generator_args={
#      "grpc-service-config": "google/cloud/secrets/v1beta1/secretmanager_grpc_service_config.json"
#    },
#    proto_path='/google/cloud/secrets/v1beta1',
#    version=version)
#s.copy(library, excludes=['package.json', 'README.md'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates, excludes=[])

# Node.js specific cleanup
subprocess.run(['rm', '-rf', './system-test/fixtures'])
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])

# Add missing jsdoc annotations:
s.replace("src/index.js",
r"""\/\*\*
 \* @namespace google
 \*/""",
r"""/**
 * @namespace google
 */
/**
 * @namespace google.rpc
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.longrunning
 */""")
s.replace("src/index.js",
r"namespace google.cloud.cloudbuild",
r"namespace google.devtools.cloudbuild")
