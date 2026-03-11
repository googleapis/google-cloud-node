# Copyright 2019 Google LLC
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
import synthtool.gcp as gcp
import synthtool.languages.node_mono_repo as node
import logging

logging.basicConfig(level=logging.DEBUG)

common_templates = gcp.CommonTemplates()
templates = common_templates.node_mono_repo_library(relative_dir="handwriten/storage", source_location='build/src')
s.copy(templates, destination="handwritten/storage", excludes=['.jsdoc.js',
                            '.github/release-please.yml',
                            '.github/sync-repo-settings.yaml',
                            '.github/workflows/ci.yaml',
                            '.prettierrc.js',
                            '.mocharc.js',
                            '.kokoro/continuous/node14/system-test.cfg',
                            '.kokoro/presubmit/node14/system-test.cfg',
                            '.kokoro/release/publish.cfg',
                            '.kokoro/system-test.sh',
                            '.kokoro/samples-test.sh',
                            '.OwlBot.yaml'
                            ])

# Create .config directory under $HOME to get around permissions issues
# with resumable upload.
s.replace(
    "handwriten/storage/.circleci/config.yml",
    "command: npm run system-test",
    "command: mkdir $HOME/.config && npm run system-test")
node.fix_hermetic(relative_dir="handwritten/storage")
