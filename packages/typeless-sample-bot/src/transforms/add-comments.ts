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

const headerText = `
// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

`.trim();

/**
 * Adds the header comments about the generation of the sample and the
 * 'use strict' line for JS. Rather than Babel, this just uses simple
 * text searching. The reason for that is that it's much simpler to do
 * this particular transform that way. Rather than traversing an AST,
 * this simply looks for the first blank line and inserts the block there.
 * If it can't find one, it puts it at the top.
 */
export function addComments(text: string): string {
  text = text.replace('\r', '');
  const lines = text.split('\n');
  const firstBlank = lines.findIndex(l => l.length === 0);
  if (firstBlank < 0) {
    // Apparently the whole file has no blank lines?
    return headerText + text + '\n\n';
  } else {
    lines.splice(firstBlank, 0, '\n' + headerText);
  }

  return lines.join('\n');
}
