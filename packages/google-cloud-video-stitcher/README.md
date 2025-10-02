[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Video Stitcher API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/video-stitcher.svg)](https://www.npmjs.org/package/@google-cloud/video-stitcher)

Video Stitcher API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Video Stitcher API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/stitcher/latest)


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
1.  [Enable the Video Stitcher API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/video-stitcher
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/snippet_metadata_google.cloud.video.stitcher.v1.json) |
| create cdn key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_cdn_key.js) |
| create live config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_live_config.js) |
| create live session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_live_session.js) |
| create slate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_slate.js) |
| create vod config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_vod_config.js) |
| create vod session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_vod_session.js) |
| delete cdn key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_cdn_key.js) |
| delete live config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_live_config.js) |
| delete slate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_slate.js) |
| delete vod config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_vod_config.js) |
| get cdn key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_cdn_key.js) |
| get live ad tag detail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_ad_tag_detail.js) |
| get live config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_config.js) |
| get live session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_session.js) |
| get slate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_slate.js) |
| get vod ad tag detail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_ad_tag_detail.js) |
| get vod config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_config.js) |
| get vod session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_session.js) |
| get vod stitch detail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_stitch_detail.js) |
| list cdn keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_cdn_keys.js) |
| list live ad tag details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_live_ad_tag_details.js) |
| list live configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_live_configs.js) |
| list slates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_slates.js) |
| list vod ad tag details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_ad_tag_details.js) |
| list vod configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_configs.js) |
| list vod stitch details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_stitch_details.js) |
| update cdn key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_cdn_key.js) |
| update live config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_live_config.js) |
| update slate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_slate.js) |
| update vod config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_vod_config.js) |


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
For example, `npm install @google-cloud/video-stitcher@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=videostitcher.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-stitcher
