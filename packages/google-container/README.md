[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Kubernetes Engine API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/container.svg)](https://www.npmjs.org/package/@google-cloud/container)

Kubernetes Engine API client for Node.js

> Node.js idiomatic client for [Kubernetes Engine][product-docs] cluster management.

[Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs/) is used for
building and managing container based applications, powered by the open source Kubernetes technology.

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Kubernetes Engine API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/container/latest)


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
1.  [Enable the Kubernetes Engine API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/container
```


## Relationship to Kubernetes

`@google-cloud/container` provides a high level API for creating and managing
[Google Kubernetes Engine](https://cloud.google.com/gke) clusters on Google Cloud.

To run commands against the clusters created, you will need to use the
[Kubernetes API](https://kubernetes.io/docs/reference/using-api/api-overview/)
(and the associated kubectl command-line interface).

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cancel operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js) |
| check autopilot compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js) |
| complete i p rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js) |
| complete node pool upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js) |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js) |
| create node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js) |
| delete node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js) |
| fetch cluster upgrade info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js) |
| fetch node pool upgrade info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js) |
| get j s o n web keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js) |
| get node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js) |
| get operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_operation.js) |
| get server config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js) |
| list node pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js) |
| list operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_operations.js) |
| list usable subnetworks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js) |
| rollback node pool upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js) |
| set addons config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js) |
| set labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_labels.js) |
| set legacy abac | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js) |
| set locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_locations.js) |
| set logging service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js) |
| set maintenance policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js) |
| set master auth | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js) |
| set monitoring service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js) |
| set network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js) |
| set node pool autoscaling | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js) |
| set node pool management | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js) |
| set node pool size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js) |
| start i p rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js) |
| update master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_master.js) |
| update node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js) |
| container | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/snippet_metadata_google.container.v1.json) |
| cancel operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js) |
| check autopilot compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js) |
| complete i p rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js) |
| complete node pool upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js) |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js) |
| create node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js) |
| delete node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js) |
| fetch cluster upgrade info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js) |
| fetch node pool upgrade info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js) |
| get j s o n web keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js) |
| get node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js) |
| get operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js) |
| get server config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js) |
| list locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js) |
| list node pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js) |
| list operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js) |
| list usable subnetworks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js) |
| rollback node pool upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js) |
| set addons config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js) |
| set labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js) |
| set legacy abac | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js) |
| set locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js) |
| set logging service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js) |
| set maintenance policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js) |
| set master auth | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js) |
| set monitoring service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js) |
| set network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js) |
| set node pool autoscaling | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js) |
| set node pool management | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js) |
| set node pool size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js) |
| start i p rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js) |
| update master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js) |
| update node pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js) |
| container | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/snippet_metadata_google.container.v1beta1.json) |


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
For example, `npm install @google-cloud/container@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container
