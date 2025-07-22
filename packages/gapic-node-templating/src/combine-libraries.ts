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
  const items = await fs.readdir(currentPath, {withFileTypes: true}); // Get dirent objects

  for (const item of items) {
    const itemPath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recurse into it
      await traverseDirectory(itemPath, accumulator, stringToRemove);
    } else {
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

export async function createDirectory(
  readDirectory: string,
  writeDirectory?: string,
) {
  writeDirectory = writeDirectory ?? readDirectory;
  const uniquefullPathAndContent =
    await generateFinalDirectoryPath(readDirectory);

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
async function createDirectoryAndWriteFiles(
  baseOutputDir: string,
  files: {filePath: string; content: string}[],
) {
  if (!baseOutputDir) {
    throw new Error('baseOutputDir cannot be empty.');
  }
  if (!Array.isArray(files)) {
    throw new Error('Files must be an array of objects.');
  }

  await fs.mkdir(baseOutputDir);

  const writePromises = files.map(async fileData => {
    const fullFilePath = path.join(baseOutputDir, fileData.filePath);
    console.log(`Processing: ${fullFilePath}`);

    try {
      // 1. Ensure all parent directories for the current file exist
      await fs.mkdir(path.dirname(fileData.filePath), {recursive: true});

      // 2. Write the file with its content
      await fs.writeFile(fullFilePath, fileData.content, 'utf8');
      // console.log(`Successfully wrote: ${fullFilePath}`); // Optional: for debugging
    } catch (error) {
      console.error(`Failed to write file ${fullFilePath}:`, error);
      throw error; // Re-throw to indicate overall failure
    }
  });

  // Wait for all file writing operations to complete
  await Promise.all(writePromises);
  console.log(
    `\nSuccessfully created directory and wrote all specified files to: ${baseOutputDir}`,
  );
}
