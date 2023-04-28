const fs = require('fs');
const path = require('path');
const cp = require('child_process');

async function main() {
    const dirs = fs.readdirSync(path.join(__dirname, 'packages'));
    for (const dir of dirs) {
        let packageJson = JSON.parse(fs.readFileSync(path.join('packages', dir, 'package.json'), 'utf-8'));
        if (packageJson.scripts.hasOwnProperty("samples-test")) {
            packageJson.scripts["samples-test"] = "npm run compile && cd samples/ && npm link ../ && npm i && npm test"
            fs.writeFileSync(path.join('packages', dir, 'package.json'), JSON.stringify(packageJson, null, 2));
        }
    }
}

main();
