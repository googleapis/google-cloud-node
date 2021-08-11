# Copyright 2020 Google LLC
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
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICBazel()
common_templates = gcp.CommonTemplates()

versions = ['v1']
name = 'compute'

for version in versions:
    library = gapic.node_library(name, version, diregapic=True)

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json']
    )

templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

s.replace("src/v1/url_maps_client.ts",
          "\(/cdn/docs/invalidating-cached-content",
          "(https://cloud.google.com/cdn/docs/invalidating-cached-content")

node.postprocess_gapic_library()
