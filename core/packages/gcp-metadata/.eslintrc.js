// Config file for eslint used by gts.

const path = require('path');

// 1. Find the absolute path to the 'gts' package's directory
//    This forces Node.js to look up in the directory tree (hoisted root)
const GTS_CONFIG_PATH = path.dirname(
  require.resolve('gts/package.json', {paths: [__dirname]}),
);

module.exports = {
  // Use the absolute path provided by Node's resolution
  // This bypasses the relative path failure completely.
  extends: [GTS_CONFIG_PATH],
};