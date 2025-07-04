[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Route Optimization API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routeoptimization)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/routeoptimization.svg)](https://www.npmjs.org/package/@googlemaps/routeoptimization)




Route Optimization API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routeoptimization/CHANGELOG.md).

* [Route Optimization API Node.js Client API Reference][client-docs]
* [Route Optimization API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-maps-routeoptimization](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routeoptimization)

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
1.  [Enable the Route Optimization API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/routeoptimization
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
 *  Required. Target project or location to make a call.
 *  Format:
 *  * `projects/{project-id}`
 *  * `projects/{project-id}/locations/{location-id}`
 *  If no location is specified, a region will be chosen automatically.
 */
// const parent = 'abc123'
/**
 *  If this timeout is set, the server returns a response before the timeout
 *  period has elapsed or the server deadline for synchronous requests is
 *  reached, whichever is sooner.
 *  For asynchronous requests, the server will generate a solution (if
 *  possible) before the timeout has elapsed.
 */
// const timeout = {}
/**
 *  Shipment model to solve.
 */
// const model = {}
/**
 *  By default, the solving mode is `DEFAULT_SOLVE` (0).
 */
// const solvingMode = {}
/**
 *  Search mode used to solve the request.
 */
// const searchMode = {}
/**
 *  Guide the optimization algorithm in finding a first solution that is
 *  similar to a previous solution.
 *  The model is constrained when the first solution is built.
 *  Any shipments not performed on a route are implicitly skipped in the first
 *  solution, but they may be performed in successive solutions.
 *  The solution must satisfy some basic validity assumptions:
 *    * for all routes, `vehicle_index` must be in range and not be duplicated.
 *    * for all visits, `shipment_index` and `visit_request_index` must be
 *      in range.
 *    * a shipment may only be referenced on one route.
 *    * the pickup of a pickup-delivery shipment must be performed before
 *      the delivery.
 *    * no more than one pickup alternative or delivery alternative of
 *      a shipment may be performed.
 *    * for all routes, times are increasing (i.e., `vehicle_start_time
 *      <= visits0.start_time <= visits1.start_time ...
 *      <= vehicle_end_time`).
 *    * a shipment may only be performed on a vehicle that is allowed. A
 *      vehicle is allowed if
 *      Shipment.allowed_vehicle_indices google.maps.routeoptimization.v1.Shipment.allowed_vehicle_indices
 *      is empty or its `vehicle_index` is included in
 *      Shipment.allowed_vehicle_indices google.maps.routeoptimization.v1.Shipment.allowed_vehicle_indices.
 *  If the injected solution is not feasible, a validation error is not
 *  necessarily returned and an error indicating infeasibility may be returned
 *  instead.
 */
// const injectedFirstSolutionRoutes = [1,2,3,4]
/**
 *  Constrain the optimization algorithm to find a final solution that is
 *  similar to a previous solution. For example, this may be used to freeze
 *  portions of routes which have already been completed or which are to be
 *  completed but must not be modified.
 *  If the injected solution is not feasible, a validation error is not
 *  necessarily returned and an error indicating infeasibility may be returned
 *  instead.
 */
// const injectedSolutionConstraint = {}
/**
 *  If non-empty, the given routes will be refreshed, without modifying their
 *  underlying sequence of visits or travel times: only other details will be
 *  updated. This does not solve the model.
 *  As of 2020/11, this only populates the polylines of non-empty routes and
 *  requires that `populate_polylines` is true.
 *  The `route_polyline` fields of the passed-in routes may be inconsistent
 *  with route `transitions`.
 *  This field must not be used together with `injected_first_solution_routes`
 *  or `injected_solution_constraint`.
 *  `Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior.
 *  Polylines are still populated between all visits in all non-empty routes
 *  regardless of whether the related shipments or vehicles are ignored.
 */
// const refreshDetailsRoutes = [1,2,3,4]
/**
 *  If true:
 *    * uses
 *    ShipmentRoute.vehicle_label google.maps.routeoptimization.v1.ShipmentRoute.vehicle_label
 *    instead of `vehicle_index` to
 *      match routes in an injected solution with vehicles in the request;
 *      reuses the mapping of original
 *      ShipmentRoute.vehicle_index google.maps.routeoptimization.v1.ShipmentRoute.vehicle_index
 *      to new
 *      ShipmentRoute.vehicle_index google.maps.routeoptimization.v1.ShipmentRoute.vehicle_index
 *      to update
 *      ConstraintRelaxation.vehicle_indices google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.vehicle_indices
 *      if non-empty, but the mapping must be unambiguous (i.e., multiple
 *      `ShipmentRoute`s must not share the same original `vehicle_index`).
 *    * uses
 *    ShipmentRoute.Visit.shipment_label google.maps.routeoptimization.v1.ShipmentRoute.Visit.shipment_label
 *    instead of `shipment_index`
 *      to match visits in an injected solution with shipments in the request;
 *    * uses
 *    SkippedShipment.label google.maps.routeoptimization.v1.SkippedShipment.label
 *    instead of
 *    SkippedShipment.index google.maps.routeoptimization.v1.SkippedShipment.index
 *    to
 *      match skipped shipments in the injected solution with request
 *      shipments.
 *  This interpretation applies to the `injected_first_solution_routes`,
 *  `injected_solution_constraint`, and `refresh_details_routes` fields.
 *  It can be used when shipment or vehicle indices in the request have
 *  changed since the solution was created, perhaps because shipments or
 *  vehicles have been removed from or added to the request.
 *  If true, labels in the following categories must appear at most once in
 *  their category:
 *    * Vehicle.label google.maps.routeoptimization.v1.Vehicle.label  in the
 *    request;
 *    * Shipment.label google.maps.routeoptimization.v1.Shipment.label  in
 *    the request;
 *    * ShipmentRoute.vehicle_label google.maps.routeoptimization.v1.ShipmentRoute.vehicle_label  in the injected solution;
 *    * SkippedShipment.label google.maps.routeoptimization.v1.SkippedShipment.label  and ShipmentRoute.Visit.shipment_label google.maps.routeoptimization.v1.ShipmentRoute.Visit.shipment_label  in
 *      the injected solution (except pickup/delivery visit pairs, whose
 *      `shipment_label` must appear twice).
 *  If a `vehicle_label` in the injected solution does not correspond to a
 *  request vehicle, the corresponding route is removed from the solution
 *  along with its visits. If a `shipment_label` in the injected solution does
 *  not correspond to a request shipment, the corresponding visit is removed
 *  from the solution. If a
 *  SkippedShipment.label google.maps.routeoptimization.v1.SkippedShipment.label
 *  in the injected solution does not correspond to a request shipment, the
 *  `SkippedShipment` is removed from the solution.
 *  Removing route visits or entire routes from an injected solution may
 *  have an effect on the implied constraints, which may lead to change in
 *  solution, validation errors, or infeasibility.
 *  NOTE: The caller must ensure that each
 *  Vehicle.label google.maps.routeoptimization.v1.Vehicle.label  (resp.
 *  Shipment.label google.maps.routeoptimization.v1.Shipment.label) uniquely
 *  identifies a vehicle (resp. shipment) entity used across the two relevant
 *  requests: the past request that produced the `OptimizeToursResponse` used
 *  in the injected solution and the current request that includes the injected
 *  solution. The uniqueness checks described above are not enough to guarantee
 *  this requirement.
 */
// const interpretInjectedSolutionsUsingLabels = true
/**
 *  Consider traffic estimation in calculating `ShipmentRoute` fields
 *  Transition.travel_duration google.maps.routeoptimization.v1.ShipmentRoute.Transition.travel_duration,
 *  Visit.start_time google.maps.routeoptimization.v1.ShipmentRoute.Visit.start_time,
 *  and `vehicle_end_time`; in setting the
 *  ShipmentRoute.has_traffic_infeasibilities google.maps.routeoptimization.v1.ShipmentRoute.has_traffic_infeasibilities
 *  field, and in calculating the
 *  OptimizeToursResponse.total_cost google.maps.routeoptimization.v1.OptimizeToursResponse.total_cost
 *  field.
 */
// const considerRoadTraffic = true
/**
 *  If true, polylines will be populated in response `ShipmentRoute`s.
 */
// const populatePolylines = true
/**
 *  If true, polylines will be populated in response
 *  ShipmentRoute.transitions google.maps.routeoptimization.v1.ShipmentRoute.transitions.
 */
// const populateTransitionPolylines = true
/**
 *  If this is set, then the request can have a deadline
 *  (see https://grpc.io/blog/deadlines) of up to 60 minutes.
 *  Otherwise, the maximum deadline is only 30 minutes.
 *  Note that long-lived requests have a significantly larger (but still small)
 *  risk of interruption.
 */
// const allowLargeDeadlineDespiteInterruptionRisk = true
/**
 *  If true, travel distances will be computed using geodesic distances instead
 *  of Google Maps distances, and travel times will be computed using geodesic
 *  distances with a speed defined by `geodesic_meters_per_second`.
 */
// const useGeodesicDistances = true
/**
 *  When `use_geodesic_distances` is true, this field must be set and defines
 *  the speed applied to compute travel times. Its value must be at least 1.0
 *  meters/seconds.
 */
// const geodesicMetersPerSecond = 1234
/**
 *  Truncates the number of validation errors returned. These errors are
 *  typically attached to an INVALID_ARGUMENT error payload as a BadRequest
 *  error detail (https://cloud.google.com/apis/design/errors#error_details),
 *  unless solving_mode=VALIDATE_ONLY: see the
 *  OptimizeToursResponse.validation_errors google.maps.routeoptimization.v1.OptimizeToursResponse.validation_errors
 *  field.
 *  This defaults to 100 and is capped at 10,000.
 */
// const maxValidationErrors = 1234
/**
 *  Label that may be used to identify this request, reported back in the
 *  OptimizeToursResponse.request_label google.maps.routeoptimization.v1.OptimizeToursResponse.request_label.
 */
// const label = 'abc123'

// Imports the Routeoptimization library
const {RouteOptimizationClient} = require('@googlemaps/routeoptimization').v1;

// Instantiates a client
const routeoptimizationClient = new RouteOptimizationClient();

async function callOptimizeTours() {
  // Construct request
  const request = {
    parent,
    model,
  };

  // Run request
  const response = await routeoptimizationClient.optimizeTours(request);
  console.log(response);
}

callOptimizeTours();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-routeoptimization/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Route_optimization.batch_optimize_tours | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routeoptimization/samples/generated/v1/route_optimization.batch_optimize_tours.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routeoptimization/samples/generated/v1/route_optimization.batch_optimize_tours.js,packages/google-maps-routeoptimization/samples/README.md) |
| Route_optimization.optimize_tours | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routeoptimization/samples/generated/v1/route_optimization.optimize_tours.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routeoptimization/samples/generated/v1/route_optimization.optimize_tours.js,packages/google-maps-routeoptimization/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-routeoptimization/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-routeoptimization/samples/quickstart.js,packages/google-maps-routeoptimization/samples/README.md) |



The [Route Optimization API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/routeoptimization@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/routeoptimization/latest
[product-docs]: https://developers.google.com/maps/documentation/route-optimization
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=routeoptimization.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
