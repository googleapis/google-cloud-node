// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The runtime logging config of the job.
 *
 * @property {Object.<string, number>} driverLogLevels
 *   The per-package log levels for the driver. This may include
 *   "root" package name to configure rootLogger.
 *   Examples:
 *     'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
 *
 * @typedef LoggingConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.LoggingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var LoggingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The Log4j level for job execution. When running an
   * [Apache Hive](http://hive.apache.org/) job, Cloud
   * Dataproc configures the Hive client to an equivalent verbosity level.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  Level: {

    /**
     * Level is unspecified. Use default level for log4j.
     */
    LEVEL_UNSPECIFIED: 0,

    /**
     * Use ALL level for log4j.
     */
    ALL: 1,

    /**
     * Use TRACE level for log4j.
     */
    TRACE: 2,

    /**
     * Use DEBUG level for log4j.
     */
    DEBUG: 3,

    /**
     * Use INFO level for log4j.
     */
    INFO: 4,

    /**
     * Use WARN level for log4j.
     */
    WARN: 5,

    /**
     * Use ERROR level for log4j.
     */
    ERROR: 6,

    /**
     * Use FATAL level for log4j.
     */
    FATAL: 7,

    /**
     * Turn off log4j.
     */
    OFF: 8
  }
};

/**
 * A Cloud Dataproc job for running
 * [Apache Hadoop MapReduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html)
 * jobs on [Apache Hadoop YARN](https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
 *
 * @property {string} mainJarFileUri
 *   The HCFS URI of the jar file containing the main class.
 *   Examples:
 *       'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'
 *       'hdfs:/tmp/test-samples/custom-wordcount.jar'
 *       'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
 *
 * @property {string} mainClass
 *   The name of the driver's main class. The jar file containing the class
 *   must be in the default CLASSPATH or specified in `jar_file_uris`.
 *
 * @property {string[]} args
 *   Optional. The arguments to pass to the driver. Do not
 *   include arguments, such as `-libjars` or `-Dfoo=bar`, that can be set as job
 *   properties, since a collision may occur that causes an incorrect job
 *   submission.
 *
 * @property {string[]} jarFileUris
 *   Optional. Jar file URIs to add to the CLASSPATHs of the
 *   Hadoop driver and tasks.
 *
 * @property {string[]} fileUris
 *   Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied
 *   to the working directory of Hadoop drivers and distributed tasks. Useful
 *   for naively parallel tasks.
 *
 * @property {string[]} archiveUris
 *   Optional. HCFS URIs of archives to be extracted in the working directory of
 *   Hadoop drivers and tasks. Supported file types:
 *   .jar, .tar, .tar.gz, .tgz, or .zip.
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names to values, used to configure Hadoop.
 *   Properties that conflict with values set by the Cloud Dataproc API may be
 *   overwritten. Can include properties set in /etc/hadoop/conf/*-site and
 *   classes in user code.
 *
 * @property {Object} loggingConfig
 *   Optional. The runtime log config for job execution.
 *
 *   This object should have the same structure as [LoggingConfig]{@link google.cloud.dataproc.v1.LoggingConfig}
 *
 * @typedef HadoopJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.HadoopJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var HadoopJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Dataproc job for running [Apache Spark](http://spark.apache.org/)
 * applications on YARN.
 *
 * @property {string} mainJarFileUri
 *   The HCFS URI of the jar file that contains the main class.
 *
 * @property {string} mainClass
 *   The name of the driver's main class. The jar file that contains the class
 *   must be in the default CLASSPATH or specified in `jar_file_uris`.
 *
 * @property {string[]} args
 *   Optional. The arguments to pass to the driver. Do not include arguments,
 *   such as `--conf`, that can be set as job properties, since a collision may
 *   occur that causes an incorrect job submission.
 *
 * @property {string[]} jarFileUris
 *   Optional. HCFS URIs of jar files to add to the CLASSPATHs of the
 *   Spark driver and tasks.
 *
 * @property {string[]} fileUris
 *   Optional. HCFS URIs of files to be copied to the working directory of
 *   Spark drivers and distributed tasks. Useful for naively parallel tasks.
 *
 * @property {string[]} archiveUris
 *   Optional. HCFS URIs of archives to be extracted in the working directory
 *   of Spark drivers and tasks. Supported file types:
 *   .jar, .tar, .tar.gz, .tgz, and .zip.
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names to values, used to configure Spark.
 *   Properties that conflict with values set by the Cloud Dataproc API may be
 *   overwritten. Can include properties set in
 *   /etc/spark/conf/spark-defaults.conf and classes in user code.
 *
 * @property {Object} loggingConfig
 *   Optional. The runtime log config for job execution.
 *
 *   This object should have the same structure as [LoggingConfig]{@link google.cloud.dataproc.v1.LoggingConfig}
 *
 * @typedef SparkJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.SparkJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var SparkJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Dataproc job for running
 * [Apache PySpark](https://spark.apache.org/docs/0.9.0/python-programming-guide.html)
 * applications on YARN.
 *
 * @property {string} mainPythonFileUri
 *   Required. The HCFS URI of the main Python file to use as the driver. Must
 *   be a .py file.
 *
 * @property {string[]} args
 *   Optional. The arguments to pass to the driver.  Do not include arguments,
 *   such as `--conf`, that can be set as job properties, since a collision may
 *   occur that causes an incorrect job submission.
 *
 * @property {string[]} pythonFileUris
 *   Optional. HCFS file URIs of Python files to pass to the PySpark
 *   framework. Supported file types: .py, .egg, and .zip.
 *
 * @property {string[]} jarFileUris
 *   Optional. HCFS URIs of jar files to add to the CLASSPATHs of the
 *   Python driver and tasks.
 *
 * @property {string[]} fileUris
 *   Optional. HCFS URIs of files to be copied to the working directory of
 *   Python drivers and distributed tasks. Useful for naively parallel tasks.
 *
 * @property {string[]} archiveUris
 *   Optional. HCFS URIs of archives to be extracted in the working directory of
 *   .jar, .tar, .tar.gz, .tgz, and .zip.
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names to values, used to configure PySpark.
 *   Properties that conflict with values set by the Cloud Dataproc API may be
 *   overwritten. Can include properties set in
 *   /etc/spark/conf/spark-defaults.conf and classes in user code.
 *
 * @property {Object} loggingConfig
 *   Optional. The runtime log config for job execution.
 *
 *   This object should have the same structure as [LoggingConfig]{@link google.cloud.dataproc.v1.LoggingConfig}
 *
 * @typedef PySparkJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.PySparkJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var PySparkJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A list of queries to run on a cluster.
 *
 * @property {string[]} queries
 *   Required. The queries to execute. You do not need to terminate a query
 *   with a semicolon. Multiple queries can be specified in one string
 *   by separating each with a semicolon. Here is an example of an Cloud
 *   Dataproc API snippet that uses a QueryList to specify a HiveJob:
 *
 *       "hiveJob": {
 *         "queryList": {
 *           "queries": [
 *             "query1",
 *             "query2",
 *             "query3;query4",
 *           ]
 *         }
 *       }
 *
 * @typedef QueryList
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.QueryList definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var QueryList = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Dataproc job for running [Apache Hive](https://hive.apache.org/)
 * queries on YARN.
 *
 * @property {string} queryFileUri
 *   The HCFS URI of the script that contains Hive queries.
 *
 * @property {Object} queryList
 *   A list of queries.
 *
 *   This object should have the same structure as [QueryList]{@link google.cloud.dataproc.v1.QueryList}
 *
 * @property {boolean} continueOnFailure
 *   Optional. Whether to continue executing queries if a query fails.
 *   The default value is `false`. Setting to `true` can be useful when executing
 *   independent parallel queries.
 *
 * @property {Object.<string, string>} scriptVariables
 *   Optional. Mapping of query variable names to values (equivalent to the
 *   Hive command: `SET name="value";`).
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names and values, used to configure Hive.
 *   Properties that conflict with values set by the Cloud Dataproc API may be
 *   overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
 *   /etc/hive/conf/hive-site.xml, and classes in user code.
 *
 * @property {string[]} jarFileUris
 *   Optional. HCFS URIs of jar files to add to the CLASSPATH of the
 *   Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes
 *   and UDFs.
 *
 * @typedef HiveJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.HiveJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var HiveJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Dataproc job for running [Apache Spark SQL](http://spark.apache.org/sql/)
 * queries.
 *
 * @property {string} queryFileUri
 *   The HCFS URI of the script that contains SQL queries.
 *
 * @property {Object} queryList
 *   A list of queries.
 *
 *   This object should have the same structure as [QueryList]{@link google.cloud.dataproc.v1.QueryList}
 *
 * @property {Object.<string, string>} scriptVariables
 *   Optional. Mapping of query variable names to values (equivalent to the
 *   Spark SQL command: SET `name="value";`).
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names to values, used to configure
 *   Spark SQL's SparkConf. Properties that conflict with values set by the
 *   Cloud Dataproc API may be overwritten.
 *
 * @property {string[]} jarFileUris
 *   Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
 *
 * @property {Object} loggingConfig
 *   Optional. The runtime log config for job execution.
 *
 *   This object should have the same structure as [LoggingConfig]{@link google.cloud.dataproc.v1.LoggingConfig}
 *
 * @typedef SparkSqlJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.SparkSqlJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var SparkSqlJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Dataproc job for running [Apache Pig](https://pig.apache.org/)
 * queries on YARN.
 *
 * @property {string} queryFileUri
 *   The HCFS URI of the script that contains the Pig queries.
 *
 * @property {Object} queryList
 *   A list of queries.
 *
 *   This object should have the same structure as [QueryList]{@link google.cloud.dataproc.v1.QueryList}
 *
 * @property {boolean} continueOnFailure
 *   Optional. Whether to continue executing queries if a query fails.
 *   The default value is `false`. Setting to `true` can be useful when executing
 *   independent parallel queries.
 *
 * @property {Object.<string, string>} scriptVariables
 *   Optional. Mapping of query variable names to values (equivalent to the Pig
 *   command: `name=[value]`).
 *
 * @property {Object.<string, string>} properties
 *   Optional. A mapping of property names to values, used to configure Pig.
 *   Properties that conflict with values set by the Cloud Dataproc API may be
 *   overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
 *   /etc/pig/conf/pig.properties, and classes in user code.
 *
 * @property {string[]} jarFileUris
 *   Optional. HCFS URIs of jar files to add to the CLASSPATH of
 *   the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
 *
 * @property {Object} loggingConfig
 *   Optional. The runtime log config for job execution.
 *
 *   This object should have the same structure as [LoggingConfig]{@link google.cloud.dataproc.v1.LoggingConfig}
 *
 * @typedef PigJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.PigJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var PigJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud Dataproc job config.
 *
 * @property {string} clusterName
 *   Required. The name of the cluster where the job will be submitted.
 *
 * @property {string} clusterUuid
 *   Output-only. A cluster UUID generated by the Cloud Dataproc service when
 *   the job is submitted.
 *
 * @typedef JobPlacement
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.JobPlacement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var JobPlacement = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud Dataproc job status.
 *
 * @property {number} state
 *   Output-only. A state message specifying the overall job state.
 *
 *   The number should be among the values of [State]{@link google.cloud.dataproc.v1.State}
 *
 * @property {string} details
 *   Output-only. Optional job state details, such as an error
 *   description if the state is <code>ERROR</code>.
 *
 * @property {Object} stateStartTime
 *   Output-only. The time when this state was entered.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} substate
 *   Output-only. Additional state information, which includes
 *   status reported by the agent.
 *
 *   The number should be among the values of [Substate]{@link google.cloud.dataproc.v1.Substate}
 *
 * @typedef JobStatus
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.JobStatus definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var JobStatus = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The job state.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  State: {

    /**
     * The job state is unknown.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The job is pending; it has been submitted, but is not yet running.
     */
    PENDING: 1,

    /**
     * Job has been received by the service and completed initial setup;
     * it will soon be submitted to the cluster.
     */
    SETUP_DONE: 8,

    /**
     * The job is running on the cluster.
     */
    RUNNING: 2,

    /**
     * A CancelJob request has been received, but is pending.
     */
    CANCEL_PENDING: 3,

    /**
     * Transient in-flight resources have been canceled, and the request to
     * cancel the running job has been issued to the cluster.
     */
    CANCEL_STARTED: 7,

    /**
     * The job cancellation was successful.
     */
    CANCELLED: 4,

    /**
     * The job has completed successfully.
     */
    DONE: 5,

    /**
     * The job has completed, but encountered an error.
     */
    ERROR: 6,

    /**
     * Job attempt has failed. The detail field contains failure details for
     * this attempt.
     *
     * Applies to restartable jobs only.
     */
    ATTEMPT_FAILURE: 9
  },

  /**
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  Substate: {
    UNSPECIFIED: 0,

    /**
     * The Job is submitted to the agent.
     *
     * Applies to RUNNING state.
     */
    SUBMITTED: 1,

    /**
     * The Job has been received and is awaiting execution (it may be waiting
     * for a condition to be met). See the "details" field for the reason for
     * the delay.
     *
     * Applies to RUNNING state.
     */
    QUEUED: 2,

    /**
     * The agent-reported status is out of date, which may be caused by a
     * loss of communication between the agent and Cloud Dataproc. If the
     * agent does not send a timely update, the job will fail.
     *
     * Applies to RUNNING state.
     */
    STALE_STATUS: 3
  }
};

/**
 * Encapsulates the full scoping used to reference a job.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} jobId
 *   Optional. The job ID, which must be unique within the project. The job ID
 *   is generated by the server upon job submission or provided by the user as a
 *   means to perform retries without creating duplicate jobs. The ID must
 *   contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or
 *   hyphens (-). The maximum length is 100 characters.
 *
 * @typedef JobReference
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.JobReference definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var JobReference = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A YARN application created by a job. Application information is a subset of
 * <code>org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto</code>.
 *
 * **Beta Feature**: This report is available for testing purposes only. It may
 * be changed before final release.
 *
 * @property {string} name
 *   Required. The application name.
 *
 * @property {number} state
 *   Required. The application state.
 *
 *   The number should be among the values of [State]{@link google.cloud.dataproc.v1.State}
 *
 * @property {number} progress
 *   Required. The numerical progress of the application, from 1 to 100.
 *
 * @property {string} trackingUrl
 *   Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or
 *   TimelineServer that provides application-specific information. The URL uses
 *   the internal hostname, and requires a proxy server for resolution and,
 *   possibly, access.
 *
 * @typedef YarnApplication
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.YarnApplication definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var YarnApplication = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The application state, corresponding to
   * <code>YarnProtos.YarnApplicationStateProto</code>.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  State: {

    /**
     * Status is unspecified.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * Status is NEW.
     */
    NEW: 1,

    /**
     * Status is NEW_SAVING.
     */
    NEW_SAVING: 2,

    /**
     * Status is SUBMITTED.
     */
    SUBMITTED: 3,

    /**
     * Status is ACCEPTED.
     */
    ACCEPTED: 4,

    /**
     * Status is RUNNING.
     */
    RUNNING: 5,

    /**
     * Status is FINISHED.
     */
    FINISHED: 6,

    /**
     * Status is FAILED.
     */
    FAILED: 7,

    /**
     * Status is KILLED.
     */
    KILLED: 8
  }
};

/**
 * A Cloud Dataproc job resource.
 *
 * @property {Object} reference
 *   Optional. The fully qualified reference to the job, which can be used to
 *   obtain the equivalent REST path of the job resource. If this property
 *   is not specified when a job is created, the server generates a
 *   <code>job_id</code>.
 *
 *   This object should have the same structure as [JobReference]{@link google.cloud.dataproc.v1.JobReference}
 *
 * @property {Object} placement
 *   Required. Job information, including how, when, and where to
 *   run the job.
 *
 *   This object should have the same structure as [JobPlacement]{@link google.cloud.dataproc.v1.JobPlacement}
 *
 * @property {Object} hadoopJob
 *   Job is a Hadoop job.
 *
 *   This object should have the same structure as [HadoopJob]{@link google.cloud.dataproc.v1.HadoopJob}
 *
 * @property {Object} sparkJob
 *   Job is a Spark job.
 *
 *   This object should have the same structure as [SparkJob]{@link google.cloud.dataproc.v1.SparkJob}
 *
 * @property {Object} pysparkJob
 *   Job is a Pyspark job.
 *
 *   This object should have the same structure as [PySparkJob]{@link google.cloud.dataproc.v1.PySparkJob}
 *
 * @property {Object} hiveJob
 *   Job is a Hive job.
 *
 *   This object should have the same structure as [HiveJob]{@link google.cloud.dataproc.v1.HiveJob}
 *
 * @property {Object} pigJob
 *   Job is a Pig job.
 *
 *   This object should have the same structure as [PigJob]{@link google.cloud.dataproc.v1.PigJob}
 *
 * @property {Object} sparkSqlJob
 *   Job is a SparkSql job.
 *
 *   This object should have the same structure as [SparkSqlJob]{@link google.cloud.dataproc.v1.SparkSqlJob}
 *
 * @property {Object} status
 *   Output-only. The job status. Additional application-specific
 *   status information may be contained in the <code>type_job</code>
 *   and <code>yarn_applications</code> fields.
 *
 *   This object should have the same structure as [JobStatus]{@link google.cloud.dataproc.v1.JobStatus}
 *
 * @property {Object[]} statusHistory
 *   Output-only. The previous job status.
 *
 *   This object should have the same structure as [JobStatus]{@link google.cloud.dataproc.v1.JobStatus}
 *
 * @property {Object[]} yarnApplications
 *   Output-only. The collection of YARN applications spun up by this job.
 *
 *   **Beta** Feature: This report is available for testing purposes only. It may
 *   be changed before final release.
 *
 *   This object should have the same structure as [YarnApplication]{@link google.cloud.dataproc.v1.YarnApplication}
 *
 * @property {string} driverOutputResourceUri
 *   Output-only. A URI pointing to the location of the stdout of the job's
 *   driver program.
 *
 * @property {string} driverControlFilesUri
 *   Output-only. If present, the location of miscellaneous control files
 *   which may be used as part of job setup and handling. If not present,
 *   control files may be placed in the same location as `driver_output_uri`.
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels to associate with this job.
 *   Label **keys** must contain 1 to 63 characters, and must conform to
 *   [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *   Label **values** may be empty, but, if present, must contain 1 to 63
 *   characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *   No more than 32 labels can be associated with a job.
 *
 * @property {Object} scheduling
 *   Optional. Job scheduling configuration.
 *
 *   This object should have the same structure as [JobScheduling]{@link google.cloud.dataproc.v1.JobScheduling}
 *
 * @typedef Job
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.Job definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var Job = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Job scheduling options.
 *
 * **Beta Feature**: These options are available for testing purposes only.
 * They may be changed before final release.
 *
 * @property {number} maxFailuresPerHour
 *   Optional. Maximum number of times per hour a driver may be restarted as
 *   a result of driver terminating with non-zero code before job is
 *   reported failed.
 *
 *   A job may be reported as thrashing if driver exits with non-zero code
 *   4 times within 10 minute window.
 *
 *   Maximum value is 10.
 *
 * @typedef JobScheduling
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.JobScheduling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var JobScheduling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to submit a job.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {Object} job
 *   Required. The job resource.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.dataproc.v1.Job}
 *
 * @typedef SubmitJobRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.SubmitJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var SubmitJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to get the resource representation for a job in a project.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} jobId
 *   Required. The job ID.
 *
 * @typedef GetJobRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.GetJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var GetJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list jobs in a project.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {number} pageSize
 *   Optional. The number of results to return in each response.
 *
 * @property {string} pageToken
 *   Optional. The page token, returned by a previous call, to request the
 *   next page of results.
 *
 * @property {string} clusterName
 *   Optional. If set, the returned jobs list includes only jobs that were
 *   submitted to the named cluster.
 *
 * @property {number} jobStateMatcher
 *   Optional. Specifies enumerated categories of jobs to list.
 *   (default = match ALL jobs).
 *
 *   If `filter` is provided, `jobStateMatcher` will be ignored.
 *
 *   The number should be among the values of [JobStateMatcher]{@link google.cloud.dataproc.v1.JobStateMatcher}
 *
 * @property {string} filter
 *   Optional. A filter constraining the jobs to list. Filters are
 *   case-sensitive and have the following syntax:
 *
 *   [field = value] AND [field [= value]] ...
 *
 *   where **field** is `status.state` or `labels.[KEY]`, and `[KEY]` is a label
 *   key. **value** can be `*` to match all values.
 *   `status.state` can be either `ACTIVE` or `NON_ACTIVE`.
 *   Only the logical `AND` operator is supported; space-separated items are
 *   treated as having an implicit `AND` operator.
 *
 *   Example filter:
 *
 *   status.state = ACTIVE AND labels.env = staging AND labels.starred = *
 *
 * @typedef ListJobsRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var ListJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A matcher that specifies categories of job states.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  JobStateMatcher: {

    /**
     * Match all jobs, regardless of state.
     */
    ALL: 0,

    /**
     * Only match jobs in non-terminal states: PENDING, RUNNING, or
     * CANCEL_PENDING.
     */
    ACTIVE: 1,

    /**
     * Only match jobs in terminal states: CANCELLED, DONE, or ERROR.
     */
    NON_ACTIVE: 2
  }
};

/**
 * A request to update a job.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} jobId
 *   Required. The job ID.
 *
 * @property {Object} job
 *   Required. The changes to the job.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.dataproc.v1.Job}
 *
 * @property {Object} updateMask
 *   Required. Specifies the path, relative to <code>Job</code>, of
 *   the field to update. For example, to update the labels of a Job the
 *   <code>update_mask</code> parameter would be specified as
 *   <code>labels</code>, and the `PATCH` request body would specify the new
 *   value. <strong>Note:</strong> Currently, <code>labels</code> is the only
 *   field that can be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateJobRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.UpdateJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var UpdateJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A list of jobs in a project.
 *
 * @property {Object[]} jobs
 *   Output-only. Jobs list.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.dataproc.v1.Job}
 *
 * @property {string} nextPageToken
 *   Optional. This token is included in the response if there are more results
 *   to fetch. To fetch additional results, provide this value as the
 *   `page_token` in a subsequent <code>ListJobsRequest</code>.
 *
 * @typedef ListJobsResponse
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var ListJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to cancel a job.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} jobId
 *   Required. The job ID.
 *
 * @typedef CancelJobRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.CancelJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var CancelJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete a job.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the job
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} jobId
 *   Required. The job ID.
 *
 * @typedef DeleteJobRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DeleteJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/jobs.proto}
 */
var DeleteJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};