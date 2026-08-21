# `node-postgres` (`pg-suite`) Integration Test Suite for Spanner

This folder contains the ported official `node-postgres` (`pg`) integration test suite (`test/pg-suite/integration/client/*-tests.cjs`) adapted to execute against **Google Cloud Spanner PostgreSQL-dialect databases** using `@google-cloud/spanner-driver`.

---

### Run with an Existing Instance (Auto-Creates Temp Database)
```bash
GCLOUD_PROJECT="<project-id>" \
SPANNER_INSTANCE="<instance-id>" \
SKIP_TEMP_INSTANCE="true" \
  npm run test:pg-suite
```

### Run with an Existing Instance and Existing Database
```bash
GCLOUD_PROJECT="<project-id>" \
SPANNER_INSTANCE="<instance-id>" \
SPANNER_DATABASE="<existing-database-name>" \
SKIP_TEMP_INSTANCE="true" \
SKIP_TEMP_DB="true" \
  npm run test:pg-suite
```

### Run Fully Automated (Auto-Creates Temp Instance & Database)
```bash
GCLOUD_PROJECT="<project-id>" \
  npm run test:pg-suite
```

### Run a Specific Test File
Filter execution by passing the test filename or substring:
```bash
GCLOUD_PROJECT="<project-id>" \
SPANNER_INSTANCE="<instance-id>" \
SKIP_TEMP_INSTANCE="true" \
  npm run test:pg-suite simple-query
```

---

## 2. Environment Variables

| Variable | Description |
| :--- | :--- |
| `GCLOUD_PROJECT` | **Required.** Google Cloud Project ID. |
| `SPANNER_INSTANCE` | Short instance ID (e.g. `gargsurbhi-testing1`). Required if `SKIP_TEMP_INSTANCE=true`. |
| `SKIP_TEMP_INSTANCE` | Set to `'true'` to use an existing instance without creating/deleting a temporary instance. |
| `SPANNER_INSTANCE_CONFIG` | Instance config to use when creating a temporary instance (defaults to `'regional-us-central1'`). |
| `SPANNER_DATABASE` | Target database name when `SKIP_TEMP_DB=true` (or custom temp DB name). |
| `SKIP_TEMP_DB` | Set to `'true'` to test against an existing database without creating or dropping a temporary database. |
| `TEST_TIMEOUT` | Per-test timeout in milliseconds (defaults to `120000` / 2 minutes). |

---

## 3. Directory Structure

* **`run_pg_suite.cjs`**: Test orchestrator managing database lifecycle, running test subprocesses, and compiling `test_results.json`.
* **`test-helper.cjs`**: Single unified test harness exporting `Suite`, `Client`, `pg`, `connect()`, assertions, and table fixtures.
* **`integration/client/`**: 44 individual integration test files ported from `node-postgres`.
