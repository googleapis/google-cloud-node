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

gapic = gcp.GAPICGenerator()

versions = ['v1', 'v1p1beta1', 'v1p2beta1']

for version in versions:
    library = gapic.node_library('vision', version)

    s.copy(library / 'protos')
    s.copy(library / 'src' / version)
    s.copy(library / 'samples')
    s.copy(library / 'system-test')
    s.copy(library / 'test')

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
