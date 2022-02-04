[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Tasks: Node.js Client](https://github.com/googleapis/nodejs-tasks)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/tasks.svg)](https://www.npmjs.org/package/@google-cloud/tasks)




Cloud Tasks API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-tasks/blob/main/CHANGELOG.md).

* [Cloud Tasks Node.js Client API Reference][client-docs]
* [Cloud Tasks Documentation][product-docs]
* [github.com/googleapis/nodejs-tasks](https://github.com/googleapis/nodejs-tasks)

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
1.  [Enable the Cloud Tasks API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/tasks
```


### Using the client library

```javascript
// Imports the Google Cloud Tasks library.
const {CloudTasksClient} = require('@google-cloud/tasks');

// Instantiates a client.
const client = new CloudTasksClient();

async function quickstart() {
  // TODO(developer): Uncomment these lines and replace with your values.
  // const project = 'my-project-id';
  // const queue = 'my-appengine-queue';
  // const location = 'us-central1';
  // const payload = 'hello';

  // Construct the fully qualified queue name.
  const parent = client.queuePath(project, location, queue);

  const task = {
    appEngineHttpRequest: {
      httpMethod: 'POST',
      relativeUri: '/log_payload',
    },
  };

  if (payload) {
    task.appEngineHttpRequest.body = Buffer.from(payload).toString('base64');
  }

  if (inSeconds) {
    task.scheduleTime = {
      seconds: inSeconds + Date.now() / 1000,
    };
  }

  const request = {
    parent: parent,
    task: task,
  };

  console.log('Sending task:');
  console.log(task);
  // Send create task request.
  const [response] = await client.createTask(request);
  const name = response.name;
  console.log(`Created task ${name}`);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-tasks/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud Tasks Create HTTP Target | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createHttpTask.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createHttpTask.js,samples/README.md) |
| Cloud Tasks Create HTTP Target with Token | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createHttpTaskWithToken.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createHttpTaskWithToken.js,samples/README.md) |
| Create Queue | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createQueue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createQueue.js,samples/README.md) |
| Cloud Tasks Create App Engine Target | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createTask.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createTask.js,samples/README.md) |
| Delete Queue | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/deleteQueue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/deleteQueue.js,samples/README.md) |
| List Queues | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/listQueues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/listQueues.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Server | [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/server.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/server.js,samples/README.md) |



The [Cloud Tasks Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/tasks@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-tasks/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-tasks/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/tasks/latest
[product-docs]: https://cloud.google.com/tasks/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=tasks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
