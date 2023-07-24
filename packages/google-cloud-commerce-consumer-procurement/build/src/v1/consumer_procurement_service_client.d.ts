/// <reference types="node" />
import type * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback } from 'google-gax';
import { Transform } from 'stream';
import * as protos from '../../protos/protos';
/**
 *  ConsumerProcurementService allows customers to make purchases of products
 *  served by the Cloud Commerce platform.
 *
 *
 *  When purchases are made, the
 *  {@link protos.google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|ConsumerProcurementService}
 *  programs the appropriate backends, including both Google's own
 *  infrastructure, as well as third-party systems, and to enable billing setup
 *  for charging for the procured item.
 *
 * @class
 * @memberof v1
 */
export declare class ConsumerProcurementServiceClient {
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
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    operationsClient: gax.OperationsClient;
    consumerProcurementServiceStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of ConsumerProcurementServiceClient.
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
     *     const client = new ConsumerProcurementServiceClient({fallback: 'rest'}, gax);
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
     * Returns the requested
     * {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order} resource.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the order to retrieve.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/consumer_procurement_service.get_order.js</caption>
     * region_tag:cloudcommerceconsumerprocurement_v1_generated_ConsumerProcurementService_GetOrder_async
     */
    getOrder(request?: protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, options?: CallOptions): Promise<[
        protos.google.cloud.commerce.consumer.procurement.v1.IOrder,
        (protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest | undefined),
        {} | undefined
    ]>;
    getOrder(request: protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, options: CallOptions, callback: Callback<protos.google.cloud.commerce.consumer.procurement.v1.IOrder, protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest | null | undefined, {} | null | undefined>): void;
    getOrder(request: protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, callback: Callback<protos.google.cloud.commerce.consumer.procurement.v1.IOrder, protos.google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Creates a new {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order}.
     *
     * This API only supports GCP spend-based committed use
     * discounts specified by GCP documentation.
     *
     * The returned long-running operation is in-progress until the backend
     * completes the creation of the resource. Once completed, the order is
     * in
     * {@link protos.google.cloud.commerce.consumer.procurement.v1.OrderState.ORDER_STATE_ACTIVE|OrderState.ORDER_STATE_ACTIVE}.
     * In case of failure, the order resource will be removed.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The resource name of the parent resource.
     *   This field has the form  `billingAccounts/{billing-account-id}`.
     * @param {string} request.displayName
     *   Required. The user-specified name of the order being placed.
     * @param {number[]} [request.lineItemInfo]
     *   Optional. Places order for offer. Required when an offer-based order is
     *   being placed.
     * @param {string} [request.requestId]
     *   Optional. A unique identifier for this request.
     *   The server will ignore subsequent requests that provide a duplicate request
     *   ID for at least 120 minutes after the first request.
     *
     *   The request ID must be a valid
     *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format).
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/consumer_procurement_service.place_order.js</caption>
     * region_tag:cloudcommerceconsumerprocurement_v1_generated_ConsumerProcurementService_PlaceOrder_async
     */
    placeOrder(request?: protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.cloud.commerce.consumer.procurement.v1.IOrder, protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    placeOrder(request: protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.commerce.consumer.procurement.v1.IOrder, protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    placeOrder(request: protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, callback: Callback<LROperation<protos.google.cloud.commerce.consumer.procurement.v1.IOrder, protos.google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `placeOrder()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/consumer_procurement_service.place_order.js</caption>
     * region_tag:cloudcommerceconsumerprocurement_v1_generated_ConsumerProcurementService_PlaceOrder_async
     */
    checkPlaceOrderProgress(name: string): Promise<LROperation<protos.google.cloud.commerce.consumer.procurement.v1.Order, protos.google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata>>;
    /**
     * Lists {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order}
     * resources that the user has access to, within the scope of the parent
     * resource.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource to query for orders.
     *   This field has the form `billingAccounts/{billing-account-id}`.
     * @param {number} request.pageSize
     *   The maximum number of entries requested.
     *   The default page size is 25 and the maximum page size is 200.
     * @param {string} request.pageToken
     *   The token for fetching the next page.
     * @param {string} request.filter
     *   Filter that you can use to limit the list request.
     *
     *   A query string that can match a selected set of attributes
     *   with string values. For example, `display_name=abc`.
     *   Supported query attributes are
     *
     *   * `display_name`
     *
     *   If the query contains special characters other than letters,
     *   underscore, or digits, the phrase must be quoted with double quotes. For
     *   example, `display_name="foo:bar"`, where the display name needs to be
     *   quoted because it contains special character colon.
     *
     *   Queries can be combined with `OR`, and `NOT` to form more complex queries.
     *   You can also group them to force a desired evaluation order.
     *   For example, `display_name=abc OR display_name=def`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listOrdersAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listOrders(request?: protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, options?: CallOptions): Promise<[
        protos.google.cloud.commerce.consumer.procurement.v1.IOrder[],
        protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest | null,
        protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse
    ]>;
    listOrders(request: protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse | null | undefined, protos.google.cloud.commerce.consumer.procurement.v1.IOrder>): void;
    listOrders(request: protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, callback: PaginationCallback<protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse | null | undefined, protos.google.cloud.commerce.consumer.procurement.v1.IOrder>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource to query for orders.
     *   This field has the form `billingAccounts/{billing-account-id}`.
     * @param {number} request.pageSize
     *   The maximum number of entries requested.
     *   The default page size is 25 and the maximum page size is 200.
     * @param {string} request.pageToken
     *   The token for fetching the next page.
     * @param {string} request.filter
     *   Filter that you can use to limit the list request.
     *
     *   A query string that can match a selected set of attributes
     *   with string values. For example, `display_name=abc`.
     *   Supported query attributes are
     *
     *   * `display_name`
     *
     *   If the query contains special characters other than letters,
     *   underscore, or digits, the phrase must be quoted with double quotes. For
     *   example, `display_name="foo:bar"`, where the display name needs to be
     *   quoted because it contains special character colon.
     *
     *   Queries can be combined with `OR`, and `NOT` to form more complex queries.
     *   You can also group them to force a desired evaluation order.
     *   For example, `display_name=abc OR display_name=def`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listOrdersAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listOrdersStream(request?: protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listOrders`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The parent resource to query for orders.
     *   This field has the form `billingAccounts/{billing-account-id}`.
     * @param {number} request.pageSize
     *   The maximum number of entries requested.
     *   The default page size is 25 and the maximum page size is 200.
     * @param {string} request.pageToken
     *   The token for fetching the next page.
     * @param {string} request.filter
     *   Filter that you can use to limit the list request.
     *
     *   A query string that can match a selected set of attributes
     *   with string values. For example, `display_name=abc`.
     *   Supported query attributes are
     *
     *   * `display_name`
     *
     *   If the query contains special characters other than letters,
     *   underscore, or digits, the phrase must be quoted with double quotes. For
     *   example, `display_name="foo:bar"`, where the display name needs to be
     *   quoted because it contains special character colon.
     *
     *   Queries can be combined with `OR`, and `NOT` to form more complex queries.
     *   You can also group them to force a desired evaluation order.
     *   For example, `display_name=abc OR display_name=def`.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.commerce.consumer.procurement.v1.Order|Order}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v1/consumer_procurement_service.list_orders.js</caption>
     * region_tag:cloudcommerceconsumerprocurement_v1_generated_ConsumerProcurementService_ListOrders_async
     */
    listOrdersAsync(request?: protos.google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.commerce.consumer.procurement.v1.IOrder>;
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
    getOperation(request: protos.google.longrunning.GetOperationRequest, options?: gax.CallOptions | Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null | undefined>, callback?: Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null | undefined>): Promise<[protos.google.longrunning.Operation]>;
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
    listOperationsAsync(request: protos.google.longrunning.ListOperationsRequest, options?: gax.CallOptions): AsyncIterable<protos.google.longrunning.ListOperationsResponse>;
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
    cancelOperation(request: protos.google.longrunning.CancelOperationRequest, options?: gax.CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.CancelOperationRequest, {} | undefined | null>, callback?: Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} | undefined | null>): Promise<protos.google.protobuf.Empty>;
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
    deleteOperation(request: protos.google.longrunning.DeleteOperationRequest, options?: gax.CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>, callback?: Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>): Promise<protos.google.protobuf.Empty>;
    /**
     * Return a fully-qualified billingAccount resource name string.
     *
     * @param {string} billing_account
     * @returns {string} Resource name string.
     */
    billingAccountPath(billingAccount: string): string;
    /**
     * Parse the billing_account from BillingAccount resource.
     *
     * @param {string} billingAccountName
     *   A fully-qualified path representing BillingAccount resource.
     * @returns {string} A string representing the billing_account.
     */
    matchBillingAccountFromBillingAccountName(billingAccountName: string): string | number;
    /**
     * Return a fully-qualified order resource name string.
     *
     * @param {string} billing_account
     * @param {string} order
     * @returns {string} Resource name string.
     */
    orderPath(billingAccount: string, order: string): string;
    /**
     * Parse the billing_account from Order resource.
     *
     * @param {string} orderName
     *   A fully-qualified path representing Order resource.
     * @returns {string} A string representing the billing_account.
     */
    matchBillingAccountFromOrderName(orderName: string): string | number;
    /**
     * Parse the order from Order resource.
     *
     * @param {string} orderName
     *   A fully-qualified path representing Order resource.
     * @returns {string} A string representing the order.
     */
    matchOrderFromOrderName(orderName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
