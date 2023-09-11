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

def patch(library: Path):
  # remove empty v1 services
  for service in ['sql_available_database_versions_service', 'sql_events_service', 'sql_iam_policies_service', 'sql_instance_names_service', 'sql_regions_service']:
    for suffix in ['_client_config.json', '_client.ts', '_proto_list.json']:
      os.unlink(library / f'src/v1/{service}{suffix}')
    os.unlink(library / f'test/gapic_{service}_v1.ts')

  # remove empty v1beta4 services
  for service in ['sql_iam_policies_service_client']:
    for suffix in ['_client_config.json', '_client.ts', '_proto_list.json']:
      os.unlink(library / f'src/v1beta4/{service}{suffix}')
    os.unlink(library / f'test/gapic_{service}_v1beta4.ts')

  # fix request.id which is Long but used in the path templates
  s.replace(library / f'src/v1/sql_backup_runs_service_client.ts', r'id: request\.id', 'id: request.id?.toString()')
  s.replace(library / f'src/v1beta4/sql_backup_runs_service_client.ts', r'id: request\.id', 'id: request.id?.toString()')

node.owlbot_main(relative_dir="packages/google-cloud-sql", templates_excludes=["src/index.ts", "src/v1/index.ts", "src/v1beta4/index.ts", "system-test/fixtures/sample/src/index.js", "system-test/fixtures/sample/src/index.ts"], patch_staging=patch)
