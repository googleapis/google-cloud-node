/// <reference types="node" />
import * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, LocationsClient, LocationProtos } from 'google-gax';
import { Transform } from 'stream';
import type * as protos from '../../../protos/protos.js';
/**
 *  Cloud Tasks allows developers to manage the execution of background
 *  work in their applications.
 * @class
 * @memberof v2beta3
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
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.get_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_GetQueue_async
     */
    getQueue(request?: protos.google.cloud.tasks.v2beta3.IGetQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.IGetQueueRequest | undefined,
        {} | undefined
    ]>;
    getQueue(request: protos.google.cloud.tasks.v2beta3.IGetQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IGetQueueRequest | null | undefined, {} | null | undefined>): void;
    getQueue(request: protos.google.cloud.tasks.v2beta3.IGetQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IGetQueueRequest | null | undefined, {} | null | undefined>): void;
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
     * @param {google.cloud.tasks.v2beta3.Queue} request.queue
     *   Required. The queue to create.
     *
     *   {@link protos.google.cloud.tasks.v2beta3.Queue.name|Queue's name} cannot be the same as
     *   an existing queue.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.create_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_CreateQueue_async
     */
    createQueue(request?: protos.google.cloud.tasks.v2beta3.ICreateQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.ICreateQueueRequest | undefined,
        {} | undefined
    ]>;
    createQueue(request: protos.google.cloud.tasks.v2beta3.ICreateQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.ICreateQueueRequest | null | undefined, {} | null | undefined>): void;
    createQueue(request: protos.google.cloud.tasks.v2beta3.ICreateQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.ICreateQueueRequest | null | undefined, {} | null | undefined>): void;
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
     * @param {google.cloud.tasks.v2beta3.Queue} request.queue
     *   Required. The queue to create or update.
     *
     *   The queue's {@link protos.google.cloud.tasks.v2beta3.Queue.name|name} must be
     *   specified.
     *
     *   Output only fields cannot be modified using UpdateQueue.
     *   Any value specified for an output only field will be ignored.
     *   The queue's {@link protos.google.cloud.tasks.v2beta3.Queue.name|name} cannot be
     *   changed.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   A mask used to specify which fields of the queue are being updated.
     *
     *   If empty, then all fields will be updated.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.update_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_UpdateQueue_async
     */
    updateQueue(request?: protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest | undefined,
        {} | undefined
    ]>;
    updateQueue(request: protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest | null | undefined, {} | null | undefined>): void;
    updateQueue(request: protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IUpdateQueueRequest | null | undefined, {} | null | undefined>): void;
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
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.delete_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_DeleteQueue_async
     */
    deleteQueue(request?: protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest | undefined,
        {} | undefined
    ]>;
    deleteQueue(request: protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest | null | undefined, {} | null | undefined>): void;
    deleteQueue(request: protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta3.IDeleteQueueRequest | null | undefined, {} | null | undefined>): void;
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
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.purge_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_PurgeQueue_async
     */
    purgeQueue(request?: protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest | undefined,
        {} | undefined
    ]>;
    purgeQueue(request: protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest | null | undefined, {} | null | undefined>): void;
    purgeQueue(request: protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IPurgeQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Pauses the queue.
     *
     * If a queue is paused then the system will stop dispatching tasks
     * until the queue is resumed via
     * {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ResumeQueue|ResumeQueue}. Tasks can
     * still be added when the queue is paused. A queue is paused if its
     * {@link protos.google.cloud.tasks.v2beta3.Queue.state|state} is
     * {@link protos.google.cloud.tasks.v2beta3.Queue.State.PAUSED|PAUSED}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.pause_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_PauseQueue_async
     */
    pauseQueue(request?: protos.google.cloud.tasks.v2beta3.IPauseQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.IPauseQueueRequest | undefined,
        {} | undefined
    ]>;
    pauseQueue(request: protos.google.cloud.tasks.v2beta3.IPauseQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IPauseQueueRequest | null | undefined, {} | null | undefined>): void;
    pauseQueue(request: protos.google.cloud.tasks.v2beta3.IPauseQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IPauseQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Resume a queue.
     *
     * This method resumes a queue after it has been
     * {@link protos.google.cloud.tasks.v2beta3.Queue.State.PAUSED|PAUSED} or
     * {@link protos.google.cloud.tasks.v2beta3.Queue.State.DISABLED|DISABLED}. The state of a
     * queue is stored in the queue's
     * {@link protos.google.cloud.tasks.v2beta3.Queue.state|state}; after calling this method
     * it will be set to
     * {@link protos.google.cloud.tasks.v2beta3.Queue.State.RUNNING|RUNNING}.
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
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.resume_queue.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_ResumeQueue_async
     */
    resumeQueue(request?: protos.google.cloud.tasks.v2beta3.IResumeQueueRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue,
        protos.google.cloud.tasks.v2beta3.IResumeQueueRequest | undefined,
        {} | undefined
    ]>;
    resumeQueue(request: protos.google.cloud.tasks.v2beta3.IResumeQueueRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IResumeQueueRequest | null | undefined, {} | null | undefined>): void;
    resumeQueue(request: protos.google.cloud.tasks.v2beta3.IResumeQueueRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IQueue, protos.google.cloud.tasks.v2beta3.IResumeQueueRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets the access control policy for a
     * {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}. Returns an empty policy if the
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
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.get_iam_policy.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_GetIamPolicy_async
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
     * {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}. Replaces any existing policy.
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
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.set_iam_policy.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_SetIamPolicy_async
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
     * {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}. If the resource does not exist,
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
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.test_iam_permissions.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_TestIamPermissions_async
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
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.get_task.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_GetTask_async
     */
    getTask(request?: protos.google.cloud.tasks.v2beta3.IGetTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.ITask,
        protos.google.cloud.tasks.v2beta3.IGetTaskRequest | undefined,
        {} | undefined
    ]>;
    getTask(request: protos.google.cloud.tasks.v2beta3.IGetTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.IGetTaskRequest | null | undefined, {} | null | undefined>): void;
    getTask(request: protos.google.cloud.tasks.v2beta3.IGetTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.IGetTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a task and adds it to a queue.
     *
     * Tasks cannot be updated after creation; there is no UpdateTask command.
     *
     * * The maximum task size is 100KB.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     *
     *   The queue must already exist.
     * @param {google.cloud.tasks.v2beta3.Task} request.task
     *   Required. The task to add.
     *
     *   Task names have the following format:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
     *   The user can optionally specify a task
     *   {@link protos.google.cloud.tasks.v2beta3.Task.name|name}. If a name is not specified
     *   then the system will generate a random unique task id, which will be set in
     *   the task returned in the {@link protos.google.cloud.tasks.v2beta3.Task.name|response}.
     *
     *   If {@link protos.google.cloud.tasks.v2beta3.Task.schedule_time|schedule_time} is not
     *   set or is in the past then Cloud Tasks will set it to the current time.
     *
     *   Task De-duplication:
     *
     *   Explicitly specifying a task ID enables task de-duplication.  If
     *   a task's ID is identical to that of an existing task or a task
     *   that was deleted or executed recently then the call will fail
     *   with {@link protos.google.rpc.Code.ALREADY_EXISTS|ALREADY_EXISTS}.
     *   If the task's queue was created using Cloud Tasks, then another task with
     *   the same name can't be created for ~1 hour after the original task was
     *   deleted or executed. If the task's queue was created using queue.yaml or
     *   queue.xml, then another task with the same name can't be created
     *   for ~9 days after the original task was deleted or executed.
     *
     *   Because there is an extra lookup cost to identify duplicate task
     *   names, these {@link protos.google.cloud.tasks.v2beta3.CloudTasks.CreateTask|CreateTask}
     *   calls have significantly increased latency. Using hashed strings for the
     *   task id or for the prefix of the task id is recommended. Choosing task ids
     *   that are sequential or have sequential prefixes, for example using a
     *   timestamp, causes an increase in latency and error rates in all
     *   task commands. The infrastructure relies on an approximately
     *   uniform distribution of task ids to store and serve tasks
     *   efficiently.
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.create_task.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_CreateTask_async
     */
    createTask(request?: protos.google.cloud.tasks.v2beta3.ICreateTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.ITask,
        protos.google.cloud.tasks.v2beta3.ICreateTaskRequest | undefined,
        {} | undefined
    ]>;
    createTask(request: protos.google.cloud.tasks.v2beta3.ICreateTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.ICreateTaskRequest | null | undefined, {} | null | undefined>): void;
    createTask(request: protos.google.cloud.tasks.v2beta3.ICreateTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.ICreateTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Deletes a task.
     *
     * A task can be deleted if it is scheduled or dispatched. A task
     * cannot be deleted if it has executed successfully or permanently
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
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.delete_task.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_DeleteTask_async
     */
    deleteTask(request?: protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest | undefined,
        {} | undefined
    ]>;
    deleteTask(request: protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest | null | undefined, {} | null | undefined>): void;
    deleteTask(request: protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.tasks.v2beta3.IDeleteTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Forces a task to run now.
     *
     * When this method is called, Cloud Tasks will dispatch the task, even if
     * the task is already running, the queue has reached its
     * {@link protos.google.cloud.tasks.v2beta3.RateLimits|RateLimits} or is
     * {@link protos.google.cloud.tasks.v2beta3.Queue.State.PAUSED|PAUSED}.
     *
     * This command is meant to be used for manual debugging. For
     * example, {@link protos.google.cloud.tasks.v2beta3.CloudTasks.RunTask|RunTask} can be
     * used to retry a failed task after a fix has been made or to manually force
     * a task to be dispatched now.
     *
     * The dispatched task is returned. That is, the task that is returned
     * contains the {@link protos.Task.status|status} after the task is dispatched but
     * before the task is received by its target.
     *
     * If Cloud Tasks receives a successful response from the task's
     * target, then the task will be deleted; otherwise the task's
     * {@link protos.google.cloud.tasks.v2beta3.Task.schedule_time|schedule_time} will be
     * reset to the time that
     * {@link protos.google.cloud.tasks.v2beta3.CloudTasks.RunTask|RunTask} was called plus
     * the retry delay specified in the queue's
     * {@link protos.google.cloud.tasks.v2beta3.RetryConfig|RetryConfig}.
     *
     * {@link protos.google.cloud.tasks.v2beta3.CloudTasks.RunTask|RunTask} returns
     * {@link protos.google.rpc.Code.NOT_FOUND|NOT_FOUND} when it is called on a
     * task that has already succeeded or permanently failed.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The task name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.Task|Task}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.run_task.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_RunTask_async
     */
    runTask(request?: protos.google.cloud.tasks.v2beta3.IRunTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.ITask,
        protos.google.cloud.tasks.v2beta3.IRunTaskRequest | undefined,
        {} | undefined
    ]>;
    runTask(request: protos.google.cloud.tasks.v2beta3.IRunTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.IRunTaskRequest | null | undefined, {} | null | undefined>): void;
    runTask(request: protos.google.cloud.tasks.v2beta3.IRunTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.ITask, protos.google.cloud.tasks.v2beta3.IRunTaskRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates and buffers a new task without the need to explicitly define a Task
     * message. The queue must have [HTTP
     * target][google.cloud.tasks.v2beta3.HttpTarget]. To create the task with a
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
     *   The first element of the array is an object representing {@link protos.google.cloud.tasks.v2beta3.BufferTaskResponse|BufferTaskResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.buffer_task.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_BufferTask_async
     */
    bufferTask(request?: protos.google.cloud.tasks.v2beta3.IBufferTaskRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IBufferTaskResponse,
        protos.google.cloud.tasks.v2beta3.IBufferTaskRequest | undefined,
        {} | undefined
    ]>;
    bufferTask(request: protos.google.cloud.tasks.v2beta3.IBufferTaskRequest, options: CallOptions, callback: Callback<protos.google.cloud.tasks.v2beta3.IBufferTaskResponse, protos.google.cloud.tasks.v2beta3.IBufferTaskRequest | null | undefined, {} | null | undefined>): void;
    bufferTask(request: protos.google.cloud.tasks.v2beta3.IBufferTaskRequest, callback: Callback<protos.google.cloud.tasks.v2beta3.IBufferTaskResponse, protos.google.cloud.tasks.v2beta3.IBufferTaskRequest | null | undefined, {} | null | undefined>): void;
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
     *   {@link protos.google.cloud.tasks.v2beta3.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "state: PAUSED".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested page_size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesRequest.filter|filter} while
     *   iterating through pages.
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listQueuesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listQueues(request?: protos.google.cloud.tasks.v2beta3.IListQueuesRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.IQueue[],
        protos.google.cloud.tasks.v2beta3.IListQueuesRequest | null,
        protos.google.cloud.tasks.v2beta3.IListQueuesResponse
    ]>;
    listQueues(request: protos.google.cloud.tasks.v2beta3.IListQueuesRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.tasks.v2beta3.IListQueuesRequest, protos.google.cloud.tasks.v2beta3.IListQueuesResponse | null | undefined, protos.google.cloud.tasks.v2beta3.IQueue>): void;
    listQueues(request: protos.google.cloud.tasks.v2beta3.IListQueuesRequest, callback: PaginationCallback<protos.google.cloud.tasks.v2beta3.IListQueuesRequest, protos.google.cloud.tasks.v2beta3.IListQueuesResponse | null | undefined, protos.google.cloud.tasks.v2beta3.IQueue>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The location name.
     *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     * @param {string} request.filter
     *   `filter` can be used to specify a subset of queues. Any
     *   {@link protos.google.cloud.tasks.v2beta3.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "state: PAUSED".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested page_size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesRequest.filter|filter} while
     *   iterating through pages.
     * @param {google.protobuf.FieldMask} [request.readMask]
     *   Optional. Read mask is used for a more granular control over what the API
     *   returns. If the mask is not present all fields will be returned except
     *   [Queue.stats]. [Queue.stats] will be returned only if it was  explicitly
     *   specified in the mask.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.tasks.v2beta3.Queue|Queue} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listQueuesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listQueuesStream(request?: protos.google.cloud.tasks.v2beta3.IListQueuesRequest, options?: CallOptions): Transform;
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
     *   {@link protos.google.cloud.tasks.v2beta3.Queue|Queue} field can be used as a filter and
     *   several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The
     *   filter syntax is the same as described in [Stackdriver's Advanced Logs
     *   Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     *
     *   Sample filter "state: PAUSED".
     *
     *   Note that using filters might cause fewer queues than the
     *   requested page_size to be returned.
     * @param {number} request.pageSize
     *   Requested page size.
     *
     *   The maximum page size is 9800. If unspecified, the page size will
     *   be the maximum. Fewer queues than requested might be returned,
     *   even if more queues exist; use the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   in the response to determine if more queues exist.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListQueues|ListQueues} method. It
     *   is an error to switch the value of the
     *   {@link protos.google.cloud.tasks.v2beta3.ListQueuesRequest.filter|filter} while
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
     *   {@link protos.google.cloud.tasks.v2beta3.Queue|Queue}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.list_queues.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_ListQueues_async
     */
    listQueuesAsync(request?: protos.google.cloud.tasks.v2beta3.IListQueuesRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.tasks.v2beta3.IQueue>;
    /**
     * Lists the tasks in a queue.
     *
     * By default, only the {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}
     * view is retrieved due to performance considerations;
     * {@link protos.google.cloud.tasks.v2beta3.ListTasksRequest.response_view|response_view}
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
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.tasks.v2beta3.Task|Task}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listTasksAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listTasks(request?: protos.google.cloud.tasks.v2beta3.IListTasksRequest, options?: CallOptions): Promise<[
        protos.google.cloud.tasks.v2beta3.ITask[],
        protos.google.cloud.tasks.v2beta3.IListTasksRequest | null,
        protos.google.cloud.tasks.v2beta3.IListTasksResponse
    ]>;
    listTasks(request: protos.google.cloud.tasks.v2beta3.IListTasksRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.tasks.v2beta3.IListTasksRequest, protos.google.cloud.tasks.v2beta3.IListTasksResponse | null | undefined, protos.google.cloud.tasks.v2beta3.ITask>): void;
    listTasks(request: protos.google.cloud.tasks.v2beta3.IListTasksRequest, callback: PaginationCallback<protos.google.cloud.tasks.v2beta3.IListTasksRequest, protos.google.cloud.tasks.v2beta3.IListTasksResponse | null | undefined, protos.google.cloud.tasks.v2beta3.ITask>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.tasks.v2beta3.Task|Task} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listTasksAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listTasksStream(request?: protos.google.cloud.tasks.v2beta3.IListTasksRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listTasks`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The queue name. For example:
     *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {google.cloud.tasks.v2beta3.Task.View} request.responseView
     *   The response_view specifies which subset of the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} will be returned.
     *
     *   By default response_view is
     *   {@link protos.google.cloud.tasks.v2beta3.Task.View.BASIC|BASIC}; not all information is
     *   retrieved by default because some data, such as payloads, might be
     *   desirable to return only when needed because of its large size or because
     *   of the sensitivity of data that it contains.
     *
     *   Authorization for {@link protos.google.cloud.tasks.v2beta3.Task.View.FULL|FULL}
     *   requires `cloudtasks.tasks.fullView` [Google
     *   IAM](https://cloud.google.com/iam/) permission on the
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task} resource.
     * @param {number} request.pageSize
     *   Maximum page size.
     *
     *   Fewer tasks than requested might be returned, even if more tasks exist; use
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   in the response to determine if more tasks exist.
     *
     *   The maximum page size is 1000. If unspecified, the page size will be the
     *   maximum.
     * @param {string} request.pageToken
     *   A token identifying the page of results to return.
     *
     *   To request the first page results, page_token must be empty. To
     *   request the next page of results, page_token must be the value of
     *   {@link protos.google.cloud.tasks.v2beta3.ListTasksResponse.next_page_token|next_page_token}
     *   returned from the previous call to
     *   {@link protos.google.cloud.tasks.v2beta3.CloudTasks.ListTasks|ListTasks} method.
     *
     *   The page token is valid for only 2 hours.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.tasks.v2beta3.Task|Task}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v2beta3/cloud_tasks.list_tasks.js</caption>
     * region_tag:cloudtasks_v2beta3_generated_CloudTasks_ListTasks_async
     */
    listTasksAsync(request?: protos.google.cloud.tasks.v2beta3.IListTasksRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.tasks.v2beta3.ITask>;
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
