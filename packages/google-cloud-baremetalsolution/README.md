[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Bare Metal Solution API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/bare-metal-solution.svg)](https://www.npmjs.org/package/@google-cloud/bare-metal-solution)

Bare Metal Solution API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Bare Metal Solution API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/baremetalsolution/latest)


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
1.  [Enable the Bare Metal Solution API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/bare-metal-solution
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create nfs share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_nfs_share.js) |
| create provisioning config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_provisioning_config.js) |
| create s s h key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_s_s_h_key.js) |
| create volume snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_volume_snapshot.js) |
| delete nfs share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_nfs_share.js) |
| delete s s h key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_s_s_h_key.js) |
| delete volume snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_volume_snapshot.js) |
| detach lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.detach_lun.js) |
| disable interactive serial console | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.disable_interactive_serial_console.js) |
| enable interactive serial console | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.enable_interactive_serial_console.js) |
| evict lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_lun.js) |
| evict volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_volume.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_instance.js) |
| get lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_lun.js) |
| get network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_network.js) |
| get nfs share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_nfs_share.js) |
| get provisioning config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_provisioning_config.js) |
| get volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume.js) |
| get volume snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume_snapshot.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_instances.js) |
| list luns | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_luns.js) |
| list network usage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_network_usage.js) |
| list networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_networks.js) |
| list nfs shares | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_nfs_shares.js) |
| list o s images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_o_s_images.js) |
| list provisioning quotas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_provisioning_quotas.js) |
| list s s h keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_s_s_h_keys.js) |
| list volume snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volume_snapshots.js) |
| list volumes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volumes.js) |
| rename instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_instance.js) |
| rename network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_network.js) |
| rename nfs share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_nfs_share.js) |
| rename volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_volume.js) |
| reset instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.reset_instance.js) |
| resize volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.resize_volume.js) |
| restore volume snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.restore_volume_snapshot.js) |
| start instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.start_instance.js) |
| stop instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.stop_instance.js) |
| submit provisioning config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.submit_provisioning_config.js) |
| update instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_instance.js) |
| update network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_network.js) |
| update nfs share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_nfs_share.js) |
| update provisioning config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_provisioning_config.js) |
| update volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_volume.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/snippet_metadata_google.cloud.baremetalsolution.v2.json) |


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
For example, `npm install @google-cloud/bare-metal-solution@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=baremetalsolution.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution
