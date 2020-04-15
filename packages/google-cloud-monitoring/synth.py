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
import subprocess
import logging
logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICMicrogenerator()
version = "v3"
library = gapic.typescript_library(
    "monitoring",
    version,
    generator_args={
        "grpc-service-config": f"google/monitoring/{version}/monitoring_grpc_service_config.json",
        "package-name": "@google-cloud/monitoring",
        "main-service": "monitoring"
    },
    proto_path=f'/google/monitoring/{version}',
    extra_proto_files=['google/cloud/common_resources.proto']
)

s.copy(library, excludes=["src/index.ts", "README.md", "package.json"])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

subprocess.run(["npm", "install"])
subprocess.run(["npm", "run", "lint"])
subprocess.run(['npx', 'compileProtos', 'src'])
