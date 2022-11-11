[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Dataproc: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataproc.svg)](https://www.npmjs.org/package/@google-cloud/dataproc)




Google Cloud Dataproc API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataproc/CHANGELOG.md).

* [Google Cloud Dataproc Node.js Client API Reference][client-docs]
* [Google Cloud Dataproc Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-dataproc](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataproc)

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
// This quickstart sample walks a user through creating a Dataproc
// cluster, submitting a PySpark job from Google Cloud Storage to the
// cluster, reading the output of the job and deleting the cluster, all
// using the Node.js client library.

'use strict';

function main(projectId, region, clusterName, jobFilePath) {
  const dataproc = require('@google-cloud/dataproc');
  const {Storage} = require('@google-cloud/storage');

  // Create a cluster client with the endpoint set to the desired cluster region
  const clusterClient = new dataproc.v1.ClusterControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
    projectId: projectId,
  });

  // Create a job client with the endpoint set to the desired cluster region
  const jobClient = new dataproc.v1.JobControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
    projectId: projectId,
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
            machineTypeUri: 'n1-standard-2',
          },
          workerConfig: {
            numInstances: 2,
            machineTypeUri: 'n1-standard-2',
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

    const [jobOperation] = await jobClient.submitJobAsOperation(job);
    const [jobResponse] = await jobOperation.promise();

    const matches =
      jobResponse.driverOutputResourceUri.match('gs://(.*?)/(.*)');

    const storage = new Storage();

    const output = await storage
      .bucket(matches[1])
      .file(`${matches[2]}.000000000`)
      .download();

    // Output a success message.
    console.log(`Job finished successfully: ${output}`);

    // Delete the cluster once the job has terminated.
    const deleteClusterReq = {
      projectId: projectId,
      region: region,
      clusterName: clusterName,
    };

    const [deleteOperation] = await clusterClient.deleteCluster(
      deleteClusterReq
    );
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

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Autoscaling_policy_service.create_autoscaling_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.create_autoscaling_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.create_autoscaling_policy.js,samples/README.md) |
| Autoscaling_policy_service.delete_autoscaling_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.delete_autoscaling_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.delete_autoscaling_policy.js,samples/README.md) |
| Autoscaling_policy_service.get_autoscaling_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.get_autoscaling_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.get_autoscaling_policy.js,samples/README.md) |
| Autoscaling_policy_service.list_autoscaling_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.list_autoscaling_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.list_autoscaling_policies.js,samples/README.md) |
| Autoscaling_policy_service.update_autoscaling_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.update_autoscaling_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/autoscaling_policy_service.update_autoscaling_policy.js,samples/README.md) |
| Batch_controller.create_batch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/batch_controller.create_batch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/batch_controller.create_batch.js,samples/README.md) |
| Batch_controller.delete_batch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/batch_controller.delete_batch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/batch_controller.delete_batch.js,samples/README.md) |
| Batch_controller.get_batch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/batch_controller.get_batch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/batch_controller.get_batch.js,samples/README.md) |
| Batch_controller.list_batches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/batch_controller.list_batches.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/batch_controller.list_batches.js,samples/README.md) |
| Cluster_controller.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.create_cluster.js,samples/README.md) |
| Cluster_controller.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.delete_cluster.js,samples/README.md) |
| Cluster_controller.diagnose_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.diagnose_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.diagnose_cluster.js,samples/README.md) |
| Cluster_controller.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.get_cluster.js,samples/README.md) |
| Cluster_controller.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.list_clusters.js,samples/README.md) |
| Cluster_controller.start_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.start_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.start_cluster.js,samples/README.md) |
| Cluster_controller.stop_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.stop_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.stop_cluster.js,samples/README.md) |
| Cluster_controller.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/cluster_controller.update_cluster.js,samples/README.md) |
| Job_controller.cancel_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.cancel_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.cancel_job.js,samples/README.md) |
| Job_controller.delete_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.delete_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.delete_job.js,samples/README.md) |
| Job_controller.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.get_job.js,samples/README.md) |
| Job_controller.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.list_jobs.js,samples/README.md) |
| Job_controller.submit_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.submit_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.submit_job.js,samples/README.md) |
| Job_controller.submit_job_as_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.submit_job_as_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.submit_job_as_operation.js,samples/README.md) |
| Job_controller.update_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/job_controller.update_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/job_controller.update_job.js,samples/README.md) |
| Workflow_template_service.create_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.create_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.create_workflow_template.js,samples/README.md) |
| Workflow_template_service.delete_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.delete_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.delete_workflow_template.js,samples/README.md) |
| Workflow_template_service.get_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.get_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.get_workflow_template.js,samples/README.md) |
| Workflow_template_service.instantiate_inline_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.instantiate_inline_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.instantiate_inline_workflow_template.js,samples/README.md) |
| Workflow_template_service.instantiate_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.instantiate_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.instantiate_workflow_template.js,samples/README.md) |
| Workflow_template_service.list_workflow_templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.list_workflow_templates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.list_workflow_templates.js,samples/README.md) |
| Workflow_template_service.update_workflow_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.update_workflow_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/generated/v1/workflow_template_service.update_workflow_template.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/quickstart.js,samples/README.md) |
| Quickstart.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataproc/samples/test/quickstart.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataproc/samples/test/quickstart.test.js,samples/README.md) |



The [Google Cloud Dataproc Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dataproc@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dataproc/latest
[product-docs]: https://cloud.google.com/dataproc
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataproc.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
