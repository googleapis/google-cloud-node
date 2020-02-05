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

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICMicrogenerator()
versions = ['v1beta1', 'v1', 'v1p1beta1']
name = 'securitycenter'
for version in versions:
    library = gapic.typescript_library(
        name,
        proto_path=f'google/cloud/{name}/{version}',
        generator_args={
            'grpc-service-config': f'google/cloud/{name}/{version}/{name}_grpc_service_config.json',
            'package-name': f'@google-cloud/security-center',
        },
        extra_proto_files=['google/cloud/common_resources.proto'],
        version=version)
    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'src/index.ts', 'README.md']
    )

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates, excludes=['.kokoro/samples-test.sh', '.kokoro/samples-test.sh'])

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
