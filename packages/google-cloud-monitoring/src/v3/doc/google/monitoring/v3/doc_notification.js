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
 * A description of a notification channel. The descriptor includes
 * the properties of the channel and the set of labels or fields that
 * must be specified to configure channels of a given type.
 *
 * @property {string} name
 *   The full REST resource name for this descriptor. The syntax is:
 *
 *       projects/[PROJECT_ID]/notificationChannelDescriptors/[TYPE]
 *
 *   In the above, `[TYPE]` is the value of the `type` field.
 *
 * @property {string} type
 *   The type of notification channel, such as "email", "sms", etc.
 *   Notification channel types are globally unique.
 *
 * @property {string} displayName
 *   A human-readable name for the notification channel type.  This
 *   form of the name is suitable for a user interface.
 *
 * @property {string} description
 *   A human-readable description of the notification channel
 *   type. The description may include a description of the properties
 *   of the channel and pointers to external documentation.
 *
 * @property {Object[]} labels
 *   The set of labels that must be defined to identify a particular
 *   channel of the corresponding type. Each label includes a
 *   description for how that field should be populated.
 *
 *   This object should have the same structure as [LabelDescriptor]{@link google.api.LabelDescriptor}
 *
 * @property {number[]} supportedTiers
 *   The tiers that support this notification channel; the project service tier
 *   must be one of the supported_tiers.
 *
 *   The number should be among the values of [ServiceTier]{@link google.monitoring.v3.ServiceTier}
 *
 * @typedef NotificationChannelDescriptor
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.NotificationChannelDescriptor definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification.proto}
 */
const NotificationChannelDescriptor = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `NotificationChannel` is a medium through which an alert is
 * delivered when a policy violation is detected. Examples of channels
 * include email, SMS, and third-party messaging applications. Fields
 * containing sensitive information like authentication tokens or
 * contact info are only partially populated on retrieval.
 *
 * @property {string} type
 *   The type of the notification channel. This field matches the
 *   value of the NotificationChannelDescriptor.type field.
 *
 * @property {string} name
 *   The full REST resource name for this channel. The syntax is:
 *
 *       projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]
 *
 *   The `[CHANNEL_ID]` is automatically assigned by the server on creation.
 *
 * @property {string} displayName
 *   An optional human-readable name for this notification channel. It is
 *   recommended that you specify a non-empty and unique name in order to
 *   make it easier to identify the channels in your project, though this is
 *   not enforced. The display name is limited to 512 Unicode characters.
 *
 * @property {string} description
 *   An optional human-readable description of this notification channel. This
 *   description may provide additional details, beyond the display
 *   name, for the channel. This may not exceeed 1024 Unicode characters.
 *
 * @property {Object.<string, string>} labels
 *   Configuration fields that define the channel and its behavior. The
 *   permissible and required labels are specified in the
 *   NotificationChannelDescriptor.labels of the
 *   `NotificationChannelDescriptor` corresponding to the `type` field.
 *
 * @property {Object.<string, string>} userLabels
 *   User-supplied key/value data that does not need to conform to
 *   the corresponding `NotificationChannelDescriptor`'s schema, unlike
 *   the `labels` field. This field is intended to be used for organizing
 *   and identifying the `NotificationChannel` objects.
 *
 *   The field can contain up to 64 entries. Each key and value is limited to
 *   63 Unicode characters or 128 bytes, whichever is smaller. Labels and
 *   values can contain only lowercase letters, numerals, underscores, and
 *   dashes. Keys must begin with a letter.
 *
 * @property {number} verificationStatus
 *   Indicates whether this channel has been verified or not. On a
 *   `ListNotificationChannels`
 *   or
 *   `GetNotificationChannel`
 *   operation, this field is expected to be populated.
 *
 *   If the value is `UNVERIFIED`, then it indicates that the channel is
 *   non-functioning (it both requires verification and lacks verification);
 *   otherwise, it is assumed that the channel works.
 *
 *   If the channel is neither `VERIFIED` nor `UNVERIFIED`, it implies that
 *   the channel is of a type that does not require verification or that
 *   this specific channel has been exempted from verification because it was
 *   created prior to verification being required for channels of this type.
 *
 *   This field cannot be modified using a standard
 *   `UpdateNotificationChannel`
 *   operation. To change the value of this field, you must call
 *   `VerifyNotificationChannel`.
 *
 *   The number should be among the values of [VerificationStatus]{@link google.monitoring.v3.VerificationStatus}
 *
 * @property {Object} enabled
 *   Whether notifications are forwarded to the described channel. This makes
 *   it possible to disable delivery of notifications to a particular channel
 *   without removing the channel from all alerting policies that reference
 *   the channel. This is a more convenient approach when the change is
 *   temporary and you want to receive notifications from the same set
 *   of alerting policies on the channel at some point in the future.
 *
 *   This object should have the same structure as [BoolValue]{@link google.protobuf.BoolValue}
 *
 * @typedef NotificationChannel
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.NotificationChannel definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/notification.proto}
 */
const NotificationChannel = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Indicates whether the channel has been verified or not. It is illegal
   * to specify this field in a
   * `CreateNotificationChannel`
   * or an
   * `UpdateNotificationChannel`
   * operation.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  VerificationStatus: {

    /**
     * Sentinel value used to indicate that the state is unknown, omitted, or
     * is not applicable (as in the case of channels that neither support
     * nor require verification in order to function).
     */
    VERIFICATION_STATUS_UNSPECIFIED: 0,

    /**
     * The channel has yet to be verified and requires verification to function.
     * Note that this state also applies to the case where the verification
     * process has been initiated by sending a verification code but where
     * the verification code has not been submitted to complete the process.
     */
    UNVERIFIED: 1,

    /**
     * It has been proven that notifications can be received on this
     * notification channel and that someone on the project has access
     * to messages that are delivered to that channel.
     */
    VERIFIED: 2
  }
};