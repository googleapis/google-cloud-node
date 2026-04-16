import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const packageName = process.argv[2];
if (!packageName) {
  console.error("Please provide a package name");
  process.exit(1);
}

const packagePath = path.join('packages', packageName);
const srcPath = path.join(packagePath, 'src');

if (!fs.existsSync(srcPath)) {
  console.log(`No src directory found in ${packagePath}, skipping.`);
  process.exit(0);
}

const eslintPath = './node_modules/.bin/eslint';
const tsconfigPath = 'tsconfig.json';

// Helper to find all .ts files in a directory recursively
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileList);
    } else if (name.endsWith('.ts')) {
      fileList.push(name);
    }
  }
  return fileList;
}

// Helper to run ESLint on a list of files in chunks
function runEslintOnFiles(filesToLint, tsconfigInclude) {
  if (filesToLint.length === 0) return;

  // Dynamically update tsconfig scope to maintain type coverage for the directory
  const tsconfig = {
    extends: "./node_modules/gts/tsconfig-google.json",
    compilerOptions: {
      rootDir: ".",
      outDir: "build"
    },
    include: [tsconfigInclude]
  };
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log(`Updated tsconfig.json to include: ${tsconfigInclude}`);

  // Chunk files to avoid OOM (e.g., max 20 files at a time)
  const chunkSize = 20;
  for (let i = 0; i < filesToLint.length; i += chunkSize) {
    const chunk = filesToLint.slice(i, i + chunkSize);
    const fileArgs = chunk.map(f => `"${f}"`).join(' ');
    const cmd = `NODE_OPTIONS="--max-old-space-size=8192" ${eslintPath} ${fileArgs}`;
    console.log(`Running on chunk ${i / chunkSize + 1} (${chunk.length} files): ${cmd}`);

    try {
      const output = execSync(cmd, { encoding: 'utf8' });
      console.log("ESLint passed!");
      fs.appendFileSync(path.join(packagePath, 'eslint-output.txt'), output);
    } catch (error) {
      console.log("ESLint failed (as expected if violations found)!");
      fs.appendFileSync(path.join(packagePath, 'eslint-output.txt'), error.stdout || error.message);
    }
  }
}

// Clear old output if exists
const outputPath = path.join(packagePath, 'eslint-output.txt');
if (fs.existsSync(outputPath)) {
  fs.unlinkSync(outputPath);
}

const items = fs.readdirSync(srcPath);
const dirs = items.filter(item => fs.statSync(path.join(srcPath, item)).isDirectory());

if (dirs.length > 0) {
  console.log(`Found subdirectories in ${srcPath}, processing individually.`);
  for (const dir of dirs) {
    const dirPath = path.join(srcPath, dir);
    const filesInDir = getFiles(dirPath);
    console.log(`Found ${filesInDir.length} files in ${dirPath}`);
    runEslintOnFiles(filesInDir, path.join(dirPath, '**/*.ts'));
  }
  // Also process files in src root
  const filesInSrcRoot = fs.readdirSync(srcPath)
    .filter(item => !fs.statSync(path.join(srcPath, item)).isDirectory() && item.endsWith('.ts'))
    .map(item => path.join(srcPath, item));
    
  if (filesInSrcRoot.length > 0) {
    runEslintOnFiles(filesInSrcRoot, path.join(srcPath, '*.ts'));
  }
} else {
  // No subdirectories, process all files in src
  const allFiles = getFiles(srcPath);
  runEslintOnFiles(allFiles, path.join(srcPath, '**/*.ts'));
}
