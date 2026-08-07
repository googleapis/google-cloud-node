const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const budget = require('../bundle-budget.json');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'firestore-bundle-'));
const entrypoint = path.join(tmpDir, 'test_bundle_input.js');
const outfile = path.join(tmpDir, 'test_bundle_out.min.js');
const buildIndexPath = path.resolve(__dirname, '../build/src/index');

fs.writeFileSync(
  entrypoint,
  '\nconst { Firestore } = require(' +
    JSON.stringify(buildIndexPath) +
    ');\nconst f = new Firestore();\nconsole.log(f);\n',
  'utf8'
);

try {
  execSync('npx --yes esbuild --bundle --platform=node --target=node18 --minify "' + entrypoint + '" --outfile="' + outfile + '"', {
    stdio: 'inherit',
  });
  const stats = fs.statSync(outfile);
  const size = stats.size;
  console.log(`[test-bundle-size] Compiled serverless bundle size: ${size} bytes`);
  if (size > budget.maxBundleSize) {
    console.error(`[test-bundle-size] ERROR: Bundle size (${size} bytes) exceeds budget (${budget.maxBundleSize} bytes)`);
    process.exit(1);
  }
  console.log('[test-bundle-size] SUCCESS: Bundle size is within budget.');
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
