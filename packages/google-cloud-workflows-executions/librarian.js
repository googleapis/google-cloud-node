const fs = require('fs');
const path = require('path');

const directoriesToDelete = [
  'packages/google-cloud-workflows-executions/v1',
  'packages/google-cloud-workflows-executions/v1beta'
];

directoriesToDelete.forEach(dir => {
  try {
    fs.rmdirSync(path.resolve(dir), { recursive: true });
    console.log(`Successfully deleted directory: ${dir}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Directory not found, skipping deletion: ${dir}`);
    } else {
      console.error(`Error deleting directory ${dir}:`, err);
    }
  }
});
