[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Redis: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/redis.svg)](https://www.npmjs.org/package/@google-cloud/redis)




Google Cloud Memorystore for Redis API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis/CHANGELOG.md).

* [Cloud Redis Node.js Client API Reference][client-docs]
* [Cloud Redis Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-redis](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis)

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
1.  [Enable the Cloud Redis API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/redis
```


### Using the client library

```javascript
/**
 * List instances in a given location.
 * @param {string} project.
 * @param {string} location, e.g., us-east-1.
 */
async function main(projectId, location) {
  const {CloudRedisClient} = require('@google-cloud/redis');
  const client = new CloudRedisClient();
  const formattedParent = client.locationPath(projectId, location);
  const request = {
    parent: formattedParent,
  };
  const resp = (await client.listInstances(request))[0];
  console.info(resp);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_redis.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.create_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.delete_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.export_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.export_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.export_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.failover_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.failover_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.failover_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.get_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.get_instance_auth_string | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.get_instance_auth_string.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.get_instance_auth_string.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.import_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.import_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.import_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.list_instances.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.reschedule_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.reschedule_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.reschedule_maintenance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.update_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1/cloud_redis.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1/cloud_redis.upgrade_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.create_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.delete_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.export_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.export_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.export_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.failover_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.failover_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.failover_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.get_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.get_instance_auth_string | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.get_instance_auth_string.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.get_instance_auth_string.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.import_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.import_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.import_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.list_instances.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.reschedule_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.reschedule_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.reschedule_maintenance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.update_instance.js,packages/google-cloud-redis/samples/README.md) |
| Cloud_redis.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/generated/v1beta1/cloud_redis.upgrade_instance.js,packages/google-cloud-redis/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis/samples/quickstart.js,packages/google-cloud-redis/samples/README.md) |



The [Cloud Redis Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/redis@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/redis/latest
[product-docs]: https://cloud.google.com/memorystore/docs/redis/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=redis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
