# Copyright 2018 Google LLC
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
import logging
import subprocess

# Run the gapic generator
gapic = gcp.GAPICMicrogenerator()
versions = ['v3']
for version in versions:
  library = gapic.typescript_library(
    'translate',
    generator_args={
      "grpc-service-config": "google/cloud/translate/v3/translate_grpc_service_config.json",
      "package-name":"@google-cloud/translate"
    },
    version=version)
s.copy(library, excludes=['README.md', 'package.json', 'src/index.ts'])

# Update path discovery due to build/ dir and TypeScript conversion.
s.replace("test/gapic-*.js", "../../package.json", "../../../package.json")

# [START fix-dead-link]
s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'https:\/\/cloud\.google\.com[\s\*]*http:\/\/(.*)[\s\*]*\)',
        r"https://\1)")

s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'toISOString\]',
        'toISOString)')
# [END fix-dead-link]

logging.basicConfig(level=logging.DEBUG)
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates, excludes=[])

# Node.js specific cleanup
subprocess.run(["npm", "install"])
subprocess.run(["npm", "run", "fix"])
