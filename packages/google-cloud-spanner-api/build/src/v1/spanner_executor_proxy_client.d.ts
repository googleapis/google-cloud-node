import type * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions } from 'google-gax';
/**
 *  Service that executes SpannerActions asynchronously.
 * @class
 * @memberof v1
 */
export declare class SpannerExecutorProxyClient {
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
    spannerExecutorProxyStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of SpannerExecutorProxyClient.
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
     *     const client = new SpannerExecutorProxyClient({fallback: true}, gax);
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
    static get scopes(): never[];
    getProjectId(): Promise<string>;
    getProjectId(callback: Callback<string, undefined, undefined>): void;
    /**
     * ExecuteActionAsync is a streaming call that starts executing a new Spanner
     * action.
     *
     * For each request, the server will reply with one or more responses, but
     * only the last response will contain status in the outcome.
     *
     * Responses can be matched to requests by action_id. It is allowed to have
     * multiple actions in flight--in that case, actions are be executed in
     * parallel.
     *
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which is both readable and writable. It accepts objects
     *   representing {@link protos.google.spanner.executor.v1.SpannerAsyncActionRequest|SpannerAsyncActionRequest} for write() method, and
     *   will emit objects representing {@link protos.google.spanner.executor.v1.SpannerAsyncActionResponse|SpannerAsyncActionResponse} on 'data' event asynchronously.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#bi-directional-streaming | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/spanner_executor_proxy.execute_action_async.js</caption>
     * region_tag:spanner-cloud-executor_v1_generated_SpannerExecutorProxy_ExecuteActionAsync_async
     */
    executeActionAsync(options?: CallOptions): gax.CancellableStream;
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
     * Return a fully-qualified instanceConfig resource name string.
     *
     * @param {string} project
     * @param {string} instance_config
     * @returns {string} Resource name string.
     */
    instanceConfigPath(project: string, instanceConfig: string): string;
    /**
     * Parse the project from InstanceConfig resource.
     *
     * @param {string} instanceConfigName
     *   A fully-qualified path representing InstanceConfig resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromInstanceConfigName(instanceConfigName: string): string | number;
    /**
     * Parse the instance_config from InstanceConfig resource.
     *
     * @param {string} instanceConfigName
     *   A fully-qualified path representing InstanceConfig resource.
     * @returns {string} A string representing the instance_config.
     */
    matchInstanceConfigFromInstanceConfigName(instanceConfigName: string): string | number;
    /**
     * Return a fully-qualified instancePartition resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} instance_partition
     * @returns {string} Resource name string.
     */
    instancePartitionPath(project: string, instance: string, instancePartition: string): string;
    /**
     * Parse the project from InstancePartition resource.
     *
     * @param {string} instancePartitionName
     *   A fully-qualified path representing InstancePartition resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromInstancePartitionName(instancePartitionName: string): string | number;
    /**
     * Parse the instance from InstancePartition resource.
     *
     * @param {string} instancePartitionName
     *   A fully-qualified path representing InstancePartition resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromInstancePartitionName(instancePartitionName: string): string | number;
    /**
     * Parse the instance_partition from InstancePartition resource.
     *
     * @param {string} instancePartitionName
     *   A fully-qualified path representing InstancePartition resource.
     * @returns {string} A string representing the instance_partition.
     */
    matchInstancePartitionFromInstancePartitionName(instancePartitionName: string): string | number;
    /**
     * Return a fully-qualified session resource name string.
     *
     * @param {string} project
     * @param {string} instance
     * @param {string} database
     * @param {string} session
     * @returns {string} Resource name string.
     */
    sessionPath(project: string, instance: string, database: string, session: string): string;
    /**
     * Parse the project from Session resource.
     *
     * @param {string} sessionName
     *   A fully-qualified path representing Session resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromSessionName(sessionName: string): string | number;
    /**
     * Parse the instance from Session resource.
     *
     * @param {string} sessionName
     *   A fully-qualified path representing Session resource.
     * @returns {string} A string representing the instance.
     */
    matchInstanceFromSessionName(sessionName: string): string | number;
    /**
     * Parse the database from Session resource.
     *
     * @param {string} sessionName
     *   A fully-qualified path representing Session resource.
     * @returns {string} A string representing the database.
     */
    matchDatabaseFromSessionName(sessionName: string): string | number;
    /**
     * Parse the session from Session resource.
     *
     * @param {string} sessionName
     *   A fully-qualified path representing Session resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromSessionName(sessionName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
