[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [GDC Hardware Management API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/gdchardwaremanagement.svg)](https://www.npmjs.org/package/@google-cloud/gdchardwaremanagement)

GDC Hardware Management API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [GDC Hardware Management API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/gdchardwaremanagement/latest)
* [GDC Hardware Management API Documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs)

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
1.  [Enable the GDC Hardware Management API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/gdchardwaremanagement
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cancel order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.cancel_order.js) |
| create comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_comment.js) |
| create hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware.js) |
| create hardware group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware_group.js) |
| create order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_order.js) |
| create site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_site.js) |
| create zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_zone.js) |
| delete hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware.js) |
| delete hardware group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware_group.js) |
| delete order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_order.js) |
| delete site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_site.js) |
| delete zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_zone.js) |
| get change log entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_change_log_entry.js) |
| get comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_comment.js) |
| get hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware.js) |
| get hardware group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware_group.js) |
| get order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_order.js) |
| get site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_site.js) |
| get sku | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_sku.js) |
| get zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_zone.js) |
| list change log entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_change_log_entries.js) |
| list comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_comments.js) |
| list hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware.js) |
| list hardware groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware_groups.js) |
| list orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_orders.js) |
| list sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_sites.js) |
| list skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_skus.js) |
| list zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_zones.js) |
| record action on comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.record_action_on_comment.js) |
| request order date change | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.request_order_date_change.js) |
| signal zone state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.signal_zone_state.js) |
| submit order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.submit_order.js) |
| update hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware.js) |
| update hardware group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware_group.js) |
| update order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_order.js) |
| update site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_site.js) |
| update zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_zone.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/snippet_metadata_google.cloud.gdchardwaremanagement.v1alpha.json) |


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
For example, `npm install @google-cloud/gdchardwaremanagement@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gdchardwaremanagement.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement
