[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [BigQuery Reservation API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-reservation.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-reservation)

BigQuery Reservation API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [BigQuery Reservation API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/reservation/latest)


Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the BigQuery Reservation API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/bigquery-reservation
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.create_assignment.js) |
| create capacity commitment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.create_capacity_commitment.js) |
| create reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.create_reservation.js) |
| create reservation group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.create_reservation_group.js) |
| delete assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.delete_assignment.js) |
| delete capacity commitment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.delete_capacity_commitment.js) |
| delete reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.delete_reservation.js) |
| delete reservation group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.delete_reservation_group.js) |
| failover reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.failover_reservation.js) |
| get bi reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.get_bi_reservation.js) |
| get capacity commitment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.get_capacity_commitment.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.get_iam_policy.js) |
| get reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.get_reservation.js) |
| get reservation group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.get_reservation_group.js) |
| list assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.list_assignments.js) |
| list capacity commitments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.list_capacity_commitments.js) |
| list reservation groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.list_reservation_groups.js) |
| list reservations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.list_reservations.js) |
| merge capacity commitments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.merge_capacity_commitments.js) |
| move assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.move_assignment.js) |
| search all assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.search_all_assignments.js) |
| search assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.search_assignments.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.set_iam_policy.js) |
| split capacity commitment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.split_capacity_commitment.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.test_iam_permissions.js) |
| update assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.update_assignment.js) |
| update bi reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.update_bi_reservation.js) |
| update capacity commitment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.update_capacity_commitment.js) |
| update reservation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/reservation_service.update_reservation.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples/generated/v1/snippet_metadata_google.cloud.bigquery.reservation.v1.json) |


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
For example, `npm install @google-cloud/bigquery-reservation@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigqueryreservation.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-reservation
