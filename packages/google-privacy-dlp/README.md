[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Loss Prevention: Node.js Client](https://github.com/googleapis/nodejs-dlp)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dlp.svg)](https://www.npmjs.org/package/@google-cloud/dlp)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dlp/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dlp)




The [Data Loss Prevention API](https://cloud.google.com/dlp/docs/) provides programmatic access to a
powerful detection engine for personally identifiable information and other privacy-sensitive
data in unstructured data streams.


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
const projectId = process.env.GCLOUD_PROJECT;

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
  parent: dlp.projectPath(projectId),
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
  console.log(`Findings:`);
  findings.forEach(finding => {
    if (includeQuote) {
      console.log(`\tQuote: ${finding.quote}`);
    }
    console.log(`\tInfo type: ${finding.infoType.name}`);
    console.log(`\tLikelihood: ${finding.likelihood}`);
  });
} else {
  console.log(`No findings.`);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dlp/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Deid | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/deid.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deid.js,samples/README.md) |
| Inspect | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/inspect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspect.js,samples/README.md) |
| Job Management | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/jobs.js,samples/README.md) |
| Metadata | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/metadata.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Redact | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/redact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/redact.js,samples/README.md) |
| Risk Analysis | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/risk.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/risk.js,samples/README.md) |
| Inspect Templates | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/templates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/templates.js,samples/README.md) |
| Job Triggers | [source code](https://github.com/googleapis/nodejs-dlp/blob/master/samples/triggers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/triggers.js,samples/README.md) |



The [Cloud Data Loss Prevention Node.js Client API Reference][client-docs] documentation
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


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dlp/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dlp/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dlp/latest
[product-docs]: https://cloud.google.com/dlp/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dlp.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
