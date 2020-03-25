[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Game Servers: Node.js Client](https://github.com/googleapis/nodejs-game-servers)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/game-servers.svg)](https://www.npmjs.org/package/@google-cloud/game-servers)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-game-servers/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-game-servers)




Game service client for Node.js


* [Google Cloud Game Servers Node.js Client API Reference][client-docs]
* [Google Cloud Game Servers Documentation][product-docs]
* [github.com/googleapis/nodejs-game-servers](https://github.com/googleapis/nodejs-game-servers)

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
1.  [Enable the Google Cloud Game Servers API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/game-servers
```


### Using the client library

```javascript
const {RealmsServiceClient} = require('@google-cloud/game-servers');

async function quickstart() {
  const client = new RealmsServiceClient();

  // TODO(developer): uncomment the following section, and add values
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'us-central1;
  // const realmId = 'DESIRED_REALM_ID';

  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    realmId,
    realm: {
      // Must use a valid support time zone.
      // See https://cloud.google.com/dataprep/docs/html/Supported-Time-Zone-Values_66194188
      timeZone: 'US/Pacific',
      description: 'My Game Server realm',
    },
  };

  const [operation] = await client.createRealm(request);
  const results = await operation.promise();
  const [realm] = results;

  console.log('Realm created:');

  console.log(`\tRealm name: ${realm.name}`);
  console.log(`\tRealm description: ${realm.description}`);
  console.log(`\tRealm time zone: ${realm.timeZone}`);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-game-servers/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create_realm | [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/create_realm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/create_realm.js,samples/README.md) |
| Delete_realm | [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/delete_realm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/delete_realm.js,samples/README.md) |
| Get_realm | [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/get_realm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/get_realm.js,samples/README.md) |
| List_realms | [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/list_realms.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/list_realms.js,samples/README.md) |
| Create Game Server Realm | [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Game Servers Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targetting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-game-servers/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-game-servers/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/game-servers/latest
[product-docs]: https://cloud.google.com/game-servers/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gameservices.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
