# Google Cloud Profiler

[![NPM Version][npm-image]][npm-url]
[![Build Status][circle-image]][circle-url]
[![Dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

> **Beta**. *This is a Beta release of the Stackdriver Profiler agent for
Node.js. These libraries might be changed in backward-incompatible ways and are 
not subject to any SLA or deprecation policy.*


## Prerequisites

1. Your application will need to be using Node.js 8.9.4 or greater, or Node.js
10.4.1 or greater. The profiler will not be enabled when using an earlier 
version of Node 8 or 10 because the profiler is not stable with those versions
of Node.js.
    * Versions of Node.js before Node.js 8 prior to 8.9.4 are impacted by
    [this](https://bugs.chromium.org/p/v8/issues/detail?id=6623) issue, which
    causes a memory leak when time profiling is enabled.
    * Versions of Node.js 10 prior to 10.4.1 are impacted by
    [this](https://bugs.chromium.org/p/chromium/issues/detail?id=847863) issue,
    which can cause garbage collection to take several minutes when heap
    profiling is enabled.

1. `@google-cloud/profiler` depends on the
[`pprof`](https://www.npmjs.com/package/pprof) module, a module with a native
component that is used to collect profiles with v8's CPU and Heap profilers.
You may need to install additional dependencies to build the `pprof` module.
    * For Linux: `pprof` has prebuilt binaries available for Linux and Alpine
    Linux for Node 6, 8, 10, and 11. No additional dependencies are required.
    * For other environments: when using `@google-cloud/profiler` on environments
    that `pprof` does not have prebuilt binaries for, the module
    [`node-gyp`](https://www.npmjs.com/package/node-gyp) will be used to
    build binaries. See `node-gyp`'s
    [documentation](https://github.com/nodejs/node-gyp#installation)
    for information on dependencies required to build binaries with `node-gyp`.

1. You will need a project in the [Google Developers Console][cloud-console].
Your application can run anywhere, but the profiler data is associated with a
particular project.

1. You will need to enable the Stackdriver Profiler API for your project.

## Basic Set-up

1. Install `@google-cloud/profiler` with [`npm`](https://www.npmjs.com) or add
to your [`package.json`](https://docs.npmjs.com/files/package.json#dependencies).

    ```sh
    # Install through npm while saving to the local 'package.json'
    npm install --save @google-cloud/profiler
    ```

2. Include and start the profiler at the beginning of your application:

    ```js
    var profiler = require('@google-cloud/profiler').start();
    ```

    Some environments require a configuration to be passed to the `start()`
    function. For more details on this, see instructions for running
    [outside of Google Cloud Platform](#running-elsewhere), on
    [App Engine flexible environment](#running-on-app-engine-flexible-environment),
    on [Google Compute Engine](#running-on-google-compute-engine),
    and on [Google Container Engine](#running-on-google-container-engine).

3. If you are running your application locally, or on a machine where you are
using the [Google Cloud SDK][gcloud-sdk], make sure to log in with the
application default credentials:

    ```sh
    gcloud beta auth application-default login
    ```

    Alternatively, you can set `GOOGLE_APPLICATION_CREDENTIALS`. For more
    details on this, see [Running elsewhere](#running-elsewhere)

## Configuration

See [the default configuration](https://github.com/googleapis/cloud-profiler-nodejs/blob/master/ts/src/config.ts) for a list of possible
configuration options. These options can be passed to the agent through the
object argument to the start command shown below:

```js
require('@google-cloud/profiler').start({disableTime: true});
```

Alternatively, you can provide the configuration through a config file. This
can be useful if you want to load our module using `--require` on the command
line (which requires and starts the agent) instead of editing your main script.
The `GCLOUD_PROFILER_CONFIG` environment variable should point to your
configuration file.

```bash
export GCLOUD_PROFILER_CONFIG=./path/to/your/profiler/configuration.js
```

### Changing log level

The profiler writes log statements to the console log for diagnostic purposes.
By default, the log level is set to warn. You can adjust this by setting
`logLevel` in the config. Setting `logLevel` to 0 will disable logging,
1 sets log level to error, 2 sets it to warn (default), 3 sets it to info,
and 4 sets it to debug.

So, for example, to start the profiler with the log level at debug, you would
do this:

```js
require('@google-cloud/profiler').start({logLevel: 4});
```

### Disabling heap or time profile collection

By default, the profiler collects both heap profiles, which show memory
allocations, and time profiles, which capture how much wall-clock time is spent
in different locations of the code. Using the configuration, it is possible to
disable the collection of either type of profile.

To disable time profile collection, set `disableTime` to true:

```js
require('@google-cloud/profiler').start({disableTime: true});
```

To disable heap profile collection, set `disableHeap` to true:

```js
require('@google-cloud/profiler').start({disableHeap: true});
```

## Running on Google Cloud Platform

There are three different services that can host Node.js applications within
Google Cloud Platform: Google App Engine flexible environment, Google Compute
Engine, and Google Container Engine. After installing `@google-cloud/profiler`
in your project and ensuring that the environment you are using uses Node.js
version 6.12.3 or greater, or Node.js 8.9.4 or greater, follow the
service-specific instructions to enable the profiler.

### Running on App Engine flexible environment

To enable the profiling agent for a Node.js program running in the App Engine
flexible environment, import the agent at the top of your application’s main
script or entry point by including the following code snippet:

```js
var profiler = require('@google-cloud/profiler').start();
```

You can specify which version of Node.js you're using by adding a snippet like
the following to your `package.json`:

```json
  "engines": {
    "node": ">=8.9.4"
  }
```
The above snippet will ensure that you're using 8.9.4 or greater.

Deploy your application to App Engine Flexible environment as usual.

### Running on Google Compute Engine

To enable the profiling agent for a Node.js program running in the Google
Compute Engine environment, import the agent at the top of your application’s
main script or entry point by including the following code snippet:

```js
require('@google-cloud/profiler').start({
  serviceContext: {
    service: 'your-service',
    version: '1.0.0'
  }
});
```

### Running on Google Container Engine

To enable the profiling agent for a Node.js program running in the Google
Container Engine environment, import the agent at the top of your application’s
main script or entry point by including the following code snippet:

```js
require('@google-cloud/profiler').start({
  serviceContext: {
    service: 'your-service',
    version: '1.0.0'
  }
});
```

## Running elsewhere

You can still use `@google-cloud/profiler` if your application is running
outside of Google Cloud Platform, for example, running locally, on-premise, or
on another cloud provider.

1. You will need to specify your project id and the service you want the
collected profiles to be associated with, and (optionally) the version of
the service when starting the profiler:

  ```js
    require('@google-cloud/profiler').start({
      projectId: 'project-id',
      serviceContext: {
        service: 'your-service',
        version: '1.0.0'
      }
    });
  ```
2. You will need to provide credential for your application.

   * If you are running your application on a development machine or test
   environment where you are using the [`gcloud` command line tools][gcloud-sdk],
   and are logged using `gcloud beta auth application-default login`, you
   already have sufficient credentials, and a service account key is not
   required.

   * You can provide credentials via
   [Application Default Credentials][app-default-credentials]. This is the
   recommended method.
         1. [Create a new JSON service account key][service-account].
         2. Copy the key somewhere your application can access it. Be sure not
         to expose the key publicly.
         3.  Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to
         the full path to the key. The profiler will automatically look for
         this environment variable.

   *  You may set the `keyFilename` or `credentials` configuration field to the
   full path or contents to the key file, respectively. Setting either of these
   fields will override either setting `GOOGLE_APPLICATION_CREDENTIALS` or
   logging in using `gcloud`.

       This is how you would set `keyFilename`:
       ```js
       require('@google-cloud/profiler').start({
         projectId: 'project-id',
         serviceContext: {
           service: 'your-service',
           version: '1.0.0'
         },
         keyFilename: '/path/to/keyfile'
       });
       ```

       This is how you would set  `credentials`:
       ```js
       require('@google-cloud/profiler').start({
         projectId: 'project-id',
         serviceContext: {
           service: 'your-service',
           version: '1.0.0'
         },
         credentials: {
           client_email: 'email',
           private_key: 'private_key'
         }
       });
       ```
[app-default-credentials]: https://developers.google.com/identity/protocols/application-default-credentials
[circle-image]: https://circleci.com/gh/googleapis/cloud-profiler-nodejs.svg?style=svg
[circle-url]: https://circleci.com/gh/googleapis/cloud-profiler-nodejs
[cloud-console]: https://console.cloud.google.com
[coveralls-image]: https://coveralls.io/repos/googleapis/cloud-profiler-nodejs/badge.svg?branch=master&service=github
[david-image]: https://david-dm.org/googleapis/cloud-profiler-nodejs.svg
[david-url]: https://david-dm.org/googleapis/cloud-profiler-nodejs
[david-dev-image]: https://david-dm.org/googleapis/cloud-profiler-nodejs/dev-status.svg
[david-dev-url]: https://david-dm.org/googleapis/cloud-profiler-nodejs#info=devDependencies
[gcloud-sdk]: https://cloud.google.com/sdk/gcloud/
[npm-image]: https://badge.fury.io/js/%40google-cloud%2Fprofiler.svg
[npm-url]: https://npmjs.org/package/@google-cloud/profiler
[service-account]: https://console.developers.google.com/apis/credentials/serviceaccountkey
[snyk-image]: https://snyk.io/test/github/googleapis/cloud-profiler-nodejs/badge.svg
[snyk-url]: https://snyk.io/test/github/googleapis/cloud-profiler-nodejs
