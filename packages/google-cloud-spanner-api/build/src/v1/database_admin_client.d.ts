import type * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback } from 'google-gax';
import { Transform } from 'stream';
import * as protos from '../../protos/protos';
/**
 *  Cloud Spanner Database Admin API
 *
 *  The Cloud Spanner Database Admin API can be used to:
 *    * create, drop, and list databases
 *    * update the schema of pre-existing databases
 *    * create, delete, copy and list backups for a database
 *    * restore a database from an existing backup
 * @class
 * @memberof v1
 */
export declare class DatabaseAdminClient {
    private _terminated;
    private _opts;
    private _providedCustomServicePath;
    private _gaxModule;
    private _gaxGrpc;
    private _protos;
    private _defaults;
    private _universeDomain;
    private _servicePath;
    private _log;
    auth: gax.GoogleAuth;
    descriptors: Descriptors;
    warn: (code: string, message: string, warnType?: string) => void;
    innerApiCalls: {
        [name: string]: Function;
    };
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    operationsClient: gax.OperationsClient;
    databaseAdminStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of DatabaseAdminClient.
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
     *     {@link https://cloud.google.com/docs/authentication/application-default-credentials Application Default Credentials},
     *     your project ID will be detected automatically.
     * @param {string} [options.apiEndpoint] - The domain name of the
     *     API remote host.
     * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
     *     Follows the structure of {@link gapicConfig}.
     * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
     *     For more information, please check the
     *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
     * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
     *     need to avoid loading the default gRPC version and want to use the fallback
     *     HTTP implementation. Load only fallback version and pass it to the constructor:
     *     ```
     *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
     *     const client = new DatabaseAdminClient({fallback: true}, gax);
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
     * @deprecated Use the apiEndpoint method of the client instance.
     * @returns {string} The DNS address for this service.
     */
    static get servicePath(): string;
    /**
     * The DNS address for this API service - same as servicePath.
     * @deprecated Use the apiEndpoint method of the client instance.
     * @returns {string} The DNS address for this service.
     */
    static get apiEndpoint(): string;
    /**
     * The DNS address for this API service.
     * @returns {string} The DNS address for this service.
     */
    get apiEndpoint(): string;
    get universeDomain(): string;
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
     * Gets the state of a Cloud Spanner database.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the requested database. Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.Database|Database}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.get_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_GetDatabase_async
     */
    getDatabase(request?: protos.google.spanner.admin.database.v1.IGetDatabaseRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IDatabase,
        protos.google.spanner.admin.database.v1.IGetDatabaseRequest | undefined,
        {} | undefined
    ]>;
    getDatabase(request: protos.google.spanner.admin.database.v1.IGetDatabaseRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IGetDatabaseRequest | null | undefined, {} | null | undefined>): void;
    getDatabase(request: protos.google.spanner.admin.database.v1.IGetDatabaseRequest, callback: Callback<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IGetDatabaseRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Drops (aka deletes) a Cloud Spanner database.
     * Completed backups for the database will be retained according to their
     * `expire_time`.
     * Note: Cloud Spanner might continue to accept requests for a few seconds
     * after the database has been deleted.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.database
     *   Required. The database to be dropped.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.drop_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_DropDatabase_async
     */
    dropDatabase(request?: protos.google.spanner.admin.database.v1.IDropDatabaseRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.spanner.admin.database.v1.IDropDatabaseRequest | undefined,
        {} | undefined
    ]>;
    dropDatabase(request: protos.google.spanner.admin.database.v1.IDropDatabaseRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDropDatabaseRequest | null | undefined, {} | null | undefined>): void;
    dropDatabase(request: protos.google.spanner.admin.database.v1.IDropDatabaseRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDropDatabaseRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns the schema of a Cloud Spanner database as a list of formatted
     * DDL statements. This method does not show pending schema updates, those may
     * be queried using the {@link protos.google.longrunning.Operations|Operations} API.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.database
     *   Required. The database whose schema we wish to get.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.GetDatabaseDdlResponse|GetDatabaseDdlResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.get_database_ddl.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_GetDatabaseDdl_async
     */
    getDatabaseDdl(request?: protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IGetDatabaseDdlResponse,
        (protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest | undefined),
        {} | undefined
    ]>;
    getDatabaseDdl(request: protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IGetDatabaseDdlResponse, protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest | null | undefined, {} | null | undefined>): void;
    getDatabaseDdl(request: protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest, callback: Callback<protos.google.spanner.admin.database.v1.IGetDatabaseDdlResponse, protos.google.spanner.admin.database.v1.IGetDatabaseDdlRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Sets the access control policy on a database or backup resource.
     * Replaces any existing policy.
     *
     * Authorization requires `spanner.databases.setIamPolicy`
     * permission on {@link protos.google.iam.v1.SetIamPolicyRequest.resource|resource}.
     * For backups, authorization requires `spanner.backups.setIamPolicy`
     * permission on {@link protos.google.iam.v1.SetIamPolicyRequest.resource|resource}.
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
     * @example <caption>include:samples/generated/v1/database_admin.set_iam_policy.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_SetIamPolicy_async
     */
    setIamPolicy(request?: protos.google.iam.v1.ISetIamPolicyRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.IPolicy,
        protos.google.iam.v1.ISetIamPolicyRequest | undefined,
        {} | undefined
    ]>;
    setIamPolicy(request: protos.google.iam.v1.ISetIamPolicyRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.ISetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    setIamPolicy(request: protos.google.iam.v1.ISetIamPolicyRequest, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.ISetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets the access control policy for a database or backup resource.
     * Returns an empty policy if a database or backup exists but does not have a
     * policy set.
     *
     * Authorization requires `spanner.databases.getIamPolicy` permission on
     * {@link protos.google.iam.v1.GetIamPolicyRequest.resource|resource}.
     * For backups, authorization requires `spanner.backups.getIamPolicy`
     * permission on {@link protos.google.iam.v1.GetIamPolicyRequest.resource|resource}.
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
     * @example <caption>include:samples/generated/v1/database_admin.get_iam_policy.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_GetIamPolicy_async
     */
    getIamPolicy(request?: protos.google.iam.v1.IGetIamPolicyRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.IPolicy,
        protos.google.iam.v1.IGetIamPolicyRequest | undefined,
        {} | undefined
    ]>;
    getIamPolicy(request: protos.google.iam.v1.IGetIamPolicyRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.IGetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    getIamPolicy(request: protos.google.iam.v1.IGetIamPolicyRequest, callback: Callback<protos.google.iam.v1.IPolicy, protos.google.iam.v1.IGetIamPolicyRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns permissions that the caller has on the specified database or backup
     * resource.
     *
     * Attempting this RPC on a non-existent Cloud Spanner database will
     * result in a NOT_FOUND error if the user has
     * `spanner.databases.list` permission on the containing Cloud
     * Spanner instance. Otherwise returns an empty set of permissions.
     * Calling this method on a backup that does not exist will
     * result in a NOT_FOUND error if the user has
     * `spanner.backups.list` permission on the containing instance.
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
     * @example <caption>include:samples/generated/v1/database_admin.test_iam_permissions.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_TestIamPermissions_async
     */
    testIamPermissions(request?: protos.google.iam.v1.ITestIamPermissionsRequest, options?: CallOptions): Promise<[
        protos.google.iam.v1.ITestIamPermissionsResponse,
        protos.google.iam.v1.ITestIamPermissionsRequest | undefined,
        {} | undefined
    ]>;
    testIamPermissions(request: protos.google.iam.v1.ITestIamPermissionsRequest, options: CallOptions, callback: Callback<protos.google.iam.v1.ITestIamPermissionsResponse, protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined, {} | null | undefined>): void;
    testIamPermissions(request: protos.google.iam.v1.ITestIamPermissionsRequest, callback: Callback<protos.google.iam.v1.ITestIamPermissionsResponse, protos.google.iam.v1.ITestIamPermissionsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets metadata on a pending or completed
     * {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. Name of the backup.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/backups/<backup>`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.get_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_GetBackup_async
     */
    getBackup(request?: protos.google.spanner.admin.database.v1.IGetBackupRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackup,
        protos.google.spanner.admin.database.v1.IGetBackupRequest | undefined,
        {} | undefined
    ]>;
    getBackup(request: protos.google.spanner.admin.database.v1.IGetBackupRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.IGetBackupRequest | null | undefined, {} | null | undefined>): void;
    getBackup(request: protos.google.spanner.admin.database.v1.IGetBackupRequest, callback: Callback<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.IGetBackupRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Updates a pending or completed
     * {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {google.spanner.admin.database.v1.Backup} request.backup
     *   Required. The backup to update. `backup.name`, and the fields to be updated
     *   as specified by `update_mask` are required. Other fields are ignored.
     *   Update is only supported for the following fields:
     *    * `backup.expire_time`.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   Required. A mask specifying which fields (e.g. `expire_time`) in the
     *   Backup resource should be updated. This mask is relative to the Backup
     *   resource, not to the request message. The field mask must always be
     *   specified; this prevents any future fields from being erased accidentally
     *   by clients that do not know about them.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateBackup_async
     */
    updateBackup(request?: protos.google.spanner.admin.database.v1.IUpdateBackupRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackup,
        protos.google.spanner.admin.database.v1.IUpdateBackupRequest | undefined,
        {} | undefined
    ]>;
    updateBackup(request: protos.google.spanner.admin.database.v1.IUpdateBackupRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.IUpdateBackupRequest | null | undefined, {} | null | undefined>): void;
    updateBackup(request: protos.google.spanner.admin.database.v1.IUpdateBackupRequest, callback: Callback<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.IUpdateBackupRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Deletes a pending or completed
     * {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. Name of the backup to delete.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/backups/<backup>`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.delete_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_DeleteBackup_async
     */
    deleteBackup(request?: protos.google.spanner.admin.database.v1.IDeleteBackupRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.spanner.admin.database.v1.IDeleteBackupRequest | undefined,
        {} | undefined
    ]>;
    deleteBackup(request: protos.google.spanner.admin.database.v1.IDeleteBackupRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDeleteBackupRequest | null | undefined, {} | null | undefined>): void;
    deleteBackup(request: protos.google.spanner.admin.database.v1.IDeleteBackupRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDeleteBackupRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Adds split points to specified tables, indexes of a database.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.database
     *   Required. The database on whose tables/indexes split points are to be
     *   added. Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {number[]} request.splitPoints
     *   Required. The split points to add.
     * @param {string} [request.initiator]
     *   Optional. A user-supplied tag associated with the split points.
     *   For example, "intital_data_load", "special_event_1".
     *   Defaults to "CloudAddSplitPointsAPI" if not specified.
     *   The length of the tag must not exceed 50 characters,else will be trimmed.
     *   Only valid UTF8 characters are allowed.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.AddSplitPointsResponse|AddSplitPointsResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.add_split_points.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_AddSplitPoints_async
     */
    addSplitPoints(request?: protos.google.spanner.admin.database.v1.IAddSplitPointsRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IAddSplitPointsResponse,
        (protos.google.spanner.admin.database.v1.IAddSplitPointsRequest | undefined),
        {} | undefined
    ]>;
    addSplitPoints(request: protos.google.spanner.admin.database.v1.IAddSplitPointsRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IAddSplitPointsResponse, protos.google.spanner.admin.database.v1.IAddSplitPointsRequest | null | undefined, {} | null | undefined>): void;
    addSplitPoints(request: protos.google.spanner.admin.database.v1.IAddSplitPointsRequest, callback: Callback<protos.google.spanner.admin.database.v1.IAddSplitPointsResponse, protos.google.spanner.admin.database.v1.IAddSplitPointsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a new backup schedule.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the database that this backup schedule applies to.
     * @param {string} request.backupScheduleId
     *   Required. The Id to use for the backup schedule. The `backup_schedule_id`
     *   appended to `parent` forms the full backup schedule name of the form
     *   `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
     * @param {google.spanner.admin.database.v1.BackupSchedule} request.backupSchedule
     *   Required. The backup schedule to create.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.create_backup_schedule.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CreateBackupSchedule_async
     */
    createBackupSchedule(request?: protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackupSchedule,
        (protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest | undefined),
        {} | undefined
    ]>;
    createBackupSchedule(request: protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    createBackupSchedule(request: protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.ICreateBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets backup schedule for the input schedule name.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the schedule to retrieve.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.get_backup_schedule.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_GetBackupSchedule_async
     */
    getBackupSchedule(request?: protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackupSchedule,
        (protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest | undefined),
        {} | undefined
    ]>;
    getBackupSchedule(request: protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    getBackupSchedule(request: protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.IGetBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Updates a backup schedule.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {google.spanner.admin.database.v1.BackupSchedule} request.backupSchedule
     *   Required. The backup schedule to update. `backup_schedule.name`, and the
     *   fields to be updated as specified by `update_mask` are required. Other
     *   fields are ignored.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   Required. A mask specifying which fields in the BackupSchedule resource
     *   should be updated. This mask is relative to the BackupSchedule resource,
     *   not to the request message. The field mask must always be
     *   specified; this prevents any future fields from being erased
     *   accidentally.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_backup_schedule.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateBackupSchedule_async
     */
    updateBackupSchedule(request?: protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackupSchedule,
        (protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest | undefined),
        {} | undefined
    ]>;
    updateBackupSchedule(request: protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    updateBackupSchedule(request: protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, callback: Callback<protos.google.spanner.admin.database.v1.IBackupSchedule, protos.google.spanner.admin.database.v1.IUpdateBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Deletes a backup schedule.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the schedule to delete.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>/backupSchedules/<backup_schedule_id>`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.protobuf.Empty|Empty}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.delete_backup_schedule.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_DeleteBackupSchedule_async
     */
    deleteBackupSchedule(request?: protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, options?: CallOptions): Promise<[
        protos.google.protobuf.IEmpty,
        (protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest | undefined),
        {} | undefined
    ]>;
    deleteBackupSchedule(request: protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    deleteBackupSchedule(request: protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IDeleteBackupScheduleRequest | null | undefined, {} | null | undefined>): void;
    /**
     * This is an internal API called by Spanner Graph jobs. You should never need
     * to call this API directly.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.database
     *   Internal field, do not use directly.
     * @param {string} request.operationId
     *   Internal field, do not use directly.
     * @param {string} request.vmIdentityToken
     *   Internal field, do not use directly.
     * @param {number} [request.progress]
     *   Internal field, do not use directly.
     * @param {google.rpc.Status} [request.status]
     *   Internal field, do not use directly.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse|InternalUpdateGraphOperationResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.internal_update_graph_operation.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_InternalUpdateGraphOperation_async
     */
    internalUpdateGraphOperation(request?: protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse,
        (protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest | undefined),
        {} | undefined
    ]>;
    internalUpdateGraphOperation(request: protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, options: CallOptions, callback: Callback<protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse, protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest | null | undefined, {} | null | undefined>): void;
    internalUpdateGraphOperation(request: protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, callback: Callback<protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse, protos.google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a new Cloud Spanner database and starts to prepare it for serving.
     * The returned {@link protos.google.longrunning.Operation|long-running operation} will
     * have a name of the format `<database_name>/operations/<operation_id>` and
     * can be used to track preparation of the database. The
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.CreateDatabaseMetadata|CreateDatabaseMetadata}.
     * The {@link protos.google.longrunning.Operation.response|response} field type is
     * {@link protos.google.spanner.admin.database.v1.Database|Database}, if successful.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the instance that will serve the new database.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {string} request.createStatement
     *   Required. A `CREATE DATABASE` statement, which specifies the ID of the
     *   new database.  The database ID must conform to the regular expression
     *   `{@link protos.a-z0-9_\-|a-z}*[a-z0-9]` and be between 2 and 30 characters in length.
     *   If the database ID is a reserved word or if it contains a hyphen, the
     *   database ID must be enclosed in backticks (`` ` ``).
     * @param {string[]} [request.extraStatements]
     *   Optional. A list of DDL statements to run inside the newly created
     *   database. Statements can create tables, indexes, etc. These
     *   statements execute atomically with the creation of the database:
     *   if there is an error in any statement, the database is not created.
     * @param {google.spanner.admin.database.v1.EncryptionConfig} [request.encryptionConfig]
     *   Optional. The encryption configuration for the database. If this field is
     *   not specified, Cloud Spanner will encrypt/decrypt all data at rest using
     *   Google default encryption.
     * @param {google.spanner.admin.database.v1.DatabaseDialect} [request.databaseDialect]
     *   Optional. The dialect of the Cloud Spanner Database.
     * @param {Buffer} [request.protoDescriptors]
     *   Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in
     *   'extra_statements' above.
     *   Contains a protobuf-serialized
     *   [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto).
     *   To generate it, [install](https://grpc.io/docs/protoc-installation/) and
     *   run `protoc` with --include_imports and --descriptor_set_out. For example,
     *   to generate for moon/shot/app.proto, run
     *   ```
     *   $protoc  --proto_path=/app_path --proto_path=/lib_path \
     *            --include_imports \
     *            --descriptor_set_out=descriptors.data \
     *            moon/shot/app.proto
     *   ```
     *   For more details, see protobuffer [self
     *   description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.create_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CreateDatabase_async
     */
    createDatabase(request?: protos.google.spanner.admin.database.v1.ICreateDatabaseRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.ICreateDatabaseMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    createDatabase(request: protos.google.spanner.admin.database.v1.ICreateDatabaseRequest, options: CallOptions, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.ICreateDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    createDatabase(request: protos.google.spanner.admin.database.v1.ICreateDatabaseRequest, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.ICreateDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `createDatabase()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.create_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CreateDatabase_async
     */
    checkCreateDatabaseProgress(name: string): Promise<LROperation<protos.google.spanner.admin.database.v1.Database, protos.google.spanner.admin.database.v1.CreateDatabaseMetadata>>;
    /**
     * Updates a Cloud Spanner database. The returned
     * {@link protos.google.longrunning.Operation|long-running operation} can be used to track
     * the progress of updating the database. If the named database does not
     * exist, returns `NOT_FOUND`.
     *
     * While the operation is pending:
     *
     *   * The database's
     *     {@link protos.google.spanner.admin.database.v1.Database.reconciling|reconciling}
     *     field is set to true.
     *   * Cancelling the operation is best-effort. If the cancellation succeeds,
     *     the operation metadata's
     *     {@link protos.google.spanner.admin.database.v1.UpdateDatabaseMetadata.cancel_time|cancel_time}
     *     is set, the updates are reverted, and the operation terminates with a
     *     `CANCELLED` status.
     *   * New UpdateDatabase requests will return a `FAILED_PRECONDITION` error
     *     until the pending operation is done (returns successfully or with
     *     error).
     *   * Reading the database via the API continues to give the pre-request
     *     values.
     *
     * Upon completion of the returned operation:
     *
     *   * The new values are in effect and readable via the API.
     *   * The database's
     *     {@link protos.google.spanner.admin.database.v1.Database.reconciling|reconciling}
     *     field becomes false.
     *
     * The returned {@link protos.google.longrunning.Operation|long-running operation} will
     * have a name of the format
     * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation_id>`
     * and can be used to track the database modification. The
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.UpdateDatabaseMetadata|UpdateDatabaseMetadata}.
     * The {@link protos.google.longrunning.Operation.response|response} field type is
     * {@link protos.google.spanner.admin.database.v1.Database|Database}, if successful.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {google.spanner.admin.database.v1.Database} request.database
     *   Required. The database to update.
     *   The `name` field of the database is of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {google.protobuf.FieldMask} request.updateMask
     *   Required. The list of fields to update. Currently, only
     *   `enable_drop_protection` field can be updated.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateDatabase_async
     */
    updateDatabase(request?: protos.google.spanner.admin.database.v1.IUpdateDatabaseRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IUpdateDatabaseMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    updateDatabase(request: protos.google.spanner.admin.database.v1.IUpdateDatabaseRequest, options: CallOptions, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IUpdateDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    updateDatabase(request: protos.google.spanner.admin.database.v1.IUpdateDatabaseRequest, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IUpdateDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `updateDatabase()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateDatabase_async
     */
    checkUpdateDatabaseProgress(name: string): Promise<LROperation<protos.google.spanner.admin.database.v1.Database, protos.google.spanner.admin.database.v1.UpdateDatabaseMetadata>>;
    /**
     * Updates the schema of a Cloud Spanner database by
     * creating/altering/dropping tables, columns, indexes, etc. The returned
     * {@link protos.google.longrunning.Operation|long-running operation} will have a name of
     * the format `<database_name>/operations/<operation_id>` and can be used to
     * track execution of the schema change(s). The
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata|UpdateDatabaseDdlMetadata}.
     * The operation has no response.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.database
     *   Required. The database to update.
     * @param {string[]} request.statements
     *   Required. DDL statements to be applied to the database.
     * @param {string} request.operationId
     *   If empty, the new update request is assigned an
     *   automatically-generated operation ID. Otherwise, `operation_id`
     *   is used to construct the name of the resulting
     *   {@link protos.google.longrunning.Operation|Operation}.
     *
     *   Specifying an explicit operation ID simplifies determining
     *   whether the statements were executed in the event that the
     *   {@link protos.google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl|UpdateDatabaseDdl}
     *   call is replayed, or the return value is otherwise lost: the
     *   {@link protos.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest.database|database}
     *   and `operation_id` fields can be combined to form the
     *   {@link protos.google.longrunning.Operation.name|name} of the resulting
     *   {@link protos.google.longrunning.Operation|longrunning.Operation}:
     *   `<database>/operations/<operation_id>`.
     *
     *   `operation_id` should be unique within the database, and must be
     *   a valid identifier: `{@link protos.a-z0-9_|a-z}*`. Note that
     *   automatically-generated operation IDs always begin with an
     *   underscore. If the named operation already exists,
     *   {@link protos.google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl|UpdateDatabaseDdl}
     *   returns `ALREADY_EXISTS`.
     * @param {Buffer} [request.protoDescriptors]
     *   Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements.
     *   Contains a protobuf-serialized
     *   [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto).
     *   To generate it, [install](https://grpc.io/docs/protoc-installation/) and
     *   run `protoc` with --include_imports and --descriptor_set_out. For example,
     *   to generate for moon/shot/app.proto, run
     *   ```
     *   $protoc  --proto_path=/app_path --proto_path=/lib_path \
     *            --include_imports \
     *            --descriptor_set_out=descriptors.data \
     *            moon/shot/app.proto
     *   ```
     *   For more details, see protobuffer [self
     *   description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).
     * @param {boolean} [request.throughputMode]
     *   Optional. This field is exposed to be used by the Spanner Migration Tool.
     *   For more details, see
     *   [SMT](https://github.com/GoogleCloudPlatform/spanner-migration-tool).
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_database_ddl.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateDatabaseDdl_async
     */
    updateDatabaseDdl(request?: protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    updateDatabaseDdl(request: protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, options: CallOptions, callback: Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    updateDatabaseDdl(request: protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, callback: Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `updateDatabaseDdl()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.update_database_ddl.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_UpdateDatabaseDdl_async
     */
    checkUpdateDatabaseDdlProgress(name: string): Promise<LROperation<protos.google.protobuf.Empty, protos.google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata>>;
    /**
     * Starts creating a new Cloud Spanner Backup.
     * The returned backup {@link protos.google.longrunning.Operation|long-running operation}
     * will have a name of the format
     * `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation_id>`
     * and can be used to track creation of the backup. The
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     * The {@link protos.google.longrunning.Operation.response|response} field type is
     * {@link protos.google.spanner.admin.database.v1.Backup|Backup}, if successful.
     * Cancelling the returned operation will stop the creation and delete the
     * backup. There can be only one pending backup creation per database. Backup
     * creation of different databases can run concurrently.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the instance in which the backup will be
     *   created. This must be the same instance that contains the database the
     *   backup will be created from. The backup will be stored in the
     *   location(s) specified in the instance configuration of this
     *   instance. Values are of the form
     *   `projects/<project>/instances/<instance>`.
     * @param {string} request.backupId
     *   Required. The id of the backup to be created. The `backup_id` appended to
     *   `parent` forms the full backup name of the form
     *   `projects/<project>/instances/<instance>/backups/<backup_id>`.
     * @param {google.spanner.admin.database.v1.Backup} request.backup
     *   Required. The backup to create.
     * @param {google.spanner.admin.database.v1.CreateBackupEncryptionConfig} [request.encryptionConfig]
     *   Optional. The encryption configuration used to encrypt the backup. If this
     *   field is not specified, the backup will use the same encryption
     *   configuration as the database by default, namely
     *   {@link protos.google.spanner.admin.database.v1.CreateBackupEncryptionConfig.encryption_type|encryption_type}
     *   = `USE_DATABASE_ENCRYPTION`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.create_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CreateBackup_async
     */
    createBackup(request?: protos.google.spanner.admin.database.v1.ICreateBackupRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICreateBackupMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    createBackup(request: protos.google.spanner.admin.database.v1.ICreateBackupRequest, options: CallOptions, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICreateBackupMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    createBackup(request: protos.google.spanner.admin.database.v1.ICreateBackupRequest, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICreateBackupMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `createBackup()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.create_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CreateBackup_async
     */
    checkCreateBackupProgress(name: string): Promise<LROperation<protos.google.spanner.admin.database.v1.Backup, protos.google.spanner.admin.database.v1.CreateBackupMetadata>>;
    /**
     * Starts copying a Cloud Spanner Backup.
     * The returned backup {@link protos.google.longrunning.Operation|long-running operation}
     * will have a name of the format
     * `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation_id>`
     * and can be used to track copying of the backup. The operation is associated
     * with the destination backup.
     * The {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}.
     * The {@link protos.google.longrunning.Operation.response|response} field type is
     * {@link protos.google.spanner.admin.database.v1.Backup|Backup}, if successful.
     * Cancelling the returned operation will stop the copying and delete the
     * destination backup. Concurrent CopyBackup requests can run on the same
     * source backup.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the destination instance that will contain the backup
     *   copy. Values are of the form: `projects/<project>/instances/<instance>`.
     * @param {string} request.backupId
     *   Required. The id of the backup copy.
     *   The `backup_id` appended to `parent` forms the full backup_uri of the form
     *   `projects/<project>/instances/<instance>/backups/<backup>`.
     * @param {string} request.sourceBackup
     *   Required. The source backup to be copied.
     *   The source backup needs to be in READY state for it to be copied.
     *   Once CopyBackup is in progress, the source backup cannot be deleted or
     *   cleaned up on expiration until CopyBackup is finished.
     *   Values are of the form:
     *   `projects/<project>/instances/<instance>/backups/<backup>`.
     * @param {google.protobuf.Timestamp} request.expireTime
     *   Required. The expiration time of the backup in microsecond granularity.
     *   The expiration time must be at least 6 hours and at most 366 days
     *   from the `create_time` of the source backup. Once the `expire_time` has
     *   passed, the backup is eligible to be automatically deleted by Cloud Spanner
     *   to free the resources used by the backup.
     * @param {google.spanner.admin.database.v1.CopyBackupEncryptionConfig} [request.encryptionConfig]
     *   Optional. The encryption configuration used to encrypt the backup. If this
     *   field is not specified, the backup will use the same encryption
     *   configuration as the source backup by default, namely
     *   {@link protos.google.spanner.admin.database.v1.CopyBackupEncryptionConfig.encryption_type|encryption_type}
     *   = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.copy_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CopyBackup_async
     */
    copyBackup(request?: protos.google.spanner.admin.database.v1.ICopyBackupRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICopyBackupMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    copyBackup(request: protos.google.spanner.admin.database.v1.ICopyBackupRequest, options: CallOptions, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICopyBackupMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    copyBackup(request: protos.google.spanner.admin.database.v1.ICopyBackupRequest, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IBackup, protos.google.spanner.admin.database.v1.ICopyBackupMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `copyBackup()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.copy_backup.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_CopyBackup_async
     */
    checkCopyBackupProgress(name: string): Promise<LROperation<protos.google.spanner.admin.database.v1.Backup, protos.google.spanner.admin.database.v1.CopyBackupMetadata>>;
    /**
     * Create a new database by restoring from a completed backup. The new
     * database must be in the same project and in an instance with the same
     * instance configuration as the instance containing
     * the backup. The returned database [long-running
     * operation][google.longrunning.Operation] has a name of the format
     * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation_id>`,
     * and can be used to track the progress of the operation, and to cancel it.
     * The {@link protos.google.longrunning.Operation.metadata|metadata} field type is
     * {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}.
     * The {@link protos.google.longrunning.Operation.response|response} type
     * is {@link protos.google.spanner.admin.database.v1.Database|Database}, if
     * successful. Cancelling the returned operation will stop the restore and
     * delete the database.
     * There can be only one database being restored into an instance at a time.
     * Once the restore operation completes, a new restore operation can be
     * initiated, without waiting for the optimize operation associated with the
     * first restore to complete.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the instance in which to create the
     *   restored database. This instance must be in the same project and
     *   have the same instance configuration as the instance containing
     *   the source backup. Values are of the form
     *   `projects/<project>/instances/<instance>`.
     * @param {string} request.databaseId
     *   Required. The id of the database to create and restore to. This
     *   database must not already exist. The `database_id` appended to
     *   `parent` forms the full database name of the form
     *   `projects/<project>/instances/<instance>/databases/<database_id>`.
     * @param {string} request.backup
     *   Name of the backup from which to restore.  Values are of the form
     *   `projects/<project>/instances/<instance>/backups/<backup>`.
     * @param {google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig} [request.encryptionConfig]
     *   Optional. An encryption configuration describing the encryption type and
     *   key resources in Cloud KMS used to encrypt/decrypt the database to restore
     *   to. If this field is not specified, the restored database will use the same
     *   encryption configuration as the backup by default, namely
     *   {@link protos.google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.encryption_type|encryption_type}
     *   = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.restore_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_RestoreDatabase_async
     */
    restoreDatabase(request?: protos.google.spanner.admin.database.v1.IRestoreDatabaseRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IRestoreDatabaseMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    restoreDatabase(request: protos.google.spanner.admin.database.v1.IRestoreDatabaseRequest, options: CallOptions, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IRestoreDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    restoreDatabase(request: protos.google.spanner.admin.database.v1.IRestoreDatabaseRequest, callback: Callback<LROperation<protos.google.spanner.admin.database.v1.IDatabase, protos.google.spanner.admin.database.v1.IRestoreDatabaseMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `restoreDatabase()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.restore_database.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_RestoreDatabase_async
     */
    checkRestoreDatabaseProgress(name: string): Promise<LROperation<protos.google.spanner.admin.database.v1.Database, protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata>>;
    /**
     * Lists Cloud Spanner databases.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance whose databases should be listed.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {number} request.pageSize
     *   Number of databases to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse|ListDatabasesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.spanner.admin.database.v1.Database|Database}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listDatabasesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabases(request?: protos.google.spanner.admin.database.v1.IListDatabasesRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IDatabase[],
        protos.google.spanner.admin.database.v1.IListDatabasesRequest | null,
        protos.google.spanner.admin.database.v1.IListDatabasesResponse
    ]>;
    listDatabases(request: protos.google.spanner.admin.database.v1.IListDatabasesRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabasesRequest, protos.google.spanner.admin.database.v1.IListDatabasesResponse | null | undefined, protos.google.spanner.admin.database.v1.IDatabase>): void;
    listDatabases(request: protos.google.spanner.admin.database.v1.IListDatabasesRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabasesRequest, protos.google.spanner.admin.database.v1.IListDatabasesResponse | null | undefined, protos.google.spanner.admin.database.v1.IDatabase>): void;
    /**
     * Equivalent to `listDatabases`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance whose databases should be listed.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {number} request.pageSize
     *   Number of databases to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse|ListDatabasesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.spanner.admin.database.v1.Database|Database} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listDatabasesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabasesStream(request?: protos.google.spanner.admin.database.v1.IListDatabasesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listDatabases`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance whose databases should be listed.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {number} request.pageSize
     *   Number of databases to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabasesResponse|ListDatabasesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.spanner.admin.database.v1.Database|Database}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_databases.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListDatabases_async
     */
    listDatabasesAsync(request?: protos.google.spanner.admin.database.v1.IListDatabasesRequest, options?: CallOptions): AsyncIterable<protos.google.spanner.admin.database.v1.IDatabase>;
    /**
     * Lists completed and pending backups.
     * Backups returned are ordered by `create_time` in descending order,
     * starting from the most recent `create_time`.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance to list backups from.  Values are of the
     *   form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backups.
     *
     *   A filter expression consists of a field name, a comparison operator, and a
     *   value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the
     *   {@link protos.google.spanner.admin.database.v1.Backup|Backup} are eligible for
     *   filtering:
     *
     *     * `name`
     *     * `database`
     *     * `state`
     *     * `create_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `expire_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `size_bytes`
     *     * `backup_schedules`
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `name:Howl` - The backup's name contains the string "howl".
     *     * `database:prod`
     *            - The database's name contains the string "prod".
     *     * `state:CREATING` - The backup is pending creation.
     *     * `state:READY` - The backup is fully created and ready for use.
     *     * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")`
     *            - The backup name contains the string "howl" and `create_time`
     *                of the backup is before 2018-03-28T14:50:00Z.
     *     * `expire_time < \"2018-03-28T14:50:00Z\"`
     *            - The backup `expire_time` is before 2018-03-28T14:50:00Z.
     *     * `size_bytes > 10000000000` - The backup's size is greater than 10GB
     *     * `backup_schedules:daily`
     *            - The backup is created from a schedule with "daily" in its name.
     * @param {number} request.pageSize
     *   Number of backups to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse|ListBackupsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.spanner.admin.database.v1.Backup|Backup}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listBackupsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackups(request?: protos.google.spanner.admin.database.v1.IListBackupsRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackup[],
        protos.google.spanner.admin.database.v1.IListBackupsRequest | null,
        protos.google.spanner.admin.database.v1.IListBackupsResponse
    ]>;
    listBackups(request: protos.google.spanner.admin.database.v1.IListBackupsRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupsRequest, protos.google.spanner.admin.database.v1.IListBackupsResponse | null | undefined, protos.google.spanner.admin.database.v1.IBackup>): void;
    listBackups(request: protos.google.spanner.admin.database.v1.IListBackupsRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupsRequest, protos.google.spanner.admin.database.v1.IListBackupsResponse | null | undefined, protos.google.spanner.admin.database.v1.IBackup>): void;
    /**
     * Equivalent to `listBackups`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance to list backups from.  Values are of the
     *   form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backups.
     *
     *   A filter expression consists of a field name, a comparison operator, and a
     *   value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the
     *   {@link protos.google.spanner.admin.database.v1.Backup|Backup} are eligible for
     *   filtering:
     *
     *     * `name`
     *     * `database`
     *     * `state`
     *     * `create_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `expire_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `size_bytes`
     *     * `backup_schedules`
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `name:Howl` - The backup's name contains the string "howl".
     *     * `database:prod`
     *            - The database's name contains the string "prod".
     *     * `state:CREATING` - The backup is pending creation.
     *     * `state:READY` - The backup is fully created and ready for use.
     *     * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")`
     *            - The backup name contains the string "howl" and `create_time`
     *                of the backup is before 2018-03-28T14:50:00Z.
     *     * `expire_time < \"2018-03-28T14:50:00Z\"`
     *            - The backup `expire_time` is before 2018-03-28T14:50:00Z.
     *     * `size_bytes > 10000000000` - The backup's size is greater than 10GB
     *     * `backup_schedules:daily`
     *            - The backup is created from a schedule with "daily" in its name.
     * @param {number} request.pageSize
     *   Number of backups to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse|ListBackupsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.spanner.admin.database.v1.Backup|Backup} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listBackupsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackupsStream(request?: protos.google.spanner.admin.database.v1.IListBackupsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listBackups`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance to list backups from.  Values are of the
     *   form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backups.
     *
     *   A filter expression consists of a field name, a comparison operator, and a
     *   value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the
     *   {@link protos.google.spanner.admin.database.v1.Backup|Backup} are eligible for
     *   filtering:
     *
     *     * `name`
     *     * `database`
     *     * `state`
     *     * `create_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `expire_time`  (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
     *     * `size_bytes`
     *     * `backup_schedules`
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `name:Howl` - The backup's name contains the string "howl".
     *     * `database:prod`
     *            - The database's name contains the string "prod".
     *     * `state:CREATING` - The backup is pending creation.
     *     * `state:READY` - The backup is fully created and ready for use.
     *     * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")`
     *            - The backup name contains the string "howl" and `create_time`
     *                of the backup is before 2018-03-28T14:50:00Z.
     *     * `expire_time < \"2018-03-28T14:50:00Z\"`
     *            - The backup `expire_time` is before 2018-03-28T14:50:00Z.
     *     * `size_bytes > 10000000000` - The backup's size is greater than 10GB
     *     * `backup_schedules:daily`
     *            - The backup is created from a schedule with "daily" in its name.
     * @param {number} request.pageSize
     *   Number of backups to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupsResponse|ListBackupsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.spanner.admin.database.v1.Backup|Backup}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_backups.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListBackups_async
     */
    listBackupsAsync(request?: protos.google.spanner.admin.database.v1.IListBackupsRequest, options?: CallOptions): AsyncIterable<protos.google.spanner.admin.database.v1.IBackup>;
    /**
     * Lists database {@link protos.google.longrunning.Operation|longrunning-operations}.
     * A database operation has a name of the form
     * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation>`.
     * The long-running operation
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type
     * `metadata.type_url` describes the type of the metadata. Operations returned
     * include those that have completed/failed/canceled within the last 7 days,
     * and pending operations.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the database operations.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|Operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first, if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic. However,
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \
     *       `(metadata.source_type:BACKUP) AND` \
     *       `(metadata.backup_info.backup:backup_howl) AND` \
     *       `(metadata.name:restored_howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Return operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}.
     *       * The database is restored from a backup.
     *       * The backup name contains "backup_howl".
     *       * The restored database's name contains "restored_howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse|ListDatabaseOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.longrunning.Operation|Operation}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listDatabaseOperationsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabaseOperations(request?: protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, options?: CallOptions): Promise<[
        protos.google.longrunning.IOperation[],
        protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest | null,
        protos.google.spanner.admin.database.v1.IListDatabaseOperationsResponse
    ]>;
    listDatabaseOperations(request: protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, protos.google.spanner.admin.database.v1.IListDatabaseOperationsResponse | null | undefined, protos.google.longrunning.IOperation>): void;
    listDatabaseOperations(request: protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, protos.google.spanner.admin.database.v1.IListDatabaseOperationsResponse | null | undefined, protos.google.longrunning.IOperation>): void;
    /**
     * Equivalent to `listDatabaseOperations`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the database operations.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|Operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first, if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic. However,
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \
     *       `(metadata.source_type:BACKUP) AND` \
     *       `(metadata.backup_info.backup:backup_howl) AND` \
     *       `(metadata.name:restored_howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Return operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}.
     *       * The database is restored from a backup.
     *       * The backup name contains "backup_howl".
     *       * The restored database's name contains "restored_howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse|ListDatabaseOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.longrunning.Operation|Operation} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listDatabaseOperationsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabaseOperationsStream(request?: protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listDatabaseOperations`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the database operations.
     *   Values are of the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|Operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first, if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic. However,
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \
     *       `(metadata.source_type:BACKUP) AND` \
     *       `(metadata.backup_info.backup:backup_howl) AND` \
     *       `(metadata.name:restored_howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Return operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.RestoreDatabaseMetadata|RestoreDatabaseMetadata}.
     *       * The database is restored from a backup.
     *       * The backup name contains "backup_howl".
     *       * The restored database's name contains "restored_howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseOperationsResponse|ListDatabaseOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.longrunning.Operation|Operation}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_database_operations.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListDatabaseOperations_async
     */
    listDatabaseOperationsAsync(request?: protos.google.spanner.admin.database.v1.IListDatabaseOperationsRequest, options?: CallOptions): AsyncIterable<protos.google.longrunning.IOperation>;
    /**
     * Lists the backup {@link protos.google.longrunning.Operation|long-running operations} in
     * the given instance. A backup operation has a name of the form
     * `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation>`.
     * The long-running operation
     * {@link protos.google.longrunning.Operation.metadata|metadata} field type
     * `metadata.type_url` describes the type of the metadata. Operations returned
     * include those that have completed/failed/canceled within the last 7 days,
     * and pending operations. Operations returned are ordered by
     * `operation.metadata.value.progress.start_time` in descending order starting
     * from the most recently started operation.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the backup operations. Values are of
     *   the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backup operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *        `metadata.database:prod` - Returns operations where:
     *        * The operation's metadata type is
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *        * The source database name of backup contains the string "prod".
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.name:howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *       * The backup name contains the string "howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \
     *       `(metadata.source_backup:test) AND` \
     *       `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}.
     *       * The source backup name contains the string "test".
     *       * The operation started before 2022-01-18T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.database:test_db)) OR` \
     *       `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata)
     *       AND` \
     *       `(metadata.source_backup:test_bkp)) AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata matches either of criteria:
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *         AND the source database name of the backup contains the string
     *         "test_db"
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}
     *         AND the source backup name contains the string "test_bkp"
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse|ListBackupOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.longrunning.Operation|Operation}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listBackupOperationsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackupOperations(request?: protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, options?: CallOptions): Promise<[
        protos.google.longrunning.IOperation[],
        protos.google.spanner.admin.database.v1.IListBackupOperationsRequest | null,
        protos.google.spanner.admin.database.v1.IListBackupOperationsResponse
    ]>;
    listBackupOperations(request: protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, protos.google.spanner.admin.database.v1.IListBackupOperationsResponse | null | undefined, protos.google.longrunning.IOperation>): void;
    listBackupOperations(request: protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, protos.google.spanner.admin.database.v1.IListBackupOperationsResponse | null | undefined, protos.google.longrunning.IOperation>): void;
    /**
     * Equivalent to `listBackupOperations`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the backup operations. Values are of
     *   the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backup operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *        `metadata.database:prod` - Returns operations where:
     *        * The operation's metadata type is
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *        * The source database name of backup contains the string "prod".
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.name:howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *       * The backup name contains the string "howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \
     *       `(metadata.source_backup:test) AND` \
     *       `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}.
     *       * The source backup name contains the string "test".
     *       * The operation started before 2022-01-18T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.database:test_db)) OR` \
     *       `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata)
     *       AND` \
     *       `(metadata.source_backup:test_bkp)) AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata matches either of criteria:
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *         AND the source database name of the backup contains the string
     *         "test_db"
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}
     *         AND the source backup name contains the string "test_bkp"
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse|ListBackupOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.longrunning.Operation|Operation} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listBackupOperationsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackupOperationsStream(request?: protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listBackupOperations`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The instance of the backup operations. Values are of
     *   the form `projects/<project>/instances/<instance>`.
     * @param {string} request.filter
     *   An expression that filters the list of returned backup operations.
     *
     *   A filter expression consists of a field name, a
     *   comparison operator, and a value for filtering.
     *   The value must be a string, a number, or a boolean. The comparison operator
     *   must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
     *   Colon `:` is the contains operator. Filter rules are not case sensitive.
     *
     *   The following fields in the {@link protos.google.longrunning.Operation|operation}
     *   are eligible for filtering:
     *
     *     * `name` - The name of the long-running operation
     *     * `done` - False if the operation is in progress, else true.
     *     * `metadata.@type` - the type of metadata. For example, the type string
     *        for
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *        is
     *        `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`.
     *     * `metadata.<field_name>` - any field in metadata.value.
     *        `metadata.@type` must be specified first if filtering on metadata
     *        fields.
     *     * `error` - Error associated with the long-running operation.
     *     * `response.@type` - the type of response.
     *     * `response.<field_name>` - any field in response.value.
     *
     *   You can combine multiple expressions by enclosing each expression in
     *   parentheses. By default, expressions are combined with AND logic, but
     *   you can specify AND, OR, and NOT logic explicitly.
     *
     *   Here are a few examples:
     *
     *     * `done:true` - The operation is complete.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *        `metadata.database:prod` - Returns operations where:
     *        * The operation's metadata type is
     *        {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *        * The source database name of backup contains the string "prod".
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.name:howl) AND` \
     *       `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}.
     *       * The backup name contains the string "howl".
     *       * The operation started before 2018-03-28T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \
     *       `(metadata.source_backup:test) AND` \
     *       `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata type is
     *       {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}.
     *       * The source backup name contains the string "test".
     *       * The operation started before 2022-01-18T14:50:00Z.
     *       * The operation resulted in an error.
     *     * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \
     *       `(metadata.database:test_db)) OR` \
     *       `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata)
     *       AND` \
     *       `(metadata.source_backup:test_bkp)) AND` \
     *       `(error:*)` - Returns operations where:
     *       * The operation's metadata matches either of criteria:
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CreateBackupMetadata|CreateBackupMetadata}
     *         AND the source database name of the backup contains the string
     *         "test_db"
     *         * The operation's metadata type is
     *         {@link protos.google.spanner.admin.database.v1.CopyBackupMetadata|CopyBackupMetadata}
     *         AND the source backup name contains the string "test_bkp"
     *       * The operation resulted in an error.
     * @param {number} request.pageSize
     *   Number of operations to be returned in the response. If 0 or
     *   less, defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupOperationsResponse|ListBackupOperationsResponse}
     *   to the same `parent` and with the same `filter`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.longrunning.Operation|Operation}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_backup_operations.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListBackupOperations_async
     */
    listBackupOperationsAsync(request?: protos.google.spanner.admin.database.v1.IListBackupOperationsRequest, options?: CallOptions): AsyncIterable<protos.google.longrunning.IOperation>;
    /**
     * Lists Cloud Spanner database roles.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The database whose roles should be listed.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {number} request.pageSize
     *   Number of database roles to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse|ListDatabaseRolesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.spanner.admin.database.v1.DatabaseRole|DatabaseRole}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listDatabaseRolesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabaseRoles(request?: protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IDatabaseRole[],
        protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest | null,
        protos.google.spanner.admin.database.v1.IListDatabaseRolesResponse
    ]>;
    listDatabaseRoles(request: protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, protos.google.spanner.admin.database.v1.IListDatabaseRolesResponse | null | undefined, protos.google.spanner.admin.database.v1.IDatabaseRole>): void;
    listDatabaseRoles(request: protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, protos.google.spanner.admin.database.v1.IListDatabaseRolesResponse | null | undefined, protos.google.spanner.admin.database.v1.IDatabaseRole>): void;
    /**
     * Equivalent to `listDatabaseRoles`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The database whose roles should be listed.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {number} request.pageSize
     *   Number of database roles to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse|ListDatabaseRolesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.spanner.admin.database.v1.DatabaseRole|DatabaseRole} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listDatabaseRolesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listDatabaseRolesStream(request?: protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listDatabaseRoles`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The database whose roles should be listed.
     *   Values are of the form
     *   `projects/<project>/instances/<instance>/databases/<database>`.
     * @param {number} request.pageSize
     *   Number of database roles to be returned in the response. If 0 or less,
     *   defaults to the server's maximum allowed page size.
     * @param {string} request.pageToken
     *   If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListDatabaseRolesResponse|ListDatabaseRolesResponse}.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.spanner.admin.database.v1.DatabaseRole|DatabaseRole}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_database_roles.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListDatabaseRoles_async
     */
    listDatabaseRolesAsync(request?: protos.google.spanner.admin.database.v1.IListDatabaseRolesRequest, options?: CallOptions): AsyncIterable<protos.google.spanner.admin.database.v1.IDatabaseRole>;
    /**
     * Lists all the backup schedules for the database.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Database is the parent resource whose backup schedules should be
     *   listed. Values are of the form
     *   projects/<project>/instances/<instance>/databases/<database>
     * @param {number} [request.pageSize]
     *   Optional. Number of backup schedules to be returned in the response. If 0
     *   or less, defaults to the server's maximum allowed page size.
     * @param {string} [request.pageToken]
     *   Optional. If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse|ListBackupSchedulesResponse}
     *   to the same `parent`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listBackupSchedulesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackupSchedules(request?: protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, options?: CallOptions): Promise<[
        protos.google.spanner.admin.database.v1.IBackupSchedule[],
        protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest | null,
        protos.google.spanner.admin.database.v1.IListBackupSchedulesResponse
    ]>;
    listBackupSchedules(request: protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, options: CallOptions, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, protos.google.spanner.admin.database.v1.IListBackupSchedulesResponse | null | undefined, protos.google.spanner.admin.database.v1.IBackupSchedule>): void;
    listBackupSchedules(request: protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, callback: PaginationCallback<protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, protos.google.spanner.admin.database.v1.IListBackupSchedulesResponse | null | undefined, protos.google.spanner.admin.database.v1.IBackupSchedule>): void;
    /**
     * Equivalent to `listBackupSchedules`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Database is the parent resource whose backup schedules should be
     *   listed. Values are of the form
     *   projects/<project>/instances/<instance>/databases/<database>
     * @param {number} [request.pageSize]
     *   Optional. Number of backup schedules to be returned in the response. If 0
     *   or less, defaults to the server's maximum allowed page size.
     * @param {string} [request.pageToken]
     *   Optional. If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse|ListBackupSchedulesResponse}
     *   to the same `parent`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listBackupSchedulesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listBackupSchedulesStream(request?: protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listBackupSchedules`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Database is the parent resource whose backup schedules should be
     *   listed. Values are of the form
     *   projects/<project>/instances/<instance>/databases/<database>
     * @param {number} [request.pageSize]
     *   Optional. Number of backup schedules to be returned in the response. If 0
     *   or less, defaults to the server's maximum allowed page size.
     * @param {string} [request.pageToken]
     *   Optional. If non-empty, `page_token` should contain a
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse.next_page_token|next_page_token}
     *   from a previous
     *   {@link protos.google.spanner.admin.database.v1.ListBackupSchedulesResponse|ListBackupSchedulesResponse}
     *   to the same `parent`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.spanner.admin.database.v1.BackupSchedule|BackupSchedule}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/database_admin.list_backup_schedules.js</caption>
     * region_tag:spanner_v1_generated_DatabaseAdmin_ListBackupSchedules_async
     */
    listBackupSchedulesAsync(request?: protos.google.spanner.admin.database.v1.IListBackupSchedulesRequest, options?: CallOptions): AsyncIterable<protos.google.spanner.admin.database.v1.IBackupSchedule>;
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     *
     * @param {Object} request - The request object that will be sent.
     * @param {string} request.name - The name of the operation resource.
     * @param {Object=} options
     *   Optional parameters. You can override the default settings for this call,
     *   e.g, timeout, retries, paginations, etc. See {@link
     *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions | gax.CallOptions}
     *   for the details.
     * @param {function(?Error, ?Object)=} callback
     *   The function which will be called with the result of the API call.
     *
     *   The second parameter to the callback is an object representing
     *   {@link google.longrunning.Operation | google.longrunning.Operation}.
     * @return {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     * {@link google.longrunning.Operation | google.longrunning.Operation}.
     * The promise has a method named "cancel" which cancels the ongoing API call.
     *
     * @example
     * ```
     * const client = longrunning.operationsClient();
     * const name = '';
     * const [response] = await client.getOperation({name});
     * // doThingsWith(response)
     * ```
     */
    getOperation(request: protos.google.longrunning.GetOperationRequest, optionsOrCallback?: gax.CallOptions | Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null | undefined>, callback?: Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null | undefined>): Promise<[protos.google.longrunning.Operation]>;
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`. Returns an iterable object.
     *
     * For-await-of syntax is used with the iterable to recursively get response element on-demand.
     *
     * @param {Object} request - The request object that will be sent.
     * @param {string} request.name - The name of the operation collection.
     * @param {string} request.filter - The standard list filter.
     * @param {number=} request.pageSize -
     *   The maximum number of resources contained in the underlying API
     *   response. If page streaming is performed per-resource, this
     *   parameter does not affect the return value. If page streaming is
     *   performed per-page, this determines the maximum number of
     *   resources in a page.
     * @param {Object=} options
     *   Optional parameters. You can override the default settings for this call,
     *   e.g, timeout, retries, paginations, etc. See {@link
     *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions | gax.CallOptions} for the
     *   details.
     * @returns {Object}
     *   An iterable Object that conforms to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | iteration protocols}.
     *
     * @example
     * ```
     * const client = longrunning.operationsClient();
     * for await (const response of client.listOperationsAsync(request));
     * // doThingsWith(response)
     * ```
     */
    listOperationsAsync(request: protos.google.longrunning.ListOperationsRequest, options?: gax.CallOptions): AsyncIterable<protos.google.longrunning.IOperation>;
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * {@link Operations.GetOperation} or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an {@link Operation.error} value with a {@link google.rpc.Status.code} of
     * 1, corresponding to `Code.CANCELLED`.
     *
     * @param {Object} request - The request object that will be sent.
     * @param {string} request.name - The name of the operation resource to be cancelled.
     * @param {Object=} options
     *   Optional parameters. You can override the default settings for this call,
     * e.g, timeout, retries, paginations, etc. See {@link
     * https://googleapis.github.io/gax-nodejs/global.html#CallOptions | gax.CallOptions} for the
     * details.
     * @param {function(?Error)=} callback
     *   The function which will be called with the result of the API call.
     * @return {Promise} - The promise which resolves when API call finishes.
     *   The promise has a method named "cancel" which cancels the ongoing API
     * call.
     *
     * @example
     * ```
     * const client = longrunning.operationsClient();
     * await client.cancelOperation({name: ''});
     * ```
     */
    cancelOperation(request: protos.google.longrunning.CancelOperationRequest, optionsOrCallback?: gax.CallOptions | Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} | undefined | null>, callback?: Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} | undefined | null>): Promise<protos.google.protobuf.Empty>;
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param {Object} request - The request object that will be sent.
     * @param {string} request.name - The name of the operation resource to be deleted.
     * @param {Object=} options
     *   Optional parameters. You can override the default settings for this call,
     * e.g, timeout, retries, paginations, etc. See {@link
     * https://googleapis.github.io/gax-nodejs/global.html#CallOptions | gax.CallOptions}
     * for the details.
     * @param {function(?Error)=} callback
     *   The function which will be called with the result of the API call.
     * @return {Promise} - The promise which resolves when API call finishes.
     *   The promise has a method named "cancel" which cancels the ongoing API
     * call.
     *
     * @example
     * ```
     * const client = longrunning.operationsClient();
     * await client.deleteOperation({name: ''});
     * ```
     */
    deleteOperation(request: protos.google.longrunning.DeleteOperationRequest, optionsOrCallback?: gax.CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>, callback?: Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>): Promise<protos.google.protobuf.Empty>;
    /**
     * Return a fully-qualified backup resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} backup
     * @returns {string} Resource name string.
     */
    backupPath(project: string, instance: string, backup: string): string;
    /**
     * Parse the project from Backup resource.
     *
     * @param {string} backupName
     *   A fully-qualified path representing Backup resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromBackupName(backupName: string): string | number;
    /**
     * Parse the instance from Backup resource.
     *
     * @param {string} backupName
     *   A fully-qualified path representing Backup resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromBackupName(backupName: string): string | number;
    /**
     * Parse the backup from Backup resource.
     *
     * @param {string} backupName
     *   A fully-qualified path representing Backup resource.
     * @returns {string} A string representing the backup.
     */
    matchBackupFromBackupName(backupName: string): string | number;
    /**
     * Return a fully-qualified backupSchedule resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} database
     * @param {string} schedule
     * @returns {string} Resource name string.
     */
    backupSchedulePath(project: string, instance: string, database: string, schedule: string): string;
    /**
     * Parse the project from BackupSchedule resource.
     *
     * @param {string} backupScheduleName
     *   A fully-qualified path representing BackupSchedule resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromBackupScheduleName(backupScheduleName: string): string | number;
    /**
     * Parse the instance from BackupSchedule resource.
     *
     * @param {string} backupScheduleName
     *   A fully-qualified path representing BackupSchedule resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromBackupScheduleName(backupScheduleName: string): string | number;
    /**
     * Parse the database from BackupSchedule resource.
     *
     * @param {string} backupScheduleName
     *   A fully-qualified path representing BackupSchedule resource.
     * @returns {string} A string representing the database.
     */
    matchDatabaseFromBackupScheduleName(backupScheduleName: string): string | number;
    /**
     * Parse the schedule from BackupSchedule resource.
     *
     * @param {string} backupScheduleName
     *   A fully-qualified path representing BackupSchedule resource.
     * @returns {string} A string representing the schedule.
     */
    matchScheduleFromBackupScheduleName(backupScheduleName: string): string | number;
    /**
     * Return a fully-qualified cryptoKey resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} key_ring
     * @param {string} crypto_key
     * @returns {string} Resource name string.
     */
    cryptoKeyPath(project: string, location: string, keyRing: string, cryptoKey: string): string;
    /**
     * Parse the project from CryptoKey resource.
     *
     * @param {string} cryptoKeyName
     *   A fully-qualified path representing CryptoKey resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromCryptoKeyName(cryptoKeyName: string): string | number;
    /**
     * Parse the location from CryptoKey resource.
     *
     * @param {string} cryptoKeyName
     *   A fully-qualified path representing CryptoKey resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromCryptoKeyName(cryptoKeyName: string): string | number;
    /**
     * Parse the key_ring from CryptoKey resource.
     *
     * @param {string} cryptoKeyName
     *   A fully-qualified path representing CryptoKey resource.
     * @returns {string} A string representing the key_ring.
     */
    matchKeyRingFromCryptoKeyName(cryptoKeyName: string): string | number;
    /**
     * Parse the crypto_key from CryptoKey resource.
     *
     * @param {string} cryptoKeyName
     *   A fully-qualified path representing CryptoKey resource.
     * @returns {string} A string representing the crypto_key.
     */
    matchCryptoKeyFromCryptoKeyName(cryptoKeyName: string): string | number;
    /**
     * Return a fully-qualified database resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} database
     * @returns {string} Resource name string.
     */
    databasePath(project: string, instance: string, database: string): string;
    /**
     * Parse the project from Database resource.
     *
     * @param {string} databaseName
     *   A fully-qualified path representing Database resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromDatabaseName(databaseName: string): string | number;
    /**
     * Parse the instance from Database resource.
     *
     * @param {string} databaseName
     *   A fully-qualified path representing Database resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromDatabaseName(databaseName: string): string | number;
    /**
     * Parse the database from Database resource.
     *
     * @param {string} databaseName
     *   A fully-qualified path representing Database resource.
     * @returns {string} A string representing the database.
     */
    matchDatabaseFromDatabaseName(databaseName: string): string | number;
    /**
     * Return a fully-qualified databaseRole resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} database
     * @param {string} role
     * @returns {string} Resource name string.
     */
    databaseRolePath(project: string, instance: string, database: string, role: string): string;
    /**
     * Parse the project from DatabaseRole resource.
     *
     * @param {string} databaseRoleName
     *   A fully-qualified path representing DatabaseRole resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromDatabaseRoleName(databaseRoleName: string): string | number;
    /**
     * Parse the instance from DatabaseRole resource.
     *
     * @param {string} databaseRoleName
     *   A fully-qualified path representing DatabaseRole resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromDatabaseRoleName(databaseRoleName: string): string | number;
    /**
     * Parse the database from DatabaseRole resource.
     *
     * @param {string} databaseRoleName
     *   A fully-qualified path representing DatabaseRole resource.
     * @returns {string} A string representing the database.
     */
    matchDatabaseFromDatabaseRoleName(databaseRoleName: string): string | number;
    /**
     * Parse the role from DatabaseRole resource.
     *
     * @param {string} databaseRoleName
     *   A fully-qualified path representing DatabaseRole resource.
     * @returns {string} A string representing the role.
     */
    matchRoleFromDatabaseRoleName(databaseRoleName: string): string | number;
    /**
     * Return a fully-qualified instance resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @returns {string} Resource name string.
     */
    instancePath(project: string, instance: string): string;
    /**
     * Parse the project from Instance resource.
     *
     * @param {string} instanceName
     *   A fully-qualified path representing Instance resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromInstanceName(instanceName: string): string | number;
    /**
     * Parse the instance from Instance resource.
     *
     * @param {string} instanceName
     *   A fully-qualified path representing Instance resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromInstanceName(instanceName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
