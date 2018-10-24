// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The `ListNotificationChannelDescriptors` request.
 *
 * @property {string} name
 *   The REST resource name of the parent from which to retrieve
 *   the notification channel descriptors. The expected syntax is:
 *
 *       projects/[PROJECT_ID]
 *
 *   Note that this names the parent container in which to look for the
 *   descriptors; to retrieve a single descriptor by name, use the
 *   GetNotificationChannelDescriptor
 *   operation, instead.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. If
 *   not set to a positive number, a reasonable value will be chosen by the
 *   service.
 *
 * @property {string} pageToken
 *   If non-empty, `page_token` must contain a value returned as the
 *   `next_page_token` in a previous response to request the next set
 *   of results.
 *
 * @typedef ListNotificationChannelDescriptorsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListNotificationChannelDescriptorsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const ListNotificationChannelDescriptorsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListNotificationChannelDescriptors` response.
 *
 * @property {Object[]} channelDescriptors
 *   The monitored resource descriptors supported for the specified
 *   project, optionally filtered.
 *
 *   This object should have the same structure as [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more results that match
 *   the request. Use the value in the `page_token` field in a
 *   subsequent request to fetch the next set of results. If empty,
 *   all results have been returned.
 *
 * @typedef ListNotificationChannelDescriptorsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListNotificationChannelDescriptorsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const ListNotificationChannelDescriptorsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetNotificationChannelDescriptor` response.
 *
 * @property {string} name
 *   The channel type for which to execute the request. The format is
 *   `projects/[PROJECT_ID]/notificationChannelDescriptors/{channel_type}`.
 *
 * @typedef GetNotificationChannelDescriptorRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetNotificationChannelDescriptorRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const GetNotificationChannelDescriptorRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `CreateNotificationChannel` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is:
 *
 *       projects/[PROJECT_ID]
 *
 *   Note that this names the container into which the channel will be
 *   written. This does not name the newly created channel. The resulting
 *   channel's name will have a normalized version of this field as a prefix,
 *   but will add `/notificationChannels/[CHANNEL_ID]` to identify the channel.
 *
 * @property {Object} notificationChannel
 *   The definition of the `NotificationChannel` to create.
 *
 *   This object should have the same structure as [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}
 *
 * @typedef CreateNotificationChannelRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateNotificationChannelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const CreateNotificationChannelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListNotificationChannels` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   `projects/[PROJECT_ID]`. That is, this names the container
 *   in which to look for the notification channels; it does not name a
 *   specific channel. To query a specific channel by REST resource name, use
 *   the
 *   `GetNotificationChannel` operation.
 *
 * @property {string} filter
 *   If provided, this field specifies the criteria that must be met by
 *   notification channels to be included in the response.
 *
 *   For more details, see [sorting and
 *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
 *
 * @property {string} orderBy
 *   A comma-separated list of fields by which to sort the result. Supports
 *   the same set of fields as in `filter`. Entries can be prefixed with
 *   a minus sign to sort in descending rather than ascending order.
 *
 *   For more details, see [sorting and
 *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. If
 *   not set to a positive number, a reasonable value will be chosen by the
 *   service.
 *
 * @property {string} pageToken
 *   If non-empty, `page_token` must contain a value returned as the
 *   `next_page_token` in a previous response to request the next set
 *   of results.
 *
 * @typedef ListNotificationChannelsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListNotificationChannelsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const ListNotificationChannelsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListNotificationChannels` response.
 *
 * @property {Object[]} notificationChannels
 *   The notification channels defined for the specified project.
 *
 *   This object should have the same structure as [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more results that match
 *   the request. Use the value in the `page_token` field in a
 *   subsequent request to fetch the next set of results. If empty,
 *   all results have been returned.
 *
 * @typedef ListNotificationChannelsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListNotificationChannelsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const ListNotificationChannelsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetNotificationChannel` request.
 *
 * @property {string} name
 *   The channel for which to execute the request. The format is
 *   `projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`.
 *
 * @typedef GetNotificationChannelRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetNotificationChannelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const GetNotificationChannelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `UpdateNotificationChannel` request.
 *
 * @property {Object} updateMask
 *   The fields to update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} notificationChannel
 *   A description of the changes to be applied to the specified
 *   notification channel. The description must provide a definition for
 *   fields to be updated; the names of these fields should also be
 *   included in the `update_mask`.
 *
 *   This object should have the same structure as [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}
 *
 * @typedef UpdateNotificationChannelRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateNotificationChannelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const UpdateNotificationChannelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `DeleteNotificationChannel` request.
 *
 * @property {string} name
 *   The channel for which to execute the request. The format is
 *   `projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`.
 *
 * @property {boolean} force
 *   If true, the notification channel will be deleted regardless of its
 *   use in alert policies (the policies will be updated to remove the
 *   channel). If false, channels that are still referenced by an existing
 *   alerting policy will fail to be deleted in a delete operation.
 *
 * @typedef DeleteNotificationChannelRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteNotificationChannelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const DeleteNotificationChannelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `SendNotificationChannelVerificationCode` request.
 *
 * @property {string} name
 *   The notification channel to which to send a verification code.
 *
 * @typedef SendNotificationChannelVerificationCodeRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.SendNotificationChannelVerificationCodeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const SendNotificationChannelVerificationCodeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetNotificationChannelVerificationCode` request.
 *
 * @property {string} name
 *   The notification channel for which a verification code is to be generated
 *   and retrieved. This must name a channel that is already verified; if
 *   the specified channel is not verified, the request will fail.
 *
 * @property {Object} expireTime
 *   The desired expiration time. If specified, the API will guarantee that
 *   the returned code will not be valid after the specified timestamp;
 *   however, the API cannot guarantee that the returned code will be
 *   valid for at least as long as the requested time (the API puts an upper
 *   bound on the amount of time for which a code may be valid). If omitted,
 *   a default expiration will be used, which may be less than the max
 *   permissible expiration (so specifying an expiration may extend the
 *   code's lifetime over omitting an expiration, even though the API does
 *   impose an upper limit on the maximum expiration that is permitted).
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef GetNotificationChannelVerificationCodeRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetNotificationChannelVerificationCodeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const GetNotificationChannelVerificationCodeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetNotificationChannelVerificationCode` request.
 *
 * @property {string} code
 *   The verification code, which may be used to verify other channels
 *   that have an equivalent identity (i.e. other channels of the same
 *   type with the same fingerprint such as other email channels with
 *   the same email address or other sms channels with the same number).
 *
 * @property {Object} expireTime
 *   The expiration time associated with the code that was returned. If
 *   an expiration was provided in the request, this is the minimum of the
 *   requested expiration in the request and the max permitted expiration.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef GetNotificationChannelVerificationCodeResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetNotificationChannelVerificationCodeResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const GetNotificationChannelVerificationCodeResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `VerifyNotificationChannel` request.
 *
 * @property {string} name
 *   The notification channel to verify.
 *
 * @property {string} code
 *   The verification code that was delivered to the channel as
 *   a result of invoking the `SendNotificationChannelVerificationCode` API
 *   method or that was retrieved from a verified channel via
 *   `GetNotificationChannelVerificationCode`. For example, one might have
 *   "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only
 *   guaranteed that the code is valid UTF-8; one should not
 *   make any assumptions regarding the structure or format of the code).
 *
 * @typedef VerifyNotificationChannelRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.VerifyNotificationChannelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification_service.proto}
 */
const VerifyNotificationChannelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};