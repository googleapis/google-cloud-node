[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Key Management Service: Node.js Client](https://github.com/googleapis/nodejs-kms)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
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
async function quickstart(
  projectId = 'your-project-id' // Your GCP projectId
) {
  // Imports the @google-cloud/kms client library
  const kms = require('@google-cloud/kms');

  // Instantiates an authorized client
  const client = new kms.KeyManagementServiceClient();

  // Lists keys in the "global" location.
  const locationId = 'global';

  // Lists key rings
  const parent = client.locationPath(projectId, locationId);
  const [keyRings] = await client.listKeyRings({parent});

  // Display the results
  if (keyRings.length) {
    console.log('Key rings:');
    keyRings.forEach(keyRing => console.log(keyRing.name));
  } else {
    console.log(`No key rings found.`);
  }
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-kms/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Add Member To Crypto Key Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/addMemberToCryptoKeyPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/addMemberToCryptoKeyPolicy.js,samples/README.md) |
| Add Member To Key Ring Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/addMemberToKeyRingPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/addMemberToKeyRingPolicy.js,samples/README.md) |
| Create Crypto Key | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createCryptoKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createCryptoKey.js,samples/README.md) |
| Create Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createCryptoKeyVersion.js,samples/README.md) |
| Create Keyring | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/createKeyring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/createKeyring.js,samples/README.md) |
| Decrypt | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/decrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/decrypt.js,samples/README.md) |
| Destroy Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/destroyCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/destroyCryptoKeyVersion.js,samples/README.md) |
| Disable Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/disableCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/disableCryptoKeyVersion.js,samples/README.md) |
| Enable Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/enableCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/enableCryptoKeyVersion.js,samples/README.md) |
| Encrypt | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/encrypt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/encrypt.js,samples/README.md) |
| Get Crypto Key | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getCryptoKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getCryptoKey.js,samples/README.md) |
| Get Crypto Key Iam Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getCryptoKeyIamPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getCryptoKeyIamPolicy.js,samples/README.md) |
| Get Keyring | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getKeyring.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getKeyring.js,samples/README.md) |
| Get Keyring Iam Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/getKeyringIamPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/getKeyringIamPolicy.js,samples/README.md) |
| List Crypto Key Versions | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/listCryptoKeyVersions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/listCryptoKeyVersions.js,samples/README.md) |
| List Crypto Keys | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/listCryptoKeys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/listCryptoKeys.js,samples/README.md) |
| List Keyrings | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/listKeyrings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/listKeyrings.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Remove Member Crypto Key Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/removeMemberCryptoKeyPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/removeMemberCryptoKeyPolicy.js,samples/README.md) |
| Remove Member From Key Ring Policy | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/removeMemberFromKeyRingPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/removeMemberFromKeyRingPolicy.js,samples/README.md) |
| Restore Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/restoreCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/restoreCryptoKeyVersion.js,samples/README.md) |
| Set Primary Crypto Key Version | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/setPrimaryCryptoKeyVersion.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/setPrimaryCryptoKeyVersion.js,samples/README.md) |



The [Google Cloud Key Management Service Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-kms/blob/master/CONTRIBUTING.md).

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
