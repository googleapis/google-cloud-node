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
var stackdriverTransport = require('@google-cloud/logging-winston');

winston.add(stackdriverTransport, {
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json',
  level: 'warning', // log at 'warning' and above
  resource: {
    type: 'global'
  }
});

logger.error('warp nacelles offline');
logger.verbose('sheilds at 99%');
```

## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var winston = require('winston');
var stackdriverTransport = require('@google-cloud/logging-winston');

winston.add(stackdriverTransport);

// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Stackdriver Logging API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var winston = require('winston');
var stackdriverTransport = require('@google-cloud/logging-winston');

winston.add(stackdriverTransport, {
  projectId: 'grape-spaceship-123',

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```

[winston]: https://github.com/winstonjs/winston
[@google-cloud/logging]: https://www.npmjs.com/package/@google-cloud/logging
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
