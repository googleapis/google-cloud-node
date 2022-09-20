# Copyright 2021 Google LLC
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
import synthtool.languages.node as node
import pathlib


def patch(library: pathlib.Path):
    # fix for broken link in docs
    s.replace(library / 'src/v*/*_client.ts', '/compute/docs/',
            'https://cloud.google.com/compute/docs/')


node.owlbot_main(
    staging_excludes=['package.json', 'README.md'],
    patch_staging=patch
)
