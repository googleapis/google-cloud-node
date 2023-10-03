/// <reference types="node" />
import * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, LocationsClient, LocationProtos } from 'google-gax';
import { Transform } from 'stream';
import type * as protos from '../../../protos/protos.js';
/**
 *  Cloud Tasks allows developers to manage the execution of background
 *  work in their applications.
 * @class
 * @memberof v2beta2
 */
export declare class CloudTasksClient {
    private _terminated;
    private _opts;
    private _providedCustomServicePath;
    private _gaxModule;
    private _gaxGrpc;
    private _protos;
    private _defaults;
    auth: gax.GoogleAuth;
    descriptors: Descriptors;
    warn: (code: string, message: string, warnType?: string) => void;
    innerApiCalls: {
        [name: string]: Function;
    };
    locationsClient: LocationsClient;
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    cloudTasksStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of CloudTasksClient.
     *
     * @param {object} [options] - The configuration object.
     * The options accepted by the constructor are described in detail
     * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
     * The common options are:
     * @param {object} [options.credentials] - Credentials object.
     * @param {string} [options.credentials.client_email]
     * @param {string} [options.credentials.private_key]
     * @param {string} [options.email] - Account email address. Required when
     *     using a .pem or .p12 keyFilename.
     * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
     *     .p12 key downloaded from the Google Developers Console. If you provide
     *     a path to a JSON file, the projectId option below is not necessary.
     *     NOTE: .pem and .p12 require you to specify options.email as well.
     * @param {number} [options.port] - The port on which to connect to
     *     the remote host.
     * @param {string} [options.projectId] - The project ID from the Google
     *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
     *     the environment variable GCLOUD_PROJECT for your project ID. If your
     *     app is running in an environment which supports
     *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
     *     your project ID will be detected automatically.
     * @param {string} [options.apiEndpoint] - The domain name of the
     *     API remote host.
     * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
     *     Follows the structure of {@link gapicConfig}.
     * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
     *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
     *     For more information, please check the
     *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
     * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
     *     need to avoid loading the default gRPC version and want to use the fallback
     *     HTTP implementation. Load only fallback version and pass it to the constructor:
     *     ```
     *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
     *     const client = new CloudTasksClient({fallback: 'rest'}, gax);
     *     ```
     */
    constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback);
    /**
     * Initialize the client.
     * Performs asynchronous operations (such as authentication) and prepares the client.
     * This function will be called automatically when any class method is called for the
     * first time, but if you need to initialize it before calling an actual method,
     * feel free to call initialize() directly.
     *
     * You can await on this method if you want to make sure the client is initialized.
     *
     * @returns {Promise} A promise that resolves to an authenticated service stub.
     */
    initialize(): Promise<{
        [name: string]: Function;
    }>;
    /**
     * The DNS address for this API service.
     * @returns {string} The DNS address for this service.
     */
    static get servicePath(): string;
    /**
     * The DNS address for this API service - same as servicePath(),
     * exists for compatibility reasons.
     * @returns {string} The DNS address for this service.
     */
    static get apiEndpoint(): string;
    /**
     * The port for this API service.
     * @returns {number} The default port for this service.
     */
    static get port(): number;
    /**
     * The scopes needed to make gRPC calls for every method defined
     * in this service.
     * @returns {string[]} List of default scopes.
     */
    static get scopes(): string[];
    getProjectId(): Promise<string>;
    getProjectId(callback: Callback<string, undefined, undefined>): void;
    /**
     * Gets a queue.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The resource name of the queue. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.get_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_GetQueue_async
     */
    getQueue(request?: protos.google.cloud.tasks.v2beta2.IGetQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.IGetQueueRequest | undefined,
        {} | undefined
    ]>;
    getQueue(request: protos.google.cloud.tasks.v2beta2.IGetQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IGetQueueRequest | null | undefined, {} | null | undefined>): void;
    getQueue(request: protos.google.cloud.tasks.v2beta2.IGetQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IGetQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a queue.
     *
     * Queues created with this method allow tasks to live for a maximum of 31
     * days. After a task is 31 days old, the task will be deleted regardless of
     * whether it was dispatched or not.
     *
     * WARNING: Using this method may have unintended side effects if you are
     * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
     * Read
     * [Overview of Queue Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The location name in which the queue will be created.
     *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     *
     *   The list of allowed locations can be obtained by calling Cloud
     *   Tasks' implementation of
     *   {@link protos.google.cloud.location.Locations.ListLocations|ListLocations}.
     * @param {google.cloud.tasks.v2beta2.Queue} request.queue
     *   Required. The queue to create.
     *
     *   {@link protos.google.cloud.tasks.v2beta2.Queue.name|Queue's name} cannot be the same as
     *   an existing queue.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.create_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_CreateQueue_async
     */
    createQueue(request?: protos.google.cloud.tasks.v2beta2.ICreateQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.ICreateQueueRequest | undefined,
        {} | undefined
    ]>;
    createQueue(request: protos.google.cloud.tasks.v2beta2.ICreateQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.ICreateQueueRequest | null | undefined, {} | null | undefined>): void;
    createQueue(request: protos.google.cloud.tasks.v2beta2.ICreateQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.ICreateQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Updates a queue.
     *
     * This method creates the queue if it does not exist and updates
     * the queue if it does exist.
     *
     * Queues created with this method allow tasks to live for a maximum of 31
     * days. After a task is 31 days old, the task will be deleted regardless of
     * whether it was dispatched or not.
     *
     * WARNING: Using this method may have unintended side effects if you are
     * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
     * Read
     * [Overview of Queue Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {google.cloud.tasks.v2beta2.Queue} request.queue
     *   Required. The queue to create or update.
     *
     *   The queue's {@link protos.google.cloud.tasks.v2beta2.Queue.name|name} must be
     *   specified.
     *
     *   Output only fields cannot be modified using UpdateQueue.
     *   Any value specified for an output only field will be ignored.
     *   The queue's {@link protos.google.cloud.tasks.v2beta2.Queue.name|name} cannot be
     *   changed.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   A mask used to specify which fields of the queue are being updated.
     *
     *   If empty, then all fields will be updated.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.update_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_UpdateQueue_async
     */
    updateQueue(request?: protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest | undefined,
        {} | undefined
    ]>;
    updateQueue(request: protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest | null | undefined, {} | null | undefined>): void;
    updateQueue(request: protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IUpdateQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Deletes a queue.
     *
     * This command will delete the queue even if it has tasks in it.
     *
     * Note: If you delete a queue, a queue with the same name can't be created
     * for 7 days.
     *
     * WARNING: Using this method may have unintended side effects if you are
     * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
     * Read
     * [Overview of Queue Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.delete_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_DeleteQueue_async
     */
    deleteQueue(request?: protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest | undefined,
        {} | undefined
    ]>;
    deleteQueue(request: protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest | null | undefined, {} | null | undefined>): void;
    deleteQueue(request: protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IDeleteQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Purges a queue by deleting all of its tasks.
     *
     * All tasks created before this method is called are permanently deleted.
     *
     * Purge operations can take up to one minute to take effect. Tasks
     * might be dispatched before the purge takes effect. A purge is irreversible.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.purge_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_PurgeQueue_async
     */
    purgeQueue(request?: protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest | undefined,
        {} | undefined
    ]>;
    purgeQueue(request: protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest | null | undefined, {} | null | undefined>): void;
    purgeQueue(request: protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IPurgeQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Pauses the queue.
     *
     * If a queue is paused then the system will stop dispatching tasks
     * until the queue is resumed via
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ResumeQueue|ResumeQueue}. Tasks can
     * still be added when the queue is paused. A queue is paused if its
     * {@link protos.google.cloud.tasks.v2beta2.Queue.state|state} is
     * {@link protos.google.cloud.tasks.v2beta2.Queue.State.PAUSED|PAUSED}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.pause_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_PauseQueue_async
     */
    pauseQueue(request?: protos.google.cloud.tasks.v2beta2.IPauseQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.IPauseQueueRequest | undefined,
        {} | undefined
    ]>;
    pauseQueue(request: protos.google.cloud.tasks.v2beta2.IPauseQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IPauseQueueRequest | null | undefined, {} | null | undefined>): void;
    pauseQueue(request: protos.google.cloud.tasks.v2beta2.IPauseQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IPauseQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Resume a queue.
     *
     * This method resumes a queue after it has been
     * {@link protos.google.cloud.tasks.v2beta2.Queue.State.PAUSED|PAUSED} or
     * {@link protos.google.cloud.tasks.v2beta2.Queue.State.DISABLED|DISABLED}. The state of a
     * queue is stored in the queue's
     * {@link protos.google.cloud.tasks.v2beta2.Queue.state|state}; after calling this method
     * it will be set to
     * {@link protos.google.cloud.tasks.v2beta2.Queue.State.RUNNING|RUNNING}.
     *
     * WARNING: Resuming many high-QPS queues at the same time can
     * lead to target overloading. If you are resuming high-QPS
     * queues, follow the 500/50/5 pattern described in
     * [Managing Cloud Tasks Scaling
     * Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.resume_queue.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_ResumeQueue_async
     */
    resumeQueue(request?: protos.google.cloud.tasks.v2beta2.IResumeQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue,
        protos.google.cloud.tasks.v2beta2.IResumeQueueRequest | undefined,
        {} | undefined
    ]>;
    resumeQueue(request: protos.google.cloud.tasks.v2beta2.IResumeQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IResumeQueueRequest | null | undefined, {} | null | undefined>): void;
    resumeQueue(request: protos.google.cloud.tasks.v2beta2.IResumeQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IQueue, protos.google.cloud.tasks.v2beta2.IResumeQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Update queue list by uploading a queue.yaml file.
     *
     * The queue.yaml file is supplied in the request body as a YAML encoded
     * string. This method was added to support gcloud clients versions before
     * 322.0.0. New clients should use CreateQueue instead of this method.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.appId
     *   Required. The App ID is supplied as an HTTP parameter. Unlike internal
     *   usage of App ID, it does not include a region prefix. Rather, the App ID
     *   represents the Project ID against which to make the request.
     * @param {google.api.HttpBody} request.httpBody
     *   The http body contains the queue.yaml file which used to update queue lists
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.upload_queue_yaml.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_UploadQueueYaml_async
     */
    uploadQueueYaml(request?: protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest | undefined,
        {} | undefined
    ]>;
    uploadQueueYaml(request: protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest | null | undefined, {} | null | undefined>): void;
    uploadQueueYaml(request: protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IUploadQueueYamlRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets the access control policy for a
     * {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}. Returns an empty policy if the
     * resource exists and does not have a policy set.
     *
     * Authorization requires the following
     * [Google IAM](https://cloud.google.com/iam) permission on the specified
     * resource parent:
     *
     * * `cloudtasks.queues.getIamPolicy`
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.resource
     *   REQUIRED: The resource for which the policy is being requested.
     *   See the operation documentation for the appropriate value for this field.
     * @param {google.iam.v1.GetPolicyOptions} request.options
     *   OPTIONAL: A `GetPolicyOptions` object for specifying options to
     *   `GetIamPolicy`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.iam.v1.Policy|Policy}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.get_iam_policy.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_GetIamPolicy_async
     */
    getIamPolicy(request?: protos.google.iam.v1.IGetIamPolicyRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.IPolicy,
        protos.google.iam.v1.IGetIamPolicyRequest | undefined,
        {} | undefined
    ]>;
    getIamPolicy(request: protos.google.iam.v1.IGetIamPolicyRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.IGetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    getIamPolicy(request: protos.google.iam.v1.IGetIamPolicyRequest, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.IGetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Sets the access control policy for a
     * {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}. Replaces any existing policy.
     *
     * Note: The Cloud Console does not check queue-level IAM permissions yet.
     * Project-level permissions are required to use the Cloud Console.
     *
     * Authorization requires the following
     * [Google IAM](https://cloud.google.com/iam) permission on the specified
     * resource parent:
     *
     * * `cloudtasks.queues.setIamPolicy`
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.resource
     *   REQUIRED: The resource for which the policy is being specified.
     *   See the operation documentation for the appropriate value for this field.
     * @param {google.iam.v1.Policy} request.policy
     *   REQUIRED: The complete policy to be applied to the `resource`. The size of
     *   the policy is limited to a few 10s of KB. An empty policy is a
     *   valid policy but certain Cloud Platform services (such as Projects)
     *   might reject them.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
     *   the fields in the mask will be modified. If no mask is provided, the
     *   following default mask is used:
     *
     *   `paths: "bindings, etag"`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.iam.v1.Policy|Policy}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.set_iam_policy.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_SetIamPolicy_async
     */
    setIamPolicy(request?: protos.google.iam.v1.ISetIamPolicyRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.IPolicy,
        protos.google.iam.v1.ISetIamPolicyRequest | undefined,
        {} | undefined
    ]>;
    setIamPolicy(request: protos.google.iam.v1.ISetIamPolicyRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.ISetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    setIamPolicy(request: protos.google.iam.v1.ISetIamPolicyRequest, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.ISetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns permissions that a caller has on a
     * {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}. If the resource does not exist,
     * this will return an empty set of permissions, not a
     * {@link protos.google.rpc.Code.NOT_FOUND|NOT_FOUND} error.
     *
     * Note: This operation is designed to be used for building permission-aware
     * UIs and command-line tools, not for authorization checking. This operation
     * may "fail open" without warning.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.resource
     *   REQUIRED: The resource for which the policy detail is being requested.
     *   See the operation documentation for the appropriate value for this field.
     * @param {string[]} request.permissions
     *   The set of permissions to check for the `resource`. Permissions with
     *   wildcards (such as '*' or 'storage.*') are not allowed. For more
     *   information see
     *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.iam.v1.TestIamPermissionsResponse|TestIamPermissionsResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.test_iam_permissions.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_TestIamPermissions_async
     */
    testIamPermissions(request?: protos.google.iam.v1.ITestIamPermissionsRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.ITestIamPermissionsResponse,
        protos.google.iam.v1.ITestIamPermissionsRequest | undefined,
        {} | undefined
    ]>;
    testIamPermissions(request: protos.google.iam.v1.ITestIamPermissionsRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.ITestIamPermissionsResponse, protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined, {} | null | undefined>): void;
    testIamPermissions(request: protos.google.iam.v1.ITestIamPermissionsRequest, callback: Callback<protos.google.iam.v1.ITestIamPermissionsResponse, protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets a task.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.get_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_GetTask_async
     */
    getTask(request?: protos.google.cloud.tasks.v2beta2.IGetTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask,
        protos.google.cloud.tasks.v2beta2.IGetTaskRequest | undefined,
        {} | undefined
    ]>;
    getTask(request: protos.google.cloud.tasks.v2beta2.IGetTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IGetTaskRequest | null | undefined, {} | null | undefined>): void;
    getTask(request: protos.google.cloud.tasks.v2beta2.IGetTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IGetTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a task and adds it to a queue.
     *
     * Tasks cannot be updated after creation; there is no UpdateTask command.
     *
     * * For {@link protos.google.cloud.tasks.v2beta2.AppEngineHttpTarget|App Engine queues},
     * the maximum task size is
     *   100KB.
     * * For {@link protos.google.cloud.tasks.v2beta2.PullTarget|pull queues}, the maximum
     * task size is 1MB.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     *
     *   The queue must already exist.
     * @param {google.cloud.tasks.v2beta2.Task} request.task
     *   Required. The task to add.
     *
     *   Task names have the following format:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
     *   The user can optionally specify a task
     *   {@link protos.google.cloud.tasks.v2beta2.Task.name|name}. If a name is not specified
     *   then the system will generate a random unique task id, which will be set in
     *   the task returned in the {@link protos.google.cloud.tasks.v2beta2.Task.name|response}.
     *
     *   If {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} is not
     *   set or is in the past then Cloud Tasks will set it to the current time.
     *
     *   Task De-duplication:
     *
     *   Explicitly specifying a task ID enables task de-duplication.  If
     *   a task's ID is identical to that of an existing task or a task
     *   that was deleted or completed recently then the call will fail
     *   with {@link protos.google.rpc.Code.ALREADY_EXISTS|ALREADY_EXISTS}.
     *   If the task's queue was created using Cloud Tasks, then another task with
     *   the same name can't be created for ~1 hour after the original task was
     *   deleted or completed. If the task's queue was created using queue.yaml or
     *   queue.xml, then another task with the same name can't be created
     *   for ~9 days after the original task was deleted or completed.
     *
     *   Because there is an extra lookup cost to identify duplicate task
     *   names, these {@link protos.google.cloud.tasks.v2beta2.CloudTasks.CreateTask|CreateTask}
     *   calls have significantly increased latency. Using hashed strings for the
     *   task id or for the prefix of the task id is recommended. Choosing task ids
     *   that are sequential or have sequential prefixes, for example using a
     *   timestamp, causes an increase in latency and error rates in all
     *   task commands. The infrastructure relies on an approximately
     *   uniform distribution of task ids to store and serve tasks
     *   efficiently.
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.create_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_CreateTask_async
     */
    createTask(request?: protos.google.cloud.tasks.v2beta2.ICreateTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask,
        protos.google.cloud.tasks.v2beta2.ICreateTaskRequest | undefined,
        {} | undefined
    ]>;
    createTask(request: protos.google.cloud.tasks.v2beta2.ICreateTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.ICreateTaskRequest | null | undefined, {} | null | undefined>): void;
    createTask(request: protos.google.cloud.tasks.v2beta2.ICreateTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.ICreateTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Deletes a task.
     *
     * A task can be deleted if it is scheduled or dispatched. A task
     * cannot be deleted if it has completed successfully or permanently
     * failed.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.delete_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_DeleteTask_async
     */
    deleteTask(request?: protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest | undefined,
        {} | undefined
    ]>;
    deleteTask(request: protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest | null | undefined, {} | null | undefined>): void;
    deleteTask(request: protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IDeleteTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Leases tasks from a pull queue for
     * {@link protos.google.cloud.tasks.v2beta2.LeaseTasksRequest.lease_duration|lease_duration}.
     *
     * This method is invoked by the worker to obtain a lease. The
     * worker must acknowledge the task via
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.AcknowledgeTask|AcknowledgeTask}
     * after they have performed the work associated with the task.
     *
     * The {@link protos.google.cloud.tasks.v2beta2.PullMessage.payload|payload} is intended
     * to store data that the worker needs to perform the work associated with the
     * task. To return the payloads in the
     * {@link protos.google.cloud.tasks.v2beta2.LeaseTasksResponse|response}, set
     * {@link protos.google.cloud.tasks.v2beta2.LeaseTasksRequest.response_view|response_view}
     * to {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}.
     *
     * A maximum of 10 qps of
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} requests are
     * allowed per queue. {@link protos.google.rpc.Code.RESOURCE_EXHAUSTED|RESOURCE_EXHAUSTED}
     * is returned when this limit is
     * exceeded. {@link protos.google.rpc.Code.RESOURCE_EXHAUSTED|RESOURCE_EXHAUSTED}
     * is also returned when
     * {@link protos.google.cloud.tasks.v2beta2.RateLimits.max_tasks_dispatched_per_second|max_tasks_dispatched_per_second}
     * is exceeded.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {number} request.maxTasks
     *   The maximum number of tasks to lease.
     *
     *   The system will make a best effort to return as close to as
     *   `max_tasks` as possible.
     *
     *   The largest that `max_tasks` can be is 1000.
     *
     *   The maximum total size of a [lease tasks
     *   response][google.cloud.tasks.v2beta2.LeaseTasksResponse] is 32 MB. If the
     *   sum of all task sizes requested reaches this limit, fewer tasks than
     *   requested are returned.
     * @param {google.protobuf.Duration} request.leaseDuration
     *   Required. The duration of the lease.
     *
     *   Each task returned in the
     *   {@link protos.google.cloud.tasks.v2beta2.LeaseTasksResponse|response} will have its
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} set to the
     *   current time plus the `lease_duration`. The task is leased until its
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time}; thus, the
     *   task will not be returned to another
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} call before
     *   its {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time}.
     *
     *
     *   After the worker has successfully finished the work associated
     *   with the task, the worker must call via
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.AcknowledgeTask|AcknowledgeTask}
     *   before the {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time}.
     *   Otherwise the task will be returned to a later
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} call so that
     *   another worker can retry it.
     *
     *   The maximum lease duration is 1 week.
     *   `lease_duration` will be truncated to the nearest second.
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {string} request.filter
     *   `filter` can be used to specify a subset of tasks to lease.
     *
     *   When `filter` is set to `tag=<my-tag>` then the
     *   {@link protos.google.cloud.tasks.v2beta2.LeaseTasksResponse|response} will contain only
     *   tasks whose {@link protos.google.cloud.tasks.v2beta2.PullMessage.tag|tag} is equal to
     *   `<my-tag>`. `<my-tag>` must be less than 500 characters.
     *
     *   When `filter` is set to `tag_function=oldest_tag()`, only tasks which have
     *   the same tag as the task with the oldest
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} will be
     *   returned.
     *
     *   Grammar Syntax:
     *
     *   * `filter = "tag=" tag | "tag_function=" function`
     *
     *   * `tag = string`
     *
     *   * `function = "oldest_tag()"`
     *
     *   The `oldest_tag()` function returns tasks which have the same tag as the
     *   oldest task (ordered by schedule time).
     *
     *   SDK compatibility: Although the SDK allows tags to be either
     *   string or
     *   [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-),
     *   only UTF-8 encoded tags can be used in Cloud Tasks. Tag which
     *   aren't UTF-8 encoded can't be used in the
     *   {@link protos.google.cloud.tasks.v2beta2.LeaseTasksRequest.filter|filter} and the
     *   task's {@link protos.google.cloud.tasks.v2beta2.PullMessage.tag|tag} will be displayed
     *   as empty in Cloud Tasks.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.LeaseTasksResponse|LeaseTasksResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.lease_tasks.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_LeaseTasks_async
     */
    leaseTasks(request?: protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ILeaseTasksResponse,
        protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest | undefined,
        {} | undefined
    ]>;
    leaseTasks(request: protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ILeaseTasksResponse, protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest | null | undefined, {} | null | undefined>): void;
    leaseTasks(request: protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ILeaseTasksResponse, protos.google.cloud.tasks.v2beta2.ILeaseTasksRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Acknowledges a pull task.
     *
     * The worker, that is, the entity that
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|leased} this task must
     * call this method to indicate that the work associated with the task has
     * finished.
     *
     * The worker must acknowledge a task within the
     * {@link protos.google.cloud.tasks.v2beta2.LeaseTasksRequest.lease_duration|lease_duration}
     * or the lease will expire and the task will become available to be leased
     * again. After the task is acknowledged, it will not be returned
     * by a later {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks},
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.GetTask|GetTask}, or
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListTasks|ListTasks}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.protobuf.Timestamp} request.scheduleTime
     *   Required. The task's current schedule time, available in the
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} returned by
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} response or
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RenewLease|RenewLease} response.
     *   This restriction is to ensure that your worker currently holds the lease.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.acknowledge_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_AcknowledgeTask_async
     */
    acknowledgeTask(request?: protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest | undefined,
        {} | undefined
    ]>;
    acknowledgeTask(request: protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest | null | undefined, {} | null | undefined>): void;
    acknowledgeTask(request: protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Renew the current lease of a pull task.
     *
     * The worker can use this method to extend the lease by a new
     * duration, starting from now. The new task lease will be
     * returned in the task's
     * {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.protobuf.Timestamp} request.scheduleTime
     *   Required. The task's current schedule time, available in the
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} returned by
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} response or
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RenewLease|RenewLease} response.
     *   This restriction is to ensure that your worker currently holds the lease.
     * @param {google.protobuf.Duration} request.leaseDuration
     *   Required. The desired new lease duration, starting from now.
     *
     *
     *   The maximum lease duration is 1 week.
     *   `lease_duration` will be truncated to the nearest second.
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.renew_lease.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_RenewLease_async
     */
    renewLease(request?: protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask,
        protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest | undefined,
        {} | undefined
    ]>;
    renewLease(request: protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest | null | undefined, {} | null | undefined>): void;
    renewLease(request: protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IRenewLeaseRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Cancel a pull task's lease.
     *
     * The worker can use this method to cancel a task's lease by
     * setting its {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time}
     * to now. This will make the task available to be leased to the next caller
     * of {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.protobuf.Timestamp} request.scheduleTime
     *   Required. The task's current schedule time, available in the
     *   {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} returned by
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks|LeaseTasks} response or
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RenewLease|RenewLease} response.
     *   This restriction is to ensure that your worker currently holds the lease.
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.cancel_lease.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_CancelLease_async
     */
    cancelLease(request?: protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask,
        protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest | undefined,
        {} | undefined
    ]>;
    cancelLease(request: protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest | null | undefined, {} | null | undefined>): void;
    cancelLease(request: protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.ICancelLeaseRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Forces a task to run now.
     *
     * When this method is called, Cloud Tasks will dispatch the task, even if
     * the task is already running, the queue has reached its
     * {@link protos.google.cloud.tasks.v2beta2.RateLimits|RateLimits} or is
     * {@link protos.google.cloud.tasks.v2beta2.Queue.State.PAUSED|PAUSED}.
     *
     * This command is meant to be used for manual debugging. For
     * example, {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RunTask|RunTask} can be
     * used to retry a failed task after a fix has been made or to manually force
     * a task to be dispatched now.
     *
     * The dispatched task is returned. That is, the task that is returned
     * contains the {@link protos.google.cloud.tasks.v2beta2.Task.status|status} after the
     * task is dispatched but before the task is received by its target.
     *
     * If Cloud Tasks receives a successful response from the task's
     * target, then the task will be deleted; otherwise the task's
     * {@link protos.google.cloud.tasks.v2beta2.Task.schedule_time|schedule_time} will be
     * reset to the time that
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RunTask|RunTask} was called plus
     * the retry delay specified in the queue's
     * {@link protos.google.cloud.tasks.v2beta2.RetryConfig|RetryConfig}.
     *
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RunTask|RunTask} returns
     * {@link protos.google.rpc.Code.NOT_FOUND|NOT_FOUND} when it is called on a
     * task that has already succeeded or permanently failed.
     *
     * {@link protos.google.cloud.tasks.v2beta2.CloudTasks.RunTask|RunTask} cannot be called
     * on a {@link protos.google.cloud.tasks.v2beta2.PullMessage|pull task}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.run_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_RunTask_async
     */
    runTask(request?: protos.google.cloud.tasks.v2beta2.IRunTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask,
        protos.google.cloud.tasks.v2beta2.IRunTaskRequest | undefined,
        {} | undefined
    ]>;
    runTask(request: protos.google.cloud.tasks.v2beta2.IRunTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IRunTaskRequest | null | undefined, {} | null | undefined>): void;
    runTask(request: protos.google.cloud.tasks.v2beta2.IRunTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.ITask, protos.google.cloud.tasks.v2beta2.IRunTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates and buffers a new task without the need to explicitly define a Task
     * message. The queue must have [HTTP
     * target][google.cloud.tasks.v2beta2.HttpTarget]. To create the task with a
     * custom ID, use the following format and set TASK_ID to your desired ID:
     * projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer
     * To create the task with an automatically generated ID, use the following
     * format:
     * projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.
     * Note: This feature is in its experimental stage. You must request access to
     * the API through the [Cloud Tasks BufferTask Experiment Signup
     * form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.queue
     *   Required. The parent queue name. For example:
     *   projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     *
     *   The queue must already exist.
     * @param {string} [request.taskId]
     *   Optional. Task ID for the task being created. If not provided, a random
     *   task ID is assigned to the task.
     * @param {google.api.HttpBody} [request.body]
     *   Optional. Body of the HTTP request.
     *
     *   The body can take any generic value. The value is written to the
     *   {@link protos.payload|HttpRequest} of the [Task].
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta2.BufferTaskResponse|BufferTaskResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.buffer_task.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_BufferTask_async
     */
    bufferTask(request?: protos.google.cloud.tasks.v2beta2.IBufferTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IBufferTaskResponse,
        protos.google.cloud.tasks.v2beta2.IBufferTaskRequest | undefined,
        {} | undefined
    ]>;
    bufferTask(request: protos.google.cloud.tasks.v2beta2.IBufferTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta2.IBufferTaskResponse, protos.google.cloud.tasks.v2beta2.IBufferTaskRequest | null | undefined, {} | null | undefined>): void;
    bufferTask(request: protos.google.cloud.tasks.v2beta2.IBufferTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta2.IBufferTaskResponse, protos.google.cloud.tasks.v2beta2.IBufferTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Lists queues.
     *
     * Queues are returned in lexicographical order.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The location name.
     *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     * @param {string} request.filter
     *   `filter` can be used to specify a subset of queues. Any
     *   {@link protos.google.cloud.tasks.v2beta2.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "app_engine_http_target: *".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested_page size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesRequest.filter|filter} while
     *   iterating through pages.
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listQueuesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listQueues(request?: protos.google.cloud.tasks.v2beta2.IListQueuesRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.IQueue[],
        protos.google.cloud.tasks.v2beta2.IListQueuesRequest | null,
        protos.google.cloud.tasks.v2beta2.IListQueuesResponse
    ]>;
    listQueues(request: protos.google.cloud.tasks.v2beta2.IListQueuesRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.tasks.v2beta2.IListQueuesRequest, protos.google.cloud.tasks.v2beta2.IListQueuesResponse | null | undefined, protos.google.cloud.tasks.v2beta2.IQueue>): void;
    listQueues(request: protos.google.cloud.tasks.v2beta2.IListQueuesRequest, callback: PaginationCallback<protos.google.cloud.tasks.v2beta2.IListQueuesRequest, protos.google.cloud.tasks.v2beta2.IListQueuesResponse | null | undefined, protos.google.cloud.tasks.v2beta2.IQueue>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The location name.
     *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     * @param {string} request.filter
     *   `filter` can be used to specify a subset of queues. Any
     *   {@link protos.google.cloud.tasks.v2beta2.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "app_engine_http_target: *".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested_page size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesRequest.filter|filter} while
     *   iterating through pages.
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.tasks.v2beta2.Queue|Queue} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listQueuesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listQueuesStream(request?: protos.google.cloud.tasks.v2beta2.IListQueuesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listQueues`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The location name.
     *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     * @param {string} request.filter
     *   `filter` can be used to specify a subset of queues. Any
     *   {@link protos.google.cloud.tasks.v2beta2.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "app_engine_http_target: *".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested_page size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta2.ListQueuesRequest.filter|filter} while
     *   iterating through pages.
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.tasks.v2beta2.Queue|Queue}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.list_queues.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_ListQueues_async
     */
    listQueuesAsync(request?: protos.google.cloud.tasks.v2beta2.IListQueuesRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.tasks.v2beta2.IQueue>;
    /**
     * Lists the tasks in a queue.
     *
     * By default, only the {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}
     * view is retrieved due to performance considerations;
     * {@link protos.google.cloud.tasks.v2beta2.ListTasksRequest.response_view|response_view}
     * controls the subset of information which is returned.
     *
     * The tasks may be returned in any order. The ordering may change at any
     * time.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.tasks.v2beta2.Task|Task}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listTasksAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listTasks(request?: protos.google.cloud.tasks.v2beta2.IListTasksRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta2.ITask[],
        protos.google.cloud.tasks.v2beta2.IListTasksRequest | null,
        protos.google.cloud.tasks.v2beta2.IListTasksResponse
    ]>;
    listTasks(request: protos.google.cloud.tasks.v2beta2.IListTasksRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.tasks.v2beta2.IListTasksRequest, protos.google.cloud.tasks.v2beta2.IListTasksResponse | null | undefined, protos.google.cloud.tasks.v2beta2.ITask>): void;
    listTasks(request: protos.google.cloud.tasks.v2beta2.IListTasksRequest, callback: PaginationCallback<protos.google.cloud.tasks.v2beta2.IListTasksRequest, protos.google.cloud.tasks.v2beta2.IListTasksResponse | null | undefined, protos.google.cloud.tasks.v2beta2.ITask>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.tasks.v2beta2.Task|Task} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listTasksAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listTasksStream(request?: protos.google.cloud.tasks.v2beta2.IListTasksRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listTasks`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.cloud.tasks.v2beta2.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta2.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta2.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta2.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta2.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.tasks.v2beta2.Task|Task}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta2/cloud_tasks.list_tasks.js</caption>
     * region_tag:cloudtasks_v2beta2_generated_CloudTasks_ListTasks_async
     */
    listTasksAsync(request?: protos.google.cloud.tasks.v2beta2.IListTasksRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.tasks.v2beta2.ITask>;
    /**
     * Gets information about a location.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Resource name for the location.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html | CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link google.cloud.location.Location | Location}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example
     * ```
     * const [response] = await client.getLocation(request);
     * ```
     */
    getLocation(request: LocationProtos.google.cloud.location.IGetLocationRequest, options?: gax.CallOptions | Callback<LocationProtos.google.cloud.location.ILocation, LocationProtos.google.cloud.location.IGetLocationRequest | null | undefined, {} | null | undefined>, callback?: Callback<LocationProtos.google.cloud.location.ILocation, LocationProtos.google.cloud.location.IGetLocationRequest | null | undefined, {} | null | undefined>): Promise<LocationProtos.google.cloud.location.ILocation>;
    /**
     * Lists information about the supported locations for this service. Returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   The resource that owns the locations collection, if applicable.
     * @param {string} request.filter
     *   The standard list filter.
     * @param {number} request.pageSize
     *   The standard list page size.
     * @param {string} request.pageToken
     *   The standard list page token.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link google.cloud.location.Location | Location}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example
     * ```
     * const iterable = client.listLocationsAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     * ```
     */
    listLocationsAsync(request: LocationProtos.google.cloud.location.IListLocationsRequest, options?: CallOptions): AsyncIterable<LocationProtos.google.cloud.location.ILocation>;
    /**
     * Return a fully-qualified location resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @returns {string} Resource name string.
     */
    locationPath(project: string, location: string): string;
    /**
     * Parse the project from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromLocationName(locationName: string): string | number;
    /**
     * Parse the location from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromLocationName(locationName: string): string | number;
    /**
     * Return a fully-qualified project resource name string.
     *
     * @param {string} project
     * @returns {string} Resource name string.
     */
    projectPath(project: string): string;
    /**
     * Parse the project from Project resource.
     *
     * @param {string} projectName
     *   A fully-qualified path representing Project resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectName(projectName: string): string | number;
    /**
     * Return a fully-qualified queue resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} queue
     * @returns {string} Resource name string.
     */
    queuePath(project: string, location: string, queue: string): string;
    /**
     * Parse the project from Queue resource.
     *
     * @param {string} queueName
     *   A fully-qualified path representing Queue resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromQueueName(queueName: string): string | number;
    /**
     * Parse the location from Queue resource.
     *
     * @param {string} queueName
     *   A fully-qualified path representing Queue resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromQueueName(queueName: string): string | number;
    /**
     * Parse the queue from Queue resource.
     *
     * @param {string} queueName
     *   A fully-qualified path representing Queue resource.
     * @returns {string} A string representing the queue.
     */
    matchQueueFromQueueName(queueName: string): string | number;
    /**
     * Return a fully-qualified task resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} queue
     * @param {string} task
     * @returns {string} Resource name string.
     */
    taskPath(project: string, location: string, queue: string, task: string): string;
    /**
     * Parse the project from Task resource.
     *
     * @param {string} taskName
     *   A fully-qualified path representing Task resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromTaskName(taskName: string): string | number;
    /**
     * Parse the location from Task resource.
     *
     * @param {string} taskName
     *   A fully-qualified path representing Task resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromTaskName(taskName: string): string | number;
    /**
     * Parse the queue from Task resource.
     *
     * @param {string} taskName
     *   A fully-qualified path representing Task resource.
     * @returns {string} A string representing the queue.
     */
    matchQueueFromTaskName(taskName: string): string | number;
    /**
     * Parse the task from Task resource.
     *
     * @param {string} taskName
     *   A fully-qualified path representing Task resource.
     * @returns {string} A string representing the task.
     */
    matchTaskFromTaskName(taskName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
