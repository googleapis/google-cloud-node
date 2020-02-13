[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Asset Inventory: Node.js Client](https://github.com/googleapis/nodejs-asset)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/asset.svg)](https://www.npmjs.org/package/@google-cloud/asset)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-asset/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-asset)




Cloud Asset API client for Node.js


* [Cloud Asset Inventory Node.js Client API Reference][client-docs]
* [Cloud Asset Inventory Documentation][product-docs]
* [github.com/googleapis/nodejs-asset](https://github.com/googleapis/nodejs-asset)

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
1.  [Enable the Cloud Asset Inventory API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/asset
```


### Using the client library

```javascript
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();

  async function quickstart() {
    const projectId = await client.getProjectId();
    const projectResource = `projects/${projectId}`;
    // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR_BUCKET_NAME].
    // const assetNames = ['ASSET_NAME1', 'ASSET_NAME2', ...];

    const request = {
      parent: projectResource,
      assetNames: assetNames.split(','),
      contentType: 'RESOURCE',
      readTimeWindow: {
        startTime: {
          seconds: Math.floor(new Date().getTime() / 1000),
        },
      },
    };

    // Handle the operation using the promise pattern.
    const result = await client.batchGetAssetsHistory(request);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-asset/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Feed | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/createFeed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/createFeed.js,samples/README.md) |
| Delete Feed | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/deleteFeed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/deleteFeed.js,samples/README.md) |
| Export Assets | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/exportAssets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/exportAssets.js,samples/README.md) |
| Get Batch Asset History | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/getBatchAssetHistory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/getBatchAssetHistory.js,samples/README.md) |
| Get Feed | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/getFeed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/getFeed.js,samples/README.md) |
| List Feeds | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/listFeeds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/listFeeds.js,samples/README.md) |
| Asset History Quickstart | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Update Feed | [source code](https://github.com/googleapis/nodejs-asset/blob/master/samples/updateFeed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/updateFeed.js,samples/README.md) |



The [Cloud Asset Inventory Node.js Client API Reference][client-docs] documentation
also contains samples.

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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-asset/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-asset/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/asset/latest
[product-docs]: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudasset.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
