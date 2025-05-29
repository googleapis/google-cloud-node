[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Managed Service for Apache Kafka API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/managedkafka.svg)](https://www.npmjs.org/package/@google-cloud/managedkafka)




Apache Kafka for BigQuery API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka/CHANGELOG.md).

* [Managed Service for Apache Kafka API Node.js Client API Reference][client-docs]
* [Managed Service for Apache Kafka API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-managedkafka](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka)

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
1.  [Enable the Managed Service for Apache Kafka API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/managedkafka
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
 *  Required. The parent location whose clusters are to be listed. Structured
 *  like `projects/{project}/locations/{location}`.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of clusters to return. The service may return
 *  fewer than this value. If unspecified, server will pick an appropriate
 *  default.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListClusters` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListClusters` must match
 *  the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filter expression for the result.
 */
// const filter = 'abc123'
/**
 *  Optional. Order by fields for the result.
 */
// const orderBy = 'abc123'

// Imports the Managedkafka library
const {ManagedKafkaClient} = require('@google-cloud/managedkafka').v1;

// Instantiates a client
const managedkafkaClient = new ManagedKafkaClient();

async function callListClusters() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = managedkafkaClient.listClustersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListClusters();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Managed_kafka.add_acl_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.add_acl_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.add_acl_entry.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.create_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_acl.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.create_topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_topic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_topic.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.delete_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_acl.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.delete_consumer_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_consumer_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_consumer_group.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.delete_topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_topic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_topic.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.get_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_acl.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.get_consumer_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_consumer_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_consumer_group.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.get_topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_topic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_topic.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.list_acls | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_acls.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_acls.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_clusters.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.list_consumer_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_consumer_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_consumer_groups.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.list_topics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_topics.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_topics.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.remove_acl_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.remove_acl_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.remove_acl_entry.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.update_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_acl.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.update_consumer_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_consumer_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_consumer_group.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka.update_topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_topic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_topic.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.create_connect_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connect_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connect_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.create_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.delete_connect_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connect_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connect_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.delete_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.get_connect_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connect_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connect_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.get_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.list_connect_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connect_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connect_clusters.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.list_connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connectors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connectors.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.pause_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.pause_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.pause_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.restart_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.restart_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.restart_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.resume_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.resume_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.resume_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.stop_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.stop_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.stop_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.update_connect_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connect_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connect_cluster.js,packages/google-cloud-managedkafka/samples/README.md) |
| Managed_kafka_connect.update_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connector.js,packages/google-cloud-managedkafka/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka/samples/quickstart.js,packages/google-cloud-managedkafka/samples/README.md) |



The [Managed Service for Apache Kafka API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/managedkafka@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/managedkafka/latest
[product-docs]: https://cloud.google.com/managed-kafka
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=managedkafka.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
