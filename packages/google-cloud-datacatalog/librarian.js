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

const filePath = 'packages/google-cloud-datacatalog/src/index.ts';
const searchPattern = /\nexport \{v1\, v1beta1\, DataCatalogClient\}\;\nexport default \{v1\, v1beta1\, DataCatalogClient}\;/g;
const replacementString = 'const PolicyTagManagerClient = v1beta1.PolicyTagManagerClient;\ntype PolicyTagManagerClient = v1beta1.PolicyTagManagerClient;\nconst PolicyTagManagerSerializationClient = v1beta1.PolicyTagManagerSerializationClient;\ntype PolicyTagManagerSerializationClient = v1beta1.PolicyTagManagerSerializationClient;\nexport {v1, v1beta1, DataCatalogClient, PolicyTagManagerClient, PolicyTagManagerSerializationClient};\nexport default {v1, v1beta1, DataCatalogClient, PolicyTagManagerClient, PolicyTagManagerSerializationClient};';

replaceInFile(path.resolve(filePath), searchPattern, replacementString);
