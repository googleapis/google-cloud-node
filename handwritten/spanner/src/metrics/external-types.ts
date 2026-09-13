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

import {GoogleAuth} from 'google-auth-library';

export interface ExporterOptions {
  /**
   * Optional authentication options for Google services.
   */
  auth: GoogleAuth;
}

export enum MetricKind {
  UNSPECIFIED = 'METRIC_KIND_UNSPECIFIED',
  GAUGE = 'GAUGE',
  DELTA = 'DELTA',
  CUMULATIVE = 'CUMULATIVE',
}

/** The value type of a metric. */
export enum ValueType {
  VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED',
  INT64 = 'INT64',
  DOUBLE = 'DOUBLE',
  DISTRIBUTION = 'DISTRIBUTION',
}

/**
 * A Google Cloud Monitoring monitored resource.
 *
 * Previously imported from `@google-cloud/opentelemetry-resource-util`, which is
 * deprecated and scheduled for archival. The interface is a plain data shape, so
 * it is declared locally instead.
 * See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/MonitoredResource
 */
export interface MonitoredResource {
  type: string;
  labels: {[key: string]: string};
}
