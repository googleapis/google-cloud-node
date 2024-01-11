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

node.owlbot_main(relative_dir="packages/google-cloud-sql", staging_excludes=["system-test/fixtures/sample/src/index.js", "system-test/fixtures/sample/src/index.ts", "package.json"], templates_excludes=["system-test/fixtures/sample/src/index.js", "system-test/fixtures/sample/src/index.ts", "package.json"])
s.replace("packages/google-cloud-sql/src/*/sql_backup_runs_service_client.ts", r"id: request\.id \?\? ''", "id: request.id?.toString() ?? ''") 
s.replace("packages/google-cloud-sql/src/*/index.ts", r"export {SqlAvailableDatabaseVersionsServiceClient} from '\.\/sql_available_database_versions_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", r"export {SqlEventsServiceClient} from '\.\/sql_events_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", r"export {SqlIamPoliciesServiceClient} from '\.\/sql_iam_policies_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", r"export {SqlInstanceNamesServiceClient} from '\.\/sql_instance_names_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", r"export {SqlRegionsServiceClient} from '\.\/sql_regions_service_client';", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlAvailableDatabaseVersionsServiceClient =
    new sql\.SqlAvailableDatabaseVersionsServiceClient\(\);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"const sqlEventsServiceClient = new sql\.SqlEventsServiceClient\(\);", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"const sqlIamPoliciesServiceClient = new sql\.SqlIamPoliciesServiceClient\(\);", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"const sqlInstanceNamesServiceClient = new sql\.SqlInstanceNamesServiceClient\(\);", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"const sqlRegionsServiceClient = new sql\.SqlRegionsServiceClient\(\);", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", "SqlAvailableDatabaseVersionsServiceClient,", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", "SqlEventsServiceClient,", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", "SqlIamPoliciesServiceClient,", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", "SqlInstanceNamesServiceClient,", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", "SqlRegionsServiceClient,", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""function doStuffWithSqlAvailableDatabaseVersionsServiceClient\(
  client: SqlAvailableDatabaseVersionsServiceClient
\) {
  client\.close\(\);
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""function doStuffWithSqlEventsServiceClient\(client: SqlEventsServiceClient\) {
  client\.close\(\);
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""function doStuffWithSqlIamPoliciesServiceClient\(
  client: SqlIamPoliciesServiceClient
\) {
  client\.close\(\);
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""function doStuffWithSqlInstanceNamesServiceClient\(
  client: SqlInstanceNamesServiceClient
\) {
  client\.close\(\);
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""function doStuffWithSqlRegionsServiceClient\(client: SqlRegionsServiceClient\) {
  client\.close\(\);
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""
  const sqlAvailableDatabaseVersionsServiceClient =
    new SqlAvailableDatabaseVersionsServiceClient\(\);
  doStuffWithSqlAvailableDatabaseVersionsServiceClient\(
    sqlAvailableDatabaseVersionsServiceClient
  \);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""const sqlEventsServiceClient = new SqlEventsServiceClient\(\);
  doStuffWithSqlEventsServiceClient\(sqlEventsServiceClient\);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""const sqlIamPoliciesServiceClient = new SqlIamPoliciesServiceClient\(\);
  doStuffWithSqlIamPoliciesServiceClient\(sqlIamPoliciesServiceClient\);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""const sqlInstanceNamesServiceClient = new SqlInstanceNamesServiceClient\(\);
  doStuffWithSqlInstanceNamesServiceClient\(sqlInstanceNamesServiceClient\);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""const sqlRegionsServiceClient = new SqlRegionsServiceClient\(\);
  doStuffWithSqlRegionsServiceClient\(sqlRegionsServiceClient\);""", "")
shell.run(("rm", "-rf", "packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client.ts", "packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client_config.json", "packages/google-cloud-sql/src/v1/sql_available_database_versions_service_proto_list.json", "packages/google-cloud-sql/src/v1/sql_events_service_client.ts", "packages/google-cloud-sql/src/v1/sql_events_service_client_config.json", "packages/google-cloud-sql/src/v1/sql_events_service_proto_list.json", "packages/google-cloud-sql/src/v1/sql_iam_policies_service_client.ts", "packages/google-cloud-sql/src/v1/sql_iam_policies_service_client_config.json", "packages/google-cloud-sql/src/v1/sql_iam_policies_service_proto_list.json", "packages/google-cloud-sql/src/v1/sql_instance_names_service_client.ts", "packages/google-cloud-sql/src/v1/sql_instance_names_service_client_config.json", "packages/google-cloud-sql/src/v1/sql_instance_names_service_proto_list.json", "packages/google-cloud-sql/src/v1/sql_regions_service_client.ts", "packages/google-cloud-sql/src/v1/sql_regions_service_client_config.json", "packages/google-cloud-sql/src/v1/sql_regions_service_proto_list.json", "packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client.ts", "packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client_config.json", "packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_proto_list.json", "packages/google-cloud-sql/test/gapic_sql_available_database_versions_service_v1.ts", "packages/google-cloud-sql/test/gapic_sql_events_service_v1.ts", "packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1.ts", "packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1beta4.ts", "packages/google-cloud-sql/test/gapic_sql_instance_names_service_v1.ts", "packages/google-cloud-sql/test/gapic_sql_instance_names_service_v1.ts", "packages/google-cloud-sql/test/gapic_sql_regions_service_v1.ts"), hide_output=True)
