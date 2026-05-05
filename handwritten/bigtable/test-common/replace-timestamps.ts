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

import {expectedOtelExportInput} from './expected-otel-export-input';

/**
 * Replaces the timestamp values within an `ExportInput` object with
 * standardized test values.
 *
 * This function is designed for testing purposes to make timestamp comparisons
 * in tests more predictable and reliable. It recursively traverses the
 * `ExportInput` object, finds all `startTime` and `endTime` properties, and
 * replaces their numeric values with standardized test values.
 */
export function replaceTimestamps(
  request: typeof expectedOtelExportInput,
  newStartTime: [number, number],
  newEndTime: [number, number],
) {
  request.scopeMetrics.forEach(scopeMetric => {
    scopeMetric.metrics.forEach(metric => {
      metric.dataPoints.forEach(dataPoint => {
        dataPoint.startTime = newStartTime;
        dataPoint.endTime = newEndTime;
      });
    });
  });
}
