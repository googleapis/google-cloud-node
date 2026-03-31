# Copyright 2024 Google LLC.
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

common_templates = gcp.CommonTemplates()
templates = common_templates.node_mono_repo_library(relative_dir="core/projectify")
s.copy(sources=templates, destination="core/projectify", excludes=["LICENSE", "README.md", ".github/ISSUE_TEMPLATE", ".github/scripts", ".kokoro", ".jsdoc.js"])
