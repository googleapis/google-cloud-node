const fs = require('fs');
const path = require('path');
const libraries = JSON.parse(fs.readFileSync('libraries.json', 'utf8'));
const gapicAuto = libraries.filter(lib => lib.library_type === 'GAPIC_AUTO');

gapicAuto.forEach(lib => {
  const match = lib.linkToRepoHomepage.match(/packages\/(.*)/);
  if (match) {
    const pkgName = match[1];
    const pkgPath = path.join('packages', pkgName);
    const packageJsonPath = path.join(pkgPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const pkgJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (pkgJson.scripts && pkgJson.scripts['system-test'] && pkgJson.scripts['system-test'] !== 'echo no system tests') {
        console.log(`${pkgName}: ${pkgJson.scripts['system-test']}`);
      }
    }
  }
});
