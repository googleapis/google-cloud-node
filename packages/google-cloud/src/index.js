/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * @module google-cloud
 */

'use strict';

var extend = require('extend');

/**
 * The APIs exposed to the user.
 *
 * @type {object}
 * @private
 */
var apis = {
  /**
   * Analyze Big Data in the cloud with
   * [Google BigQuery](https://cloud.google.com/bigquery). Run fast, SQL-like
   * queries against multi-terabyte datasets in seconds. Scalable and easy to
   * use, BigQuery gives you real-time insights about your data.
   *
   * @type {module:bigquery}
   *
   * @return {module:bigquery}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var bigquery = gcloud.bigquery({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  bigquery: require('@google-cloud/bigquery'),

  /**
   * [Cloud Bigtable](https://cloud.google.com/bigtable/) is Google's NoSQL Big
   * Data database service. It's the same database that powers many core Google
   * services, including Search, Analytics, Maps, and Gmail.
   *
   * @type {module:bigtable}
   *
   * @return {module:bigtable}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var bigtable = gcloud.bigtable({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json',
   *   zone: 'us-central1-b',
   *   cluster: 'google-cloud-node'
   * });
   */
  bigtable: require('@google-cloud/bigtable'),

  /**
   * With [Compute Engine](https://cloud.google.com/compute/), you can run
   * large-scale workloads on virtual machines hosted on Google's
   * infrastructure. Choose a VM that fits your needs and gain the performance
   * of Google’s worldwide fiber network.
   *
   * @type {module:compute}
   *
   * @return {module:compute}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var gce = gcloud.compute({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  compute: require('@google-cloud/compute'),

  /**
   * [Cloud Datastore](https://developers.google.com/datastore/) is a
   * fully managed, schemaless database for storing non-relational data. Use
   * this object to create a Dataset to interact with your data, an "Int", and a
   * "Double" representation.
   *
   * @type {module:datastore}
   *
   * @return {module:datastore}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var datastore = gcloud.datastore({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  datastore: require('@google-cloud/datastore'),

  /**
   * The [Data Loss Prevention (DLP) API](https://cloud.google.com/dlp) allows
   * clients to detect the presence of Personally Identifiable Information (PII)
   * and other privacy-sensitive data in user-supplied, unstructured data
   * streams, like text blocks or images.
   *
   * The service also includes methods for sensitive data redaction and
   * scheduling of data scans on Google Cloud Platform based data sets.
   *
   * @type {module:dlp}
   *
   * @return {module:dlp}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var dlp = gcloud.dlp({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  dlp: require('@google-cloud/dlp'),

  /**
   * [Cloud DNS](https://cloud.google.com/dns/what-is-cloud-dns) is a
   * high-performance, resilient, global DNS service that provides a cost-
   * effective way to make your applications and services available to your
   * users. This programmable, authoritative DNS service can be used to easily
   * publish and manage DNS records using the same infrastructure relied upon by
   * Google.
   *
   * @type {module:dns}
   *
   * @return {module:dns}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var dns = gcloud.dns({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  dns: require('@google-cloud/dns'),

  /**
   * The [Cloud Natural Language](https://cloud.google.com/natural-language/docs)
   * API provides natural language understanding technologies to developers,
   * including sentiment analysis, entity recognition, and syntax analysis.
   *
   * @type {module:language}
   *
   * @return {module:language}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var language = gcloud.language({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  language: require('@google-cloud/language'),

  /**
   * [Stackdriver Logging](https://cloud.google.com/logging/docs) allows you to
   * store, search, analyze, monitor, and alert on log data and events from
   * Google Cloud Platform and Amazon Web Services (AWS).
   *
   * @type {module:logging}
   *
   * @return {module:logging}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var logging = gcloud.logging({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  logging: require('@google-cloud/logging'),

  /**
   * [Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects
   * metrics, events, and metadata from Google Cloud Platform, Amazon Web
   * Services (AWS), hosted uptime probes, application instrumentation, and a
   * variety of common application components including Cassandra, Nginx, Apache
   * Web Server, Elasticsearch and many others. Stackdriver ingests that data
   * and generates insights via dashboards, charts, and alerts.
   *
   * <h2>This is an auto-generated API</h2>
   *
   * It does not follow the conventions you're familiar with from other parts of
   * our library. A handwritten layer is not yet available.
   *
   * The example below shows you how to instantiate the generated client. For
   * further documentation, please browse the
   * [Monitoring .proto files](https://github.com/googleapis/googleapis/tree/master/google/monitoring/v3)
   * on GitHub.
   *
   * @type {module:monitoring}
   *
   * @return {module:monitoring}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var monitoring = gcloud.monitoring.v3({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  monitoring: require('@google-cloud/monitoring'),

  /**
   * The [Google Prediction API](https://cloud.google.com/prediction/docs/getting-started)
   * provides pattern-matching and machine learning capabilities. Given a set of
   * data examples to train against, you can create applications that can
   * perform the following tasks:
   *
   *   - Given a user's past viewing habits, predict what other movies or
   *   products a user might like.
   *   - Categorize emails as spam or non-spam.
   *   - Analyze posted comments about your product to determine whether they
   *   have a positive or negative tone.
   *   - Guess how much a user might spend on a given day, given his spending
   *   history.
   *
   * @type {module:prediction}
   *
   * @return {module:prediction}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var prediction = gcloud.prediction({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  prediction: require('@google-cloud/prediction'),

  /**
   * [Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
   * reliable, many-to-many, asynchronous messaging service from Cloud
   * Platform.
   *
   * @type {module:pubsub}
   *
   * @return {module:pubsub}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var pubsub = gcloud.pubsub({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  pubsub: require('@google-cloud/pubsub'),

  /**
   * The [Cloud Resource Manager](https://cloud.google.com/resource-manager/)
   * provides methods that you can use to programmatically manage your projects
   * in the Google Cloud Platform. With this API, you can do the following:
   *
   *   - Get a list of all projects associated with an account.
   *   - Create new projects.
   *   - Update existing projects.
   *   - Delete projects.
   *   - Recover projects.
   *
   * @type {module:resource}
   *
   * @return {module:resource}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var resource = gcloud.resource({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  resource: require('@google-cloud/resource'),

  /**
   * [Cloud Spanner](https://cloud.google.com/spanner) is a highly scalable,
   * transactional, managed, NewSQL database service. Cloud Spanner solves the
   * need for a horizontally-scaling database with consistent global transaction
   * and SQL semantics. With Cloud Spanner you don't need to choose between
   * consistency and horizontal scaling — you get both.
   *
   * @type {module:spanner}
   *
   * @return {module:spanner}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var spanner = gcloud.spanner({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  spanner: require('@google-cloud/spanner'),

  /**
   * The [Cloud Speech API](https://cloud.google.com/speech/docs) enables easy
   * integration of Google speech recognition technologies into developer
   * applications. Send audio and receive a text transcription from the Cloud
   * Speech API service.
   *
   * @type {module:speech}
   *
   * @return {module:speech}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var speech = gcloud.speech({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  speech: require('@google-cloud/speech'),

  /**
   * Cloud Storage allows you to store data on Google infrastructure.
   * Read [Cloud Storage API docs](https://developers.google.com/storage)
   * for more information.
   *
   * @type {module:storage}
   *
   * @return {module:storage}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var gcs = gcloud.storage({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  storage: require('@google-cloud/storage'),

  /**
   * With [Cloud Translation](https://cloud.google.com/translate), you
   * can dynamically translate text between thousands of language pairs.
   *
   * This API lets websites and programs integrate with Cloud Translation
   * API programmatically.
   *
   * @type {module:translate}
   *
   * @return {module:translate}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var translate = gcloud.translate({
   *   key: 'API Key'
   * });
   */
  translate: require('@google-cloud/translate'),

  /**
   * [Google Cloud Video Intelligence API](https://cloud.google.com/video-intelligence)
   * makes videos searchable, and discoverable, by extracting metadata with an
   * easy to use REST API. You can now search every moment of every video file
   * in your catalog and find every occurrence as well as its significance. It
   * quickly annotates videos stored in Google Cloud Storage, and helps you
   * identify key nouns entities of your video, and when they occur within the
   * video. Separate signal from noise, by retrieving relevant information at
   * the video, shot or per frame.
   *
   * @type {module:video-intelligence}
   *
   * @return {module:video-intelligence}
   *
   * @example
   * var gcloud = require('google-cloud');
   * var video = gcloud.videoIntelligence({
   *   projectId: 'grape-spaceship-123',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   */
  videoIntelligence: require('@google-cloud/video-intelligence'),

  /**
   * The [Cloud Vision API](https://cloud.google.com/vision/docs) allows easy
   * integration of vision detection features, including image labeling, face
   * and landmark detection, optical character recognition (OCR), and tagging of
   * explicit content.
   *
   * To learn more about the Vision API, see the
   * [Getting Started guide](https://cloud.google.com/vision/docs/getting-started).
   *
   * @type {module:vision}
   *
   * @example
   * var gcloud = require('google-cloud')({
   *   keyFilename: '/path/to/keyfile.json',
   *   projectId: 'grape-spaceship-123'
   * });
   *
   * var vision = gcloud.vision();
   */
  vision: require('@google-cloud/vision')
};

/*! Developer Documentation
 *
 * Previously we used gcloud to expose an object filled with factory patterns,
 * this allowed us to easily cascade global configurations to the individual
 * apis by storing them in a closure.
 *
 * The issue with the factory pattern approach was that we had to extend the
 * factory functions to expose any static members of the api class. Instead we
 * now store global configurations as a "private" member of the returned api
 * object as `config_`.
 *
 * Since our api constructors actually double up as factory patterns already,
 * we can determine when a particular api is being created and extend the
 * global configurations at that time.
 */
/**
 * There are two key ways to use the `gcloud` module.
 *
 * 1. Provide connection & configuration details up-front.
 *
 * 2. Provide them at the time of instantiation of sub-modules, e.g. a Datastore
 * dataset, a Cloud Storage bucket, etc.
 *
 * ### Advanced Usage
 *
 * #### Interceptors
 *
 * All of the returned modules hold a special `interceptors` array you can use
 * to have control over the flow of the internal operations of this library. As
 * of now, we support a request interceptor, allowing you to tweak all of the
 * API request options before the HTTP request is sent.
 *
 * Note: If you are using the `maxApiCalls` option with a method, your request
 * interceptor will still be called, even if the `maxApiCalls` limit was
 * reached. The request to the API will still be prevented.
 *
 * See the example below for more.
 *
 * @alias module:google-cloud
 * @constructor
 *
 * @param {object=} options - Configuration object.
 * @param {string} options.projectId - The project ID from the Google
 *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check the
 *     environment variable `GCLOUD_PROJECT` for your project ID. If your app is
 *     running in an environment which supports
 *     [Application Default Credentials](https://developers.google.com/identity/protocols/application-default-credentials),
 *     your project ID will be detected automatically.
 * @param {string} options.keyFilename - Full path to the a .json, .pem, or .p12
 *     key downloaded from the Google Developers Console. If you provide a path
 *     to a JSON file, the `projectId` option above is not necessary. NOTE: .pem
 *     and .p12 require you to specify `options.email` as well.
 * @param {string} options.email - Account email address. Required when using a
 *     .pem or .p12 keyFilename.
 * @param {object} options.credentials - Credentials object.
 * @param {string} options.credentials.client_email
 * @param {string} options.credentials.private_key
 * @param {boolean} options.autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @param {number} options.maxRetries - Maximum number of automatic retries
 *     attempted before returning the error. (default: 3)
 * @param {function} options.promise - Custom promise module to use instead of
 *     native Promises.
 *
 * @example
 * var gcloud = require('google-cloud')({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * //-
 * // From the same authentication credentials, you may now access your Google
 * // Cloud Storage buckets, for example.
 * //-
 * var gcs = gcloud.storage();
 * var bucket = gcs.bucket('photos');
 *
 * //-
 * // However, if you need to override the global credentials, you may provide
 * // new ones.
 * //-
 * var otherGcs = gcloud.storage({
 *   keyFilename: '/path/to/other/keyfile.json'
 * });
 * var otherBucket = otherGcs.bucket('other-photos');
 *
 * //-
 * // `gcs` and `otherGcs` will use their respective credentials for all future
 * // API requests.
 * //
 * // <h4>Interceptors</h4>
 * //
 * // Use a `request` interceptor to set a custom HTTP header on your requests.
 * //-
 * gcloud.interceptors.push({
 *   request: function(requestOptions) {
 *     requestOptions.headers = requestOptions.headers || {};
 *     requestOptions.headers['X-Cloud-Trace-Context'] = 'I will be overridden';
 *     return requestOptions;
 *   }
 * });
 *
 * //-
 * // You can also set an interceptor on the service level, like a Storage
 * // object.
 * //-
 * gcs.interceptors.push({
 *   request: function(requestOptions) {
 *     requestOptions.headers = requestOptions.headers || {};
 *     requestOptions.headers['X-Cloud-Trace-Context'] = 'I will be overridden';
 *     return requestOptions;
 *   }
 * });
 *
 * //-
 * // Additionally, set one on the service object level, such as a Bucket.
 * //-
 * bucket.interceptors.push({
 *   request: function(requestOptions) {
 *     requestOptions.headers = requestOptions.headers || {};
 *     requestOptions.headers['X-Cloud-Trace-Context'] = 'I win!';
 *     return requestOptions;
 *   }
 * });
 *
 * //-
 * // The following request will combine all of the headers, executed in the
 * // order from when they were assigned, respecting the hierarchy:
 * // global before service before service object.
 * //-
 * bucket.getMetadata(function() {
 *   // This HTTP request was sent with the 'I win!' header specified above.
 * });
 *
 * //-
 * // By default any methods that return a Promise object will use the native
 * // Promise constructor. If you wish to use a third-party library such as
 * // Bluebird, you can specify this via the `promise` option.
 * //-
 * var gcloud = require('google-cloud')({
 *   promise: require('bluebird')
 * });
 */
function gcloud(config) {
  config = extend(true, { interceptors_: [] }, config);

  var gcloudExposedApi = {
    config_: config,
    interceptors: config.interceptors_,
    promise: null
  };

  return Object.keys(apis).reduce(function(gcloudExposedApi, apiName) {
    var Class = apis[apiName];

    gcloudExposedApi[apiName] = Class;

    return gcloudExposedApi;
  }, gcloudExposedApi);
}

module.exports = extend(gcloud, apis);
