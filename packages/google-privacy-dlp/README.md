[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Loss Prevention: Node.js Client](https://github.com/googleapis/nodejs-dlp)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dlp.svg)](https://www.npmjs.org/package/@google-cloud/dlp)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dlp/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dlp)




The [Data Loss Prevention API](https://cloud.google.com/dlp/docs/) provides programmatic access to a
powerful detection engine for personally identifiable information and other privacy-sensitive
data in unstructured data streams.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-dlp/blob/main/CHANGELOG.md).

* [Cloud Data Loss Prevention Node.js Client API Reference][client-docs]
* [Cloud Data Loss Prevention Documentation][product-docs]
* [github.com/googleapis/nodejs-dlp](https://github.com/googleapis/nodejs-dlp)

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
1.  [Enable the Cloud Data Loss Prevention API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dlp
```


### Using the client library

```javascript

// Instantiates a client
const dlp = new DLP.DlpServiceClient();

// The string to inspect
const string = 'Robert Frost';

// The project ID to run the API call under
// const projectId = 'my-project';

async function quickStart() {
  // The minimum likelihood required before returning a match
  const minLikelihood = 'LIKELIHOOD_UNSPECIFIED';

  // The maximum number of findings to report (0 = server maximum)
  const maxFindings = 0;

  // The infoTypes of information to match
  const infoTypes = [{name: 'PERSON_NAME'}, {name: 'US_STATE'}];

  // Whether to include the matching string
  const includeQuote = true;

  // Construct item to inspect
  const item = {value: string};

  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/global`,
    inspectConfig: {
      infoTypes: infoTypes,
      minLikelihood: minLikelihood,
      limits: {
        maxFindingsPerRequest: maxFindings,
      },
      includeQuote: includeQuote,
    },
    item: item,
  };

  // Run request
  const [response] = await dlp.inspectContent(request);
  const findings = response.result.findings;
  if (findings.length > 0) {
    console.log('Findings:');
    findings.forEach(finding => {
      if (includeQuote) {
        console.log(`\tQuote: ${finding.quote}`);
      }
      console.log(`\tInfo type: ${finding.infoType.name}`);
      console.log(`\tLikelihood: ${finding.likelihood}`);
    });
  } else {
    console.log('No findings.');
  }
}
quickStart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dlp/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Categorical Risk Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/categoricalRiskAnalysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/categoricalRiskAnalysis.js,samples/README.md) |
| Inspect Templates | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/createInspectTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/createInspectTemplate.js,samples/README.md) |
| Job Triggers | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/createTrigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/createTrigger.js,samples/README.md) |
| Deidentify with Date Shift | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithDateShift.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithDateShift.js,samples/README.md) |
| Deidentify with FPE | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithFpe.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithFpe.js,samples/README.md) |
| Deidentify with Mask | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithMask.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithMask.js,samples/README.md) |
| Deidentify with Replacement | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithReplacement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithReplacement.js,samples/README.md) |
| Delete Inspect Templates | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteInspectTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteInspectTemplate.js,samples/README.md) |
| Delete Job | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteJob.js,samples/README.md) |
| Delete Trigger | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteTrigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteTrigger.js,samples/README.md) |
| Inspect Bigquery | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectBigQuery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectBigQuery.js,samples/README.md) |
| Inspect Datastore | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectDatastore.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectDatastore.js,samples/README.md) |
| Inspect File | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectFile.js,samples/README.md) |
| Inspect GCS File | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectGCSFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectGCSFile.js,samples/README.md) |
| Inspects strings | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectString.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectString.js,samples/README.md) |
| kAnonymity Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/kAnonymityAnalysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/kAnonymityAnalysis.js,samples/README.md) |
| kMap Estimation Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/kMapEstimationAnalysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/kMapEstimationAnalysis.js,samples/README.md) |
| l Diversity Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/lDiversityAnalysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/lDiversityAnalysis.js,samples/README.md) |
| List Inspect Templates | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listInspectTemplates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listInspectTemplates.js,samples/README.md) |
| List jobs | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listJobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listJobs.js,samples/README.md) |
| List Triggers | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listTriggers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listTriggers.js,samples/README.md) |
| Metadata | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/metadata.js,samples/README.md) |
| Numerical Risk Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/numericalRiskAnalysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/numericalRiskAnalysis.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Redact Image | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/redactImage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/redactImage.js,samples/README.md) |
| Redact Text | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/redactText.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/redactText.js,samples/README.md) |
| Reidentify with FPE | [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/reidentifyWithFpe.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/reidentifyWithFpe.js,samples/README.md) |



The [Cloud Data Loss Prevention Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dlp/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dlp/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dlp/latest
[product-docs]: https://cloud.google.com/dlp/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dlp.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
