[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Maps Platform Datasets API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-mapsplatformdatasets)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@googlemaps/maps-platform-datasets.svg)](https://www.npmjs.org/package/@googlemaps/maps-platform-datasets)




Maps Platform Datasets API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-mapsplatformdatasets/CHANGELOG.md).

* [Maps Platform Datasets API Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-maps-mapsplatformdatasets](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-mapsplatformdatasets)

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
1.  [Enable the Maps Platform Datasets API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @googlemaps/maps-platform-datasets
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
 *  Required. The name of the project to list all the datasets for.
 */
// const parent = 'abc123'
/**
 *  The maximum number of versions to return per page.
 *  If unspecified (or zero), at most 1000 datasets will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  The page token, received from a previous GetDatasetVersions call.
 *  Provide this to retrieve the subsequent page.
 */
// const pageToken = 'abc123'

// Imports the Mapsplatformdatasets library
const {MapsPlatformDatasetsV1AlphaClient} =
  // eslint-disable-next-line node/no-missing-require
  require('@googlemaps/maps-platform-datasets').v1alpha;

// Instantiates a client
const mapsplatformdatasetsClient = new MapsPlatformDatasetsV1AlphaClient();

async function callListDataset() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await mapsplatformdatasetsClient.listDatasetsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDataset();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-maps-mapsplatformdatasets/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Maps_platform_datasets.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.create_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.delete_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets.fetch_dataset_errors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.fetch_dataset_errors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.fetch_dataset_errors.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.get_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.list_datasets.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets.update_dataset_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.update_dataset_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1/maps_platform_datasets.update_dataset_metadata.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.create_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.delete_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.delete_dataset_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.delete_dataset_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.delete_dataset_version.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.get_dataset.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.list_dataset_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.list_dataset_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.list_dataset_versions.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.list_datasets.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Maps_platform_datasets_v1_alpha.update_dataset_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.update_dataset_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/generated/v1alpha/maps_platform_datasets_v1_alpha.update_dataset_metadata.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-mapsplatformdatasets/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-maps-mapsplatformdatasets/samples/quickstart.js,packages/google-maps-mapsplatformdatasets/samples/README.md) |



The [Maps Platform Datasets API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @googlemaps/maps-platform-datasets@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/mapsplatformdatasets/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=mapsplatformdatasets.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
