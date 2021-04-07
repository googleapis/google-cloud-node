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
import synthtool.languages.node as node
import json
import logging
from pathlib import Path

# Load the default version defined in .repo-metadata.json.
default_version = json.load(open(".repo-metadata.json", "rt"))["default_version"]
staging = Path("owl-bot-staging")

if staging.is_dir():
  # Collect the subdirectories of the staging directory.
  versions = [v.name for v in staging.iterdir() if v.is_dir()]
  # Reorder the versions so the default version always comes last.
  versions = [v for v in versions if v != default_version] + [default_version]
  # Copy each version directory into the root.
  for version in versions:
      library = staging / version
      _tracked_paths.add(library)
      s_copy([library], excludes=["README.md", "package.json", "src/index.ts"])
  # The staging directory should never be merged into the main branch.
  shutil.rmtree(staging)
else:
  # Collect the subdirectories of the src directory.
  src = Path("src")
  versions = [v.name for v in src.iterdir() if v.is_dir()]
  # Reorder the versions so the default version always comes last.
  versions = [v for v in versions if v != default_version] + [default_version]

## Note: this API only supports regional endpoints and does not support default scopes.
s.replace(f"src/*/document_*_service_client.ts",
          "servicePath !== staticMembers.servicePath && ",
          ""
         )
s.replace(f"src/*/document_*_service_client.ts",
          "and we're connecting to a non-default endpoint, set scopes just in case",
          "set scopes"
         )
s.replace(f"src/*/document_*_service_client.ts",
          r"// Set the default scopes in auth client if needed(.|\n)*?}",
          ""
         )

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src', versions=versions, default_version=default_version)
s.copy(templates, excludes=[])

node.postprocess_gapic_library_hermetic()
