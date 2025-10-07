[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Datastream API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/datastream.svg)](https://www.npmjs.org/package/@google-cloud/datastream)

Datastream API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Datastream API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/datastream/latest)


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
1.  [Enable the Datastream API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/datastream
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.create_connection_profile.js) |
| create private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.create_private_connection.js) |
| create route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.create_route.js) |
| create stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.create_stream.js) |
| delete connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.delete_connection_profile.js) |
| delete private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.delete_private_connection.js) |
| delete route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.delete_route.js) |
| delete stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.delete_stream.js) |
| discover connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.discover_connection_profile.js) |
| fetch static ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.fetch_static_ips.js) |
| get connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.get_connection_profile.js) |
| get private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.get_private_connection.js) |
| get route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.get_route.js) |
| get stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.get_stream.js) |
| get stream object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.get_stream_object.js) |
| list connection profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.list_connection_profiles.js) |
| list private connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.list_private_connections.js) |
| list routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.list_routes.js) |
| list stream objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.list_stream_objects.js) |
| list streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.list_streams.js) |
| lookup stream object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.lookup_stream_object.js) |
| run stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.run_stream.js) |
| start backfill job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.start_backfill_job.js) |
| stop backfill job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.stop_backfill_job.js) |
| update connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.update_connection_profile.js) |
| update stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/datastream.update_stream.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1/snippet_metadata_google.cloud.datastream.v1.json) |
| create connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.create_connection_profile.js) |
| create private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.create_private_connection.js) |
| create route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.create_route.js) |
| create stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.create_stream.js) |
| delete connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.delete_connection_profile.js) |
| delete private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.delete_private_connection.js) |
| delete route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.delete_route.js) |
| delete stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.delete_stream.js) |
| discover connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.discover_connection_profile.js) |
| fetch errors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.fetch_errors.js) |
| fetch static ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.fetch_static_ips.js) |
| get connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.get_connection_profile.js) |
| get private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.get_private_connection.js) |
| get route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.get_route.js) |
| get stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.get_stream.js) |
| list connection profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.list_connection_profiles.js) |
| list private connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.list_private_connections.js) |
| list routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.list_routes.js) |
| list streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.list_streams.js) |
| update connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.update_connection_profile.js) |
| update stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/datastream.update_stream.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples/generated/v1alpha1/snippet_metadata_google.cloud.datastream.v1alpha1.json) |


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
For example, `npm install @google-cloud/datastream@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datastream.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datastream
