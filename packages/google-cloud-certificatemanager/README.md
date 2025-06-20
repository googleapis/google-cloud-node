[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Certificate Manager: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-certificatemanager)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/certificate-manager.svg)](https://www.npmjs.org/package/@google-cloud/certificate-manager)




certificatemanager client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-certificatemanager/CHANGELOG.md).

* [Certificate Manager Node.js Client API Reference][client-docs]
* [Certificate Manager Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-certificatemanager](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-certificatemanager)

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
1.  [Enable the Certificate Manager API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/certificate-manager
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The project and location from which the certificate should be listed,
 *  specified in the format `projects/* /locations/*`.
 */
// const parent = 'abc123'
/**
 *  Maximum number of certificates to return per call.
 */
// const pageSize = 1234
/**
 *  The value returned by the last `ListCertificatesResponse`. Indicates that
 *  this is a continuation of a prior `ListCertificates` call, and that the
 *  system should return the next page of data.
 */
// const pageToken = 'abc123'
/**
 *  Filter expression to restrict the Certificates returned.
 */
// const filter = 'abc123'
/**
 *  A list of Certificate field names used to specify the order of the returned
 *  results. The default sorting order is ascending. To specify descending
 *  order for a field, add a suffix " desc".
 */
// const orderBy = 'abc123'

// Imports the Certificatemanager library
const {CertificateManagerClient} =
  require('@google-cloud/certificate-manager').v1;

// Instantiates a client
const certificatemanagerClient = new CertificateManagerClient();

async function callListCertificates() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await certificatemanagerClient.listCertificatesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListCertificates();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-certificatemanager/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Certificate_manager.create_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.create_certificate_issuance_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_issuance_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_issuance_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.create_certificate_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.create_certificate_map_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map_entry.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.create_dns_authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_dns_authorization.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_dns_authorization.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.create_trust_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_trust_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_trust_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_certificate_issuance_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_issuance_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_issuance_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_certificate_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_certificate_map_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map_entry.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_dns_authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_dns_authorization.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_dns_authorization.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.delete_trust_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_trust_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_trust_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_certificate_issuance_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_issuance_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_issuance_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_certificate_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_certificate_map_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map_entry.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_dns_authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_dns_authorization.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_dns_authorization.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.get_trust_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_trust_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_trust_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_certificate_issuance_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_issuance_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_issuance_configs.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_certificate_map_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_map_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_map_entries.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_certificate_maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_maps.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_maps.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificates.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_dns_authorizations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_dns_authorizations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_dns_authorizations.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.list_trust_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_trust_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_trust_configs.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.update_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.update_certificate_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.update_certificate_map_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map_entry.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.update_dns_authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_dns_authorization.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_dns_authorization.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Certificate_manager.update_trust_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_trust_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_trust_config.js,packages/google-cloud-certificatemanager/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-certificatemanager/samples/quickstart.js,packages/google-cloud-certificatemanager/samples/README.md) |



The [Certificate Manager Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/certificate-manager@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/certificate-manager/latest
[product-docs]: https://cloud.google.com/certificate-manager/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=certificatemanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
