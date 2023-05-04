const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const dirsToSkip = ['gapic-node-templating', 'typeless-sample-bot'];

async function main() {
    const dirs = fs.readdirSync(path.join(__dirname, 'packages'));
    for (const dir of dirs) {
        if (!dirsToSkip.includes(dir)) {
            fs.writeFileSync(path.join('packages', dir, 'package-lock.json'), 'nothing');
        }

    }
}

main();
	
