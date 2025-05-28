[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Meet API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-meet)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-apps/meet.svg)](https://www.npmjs.org/package/@google-apps/meet)




Google Meet API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-meet/CHANGELOG.md).

* [Google Meet API Node.js Client API Reference][client-docs]
* [Google Meet API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-apps-meet](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-meet)

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
1.  [Enable the Google Meet API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-apps/meet
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-meet/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Conference_records_service.get_conference_record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_conference_record.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_conference_record.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_participant_session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_participant_session.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_recording | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_recording.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_recording.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_transcript | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_transcript_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.get_transcript_entry.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_conference_records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_conference_records.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_conference_records.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_participant_sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participant_sessions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participant_sessions.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_participants.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_recordings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_recordings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_recordings.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_transcript_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcript_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcript_entries.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_transcripts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcripts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/conference_records_service.list_transcripts.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.create_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.create_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/spaces_service.create_space.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.end_active_conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.end_active_conference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/spaces_service.end_active_conference.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.get_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.get_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/spaces_service.get_space.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.update_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2/spaces_service.update_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2/spaces_service.update_space.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_conference_record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_conference_record.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_conference_record.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_participant_session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_participant_session.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_recording | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_recording.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_recording.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_transcript | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.get_transcript_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.get_transcript_entry.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_conference_records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_conference_records.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_conference_records.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_participant_sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participant_sessions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participant_sessions.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_participants.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_recordings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_recordings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_recordings.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_transcript_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcript_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcript_entries.js,packages/google-apps-meet/samples/README.md) |
| Conference_records_service.list_transcripts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcripts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/conference_records_service.list_transcripts.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.connect_active_conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.connect_active_conference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.connect_active_conference.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.create_member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_member.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_member.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.create_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.create_space.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.delete_member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.delete_member.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.delete_member.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.end_active_conference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.end_active_conference.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.end_active_conference.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.get_member | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_member.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_member.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.get_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.get_space.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.list_members | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.list_members.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.list_members.js,packages/google-apps-meet/samples/README.md) |
| Spaces_service.update_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/generated/v2beta/spaces_service.update_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/generated/v2beta/spaces_service.update_space.js,packages/google-apps-meet/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-meet/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-meet/samples/quickstart.js,packages/google-apps-meet/samples/README.md) |



The [Google Meet API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-apps/meet@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/meet/latest
[product-docs]: https://developers.google.com/meet/api/guides/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=meet.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
