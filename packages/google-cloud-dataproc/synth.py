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

gapic = gcp.GAPICMicrogenerator()
versions = ['v1', 'v1beta2']
for version in versions:
    library = gapic.typescript_library(
        'dataproc',
        version,
        generator_args={
            "grpc-service-config": f"google/cloud/dataproc/{version}/dataproc_grpc_service_config.json",
            "package-name": f"@google-cloud/dataproc",
            "main-service": f"dataproc",
        },
        proto_path=f'/google/cloud/dataproc/{version}',
    )
    s.copy(
        library,
        excludes=['package.json', 'src/index.ts', ]
    )

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'lint'])
subprocess.run(['npx', 'compileProtos', 'src'])
