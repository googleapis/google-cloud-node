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
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


# Run the gapic generator
gapic = gcp.GAPICBazel()
name = 'datacatalog'
versions = ['v1', 'v1beta1']
for version in versions:
    library = gapic.node_library(name, version)
    s.copy(library, excludes=[
           'README.md', 'linkinator.config.json', '.mocharc.json', 'package.json'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=versions, default_version='v1')
s.copy(templates, excludes=[])

# TODO: Remove the following replace once Datacatalog is ready to release a break change
# Users should use beta Client with explicitly specify the beta version
# Add beta version PolicyTagManagerClient, PolicyTagManagerSerializationClient to export
s.replace('src/index.ts',
          '\nexport \{v1\, v1beta1\, DataCatalogClient\}\;\nexport default \{v1\, v1beta1\, DataCatalogClient\}\;',
          'const PolicyTagManagerClient = v1beta1.PolicyTagManagerClient;\nconst PolicyTagManagerSerializationClient = v1beta1.PolicyTagManagerSerializationClient\n\nexport {v1, v1beta1, DataCatalogClient, PolicyTagManagerClient, PolicyTagManagerSerializationClient};\nexport default {v1, v1beta1, DataCatalogClient, PolicyTagManagerClient, PolicyTagManagerSerializationClient};')

node.postprocess_gapic_library()
