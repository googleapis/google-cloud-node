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
from pathlib import Path
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()

# tasks has two product names, and a poorly named artman yaml
v2beta2_library = gapic._generate_code(
    'tasks', 'v2beta2', 'nodejs',
    config_path='artman_cloudtasks.yaml',
    artman_output_name='cloud-tasks-v2beta2')

# Copy all files except for 'README.md' and 'package.json'
s.copy(v2beta2_library / 'protos')
s.copy(v2beta2_library / 'src')
s.copy(v2beta2_library / 'test')


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
