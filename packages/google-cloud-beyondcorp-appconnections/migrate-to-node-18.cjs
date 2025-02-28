const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
const yaml = require('js-yaml');

const COPYRIGHT_HEADER = `# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.`
const NODE_VERSION = '18';
const PREV_NODE_VERSION = '14';
const NEW_POST_PROCESSOR_SHA = "sha256:0d39e59663287ae929c1d4ccf8ebf7cef9946826c9b86eda7e85d8d752dbb584"
async function main() {
  // Grab package.json
  const jsonPath = path.join(__dirname, 'package.json').toString();
  let packageJson = fs.readFileSync(jsonPath, 'utf8');
  packageJson = JSON.parse(packageJson);

  console.log('updating engines field...');
  packageJson.engines.node = `>=${NODE_VERSION}`;
  fs.writeFileSync(jsonPath, JSON.stringify(packageJson, null, 2));

  console.log('updating all dependencies to latest');
  if (packageJson.dependencies) {
    for (const dep of Object.keys(packageJson.dependencies)) {
      if (dep === "google-auth-library" || dep === "gaxios" || dep === "google-gax") {
        execSync(`npm i ${dep}@rc --engines-strict`);
       } else {
        console.log(`npm i ${dep}@latest --engines-strict`);
        execSync(`npm i ${dep}@latest --engines-strict`);
      }
    }
  }
  if (packageJson.devDependencies) {
    for (const dep of Object.keys(packageJson.devDependencies)) {
      console.log(`npm i ${dep}@latest -D --engines-strict`);
      execSync(`npm i ${dep}@latest -D --engines-strict`);
    }
  }
  
//   console.log('updating post-processor to latest');
//   const owlbotYamlPath = "./.github/.Owlbot.lock.yaml";
//   const yamlData = fs.readFileSync(owlbotYamlPath, 'utf8');
//   let dockerFile = (yaml.load(yamlData));
//   dockerFile.docker.digest = NEW_POST_PROCESSOR_SHA;
//   fs.writeFileSync(owlbotYamlPath, `${COPYRIGHT_HEADER}\n${yaml.dump(dockerFile)}`);

  let samplesPackageJson;
  let samplesJsonPath;
  try {
    samplesJsonPath = path
      .join(__dirname, 'samples', 'package.json')
      .toString();
    samplesPackageJson = fs.readFileSync(samplesJsonPath, 'utf8');
    samplesPackageJson = JSON.parse(samplesPackageJson);
  } catch (err) {
    console.log(
      'Repo does not have a samples directory; skipping updating samples'
    );
  }

  if (samplesPackageJson) {
    // Update engines field
    console.log('updating samples engines field...');
    samplesPackageJson.engines.node = `>=${NODE_VERSION}`;
    fs.writeFileSync(
      samplesJsonPath,
      JSON.stringify(samplesPackageJson, null, 2)
    );
  }

  execSync(
    `rm -rf .kokoro/continuous/node${PREV_NODE_VERSION} .kokoro/presubmit/node${PREV_NODE_VERSION}`
  );
  execSync('npm login --registry https://wombat-dressing-room.appspot.com');
  execSync(
    `npm dist-tag add ${packageJson.name}@${packageJson.version} legacy-${PREV_NODE_VERSION} --registry=https://wombat-dressing-room.appspot.com/`
  );
}

main();