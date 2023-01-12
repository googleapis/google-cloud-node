[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [GKE Hub: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/gke-hub.svg)](https://www.npmjs.org/package/@google-cloud/gke-hub)




Gkehub client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkehub/CHANGELOG.md).

* [GKE Hub Node.js Client API Reference][client-docs]
* [GKE Hub Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-gkehub](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkehub)

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
1.  [Enable the GKE Hub API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/gke-hub
```


### Using the client library

```javascript

// Imports the Google Cloud client library
const {GkeHubClient} = require('@google-cloud/gke-hub');

// TODO(developer): replace with your preferred values.
// const projectId = 'my-project'
// const location = 'global'

// Creates a client
const client = new GkeHubClient();

async function listMemberships() {
  const memberships = await client.listMemberships({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(memberships);
}
listMemberships();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Gke_hub.create_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_feature.js,samples/README.md) |
| Gke_hub.create_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_membership.js,samples/README.md) |
| Gke_hub.delete_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_feature.js,samples/README.md) |
| Gke_hub.delete_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_membership.js,samples/README.md) |
| Gke_hub.generate_connect_manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.generate_connect_manifest.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.generate_connect_manifest.js,samples/README.md) |
| Gke_hub.get_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_feature.js,samples/README.md) |
| Gke_hub.get_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_membership.js,samples/README.md) |
| Gke_hub.list_features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_features.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_features.js,samples/README.md) |
| Gke_hub.list_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_memberships.js,samples/README.md) |
| Gke_hub.update_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_feature.js,samples/README.md) |
| Gke_hub.update_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_membership.js,samples/README.md) |
| Gke_hub.create_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.create_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.create_feature.js,samples/README.md) |
| Gke_hub.delete_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.delete_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.delete_feature.js,samples/README.md) |
| Gke_hub.get_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.get_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.get_feature.js,samples/README.md) |
| Gke_hub.list_features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.list_features.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.list_features.js,samples/README.md) |
| Gke_hub.update_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.update_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.update_feature.js,samples/README.md) |
| Gke_hub.create_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.create_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.create_membership.js,samples/README.md) |
| Gke_hub.delete_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.delete_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.delete_membership.js,samples/README.md) |
| Gke_hub.generate_connect_manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.generate_connect_manifest.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.generate_connect_manifest.js,samples/README.md) |
| Gke_hub.get_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.get_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.get_membership.js,samples/README.md) |
| Gke_hub.initialize_hub | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.initialize_hub.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.initialize_hub.js,samples/README.md) |
| Gke_hub.list_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.list_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.list_memberships.js,samples/README.md) |
| Gke_hub.update_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.update_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1alpha2/gke_hub.update_membership.js,samples/README.md) |
| Gke_hub.create_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.create_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.create_feature.js,samples/README.md) |
| Gke_hub.delete_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.delete_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.delete_feature.js,samples/README.md) |
| Gke_hub.get_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.get_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.get_feature.js,samples/README.md) |
| Gke_hub.list_features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.list_features.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.list_features.js,samples/README.md) |
| Gke_hub.update_feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.update_feature.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.update_feature.js,samples/README.md) |
| Gke_hub_membership_service.create_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.create_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.create_membership.js,samples/README.md) |
| Gke_hub_membership_service.delete_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.delete_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.delete_membership.js,samples/README.md) |
| Gke_hub_membership_service.generate_connect_manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_connect_manifest.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_connect_manifest.js,samples/README.md) |
| Gke_hub_membership_service.generate_exclusivity_manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_exclusivity_manifest.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_exclusivity_manifest.js,samples/README.md) |
| Gke_hub_membership_service.get_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.get_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.get_membership.js,samples/README.md) |
| Gke_hub_membership_service.list_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.list_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.list_memberships.js,samples/README.md) |
| Gke_hub_membership_service.update_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.update_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.update_membership.js,samples/README.md) |
| Gke_hub_membership_service.validate_exclusivity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.validate_exclusivity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.validate_exclusivity.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkehub/samples/test/quickstart.js,samples/README.md) |



The [GKE Hub Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google-cloud/gke-hub@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/gke-hub/latest
[product-docs]: https://cloud.google.com/anthos/gke
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gkehub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
