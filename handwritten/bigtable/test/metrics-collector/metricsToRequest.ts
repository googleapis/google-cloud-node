// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe} from 'mocha';
import {metricsToRequest} from '../../src/client-side-metrics/exporter';
import {
  expectedOtelExportConvertedValue,
  expectedOtelExportInput,
} from '../../test-common/expected-otel-export-input';
import {ResourceMetrics} from '@opentelemetry/sdk-metrics';

describe('Bigtable/metricsToRequest', () => {
  it('Converts an otel request to a request ready for the metric service client', () => {
    const convertedValue = metricsToRequest(
      expectedOtelExportInput as unknown as ResourceMetrics,
    );
    assert.deepStrictEqual(
      convertedValue.timeSeries.length,
      expectedOtelExportConvertedValue.timeSeries.length,
    );
    for (let index = 0; index < convertedValue.timeSeries.length; index++) {
      // We need to compare pointwise because mocha truncates to an 8192 character limit.
      assert.deepStrictEqual(
        convertedValue.timeSeries[index],
        expectedOtelExportConvertedValue.timeSeries[index],
      );
    }
    assert.strictEqual(convertedValue.name, 'projects/my-project');
  });
});
