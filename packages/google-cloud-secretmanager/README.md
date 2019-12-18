[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Secret Manager: Node.js Client](https://github.com/googleapis/nodejs-secret-manager)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/secret-manager.svg)](https://www.npmjs.org/package/@google-cloud/secret-manager)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-secret-manager/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-secret-manager)




Secrets client for Node.js


* [Secret Manager Node.js Client API Reference][client-docs]
* [Secret Manager Documentation][product-docs]
* [github.com/googleapis/nodejs-secret-manager](https://github.com/googleapis/nodejs-secret-manager)

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
1.  [Enable the Secret Manager API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/secret-manager
```


### Using the client library

```javascript
  // Import the Secret Manager client and instantiate it:
  const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
  const client = new SecretManagerServiceClient();

  // const project = 'YOUR_PROJECT_NAME', // Project to manage secrets for.
  // const secretId = 'foo', // Identifier for secret.
  // const secretStringPayload = 'hello world!', // A secret string.

  async function setAndAccessSecret() {
    // Create the secret, ignoring errors related to the secret
    // already existing:
    try {
      await client.createSecret({
        parent: `projects/${project}`,
        secret: {
          name: secretId,
          replication: {
            automatic: {},
          },
        },
        secretId,
      });
    } catch (err) {
      if (err.message.includes('ALREADY_EXISTS')) {
        console.info(`secret '${secretId}' already exists`);
      } else {
        throw err; // Unexpected error.
      }
    }

    // Update the latest version of the secret to the value provided:
    await client.addSecretVersion({
      parent: `projects/${project}/secrets/${secretId}`,
      payload: {
        data: Buffer.from(secretStringPayload, 'utf8'),
      },
    });
    console.info(
      `set current version of '${secretId}' to '${secretStringPayload}'`
    );

    // Fetch the latest version of the secret:
    const [secret] = await client.accessSecretVersion({
      name: `projects/${project}/secrets/${secretId}/versions/latest`,
    });
    const secretString = secret.payload.data.toString('utf8');
    console.info(`get latest '${secretId}' with value '${secretString}'`);
  }
  setAndAccessSecret();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-secret-manager/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-secret-manager/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-secret-manager&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Secret Manager Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-secret-manager/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-secret-manager/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/secretmanager/latest/index.html
[product-docs]: https://cloud.google.com/secret-manager/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=secretmanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
