/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * A topic resource.
 *
 * @property {string} name
 *   The name of the topic. It must have the format
 *   `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
 *   and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
 *   underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
 *   signs (`%`). It must be between 3 and 255 characters in length, and it
 *   must not start with `"goog"`.
 *
 * @class
 * @see [google.pubsub.v1.Topic definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var Topic = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A message data and its attributes. The message payload must not be empty;
 * it must contain either a non-empty data field, or at least one attribute.
 *
 * @property {string} data
 *   The message payload.
 *
 * @property {Object.<string, string>} attributes
 *   Optional attributes for this message.
 *
 * @property {string} messageId
 *   ID of this message, assigned by the server when the message is published.
 *   Guaranteed to be unique within the topic. This value may be read by a
 *   subscriber that receives a `PubsubMessage` via a `Pull` call or a push
 *   delivery. It must not be populated by the publisher in a `Publish` call.
 *
 * @property {Object} publishTime
 *   The time at which the message was published, populated by the server when
 *   it receives the `Publish` call. It must not be populated by the
 *   publisher in a `Publish` call.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.pubsub.v1.PubsubMessage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PubsubMessage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the GetTopic method.
 *
 * @property {string} topic
 *   The name of the topic to get.
 *   Format is `projects/{project}/topics/{topic}`.
 *
 * @class
 * @see [google.pubsub.v1.GetTopicRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var GetTopicRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the Publish method.
 *
 * @property {string} topic
 *   The messages in the request will be published on this topic.
 *   Format is `projects/{project}/topics/{topic}`.
 *
 * @property {Object[]} messages
 *   The messages to publish.
 *
 *   This object should have the same structure as [PubsubMessage]{@link PubsubMessage}
 *
 * @class
 * @see [google.pubsub.v1.PublishRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PublishRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `Publish` method.
 *
 * @property {string[]} messageIds
 *   The server-assigned ID of each published message, in the same order as
 *   the messages in the request. IDs are guaranteed to be unique within
 *   the topic.
 *
 * @class
 * @see [google.pubsub.v1.PublishResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PublishResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `ListTopics` method.
 *
 * @property {string} project
 *   The name of the cloud project that topics belong to.
 *   Format is `projects/{project}`.
 *
 * @property {number} pageSize
 *   Maximum number of topics to return.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListTopicsResponse`; indicates that this is
 *   a continuation of a prior `ListTopics` call, and that the system should
 *   return the next page of data.
 *
 * @class
 * @see [google.pubsub.v1.ListTopicsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListTopicsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListTopics` method.
 *
 * @property {Object[]} topics
 *   The resulting topics.
 *
 *   This object should have the same structure as [Topic]{@link Topic}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more topics that match the
 *   request; this value should be passed in a new `ListTopicsRequest`.
 *
 * @class
 * @see [google.pubsub.v1.ListTopicsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListTopicsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `ListTopicSubscriptions` method.
 *
 * @property {string} topic
 *   The name of the topic that subscriptions are attached to.
 *   Format is `projects/{project}/topics/{topic}`.
 *
 * @property {number} pageSize
 *   Maximum number of subscription names to return.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListTopicSubscriptionsResponse`; indicates
 *   that this is a continuation of a prior `ListTopicSubscriptions` call, and
 *   that the system should return the next page of data.
 *
 * @class
 * @see [google.pubsub.v1.ListTopicSubscriptionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListTopicSubscriptionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListTopicSubscriptions` method.
 *
 * @property {string[]} subscriptions
 *   The names of the subscriptions that match the request.
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more subscriptions that match
 *   the request; this value should be passed in a new
 *   `ListTopicSubscriptionsRequest` to get more subscriptions.
 *
 * @class
 * @see [google.pubsub.v1.ListTopicSubscriptionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListTopicSubscriptionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `DeleteTopic` method.
 *
 * @property {string} topic
 *   Name of the topic to delete.
 *   Format is `projects/{project}/topics/{topic}`.
 *
 * @class
 * @see [google.pubsub.v1.DeleteTopicRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var DeleteTopicRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A subscription resource.
 *
 * @property {string} name
 *   The name of the subscription. It must have the format
 *   `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
 *   start with a letter, and contain only letters (`[A-Za-z]`), numbers
 *   (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
 *   plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
 *   in length, and it must not start with `"goog"`.
 *
 * @property {string} topic
 *   The name of the topic from which this subscription is receiving messages.
 *   Format is `projects/{project}/topics/{topic}`.
 *   The value of this field will be `_deleted-topic_` if the topic has been
 *   deleted.
 *
 * @property {Object} pushConfig
 *   If push delivery is used with this subscription, this field is
 *   used to configure it. An empty `pushConfig` signifies that the subscriber
 *   will pull and ack messages using API methods.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 *
 * @property {number} ackDeadlineSeconds
 *   This value is the maximum time after a subscriber receives a message
 *   before the subscriber should acknowledge the message. After message
 *   delivery but before the ack deadline expires and before the message is
 *   acknowledged, it is an outstanding message and will not be delivered
 *   again during that time (on a best-effort basis).
 *
 *   For pull subscriptions, this value is used as the initial value for the ack
 *   deadline. To override this value for a given message, call
 *   `ModifyAckDeadline` with the corresponding `ack_id` if using
 *   pull.
 *   The minimum custom deadline you can specify is 10 seconds.
 *   The maximum custom deadline you can specify is 600 seconds (10 minutes).
 *   If this parameter is 0, a default value of 10 seconds is used.
 *
 *   For push delivery, this value is also used to set the request timeout for
 *   the call to the push endpoint.
 *
 *   If the subscriber never acknowledges the message, the Pub/Sub
 *   system will eventually redeliver the message.
 *
 * @property {boolean} retainAckedMessages
 *   Indicates whether to retain acknowledged messages. If true, then
 *   messages are not expunged from the subscription's backlog, even if they are
 *   acknowledged, until they fall out of the `message_retention_duration`
 *   window.
 *
 * @property {Object} messageRetentionDuration
 *   How long to retain unacknowledged messages in the subscription's backlog,
 *   from the moment a message is published.
 *   If `retain_acked_messages` is true, then this also configures the retention
 *   of acknowledged messages, and thus configures how far back in time a `Seek`
 *   can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10
 *   minutes.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @class
 * @see [google.pubsub.v1.Subscription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var Subscription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for a push delivery endpoint.
 *
 * @property {string} pushEndpoint
 *   A URL locating the endpoint to which messages should be pushed.
 *   For example, a Webhook endpoint might use "https://example.com/push".
 *
 * @property {Object.<string, string>} attributes
 *   Endpoint configuration attributes.
 *
 *   Every endpoint has a set of API supported attributes that can be used to
 *   control different aspects of the message delivery.
 *
 *   The currently supported attribute is `x-goog-version`, which you can
 *   use to change the format of the pushed message. This attribute
 *   indicates the version of the data expected by the endpoint. This
 *   controls the shape of the pushed message (i.e., its fields and metadata).
 *   The endpoint version is based on the version of the Pub/Sub API.
 *
 *   If not present during the `CreateSubscription` call, it will default to
 *   the version of the API used to make such call. If not present during a
 *   `ModifyPushConfig` call, its value will not be changed. `GetSubscription`
 *   calls will always return a valid version, even if the subscription was
 *   created without this attribute.
 *
 *   The possible values for this attribute are:
 *
 *   * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API.
 *   * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
 *
 * @class
 * @see [google.pubsub.v1.PushConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PushConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A message and its corresponding acknowledgment ID.
 *
 * @property {string} ackId
 *   This ID can be used to acknowledge the received message.
 *
 * @property {Object} message
 *   The message.
 *
 *   This object should have the same structure as [PubsubMessage]{@link PubsubMessage}
 *
 * @class
 * @see [google.pubsub.v1.ReceivedMessage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ReceivedMessage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the GetSubscription method.
 *
 * @property {string} subscription
 *   The name of the subscription to get.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @class
 * @see [google.pubsub.v1.GetSubscriptionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var GetSubscriptionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the UpdateSubscription method.
 *
 * @property {Object} subscription
 *   The updated subscription object.
 *
 *   This object should have the same structure as [Subscription]{@link Subscription}
 *
 * @property {Object} updateMask
 *   Indicates which fields in the provided subscription to update.
 *   Must be specified and non-empty.
 *
 *   This object should have the same structure as [google.protobuf.FieldMask]{@link external:"google.protobuf.FieldMask"}
 *
 * @class
 * @see [google.pubsub.v1.UpdateSubscriptionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var UpdateSubscriptionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `ListSubscriptions` method.
 *
 * @property {string} project
 *   The name of the cloud project that subscriptions belong to.
 *   Format is `projects/{project}`.
 *
 * @property {number} pageSize
 *   Maximum number of subscriptions to return.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListSubscriptionsResponse`; indicates that
 *   this is a continuation of a prior `ListSubscriptions` call, and that the
 *   system should return the next page of data.
 *
 * @class
 * @see [google.pubsub.v1.ListSubscriptionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListSubscriptionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListSubscriptions` method.
 *
 * @property {Object[]} subscriptions
 *   The subscriptions that match the request.
 *
 *   This object should have the same structure as [Subscription]{@link Subscription}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more subscriptions that match
 *   the request; this value should be passed in a new
 *   `ListSubscriptionsRequest` to get more subscriptions.
 *
 * @class
 * @see [google.pubsub.v1.ListSubscriptionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListSubscriptionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the DeleteSubscription method.
 *
 * @property {string} subscription
 *   The subscription to delete.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @class
 * @see [google.pubsub.v1.DeleteSubscriptionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var DeleteSubscriptionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ModifyPushConfig method.
 *
 * @property {string} subscription
 *   The name of the subscription.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @property {Object} pushConfig
 *   The push configuration for future deliveries.
 *
 *   An empty `pushConfig` indicates that the Pub/Sub system should
 *   stop pushing messages from the given subscription and allow
 *   messages to be pulled and acknowledged - effectively pausing
 *   the subscription if `Pull` is not called.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 *
 * @class
 * @see [google.pubsub.v1.ModifyPushConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ModifyPushConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `Pull` method.
 *
 * @property {string} subscription
 *   The subscription from which messages should be pulled.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @property {boolean} returnImmediately
 *   If this field set to true, the system will respond immediately even if
 *   it there are no messages available to return in the `Pull` response.
 *   Otherwise, the system may wait (for a bounded amount of time) until at
 *   least one message is available, rather than returning no messages. The
 *   client may cancel the request if it does not wish to wait any longer for
 *   the response.
 *
 * @property {number} maxMessages
 *   The maximum number of messages returned for this request. The Pub/Sub
 *   system may return fewer than the number specified.
 *
 * @class
 * @see [google.pubsub.v1.PullRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PullRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `Pull` method.
 *
 * @property {Object[]} receivedMessages
 *   Received Pub/Sub messages. The Pub/Sub system will return zero messages if
 *   there are no more available in the backlog. The Pub/Sub system may return
 *   fewer than the `maxMessages` requested even if there are more messages
 *   available in the backlog.
 *
 *   This object should have the same structure as [ReceivedMessage]{@link ReceivedMessage}
 *
 * @class
 * @see [google.pubsub.v1.PullResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var PullResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ModifyAckDeadline method.
 *
 * @property {string} subscription
 *   The name of the subscription.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @property {string[]} ackIds
 *   List of acknowledgment IDs.
 *
 * @property {number} ackDeadlineSeconds
 *   The new ack deadline with respect to the time this request was sent to
 *   the Pub/Sub system. For example, if the value is 10, the new
 *   ack deadline will expire 10 seconds after the `ModifyAckDeadline` call
 *   was made. Specifying zero may immediately make the message available for
 *   another pull request.
 *   The minimum deadline you can specify is 0 seconds.
 *   The maximum deadline you can specify is 600 seconds (10 minutes).
 *
 * @class
 * @see [google.pubsub.v1.ModifyAckDeadlineRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ModifyAckDeadlineRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the Acknowledge method.
 *
 * @property {string} subscription
 *   The subscription whose message is being acknowledged.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @property {string[]} ackIds
 *   The acknowledgment ID for the messages being acknowledged that was returned
 *   by the Pub/Sub system in the `Pull` response. Must not be empty.
 *
 * @class
 * @see [google.pubsub.v1.AcknowledgeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var AcknowledgeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `StreamingPull` streaming RPC method. This request is used to
 * establish the initial stream as well as to stream acknowledgements and ack
 * deadline modifications from the client to the server.
 *
 * @property {string} subscription
 *   The subscription for which to initialize the new stream. This must be
 *   provided in the first request on the stream, and must not be set in
 *   subsequent requests from client to server.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @property {string[]} ackIds
 *   List of acknowledgement IDs for acknowledging previously received messages
 *   (received on this stream or a different stream). If an ack ID has expired,
 *   the corresponding message may be redelivered later. Acknowledging a message
 *   more than once will not result in an error. If the acknowledgement ID is
 *   malformed, the stream will be aborted with status `INVALID_ARGUMENT`.
 *
 * @property {number[]} modifyDeadlineSeconds
 *   The list of new ack deadlines for the IDs listed in
 *   `modify_deadline_ack_ids`. The size of this list must be the same as the
 *   size of `modify_deadline_ack_ids`. If it differs the stream will be aborted
 *   with `INVALID_ARGUMENT`. Each element in this list is applied to the
 *   element in the same position in `modify_deadline_ack_ids`. The new ack
 *   deadline is with respect to the time this request was sent to the Pub/Sub
 *   system. Must be >= 0. For example, if the value is 10, the new ack deadline
 *   will expire 10 seconds after this request is received. If the value is 0,
 *   the message is immediately made available for another streaming or
 *   non-streaming pull request. If the value is < 0 (an error), the stream will
 *   be aborted with status `INVALID_ARGUMENT`.
 *
 * @property {string[]} modifyDeadlineAckIds
 *   List of acknowledgement IDs whose deadline will be modified based on the
 *   corresponding element in `modify_deadline_seconds`. This field can be used
 *   to indicate that more time is needed to process a message by the
 *   subscriber, or to make the message available for redelivery if the
 *   processing was interrupted.
 *
 * @property {number} streamAckDeadlineSeconds
 *   The ack deadline to use for the stream. This must be provided in the
 *   first request on the stream, but it can also be updated on subsequent
 *   requests from client to server. The minimum deadline you can specify is 10
 *   seconds. The maximum deadline you can specify is 600 seconds (10 minutes).
 *
 * @class
 * @see [google.pubsub.v1.StreamingPullRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var StreamingPullRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `StreamingPull` method. This response is used to stream
 * messages from the server to the client.
 *
 * @property {Object[]} receivedMessages
 *   Received Pub/Sub messages. This will not be empty.
 *
 *   This object should have the same structure as [ReceivedMessage]{@link ReceivedMessage}
 *
 * @class
 * @see [google.pubsub.v1.StreamingPullResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var StreamingPullResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `CreateSnapshot` method.
 *
 * @property {string} name
 *   Optional user-provided name for this snapshot.
 *   If the name is not provided in the request, the server will assign a random
 *   name for this snapshot on the same project as the subscription.
 *   Note that for REST API requests, you must specify a name.
 *   Format is `projects/{project}/snapshots/{snap}`.
 *
 * @property {string} subscription
 *   The subscription whose backlog the snapshot retains.
 *   Specifically, the created snapshot is guaranteed to retain:
 *    (a) The existing backlog on the subscription. More precisely, this is
 *        defined as the messages in the subscription's backlog that are
 *        unacknowledged upon the successful completion of the
 *        `CreateSnapshot` request; as well as:
 *    (b) Any messages published to the subscription's topic following the
 *        successful completion of the CreateSnapshot request.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 *
 * @class
 * @see [google.pubsub.v1.CreateSnapshotRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var CreateSnapshotRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A snapshot resource.
 *
 * @property {string} name
 *   The name of the snapshot.
 *
 * @property {string} topic
 *   The name of the topic from which this snapshot is retaining messages.
 *
 * @property {Object} expireTime
 *   The snapshot is guaranteed to exist up until this time.
 *   A newly-created snapshot expires no later than 7 days from the time of its
 *   creation. Its exact lifetime is determined at creation by the existing
 *   backlog in the source subscription. Specifically, the lifetime of the
 *   snapshot is `7 days - (age of oldest unacked message in the subscription)`.
 *   For example, consider a subscription whose oldest unacked message is 3 days
 *   old. If a snapshot is created from this subscription, the snapshot -- which
 *   will always capture this 3-day-old backlog as long as the snapshot
 *   exists -- will expire in 4 days.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.pubsub.v1.Snapshot definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var Snapshot = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `ListSnapshots` method.
 *
 * @property {string} project
 *   The name of the cloud project that snapshots belong to.
 *   Format is `projects/{project}`.
 *
 * @property {number} pageSize
 *   Maximum number of snapshots to return.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListSnapshotsResponse`; indicates that this
 *   is a continuation of a prior `ListSnapshots` call, and that the system
 *   should return the next page of data.
 *
 * @class
 * @see [google.pubsub.v1.ListSnapshotsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListSnapshotsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListSnapshots` method.
 *
 * @property {Object[]} snapshots
 *   The resulting snapshots.
 *
 *   This object should have the same structure as [Snapshot]{@link Snapshot}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more snapshot that match the
 *   request; this value should be passed in a new `ListSnapshotsRequest`.
 *
 * @class
 * @see [google.pubsub.v1.ListSnapshotsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var ListSnapshotsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `DeleteSnapshot` method.
 *
 * @property {string} snapshot
 *   The name of the snapshot to delete.
 *   Format is `projects/{project}/snapshots/{snap}`.
 *
 * @class
 * @see [google.pubsub.v1.DeleteSnapshotRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var DeleteSnapshotRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `Seek` method.
 *
 * @property {string} subscription
 *   The subscription to affect.
 *
 * @property {Object} time
 *   The time to seek to.
 *   Messages retained in the subscription that were published before this
 *   time are marked as acknowledged, and messages retained in the
 *   subscription that were published after this time are marked as
 *   unacknowledged. Note that this operation affects only those messages
 *   retained in the subscription (configured by the combination of
 *   `message_retention_duration` and `retain_acked_messages`). For example,
 *   if `time` corresponds to a point before the message retention
 *   window (or to a point before the system's notion of the subscription
 *   creation time), only retained messages will be marked as unacknowledged,
 *   and already-expunged messages will not be restored.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {string} snapshot
 *   The snapshot to seek to. The snapshot's topic must be the same as that of
 *   the provided subscription.
 *   Format is `projects/{project}/snapshots/{snap}`.
 *
 * @class
 * @see [google.pubsub.v1.SeekRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var SeekRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @class
 * @see [google.pubsub.v1.SeekResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
 */
var SeekResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};