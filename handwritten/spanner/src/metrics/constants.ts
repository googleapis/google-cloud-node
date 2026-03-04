// Copyright 2025 Google LLC
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
import {
  View,
  ExplicitBucketHistogramAggregation,
} from '@opentelemetry/sdk-metrics';

export const SPANNER_METER_NAME = 'spanner-nodejs';
export const CLIENT_METRICS_PREFIX = 'spanner.googleapis.com/internal/client';
export const SPANNER_RESOURCE_TYPE = 'spanner_instance_client';
// Maximum time to keep MetricsTracers before considering them stale, and stop tracking them.
export const TRACER_CLEANUP_THRESHOLD_MS = 60 * 60 * 1000; // 60 minutes
export const TRACER_CLEANUP_INTERVAL_MS = 30 * 60 * 1000; // 30 Minutes
// OTel semantic conventions
// See https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv
export const ATTR_CLOUD_REGION = 'cloud.region';

// Minimum period that must past between metric exports
export const MIN_EXPORT_FREQUENCY_MS = 30 * 1000;

// Monitored resource labels
export const MONITORED_RES_LABEL_KEY_PROJECT = 'project_id';
export const MONITORED_RES_LABEL_KEY_INSTANCE = 'instance_id';
export const MONITORED_RES_LABEL_KEY_INSTANCE_CONFIG = 'instance_config';
export const MONITORED_RES_LABEL_KEY_LOCATION = 'location';
export const MONITORED_RES_LABEL_KEY_CLIENT_HASH = 'client_hash';
export const MONITORED_RESOURCE_LABELS = new Set([
  MONITORED_RES_LABEL_KEY_PROJECT,
  MONITORED_RES_LABEL_KEY_INSTANCE,
  MONITORED_RES_LABEL_KEY_INSTANCE_CONFIG,
  MONITORED_RES_LABEL_KEY_LOCATION,
  MONITORED_RES_LABEL_KEY_CLIENT_HASH,
]);

// Metric labels
export const METRIC_LABEL_KEY_CLIENT_UID = 'client_uid';
export const METRIC_LABEL_KEY_CLIENT_NAME = 'client_name';
export const METRIC_LABEL_KEY_DATABASE = 'database';
export const METRIC_LABEL_KEY_METHOD = 'method';
export const METRIC_LABEL_KEY_STATUS = 'status';
export const METRIC_LABELS = new Set([
  METRIC_LABEL_KEY_CLIENT_UID,
  METRIC_LABEL_KEY_CLIENT_NAME,
  METRIC_LABEL_KEY_DATABASE,
  METRIC_LABEL_KEY_METHOD,
  METRIC_LABEL_KEY_STATUS,
]);

// Metric names
export const METRIC_NAME_OPERATION_LATENCIES = 'operation_latencies';
export const METRIC_NAME_ATTEMPT_LATENCIES = 'attempt_latencies';
export const METRIC_NAME_OPERATION_COUNT = 'operation_count';
export const METRIC_NAME_ATTEMPT_COUNT = 'attempt_count';
export const METRIC_NAME_GFE_LATENCIES = 'gfe_latencies';
export const METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT =
  'gfe_connectivity_error_count';
export const METRIC_NAME_AFE_LATENCIES = 'afe_latencies';
export const METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT =
  'afe_connectivity_error_count';
export const METRIC_NAMES = new Set([
  METRIC_NAME_OPERATION_LATENCIES,
  METRIC_NAME_ATTEMPT_LATENCIES,
  METRIC_NAME_GFE_LATENCIES,
  METRIC_NAME_OPERATION_COUNT,
  METRIC_NAME_ATTEMPT_COUNT,
  METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
  METRIC_NAME_AFE_LATENCIES,
  METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT,
]);

export const UNKNOWN_ATTRIBUTE = 'unknown';

// Histogram Bucket boundaries
export const HISTOGRAM_BUCKET_BOUNDARIES = [
  0.0, 0.5, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0,
  14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 25.0, 30.0, 40.0, 50.0, 65.0, 80.0,
  100.0, 130.0, 160.0, 200.0, 250.0, 300.0, 400.0, 500.0, 650.0, 800.0, 1000.0,
  2000.0, 5000.0, 10000.0, 20000.0, 50000.0, 100000.0, 200000.0, 400000.0,
  800000.0, 1600000.0, 3200000.0,
];

// Defined Views for metric aggregation
export const OPERATION_LATENCY_VIEW = new View({
  instrumentName: METRIC_NAME_OPERATION_LATENCIES,
  aggregation: new ExplicitBucketHistogramAggregation(
    HISTOGRAM_BUCKET_BOUNDARIES,
  ),
});

export const ATTEMPT_LATENCY_VIEW = new View({
  instrumentName: METRIC_NAME_ATTEMPT_LATENCIES,
  aggregation: new ExplicitBucketHistogramAggregation(
    HISTOGRAM_BUCKET_BOUNDARIES,
  ),
});

export const GFE_LATENCY_VIEW = new View({
  instrumentName: METRIC_NAME_GFE_LATENCIES,
  aggregation: new ExplicitBucketHistogramAggregation(
    HISTOGRAM_BUCKET_BOUNDARIES,
  ),
});

export const AFE_LATENCY_VIEW = new View({
  instrumentName: METRIC_NAME_AFE_LATENCIES,
  aggregation: new ExplicitBucketHistogramAggregation(
    HISTOGRAM_BUCKET_BOUNDARIES,
  ),
});

export const METRIC_VIEWS = [
  OPERATION_LATENCY_VIEW,
  ATTEMPT_LATENCY_VIEW,
  GFE_LATENCY_VIEW,
  AFE_LATENCY_VIEW,
];
