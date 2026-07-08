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

import * as assert from 'assert';
import {resolveDsn} from '../src/lib/config.js';

describe('resolveDsn', () => {
  it('should resolve standard Spanner DSN string directly', () => {
    const dsn = resolveDsn('projects/p/instances/i/databases/d');
    assert.strictEqual(dsn, 'projects/p/instances/i/databases/d');
  });

  it('should pass postgres connection URL straight through for Go driver extraction', () => {
    const url =
      'postgresql://user:pass@localhost:5432/projects/p/instances/i/databases/d?param=val';
    const dsn = resolveDsn(url);
    assert.strictEqual(dsn, url);
  });

  it('should construct DSN from config object parts', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(dsn, 'projects/p/instances/i/databases/d');
  });

  it('should append host and port as api_endpoint', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: 'localhost',
      port: 9010,
    });
    assert.strictEqual(
      dsn,
      'projects/p/instances/i/databases/d?api_endpoint=localhost:9010',
    );
  });

  it('should append localhost:5432 as api_endpoint when specified', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: 'localhost',
      port: 5432,
    });
    assert.strictEqual(
      dsn,
      'projects/p/instances/i/databases/d?api_endpoint=localhost:5432',
    );
  });

  it('should append custom host and port as api_endpoint', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: '10.0.0.1',
      port: 5007,
    });
    assert.strictEqual(
      dsn,
      'projects/p/instances/i/databases/d?api_endpoint=10.0.0.1:5007',
    );
  });

  it('should append custom host without port as api_endpoint', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: 'spanner.googleapis.com',
    });
    assert.strictEqual(
      dsn,
      'projects/p/instances/i/databases/d?api_endpoint=spanner.googleapis.com',
    );
  });

  it('should throw error for invalid configurations on Node object level', () => {
    assert.throws(
      () => resolveDsn({database: 'd'}),
      /No connection configuration specified/
    );
    assert.throws(
      () => resolveDsn({}),
      /No connection configuration specified/
    );
  });

  describe('environment variables', () => {
    const origEnv = {...process.env};

    beforeEach(() => {
      // Clear env variables that might affect tests
      delete process.env.PGDATABASE;
      delete process.env.SPANNER_PROJECT_ID;
      delete process.env.GOOGLE_CLOUD_PROJECT;
      delete process.env.SPANNER_INSTANCE_ID;
      delete process.env.DATABASE_URL;
      delete process.env.PGCONNECTSTRING;
      delete process.env.SPANNER_EMULATOR_HOST;
    });

    afterEach(() => {
      process.env = {...origEnv};
    });

    it('should fall back to PGDATABASE, SPANNER_PROJECT_ID, SPANNER_INSTANCE_ID', () => {
      process.env.PGDATABASE = 'd';
      process.env.SPANNER_PROJECT_ID = 'p';
      process.env.SPANNER_INSTANCE_ID = 'i';

      const dsn = resolveDsn({});
      assert.strictEqual(dsn, 'projects/p/instances/i/databases/d');
    });

    it('should fall back to GOOGLE_CLOUD_PROJECT if SPANNER_PROJECT_ID is missing', () => {
      process.env.PGDATABASE = 'd';
      process.env.GOOGLE_CLOUD_PROJECT = 'gcp-project';
      process.env.SPANNER_INSTANCE_ID = 'i';

      const dsn = resolveDsn({});
      assert.strictEqual(dsn, 'projects/gcp-project/instances/i/databases/d');
    });

    it('should append auto_config_emulator=true when SPANNER_EMULATOR_HOST is set', () => {
      process.env.SPANNER_EMULATOR_HOST = 'localhost:9010';
      const dsn = resolveDsn('projects/p/instances/i/databases/d');
      assert.strictEqual(dsn, 'projects/p/instances/i/databases/d?auto_config_emulator=true');
    });

    it('should append auto_config_emulator=true and join with semicolon for object config with host', () => {
      process.env.SPANNER_EMULATOR_HOST = 'localhost:9010';
      const dsn = resolveDsn({
        project: 'p',
        instance: 'i',
        database: 'd',
        host: 'localhost',
        port: 9010,
      });
      assert.strictEqual(
        dsn,
        'projects/p/instances/i/databases/d?api_endpoint=localhost:9010;auto_config_emulator=true',
      );
    });
  });
});
