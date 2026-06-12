const Module = require('module');
const path = require('path');

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function(request, parent, isMain, options) {
  if (request === 'yargs/yargs') {
    const resolved = originalResolveFilename.apply(this, arguments);
    if (resolved.endsWith('.mjs')) {
      return resolved;
    }
    // Directly resolve to the CommonJS build file to avoid disk I/O and cleanup issues
    return path.join(path.dirname(resolved), 'build', 'index.cjs');
  }
  return originalResolveFilename.apply(this, arguments);
};