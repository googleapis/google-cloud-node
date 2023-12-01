import json
import logging
import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node_mono_repo as node
from pathlib import Path
from synthtool import shell

def patch(library: Path):
  s.replace(library / 'src/v*/sql_backup_runs_service_client.ts', 'id: request\.id', 'id: request.id?.toString()') 
  s.replace(library / 'src/*/index.ts', "export {SqlAvailableDatabaseVersionsServiceClient} from './sql_available_database_versions_service_client';", "")
  s.replace(library / 'src/*/index.ts', "export {SqlEventsServiceClient} from './sql_events_service_client';", "")
  s.replace(library / 'src/*/index.ts', "export {SqlIamPoliciesServiceClient} from './sql_iam_policies_service_client';", "")
  s.replace(library / 'src/*/index.ts', "export {SqlInstanceNamesServiceClient} from './sql_instance_names_service_client';", "")
  s.replace(library / 'src/*/index.ts', "export {SqlRegionsServiceClient} from './sql_regions_service_client';", "")

node.owlbot_main(relative_dir="packages/google-cloud-sql", templates_excludes=["src/index.ts", "src/v1/index.ts", "src/v1beta4/index.ts", "system-test/fixtures/sample/src/index.js", "system-test/fixtures/sample/src/index.ts"], staging_excludes=["src/index.ts", "src/v1/index.ts"], patch_staging=patch)
shell.run(('rm', '-rf', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_events_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_events_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_events_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_iam_policies_service_client.ts','packages/google-cloud-sql/src/v1/sql_iam_policies_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_iam_policies_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_instance_names_service_proto_list.json', 'packages/google-cloud-sql/src/v1/sql_regions_service_client.ts', 'packages/google-cloud-sql/src/v1/sql_regions_service_client_config.json', 'packages/google-cloud-sql/src/v1/sql_regions_service_proto_list.json', 'packages/google-cloud-sql/test/gapic_sql_available_database_versions_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_events_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_instance_names_service_v1.ts', 'packages/google-cloud-sql/test/gapic_sql_regions_service_v1.ts'), hide_output = False)
