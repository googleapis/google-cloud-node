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
import {resolveDsn} from '../../src/lib/config.js';

describe('resolveDsn', () => {
  const origEnv = {...process.env};

  beforeEach(() => {
    delete process.env.GOOGLE_CLOUD_PROJECT;
  });

  afterEach(() => {
    delete process.env.GOOGLE_CLOUD_PROJECT;
    Object.assign(process.env, origEnv);
  });

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

  it('should prioritize explicit cfg.project over process.env.GOOGLE_CLOUD_PROJECT', () => {
    process.env.GOOGLE_CLOUD_PROJECT = 'env-project';
    const dsn = resolveDsn({
      project: 'explicit_project',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(
      dsn,
      'projects/explicit_project/instances/i/databases/d',
    );
  });

  it('should prepend custom host and port to resource path', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: 'localhost',
      port: 9010,
    });
    assert.strictEqual(
      dsn,
      'localhost:9010/projects/p/instances/i/databases/d',
    );
  });

  it('should prepend custom host without port to resource path', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
      host: 'spanner.googleapis.com',
    });
    assert.strictEqual(
      dsn,
      'spanner.googleapis.com/projects/p/instances/i/databases/d',
    );
  });

  it('should return empty string for invalid/incomplete configurations on Node object level', () => {
    delete process.env.GOOGLE_CLOUD_PROJECT;
    assert.strictEqual(resolveDsn({database: 'd'}), '');
    assert.strictEqual(resolveDsn({}), '');
  });

  describe('environment variables', () => {
    const origEnv = {...process.env};

    beforeEach(() => {
      delete process.env.GOOGLE_CLOUD_PROJECT;
    });

    afterEach(() => {
      delete process.env.GOOGLE_CLOUD_PROJECT;
      Object.assign(process.env, origEnv);
    });

    it('should fall back to GOOGLE_CLOUD_PROJECT if project is missing in config object', () => {
      process.env.GOOGLE_CLOUD_PROJECT = 'gcp-project';

      const dsn = resolveDsn({
        instance: 'i',
        database: 'd',
      });
      assert.strictEqual(dsn, 'projects/gcp-project/instances/i/databases/d');
    });
  });
});
