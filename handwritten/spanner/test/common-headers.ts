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
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  AFE_SERVER_TIMING_HEADER,
  CLOUD_RESOURCE_HEADER,
  END_TO_END_TRACING_HEADER,
  getCommonHeaders,
  resetAFEServerTimingForTest,
} from '../src/common';

describe('getCommonHeaders', () => {
  const resource = 'projects/p/instances/i/databases/d';
  const originalDisableAfe = process.env.SPANNER_DISABLE_AFE_SERVER_TIMING;
  const originalEnableE2E = process.env.SPANNER_ENABLE_END_TO_END_TRACING;

  beforeEach(() => {
    resetAFEServerTimingForTest();
    delete process.env.SPANNER_DISABLE_AFE_SERVER_TIMING;
    delete process.env.SPANNER_ENABLE_END_TO_END_TRACING;
  });

  afterEach(() => {
    resetAFEServerTimingForTest();
    if (originalDisableAfe !== undefined) {
      process.env.SPANNER_DISABLE_AFE_SERVER_TIMING = originalDisableAfe;
    } else {
      delete process.env.SPANNER_DISABLE_AFE_SERVER_TIMING;
    }
    if (originalEnableE2E !== undefined) {
      process.env.SPANNER_ENABLE_END_TO_END_TRACING = originalEnableE2E;
    } else {
      delete process.env.SPANNER_ENABLE_END_TO_END_TRACING;
    }
  });

  it('should include resource prefix and AFE timing header by default', () => {
    const headers = getCommonHeaders(resource);
    assert.strictEqual(headers[CLOUD_RESOURCE_HEADER], resource);
    assert.strictEqual(headers[AFE_SERVER_TIMING_HEADER], 'true');
    assert.strictEqual(headers[END_TO_END_TRACING_HEADER], undefined);
  });

  it('should omit AFE timing header when disabled via case-insensitive env var', () => {
    process.env.SPANNER_DISABLE_AFE_SERVER_TIMING = 'TRUE';
    const headers = getCommonHeaders(resource);
    assert.strictEqual(headers[AFE_SERVER_TIMING_HEADER], undefined);
  });

  it('should include AFE timing header when env var is false', () => {
    process.env.SPANNER_DISABLE_AFE_SERVER_TIMING = 'false';
    const headers = getCommonHeaders(resource);
    assert.strictEqual(headers[AFE_SERVER_TIMING_HEADER], 'true');
  });

  it('should include end-to-end tracing header when enabled via case-insensitive env var', () => {
    process.env.SPANNER_ENABLE_END_TO_END_TRACING = 'True';
    const headers = getCommonHeaders(resource);
    assert.strictEqual(headers[END_TO_END_TRACING_HEADER], 'true');
  });

  it('should include end-to-end tracing header when enableTracing option is true', () => {
    const headers = getCommonHeaders(resource, true);
    assert.strictEqual(headers[END_TO_END_TRACING_HEADER], 'true');
  });

  it('should omit end-to-end tracing header when env var is false and enableTracing option is false', () => {
    process.env.SPANNER_ENABLE_END_TO_END_TRACING = 'FALSE';
    const headers = getCommonHeaders(resource, false);
    assert.strictEqual(headers[END_TO_END_TRACING_HEADER], undefined);
  });
});
