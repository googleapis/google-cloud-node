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

import {Dirent} from 'fs';
import {LibraryConfig} from './library';

const fs = require('fs/promises'); // For async file system operations
const path = require('path');

export interface FilePaths {
  filePath: string;
}

export interface FilePathsAndContents {
  filePath: string;
  content: string;
}
/**
 * Recursively removes a regex pattern from a specified property in an array of objects.
 *
 * @param array The array of objects to modify.
 * @param property The nested property to modify (e.g., 'a.b.c').
 * @param stringToRemove The string to remove.
 */
export function removeRegexFromNestedProperty(
  array: any[],
  property: string,
  stringToRemove: string,
): void {
  const propertyPath = property.split('.');

  array.forEach(item => {
    let currentObject = item;
    // Traverse the object to find the target property's parent
    for (let i = 0; i < propertyPath.length - 1; i++) {
      const key = propertyPath[i];
      if (currentObject && typeof currentObject === 'object') {
        currentObject = currentObject[key];
      } else {
        // Stop if the path is invalid or a primitive is encountered
        return;
      }
    }

    const lastKey = propertyPath[propertyPath.length - 1];
    if (currentObject && typeof currentObject[lastKey] === 'string') {
      // Modify the string property by replacing the regex with an empty string
      currentObject[lastKey] = currentObject[lastKey].replace(
        stringToRemove,
        '',
      );
    }
  });
}

/**
 * Reads the content of files from an array of objects and adds the content to each object.
 * The input array is modified in place.
 *
 * @param filePaths An array of objects, where each object has a 'filePath' property.
 * @returns A promise that resolves when all file contents have been read and added to the array.
 */
async function readFilesContent(filePaths: FilePaths[]): Promise<void> {
  const promises = filePaths.map(async item => {
    try {
      const content = await fs.readFile(item.filePath, 'utf-8');
      Object.assign(item, {content});
    } catch (error) {
      console.error(`Failed to read file at ${item.filePath}:`, error);
      Object.assign(item, {content: null});
    }
  });

  await Promise.all(promises);
}

/**
 * Recursive helper function to traverse the directory.
 *
 * @param {string} currentPath The current path being processed.
 * @param {Array} accumulator An array to accumulate objects with unique paths and their content.
 */
export async function traverseDirectory(
  currentPath: string,
  accumulator: {filePath: string}[],
) {
  let items: Dirent[];
  try {
    items = await fs.readdir(currentPath, {withFileTypes: true}); // Get dirent objects
  } catch (err) {
    // If this fails, it means that the library is not
    // in the format we expect. This could happen if we
    // are rerunning the command on a well-formed library
    // or its otherwise unexpected. In this case, fail early
    throw new Error(
      'Unexpected library format. Expected *only* top-level directories containing fully formed libraries for each verison.',
    );
  }

  for (const item of items) {
    const filePath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recurse into it
      await traverseDirectory(filePath, accumulator);
    } else {
      accumulator.push({filePath});
    }
    // If it's a file, we've already added its path above, so no further action needed
  }

  return accumulator;
}

/**
 * Asynchronously traverses a directory to find all unique file paths and their content from multiple subdirectories.
 *
 * This function reads all top-level directories within a given path. It then
 * recursively traverses each subdirectory to get a list of all files. Finally,
 * it deduplicates the list to ensure each unique file path is represented only once.
 *
 * @param {string} currentPath - The path to the root directory containing all library versions.
 * @returns {Promise<Array<{filePath: string; content: string}>>} A promise that resolves to an array of objects, each containing a unique file path and its content.
 */
export async function generateFinalDirectoryPath(
  libraryConfig: LibraryConfig,
): Promise<Array<FilePathsAndContents>> {
  // Get a full list of all the file paths in all the libraries
  let fullPaths: {filePath: string}[] = [];
  let fullPathsAndContents: {filePath: string; content: string}[] = [];
  const directories = await fs.readdir(libraryConfig.sourcePath);
  for (const directory of directories) {
    fullPaths = await traverseDirectory(
      path.join(libraryConfig.sourcePath, directory),
      [],
    );
    setOnlyDefaultSystemTests(libraryConfig.defaultVersion, fullPaths);
    await readFilesContent(fullPaths);
    removeRegexFromNestedProperty(
      fullPaths,
      'filePath',
      path.join(libraryConfig.sourcePath, directory),
    );
    fullPathsAndContents = fullPathsAndContents.concat(
      fullPaths as FilePathsAndContents[],
    );
  }

  // Now we need to clean out duplicates
  const uniquePaths = new Set<string>();
  const uniquefullPathAndContent = [];

  for (const fullPathAndContent of fullPathsAndContents) {
    if (!uniquePaths.has(fullPathAndContent.filePath)) {
      uniquePaths.add(fullPathAndContent.filePath);
      uniquefullPathAndContent.push(fullPathAndContent);
    }
  }
  uniquefullPathAndContent.forEach(x => console.log(x));
  return uniquefullPathAndContent as unknown as {
    filePath: string;
    content: string;
  }[];
}

/**
 * Recursively creates all directories in a given file path if they don't already exist.
 *
 * @param {string} filePath The full path including the file name.
 * @returns {Promise<void>} A promise that resolves when all directories are created.
 */
export async function ensureDirectoryExists(filePath: string): Promise<void> {
  const dirPath = path.dirname(filePath);
  try {
    await fs.mkdir(dirPath, {recursive: true});
  } catch (error) {
    // EEXIST means it already exists, which is fine
    if ((error as any).code !== 'EEXIST') {
      console.error(`Error ensuring directory ${dirPath} exists:`, error);
      throw error;
    }
  }
}

export function setOnlyDefaultSystemTests(
  defaultVersion: string,
  filePaths: FilePaths[],
) {
  const systemTestRegex = new RegExp(
    'system-test/fixtures/sample/src',
  );

  for (const filePathObj of filePaths) {
    if (
      systemTestRegex.test(filePathObj.filePath) &&
      !filePathObj.filePath.includes(defaultVersion)
    ) {
      filePaths.splice(filePaths.indexOf(filePathObj), 1);
    }
  }
}

/**
 * Combines multiple library versions into a single, unified directory.
 *
 * This function reads files from all subdirectories of a `readDirectory`,
 * removes duplicates, and then writes the unique set of files to a new
 * `writeDirectory`. This process is used to merge multiple versioned
 * libraries into one.
 *
 * @param {string} sourcePath - The source directory containing the individual library versions.
 * @param {string} destinationPath - The destination directory where the combined library will be created.
 * @returns {Promise<void>} A promise that resolves when all files have been combined and written.
 */
export async function combineLibraries(
  libraryConfig: LibraryConfig,
): Promise<void> {
  console.log(
    `Generating all unique paths in all library versions from ${libraryConfig.sourcePath} to ${libraryConfig.destinationPath}`,
  );
  const uniquefullPathAndContent =
    await generateFinalDirectoryPath(libraryConfig);

  console.log(
    `Creating new library in ${libraryConfig.destinationPath} with ${uniquefullPathAndContent.length} items`,
  );
  await writeFilesToGivenLocation(
    libraryConfig.destinationPath,
    uniquefullPathAndContent,
  );
}

/**
 * Writes all files with their contents and paths. Creates any directories needed along the way.
 *
 * @param {string} dirToWrite The root directory where files should be written.
 * @param {Array<{filePath: string; content: string}>} files An array of objects, where each object has a file path and its content.
 * @returns {Promise<void>} A promise that resolves when all files are written.
 */
export async function writeFilesToGivenLocation(
  dirToWrite: string,
  files: {filePath: string; content: string}[],
): Promise<void> {
  if (!dirToWrite) {
    throw new Error('baseOutputDir cannot be empty.');
  }
  if (!Array.isArray(files)) {
    throw new Error('Files must be an array of objects.');
  }

  // first, remove any existing files; this ensures
  // we're overwriting the existing file
  try {
    await fs.rm(dirToWrite, {recursive: true, force: true});
  } catch (err) {
    `${dirToWrite} not found; could not be deleted`;
  }
  await ensureDirectoryExists(dirToWrite);

  const writeFilePromises = files.map(async fileData => {
    const fullFilePath = path.join(dirToWrite, fileData.filePath);
    console.log(`Processing: ${fullFilePath}`);

    // 1. Ensure all parent directories for the current file exist
    await ensureDirectoryExists(path.join(dirToWrite, fileData.filePath));
    // await fs.mkdir(path.dirname(fileData.filePath), {recursive: true});

    // 2. Write the file with its content
    await fs.writeFile(fullFilePath, fileData.content, 'utf8');
  });

  // Wait for all file writing operations to complete
  await Promise.all(writeFilePromises);
  console.log(
    `\nSuccessfully created directory and wrote all specified files to: ${dirToWrite}`,
  );
}
