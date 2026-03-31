[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Logging: Node.js Client](https://github.com/googleapis/nodejs-logging)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/logging.svg)](https://www.npmjs.org/package/@google-cloud/logging)




[Google Cloud Logging](https://cloud.google.com/logging/docs) allows you to store, search, analyze,
monitor, and alert on log data and events from Google Cloud Platform and Amazon Web Services.

If you require lightweight dependencies, an experimental, minified version of
this library is available at [@google-cloud/logging-min](https://www.npmjs.com/package/@google-cloud/logging-min).
Note: `logging-min` is experimental, and its feature surface is subject to change. 
To install `@google-cloud/logging-min` library run the following command:

```bash
npm install @google-cloud/logging-min
```

For an interactive tutorial on using the client library in a Node.js application, click Guide Me:

[![Guide Me](https://raw.githubusercontent.com/googleapis/nodejs-logging/main/_static/guide-me.svg)](https://console.cloud.google.com/?walkthrough_id=logging__logging-nodejs)


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-logging/blob/main/CHANGELOG.md).

* [Cloud Logging Node.js Client API Reference][client-docs]
* [Cloud Logging Documentation][product-docs]
* [github.com/googleapis/nodejs-logging](https://github.com/googleapis/nodejs-logging)

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
1.  [Enable the Cloud Logging API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/logging
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {Logging} = require('@google-cloud/logging');

async function quickstart(
  projectId = 'YOUR_PROJECT_ID', // Your Google Cloud Platform project ID
  logName = 'my-log' // The name of the log to write to
) {
  // Creates a client
  const logging = new Logging({projectId});

  // Selects the log to write to
  const log = logging.log(logName);

  // The data to write to the log
  const text = 'Hello, world!';

  // The metadata associated with the entry
  const metadata = {
    resource: {type: 'global'},
    // See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
    severity: 'INFO',
  };

  // Prepares a log entry
  const entry = log.entry(metadata, text);

  async function writeLog() {
    // Writes the log entry
    await log.write(entry);
    console.log(`Logged: ${text}`);
  }
  writeLog();
}

```
## Batching Writes

High throughput applications should avoid awaiting calls to the logger:

```js
await log.write(logEntry1);
await log.write(logEntry2);
```

Rather, applications should use a _fire and forget_ approach:

```js
log.write(logEntry1);
log.write(logEntry2);
```

The `@google-cloud/logging` library will handle batching and dispatching
these log lines to the API.

## Writing to Stdout

The `LogSync` class helps users easily write context-rich structured logs to
`stdout` or any custom transport. It extracts additional log properties like
trace context from HTTP headers and can be used as an on/off toggle between
writing to the API or to `stdout` during local development.

Logs written to `stdout` are then picked up, out-of-process, by a Logging
agent in the respective GCP environment. Logging agents can add more
properties to each entry before streaming it to the Logging API.

Read more about [Logging agents](https://cloud.google.com/logging/docs/agent/logging).

Serverless applications like Cloud Functions, Cloud Run, and App Engine
are highly recommended to use the `LogSync` class as async logs may be dropped
due to lack of CPU.

Read more about [structured logging](https://cloud.google.com/logging/docs/structured-logging).

```js
// Optional: Create and configure a client
const logging = new Logging();
await logging.setProjectId()
await logging.setDetectedResource()

// Create a LogSync transport, defaulting to `process.stdout`
const log = logging.logSync(logname);
const meta = { // optional field overrides here };
const entry = log.entry(meta, 'Your log message');
log.write(entry);

// Syntax sugar for logging at a specific severity
log.alert(entry);
log.warning(entry);
```

## Populating Http request metadata

Metadata about Http request is a part of the [structured log info](https://cloud.google.com/logging/docs/structured-logging)
that can be captured within each log entry. It can provide a context for the application logs and
is used to group multiple log entries under the load balancer request logs. See the [sample](https://github.com/googleapis/nodejs-logging/blob/master/samples/http-request.js)
how to populate the Http request metadata for log entries.

If you already have a "raw" Http `request` object you can assign it to `entry.metadata.httpRequest` directly. More information about
how the `request` is interpreted as raw can be found in the [code](https://github.com/googleapis/nodejs-logging/blob/15849160116a814ab71113138cb211c2e0c2d4b4/src/entry.ts#L224-L238).

## Automatic Trace/Span ID Extraction
Cloud Logging libraries use [trace fields within LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.trace) to capture trace contexts, which enables the [correlation of logs and traces](https://cloud.google.com/logging/docs/view/correlate-logs), and distributed tracing troubleshooting. 
These tracing fields, including [trace](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.trace), [spanId](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.span_id), and [traceSampled](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.trace_sampled), define the trace context for a `LogEntry`.

If not provided explicitly in a LogEntry, the Cloud Logging library automatically populates `trace`, `span_id`, and `trace_sampled` fields from detected OpenTelemetry span contexts, or from HTTP request headers.

### Extracting Trace/Span ID from OpenTelemetry Context
If you are using OpenTelemetry and there is an active span in the OpenTelemetry Context, the `trace`, `span_id`, and `trace_sampled` fields in the log entry are automatically populated from the active span. More information about OpenTelemetry can be found [here](https://opentelemetry.io/docs/languages/js/).

### Extracting Trace/Span ID from HTTP Headers
If tracing fields are not provided explicitly and no OpenTelemetry context is detected, the `trace` / `span_id` fields are extracted automatically from HTTP headers. 
Trace information can be automatically populated from either the [W3C Traceparent](https://www.w3.org/TR/trace-context) or [X-Cloud-Trace-Context](https://cloud.google.com/trace/docs/trace-context#legacy-http-header) headers.

## Error handling with logs written or deleted asynchronously

The `Log` class provide users the ability to write and delete logs asynchronously. However, there are cases when log entries
cannot be written or deleted and error is thrown - if error is not handled properly, it could crash the application.
One possible way to catch the error is to `await` the log write/delete calls and wrap it with `try/catch` like in example below:

```js
    // Write log entry and and catch any errors
    try {
      await log.write(entry);
    } catch (err) {
      console.log('Error is: ' + err);
    }
```

However, awaiting for every `log.write` or `log.delete` calls may introduce delays which could be avoided by 
simply adding a callback like in the example below. This way the log entry can be queued for processing and code
execution will continue without further delays. The callback will be called once the operation is complete:

```js
    // Asynchronously write the log entry and handle respone or any errors in provided callback
    log.write(entry, err => {
      if (err) {
        // The log entry was not written.
        console.log(err.message);
      } else {
        console.log('No error in write callback!');
      }
    });
```

Adding a callback to every `log.write` or `log.delete` calls could be a burden, especially if code
handling the error is always the same. For this purpose we introduced an ability to provide a default callback
for `Log` class which could be set through `LogOptions` passed to `Log` constructor as in example below - this
way you can define a global callback once for all `log.write` and `log.delete` calls and be able to handle errors:

```js
  const {Logging} = require('@google-cloud/logging');
  const logging = new Logging();
  
  // Create options with default callback to be called on every write/delete response or error
  const options = {
    defaultWriteDeleteCallback: function (err) {
      if (err) {
        console.log('Error is: ' + err);
      } else {
        console.log('No error, all is good!');
      }
    },
  };

  const log = logging.log('my-log', options);
``` 
See the full sample in `writeLogWithCallback` function [here](https://github.com/googleapis/nodejs-logging/blob/master/samples/logs.js).


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-logging/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Fluent | [source code](https://github.com/googleapis/nodejs-logging/blob/main/samples/fluent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging&page=editor&open_in_editor=samples/fluent.js,samples/README.md) |
| Log HTTP Request | [source code](https://github.com/googleapis/nodejs-logging/blob/main/samples/http-request.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging&page=editor&open_in_editor=samples/http-request.js,samples/README.md) |
| Logs | [source code](https://github.com/googleapis/nodejs-logging/blob/main/samples/logs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging&page=editor&open_in_editor=samples/logs.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-logging/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Sinks | [source code](https://github.com/googleapis/nodejs-logging/blob/main/samples/sinks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-logging&page=editor&open_in_editor=samples/sinks.js,samples/README.md) |



The [Cloud Logging Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/logging@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-logging/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-logging/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/logging/latest
[product-docs]: https://cloud.google.com/logging/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=logging.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started