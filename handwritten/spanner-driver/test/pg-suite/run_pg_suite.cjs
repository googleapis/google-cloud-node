// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const fs = require('fs');
const path = require('path');
const {spawnSync} = require('child_process');
const {Spanner, protos} = require('@google-cloud/spanner');

const integrationDir = path.resolve(__dirname, 'integration');

function collectTestFiles(dir, relativeTo = integrationDir) {
  let results = [];
  const entries = fs.readdirSync(dir, {withFileTypes: true});
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(collectTestFiles(fullPath, relativeTo));
    } else if (entry.isFile() && entry.name.endsWith('-tests.cjs')) {
      results.push({
        name: path.relative(relativeTo, fullPath),
        fullPath,
      });
    }
  }
  return results;
}

let testFiles = collectTestFiles(integrationDir);

const targetArg = process.argv[2];
if (targetArg && !targetArg.startsWith('-')) {
  const normalized = targetArg.endsWith('.cjs') ? targetArg : targetArg + '-tests.cjs';
  const exact = testFiles.filter(
    f => f.name === targetArg || path.basename(f.name) === targetArg || f.name === normalized || path.basename(f.name) === normalized
  );
  if (exact.length > 0) {
    testFiles = exact;
  } else {
    testFiles = testFiles.filter(f => f.name.includes(targetArg));
  }
  if (testFiles.length === 0) {
    console.error(`[pg-suite] No test files matching "${targetArg}" found in ${integrationDir}`);
    process.exit(1);
  }
}

async function main() {
  const projectId =
    process.env.GCLOUD_PROJECT ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.SPANNER_PROJECT;
  if (!projectId) {
    console.error(
      '[pg-suite] Error: Please set GCLOUD_PROJECT (or GOOGLE_CLOUD_PROJECT / SPANNER_PROJECT) to run the test suite.'
    );
    process.exit(1);
  }

  const skipTempInstance = (process.env.SKIP_TEMP_INSTANCE || '').toLowerCase() === 'true';
  const shouldCreateInstance = !skipTempInstance;

  let instanceId = process.env.SPANNER_INSTANCE;
  if (skipTempInstance && !instanceId) {
    console.error(
      '[pg-suite] Error: When SKIP_TEMP_INSTANCE is true, please provide SPANNER_INSTANCE to specify the target instance.'
    );
    process.exit(1);
  }

  if (shouldCreateInstance) {
    instanceId = instanceId || `test-inst-${Date.now().toString().slice(-8)}`;
  }

  const skipTempDb = (process.env.SKIP_TEMP_DB || '').toLowerCase() === 'true';
  const shouldCreateDb = !skipTempDb;

  let dbName = process.env.SPANNER_DATABASE;
  if (skipTempDb && !dbName) {
    console.error(
      '[pg-suite] Error: When SKIP_TEMP_DB is true, please provide SPANNER_DATABASE to specify the target database.'
    );
    process.exit(1);
  }

  if (shouldCreateDb) {
    dbName = dbName || `test_pg_${Date.now()}`;
  }

  const activeDsn = `projects/${projectId}/instances/${instanceId}/databases/${dbName}`;
  let instanceAdminClient;
  let spannerAdminClient;

  console.log('================================================================');
  console.log('  Spanner PG Driver - node-postgres (pg-suite) Test Runner');
  console.log('================================================================');
  console.log(`Target Project:        ${projectId}`);
  console.log(`Target Instance:       ${instanceId} (Auto-Create: ${shouldCreateInstance})`);
  console.log(`Target Database:       ${dbName} (Auto-Create: ${shouldCreateDb})`);
  console.log(`Full DSN:              ${activeDsn}`);
  console.log(`Test Files to Execute: ${testFiles.length}`);
  console.log('================================================================\n');

  let totalPassedFiles = 0;
  let totalFailedFiles = 0;
  const fileResultsMap = new Map();

  try {
    const spanner = new Spanner({projectId});

    if (shouldCreateInstance) {
      console.log(`[pg-suite] Creating temporary Spanner instance: ${instanceId}...`);
      instanceAdminClient = spanner.getInstanceAdminClient();
      const [, op] = await spanner.createInstance(instanceId, {
        config: process.env.SPANNER_INSTANCE_CONFIG || 'regional-us-central1',
        nodes: 1,
      });
      await op.promise();
      console.log(`[pg-suite] Successfully created temporary instance: ${instanceId}`);
    }

    if (shouldCreateDb) {
      console.log(`[pg-suite] Creating temporary Spanner PostgreSQL database: ${dbName}...`);
      spannerAdminClient = spanner.getDatabaseAdminClient();
      const parent = spannerAdminClient.instancePath(projectId, instanceId);

      const [op] = await spannerAdminClient.createDatabase({
        parent,
        createStatement: `CREATE DATABASE "${dbName}"`,
        databaseDialect:
          protos.google.spanner.admin.database.v1.DatabaseDialect.POSTGRESQL,
      });
      await op.promise();
      console.log(`[pg-suite] Successfully created temporary database: ${dbName}`);
      console.log(`[pg-suite] Warming up Spanner session nodes (3s)...`);
      await new Promise(r => setTimeout(r, 3000));
    }

    for (const testFile of testFiles) {
      console.log(`\n---> Running ${testFile.name}...`);

      const res = spawnSync(process.execPath, [testFile.fullPath], {
        env: {
          ...process.env,
          GCLOUD_PROJECT: projectId,
          SPANNER_INSTANCE: instanceId,
          SPANNER_DATABASE: dbName,
          TEST_TIMEOUT: process.env.TEST_TIMEOUT || '120000',
        },
        stdio: 'pipe',
        timeout: 180000,
      });

      const stdoutStr = res.stdout ? res.stdout.toString() : '';
      const cleanStdout = stdoutStr.replace(/__TEST_RESULTS_JSON__[\s\S]*?__TEST_RESULTS_JSON__/g, '').trimEnd();
      if (cleanStdout) {
        console.log(cleanStdout + '\n');
      }
      if (res.stderr && res.stderr.length > 0) {
        process.stderr.write(res.stderr.toString());
      }

      const jsonMatch = stdoutStr.match(/__TEST_RESULTS_JSON__([\s\S]*?)__TEST_RESULTS_JSON__/);
      let fileData = {name: testFile.name, cases: []};
      if (jsonMatch) {
        try {
          fileData = JSON.parse(jsonMatch[1].trim());
        } catch (e) {
          console.error('[pg-suite] Error parsing test results JSON:', e);
        }
      }
      fileResultsMap.set(testFile.name, fileData);

      if (res.status === 0) {
        totalPassedFiles++;
      } else {
        totalFailedFiles++;
      }
    }
  } finally {
    if (shouldCreateDb && spannerAdminClient) {
      console.log(`\n[pg-suite] Dropping temporary Spanner PostgreSQL database: ${dbName}...`);
      try {
        await spannerAdminClient.dropDatabase({
          database: spannerAdminClient.databasePath(projectId, instanceId, dbName),
        });
        console.log(`[pg-suite] Successfully dropped temporary database.`);
      } catch (err) {
        console.error(`[pg-suite] Error dropping temporary database: ${err.message}`);
      }
    }

    if (shouldCreateInstance && instanceAdminClient) {
      console.log(`\n[pg-suite] Deleting temporary Spanner instance: ${instanceId}...`);
      try {
        await instanceAdminClient.deleteInstance({
          name: instanceAdminClient.instancePath(projectId, instanceId),
        });
        console.log(`[pg-suite] Successfully deleted temporary instance.`);
      } catch (err) {
        console.error(`[pg-suite] Error deleting temporary instance: ${err.message}`);
      }
    }

    // Summary
    console.log('\n================================================================');
    console.log('                   PG-SUITE EXECUTION SUMMARY                    ');
    console.log('================================================================');
    console.log(`Total Test Files Executed: ${testFiles.length}`);
    console.log(`Passed Files:              ${totalPassedFiles}`);
    console.log(`Failed Files:              ${totalFailedFiles}`);
    console.log('================================================================');


    if (totalFailedFiles > 0) {
      process.exit(1);
    }
  }
}

main().catch(err => {
  console.error('[pg-suite] Fatal error:', err);
  process.exit(1);
});
