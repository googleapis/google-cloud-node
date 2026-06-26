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

import os
import synthtool as s
import synthtool.languages.node_mono_repo as node

node.owlbot_main(relative_dir="handwritten/logging",
    staging_excludes=[
        ".eslintignore", ".prettierignore", "src/index.ts", "README.md", "package.json",
        "system-test/fixtures/sample/src/index.js",
        "system-test/fixtures/sample/src/index.ts"],
    templates_excludes=[
        "src/index.ts",
        ".eslintignore",
        ".prettierignore",
        "CONTRIBUTING.md",
        ".github/auto-label.yaml",
        ".github/release-please.yml",
        ".github/CODEOWNERS",
        ".github/sync-repo-settings.yaml",
        "README.md"
    ]
)

# adjust .trampolinerc for environment tests
s.replace(
    "handwritten/logging/.trampolinerc",
    r"required_envvars[^\)]*\)",
    "required_envvars+=()"
)
s.replace(
    "handwritten/logging/.trampolinerc",
    r"pass_down_envvars\+\=\((?!\s*\"ENVIRONMENT\")",
    'pass_down_envvars+=(\n    "ENVIRONMENT"\n    "RUNTIME"'
)

# --------------------------------------------------------------------------
# Modify test configs
# --------------------------------------------------------------------------

# add shared environment variables to test configs
s.move(
    "handwritten/logging/.kokoro/common_env_vars.cfg",
    "handwritten/logging/.kokoro/common.cfg",
    merge=lambda src, dst, _: dst if src.strip() in dst else f"{dst.rstrip()}\n{src.strip()}\n",
)

for path, subdirs, files in os.walk(f"handwritten/logging/.kokoro/continuous"):
    for name in files:
        if name == "common.cfg":
            file_path = os.path.join(path, name)
            s.move(
                "handwritten/logging/.kokoro/common_env_vars.cfg",
                file_path,
                merge=lambda src, dst, _: dst if src.strip() in dst else f"{dst.rstrip()}\n{src.strip()}\n",
            )
