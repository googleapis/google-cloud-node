const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// This script is expected to run inside a container where the source code
// has been copied to /usr/local/bin/source.
const sourceDir = '/source';

console.log(`--- Listing directories in ${sourceDir} ---`);

try {
  const allEntries = fs.readdirSync(sourceDir, { withFileTypes: true });
  const directories = allEntries
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const idToGenerate = (JSON.parse(fs.readFileSync('/librarian/generate-request.json', 'utf8').trim())).id;
  const pathToFollow = idToGenerate.replace(/-/g, '/');

  execSync(`bazel build //${pathToFollow}:${sourceDir}-nodejs`, {cwd: `${sourceDir}`});
  
  if (directories.length > 0) {
    console.log('Directories found:');
    console.log(directories.join('\n'));
  } else {
    console.log(`No directories found in ${sourceDir}.`);
    console.log(`--- Listing all contents of ${sourceDir} for debugging ---`);
    const allFiles = allEntries.map(dirent => dirent.name);
    console.log(allFiles.join('\n'));
  }

} catch (error) {
  console.error(`Error accessing directory ${sourceDir}:`, error.message);
  console.log('--- Listing contents of . for debugging ---');
  try {
    const parentDirContents = fs.readdirSync('.');
    console.log(parentDirContents.join('\n'));
  } catch (e) {
    console.error('Failed to list /usr/local/bin contents.', e.message);
  }
}
