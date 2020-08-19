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
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True

gapic = gcp.GAPICBazel()
# note: default version must be the last one to generate the correct system test
versions = ['v3beta1']

for version in versions:
    library = gapic.node_library('dialogflow', 'v3beta1', bazel_target=f"//google/cloud/dialogflow/cx/v3beta1:dialogflow-cx-v3beta1-nodejs")
    s.copy(library, excludes=[])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=versions)
s.copy(templates, excludes=[])

node.postprocess_gapic_library()
