[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Live Stream API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/livestream.svg)](https://www.npmjs.org/package/@google-cloud/livestream)

Live Stream API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Live Stream API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/livestream/latest)


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
1.  [Enable the Live Stream API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/livestream
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_asset.js) |
| create channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_channel.js) |
| create clip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_clip.js) |
| create dvr session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_dvr_session.js) |
| create event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_event.js) |
| create input | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.create_input.js) |
| delete asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_asset.js) |
| delete channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_channel.js) |
| delete clip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_clip.js) |
| delete dvr session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_dvr_session.js) |
| delete event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_event.js) |
| delete input | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.delete_input.js) |
| get asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_asset.js) |
| get channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_channel.js) |
| get clip | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_clip.js) |
| get dvr session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_dvr_session.js) |
| get event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_event.js) |
| get input | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_input.js) |
| get pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.get_pool.js) |
| list assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_assets.js) |
| list channels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_channels.js) |
| list clips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_clips.js) |
| list dvr sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_dvr_sessions.js) |
| list events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_events.js) |
| list inputs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.list_inputs.js) |
| preview input | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.preview_input.js) |
| start channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.start_channel.js) |
| start distribution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.start_distribution.js) |
| stop channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.stop_channel.js) |
| stop distribution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.stop_distribution.js) |
| update channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.update_channel.js) |
| update dvr session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.update_dvr_session.js) |
| update input | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.update_input.js) |
| update pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/livestream_service.update_pool.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples/generated/v1/snippet_metadata_google.cloud.video.livestream.v1.json) |


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
For example, `npm install @google-cloud/livestream@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=livestream.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-video-livestream
