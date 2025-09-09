// This script iterates through top-level directories in a specified path,
// reads the README.md file in each, and appends a given string
// if it is not already present.

const fs = require('fs/promises');
const path = require('path');
const process = require('process');

// Define the root directory to search within.
// This assumes the script is run from a location where '@packages' is a subdirectory.
const packagesDir = 'packages';

/**
 * Main function to execute the script logic.
 */
async function main() {
  // Get the string to add from the command line arguments.
  // The first two arguments are 'node' and the script name.
  const stringToAdd = '[//]: # "partials.introduction"';

  // Check if a string was provided.
  if (!stringToAdd) {
    console.error('Error: Please provide a string to add as a command-line argument.');
    console.error('Usage: node update_readmes.js "<your string here>"');
    return;
  }

  try {
    // Read all items in the @packages directory.
    const items = await fs.readdir(packagesDir, { withFileTypes: true });

    // Filter for directories only.
    const directories = items.filter(item => item.isDirectory());

    console.log(`Found ${directories.length} top-level directories in ${packagesDir}.`);

    // Iterate over each directory.
    for (const dir of directories) {
      const readmePath = path.join(packagesDir, dir.name, 'README.md');

      try {
        // Read the content of the README file.
        const fileContent = await fs.readFile(readmePath, 'utf8');

        // Check if the string already exists in the file content.
        if (fileContent.includes(stringToAdd)) {
          console.log(`✅  String already exists in ${readmePath}. No changes made.`);
        } else {
          // If the string doesn't exist, append it and write the file.
          const newContent = fileContent + '\n\n' + stringToAdd;
          await fs.writeFile(readmePath, newContent, 'utf8');
          console.log(`⭐  Successfully added the string to ${readmePath}.`);
        }
      } catch (err) {
        // Handle cases where the README.md file doesn't exist.
        if (err.code === 'ENOENT') {
          console.log(`➡️  README.md not found in ${dir.name}. Skipping.`);
        } else {
          console.error(`❌  An error occurred while processing ${dir.name}: ${err.message}`);
        }
      }
    }

  } catch (err) {
    console.error(`Fatal Error: Could not read the ${packagesDir} directory. Please ensure it exists.`);
    console.error(err);
  }
}

// Execute the main function.
main();
