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

import * as path from 'node:path';

const API_PATH = path.dirname(require.resolve('@google-cloud/spanner-api/package.json'));
const IMPORT_PATH = path.join(API_PATH, 'build/protos');

/**
 * Builds the filesystem path to a particular proto sub-path, for protos
 * stored in `@google-cloud/spanner-api`.
 *
 * @param protoSubPath A sub-path like 'google/spanner', or undefined to get the base path.
 * @returns The requested path.
 * 
 * @private
 */
export function getProtoPath(protoSubPath?: string): string {
  if (protoSubPath) {
    return path.join(IMPORT_PATH, protoSubPath);
  } else {
    return IMPORT_PATH;
  }
}
