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

import {paginator} from '@google-cloud/paginator';
import {replaceProjectIdToken} from '@google-cloud/projectify';
import * as extend from 'extend';
import {GoogleAuth} from 'google-auth-library';
import * as gax from 'google-gax';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const PKG = require('../../package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const v1 = require('./v1');

import {promisifySome} from './util';
import {
  Schema,
  SchemaType,
  ICreateSchemaRequest,
  SchemaViews,
  ISchema,
  SchemaView,
} from './schema';
import {Snapshot} from './snapshot';
import {
  Subscription,
  SubscriptionMetadata,
  SubscriptionOptions,
  CreateSubscriptionOptions,
  CreateSubscriptionCallback,
  CreateSubscriptionResponse,
  DetachSubscriptionCallback,
  DetachSubscriptionResponse,
} from './subscription';
import {
  Topic,
  GetTopicSubscriptionsCallback,
  GetTopicSubscriptionsResponse,
  CreateTopicCallback,
  CreateTopicResponse,
  TopicMetadata,
} from './topic';
import {PublishOptions} from './publisher';
import {CallOptions} from 'google-gax';
import {Transform} from 'stream';
import {google} from '../protos/protos';
import {SchemaServiceClient} from './v1';
import * as tracing from './telemetry-tracing';

/**
 * Project ID placeholder.
 * @type {string}
 * @private
 */
const PROJECT_ID_PLACEHOLDER = '{{projectId}}';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ClientConfig extends gax.GrpcClientOptions {
  apiEndpoint?: string;

  /**
   * Configures the emulator mode behaviour:
   * - If false, disable emulator mode always
   * - If true, enable emulator mode always
   * - If unset, use heuristics to decide
   * Emulator mode notably sets insecure SSL authentication so that you can
   * try the library out without needing a cert.
   *
   * Also notably, if a TPC universeDomain is set, then this will be counted
   * as !emulatorMode for the purposes of the heuristics. If you want emulator
   * mode but with a TPC universe domain set, set this to true as well.
   */
  emulatorMode?: boolean;

  servicePath?: string;
  port?: string | number;
  sslCreds?: gax.grpc.ChannelCredentials;

  /**
   * Enables OpenTelemetry tracing (newer, more full implementation). This
   * defaults to false/undefined
   */
  enableOpenTelemetryTracing?: boolean;
}

export interface PageOptions {
  gaxOpts?: CallOptions;
  pageSize?: number;
  pageToken?: string;
  autoPaginate?: boolean;
}

export type GetSnapshotsCallback = RequestCallback<
  Snapshot,
  google.pubsub.v1.IListSnapshotsResponse
>;

export type GetSnapshotsResponse = PagedResponse<
  Snapshot,
  google.pubsub.v1.IListSnapshotsResponse
>;

export type GetSubscriptionsOptions = PageOptions & {topic?: string | Topic};

type GetAllSubscriptionsCallback = RequestCallback<
  Subscription,
  google.pubsub.v1.IListSubscriptionsResponse
>;

type GetAllSubscriptionsResponse = PagedResponse<
  Subscription,
  google.pubsub.v1.IListSubscriptionsResponse
>;

export type GetSubscriptionsCallback =
  | GetAllSubscriptionsCallback
  | GetTopicSubscriptionsCallback;

export type GetSubscriptionsResponse =
  | GetAllSubscriptionsResponse
  | GetTopicSubscriptionsResponse;

export type GetTopicsCallback = RequestCallback<
  Topic,
  google.pubsub.v1.IListTopicsResponse
>;

export type GetTopicsResponse = PagedResponse<
  Topic,
  google.pubsub.v1.IListTopicsResponse
>;

export type EmptyCallback = RequestCallback<google.protobuf.IEmpty>;
export type EmptyResponse = [google.protobuf.IEmpty];

export type ExistsCallback = RequestCallback<boolean>;
export type ExistsResponse = [boolean];

export type DetachedCallback = RequestCallback<boolean>;
export type DetachedResponse = [boolean];

export interface GetClientConfig {
  client: 'PublisherClient' | 'SubscriberClient';
}

export interface RequestConfig extends GetClientConfig {
  method: string;
  reqOpts?: object;
  gaxOpts?: CallOptions;
}

export interface ResourceCallback<Resource, Response> {
  (
    err: gax.grpc.ServiceError | null,
    resource?: Resource | null,
    response?: Response | null,
  ): void;
}

export type RequestCallback<T, R = void> = R extends void
  ? NormalCallback<T>
  : PagedCallback<T, R>;

export interface NormalCallback<TResponse> {
  (err: gax.grpc.ServiceError | null, res?: TResponse | null): void;
}

export interface PagedCallback<Item, Response> {
  (
    err: gax.grpc.ServiceError | null,
    results?: Item[] | null,
    nextQuery?: {} | null,
    response?: Response | null,
  ): void;
}

export type PagedResponse<Item, Response> =
  | [Item[]]
  | [Item[], {} | null, Response];

export type ObjectStream<O> = {
  addListener(event: 'data', listener: (data: O) => void): ObjectStream<O>;
  emit(event: 'data', data: O): boolean;
  on(event: 'data', listener: (data: O) => void): ObjectStream<O>;
  once(event: 'data', listener: (data: O) => void): ObjectStream<O>;
  prependListener(event: 'data', listener: (data: O) => void): ObjectStream<O>;
  prependOnceListener(
    event: 'data',
    listener: (data: O) => void,
  ): ObjectStream<O>;
} & Transform;

interface GetClientCallback {
  (err: Error | null, gaxClient?: gax.ClientStub): void;
}

/**
 * @typedef {object} ClientConfig
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link
 * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
 * Application Default Credentials}, your project ID will be detected
 * automatically.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [apiEndpoint] The `apiEndpoint` from options will set the
 *     host. If not set, the `PUBSUB_EMULATOR_HOST` environment variable from the
 *     gcloud SDK is honored. We also check the `CLOUD_API_ENDPOINT_OVERRIDES_PUBSUB`
 *     environment variable used by `gcloud alpha pubsub`. Otherwise the actual API
 *     endpoint will be used. Note that if the URL doesn't end in '.googleapis.com',
 *     we will assume that it's an emulator and disable strict SSL checks.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 */
/**
 * [Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Cloud
 * Platform.
 *
 * @class
 *
 * @see [Cloud Pub/Sub overview]{@link https://developers.google.com/pubsub/overview}
 *
 * @param {ClientConfig} [options] Configuration options.
 *
 * @example Import the client library
 * ```
 * const {PubSub} = require('@google-cloud/pubsub');
 *
 * ```
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const pubsub = new PubSub();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const pubsub = new PubSub({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:pubsub_quickstart_create_topic
 * Full quickstart example:
 */
export class PubSub {
  options: ClientConfig;
  isEmulator: boolean;
  api: {[key: string]: gax.ClientStub};
  auth: GoogleAuth;
  projectId: string;
  name?: string;
  // tslint:disable-next-line variable-name
  Promise?: PromiseConstructor;
  getSubscriptionsStream = paginator.streamify(
    'getSubscriptions',
  ) as () => ObjectStream<Subscription>;
  getSnapshotsStream = paginator.streamify(
    'getSnapshots',
  ) as () => ObjectStream<Snapshot>;
  getTopicsStream = paginator.streamify(
    'getTopics',
  ) as () => ObjectStream<Topic>;
  isOpen = true;

  private schemaClient?: SchemaServiceClient;

  constructor(options?: ClientConfig) {
    // Needed for potentially large responses that may come from using exactly-once delivery,
    // as well as trying to work around silent connection failures.
    //
    // These will get passed down to grpc client objects. User values will overwrite these.
    const grpcDefaults = {
      'grpc.max_metadata_size': 4 * 1024 * 1024, // 4 MiB
      'grpc.keepalive_time_ms': 300000, // 5 minutes
      'grpc.keepalive_timeout_ms': 20000, // 20 seconds
    };
    options = Object.assign(grpcDefaults, options || {});

    // Determine what scopes are needed.
    // It is the union of the scopes on both clients.
    const clientClasses = [v1.SubscriberClient, v1.PublisherClient];
    const allScopes: {[key: string]: boolean} = {};
    for (const clientClass of clientClasses) {
      for (const scope of clientClass.scopes) {
        allScopes[scope] = true;
      }
    }

    this.options = Object.assign(
      {
        libName: 'gccl',
        libVersion: PKG.version,
        scopes: Object.keys(allScopes),
      },
      options,
    );

    if (this.options.enableOpenTelemetryTracing) {
      tracing.setGloballyEnabled(true);
    }

    /**
     * @name PubSub#isEmulator
     * @type {boolean}
     */
    this.isEmulator = false;
    this.determineBaseUrl_();
    this.api = {};
    this.auth = new GoogleAuth(this.options);
    this.projectId = this.options.projectId || PROJECT_ID_PLACEHOLDER;
    if (this.projectId !== PROJECT_ID_PLACEHOLDER) {
      this.name = PubSub.formatName_(this.projectId);
    }
  }

  /**
   * Returns true if we have actually resolved the full project name.
   *
   * @returns {boolean} true if the name is resolved.
   */
  get isIdResolved(): boolean {
    return this.projectId.indexOf(PROJECT_ID_PLACEHOLDER) < 0;
  }

  /**
   * Closes the PubSub client, releasing any underlying gRPC connections.
   *
   * Note that once you close a PubSub object, it may not be used again. Any pending
   * operations (e.g. queued publish messages) will fail. If you have topic or
   * subscription objects that may have pending operations, you should call close()
   * on those first if you want any pending messages to be delivered correctly. The
   * PubSub class doesn't track those.

   * Note that this method primarily closes the gRPC clients (Publisher and Subscriber)
   * used for API requests. It does **not** automatically handle the graceful shutdown
   * of active subscriptions.
   *
   * For graceful shutdown of subscriptions with specific timeout behavior (e.g.,
   * ensuring buffered messages are nacked before closing), please refer to the
   * {@link Subscription#close} method. It is recommended to call
   * `Subscription.close({timeout: ...})` directly on your active `Subscription`
   * objects *before* calling `PubSub.close()` if you require that specific
   * shutdown behavior.
   *
   * Calling `PubSub.close()` without first closing active subscriptions might
   * result in abrupt termination of message processing for those subscriptions.
   * Any pending operations on associated Topic or Subscription objects (e.g.,
   * queued publish messages or unacked subscriber messages) may fail after
   * `PubSub.close()` is called.
   *
   * @callback EmptyCallback
   * @param {Error} [err] Request error, if any.
   * @returns {Promise<void>} Resolves when the clients are closed.
   */
  close(): Promise<void>;
  close(callback: EmptyCallback): void;
  close(callback?: EmptyCallback): Promise<void> | void {
    const definedCallback = callback || (() => {});
    if (this.isOpen) {
      this.isOpen = false;
      this.closeAllClients_()
        .then(() => this.schemaClient?.close())
        .then(() => {
          definedCallback(null);
        })
        .catch(definedCallback);
    } else {
      definedCallback(null);
    }
  }

  /**
   * Create a schema in the project.
   *
   * @see [Schemas: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.schemas/create}
   * @see {@link Schema#create}
   *
   * @throws {Error} If a schema ID or name is not provided.
   * @throws {Error} If an invalid SchemaType is provided.
   * @throws {Error} If an invalid schema definition is provided.
   *
   * @param {string} schemaId The name or ID of the subscription.
   * @param {SchemaType} type The type of the schema (Protobuf, Avro, etc).
   * @param {string} definition The text describing the schema in terms of the type.
   * @param {object} [options] Request configuration options, outlined
   *   here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @returns {Promise<Schema>}
   *
   * @example Create a schema.
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * await pubsub.createSchema(
   *   'messageType',
   *   SchemaTypes.Avro,
   *   '{...avro definition...}'
   * );
   * ```
   */
  async createSchema(
    schemaId: string,
    type: SchemaType,
    definition: string,
    gaxOpts?: CallOptions,
  ): Promise<Schema> {
    // This populates projectId for us.
    await this.getClientConfig();

    const schemaName = Schema.formatName_(this.projectId, schemaId);
    const request: ICreateSchemaRequest = {
      parent: this.name,
      schemaId,
      schema: {
        name: schemaName,
        type,
        definition,
      },
    };

    const client = await this.getSchemaClient();
    await client.createSchema(request, gaxOpts);
    return new Schema(this, schemaName);
  }

  /**
   * @typedef {array} CreateSubscriptionResponse
   * @property {Subscription} 0 The new {@link Subscription}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateSubscriptionCallback
   * @param {?Error} err Request error, if any.
   * @param {Subscription} Subscription
   * @param {object} apiResponse The full API response.
   */
  /**
   * Options for creating a subscription.
   *
   * See a [Subscription
   * resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions).
   *
   * @typedef {object} CreateSubscriptionRequest
   * @property {DeadLetterPolicy} [deadLetterPolicy] A policy that specifies the
   *     conditions for dead lettering messages in this subscription.
   * @property {object} [flowControl] Flow control configurations for
   *     receiving messages. Note that these options do not persist across
   *     subscription instances.
   * @property {number} [flowControl.maxBytes] The maximum number of bytes
   *     in un-acked messages to allow before the subscription pauses incoming
   *     messages. Defaults to 20% of free memory.
   * @property {number} [flowControl.maxMessages=Infinity] The maximum number
   *     of un-acked messages to allow before the subscription pauses incoming
   *     messages.
   * @property {object} [gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @property {number|google.protobuf.Duration} [messageRetentionDuration] Set
   *     this to override the default duration of 7 days. This value is expected
   *     in seconds. Acceptable values are in the range of 10 minutes and 7
   *     days.
   * @property {string} [pushEndpoint] A URL to a custom endpoint that
   *     messages should be pushed to.
   * @property {object} [oidcToken] If specified, Pub/Sub will generate and
   *     attach an OIDC JWT token as an `Authorization` header in the HTTP
   *     request for every pushed message. This object should have the same
   *     structure as [OidcToken]{@link google.pubsub.v1.OidcToken}
   * @property {boolean} [retainAckedMessages=false] If set, acked messages
   *     are retained in the subscription's backlog for the length of time
   *     specified by `options.messageRetentionDuration`.
   * @property {ExpirationPolicy} [expirationPolicy] A policy that specifies
   *     the conditions for this subscription's expiration.
   */
  /**
   * Create a subscription to a topic.
   *
   * @see [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/create}
   * @see {@link Topic#createSubscription}
   *
   * @throws {Error} If a Topic instance or topic name is not provided.
   * @throws {Error} If a subscription name is not provided.
   *
   * @param {Topic|string} topic The Topic to create a subscription to.
   * @param {string} name The name of the subscription.
   * @param {CreateSubscriptionRequest} [options] See a [Subscription resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions).
   * @param {CreateSubscriptionCallback} [callback] Callback function.
   * @returns {Promise<CreateSubscriptionResponse>}
   *
   * @example Subscribe to a topic.
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * const topic = 'messageCenter';
   * const name = 'newMessages';
   *
   * const callback = function(err, subscription, apiResponse) {};
   *
   * pubsub.createSubscription(topic, name, callback);
   *
   * ```
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * pubsub.createSubscription(topic, name)
   *   .then(function(data) {
   *     const subscription = data[0];
   *     const apiResponse = data[1];
   *   });
   * ```
   */
  createSubscription(
    topic: Topic | string,
    name: string,
    options?: CreateSubscriptionOptions,
  ): Promise<CreateSubscriptionResponse>;
  createSubscription(
    topic: Topic | string,
    name: string,
    callback: CreateSubscriptionCallback,
  ): void;
  createSubscription(
    topic: Topic | string,
    name: string,
    options: CreateSubscriptionOptions,
    callback: CreateSubscriptionCallback,
  ): void;
  createSubscription(
    topic: Topic | string,
    name: string,
    optionsOrCallback?: CreateSubscriptionOptions | CreateSubscriptionCallback,
    callback?: CreateSubscriptionCallback,
  ): Promise<CreateSubscriptionResponse> | void {
    if (typeof topic !== 'string' && !(topic instanceof Topic)) {
      throw new Error('A Topic is required for a new subscription.');
    }
    if (typeof name !== 'string') {
      throw new Error('A subscription name is required.');
    }
    if (typeof topic === 'string') {
      topic = this.topic(topic);
    }
    let options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as CreateSubscriptionOptions);
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    // Make a deep copy of options to not pollute caller object.
    options = extend(true, {}, options);

    const gaxOpts = options.gaxOpts;
    const flowControl = options.flowControl;
    delete options.gaxOpts;
    delete options.flowControl;

    const metadata = Subscription.formatMetadata_(
      options as SubscriptionMetadata,
    );

    let subscriptionCtorOptions = flowControl ? {flowControl} : {};
    subscriptionCtorOptions = Object.assign(subscriptionCtorOptions, metadata);
    const subscription = this.subscription(name, subscriptionCtorOptions);

    const reqOpts = Object.assign(metadata, {
      topic: topic.name,
      name: subscription.name,
    });

    this.request<google.pubsub.v1.ISubscription>(
      {
        client: 'SubscriberClient',
        method: 'createSubscription',
        reqOpts,
        gaxOpts,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }
        subscription.metadata = resp!;

        callback!(null, subscription, resp!);
      },
    );
  }

  /**
   * @typedef {array} CreateTopicResponse
   * @property {Topic} 0 The new {@link Topic}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateTopicCallback
   * @param {?Error} err Request error, if any.
   * @param {Topic} topic The new {@link Topic}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a topic with the given name.
   *
   * @see [Topics: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/create}
   *
   * @param {string} name Name of the topic.
   * @param {object} [gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @param {CreateTopicCallback} [callback] Callback function.
   * @returns {Promise<CreateTopicResponse>}
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * pubsub.createTopic('my-new-topic', function(err, topic, apiResponse) {
   *   if (!err) {
   *     // The topic was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * pubsub.createTopic('my-new-topic').then(function(data) {
   *   const topic = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  createTopic(
    name: string | TopicMetadata,
    gaxOpts?: CallOptions,
  ): Promise<CreateTopicResponse>;
  createTopic(
    name: string | TopicMetadata,
    callback: CreateTopicCallback,
  ): void;
  createTopic(
    name: string | TopicMetadata,
    gaxOpts: CallOptions,
    callback: CreateTopicCallback,
  ): void;
  createTopic(
    name: string | TopicMetadata,
    optsOrCallback?: CallOptions | CreateTopicCallback,
    callback?: CreateTopicCallback,
  ): Promise<CreateTopicResponse> | void {
    const reqOpts: TopicMetadata =
      typeof name === 'string'
        ? {
            name,
          }
        : name;

    // We don't allow a blank name, but this will let topic() handle that case.
    const topic = this.topic(reqOpts.name || '');

    // Topic#constructor might have canonicalized the name.
    reqOpts.name = topic.name;

    const gaxOpts = typeof optsOrCallback === 'object' ? optsOrCallback : {};
    callback = typeof optsOrCallback === 'function' ? optsOrCallback : callback;

    this.request<google.pubsub.v1.ITopic>(
      {
        client: 'PublisherClient',
        method: 'createTopic',
        reqOpts,
        gaxOpts,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }
        topic.metadata = resp!;

        callback!(null, topic, resp!);
      },
    );
  }

  /**
   * Detach a subscription with the given name.
   *
   * @see [Admin: Pub/Sub administration API Documentation]{@link https://cloud.google.com/pubsub/docs/admin}
   *
   * @param {string} name Name of the subscription.
   * @param {object} [gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @param {DetachSubscriptionCallback} [callback] Callback function.
   * @returns {Promise<DetachSubscriptionResponse>}
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * pubsub.detachSubscription('my-sub', (err, topic, apiResponse) => {
   *   if (!err) {
   *     // The topic was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * pubsub.detachSubscription('my-sub').then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  detachSubscription(
    name: string,
    gaxOpts?: CallOptions,
  ): Promise<DetachSubscriptionResponse>;
  detachSubscription(name: string, callback: DetachSubscriptionCallback): void;
  detachSubscription(
    name: string,
    gaxOpts: CallOptions,
    callback: DetachSubscriptionCallback,
  ): void;
  detachSubscription(
    name: string,
    optsOrCallback?: CallOptions | DetachSubscriptionCallback,
    callback?: DetachSubscriptionCallback,
  ): Promise<DetachSubscriptionResponse> | void {
    if (typeof name !== 'string') {
      throw new Error('A subscription name is required.');
    }

    const sub = this.subscription(name);
    const reqOpts = {
      subscription: sub.name,
    };

    const gaxOpts = typeof optsOrCallback === 'object' ? optsOrCallback : {};
    callback = typeof optsOrCallback === 'function' ? optsOrCallback : callback;

    this.request<google.pubsub.v1.IDetachSubscriptionRequest>(
      {
        client: 'PublisherClient',
        method: 'detachSubscription',
        reqOpts,
        gaxOpts: gaxOpts as CallOptions,
      },
      callback!,
    );
  }

  /**
   * Determine the appropriate endpoint to use for API requests, first trying
   * the `apiEndpoint` parameter. If that isn't set, we try the Pub/Sub emulator
   * environment variable (PUBSUB_EMULATOR_HOST). If that is also null, we try
   * the standard `gcloud alpha pubsub` environment variable
   * (CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB). Otherwise the default production
   * API is used.
   *
   * Note that if the URL doesn't end in '.googleapis.com', we will assume that
   * it's an emulator and disable strict SSL checks.
   *
   * @private
   */
  determineBaseUrl_() {
    // We allow an override from the client object options, or from
    // one of these variables. The CLOUDSDK variable is provided for
    // compatibility with the `gcloud alpha` utility.
    const gcloudVarName = 'CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB';
    const emulatorVarName = 'PUBSUB_EMULATOR_HOST';
    const apiEndpoint =
      this.options.apiEndpoint ||
      process.env[emulatorVarName] ||
      process.env[gcloudVarName];
    if (!apiEndpoint) {
      return;
    }

    // Parse the URL into a hostname and port, if possible.
    const leadingProtocol = new RegExp('^https?://');
    const trailingSlashes = new RegExp('(?<!/)/+$');
    const baseUrlParts = apiEndpoint!
      .replace(leadingProtocol, '')
      .replace(trailingSlashes, '')
      .split(':');
    this.options.servicePath = baseUrlParts[0];
    if (!baseUrlParts[1]) {
      // No port was given -- figure it out from the protocol.
      if (apiEndpoint!.startsWith('https')) {
        this.options.port = 443;
      } else if (apiEndpoint!.startsWith('http')) {
        this.options.port = 80;
      } else {
        this.options.port = undefined;
      }
    } else {
      this.options.port = parseInt(baseUrlParts[1], 10);
    }

    // If this looks like a GCP URL of some kind, don't go into emulator
    // mode. Otherwise, supply a fake SSL provider so a real cert isn't
    // required for running the emulator.
    //
    // Note that users can provide their own URL here, especially with
    // TPC, so the emulatorMode flag lets them override this behaviour.
    const officialUrlMatch =
      this.options.servicePath!.endsWith('.googleapis.com') ||
      this.options.universeDomain;
    if (
      (!officialUrlMatch && this.options.emulatorMode !== false) ||
      this.options.emulatorMode === true
    ) {
      const grpcInstance = this.options.grpc || gax.grpc;
      this.options.sslCreds = grpcInstance.credentials.createInsecure();
      this.isEmulator = true;
    }

    if (!this.options.projectId && process.env.PUBSUB_PROJECT_ID) {
      this.options.projectId = process.env.PUBSUB_PROJECT_ID;
    }
  }

  /**
   * Get a list of schemas associated with your project.
   *
   * The returned AsyncIterable will resolve to {@link google.pubsub.v1.ISchema} objects.
   *
   * This method returns an async iterable. These objects can be adapted
   * to work in a Promise/then framework, as well as with callbacks, but
   * this discussion is considered out of scope for these docs.
   *
   * @see [Schemas: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.schemas/list}
   * @see [More about async iterators]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of}
   *
   * @param {google.pubsub.v1.SchemaView} [view] The type of schema objects
   *   requested, which should be an enum value from {@link SchemaViews}. Defaults
   *   to Full.
   * @param {object} [options] Request configuration options, outlined
   *   here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @returns {AsyncIterable<ISchema>}
   *
   * @example
   * ```
   * for await (const s of pubsub.listSchemas()) {
   *   const moreInfo = await s.get();
   * }
   * ```
   */
  async *listSchemas(
    view: SchemaView = SchemaViews.Basic,
    options?: CallOptions,
  ): AsyncIterable<google.pubsub.v1.ISchema> {
    const client = await this.getSchemaClient();
    const query = {
      parent: this.name,
      view,
    };

    for await (const s of client.listSchemasAsync(query, options)) {
      yield s;
    }
  }

  /**
   * Query object for listing snapshots.
   *
   * @typedef {object} GetSnapshotsRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {object} [options.gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @property {number} [options.pageSize] Maximum number of results to return.
   * @property {string} [options.pageToken] Page token.
   */
  /**
   * @typedef {array} GetSnapshotsResponse
   * @property {Snapshot[]} 0 Array of {@link Snapshot} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetSnapshotsCallback
   * @param {?Error} err Request error, if any.
   * @param {Snapshot[]} snapshots Array of {@link Snapshot} instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a list of snapshots.
   *
   * @param {GetSnapshotsRequest} [query] Query object for listing snapshots.
   * @param {GetSnapshotsCallback} [callback] Callback function.
   * @returns {Promise<GetSnapshotsResponse>}
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * pubsub.getSnapshots(function(err, snapshots) {
   *   if (!err) {
   *     // snapshots is an array of Snapshot objects.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * pubsub.getSnapshots().then(function(data) {
   *   const snapshots = data[0];
   * });
   * ```
   */
  getSnapshots(options?: PageOptions): Promise<GetSnapshotsResponse>;
  getSnapshots(callback: GetSnapshotsCallback): void;
  getSnapshots(options: PageOptions, callback: GetSnapshotsCallback): void;
  getSnapshots(
    optsOrCallback?: PageOptions | GetSnapshotsCallback,
    callback?: GetSnapshotsCallback,
  ): void | Promise<GetSnapshotsResponse> {
    const options = typeof optsOrCallback === 'object' ? optsOrCallback : {};
    callback = typeof optsOrCallback === 'function' ? optsOrCallback : callback;

    const reqOpts = Object.assign(
      {
        project: PubSub.formatName_(this.projectId),
      },
      options,
    );

    delete reqOpts.gaxOpts;
    delete reqOpts.autoPaginate;

    const gaxOpts = Object.assign(
      {
        autoPaginate: options.autoPaginate,
      },
      options.gaxOpts,
    );

    this.request<
      google.pubsub.v1.ISnapshot,
      google.pubsub.v1.IListSnapshotsResponse
    >(
      {
        client: 'SubscriberClient',
        method: 'listSnapshots',
        reqOpts,
        gaxOpts,
      },
      (err, rawSnapshots, ...args) => {
        let snapshots: Snapshot[];

        if (rawSnapshots) {
          snapshots = rawSnapshots.map(
            (snapshot: google.pubsub.v1.ISnapshot) => {
              const snapshotInstance = this.snapshot(snapshot.name!);
              snapshotInstance.metadata = snapshot;
              return snapshotInstance;
            },
          );
        }

        callback!(err, snapshots!, ...args);
      },
    );
  }

  /**
   * Query object for listing subscriptions.
   *
   * @typedef {object} GetSubscriptionsRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {object} [options.gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @property {number} [options.pageSize] Maximum number of results to return.
   * @property {string} [options.pageToken] Page token.
   * @param {string|Topic} options.topic - The name of the topic to
   *     list subscriptions from.
   */
  /**
   * @typedef {array} GetSubscriptionsResponse
   * @property {Subscription[]} 0 Array of {@link Subscription} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetSubscriptionsCallback
   * @param {?Error} err Request error, if any.
   * @param {Subscription[]} subscriptions Array of {@link Subscription} instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a list of the subscriptions registered to all of your project's topics.
   * You may optionally provide a query object as the first argument to
   * customize the response.
   *
   * Your provided callback will be invoked with an error object if an API error
   * occurred or an array of {@link Subscription} objects.
   *
   * To get subscriptions for a topic, see {@link Topic}.
   *
   * @see [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/list}
   *
   * @param {GetSubscriptionsRequest} [query] Query object for listing subscriptions.
   * @param {GetSubscriptionsCallback} [callback] Callback function.
   * @returns {Promise<GetSubscriptionsResponse>}
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * pubsub.getSubscriptions(function(err, subscriptions) {
   *   if (!err) {
   *     // subscriptions is an array of Subscription objects.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * pubsub.getSubscriptions().then(function(data) {
   *   const subscriptions = data[0];
   * });
   * ```
   */
  getSubscriptions(
    options?: GetSubscriptionsOptions,
  ): Promise<GetSubscriptionsResponse>;
  getSubscriptions(callback: GetSubscriptionsCallback): void;
  getSubscriptions(
    options: GetSubscriptionsOptions,
    callback: GetSubscriptionsCallback,
  ): void;
  getSubscriptions(
    optsOrCallback?: GetSubscriptionsOptions | GetSubscriptionsCallback,
    callback?: GetSubscriptionsCallback,
  ): void | Promise<GetSubscriptionsResponse> {
    const options = typeof optsOrCallback === 'object' ? optsOrCallback : {};
    callback = typeof optsOrCallback === 'function' ? optsOrCallback : callback;

    let topic = options.topic;
    if (topic) {
      if (!(topic instanceof Topic)) {
        topic = this.topic(topic);
      }
      return topic.getSubscriptions(
        options,
        callback as GetTopicSubscriptionsCallback,
      );
    }
    const reqOpts = Object.assign(
      {},
      options,
    ) as google.pubsub.v1.IListSubscriptionsRequest;
    reqOpts.project = 'projects/' + this.projectId;

    delete (reqOpts as GetSubscriptionsOptions).gaxOpts;
    delete (reqOpts as GetSubscriptionsOptions).autoPaginate;

    const gaxOpts = Object.assign(
      {
        autoPaginate: options.autoPaginate,
      },
      options.gaxOpts,
    );

    this.request<
      google.pubsub.v1.ISubscription,
      google.pubsub.v1.IListSubscriptionsResponse
    >(
      {
        client: 'SubscriberClient',
        method: 'listSubscriptions',
        reqOpts,
        gaxOpts,
      },
      (err, rawSubs, ...args) => {
        let subscriptions: Subscription[];

        if (rawSubs) {
          subscriptions = rawSubs.map((sub: google.pubsub.v1.ISubscription) => {
            const subscriptionInstance = this.subscription(sub.name!);
            subscriptionInstance.metadata = sub;
            return subscriptionInstance;
          });
        }

        (callback as GetAllSubscriptionsCallback)(err, subscriptions!, ...args);
      },
    );
  }

  /**
   * Query object for listing topics.
   *
   * @typedef {object} GetTopicsRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {object} [options.gaxOpts] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @property {number} [options.pageSize] Maximum number of results to return.
   * @property {string} [options.pageToken] Page token.
   */
  /**
   * @typedef {array} GetTopicsResponse
   * @property {Topic[]} 0 Array of {@link Topic} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetTopicsCallback
   * @param {?Error} err Request error, if any.
   * @param {Topic[]} topics Array of {@link Topic} instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a list of the topics registered to your project. You may optionally
   * provide a query object as the first argument to customize the response.
   *
   * @see [Topics: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/list}
   *
   * @param {GetTopicsRequest} [query] Query object for listing topics.
   * @param {GetTopicsCallback} [callback] Callback function.
   * @returns {Promise<GetTopicsResponse>}
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * pubsub.getTopics(function(err, topics) {
   *   if (!err) {
   *     // topics is an array of Topic objects.
   *   }
   * });
   *
   * //-
   * // Customize the query.
   * //-
   * pubsub.getTopics({
   *   pageSize: 3
   * }, function(err, topics) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * pubsub.getTopics().then(function(data) {
   *   const topics = data[0];
   * });
   * ```
   */
  getTopics(options?: PageOptions): Promise<GetTopicsResponse>;
  getTopics(callback: GetTopicsCallback): void;
  getTopics(options: PageOptions, callback: GetTopicsCallback): void;
  getTopics(
    optsOrCallback?: PageOptions | GetTopicsCallback,
    callback?: GetTopicsCallback,
  ): void | Promise<GetTopicsResponse> {
    const options = typeof optsOrCallback === 'object' ? optsOrCallback : {};
    callback = typeof optsOrCallback === 'function' ? optsOrCallback : callback;

    const reqOpts = Object.assign(
      {
        project: 'projects/' + this.projectId,
      },
      options,
    );

    delete reqOpts.gaxOpts;
    delete reqOpts.autoPaginate;

    const gaxOpts = Object.assign(
      {
        autoPaginate: options.autoPaginate,
      },
      options.gaxOpts,
    );

    this.request<google.pubsub.v1.Topic, google.pubsub.v1.IListTopicsResponse>(
      {
        client: 'PublisherClient',
        method: 'listTopics',
        reqOpts,
        gaxOpts,
      },
      (err, rawTopics, ...args) => {
        let topics: Topic[];

        if (rawTopics) {
          topics = rawTopics.map(topic => {
            const topicInstance = this.topic(topic.name);
            topicInstance.metadata = topic;
            return topicInstance;
          });
        }

        callback!(err, topics!, ...args);
      },
    );
  }

  /**
   * Retrieve a client configuration, suitable for passing into a GAPIC
   * 'v1' class constructor. This will fill out projectId, emulator URLs,
   * and so forth.
   *
   * @returns {Promise<ClientConfig>} the filled client configuration.
   */
  async getClientConfig(): Promise<ClientConfig> {
    if (!this.projectId || this.projectId === PROJECT_ID_PLACEHOLDER) {
      let projectId;

      try {
        projectId = await this.auth.getProjectId();
      } catch (e) {
        if (!this.isEmulator) {
          throw e;
        }
        projectId = '';
      }

      this.projectId = projectId!;
      this.name = PubSub.formatName_(this.projectId);
      this.options.projectId = projectId!;
    }

    return this.options;
  }

  /**
   * Gets a schema client, creating one if needed. This is a shortcut for
   * `new v1.SchemaServiceClient(await pubsub.getClientConfig())`.
   *
   * @returns {Promise<SchemaServiceClient>}
   */
  async getSchemaClient(): Promise<SchemaServiceClient> {
    if (!this.schemaClient) {
      const options = await this.getClientConfig();
      this.schemaClient = new v1.SchemaServiceClient(options);
    }

    return this.schemaClient!;
  }

  /**
   * Callback function to PubSub.getClient_().
   * @private
   * @callback GetClientCallback
   * @param err - Error, if any.
   * @param gaxClient - The gax client specified in RequestConfig.client.
   *                    Typed any since it's importing Javascript source.
   */
  /**
   * Get the PubSub client object.
   *
   * @private
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @param {function} [callback] The callback function.
   */
  getClient_(config: GetClientConfig, callback: GetClientCallback) {
    this.getClientAsync_(config).then(
      client => callback(null, client),
      callback,
    );
  }
  /**
   * Get the PubSub client object.
   *
   * @private
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @returns {Promise}
   */
  async getClientAsync_(config: GetClientConfig): Promise<gax.ClientStub> {
    // Make sure we've got a fully created config with projectId and such.
    const options = await this.getClientConfig();

    let gaxClient = this.api[config.client];

    if (!gaxClient) {
      // Lazily instantiate client.
      gaxClient = new v1[config.client](options) as gax.ClientStub;
      this.api[config.client] = gaxClient;
    }

    return gaxClient;
  }
  /**
   * Close all open client objects.
   *
   * @private
   *
   * @returns {Promise}
   */
  async closeAllClients_(): Promise<void> {
    const promises = [];
    for (const clientConfig of Object.keys(this.api)) {
      const gaxClient = this.api[clientConfig];
      promises.push(gaxClient.close());
      delete this.api[clientConfig];
    }

    await Promise.all(promises);
  }
  /**
   * Funnel all API requests through this method, to be sure we have a project
   * ID.
   *
   * @private
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @param {function} [callback] The callback function.
   */
  request<T, R = void>(config: RequestConfig, callback: RequestCallback<T, R>) {
    // This prevents further requests, in case any publishers were hanging around.
    if (!this.isOpen) {
      const statusObject = {
        code: 0,
        details: 'Cannot use a closed PubSub object.',
        metadata: null,
      };
      const err = new Error(statusObject.details);
      Object.assign(err, statusObject);
      callback(err as gax.grpc.ServiceError);
      return;
    }

    this.getClient_(config, (err, client) => {
      if (err) {
        callback(err as gax.grpc.ServiceError);
        return;
      }
      let reqOpts = extend(true, {}, config.reqOpts);
      reqOpts = replaceProjectIdToken(reqOpts, this.projectId);
      client![config.method](reqOpts, config.gaxOpts, callback);
    });
  }

  /**
   * Create a Schema object, representing a schema within the project.
   * See {@link PubSub#createSchema} or {@link Schema#create} to create a schema.
   *
   * @throws {Error} If a name is not provided.
   *
   * @param {string} name The ID or name of the schema.
   * @returns {Schema} A {@link Schema} instance.
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * const schema = pubsub.schema('my-schema');
   * ```
   */
  schema(idOrName: string): Schema {
    return new Schema(this, idOrName);
  }

  /**
   * Create a Snapshot object. See {@link Subscription#createSnapshot} to
   * create a snapshot.
   *
   * @throws {Error} If a name is not provided.
   *
   * @param {string} name The name of the snapshot.
   * @returns {Snapshot} A {@link Snapshot} instance.
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * const snapshot = pubsub.snapshot('my-snapshot');
   * ```
   */
  snapshot(name: string): Snapshot {
    if (typeof name !== 'string') {
      throw new Error('You must supply a valid name for the snapshot.');
    }
    return new Snapshot(this, name);
  }
  /**
   * Create a Subscription object. This command by itself will not run any API
   * requests. You will receive a {@link Subscription} object,
   * which will allow you to interact with a subscription.
   *
   * @throws {Error} If subscription name is omitted.
   *
   * @param {string} name Name of the subscription.
   * @param {SubscriberOptions} [options] Configuration object.
   * @returns {Subscription} A {@link Subscription} instance.
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * const subscription = pubsub.subscription('my-subscription');
   *
   * // Register a listener for `message` events.
   * subscription.on('message', function(message) {
   *   // Called every time a message is received.
   *   // message.id = ID of the message.
   *   // message.ackId = ID used to acknowledge the message receival.
   *   // message.data = Contents of the message.
   *   // message.attributes = Attributes of the message.
   *   // message.publishTime = Date when Pub/Sub received the message.
   * });
   * ```
   */
  subscription(name: string, options?: SubscriptionOptions): Subscription {
    if (!name) {
      throw new Error('A name must be specified for a subscription.');
    }
    return new Subscription(this, name, options);
  }
  /**
   * Create a Topic object. See {@link PubSub#createTopic} to create a topic.
   *
   * @throws {Error} If a name is not provided.
   *
   * @param {string} name The name of the topic.
   * @param {PublishOptions} [options] Publisher configuration object.
   * @returns {Topic} A {@link Topic} instance.
   *
   * @example
   * ```
   * const {PubSub} = require('@google-cloud/pubsub');
   * const pubsub = new PubSub();
   *
   * const topic = pubsub.topic('my-topic');
   * ```
   */
  topic(name: string, options?: PublishOptions): Topic {
    if (!name) {
      throw new Error('A name must be specified for a topic.');
    }
    return new Topic(this, name, options);
  }

  /**
   * Validate a schema definition.
   *
   * @see [Schemas: validateSchema API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.schemas/validate}
   *
   * @throws {Error} if the validation fails.
   *
   * @param {ISchema} schema The schema definition you wish to validate.
   * @param {object} [options] Request configuration options, outlined
   *   here: https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html.
   * @returns {Promise<void>}
   */
  async validateSchema(schema: ISchema, gaxOpts?: CallOptions): Promise<void> {
    const client = await this.getSchemaClient();
    await client.validateSchema(
      {
        parent: this.name,
        schema,
      },
      gaxOpts,
    );
  }

  /*!
   * Format the name of a project. A project's full name is in the
   * format of projects/{projectId}.
   *
   * The GAPIC client should do this for us, but since we maintain
   * names rather than IDs, this is simpler.
   *
   * @private
   */
  static formatName_(name: string): string {
    if (typeof name !== 'string') {
      throw new Error('A name is required to identify a project.');
    }

    // Simple check if the name is already formatted.
    if (name.indexOf('/') > -1) {
      return name;
    }
    return `projects/${name}`;
  }
}

/**
 * Get a list of the {@link Snapshot} objects as a readable object stream.
 *
 * @method PubSub#getSnapshotsStream
 * @param {GetSnapshotsRequest} [options] Configuration object. See
 *     {@link PubSub#getSnapshots} for a complete list of options.
 * @returns {ReadableStream} A readable stream of {@link Snapshot} instances.
 *
 * @example
 * ```
 * const {PubSub} = require('@google-cloud/pubsub');
 * const pubsub = new PubSub();
 *
 * pubsub.getSnapshotsStream()
 *   .on('error', console.error)
 *   .on('data', function(snapshot) {
 *     // snapshot is a Snapshot object.
 *   })
 *   .on('end', function() {
 *     // All snapshots retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * pubsub.getSnapshotsStream()
 *   .on('data', function(snapshot) {
 *     this.end();
 *   });
 * ```
 */

/**
 * Get a list of the {@link Subscription} objects registered to all of
 * your project's topics as a readable object stream.
 *
 * @method PubSub#getSubscriptionsStream
 * @param {GetSubscriptionsRequest} [options] Configuration object. See
 *     {@link PubSub#getSubscriptions} for a complete list of options.
 * @returns {ReadableStream} A readable stream of {@link Subscription} instances.
 *
 * @example
 * ```
 * const {PubSub} = require('@google-cloud/pubsub');
 * const pubsub = new PubSub();
 *
 * pubsub.getSubscriptionsStream()
 *   .on('error', console.error)
 *   .on('data', function(subscription) {
 *     // subscription is a Subscription object.
 *   })
 *   .on('end', function() {
 *     // All subscriptions retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * pubsub.getSubscriptionsStream()
 *   .on('data', function(subscription) {
 *     this.end();
 *   });
 * ```
 */

/**
 * Get a list of the {module:pubsub/topic} objects registered to your project as
 * a readable object stream.
 *
 * @method PubSub#getTopicsStream
 * @param {GetTopicsRequest} [options] Configuration object. See
 *     {@link PubSub#getTopics} for a complete list of options.
 * @returns {ReadableStream} A readable stream of {@link Topic} instances.
 *
 * @example
 * ```
 * const {PubSub} = require('@google-cloud/pubsub');
 * const pubsub = new PubSub();
 *
 * pubsub.getTopicsStream()
 *   .on('error', console.error)
 *   .on('data', function(topic) {
 *     // topic is a Topic object.
 *   })
 *   .on('end', function() {
 *     // All topics retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * pubsub.getTopicsStream()
 *   .on('data', function(topic) {
 *     this.end();
 *   });
 * ```
 */

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(PubSub, ['getSnapshots', 'getSubscriptions', 'getTopics']);

/*! Developer Documentation
 *
 * Existing async methods (except for streams) will return a Promise in the event
 * that a callback is omitted. Future methods will not allow for a callback.
 * (Use .then() on the returned Promise instead.)
 */
promisifySome(PubSub, PubSub.prototype, [
  'close',
  'createSubscription',
  'createTopic',
  'detachSubscription',
  'getSnapshots',
  'getSubscriptions',
  'getTopics',
]);
