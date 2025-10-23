<img src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# Google API Extensions for Node.js

[![Release Level][releaselevelimg]][releaselevel]
[![npm version][npmimg]][npm]

Google API Extensions for Node.js (gax-nodejs) is a set of modules which aids the development of APIs for clients and servers based on [gRPC][grpc] and Google API conventions.

Application code will rarely need to use most of the classes within this library directly, but code generated automatically from the API definition files in [Google APIs][googleapis] can use services such as page streaming and request bundling to provide a more convenient and idiomatic API surface to callers.

## Installation
```sh
$ npm install google-gax
```

## Supporting older version of Node.js

This library uses [grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) package for communicating with API server, and it uses HTTP/2 functionality
that is only available in Node.js v8.13.0 or newer. If you need to use this library with older versions of Node.js, you need to make your code depend
on a legacy gRPC library ([grpc](https://www.npmjs.com/package/grpc)) and pass the instance of gRPC to the client constructor:

```js
const grpc = require('grpc');
const client = new APIClient({ grpc }); // APIClient is the client class you use, e.g. SpeechClient, etc.
```

## Contributing
Contributions to this library are always welcome and highly encouraged.  See the [CONTRIBUTING][contributing] documentation for more information on how to get started.

## Details
For detailed documentation of the modules in gax-nodejs, please check out the [docs][docs].

## License
BSD - See [LICENSE][license] for more information.

[contributing]: https://github.com/googleapis/gax-nodejs/blob/main/CONTRIBUTING.md
[docs]: http://googleapis.github.io/gax-nodejs/
[license]: https://github.com/googleapis/gax-nodejs/blob/main/LICENSE
[npmimg]: https://img.shields.io/npm/v/google-gax.svg
[npm]: https://www.npmjs.org/package/google-gax
[googleapis]: https://github.com/googleapis/googleapis/
[grpc]: http://grpc.io
[releaselevel]: https://cloud.google.com/terms/launch-stages
[releaselevelimg]: https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat
