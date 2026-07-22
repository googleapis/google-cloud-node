// Copyright 2024-2026 Google LLC
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

import * as v1 from '@google-cloud/bigquery-storage-api';
import {BigQueryReadClient, BigQueryWriteClient} from '@google-cloud/bigquery-storage-api';
import * as managedwriter from './managedwriter';
import * as reader from './reader';
const WriterClient = managedwriter.WriterClient;
type WriterClient = managedwriter.WriterClient;
const ReadClient = reader.ReadClient;
type ReadClient = reader.ReadClient;
export {
  v1,
  BigQueryReadClient,
  BigQueryWriteClient,
  managedwriter,
  WriterClient,
  reader,
  ReadClient,
};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {
  v1,
  BigQueryReadClient,
  BigQueryWriteClient,
  managedwriter,
  WriterClient,
  reader,
  ReadClient,
};
import {protos} from '@google-cloud/bigquery-storage-api';
export {protos};
import * as adapt from './adapt';
export {adapt};

import './protobuf';
