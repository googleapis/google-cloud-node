[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Tasks API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/tasks.svg)](https://www.npmjs.org/package/@google-cloud/tasks)

Cloud Tasks API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Tasks API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/tasks/latest)


Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Tasks API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/tasks
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_queue.js) |
| create task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_task.js) |
| delete queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_queue.js) |
| delete task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_task.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_iam_policy.js) |
| get queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_queue.js) |
| get task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_task.js) |
| list queues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_queues.js) |
| list tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_tasks.js) |
| pause queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.pause_queue.js) |
| purge queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.purge_queue.js) |
| resume queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.resume_queue.js) |
| run task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.run_task.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.test_iam_permissions.js) |
| update queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.update_queue.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2/snippet_metadata_google.cloud.tasks.v2.json) |
| acknowledge task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.acknowledge_task.js) |
| cancel lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.cancel_lease.js) |
| create queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_queue.js) |
| create task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_task.js) |
| delete queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_queue.js) |
| delete task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_task.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_iam_policy.js) |
| get queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_queue.js) |
| get task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_task.js) |
| lease tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.lease_tasks.js) |
| list queues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_queues.js) |
| list tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_tasks.js) |
| pause queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.pause_queue.js) |
| purge queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.purge_queue.js) |
| renew lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.renew_lease.js) |
| resume queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.resume_queue.js) |
| run task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.run_task.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.test_iam_permissions.js) |
| update queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.update_queue.js) |
| upload queue yaml | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.upload_queue_yaml.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta2/snippet_metadata_google.cloud.tasks.v2beta2.json) |
| create queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_queue.js) |
| create task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_task.js) |
| delete queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_queue.js) |
| delete task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_task.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_iam_policy.js) |
| get queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_queue.js) |
| get task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_task.js) |
| list queues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_queues.js) |
| list tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_tasks.js) |
| pause queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.pause_queue.js) |
| purge queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.purge_queue.js) |
| resume queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.resume_queue.js) |
| run task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.run_task.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.test_iam_permissions.js) |
| update queue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.update_queue.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples/generated/v2beta3/snippet_metadata_google.cloud.tasks.v2beta3.json) |


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
For example, `npm install @google-cloud/tasks@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudtasks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tasks
