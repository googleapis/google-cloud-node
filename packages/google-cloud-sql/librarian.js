// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs');
const path = require('path');

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

/**
 * Recursively finds files that match a specific pattern without using glob.
 * @param {string} baseDir The base directory to start the search from.
 * @param {string} filePattern A regular expression pattern to match against file paths.
 * @returns {string[]} An array of file paths that match the pattern.
 */
function findFiles(baseDir, filePattern) {
  const matches = [];
  const patternRegex = new RegExp(filePattern.replace(/\*/g, '[^/]*'), 'i');

  function traverse(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (patternRegex.test(fullPath)) {
          matches.push(fullPath);
        }
      }
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Error reading directory ${dir}:`, err);
      }
    }
  }

  traverse(baseDir);
  return matches;
}

const filesToDelete = [
  'src/v1/sql_available_database_versions_service_client.ts',
  'src/v1/sql_available_database_versions_service_client_config.json',
  'src/v1/sql_available_database_versions_service_proto_list.json',
  'src/v1/sql_events_service_client.ts',
  'src/v1/sql_events_service_client_config.json',
  'src/v1/sql_events_service_proto_list.json',
  'src/v1/sql_iam_policies_service_client.ts',
  'src/v1/sql_iam_policies_service_client_config.json',
  'src/v1/sql_iam_policies_service_proto_list.json',
  'src/v1/sql_instance_names_service_client.ts',
  'src/v1/sql_instance_names_service_client_config.json',
  'src/v1/sql_instance_names_service_proto_list.json',
  'src/v1/sql_regions_service_client.ts',
  'src/v1/sql_regions_service_client_config.json',
  'src/v1/sql_regions_service_proto_list.json',
  'src/v1beta4/sql_iam_policies_service_client.ts',
  'src/v1beta4/sql_iam_policies_service_client_config.json',
  'src/v1beta4/sql_iam_policies_service_proto_list.json',
  'test/gapic_sql_available_database_versions_service_v1.ts',
  'test/gapic_sql_events_service_v1.ts',
  'test/gapic_sql_iam_policies_service_v1.ts',
  'test/gapic_sql_iam_policies_service_v1beta4.ts',
  'test/gapic_sql_instance_names_service_v1.ts',
  'test/gapic_sql_regions_service_v1.ts',
];

filesToDelete.forEach(file => {
  try {
    const fullPath = path.resolve(__dirname, file);
    fs.unlinkSync(fullPath);
    console.log(`Successfully deleted: ${fullPath}`);
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
    searchPattern: /id: request.id \?\? ''/g,
    replacement: "id: request.id?.toString() ?? ''"
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {\s*SqlAvailableDatabaseVersionsServiceClient\s*} from '\.\/sql_available_database_versions_service_client';/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {\s*SqlEventsServiceClient\s*} from '\.\/sql_events_service_client';/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {\s*SqlIamPoliciesServiceClient\s*} from '\.\/sql_iam_policies_service_client';/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {\s*SqlInstanceNamesServiceClient\s*} from '\.\/sql_instance_names_service_client';/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/*/index.ts',
    searchPattern: /export {\s*SqlRegionsServiceClient\s*} from '\.\/sql_regions_service_client';/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlAvailableDatabaseVersionsServiceClient = v1\.SqlAvailableDatabaseVersionsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlAvailableDatabaseVersionsServiceClient = v1\.SqlAvailableDatabaseVersionsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlEventsServiceClient = v1\.SqlEventsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlEventsServiceClient = v1\.SqlEventsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlIamPoliciesServiceClient = v1\.SqlIamPoliciesServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlIamPoliciesServiceClient = v1\.SqlIamPoliciesServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlInstanceNamesServiceClient = v1\.SqlInstanceNamesServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlInstanceNamesServiceClient = v1\.SqlInstanceNamesServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlRegionsServiceClient = v1\.SqlRegionsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlRegionsServiceClient = v1\.SqlRegionsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlBackupsServiceClient = v1\.SqlBackupsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlBackupsServiceClient = v1\.SqlBackupsServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /const SqlFeatureEligibilityServiceClient = v1\.SqlFeatureEligibilityServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /type SqlFeatureEligibilityServiceClient = v1\.SqlFeatureEligibilityServiceClient;/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlAvailableDatabaseVersionsServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlEventsServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlIamPoliciesServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlInstanceNamesServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlRegionsServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlBackupsServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/src/index.ts',
    searchPattern: /SqlFeatureEligibilityServiceClient, /gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlAvailableDatabaseVersionsServiceClient = new sql.SqlAvailableDatabaseVersionsServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlBackupsServiceClient = new sql.SqlBackupsServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlEventsServiceClient = new sql.SqlEventsServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlFeatureEligibilityServiceClient = new sql.SqlFeatureEligibilityServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlIamPoliciesServiceClient = new sql.SqlIamPoliciesServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlInstanceNamesServiceClient = new sql.SqlInstanceNamesServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.js',
    searchPattern: /const sqlRegionsServiceClient = new sql.SqlRegionsServiceClient\(\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlAvailableDatabaseVersionsServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlBackupsServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlFeatureEligibilityServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlEventsServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlIamPoliciesServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlInstanceNamesServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /SqlRegionsServiceClient,/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlAvailableDatabaseVersionsServiceClient\s*\(\s*client:\s*SqlAvailableDatabaseVersionsServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlBackupsServiceClient\s*\(\s*client:\s*SqlBackupsServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlEventsServiceClient\s*\(\s*client:\s*SqlEventsServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlFeatureEligibilityServiceClient\s*\(\s*client:\s*SqlFeatureEligibilityServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlIamPoliciesServiceClient\s*\(\s*client:\s*SqlIamPoliciesServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlInstanceNamesServiceClient\s*\(\s*client:\s*SqlInstanceNamesServiceClient,?\s*\)\s*\{\s*client\.close\(\);\s*\}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /function doStuffWithSqlRegionsServiceClient\(client: SqlRegionsServiceClient\) {\n  client.close\(\);\n}/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlAvailableDatabaseVersionsServiceClient =\s*new SqlAvailableDatabaseVersionsServiceClient\(\);\s*doStuffWithSqlAvailableDatabaseVersionsServiceClient\(\s*sqlAvailableDatabaseVersionsServiceClient,?\s*\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlBackupsServiceClient =\s*new SqlBackupsServiceClient\(\);\s*doStuffWithSqlBackupsServiceClient\(\s*sqlBackupsServiceClient,?\s*\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlFeatureEligibilityServiceClient =\s*new SqlFeatureEligibilityServiceClient\(\);\s*doStuffWithSqlFeatureEligibilityServiceClient\(\s*sqlFeatureEligibilityServiceClient,?\s*\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlEventsServiceClient = new SqlEventsServiceClient\(\);\n  doStuffWithSqlEventsServiceClient\(sqlEventsServiceClient\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlIamPoliciesServiceClient = new SqlIamPoliciesServiceClient\(\);\n  doStuffWithSqlIamPoliciesServiceClient\(sqlIamPoliciesServiceClient\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlInstanceNamesServiceClient = new SqlInstanceNamesServiceClient\(\);\n  doStuffWithSqlInstanceNamesServiceClient\(sqlInstanceNamesServiceClient\);/gs,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-sql/system-test/fixtures/sample/src/index.ts',
    searchPattern: /\/\/ check that the client instance can be created\s*const sqlRegionsServiceClient = new SqlRegionsServiceClient\(\);\n  doStuffWithSqlRegionsServiceClient\(sqlRegionsServiceClient\);/gs,
    replacement: ''
  }
];

replacements.forEach(r => {
  const relativePattern = r.files.replace(/^packages\/google-cloud-sql\//, '');
  const files = findFiles(__dirname, relativePattern);
  files.forEach(file => {
    replaceInFile(path.resolve(file), r.searchPattern, r.replacement);
  });
});
