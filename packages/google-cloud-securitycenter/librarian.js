const fs = require('fs');
const path = require('path');

/**
 * Replaces all occurrences of a pattern in a file with a specified replacement string.
 * @param {string} filePath The path to the file.
 * @param {RegExp} pattern The regular expression to search for.
 * @param {string} replacement The string to replace the pattern with.
 */
function replaceInFile(filePath, pattern, replacement) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const result = data.replace(pattern, replacement);
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

// Define the files and replacement details
const filesToUpdate = [
  'packages/google-cloud-securitycenter/protos/protos.d.ts',
  'packages/google-cloud-securitycenter/build/protos/protos.d.ts'
];

const searchPattern = /Kubernetes\.object/g;
const replacementString = 'Kubernetes.Object';

// Run the replacement for each file
filesToUpdate.forEach(file => {
  replaceInFile(path.resolve(file), searchPattern, replacementString);
});