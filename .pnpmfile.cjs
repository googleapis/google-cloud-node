module.exports = {
  hooks: {
    readPackage(pkg, context) {
      // Check if this package has yargs as a dependency or devDependency
      if (pkg.dependencies && pkg.dependencies.yargs) {
        mutateYargs(pkg.dependencies, pkg.name, 'dependencies', context);
      }
      if (pkg.devDependencies && pkg.devDependencies.yargs) {
        mutateYargs(pkg.devDependencies, pkg.name, 'devDependencies', context);
      }

      // C8 broke Node 18 compatibility the week of July 20th 2026. 
      // Until we complete the upgrade, we need this workaround to enable CI
      // to continue running.
      //
      // TODO: Remove this workaround after Node 22 upgrade.
      if (pkg.dependencies && pkg.dependencies.c8) {
        mutateC8(pkg.dependencies, pkg.name, 'dependencies', context);
      }
      if (pkg.devDependencies && pkg.devDependencies.c8) {
        mutateC8(pkg.devDependencies, pkg.name, 'devDependencies', context);
      }

      // Check if this package has brace-expansion as a dependency or devDependency
      if (pkg.dependencies && pkg.dependencies['brace-expansion']) {
        mutateBraceExpansion(pkg.dependencies, pkg.name, 'dependencies', context);
      }
      if (pkg.devDependencies && pkg.devDependencies['brace-expansion']) {
        mutateBraceExpansion(pkg.devDependencies, pkg.name, 'devDependencies', context);
      }
      return pkg;
    }
  }
};

function mutateBraceExpansion(deps, pkgName, depType, context) {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0], 10);

  if (majorVersion === 18) {
    if (deps['brace-expansion'] && deps['brace-expansion'].startsWith('^5.')) {
      console.log(`[pnpmfile] Node.js version is 18. Overriding brace-expansion to 5.0.7 in ${pkgName}`);
      deps['brace-expansion'] = '5.0.7';
    }
  }
}

function mutateYargs(deps, pkgName, depType, context) {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0], 10);
  
  if (majorVersion >= 24) {
    console.log(`[pnpmfile] Node.js version is ${nodeVersion} (>= 24). Overriding yargs to 18.0.0 in ${pkgName}`);
    deps.yargs = '18.0.0';
  }
}

/**
 * Override C8 dependency for versions of Node <=18 to enable CI to continue functioning.
 * 
 * Otherwise, continue to use 10+ version.
 */
function mutateC8(deps, pkgName, depType, context) {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0], 10);
  
  if (majorVersion <= 18) {
    console.log(`[pnpmfile] Node.js version is ${nodeVersion} (<= 18). Overriding c8 to ^9.1.0 in ${pkgName}`);
    deps.c8 = '^9.1.0';
  }
}

