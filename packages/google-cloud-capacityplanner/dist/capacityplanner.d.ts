import type { Callback } from 'google-gax';
import type { CallOptions } from 'google-gax';
import type { ClientOptions } from 'google-gax';
import type { Descriptors } from 'google-gax';
import type * as gax from 'google-gax';
import Long_2 = require('long');
import type { LROperation } from 'google-gax';
import type { PaginationCallback } from 'google-gax';
import type { protobuf as protobuf_2 } from 'google-gax';
import { Transform } from 'stream';

export declare const CapacityPlanningServiceClient: typeof v1beta.CapacityPlanningServiceClient;

export declare type CapacityPlanningServiceClient = v1beta.CapacityPlanningServiceClient;

/**
 *  This API allows users to plan for GCP capacity associated with their
 *  projects. Users can request additional capacity for GCP resources such as
 *  VMs, PDs, etc.
 * @class
 * @memberof v1beta
 */
declare class CapacityPlanningServiceClient_2 {
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
    capacityPlanningServiceStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of CapacityPlanningServiceClient.
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
     *     const client = new CapacityPlanningServiceClient({fallback: true}, gax);
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
     * Returns information about the capacity plan.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the capacity plan to retrieve.
     *   Format: projects/{project}/capacityPlans/{capacity_plan}
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.capacityplanner.v1beta.CapacityPlan|CapacityPlan}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/capacity_planning_service.get_capacity_plan.js</caption>
     * region_tag:capacityplanner_v1beta_generated_CapacityPlanningService_GetCapacityPlan_async
     */
    getCapacityPlan(request?: protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.ICapacityPlan,
    protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest | undefined,
        {} | undefined
    ]>;
    getCapacityPlan(request: protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, options: CallOptions, callback: Callback<protos.google.cloud.capacityplanner.v1beta.ICapacityPlan, protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest | null | undefined, {} | null | undefined>): void;
    getCapacityPlan(request: protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, callback: Callback<protos.google.cloud.capacityplanner.v1beta.ICapacityPlan, protos.google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Query capacity plan insights that are in the parent parameter and match
     * your specified filters.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource container.
     *   Format: projects/{project}
     * @param {google.cloud.capacityplanner.v1beta.CapacityPlanFilters} request.capacityPlanFilters
     *   Required. The filters to apply to the capacity plan.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse|QueryCapacityPlanInsightsResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/capacity_planning_service.query_capacity_plan_insights.js</caption>
     * region_tag:capacityplanner_v1beta_generated_CapacityPlanningService_QueryCapacityPlanInsights_async
     */
    queryCapacityPlanInsights(request?: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse,
    protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest | undefined,
        {} | undefined
    ]>;
    queryCapacityPlanInsights(request: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, options: CallOptions, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest | null | undefined, {} | null | undefined>): void;
    queryCapacityPlanInsights(request: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns a list of the capacity plans that are in the parent parameter and
     * match your specified filters.
     * (The maximum list length is limited by the pageSize parameter.)
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource container.
     *   Format:
     *           projects/{project} or
     *           folders/{folder} or
     *           organizations/{organization}
     * @param {number} [request.pageSize]
     *   Optional. The maximum number of plans to return per page. The service may
     *   return fewer than this value. If unspecified, the server will use a
     *   sensible default. The maximum value is 1000; values above 1000 will be
     *   coerced to 1000.
     * @param {string} [request.pageToken]
     *   Optional. A page token, received from a previous `QueryCapacityPlans` call.
     *   Provide this to retrieve the subsequent page.
     * @param {string} [request.location]
     *   Optional. The Google Cloud Platform location of capacity plans. If
     *   unspecified, all locations will be included.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.capacityplanner.v1beta.CapacityPlan|CapacityPlan}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `queryCapacityPlansAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    queryCapacityPlans(request?: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.ICapacityPlan[],
    protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest | null,
    protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse
    ]>;
    queryCapacityPlans(request: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse | null | undefined, protos.google.cloud.capacityplanner.v1beta.ICapacityPlan>): void;
    queryCapacityPlans(request: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, callback: PaginationCallback<protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse | null | undefined, protos.google.cloud.capacityplanner.v1beta.ICapacityPlan>): void;
    /**
     * Equivalent to `queryCapacityPlans`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource container.
     *   Format:
     *           projects/{project} or
     *           folders/{folder} or
     *           organizations/{organization}
     * @param {number} [request.pageSize]
     *   Optional. The maximum number of plans to return per page. The service may
     *   return fewer than this value. If unspecified, the server will use a
     *   sensible default. The maximum value is 1000; values above 1000 will be
     *   coerced to 1000.
     * @param {string} [request.pageToken]
     *   Optional. A page token, received from a previous `QueryCapacityPlans` call.
     *   Provide this to retrieve the subsequent page.
     * @param {string} [request.location]
     *   Optional. The Google Cloud Platform location of capacity plans. If
     *   unspecified, all locations will be included.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.capacityplanner.v1beta.CapacityPlan|CapacityPlan} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `queryCapacityPlansAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    queryCapacityPlansStream(request?: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `queryCapacityPlans`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource container.
     *   Format:
     *           projects/{project} or
     *           folders/{folder} or
     *           organizations/{organization}
     * @param {number} [request.pageSize]
     *   Optional. The maximum number of plans to return per page. The service may
     *   return fewer than this value. If unspecified, the server will use a
     *   sensible default. The maximum value is 1000; values above 1000 will be
     *   coerced to 1000.
     * @param {string} [request.pageToken]
     *   Optional. A page token, received from a previous `QueryCapacityPlans` call.
     *   Provide this to retrieve the subsequent page.
     * @param {string} [request.location]
     *   Optional. The Google Cloud Platform location of capacity plans. If
     *   unspecified, all locations will be included.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.capacityplanner.v1beta.CapacityPlan|CapacityPlan}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/capacity_planning_service.query_capacity_plans.js</caption>
     * region_tag:capacityplanner_v1beta_generated_CapacityPlanningService_QueryCapacityPlans_async
     */
    queryCapacityPlansAsync(request?: protos.google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.capacityplanner.v1beta.ICapacityPlan>;
    /**
     * Return a fully-qualified capacityPlan resource name string.
     *
     * @param {string} project
     * @param {string} capacity_plan
     * @returns {string} Resource name string.
     */
    capacityPlanPath(project: string, capacityPlan: string): string;
    /**
     * Parse the project from CapacityPlan resource.
     *
     * @param {string} capacityPlanName
     *   A fully-qualified path representing CapacityPlan resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromCapacityPlanName(capacityPlanName: string): string | number;
    /**
     * Parse the capacity_plan from CapacityPlan resource.
     *
     * @param {string} capacityPlanName
     *   A fully-qualified path representing CapacityPlan resource.
     * @returns {string} A string representing the capacity_plan.
     */
    matchCapacityPlanFromCapacityPlanName(capacityPlanName: string): string | number;
    /**
     * Return a fully-qualified folderLocationForecasts resource name string.
     *
     * @param {string} folder
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    folderLocationForecastsPath(folder: string, location: string, forecast: string): string;
    /**
     * Parse the folder from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the folder.
     */
    matchFolderFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Parse the location from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified folderLocationReservations resource name string.
     *
     * @param {string} folder
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    folderLocationReservationsPath(folder: string, location: string, reservation: string): string;
    /**
     * Parse the folder from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the folder.
     */
    matchFolderFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
    /**
     * Parse the location from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
    /**
     * Return a fully-qualified organizationLocationForecasts resource name string.
     *
     * @param {string} organization
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    organizationLocationForecastsPath(organization: string, location: string, forecast: string): string;
    /**
     * Parse the organization from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the organization.
     */
    matchOrganizationFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Parse the location from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified organizationLocationReservations resource name string.
     *
     * @param {string} organization
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    organizationLocationReservationsPath(organization: string, location: string, reservation: string): string;
    /**
     * Parse the organization from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the organization.
     */
    matchOrganizationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
    /**
     * Parse the location from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
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
     * Return a fully-qualified projectLocationForecasts resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    projectLocationForecastsPath(project: string, location: string, forecast: string): string;
    /**
     * Parse the project from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Parse the location from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified projectLocationReservations resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    projectLocationReservationsPath(project: string, location: string, reservation: string): string;
    /**
     * Parse the project from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Parse the location from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}

declare const _default: {
    v1beta: typeof v1beta;
    CapacityPlanningServiceClient: typeof v1beta.CapacityPlanningServiceClient;
    UsageServiceClient: typeof v1beta.UsageServiceClient;
};
export default _default;

/** Namespace google. */
declare namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long_2|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long_2|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long_2|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long_2|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|Buffer|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long_2|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long_2|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|Buffer|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long_2|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long_2|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace capacityplanner. */
        namespace capacityplanner {

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of an Allocation. */
                interface IAllocation {

                    /** Allocation specificAllocation */
                    specificAllocation?: (google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation|null);

                    /** Allocation id */
                    id?: (number|Long_2|string|null);

                    /** Allocation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Allocation zone */
                    zone?: (string|null);

                    /** Allocation description */
                    description?: (string|null);

                    /** Allocation allocation */
                    allocation?: (string|null);

                    /** Allocation ownerProjectId */
                    ownerProjectId?: (string|null);

                    /** Allocation status */
                    status?: (google.cloud.capacityplanner.v1beta.Allocation.Status|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.Status|null);

                    /** Allocation shareSettings */
                    shareSettings?: (google.cloud.capacityplanner.v1beta.Allocation.IShareSettings|null);

                    /** Allocation autoDeleteTime */
                    autoDeleteTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Allocation. */
                class Allocation implements IAllocation {

                    /**
                     * Constructs a new Allocation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IAllocation);

                    /** Allocation specificAllocation. */
                    public specificAllocation?: (google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation|null);

                    /** Allocation id. */
                    public id: (number|Long_2|string);

                    /** Allocation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Allocation zone. */
                    public zone: string;

                    /** Allocation description. */
                    public description: string;

                    /** Allocation allocation. */
                    public allocation: string;

                    /** Allocation ownerProjectId. */
                    public ownerProjectId: string;

                    /** Allocation status. */
                    public status: (google.cloud.capacityplanner.v1beta.Allocation.Status|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.Status);

                    /** Allocation shareSettings. */
                    public shareSettings?: (google.cloud.capacityplanner.v1beta.Allocation.IShareSettings|null);

                    /** Allocation autoDeleteTime. */
                    public autoDeleteTime?: (google.protobuf.ITimestamp|null);

                    /** Allocation type. */
                    public type?: "specificAllocation";

                    /**
                     * Creates a new Allocation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Allocation instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IAllocation): google.cloud.capacityplanner.v1beta.Allocation;

                    /**
                     * Encodes the specified Allocation message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.verify|verify} messages.
                     * @param message Allocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IAllocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified Allocation message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.verify|verify} messages.
                     * @param message Allocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IAllocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an Allocation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Allocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation;

                    /**
                     * Decodes an Allocation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Allocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation;

                    /**
                     * Verifies an Allocation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Allocation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Allocation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation;

                    /**
                     * Creates a plain object from an Allocation message. Also converts values to other types if specified.
                     * @param message Allocation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Allocation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Allocation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Allocation {

                    /** Properties of a SpecificSKUAllocation. */
                    interface ISpecificSKUAllocation {

                        /** SpecificSKUAllocation instanceProperties */
                        instanceProperties?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties|null);

                        /** SpecificSKUAllocation count */
                        count?: (number|Long_2|string|null);

                        /** SpecificSKUAllocation usedCount */
                        usedCount?: (number|Long_2|string|null);

                        /** SpecificSKUAllocation assuredCount */
                        assuredCount?: (number|Long_2|string|null);
                    }

                    /** Represents a SpecificSKUAllocation. */
                    class SpecificSKUAllocation implements ISpecificSKUAllocation {

                        /**
                         * Constructs a new SpecificSKUAllocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation);

                        /** SpecificSKUAllocation instanceProperties. */
                        public instanceProperties?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties|null);

                        /** SpecificSKUAllocation count. */
                        public count: (number|Long_2|string);

                        /** SpecificSKUAllocation usedCount. */
                        public usedCount: (number|Long_2|string);

                        /** SpecificSKUAllocation assuredCount. */
                        public assuredCount: (number|Long_2|string);

                        /**
                         * Creates a new SpecificSKUAllocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpecificSKUAllocation instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation;

                        /**
                         * Encodes the specified SpecificSKUAllocation message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.verify|verify} messages.
                         * @param message SpecificSKUAllocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified SpecificSKUAllocation message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.verify|verify} messages.
                         * @param message SpecificSKUAllocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.Allocation.ISpecificSKUAllocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a SpecificSKUAllocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpecificSKUAllocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation;

                        /**
                         * Decodes a SpecificSKUAllocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpecificSKUAllocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation;

                        /**
                         * Verifies a SpecificSKUAllocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpecificSKUAllocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpecificSKUAllocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation;

                        /**
                         * Creates a plain object from a SpecificSKUAllocation message. Also converts values to other types if specified.
                         * @param message SpecificSKUAllocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpecificSKUAllocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpecificSKUAllocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SpecificSKUAllocation {

                        /** Properties of an AllocatedInstanceProperties. */
                        interface IAllocatedInstanceProperties {

                            /** AllocatedInstanceProperties machineType */
                            machineType?: (string|null);

                            /** AllocatedInstanceProperties guestAccelerator */
                            guestAccelerator?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig[]|null);

                            /** AllocatedInstanceProperties minCpuPlatform */
                            minCpuPlatform?: (string|null);

                            /** AllocatedInstanceProperties localSsd */
                            localSsd?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk[]|null);
                        }

                        /** Represents an AllocatedInstanceProperties. */
                        class AllocatedInstanceProperties implements IAllocatedInstanceProperties {

                            /**
                             * Constructs a new AllocatedInstanceProperties.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties);

                            /** AllocatedInstanceProperties machineType. */
                            public machineType: string;

                            /** AllocatedInstanceProperties guestAccelerator. */
                            public guestAccelerator: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig[];

                            /** AllocatedInstanceProperties minCpuPlatform. */
                            public minCpuPlatform: string;

                            /** AllocatedInstanceProperties localSsd. */
                            public localSsd: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk[];

                            /**
                             * Creates a new AllocatedInstanceProperties instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AllocatedInstanceProperties instance
                             */
                            public static create(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties;

                            /**
                             * Encodes the specified AllocatedInstanceProperties message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.verify|verify} messages.
                             * @param message AllocatedInstanceProperties message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties, writer?: protobuf_2.Writer): protobuf_2.Writer;

                            /**
                             * Encodes the specified AllocatedInstanceProperties message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.verify|verify} messages.
                             * @param message AllocatedInstanceProperties message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties, writer?: protobuf_2.Writer): protobuf_2.Writer;

                            /**
                             * Decodes an AllocatedInstanceProperties message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AllocatedInstanceProperties
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties;

                            /**
                             * Decodes an AllocatedInstanceProperties message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AllocatedInstanceProperties
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties;

                            /**
                             * Verifies an AllocatedInstanceProperties message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AllocatedInstanceProperties message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AllocatedInstanceProperties
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties;

                            /**
                             * Creates a plain object from an AllocatedInstanceProperties message. Also converts values to other types if specified.
                             * @param message AllocatedInstanceProperties
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AllocatedInstanceProperties to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AllocatedInstanceProperties
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AllocatedInstanceProperties {

                            /** Properties of an AcceleratorConfig. */
                            interface IAcceleratorConfig {

                                /** AcceleratorConfig type */
                                type?: (string|null);

                                /** AcceleratorConfig count */
                                count?: (number|null);
                            }

                            /** Represents an AcceleratorConfig. */
                            class AcceleratorConfig implements IAcceleratorConfig {

                                /**
                                 * Constructs a new AcceleratorConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig);

                                /** AcceleratorConfig type. */
                                public type: string;

                                /** AcceleratorConfig count. */
                                public count: number;

                                /**
                                 * Creates a new AcceleratorConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AcceleratorConfig instance
                                 */
                                public static create(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig;

                                /**
                                 * Encodes the specified AcceleratorConfig message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig.verify|verify} messages.
                                 * @param message AcceleratorConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig, writer?: protobuf_2.Writer): protobuf_2.Writer;

                                /**
                                 * Encodes the specified AcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig.verify|verify} messages.
                                 * @param message AcceleratorConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAcceleratorConfig, writer?: protobuf_2.Writer): protobuf_2.Writer;

                                /**
                                 * Decodes an AcceleratorConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AcceleratorConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig;

                                /**
                                 * Decodes an AcceleratorConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AcceleratorConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig;

                                /**
                                 * Verifies an AcceleratorConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AcceleratorConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig;

                                /**
                                 * Creates a plain object from an AcceleratorConfig message. Also converts values to other types if specified.
                                 * @param message AcceleratorConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AcceleratorConfig, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AcceleratorConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AcceleratorConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an AllocatedDisk. */
                            interface IAllocatedDisk {

                                /** AllocatedDisk diskSizeGb */
                                diskSizeGb?: (number|Long_2|string|null);

                                /** AllocatedDisk diskInterface */
                                diskInterface?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.DiskInterface|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.DiskInterface|null);
                            }

                            /** Represents an AllocatedDisk. */
                            class AllocatedDisk implements IAllocatedDisk {

                                /**
                                 * Constructs a new AllocatedDisk.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk);

                                /** AllocatedDisk diskSizeGb. */
                                public diskSizeGb: (number|Long_2|string);

                                /** AllocatedDisk diskInterface. */
                                public diskInterface: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.DiskInterface|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.DiskInterface);

                                /**
                                 * Creates a new AllocatedDisk instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AllocatedDisk instance
                                 */
                                public static create(properties?: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk;

                                /**
                                 * Encodes the specified AllocatedDisk message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.verify|verify} messages.
                                 * @param message AllocatedDisk message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk, writer?: protobuf_2.Writer): protobuf_2.Writer;

                                /**
                                 * Encodes the specified AllocatedDisk message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk.verify|verify} messages.
                                 * @param message AllocatedDisk message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.IAllocatedDisk, writer?: protobuf_2.Writer): protobuf_2.Writer;

                                /**
                                 * Decodes an AllocatedDisk message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AllocatedDisk
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk;

                                /**
                                 * Decodes an AllocatedDisk message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AllocatedDisk
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk;

                                /**
                                 * Verifies an AllocatedDisk message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AllocatedDisk message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AllocatedDisk
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk;

                                /**
                                 * Creates a plain object from an AllocatedDisk message. Also converts values to other types if specified.
                                 * @param message AllocatedDisk
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.AllocatedInstanceProperties.AllocatedDisk, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AllocatedDisk to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AllocatedDisk
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace AllocatedDisk {

                                /** DiskInterface enum. */
                                enum DiskInterface {
                                    DISK_INTERFACE_UNSPECIFIED = 0,
                                    SCSI = 1,
                                    NVME = 2,
                                    NVDIMM = 3,
                                    ISCSI = 4
                                }
                            }
                        }
                    }

                    /** Properties of a ShareSettings. */
                    interface IShareSettings {

                        /** ShareSettings shareType */
                        shareType?: (google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.ShareType|null);

                        /** ShareSettings projects */
                        projects?: (string[]|null);
                    }

                    /** Represents a ShareSettings. */
                    class ShareSettings implements IShareSettings {

                        /**
                         * Constructs a new ShareSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.Allocation.IShareSettings);

                        /** ShareSettings shareType. */
                        public shareType: (google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.ShareType);

                        /** ShareSettings projects. */
                        public projects: string[];

                        /**
                         * Creates a new ShareSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShareSettings instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.Allocation.IShareSettings): google.cloud.capacityplanner.v1beta.Allocation.ShareSettings;

                        /**
                         * Encodes the specified ShareSettings message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.verify|verify} messages.
                         * @param message ShareSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.Allocation.IShareSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified ShareSettings message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Allocation.ShareSettings.verify|verify} messages.
                         * @param message ShareSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.Allocation.IShareSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a ShareSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShareSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Allocation.ShareSettings;

                        /**
                         * Decodes a ShareSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShareSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Allocation.ShareSettings;

                        /**
                         * Verifies a ShareSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShareSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShareSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Allocation.ShareSettings;

                        /**
                         * Creates a plain object from a ShareSettings message. Also converts values to other types if specified.
                         * @param message ShareSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.Allocation.ShareSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShareSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ShareSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ShareSettings {

                        /** ShareType enum. */
                        enum ShareType {
                            SHARE_TYPE_UNSPECIFIED = 0,
                            ORGANIZATION = 1,
                            SPECIFIC_PROJECTS = 2,
                            LOCAL = 3,
                            DIRECT_PROJECTS_UNDER_SPECIFIC_FOLDERS = 4
                        }
                    }

                    /** Status enum. */
                    enum Status {
                        STATUS_UNSPECIFIED = 0,
                        INVALID = 1,
                        CREATING = 2,
                        READY = 3,
                        DELETING = 4,
                        UPDATING = 5
                    }
                }

                /** Represents a CapacityPlanningService */
                class CapacityPlanningService extends protobuf_2.rpc.Service {

                    /**
                     * Constructs a new CapacityPlanningService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CapacityPlanningService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CapacityPlanningService;

                    /**
                     * Calls GetCapacityPlan.
                     * @param request GetCapacityPlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CapacityPlan
                     */
                    public getCapacityPlan(request: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, callback: google.cloud.capacityplanner.v1beta.CapacityPlanningService.GetCapacityPlanCallback): void;

                    /**
                     * Calls GetCapacityPlan.
                     * @param request GetCapacityPlanRequest message or plain object
                     * @returns Promise
                     */
                    public getCapacityPlan(request: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest): Promise<google.cloud.capacityplanner.v1beta.CapacityPlan>;

                    /**
                     * Calls QueryCapacityPlans.
                     * @param request QueryCapacityPlansRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryCapacityPlansResponse
                     */
                    public queryCapacityPlans(request: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, callback: google.cloud.capacityplanner.v1beta.CapacityPlanningService.QueryCapacityPlansCallback): void;

                    /**
                     * Calls QueryCapacityPlans.
                     * @param request QueryCapacityPlansRequest message or plain object
                     * @returns Promise
                     */
                    public queryCapacityPlans(request: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest): Promise<google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse>;

                    /**
                     * Calls QueryCapacityPlanInsights.
                     * @param request QueryCapacityPlanInsightsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryCapacityPlanInsightsResponse
                     */
                    public queryCapacityPlanInsights(request: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, callback: google.cloud.capacityplanner.v1beta.CapacityPlanningService.QueryCapacityPlanInsightsCallback): void;

                    /**
                     * Calls QueryCapacityPlanInsights.
                     * @param request QueryCapacityPlanInsightsRequest message or plain object
                     * @returns Promise
                     */
                    public queryCapacityPlanInsights(request: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest): Promise<google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse>;
                }

                namespace CapacityPlanningService {

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.CapacityPlanningService|getCapacityPlan}.
                     * @param error Error, if any
                     * @param [response] CapacityPlan
                     */
                    type GetCapacityPlanCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.CapacityPlan) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.CapacityPlanningService|queryCapacityPlans}.
                     * @param error Error, if any
                     * @param [response] QueryCapacityPlansResponse
                     */
                    type QueryCapacityPlansCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.CapacityPlanningService|queryCapacityPlanInsights}.
                     * @param error Error, if any
                     * @param [response] QueryCapacityPlanInsightsResponse
                     */
                    type QueryCapacityPlanInsightsCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse) => void;
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    PENDING_REVIEW = 1,
                    IN_REVIEW = 3,
                    APPROVED_PROVISIONAL = 8,
                    OBSOLETE = 5,
                    CANNOT_BE_FULFILLED = 7,
                    ON_HOLD_CONTACT_SALES = 9,
                    IN_FULFILLMENT = 10
                }

                /** CapacityType enum. */
                enum CapacityType {
                    CAPACITY_TYPE_UNKNOWN = 0,
                    CAPACITY_TYPE_INORGANIC_DRAFT = 1,
                    CAPACITY_TYPE_INORGANIC_PENDING = 2,
                    CAPACITY_TYPE_INORGANIC_APPROVED = 3
                }

                /** Properties of a GetCapacityPlanRequest. */
                interface IGetCapacityPlanRequest {

                    /** GetCapacityPlanRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCapacityPlanRequest. */
                class GetCapacityPlanRequest implements IGetCapacityPlanRequest {

                    /**
                     * Constructs a new GetCapacityPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest);

                    /** GetCapacityPlanRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCapacityPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCapacityPlanRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest): google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest;

                    /**
                     * Encodes the specified GetCapacityPlanRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest.verify|verify} messages.
                     * @param message GetCapacityPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified GetCapacityPlanRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest.verify|verify} messages.
                     * @param message GetCapacityPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IGetCapacityPlanRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a GetCapacityPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCapacityPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest;

                    /**
                     * Decodes a GetCapacityPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCapacityPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest;

                    /**
                     * Verifies a GetCapacityPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCapacityPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCapacityPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest;

                    /**
                     * Creates a plain object from a GetCapacityPlanRequest message. Also converts values to other types if specified.
                     * @param message GetCapacityPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.GetCapacityPlanRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCapacityPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCapacityPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryCapacityPlansRequest. */
                interface IQueryCapacityPlansRequest {

                    /** QueryCapacityPlansRequest parent */
                    parent?: (string|null);

                    /** QueryCapacityPlansRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryCapacityPlansRequest pageToken */
                    pageToken?: (string|null);

                    /** QueryCapacityPlansRequest location */
                    location?: (string|null);
                }

                /** Represents a QueryCapacityPlansRequest. */
                class QueryCapacityPlansRequest implements IQueryCapacityPlansRequest {

                    /**
                     * Constructs a new QueryCapacityPlansRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest);

                    /** QueryCapacityPlansRequest parent. */
                    public parent: string;

                    /** QueryCapacityPlansRequest pageSize. */
                    public pageSize: number;

                    /** QueryCapacityPlansRequest pageToken. */
                    public pageToken: string;

                    /** QueryCapacityPlansRequest location. */
                    public location: string;

                    /**
                     * Creates a new QueryCapacityPlansRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCapacityPlansRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest): google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest;

                    /**
                     * Encodes the specified QueryCapacityPlansRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest.verify|verify} messages.
                     * @param message QueryCapacityPlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryCapacityPlansRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest.verify|verify} messages.
                     * @param message QueryCapacityPlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryCapacityPlansRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCapacityPlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest;

                    /**
                     * Decodes a QueryCapacityPlansRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCapacityPlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest;

                    /**
                     * Verifies a QueryCapacityPlansRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCapacityPlansRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCapacityPlansRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest;

                    /**
                     * Creates a plain object from a QueryCapacityPlansRequest message. Also converts values to other types if specified.
                     * @param message QueryCapacityPlansRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryCapacityPlansRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCapacityPlansRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryCapacityPlansRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryCapacityPlansResponse. */
                interface IQueryCapacityPlansResponse {

                    /** QueryCapacityPlansResponse capacityPlans */
                    capacityPlans?: (google.cloud.capacityplanner.v1beta.ICapacityPlan[]|null);

                    /** QueryCapacityPlansResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a QueryCapacityPlansResponse. */
                class QueryCapacityPlansResponse implements IQueryCapacityPlansResponse {

                    /**
                     * Constructs a new QueryCapacityPlansResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse);

                    /** QueryCapacityPlansResponse capacityPlans. */
                    public capacityPlans: google.cloud.capacityplanner.v1beta.ICapacityPlan[];

                    /** QueryCapacityPlansResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new QueryCapacityPlansResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCapacityPlansResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse): google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse;

                    /**
                     * Encodes the specified QueryCapacityPlansResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse.verify|verify} messages.
                     * @param message QueryCapacityPlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryCapacityPlansResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse.verify|verify} messages.
                     * @param message QueryCapacityPlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlansResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryCapacityPlansResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCapacityPlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse;

                    /**
                     * Decodes a QueryCapacityPlansResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCapacityPlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse;

                    /**
                     * Verifies a QueryCapacityPlansResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCapacityPlansResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCapacityPlansResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse;

                    /**
                     * Creates a plain object from a QueryCapacityPlansResponse message. Also converts values to other types if specified.
                     * @param message QueryCapacityPlansResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryCapacityPlansResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCapacityPlansResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryCapacityPlansResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryCapacityPlanInsightsRequest. */
                interface IQueryCapacityPlanInsightsRequest {

                    /** QueryCapacityPlanInsightsRequest parent */
                    parent?: (string|null);

                    /** QueryCapacityPlanInsightsRequest capacityPlanFilters */
                    capacityPlanFilters?: (google.cloud.capacityplanner.v1beta.ICapacityPlanFilters|null);
                }

                /** Represents a QueryCapacityPlanInsightsRequest. */
                class QueryCapacityPlanInsightsRequest implements IQueryCapacityPlanInsightsRequest {

                    /**
                     * Constructs a new QueryCapacityPlanInsightsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest);

                    /** QueryCapacityPlanInsightsRequest parent. */
                    public parent: string;

                    /** QueryCapacityPlanInsightsRequest capacityPlanFilters. */
                    public capacityPlanFilters?: (google.cloud.capacityplanner.v1beta.ICapacityPlanFilters|null);

                    /**
                     * Creates a new QueryCapacityPlanInsightsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCapacityPlanInsightsRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest;

                    /**
                     * Encodes the specified QueryCapacityPlanInsightsRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest.verify|verify} messages.
                     * @param message QueryCapacityPlanInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryCapacityPlanInsightsRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest.verify|verify} messages.
                     * @param message QueryCapacityPlanInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryCapacityPlanInsightsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCapacityPlanInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest;

                    /**
                     * Decodes a QueryCapacityPlanInsightsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCapacityPlanInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest;

                    /**
                     * Verifies a QueryCapacityPlanInsightsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCapacityPlanInsightsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCapacityPlanInsightsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest;

                    /**
                     * Creates a plain object from a QueryCapacityPlanInsightsRequest message. Also converts values to other types if specified.
                     * @param message QueryCapacityPlanInsightsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCapacityPlanInsightsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryCapacityPlanInsightsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryCapacityPlanInsightsResponse. */
                interface IQueryCapacityPlanInsightsResponse {

                    /** QueryCapacityPlanInsightsResponse aggregatedCapacityPlanView */
                    aggregatedCapacityPlanView?: (google.cloud.capacityplanner.v1beta.ICapacityPlanView|null);
                }

                /** Represents a QueryCapacityPlanInsightsResponse. */
                class QueryCapacityPlanInsightsResponse implements IQueryCapacityPlanInsightsResponse {

                    /**
                     * Constructs a new QueryCapacityPlanInsightsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse);

                    /** QueryCapacityPlanInsightsResponse aggregatedCapacityPlanView. */
                    public aggregatedCapacityPlanView?: (google.cloud.capacityplanner.v1beta.ICapacityPlanView|null);

                    /**
                     * Creates a new QueryCapacityPlanInsightsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCapacityPlanInsightsResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse;

                    /**
                     * Encodes the specified QueryCapacityPlanInsightsResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse.verify|verify} messages.
                     * @param message QueryCapacityPlanInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryCapacityPlanInsightsResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse.verify|verify} messages.
                     * @param message QueryCapacityPlanInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryCapacityPlanInsightsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryCapacityPlanInsightsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCapacityPlanInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse;

                    /**
                     * Decodes a QueryCapacityPlanInsightsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCapacityPlanInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse;

                    /**
                     * Verifies a QueryCapacityPlanInsightsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCapacityPlanInsightsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCapacityPlanInsightsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse;

                    /**
                     * Creates a plain object from a QueryCapacityPlanInsightsResponse message. Also converts values to other types if specified.
                     * @param message QueryCapacityPlanInsightsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryCapacityPlanInsightsResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCapacityPlanInsightsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryCapacityPlanInsightsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CapacityPlanFilters. */
                interface ICapacityPlanFilters {

                    /** CapacityPlanFilters keys */
                    keys?: (google.cloud.capacityplanner.v1beta.ICapacityPlanKey[]|null);

                    /** CapacityPlanFilters capacityTypes */
                    capacityTypes?: (google.cloud.capacityplanner.v1beta.CapacityType[]|null);

                    /** CapacityPlanFilters capacityPlanId */
                    capacityPlanId?: (string|null);
                }

                /** Represents a CapacityPlanFilters. */
                class CapacityPlanFilters implements ICapacityPlanFilters {

                    /**
                     * Constructs a new CapacityPlanFilters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanFilters);

                    /** CapacityPlanFilters keys. */
                    public keys: google.cloud.capacityplanner.v1beta.ICapacityPlanKey[];

                    /** CapacityPlanFilters capacityTypes. */
                    public capacityTypes: google.cloud.capacityplanner.v1beta.CapacityType[];

                    /** CapacityPlanFilters capacityPlanId. */
                    public capacityPlanId: string;

                    /**
                     * Creates a new CapacityPlanFilters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CapacityPlanFilters instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanFilters): google.cloud.capacityplanner.v1beta.CapacityPlanFilters;

                    /**
                     * Encodes the specified CapacityPlanFilters message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanFilters.verify|verify} messages.
                     * @param message CapacityPlanFilters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ICapacityPlanFilters, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified CapacityPlanFilters message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanFilters.verify|verify} messages.
                     * @param message CapacityPlanFilters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ICapacityPlanFilters, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a CapacityPlanFilters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CapacityPlanFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.CapacityPlanFilters;

                    /**
                     * Decodes a CapacityPlanFilters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CapacityPlanFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.CapacityPlanFilters;

                    /**
                     * Verifies a CapacityPlanFilters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CapacityPlanFilters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CapacityPlanFilters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.CapacityPlanFilters;

                    /**
                     * Creates a plain object from a CapacityPlanFilters message. Also converts values to other types if specified.
                     * @param message CapacityPlanFilters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.CapacityPlanFilters, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CapacityPlanFilters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CapacityPlanFilters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CapacityPlanKey. */
                interface ICapacityPlanKey {

                    /** CapacityPlanKey resourceContainer */
                    resourceContainer?: (google.cloud.capacityplanner.v1beta.IResourceContainer|null);

                    /** CapacityPlanKey resourceIdKey */
                    resourceIdKey?: (google.cloud.capacityplanner.v1beta.IResourceIdKey|null);

                    /** CapacityPlanKey locationId */
                    locationId?: (google.cloud.capacityplanner.v1beta.ILocationIdentifier|null);
                }

                /** Represents a CapacityPlanKey. */
                class CapacityPlanKey implements ICapacityPlanKey {

                    /**
                     * Constructs a new CapacityPlanKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanKey);

                    /** CapacityPlanKey resourceContainer. */
                    public resourceContainer?: (google.cloud.capacityplanner.v1beta.IResourceContainer|null);

                    /** CapacityPlanKey resourceIdKey. */
                    public resourceIdKey?: (google.cloud.capacityplanner.v1beta.IResourceIdKey|null);

                    /** CapacityPlanKey locationId. */
                    public locationId?: (google.cloud.capacityplanner.v1beta.ILocationIdentifier|null);

                    /**
                     * Creates a new CapacityPlanKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CapacityPlanKey instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanKey): google.cloud.capacityplanner.v1beta.CapacityPlanKey;

                    /**
                     * Encodes the specified CapacityPlanKey message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanKey.verify|verify} messages.
                     * @param message CapacityPlanKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ICapacityPlanKey, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified CapacityPlanKey message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanKey.verify|verify} messages.
                     * @param message CapacityPlanKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ICapacityPlanKey, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a CapacityPlanKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CapacityPlanKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.CapacityPlanKey;

                    /**
                     * Decodes a CapacityPlanKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CapacityPlanKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.CapacityPlanKey;

                    /**
                     * Verifies a CapacityPlanKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CapacityPlanKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CapacityPlanKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.CapacityPlanKey;

                    /**
                     * Creates a plain object from a CapacityPlanKey message. Also converts values to other types if specified.
                     * @param message CapacityPlanKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.CapacityPlanKey, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CapacityPlanKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CapacityPlanKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CapacityPlanView. */
                interface ICapacityPlanView {

                    /** CapacityPlanView key */
                    key?: (google.cloud.capacityplanner.v1beta.ICapacityPlanKey|null);

                    /** CapacityPlanView timeSeriesViews */
                    timeSeriesViews?: (google.cloud.capacityplanner.v1beta.ITimeSeriesView[]|null);
                }

                /** Represents a CapacityPlanView. */
                class CapacityPlanView implements ICapacityPlanView {

                    /**
                     * Constructs a new CapacityPlanView.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanView);

                    /** CapacityPlanView key. */
                    public key?: (google.cloud.capacityplanner.v1beta.ICapacityPlanKey|null);

                    /** CapacityPlanView timeSeriesViews. */
                    public timeSeriesViews: google.cloud.capacityplanner.v1beta.ITimeSeriesView[];

                    /**
                     * Creates a new CapacityPlanView instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CapacityPlanView instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlanView): google.cloud.capacityplanner.v1beta.CapacityPlanView;

                    /**
                     * Encodes the specified CapacityPlanView message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanView.verify|verify} messages.
                     * @param message CapacityPlanView message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ICapacityPlanView, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified CapacityPlanView message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlanView.verify|verify} messages.
                     * @param message CapacityPlanView message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ICapacityPlanView, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a CapacityPlanView message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CapacityPlanView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.CapacityPlanView;

                    /**
                     * Decodes a CapacityPlanView message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CapacityPlanView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.CapacityPlanView;

                    /**
                     * Verifies a CapacityPlanView message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CapacityPlanView message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CapacityPlanView
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.CapacityPlanView;

                    /**
                     * Creates a plain object from a CapacityPlanView message. Also converts values to other types if specified.
                     * @param message CapacityPlanView
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.CapacityPlanView, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CapacityPlanView to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CapacityPlanView
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TimeSeriesView. */
                interface ITimeSeriesView {

                    /** TimeSeriesView type */
                    type?: (google.cloud.capacityplanner.v1beta.CapacityType|keyof typeof google.cloud.capacityplanner.v1beta.CapacityType|null);

                    /** TimeSeriesView capacityValue */
                    capacityValue?: (google.cloud.capacityplanner.v1beta.IDemandValue|null);
                }

                /** Represents a TimeSeriesView. */
                class TimeSeriesView implements ITimeSeriesView {

                    /**
                     * Constructs a new TimeSeriesView.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ITimeSeriesView);

                    /** TimeSeriesView type. */
                    public type: (google.cloud.capacityplanner.v1beta.CapacityType|keyof typeof google.cloud.capacityplanner.v1beta.CapacityType);

                    /** TimeSeriesView capacityValue. */
                    public capacityValue?: (google.cloud.capacityplanner.v1beta.IDemandValue|null);

                    /**
                     * Creates a new TimeSeriesView instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSeriesView instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ITimeSeriesView): google.cloud.capacityplanner.v1beta.TimeSeriesView;

                    /**
                     * Encodes the specified TimeSeriesView message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeSeriesView.verify|verify} messages.
                     * @param message TimeSeriesView message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ITimeSeriesView, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified TimeSeriesView message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeSeriesView.verify|verify} messages.
                     * @param message TimeSeriesView message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ITimeSeriesView, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a TimeSeriesView message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSeriesView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.TimeSeriesView;

                    /**
                     * Decodes a TimeSeriesView message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSeriesView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.TimeSeriesView;

                    /**
                     * Verifies a TimeSeriesView message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSeriesView message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSeriesView
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.TimeSeriesView;

                    /**
                     * Creates a plain object from a TimeSeriesView message. Also converts values to other types if specified.
                     * @param message TimeSeriesView
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.TimeSeriesView, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSeriesView to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimeSeriesView
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CapacityPlan. */
                interface ICapacityPlan {

                    /** CapacityPlan name */
                    name?: (string|null);

                    /** CapacityPlan capacityDemandMetadata */
                    capacityDemandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** CapacityPlan serviceDemands */
                    serviceDemands?: (google.cloud.capacityplanner.v1beta.IServiceDemand[]|null);

                    /** CapacityPlan reporter */
                    reporter?: (google.cloud.capacityplanner.v1beta.IUser|null);

                    /** CapacityPlan state */
                    state?: (google.cloud.capacityplanner.v1beta.State|keyof typeof google.cloud.capacityplanner.v1beta.State|null);

                    /** CapacityPlan createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CapacityPlan updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CapacityPlan description */
                    description?: (string|null);

                    /** CapacityPlan title */
                    title?: (string|null);
                }

                /** Represents a CapacityPlan. */
                class CapacityPlan implements ICapacityPlan {

                    /**
                     * Constructs a new CapacityPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlan);

                    /** CapacityPlan name. */
                    public name: string;

                    /** CapacityPlan capacityDemandMetadata. */
                    public capacityDemandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** CapacityPlan serviceDemands. */
                    public serviceDemands: google.cloud.capacityplanner.v1beta.IServiceDemand[];

                    /** CapacityPlan reporter. */
                    public reporter?: (google.cloud.capacityplanner.v1beta.IUser|null);

                    /** CapacityPlan state. */
                    public state: (google.cloud.capacityplanner.v1beta.State|keyof typeof google.cloud.capacityplanner.v1beta.State);

                    /** CapacityPlan createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CapacityPlan updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CapacityPlan description. */
                    public description: string;

                    /** CapacityPlan title. */
                    public title: string;

                    /**
                     * Creates a new CapacityPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CapacityPlan instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ICapacityPlan): google.cloud.capacityplanner.v1beta.CapacityPlan;

                    /**
                     * Encodes the specified CapacityPlan message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlan.verify|verify} messages.
                     * @param message CapacityPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ICapacityPlan, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified CapacityPlan message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.CapacityPlan.verify|verify} messages.
                     * @param message CapacityPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ICapacityPlan, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a CapacityPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CapacityPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.CapacityPlan;

                    /**
                     * Decodes a CapacityPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CapacityPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.CapacityPlan;

                    /**
                     * Verifies a CapacityPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CapacityPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CapacityPlan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.CapacityPlan;

                    /**
                     * Creates a plain object from a CapacityPlan message. Also converts values to other types if specified.
                     * @param message CapacityPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.CapacityPlan, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CapacityPlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CapacityPlan
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DemandMetadata. */
                interface IDemandMetadata {

                    /** DemandMetadata demandPreferences */
                    demandPreferences?: (google.cloud.capacityplanner.v1beta.IDemandPreference[]|null);
                }

                /** Represents a DemandMetadata. */
                class DemandMetadata implements IDemandMetadata {

                    /**
                     * Constructs a new DemandMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IDemandMetadata);

                    /** DemandMetadata demandPreferences. */
                    public demandPreferences: google.cloud.capacityplanner.v1beta.IDemandPreference[];

                    /**
                     * Creates a new DemandMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemandMetadata instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IDemandMetadata): google.cloud.capacityplanner.v1beta.DemandMetadata;

                    /**
                     * Encodes the specified DemandMetadata message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandMetadata.verify|verify} messages.
                     * @param message DemandMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IDemandMetadata, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified DemandMetadata message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandMetadata.verify|verify} messages.
                     * @param message DemandMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IDemandMetadata, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a DemandMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemandMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.DemandMetadata;

                    /**
                     * Decodes a DemandMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemandMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.DemandMetadata;

                    /**
                     * Verifies a DemandMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemandMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemandMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.DemandMetadata;

                    /**
                     * Creates a plain object from a DemandMetadata message. Also converts values to other types if specified.
                     * @param message DemandMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.DemandMetadata, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemandMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DemandMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DemandPreference. */
                interface IDemandPreference {

                    /** DemandPreference preferenceId */
                    preferenceId?: (string|null);

                    /** DemandPreference value */
                    value?: (google.cloud.capacityplanner.v1beta.IValue|null);
                }

                /** Represents a DemandPreference. */
                class DemandPreference implements IDemandPreference {

                    /**
                     * Constructs a new DemandPreference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IDemandPreference);

                    /** DemandPreference preferenceId. */
                    public preferenceId: string;

                    /** DemandPreference value. */
                    public value?: (google.cloud.capacityplanner.v1beta.IValue|null);

                    /**
                     * Creates a new DemandPreference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemandPreference instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IDemandPreference): google.cloud.capacityplanner.v1beta.DemandPreference;

                    /**
                     * Encodes the specified DemandPreference message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandPreference.verify|verify} messages.
                     * @param message DemandPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IDemandPreference, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified DemandPreference message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandPreference.verify|verify} messages.
                     * @param message DemandPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IDemandPreference, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a DemandPreference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemandPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.DemandPreference;

                    /**
                     * Decodes a DemandPreference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemandPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.DemandPreference;

                    /**
                     * Verifies a DemandPreference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemandPreference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemandPreference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.DemandPreference;

                    /**
                     * Creates a plain object from a DemandPreference message. Also converts values to other types if specified.
                     * @param message DemandPreference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.DemandPreference, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemandPreference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DemandPreference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServiceDemand. */
                interface IServiceDemand {

                    /** ServiceDemand service */
                    service?: (string|null);

                    /** ServiceDemand demandMetadata */
                    demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** ServiceDemand resourceDemands */
                    resourceDemands?: (google.cloud.capacityplanner.v1beta.IResourceDemand[]|null);
                }

                /** Represents a ServiceDemand. */
                class ServiceDemand implements IServiceDemand {

                    /**
                     * Constructs a new ServiceDemand.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IServiceDemand);

                    /** ServiceDemand service. */
                    public service: string;

                    /** ServiceDemand demandMetadata. */
                    public demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** ServiceDemand resourceDemands. */
                    public resourceDemands: google.cloud.capacityplanner.v1beta.IResourceDemand[];

                    /**
                     * Creates a new ServiceDemand instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceDemand instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IServiceDemand): google.cloud.capacityplanner.v1beta.ServiceDemand;

                    /**
                     * Encodes the specified ServiceDemand message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ServiceDemand.verify|verify} messages.
                     * @param message ServiceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IServiceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ServiceDemand message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ServiceDemand.verify|verify} messages.
                     * @param message ServiceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IServiceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ServiceDemand message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ServiceDemand;

                    /**
                     * Decodes a ServiceDemand message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ServiceDemand;

                    /**
                     * Verifies a ServiceDemand message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceDemand message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceDemand
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ServiceDemand;

                    /**
                     * Creates a plain object from a ServiceDemand message. Also converts values to other types if specified.
                     * @param message ServiceDemand
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ServiceDemand, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceDemand to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceDemand
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceDemand. */
                interface IResourceDemand {

                    /** ResourceDemand id */
                    id?: (string|null);

                    /** ResourceDemand resourceContainer */
                    resourceContainer?: (google.cloud.capacityplanner.v1beta.IResourceContainer|null);

                    /** ResourceDemand resourceId */
                    resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);

                    /** ResourceDemand locationId */
                    locationId?: (google.cloud.capacityplanner.v1beta.ILocationIdentifier|null);

                    /** ResourceDemand state */
                    state?: (google.cloud.capacityplanner.v1beta.State|keyof typeof google.cloud.capacityplanner.v1beta.State|null);

                    /** ResourceDemand reporter */
                    reporter?: (google.cloud.capacityplanner.v1beta.IUser|null);

                    /** ResourceDemand createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ResourceDemand updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ResourceDemand demandValues */
                    demandValues?: (google.cloud.capacityplanner.v1beta.IDemandValues|null);

                    /** ResourceDemand demandMetadata */
                    demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** ResourceDemand childResourceDemands */
                    childResourceDemands?: (google.cloud.capacityplanner.v1beta.IChildResourceDemand[]|null);
                }

                /** Represents a ResourceDemand. */
                class ResourceDemand implements IResourceDemand {

                    /**
                     * Constructs a new ResourceDemand.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceDemand);

                    /** ResourceDemand id. */
                    public id: string;

                    /** ResourceDemand resourceContainer. */
                    public resourceContainer?: (google.cloud.capacityplanner.v1beta.IResourceContainer|null);

                    /** ResourceDemand resourceId. */
                    public resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);

                    /** ResourceDemand locationId. */
                    public locationId?: (google.cloud.capacityplanner.v1beta.ILocationIdentifier|null);

                    /** ResourceDemand state. */
                    public state: (google.cloud.capacityplanner.v1beta.State|keyof typeof google.cloud.capacityplanner.v1beta.State);

                    /** ResourceDemand reporter. */
                    public reporter?: (google.cloud.capacityplanner.v1beta.IUser|null);

                    /** ResourceDemand createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ResourceDemand updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ResourceDemand demandValues. */
                    public demandValues?: (google.cloud.capacityplanner.v1beta.IDemandValues|null);

                    /** ResourceDemand demandMetadata. */
                    public demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /** ResourceDemand childResourceDemands. */
                    public childResourceDemands: google.cloud.capacityplanner.v1beta.IChildResourceDemand[];

                    /**
                     * Creates a new ResourceDemand instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceDemand instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceDemand): google.cloud.capacityplanner.v1beta.ResourceDemand;

                    /**
                     * Encodes the specified ResourceDemand message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceDemand.verify|verify} messages.
                     * @param message ResourceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceDemand message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceDemand.verify|verify} messages.
                     * @param message ResourceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceDemand message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceDemand;

                    /**
                     * Decodes a ResourceDemand message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceDemand;

                    /**
                     * Verifies a ResourceDemand message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceDemand message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceDemand
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceDemand;

                    /**
                     * Creates a plain object from a ResourceDemand message. Also converts values to other types if specified.
                     * @param message ResourceDemand
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceDemand, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceDemand to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceDemand
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a User. */
                interface IUser {

                    /** User email */
                    email?: (string|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IUser);

                    /** User email. */
                    public email: string;

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IUser): google.cloud.capacityplanner.v1beta.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IUser, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IUser, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.User, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for User
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DemandValues. */
                interface IDemandValues {

                    /** DemandValues values */
                    values?: (google.cloud.capacityplanner.v1beta.IDemandValue[]|null);
                }

                /** Represents a DemandValues. */
                class DemandValues implements IDemandValues {

                    /**
                     * Constructs a new DemandValues.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IDemandValues);

                    /** DemandValues values. */
                    public values: google.cloud.capacityplanner.v1beta.IDemandValue[];

                    /**
                     * Creates a new DemandValues instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemandValues instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IDemandValues): google.cloud.capacityplanner.v1beta.DemandValues;

                    /**
                     * Encodes the specified DemandValues message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandValues.verify|verify} messages.
                     * @param message DemandValues message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IDemandValues, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified DemandValues message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandValues.verify|verify} messages.
                     * @param message DemandValues message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IDemandValues, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a DemandValues message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemandValues
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.DemandValues;

                    /**
                     * Decodes a DemandValues message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemandValues
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.DemandValues;

                    /**
                     * Verifies a DemandValues message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemandValues message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemandValues
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.DemandValues;

                    /**
                     * Creates a plain object from a DemandValues message. Also converts values to other types if specified.
                     * @param message DemandValues
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.DemandValues, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemandValues to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DemandValues
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DemandValue. */
                interface IDemandValue {

                    /** DemandValue name */
                    name?: (string|null);

                    /** DemandValue timeValues */
                    timeValues?: (google.cloud.capacityplanner.v1beta.ITimeValue[]|null);

                    /** DemandValue unit */
                    unit?: (google.cloud.capacityplanner.v1beta.Unit|keyof typeof google.cloud.capacityplanner.v1beta.Unit|null);
                }

                /** Represents a DemandValue. */
                class DemandValue implements IDemandValue {

                    /**
                     * Constructs a new DemandValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IDemandValue);

                    /** DemandValue name. */
                    public name: string;

                    /** DemandValue timeValues. */
                    public timeValues: google.cloud.capacityplanner.v1beta.ITimeValue[];

                    /** DemandValue unit. */
                    public unit: (google.cloud.capacityplanner.v1beta.Unit|keyof typeof google.cloud.capacityplanner.v1beta.Unit);

                    /**
                     * Creates a new DemandValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DemandValue instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IDemandValue): google.cloud.capacityplanner.v1beta.DemandValue;

                    /**
                     * Encodes the specified DemandValue message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandValue.verify|verify} messages.
                     * @param message DemandValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IDemandValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified DemandValue message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.DemandValue.verify|verify} messages.
                     * @param message DemandValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IDemandValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a DemandValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DemandValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.DemandValue;

                    /**
                     * Decodes a DemandValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DemandValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.DemandValue;

                    /**
                     * Verifies a DemandValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DemandValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DemandValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.DemandValue;

                    /**
                     * Creates a plain object from a DemandValue message. Also converts values to other types if specified.
                     * @param message DemandValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.DemandValue, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DemandValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DemandValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TimeValue. */
                interface ITimeValue {

                    /** TimeValue time */
                    time?: (google.protobuf.ITimestamp|null);

                    /** TimeValue value */
                    value?: (number|null);
                }

                /** Represents a TimeValue. */
                class TimeValue implements ITimeValue {

                    /**
                     * Constructs a new TimeValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ITimeValue);

                    /** TimeValue time. */
                    public time?: (google.protobuf.ITimestamp|null);

                    /** TimeValue value. */
                    public value?: (number|null);

                    /**
                     * Creates a new TimeValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeValue instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ITimeValue): google.cloud.capacityplanner.v1beta.TimeValue;

                    /**
                     * Encodes the specified TimeValue message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeValue.verify|verify} messages.
                     * @param message TimeValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ITimeValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified TimeValue message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeValue.verify|verify} messages.
                     * @param message TimeValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ITimeValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a TimeValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.TimeValue;

                    /**
                     * Decodes a TimeValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.TimeValue;

                    /**
                     * Verifies a TimeValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.TimeValue;

                    /**
                     * Creates a plain object from a TimeValue message. Also converts values to other types if specified.
                     * @param message TimeValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.TimeValue, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimeValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ChildResourceDemand. */
                interface IChildResourceDemand {

                    /** ChildResourceDemand resourceId */
                    resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);

                    /** ChildResourceDemand demandValues */
                    demandValues?: (google.cloud.capacityplanner.v1beta.IDemandValues|null);

                    /** ChildResourceDemand demandMetadata */
                    demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);
                }

                /** Represents a ChildResourceDemand. */
                class ChildResourceDemand implements IChildResourceDemand {

                    /**
                     * Constructs a new ChildResourceDemand.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IChildResourceDemand);

                    /** ChildResourceDemand resourceId. */
                    public resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);

                    /** ChildResourceDemand demandValues. */
                    public demandValues?: (google.cloud.capacityplanner.v1beta.IDemandValues|null);

                    /** ChildResourceDemand demandMetadata. */
                    public demandMetadata?: (google.cloud.capacityplanner.v1beta.IDemandMetadata|null);

                    /**
                     * Creates a new ChildResourceDemand instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChildResourceDemand instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IChildResourceDemand): google.cloud.capacityplanner.v1beta.ChildResourceDemand;

                    /**
                     * Encodes the specified ChildResourceDemand message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ChildResourceDemand.verify|verify} messages.
                     * @param message ChildResourceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IChildResourceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ChildResourceDemand message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ChildResourceDemand.verify|verify} messages.
                     * @param message ChildResourceDemand message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IChildResourceDemand, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ChildResourceDemand message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChildResourceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ChildResourceDemand;

                    /**
                     * Decodes a ChildResourceDemand message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChildResourceDemand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ChildResourceDemand;

                    /**
                     * Verifies a ChildResourceDemand message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChildResourceDemand message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChildResourceDemand
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ChildResourceDemand;

                    /**
                     * Creates a plain object from a ChildResourceDemand message. Also converts values to other types if specified.
                     * @param message ChildResourceDemand
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ChildResourceDemand, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChildResourceDemand to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChildResourceDemand
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** LocationLevel enum. */
                enum LocationLevel {
                    LOCATION_LEVEL_UNSPECIFIED = 0,
                    REGION = 1,
                    ZONE = 2,
                    GLOBAL = 3,
                    METRO = 4,
                    DUAL_REGION = 5,
                    MULTI_REGION = 6
                }

                /** Properties of a LocationIdentifier. */
                interface ILocationIdentifier {

                    /** LocationIdentifier locationLevel */
                    locationLevel?: (google.cloud.capacityplanner.v1beta.LocationLevel|keyof typeof google.cloud.capacityplanner.v1beta.LocationLevel|null);

                    /** LocationIdentifier source */
                    source?: (string|null);

                    /** LocationIdentifier linkedLocations */
                    linkedLocations?: (google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation[]|null);
                }

                /** Represents a LocationIdentifier. */
                class LocationIdentifier implements ILocationIdentifier {

                    /**
                     * Constructs a new LocationIdentifier.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ILocationIdentifier);

                    /** LocationIdentifier locationLevel. */
                    public locationLevel: (google.cloud.capacityplanner.v1beta.LocationLevel|keyof typeof google.cloud.capacityplanner.v1beta.LocationLevel);

                    /** LocationIdentifier source. */
                    public source: string;

                    /** LocationIdentifier linkedLocations. */
                    public linkedLocations: google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation[];

                    /**
                     * Creates a new LocationIdentifier instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationIdentifier instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ILocationIdentifier): google.cloud.capacityplanner.v1beta.LocationIdentifier;

                    /**
                     * Encodes the specified LocationIdentifier message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.LocationIdentifier.verify|verify} messages.
                     * @param message LocationIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ILocationIdentifier, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified LocationIdentifier message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.LocationIdentifier.verify|verify} messages.
                     * @param message LocationIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ILocationIdentifier, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a LocationIdentifier message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.LocationIdentifier;

                    /**
                     * Decodes a LocationIdentifier message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.LocationIdentifier;

                    /**
                     * Verifies a LocationIdentifier message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationIdentifier message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationIdentifier
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.LocationIdentifier;

                    /**
                     * Creates a plain object from a LocationIdentifier message. Also converts values to other types if specified.
                     * @param message LocationIdentifier
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.LocationIdentifier, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationIdentifier to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationIdentifier
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LocationIdentifier {

                    /** Properties of a LinkedLocation. */
                    interface ILinkedLocation {

                        /** LinkedLocation locationLevel */
                        locationLevel?: (google.cloud.capacityplanner.v1beta.LocationLevel|keyof typeof google.cloud.capacityplanner.v1beta.LocationLevel|null);

                        /** LinkedLocation location */
                        location?: (string|null);

                        /** LinkedLocation label */
                        label?: (string|null);
                    }

                    /** Represents a LinkedLocation. */
                    class LinkedLocation implements ILinkedLocation {

                        /**
                         * Constructs a new LinkedLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation);

                        /** LinkedLocation locationLevel. */
                        public locationLevel: (google.cloud.capacityplanner.v1beta.LocationLevel|keyof typeof google.cloud.capacityplanner.v1beta.LocationLevel);

                        /** LinkedLocation location. */
                        public location: string;

                        /** LinkedLocation label. */
                        public label: string;

                        /**
                         * Creates a new LinkedLocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LinkedLocation instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation): google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation;

                        /**
                         * Encodes the specified LinkedLocation message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation.verify|verify} messages.
                         * @param message LinkedLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified LinkedLocation message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation.verify|verify} messages.
                         * @param message LinkedLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.LocationIdentifier.ILinkedLocation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a LinkedLocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LinkedLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation;

                        /**
                         * Decodes a LinkedLocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LinkedLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation;

                        /**
                         * Verifies a LinkedLocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LinkedLocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LinkedLocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation;

                        /**
                         * Creates a plain object from a LinkedLocation message. Also converts values to other types if specified.
                         * @param message LinkedLocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.LocationIdentifier.LinkedLocation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LinkedLocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LinkedLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Unit enum. */
                enum Unit {
                    UNIT_UNSPECIFIED = 0,
                    UNIT_COUNT = 1,
                    KB = 2,
                    GB = 3,
                    TB = 4,
                    MIB = 17,
                    GIB = 5,
                    TIB = 6,
                    QPS = 7,
                    MB = 8,
                    PIB = 9,
                    TBPS = 10,
                    GBPS_BITS = 11,
                    GIB_BITS = 12,
                    MBPS_BITS = 13,
                    MBPS_BYTES = 14,
                    TBPS_BITS = 15,
                    TBPS_BYTES = 16,
                    KOPS = 18
                }

                /** Properties of a ResourceContainer. */
                interface IResourceContainer {

                    /** ResourceContainer type */
                    type?: (google.cloud.capacityplanner.v1beta.ResourceContainer.Type|keyof typeof google.cloud.capacityplanner.v1beta.ResourceContainer.Type|null);

                    /** ResourceContainer id */
                    id?: (string|null);
                }

                /** Represents a ResourceContainer. */
                class ResourceContainer implements IResourceContainer {

                    /**
                     * Constructs a new ResourceContainer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceContainer);

                    /** ResourceContainer type. */
                    public type: (google.cloud.capacityplanner.v1beta.ResourceContainer.Type|keyof typeof google.cloud.capacityplanner.v1beta.ResourceContainer.Type);

                    /** ResourceContainer id. */
                    public id: string;

                    /**
                     * Creates a new ResourceContainer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceContainer instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceContainer): google.cloud.capacityplanner.v1beta.ResourceContainer;

                    /**
                     * Encodes the specified ResourceContainer message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceContainer.verify|verify} messages.
                     * @param message ResourceContainer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceContainer, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceContainer message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceContainer.verify|verify} messages.
                     * @param message ResourceContainer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceContainer, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceContainer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceContainer;

                    /**
                     * Decodes a ResourceContainer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceContainer;

                    /**
                     * Verifies a ResourceContainer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceContainer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceContainer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceContainer;

                    /**
                     * Creates a plain object from a ResourceContainer message. Also converts values to other types if specified.
                     * @param message ResourceContainer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceContainer, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceContainer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceContainer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ResourceContainer {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PROJECT = 1,
                        FOLDER = 2,
                        ORG = 3
                    }
                }

                /** Properties of a ResourceIdKey. */
                interface IResourceIdKey {

                    /** ResourceIdKey resourceCode */
                    resourceCode?: (string|null);

                    /** ResourceIdKey resourceId */
                    resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);
                }

                /** Represents a ResourceIdKey. */
                class ResourceIdKey implements IResourceIdKey {

                    /**
                     * Constructs a new ResourceIdKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceIdKey);

                    /** ResourceIdKey resourceCode. */
                    public resourceCode?: (string|null);

                    /** ResourceIdKey resourceId. */
                    public resourceId?: (google.cloud.capacityplanner.v1beta.IResourceIdentifier|null);

                    /** ResourceIdKey demandFields. */
                    public demandFields?: "resourceCode";

                    /**
                     * Creates a new ResourceIdKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceIdKey instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceIdKey): google.cloud.capacityplanner.v1beta.ResourceIdKey;

                    /**
                     * Encodes the specified ResourceIdKey message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceIdKey.verify|verify} messages.
                     * @param message ResourceIdKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceIdKey, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceIdKey message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceIdKey.verify|verify} messages.
                     * @param message ResourceIdKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceIdKey, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceIdKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceIdKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceIdKey;

                    /**
                     * Decodes a ResourceIdKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceIdKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceIdKey;

                    /**
                     * Verifies a ResourceIdKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceIdKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceIdKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceIdKey;

                    /**
                     * Creates a plain object from a ResourceIdKey message. Also converts values to other types if specified.
                     * @param message ResourceIdKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceIdKey, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceIdKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceIdKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceIdentifier. */
                interface IResourceIdentifier {

                    /** ResourceIdentifier serviceName */
                    serviceName?: (string|null);

                    /** ResourceIdentifier resourceName */
                    resourceName?: (string|null);

                    /** ResourceIdentifier resourceAttributes */
                    resourceAttributes?: (google.cloud.capacityplanner.v1beta.IResourceAttribute[]|null);
                }

                /** Represents a ResourceIdentifier. */
                class ResourceIdentifier implements IResourceIdentifier {

                    /**
                     * Constructs a new ResourceIdentifier.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceIdentifier);

                    /** ResourceIdentifier serviceName. */
                    public serviceName: string;

                    /** ResourceIdentifier resourceName. */
                    public resourceName: string;

                    /** ResourceIdentifier resourceAttributes. */
                    public resourceAttributes: google.cloud.capacityplanner.v1beta.IResourceAttribute[];

                    /**
                     * Creates a new ResourceIdentifier instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceIdentifier instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceIdentifier): google.cloud.capacityplanner.v1beta.ResourceIdentifier;

                    /**
                     * Encodes the specified ResourceIdentifier message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceIdentifier.verify|verify} messages.
                     * @param message ResourceIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceIdentifier, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceIdentifier message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceIdentifier.verify|verify} messages.
                     * @param message ResourceIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceIdentifier, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceIdentifier message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceIdentifier;

                    /**
                     * Decodes a ResourceIdentifier message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceIdentifier;

                    /**
                     * Verifies a ResourceIdentifier message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceIdentifier message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceIdentifier
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceIdentifier;

                    /**
                     * Creates a plain object from a ResourceIdentifier message. Also converts values to other types if specified.
                     * @param message ResourceIdentifier
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceIdentifier, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceIdentifier to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceIdentifier
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceAttribute. */
                interface IResourceAttribute {

                    /** ResourceAttribute key */
                    key?: (string|null);

                    /** ResourceAttribute value */
                    value?: (google.cloud.capacityplanner.v1beta.IResourceValue|null);
                }

                /** Represents a ResourceAttribute. */
                class ResourceAttribute implements IResourceAttribute {

                    /**
                     * Constructs a new ResourceAttribute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceAttribute);

                    /** ResourceAttribute key. */
                    public key: string;

                    /** ResourceAttribute value. */
                    public value?: (google.cloud.capacityplanner.v1beta.IResourceValue|null);

                    /**
                     * Creates a new ResourceAttribute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceAttribute instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceAttribute): google.cloud.capacityplanner.v1beta.ResourceAttribute;

                    /**
                     * Encodes the specified ResourceAttribute message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceAttribute.verify|verify} messages.
                     * @param message ResourceAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceAttribute, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceAttribute message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceAttribute.verify|verify} messages.
                     * @param message ResourceAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceAttribute, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceAttribute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceAttribute;

                    /**
                     * Decodes a ResourceAttribute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceAttribute;

                    /**
                     * Verifies a ResourceAttribute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceAttribute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceAttribute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceAttribute;

                    /**
                     * Creates a plain object from a ResourceAttribute message. Also converts values to other types if specified.
                     * @param message ResourceAttribute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceAttribute, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceAttribute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceAttribute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceValue. */
                interface IResourceValue {

                    /** ResourceValue unit */
                    unit?: (google.cloud.capacityplanner.v1beta.Unit|keyof typeof google.cloud.capacityplanner.v1beta.Unit|null);

                    /** ResourceValue value */
                    value?: (google.cloud.capacityplanner.v1beta.IValue|null);
                }

                /** Represents a ResourceValue. */
                class ResourceValue implements IResourceValue {

                    /**
                     * Constructs a new ResourceValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IResourceValue);

                    /** ResourceValue unit. */
                    public unit: (google.cloud.capacityplanner.v1beta.Unit|keyof typeof google.cloud.capacityplanner.v1beta.Unit);

                    /** ResourceValue value. */
                    public value?: (google.cloud.capacityplanner.v1beta.IValue|null);

                    /**
                     * Creates a new ResourceValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceValue instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IResourceValue): google.cloud.capacityplanner.v1beta.ResourceValue;

                    /**
                     * Encodes the specified ResourceValue message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceValue.verify|verify} messages.
                     * @param message ResourceValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IResourceValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ResourceValue message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ResourceValue.verify|verify} messages.
                     * @param message ResourceValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IResourceValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ResourceValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ResourceValue;

                    /**
                     * Decodes a ResourceValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ResourceValue;

                    /**
                     * Verifies a ResourceValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ResourceValue;

                    /**
                     * Creates a plain object from a ResourceValue message. Also converts values to other types if specified.
                     * @param message ResourceValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ResourceValue, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Value. */
                interface IValue {

                    /** Value int64Value */
                    int64Value?: (number|Long_2|string|null);

                    /** Value stringValue */
                    stringValue?: (string|null);

                    /** Value doubleValue */
                    doubleValue?: (number|null);

                    /** Value boolValue */
                    boolValue?: (boolean|null);
                }

                /** Represents a Value. */
                class Value implements IValue {

                    /**
                     * Constructs a new Value.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IValue);

                    /** Value int64Value. */
                    public int64Value?: (number|Long_2|string|null);

                    /** Value stringValue. */
                    public stringValue?: (string|null);

                    /** Value doubleValue. */
                    public doubleValue?: (number|null);

                    /** Value boolValue. */
                    public boolValue?: (boolean|null);

                    /** Value value. */
                    public value?: ("int64Value"|"stringValue"|"doubleValue"|"boolValue");

                    /**
                     * Creates a new Value instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Value instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IValue): google.cloud.capacityplanner.v1beta.Value;

                    /**
                     * Encodes the specified Value message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Value.verify|verify} messages.
                     * @param message Value message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified Value message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Value.verify|verify} messages.
                     * @param message Value message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IValue, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a Value message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Value;

                    /**
                     * Decodes a Value message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Value;

                    /**
                     * Verifies a Value message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Value message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Value
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Value;

                    /**
                     * Creates a plain object from a Value message. Also converts values to other types if specified.
                     * @param message Value
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.Value, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Value to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Value
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FutureReservation. */
                interface IFutureReservation {

                    /** FutureReservation specificSkuProperties */
                    specificSkuProperties?: (google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties|null);

                    /** FutureReservation id */
                    id?: (number|Long_2|string|null);

                    /** FutureReservation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** FutureReservation zone */
                    zone?: (string|null);

                    /** FutureReservation description */
                    description?: (string|null);

                    /** FutureReservation futureReservation */
                    futureReservation?: (string|null);

                    /** FutureReservation ownerProjectId */
                    ownerProjectId?: (string|null);

                    /** FutureReservation timeWindow */
                    timeWindow?: (google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow|null);

                    /** FutureReservation shareSettings */
                    shareSettings?: (google.cloud.capacityplanner.v1beta.Allocation.IShareSettings|null);

                    /** FutureReservation namePrefix */
                    namePrefix?: (string|null);

                    /** FutureReservation status */
                    status?: (google.cloud.capacityplanner.v1beta.FutureReservation.IStatus|null);

                    /** FutureReservation autoCreatedReservationsDeleteTime */
                    autoCreatedReservationsDeleteTime?: (google.protobuf.ITimestamp|null);

                    /** FutureReservation autoDeleteAutoCreatedReservations */
                    autoDeleteAutoCreatedReservations?: (boolean|null);
                }

                /** Represents a FutureReservation. */
                class FutureReservation implements IFutureReservation {

                    /**
                     * Constructs a new FutureReservation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IFutureReservation);

                    /** FutureReservation specificSkuProperties. */
                    public specificSkuProperties?: (google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties|null);

                    /** FutureReservation id. */
                    public id: (number|Long_2|string);

                    /** FutureReservation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** FutureReservation zone. */
                    public zone: string;

                    /** FutureReservation description. */
                    public description: string;

                    /** FutureReservation futureReservation. */
                    public futureReservation: string;

                    /** FutureReservation ownerProjectId. */
                    public ownerProjectId: string;

                    /** FutureReservation timeWindow. */
                    public timeWindow?: (google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow|null);

                    /** FutureReservation shareSettings. */
                    public shareSettings?: (google.cloud.capacityplanner.v1beta.Allocation.IShareSettings|null);

                    /** FutureReservation namePrefix. */
                    public namePrefix: string;

                    /** FutureReservation status. */
                    public status?: (google.cloud.capacityplanner.v1beta.FutureReservation.IStatus|null);

                    /** FutureReservation autoCreatedReservationsDeleteTime. */
                    public autoCreatedReservationsDeleteTime?: (google.protobuf.ITimestamp|null);

                    /** FutureReservation autoDeleteAutoCreatedReservations. */
                    public autoDeleteAutoCreatedReservations: boolean;

                    /** FutureReservation type. */
                    public type?: "specificSkuProperties";

                    /**
                     * Creates a new FutureReservation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FutureReservation instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IFutureReservation): google.cloud.capacityplanner.v1beta.FutureReservation;

                    /**
                     * Encodes the specified FutureReservation message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.verify|verify} messages.
                     * @param message FutureReservation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IFutureReservation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified FutureReservation message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.verify|verify} messages.
                     * @param message FutureReservation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IFutureReservation, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a FutureReservation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FutureReservation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.FutureReservation;

                    /**
                     * Decodes a FutureReservation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FutureReservation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.FutureReservation;

                    /**
                     * Verifies a FutureReservation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FutureReservation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FutureReservation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.FutureReservation;

                    /**
                     * Creates a plain object from a FutureReservation message. Also converts values to other types if specified.
                     * @param message FutureReservation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.FutureReservation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FutureReservation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FutureReservation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FutureReservation {

                    /** Properties of a SpecificSKUProperties. */
                    interface ISpecificSKUProperties {

                        /** SpecificSKUProperties instanceProperties */
                        instanceProperties?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties|null);

                        /** SpecificSKUProperties totalCount */
                        totalCount?: (number|Long_2|string|null);
                    }

                    /** Represents a SpecificSKUProperties. */
                    class SpecificSKUProperties implements ISpecificSKUProperties {

                        /**
                         * Constructs a new SpecificSKUProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties);

                        /** SpecificSKUProperties instanceProperties. */
                        public instanceProperties?: (google.cloud.capacityplanner.v1beta.Allocation.SpecificSKUAllocation.IAllocatedInstanceProperties|null);

                        /** SpecificSKUProperties totalCount. */
                        public totalCount: (number|Long_2|string);

                        /**
                         * Creates a new SpecificSKUProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpecificSKUProperties instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties): google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties;

                        /**
                         * Encodes the specified SpecificSKUProperties message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties.verify|verify} messages.
                         * @param message SpecificSKUProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified SpecificSKUProperties message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties.verify|verify} messages.
                         * @param message SpecificSKUProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.FutureReservation.ISpecificSKUProperties, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a SpecificSKUProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpecificSKUProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties;

                        /**
                         * Decodes a SpecificSKUProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpecificSKUProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties;

                        /**
                         * Verifies a SpecificSKUProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpecificSKUProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpecificSKUProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties;

                        /**
                         * Creates a plain object from a SpecificSKUProperties message. Also converts values to other types if specified.
                         * @param message SpecificSKUProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.FutureReservation.SpecificSKUProperties, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpecificSKUProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpecificSKUProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimeWindow. */
                    interface ITimeWindow {

                        /** TimeWindow startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeWindow endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TimeWindow. */
                    class TimeWindow implements ITimeWindow {

                        /**
                         * Constructs a new TimeWindow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow);

                        /** TimeWindow startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeWindow endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new TimeWindow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeWindow instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow): google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow;

                        /**
                         * Encodes the specified TimeWindow message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow.verify|verify} messages.
                         * @param message TimeWindow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow.verify|verify} messages.
                         * @param message TimeWindow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.FutureReservation.ITimeWindow, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a TimeWindow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeWindow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow;

                        /**
                         * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeWindow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow;

                        /**
                         * Verifies a TimeWindow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeWindow
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow;

                        /**
                         * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                         * @param message TimeWindow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.FutureReservation.TimeWindow, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeWindow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimeWindow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Status. */
                    interface IStatus {

                        /** Status procurementStatus */
                        procurementStatus?: (google.cloud.capacityplanner.v1beta.FutureReservation.Status.ProcurementStatus|keyof typeof google.cloud.capacityplanner.v1beta.FutureReservation.Status.ProcurementStatus|null);

                        /** Status lockTime */
                        lockTime?: (google.protobuf.ITimestamp|null);

                        /** Status autoCreatedReservations */
                        autoCreatedReservations?: (string[]|null);

                        /** Status fulfilledCount */
                        fulfilledCount?: (number|Long_2|string|null);
                    }

                    /** Represents a Status. */
                    class Status implements IStatus {

                        /**
                         * Constructs a new Status.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.IStatus);

                        /** Status procurementStatus. */
                        public procurementStatus: (google.cloud.capacityplanner.v1beta.FutureReservation.Status.ProcurementStatus|keyof typeof google.cloud.capacityplanner.v1beta.FutureReservation.Status.ProcurementStatus);

                        /** Status lockTime. */
                        public lockTime?: (google.protobuf.ITimestamp|null);

                        /** Status autoCreatedReservations. */
                        public autoCreatedReservations: string[];

                        /** Status fulfilledCount. */
                        public fulfilledCount: (number|Long_2|string);

                        /**
                         * Creates a new Status instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Status instance
                         */
                        public static create(properties?: google.cloud.capacityplanner.v1beta.FutureReservation.IStatus): google.cloud.capacityplanner.v1beta.FutureReservation.Status;

                        /**
                         * Encodes the specified Status message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.Status.verify|verify} messages.
                         * @param message Status message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.capacityplanner.v1beta.FutureReservation.IStatus, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Encodes the specified Status message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.FutureReservation.Status.verify|verify} messages.
                         * @param message Status message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.FutureReservation.IStatus, writer?: protobuf_2.Writer): protobuf_2.Writer;

                        /**
                         * Decodes a Status message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Status
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.FutureReservation.Status;

                        /**
                         * Decodes a Status message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Status
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.FutureReservation.Status;

                        /**
                         * Verifies a Status message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Status message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Status
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.FutureReservation.Status;

                        /**
                         * Creates a plain object from a Status message. Also converts values to other types if specified.
                         * @param message Status
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.capacityplanner.v1beta.FutureReservation.Status, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Status to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Status
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Status {

                        /** ProcurementStatus enum. */
                        enum ProcurementStatus {
                            PROCUREMENT_STATUS_UNSPECIFIED = 0,
                            PENDING_APPROVAL = 1,
                            APPROVED = 2,
                            COMMITTED = 3,
                            DECLINED = 4,
                            CANCELLED = 5,
                            PROCURING = 6,
                            PROVISIONING = 7,
                            FULFILLED = 8,
                            FAILED = 9,
                            FAILED_PARTIALLY_FULFILLED = 10,
                            DRAFTING = 11,
                            PENDING_AMENDMENT_APPROVAL = 12
                        }
                    }
                }

                /** Represents a UsageService */
                class UsageService extends protobuf_2.rpc.Service {

                    /**
                     * Constructs a new UsageService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new UsageService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UsageService;

                    /**
                     * Calls QueryUsageHistories.
                     * @param request QueryUsageHistoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryUsageHistoriesResponse
                     */
                    public queryUsageHistories(request: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.QueryUsageHistoriesCallback): void;

                    /**
                     * Calls QueryUsageHistories.
                     * @param request QueryUsageHistoriesRequest message or plain object
                     * @returns Promise
                     */
                    public queryUsageHistories(request: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest): Promise<google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse>;

                    /**
                     * Calls QueryForecasts.
                     * @param request QueryForecastsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryForecastsResponse
                     */
                    public queryForecasts(request: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.QueryForecastsCallback): void;

                    /**
                     * Calls QueryForecasts.
                     * @param request QueryForecastsRequest message or plain object
                     * @returns Promise
                     */
                    public queryForecasts(request: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest): Promise<google.cloud.capacityplanner.v1beta.QueryForecastsResponse>;

                    /**
                     * Calls QueryReservations.
                     * @param request QueryReservationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryReservationsResponse
                     */
                    public queryReservations(request: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.QueryReservationsCallback): void;

                    /**
                     * Calls QueryReservations.
                     * @param request QueryReservationsRequest message or plain object
                     * @returns Promise
                     */
                    public queryReservations(request: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest): Promise<google.cloud.capacityplanner.v1beta.QueryReservationsResponse>;

                    /**
                     * Calls ExportUsageHistories.
                     * @param request ExportUsageHistoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportUsageHistories(request: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.ExportUsageHistoriesCallback): void;

                    /**
                     * Calls ExportUsageHistories.
                     * @param request ExportUsageHistoriesRequest message or plain object
                     * @returns Promise
                     */
                    public exportUsageHistories(request: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportForecasts.
                     * @param request ExportForecastsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportForecasts(request: google.cloud.capacityplanner.v1beta.IExportForecastsRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.ExportForecastsCallback): void;

                    /**
                     * Calls ExportForecasts.
                     * @param request ExportForecastsRequest message or plain object
                     * @returns Promise
                     */
                    public exportForecasts(request: google.cloud.capacityplanner.v1beta.IExportForecastsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportReservationsUsage.
                     * @param request ExportReservationsUsageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportReservationsUsage(request: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, callback: google.cloud.capacityplanner.v1beta.UsageService.ExportReservationsUsageCallback): void;

                    /**
                     * Calls ExportReservationsUsage.
                     * @param request ExportReservationsUsageRequest message or plain object
                     * @returns Promise
                     */
                    public exportReservationsUsage(request: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest): Promise<google.longrunning.Operation>;
                }

                namespace UsageService {

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|queryUsageHistories}.
                     * @param error Error, if any
                     * @param [response] QueryUsageHistoriesResponse
                     */
                    type QueryUsageHistoriesCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|queryForecasts}.
                     * @param error Error, if any
                     * @param [response] QueryForecastsResponse
                     */
                    type QueryForecastsCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.QueryForecastsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|queryReservations}.
                     * @param error Error, if any
                     * @param [response] QueryReservationsResponse
                     */
                    type QueryReservationsCallback = (error: (Error|null), response?: google.cloud.capacityplanner.v1beta.QueryReservationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|exportUsageHistories}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportUsageHistoriesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|exportForecasts}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportForecastsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.capacityplanner.v1beta.UsageService|exportReservationsUsage}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportReservationsUsageCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a QueryUsageHistoriesRequest. */
                interface IQueryUsageHistoriesRequest {

                    /** QueryUsageHistoriesRequest parent */
                    parent?: (string|null);

                    /** QueryUsageHistoriesRequest locationLevel */
                    locationLevel?: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|null);

                    /** QueryUsageHistoriesRequest isSpot */
                    isSpot?: (boolean|null);

                    /** QueryUsageHistoriesRequest machineFamily */
                    machineFamily?: (string|null);

                    /** QueryUsageHistoriesRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryUsageHistoriesRequest diskType */
                    diskType?: (string|null);

                    /** QueryUsageHistoriesRequest confidentialMode */
                    confidentialMode?: (boolean|null);

                    /** QueryUsageHistoriesRequest gpuType */
                    gpuType?: (string|null);

                    /** QueryUsageHistoriesRequest tpuType */
                    tpuType?: (string|null);

                    /** QueryUsageHistoriesRequest cloudResourceType */
                    cloudResourceType?: (string|null);

                    /** QueryUsageHistoriesRequest usageAggregationMethod */
                    usageAggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);

                    /** QueryUsageHistoriesRequest startDate */
                    startDate?: (google.type.IDate|null);

                    /** QueryUsageHistoriesRequest endDate */
                    endDate?: (google.type.IDate|null);
                }

                /** Represents a QueryUsageHistoriesRequest. */
                class QueryUsageHistoriesRequest implements IQueryUsageHistoriesRequest {

                    /**
                     * Constructs a new QueryUsageHistoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest);

                    /** QueryUsageHistoriesRequest parent. */
                    public parent: string;

                    /** QueryUsageHistoriesRequest locationLevel. */
                    public locationLevel: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType);

                    /** QueryUsageHistoriesRequest isSpot. */
                    public isSpot: boolean;

                    /** QueryUsageHistoriesRequest machineFamily. */
                    public machineFamily: string;

                    /** QueryUsageHistoriesRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryUsageHistoriesRequest diskType. */
                    public diskType: string;

                    /** QueryUsageHistoriesRequest confidentialMode. */
                    public confidentialMode: boolean;

                    /** QueryUsageHistoriesRequest gpuType. */
                    public gpuType: string;

                    /** QueryUsageHistoriesRequest tpuType. */
                    public tpuType: string;

                    /** QueryUsageHistoriesRequest cloudResourceType. */
                    public cloudResourceType: string;

                    /** QueryUsageHistoriesRequest usageAggregationMethod. */
                    public usageAggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /** QueryUsageHistoriesRequest startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** QueryUsageHistoriesRequest endDate. */
                    public endDate?: (google.type.IDate|null);

                    /**
                     * Creates a new QueryUsageHistoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryUsageHistoriesRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest;

                    /**
                     * Encodes the specified QueryUsageHistoriesRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest.verify|verify} messages.
                     * @param message QueryUsageHistoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryUsageHistoriesRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest.verify|verify} messages.
                     * @param message QueryUsageHistoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryUsageHistoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryUsageHistoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest;

                    /**
                     * Decodes a QueryUsageHistoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryUsageHistoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest;

                    /**
                     * Verifies a QueryUsageHistoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryUsageHistoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryUsageHistoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest;

                    /**
                     * Creates a plain object from a QueryUsageHistoriesRequest message. Also converts values to other types if specified.
                     * @param message QueryUsageHistoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryUsageHistoriesRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryUsageHistoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryUsageHistoriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryUsageHistoriesResponse. */
                interface IQueryUsageHistoriesResponse {

                    /** QueryUsageHistoriesResponse usageHistories */
                    usageHistories?: (google.cloud.capacityplanner.v1beta.IUsageHistory[]|null);
                }

                /** Represents a QueryUsageHistoriesResponse. */
                class QueryUsageHistoriesResponse implements IQueryUsageHistoriesResponse {

                    /**
                     * Constructs a new QueryUsageHistoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse);

                    /** QueryUsageHistoriesResponse usageHistories. */
                    public usageHistories: google.cloud.capacityplanner.v1beta.IUsageHistory[];

                    /**
                     * Creates a new QueryUsageHistoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryUsageHistoriesResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse;

                    /**
                     * Encodes the specified QueryUsageHistoriesResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse.verify|verify} messages.
                     * @param message QueryUsageHistoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryUsageHistoriesResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse.verify|verify} messages.
                     * @param message QueryUsageHistoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryUsageHistoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryUsageHistoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse;

                    /**
                     * Decodes a QueryUsageHistoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryUsageHistoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse;

                    /**
                     * Verifies a QueryUsageHistoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryUsageHistoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryUsageHistoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse;

                    /**
                     * Creates a plain object from a QueryUsageHistoriesResponse message. Also converts values to other types if specified.
                     * @param message QueryUsageHistoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryUsageHistoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryUsageHistoriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryForecastsRequest. */
                interface IQueryForecastsRequest {

                    /** QueryForecastsRequest parent */
                    parent?: (string|null);

                    /** QueryForecastsRequest machineFamily */
                    machineFamily?: (string|null);

                    /** QueryForecastsRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryForecastsRequest diskType */
                    diskType?: (string|null);

                    /** QueryForecastsRequest confidentialMode */
                    confidentialMode?: (boolean|null);

                    /** QueryForecastsRequest gpuType */
                    gpuType?: (string|null);

                    /** QueryForecastsRequest tpuType */
                    tpuType?: (string|null);

                    /** QueryForecastsRequest cloudResourceType */
                    cloudResourceType?: (string|null);

                    /** QueryForecastsRequest forecastType */
                    forecastType?: (google.cloud.capacityplanner.v1beta.Forecast.ForecastType|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.ForecastType|null);

                    /** QueryForecastsRequest predictionInterval */
                    predictionInterval?: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|null);

                    /** QueryForecastsRequest aggregationMethod */
                    aggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);
                }

                /** Represents a QueryForecastsRequest. */
                class QueryForecastsRequest implements IQueryForecastsRequest {

                    /**
                     * Constructs a new QueryForecastsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest);

                    /** QueryForecastsRequest parent. */
                    public parent: string;

                    /** QueryForecastsRequest machineFamily. */
                    public machineFamily: string;

                    /** QueryForecastsRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryForecastsRequest diskType. */
                    public diskType: string;

                    /** QueryForecastsRequest confidentialMode. */
                    public confidentialMode: boolean;

                    /** QueryForecastsRequest gpuType. */
                    public gpuType: string;

                    /** QueryForecastsRequest tpuType. */
                    public tpuType: string;

                    /** QueryForecastsRequest cloudResourceType. */
                    public cloudResourceType: string;

                    /** QueryForecastsRequest forecastType. */
                    public forecastType: (google.cloud.capacityplanner.v1beta.Forecast.ForecastType|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.ForecastType);

                    /** QueryForecastsRequest predictionInterval. */
                    public predictionInterval: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval);

                    /** QueryForecastsRequest aggregationMethod. */
                    public aggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /**
                     * Creates a new QueryForecastsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryForecastsRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest): google.cloud.capacityplanner.v1beta.QueryForecastsRequest;

                    /**
                     * Encodes the specified QueryForecastsRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryForecastsRequest.verify|verify} messages.
                     * @param message QueryForecastsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryForecastsRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryForecastsRequest.verify|verify} messages.
                     * @param message QueryForecastsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryForecastsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryForecastsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryForecastsRequest;

                    /**
                     * Decodes a QueryForecastsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryForecastsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryForecastsRequest;

                    /**
                     * Verifies a QueryForecastsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryForecastsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryForecastsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryForecastsRequest;

                    /**
                     * Creates a plain object from a QueryForecastsRequest message. Also converts values to other types if specified.
                     * @param message QueryForecastsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryForecastsRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryForecastsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryForecastsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryForecastsResponse. */
                interface IQueryForecastsResponse {

                    /** QueryForecastsResponse forecasts */
                    forecasts?: (google.cloud.capacityplanner.v1beta.IForecast[]|null);
                }

                /** Represents a QueryForecastsResponse. */
                class QueryForecastsResponse implements IQueryForecastsResponse {

                    /**
                     * Constructs a new QueryForecastsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryForecastsResponse);

                    /** QueryForecastsResponse forecasts. */
                    public forecasts: google.cloud.capacityplanner.v1beta.IForecast[];

                    /**
                     * Creates a new QueryForecastsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryForecastsResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryForecastsResponse): google.cloud.capacityplanner.v1beta.QueryForecastsResponse;

                    /**
                     * Encodes the specified QueryForecastsResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryForecastsResponse.verify|verify} messages.
                     * @param message QueryForecastsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryForecastsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryForecastsResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryForecastsResponse.verify|verify} messages.
                     * @param message QueryForecastsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryForecastsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryForecastsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryForecastsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryForecastsResponse;

                    /**
                     * Decodes a QueryForecastsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryForecastsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryForecastsResponse;

                    /**
                     * Verifies a QueryForecastsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryForecastsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryForecastsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryForecastsResponse;

                    /**
                     * Creates a plain object from a QueryForecastsResponse message. Also converts values to other types if specified.
                     * @param message QueryForecastsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryForecastsResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryForecastsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryForecastsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryReservationsRequest. */
                interface IQueryReservationsRequest {

                    /** QueryReservationsRequest parent */
                    parent?: (string|null);

                    /** QueryReservationsRequest locationLevel */
                    locationLevel?: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|null);

                    /** QueryReservationsRequest machineFamily */
                    machineFamily?: (string|null);

                    /** QueryReservationsRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryReservationsRequest gpuType */
                    gpuType?: (string|null);

                    /** QueryReservationsRequest cloudResourceType */
                    cloudResourceType?: (string|null);

                    /** QueryReservationsRequest reservationType */
                    reservationType?: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationType|null);

                    /** QueryReservationsRequest shareType */
                    shareType?: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ShareType|null);

                    /** QueryReservationsRequest ownershipType */
                    ownershipType?: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.OwnershipType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.OwnershipType|null);

                    /** QueryReservationsRequest reservationDataLevel */
                    reservationDataLevel?: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationDataLevel|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationDataLevel|null);

                    /** QueryReservationsRequest includeUnapprovedReservations */
                    includeUnapprovedReservations?: (boolean|null);

                    /** QueryReservationsRequest aggregationMethod */
                    aggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);

                    /** QueryReservationsRequest startDate */
                    startDate?: (google.type.IDate|null);

                    /** QueryReservationsRequest endDate */
                    endDate?: (google.type.IDate|null);
                }

                /** Represents a QueryReservationsRequest. */
                class QueryReservationsRequest implements IQueryReservationsRequest {

                    /**
                     * Constructs a new QueryReservationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest);

                    /** QueryReservationsRequest parent. */
                    public parent: string;

                    /** QueryReservationsRequest locationLevel. */
                    public locationLevel: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType);

                    /** QueryReservationsRequest machineFamily. */
                    public machineFamily: string;

                    /** QueryReservationsRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** QueryReservationsRequest gpuType. */
                    public gpuType: string;

                    /** QueryReservationsRequest cloudResourceType. */
                    public cloudResourceType: string;

                    /** QueryReservationsRequest reservationType. */
                    public reservationType: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationType);

                    /** QueryReservationsRequest shareType. */
                    public shareType: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ShareType);

                    /** QueryReservationsRequest ownershipType. */
                    public ownershipType: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.OwnershipType|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.OwnershipType);

                    /** QueryReservationsRequest reservationDataLevel. */
                    public reservationDataLevel: (google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationDataLevel|keyof typeof google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationDataLevel);

                    /** QueryReservationsRequest includeUnapprovedReservations. */
                    public includeUnapprovedReservations: boolean;

                    /** QueryReservationsRequest aggregationMethod. */
                    public aggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /** QueryReservationsRequest startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** QueryReservationsRequest endDate. */
                    public endDate?: (google.type.IDate|null);

                    /**
                     * Creates a new QueryReservationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryReservationsRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest): google.cloud.capacityplanner.v1beta.QueryReservationsRequest;

                    /**
                     * Encodes the specified QueryReservationsRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryReservationsRequest.verify|verify} messages.
                     * @param message QueryReservationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryReservationsRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryReservationsRequest.verify|verify} messages.
                     * @param message QueryReservationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryReservationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryReservationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryReservationsRequest;

                    /**
                     * Decodes a QueryReservationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryReservationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryReservationsRequest;

                    /**
                     * Verifies a QueryReservationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryReservationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryReservationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryReservationsRequest;

                    /**
                     * Creates a plain object from a QueryReservationsRequest message. Also converts values to other types if specified.
                     * @param message QueryReservationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryReservationsRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryReservationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryReservationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QueryReservationsRequest {

                    /** ReservationType enum. */
                    enum ReservationType {
                        RESERVATION_TYPE_UNSPECIFIED = 0,
                        RESERVATION_TYPE_ALLOCATION = 1,
                        RESERVATION_TYPE_FUTURE_RESERVATION = 2,
                        RESERVATION_TYPE_ALL = 3
                    }

                    /** ShareType enum. */
                    enum ShareType {
                        SHARE_TYPE_UNSPECIFIED = 0,
                        SHARE_TYPE_LOCAL = 1,
                        SHARE_TYPE_SPECIFIC_PROJECTS = 2
                    }

                    /** OwnershipType enum. */
                    enum OwnershipType {
                        OWNERSHIP_TYPE_UNSPECIFIED = 0,
                        OWNERSHIP_TYPE_OWNED = 1,
                        OWNERSHIP_TYPE_SHARED_BY_OTHERS = 2
                    }

                    /** ReservationDataLevel enum. */
                    enum ReservationDataLevel {
                        RESERVATION_DATA_LEVEL_UNSPECIFIED = 0,
                        RESERVATION_DATA_LEVEL_AGGREGATED = 1,
                        RESERVATION_DATA_LEVEL_PER_RESERVATION = 2
                    }
                }

                /** Properties of a QueryReservationsResponse. */
                interface IQueryReservationsResponse {

                    /** QueryReservationsResponse reservations */
                    reservations?: (google.cloud.capacityplanner.v1beta.IReservationData[]|null);
                }

                /** Represents a QueryReservationsResponse. */
                class QueryReservationsResponse implements IQueryReservationsResponse {

                    /**
                     * Constructs a new QueryReservationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IQueryReservationsResponse);

                    /** QueryReservationsResponse reservations. */
                    public reservations: google.cloud.capacityplanner.v1beta.IReservationData[];

                    /**
                     * Creates a new QueryReservationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryReservationsResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IQueryReservationsResponse): google.cloud.capacityplanner.v1beta.QueryReservationsResponse;

                    /**
                     * Encodes the specified QueryReservationsResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryReservationsResponse.verify|verify} messages.
                     * @param message QueryReservationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IQueryReservationsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified QueryReservationsResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.QueryReservationsResponse.verify|verify} messages.
                     * @param message QueryReservationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IQueryReservationsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a QueryReservationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryReservationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.QueryReservationsResponse;

                    /**
                     * Decodes a QueryReservationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryReservationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.QueryReservationsResponse;

                    /**
                     * Verifies a QueryReservationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryReservationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryReservationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.QueryReservationsResponse;

                    /**
                     * Creates a plain object from a QueryReservationsResponse message. Also converts values to other types if specified.
                     * @param message QueryReservationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.QueryReservationsResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryReservationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryReservationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Point. */
                interface IPoint {

                    /** Point eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** Point value */
                    value?: (number|null);
                }

                /** Represents a Point. */
                class Point implements IPoint {

                    /**
                     * Constructs a new Point.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IPoint);

                    /** Point eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** Point value. */
                    public value: number;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Point instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IPoint): google.cloud.capacityplanner.v1beta.Point;

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IPoint, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IPoint, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Point;

                    /**
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Point;

                    /**
                     * Verifies a Point message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Point message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Point
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Point;

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @param message Point
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.Point, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Point to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Point
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Forecast. */
                interface IForecast {

                    /** Forecast name */
                    name?: (string|null);

                    /** Forecast timeSeries */
                    timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** Forecast forecastType */
                    forecastType?: (google.cloud.capacityplanner.v1beta.Forecast.ForecastType|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.ForecastType|null);

                    /** Forecast bounds */
                    bounds?: (google.cloud.capacityplanner.v1beta.Forecast.Bounds|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.Bounds|null);

                    /** Forecast predictionInterval */
                    predictionInterval?: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|null);

                    /** Forecast aggregationMethod */
                    aggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);
                }

                /** Represents a Forecast. */
                class Forecast implements IForecast {

                    /**
                     * Constructs a new Forecast.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IForecast);

                    /** Forecast name. */
                    public name: string;

                    /** Forecast timeSeries. */
                    public timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** Forecast forecastType. */
                    public forecastType: (google.cloud.capacityplanner.v1beta.Forecast.ForecastType|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.ForecastType);

                    /** Forecast bounds. */
                    public bounds: (google.cloud.capacityplanner.v1beta.Forecast.Bounds|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.Bounds);

                    /** Forecast predictionInterval. */
                    public predictionInterval: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval);

                    /** Forecast aggregationMethod. */
                    public aggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /**
                     * Creates a new Forecast instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Forecast instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IForecast): google.cloud.capacityplanner.v1beta.Forecast;

                    /**
                     * Encodes the specified Forecast message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Forecast.verify|verify} messages.
                     * @param message Forecast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IForecast, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified Forecast message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.Forecast.verify|verify} messages.
                     * @param message Forecast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IForecast, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a Forecast message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Forecast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.Forecast;

                    /**
                     * Decodes a Forecast message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Forecast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.Forecast;

                    /**
                     * Verifies a Forecast message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Forecast message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Forecast
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.Forecast;

                    /**
                     * Creates a plain object from a Forecast message. Also converts values to other types if specified.
                     * @param message Forecast
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.Forecast, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Forecast to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Forecast
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Forecast {

                    /** ForecastType enum. */
                    enum ForecastType {
                        FORECAST_TYPE_UNSPECIFIED = 0,
                        STATISTICAL = 1,
                        STATISTICAL_WITH_BFCM = 2,
                        YEARLY_SEASONALITY = 3
                    }

                    /** Bounds enum. */
                    enum Bounds {
                        BOUNDS_UNSPECIFIED = 0,
                        LOWER_BOUND = 1,
                        MEDIAN = 2,
                        UPPER_BOUND = 3
                    }

                    /** PredictionInterval enum. */
                    enum PredictionInterval {
                        PREDICTION_INTERVAL_UNSPECIFIED = 0,
                        PREDICTION_INTERVAL_90 = 1,
                        PREDICTION_INTERVAL_50 = 2
                    }
                }

                /** Properties of a UsageHistory. */
                interface IUsageHistory {

                    /** UsageHistory timeSeries */
                    timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** UsageHistory aggregationMethod */
                    aggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);
                }

                /** Represents a UsageHistory. */
                class UsageHistory implements IUsageHistory {

                    /**
                     * Constructs a new UsageHistory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IUsageHistory);

                    /** UsageHistory timeSeries. */
                    public timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** UsageHistory aggregationMethod. */
                    public aggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /**
                     * Creates a new UsageHistory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UsageHistory instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IUsageHistory): google.cloud.capacityplanner.v1beta.UsageHistory;

                    /**
                     * Encodes the specified UsageHistory message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.UsageHistory.verify|verify} messages.
                     * @param message UsageHistory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IUsageHistory, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified UsageHistory message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.UsageHistory.verify|verify} messages.
                     * @param message UsageHistory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IUsageHistory, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a UsageHistory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UsageHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.UsageHistory;

                    /**
                     * Decodes a UsageHistory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UsageHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.UsageHistory;

                    /**
                     * Verifies a UsageHistory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UsageHistory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UsageHistory
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.UsageHistory;

                    /**
                     * Creates a plain object from a UsageHistory message. Also converts values to other types if specified.
                     * @param message UsageHistory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.UsageHistory, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UsageHistory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UsageHistory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace UsageHistory {

                    /** AggregationMethod enum. */
                    enum AggregationMethod {
                        AGGREGATION_METHOD_UNSPECIFIED = 0,
                        MEDIAN = 1,
                        PEAK = 2,
                        P50 = 3,
                        P75 = 4,
                        P99 = 5
                    }
                }

                /** Properties of a TimeSeries. */
                interface ITimeSeries {

                    /** TimeSeries locationType */
                    locationType?: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|null);

                    /** TimeSeries location */
                    location?: (string|null);

                    /** TimeSeries isSpot */
                    isSpot?: (boolean|null);

                    /** TimeSeries machineFamily */
                    machineFamily?: (string|null);

                    /** TimeSeries diskType */
                    diskType?: (string|null);

                    /** TimeSeries confidentialMode */
                    confidentialMode?: (boolean|null);

                    /** TimeSeries gpuType */
                    gpuType?: (string|null);

                    /** TimeSeries tpuType */
                    tpuType?: (string|null);

                    /** TimeSeries machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** TimeSeries cloudResourceType */
                    cloudResourceType?: (string|null);

                    /** TimeSeries points */
                    points?: (google.cloud.capacityplanner.v1beta.IPoint[]|null);

                    /** TimeSeries unit */
                    unit?: (string|null);
                }

                /** Represents a TimeSeries. */
                class TimeSeries implements ITimeSeries {

                    /**
                     * Constructs a new TimeSeries.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.ITimeSeries);

                    /** TimeSeries locationType. */
                    public locationType: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType);

                    /** TimeSeries location. */
                    public location: string;

                    /** TimeSeries isSpot. */
                    public isSpot: boolean;

                    /** TimeSeries machineFamily. */
                    public machineFamily: string;

                    /** TimeSeries diskType. */
                    public diskType: string;

                    /** TimeSeries confidentialMode. */
                    public confidentialMode: boolean;

                    /** TimeSeries gpuType. */
                    public gpuType: string;

                    /** TimeSeries tpuType. */
                    public tpuType: string;

                    /** TimeSeries machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** TimeSeries cloudResourceType. */
                    public cloudResourceType: string;

                    /** TimeSeries points. */
                    public points: google.cloud.capacityplanner.v1beta.IPoint[];

                    /** TimeSeries unit. */
                    public unit: string;

                    /**
                     * Creates a new TimeSeries instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSeries instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.ITimeSeries): google.cloud.capacityplanner.v1beta.TimeSeries;

                    /**
                     * Encodes the specified TimeSeries message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeSeries.verify|verify} messages.
                     * @param message TimeSeries message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.ITimeSeries, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.TimeSeries.verify|verify} messages.
                     * @param message TimeSeries message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.ITimeSeries, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a TimeSeries message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSeries
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.TimeSeries;

                    /**
                     * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSeries
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.TimeSeries;

                    /**
                     * Verifies a TimeSeries message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSeries
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.TimeSeries;

                    /**
                     * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
                     * @param message TimeSeries
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.TimeSeries, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSeries to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimeSeries
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TimeSeries {

                    /** LocationType enum. */
                    enum LocationType {
                        LOCATION_TYPE_UNSPECIFIED = 0,
                        REGIONAL = 1,
                        ZONAL = 2
                    }
                }

                /** Properties of a ReservationData. */
                interface IReservationData {

                    /** ReservationData name */
                    name?: (string|null);

                    /** ReservationData timeSeries */
                    timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** ReservationData usedReservationValues */
                    usedReservationValues?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** ReservationData futureReservations */
                    futureReservations?: (google.cloud.capacityplanner.v1beta.IFutureReservation[]|null);

                    /** ReservationData allocations */
                    allocations?: (google.cloud.capacityplanner.v1beta.IAllocation[]|null);
                }

                /** Represents a ReservationData. */
                class ReservationData implements IReservationData {

                    /**
                     * Constructs a new ReservationData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IReservationData);

                    /** ReservationData name. */
                    public name: string;

                    /** ReservationData timeSeries. */
                    public timeSeries?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** ReservationData usedReservationValues. */
                    public usedReservationValues?: (google.cloud.capacityplanner.v1beta.ITimeSeries|null);

                    /** ReservationData futureReservations. */
                    public futureReservations: google.cloud.capacityplanner.v1beta.IFutureReservation[];

                    /** ReservationData allocations. */
                    public allocations: google.cloud.capacityplanner.v1beta.IAllocation[];

                    /**
                     * Creates a new ReservationData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReservationData instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IReservationData): google.cloud.capacityplanner.v1beta.ReservationData;

                    /**
                     * Encodes the specified ReservationData message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ReservationData.verify|verify} messages.
                     * @param message ReservationData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IReservationData, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ReservationData message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ReservationData.verify|verify} messages.
                     * @param message ReservationData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IReservationData, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a ReservationData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReservationData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ReservationData;

                    /**
                     * Decodes a ReservationData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReservationData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ReservationData;

                    /**
                     * Verifies a ReservationData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReservationData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReservationData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ReservationData;

                    /**
                     * Creates a plain object from a ReservationData message. Also converts values to other types if specified.
                     * @param message ReservationData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ReservationData, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReservationData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReservationData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MachineShape. */
                interface IMachineShape {

                    /** MachineShape machineFamily */
                    machineFamily?: (string|null);

                    /** MachineShape machineType */
                    machineType?: (string|null);

                    /** MachineShape machineShape */
                    machineShape?: (string|null);

                    /** MachineShape cpuCores */
                    cpuCores?: (number|null);

                    /** MachineShape gpuType */
                    gpuType?: (string|null);

                    /** MachineShape gpuComputeType */
                    gpuComputeType?: (string|null);

                    /** MachineShape gpuCores */
                    gpuCores?: (number|Long_2|string|null);

                    /** MachineShape localSsdPartitions */
                    localSsdPartitions?: (number|Long_2|string|null);

                    /** MachineShape localSsdGb */
                    localSsdGb?: (number|null);

                    /** MachineShape memoryGb */
                    memoryGb?: (number|null);

                    /** MachineShape localSsdInterface */
                    localSsdInterface?: (string|null);

                    /** MachineShape minCpuPlatform */
                    minCpuPlatform?: (string|null);
                }

                /** Represents a MachineShape. */
                class MachineShape implements IMachineShape {

                    /**
                     * Constructs a new MachineShape.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IMachineShape);

                    /** MachineShape machineFamily. */
                    public machineFamily: string;

                    /** MachineShape machineType. */
                    public machineType: string;

                    /** MachineShape machineShape. */
                    public machineShape: string;

                    /** MachineShape cpuCores. */
                    public cpuCores: number;

                    /** MachineShape gpuType. */
                    public gpuType: string;

                    /** MachineShape gpuComputeType. */
                    public gpuComputeType: string;

                    /** MachineShape gpuCores. */
                    public gpuCores: (number|Long_2|string);

                    /** MachineShape localSsdPartitions. */
                    public localSsdPartitions: (number|Long_2|string);

                    /** MachineShape localSsdGb. */
                    public localSsdGb: number;

                    /** MachineShape memoryGb. */
                    public memoryGb: number;

                    /** MachineShape localSsdInterface. */
                    public localSsdInterface: string;

                    /** MachineShape minCpuPlatform. */
                    public minCpuPlatform: string;

                    /**
                     * Creates a new MachineShape instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MachineShape instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IMachineShape): google.cloud.capacityplanner.v1beta.MachineShape;

                    /**
                     * Encodes the specified MachineShape message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.MachineShape.verify|verify} messages.
                     * @param message MachineShape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IMachineShape, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified MachineShape message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.MachineShape.verify|verify} messages.
                     * @param message MachineShape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IMachineShape, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a MachineShape message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MachineShape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.MachineShape;

                    /**
                     * Decodes a MachineShape message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MachineShape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.MachineShape;

                    /**
                     * Verifies a MachineShape message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MachineShape message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MachineShape
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.MachineShape;

                    /**
                     * Creates a plain object from a MachineShape message. Also converts values to other types if specified.
                     * @param message MachineShape
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.MachineShape, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MachineShape to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MachineShape
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportUsageHistoriesRequest. */
                interface IExportUsageHistoriesRequest {

                    /** ExportUsageHistoriesRequest parent */
                    parent?: (string|null);

                    /** ExportUsageHistoriesRequest isSpot */
                    isSpot?: (boolean|null);

                    /** ExportUsageHistoriesRequest machineFamily */
                    machineFamily?: (string|null);

                    /** ExportUsageHistoriesRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportUsageHistoriesRequest diskType */
                    diskType?: (string|null);

                    /** ExportUsageHistoriesRequest gpuType */
                    gpuType?: (string|null);

                    /** ExportUsageHistoriesRequest tpuType */
                    tpuType?: (string|null);

                    /** ExportUsageHistoriesRequest resourceType */
                    resourceType?: (string|null);

                    /** ExportUsageHistoriesRequest usageAggregationMethod */
                    usageAggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);

                    /** ExportUsageHistoriesRequest startDate */
                    startDate?: (google.type.IDate|null);

                    /** ExportUsageHistoriesRequest endDate */
                    endDate?: (google.type.IDate|null);

                    /** ExportUsageHistoriesRequest outputConfig */
                    outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);
                }

                /** Represents an ExportUsageHistoriesRequest. */
                class ExportUsageHistoriesRequest implements IExportUsageHistoriesRequest {

                    /**
                     * Constructs a new ExportUsageHistoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest);

                    /** ExportUsageHistoriesRequest parent. */
                    public parent: string;

                    /** ExportUsageHistoriesRequest isSpot. */
                    public isSpot: boolean;

                    /** ExportUsageHistoriesRequest machineFamily. */
                    public machineFamily: string;

                    /** ExportUsageHistoriesRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportUsageHistoriesRequest diskType. */
                    public diskType: string;

                    /** ExportUsageHistoriesRequest gpuType. */
                    public gpuType: string;

                    /** ExportUsageHistoriesRequest tpuType. */
                    public tpuType: string;

                    /** ExportUsageHistoriesRequest resourceType. */
                    public resourceType: string;

                    /** ExportUsageHistoriesRequest usageAggregationMethod. */
                    public usageAggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /** ExportUsageHistoriesRequest startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** ExportUsageHistoriesRequest endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** ExportUsageHistoriesRequest outputConfig. */
                    public outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);

                    /**
                     * Creates a new ExportUsageHistoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportUsageHistoriesRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest;

                    /**
                     * Encodes the specified ExportUsageHistoriesRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest.verify|verify} messages.
                     * @param message ExportUsageHistoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportUsageHistoriesRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest.verify|verify} messages.
                     * @param message ExportUsageHistoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportUsageHistoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportUsageHistoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest;

                    /**
                     * Decodes an ExportUsageHistoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportUsageHistoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest;

                    /**
                     * Verifies an ExportUsageHistoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportUsageHistoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportUsageHistoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest;

                    /**
                     * Creates a plain object from an ExportUsageHistoriesRequest message. Also converts values to other types if specified.
                     * @param message ExportUsageHistoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportUsageHistoriesRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportUsageHistoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportUsageHistoriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportForecastsRequest. */
                interface IExportForecastsRequest {

                    /** ExportForecastsRequest parent */
                    parent?: (string|null);

                    /** ExportForecastsRequest machineFamily */
                    machineFamily?: (string|null);

                    /** ExportForecastsRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportForecastsRequest diskType */
                    diskType?: (string|null);

                    /** ExportForecastsRequest gpuType */
                    gpuType?: (string|null);

                    /** ExportForecastsRequest tpuType */
                    tpuType?: (string|null);

                    /** ExportForecastsRequest resourceType */
                    resourceType?: (string|null);

                    /** ExportForecastsRequest predictionInterval */
                    predictionInterval?: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|null);

                    /** ExportForecastsRequest aggregationMethod */
                    aggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);

                    /** ExportForecastsRequest startDate */
                    startDate?: (google.type.IDate|null);

                    /** ExportForecastsRequest endDate */
                    endDate?: (google.type.IDate|null);

                    /** ExportForecastsRequest outputConfig */
                    outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);
                }

                /** Represents an ExportForecastsRequest. */
                class ExportForecastsRequest implements IExportForecastsRequest {

                    /**
                     * Constructs a new ExportForecastsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportForecastsRequest);

                    /** ExportForecastsRequest parent. */
                    public parent: string;

                    /** ExportForecastsRequest machineFamily. */
                    public machineFamily: string;

                    /** ExportForecastsRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportForecastsRequest diskType. */
                    public diskType: string;

                    /** ExportForecastsRequest gpuType. */
                    public gpuType: string;

                    /** ExportForecastsRequest tpuType. */
                    public tpuType: string;

                    /** ExportForecastsRequest resourceType. */
                    public resourceType: string;

                    /** ExportForecastsRequest predictionInterval. */
                    public predictionInterval: (google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval|keyof typeof google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval);

                    /** ExportForecastsRequest aggregationMethod. */
                    public aggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /** ExportForecastsRequest startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** ExportForecastsRequest endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** ExportForecastsRequest outputConfig. */
                    public outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);

                    /**
                     * Creates a new ExportForecastsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportForecastsRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportForecastsRequest): google.cloud.capacityplanner.v1beta.ExportForecastsRequest;

                    /**
                     * Encodes the specified ExportForecastsRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportForecastsRequest.verify|verify} messages.
                     * @param message ExportForecastsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportForecastsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportForecastsRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportForecastsRequest.verify|verify} messages.
                     * @param message ExportForecastsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportForecastsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportForecastsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportForecastsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportForecastsRequest;

                    /**
                     * Decodes an ExportForecastsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportForecastsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportForecastsRequest;

                    /**
                     * Verifies an ExportForecastsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportForecastsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportForecastsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportForecastsRequest;

                    /**
                     * Creates a plain object from an ExportForecastsRequest message. Also converts values to other types if specified.
                     * @param message ExportForecastsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportForecastsRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportForecastsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportForecastsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportReservationsUsageRequest. */
                interface IExportReservationsUsageRequest {

                    /** ExportReservationsUsageRequest machineFamily */
                    machineFamily?: (string|null);

                    /** ExportReservationsUsageRequest machineShape */
                    machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportReservationsUsageRequest gpuType */
                    gpuType?: (string|null);

                    /** ExportReservationsUsageRequest parent */
                    parent?: (string|null);

                    /** ExportReservationsUsageRequest locationLevel */
                    locationLevel?: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|null);

                    /** ExportReservationsUsageRequest cloudResourceType */
                    cloudResourceType?: (string|null);

                    /** ExportReservationsUsageRequest usageAggregationMethod */
                    usageAggregationMethod?: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|null);

                    /** ExportReservationsUsageRequest shareType */
                    shareType?: (google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.ShareType|null);

                    /** ExportReservationsUsageRequest startDate */
                    startDate?: (google.type.IDate|null);

                    /** ExportReservationsUsageRequest endDate */
                    endDate?: (google.type.IDate|null);

                    /** ExportReservationsUsageRequest outputConfig */
                    outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);
                }

                /** Represents an ExportReservationsUsageRequest. */
                class ExportReservationsUsageRequest implements IExportReservationsUsageRequest {

                    /**
                     * Constructs a new ExportReservationsUsageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest);

                    /** ExportReservationsUsageRequest machineFamily. */
                    public machineFamily?: (string|null);

                    /** ExportReservationsUsageRequest machineShape. */
                    public machineShape?: (google.cloud.capacityplanner.v1beta.IMachineShape|null);

                    /** ExportReservationsUsageRequest gpuType. */
                    public gpuType?: (string|null);

                    /** ExportReservationsUsageRequest parent. */
                    public parent: string;

                    /** ExportReservationsUsageRequest locationLevel. */
                    public locationLevel: (google.cloud.capacityplanner.v1beta.TimeSeries.LocationType|keyof typeof google.cloud.capacityplanner.v1beta.TimeSeries.LocationType);

                    /** ExportReservationsUsageRequest cloudResourceType. */
                    public cloudResourceType: string;

                    /** ExportReservationsUsageRequest usageAggregationMethod. */
                    public usageAggregationMethod: (google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod|keyof typeof google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod);

                    /** ExportReservationsUsageRequest shareType. */
                    public shareType: (google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.ShareType|keyof typeof google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.ShareType);

                    /** ExportReservationsUsageRequest startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** ExportReservationsUsageRequest endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** ExportReservationsUsageRequest outputConfig. */
                    public outputConfig?: (google.cloud.capacityplanner.v1beta.IOutputConfig|null);

                    /** ExportReservationsUsageRequest resource. */
                    public resource?: ("machineFamily"|"machineShape"|"gpuType");

                    /**
                     * Creates a new ExportReservationsUsageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportReservationsUsageRequest instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest): google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest;

                    /**
                     * Encodes the specified ExportReservationsUsageRequest message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.verify|verify} messages.
                     * @param message ExportReservationsUsageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportReservationsUsageRequest message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.verify|verify} messages.
                     * @param message ExportReservationsUsageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportReservationsUsageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportReservationsUsageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest;

                    /**
                     * Decodes an ExportReservationsUsageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportReservationsUsageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest;

                    /**
                     * Verifies an ExportReservationsUsageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportReservationsUsageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportReservationsUsageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest;

                    /**
                     * Creates a plain object from an ExportReservationsUsageRequest message. Also converts values to other types if specified.
                     * @param message ExportReservationsUsageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportReservationsUsageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportReservationsUsageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExportReservationsUsageRequest {

                    /** ShareType enum. */
                    enum ShareType {
                        SHARE_TYPE_UNSPECIFIED = 0,
                        SHARE_TYPE_LOCAL = 1,
                        SHARE_TYPE_SPECIFIC_PROJECTS = 2
                    }
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.capacityplanner.v1beta.IGcsDestination|null);

                    /** OutputConfig bigqueryDestination */
                    bigqueryDestination?: (google.cloud.capacityplanner.v1beta.IBigQueryDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.capacityplanner.v1beta.IGcsDestination|null);

                    /** OutputConfig bigqueryDestination. */
                    public bigqueryDestination?: (google.cloud.capacityplanner.v1beta.IBigQueryDestination|null);

                    /** OutputConfig destination. */
                    public destination?: ("gcsDestination"|"bigqueryDestination");

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IOutputConfig): google.cloud.capacityplanner.v1beta.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IOutputConfig, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IOutputConfig, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.OutputConfig, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);

                    /** GcsDestination bucket */
                    bucket?: (string|null);

                    /** GcsDestination object */
                    object?: (string|null);

                    /** GcsDestination force */
                    force?: (boolean|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /** GcsDestination bucket. */
                    public bucket: string;

                    /** GcsDestination object. */
                    public object: string;

                    /** GcsDestination force. */
                    public force: boolean;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IGcsDestination): google.cloud.capacityplanner.v1beta.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IGcsDestination, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IGcsDestination, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.GcsDestination, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BigQueryDestination. */
                interface IBigQueryDestination {

                    /** BigQueryDestination dataset */
                    dataset?: (string|null);

                    /** BigQueryDestination table */
                    table?: (string|null);

                    /** BigQueryDestination partitionKey */
                    partitionKey?: (google.cloud.capacityplanner.v1beta.BigQueryDestination.PartitionKey|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.PartitionKey|null);

                    /** BigQueryDestination writeDisposition */
                    writeDisposition?: (google.cloud.capacityplanner.v1beta.BigQueryDestination.WriteDisposition|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.WriteDisposition|null);

                    /** BigQueryDestination createDisposition */
                    createDisposition?: (google.cloud.capacityplanner.v1beta.BigQueryDestination.CreateDisposition|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.CreateDisposition|null);

                    /** BigQueryDestination gcsLocation */
                    gcsLocation?: (string|null);
                }

                /** Represents a BigQueryDestination. */
                class BigQueryDestination implements IBigQueryDestination {

                    /**
                     * Constructs a new BigQueryDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IBigQueryDestination);

                    /** BigQueryDestination dataset. */
                    public dataset: string;

                    /** BigQueryDestination table. */
                    public table: string;

                    /** BigQueryDestination partitionKey. */
                    public partitionKey: (google.cloud.capacityplanner.v1beta.BigQueryDestination.PartitionKey|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.PartitionKey);

                    /** BigQueryDestination writeDisposition. */
                    public writeDisposition: (google.cloud.capacityplanner.v1beta.BigQueryDestination.WriteDisposition|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.WriteDisposition);

                    /** BigQueryDestination createDisposition. */
                    public createDisposition: (google.cloud.capacityplanner.v1beta.BigQueryDestination.CreateDisposition|keyof typeof google.cloud.capacityplanner.v1beta.BigQueryDestination.CreateDisposition);

                    /** BigQueryDestination gcsLocation. */
                    public gcsLocation: string;

                    /**
                     * Creates a new BigQueryDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryDestination instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IBigQueryDestination): google.cloud.capacityplanner.v1beta.BigQueryDestination;

                    /**
                     * Encodes the specified BigQueryDestination message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IBigQueryDestination, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified BigQueryDestination message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IBigQueryDestination, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.BigQueryDestination;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.BigQueryDestination;

                    /**
                     * Verifies a BigQueryDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.BigQueryDestination;

                    /**
                     * Creates a plain object from a BigQueryDestination message. Also converts values to other types if specified.
                     * @param message BigQueryDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.BigQueryDestination, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BigQueryDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BigQueryDestination {

                    /** PartitionKey enum. */
                    enum PartitionKey {
                        PARTITION_KEY_UNSPECIFIED = 0,
                        REQUEST_TIME = 1
                    }

                    /** WriteDisposition enum. */
                    enum WriteDisposition {
                        WRITE_DISPOSITION_UNSPECIFIED = 0,
                        WRITE_APPEND = 1,
                        WRITE_TRUNCATE = 2,
                        WRITE_EMPTY = 3
                    }

                    /** CreateDisposition enum. */
                    enum CreateDisposition {
                        CREATE_DISPOSITION_UNSPECIFIED = 0,
                        CREATE_IF_NEEDED = 1,
                        CREATE_NEVER = 2
                    }
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IOperationMetadata): google.cloud.capacityplanner.v1beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IOperationMetadata, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IOperationMetadata, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.OperationMetadata, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportUsageHistoriesResponse. */
                interface IExportUsageHistoriesResponse {

                    /** ExportUsageHistoriesResponse response */
                    response?: (string|null);
                }

                /** Represents an ExportUsageHistoriesResponse. */
                class ExportUsageHistoriesResponse implements IExportUsageHistoriesResponse {

                    /**
                     * Constructs a new ExportUsageHistoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse);

                    /** ExportUsageHistoriesResponse response. */
                    public response: string;

                    /**
                     * Creates a new ExportUsageHistoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportUsageHistoriesResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse;

                    /**
                     * Encodes the specified ExportUsageHistoriesResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse.verify|verify} messages.
                     * @param message ExportUsageHistoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportUsageHistoriesResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse.verify|verify} messages.
                     * @param message ExportUsageHistoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportUsageHistoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportUsageHistoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse;

                    /**
                     * Decodes an ExportUsageHistoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportUsageHistoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse;

                    /**
                     * Verifies an ExportUsageHistoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportUsageHistoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportUsageHistoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse;

                    /**
                     * Creates a plain object from an ExportUsageHistoriesResponse message. Also converts values to other types if specified.
                     * @param message ExportUsageHistoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportUsageHistoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportUsageHistoriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportForecastsResponse. */
                interface IExportForecastsResponse {

                    /** ExportForecastsResponse response */
                    response?: (string|null);
                }

                /** Represents an ExportForecastsResponse. */
                class ExportForecastsResponse implements IExportForecastsResponse {

                    /**
                     * Constructs a new ExportForecastsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportForecastsResponse);

                    /** ExportForecastsResponse response. */
                    public response: string;

                    /**
                     * Creates a new ExportForecastsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportForecastsResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportForecastsResponse): google.cloud.capacityplanner.v1beta.ExportForecastsResponse;

                    /**
                     * Encodes the specified ExportForecastsResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportForecastsResponse.verify|verify} messages.
                     * @param message ExportForecastsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportForecastsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportForecastsResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportForecastsResponse.verify|verify} messages.
                     * @param message ExportForecastsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportForecastsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportForecastsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportForecastsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportForecastsResponse;

                    /**
                     * Decodes an ExportForecastsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportForecastsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportForecastsResponse;

                    /**
                     * Verifies an ExportForecastsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportForecastsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportForecastsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportForecastsResponse;

                    /**
                     * Creates a plain object from an ExportForecastsResponse message. Also converts values to other types if specified.
                     * @param message ExportForecastsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportForecastsResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportForecastsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportForecastsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportReservationsUsageResponse. */
                interface IExportReservationsUsageResponse {

                    /** ExportReservationsUsageResponse response */
                    response?: (string|null);
                }

                /** Represents an ExportReservationsUsageResponse. */
                class ExportReservationsUsageResponse implements IExportReservationsUsageResponse {

                    /**
                     * Constructs a new ExportReservationsUsageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse);

                    /** ExportReservationsUsageResponse response. */
                    public response: string;

                    /**
                     * Creates a new ExportReservationsUsageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportReservationsUsageResponse instance
                     */
                    public static create(properties?: google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse): google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse;

                    /**
                     * Encodes the specified ExportReservationsUsageResponse message. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse.verify|verify} messages.
                     * @param message ExportReservationsUsageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Encodes the specified ExportReservationsUsageResponse message, length delimited. Does not implicitly {@link google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse.verify|verify} messages.
                     * @param message ExportReservationsUsageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

                    /**
                     * Decodes an ExportReservationsUsageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportReservationsUsageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse;

                    /**
                     * Decodes an ExportReservationsUsageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportReservationsUsageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse;

                    /**
                     * Verifies an ExportReservationsUsageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportReservationsUsageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportReservationsUsageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse;

                    /**
                     * Creates a plain object from an ExportReservationsUsageResponse message. Also converts values to other types if specified.
                     * @param message ExportReservationsUsageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportReservationsUsageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportReservationsUsageResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: protobuf_2.Writer): protobuf_2.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: protobuf_2.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends protobuf_2.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: protobuf_2.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: protobuf_2.Writer): protobuf_2.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf_2.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf_2.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: protobuf_2.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Date
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

declare namespace protos {
    export {
        google
    }
}
export { protos }

export declare const UsageServiceClient: typeof v1beta.UsageServiceClient;

export declare type UsageServiceClient = v1beta.UsageServiceClient;

/**
 *  Provides access to historical and forecasted usage data.
 * @class
 * @memberof v1beta
 */
declare class UsageServiceClient_2 {
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
    usageServiceStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of UsageServiceClient.
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
     *     const client = new UsageServiceClient({fallback: true}, gax);
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
     * Returns a list of the usage histories that are in the parent parameter
     * and match your specified filters.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The compute engine resource and location for the time series
     *   values to return. The format is:
     *
     *       projects/{project}/locations/{location} or
     *       organizations/{organization}/locations/{location} or
     *       folders/{folder}/locations/{location}
     * @param {google.cloud.capacityplanner.v1beta.TimeSeries.LocationType} [request.locationLevel]
     *   Optional. The location level of the reservations usage timeseries.
     * @param {boolean} [request.isSpot]
     *   Optional. The is_spot flag is used to fetch the usage data for preemptible
     *   Resources.
     * @param {string} request.machineFamily
     *   The machine family for the `UsageHistory` values to return. Possible values
     *   include "n1", and "n2d". See
     *   https://cloud.google.com/compute/docs/machine-types for more examples.
     *   Empty machine_family will return results matching all machine families.
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine shape for the `UsageHistory` values to return.
     * @param {string} [request.diskType]
     *   Optional. The disk_type for the `UsageHistory` values to return request
     *   with persistent-disk cloud_resource_type. Empty disk_type will return
     *   results matching all disk types.
     * @param {boolean} [request.confidentialMode]
     *   Optional. Whether the persistent disk is in confidential mode.
     * @param {string} [request.gpuType]
     *   Optional. The GPU type for the `UsageHistory` values to return. Sample
     *   values are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
     *   https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
     *   will return results matching all GPUs.
     * @param {string} [request.tpuType]
     *   Optional. The TPU type for the `UsageHistory` values to return. Empty
     *   tpu_type will return results matching all TPUs.
     * @param {string} request.cloudResourceType
     *   The resource for the `UsageHistory` values to return. Possible values
     *   include "gce-vcpus", "gce-ram", "gce-local-ssd", "gce-persistent-disk",
     *   "gce-gpu" and "gce-tpu".
     *   Empty cloud_resource_type will return results matching all resources.
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} request.usageAggregationMethod
     *   The method that should be used to convert sampled usage data to daily
     *   usage values.
     *   AGGREGATION_METHOD_UNSPECIFIED will return results matching all the
     *   aggregation methods.
     * @param {google.type.Date} [request.startDate]
     *   Optional. The start date of reservations usage.
     * @param {google.type.Date} [request.endDate]
     *   Optional. The end date of reservations usage.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.capacityplanner.v1beta.QueryUsageHistoriesResponse|QueryUsageHistoriesResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.query_usage_histories.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_QueryUsageHistories_async
     */
    queryUsageHistories(request?: protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse,
    protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest | undefined,
        {} | undefined
    ]>;
    queryUsageHistories(request: protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, options: CallOptions, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest | null | undefined, {} | null | undefined>): void;
    queryUsageHistories(request: protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.IQueryUsageHistoriesRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns a list of the forecasts that are in the parent parameter
     * and match your specified filters.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The compute engine resource and location for the time series
     *   values to return. The format is:
     *
     *   projects/{project}/locations/{location} or
     *   organizations/{organization}/locations/{location} or
     *   folders/{folder}/locations/{location}
     * @param {string} request.machineFamily
     *   The machine family to use to select the `Forecast` values to return.
     *   Possible values include "n1", and "n2d".
     *   Empty machine_family will return results matching all machine families.
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine shape for the time series values to return.
     * @param {string} [request.diskType]
     *   Optional. The disk_type for the `Forecast` values to return with request
     *   persistent-disk cloud_resource_type.
     *   Empty disk_type will return results matching all disk types.
     * @param {boolean} [request.confidentialMode]
     *   Optional. Whether the persistent disk is in confidential mode.
     * @param {string} [request.gpuType]
     *   Optional. The GPU type for the `Forecast` values to return. Sample values
     *   are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
     *   https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
     *   will return results matching all GPUs.
     * @param {string} [request.tpuType]
     *   Optional. The TPU type for the `Forecast` values to return. Empty tpu_type
     *   will return results matching all TPUs.
     * @param {string} request.cloudResourceType
     *   The resource for the `Forecast` values to return. Possible values include
     *   "gce-vcpus", "gce-ram", "gce-local-ssd", "gce-persistent-disk", "gce-gpu"
     *   and "gce-tpu".
     *   Empty cloud_resource_type will return results matching all resources.
     * @param {google.cloud.capacityplanner.v1beta.Forecast.ForecastType} request.forecastType
     *   The type of forecast to use to select the `Forecast` values to return.
     *   FORECAST_TYPE_UNSPECIFIED will return results matching all the forecast
     *   types.
     * @param {google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval} request.predictionInterval
     *   The prediction interval to use to select the `Forecast` values to return.
     *   PREDICTION_INTERVAL_UNSPECIFIED will return results matching all prediction
     *   intervals.
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} request.aggregationMethod
     *   Aggregation Method of the historical usage for which the forecast is
     *   generated
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.capacityplanner.v1beta.QueryForecastsResponse|QueryForecastsResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.query_forecasts.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_QueryForecasts_async
     */
    queryForecasts(request?: protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.IQueryForecastsResponse,
    protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest | undefined,
        {} | undefined
    ]>;
    queryForecasts(request: protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, options: CallOptions, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryForecastsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest | null | undefined, {} | null | undefined>): void;
    queryForecasts(request: protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryForecastsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryForecastsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns a list of the reservations that are in the parent parameter
     * and match your specified filters.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The compute engine resource and location for the time series
     *   values to return. The format is:
     *
     *   projects/{project}/locations/{location} or
     *   organizations/{organization}/locations/{location} or
     *   folders/{folder}/locations/{location}
     * @param {google.cloud.capacityplanner.v1beta.TimeSeries.LocationType} [request.locationLevel]
     *   Optional. The location level of the reservations usage timeseries.
     * @param {string} [request.machineFamily]
     *   Optional. The machine family to use to select the aggregate reserved values
     *   to return. Possible values include "n1", and "n2d" etc. Empty
     *   machine_family will return results matching all machine families.
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine_shape as a filter to select matching reservations.
     * @param {string} [request.gpuType]
     *   Optional. The GPU type for the reserved values to return. Sample values
     *   are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
     *   https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
     *   will return results matching all GPUs.
     * @param {string} [request.cloudResourceType]
     *   Optional. The resource for the reserved values to return. Possible values
     *   include "gce-vcpus", "gce-ram", "gce-local-ssd", "gce-gpu" and "gce-vm".
     * @param {google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationType} [request.reservationType]
     *   Optional. The Reservation type for example, future reservation request and
     *   allocation. If unspecified, all types are
     *   included.
     * @param {google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ShareType} [request.shareType]
     *   Optional. Types of share settings to filter reservations in response. If
     *   unspecified, all types are included.
     * @param {google.cloud.capacityplanner.v1beta.QueryReservationsRequest.OwnershipType} [request.ownershipType]
     *   Optional. Types of ownerships to filter reservations based on.
     *   In case of OWNED, it filters reservations which are owned by selected
     *   parent project/folder/organization. If unspecified, all types are
     *   included.
     * @param {google.cloud.capacityplanner.v1beta.QueryReservationsRequest.ReservationDataLevel} [request.reservationDataLevel]
     *   Optional. Reservations output data format.
     * @param {boolean} [request.includeUnapprovedReservations]
     *   Optional. Whether to include pending for approval reservations in the
     *   response. This field is only applicable for future reservations.
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} [request.aggregationMethod]
     *   Optional. Aggregation Method of the historical reservation usage
     * @param {google.type.Date} [request.startDate]
     *   Optional. The start date of reservations usage.
     * @param {google.type.Date} [request.endDate]
     *   Optional. The end date of reservations usage.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.capacityplanner.v1beta.QueryReservationsResponse|QueryReservationsResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.query_reservations.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_QueryReservations_async
     */
    queryReservations(request?: protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, options?: CallOptions): Promise<[
    protos.google.cloud.capacityplanner.v1beta.IQueryReservationsResponse,
    protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest | undefined,
        {} | undefined
    ]>;
    queryReservations(request: protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, options: CallOptions, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryReservationsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest | null | undefined, {} | null | undefined>): void;
    queryReservations(request: protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest, callback: Callback<protos.google.cloud.capacityplanner.v1beta.IQueryReservationsResponse, protos.google.cloud.capacityplanner.v1beta.IQueryReservationsRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Exports historical usage data requested by user into either an existing
     * Cloud Storage bucket or a BigQuery table.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The compute engine resource and location for the time series
     *   values to return. The format is:
     *      projects/{project}/locations/{location} or
     *      organizations/{organization}/locations/{location} or
     *      folders/{folder}/locations/{location}
     * @param {boolean} [request.isSpot]
     *   Optional. Set true to export usage for spot resources.
     * @param {string} [request.machineFamily]
     *   Optional. The machine family for the `UsageHistory` values to return.
     *   Possible values include "n1", and "n2d". See
     *   https://cloud.google.com/compute/docs/machine-types for more examples.
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine shape for the time series values to export.
     * @param {string} [request.diskType]
     *   Optional. The disk_type for the `UsageHistory` values to return request
     *   with persistent-disk resource_type. Possible values include "pd-ssd",
     *   "pd-standard", "pd-balanced", and "pd-extreme".
     * @param {string} [request.gpuType]
     *   Optional. The GPU type for the `UsageHistory` values to return. Sample
     *   values are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
     *   https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
     *   will return results matching all GPUs.
     * @param {string} [request.tpuType]
     *   Optional. The TPU type for the `UsageHistory` values to return. Empty
     *   tpu_type will return results matching all TPUs.
     * @param {string} request.resourceType
     *   Required. The resource for the `UsageHistory` values to return. Possible
     *   values include "gce-vcpus", "gce-ram", "gce-local-ssd",
     *   "gce-persistent-disk", "gce-gpu" and "gce-tpu".
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} [request.usageAggregationMethod]
     *   Optional. The method that should be used to convert sampled usage data to
     *   daily usage values. AGGREGATION_METHOD_UNSPECIFIED will return results
     *   matching all the aggregation methods.
     * @param {google.type.Date} [request.startDate]
     *   Optional. The start date of usage.
     * @param {google.type.Date} [request.endDate]
     *   Optional. The end date of usage.
     * @param {google.cloud.capacityplanner.v1beta.OutputConfig} request.outputConfig
     *   Required. Output configuration indicating where the results will be output
     *   to.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_usage_histories.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportUsageHistories_async
     */
    exportUsageHistories(request?: protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, options?: CallOptions): Promise<[
    LROperation<protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>,
    protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    exportUsageHistories(request: protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    exportUsageHistories(request: protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesRequest, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `exportUsageHistories()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_usage_histories.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportUsageHistories_async
     */
    checkExportUsageHistoriesProgress(name: string): Promise<LROperation<protos.google.cloud.capacityplanner.v1beta.ExportUsageHistoriesResponse, protos.google.cloud.capacityplanner.v1beta.OperationMetadata>>;
    /**
     * Exports forecasted usage data requested by user into either an existing
     * Cloud Storage bucket or a BigQuery table.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The compute engine resource and location for the time series
     *   values to return. The format is:
     *      projects/{project}/locations/{location} or
     *      organizations/{organization}/locations/{location} or
     *      folders/{folder}/locations/{location}
     * @param {string} [request.machineFamily]
     *   Optional. The machine family to use to select the `Forecast` values to
     *   return. Possible values include "n1", and "n2d".
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine shape for the time series values to export.
     * @param {string} [request.diskType]
     *   Optional. The disk_type for the `Forecast` values to return with request
     *   persistent-disk resource_type.
     * @param {string} [request.gpuType]
     *   Optional. The GPU type for the `Forecast` values to return. Sample values
     *   are "nvidia-tesla-t4", and "nvidia-tesla-a100". See
     *   https://cloud.google.com/compute/docs/gpus for a list. Empty gpu_type
     *   will return results matching all GPUs.
     * @param {string} [request.tpuType]
     *   Optional. The TPU type for the `Forecast` values to return. Empty tpu_type
     *   will return results matching all TPUs.
     * @param {string} request.resourceType
     *   Required. The resource for the `Forecast` values to return. Possible values
     *   include "gce-vcpus", "gce-ram", "gce-local-ssd", "gce-persistent-disk",
     *   "gce-gpu" and "gce-tpu".
     * @param {google.cloud.capacityplanner.v1beta.Forecast.PredictionInterval} [request.predictionInterval]
     *   Optional. The prediction interval to use to select the `Forecast` values to
     *   return. PREDICTION_INTERVAL_UNSPECIFIED will return results matching all
     *   prediction intervals.
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} [request.aggregationMethod]
     *   Optional. Aggregation Method of the historical usage for which the forecast
     *   is generated.
     * @param {google.type.Date} [request.startDate]
     *   Optional. The start date of forecasts.
     * @param {google.type.Date} [request.endDate]
     *   Optional. The end date of forecasts.
     * @param {google.cloud.capacityplanner.v1beta.OutputConfig} request.outputConfig
     *   Required. Output configuration indicating where the results will be output
     *   to.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_forecasts.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportForecasts_async
     */
    exportForecasts(request?: protos.google.cloud.capacityplanner.v1beta.IExportForecastsRequest, options?: CallOptions): Promise<[
    LROperation<protos.google.cloud.capacityplanner.v1beta.IExportForecastsResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>,
    protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    exportForecasts(request: protos.google.cloud.capacityplanner.v1beta.IExportForecastsRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportForecastsResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    exportForecasts(request: protos.google.cloud.capacityplanner.v1beta.IExportForecastsRequest, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportForecastsResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `exportForecasts()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_forecasts.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportForecasts_async
     */
    checkExportForecastsProgress(name: string): Promise<LROperation<protos.google.cloud.capacityplanner.v1beta.ExportForecastsResponse, protos.google.cloud.capacityplanner.v1beta.OperationMetadata>>;
    /**
     * Exports reservations usage data requested by user into either an existing
     * Cloud Storage bucket or a new/existing BigQuery table.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} [request.machineFamily]
     *   Optional. The machine family to query reservations and usage by. For
     *   example: n1, n2d.
     * @param {google.cloud.capacityplanner.v1beta.MachineShape} [request.machineShape]
     *   Optional. The machine_shape as a filter to select matching reservations
     *   and its usage.
     * @param {string} [request.gpuType]
     *   Optional. The GPU type to query reservations and usage  by. For example:
     *   NVIDIA T4.
     * @param {string} request.parent
     *   Required. The compute engine resource and location of the
     *   reservationsusage. The format is:
     *      projects/{project}/locations/{location} or
     *      organizations/{organization}/locations/{location} or
     *      folders/{folder}/locations/{location}
     * @param {google.cloud.capacityplanner.v1beta.TimeSeries.LocationType} [request.locationLevel]
     *   Optional. The location level of the reservations usage timeseries.
     * @param {string} request.cloudResourceType
     *   Required. The resource for the `ReservationsUsage` values to return.
     *   Possible values include "gce-vcpus", "gce-ram", "gce-local-ssd", and
     *   "gce-gpu".
     * @param {google.cloud.capacityplanner.v1beta.UsageHistory.AggregationMethod} request.usageAggregationMethod
     *   Required. The method that should be used to convert sampled reservations
     *   data to daily usage values.
     * @param {google.cloud.capacityplanner.v1beta.ExportReservationsUsageRequest.ShareType} [request.shareType]
     *   Optional. Type of share settings to filter reservations in response. If
     *   unspecified, all types are included.
     * @param {google.type.Date} [request.startDate]
     *   Optional. The start date of reservations usage.
     * @param {google.type.Date} [request.endDate]
     *   Optional. The end date of reservations usage.
     * @param {google.cloud.capacityplanner.v1beta.OutputConfig} request.outputConfig
     *   Required. Output configuration indicating where the results will be output
     *   to.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_reservations_usage.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportReservationsUsage_async
     */
    exportReservationsUsage(request?: protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, options?: CallOptions): Promise<[
    LROperation<protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>,
    protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    exportReservationsUsage(request: protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    exportReservationsUsage(request: protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageRequest, callback: Callback<LROperation<protos.google.cloud.capacityplanner.v1beta.IExportReservationsUsageResponse, protos.google.cloud.capacityplanner.v1beta.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `exportReservationsUsage()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1beta/usage_service.export_reservations_usage.js</caption>
     * region_tag:capacityplanner_v1beta_generated_UsageService_ExportReservationsUsage_async
     */
    checkExportReservationsUsageProgress(name: string): Promise<LROperation<protos.google.cloud.capacityplanner.v1beta.ExportReservationsUsageResponse, protos.google.cloud.capacityplanner.v1beta.OperationMetadata>>;
    /**
     * Return a fully-qualified capacityPlan resource name string.
     *
     * @param {string} project
     * @param {string} capacity_plan
     * @returns {string} Resource name string.
     */
    capacityPlanPath(project: string, capacityPlan: string): string;
    /**
     * Parse the project from CapacityPlan resource.
     *
     * @param {string} capacityPlanName
     *   A fully-qualified path representing CapacityPlan resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromCapacityPlanName(capacityPlanName: string): string | number;
    /**
     * Parse the capacity_plan from CapacityPlan resource.
     *
     * @param {string} capacityPlanName
     *   A fully-qualified path representing CapacityPlan resource.
     * @returns {string} A string representing the capacity_plan.
     */
    matchCapacityPlanFromCapacityPlanName(capacityPlanName: string): string | number;
    /**
     * Return a fully-qualified folderLocationForecasts resource name string.
     *
     * @param {string} folder
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    folderLocationForecastsPath(folder: string, location: string, forecast: string): string;
    /**
     * Parse the folder from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the folder.
     */
    matchFolderFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Parse the location from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from FolderLocationForecasts resource.
     *
     * @param {string} folderLocationForecastsName
     *   A fully-qualified path representing folder_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromFolderLocationForecastsName(folderLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified folderLocationReservations resource name string.
     *
     * @param {string} folder
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    folderLocationReservationsPath(folder: string, location: string, reservation: string): string;
    /**
     * Parse the folder from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the folder.
     */
    matchFolderFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
    /**
     * Parse the location from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from FolderLocationReservations resource.
     *
     * @param {string} folderLocationReservationsName
     *   A fully-qualified path representing folder_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromFolderLocationReservationsName(folderLocationReservationsName: string): string | number;
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
     * Return a fully-qualified organizationLocationForecasts resource name string.
     *
     * @param {string} organization
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    organizationLocationForecastsPath(organization: string, location: string, forecast: string): string;
    /**
     * Parse the organization from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the organization.
     */
    matchOrganizationFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Parse the location from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from OrganizationLocationForecasts resource.
     *
     * @param {string} organizationLocationForecastsName
     *   A fully-qualified path representing organization_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromOrganizationLocationForecastsName(organizationLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified organizationLocationReservations resource name string.
     *
     * @param {string} organization
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    organizationLocationReservationsPath(organization: string, location: string, reservation: string): string;
    /**
     * Parse the organization from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the organization.
     */
    matchOrganizationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
    /**
     * Parse the location from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from OrganizationLocationReservations resource.
     *
     * @param {string} organizationLocationReservationsName
     *   A fully-qualified path representing organization_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromOrganizationLocationReservationsName(organizationLocationReservationsName: string): string | number;
    /**
     * Return a fully-qualified projectLocationForecasts resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} forecast
     * @returns {string} Resource name string.
     */
    projectLocationForecastsPath(project: string, location: string, forecast: string): string;
    /**
     * Parse the project from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Parse the location from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Parse the forecast from ProjectLocationForecasts resource.
     *
     * @param {string} projectLocationForecastsName
     *   A fully-qualified path representing project_location_forecasts resource.
     * @returns {string} A string representing the forecast.
     */
    matchForecastFromProjectLocationForecastsName(projectLocationForecastsName: string): string | number;
    /**
     * Return a fully-qualified projectLocationReservations resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} reservation
     * @returns {string} Resource name string.
     */
    projectLocationReservationsPath(project: string, location: string, reservation: string): string;
    /**
     * Parse the project from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Parse the location from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Parse the reservation from ProjectLocationReservations resource.
     *
     * @param {string} projectLocationReservationsName
     *   A fully-qualified path representing project_location_reservations resource.
     * @returns {string} A string representing the reservation.
     */
    matchReservationFromProjectLocationReservationsName(projectLocationReservationsName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}

declare namespace v1beta {
    export {
        CapacityPlanningServiceClient_2 as CapacityPlanningServiceClient,
        UsageServiceClient_2 as UsageServiceClient
    }
}
export { v1beta }

export { }
