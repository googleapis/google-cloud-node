const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
// const yaml = require('js-yaml');
async function main(relativeDir) {
  // Grab package.json
  const fullRelativeDir = path.join(__dirname, 'packages', relativeDir);
  console.log(`in ${fullRelativeDir}`);
  const jsonPath = path.join(fullRelativeDir, 'package.json').toString();
  let packageJson = fs.readFileSync(jsonPath, 'utf8');
  packageJson = JSON.parse(packageJson);

  //   console.log('updating engines field...');
  //   packageJson.engines.node = `>=${NODE_VERSION}`;
  //   fs.writeFileSync(jsonPath, JSON.stringify(packageJson, null, 2));

  console.log('updating all dependencies to latest');
  if (packageJson.dependencies) {
    execSync(`npm install google-gax@rc`, {cwd: fullRelativeDir});
    // execSync(`npm install google-gax@rc`, {cwd: fullRelativeDir});
  }
  //   for (const dep of Object.keys(packageJson.devDependencies)) {
  //     if (dep === 'gapic-tools') {
  //       console.log(`npm i ${dep}@latest -D`);
  //       execSync(`npm i ${dep}@latest -D`, {cwd: fullRelativeDir});
  //     }
  //   }
  // }
}
const directories = fs.readdirSync('packages');
let isMiddle = false;
async function outerMain() {
  // console.log(directories)
  let start = directories.indexOf("google-cloud-apphub");
  let end = directories.indexOf("google-cloud-billing");
  // console.log(start)
  // console.log(end)
  for (let x=start; x <= end; x++) {
      main(directories[x])
  }
}

outerMain();