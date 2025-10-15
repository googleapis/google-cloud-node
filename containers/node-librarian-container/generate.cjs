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

// The arbitrary user environment often does not define $USER, which causes Bazel (run by Bazelisk) to crash.
// We pass an explicit environment to execSync, ensuring USER is set to a safe, generic value.
const bazelEnv = {
    ...process.env,
    // Set a generic USER name to satisfy Bazel's check for a defined user.
    USER: 'container_user'
};

// CRITICAL FIX: The --output_base flag MUST be a startup option, meaning it must 
// appear before the 'build' command. Moving it ensures Bazel recognizes it correctly.
execSync(`bazelisk --output_base=/tmp/bazel_output --disk_cache="" build //${pathToFollow}:${idToGenerate}-nodejs`, {
    cwd: `${sourceDir}`,
    env: bazelEnv // Pass the augmented environment
});
