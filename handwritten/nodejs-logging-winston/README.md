# @google-cloud/logging-winston
> Stackdriver Logging transport for [Winston][winston]

This module provides an easy to use, higher-level layer for working with Stackdriver Logging, compatible with Winston. Simply attach this as a transport to your existing Winston loggers.

For lower-level access to the Stackdriver Logging API, see [@google-cloud/logging][@google-cloud/logging].

> *This module is experimental and should be used by early adopters. This module uses APIs that may be undocumented and subject to change without notice.*

``` sh
$ npm install --save @google-cloud/logging-winston
```
``` js
var winston = require('winston');
var transport = require('@google-cloud/logging-winston');

winston.add(transport, {
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json',
  level: 'warn' // log at 'warn' and above
});

winston.error('warp nacelles offline');
winston.verbose('sheilds at 99%');
```

## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var winston = require('winston');
var transport = require('@google-cloud/logging-winston');

winston.add(transport);

// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Stackdriver Logging API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var winston = require('winston');
var transport = require('@google-cloud/logging-winston');

winston.add(transport, {
  projectId: 'grape-spaceship-123',

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```

## Error Reporting

Any `Error` objects you log at severity `error` or higher can automatically be picked up by [Stackdriver Error Reporting][error-reporting] if your application is running on Google Cloud Platform. You may also want to see the [@google-cloud/error-reporting][@google-cloud/error-reporting] module which provides direct access to the Error Reporting API.

## Formatting Request Logs

To format your request logs you can provide a `httpRequest` property as part of the log metadata you provide to winston. We will treat this as the [`HttpRequest`][http-request-message] message and Stackdriver logging will show this as a request log. Example:

![Request Log Example](/packages/logging-winston/doc/images/request-log.png)

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

The `httpRequest` proprety must be a properly formatted [`HttpRequest`][http-request-message] message.

[winston]: https://github.com/winstonjs/winston
[@google-cloud/logging]: https://www.npmjs.com/package/@google-cloud/logging
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
[http-request-message]: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
[error-reporting]: https://cloud.google.com/error-reporting/
[@google-cloud/error-reporting]: https://www.npmjs.com/package/@google-cloud/error-reporting
