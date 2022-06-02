// Compiling file

import {TemplateVars} from './get-bootstrap-template-vars';
import * as fs from 'fs';
import * as nj from 'nunjucks';
import * as path from 'path';

export async function compileTemplates(
  dirNameReadAbsolute: string,
  dirNameWriteAbsolute: string,
  vars: TemplateVars
) {
  console.log(
    `copying from ${dirNameReadAbsolute} to ${dirNameWriteAbsolute}...`
  );
  const files = fs.readdirSync(dirNameReadAbsolute);
  files.forEach(file => {
    const fileName = file.toString();
    console.log(fileName);

    const readName = path.join(dirNameReadAbsolute, file);
    console.log(readName);
    const writeName = path.join(dirNameWriteAbsolute, fileName);
    console.log(writeName);
    if (fs.statSync(readName).isDirectory()) {
      fs.mkdirSync(writeName);
      console.log(writeName + ' generated');
      compileTemplates(readName, writeName, vars);
    } else {
      const compiledTemplate = nj.render(readName, vars);
      fs.writeFileSync(writeName, compiledTemplate);
      console.log(writeName + ' generated');
    }
  });
}