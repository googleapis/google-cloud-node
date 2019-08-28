[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Common Promisify: Node.js Client](https://github.com/googleapis/nodejs-promisify)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/promisify.svg)](https://www.npmjs.org/package/@google-cloud/promisify)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-promisify/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-promisify)




A simple utility for promisifying functions and classes.


* [Google Cloud Common Promisify Node.js Client API Reference][client-docs]

* [github.com/googleapis/nodejs-promisify](https://github.com/googleapis/nodejs-promisify)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)

  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Installing the client library

```bash
npm install @google-cloud/promisify
```


### Using the client library

```javascript
const {promisify} = require('@google-cloud/promisify');

/**
 * This is a very basic example function that accepts a callback.
 */
function someCallbackFunction(name, callback) {
  if (!name) {
    callback(new Error('Name is required!'));
  } else {
    callback(null, `Well hello there, ${name}!`);
  }
}

// let's promisify it!
const somePromiseFunction = promisify(someCallbackFunction);

async function quickstart() {
  // now we can just `await` the function to use it like a promisified method
  const [result] = await somePromiseFunction('nodestronaut');
  console.log(result);
}
quickstart();

```
It's unlikely you will need to install this package directly, as it will be
installed as a dependency when you install other `@google-cloud` packages.


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-promisify/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-promisify/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-promisify&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Common Promisify Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-promisify/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-promisify/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/promisify/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing

[auth]: https://cloud.google.com/docs/authentication/getting-started
