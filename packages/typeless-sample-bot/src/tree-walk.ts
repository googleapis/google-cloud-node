// Copyright 2022 Google LLC
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

import {resolve} from 'node:path';
import {readdir} from 'node:fs/promises';

// Given a root directory, traverse its tree to find all files. This
// will be done using async iterators, returning results opportunistically.
export async function* treeWalk(rootDir: string): AsyncIterable<string> {
  const entries = await readdir(rootDir, {withFileTypes: true});
  for (const entry of entries) {
    const resolved = resolve(rootDir, entry.name);
    if (entry.isDirectory()) {
      yield* treeWalk(resolved);
    } else {
      yield resolved;
    }
  }
}
