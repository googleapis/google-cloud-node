[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/routing.svg)](https://www.npmjs.org/package/@google-cloud/routing)




 client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/blob/main/CHANGELOG.md).

* [ Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node)

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
1.  [Enable billing for your project][billing].
1.  [Enable the  API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/routing
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. Array of origins, which determines the rows of the response matrix.
 *  Several size restrictions apply to the cardinality of origins and
 *  destinations:
 *  * The number of elements (origins × destinations) must be no greater than
 *  625 in any case.
 *  * The number of elements (origins × destinations) must be no greater than
 *  100 if routing_preference is set to `TRAFFIC_AWARE_OPTIMAL`.
 *  * The number of waypoints (origins + destinations) specified as `place_id`
 *  must be no greater than 50.
 */
// const origins = 1234
/**
 *  Required. Array of destinations, which determines the columns of the response matrix.
 */
// const destinations = 1234
/**
 *  Optional. Specifies the mode of transportation.
 */
// const travelMode = {}
/**
 *  Optional. Specifies how to compute the route. The server attempts to use the selected
 *  routing preference to compute the route. If the routing preference results
 *  in an error or an extra long latency, an error is returned. In the future,
 *  we might implement a fallback mechanism to use a different option when the
 *  preferred option does not give a valid result. You can specify this option
 *  only when the `travel_mode` is `DRIVE` or `TWO_WHEELER`, otherwise the
 *  request fails.
 */
// const routingPreference = {}
/**
 *  Optional. The departure time. If you don't set this value, this defaults to the time
 *  that you made the request. If you set this value to a time that has already
 *  occurred, the request fails.
 */
// const departureTime = {}

// Imports the Routing library
const {RoutesClient} = require('@google-cloud/routing').v2;

// Instantiates a client
const routingClient = new RoutesClient();

async function callComputeRouteMatrix() {
  // Construct request
  const request = {
    origins,
    destinations,
  };

  // Run request
  const stream = await routingClient.computeRouteMatrix(request);
  stream.on('data', (response) => { console.log(response) });
  stream.on('error', (err) => { throw(err) });
  stream.on('end', () => { /* API call completed */ });
}

callComputeRouteMatrix();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/packages/google-maps-routing/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/packages/google-maps-routing/samples/quickstart.js,samples/README.md) |



The [ Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google-cloud/routing@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/routing/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=google.maps.routing.v2
[auth]: https://cloud.google.com/docs/authentication/getting-started
