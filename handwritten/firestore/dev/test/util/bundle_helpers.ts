// Copyright 2026 Google LLC
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

import {firestore, google} from '../../protos/firestore_v1_proto_api';

import IBundleMetadata = firestore.IBundleMetadata;
import ITimestamp = google.protobuf.ITimestamp;

export const TEST_BUNDLE_ID = 'test-bundle';
export const TEST_BUNDLE_VERSION = 1;

export function verifyMetadata(
  meta: IBundleMetadata,
  createTime: ITimestamp,
  totalDocuments: number,
  expectEmptyContent = false,
): void {
  if (!expectEmptyContent) {
    expect(parseInt(meta.totalBytes!.toString())).toBeGreaterThan(0);
  } else {
    expect(parseInt(meta.totalBytes!.toString())).toBe(0);
  }
  expect(meta.id).toBe(TEST_BUNDLE_ID);
  expect(meta.version).toBe(TEST_BUNDLE_VERSION);
  expect(meta.totalDocuments).toBe(totalDocuments);
  expect(meta.createTime).toEqual(createTime);
}
