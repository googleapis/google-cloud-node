[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Logging for Winston: Node.js Client](https://github.com/googleapis/nodejs-logging-winston)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/logging-winston.svg)](https://www.npmjs.org/package/@google-cloud/logging-winston)




This module provides a higher-level layer for working with
[Cloud Logging](https://cloud.google.com/logging/docs), compatible with
[Winston](https://www.npmjs.com/package/winston). Simply attach this as a
transport to your existing Winston loggers.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-logging-winston/blob/main/CHANGELOG.md).

* [Cloud Logging for Winston Node.js Client API Reference][client-docs]
* [Cloud Logging for Winston Documentation][product-docs]
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
1.  [Enable the Cloud Logging for Winston API][enable_api].
1.  [Set up authentication][auth] so you can access the
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

// Create a Winston logger that streams to Cloud Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    // Add Cloud Logging
    loggingWinston,
  ],
});

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');

```
For a more detailed Cloud Logging setup guide, see https://cloud.google.com/logging/docs/setup/nodejs.

Creates a Winston logger that streams to Cloud Logging

Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"

### Using as an express middleware

***NOTE: this feature is experimental. The API may change in a backwards
incompatible way until this is deemed stable. Please provide us feedback so
that we can better refine this express integration.***

We provide a middleware that can be used in an express application. Apart from
being easy to use, this enables some more powerful features of Cloud
Logging: request bundling. Any application logs emitted on behalf of a specific
request will be shown nested inside the request log as you see in this
screenshot:

![Request Bundling Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-bundling.png)

This middleware adds a `winston`-style log function to the `request` object.
You can use this wherever you have access to the `request` object (`req` in the
sample below). All log entries that are made on behalf of a specific request are
shown bundled together in the Cloud Logging UI.

```javascript
const lw = require('@google-cloud/logging-winston');
const winston = require('winston');

// Import express module and create an http server.
const express = require('express');
const logger = winston.createLogger();

async function main() {
    // Create a middleware that will use the provided logger.
    // A Cloud Logging transport will be created automatically
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
        // corresponding to a specific request will be bundled in the Cloud Logging
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

Any `Error` objects you log at severity `error` or higher can automatically be picked up by [Error Reporting](https://cloud.google.com/error-reporting/) if you have specified a `serviceContext.service` when instantiating a `LoggingWinston` instance:

```javascript
const loggingWinston = new LoggingWinston({
serviceContext: {
    service: 'my-service', // required to report logged errors
                        // to the Error Reporting
                        // console
    version: 'my-version'
}
});
```

It is an error to specify a `serviceContext` but not specify `serviceContext.service`.

Make sure to add logs to your [uncaught exception](https://nodejs.org/api/process.html#process_event_uncaughtexception) and [unhandled rejection](https://nodejs.org/api/process.html#process_event_unhandledrejection) handlers if you want to see those errors too.

You may also want to see the [@google-cloud/error-reporting](https://github.com/googleapis/nodejs-error-reporting) module which provides direct access to the Error Reporting API.

### Error handling with a default callback

The `LoggingWinston` class creates an instance of `LoggingCommon` which by default uses the `Log` class from `@google-cloud/logging` package to write log entries. 
The `Log` class writes logs asynchronously and there are cases when log entries cannot be written and an error is 
thrown - if error is not handled properly, it could crash the application. One possible way to handle the error is to provide a default callback
to the `LoggingWinston` constructor which will be used to initialize `Log` object with that callback like in example below:

```js
// Imports the Google Cloud client library for Winston
const {LoggingWinston} = require('@google-cloud/logging-winston');

// Creates a client
const loggingWinston = new LoggingWinston({
projectId: 'your-project-id',
keyFilename: '/path/to/key.json',
defaultCallback: err => {
    if (err) {
    console.log('Error occured: ' + err);
    }
},
});
```

### Formatting Request Logs

**NOTE: The express middleware provided by this library handles this automatically for you. These instructions are for there case where you may want to handle this manually.**

To format your request logs you can provide a `httpRequest` property as part of the log metadata you provide to winston. We will treat this as the [`HttpRequest`](https://cloud.google.com/logging/docs/reference/v2/rpc/google.logging.type#google.logging.type.HttpRequest) message and Cloud Logging will show this as a request log. Example:

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

The `httpRequest` property must be a properly formatted [`HttpRequest`](https://cloud.google.com/logging/docs/reference/v2/rpc/google.logging.type#google.logging.type.HttpRequest) message.

**NOTE: Due to a bug in [logform](https://github.com/winstonjs/logform/issues/125) some built in Winston formatters might not work properly with `LoggingWinston`. For more information about the problem and possible workaround please see [540](https://github.com/googleapis/nodejs-logging-winston/issues/540). In addition, [Cloud Logging for Bunyan](https://github.com/googleapis/nodejs-logging-bunyan) could be considered as alternative.

### Correlating Logs with Traces

**NOTE: The express middleware provided by this library handles this automatically for you. These instructions are for there case where you may want to handle this manually.**

If you use [@google-cloud/trace-agent](https://www.npmjs.com/package/@google-cloud/trace-agent) module, then this module will set the Cloud Logging [LogEntry](https://cloud.google.com/logging/docs/reference/v2/rpc/google.logging.v2#logentry) `trace` property based on the current trace context when available. That correlation allows you to [view log entries](https://cloud.google.com/trace/docs/viewing-details#log_entries) inline with trace spans in the Cloud Trace Viewer. Example:

![Logs in Trace Example](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/winston-logs-in-trace.png)

If you wish to set the LogEntry `trace`, `spanId`, and `traceSampled` properties with custom values, then set Winston metadata properties for `'logging.googleapis.com/trace'`, `'logging.googleapis.com/spanId'`, `'logging.googleapis.com/trace_sampled'`, which is exported by this module as `LOGGING_TRACE_KEY`, `LOGGING_SPAN_KEY`, and `LOGGING_SAMPLED_KEY` respectively. For example:

```js
const winston = require('winston');
const {LoggingWinston} = require('@google-cloud/logging-winston');

// ...

winston.info('Log entry with custom trace value', {
[LoggingWinston.LOGGING_TRACE_KEY]: 'custom-trace-value'
[LoggingWinston.LOGGING_SPAN_KEY]: 'custom-span-value'
[LoggingWinston.LOGGING_SAMPLED_KEY]: true
});
```

### Specifying default labels in the constructor

You can specify `labels` when initiating the logger constructor.

```js
// Creates a Winston Cloud Logging client
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
// Creates a Winston Cloud Logging client
const loggingWinston = new LoggingWinston({
prefix: 'some-module'
});

logger.debug('test msg');
```

![Request log with prefix](https://raw.githubusercontent.com/googleapis/nodejs-logging-winston/master/doc/images/request-log-with-prefix.png)

### Alternative way to ingest logs in Google Cloud managed environments
If you use this library with the Cloud Logging Agent, you can configure the handler to output logs to `process.stdout` using
the [structured logging Json format](https://cloud.google.com/logging/docs/structured-logging#special-payload-fields).
To do this, add `redirectToStdout: true` parameter to the `LoggingWinston` constructor as in sample below.
You can use this parameter when running applications in Google Cloud managed environments such as AppEngine, Cloud Run,
Cloud Function or GKE. The logger agent installed on these environments can capture `process.stdout` and ingest it into Cloud Logging.
The agent can parse structured logs printed to `process.stdout` and capture additional log metadata beside the log payload.
It is recommended to set `redirectToStdout: true` in serverless environments like Cloud Functions since it could 
decrease logging record loss upon execution termination - since all logs are written to `process.stdout` those
would be picked up by the Cloud Logging Agent running in Google Cloud managed environment.
Note that there is also a `useMessageField` option which controls if "message" field is used to store 
structured, non-text data inside `jsonPayload` field when `redirectToStdout` is set. By default `useMessageField` is always `true`.
Set the `skipParentEntryForCloudRun` option to skip creating an entry for the request itself as Cloud Run already automatically creates
such log entries. This might become the default behaviour in a next major version.

```js
// Imports the Google Cloud client library for Winston
const {LoggingWinston} = require('@google-cloud/logging-winston');

// Creates a client that writes logs to stdout
const loggingWinston = new LoggingWinston({
  projectId: 'your-project-id',
  keyFilename: '/path/to/key.json',
  redirectToStdout: true,
});
```

### Waiting for logs to be written
Starting from v3.0, the [Winston](https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md#winstonlogger) library no longer supports
callbacks in their logging API, which reduces the ability to wait for logs to be written before exit/shutdown. The issue tracking the ask to reestablish callback support in Winston is tracked by [2095](https://github.com/winstonjs/winston/issues/2095).
One possible solution is to adopt an [Alternative way to ingest logs in Google Cloud managed environments](https://github.com/googleapis/nodejs-logging-winston#alternative-way-to-ingest-logs-in-google-cloud-managed-environments).
Another possible way is to use a `setTimeout` with a desired interval in order to let the library to send as many logs as possible.


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-logging-winston/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-logging-winston/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-winston&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Explicit Auth Setup | [source code](https://github.com/googleapis/nodejs-logging-winston/blob/main/samples/setup_explicit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-winston&page=editor&open_in_editor=samples/setup_explicit.js,samples/README.md) |



The [Cloud Logging for Winston Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/logging-winston@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-logging-winston/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-logging-winston/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/logging-winston/latest
[product-docs]: https://cloud.google.com/logging
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=logging.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
