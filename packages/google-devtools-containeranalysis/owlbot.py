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
import synthtool.languages.node_mono_repo as node
import logging
import os
import json
import pathlib

def patch(library: pathlib.Path):
    # fix the URL of grafeas.io (this is already fixed upstream).
    s.replace(library / 'src/v1beta1/*.ts',
            'grafeas.io',
            'https://grafeas.io')

    s.replace(library / "src/v1beta1/grafeas_v1_beta1_client*.*", "google.devtools.containeranalysis", "grafeas")

    to_remove = [
        library / 'src/v1/grafeas_client.ts',
        library / 'src/v1/grafeas_client_config.json',
        library / 'test/gapic_grafeas_v1.ts',
    ]
    for filePath in to_remove:
        if os.path.exists(filePath):
            os.unlink(filePath)


node.owlbot_main(relative_dir="packages/google-devtools-containeranalysis",staging_excludes=[
    'packages/google-devtools-containeranalysis/package.json', 'packages/google-devtools-containeranalysis/README.md',
    'packages/google-devtools-containeranalysis/src/v1beta1/index.ts', 'packages/google-devtools-containeranalysis/tslint.json'],
    patch_staging=patch)

