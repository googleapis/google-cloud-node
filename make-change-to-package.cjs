const fs = require('fs');
const path = require('path');

async function main() {
    const dirs = fs.readdirSync(path.join(__dirname, 'packages'));
    for (const dir of dirs) {
        let packageJson = JSON.parse(fs.readFileSync(path.join('packages', dir, 'package.json'), 'utf-8'));
        const scripts = {
            "preinstall": "npx only-allow pnpm",
            "clean": "gts clean",
            "compile": "tsc -p . && cp -r protos build/",
            "compile-protos": "compileProtos src",
            "docs": "jsdoc -c .jsdoc.js",
            "predocs-test": "npm run docs",
            "docs-test": "linkinator docs",
            "fix": "gts fix",
            "lint": "gts check",
            "prelint": "cd samples; npm link ../; npm i",
            "prepare": "npm run compile-protos && npm run compile && minifyProtoJson",
            "samples-test": "npm run compile && cd samples/ && npm link ../ && npm i && npm test",
            "system-test": "npm run compile && c8 mocha build/system-test",
            "test": "c8 mocha build/test"
        }
        packageJson.scripts = scripts;
        fs.writeFileSync(path.join('packages', dir, 'package.json'), JSON.stringify(packageJson, null, 2));
    }
}

main();
