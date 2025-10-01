[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [GKE Multi-Cloud API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/gkemulticloud.svg)](https://www.npmjs.org/package/@google-cloud/gkemulticloud)

GKE Multi-Cloud API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [GKE Multi-Cloud API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/gkemulticloud/latest)
* [GKE Multi-Cloud API Documentation](https://cloud.google.com/kubernetes-engine/multi-cloud/docs)

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
1.  [Enable the GKE Multi-Cloud API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/gkemulticloud
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create attached cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.create_attached_cluster.js) |
| delete attached cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.delete_attached_cluster.js) |
| generate attached cluster agent token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_agent_token.js) |
| generate attached cluster install manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_install_manifest.js) |
| get attached cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_cluster.js) |
| get attached server config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_server_config.js) |
| import attached cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.import_attached_cluster.js) |
| list attached clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.list_attached_clusters.js) |
| update attached cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.update_attached_cluster.js) |
| create aws cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_cluster.js) |
| create aws node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_node_pool.js) |
| delete aws cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_cluster.js) |
| delete aws node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_node_pool.js) |
| generate aws access token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_access_token.js) |
| generate aws cluster agent token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_cluster_agent_token.js) |
| get aws cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_cluster.js) |
| get aws json web keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_json_web_keys.js) |
| get aws node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_node_pool.js) |
| get aws open id config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_open_id_config.js) |
| get aws server config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_server_config.js) |
| list aws clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_clusters.js) |
| list aws node pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_node_pools.js) |
| rollback aws node pool update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.rollback_aws_node_pool_update.js) |
| update aws cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_cluster.js) |
| update aws node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_node_pool.js) |
| create azure client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_client.js) |
| create azure cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_cluster.js) |
| create azure node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_node_pool.js) |
| delete azure client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_client.js) |
| delete azure cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_cluster.js) |
| delete azure node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_node_pool.js) |
| generate azure access token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_access_token.js) |
| generate azure cluster agent token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_cluster_agent_token.js) |
| get azure client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_client.js) |
| get azure cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_cluster.js) |
| get azure json web keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_json_web_keys.js) |
| get azure node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_node_pool.js) |
| get azure open id config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_open_id_config.js) |
| get azure server config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_server_config.js) |
| list azure clients | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clients.js) |
| list azure clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clusters.js) |
| list azure node pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_node_pools.js) |
| update azure cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_cluster.js) |
| update azure node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_node_pool.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/snippet_metadata_google.cloud.gkemulticloud.v1.json) |


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
For example, `npm install @google-cloud/gkemulticloud@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gkemulticloud.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud
