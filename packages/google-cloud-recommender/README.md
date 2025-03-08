[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Recommender: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recommender)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/recommender.svg)](https://www.npmjs.org/package/@google-cloud/recommender)




Recommender client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recommender/CHANGELOG.md).

* [Recommender Node.js Client API Reference][client-docs]
* [Recommender Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-recommender](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recommender)

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
1.  [Enable the Recommender API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/recommender
```


### Using the client library

```javascript
async function listRecommendations() {
  const {RecommenderClient} = require('@google-cloud/recommender');
  const recommender = new RecommenderClient();

  // parent = 'projects/my-project'; // Project to fetch recommendations for.
  // recommenderId = 'google.compute.instance.MachineTypeRecommender';

  const [recommendations] = await recommender.listRecommendations({
    parent: recommender.projectLocationRecommenderPath(
      project,
      'global',
      recommenderId
    ),
  });
  console.info(`recommendations for ${recommenderId}:`);
  for (const recommendation of recommendations) {
    console.info(recommendation);
  }
  return recommendations;
}
const recommendations = await listRecommendations();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recommender/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Recommender.get_insight | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.get_insight.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.get_insight.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_insight_type_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.get_insight_type_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.get_insight_type_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_recommendation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.get_recommendation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.get_recommendation.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_recommender_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.get_recommender_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.get_recommender_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_insights | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.list_insights.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.list_insights.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_recommendations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.list_recommendations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.list_recommendations.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_insight_accepted | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.mark_insight_accepted.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.mark_insight_accepted.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_claimed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_claimed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_claimed.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_dismissed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_dismissed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_dismissed.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_failed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_failed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_failed.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_succeeded | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_succeeded.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.mark_recommendation_succeeded.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.update_insight_type_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.update_insight_type_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.update_insight_type_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.update_recommender_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1/recommender.update_recommender_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1/recommender.update_recommender_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_insight | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_insight.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_insight.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_insight_type_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_insight_type_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_insight_type_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_recommendation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_recommendation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_recommendation.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.get_recommender_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_recommender_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.get_recommender_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_insight_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_insight_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_insight_types.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_insights | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_insights.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_insights.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_recommendations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_recommendations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_recommendations.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.list_recommenders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_recommenders.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.list_recommenders.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_insight_accepted | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_insight_accepted.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_insight_accepted.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_claimed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_claimed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_claimed.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_failed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_failed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_failed.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.mark_recommendation_succeeded | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_succeeded.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.mark_recommendation_succeeded.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.update_insight_type_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.update_insight_type_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.update_insight_type_config.js,packages/google-cloud-recommender/samples/README.md) |
| Recommender.update_recommender_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/generated/v1beta1/recommender.update_recommender_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/generated/v1beta1/recommender.update_recommender_config.js,packages/google-cloud-recommender/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recommender/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recommender/samples/quickstart.js,packages/google-cloud-recommender/samples/README.md) |



The [Recommender Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/recommender@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/recommender/latest
[product-docs]: https://cloud.google.com/recommender/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=recommender.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
