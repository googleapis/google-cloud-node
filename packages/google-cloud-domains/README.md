[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Domains: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-domains)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/domains.svg)](https://www.npmjs.org/package/@google-cloud/domains)




Domains client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-domains/CHANGELOG.md).

* [Cloud Domains Node.js Client API Reference][client-docs]
* [Cloud Domains Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-domains](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-domains)

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
1.  [Enable the Cloud Domains API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/domains
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {DomainsClient} = require('@google-cloud/domains');

// TODO(developer): replace with your preferred values.
// const projectId = 'my-project'
// const location = 'my-location'

// Creates a client
const client = new DomainsClient();

//TODO(library generator): write the actual function you will be testing
async function listRegistrations() {
  const [registrations] = await client.listRegistrations({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(registrations);
}
listRegistrations();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-domains/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Domains.configure_contact_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.configure_contact_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.configure_contact_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_dns_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.configure_dns_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.configure_dns_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_management_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.configure_management_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.configure_management_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.delete_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.delete_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.delete_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.export_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.export_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.export_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.get_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.get_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.get_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.list_registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.list_registrations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.list_registrations.js,packages/google-cloud-domains/samples/README.md) |
| Domains.register_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.register_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.register_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.reset_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.reset_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.reset_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.retrieve_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.retrieve_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_register_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.retrieve_register_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.retrieve_register_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_transfer_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.retrieve_transfer_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.retrieve_transfer_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.search_domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.search_domains.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.search_domains.js,packages/google-cloud-domains/samples/README.md) |
| Domains.transfer_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.transfer_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.transfer_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.update_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1/domains.update_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1/domains.update_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_contact_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_contact_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_contact_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_dns_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_dns_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_dns_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_management_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_management_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.configure_management_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.delete_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.delete_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.delete_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.export_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.export_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.export_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.get_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.get_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.get_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.list_registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.list_registrations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.list_registrations.js,packages/google-cloud-domains/samples/README.md) |
| Domains.register_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.register_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.register_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.reset_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.reset_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.reset_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_register_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_register_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_register_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_transfer_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_transfer_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.retrieve_transfer_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.search_domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.search_domains.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.search_domains.js,packages/google-cloud-domains/samples/README.md) |
| Domains.transfer_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.transfer_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.transfer_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.update_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1alpha2/domains.update_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1alpha2/domains.update_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_contact_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_contact_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_contact_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_dns_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_dns_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_dns_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.configure_management_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_management_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.configure_management_settings.js,packages/google-cloud-domains/samples/README.md) |
| Domains.delete_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.delete_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.delete_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.export_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.export_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.export_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.get_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.get_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.get_registration.js,packages/google-cloud-domains/samples/README.md) |
| Domains.list_registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.list_registrations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.list_registrations.js,packages/google-cloud-domains/samples/README.md) |
| Domains.register_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.register_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.register_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.reset_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.reset_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.reset_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_authorization_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_authorization_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_authorization_code.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_register_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_register_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_register_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.retrieve_transfer_parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_transfer_parameters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.retrieve_transfer_parameters.js,packages/google-cloud-domains/samples/README.md) |
| Domains.search_domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.search_domains.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.search_domains.js,packages/google-cloud-domains/samples/README.md) |
| Domains.transfer_domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.transfer_domain.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.transfer_domain.js,packages/google-cloud-domains/samples/README.md) |
| Domains.update_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/generated/v1beta1/domains.update_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/generated/v1beta1/domains.update_registration.js,packages/google-cloud-domains/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-domains/samples/quickstart.js,packages/google-cloud-domains/samples/README.md) |



The [Cloud Domains Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/domains@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/domains/latest
[product-docs]: https://cloud.google.com/domains/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=domains.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
