import { read } from "node:fs";

const fs = require('fs/promises'); // For async file system operations
const path = require('path');

/**
 * Recursive helper function to traverse the directory.
 *
 * @param {string} currentPath The current path being processed.
 * @param {Set<string>} accumulator A Set to accumulate unique paths.
 */
export async function traverseDirectory(currentPath: string, accumulator: {filePath: string, content: string}[], stringToRemove?: RegExp) {
    // Add the current directory itself to the set
    // accumulator.push(path.resolve(currentPath));

    const items = await fs.readdir(currentPath, { withFileTypes: true }); // Get dirent objects

    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);

      // Add the current item (file or directory) to the set
    //   accumulator.push(path.resolve(itemPath));

      if (item.isDirectory()) {
        // If it's a directory, recurse into it
        await traverseDirectory(itemPath, accumulator, stringToRemove);
      } else {
        let filePath = itemPath.replace(stringToRemove, "")
        let content = await fs.readFile(itemPath, 'utf8');
        accumulator.push({filePath, content});
      }
      // If it's a file, we've already added its path above, so no further action needed
    }

    // console.log(accumulator);
    return accumulator;
}


export async function generateFinalDirectoryPath(currentPath: string) {
    // Get a full list of all the file paths in all the libraries
    let fullPathsAndContent: {filePath: string, content: string}[] = [];

    const directories = await fs.readdir(currentPath);
    for (const directory of directories) {
        fullPathsAndContent = fullPathsAndContent.concat(await traverseDirectory(path.join(currentPath, directory), [], path.join(currentPath, directory)))
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

export async function createDirectory(readDirectory: string, writeDirectory?: string) {
    // If we're testing, we'll create a new directory, otherwise
    // we'll just overwrite 
    writeDirectory = writeDirectory ?? readDirectory;
    const uniquefullPathAndContent = await generateFinalDirectoryPath(readDirectory);

    // console.log("HELLO")
    // console.log(writeDirectory)
    // console.log(uniquefullPathAndContent)
    createDirectoryAndWriteFiles(writeDirectory, uniquefullPathAndContent)

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

/**
 * Creates a new directory and writes files with their full content.
 *
 * @param {string} baseOutputDir The root directory where files should be written.
 * @param {Array<object>} files An array of objects, where each object has:
 * - {string} filePath: The relative path to the file from the baseOutputDir.
 * - {string} content: The full content to write to the file.
 * @returns {Promise<void>} A promise that resolves when all files are written.
 */
async function createDirectoryAndWriteFiles(baseOutputDir: string, files: {filePath: string, content: string}[]) {
  if (!baseOutputDir) {
    throw new Error('baseOutputDir cannot be empty.');
  }
  if (!Array.isArray(files)) {
    throw new Error('Files must be an array of objects.');
  }

  // Ensure the base output directory itself exists first
//   try {
    await fs.mkdir(baseOutputDir);
//     console.log(`Base output directory created/ensured: ${baseOutputDir}`);
//   } catch (error) {
//     console.error(`Failed to create base output directory ${baseOutputDir}:`, error);
//     throw error;
//   }

  console.log('BASE OUTPUT DIR')
  console.log(baseOutputDir)
  const writePromises = files.map(async (fileData) => {
    console.log(fileData.filePath)
    const fullFilePath = path.join(baseOutputDir, fileData.filePath);
    console.log(`Processing: ${fullFilePath}`);

    try {
      // 1. Ensure all parent directories for the current file exist
      await ensureDirectoryExists(fullFilePath);

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
  console.log(`\nSuccessfully created directory and wrote all specified files to: ${baseOutputDir}`);
}

// export async function mergeDirectories(dirPath: string) {
//     let pathsToCreate = [];
//     const dirPaths = traverseDirectory(dirPath, pathsToCreate);
//     const pathLinksToCompare = dirPaths[0].split('/');
//     for (let y=0; y<pathLinksToCompare.length; y++) {
//         for (let x=1; (x-1)<dirPaths.length; x++) {
//             if (dirPaths[x][y] !== pathLinksToCompare[y]) {
//                 // This could be a directory or a file
//                 // Either way, here we want to just copy over
//                 pathsToCreate.push(mainPathToCreate.concat(pathLinksToCompare[y]))
//             } else {
//                 mainPathToCreate.push(pathLinksToCompare[y]);
//             }
//         }
//     }
// }
// --- Configuration ---
// Define the base directory where your individual speech-*-nodejs libraries reside.
// If the script is in the same directory as the top-level libraries, use '.'
// Otherwise, provide the absolute or relative path.
// const BASE_LIBRARIES_DIR = '.';

// // Define the name of the combined library directory
// const COMBINED_LIB_NAME = 'speech-nodejs-combined';
// const COMBINED_LIB_PATH = path.join(BASE_LIBRARIES_DIR, COMBINED_LIB_NAME);

// // --- Helper Function for Recursive Directory Listing ---
// async function getSubdirectories(dirPath: string) {
//     try {
//         const entries = await fs.readdir(dirPath, { withFileTypes: true });
//         return entries.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             return []; // Directory doesn't exist, return empty array
//         }
//         throw error; // Re-throw other errors
//     }
// }

// // --- Functions for combining directories ---

// /**
//  * Combines protos directories.
//  * Copies version-specific proto folders (v1, v1p1beta1, v2) into the combined structure.
//  * Also attempts to copy root proto files (protos.d.ts, protos.js, protos.json) from the first encountered library.
//  * @param {string} sourceProtoDir - The 'protos' directory of the source library.
//  * @param {string} combinedProtoDir - The 'protos' directory of the combined library.
//  */
// async function combineProtos(sourceProtoDir, combinedProtoDir) {
//     console.log(`    - Combining protos from: ${sourceProtoDir}`);

//     const googleCloudSpeechPath = path.join(sourceProtoDir, 'google', 'cloud', 'speech');

//     try {
//         const versionDirs = await getSubdirectories(googleCloudSpeechPath);

//         for (const versionName of versionDirs) {
//             const sourceVersionPath = path.join(googleCloudSpeechPath, versionName);
//             const destinationVersionPath = path.join(combinedProtoDir, 'google', 'cloud', 'speech', versionName);

//             console.log(`      Copying proto version '${versionName}' to '${destinationVersionPath}'...`);
//             await fs.mkdir(destinationVersionPath, { recursive: true });
//             await fs.cp(sourceVersionPath, destinationVersionPath, { recursive: true });
//         }

//         // Copy root protos files (protos.d.ts, protos.js, protos.json) if they don't exist in destination
//         // Note: These files are typically generated. For a truly combined lib, you'd regenerate them.
//         const filesToCopyAtRoot = ['protos.d.ts', 'protos.js', 'protos.json'];
//         for (const fileName of filesToCopyAtRoot) {
//             const sourceFilePath = path.join(sourceProtoDir, fileName);
//             const destFilePath = path.join(combinedProtoDir, fileName);
//             try {
//                 // Check if file exists in source and doesn't exist in destination
//                 await fs.access(sourceFilePath); // Throws if file doesn't exist
//                 try {
//                     await fs.access(destFilePath); // Throws if file doesn't exist
//                     // File already exists in destination, skip
//                 } catch (err) {
//                     if (err.code === 'ENOENT') {
//                         // Destination file doesn't exist, so copy it
//                         await fs.copyFile(sourceFilePath, destFilePath);
//                     } else {
//                         throw err; // Re-throw other errors
//                     }
//                 }
//             } catch (err) {
//                 // Source file doesn't exist, or other error, just continue
//             }
//         }

//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.warn(`      Skipping protos for '${sourceProtoDir}' as path not found.`);
//         } else {
//             console.error(`      Error combining protos for '${sourceProtoDir}':`, error.message);
//         }
//     }
// }

// /**
//  * Combines samples directories.
//  * Copies version-specific sample folders (v1, v1p1beta1, v2) into the combined structure.
//  * @param {string} sourceSamplesDir - The 'samples' directory of the source library.
//  * @param {string} combinedSamplesDir - The 'samples' directory of the combined library.
//  */
// async function combineSamples(sourceSamplesDir, combinedSamplesDir) {
//     console.log(`    - Combining samples from: ${sourceSamplesDir}`);

//     const sourceGeneratedPath = path.join(sourceSamplesDir, 'generated');
//     try {
//         const versionDirs = await getSubdirectories(sourceGeneratedPath);

//         for (const versionName of versionDirs) {
//             const sourceVersionPath = path.join(sourceGeneratedPath, versionName);
//             const destinationVersionPath = path.join(combinedSamplesDir, 'generated', versionName);

//             console.log(`      Copying sample version '${versionName}' to '${destinationVersionPath}'...`);
//             await fs.mkdir(destinationVersionPath, { recursive: true });
//             await fs.cp(sourceVersionPath, destinationVersionPath, { recursive: true });
//         }
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.warn(`      Skipping samples for '${sourceSamplesDir}' as path not found.`);
//         } else {
//             console.error(`      Error combining samples for '${sourceSamplesDir}':`, error.message);
//         }
//     }
// }

// /**
//  * Combines source (src) directories.
//  * Creates a unique subdirectory for each library's source code within the combined 'src'.
//  * @param {string} sourceSrcDir - The 'src' directory of the source library.
//  * @param {string} combinedSrcDir - The 'src' directory of the combined library.
//  * @param {string} libraryId - The base name of the source library (e.g., 'speech-v1-nodejs').
//  */
// async function combineSrc(sourceSrcDir, combinedSrcDir, libraryId) {
//     console.log(`    - Combining src from: ${sourceSrcDir}`);
//     const destinationVersionSrcPath = path.join(combinedSrcDir, libraryId);
//     try {
//         await fs.mkdir(destinationVersionSrcPath, { recursive: true });
//         console.log(`      Copying source code to '${destinationVersionSrcPath}'...`);
//         await fs.cp(sourceSrcDir, destinationVersionSrcPath, { recursive: true });
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.warn(`      Skipping src for '${sourceSrcDir}' as path not found.`);
//         } else {
//             console.error(`      Error combining src for '${sourceSrcDir}':`, error.message);
//         }
//     }
// }

// /**
//  * Combines system-test directories.
//  * Creates a unique subdirectory for each library's system tests within the combined 'system-test'.
//  * @param {string} sourceSystemTestDir - The 'system-test' directory of the source library.
//  * @param {string} combinedSystemTestDir - The 'system-test' directory of the combined library.
//  * @param {string} libraryId - The base name of the source library.
//  */
// async function combineSystemTest(sourceSystemTestDir, combinedSystemTestDir, libraryId) {
//     console.log(`    - Combining system-tests from: ${sourceSystemTestDir}`);
//     const destinationVersionSystemTestPath = path.join(combinedSystemTestDir, libraryId);
//     try {
//         await fs.mkdir(destinationVersionSystemTestPath, { recursive: true });
//         console.log(`      Copying system tests to '${destinationVersionSystemTestPath}'...`);
//         await fs.cp(sourceSystemTestDir, destinationVersionSystemTestPath, { recursive: true });
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.warn(`      Skipping system-test for '${sourceSystemTestDir}' as path not found.`);
//         } else {
//             console.error(`      Error combining system-test for '${sourceSystemTestDir}':`, error.message);
//         }
//     }
// }

// /**
//  * Combines unit (test) directories.
//  * Creates a unique subdirectory for each library's unit tests within the combined 'test'.
//  * @param {string} sourceTestDir - The 'test' directory of the source library.
//  * @param {string} combinedTestDir - The 'test' directory of the combined library.
//  * @param {string} libraryId - The base name of the source library.
//  */
// async function combineUnitTest(sourceTestDir, combinedTestDir, libraryId) {
//     console.log(`    - Combining unit tests from: ${sourceTestDir}`);
//     const destinationVersionTestPath = path.join(combinedTestDir, libraryId);
//     try {
//         await fs.mkdir(destinationVersionTestPath, { recursive: true });
//         console.log(`      Copying unit tests to '${destinationVersionTestPath}'...`);
//         await fs.cp(sourceTestDir, destinationVersionTestPath, { recursive: true });
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.warn(`      Skipping unit test for '${sourceTestDir}' as path not found.`);
//         } else {
//             console.error(`      Error combining unit test for '${sourceTestDir}':`, error.message);
//         }
//     }
// }

// // --- Main Script Logic ---
export async function combineLibraries(packageDirPath: string, apiId: string) {};
//         // We expect to have the combined library created.
//         // At this point, we do not expect to change the library name.
//         // Eventually we'll need to remove the *-nodejs at the end of the
//         // library name when we move off owlbot fully.

//         const combinedLibPathProtos = path.join(packageDirPath, 'protos', 'google', )
//         // 2. Create the base structure in the combined library
//         await fs.mkdir(path.join(COMBINED_LIB_PATH, 'protos', 'google', 'cloud', 'speech'), { recursive: true });
//         await fs.mkdir(path.join(COMBINED_LIB_PATH, 'samples', 'generated'), { recursive: true });
//         await fs.mkdir(path.join(COMBINED_LIB_PATH, 'src'), { recursive: true });
//         await fs.mkdir(path.join(COMBINED_LIB_PATH, 'system-test'), { recursive: true });
//         await fs.mkdir(path.join(COMBINED_LIB_PATH, 'test'), { recursive: true });

//         // 3. Iterate through each individual library and combine its components
//         const topLevelDirs = await getSubdirectories(BASE_LIBRARIES_DIR);

//         for (const libraryName of topLevelDirs) {
//             // Skip the combined directory itself if it's created in the BASE_LIBRARIES_DIR
//             if (libraryName === COMBINED_LIB_NAME) {
//                 continue;
//             }

//             const libraryDir = path.join(BASE_LIBRARIES_DIR, libraryName);
//             console.log(`Processing individual library: ${libraryName}`);
//             console.log("-----------------------------------");

//             // Define paths to the subdirectories of the current individual library
//             const SOURCE_PROTOS_DIR = path.join(libraryDir, 'protos');
//             const SOURCE_SAMPLES_DIR = path.join(libraryDir, 'samples');
//             const SOURCE_SRC_DIR = path.join(libraryDir, 'src');
//             const SOURCE_SYSTEM_TEST_DIR = path.join(libraryDir, 'system-test');
//             const SOURCE_TEST_DIR = path.join(libraryDir, 'test'); // This is for unit tests

//             // --- Combine Protos ---
//             await combineProtos(SOURCE_PROTOS_DIR, path.join(COMBINED_LIB_PATH, 'protos'));

//             // --- Combine Samples ---
//             await combineSamples(SOURCE_SAMPLES_DIR, path.join(COMBINED_LIB_PATH, 'samples'));

//             // --- Combine Source (src) ---
//             await combineSrc(SOURCE_SRC_DIR, path.join(COMBINED_LIB_PATH, 'src'), libraryName);

//             // --- Combine System Tests ---
//             await combineSystemTest(SOURCE_SYSTEM_TEST_DIR, path.join(COMBINED_LIB_PATH, 'system-test'), libraryName);

//             // --- Combine Unit Tests ---
//             await combineUnitTest(SOURCE_TEST_DIR, path.join(COMBINED_LIB_PATH, 'test'), libraryName);

//             console.log("-----------------------------------");
//             console.log("");
//         }

//         console.log(`Combined library '${COMBINED_LIB_NAME}' created successfully at '${COMBINED_LIB_PATH}'.`);
//         console.log("Please review the combined structure and add any necessary package.json, tsconfig.json, or build configurations for the new combined library.");

//     }