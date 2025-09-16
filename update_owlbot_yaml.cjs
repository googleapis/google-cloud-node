const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packagesDir = 'packages';

const owlBotYamlFiles = execSync('find packages -name ".OwlBot.yaml"').toString().trim().split('\n');

for (const owlBotYamlFile of owlBotYamlFiles) {
    try {
        const packageName = owlBotYamlFile.split('/')[1];
        const nodejsPackageDir = `${packageName}-nodejs`;

        let correctPath;
        try {
            correctPath = execSync(`find googleapis-gen/google -type d -name "${nodejsPackageDir}"`).toString().trim();
        } catch (e) {
            // Some packages might not have a corresponding directory in googleapis-gen.
            // console.warn(`Could not find directory for ${nodejsPackageDir}`);
            continue;
        }

        if (!correctPath) {
            // console.warn(`Could not find directory for ${nodejsPackageDir}`);
            continue;
        }

        const correctSource = `/${correctPath.replace('googleapis-gen', '')}`;

        let content = fs.readFileSync(owlBotYamlFile, 'utf8');

        const sourceRegex = /source: (.*)/;
        const match = content.match(sourceRegex);

        if (match && match[1] !== correctSource) {
            console.log(`Updating ${owlBotYamlFile}:`);
            console.log(`  old source: ${match[1]}`);
            console.log(`  new source: ${correctSource}`);
            content = content.replace(match[1], correctSource);
            fs.writeFileSync(owlBotYamlFile, content);
        }
    } catch (e) {
        console.error(`Error processing ${owlBotYamlFile}: ${e.message}`);
    }
}
