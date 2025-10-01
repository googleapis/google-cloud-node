[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Developer Connect API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/developerconnect.svg)](https://www.npmjs.org/package/@google-cloud/developerconnect)

Developer Connect API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Developer Connect API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/developerconnect/latest)
* [Developer Connect API Documentation](https://cloud.google.com/developer-connect/docs/overview)

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
1.  [Enable the Developer Connect API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/developerconnect
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create account connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.create_account_connector.js) |
| create connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.create_connection.js) |
| create git repository link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.create_git_repository_link.js) |
| delete account connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.delete_account_connector.js) |
| delete connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.delete_connection.js) |
| delete git repository link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.delete_git_repository_link.js) |
| delete self | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.delete_self.js) |
| delete user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.delete_user.js) |
| fetch access token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_access_token.js) |
| fetch git hub installations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_git_hub_installations.js) |
| fetch git refs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_git_refs.js) |
| fetch linkable git repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_linkable_git_repositories.js) |
| fetch read token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_read_token.js) |
| fetch read write token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_read_write_token.js) |
| fetch self | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.fetch_self.js) |
| get account connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.get_account_connector.js) |
| get connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.get_connection.js) |
| get git repository link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.get_git_repository_link.js) |
| list account connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.list_account_connectors.js) |
| list connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.list_connections.js) |
| list git repository links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.list_git_repository_links.js) |
| list users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.list_users.js) |
| update account connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.update_account_connector.js) |
| update connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/developer_connect.update_connection.js) |
| create insights config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/insights_config_service.create_insights_config.js) |
| delete insights config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/insights_config_service.delete_insights_config.js) |
| get insights config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/insights_config_service.get_insights_config.js) |
| list insights configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/insights_config_service.list_insights_configs.js) |
| update insights config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/insights_config_service.update_insights_config.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples/generated/v1/snippet_metadata_google.cloud.developerconnect.v1.json) |


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
For example, `npm install @google-cloud/developerconnect@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=developerconnect.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-developerconnect
