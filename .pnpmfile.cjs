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
      return pkg;
    }
  }
};

function mutateYargs(deps, pkgName, depType, context) {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0], 10);
  
  if (majorVersion >= 24) {
    console.log(`[pnpmfile] Node.js version is ${nodeVersion} (>= 24). Overriding yargs to 18.0.0 in ${pkgName}`);
    deps.yargs = '18.0.0';
  }
}
