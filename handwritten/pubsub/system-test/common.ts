// Copyright 2021 Google LLC
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

import * as cp from 'child_process';
import * as path from 'path';

export const execSync = (cmd: string): string =>
  cp.execSync(cmd, {encoding: 'utf-8'});

// Processed versions of TS samples go to the same build location
// as the rest of the JS samples.
export function commandFor(action: string): string {
  const jsPath = path.join('build', `${action}.js`);
  return `node ${jsPath}`;
}
