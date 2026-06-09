const fs = require('fs');
const path = require('path');

const yargsPaths = [
  'node_modules/yargs',
  'node_modules/mocha/node_modules/yargs',
  'node_modules/c8/node_modules/yargs'
];

for (const p of yargsPaths) {
  const pkgPath = path.resolve(__dirname, '..', p, 'package.json');
  if (fs.existsSync(pkgPath)) {
    let pkg = fs.readFileSync(pkgPath, 'utf8');
    pkg = pkg.replace(/"require": "\.\/yargs"/g, '"require": "./yargs.cjs"');
    fs.writeFileSync(pkgPath, pkg);

    const yargsBin = path.resolve(__dirname, '..', p, 'yargs');
    const yargsCjs = path.resolve(__dirname, '..', p, 'yargs.cjs');
    if (fs.existsSync(yargsBin)) {
      fs.copyFileSync(yargsBin, yargsCjs);
    }
  }
}
