import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const depsToUpdate = {
  '@google-cloud/common': '^7.0.0',
  '@google-cloud/promisify': '^6.0.0',
  '@google-cloud/projectify': '^6.0.0',
  '@google-cloud/paginator': '^7.0.0',
  '@google-cloud/precise-date': '^6.0.0',
  'google-auth-library': '^11.0.0',
};

function updatePackageJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const pkg = JSON.parse(content);
    let modified = false;

    if (pkg.dependencies) {
      for (const [dep, ver] of Object.entries(depsToUpdate)) {
        if (pkg.dependencies[dep] && pkg.dependencies[dep] !== ver) {
          pkg.dependencies[dep] = ver;
          modified = true;
        }
      }
    }
    
    if (pkg.devDependencies) {
      for (const [dep, ver] of Object.entries(depsToUpdate)) {
        if (pkg.devDependencies[dep] && pkg.devDependencies[dep] !== ver) {
          pkg.devDependencies[dep] = ver;
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
      console.log(`Updated ${filePath}`);
    }
  } catch (e) {
    // Ignore errors
  }
}

const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);
for (const pkg of packages) {
  const pkgDir = path.join(packagesDir, pkg);
  if (fs.statSync(pkgDir).isDirectory()) {
    updatePackageJson(path.join(pkgDir, 'package.json'));
    updatePackageJson(path.join(pkgDir, 'samples', 'package.json'));
  }
}
