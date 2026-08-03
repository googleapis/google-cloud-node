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
import {
  getInterval,
  metricsToRequest,
} from '../../src/client-side-metrics/exporter';
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

  it('Clamps endTime to startNanos + 1 when startTime is equal to endTime (overshoot)', () => {
    const dataPoint = {
      startTime: [100, 500] as [number, number],
      endTime: [100, 500] as [number, number],
      value: 1,
    } as any;
    const interval = getInterval(dataPoint);
    assert.strictEqual(interval.startTime.seconds, 100);
    assert.strictEqual(interval.startTime.nanos, 500);
    assert.strictEqual(interval.endTime.seconds, 100);
    assert.strictEqual(interval.endTime.nanos, 501);
  });

  it('Handles 1B-1 nanosecond boundary when clamping endTime (wrapping to next second)', () => {
    const dataPoint = {
      startTime: [100, 999999999] as [number, number],
      endTime: [100, 999999999] as [number, number],
      value: 1,
    } as any;
    const interval = getInterval(dataPoint);
    assert.strictEqual(interval.startTime.seconds, 100);
    assert.strictEqual(interval.startTime.nanos, 999999999);
    assert.strictEqual(interval.endTime.seconds, 101);
    assert.strictEqual(interval.endTime.nanos, 0);
  });
});
