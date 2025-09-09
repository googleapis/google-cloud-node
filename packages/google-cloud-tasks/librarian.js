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

const files = glob.sync('packages/google-cloud-tasks/esm/src/*/cloud_tasks_client_config.json');

files.forEach(file => {
  replaceInFile(path.resolve(file), /"initial_rpc_timeout_millis": 60000/g, '"initial_rpc_timeout_millis": 20000');
  replaceInFile(path.resolve(file), /"max_rpc_timeout_millis": 60000/g, '"max_rpc_timeout_millis": 20000');
});
