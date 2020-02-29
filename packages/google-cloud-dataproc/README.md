[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Dataproc: Node.js Client](https://github.com/googleapis/nodejs-dataproc)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataproc.svg)](https://www.npmjs.org/package/@google-cloud/dataproc)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dataproc/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dataproc)




Google Cloud Dataproc API client for Node.js


* [Google Cloud Dataproc Node.js Client API Reference][client-docs]
* [Google Cloud Dataproc Documentation][product-docs]
* [github.com/googleapis/nodejs-dataproc](https://github.com/googleapis/nodejs-dataproc)

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
1.  [Enable the Google Cloud Dataproc API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataproc
```


### Using the client library

```javascript
// This quickstart sample walks a user through creating a Cloud Dataproc
// cluster, submitting a PySpark job from Google Cloud Storage to the
// cluster, reading the output of the job and deleting the cluster, all
// using the Node.js client library.
//
// Usage:
//     node quickstart.js <PROJECT_ID> <REGION> <CLUSTER_NAME> <GCS_JOB_FILE_PATH>

'use strict';

function main(projectId, region, clusterName, jobFilePath) {
  const dataproc = require('@google-cloud/dataproc');
  const {Storage} = require('@google-cloud/storage');

  const sleep = require('sleep');

  // Create a cluster client with the endpoint set to the desired cluster region
  const clusterClient = new dataproc.v1.ClusterControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
  });

  // Create a job client with the endpoint set to the desired cluster region
  const jobClient = new dataproc.v1.JobControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
  });

  async function quickstart() {
    // Create the cluster config
    const cluster = {
      projectId: projectId,
      region: region,
      cluster: {
        clusterName: clusterName,
        config: {
          masterConfig: {
            numInstances: 1,
            machineTypeUri: 'n1-standard-1',
          },
          workerConfig: {
            numInstances: 2,
            machineTypeUri: 'n1-standard-1',
          },
        },
      },
    };

    // Create the cluster
    const [operation] = await clusterClient.createCluster(cluster);
    const [response] = await operation.promise();

    // Output a success message
    console.log(`Cluster created successfully: ${response.clusterName}`);

    const job = {
      projectId: projectId,
      region: region,
      job: {
        placement: {
          clusterName: clusterName,
        },
        pysparkJob: {
          mainPythonFileUri: jobFilePath,
        },
      },
    };

    let [jobResp] = await jobClient.submitJob(job);
    const jobId = jobResp.reference.jobId;

    console.log(`Submitted job "${jobId}".`);

    // Terminal states for a job
    const terminalStates = new Set(['DONE', 'ERROR', 'CANCELLED']);

    // Create a timeout such that the job gets cancelled if not
    // in a termimal state after a fixed period of time.
    const timeout = 600000;
    const start = new Date();

    // Wait for the job to finish.
    const jobReq = {
      projectId: projectId,
      region: region,
      jobId: jobId,
    };

    while (!terminalStates.has(jobResp.status.state)) {
      if (new Date() - timeout > start) {
        await jobClient.cancelJob(jobReq);
        console.log(
          `Job ${jobId} timed out after threshold of ` +
            `${timeout / 60000} minutes.`
        );
        break;
      }
      await sleep.sleep(1);
      [jobResp] = await jobClient.getJob(jobReq);
    }

    const clusterReq = {
      projectId: projectId,
      region: region,
      clusterName: clusterName,
    };

    const [clusterResp] = await clusterClient.getCluster(clusterReq);

    const storage = new Storage();

    const output = await storage
      .bucket(clusterResp.config.configBucket)
      .file(
        `google-cloud-dataproc-metainfo/${clusterResp.clusterUuid}/` +
          `jobs/${jobId}/driveroutput.000000000`
      )
      .download();

    // Output a success message.
    console.log(
      `Job ${jobId} finished with state ${jobResp.status.state}:\n${output}`
    );

    // Delete the cluster once the job has terminated.
    const [deleteOperation] = await clusterClient.deleteCluster(clusterReq);
    await deleteOperation.promise();

    // Output a success message
    console.log(`Cluster ${clusterName} successfully deleted.`);
  }

  quickstart();
}

const args = process.argv.slice(2);

if (args.length !== 4) {
  console.log(
    'Insufficient number of parameters provided. Please make sure a ' +
      'PROJECT_ID, REGION, CLUSTER_NAME and JOB_FILE_PATH are provided, in this order.'
  );
}

main(...args);

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dataproc/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Cluster | [source code](https://github.com/googleapis/nodejs-dataproc/blob/master/samples/createCluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dataproc&page=editor&open_in_editor=samples/createCluster.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dataproc/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dataproc&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Dataproc Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dataproc/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dataproc/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dataproc/latest
[product-docs]: https://cloud.google.com/dataproc
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataproc.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
