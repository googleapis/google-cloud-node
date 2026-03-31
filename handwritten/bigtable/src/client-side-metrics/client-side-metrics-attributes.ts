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

// The backend is expecting true/false and will fail if other values are provided.
// export in open telemetry is expecting string value attributes so we don't use boolean
// true/false.
export enum StreamingState {
  STREAMING = 'true',
  UNARY = 'false',
}

/**
 * Represents the names of Bigtable methods. These are used as attributes for
 * metrics, allowing for differentiation of performance by method.
 */
export enum MethodName {
  READ_ROW = 'Bigtable.ReadRow',
  READ_ROWS = 'Bigtable.ReadRows',
  MUTATE_ROW = 'Bigtable.MutateRow',
  CHECK_AND_MUTATE_ROW = 'Bigtable.CheckAndMutateRow',
  READ_MODIFY_WRITE_ROW = 'Bigtable.ReadModifyWriteRow',
  SAMPLE_ROW_KEYS = 'Bigtable.SampleRowKeys',
  MUTATE_ROWS = 'Bigtable.MutateRows',
}
