[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Container Analysis: Node.js Samples](https://github.com/googleapis/nodejs-containeranalysis)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Create Note](#create-note)
  * [Create Occurrence](#create-occurrence)
  * [Delete Note](#delete-note)
  * [Delete Occurrence](#delete-occurrence)
  * [Get Discovery Info](#get-discovery-info)
  * [Get Note](#get-note)
  * [Get Occurrence](#get-occurrence)
  * [Get High Vulnerabilities for Image](#get-high-vulnerabilities-for-image)
  * [Occurrence PubSub](#occurrence-pubsub)
  * [Occurrences for Image](#occurrences-for-image)
  * [Occurrences for Note](#occurrences-for-note)
  * [Poll Discovery Occurrence Finished](#poll-discovery-occurrence-finished)
  * [Quickstart](#quickstart)
  * [Vulnerability Occurrences for Image](#vulnerability-occurrences-for-image)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-containeranalysis#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Create Note

Creates a Note with specified ID

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/createNote.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createNote.js,samples/README.md)

__Usage:__


`node createNote.js "project-id" "note-id"`


-----




### Create Occurrence

Creates an Occurrence of a Note and attaches it as a metadata to an image

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/createOccurrence.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/createOccurrence.js,samples/README.md)

__Usage:__


`node createOccurrence.js "note-project-id" "note-id" "occurrence-project-id" "image url"`


-----




### Delete Note

Deletes a specified Note

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/deleteNote.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteNote.js,samples/README.md)

__Usage:__


`node deleteNote.js "project-id" "note-id"`


-----




### Delete Occurrence

Deletes a specified Occurrence

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/deleteOccurrence.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/deleteOccurrence.js,samples/README.md)

__Usage:__


`node deleteOccurrence.js "project-id" "occurrence-id"`


-----




### Get Discovery Info

Gets all Discovery Occurrences attached to specified image

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getDiscoveryInfo.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getDiscoveryInfo.js,samples/README.md)

__Usage:__


`node getDiscoveryInfo.js "project-id" "image-url"`


-----




### Get Note

Retrieves and prints a specified note

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getNote.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getNote.js,samples/README.md)

__Usage:__


`node getNote.js "project-id" "note-id"`


-----




### Get Occurrence

Retrieves and prints a specified Occurrence

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/getOccurrence.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/getOccurrence.js,samples/README.md)

__Usage:__


`node getOccurrence.js "project-id" "occurrence-id"`


-----




### Get High Vulnerabilities for Image

Retrieves all Vulnerability Occurrences of High Severity from Specified Image

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/highVulnerabilitiesForImage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/highVulnerabilitiesForImage.js,samples/README.md)

__Usage:__


`node highVulnerabilitiesForImage.js "project-id" "image-url"`


-----




### Occurrence PubSub

Polls a specified PubSub subscription for Occurrences.  Requires a subscription to a topic named 'container-analysis-occurrences-v1'

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencePubSub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencePubSub.js,samples/README.md)

__Usage:__


`node occurrencePubSub.js "project-id" "subscription-id" "timeout-in-seconds"`


-----




### Occurrences for Image

Retrieves all Occurrences attached to the metadata of a specified image

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencesForImage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForImage.js,samples/README.md)

__Usage:__


`node occurrencesForImage.js "project-id" "image-url"`


-----




### Occurrences for Note

Retrieves all Occurrences of a specified Note

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/occurrencesForNote.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/occurrencesForNote.js,samples/README.md)

__Usage:__


`node occurrencesForNote.js "project-id" "note-id"`


-----




### Poll Discovery Occurrence Finished

Waits for a Discovery Occurrence to reach a terminal state

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/pollDiscoveryOccurrenceFinished.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/pollDiscoveryOccurrenceFinished.js,samples/README.md)

__Usage:__


`node pollDiscoveryOccurrenceFinished.js "project-id" "image-url" "retries"`


-----




### Quickstart

fetching an instance of Grafeas and creating a note.

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js "project-id" "note-id"`


-----




### Vulnerability Occurrences for Image

Retrieves all Vulnerability Occurrences attached to a specified image

View the [source code](https://github.com/googleapis/nodejs-containeranalysis/blob/main/samples/vulnerabilityOccurrencesForImage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/vulnerabilityOccurrencesForImage.js,samples/README.md)

__Usage:__


`node vulnerabilityOccurrencesForImage.js "project-id" "image-url"`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-containeranalysis&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/container-registry/docs/container-analysis
