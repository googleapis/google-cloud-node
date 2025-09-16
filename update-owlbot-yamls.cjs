
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');

async function main() {
  const packagesDir = 'packages';
  const packageDirs = await fs.readdir(packagesDir);

  for (const packageDir of packageDirs) {
    const owlbotFilePath = path.join(packagesDir, packageDir, '.OwlBot.yaml');
    try {
      await fs.access(owlbotFilePath); // Check if the file exists
      const content = await fs.readFile(owlbotFilePath, 'utf-8');
      const sourceRegex = /source: (.*)/;
      const match = content.match(sourceRegex);

      if (match && match[1]) {
        const oldSourcePath = match[1];
        const serviceDir = path.basename(oldSourcePath);
        
        const findCommand = `find googleapis-gen/google -type d -name "${serviceDir}"`;
        
        exec(findCommand, async (error, stdout, stderr) => {
          if (error) {
            console.error(`Error finding directory for ${serviceDir}: ${stderr}`);
            return;
          }
          
          const foundPaths = stdout.trim().split('\n').filter(p => p);
          if (foundPaths.length > 0) {
            if (foundPaths.length > 1) {
              console.warn(`Warning: Found multiple directories for ${serviceDir}. Using the first one: ${foundPaths[0]}`);
            }
            const foundPath = foundPaths[0];
            const newSourcePath = `//${foundPath.replace('googleapis-gen/', '')}`;
            if (oldSourcePath !== newSourcePath) {
              console.log(`Updating ${owlbotFilePath}:`);
              console.log(`  Old source: ${oldSourcePath}`);
              console.log(`  New source: ${newSourcePath}`);
              const newContent = content.replace(oldSourcePath, newSourcePath);
              await fs.writeFile(owlbotFilePath, newContent);
            }
          } else {
            console.log(`Could not find directory for ${serviceDir}`);
          }
        });
      }
    } catch (err) {
      if (err.code !== 'ENOENT') { // Ignore files that don't exist
        console.error(`Error processing ${owlbotFilePath}: ${err}`);
      }
    }
  }
}

main();
