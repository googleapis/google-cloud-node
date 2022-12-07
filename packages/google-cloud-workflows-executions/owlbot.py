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
"""This script is used to synthesize generated parts of this library."""

import os
import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node_mono_repo as node
import json
import logging
from pathlib import Path
import shutil
node.owlbot_main(relative_dir="packages/google-cloud-workflows-executions",templates_excludes=["src/index.ts"], staging_excludes=["src/v1/index.ts", "src/v1beta/index.ts", "src/index.ts", "README.md", "package.json"])
shutil.rmtree('v1', ignore_errors=True)
shutil.rmtree('v1beta', ignore_errors=True)

