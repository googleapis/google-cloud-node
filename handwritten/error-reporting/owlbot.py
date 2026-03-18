# Copyright 2018 Google LLC.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
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
import os

logging.basicConfig(level=logging.DEBUG)

common_templates = gcp.CommonTemplates()
templates = common_templates.node_mono_repo_library(relative_dir="handwritten/error-reporting")
s.copy(templates, destination="handwritten/error-reporting", excludes=["README.md"])
node.fix_hermetic(relative_dir="handwritten/error-reporting")


# --------------------------------------------------------------------------
# Modify test configs
# --------------------------------------------------------------------------

# add shared environment variables to test configs
s.move(
    "handwritten/error-reporting/.kokoro/common_env_vars.cfg",
    "handwritten/error-reporting/.kokoro/common.cfg",
    merge=lambda src, dst, _: dst if src.strip() in dst else f"{dst.rstrip()}\n{src.strip()}\n",
)
for path, subdirs, files in os.walk(f"handwritten/error-reporting/.kokoro/continuous"):
    for name in files:
        if name == "common.cfg":
            file_path = os.path.join(path, name)
            s.move(
                "handwritten/error-reporting/.kokoro/common_env_vars.cfg",
                file_path,
                merge=lambda src, dst, _: dst if src.strip() in dst else f"{dst.rstrip()}\n{src.strip()}\n",
            )
