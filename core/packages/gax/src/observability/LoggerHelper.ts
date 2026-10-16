/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface LogPayload {
  'rpc.system.name'?: 'grpc' | 'http';
  'rpc.method'?: string;
  'rpc.response.status_code'?: string;
  'http.response.status_code'?: number;
  'error.type'?: string;
  'gcp.errors.domain'?: string;
  [key: `gcp.errors.metadata.${string}`]: string | undefined;
  'gcp.client.repo'?: string;
  'gcp.client.artifact'?: string;
  'gcp.client.version'?: string;
  'gcp.client.language'?: 'node';
  'gcp.client.service'?: string;
  'url.domain'?: string;
  'response.payload'?: string;
  'exception.type'?: string;
  'exception.message'?: string;
  'exception.stacktrace'?: string;
}
