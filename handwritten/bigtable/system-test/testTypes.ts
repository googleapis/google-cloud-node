// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ServiceError} from 'google-gax';
import {GetRowsOptions} from '../src/table';

export interface Test {
  name: string;
  max_retries: number;
  mutations_request: Array<{
    method: string;
    key: string;
    data: {};
  }>;
  responses: Array<{
    code: number;
    entry_codes: number[];
  }>;
  mutation_batches_invoked: string[];
  errors: Array<{
    index_in_mutations_request: number;
  }>;
  results: Array<{
    fm: string;
    rk: string;
    qual: string;
    label: string;
    error: boolean;
    value: string;
    ts: number;
  }>;
  chunks_base64: Array<{}>;
  error: ServiceError;
  request_options: {};
  row_keys_read: {};
  createReadStream_options: GetRowsOptions;
}
