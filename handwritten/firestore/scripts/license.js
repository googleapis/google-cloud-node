/*!
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');

const LICENSE_HEADER = `/*!
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`;

function addLicenses(dirNameReads) {
  for (const dirNameRead of dirNameReads) {
    iterateThroughFiles(dirNameRead);
  }
}
function iterateThroughFiles(dirNameRead) {
  console.log(dirNameRead);
  if (fs.existsSync(path.join(dirNameRead))) {
    const files = fs.readdirSync(dirNameRead);
    files.forEach(file => {
      const fileName = file.toString();
      const readName = path.join(dirNameRead, fileName);
      if (fs.statSync(readName).isDirectory()) {
        iterateThroughFiles(readName);
      } else {
        const content = fs.readFileSync(readName, 'utf-8');
        if (!content.includes('Copyright') && !fileName.endsWith('.json')) {
          fs.writeFileSync(readName, `${LICENSE_HEADER}\n${content.trim()}\n`);
        }
      }
    });
  }
}

addLicenses(process.argv.slice(2));
