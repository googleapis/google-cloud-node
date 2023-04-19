import * as fs from 'fs';
import * as path from 'path';
const fsp = fs.promises;

const regexMetaInput = /let dirToUse = '';\ntry {\n    dirToUse = __dirname;\n\}\ncatch \(e\) \{\n    \/\/ eslint-disable-next-line @typescript-eslint\/ban-ts-comment\n    \/\/ @ts-ignore\n    dirToUse = import\.meta\.url;\n\}\nconst filename = \(0, url_1\.fileURLToPath\)\(dirToUse\);\nconst dirname = path_1\.default\.dirname\(filename\);/i;
const regexJsExtension = /\.js\"/g;
const regexJsExtensionSingleQuote = /\.js\'/g;
const awaitEsmock = /await esmock/g;
const protosHackregex = /protos-hack/g;
const esmock = /esmock/g;
async function modifyCJSDir(
    dirNameReadAbsolute
  ) {
    const files = fs.readdirSync(dirNameReadAbsolute);
    for (const file of files) {
      const fileName = file.toString();
  
      const readName = path.join(dirNameReadAbsolute, fileName);

      if (fs.statSync(readName).isFile()) {
        if (!readName.includes('protos')) {
          let fileContents = await fsp.readFile(readName, 'utf-8');
          if (readName.endsWith('.js')) {
            fileContents = fileContents.replace(regexMetaInput, 'const dirname = __dirname');
            fileContents = fileContents.replace(esmock, 'proxyquire');
            fileContents = fileContents.replace(awaitEsmock, 'proxyquire');
            if (fileName !== 'install.js') {
              fileContents = fileContents.replace(regexJsExtension, '.cjs"');
              fileContents = fileContents.replace(regexJsExtensionSingleQuote, '.cjs\'');
            }
            fileContents = fileContents.replace(protosHackregex, 'protos');
            await fsp.writeFile(readName.replace(/.js$/, '.cjs'), fileContents);
            await fsp.unlink(readName);
          } 
        } else {
          await fsp.rename(readName, readName.replace(/\.js$/, '.cjs'))
        }
      } else if (fs.statSync(readName).isDirectory()) {
        modifyCJSDir(readName);
      }
    };
  }

  modifyCJSDir('./build/cjs');
