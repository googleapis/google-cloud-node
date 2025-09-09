Pretend you are a software engineer. I need you to go into each subdirectory in @google-cloud-node/packages and do the following:

1. Check if an owlbot.py file exists. If it doesn't exist, you can skip the directory.

2. If it does exist, check if it has any logic. For example, this owlbot.py does not have any real logic:

```py
import synthtool.languages.node_mono_repo as node

node.owlbot_main(relative_dir="packages/google-cloud-automl",
    staging_excludes=['README.md', 'package.json'],
    templates_excludes=['.kokoro/trampoline.sh', '.kokoro/continuous/node12/samples-test.cfg', '.kokoro/presubmit/node12/samples-test.cfg']
)
```

All it does is excludes files from being generated. If that's the case, you can just delete the owlbot.py file.

3. If it does have any logic, rewrite it with the following restrictions:
    - The file should NOT rely on synthtool at all.
    - The file should be rewritten in javascript, and it should be renamed to librarian.js
    - The logic should remain exactly the same. For example, if it uses regex to replace something, the same logic should remain, it should just not rely on synthtool and should be rewritten in javascript.
    - The file should execute itself. It will be called as `node librarian.js`, so it should make those changes after calling the file.

Here is an example of a previous transition:

```py
import synthtool.languages.node_mono_repo as node
import synthtool as s

node.owlbot_main(relative_dir="packages/google-cloud-securitycenter",
    staging_excludes=['package.json', 'README.md'],
    templates_excludes=['.kokoro/samples-test.sh', '.kokoro/samples-test.sh']
)

s.replace("packages/google-cloud-securitycenter/protos/protos.d.ts", r"Kubernetes\.object", "Kubernetes.Object")
s.replace("packages/google-cloud-securitycenter/build/protos/protos.d.ts", r"Kubernetes\.object", "Kubernetes.Object")
```

was transformed to

```js
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

// Define the files and replacement details
const filesToUpdate = [
  'packages/google-cloud-securitycenter/protos/protos.d.ts',
  'packages/google-cloud-securitycenter/build/protos/protos.d.ts'
];

const searchPattern = /Kubernetes\.object/g;
const replacementString = 'Kubernetes.Object';

// Run the replacement for each file
filesToUpdate.forEach(file => {
  replaceInFile(path.resolve(file), searchPattern, replacementString);
});
```

4. Importantly: at the end of this run there should be NO owlbot.py files at all.