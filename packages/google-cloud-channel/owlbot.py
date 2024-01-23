# Copyright 2024 Google LLC
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
import synthtool.languages.node_mono_repo as node
import pathlib
from synthtool import shell

node.owlbot_main(relative_dir="packages/google-cloud-channel",
    templates_excludes=['test/gapic_cloud_channel_service_v1.ts', 'package.json'],
    staging_excludes=['test/gapic_cloud_channel_service_v1.ts', 'package.json']
)

shell.run(("rm", "-rf", "packages/google-cloud-channel/test/gapic_cloud_channel_reports_service_v1.ts"), hide_output=True)
