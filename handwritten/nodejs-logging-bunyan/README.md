[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

This module provides an easy to use, higher-level layer for working with [Stackdriver Logging](https://cloud.google.com/logging/docs),
compatible with [Bunyan](https://www.npmjs.com/package/bunyan). Simply attach this as a transport to your existing Bunyan loggers.


[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/logging-bunyan.svg)](https://www.npmjs.org/package/@google-cloud/logging-bunyan)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-logging-bunyan/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-logging-bunyan)




Stackdriver Logging stream for Bunyan


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/CHANGELOG.md).

* [Stackdriver Logging for Bunyan Node.js Client API Reference][client-docs]
* [Stackdriver Logging for Bunyan Documentation][product-docs]
* [github.com/googleapis/nodejs-logging-bunyan](https://github.com/googleapis/nodejs-logging-bunyan)

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
1.  [Enable the Stackdriver Logging for Bunyan API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/logging-bunyan
```


### Using the client library

```javascript
const bunyan = require('bunyan');

// Imports the Google Cloud client library for Bunyan
const {LoggingBunyan} = require('@google-cloud/logging-bunyan');

// Creates a Bunyan Stackdriver Logging client
const loggingBunyan = new LoggingBunyan();

// Create a Bunyan logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/bunyan_log"
const logger = bunyan.createLogger({
  // The JSON payload of the log as it appears in Stackdriver Logging
  // will contain "name": "my-service"
  name: 'my-service',
  streams: [
    // Log to the console at 'info' and above
    {stream: process.stdout, level: 'info'},
    // And log to Stackdriver Logging, logging at 'info' and above
    loggingBunyan.stream('info'),
  ],
});

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');

```
### Using as an express middleware

***NOTE: this feature is experimental. The API may change in a backwards
incompatible way until this is deemed stable. Please provide us feedback so
that we can better refine this express integration.***

We provide a middleware that can be used in an express application. Apart from
being easy to use, this enables some more powerful features of Stackdriver
Logging: request bundling. Any application logs emitted on behalf of a specific
request will be shown nested inside the request log as you see in this
screenshot:

![Request Bundling Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-bunyan/master/doc/images/request-bundling.png)

The middleware adds a `bunyan`-style log function to the `request` object. You
can use this wherever you have access to the `request` object (`req` in the
sample below). All log entries that are made on behalf of a specific request are
shown bundled together in the Stackdriver Logging UI.

```javascript
const lb = require('@google-cloud/logging-bunyan');

// Import express module and create an http server.
const express = require('express');

async function startServer() {
  const {logger, mw} = await lb.express.middleware();
  const app = express();

  // Install the logging middleware. This ensures that a Bunyan-style `log`
  // function is available on the `request` object. Attach this as one of the
  // earliest middleware to make sure that log function is available in all the
  // subsequent middleware and routes.
  app.use(mw);

  // Setup an http route and a route handler.
  app.get('/', (req, res) => {
    // `req.log` can be used as a bunyan style log method. All logs generated
    // using `req.log` use the current request context. That is, all logs
    // corresponding to a specific request will be bundled in the Stackdriver
    // UI.
    req.log.info('this is an info log message');
    res.send('hello world');
  });

  // `logger` can be used as a global logger, one not correlated to any specific
  // request.
  logger.info({port: 8080}, 'bonjour');

  // Start listening on the http server.
  app.listen(8080, () => {
    console.log('http server listening on port 8080');
  });
}

startServer();
```

### Error Reporting

Any `Error` objects you log at severity `error` or higher can automatically be picked up by [Stackdriver Error Reporting][error-reporting] if you have specified a `serviceContext.service` when instatiating a `LoggingBunyan` instance:

```javascript
const loggingBunyan = new LoggingBunyan({
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

You may also want to see the [@google-cloud/error-reporting][@google-cloud/error-reporting] module which provides direct access to the Error Reporting API.

### LogEntry Labels

If the bunyan log record contains a label property where all the values are strings, we automatically promote that
property to be the [`LogEntry.labels`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) value rather
than being one of the properties in the `payload` fields. This makes it easier to filter the logs in the UI using the labels.

```javascript
logger.info({labels: {someKey: 'some value'}}, 'test log message');
```

All the label values must be strings for this automatic promotion to work. Otherwise the labels are left in the payload.

### Formatting Request Logs

To format your request logs you can provide a `httpRequest` property on the bunyan metadata you provide along with the log message. We will treat this as the [`HttpRequest`][http-request-message] message and Stackdriver logging will show this as a request log. Example:

![Request Log Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-bunyan/master/doc/images/request-log.png)

```js
logger.info({
  httpRequest: {
    status: res.statusCode,
    requestUrl: req.url,
    requestMethod: req.method,
    remoteIp: req.connection.remoteAddress,
    // etc.
  }
}, req.path);
```

The `httpRequest` proprety must be a properly formatted [`HttpRequest`][http-request-message] message. (Note: the linked protobuf documentation shows `snake_case` property names, but in JavaScript one needs to provide property names in `camelCase`.)

### Correlating Logs with Traces

If you use [@google-cloud/trace-agent][trace-agent] module, then this module will set the Stackdriver Logging [LogEntry][LogEntry] `trace` property based on the current trace context when available. That correlation allows you to [view log entries][trace-viewing-log-entries] inline with trace spans in the Stackdriver Trace Viewer. Example:

![Logs in Trace Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-bunyan/master/doc/images/bunyan-logs-in-trace.png)

If you wish to set the Stackdriver LogEntry `trace` property with a custom value, then write a Bunyan log entry property for `'logging.googleapis.com/trace'`, which is exported by this module as `LOGGING_TRACE_KEY`. For example:

```js
const bunyan = require('bunyan');
// Node 6+
const {LoggingBunyan, LOGGING_TRACE_KEY} = require('@google-cloud/logging-bunyan');
const loggingBunyan = LoggingBunyan();

...

logger.info({
  [LOGGING_TRACE_KEY]: 'custom-trace-value'
}, 'Bunyan log entry with custom trace field');
```


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-logging-bunyan/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Express | [source code](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/samples/express.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-bunyan&page=editor&open_in_editor=samples/express.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-bunyan&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Explict Auth Setup | [source code](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/samples/setup_explicit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-bunyan&page=editor&open_in_editor=samples/setup_explicit.js,samples/README.md) |



The [Stackdriver Logging for Bunyan Node.js Client API Reference][client-docs] documentation
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


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/logging-bunyan/latest
[product-docs]: https://cloud.google.com/logging
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=logging.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
