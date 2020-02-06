[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Logging for Winston: Node.js Client](https://github.com/googleapis/nodejs-logging-winston)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/logging-winston.svg)](https://www.npmjs.org/package/@google-cloud/logging-winston)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-logging-winston/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-logging-winston)




This module provides a higher-level layer for working with
[Stackdriver Logging](https://cloud.google.com/logging/docs), compatible with
[Winston](https://www.npmjs.com/package/winston). Simply attach this as a
transport to your existing Winston loggers.


* [Stackdriver Logging for Winston Node.js Client API Reference][client-docs]
* [Stackdriver Logging for Winston Documentation][product-docs]
* [github.com/googleapis/nodejs-logging-winston](https://github.com/googleapis/nodejs-logging-winston)

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
1.  [Enable the Stackdriver Logging for Winston API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/logging-winston
```


### Using the client library

```javascript
const winston = require('winston');

// Imports the Google Cloud client library for Winston
const {LoggingWinston} = require('@google-cloud/logging-winston');

const loggingWinston = new LoggingWinston();

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    // Add Stackdriver Logging
    loggingWinston,
  ],
});

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');

```
For a more detailed Stackdriver Logging setup guide, see https://cloud.google.com/logging/docs/setup/nodejs.

Creates a Winston logger that streams to Stackdriver Logging

Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"

### Using as an express middleware

***NOTE: this feature is experimental. The API may change in a backwards
incompatible way until this is deemed stable. Please provide us feedback so
that we can better refine this express integration.***

We provide a middleware that can be used in an express application. Apart from
being easy to use, this enables some more powerful features of Stackdriver
Logging: request bundling. Any application logs emitted on behalf of a specific
request will be shown nested inside the request log as you see in this
screenshot:

![Request Bundling Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-bundling.png)

This middleware adds a `winston`-style log function to the `request` object.
You can use this wherever you have access to the `request` object (`req` in the
sample below). All log entries that are made on behalf of a specific request are
shown bundled together in the Stackdriver Logging UI.

```javascript
const lw = require('@google-cloud/logging-winston');
const winston = require('winston');

// Import express module and create an http server.
const express = require('express');
const logger = winston.createLogger();

async function main() {
    // Create a middleware that will use the provided logger.
    // A Stackdriver Logging transport will be created automatically
    // and added onto the provided logger.
    const mw = await lw.express.makeMiddleware(logger);
    // Alternatively, you can construct a LoggingWinston transport
    // yourself and pass it int.
    // const transport = new LoggingWinston({...});
    // const mw = await lw.express.makeMiddleware(logger, transport);

    const app = express();

    // Install the logging middleware. This ensures that a Winston-style `log`
    // function is available on the `request` object. Attach this as one of the
    // earliest middleware to make sure that the log function is available in all
    // subsequent middleware and routes.
    app.use(mw);

    // Setup an http route and a route handler.
    app.get('/', (req, res) => {
        // `req.log` can be used as a winston style log method. All logs generated
        // using `req.log` use the current request context. That is, all logs
        // corresponding to a specific request will be bundled in the Stackdriver
        // UI.
        req.log.info('this is an info log message');
        res.send('hello world');
    });

    // `logger` can be used as a global logger, one not correlated to any specific
    // request.
    logger.info('bonjour');

    // Start listening on the http server.
    app.listen(8080, () => {
        logger.info('http server listening on port 8080');
    });
}

main();
```

### Error Reporting

Any `Error` objects you log at severity `error` or higher can automatically be picked up by [Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) if you have specified a `serviceContext.service` when instantiating a `LoggingWinston` instance:

```javascript
const loggingWinston = new LoggingWinston({
serviceContext: {
    service: 'my-service', // required to report logged errors
                        // to the Google Cloud Error Reporting
                        // console
    version: 'my-version'
}
});
```

It is an error to specify a `serviceContext` but not specify `serviceContext.service`.

Make sure to add logs to your [uncaught exception][uncaught] and [unhandled rejection][unhandled] handlers if you want to see those errors too.

You may also want to see the [@google-cloud/error-reporting](https://github.com/googleapis/nodejs-error-reporting) module which provides direct access to the Error Reporting API.

### Formatting Request Logs

**NOTE: The express middleware provided by this library handles this automatically for you. These instructions are for there case where you may want to handle this manually.**

To format your request logs you can provide a `httpRequest` property as part of the log metadata you provide to winston. We will treat this as the [`HttpRequest`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest) message and Stackdriver logging will show this as a request log. Example:

![Request Log Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-log.png)

```js
winston.info(`${req.url} endpoint hit`, {
httpRequest: {
    status: res.statusCode,
    requestUrl: req.url,
    requestMethod: req.method,
    remoteIp: req.connection.remoteAddress,
    // etc.
}
});
```

The `httpRequest` property must be a properly formatted [`HttpRequest`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest) message.

### Correlating Logs with Traces

**NOTE: The express middleware provided by this library handles this automatically for you. These instructions are for there case where you may want to handle this manually.**

If you use [@google-cloud/trace-agent][trace-agent] module, then this module will set the Stackdriver Logging [LogEntry][LogEntry] `trace` property based on the current trace context when available. That correlation allows you to [view log entries][trace-viewing-log-entries] inline with trace spans in the Stackdriver Trace Viewer. Example:

![Logs in Trace Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/winston-logs-in-trace.png)

If you wish to set the LogEntry `trace` property with a custom value, then set a winston metadata property for `'logging.googleapis.com/trace'`, which is exported by this module as `LOGGING_TRACE_KEY`. For example:

```js
const winston = require('winston');
const {LoggingWinston} = require('@google-cloud/logging-winston');

// ...

winston.info('Log entry with custom trace value', {
[LoggingWinston.LOGGING_TRACE_KEY]: 'custom-trace-value'
});
```

### Specifying default labels in the constructor

You can specify `labels` when initiating the logger constructor.

```js
// Creates a Winston Stackdriver Logging client
const loggingWinston = new LoggingWinston({
labels: {
    name: 'some-name',
    version: '0.1.0'
}
});

// Writes some log entries
logger.debug('test msg');

// you can also put some `labels` when calling the logger function
// the `labels` will be merge together
logger.debug('test msg', {
labels: {
    module: 'some-module'
}
});
```

The `labels` will be on the Log Viewer.

![Request log with labels](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-log-with-labels.png)

### Add a prefix to easily identify logs

You can specify a `prefix` in the constructor, and that `prefix` will be prepended to all logging messages. This can be helpful, for example, to quickly identify logs from different modules in a project.

```js
// Creates a Winston Stackdriver Logging client
const loggingWinston = new LoggingWinston({
prefix: 'some-module'
});

logger.debug('test msg');
```

![Request log with prefix](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-log-with-prefix.png)


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-logging-winston/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-logging-winston/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-winston&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Explicit Auth Setup | [source code](https://github.com/googleapis/nodejs-logging-winston/blob/master/samples/setup_explicit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-winston&page=editor&open_in_editor=samples/setup_explicit.js,samples/README.md) |



The [Stackdriver Logging for Winston Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-logging-winston/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-logging-winston/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/logging-winston/latest
[product-docs]: https://cloud.google.com/logging
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=logging.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
