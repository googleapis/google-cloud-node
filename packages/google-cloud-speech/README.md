[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Speech-to-Text API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/speech.svg)](https://www.npmjs.org/package/@google-cloud/speech)

Cloud Speech-to-Text API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Speech-to-Text API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/speech/latest)


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
1.  [Enable the Cloud Speech-to-Text API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/speech
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.create_custom_class.js) |
| create phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.create_phrase_set.js) |
| delete custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.delete_custom_class.js) |
| delete phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.delete_phrase_set.js) |
| get custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.get_custom_class.js) |
| get phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.get_phrase_set.js) |
| list custom classes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.list_custom_classes.js) |
| list phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.list_phrase_set.js) |
| update custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.update_custom_class.js) |
| update phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/adaptation.update_phrase_set.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/snippet_metadata_google.cloud.speech.v1.json) |
| long running recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/speech.long_running_recognize.js) |
| recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/speech.recognize.js) |
| streaming recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1/speech.streaming_recognize.js) |
| create custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.create_custom_class.js) |
| create phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.create_phrase_set.js) |
| delete custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.delete_custom_class.js) |
| delete phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.delete_phrase_set.js) |
| get custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.get_custom_class.js) |
| get phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.get_phrase_set.js) |
| list custom classes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.list_custom_classes.js) |
| list phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.list_phrase_set.js) |
| update custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.update_custom_class.js) |
| update phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/adaptation.update_phrase_set.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/snippet_metadata_google.cloud.speech.v1p1beta1.json) |
| long running recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/speech.long_running_recognize.js) |
| recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/speech.recognize.js) |
| streaming recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v1p1beta1/speech.streaming_recognize.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/snippet_metadata_google.cloud.speech.v2.json) |
| batch recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.batch_recognize.js) |
| create custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.create_custom_class.js) |
| create phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.create_phrase_set.js) |
| create recognizer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.create_recognizer.js) |
| delete custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.delete_custom_class.js) |
| delete phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.delete_phrase_set.js) |
| delete recognizer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.delete_recognizer.js) |
| get config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.get_config.js) |
| get custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.get_custom_class.js) |
| get phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.get_phrase_set.js) |
| get recognizer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.get_recognizer.js) |
| list custom classes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.list_custom_classes.js) |
| list phrase sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.list_phrase_sets.js) |
| list recognizers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.list_recognizers.js) |
| recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.recognize.js) |
| streaming recognize | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.streaming_recognize.js) |
| undelete custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.undelete_custom_class.js) |
| undelete phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.undelete_phrase_set.js) |
| undelete recognizer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.undelete_recognizer.js) |
| update config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.update_config.js) |
| update custom class | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.update_custom_class.js) |
| update phrase set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.update_phrase_set.js) |
| update recognizer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples/generated/v2/speech.update_recognizer.js) |


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
For example, `npm install @google-cloud/speech@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=speech.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-speech
