# @google-cloud/logging-winston
> Stackdriver Logging transport for Winston

This module provides a easy to use, higher level layer for working with Stackdriver Logging that works with Winston. Simply attach this as a transport to your existing Winston loggers.

If you want have a lower level access to the Stackdriver Logging API, check out [@google-cloud/logging](https://www.npmjs.com/package/@google-cloud/logging).

> *This module is experimental, and should be used by early adopters. This module uses APIs that may be undocumented and subject to change without notice.* 

``` sh
$ npm install --save @google-cloud/logging-winston
```
``` js
var winston = require('winston');
var StackdriverTransport = require('@google-cloud/logging-winston');
var logger = new winston.Logger({
  transports: [ new winston.transports.StackdriverLogging() ]
});
logger.error('warp nacelles offline');
logger.verbose('sheilds at 99%');
```

### Optional Configuration

If your app is running on Google Cloud Platform, we handle all configuation & authentication for you.  We also auto-detect the appropriate [resource descriptor](todo://add/link) to report the log entries against.

If you are running your application in a different environment, for example, locally, on-premise, or on another cloud provider, you may need to provide some configuration.

``` js
var logger = new winston.Logger({
  levels: winston.config.syslog.levels,
  transports: new winston.transports.StackdriverLogging({
    projectId: 'grape-spaceship-123',
    keyFilename: '/path/to/key.json',
    levels: winstong.config.syslog.levels,
    level: 'warning', // log at 'warning' and above
    resource: {
      type: 'global'
    }
  });
});
logger.emerg('antimatter containment field collapse in 10 seconds');
```

