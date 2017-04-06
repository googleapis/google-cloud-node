# Node.js module for Stackdriver Error Reporting

[![NPM Version][npm-image]][npm-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

> **This is not an official Google product.** This module is experimental and may not be ready for use.
> This module uses APIs that may be undocumented and are subject to change without notice.

This module provides Stackdriver Error Reporting support for Node.js applications.
[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) is a feature of
Google Cloud Platform that allows in-depth monitoring and viewing of errors reported by
applications running in almost any environment. Here's an introductory video:

[![Learn about Error Reporting in Stackdriver](https://img.youtube.com/vi/cVpWVD75Hs8/0.jpg)](https://www.youtube.com/watch?v=cVpWVD75Hs8)

## Prerequisites

1. Your application needs to use Node.js version 4.x or greater.
1. You need a [Google Cloud project](https://console.cloud.google.com). Your application can run anywhere, but errors are reported to a particular project.
1. [Enable the Stackdriver Error Reporting API](https://console.cloud.google.com/apis/api/clouderrorreporting.googleapis.com/overview) for your project.
1. The module will only send errors when the `NODE_ENV` environment variable is
set to `production` or the `ignoreEnvironmentCheck` property given in the
runtime configuration object is set to `true`.

## Quick Start

1. **Install the module:**

  In your project, on the command line:

	```
	  # Install through npm while saving to the local 'package.json'
	  npm install --save @google-cloud/error-reporting
	```
1. **Instrument your application:**

```js
// Require the library and initialize the error handler
var errors = require('@google-cloud/error-reporting')({
  serviceContext: {service: 'my-service'} // not needed on Google Cloud
});

// Report an error to the Stackdriver Error Reporting API
errors.report(new Error('Something broke!'));
```

1. **View reported errors:**

  Open Stackdriver Error Reporting at https://console.cloud.google.com/errors to view the reported errors.

## Running on Google Cloud Platform

### Google App Engine Flexible environment

If you are using [Google App Engine flexible environment](https://cloud.google.com/appengine/docs/flexible/), you do not have to do any additional configuration.

### Google Compute Engine

Your VM instances need to be created with the `https://www.googleapis.com/auth/cloud-platform` scope if created via the [gcloud](https://cloud.google.com/sdk) CLI or the Google Cloud Platform API, or by enabling at least one of the Stackdriver APIs if created through the browser-based console.

If you already have VMs that were created without API access and do not wish to recreate it, you can follow the instructions for using a service account under [running elsewhere](#running-elsewhere).

### Google Container Engine

Container Engine nodes need to also be created with the `https://www.googleapis.com/auth/cloud-platform` scope, which is configurable during cluster creation. Alternatively, you can follow the instructions for using a service account under [running elsewhere](#running-elsewhere). It's recommended that you store the service account credentials as [Kubernetes Secret](http://kubernetes.io/v1.1/docs/user-guide/secrets.html).

## Running Elsewhere

If your application is running outside of Google Cloud Platform, such as locally, on-premise, or on another cloud provider, you can still use Stackdriver Errors.

1. You will need to specify your project ID when starting the errors agent.

        GCLOUD_PROJECT=particular-future-12345 node myapp.js

1. You need to provide service account credentials to your application.
  * The recommended way is via [Application Default Credentials][app-default-credentials].
    1. [Create a new JSON service account key][service-account].
    1. Copy the key somewhere your application can access it. Be sure not to expose the key publicly.
    1. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the full path to the key. The trace agent will automatically look for this environment variable.
  * If you are running your application on a development machine or test environment where you are using the [`gcloud` command line tools][gcloud-sdk], and are logged using `gcloud beta auth application-default login`, you already have sufficient credentials, and a service account key is not required.
  * Alternatively, you may set the `keyFilename` or `credentials` configuration field to the full path or contents to the key file, respectively. Setting either of these fields will override either setting `GOOGLE_APPLICATION_CREDENTIALS` or logging in using `gcloud`. For example:

```js
  // Require and start the agent with configuration options
  var errors = require('@google-cloud/error-reporting')({
    // The path to your key file:
    keyFilename: '/path/to/keyfile.json',

    // Or the contents of the key file:
    credentials: require('./path/to/keyfile.json')
  });
```

When running on Google Cloud Platform, we handle these for you automatically.

## Configuration

The following code snippet lists all available configuration options. All configuration options are optional.

```js
var errors = require('@google-cloud/error-reporting')({
  projectId: 'my-project-id',
  keyFilename: '/path/to/keyfile.json',
  credentials: require('./path/to/keyfile.json'),
  // if true library will attempt to report errors to the service regardless
  // of the value of NODE_ENV
  // defaults to false
  ignoreEnvironmentCheck: false,
  // determines if the library will attempt to report uncaught exceptions
  // defaults to true
  reportUncaughtExceptions: true,
  // determines the logging level internal to the library; levels range 0-5
  // defaults to 2 (warnings)
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
var errors = require('@google-cloud/error-reporting')();
// Use the error message builder to custom set all message fields
var errorEvt = errors.event()
  .setMessage('My error message')
  .setUser('root@nexus');
errors.report(errorEvt, () => console.log('done!'));
// Or just use a regular error
errors.report(new Error('My error message'), () => console.log('done!'));
// One can even just use a string
errors.report('My error message');
```

### Using Express

```js
var express = require('express');
var app = express();
// Will create an errors instance based off env variables
var errors = require('@google-cloud/error-reporting')();

app.get('/error', (req, res, next) => {
  res.send('Something broke!');
  next(new Error('Custom error message'));
});

app.get('/exception', () => {
  JSON.parse('{\"malformedJson\": true');
});

app.use(errors.express);

app.listen(3000);
```

### Using Hapi

```js
var hapi = require('hapi');
var errors = require('@google-cloud/error-reporting')();

var server = new hapi.Server();
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

server.register({ register: errors.hapi });
```

### Using Koa

```js
var errors = require('@google-cloud/error-reporting')();
var koa = require('koa');
var app = koa();

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
function respond(req, res, next) {
  next(new Error('this is a restify error'));
}

var restify = require('restify');
var errors = require('@google-cloud/error-reporting')();

var server = restify.createServer();

server.use(errors.restify(server));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080);
```

[gcloud-sdk]: https://cloud.google.com/sdk/gcloud/
[app-default-credentials]: https://developers.google.com/identity/protocols/application-default-credentials
[service-account]: https://console.developers.google.com/apis/credentials/serviceaccountkey
[npm-image]: https://badge.fury.io/js/%40google-cloud%2Ferror-reporting.svg
[npm-url]: https://npmjs.org/package/@google-cloud/error-reporting
[snyk-image]: https://snyk.io/test/npm/@google-cloud/error-reporting/badge.svg
[snyk-url]: https://snyk.io/test/npm/@google-cloud/error-reporting
