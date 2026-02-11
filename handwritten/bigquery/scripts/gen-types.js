// Copyright 2024 Google LLC
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

const {fetch} = require('discovery-tsd');
const TypeGenerator = require('discovery-tsd/src/generator');
const prettier = require('prettier');
const fs = require('fs');
const {promisify} = require('util');

const writeFile = promisify(fs.writeFile);

const LICENSE = `// Copyright 2024 Google LLC
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
// limitations under the License.`;

let discoveryRevision;

function overridedRender() {
  const source = this.template({
    title: this.title ? this.converter.toJSDoc(this.title) : '',
    name: this.name,
    schemas: this.schemas.map(schema => this.converter.createType(schema)),
    resources: this.resources.map(resource => resource.render()),
  });

  let header = LICENSE + '\n';
  if (discoveryRevision) {
    header =
      header + `\n/**\n * Discovery Revision: ${discoveryRevision} \n */\n`;
  }
  const patched = source
    .replaceAll(
      'formatOptions.useInt64Timestamp',
      "'formatOptions.useInt64Timestamp'",
    )
    .replaceAll(
      'formatOptions.timestampOutputFormat',
      "'formatOptions.timestampOutputFormat'",
    );
  const fullSource = header + patched;

  return prettier.format(fullSource, {
    parser: 'typescript',
    singleQuote: true,
    bracketSpacing: false,
  });
}

async function genTypes() {
  const json = await fetch('bigquery', 'v2');
  discoveryRevision = json['revision'];
  const generator = new TypeGenerator(json);
  generator.render = overridedRender.bind(generator);
  const types = await generator.render();
  await writeFile('./src/types.d.ts', types);
}

genTypes();
