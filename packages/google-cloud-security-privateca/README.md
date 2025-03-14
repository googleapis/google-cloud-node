[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Certificate Authority Service: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-security-privateca)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/security-private-ca.svg)](https://www.npmjs.org/package/@google-cloud/security-private-ca)




Privateca client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-security-privateca/CHANGELOG.md).

* [Certificate Authority Service Node.js Client API Reference][client-docs]
* [Certificate Authority Service Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-security-privateca](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-security-privateca)

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
1.  [Enable the Certificate Authority Service API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/security-private-ca
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {
  CertificateAuthorityServiceClient,
} = require('@google-cloud/security-private-ca');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new CertificateAuthorityServiceClient();

async function listCertificates() {
  const res = await client.listCertificates({
    parent: `projects/${projectId}/locations/${location}/caPools/${name}`,
  });
  return res;
}

listCertificates();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-security-privateca/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Certificate_authority_service.activate_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.activate_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.activate_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_ca_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_ca_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_ca_pool.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_certificate_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_template.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.delete_ca_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_ca_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_ca_pool.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.delete_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.delete_certificate_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_template.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.disable_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.disable_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.disable_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.enable_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.enable_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.enable_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.fetch_ca_certs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_ca_certs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_ca_certs.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.fetch_certificate_authority_csr | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_certificate_authority_csr.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_certificate_authority_csr.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_ca_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_ca_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_ca_pool.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate_revocation_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_revocation_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_revocation_list.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_template.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_ca_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_ca_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_ca_pools.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificate_authorities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_authorities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_authorities.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificate_revocation_lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_revocation_lists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_revocation_lists.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificate_templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_templates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_templates.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificates.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.revoke_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.revoke_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.revoke_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.undelete_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.undelete_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.undelete_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_ca_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_ca_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_ca_pool.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate_revocation_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_revocation_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_revocation_list.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_template.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.activate_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.activate_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.activate_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.create_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.disable_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.disable_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.disable_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.enable_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.enable_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.enable_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.fetch_certificate_authority_csr | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.fetch_certificate_authority_csr.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.fetch_certificate_authority_csr.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_certificate_revocation_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_revocation_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_revocation_list.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.get_reusable_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_reusable_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_reusable_config.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificate_authorities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_authorities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_authorities.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificate_revocation_lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_revocation_lists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_revocation_lists.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificates.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.list_reusable_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_reusable_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_reusable_configs.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.restore_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.restore_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.restore_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.revoke_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.revoke_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.revoke_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.schedule_delete_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.schedule_delete_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.schedule_delete_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate_authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_authority.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_authority.js,packages/google-cloud-security-privateca/samples/README.md) |
| Certificate_authority_service.update_certificate_revocation_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_revocation_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_revocation_list.js,packages/google-cloud-security-privateca/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-security-privateca/samples/quickstart.js,packages/google-cloud-security-privateca/samples/README.md) |



The [Certificate Authority Service Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/security-private-ca@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/security-private-ca/latest
[product-docs]: https://cloud.google.com/certificate-authority-service
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=privateca.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
