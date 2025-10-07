[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Managed Service for Apache Kafka API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/managedkafka.svg)](https://www.npmjs.org/package/@google-cloud/managedkafka)

Managed Service for Apache Kafka API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Managed Service for Apache Kafka API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/managedkafka/latest)
* [Managed Service for Apache Kafka API Documentation](https://cloud.google.com/managed-service-for-apache-kafka/docs)

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
1.  [Enable the Managed Service for Apache Kafka API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/managedkafka
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| add acl entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.add_acl_entry.js) |
| create acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_acl.js) |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_cluster.js) |
| create topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.create_topic.js) |
| delete acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_acl.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_cluster.js) |
| delete consumer group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_consumer_group.js) |
| delete topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.delete_topic.js) |
| get acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_acl.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_cluster.js) |
| get consumer group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_consumer_group.js) |
| get topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.get_topic.js) |
| list acls | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_acls.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_clusters.js) |
| list consumer groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_consumer_groups.js) |
| list topics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.list_topics.js) |
| remove acl entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.remove_acl_entry.js) |
| update acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_acl.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_cluster.js) |
| update consumer group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_consumer_group.js) |
| update topic | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka.update_topic.js) |
| create connect cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connect_cluster.js) |
| create connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.create_connector.js) |
| delete connect cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connect_cluster.js) |
| delete connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.delete_connector.js) |
| get connect cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connect_cluster.js) |
| get connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.get_connector.js) |
| list connect clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connect_clusters.js) |
| list connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.list_connectors.js) |
| pause connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.pause_connector.js) |
| restart connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.restart_connector.js) |
| resume connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.resume_connector.js) |
| stop connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.stop_connector.js) |
| update connect cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connect_cluster.js) |
| update connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/managed_kafka_connect.update_connector.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples/generated/v1/snippet_metadata_google.cloud.managedkafka.v1.json) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=managedkafka.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka
