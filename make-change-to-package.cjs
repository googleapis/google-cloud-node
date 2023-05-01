const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const dirsToSkip = ['gapic-node-templating', 'typeless-sample-bot'];

async function main() {
    const dirs = fs.readdirSync(path.join(__dirname, 'packages'));
    for (const dir of dirs) {
        if (!dirsToSkip.includes(dir)) {
            let rewrite = false;
            let packageJson = JSON.parse(fs.readFileSync(path.join('packages', dir, 'package.json'), 'utf-8'));
            if (packageJson.scripts.hasOwnProperty("samples-test")) {
                packageJson.scripts["samples-test"] = "cd samples/ && npm link ../ && npm i && npm test"
                rewrite = true;
            }
            if (packageJson.scripts.hasOwnProperty("system-test")) {
                packageJson.scripts["system-test"] = "cd samples/ && npm link ../ && npm i && npm test"
                rewrite = true;
            }
            if (rewrite) {
                fs.writeFileSync(path.join('packages', dir, 'package.json'), JSON.stringify(packageJson, null, 2));
            }
        }

    }
}

main();
