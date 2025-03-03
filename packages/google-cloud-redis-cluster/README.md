[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Memorystore for Redis API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis-cluster)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/redis-cluster.svg)](https://www.npmjs.org/package/@google-cloud/redis-cluster)




Google Cloud Memorystore for Redis API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis-cluster/CHANGELOG.md).

* [Google Cloud Memorystore for Redis API Node.js Client API Reference][client-docs]
* [Google Cloud Memorystore for Redis API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-redis-cluster](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis-cluster)

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
1.  [Enable the Google Cloud Memorystore for Redis API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/redis-cluster
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
 *  Required. The resource name of the cluster location using the form:
 *      `projects/{project_id}/locations/{location_id}`
 *  where `location_id` refers to a GCP region.
 */
// const parent = 'abc123'
/**
 *  The maximum number of items to return.
 *  If not specified, a default value of 1000 will be used by the service.
 *  Regardless of the page_size value, the response may include a partial list
 *  and a caller should only rely on response's
 *  `next_page_token` google.cloud.redis.cluster.v1.ListClustersResponse.next_page_token
 *  to determine if there are more clusters left to be queried.
 */
// const pageSize = 1234
/**
 *  The `next_page_token` value returned from a previous
 *  ListClusters CloudRedis.ListClusters  request, if any.
 */
// const pageToken = 'abc123'

// Imports the Cluster library
const {CloudRedisClusterClient} = require('@google-cloud/redis-cluster').v1;

// Instantiates a client
const clusterClient = new CloudRedisClusterClient();

async function callListClusters() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await clusterClient.listClustersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListClusters();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-redis-cluster/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_redis_cluster.backup_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.backup_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.backup_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.create_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.delete_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.delete_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.export_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.export_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.export_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_backup_collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_backup_collection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_backup_collection.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_cluster_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_cluster_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.get_cluster_certificate_authority.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_backup_collections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_backup_collections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_backup_collections.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_backups.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.list_clusters.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.reschedule_cluster_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.reschedule_cluster_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.reschedule_cluster_maintenance.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1/cloud_redis_cluster.update_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.backup_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.backup_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.backup_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.create_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.delete_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.delete_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.export_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.export_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.export_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_backup.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_backup_collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_backup_collection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_backup_collection.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.get_cluster_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_cluster_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.get_cluster_certificate_authority.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_backup_collections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_backup_collections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_backup_collections.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_backups.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.list_clusters.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.reschedule_cluster_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.reschedule_cluster_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.reschedule_cluster_maintenance.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Cloud_redis_cluster.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/generated/v1beta1/cloud_redis_cluster.update_cluster.js,packages/google-cloud-redis-cluster/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-redis-cluster/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-redis-cluster/samples/quickstart.js,packages/google-cloud-redis-cluster/samples/README.md) |



The [Google Cloud Memorystore for Redis API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/redis-cluster@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/redis/latest
[product-docs]: https://cloud.google.com/redis/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=redis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
