# Stackdriver Debugger agent for Node.js

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

> *This module is experimental, and should be used by early adopters. This module uses APIs that may be undocumented and subject to change without notice.*

This module provides Stackdriver Debugger support for Node.js applications. [Stackdriver Debugger](https://cloud.google.com/tools/cloud-debugger/) is a feature of [Google Cloud Platform](https://cloud.google.com/) that lets you debug your applications in production without stopping or pausing your application. Here's an introductory video:

[![Cloud Debugger Intro](http://img.youtube.com/vi/tyHcK_kAOpw/0.jpg)](https://www.youtube.com/watch?v=tyHcK_kAOpw)

## Prerequisites
* Stackdriver Debugger is comptible with Node.js version 0.12 or greater. Node.js v5+ is recommended.

## Quick Start
```shell
# Install with `npm` or add to your `package.json`.
npm install --save @google-cloud/debug
```

```js
// Require and start in the startup of your application:
var debug = require('@google-cloud/debug')();
debug.startAgent();
// No auth necessary if your code is running on Google Cloud Platform.

// ... or, if you are running elsewhere, you can manually provide credentials:
var debug = require('@google-cloud/debug')({
  projectId: 'particular-future-12345',
  keyFilename: '/path/to/keyfile.json'
});
debug.startAgent();
```

This starts the automatic Debugger Agent that enables your app to be debuggable using the Stackdriver [Stackdriver Debug view][debug-tab] within
the [Google Cloud Console][dev-console]. You can start adding snapshots and log-points to your application.

## Running on Google Cloud Platform

Stackdriver debugger agent should work out of the box if your code is running on Google Cloud Platform, just make sure that the [Stackdriver Debugger API][debugger-api] is enabled on your project (this is the default).

## Running elsewhere

If your application is running outside of Google Cloud Platform, such as locally, on-premise, or on another cloud provider, you can still use Stackdriver Debugger.

1. You will need to specify your project name. Your project name is visible in the [Google Cloud Console][cloud-console-projects], it may be something like `particular-future-12345`. If your application is [running on Google Cloud Platform](running-on-google-cloud-platform), you don't need to specify the project name. You can specify this either in the module options, or through an environment variable:

    ```JS
      // In your app:
      var debug = require('@google-cloud/debug')({
        projectId: 'particular-future-12345',
        keyFilename: '/path/to/keyfile.json'
      });
      debug.startAgent();
    ```

    ```BASH
      # Or in Bash:
      export GCLOUD_PROJECT=<project name>
    ```

1. You need to provide service account credentials to your application.
  * The recommended way is via [Application Default Credentials][app-default-credentials].
    1. [Create a new JSON service account key][service-account].
    1. Copy the key somewhere your application can access it. Be sure not to expose the key publicly.
    1. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the full path to the key. The debug agent will automatically look for this environment variable.
  * If you are running your application on a machine where your are using the [`gcloud` command line tools][gcloud-sdk], and are logged using `gcloud auth login`, you already have sufficient credentials, and a service account key is not required.
  * Alternatively, you may set the keyFilename or credentials configuration field to the full path or contents to the key file, respectively. Setting either of these fields will override either setting GOOGLE_APPLICATION_CREDENTIALS or logging in using gcloud. For example:

    ```js
    // Require and start the agent with configuration options
    require('@google-cloud/debug').start({
      // The path to your key file:
      keyFilename: '/path/to/keyfile.json',

      // Or the contents of the key file:
      credentials: require('./path/to/keyfile.json')
    });
    ```

   See the [configuration object][configuration-object] for more details.

1. Generate a `source-context.json` file which contains information about the version of the source code used to build the application. This file should be located in the root directory of your application. When you open the Stackdriver Debugger in the Cloud Platform Console, it uses the information in this file to display the correct version of the source.

        gcloud beta debug source gen-repo-info-file

## Debugger Agent Settings

You can customize the behaviour of the automatic debugger agent. See [the agent configuration][config-js] for a list of possible configuration options. These options can be passed to the agent through the object argument to the startAgent method as shown below:

```JS
  debug.startAgent({
    serviceContext: {
        service: 'my-service',
        version: 'version-1'
    },
    capture: { maxFramesFrames: 20, maxProperties: 100 }
  });
 ```

## Using the Debugger

Once your application is running (deployed, or elsewhere), you should be able to use the [Debug UI][debug-tab] in your Cloud [developer console][dev-console]. You can find the Debug UI in the 'STACKDRIVER -> Debug' section in the navigation panel, or by simply searching for 'Debug' in the cloud console.

![Debug UI](doc/images/debug-ui.png?raw=true)

If your source is hosted in a [cloud source repository](https://cloud.google.com/tools/cloud-repositories/docs/), Stackdriver Debugger will display the source code of your application automatically. Alternatively, you can also point the debugger to local files, a GitHub or Bitbucket repository, through a Source Capture, or you can simply type in a filename and line number. More details are on source options are [available here](https://cloud.google.com/debugger/docs/source-options).

If you have the source available, you can set a snapshot by clicking in the gutter (line number area). Once you set a snapshot, the debug agent will insert a momentary breakpoint at the code location in the running instances of the application.

![Breakpoint Set](doc/images/breakpoint-set.png?raw=true)

As soon as that line of code is reached in any of the running instances of your application, the stack traces, local variables, and watch expressions are captured, and your application continues.

![Breakpoint Hit](doc/images/breakpoint-hit.png?raw=true)

## Limitations and Requirements
* The root directory of your application needs to contain a `package.json` file.
* You can set snapshot conditions and watch expressions to be evaluated in the context of your application. This leads to some issues you should be aware of
  * You may be able to view sensitive data of your own users by looking at the values of the variables.
  * The debug agent tries to ensure that all conditions and watchpoints you add are read-only and have no side effects. It catches, and disallows, all expressions that may have static side effects to prevent accidental state change. However, it presently does not catch expressions that have dynamic side-effects. For example, `o.f` looks like a property access, but dynamically, it may end up calling a getter function. We presently do NOT detect such dynamic-side effects.
* With Node.js 4.x and older, your application may experience a performance impact when there are snapshots active. There should be no impact to performance when no snapshots are active. Node.js v5.x does not have this issue.
* Node.js v0.10.x or older are not supported as they lack some necessary APIs to avoid a permanent (life of the application) performance hit.


[cloud-debugger]: https://cloud.google.com/tools/cloud-debugger/
[dev-console]: https://console.cloud.google.com/
[debug-tab]: https://console.cloud.google.com/debug
[gcloud-sdk]: https://cloud.google.com/sdk/gcloud/
[cloud-console-projects]: https://console.cloud.google.com/iam-admin/projects
[app-default-credentials]: https://cloud.google.com/identity/protocols/application-default-credentials
[service-account]: https://console.cloud.google.com/apis/credentials/serviceaccountkey
[npm-image]: https://img.shields.io/npm/v/@google-cloud/debug.svg
[npm-url]: https://npmjs.org/package/@google-cloud/debug
[travis-image]: https://travis-ci.org/GoogleCloudPlatform/cloud-debug-nodejs.svg?branch=master
[travis-url]: https://travis-ci.org/GoogleCloudPlatform/cloud-debug-nodejs
[coveralls-image]: https://img.shields.io/coveralls/GoogleCloudPlatform/cloud-debug-nodejs/master.svg
[coveralls-url]: https://coveralls.io/r/GoogleCloudPlatform/cloud-debug-nodejs?branch=master
[david-image]: https://david-dm.org/GoogleCloudPlatform/cloud-debug-nodejs.svg
[david-url]: https://david-dm.org/GoogleCloudPlatform/cloud-debug-nodejs
[david-dev-image]: https://david-dm.org/GoogleCloudPlatform/cloud-debug-nodejs/dev-status.svg
[david-dev-url]: https://david-dm.org/GoogleCloudPlatform/cloud-debug-nodejs?type=dev
[debugger-api]: https://console.cloud.google.com/apis/api/clouddebugger.googleapis.com/overview
[snyk-image]: https://snyk.io/test/github/GoogleCloudPlatform/cloud-debug-nodejs/badge.svg
[snyk-url]: https://snyk.io/test/github/GoogleCloudPlatform/cloud-debug-nodejs
[config-js]: https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/blob/master/src/agent/config.js
[configuration-object]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.45.0/google-cloud
