[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Monitoring Dashboards: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-monitoring-dashboard)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/monitoring-dashboards.svg)](https://www.npmjs.org/package/@google-cloud/monitoring-dashboards)




interact with dashboards for viewing and analyzing metric data


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-monitoring-dashboard/CHANGELOG.md).

* [Monitoring Dashboards Node.js Client API Reference][client-docs]
* [Monitoring Dashboards Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-monitoring-dashboard](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-monitoring-dashboard)

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
1.  [Enable the Monitoring Dashboards API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/monitoring-dashboards
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {
  DashboardsServiceClient,
} = require('@google-cloud/monitoring-dashboards');

// Creates a client
const ds = new DashboardsServiceClient();

// parent = 'projects/my-project', // Project to list dashboards for.

async function listDashboards() {
  const [dashboards] = await ds.listDashboards({
    parent,
  });
  console.info('Listing Dashboards:');
  for (const dashboard of dashboards) {
    console.info(`\t${dashboard.displayName}`);
  }
}
listDashboards();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-monitoring-dashboard/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Dashboards_service.create_dashboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.create_dashboard.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.create_dashboard.js,packages/google-monitoring-dashboard/samples/README.md) |
| Dashboards_service.delete_dashboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.delete_dashboard.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.delete_dashboard.js,packages/google-monitoring-dashboard/samples/README.md) |
| Dashboards_service.get_dashboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.get_dashboard.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.get_dashboard.js,packages/google-monitoring-dashboard/samples/README.md) |
| Dashboards_service.list_dashboards | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.list_dashboards.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.list_dashboards.js,packages/google-monitoring-dashboard/samples/README.md) |
| Dashboards_service.update_dashboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.update_dashboard.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/generated/v1/dashboards_service.update_dashboard.js,packages/google-monitoring-dashboard/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring-dashboard/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-monitoring-dashboard/samples/quickstart.js,packages/google-monitoring-dashboard/samples/README.md) |



The [Monitoring Dashboards Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/monitoring-dashboards@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/monitoring-dashboards/latest
[product-docs]: https://cloud.google.com/monitoring/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=monitoring.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
