[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Datastore: Node.js Client](https://github.com/googleapis/nodejs-datastore)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datastore.svg)](https://www.npmjs.org/package/@google-cloud/datastore)




Cloud Datastore Client Library for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-datastore/blob/main/CHANGELOG.md).

* [Google Cloud Datastore Node.js Client API Reference][client-docs]
* [Google Cloud Datastore Documentation][product-docs]
* [github.com/googleapis/nodejs-datastore](https://github.com/googleapis/nodejs-datastore)

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
1.  [Enable the Google Cloud Datastore API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/datastore
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {Datastore} = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore();

async function quickstart() {
  // The kind for the new entity
  const kind = 'Task';

  // The name/ID for the new entity
  const name = 'sampletask1';

  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key([kind, name]);

  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      description: 'Buy milk',
    },
  };

  // Saves the entity
  await datastore.save(task);
  console.log(`Saved ${task.key.name}: ${task.data.description}`);
}
quickstart();

```
### Troubleshooting
#### Emulator returning `DEADLINE_EXCEEDED`, `java.lang.OutOfMemoryError`
*Reference Issue: [#95](https://github.com/googleapis/nodejs-datastore/issues/95)*

When using the emulator, you may experience errors such as "DEADLINE_EXCEEDED" within your application, corresponding to an error in the emulator: "java.lang.OutOfMemoryError". These errors are unique to the emulator environment and will not persist in production.

A workaround is available, provided by [@ohmpatel1997](https://github.com/ohmpatel1997) [here](https://github.com/googleapis/nodejs-datastore/issues/95#issuecomment-554387312).


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-datastore/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Concepts | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/concepts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/concepts.js,samples/README.md) |
| Error | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/error.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/error.js,samples/README.md) |
| Export | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/export.js,samples/README.md) |
| Import | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/import.js,samples/README.md) |
| Indexes.get | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/indexes.get.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/indexes.get.js,samples/README.md) |
| Indexes.list | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/indexes.list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/indexes.list.js,samples/README.md) |
| Create a union between two filters | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/queryFilterOr.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/queryFilterOr.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Add Task | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/tasks.add.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.add.js,samples/README.md) |
| Delete Task | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/tasks.delete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.delete.js,samples/README.md) |
| Legacy Samples | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.js,samples/README.md) |
| List Tasks | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/tasks.list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.list.js,samples/README.md) |
| Update Task | [source code](https://github.com/googleapis/nodejs-datastore/blob/main/samples/tasks.markdone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastore&page=editor&open_in_editor=samples/tasks.markdone.js,samples/README.md) |



The [Google Cloud Datastore Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/datastore@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-datastore/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-datastore/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datastore/latest
[product-docs]: https://cloud.google.com/datastore/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datastore.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
