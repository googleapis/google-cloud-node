const fs = require('fs');
const path = require('path');
const glob = require('glob');

const commonEnvVars = fs.readFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common_env_vars.cfg'), 'utf8');

// Append to common.cfg
try {
  fs.appendFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common.cfg'), '\n' + commonEnvVars, 'utf8');
  console.log('Successfully appended to .kokoro/common.cfg');
} catch (err) {
  console.error('Error appending to .kokoro/common.cfg:', err);
}

// Append to all common.cfg files in continuous integration directories
const commonConfigFiles = glob.sync('packages/google-cloud-monitoring/.kokoro/continuous/**/common.cfg');

commonConfigFiles.forEach(file => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    const result = commonEnvVars + '\n' + data;
    fs.writeFileSync(file, result, 'utf8');
    console.log(`Successfully updated: ${file}`);
  } catch (err) {
    console.error(`Error processing file ${file}:`, err);
  }
});
