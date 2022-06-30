const fs = require('fs');
function getApiPathWithDashes(args) {
    const [workdir, folderName] = args
    const contents = JSON.parse(fs.readFileSync(`${workdir}/interContainerVars.json`).toString())
    contents.owlbotYamlPath = `packages/${folderName}/.OwlBot.yaml`;
    fs.writeFileSync(
      `${workdir}/interContainerVars.json`,
      JSON.stringify(contents, null, 4)
    );
}

getApiPathWithDashes(process.argv.slice(2));