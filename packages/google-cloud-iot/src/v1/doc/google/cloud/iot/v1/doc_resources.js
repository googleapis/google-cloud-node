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
 * The device resource.
 *
 * @property {string} id
 *   The user-defined device identifier. The device ID must be unique
 *   within a device registry.
 *
 * @property {string} name
 *   The resource path name. For example,
 *   `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
 *   `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
 *   When `name` is populated as a response from the service, it always ends
 *   in the device numeric ID.
 *
 * @property {number} numId
 *   [Output only] A server-defined unique numeric ID for the device. This is a
 *   more compact way to identify devices, and it is globally unique.
 *
 * @property {Object[]} credentials
 *   The credentials used to authenticate this device. To allow credential
 *   rotation without interruption, multiple device credentials can be bound to
 *   this device. No more than 3 credentials can be bound to a single device at
 *   a time. When new credentials are added to a device, they are verified
 *   against the registry credentials. For details, see the description of the
 *   `DeviceRegistry.credentials` field.
 *
 *   This object should have the same structure as [DeviceCredential]{@link google.cloud.iot.v1.DeviceCredential}
 *
 * @property {Object} lastHeartbeatTime
 *   [Output only] The last time an MQTT `PINGREQ` was received. This field
 *   applies only to devices connecting through MQTT. MQTT clients usually only
 *   send `PINGREQ` messages if the connection is idle, and no other messages
 *   have been sent. Timestamps are periodically collected and written to
 *   storage; they may be stale by a few minutes.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastEventTime
 *   [Output only] The last time a telemetry event was received. Timestamps are
 *   periodically collected and written to storage; they may be stale by a few
 *   minutes.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastStateTime
 *   [Output only] The last time a state event was received. Timestamps are
 *   periodically collected and written to storage; they may be stale by a few
 *   minutes.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastConfigAckTime
 *   [Output only] The last time a cloud-to-device config version acknowledgment
 *   was received from the device. This field is only for configurations
 *   sent through MQTT.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastConfigSendTime
 *   [Output only] The last time a cloud-to-device config version was sent to
 *   the device.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {boolean} blocked
 *   If a device is blocked, connections or requests from this device will fail.
 *   Can be used to temporarily prevent the device from connecting if, for
 *   example, the sensor is generating bad data and needs maintenance.
 *
 * @property {Object} lastErrorTime
 *   [Output only] The time the most recent error occurred, such as a failure to
 *   publish to Cloud Pub/Sub. This field is the timestamp of
 *   'last_error_status'.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastErrorStatus
 *   [Output only] The error message of the most recent error, such as a failure
 *   to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this
 *   field. If no errors have occurred, this field has an empty message
 *   and the status code 0 == OK. Otherwise, this field is expected to have a
 *   status code other than OK.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object} config
 *   The most recent device configuration, which is eventually sent from
 *   Cloud IoT Core to the device. If not present on creation, the
 *   configuration will be initialized with an empty payload and version value
 *   of `1`. To update this field after creation, use the
 *   `DeviceManager.ModifyCloudToDeviceConfig` method.
 *
 *   This object should have the same structure as [DeviceConfig]{@link google.cloud.iot.v1.DeviceConfig}
 *
 * @property {Object} state
 *   [Output only] The state most recently received from the device. If no state
 *   has been reported, this field is not present.
 *
 *   This object should have the same structure as [DeviceState]{@link google.cloud.iot.v1.DeviceState}
 *
 * @property {Object.<string, string>} metadata
 *   The metadata key-value pairs assigned to the device. This metadata is not
 *   interpreted or indexed by Cloud IoT Core. It can be used to add contextual
 *   information for the device.
 *
 *   Keys must conform to the regular expression [a-zA-Z][a-zA-Z0-9-_.+~%]+ and
 *   be less than 128 bytes in length.
 *
 *   Values are free-form strings. Each value must be less than or equal to 32
 *   KB in size.
 *
 *   The total size of all keys and values must be less than 256 KB, and the
 *   maximum number of key-value pairs is 500.
 *
 * @typedef Device
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.Device definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var Device = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A container for a group of devices.
 *
 * @property {string} id
 *   The identifier of this device registry. For example, `myRegistry`.
 *
 * @property {string} name
 *   The resource path name. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @property {Object[]} eventNotificationConfigs
 *   The configuration for notification of telemetry events received from the
 *   device. All telemetry events that were successfully published by the
 *   device and acknowledged by Cloud IoT Core are guaranteed to be
 *   delivered to Cloud Pub/Sub. If multiple configurations match a message,
 *   only the first matching configuration is used. If you try to publish a
 *   device telemetry event using MQTT without specifying a Cloud Pub/Sub topic
 *   for the device's registry, the connection closes automatically. If you try
 *   to do so using an HTTP connection, an error is returned. Up to 10
 *   configurations may be provided.
 *
 *   This object should have the same structure as [EventNotificationConfig]{@link google.cloud.iot.v1.EventNotificationConfig}
 *
 * @property {Object} stateNotificationConfig
 *   The configuration for notification of new states received from the device.
 *   State updates are guaranteed to be stored in the state history, but
 *   notifications to Cloud Pub/Sub are not guaranteed. For example, if
 *   permissions are misconfigured or the specified topic doesn't exist, no
 *   notification will be published but the state will still be stored in Cloud
 *   IoT Core.
 *
 *   This object should have the same structure as [StateNotificationConfig]{@link google.cloud.iot.v1.StateNotificationConfig}
 *
 * @property {Object} mqttConfig
 *   The MQTT configuration for this device registry.
 *
 *   This object should have the same structure as [MqttConfig]{@link google.cloud.iot.v1.MqttConfig}
 *
 * @property {Object} httpConfig
 *   The DeviceService (HTTP) configuration for this device registry.
 *
 *   This object should have the same structure as [HttpConfig]{@link google.cloud.iot.v1.HttpConfig}
 *
 * @property {Object[]} credentials
 *   The credentials used to verify the device credentials. No more than 10
 *   credentials can be bound to a single registry at a time. The verification
 *   process occurs at the time of device creation or update. If this field is
 *   empty, no verification is performed. Otherwise, the credentials of a newly
 *   created device or added credentials of an updated device should be signed
 *   with one of these registry credentials.
 *
 *   Note, however, that existing devices will never be affected by
 *   modifications to this list of credentials: after a device has been
 *   successfully created in a registry, it should be able to connect even if
 *   its registry credentials are revoked, deleted, or modified.
 *
 *   This object should have the same structure as [RegistryCredential]{@link google.cloud.iot.v1.RegistryCredential}
 *
 * @typedef DeviceRegistry
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeviceRegistry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var DeviceRegistry = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration of MQTT for a device registry.
 *
 * @property {number} mqttEnabledState
 *   If enabled, allows connections using the MQTT protocol. Otherwise, MQTT
 *   connections to this registry will fail.
 *
 *   The number should be among the values of [MqttState]{@link google.cloud.iot.v1.MqttState}
 *
 * @typedef MqttConfig
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.MqttConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var MqttConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration of the HTTP bridge for a device registry.
 *
 * @property {number} httpEnabledState
 *   If enabled, allows devices to use DeviceService via the HTTP protocol.
 *   Otherwise, any requests to DeviceService will fail for this registry.
 *
 *   The number should be among the values of [HttpState]{@link google.cloud.iot.v1.HttpState}
 *
 * @typedef HttpConfig
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.HttpConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var HttpConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration for forwarding telemetry events.
 *
 * @property {string} subfolderMatches
 *   If the subfolder name matches this string exactly, this configuration will
 *   be used. The string must not include the leading '/' character. If empty,
 *   all strings are matched. This field is used only for telemetry events;
 *   subfolders are not supported for state changes.
 *
 * @property {string} pubsubTopicName
 *   A Cloud Pub/Sub topic name. For example,
 *   `projects/myProject/topics/deviceEvents`.
 *
 * @typedef EventNotificationConfig
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.EventNotificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var EventNotificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration for notification of new states received from the device.
 *
 * @property {string} pubsubTopicName
 *   A Cloud Pub/Sub topic name. For example,
 *   `projects/myProject/topics/deviceEvents`.
 *
 * @typedef StateNotificationConfig
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.StateNotificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var StateNotificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A server-stored registry credential used to validate device credentials.
 *
 * @property {Object} publicKeyCertificate
 *   A public key certificate used to verify the device credentials.
 *
 *   This object should have the same structure as [PublicKeyCertificate]{@link google.cloud.iot.v1.PublicKeyCertificate}
 *
 * @typedef RegistryCredential
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.RegistryCredential definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var RegistryCredential = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of an X.509 certificate. For informational purposes only.
 *
 * @property {string} issuer
 *   The entity that signed the certificate.
 *
 * @property {string} subject
 *   The entity the certificate and public key belong to.
 *
 * @property {Object} startTime
 *   The time the certificate becomes valid.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} expiryTime
 *   The time the certificate becomes invalid.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} signatureAlgorithm
 *   The algorithm used to sign the certificate.
 *
 * @property {string} publicKeyType
 *   The type of public key in the certificate.
 *
 * @typedef X509CertificateDetails
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.X509CertificateDetails definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var X509CertificateDetails = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A public key certificate format and data.
 *
 * @property {number} format
 *   The certificate format.
 *
 *   The number should be among the values of [PublicKeyCertificateFormat]{@link google.cloud.iot.v1.PublicKeyCertificateFormat}
 *
 * @property {string} certificate
 *   The certificate data.
 *
 * @property {Object} x509Details
 *   [Output only] The certificate details. Used only for X.509 certificates.
 *
 *   This object should have the same structure as [X509CertificateDetails]{@link google.cloud.iot.v1.X509CertificateDetails}
 *
 * @typedef PublicKeyCertificate
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.PublicKeyCertificate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var PublicKeyCertificate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A server-stored device credential used for authentication.
 *
 * @property {Object} publicKey
 *   A public key used to verify the signature of JSON Web Tokens (JWTs).
 *   When adding a new device credential, either via device creation or via
 *   modifications, this public key credential may be required to be signed by
 *   one of the registry level certificates. More specifically, if the
 *   registry contains at least one certificate, any new device credential
 *   must be signed by one of the registry certificates. As a result,
 *   when the registry contains certificates, only X.509 certificates are
 *   accepted as device credentials. However, if the registry does
 *   not contain a certificate, self-signed certificates and public keys will
 *   be accepted. New device credentials must be different from every
 *   registry-level certificate.
 *
 *   This object should have the same structure as [PublicKeyCredential]{@link google.cloud.iot.v1.PublicKeyCredential}
 *
 * @property {Object} expirationTime
 *   [Optional] The time at which this credential becomes invalid. This
 *   credential will be ignored for new client authentication requests after
 *   this timestamp; however, it will not be automatically deleted.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef DeviceCredential
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeviceCredential definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var DeviceCredential = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A public key format and data.
 *
 * @property {number} format
 *   The format of the key.
 *
 *   The number should be among the values of [PublicKeyFormat]{@link google.cloud.iot.v1.PublicKeyFormat}
 *
 * @property {string} key
 *   The key data.
 *
 * @typedef PublicKeyCredential
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.PublicKeyCredential definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var PublicKeyCredential = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The device configuration. Eventually delivered to devices.
 *
 * @property {number} version
 *   [Output only] The version of this update. The version number is assigned by
 *   the server, and is always greater than 0 after device creation. The
 *   version must be 0 on the `CreateDevice` request if a `config` is
 *   specified; the response of `CreateDevice` will always have a value of 1.
 *
 * @property {Object} cloudUpdateTime
 *   [Output only] The time at which this configuration version was updated in
 *   Cloud IoT Core. This timestamp is set by the server.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} deviceAckTime
 *   [Output only] The time at which Cloud IoT Core received the
 *   acknowledgment from the device, indicating that the device has received
 *   this configuration version. If this field is not present, the device has
 *   not yet acknowledged that it received this version. Note that when
 *   the config was sent to the device, many config versions may have been
 *   available in Cloud IoT Core while the device was disconnected, and on
 *   connection, only the latest version is sent to the device. Some
 *   versions may never be sent to the device, and therefore are never
 *   acknowledged. This timestamp is set by Cloud IoT Core.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} binaryData
 *   The device configuration data.
 *
 * @typedef DeviceConfig
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeviceConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var DeviceConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The device state, as reported by the device.
 *
 * @property {Object} updateTime
 *   [Output only] The time at which this state version was updated in Cloud
 *   IoT Core.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} binaryData
 *   The device state data.
 *
 * @typedef DeviceState
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeviceState definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/resources.proto}
 */
var DeviceState = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Indicates whether an MQTT connection is enabled or disabled. See the field
 * description for details.
 *
 * @enum {number}
 * @memberof google.cloud.iot.v1
 */
var MqttState = {

  /**
   * No MQTT state specified. If not specified, MQTT will be enabled by default.
   */
  MQTT_STATE_UNSPECIFIED: 0,

  /**
   * Enables a MQTT connection.
   */
  MQTT_ENABLED: 1,

  /**
   * Disables a MQTT connection.
   */
  MQTT_DISABLED: 2
};

/**
 * Indicates whether DeviceService (HTTP) is enabled or disabled for the
 * registry. See the field description for details.
 *
 * @enum {number}
 * @memberof google.cloud.iot.v1
 */
var HttpState = {

  /**
   * No HTTP state specified. If not specified, DeviceService will be
   * enabled by default.
   */
  HTTP_STATE_UNSPECIFIED: 0,

  /**
   * Enables DeviceService (HTTP) service for the registry.
   */
  HTTP_ENABLED: 1,

  /**
   * Disables DeviceService (HTTP) service for the registry.
   */
  HTTP_DISABLED: 2
};

/**
 * The supported formats for the public key.
 *
 * @enum {number}
 * @memberof google.cloud.iot.v1
 */
var PublicKeyCertificateFormat = {

  /**
   * The format has not been specified. This is an invalid default value and
   * must not be used.
   */
  UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT: 0,

  /**
   * An X.509v3 certificate ([RFC5280](https://www.ietf.org/rfc/rfc5280.txt)),
   * encoded in base64, and wrapped by `-----BEGIN CERTIFICATE-----` and
   * `-----END CERTIFICATE-----`.
   */
  X509_CERTIFICATE_PEM: 1
};

/**
 * The supported formats for the public key.
 *
 * @enum {number}
 * @memberof google.cloud.iot.v1
 */
var PublicKeyFormat = {

  /**
   * The format has not been specified. This is an invalid default value and
   * must not be used.
   */
  UNSPECIFIED_PUBLIC_KEY_FORMAT: 0,

  /**
   * An RSA public key encoded in base64, and wrapped by
   * `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`. This can be
   * used to verify `RS256` signatures in JWT tokens ([RFC7518](https://cloud.google.com
   * https://www.ietf.org/rfc/rfc7518.txt)).
   */
  RSA_PEM: 3,

  /**
   * As RSA_PEM, but wrapped in an X.509v3 certificate ([RFC5280](https://cloud.google.com
   * https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by
   * `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
   */
  RSA_X509_PEM: 1,

  /**
   * Public key for the ECDSA algorithm using P-256 and SHA-256, encoded in
   * base64, and wrapped by `-----BEGIN PUBLIC KEY-----` and `-----END
   * PUBLIC KEY-----`. This can be used to verify JWT tokens with the `ES256`
   * algorithm ([RFC7518](https://www.ietf.org/rfc/rfc7518.txt)). This curve is
   * defined in [OpenSSL](https://www.openssl.org/) as the `prime256v1` curve.
   */
  ES256_PEM: 2,

  /**
   * As ES256_PEM, but wrapped in an X.509v3 certificate ([RFC5280](https://cloud.google.com
   * https://www.ietf.org/rfc/rfc5280.txt)), encoded in base64, and wrapped by
   * `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.
   */
  ES256_X509_PEM: 4
};