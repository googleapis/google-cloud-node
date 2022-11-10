[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Tasks: Node.js Samples](https://github.com/googleapis/nodejs-tasks)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cloud Tasks Create HTTP Target](#cloud-tasks-create-http-target)
  * [Cloud Tasks Create HTTP Target with Token](#cloud-tasks-create-http-target-with-token)
  * [Create Queue](#create-queue)
  * [Cloud Tasks Create App Engine Target](#cloud-tasks-create-app-engine-target)
  * [Delete Queue](#delete-queue)
  * [List Queues](#list-queues)
  * [Quickstart](#quickstart)
  * [Server](#server)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-tasks#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cloud Tasks Create HTTP Target

Create Cloud Tasks with a HTTP Target

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createHttpTask.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createHttpTask.js,samples/README.md)

__Usage:__


`node createHttpTask.js <projectId> <queueName> <location> <url> <payload> <delayInSeconds>`


-----




### Cloud Tasks Create HTTP Target with Token

Create Cloud Tasks with a HTTP Target with Token

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createHttpTaskWithToken.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createHttpTaskWithToken.js,samples/README.md)

__Usage:__


`node createHttpTaskWithToken.js <projectId> <queueName> <location> <url> <serviceAccountEmail> <payload> <delayInSeconds>`


-----




### Create Queue

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createQueue.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createQueue.js,samples/README.md)

__Usage:__


`node samples/createQueue.js`


-----




### Cloud Tasks Create App Engine Target

Create Cloud Tasks with a Google App Engine Target

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/createTask.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/createTask.js,samples/README.md)

__Usage:__


`node createTask.js <projectId> <queueName> <location> <payload> <delayInSeconds>`


-----




### Delete Queue

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/deleteQueue.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/deleteQueue.js,samples/README.md)

__Usage:__


`node samples/deleteQueue.js`


-----




### List Queues

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/listQueues.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/listQueues.js,samples/README.md)

__Usage:__


`node samples/listQueues.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Server

View the [source code](https://github.com/googleapis/nodejs-tasks/blob/main/samples/server.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/server.js,samples/README.md)

__Usage:__


`node samples/server.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-tasks&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/tasks/docs/
