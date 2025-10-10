[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Lineage API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/lineage.svg)](https://www.npmjs.org/package/@google-cloud/lineage)

Data Lineage API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Data Lineage API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/lineage/latest)


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
1.  [Enable the Data Lineage API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/lineage
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch search link processes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.batch_search_link_processes.js) |
| create lineage event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.create_lineage_event.js) |
| create process | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.create_process.js) |
| create run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.create_run.js) |
| delete lineage event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.delete_lineage_event.js) |
| delete process | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.delete_process.js) |
| delete run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.delete_run.js) |
| get lineage event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.get_lineage_event.js) |
| get process | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.get_process.js) |
| get run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.get_run.js) |
| list lineage events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.list_lineage_events.js) |
| list processes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.list_processes.js) |
| list runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.list_runs.js) |
| process open lineage run event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.process_open_lineage_run_event.js) |
| search links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.search_links.js) |
| update process | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.update_process.js) |
| update run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/lineage.update_run.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples/generated/v1/snippet_metadata_google.cloud.datacatalog.lineage.v1.json) |


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
For example, `npm install @google-cloud/lineage@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datalineage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog-lineage
