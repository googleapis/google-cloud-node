[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Key Management Service: Node.js Client](https://github.com/googleapis/nodejs-kms)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/kms.svg)](https://www.npmjs.org/package/@google-cloud/kms)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-kms/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-kms)




Google Cloud Key Management Service (KMS) API client for Node.js


* [Google Cloud Key Management Service Node.js Client API Reference][client-docs]
* [Google Cloud Key Management Service Documentation][product-docs]
* [github.com/googleapis/nodejs-kms](https://github.com/googleapis/nodejs-kms)

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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-kms/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Key Asymmetric Decrypt | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyAsymmetricDecrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyAsymmetricDecrypt.js,samples/README.md) |
| Create Key Asymmetric Sign | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyAsymmetricSign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyAsymmetricSign.js,samples/README.md) |
| Create Key Hsm | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyHsm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyHsm.js,samples/README.md) |
| Create Key Labels | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyLabels.js,samples/README.md) |
| Create Key Ring | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyRing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyRing.js,samples/README.md) |
| Create Key Rotation Schedule | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyRotationSchedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyRotationSchedule.js,samples/README.md) |
| Create Key Symmetric Encrypt Decrypt | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeySymmetricEncryptDecrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeySymmetricEncryptDecrypt.js,samples/README.md) |
| Create Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyVersion.js,samples/README.md) |
| Decrypt Asymmetric | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/decryptAsymmetric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/decryptAsymmetric.js,samples/README.md) |
| Decrypt Symmetric | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/decryptSymmetric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/decryptSymmetric.js,samples/README.md) |
| Destroy Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/destroyKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/destroyKeyVersion.js,samples/README.md) |
| Disable Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/disableKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/disableKeyVersion.js,samples/README.md) |
| Enable Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/enableKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/enableKeyVersion.js,samples/README.md) |
| Encrypt Asymmetric | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/encryptAsymmetric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/encryptAsymmetric.js,samples/README.md) |
| Encrypt Symmetric | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/encryptSymmetric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/encryptSymmetric.js,samples/README.md) |
| Get Key Labels | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getKeyLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getKeyLabels.js,samples/README.md) |
| Get Key Version Attestation | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getKeyVersionAttestation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getKeyVersionAttestation.js,samples/README.md) |
| Get Public Key | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getPublicKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getPublicKey.js,samples/README.md) |
| Iam Add Member | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/iamAddMember.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/iamAddMember.js,samples/README.md) |
| Iam Get Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/iamGetPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/iamGetPolicy.js,samples/README.md) |
| Iam Remove Member | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/iamRemoveMember.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/iamRemoveMember.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Restore Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/restoreKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/restoreKeyVersion.js,samples/README.md) |
| Sign Asymmetric | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/signAsymmetric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/signAsymmetric.js,samples/README.md) |
| Update Key Add Rotation | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/updateKeyAddRotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/updateKeyAddRotation.js,samples/README.md) |
| Update Key Remove Labels | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/updateKeyRemoveLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/updateKeyRemoveLabels.js,samples/README.md) |
| Update Key Remove Rotation | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/updateKeyRemoveRotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/updateKeyRemoveRotation.js,samples/README.md) |
| Update Key Set Primary | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/updateKeySetPrimary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/updateKeySetPrimary.js,samples/README.md) |
| Update Key Update Labels | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/updateKeyUpdateLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/updateKeyUpdateLabels.js,samples/README.md) |
| Verify Asymmetric Ec | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/verifyAsymmetricEc.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/verifyAsymmetricEc.js,samples/README.md) |
| Verify Asymmetric Rsa | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/verifyAsymmetricRsa.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/verifyAsymmetricRsa.js,samples/README.md) |



The [Google Cloud Key Management Service Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targetting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-kms/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-kms/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/kms/latest
[product-docs]: https://cloud.google.com/kms
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=kms.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
