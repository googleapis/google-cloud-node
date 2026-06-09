const Module = require('module');
const fs = require('fs');
const path = require('path');
const os = require('os');

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function(request, parent, isMain, options) {
  if (request === 'yargs/yargs') {
    const resolved = originalResolveFilename.apply(this, arguments);
    // Create a unique shim file in tmpdir based on the exact path to avoid collisions
    const safeHash = Buffer.from(resolved).toString('base64').replace(/[^a-zA-Z0-9]/g, '');
    const shimPath = path.join(os.tmpdir(), `yargs-shim-${safeHash}.cjs`);
    
    if (!fs.existsSync(shimPath)) {
      const content = fs.readFileSync(resolved, 'utf8');
      // Replace `./build/index.cjs` with the absolute path
      const buildIndexPath = path.join(path.dirname(resolved), 'build', 'index.cjs');
      // We must replace ALL relative requires. Luckily yargs/yargs only requires `./build/index.cjs`
      const newContent = content.replace(/require\(['"]\.\/build\/index\.cjs['"]\)/g, `require(${JSON.stringify(buildIndexPath)})`);
      fs.writeFileSync(shimPath, newContent);
    }
    
    return shimPath;
  }
  return originalResolveFilename.apply(this, arguments);
};
