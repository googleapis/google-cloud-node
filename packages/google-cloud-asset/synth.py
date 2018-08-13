# copyright 2018 google LLC
#
# licensed under the apache license, version 2.0 (the "license");
# you may not use this file except in compliance with the license.
# you may obtain a copy of the license at
#
#     http://www.apache.org/licenses/license-2.0
#
# unless required by applicable law or agreed to in writing, software
# distributed under the license is distributed on an "as is" basis,
# without warranties or conditions of any kind, either express or implied.
# see the license for the specific language governing permissions and
# limitations under the license.

"""this script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicconfig(level=logging.debug)

gapic = gcp.gapicgenerator()
common_templates = gcp.commontemplates()

version = "v1"

library = gapic.node_library('asset', version, private=True)
s.copy(library, excludes=['src/index.js', 'readme.md', 'package.json'])

templates = common_templates.node_library(
    package_name="@google-cloud/asset",
    repo_name="googleapis/nodejs-asset",
)
s.copy(templates)


'''
node.js specific cleanup
'''
subprocess.run(['npm', 'ci'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])

