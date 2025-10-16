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

console.log('PROOF WE CHANGED STUFF:')
console.log("B")
// FIX: --output_base is a startup option (before 'build').
// FIX: --disk_cache is a command option (after 'build').
execSync(`bazelisk --output_base=/tmp/bazel_output build --disk_cache="" --spawn_strategy=local //${pathToFollow}:${idToGenerate}-nodejs`, {
    cwd: sourceDir,
    env: bazelEnv // Pass the augmented environment
});
console.log(execSync('ls -a', {cwd: `/tmp/bazel_output/execroot/com_google_googleapis/bazel-out/k8-fastbuild/bin/${pathToFollow}`}).toString());
// console.log(execSync('ls -a', {cwd: '/output'}));
execSync(`tar -xzf ${idToGenerate}-nodejs.tar.gz -C /output`, {
    cwd: `/tmp/bazel_output/execroot/com_google_googleapis/bazel-out/k8-fastbuild/bin/${pathToFollow}`,
});

execSync(`mv /output/${idToGenerate}-nodejs ${idToGenerate}`, {
    cwd: '/output',
});

console.log(execSync('ls -a', {cwd: '/output/google-cloud-asset'}).toString());
