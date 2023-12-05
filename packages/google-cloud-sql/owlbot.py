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
import synthtool.languages.node_mono_repo as node
from synthtool import shell

node.owlbot_main(relative_dir="packages/google-cloud-sql", staging_excludes=["packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", "packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts"])
s.replace("packages/google-cloud-sql/src/*/sql_backup_runs_service_client.ts", "id: request.id,", "id: request.id?.toString()") 
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlAvailableDatabaseVersionsServiceClient} from './sql_available_database_versions_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlEventsServiceClient} from './sql_events_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlIamPoliciesServiceClient} from './sql_iam_policies_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlInstanceNamesServiceClient} from './sql_instance_names_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlRegionsServiceClient} from './sql_regions_service_client';", "")