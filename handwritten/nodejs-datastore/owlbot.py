# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging
from pathlib import Path
from synthtool import _tracked_paths
from synthtool import shell
import shutil

logging.basicConfig(level=logging.DEBUG)

staging = Path("owl-bot-staging")

if staging.is_dir():
    logging.info(f"Copying files from staging directory ${staging}.")

    # Copy the datastore library.
    for version in ['v1']:
        library = staging / version
        _tracked_paths.add(library)
        s.copy([library],excludes=[
            'package.json', 'README.md', 'src/index.ts', 'src/v1/index.ts'])

    # Copy the admin library.
    for version in ['v1']:
        library = staging / 'admin' / version
        _tracked_paths.add(library)
        s.copy([library],excludes=[
            'package.json', 'README.md', 'src/index.ts', 'src/v1/index.ts', 'tsconfig.json', 'tslint.json',
              'system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js',
              '.jsdoc.js', 'webpack.config.js'])

    # Patch the code.
    system_test_files = ['system-test/fixtures/sample/src/index.ts', 'system-test/fixtures/sample/src/index.js']
    for file in system_test_files:
        s.replace(file, 'DatastoreClient', 'Datastore')
        s.replace(file, 'client.close', '// client.close'); # does not work with the manual layer

    # The staging directory should never be merged into the main branch.
    shutil.rmtree(staging)

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location="build/src")
s.copy(templates)

node.postprocess_gapic_library_hermetic()

# Remove generated samples from veneer library:
shell.run(('rm', '-rf', 'samples/generated'), hide_output = False)
