[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Meet API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-apps/meet.svg)](https://www.npmjs.org/package/@google-apps/meet)

Google Meet API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Google Meet API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/meet/latest)
* [Google Meet API Documentation](https://developers.google.com/meet/api/guides/overview)

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
1.  [Enable the Google Meet API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-apps/meet
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| get conference record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_conference_record.js) |
| get participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant.js) |
| get participant session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant_session.js) |
| get recording | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_recording.js) |
| get transcript | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript.js) |
| get transcript entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript_entry.js) |
| list conference records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_conference_records.js) |
| list participant sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participant_sessions.js) |
| list participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participants.js) |
| list recordings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_recordings.js) |
| list transcript entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcript_entries.js) |
| list transcripts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcripts.js) |
| apps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/snippet_metadata_google.apps.meet.v2.json) |
| create space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.create_space.js) |
| end active conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.end_active_conference.js) |
| get space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.get_space.js) |
| update space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.update_space.js) |
| get conference record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_conference_record.js) |
| get participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant.js) |
| get participant session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant_session.js) |
| get recording | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_recording.js) |
| get transcript | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript.js) |
| get transcript entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript_entry.js) |
| list conference records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_conference_records.js) |
| list participant sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participant_sessions.js) |
| list participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participants.js) |
| list recordings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_recordings.js) |
| list transcript entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcript_entries.js) |
| list transcripts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcripts.js) |
| apps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/snippet_metadata_google.apps.meet.v2beta.json) |
| connect active conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.connect_active_conference.js) |
| create member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_member.js) |
| create space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_space.js) |
| delete member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.delete_member.js) |
| end active conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.end_active_conference.js) |
| get member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_member.js) |
| get space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_space.js) |
| list members | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.list_members.js) |
| update space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.update_space.js) |


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
For example, `npm install @google-apps/meet@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=meet.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet
