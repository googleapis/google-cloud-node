function getApiPathWithDashes(apiId) {
    console.log(apiId.toString().replace(/\.v.*/, '').replace(/\./g, '-'));
}

getApiPathWithDashes(process.argv.slice(2));