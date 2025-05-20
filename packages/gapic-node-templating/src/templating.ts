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

import {TemplateVars} from './get-bootstrap-template-vars';
import * as fs from 'fs';
import * as nj from 'nunjucks';
import * as path from 'path';

export async function compileTemplates(
  dirNameReadAbsolute: string,
  dirNameWriteAbsolute: string,
  vars: TemplateVars,
) {
  console.log(
    `copying from ${dirNameReadAbsolute} to ${dirNameWriteAbsolute}...`,
  );
  const files = fs.readdirSync(dirNameReadAbsolute);
  files.forEach(file => {
    const fileName = file.toString();

    const readName = path.join(dirNameReadAbsolute, fileName);
    console.log(readName);
    const writeName = path.join(dirNameWriteAbsolute, fileName);
    console.log(writeName);
    if (fs.statSync(readName).isDirectory()) {
      fs.mkdirSync(writeName, {recursive: true});
      console.log(writeName + ' generated');
      compileTemplates(readName, writeName, vars);
    } else {
      const compiledTemplate = nj.render(readName, vars);
      fs.writeFileSync(writeName.replace('.njk', ''), compiledTemplate);
      console.log(writeName + ' generated');
    }
  });
}
