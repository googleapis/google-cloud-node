const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Replaces all occurrences of a pattern in a file with a specified replacement string.
 * @param {string} filePath The path to the file.
 * @param {RegExp} pattern The regular expression to search for.
 * @param {string} replacement The string to replace the pattern with.
 */
function replaceInFile(filePath, pattern, replacement) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const result = data.replace(pattern, replacement);
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

const filesToDelete = [
  'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client.ts',
  'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_client_config.json',
  'packages/google-cloud-sql/src/v1/sql_available_database_versions_service_proto_list.json',
  'packages/google-cloud-sql/src/v1/sql_events_service_client.ts',
  'packages/google-cloud-sql/src/v1/sql_events_service_client_config.json',
  'packages/google-cloud-sql/src/v1/sql_events_service_proto_list.json',
  'packages/google-cloud-sql/src/v1/sql_iam_policies_service_client.ts',
  'packages/google-cloud-sql/src/v1/sql_iam_policies_service_client_config.json',
  'packages/google-cloud-sql/src/v1/sql_iam_policies_service_proto_list.json',
  'packages/google-cloud-sql/src/v1/sql_instance_names_service_client.ts',
  'packages/google-cloud-sql/src/v1/sql_instance_names_service_client_config.json',
  'packages/google-cloud-sql/src/v1/sql_instance_names_service_proto_list.json',
  'packages/google-cloud-sql/src/v1/sql_regions_service_client.ts',
  'packages/google-cloud-sql/src/v1/sql_regions_service_client_config.json',
  'packages/google-cloud-sql/src/v1/sql_regions_service_proto_list.json',
  'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client.ts',
  'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_client_config.json',
  'packages/google-cloud-sql/src/v1beta4/sql_iam_policies_service_proto_list.json',
  'packages/google-cloud-sql/test/gapic_sql_available_database_versions_service_v1.ts',
  'packages/google-cloud-sql/test/gapic_sql_events_service_v1.ts',
  'packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1.ts',
  'packages/google-cloud-sql/test/gapic_sql_iam_policies_service_v1beta4.ts',
  'packages/google-cloud-sql/test/gapic_sql_instance_names_service_v1.ts',
  'packages/google-cloud-sql/test/gapic_sql_regions_service_v1.ts'
];

filesToDelete.forEach(file => {
  try {
    fs.unlinkSync(path.resolve(file));
    console.log(`Successfully deleted: ${file}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File not found, skipping deletion: ${file}`);
    } else {
      console.error(`Error deleting file ${file}:`, err);
    }
  }
});

const replacements = [
  {
    files: 'packages/google-cloud-sql/src/*/sql_backup_runs_service_client.ts',
    searchPattern: /id: request.id ?? ''/g,
    replacement: "id: request.id?.toString() ?? ''"
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {SqlAvailableDatabaseVersionsServiceClient} from '\.\/sql_available_database_versions_service_client';/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {SqlEventsServiceClient} from '\.\/sql_events_service_client';/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {SqlIamPoliciesServiceClient} from '\.\/sql_iam_policies_service_client';/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {SqlInstanceNamesServiceClient} from '\.\/sql_instance_names_service_client';/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {SqlRegionsServiceClient} from '\.\/sql_regions_service_client';/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlAvailableDatabaseVersionsServiceClient =\n    new sql.SqlAvailableDatabaseVersionsServiceClient();/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlEventsServiceClient = new sql.SqlEventsServiceClient();/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlIamPoliciesServiceClient = new sql.SqlIamPoliciesServiceClient();/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlInstanceNamesServiceClient = new sql.SqlInstanceNamesServiceClient();/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlRegionsServiceClient = new sql.SqlRegionsServiceClient();/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlAvailableDatabaseVersionsServiceClient,/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlEventsServiceClient,/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlIamPoliciesServiceClient,/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlInstanceNamesServiceClient,/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlRegionsServiceClient,/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlAvailableDatabaseVersionsServiceClient(\n  client: SqlAvailableDatabaseVersionsServiceClient\n) {\n  client.close();
}/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlEventsServiceClient(client: SqlEventsServiceClient) {\n  client.close();
}/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlIamPoliciesServiceClient(\n  client: SqlIamPoliciesServiceClient\n) {\n  client.close();
}/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlInstanceNamesServiceClient(\n  client: SqlInstanceNamesServiceClient\n) {\n  client.close();
}/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlRegionsServiceClient(client: SqlRegionsServiceClient) {\n  client.close();
}/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\n  const sqlAvailableDatabaseVersionsServiceClient =\n    newSqlAvailableDatabaseVersionsServiceClient();\n  doStuffWithSqlAvailableDatabaseVersionsServiceClient(\n    sqlAvailableDatabaseVersionsServiceClient
  );/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /const sqlEventsServiceClient = new SqlEventsServiceClient();\n  doStuffWithSqlEventsServiceClient(sqlEventsServiceClient);/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /const sqlIamPoliciesServiceClient = new SqlIamPoliciesServiceClient();\n  doStuffWithSqlIamPoliciesServiceClient(sqlIamPoliciesServiceClient);/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /const sqlInstanceNamesServiceClient = new SqlInstanceNamesServiceClient();\n  doStuffWithSqlInstanceNamesServiceClient(sqlInstanceNamesServiceClient);/g,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /const sqlRegionsServiceClient = new SqlRegionsServiceClient();\n  doStuffWithSqlRegionsServiceClient(sqlRegionsServiceClient);/g,
    replacement: ''
  }
];

replacements.forEach(r => {
  const files = glob.sync(r.files);
  files.forEach(file => {
    replaceInFile(path.resolve(file), r.searchPattern, r.replacement);
  });
});
