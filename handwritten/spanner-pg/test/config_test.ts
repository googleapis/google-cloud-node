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

  it('should parse postgres connection URL', () => {
    const dsn = resolveDsn(
      'postgresql://user:pass@localhost:5432/projects/p/instances/i/databases/d?param=val',
    );
    assert.strictEqual(dsn, 'projects/p/instances/i/databases/d?param=val');
  });

  it('should construct DSN from config object parts', () => {
    const dsn = resolveDsn({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(dsn, 'projects/p/instances/i/databases/d');
  });

  it('should construct DSN from database path in config object', () => {
    const dsn = resolveDsn({
      database: 'projects/p/instances/i/databases/d',
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

  it('should throw error for invalid configurations', () => {
    assert.throws(() => resolveDsn({database: 'd'}));
    assert.throws(() => resolveDsn('postgresql://localhost/invalid_path'));
  });
});
