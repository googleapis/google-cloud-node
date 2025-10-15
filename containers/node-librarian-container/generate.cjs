const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// This script is expected to run inside a container where the source code
// has been copied to /usr/local/bin/source.
const sourceDir = '/source';

const allEntries = fs.readdirSync(sourceDir, { withFileTypes: true });
const directories = allEntries
.filter(dirent => dirent.isDirectory())
.map(dirent => dirent.name);

const idToGenerate = (JSON.parse(fs.readFileSync('/librarian/generate-request.json', 'utf8').trim())).id;
const pathToFollow = idToGenerate.replace(/-/g, '/');

execSync(`bazel build //${pathToFollow}:${idToGenerate}-nodejs`, {cwd: `${sourceDir}`});