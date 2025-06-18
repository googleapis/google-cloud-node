[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Memorystore for Memcached: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-memcache)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/memcache.svg)](https://www.npmjs.org/package/@google-cloud/memcache)




Memcache client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-memcache/CHANGELOG.md).

* [Memorystore for Memcached Node.js Client API Reference][client-docs]
* [Memorystore for Memcached Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-memcache](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-memcache)

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
1.  [Enable the Memorystore for Memcached API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/memcache
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
 *  Required. The resource name of the instance location using the form:
 *      `projects/{project_id}/locations/{location_id}`
 *  where `location_id` refers to a GCP region
 */
// const parent = 'abc123'
/**
 *  The maximum number of items to return.
 *  If not specified, a default value of 1000 will be used by the service.
 *  Regardless of the page_size value, the response may include a partial list
 *  and a caller should only rely on response's
 *  next_page_token CloudMemcache.ListInstancesResponse.next_page_token
 *  to determine if there are more instances left to be queried.
 */
// const pageSize = 1234
/**
 *  The next_page_token value returned from a previous List request,
 *  if any.
 */
// const pageToken = 'abc123'
/**
 *  List filter. For example, exclude all Memcached instances with name as
 *  my-instance by specifying "name != my-instance".
 */
// const filter = 'abc123'
/**
 *  Sort results. Supported values are "name", "name desc" or "" (unsorted).
 */
// const orderBy = 'abc123'

// Imports the Memcache library
const {CloudMemcacheClient} = require('@google-cloud/memcache').v1;

// Instantiates a client
const memcacheClient = new CloudMemcacheClient();

async function callListInstances() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await memcacheClient.listInstancesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListInstances();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-memcache/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_memcache.apply_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.apply_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.apply_parameters.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.create_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.delete_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.get_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.list_instances.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.reschedule_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.reschedule_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.reschedule_maintenance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.update_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.update_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.update_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1/cloud_memcache.update_parameters.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.apply_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.apply_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.apply_parameters.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.apply_software_update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.apply_software_update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.apply_software_update.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.create_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.delete_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.get_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.list_instances.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.reschedule_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.reschedule_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.reschedule_maintenance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.update_instance.js,packages/google-cloud-memcache/samples/README.md) |
| Cloud_memcache.update_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.update_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/generated/v1beta2/cloud_memcache.update_parameters.js,packages/google-cloud-memcache/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-memcache/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-memcache/samples/quickstart.js,packages/google-cloud-memcache/samples/README.md) |



The [Memorystore for Memcached Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/memcache@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/memcache/latest
[product-docs]: https://cloud.google.com/memorystore/docs/memcached
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=memcache.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
