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

# Run the gapic generator
gapic = gcp.GAPICGenerator()
versions = ['v1beta1']
for version in versions:
    library = gapic.node_library('datacatalog', version, private=False)
    s.copy(library, excludes=['README.md', 'package.json'])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates)

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
 * @namespace google.iam.v1
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.iam.v1
 */
/**
 * @namespace google.type
 */
""")

s.replace("src/v1beta1/doc/google/cloud/datacatalog/v1beta1/doc_gcs_fileset_spec.js",
r"""\* @see \[google.cloud.datacatalog.v1beta1.GcsFileSpec definition in proto format\]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/gcs_fileset_spec.proto}
""",
r"""
""")

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
