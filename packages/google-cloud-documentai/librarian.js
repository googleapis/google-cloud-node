const fs = require('fs');
const path = require('path');
const glob = require('glob');

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

const files = glob.sync('packages/google-cloud-documentai/src/*/document_*_service_client.ts');

files.forEach(file => {
  replaceInFile(path.resolve(file), /servicePath !== staticMembers.servicePath && /g, '');
  replaceInFile(path.resolve(file), /and we're connecting to a non-default endpoint, set scopes just in case/g, 'set scopes');
  replaceInFile(path.resolve(file), /(\/\/ Set the default scopes in auth client if needed(.|\n)*?})/g, '');
});
