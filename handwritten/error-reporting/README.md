[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Error Reporting: Node.js Client](https://github.com/googleapis/nodejs-error-reporting)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/error-reporting.svg)](https://www.npmjs.org/package/@google-cloud/error-reporting)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-error-reporting/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-error-reporting)




> Node.js idiomatic client for [Error Reporting][product-docs].

[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/docs/) aggregates and displays errors produced in your running cloud services.


* [Stackdriver Error Reporting Node.js Client API Reference][client-docs]
* [Stackdriver Error Reporting Documentation][product-docs]
* [github.com/googleapis/nodejs-error-reporting](https://github.com/googleapis/nodejs-error-reporting)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable the Stackdriver Error Reporting API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/error-reporting
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Instantiates a client
const errors = new ErrorReporting();

// Reports a simple error
errors.report('Something broke!');

```
This module provides custom Stackdriver Error Reporting support for Node.js applications.
[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) is a feature of
Google Cloud Platform that allows in-depth monitoring and viewing of errors reported by
applications running in almost any environment.

However, note that [@google-cloud/logging-winston](https://github.com/googleapis/nodejs-logging-winston) and [@google-cloud/logging-bunyan](https://github.com/googleapis/nodejs-logging-bunyan) automatically integrate with the Error Reporting service for Error objects logged at severity `error` or higher, for applications running on Google Cloud Platform.

Thus, if you are already using Winston or Bunyan in your application, and don't need custom error reporting capabilities, you do not need to use the `@google-cloud/error-reporting` library directly to report errors to the Error Reporting Console.

![Stackdriver Error Reporting overview](https://raw.githubusercontent.com/googleapis/nodejs-error-reporting/master/doc/images/errors-overview.png)

Here's an introductory video that provides some more details:

[![Learn about Error Reporting in Stackdriver](https://img.youtube.com/vi/cVpWVD75Hs8/0.jpg)](https://www.youtube.com/watch?v=cVpWVD75Hs8)

# When Errors Are Reported

The `reportMode` configuration option is used to specify when errors are reported to the Error Reporting Console.  It can have one of three values:
* `'production'` (default): Only report errors if the NODE_ENV environment variable is set to "production".
* `'always'`: Always report errors regardless of the value of NODE_ENV.
* `'never'`: Never report errors regardless of the value of NODE_ENV.

The `reportMode` configuration option replaces the deprecated `ignoreEnvironmentCheck` configuration option.  If both the `reportMode` and `ignoreEnvironmentCheck` options are specified, the `reportMode` configuration option takes precedence.

The `ignoreEnvironmentCheck` option should not be used.  However, if it is used, and the `reportMode` option is not specified, it can have the values:
* `false` (default): Only report errors if the NODE_ENV environment variable is set to "production".
* `true`: Always report errors regardless of the value of NODE_ENV.

See the [Configuration](#configuration) section to learn how to specify configuration options.

## Configuration
The following code snippet lists available configuration options.  All configuration options are optional.

```js
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting({
    projectId: 'my-project-id',
    keyFilename: '/path/to/keyfile.json',
    credentials: require('./path/to/keyfile.json'),
    // Specifies when errors are reported to the Error Reporting Console.
    // See the "When Errors Are Reported" section for more information.
    // Defaults to 'production'
    reportMode: 'production',
    // Determines the logging level internal to the library; levels range 0-5
    // where 0 indicates no logs should be reported and 5 indicates all logs
    // should be reported.
    // Defaults to 2 (warnings)
    logLevel: 2,
    serviceContext: {
        service: 'my-service',
        version: 'my-service-version'
    }
});
```

## Examples

### Reporting Manually

```js
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

// Use the error message builder to customize all fields ...
const errorEvt = errors.event()
                    .setMessage('My error message')
                    .setUser('root@nexus');
errors.report(errorEvt, () => console.log('done!'));

// or just use a regular error ...
errors.report(new Error('My error message'), () => console.log('done!'));

// or one can even just use a string.
errors.report('My error message');
```

The stack trace associated with an error can be viewed in the error reporting console.
* If the `errors.report` method is given an `ErrorMessage` object built using the `errors.event` method, the stack trace at the point where the error event was constructed will be used.
* If the `errors.report` method is given an `Error` object, the stack trace where the error was instantiated will be used.
* If the `errors.report` method is given a string, the stack trace at the point where `errors.report` is invoked will be used.

### Using Express

```js
const express = require('express');

const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

const app = express();

app.get('/error', (req, res, next) => {
    res.send('Something broke!');
    next(new Error('Custom error message'));
});

app.get('/exception', () => {
    JSON.parse('{\"malformedJson\": true');
});

// Note that express error handling middleware should be attached after all
// the other routes and use() calls. See [express docs][express-error-docs].
app.use(errors.express);

app.listen(3000);
```

### Using Hapi

```js
const hapi = require('hapi');
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

const server = new hapi.Server();
server.connection({ port: 3000 });
server.start();

server.route({
    method: 'GET',
    path: '/error',
    handler: (request, reply) => {
    reply('Something broke!');
    throw new Error('Custom error message');
    }
});

server.register(errors.hapi);
```

### Using Koa

```js
const Koa = require('koa');
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

const app = new Koa();

app.use(errors.koa);

app.use(function *(next) {
    //This will set status and message
    this.throw('Error Message', 500);
});

// response
app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);
```

### Using Restify

```js
const restify = require('restify');
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

function respond(req, res, next) {
    next(new Error('this is a restify error'));
}

const server = restify.createServer();

server.use(errors.restify(server));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000);
```

## Unhandled Rejections

Unhandled Rejections are not reported by default.  The reporting of unhandled rejections can be enabled using the `reportUnhandledRejections` configuration option.  See the [Configuration](#configuration) section for more details.

If unhandled rejections are set to be reported, then, when an unhandled rejection occurs, a message is printed to standard out indicated that an unhandled rejection had occurred and is being reported, and the value causing the rejection is reported to the error-reporting console.

## Catching and Reporting Application-wide Uncaught Errors

Uncaught exceptions are not reported by default.  *It is recommended to process `uncaughtException`s for production-deployed applications.*

Note that uncaught exceptions are not reported by default because to do so would require adding a listener to the `uncaughtException` event.  Adding such a listener without knowledge of other `uncaughtException` listeners can cause interference between the event handlers or prevent the process from terminating cleanly.  As such, it is necessary for `uncaughtException`s to be reported manually.

```js
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting();

process.on('uncaughtException', (e) => {
    // Write the error to stderr.
    console.error(e);
    // Report that same error the Stackdriver Error Service
    errors.report(e);
});
```

More information about uncaught exception handling in Node.js and what it means for your application can be found [here](https://nodejs.org/api/process.html#process_event_uncaughtexception).

### Using an API Key

You may use an API key in lieu of locally-stored credentials. Please see [this document](https://support.google.com/cloud/answer/6158862) on how to set up an API key if you do not already have one.

Once you have obtained an API key, you may provide it as part of the Error Reporting instance configuration:

```js
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
const errors = new ErrorReporting({
    projectId: '{your project ID}',
    key: '{your api key}'
});
```

If a key is provided, the module will not attempt to authenticate using the methods associated with locally-stored credentials.  We recommend using a file, environment variable, or another mechanism to store the API key rather than hard-coding it into your application's source.

**Note:** The Error Reporting instance will check if the provided API key is invalid shortly after it is instantiated. If the key is invalid, an error-level message will be logged to stdout.

### Long Stack Traces

The [longjohn](https://www.npmjs.com/package/longjohn) module can be used with this library to enable [long-stack-traces](https://github.com/tlrobinson/long-stack-traces) and updates an `Error` object's stack trace, by adding special line, to indicate an async jump.  In `longjohn` version `0.2.12`, for example, a single line of dashes is included in a stack trace, by default, to indicate an async jump.

Before reporting an `Error` object using the `report` method of the `@google-cloud/error-reporting` module, the stack trace needs to modified to remove this special line added by `longjohn`.  Since the `longjohn` module can be configured to have a custom line indicating an async jump, the process of removing the custom line should be handled by the user of the `longjohn` module.

The following code illustrates how to update an `Error`'s stack trace, to remove the default line of dashes added by `longjohn` to indicate an async jump, before reporting the error.
```js
const {ErrorReporting} = require('@google-cloud/error-reporting');

// Instantiates a client
const errors = new ErrorReporting();

const err = new Error('Some Error');
err.stack = (err.stack || '').split('\n')
                            .filter(line => !!line.replace(/-/g, '').trim())
                            .join('\n');
errors.report(err);
```


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-error-reporting/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Explicit setup | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/explicitSetup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/explicitSetup.js,samples/README.md) |
| Express integration | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/express.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/express.js,samples/README.md) |
| Implicit setup | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/implicitSetup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/implicitSetup.js,samples/README.md) |
| Manual reporting | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/manual.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/manual.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Stackdriver Error Reporting Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targetting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-error-reporting/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-error-reporting/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/error-reporting/latest/
[product-docs]: https://cloud.google.com/error-reporting
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouderrorreporting.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
