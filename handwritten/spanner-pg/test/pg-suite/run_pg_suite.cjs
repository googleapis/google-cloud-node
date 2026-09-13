'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { Spanner } = require('@google-cloud/spanner');

let dsn = process.env.DATABASE_URL || 'projects/span-cloud-testing/instances/gargsurbhi-testing1/databases/test-pg';

const helperDir = __dirname;
const testDir = path.resolve(__dirname, 'integration/client');

const targetArg = process.argv[2];
let testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('-tests.cjs'));

if (targetArg && !targetArg.startsWith('-')) {
  testFiles = testFiles.filter(f => f.includes(targetArg));
  if (testFiles.length === 0) {
    console.error(`[pg-suite-helper] No test files matching "${targetArg}" found in ${testDir}`);
    process.exit(1);
  }
}

async function main() {
  let createdDatabase = null;
  let activeDsn = dsn;

  if (process.env.SKIP_TEMP_DB !== 'true' && dsn.startsWith('projects/')) {
    const parts = dsn.split('/');
    if (parts.length >= 4) {
      const project = parts[1];
      const instanceId = parts[3];
      const randId = Math.floor(Math.random() * 100000);
      const tempDbId = `test-pg-${Date.now().toString(36)}-${randId}`;

      try {
        console.log(`[pg-suite-helper] Creating fresh temporary Spanner PostgreSQL database: ${tempDbId}...`);
        const spanner = new Spanner({ projectId: project });
        const instance = spanner.instance(instanceId);
        const [db, op] = await instance.createDatabase(tempDbId, {
          databaseDialect: 'POSTGRESQL',
          createStatement: `CREATE DATABASE "${tempDbId}"`,
        });
        await op.promise();
        createdDatabase = db;
        activeDsn = `projects/${project}/instances/${instanceId}/databases/${tempDbId}`;
        process.env.DATABASE_URL = activeDsn;
        console.log(`[pg-suite-helper] Successfully created temporary database: ${tempDbId}`);
        console.log(`[pg-suite-helper] Waiting 3 seconds for Spanner session nodes to warm up...`);
        await new Promise(r => setTimeout(r, 3000));
      } catch (err) {
        console.error(`[pg-suite-helper] Warning: Failed to create temporary database (${err.message}). Falling back to target DSN.`);
      }
    }
  }

  console.log('================================================================');
  console.log('  Spanner PG Driver - node-postgres (pg-suite) Test Runner');
  console.log('================================================================');
  console.log(`Target Database: ${activeDsn}`);
  console.log(`Test Files to Execute: ${testFiles.length}`);
  console.log('================================================================\n');

  let totalPassedFiles = 0;
  let totalFailedFiles = 0;
  const fileResultsMap = new Map();

  try {
    for (const file of testFiles) {
      const filePath = path.join(testDir, file);
      console.log(`\n---> Running ${file}...`);

      const res = spawnSync(process.execPath, [filePath], {
        env: {
          ...process.env,
          DATABASE_URL: activeDsn,
          PGDATABASE: activeDsn,
          TEST_TIMEOUT: process.env.TEST_TIMEOUT || '120000',
        },
        stdio: 'pipe',
        timeout: 180000,
      });

      const stdoutStr = res.stdout ? res.stdout.toString() : '';
      const cleanStdout = stdoutStr.replace(/__TEST_RESULTS_JSON__[\s\S]*$/, '').trimEnd();
      if (cleanStdout) {
        console.log(cleanStdout + '\n');
      }
      if (res.stderr && res.stderr.length > 0) {
        process.stderr.write(res.stderr.toString());
      }

      const jsonMatch = stdoutStr.match(/__TEST_RESULTS_JSON__(.*)/);
      let fileData = { name: file, cases: [] };
      if (jsonMatch) {
        try {
          fileData = JSON.parse(jsonMatch[1]);
        } catch (e) {}
      }
      fileResultsMap.set(file, fileData);

      if (res.status === 0) {
        totalPassedFiles++;
      } else {
        totalFailedFiles++;
      }
    }
  } finally {
    // Clean up temporary database if created
    if (createdDatabase) {
      console.log(`\n[pg-suite-helper] Deleting temporary Spanner PostgreSQL database...`);
      try {
        await createdDatabase.delete();
        console.log(`[pg-suite-helper] Successfully deleted temporary database.`);
      } catch (err) {
        console.error(`[pg-suite-helper] Error deleting temporary database: ${err.message}`);
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

    // Master test_results.json Aggregation
    try {
      const masterResultsPath = path.resolve(__dirname, '../test_results.json');
      let totalCases = 0;
      let passedCases = 0;
      let failedCases = 0;
      let skippedCases = 0;
      const aggregatedResults = [];

      for (const file of testFiles) {
        const fileData = fileResultsMap.get(file) || { name: file, cases: [] };
        const passed = (fileData.cases || []).filter(c => c.status === 'PASSED').length;
        const failed = (fileData.cases || []).filter(c => c.status === 'FAILED').length;
        const skipped = (fileData.cases || []).filter(c => c.status === 'SKIPPED').length;
        totalCases += (fileData.cases || []).length;
        passedCases += passed;
        failedCases += failed;
        skippedCases += skipped;

        const isPassed = failed === 0 && (fileData.cases || []).length > 0;
        aggregatedResults.push({
          file,
          status: isPassed ? 'PASSED' : 'FAILED',
          passedTests: passed,
          failedTests: failed,
          skippedTests: skipped,
          cases: fileData.cases || [],
        });
      }

      const masterData = {
        total: testFiles.length,
        passed: totalPassedFiles,
        failed: totalFailedFiles,
        totalCases,
        passedCases,
        failedCases,
        skippedCases,
        results: aggregatedResults,
      };

      fs.writeFileSync(masterResultsPath, JSON.stringify(masterData, null, 2));
      console.log(`\n[pg-suite-helper] Master test results updated: ${masterResultsPath}`);
    } catch (err) {
      console.error('\n[pg-suite-helper] Error updating master test_results.json:', err);
    }
  }
}

main().catch(err => {
  console.error('[pg-suite-helper] Fatal error:', err);
  process.exit(1);
});
