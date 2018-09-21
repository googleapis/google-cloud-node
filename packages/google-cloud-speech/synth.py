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

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()
common_templates = gcp.CommonTemplates()

versions = ['v1', 'v1p1beta1']

for version in versions:
    library = gapic.node_library('speech', version)

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.js',]
    )

    # Manual helper methods overrides the streaming API so that it
    # accepts streamingConfig when calling streamingRecognize. Fix
    # the gapic tests to use the overridden method signature.
    s.replace( f"test/gapic-{version}.js",
        "(mockBidiStreamingGrpcMethod\()request",
        r"\1{ streamingConfig: {} }")

    s.replace(
        f"test/gapic-{version}.js",
        "stream\.write\(request\)",
        "stream.write()")

    s.replace(
        f"test/gapic-{version}.js",
        "// Mock request\n\s*const request = {};",
        "")

templates = common_templates.node_library()
# TODO: remove excludes once var's are converted to const/let
s.copy(templates, excludes=['.eslintrc.yml'])

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
