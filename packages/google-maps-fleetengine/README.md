[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Local Rides and Deliveries API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/fleetengine.svg)](https://www.npmjs.org/package/@googlemaps/fleetengine)




Local Rides and Deliveries API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine/CHANGELOG.md).

* [Local Rides and Deliveries API Node.js Client API Reference][client-docs]
* [Local Rides and Deliveries API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-maps-fleetengine](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine)

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
1.  [Enable the Local Rides and Deliveries API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/fleetengine
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
 *  The standard Fleet Engine request header.
 */
// const header = {}
/**
 *  Required. Must be in the format `providers/{provider}`.
 *  The provider must be the Project ID (for example, `sample-cloud-project`)
 *  of the Google Cloud Project of which the service account making
 *  this call is a member.
 */
// const parent = 'abc123'
/**
 *  The maximum number of vehicles to return.
 *  Default value: 100.
 */
// const pageSize = 1234
/**
 *  The value of the `next_page_token` provided by a previous call to
 *  `ListVehicles` so that you can paginate through groups of vehicles. The
 *  value is undefined if the filter criteria of the request is not the same as
 *  the filter criteria for the previous call to `ListVehicles`.
 */
// const pageToken = 'abc123'
/**
 *  Specifies the required minimum capacity of the vehicle. All vehicles
 *  returned will have a `maximum_capacity` greater than or equal to this
 *  value. If set, must be greater or equal to 0.
 */
// const minimumCapacity = {}
/**
 *  Restricts the response to vehicles that support at least one of the
 *  specified trip types.
 */
// const tripTypes = [1,2,3,4]
/**
 *  Restricts the response to vehicles that have sent location updates to Fleet
 *  Engine within the specified duration. Stationary vehicles still
 *  transmitting their locations are not considered stale. If present, must be
 *  a valid positive duration.
 */
// const maximumStaleness = {}
/**
 *  Required. Restricts the response to vehicles with one of the specified type
 *  categories. `UNKNOWN` is not allowed.
 */
// const vehicleTypeCategories = [1,2,3,4]
/**
 *  Callers can form complex logical operations using any combination of the
 *  `required_attributes`, `required_one_of_attributes`, and
 *  `required_one_of_attribute_sets` fields.
 *  `required_attributes` is a list; `required_one_of_attributes` uses a
 *  message which allows a list of lists. In combination, the two fields allow
 *  the composition of this expression:
 *  ```
 *  (required_attributes0  AND required_attributes1  AND ...)
 *  AND
 *  (required_one_of_attributes0 0  OR required_one_of_attributes0 1  OR
 *  ...)
 *  AND
 *  (required_one_of_attributes1 0  OR required_one_of_attributes1 1  OR
 *  ...)
 *  ```
 *  Restricts the response to vehicles with the specified attributes. This
 *  field is a conjunction/AND operation. A max of 50 required_attributes is
 *  allowed. This matches the maximum number of attributes allowed on a
 *  vehicle. Each repeated string should be of the format "key:value".
 */
// const requiredAttributes = ['abc','def']
/**
 *  Restricts the response to vehicles with at least one of the specified
 *  attributes in each `VehicleAttributeList`. Within each list, a vehicle must
 *  match at least one of the attributes. This field is an inclusive
 *  disjunction/OR operation in each `VehicleAttributeList` and a
 *  conjunction/AND operation across the collection of `VehicleAttributeList`.
 *  Each repeated string should be of the format
 *  "key1:value1|key2:value2|key3:value3".
 */
// const requiredOneOfAttributes = ['abc','def']
/**
 *  `required_one_of_attribute_sets` provides additional functionality.
 *  Similar to `required_one_of_attributes`, `required_one_of_attribute_sets`
 *  uses a message which allows a list of lists, allowing expressions such as
 *  this one:
 *  ```
 *  (required_attributes0  AND required_attributes1  AND ...)
 *  AND
 *  (
 *    (required_one_of_attribute_sets0 0  AND
 *    required_one_of_attribute_sets0 1  AND
 *    ...)
 *    OR
 *    (required_one_of_attribute_sets1 0  AND
 *    required_one_of_attribute_sets1 1  AND
 *    ...)
 *  )
 *  ```
 *  Restricts the response to vehicles that match all the attributes in a
 *  `VehicleAttributeList`. Within each list, a vehicle must match all of the
 *  attributes. This field is a conjunction/AND operation in each
 *  `VehicleAttributeList` and inclusive disjunction/OR operation across the
 *  collection of `VehicleAttributeList`. Each repeated string should be of the
 *  format "key1:value1|key2:value2|key3:value3".
 */
// const requiredOneOfAttributeSets = ['abc','def']
/**
 *  Restricts the response to vehicles that have this vehicle state.
 */
// const vehicleState = {}
/**
 *  Only return the vehicles with current trip(s).
 */
// const onTripOnly = true
/**
 *  Optional. A filter query to apply when listing vehicles. See
 *  http://aip.dev/160 for examples of the filter syntax.
 *  This field is designed to replace the `required_attributes`,
 *  `required_one_of_attributes`, and `required_one_of_attributes_sets` fields.
 *  If a non-empty value is specified here, the following fields must be empty:
 *  `required_attributes`, `required_one_of_attributes`, and
 *  `required_one_of_attributes_sets`.
 *  This filter functions as an AND clause with other constraints,
 *  such as `vehicle_state` or `on_trip_only`.
 *  Note that the only queries supported are on vehicle attributes (for
 *  example, `attributes.<key> = <value>` or `attributes.<key1> = <value1> AND
 *  attributes.<key2> = <value2>`). The maximum number of restrictions allowed
 *  in a filter query is 50.
 *  Also, all attributes are stored as strings, so the only supported
 *  comparisons against attributes are string comparisons. In order to compare
 *  against number or boolean values, the values must be explicitly quoted to
 *  be treated as strings (for example, `attributes.<key> = "10"` or
 *  `attributes.<key> = "true"`).
 */
// const filter = 'abc123'
/**
 *  Optional. A filter that limits the vehicles returned to those whose last
 *  known location was in the rectangular area defined by the viewport.
 */
// const viewport = {}

// Imports the Fleetengine library
const {VehicleServiceClient} = require('@googlemaps/fleetengine').v1;

// Instantiates a client
const fleetengineClient = new VehicleServiceClient();

async function callListVehicles() {
  // Construct request
  const request = {
    parent,
    vehicleTypeCategories,
  };

  // Run request
  const iterable = fleetengineClient.listVehiclesAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListVehicles();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-fleetengine/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Trip_service.create_trip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/trip_service.create_trip.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/trip_service.create_trip.js,packages/google-maps-fleetengine/samples/README.md) |
| Trip_service.get_trip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/trip_service.get_trip.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/trip_service.get_trip.js,packages/google-maps-fleetengine/samples/README.md) |
| Trip_service.report_billable_trip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/trip_service.report_billable_trip.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/trip_service.report_billable_trip.js,packages/google-maps-fleetengine/samples/README.md) |
| Trip_service.search_trips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/trip_service.search_trips.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/trip_service.search_trips.js,packages/google-maps-fleetengine/samples/README.md) |
| Trip_service.update_trip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/trip_service.update_trip.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/trip_service.update_trip.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.create_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.create_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.create_vehicle.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.get_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.get_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.get_vehicle.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.list_vehicles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.list_vehicles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.list_vehicles.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.search_fuzzed_vehicles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.search_fuzzed_vehicles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.search_fuzzed_vehicles.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.search_vehicles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.search_vehicles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.search_vehicles.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.update_vehicle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.update_vehicle_attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle_attributes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle_attributes.js,packages/google-maps-fleetengine/samples/README.md) |
| Vehicle_service.update_vehicle_location | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle_location.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/generated/v1/vehicle_service.update_vehicle_location.js,packages/google-maps-fleetengine/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-fleetengine/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-fleetengine/samples/quickstart.js,packages/google-maps-fleetengine/samples/README.md) |



The [Local Rides and Deliveries API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/fleetengine@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/fleetengine/latest
[product-docs]: https://developers.google.com/maps/documentation/transportation-logistics/mobility
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=fleetengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
