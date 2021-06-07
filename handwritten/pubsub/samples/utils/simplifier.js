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

/*

This little utility gets us over the last hop of converting from
TypeScript samples to pretty reasonable JavaScript (ES6) samples. It
just replaces blank lines with '//BLANK' and then removes it in the
output, so TypeScript doesn't throw away our blank links. Everything
else is more or less handled by setting the module type to 'es2020'.

...which keeps 'import' statements, so we convert those require().
We also add a comment warning about editing the generated samples.

usage:

node simplifier.js commentify typescript/*.ts
  This rewrites all .ts files in 'typescript' into typescript/build/*.ts

node simplifier.js post build/typescript/build/*.js
  This undoes the commentifying on the built sample, and other finishing touches.

*/

// We test with Node 12.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
const fs = require('fs').promises;
const path = require('path');

async function main(args) {
  const mode = args.shift();
  if (mode === 'commentify') {
    for (const fn of args) {
      // Read the whole file.
      let contents = (await fs.readFile(fn)).toString();

      // Replace all blank lines with a known comment.
      const blankLines = /^\s*\r?\n/gm;
      contents = contents.replace(blankLines, '//BLANK\n');

      // Write out it out for tsc to find.
      const outputFn = path.join(path.dirname(fn), 'build', path.basename(fn));
      await fs.mkdir(path.dirname(outputFn), {
        recursive: true,
      });
      await fs.writeFile(outputFn, contents);
    }
  } else if (mode === 'post') {
    for (const fn of args) {
      // Read the whole file.
      let contents = (await fs.readFile(fn)).toString();

      // Convert back the comments to blank lines.
      const blankedLines = /^\s*\/\/BLANK\r?\n/gm;
      contents = contents.replace(blankedLines, '\n');

      // Plain JS samples need to use require(), not import.
      const esImports = /^\s*import \{\s*([^}]+[^\s])\s*\} from '([^']+)';$/gm;
      contents = contents.replace(esImports, "const {$1} = require('$2');");
      const esStarImports = /^\s*import \* as ([^\s]+) from '([^']+)';$/gm;
      contents = contents.replace(esStarImports, "const $1 = require('$2');");

      // Add a "generated" warning.
      const sampleMeta = /^(\/\/ sample-metadata:)$/gm;
      contents = contents.replace(
        sampleMeta,
        "// This is a generated sample. Please see typescript/README.md for more info.\n\n'use strict';\n\n$1"
      );

      // TypeScript shifts things to 4 spaces, move them back to 2.
      const extraSpaces = /^(\/\/[^\w]*){0}(( {4})+)/gm;
      contents = contents.replace(extraSpaces, match =>
        ' '.repeat(match.length / 2)
      );

      await fs.writeFile(fn, contents);
    }
  }
}

main(Array.from(process.argv).slice(2)).catch(e => {
  console.error(e);
  process.exitCode = 1;
});
