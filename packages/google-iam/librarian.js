const fs = require('fs');
const path = require('path');

const protosFilePath = path.join(__dirname, 'protos', 'protos.js');

try {
  if (fs.existsSync(protosFilePath)) {
    let content = fs.readFileSync(protosFilePath, 'utf8');
    const oldLine = 'var $root = $protobuf.roots.iam_protos || ($protobuf.roots.iam_protos = {});';
    const newLine = 'var $root = $protobuf.roots._google_cloud_iam_protos || ($protobuf.roots._google_cloud_iam_protos = {});';
    if (content.includes(oldLine)) {
      content = content.replace(oldLine, newLine);
      fs.writeFileSync(protosFilePath, content, 'utf8');
      console.log('Successfully replaced line in protos/protos.js');
    } else {
      console.log('Line to be replaced not found in protos/protos.js. No changes made.');
    }
  } else {
    console.log('protos/protos.js not found. No changes made.');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
