[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Container Analysis: Node.js Client](https://github.com/googleapis/nodejs-containeranalysis)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/containeranalysis.svg)](https://www.npmjs.org/package/@google-cloud/containeranalysis)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-containeranalysis/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-containeranalysis)




Container Analysis API client for Node.js


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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-containeranalysis/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/createNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createNote.js,samples/README.md) |
| Create Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/createOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createOccurrence.js,samples/README.md) |
| Delete Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/deleteNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteNote.js,samples/README.md) |
| Delete Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/deleteOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteOccurrence.js,samples/README.md) |
| Get Discovery Info | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/getDiscoveryInfo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getDiscoveryInfo.js,samples/README.md) |
| Get Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/getNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getNote.js,samples/README.md) |
| Get Occurrence | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/getOccurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getOccurrence.js,samples/README.md) |
| Get High Vulnerabilities for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/highVulnerabilitiesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/highVulnerabilitiesForImage.js,samples/README.md) |
| Occurrence PubSub | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/occurrencePubSub.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencePubSub.js,samples/README.md) |
| Occurrences for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/occurrencesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForImage.js,samples/README.md) |
| Occurrences for Note | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/occurrencesForNote.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForNote.js,samples/README.md) |
| Poll Discovery Occurrence Finished | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/pollDiscoveryOccurrenceFinished.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/pollDiscoveryOccurrenceFinished.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Vulnerability Occurrences for Image | [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/master/samples/vulnerabilityOccurrencesForImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/vulnerabilityOccurrencesForImage.js,samples/README.md) |



The [Google Container Analysis Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-containeranalysis/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-containeranalysis/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/containeranalysis/latest
[product-docs]: https://cloud.google.com/container-registry/docs/container-analysis
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=containeranalysis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
