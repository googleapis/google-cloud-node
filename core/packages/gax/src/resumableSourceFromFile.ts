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

import {createReadStream, statSync} from 'fs';

import {ResumableSource} from './resumableUpload';

/**
 * Creates a {@link ResumableSource} backed by a local file.
 *
 * This factory lives outside the fallback transport entrypoint so browser
 * builds do not pull in the Node.js `fs` module. Generated clients should
 * delegate to this function rather than constructing file streams directly.
 */
export function resumableSourceFromFile(filePath: string): ResumableSource {
  const stat = statSync(filePath);
  return {
    size: stat.size,
    getStream: (offset?: number) => {
      const start = offset ?? 0;
      if (start < 0 || start > stat.size) {
        throw new RangeError(
          `Invalid start offset ${start} for file of size ${stat.size}.`,
        );
      }
      return createReadStream(filePath, {start});
    },
  };
}
