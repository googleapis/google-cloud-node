import fs from 'fs';
import globPkg from 'glob';
const globSync = globPkg.sync || globPkg.globSync;
import path from 'path';

// Load all monorepo packages to determine the latest versions
const allPackages = globSync('{core/**,handwritten/**,packages/**}/package.json', { ignore: '**/node_modules/**' });
const monorepoVersions = {};

for (const pkgPath of allPackages) {
  const content = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  monorepoVersions[content.name] = content.version;
}

const excludedPackages = ['gaxios', 'firestore', 'storage', 'spanner'];
const isExcluded = (pkgPath) => {
  // Exclude if it's one of the exact names, or starts with google-cloud-[name]
  return excludedPackages.some(excluded => 
    pkgPath.includes(`/${excluded}/`) || 
    pkgPath.includes(`google-cloud-${excluded}`)
  );
};

const generatedPackages = globSync('packages/**/package.json', { ignore: '**/node_modules/**' });

for (const pkgPath of generatedPackages) {
  if (isExcluded(pkgPath)) {
    console.log(`Skipping excluded package: ${pkgPath}`);
    continue;
  }

  const content = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  let changed = false;

  // 1. Update engines.node to >=22
  if (content.engines && content.engines.node !== '>=22') {
    content.engines.node = '>=22';
    changed = true;
  }

  // 2. Update dependencies
  const updateDeps = (deps) => {
    if (!deps) return;
    for (const [depName, currentVersion] of Object.entries(deps)) {
      // 3. Skip file/relative paths
      if (currentVersion.startsWith('file:') || currentVersion.startsWith('.')) continue;
      
      // 5. Special case for packnplay
      if (depName === 'pack-n-play' && currentVersion === '^5.0.0') continue;

      // Check if dependency is one of our monorepo packages
      if (monorepoVersions[depName]) {
        // Exclude updating dependencies on gaxios, firestore, spanner, storage
        if (excludedPackages.some(excluded => depName.includes(excluded))) {
          continue;
        }

        const latestVersion = monorepoVersions[depName];
        const newVersionString = `^${latestVersion}`;

        if (currentVersion !== newVersionString) {
          // 6. Don't downgrade dependencies (basic check for major version)
          const currentMajor = parseInt(currentVersion.replace(/[^\d.]/g, '').split('.')[0]) || 0;
          const newMajor = parseInt(latestVersion.split('.')[0]) || 0;
          
          if (newMajor > currentMajor) {
            deps[depName] = newVersionString;
            changed = true;
          }
        }
      }
    }
  };

  updateDeps(content.dependencies);
  updateDeps(content.devDependencies);
  updateDeps(content.peerDependencies);

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(content, null, 2) + '\n');
    console.log(`Updated ${pkgPath}`);
  }
}
