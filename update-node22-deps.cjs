const fs = require('fs');
const path = require('path');

const targetPackageDirs = [
  'packages/google-cloud-apptopology',
  'packages/google-cloud-ftp',
  'packages/google-cloud-workloadidentity',
  'packages/google-shopping-merchant-loyaltycustomers'
];

const excludeDirNames = [
  'gaxios',
  'firestore',
  'spanner',
  'storage',
  'google-cloud-firestore',
  'google-cloud-spanner',
  'google-cloud-storage'
];

const excludeDepNames = [
  'gaxios',
  '@google-cloud/firestore',
  '@google-cloud/spanner',
  '@google-cloud/storage'
];

// Discover libraries in monorepo to map dependencies to their Node 22 major versions
const dirsToScan = ['core', 'handwritten', 'packages'];
const monorepoVersions = {};

function scanMonorepo(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const parts = dirPath.split(path.sep);
  if (parts.some(p => excludeDirNames.includes(p))) return;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        scanMonorepo(fullPath);
      }
    } else if (entry.name === 'package.json') {
      try {
        const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        if (pkg.name && pkg.version && !excludeDepNames.includes(pkg.name)) {
          monorepoVersions[pkg.name] = pkg.version;
        }
      } catch (err) {
        console.error(`Error parsing ${fullPath}:`, err.message);
      }
    }
  }
}

for (const d of dirsToScan) {
  scanMonorepo(d);
}

// Find all package.json files within the target packages (including nested package.json)
const packageFilesToUpdate = [];

function findPackageFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        findPackageFiles(fullPath);
      }
    } else if (entry.name === 'package.json') {
      packageFilesToUpdate.push(fullPath);
    }
  }
}

for (const pkgDir of targetPackageDirs) {
  findPackageFiles(pkgDir);
}

function parseMajor(versionStr) {
  const match = versionStr.match(/(\d+)\.\d+\.\d+/);
  return match ? parseInt(match[1], 10) : null;
}

let updatedFileCount = 0;

for (const filePath of packageFilesToUpdate) {
  const content = fs.readFileSync(filePath, 'utf8');
  const pkg = JSON.parse(content);
  let changed = false;

  // 1. Upgrade engines to node >=22
  if (pkg.engines && pkg.engines.node && pkg.engines.node !== '>=22') {
    pkg.engines.node = '>=22';
    changed = true;
  }

  // 2. Upgrade dependencies & devDependencies
  for (const depSection of ['dependencies', 'devDependencies']) {
    if (!pkg[depSection]) continue;

    for (const [dep, currentVer] of Object.entries(pkg[depSection])) {
      if (excludeDepNames.includes(dep)) continue;

      // Only upgrade dependencies referencing a version number with a caret or tilde (rule 3)
      if (!currentVer.startsWith('^') && !currentVer.startsWith('~')) {
        continue;
      }

      // Rule 5: For all packnplay dependencies at ^5.0.0 do not upgrade
      if (dep === 'pack-n-play' && (currentVer === '^5.0.0' || currentVer === '^5.0.1')) {
        continue;
      }

      const currentMajor = parseMajor(currentVer);
      if (currentMajor === null) continue;

      const targetRawVersion = monorepoVersions[dep];
      if (!targetRawVersion) continue;

      const targetMajor = parseMajor(targetRawVersion);
      if (targetMajor === null) continue;

      // Rule 2 & 6: Must correspond to a major version bump and not downgrade
      if (targetMajor > currentMajor) {
        const newVersion = `^${targetMajor}.0.0`;
        if (pkg[depSection][dep] !== newVersion) {
          console.log(`[${filePath}] Upgrading ${dep}: ${currentVer} -> ${newVersion}`);
          pkg[depSection][dep] = newVersion;
          changed = true;
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    updatedFileCount++;
    console.log(`Updated ${filePath}`);
  }
}

console.log(`Successfully updated ${updatedFileCount} files.`);
