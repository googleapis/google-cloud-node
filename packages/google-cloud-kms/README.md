[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Key Management Service: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/kms.svg)](https://www.npmjs.org/package/@google-cloud/kms)




Cloud Key Management Service client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/blob/main/CHANGELOG.md).

* [Cloud Key Management Service Node.js Client API Reference][client-docs]
* [Cloud Key Management Service Documentation][product-docs]
* [github.com/googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node)

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
1.  [Enable the Cloud Key Management Service API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/kms
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
 *  Required. The resource name of the
 *  CryptoKey google.cloud.kms.v1.CryptoKey  to list, in the format
 *  `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
 */
// const parent = 'abc123'
/**
 *  Optional. Optional limit on the number of
 *  CryptoKeyVersions google.cloud.kms.v1.CryptoKeyVersion  to include in the
 *  response. Further CryptoKeyVersions google.cloud.kms.v1.CryptoKeyVersion 
 *  can subsequently be obtained by including the
 *  ListCryptoKeyVersionsResponse.next_page_token google.cloud.kms.v1.ListCryptoKeyVersionsResponse.next_page_token 
 *  in a subsequent request. If unspecified, the server will pick an
 *  appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. Optional pagination token, returned earlier via
 *  ListCryptoKeyVersionsResponse.next_page_token google.cloud.kms.v1.ListCryptoKeyVersionsResponse.next_page_token.
 */
// const pageToken = 'abc123'
/**
 *  The fields to include in the response.
 */
// const view = {}
/**
 *  Optional. Only include resources that match the filter in the response. For
 *  more information, see
 *  Sorting and filtering list
 *  results (https://cloud.google.com/kms/docs/sorting-and-filtering).
 */
// const filter = 'abc123'
/**
 *  Optional. Specify how the results should be sorted. If not specified, the
 *  results will be sorted in the default order. For more information, see
 *  Sorting and filtering list
 *  results (https://cloud.google.com/kms/docs/sorting-and-filtering).
 */
// const orderBy = 'abc123'

// Imports the Kms library
const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

// Instantiates a client
const kmsClient = new KeyManagementServiceClient();

async function callListCryptoKeyVersions() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await kmsClient.listCryptoKeyVersionsAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListCryptoKeyVersions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Ekm_service.create_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js,samples/README.md) |
| Ekm_service.get_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js,samples/README.md) |
| Ekm_service.list_ekm_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js,samples/README.md) |
| Ekm_service.update_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js,samples/README.md) |
| Key_management_service.asymmetric_decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js,samples/README.md) |
| Key_management_service.asymmetric_sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js,samples/README.md) |
| Key_management_service.create_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js,samples/README.md) |
| Key_management_service.create_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js,samples/README.md) |
| Key_management_service.create_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js,samples/README.md) |
| Key_management_service.create_key_ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js,samples/README.md) |
| Key_management_service.decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js,samples/README.md) |
| Key_management_service.destroy_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js,samples/README.md) |
| Key_management_service.encrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js,samples/README.md) |
| Key_management_service.generate_random_bytes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js,samples/README.md) |
| Key_management_service.get_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js,samples/README.md) |
| Key_management_service.get_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js,samples/README.md) |
| Key_management_service.get_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js,samples/README.md) |
| Key_management_service.get_key_ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js,samples/README.md) |
| Key_management_service.get_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js,samples/README.md) |
| Key_management_service.import_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js,samples/README.md) |
| Key_management_service.list_crypto_key_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js,samples/README.md) |
| Key_management_service.list_crypto_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js,samples/README.md) |
| Key_management_service.list_import_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js,samples/README.md) |
| Key_management_service.list_key_rings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js,samples/README.md) |
| Key_management_service.mac_sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js,samples/README.md) |
| Key_management_service.mac_verify | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js,samples/README.md) |
| Key_management_service.restore_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js,samples/README.md) |
| Key_management_service.update_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js,samples/README.md) |
| Key_management_service.update_crypto_key_primary_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js,samples/README.md) |
| Key_management_service.update_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/test/quickstart.js,samples/README.md) |



The [Cloud Key Management Service Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/kms@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/kms/latest
[product-docs]: cloud.google.com/kms/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=google.cloud.kms.v1
[auth]: https://cloud.google.com/docs/authentication/getting-started
