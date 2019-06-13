[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Dataproc: Node.js Client](https://github.com/googleapis/nodejs-dataproc)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataproc.svg)](https://www.npmjs.org/package/@google-cloud/dataproc)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dataproc/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dataproc)




Google Cloud Dataproc API client for Node.js


* [Google Cloud Dataproc Node.js Client API Reference][client-docs]
* [Google Cloud Dataproc Documentation][product-docs]
* [github.com/googleapis/nodejs-dataproc](https://github.com/googleapis/nodejs-dataproc)

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
1.  [Enable the Google Cloud Dataproc API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataproc
```


### Using the client library

```javascript
const dataproc = require('@google-cloud/dataproc');
const client = new dataproc.v1.ClusterControllerClient();

async function quickstart() {
  const projectId = await client.getProjectId();
  const request = {
    region: 'global',
    projectId,
  };
  const [resources] = await client.listClusters(request);
  console.log('Total resources:', resources.length);
  for (const resource of resources) {
    console.log(resource);
  }

  let nextRequest = request;
  // Or obtain the paged response.
  const options = {autoPaginate: false};
  do {
    const responses = await client.listClusters(nextRequest, options);
    // The actual resources in a response.
    const resources = responses[0];
    // The next request if the response shows that there are more responses.
    nextRequest = responses[1];
    // The actual response object, if necessary.
    // const rawResponse = responses[2];
    for (const resource of resources) {
      console.log(resource);
    }
  } while (nextRequest);

  client.listClustersStream(request).on('data', element => {
    console.log(element);
  });
}

quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dataproc/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dataproc/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dataproc&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Dataproc Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.



More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dataproc/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dataproc/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dataproc/latest
[product-docs]: https://cloud.google.com/dataproc
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataproc.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started