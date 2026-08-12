import fs from 'fs';
import path from 'path';

function findPackageJsons(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'build' && file !== 'dist') {
        findPackageJsons(filePath, fileList);
      }
    } else if (file === 'package.json') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const monorepoMap = new Map();

// 1. Gather all core, handwritten, and generated package versions
const dirsToScan = ['core', 'handwritten', 'packages'];
for (const dir of dirsToScan) {
  const pjsons = findPackageJsons(dir);
  for (const pjsonPath of pjsons) {
    try {
      const content = fs.readFileSync(pjsonPath, 'utf8');
      const json = JSON.parse(content);
      if (json.name && json.version) {
        monorepoMap.set(json.name, json.version);
      }
    } catch (e) {
      // ignore
    }
  }
}

// 2. Process firestore package.json files
const firestoreDir = path.join('handwritten', 'firestore');
const firestorePackageJsons = findPackageJsons(firestoreDir);

function getMajor(versionStr) {
  const match = versionStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

let filesChanged = 0;

for (const pjsonPath of firestorePackageJsons) {
  const content = fs.readFileSync(pjsonPath, 'utf8');
  const json = JSON.parse(content);
  let changed = false;

  const depTypes = ['dependencies', 'devDependencies', 'peerDependencies'];
  for (const depType of depTypes) {
    if (!json[depType]) continue;
    for (const [dep, currentRange] of Object.entries(json[depType])) {
      if (monorepoMap.has(dep)) {
        const newVersion = monorepoMap.get(dep);
        const currentMajor = getMajor(currentRange);
        const newMajor = getMajor(newVersion);

        if (currentMajor !== null && newMajor !== null && newMajor > currentMajor) {
          const prefixMatch = currentRange.match(/^([\^~=]?)/);
          const prefix = prefixMatch ? prefixMatch[1] : '^';
          json[depType][dep] = `${prefix}${newVersion}`;
          changed = true;
          console.log(`Upgrading ${dep} in ${pjsonPath} from ${currentRange} to ${prefix}${newVersion}`);
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(pjsonPath, JSON.stringify(json, null, 2) + '\n');
    filesChanged++;
  }
}

console.log(`Updated ${filesChanged} package.json files.`);
