const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;

const repos = [  'google-cloud-policytroubleshooter',
'google-cloud-phishingprotection',
'google-cloud-oslogin',
'google-cloud-osconfig',
'google-cloud-orgpolicy',
'google-cloud-orchestration-airflow-service',
'google-cloud-optimization',
'google-cloud-notebooks',
'google-cloud-networksecurity',
'google-cloud-networkmanagement',
'google-cloud-networkconnectivity',
'google-cloud-migrationcenter',
'google-cloud-metastore',
'google-cloud-memcache',
'google-cloud-mediatranslation',
'google-cloud-managedidentities',
'google-cloud-lifesciences',
'google-cloud-language',
'google-cloud-kms',
'google-cloud-kms-inventory']
const image="gcr.io/cloud-devrel-public-resources/owlbot-nodejs-mono-repo:latest"
async function main() { 
    for (const repo of repos) { 
        const repoPath = "/Users/sofialeon/gcp/google-cloud-node/packages/";     
        console.log(`working for ${repo}`)
        // Grab package.json
        const libPath = path.join(repoPath, repo).toString();
        const jsonPath = path.join(repoPath, repo, 'package.json').toString();
        let packageJson = fs.readFileSync(jsonPath, 'utf8');
        packageJson = JSON.parse(packageJson);

        console.log('updating engines field...')
        packageJson.engines.node = ">=14.0.0";
        fs.writeFileSync(jsonPath, JSON.stringify(packageJson, null, 2));
        
        console.log('updating google-gax and google-auth...')
        if (packageJson.dependencies.hasOwnProperty('google-gax')) {
            execSync('npm i google-gax@^4.0.3', {cwd: libPath});
        }

        if (packageJson.devDependencies.hasOwnProperty('typescript')) {
            execSync('npm i typescript@5.1.6 --save-dev', {cwd: libPath});
        }

        if (packageJson.devDependencies.hasOwnProperty('gts')) {
            execSync('npm i gts@latest --save-dev', {cwd: libPath});
        }


        if (packageJson.devDependencies.hasOwnProperty('@types/node')) {
            execSync('npm i @types/node@latest --save-dev', {cwd: libPath});
        }

        if (packageJson.dependencies.hasOwnProperty('google-auth-library')) {
            execSync('npm i google-auth-library@latest', {cwd: libPath});
        }

        execSync('npm i gapic-tools@latest --save-dev', {cwd: libPath});

        // Try grabbing samples/package.json
        let samplesPackageJson;
        let samplesJsonPath;
        try {
            samplesJsonPath = path.join(libPath, 'samples', 'package.json').toString();
            samplesPackageJson = fs.readFileSync(samplesJsonPath, 'utf8');
            samplesPackageJson = JSON.parse(samplesPackageJson)
        } catch (err) {
            console.log(`${repo} does not have a samples directory; skipping updating samples`);
        }

        if (samplesPackageJson) {
            // Update engines field
            console.log('updating samples engines field...')
            samplesPackageJson.engines.node = ">=14.0.0";
            fs.writeFileSync(samplesJsonPath, JSON.stringify(samplesPackageJson, null, 2));
        }

        //execSync(`sudo docker pull ${image}`, {cwd: libPath});
        //execSync(`sudo docker run --rm --user $(id -u):$(id -g) -v $(pwd):/workspace/google-cloud-node -w /workspace/google-cloud-node -e "DEFAULT_BRANCH=main" ${image} packages/${repo}`, {cwd: "/usr/local/google/home/sofialeon/google-cloud-node"});
        }    
};

main();