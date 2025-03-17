[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Maps Routing: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routing)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/routing.svg)](https://www.npmjs.org/package/@googlemaps/routing)




 client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routing/CHANGELOG.md).

* [Google Maps Routing Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-maps-routing](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routing)

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
1.  [Enable the Google Maps Routing API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/routing
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
 *  Required. Origin waypoint.
 */
// const origin = {}
/**
 *  Required. Destination waypoint.
 */
// const destination = {}
/**
 *  Optional. A set of waypoints along the route (excluding terminal points),
 *  for either stopping at or passing by. Up to 25 intermediate waypoints are
 *  supported.
 */
// const intermediates = 1234
/**
 *  Optional. Specifies the mode of transportation.
 */
// const travelMode = {}
/**
 *  Optional. Specifies how to compute the route. The server
 *  attempts to use the selected routing preference to compute the route. If
 *   the routing preference results in an error or an extra long latency, then
 *  an error is returned. In the future, we might implement a fallback
 *  mechanism to use a different option when the preferred option does not give
 *  a valid result. You can specify this option only when the `travel_mode` is
 *  `DRIVE` or `TWO_WHEELER`, otherwise the request fails.
 */
// const routingPreference = {}
/**
 *  Optional. Specifies your preference for the quality of the polyline.
 */
// const polylineQuality = {}
/**
 *  Optional. Specifies the preferred encoding for the polyline.
 */
// const polylineEncoding = {}
/**
 *  Optional. The departure time. If you don't set this value, then this value
 *  defaults to the time that you made the request. If you set this value to a
 *  time that has already occurred, then the request fails.
 */
// const departureTime = {}
/**
 *  Optional. Specifies whether to calculate alternate routes in addition to the route.
 */
// const computeAlternativeRoutes = true
/**
 *  Optional. A set of conditions to satisfy that affect the way routes are
 *  calculated.
 */
// const routeModifiers = {}
/**
 *  Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more
 *  information, see
 *  http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. See
 *  Language Support (https://developers.google.com/maps/faq#languagesupport)
 *  for the list of supported languages. When you don't provide this value, the
 *  display language is inferred from the location of the route request.
 */
// const languageCode = 'abc123'
/**
 *  Optional. Specifies the units of measure for the display fields. This
 *  includes the `instruction` field in `NavigationInstruction`. The units of
 *  measure used for the route, leg, step distance, and duration are not
 *  affected by this value. If you don't provide this value, then the display
 *  units are inferred from the location of the request.
 */
// const units = {}

// Imports the Routing library
const {RoutesClient} = require('@googlemaps/routing').v2;

// Instantiates a client
const routingClient = new RoutesClient();

async function callComputeRoutes() {
  // Construct request
  const request = {
    origin,
    destination,
  };

  // Run request
  const response = await routingClient.computeRoutes(request);
  console.log(response);
}

callComputeRoutes();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routing/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Routes.compute_route_matrix | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routing/samples/generated/v2/routes.compute_route_matrix.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routing/samples/generated/v2/routes.compute_route_matrix.js,packages/google-maps-routing/samples/README.md) |
| Routes.compute_routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routing/samples/generated/v2/routes.compute_routes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routing/samples/generated/v2/routes.compute_routes.js,packages/google-maps-routing/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routing/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routing/samples/quickstart.js,packages/google-maps-routing/samples/README.md) |



The [Google Maps Routing Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/routing@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=routes.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
