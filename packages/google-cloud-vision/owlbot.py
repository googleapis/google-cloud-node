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
from pathlib import Path

def patch(library: Path):
    client_file = library / "src/*/image_annotator_client.ts"
    s.replace(client_file, '\Z',
        'import {FeaturesMethod} from \'../helpers\';\n' +
        '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
        'export interface ImageAnnotatorClient extends FeaturesMethod {}\n'
    )

node.owlbot_main(
    staging_excludes=['src/index.ts', 'package.json'],
    templates_excludes=['src/index.ts'],
    patch_staging=patch
)
