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
import {describe, it} from 'mocha';
import {escapeIdentifier, escapeLiteral} from '../../src/lib/pg/utilities.js';

describe('PostgreSQL Dialect Utilities', () => {
  it('should escape PostgreSQL identifiers with double quotes', () => {
    assert.strictEqual(escapeIdentifier('foo'), '"foo"');
    assert.strictEqual(escapeIdentifier('my_table'), '"my_table"');
    assert.strictEqual(escapeIdentifier('b"ar'), '"b""ar"');
  });

  it('should escape PostgreSQL string literals with single quotes', () => {
    assert.strictEqual(escapeLiteral('hello'), "'hello'");
    assert.strictEqual(escapeLiteral("O'Connor"), "'O''Connor'");
  });

  it('should escape backslashes using PostgreSQL E string syntax', () => {
    assert.strictEqual(
      escapeLiteral('C:\\path\\to\\file'),
      "E'C:\\\\path\\\\to\\\\file'",
    );
  });
});
