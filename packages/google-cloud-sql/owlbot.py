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

node.owlbot_main(relative_dir="packages/google-cloud-sql")
s.replace("packages/google-cloud-sql/src/*/sql_backup_runs_service_client.ts", "id: request.id,", "id: request.id?.toString()") 
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlAvailableDatabaseVersionsServiceClient} from './sql_available_database_versions_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlEventsServiceClient} from './sql_events_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlIamPoliciesServiceClient} from './sql_iam_policies_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlInstanceNamesServiceClient} from './sql_instance_names_service_client';", "")
s.replace("packages/google-cloud-sql/src/*/index.ts", "export {SqlRegionsServiceClient} from './sql_regions_service_client';", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlAvailableDatabaseVersionsServiceClient =
    new sql.SqlAvailableDatabaseVersionsServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlEventsServiceClient = new sql.SqlEventsServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlIamPoliciesServiceClient = new sql.SqlIamPoliciesServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlInstanceNamesServiceClient = new sql.SqlInstanceNamesServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.js", r"""const sqlRegionsServiceClient = new sql.SqlRegionsServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""SqlAvailableDatabaseVersionsServiceClient,""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""SqlEventsServiceClient,""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""SqlIamPoliciesServiceClient,""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""SqlInstanceNamesServiceClient,""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", r"""SqlRegionsServiceClient,""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""// check that the client class type name can be used
function doStuffWithSqlAvailableDatabaseVersionsServiceClient(
  client: SqlAvailableDatabaseVersionsServiceClient
) {
  client.close();
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""function doStuffWithSqlEventsServiceClient(client: SqlEventsServiceClient) {
  client.close();
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""function doStuffWithSqlIamPoliciesServiceClient(
  client: SqlIamPoliciesServiceClient
) {
  client.close();
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""function doStuffWithSqlInstanceNamesServiceClient(
  client: SqlInstanceNamesServiceClient
) {
  client.close();
}""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""// check that the client instance can be created
  const sqlAvailableDatabaseVersionsServiceClient =
    new SqlAvailableDatabaseVersionsServiceClient();
  doStuffWithSqlAvailableDatabaseVersionsServiceClient(
    sqlAvailableDatabaseVersionsServiceClient
  );""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""const sqlEventsServiceClient = new SqlEventsServiceClient();
  doStuffWithSqlEventsServiceClient(sqlEventsServiceClient);
  // check that the client instance can be created""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""const sqlIamPoliciesServiceClient = new SqlIamPoliciesServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""doStuffWithSqlIamPoliciesServiceClient(sqlIamPoliciesServiceClient);""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""  // check that the client instance can be created
  const sqlInstanceNamesServiceClient = new SqlInstanceNamesServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""doStuffWithSqlInstanceNamesServiceClient(sqlInstanceNamesServiceClient);
  // check that the client instance can be created""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""const sqlRegionsServiceClient = new SqlRegionsServiceClient();""", "")
s.replace("packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts", 
r"""doStuffWithSqlRegionsServiceClient(sqlRegionsServiceClient);""", "")
shell.run(('rm', '-rf', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_events_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_events_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_events_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_iam_policies_service_client.ts','packages/google-cloud-sql/src/v1/sql_iam_policies_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_iam_policies_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_regions_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_regions_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_regions_service_proto_list.json', 'packages/google-cloud-sql/test/gapic_sql_available_database_versions_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_events_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_instance_names_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_regions_service_v1.ts', 'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client.ts', 'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client_config.json', 'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_proto_list.json', 'packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1beta4.ts'), hide_output = False)