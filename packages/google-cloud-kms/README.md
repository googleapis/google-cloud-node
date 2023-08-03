[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Key Management Service: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/kms.svg)](https://www.npmjs.org/package/@google-cloud/kms)




Google Cloud Key Management Service (KMS) API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms/CHANGELOG.md).

* [Google Cloud Key Management Service Node.js Client API Reference][client-docs]
* [Google Cloud Key Management Service Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-kms](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms)

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
1.  [Enable the Google Cloud Key Management Service API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/kms
```


### Using the client library

```javascript
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';

// Imports the Cloud KMS library
const {KeyManagementServiceClient} = require('@google-cloud/kms');

// Instantiates a client
const client = new KeyManagementServiceClient();

// Build the location name
const locationName = client.locationPath(projectId, locationId);

async function listKeyRings() {
  const [keyRings] = await client.listKeyRings({
    parent: locationName,
  });

  for (const keyRing of keyRings) {
    console.log(keyRing.name);
  }

  return keyRings;
}

return listKeyRings();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Ekm_service.create_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.get_ekm_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.get_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.list_ekm_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.update_ekm_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.update_ekm_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js,packages/google-cloud-kms/samples/README.md) |
| Ekm_service.verify_connectivity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.asymmetric_decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.asymmetric_sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.create_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.create_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.create_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.create_key_ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.destroy_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.encrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.generate_random_bytes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.get_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.get_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.get_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.get_key_ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.get_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.import_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.list_crypto_key_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.list_crypto_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.list_import_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.list_key_rings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.mac_sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.mac_verify | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.raw_decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.raw_encrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.restore_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.update_crypto_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.update_crypto_key_primary_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js,packages/google-cloud-kms/samples/README.md) |
| Key_management_service.update_crypto_key_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js,packages/google-cloud-kms/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms/samples/quickstart.js,packages/google-cloud-kms/samples/README.md) |



The [Google Cloud Key Management Service Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/kms@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/kms/latest
[product-docs]: https://cloud.google.com/kms
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=kms.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
