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
import synthtool.languages.node as node
import pathlib


def patch(library: pathlib.Path):
    s.replace(library / 'src/*/cloud_tasks_client_config.json',
            '"initial_rpc_timeout_millis": 60000',
            '"initial_rpc_timeout_millis": 20000')
    s.replace(library / 'src/*/cloud_tasks_client_config.json',
            '"max_rpc_timeout_millis": 60000',
            '"max_rpc_timeout_millis": 20000')


node.owlbot_main(
    staging_excludes=["README.md", "package.json"],
    patch_staging=patch
)