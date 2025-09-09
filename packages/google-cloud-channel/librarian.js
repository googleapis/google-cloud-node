const fs = require('fs');
const path = require('path');

const filePath = 'packages/google-cloud-channel/test/gapic_cloud_channel_reports_service_v1.ts';

try {
  fs.unlinkSync(path.resolve(filePath));
  console.log(`Successfully deleted: ${filePath}`);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`File not found, skipping deletion: ${filePath}`);
  } else {
    console.error(`Error deleting file ${filePath}:`, err);
  }
}
