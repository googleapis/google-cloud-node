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
common_templates = gcp.CommonTemplates()

library = gapic.node_library(
    'iot', 'v1',
    config_path="/google/cloud/iot/"
                f"artman_cloudiot.yaml")

# skip index, protos, package.json, and README.md
s.copy(
    library,
    excludes=['package.json', 'README.md', 'src/index.js'],
)

# Streaming is broken and missing grpc handling
# https://github.com/googleapis/gapic-generator/issues/2152
s.replace(
    'src/v1/device_manager_client.js',
    f'(listDeviceRegistriesStream\(.*\n\s+options = .*\n)(\n\s+return)',
    '''\g<1>options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });\n\g<2>''')

templates = common_templates.node_library(package_name="@google-cloud/automl")
s.copy(templates)

#
# Node.js specific cleanup
#
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
