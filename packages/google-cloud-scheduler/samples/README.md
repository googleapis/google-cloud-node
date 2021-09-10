[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Scheduler: Node.js Samples](https://github.com/googleapis/nodejs-scheduler)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [App](#app)
  * [Create Job](#create-job)
  * [Delete Job](#delete-job)
  * [Quickstart](#quickstart)
  * [Update Job](#update-job)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-scheduler#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### App

View the [source code](https://github.com/googleapis/nodejs-scheduler/blob/main/samples/app.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/app.js,samples/README.md)

__Usage:__


`node samples/app.js`


-----




### Create Job

Create a job that posts to /log_payload on an App Engine service.

View the [source code](https://github.com/googleapis/nodejs-scheduler/blob/main/samples/createJob.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/createJob.js,samples/README.md)

__Usage:__


`node createJob.js [project-id] [location-id] [app-engine-service-id]`


-----




### Delete Job

Delete a job by its ID.

View the [source code](https://github.com/googleapis/nodejs-scheduler/blob/main/samples/deleteJob.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/deleteJob.js,samples/README.md)

__Usage:__


`node deleteJob.js [project-id] [location-id] [job-id]`


-----




### Quickstart

POST "Hello World" to a URL every minute.

View the [source code](https://github.com/googleapis/nodejs-scheduler/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js [project-id] [location-id] [url]`


-----




### Update Job

Update a job by its ID.

View the [source code](https://github.com/googleapis/nodejs-scheduler/blob/main/samples/updateJob.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/updateJob.js,samples/README.md)

__Usage:__


`node updateJob.js [project-id] [location-id] [job-id]`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-scheduler&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/scheduler
