[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [VMware Engine API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/vmwareengine.svg)](https://www.npmjs.org/package/@google-cloud/vmwareengine)

VMware Engine API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [VMware Engine API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/vmwareengine/latest)


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
1.  [Enable the VMware Engine API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/vmwareengine
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/snippet_metadata_google.cloud.vmwareengine.v1.json) |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_cluster.js) |
| create external access rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_external_access_rule.js) |
| create external address | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_external_address.js) |
| create hcx activation key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_hcx_activation_key.js) |
| create logging server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_logging_server.js) |
| create management dns zone binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_management_dns_zone_binding.js) |
| create network peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_network_peering.js) |
| create network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_network_policy.js) |
| create private cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_private_cloud.js) |
| create private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_private_connection.js) |
| create vmware engine network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_vmware_engine_network.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_cluster.js) |
| delete external access rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_external_access_rule.js) |
| delete external address | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_external_address.js) |
| delete logging server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_logging_server.js) |
| delete management dns zone binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_management_dns_zone_binding.js) |
| delete network peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_network_peering.js) |
| delete network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_network_policy.js) |
| delete private cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_private_cloud.js) |
| delete private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_private_connection.js) |
| delete vmware engine network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_vmware_engine_network.js) |
| fetch network policy external addresses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.fetch_network_policy_external_addresses.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_cluster.js) |
| get dns bind permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_dns_bind_permission.js) |
| get dns forwarding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_dns_forwarding.js) |
| get external access rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_external_access_rule.js) |
| get external address | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_external_address.js) |
| get hcx activation key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_hcx_activation_key.js) |
| get logging server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_logging_server.js) |
| get management dns zone binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_management_dns_zone_binding.js) |
| get network peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_network_peering.js) |
| get network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_network_policy.js) |
| get node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_node.js) |
| get node type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_node_type.js) |
| get private cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_private_cloud.js) |
| get private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_private_connection.js) |
| get subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_subnet.js) |
| get vmware engine network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_vmware_engine_network.js) |
| grant dns bind permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.grant_dns_bind_permission.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_clusters.js) |
| list external access rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_external_access_rules.js) |
| list external addresses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_external_addresses.js) |
| list hcx activation keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_hcx_activation_keys.js) |
| list logging servers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_logging_servers.js) |
| list management dns zone bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_management_dns_zone_bindings.js) |
| list network peerings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_network_peerings.js) |
| list network policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_network_policies.js) |
| list node types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_node_types.js) |
| list nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_nodes.js) |
| list peering routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_peering_routes.js) |
| list private clouds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_private_clouds.js) |
| list private connection peering routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_private_connection_peering_routes.js) |
| list private connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_private_connections.js) |
| list subnets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_subnets.js) |
| list vmware engine networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_vmware_engine_networks.js) |
| repair management dns zone binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.repair_management_dns_zone_binding.js) |
| reset nsx credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_nsx_credentials.js) |
| reset vcenter credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_vcenter_credentials.js) |
| revoke dns bind permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.revoke_dns_bind_permission.js) |
| show nsx credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_nsx_credentials.js) |
| show vcenter credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_vcenter_credentials.js) |
| undelete private cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.undelete_private_cloud.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_cluster.js) |
| update dns forwarding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_dns_forwarding.js) |
| update external access rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_external_access_rule.js) |
| update external address | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_external_address.js) |
| update logging server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_logging_server.js) |
| update management dns zone binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_management_dns_zone_binding.js) |
| update network peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_network_peering.js) |
| update network policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_network_policy.js) |
| update private cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_private_cloud.js) |
| update private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_private_connection.js) |
| update subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_subnet.js) |
| update vmware engine network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_vmware_engine_network.js) |


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
For example, `npm install @google-cloud/vmwareengine@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vmwareengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine
