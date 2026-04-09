import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  for (const file of files) {
    const filepath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(filepath);
    } catch (e) {
      continue;
    }
    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (stat.isFile()) {
      callback(filepath);
    }
  }
}

const packagesDir = '/Users/shivaneep/google-cloud-node/packages';

walk(packagesDir, (filepath) => {
  const filename = path.basename(filepath);
  if (filename === '.eslintrc.json' || filename === '.eslintrc.yml') {
    // Skip test fixtures to be safe
    if (filepath.includes('/test/fixtures/')) {
      console.log(`Skipping fixture: ${filepath}`);
      return;
    }
    console.log(`Deleting ${filepath}`);
    fs.unlinkSync(filepath);
  }
});
