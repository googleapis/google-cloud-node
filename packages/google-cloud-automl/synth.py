# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import synthtool as s
import synthtool.gcp as gcp
import logging
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator(private=True)

# automl has two product names, and a poorly named artman yaml
v1beta1_library = gapic.nodejs_library(
    'automl', 'v1beta1'
)

# Copy all files except for 'README.md' and 'package.json'
s.copy(v1beta1_library / 'protos')
s.copy(v1beta1_library / 'src')
s.copy(v1beta1_library / 'test')

'''
Node.js specific cleanup
'''
# Repo Cleanup/Setup
subprocess.run(['npm', 'install'])

# Generates scaffolding, enters contributors names
subprocess.run(['npm', 'run', 'generate-scaffolding'])

# prettify and lint
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
