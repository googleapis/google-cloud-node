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

gapic = gcp.GAPICMicrogenerator()
versions = ['v1beta']
for version in versions:
    library = gapic.typescript_library(
        'os-login', 
        generator_args={
            "grpc-service-config": f"google/cloud/oslogin/{version}/oslogin_grpc_service_config.json",
            "package-name": f"@google-cloud/os-login"
            },
        proto_path=f'/google/cloud/oslogin/{version}',
        extra_proto_files=['google/cloud/oslogin/common/common.proto'],
        version=version)

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'],
    )

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npm', 'compileProtos', 'src'])
