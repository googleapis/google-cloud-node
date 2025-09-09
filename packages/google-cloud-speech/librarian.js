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

const versions = glob.sync('packages/google-cloud-speech/src/v*');

versions.forEach(versionDir => {
  const version = path.basename(versionDir);
  const name = 'speech';

  const clientFile = path.resolve(versionDir, `${name}_client.ts`);
  const testFile = path.resolve(`packages/google-cloud-speech/test/gapic_${name}_${version}.ts`);

  // Rename the generated methods to avoid confusion.
  replaceInFile(clientFile, /( +)streamingRecognize\(/g, '$1_streamingRecognize(');
  replaceInFile(testFile, /client.streamingRecognize\(/g, 'client._streamingRecognize(');

  // Manual helper methods override the streaming API so that it
  // accepts streamingConfig when calling streamingRecognize.
  const appendContent = '\n' +
    "import {ImprovedStreamingClient} from '../helpers';\n" +
    '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
    'export interface SpeechClient extends ImprovedStreamingClient {}
';

  try {
    fs.appendFileSync(clientFile, appendContent, 'utf8');
    console.log(`Successfully appended to: ${clientFile}`);
  } catch (err) {
    console.error(`Error appending to file ${clientFile}:`, err);
  }
});
