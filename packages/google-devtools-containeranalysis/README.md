[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Container Analysis: Node.js Client](https://github.com/googleapis/nodejs-containeranalysis)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/containeranalysis.svg)](https://www.npmjs.org/package/@google-cloud/containeranalysis)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-containeranalysis/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-containeranalysis)




Container Analysis API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-containeranalysis/blob/main/CHANGELOG.md).

* [Google Container Analysis Node.js Client API Reference][client-docs]
* [Google Container Analysis Documentation][product-docs]
* [github.com/googleapis/nodejs-containeranalysis](https://github.com/googleapis/nodejs-containeranalysis)

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
1.  [Enable the Google Container Analysis API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/containeranalysis
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample
 */
// const projectId = 'your-project-id', // Your GCP Project ID
// const noteId = 'my-note-id' // Id of the note

// Import the library and create a client
const {ContainerAnalysisClient} = require('@google-cloud/containeranalysis');
const client = new ContainerAnalysisClient();
// Fetch an instance of a Grafeas client:
// see: https://googleapis.dev/nodejs/grafeas/latest
const grafeasClient = client.getGrafeasClient();

// Construct request
// Associate the Note with a metadata type
// https://cloud.google.com/container-registry/docs/container-analysis#supported_metadata_types
// Here, we use the type "vulnerabiltity"
const formattedParent = grafeasClient.projectPath(projectId);

// Creates and returns a new Note
const [note] = await grafeasClient.createNote({
  parent: formattedParent,
  noteId: noteId,
  note: {
    vulnerability: {
      details: [
        {
          affectedCpeUri: 'foo.uri',
          affectedPackage: 'foo',
          minAffectedVersion: {
            kind: 'MINIMUM',
          },
          fixedVersion: {
            kind: 'MAXIMUM',
          },
        },
      ],
    },
  },
});

console.log(`Note ${note.name} created.`);

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-containeranalysis/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/createNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createNote.js,samples/README.md) |
| Create Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/createOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createOccurrence.js,samples/README.md) |
| Delete Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/deleteNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteNote.js,samples/README.md) |
| Delete Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/deleteOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteOccurrence.js,samples/README.md) |
| Get Discovery Info | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getDiscoveryInfo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getDiscoveryInfo.js,samples/README.md) |
| Get Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getNote.js,samples/README.md) |
| Get Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getOccurrence.js,samples/README.md) |
| Get High Vulnerabilities for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/highVulnerabilitiesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/highVulnerabilitiesForImage.js,samples/README.md) |
| Occurrence PubSub | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencePubSub.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencePubSub.js,samples/README.md) |
| Occurrences for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForImage.js,samples/README.md) |
| Occurrences for Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencesForNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForNote.js,samples/README.md) |
| Poll Discovery Occurrence Finished | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/pollDiscoveryOccurrenceFinished.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/pollDiscoveryOccurrenceFinished.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Vulnerability Occurrences for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/vulnerabilityOccurrencesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/vulnerabilityOccurrencesForImage.js,samples/README.md) |



The [Google Container Analysis Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
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


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.







More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-containeranalysis/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-containeranalysis/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/containeranalysis/latest
[product-docs]: https://cloud.google.com/container-registry/docs/container-analysis
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=containeranalysis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
