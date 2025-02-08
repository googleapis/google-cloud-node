[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Last Mile Fleet Solution Delivery API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine-delivery)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/fleetengine-delivery.svg)](https://www.npmjs.org/package/@googlemaps/fleetengine-delivery)




Last Mile Fleet Solution Delivery API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine-delivery/CHANGELOG.md).

* [Last Mile Fleet Solution Delivery API Node.js Client API Reference][client-docs]
* [Last Mile Fleet Solution Delivery API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-maps-fleetengine-delivery](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine-delivery)

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
1.  [Enable the Last Mile Fleet Solution Delivery API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/fleetengine-delivery
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
 *  Optional. The standard Delivery API request header.
 */
// const header = {}
/**
 *  Required. Must be in the format `providers/{provider}`.
 *  The `provider` must be the Google Cloud Project ID.
 *  For example, `sample-cloud-project`.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of vehicles to return. The service may return
 *  fewer than this number. If you don't specify this number, then the server
 *  determines the number of results to return.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListDeliveryVehicles`
 *  call. You must provide this in order to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListDeliveryVehicles`
 *  must match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. A filter query to apply when listing delivery vehicles. See
 *  http://aip.dev/160 for examples of the filter syntax. If you don't specify
 *  a value, or if you specify an empty string for the filter, then all
 *  delivery vehicles are returned.
 *  Note that the only queries supported for `ListDeliveryVehicles` are
 *  on vehicle attributes (for example, `attributes.<key> = <value>` or
 *  `attributes.<key1> = <value1> AND attributes.<key2> = <value2>`). Also, all
 *  attributes are stored as strings, so the only supported comparisons against
 *  attributes are string comparisons. In order to compare against number or
 *  boolean values, the values must be explicitly quoted to be treated as
 *  strings (for example, `attributes.<key> = "10"` or
 *  `attributes.<key> = "true"`).
 *  The maximum number of restrictions allowed in a filter query is 50. A
 *  restriction is a part of the query of the form
 *  `attribute.<KEY> <COMPARATOR> <VALUE>`, for example `attributes.foo = bar`
 *  is 1 restriction.
 */
// const filter = 'abc123'
/**
 *  Optional. A filter that limits the vehicles returned to those whose last
 *  known location was in the rectangular area defined by the viewport.
 */
// const viewport = {}

// Imports the Delivery library
const {DeliveryServiceClient} =
  require('@googlemaps/fleetengine-delivery').v1;

// Instantiates a client
const deliveryClient = new DeliveryServiceClient();

async function callListDeliveryVehicles() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = deliveryClient.listDeliveryVehiclesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDeliveryVehicles();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine-delivery/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Delivery_service.batch_create_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.batch_create_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.batch_create_tasks.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.create_delivery_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.create_delivery_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.create_delivery_vehicle.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.create_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.create_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.create_task.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.get_delivery_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_delivery_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_delivery_vehicle.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_task.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.get_task_tracking_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_task_tracking_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.get_task_tracking_info.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.list_delivery_vehicles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.list_delivery_vehicles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.list_delivery_vehicles.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.list_tasks.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.search_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.search_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.search_tasks.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.update_delivery_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.update_delivery_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.update_delivery_vehicle.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Delivery_service.update_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.update_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/generated/v1/delivery_service.update_task.js,packages/google-maps-fleetengine-delivery/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine-delivery/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine-delivery/samples/quickstart.js,packages/google-maps-fleetengine-delivery/samples/README.md) |



The [Last Mile Fleet Solution Delivery API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/fleetengine-delivery@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/fleetengine-delivery/latest
[product-docs]: https://developers.google.com/maps/documentation/transportation-logistics/mobility
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=fleetengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
