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
import json
import os

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICMicrogenerator()
versions = ['v1']
for version in versions:
    library = gapic.typescript_library(
            'kms', version,
            generator_args={
                "grpc-service-config": f"google/cloud/kms/{version}/cloudkms_grpc_service_config.json",
                "package-name": f"@google-cloud/kms"
                },
            proto_path=f'/google/cloud/kms/{version}',
            extra_proto_files=['google/cloud/common_resources.proto', 'google/iam/v1']
            )
    # skip index, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'],
    )

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)
# Remove unneeded protos in proto_list.json
# In micro-generators, we do have default multiple common protos set as dependencies.
# But if the proto is also specified in protoc command (used to generating client libraries), 
# protoc command will fail becasue of the repetition and force us to remove the duplicate protos reference
list_json='src/v1/key_management_service_proto_list.json'
remove_proto_keywords=['/google/api', '/google/protobuf', 'google/type']
with open(list_json, 'r') as f:
    items=json.load(f)
    content =[item for item in items if all([(x not in item) for x in remove_proto_keywords])]
    new_file=json.dumps(content, indent=2) + '\n'
with open(list_json, 'w') as f:  
    f.write(new_file)

# surgery in client.ts file
client_file='src/v1/key_management_service_client.ts'
s.replace(client_file, 
'import \* as gapicConfig from \'\.\/key_management_service_client_config\.json\';',
'import * as gapicConfig from \'./key_management_service_client_config.json\'; import {IamClient} from \'../helper\';')

s.replace(client_file, 
'private \_terminated = false;', 
'private _terminated = false; \n private _iamClient: IamClient;')

s.replace(client_file,
'\/\/ Determine the client header string.', 
'this._iamClient = new IamClient(opts); \n // Determine the client header string.')

with open('helperMethods.ts.tmpl', 'r') as helper_file:
    content = helper_file.read()
s.replace(client_file, '^}', content)
# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
