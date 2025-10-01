[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Analytics Data API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/data.svg)](https://www.npmjs.org/package/@google-cloud/data)

Google Analytics Data API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Google Analytics Data API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/data/latest)


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
1.  [Enable the Google Analytics Data API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/data
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_audience_list.js) |
| create recurring audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_recurring_audience_list.js) |
| create report task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_report_task.js) |
| get audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_audience_list.js) |
| get property quotas snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_property_quotas_snapshot.js) |
| get recurring audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_recurring_audience_list.js) |
| get report task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_report_task.js) |
| list audience lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_audience_lists.js) |
| list recurring audience lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_recurring_audience_lists.js) |
| list report tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_report_tasks.js) |
| query audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_audience_list.js) |
| query report task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_report_task.js) |
| run funnel report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.run_funnel_report.js) |
| sheet export audience list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.sheet_export_audience_list.js) |
| analytics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/snippet_metadata_google.analytics.data.v1alpha.json) |
| batch run pivot reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_pivot_reports.js) |
| batch run reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_reports.js) |
| check compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.check_compatibility.js) |
| create audience export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.create_audience_export.js) |
| get audience export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_audience_export.js) |
| get metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_metadata.js) |
| list audience exports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.list_audience_exports.js) |
| query audience export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.query_audience_export.js) |
| run pivot report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_pivot_report.js) |
| run realtime report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_realtime_report.js) |
| run report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_report.js) |
| analytics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/snippet_metadata_google.analytics.data.v1beta.json) |


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
For example, `npm install @google-cloud/data@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=analyticsdata.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data
