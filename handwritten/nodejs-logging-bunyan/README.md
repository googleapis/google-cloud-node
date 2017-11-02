<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Logging for Bunyan](https://github.com/googleapis/nodejs-logging-bunyan)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-logging-bunyan.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-logging-bunyan)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-logging-bunyan?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-logging-bunyan)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-logging-bunyan/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-logging-bunyan)

This module provides an easy to use, higher-level layer for working with
[Stackdriver Logging](https://cloud.google.com/logging/docs), compatible with
[Bunyan](https://www.npmjs.com/package/bunyan). Simply attach this as a
transport to your existing Bunyan loggers.

* [Stackdriver Logging for Bunyan API Reference][client-docs]
* [github.com/googleapis/nodejs-logging-bunyan](https://github.com/googleapis/nodejs-logging-bunyan)
* [Logging Documentation][product-docs]

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

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Stackdriver Logging API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=logging.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

For a more detailed Stackdriver Logging setup guide, see https://cloud.google.com/logging/docs/setup/nodejs.

### Installing the client library

    npm install --save @google-cloud/logging-bunyan

### Using the client library

```javascript
const bunyan = require('bunyan');

// Imports the Google Cloud client library for Bunyan
const LoggingBunyan = require('@google-cloud/logging-bunyan');

// Creates a Bunyan Stackdriver Logging client
const loggingBunyan = new LoggingBunyan();

// Create a Bunyan logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/bunyan_log"
const logger = bunyan.createLogger({
  // The JSON payload of the log as it appears in Stackdriver Logging
  // will contain "name": "my-service"
  name: 'my-service',
  // log at 'info' and above
  level: 'info',
  streams: [
    // Log to the console
    {stream: process.stdout},
    // And log to Stackdriver Logging
    loggingBunyan.stream(),
  ],
});

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');
```

### Error Reporting

Any `Error` objects you log at severity `error` or higher can automatically be picked up by [Stackdriver Error Reporting][error-reporting] if your application is running on Google Cloud Platform. Make sure to add logs to your [uncaught exception][uncaught] and [unhandled rejection][unhandled] handlers if you want to see those errors too.

You may also want to see the [@google-cloud/error-reporting][@google-cloud/error-reporting] module which provides direct access to the Error Reporting API.

### Formatting Request Logs

To format your request logs you can provide a `httpRequest` property on the bunyan metadata you provide along with the log message. We will treat this as the [`HttpRequest`][http-request-message] message and Stackdriver logging will show this as a request log. Example:

![Request Log Example](doc/images/request-log.png)

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

The `httpRequest` proprety must be a properly formatted [`HttpRequest`][http-request-message] message.

### Correlating Logs with Traces

If you use [@google-cloud/trace-agent][trace-agent] module, then this module will set the Stackdriver Logging [LogEntry][LogEntry] `trace` property based on the current trace context when available. That correlation allows you to [view log entries][trace-viewing-log-entries] inline with trace spans in the Stackdriver Trace Viewer. Example:

![Logs in Trace Example](/packages/logging-bunyan/doc/images/bunyan-logs-in-trace.png)

If you wish to set the Stackdriver LogEntry `trace` property with a custom value, then write a Bunyan log entry property for `'logging.googleapis.com/trace'`, which is exported by this module as `LOGGING_TRACE_KEY`. For example:

```js
const bunyan = require('bunyan');
const LoggingBunyan = require('@google-cloud/logging-bunyan');
const loggingBunyan = LoggingBunyan();

...

logger.info({
  msg: 'Bunyan log entry with custom trace field',
  [LoggingBunyan.LOGGING_TRACE_KEY]: 'custom-trace-value'
});
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-logging-bunyan/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-bunyan&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Explict Auth Setup | [source code](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/samples/setup_explicit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging-bunyan&page=editor&open_in_editor=samples/setup_explicit.js,samples/README.md) |

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-logging-bunyan/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/logging-bunyan/latest/
[product-docs]: https://cloud.google.com/logging/docs
[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png

[http-request-message]: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
[error-reporting]: https://cloud.google.com/error-reporting/
[@google-cloud/error-reporting]: https://www.npmjs.com/package/@google-cloud/error-reporting
[uncaught]: https://nodejs.org/api/process.html#process_event_uncaughtexception
[unhandled]: https://nodejs.org/api/process.html#process_event_unhandledrejection
[trace-agent]: https://www.npmjs.com/package/@google-cloud/trace-agent
[LogEntry]: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
[trace-viewing-log-entries]: https://cloud.google.com/trace/docs/viewing-details#log_entries
