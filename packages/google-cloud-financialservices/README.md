[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Financial Services API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/financialservices.svg)](https://www.npmjs.org/package/@google-cloud/financialservices)

Financial Services API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Financial Services API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/financialservices/latest)
* [Financial Services API Documentation](https://cloud.google.com/financial-services/anti-money-laundering/docs/concepts/overview)

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
1.  [Enable the Financial Services API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/financialservices
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create backtest result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_backtest_result.js) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_dataset.js) |
| create engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_engine_config.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_instance.js) |
| create model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_model.js) |
| create prediction result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_prediction_result.js) |
| delete backtest result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_backtest_result.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_dataset.js) |
| delete engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_engine_config.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_instance.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_model.js) |
| delete prediction result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_prediction_result.js) |
| export backtest result metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_backtest_result_metadata.js) |
| export engine config metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_engine_config_metadata.js) |
| export model metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_model_metadata.js) |
| export prediction result metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_prediction_result_metadata.js) |
| export registered parties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_registered_parties.js) |
| get backtest result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_backtest_result.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_dataset.js) |
| get engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_config.js) |
| get engine version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_version.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_instance.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_model.js) |
| get prediction result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_prediction_result.js) |
| import registered parties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.import_registered_parties.js) |
| list backtest results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_backtest_results.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_datasets.js) |
| list engine configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_configs.js) |
| list engine versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_versions.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_instances.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_models.js) |
| list prediction results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_prediction_results.js) |
| update backtest result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_backtest_result.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_dataset.js) |
| update engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_engine_config.js) |
| update instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_instance.js) |
| update model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_model.js) |
| update prediction result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_prediction_result.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/snippet_metadata_google.cloud.financialservices.v1.json) |


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
For example, `npm install @google-cloud/financialservices@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=financialservices.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices
