// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs/promises'); // For async file system operations
const path = require('path');

/**
 * Recursive helper function to traverse the directory.
 *
 * @param {string} currentPath The current path being processed.
 * @param {Set<string>} accumulator A Set to accumulate unique paths.
 */
export async function traverseDirectory(
  currentPath: string,
  accumulator: {filePath: string; content: string}[],
  stringToRemove?: RegExp,
) {
  let items;
  try {
    items = await fs.readdir(currentPath, {withFileTypes: true}); // Get dirent objects
  } catch (err) {
    // If this fails, it means that the library is not
    // in the format we expect. This could happen if we
    // are rerunning the command on a well-formed library
    // or its otherwise unexpected. In this case, fail early
    throw new Error('Unexpected library format. Expected *only* top-level directories containing fully formed libraries for each verison.')
  }

  for (const item of items) {
    const itemPath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recurse into it
      await traverseDirectory(itemPath, accumulator, stringToRemove);
    } else {
      // we only want to save the relative paths from main
      const filePath = itemPath.replace(stringToRemove, '');
      const content = await fs.readFile(itemPath, 'utf8');
      accumulator.push({filePath, content});
    }
    // If it's a file, we've already added its path above, so no further action needed
  }

  return accumulator;
}

export async function generateFinalDirectoryPath(currentPath: string) {
  // Get a full list of all the file paths in all the libraries
  let fullPathsAndContent: {filePath: string; content: string}[] = [];

  const directories = await fs.readdir(currentPath);
  for (const directory of directories) {
    fullPathsAndContent = fullPathsAndContent.concat(
      await traverseDirectory(
        path.join(currentPath, directory),
        [],
        path.join(currentPath, directory),
      ),
    );
  }

  // Now we need to clean out duplicates
  const uniquePaths = new Set();
  const uniquefullPathAndContent = [];

  for (const fullPathAndContent of fullPathsAndContent) {
    if (!uniquePaths.has(fullPathAndContent.filePath)) {
      uniquePaths.add(fullPathAndContent.filePath);
      uniquefullPathAndContent.push(fullPathAndContent);
    }
  }
  return uniquefullPathAndContent;
}

/**
 * Recursively creates all directories in a given file path if they don't already exist.
 *
 * @param {string} filePath The full path including the file name.
 * @returns {Promise<void>} A promise that resolves when all directories are created.
 */
async function ensureDirectoryExists(filePath: string) {
  const dirPath = path.dirname(filePath);
  try {
    await fs.mkdir(dirPath, { recursive: true });
    // console.log(`Ensured directory exists for: ${dirPath}`); // Optional: for debugging
  } catch (error) {
    if ((error as any).code !== 'EEXIST') { // EEXIST means it already exists, which is fine
      console.error(`Error ensuring directory ${dirPath} exists:`, error);
      throw error;
    }
  }
}

export async function combineLibraries(
  readDirectory: string,
  writeDirectory: string,
) {
  writeDirectory = writeDirectory || readDirectory;
  console.log(`Generating all unique paths in all library versions from ${readDirectory} to ${writeDirectory}`);
  const uniquefullPathAndContent =
    await generateFinalDirectoryPath(readDirectory);

  console.log(`Creating new library in ${writeDirectory} with ${uniquefullPathAndContent.length} items`);
  await createDirectoryAndWriteFiles(writeDirectory, uniquefullPathAndContent);
}
/**
 * Creates a new directory and writes files with their full content.
 *
 * @param {string} baseOutputDir The root directory where files should be written.
 * @param {Array<object>} files An array of objects, where each object has:
 * - {string} filePath: The relative path to the file from the baseOutputDir.
 * - {string} content: The full content to write to the file.
 * @returns {Promise<void>} A promise that resolves when all files are written.
 */
export async function createDirectoryAndWriteFiles(
  baseOutputDir: string,
  files: {filePath: string; content: string}[],
) {
  if (!baseOutputDir) {
    throw new Error('baseOutputDir cannot be empty.');
  }
  if (!Array.isArray(files)) {
    throw new Error('Files must be an array of objects.');
  }

  // first, remove any existing files; this ensures
  // we're overwriting the existing file
  try {
    await fs.rm(baseOutputDir, { recursive: true, force: true });
  } catch (err) {
    `${baseOutputDir} not found; could not be deleted`
  } 
  await ensureDirectoryExists(baseOutputDir);

  const writePromises = files.map(async fileData => {
    const fullFilePath = path.join(baseOutputDir, fileData.filePath);
    console.log(`Processing: ${fullFilePath}`);

    // 1. Ensure all parent directories for the current file exist
    await ensureDirectoryExists(path.join(baseOutputDir,fileData.filePath));
    // await fs.mkdir(path.dirname(fileData.filePath), {recursive: true});

    // 2. Write the file with its content
    await fs.writeFile(fullFilePath, fileData.content, 'utf8');
  });

  // Wait for all file writing operations to complete
  await Promise.all(writePromises);
  console.log(
    `\nSuccessfully created directory and wrote all specified files to: ${baseOutputDir}`,
  );
}
