[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Video Stitcher API: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/video-stitcher.svg)](https://www.npmjs.org/package/@google-cloud/video-stitcher)




stitcher client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-video-stitcher/CHANGELOG.md).

* [Video Stitcher API Node.js Client API Reference][client-docs]
* [Video Stitcher API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-video-stitcher](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-video-stitcher)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Video Stitcher API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/video-stitcher
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Video_stitcher_service.create_cdn_key | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_cdn_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_cdn_key.js,samples/README.md) |
| Video_stitcher_service.create_live_session | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_live_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_live_session.js,samples/README.md) |
| Video_stitcher_service.create_slate | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_slate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_slate.js,samples/README.md) |
| Video_stitcher_service.create_vod_session | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_vod_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.create_vod_session.js,samples/README.md) |
| Video_stitcher_service.delete_cdn_key | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_cdn_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_cdn_key.js,samples/README.md) |
| Video_stitcher_service.delete_slate | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_slate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.delete_slate.js,samples/README.md) |
| Video_stitcher_service.get_cdn_key | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_cdn_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_cdn_key.js,samples/README.md) |
| Video_stitcher_service.get_live_ad_tag_detail | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_ad_tag_detail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_ad_tag_detail.js,samples/README.md) |
| Video_stitcher_service.get_live_session | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_live_session.js,samples/README.md) |
| Video_stitcher_service.get_slate | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_slate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_slate.js,samples/README.md) |
| Video_stitcher_service.get_vod_ad_tag_detail | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_ad_tag_detail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_ad_tag_detail.js,samples/README.md) |
| Video_stitcher_service.get_vod_session | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_session.js,samples/README.md) |
| Video_stitcher_service.get_vod_stitch_detail | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_stitch_detail.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.get_vod_stitch_detail.js,samples/README.md) |
| Video_stitcher_service.list_cdn_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_cdn_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_cdn_keys.js,samples/README.md) |
| Video_stitcher_service.list_live_ad_tag_details | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_live_ad_tag_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_live_ad_tag_details.js,samples/README.md) |
| Video_stitcher_service.list_slates | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_slates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_slates.js,samples/README.md) |
| Video_stitcher_service.list_vod_ad_tag_details | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_ad_tag_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_ad_tag_details.js,samples/README.md) |
| Video_stitcher_service.list_vod_stitch_details | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_stitch_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.list_vod_stitch_details.js,samples/README.md) |
| Video_stitcher_service.update_cdn_key | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_cdn_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_cdn_key.js,samples/README.md) |
| Video_stitcher_service.update_slate | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_slate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/generated/v1/video_stitcher_service.update_slate.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-video-stitcher/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-video-stitcher/samples/test/quickstart.js,samples/README.md) |



The [Video Stitcher API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/videostitcher/latest/
[product-docs]: https://cloud.google.com/video-stitcher/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=stitcher.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
