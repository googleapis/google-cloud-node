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
import logging

logging.basicConfig(level=logging.DEBUG)

# Run the gapic generator
gapic = gcp.GAPICGenerator()
versions = ['v1beta1', 'v1']
for version in versions:
    library = gapic.node_library('securitycenter', version)
    s.copy(library, excludes=['src/index.js', 'README.md', 'package.json'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

s.replace('src/v1*/doc/google/cloud/securitycenter/v1*/doc_source.js',
        r"\[\\p\{L\}\\p\{N\}\]\(https:\/\/cloud\.google\.com\{\\p\{L\}\\p\{N\}_- \]\{0\,30\}\[\\p\{L\}\\p\{N\}\]\)\?",
        r"`\[\p{L}\p{N}]({\p{L}\p{N}_- ]{0,30}[\p{L}\p{N}])?`")

# cleanup some hiccups in jsdoc comments.
s.replace("src/index.js",
r"""\/\*\*
 \* @namespace google
 \*/""",
r"""
/**
 * @namespace google
 */
/**
 * @namespace google.type
 */
""")

# [START fix-dead-link]
s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'https:\/\/cloud\.google\.com[\s\*]*http:\/\/(.*)[\s\*]*\)',
        r"https://\1)")

s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'toISOString\]',
        'toISOString)')
# [END fix-dead-link]

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
