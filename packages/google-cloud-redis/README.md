[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Redis: Node.js Client](https://github.com/googleapis/nodejs-redis)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/redis.svg)](https://www.npmjs.org/package/@google-cloud/redis)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-redis/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-redis)




Google Cloud Memorystore for Redis API client for Node.js


* [Cloud Redis Node.js Client API Reference][client-docs]
* [Cloud Redis Documentation][product-docs]
* [github.com/googleapis/nodejs-redis](https://github.com/googleapis/nodejs-redis)

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
1.  [Enable the Cloud Redis API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/redis
```


### Using the client library

```javascript
/**
 * List instances in a given location.
 * @param {string} project.
 * @param {string} location, e.g., us-east-1.
 */
async function main(projectId, location) {
  const {CloudRedisClient} = require('@google-cloud/redis');
  const client = new CloudRedisClient();
  const formattedParent = client.locationPath(projectId, location);
  const request = {
    parent: formattedParent,
  };
  const resp = (await client.listInstances(request))[0];
  console.info(resp);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-redis/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-redis/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-redis&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Cloud Redis Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-redis/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-redis/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/redis/latest
[product-docs]: https://cloud.google.com/memorystore/docs/redis/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=redis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
