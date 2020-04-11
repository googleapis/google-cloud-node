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

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICMicrogenerator()
common_templates = gcp.CommonTemplates()

versions = ['v1', 'v1beta1']

for version in versions:
    library = gapic.typescript_library(
        'texttospeech', 
        generator_args={
            "grpc-service-config": f"google/cloud/texttospeech/{version}/texttospeech_grpc_service_config.json",
            "package-name":f"@google-cloud/text-to-speech"
            },
        proto_path=f'/google/cloud/texttospeech/{version}',
        version=version)

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'],
    )

templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'lint'])
subprocess.run(['npx', 'compileProtos', 'src'])
