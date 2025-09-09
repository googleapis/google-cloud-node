const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('packages/google-cloud-vision/src/*/image_annotator_client.ts');

const appendContent = '\n' +
  "import {FeaturesMethod} from '../helpers';\n" +
  '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
  'export interface ImageAnnotatorClient extends FeaturesMethod {}\n';

files.forEach(file => {
  try {
    fs.appendFileSync(path.resolve(file), appendContent, 'utf8');
    console.log(`Successfully appended to: ${file}`);
  } catch (err) {
    console.error(`Error appending to file ${file}:`, err);
  }
});
