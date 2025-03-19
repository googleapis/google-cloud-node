[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Analytics Data: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-analytics-data)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-analytics/data.svg)](https://www.npmjs.org/package/@google-analytics/data)




Data client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-analytics-data/CHANGELOG.md).

* [Google Analytics Data Node.js Client API Reference][client-docs]
* [Google Analytics Data Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-analytics-data](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-analytics-data)

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
1.  [Enable the Google Analytics Data API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-analytics/data
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
// propertyId = 'YOUR-GA4-PROPERTY-ID';

// Imports the Google Analytics Data API client library.
const {BetaAnalyticsDataClient} = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2020-03-31',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'city',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  console.log('Report result:');
  response.rows.forEach(row => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

runReport();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-analytics-data/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Alpha_analytics_data.create_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.create_recurring_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_recurring_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_recurring_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.create_report_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_report_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.create_report_task.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.get_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.get_property_quotas_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_property_quotas_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_property_quotas_snapshot.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.get_recurring_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_recurring_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_recurring_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.get_report_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_report_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.get_report_task.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.list_audience_lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_audience_lists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_audience_lists.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.list_recurring_audience_lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_recurring_audience_lists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_recurring_audience_lists.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.list_report_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_report_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.list_report_tasks.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.query_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.query_report_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_report_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.query_report_task.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.run_funnel_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.run_funnel_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.run_funnel_report.js,packages/google-analytics-data/samples/README.md) |
| Alpha_analytics_data.sheet_export_audience_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.sheet_export_audience_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1alpha/alpha_analytics_data.sheet_export_audience_list.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.batch_run_pivot_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_pivot_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_pivot_reports.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.batch_run_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.batch_run_reports.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.check_compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.check_compatibility.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.check_compatibility.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.create_audience_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.create_audience_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.create_audience_export.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.get_audience_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_audience_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_audience_export.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.get_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.get_metadata.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.list_audience_exports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.list_audience_exports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.list_audience_exports.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.query_audience_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.query_audience_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.query_audience_export.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.run_pivot_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_pivot_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_pivot_report.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.run_realtime_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_realtime_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_realtime_report.js,packages/google-analytics-data/samples/README.md) |
| Beta_analytics_data.run_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/generated/v1beta/beta_analytics_data.run_report.js,packages/google-analytics-data/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-data/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-data/samples/quickstart.js,packages/google-analytics-data/samples/README.md) |



The [Google Analytics Data Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-analytics/data@legacy-8` installs client libraries
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

[client-docs]: https://googleapis.dev/nodejs/analytics-data/latest/index.html
[product-docs]: https://developers.google.com/analytics/trusted-testing/analytics-data
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=analyticsdata.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
