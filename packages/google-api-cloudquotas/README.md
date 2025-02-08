[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Quotas API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-cloudquotas)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/cloudquotas.svg)](https://www.npmjs.org/package/@google-cloud/cloudquotas)




Cloud Quotas API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-cloudquotas/CHANGELOG.md).

* [Cloud Quotas API Node.js Client API Reference][client-docs]
* [Cloud Quotas API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-api-cloudquotas](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-cloudquotas)

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
1.  [Enable the Cloud Quotas API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/cloudquotas
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
 *  Required. Parent value of QuotaPreference resources.
 *  Listing across different resource containers (such as 'projects/-') is not
 *  allowed.
 *  When the value starts with 'folders' or 'organizations', it lists the
 *  QuotaPreferences for org quotas in the container. It does not list the
 *  QuotaPreferences in the descendant projects of the container.
 *  Example parents:
 *  `projects/123/locations/global`
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server may return fewer items than
 *  requested. If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filter result QuotaPreferences by their state, type,
 *  create/update time range.
 *  Example filters:
 *  `state=PENDING OR state=PENDING_PARTIALLY_GRANTED`
 *  `state=PENDING OR state=PENDING_PARTIALLY_GRANTED AND
 *   creation_time>2022-12-03T10:30:00`
 *  If no filter is provided, returns all pending quota preferences.
 */
// const filter = 'abc123'
/**
 *  Optional. How to order of the results. By default, the results are ordered
 *  by create time.
 *  Example orders:
 *  `type`
 *  `state, create_time`
 */
// const orderBy = 'abc123'

// Imports the Cloudquotas library
const {CloudQuotasClient} = require('@google-cloud/cloudquotas').v1;

// Instantiates a client
const cloudquotasClient = new CloudQuotasClient();

async function callListQuotaPreferences() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await cloudquotasClient.listQuotaPreferencesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListQuotaPreferences();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-cloudquotas/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_quotas.create_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.create_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.create_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.get_quota_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.get_quota_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.get_quota_info.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.get_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.get_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.get_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.list_quota_infos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.list_quota_infos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.list_quota_infos.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.list_quota_preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.list_quota_preferences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.list_quota_preferences.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.update_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.update_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1/cloud_quotas.update_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.create_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.create_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.create_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.get_quota_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.get_quota_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.get_quota_info.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.get_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.get_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.get_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.list_quota_infos | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.list_quota_infos.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.list_quota_infos.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.list_quota_preferences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.list_quota_preferences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.list_quota_preferences.js,packages/google-api-cloudquotas/samples/README.md) |
| Cloud_quotas.update_quota_preference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.update_quota_preference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/cloud_quotas.update_quota_preference.js,packages/google-api-cloudquotas/samples/README.md) |
| Quota_adjuster_settings_manager.get_quota_adjuster_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/quota_adjuster_settings_manager.get_quota_adjuster_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/quota_adjuster_settings_manager.get_quota_adjuster_settings.js,packages/google-api-cloudquotas/samples/README.md) |
| Quota_adjuster_settings_manager.update_quota_adjuster_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/generated/v1beta/quota_adjuster_settings_manager.update_quota_adjuster_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/generated/v1beta/quota_adjuster_settings_manager.update_quota_adjuster_settings.js,packages/google-api-cloudquotas/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-cloudquotas/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-cloudquotas/samples/quickstart.js,packages/google-api-cloudquotas/samples/README.md) |



The [Cloud Quotas API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/cloudquotas@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/cloudquotas/latest
[product-docs]: https://cloud.google.com/docs/quota/api-overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudquotas.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
