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

gapic = gcp.GAPICGenerator()
versions = ['v1', 'v1beta2']
for version in versions:
  library = gapic.node_library('dataproc', version)
  s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js',]
  )

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

s.replace('src/**/doc/google/cloud/dataproc/v1beta2/doc_clusters.js',
        'https:\/\/cloud\.google\.com[\s\*]*\/compute\/',
        'https://cloud.google.com/compute/')


subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
