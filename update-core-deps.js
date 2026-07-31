import fs from 'fs';
import path from 'path';
import glob from 'glob';
import cp from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Identify all core libraries
const coreLibraries = {};
const coreDirs = fs.readdirSync('core').filter(f => fs.statSync(path.join('core', f)).isDirectory());

for (const dir of coreDirs) {
  let pkgJsonPath = path.join('core', dir, 'package.json');
  if (fs.existsSync(pkgJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    if (pkg.name && !pkg.private) coreLibraries[pkg.name] = null;
  }
  
  const subDirs = fs.readdirSync(path.join('core', dir)).filter(f => fs.statSync(path.join('core', dir, f)).isDirectory());
  for (const subDir of subDirs) {
    pkgJsonPath = path.join('core', dir, subDir, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
      if (pkg.name && !pkg.private) coreLibraries[pkg.name] = null;
    }
  }
}

console.log(`Found ${Object.keys(coreLibraries).length} core libraries. Fetching latest versions...`);

// 2. Fetch latest versions
for (const lib of Object.keys(coreLibraries)) {
  try {
    const version = cp.execSync(`npm show ${lib} version`, { encoding: 'utf8' }).trim();
    coreLibraries[lib] = `^${version}`;
    console.log(`Latest version for ${lib} is ${coreLibraries[lib]}`);
  } catch (e) {
    console.error(`Failed to fetch version for ${lib}`);
    delete coreLibraries[lib];
  }
}

// 3. Update all packages
const searchPatterns = [
  'packages/*/package.json',
  'packages/*/samples/package.json'
];

let updatedCount = 0;

for (const pattern of searchPatterns) {
  const files = glob.sync(pattern, { cwd: __dirname });
  
  for (const relPath of files) {
    const filePath = path.join(__dirname, relPath);
    if (!fs.existsSync(filePath)) continue;

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const pkg = JSON.parse(content);
      let modified = false;

      // Update engines.node
      if (pkg.engines && pkg.engines.node) {
        if (pkg.engines.node !== '>=22') {
          pkg.engines.node = '>=22';
          modified = true;
        }
      } else {
        pkg.engines = pkg.engines || {};
        pkg.engines.node = '>=22';
        modified = true;
      }

      // Update dependencies
      if (pkg.dependencies) {
        for (const [lib, version] of Object.entries(coreLibraries)) {
          if (pkg.dependencies[lib] && pkg.dependencies[lib] !== version) {
            console.log(`Updating ${lib} in ${relPath}: ${pkg.dependencies[lib]} -> ${version}`);
            pkg.dependencies[lib] = version;
            modified = true;
          }
        }
      }
      
      if (pkg.devDependencies) {
        for (const [lib, version] of Object.entries(coreLibraries)) {
          if (pkg.devDependencies[lib] && pkg.devDependencies[lib] !== version) {
            console.log(`Updating dev dependency ${lib} in ${relPath}: ${pkg.devDependencies[lib]} -> ${version}`);
            pkg.devDependencies[lib] = version;
            modified = true;
          }
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
        updatedCount++;
      }
    } catch (e) {
      console.error(`Error updating ${filePath}:`, e);
    }
  }
}

console.log(`Finished updating ${updatedCount} files.`);
