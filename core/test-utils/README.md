<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Test Utilities: Node.js](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/google-test-utils.svg)](https://www.npmjs.org/package/google-test-utils)

Testing utilities for Google Cloud client libraries.

A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/blob/main/core/test-utils/CHANGELOG.md).

* [github.com/googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node)

**Table of contents:**

* [Quickstart](#quickstart)
  * [Installing the library](#installing-the-library)
  * [Using the library](#using-the-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Installing the library

```bash
npm install google-test-utils
```

It's unlikely you will need to install this package directly, as it is intended as an internal testing utility across Google Cloud Node.js client libraries.

### Using the library

```typescript
import {TestResources} from 'google-test-utils';

const testResources = new TestResources('my-test-suite');
const resourceName = testResources.generateName('my-test');
```

## Supported Node.js Versions

This library is not publicly supported.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/core/test-utils/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/core/test-utils/LICENSE)
