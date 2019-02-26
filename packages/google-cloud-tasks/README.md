[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Tasks: Node.js Client](https://github.com/googleapis/nodejs-tasks)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/tasks.svg)](https://www.npmjs.org/package/@google-cloud/tasks)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-tasks/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-tasks)

> Node.js idiomatic client for [Cloud Tasks][product-docs].

Manages the execution of large numbers of distributed requests.


* [Cloud Tasks Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-tasks](https://github.com/googleapis/nodejs-tasks)
* [Cloud Tasks Documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Using the client library

1.  [Select or create a Cloud Platform project][projects].

1.  [Enable billing for your project][billing].

1.  [Enable the Google Cloud Tasks API][enable_api].

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

1. Install the client library:

        npm install --save @google-cloud/tasks

1. Try an example:

```js
// Imports the Google Cloud client library
const {CloudTasksClient} = require('@google-cloud/tasks');

async function quickstart(
  projectId = 'your-project-id', // Your Google Cloud Platform project ID
  queue = 'my-appengine-queue', // Name of the Queue to create
  location = 'us-central-1' // The region in which to create the queue
) {
  // Instantiates a client
  const client = new CloudTasksClient();

  // Send create queue request.
  const [response] = await client.createQueue({
    // The fully qualified path to the location where the queue is created
    parent: client.locationPath(projectId, location),
    queue: {
      // The fully qualified path to the queue
      name: client.queuePath(projectId, location, queue),
      appEngineHttpQueue: {
        appEngineRoutingOverride: {
          // The App Engine service that will receive the tasks.
          service: 'default',
        },
      },
    },
  });
  console.log(`Created queue ${response.name}`);
}
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-tasks/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Queues | [source code](https://github.com/googleapis/nodejs-tasks/blob/master/samples/createQueue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createQueue.js,samples/README.md) |
| Tasks | [source code](https://github.com/googleapis/nodejs-tasks/blob/master/samples/createTask.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createTask.js,samples/README.md) |

The [Cloud Tasks Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-tasks/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-tasks/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/tasks/latest/
[product-docs]: https://cloud.google.com/tasks/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=tasks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
