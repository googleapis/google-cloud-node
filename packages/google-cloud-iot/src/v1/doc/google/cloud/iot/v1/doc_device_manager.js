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
 * Request for `CreateDeviceRegistry`.
 *
 * @property {string} parent
 *   The project and cloud region where this device registry must be created.
 *   For example, `projects/example-project/locations/us-central1`.
 *
 * @property {Object} deviceRegistry
 *   The device registry. The field `name` must be empty. The server will
 *   generate that field from the device registry `id` provided and the
 *   `parent` field.
 *
 *   This object should have the same structure as [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}
 *
 * @typedef CreateDeviceRegistryRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.CreateDeviceRegistryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const CreateDeviceRegistryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `GetDeviceRegistry`.
 *
 * @property {string} name
 *   The name of the device registry. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @typedef GetDeviceRegistryRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.GetDeviceRegistryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const GetDeviceRegistryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `DeleteDeviceRegistry`.
 *
 * @property {string} name
 *   The name of the device registry. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @typedef DeleteDeviceRegistryRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeleteDeviceRegistryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const DeleteDeviceRegistryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `UpdateDeviceRegistry`.
 *
 * @property {Object} deviceRegistry
 *   The new values for the device registry. The `id` field must be empty, and
 *   the `name` field must indicate the path of the resource. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 *   This object should have the same structure as [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}
 *
 * @property {Object} updateMask
 *   Only updates the `device_registry` fields indicated by this mask.
 *   The field mask must not be empty, and it must not contain fields that
 *   are immutable or only set by the server.
 *   Mutable top-level fields: `event_notification_config`, `http_config`,
 *   `mqtt_config`, and `state_notification_config`.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateDeviceRegistryRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.UpdateDeviceRegistryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const UpdateDeviceRegistryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `ListDeviceRegistries`.
 *
 * @property {string} parent
 *   The project and cloud region path. For example,
 *   `projects/example-project/locations/us-central1`.
 *
 * @property {number} pageSize
 *   The maximum number of registries to return in the response. If this value
 *   is zero, the service will select a default size. A call may return fewer
 *   objects than requested. A non-empty `next_page_token` in the response
 *   indicates that more data is available.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListDeviceRegistriesResponse`; indicates
 *   that this is a continuation of a prior `ListDeviceRegistries` call and
 *   the system should return the next page of data.
 *
 * @typedef ListDeviceRegistriesRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceRegistriesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceRegistriesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `ListDeviceRegistries`.
 *
 * @property {Object[]} deviceRegistries
 *   The registries that matched the query.
 *
 *   This object should have the same structure as [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more registries that match the
 *   request; this value should be passed in a new
 *   `ListDeviceRegistriesRequest`.
 *
 * @typedef ListDeviceRegistriesResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceRegistriesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceRegistriesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `CreateDevice`.
 *
 * @property {string} parent
 *   The name of the device registry where this device should be created.
 *   For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @property {Object} device
 *   The device registration details. The field `name` must be empty. The server
 *   generates `name` from the device registry `id` and the
 *   `parent` field.
 *
 *   This object should have the same structure as [Device]{@link google.cloud.iot.v1.Device}
 *
 * @typedef CreateDeviceRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.CreateDeviceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const CreateDeviceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `GetDevice`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @property {Object} fieldMask
 *   The fields of the `Device` resource to be returned in the response. If the
 *   field mask is unset or empty, all fields are returned.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef GetDeviceRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.GetDeviceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const GetDeviceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `UpdateDevice`.
 *
 * @property {Object} device
 *   The new values for the device. The `id` and `num_id` fields must
 *   be empty, and the field `name` must specify the name path. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0`or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 *   This object should have the same structure as [Device]{@link google.cloud.iot.v1.Device}
 *
 * @property {Object} updateMask
 *   Only updates the `device` fields indicated by this mask.
 *   The field mask must not be empty, and it must not contain fields that
 *   are immutable or only set by the server.
 *   Mutable top-level fields: `credentials`, `blocked`, and `metadata`
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateDeviceRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.UpdateDeviceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const UpdateDeviceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `DeleteDevice`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @typedef DeleteDeviceRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.DeleteDeviceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const DeleteDeviceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `ListDevices`.
 *
 * @property {string} parent
 *   The device registry path. Required. For example,
 *   `projects/my-project/locations/us-central1/registries/my-registry`.
 *
 * @property {number[]} deviceNumIds
 *   A list of device numeric IDs. If empty, this field is ignored. Maximum
 *   IDs: 10,000.
 *
 * @property {string[]} deviceIds
 *   A list of device string IDs. For example, `['device0', 'device12']`.
 *   If empty, this field is ignored. Maximum IDs: 10,000
 *
 * @property {Object} fieldMask
 *   The fields of the `Device` resource to be returned in the response. The
 *   fields `id` and `num_id` are always returned, along with any
 *   other fields specified.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} gatewayListOptions
 *   Options related to gateways.
 *
 *   This object should have the same structure as [GatewayListOptions]{@link google.cloud.iot.v1.GatewayListOptions}
 *
 * @property {number} pageSize
 *   The maximum number of devices to return in the response. If this value
 *   is zero, the service will select a default size. A call may return fewer
 *   objects than requested. A non-empty `next_page_token` in the response
 *   indicates that more data is available.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListDevicesResponse`; indicates
 *   that this is a continuation of a prior `ListDevices` call and
 *   the system should return the next page of data.
 *
 * @typedef ListDevicesRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDevicesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDevicesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options for limiting the list based on gateway type and associations.
 *
 * @property {number} gatewayType
 *   If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY`
 *   is specified, only non-gateway devices are returned. If
 *   `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.
 *
 *   The number should be among the values of [GatewayType]{@link google.cloud.iot.v1.GatewayType}
 *
 * @property {string} associationsGatewayId
 *   If set, only devices associated with the specified gateway are returned.
 *   The gateway ID can be numeric (`num_id`) or the user-defined string
 *   (`id`). For example, if `123` is specified, only devices bound to the
 *   gateway with `num_id` 123 are returned.
 *
 * @property {string} associationsDeviceId
 *   If set, returns only the gateways with which the specified device is
 *   associated. The device ID can be numeric (`num_id`) or the user-defined
 *   string (`id`). For example, if `456` is specified, returns only the
 *   gateways to which the device with `num_id` 456 is bound.
 *
 * @typedef GatewayListOptions
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.GatewayListOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const GatewayListOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `ListDevices`.
 *
 * @property {Object[]} devices
 *   The devices that match the request.
 *
 *   This object should have the same structure as [Device]{@link google.cloud.iot.v1.Device}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more devices that match the
 *   request; this value should be passed in a new `ListDevicesRequest`.
 *
 * @typedef ListDevicesResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDevicesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDevicesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `ModifyCloudToDeviceConfig`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @property {number} versionToUpdate
 *   The version number to update. If this value is zero, it will not check the
 *   version number of the server and will always update the current version;
 *   otherwise, this update will fail if the version number found on the server
 *   does not match this version number. This is used to support multiple
 *   simultaneous updates without losing data.
 *
 * @property {string} binaryData
 *   The configuration data for the device.
 *
 * @typedef ModifyCloudToDeviceConfigRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ModifyCloudToDeviceConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `ListDeviceConfigVersions`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @property {number} numVersions
 *   The number of versions to list. Versions are listed in decreasing order of
 *   the version number. The maximum number of versions retained is 10. If this
 *   value is zero, it will return all the versions available.
 *
 * @typedef ListDeviceConfigVersionsRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceConfigVersionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceConfigVersionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `ListDeviceConfigVersions`.
 *
 * @property {Object[]} deviceConfigs
 *   The device configuration for the last few versions. Versions are listed
 *   in decreasing order, starting from the most recent one.
 *
 *   This object should have the same structure as [DeviceConfig]{@link google.cloud.iot.v1.DeviceConfig}
 *
 * @typedef ListDeviceConfigVersionsResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceConfigVersionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceConfigVersionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `ListDeviceStates`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @property {number} numStates
 *   The number of states to list. States are listed in descending order of
 *   update time. The maximum number of states retained is 10. If this
 *   value is zero, it will return all the states available.
 *
 * @typedef ListDeviceStatesRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceStatesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceStatesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `ListDeviceStates`.
 *
 * @property {Object[]} deviceStates
 *   The last few device states. States are listed in descending order of server
 *   update time, starting from the most recent one.
 *
 *   This object should have the same structure as [DeviceState]{@link google.cloud.iot.v1.DeviceState}
 *
 * @typedef ListDeviceStatesResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.ListDeviceStatesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const ListDeviceStatesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `SendCommandToDevice`.
 *
 * @property {string} name
 *   The name of the device. For example,
 *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
 *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
 *
 * @property {string} binaryData
 *   The command data to send to the device.
 *
 * @property {string} subfolder
 *   Optional subfolder for the command. If empty, the command will be delivered
 *   to the /devices/{device-id}/commands topic, otherwise it will be delivered
 *   to the /devices/{device-id}/commands/{subfolder} topic. Multi-level
 *   subfolders are allowed. This field must not have more than 256 characters,
 *   and must not contain any MQTT wildcards ("+" or "#") or null characters.
 *
 * @typedef SendCommandToDeviceRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.SendCommandToDeviceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const SendCommandToDeviceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `SendCommandToDevice`.
 * @typedef SendCommandToDeviceResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.SendCommandToDeviceResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const SendCommandToDeviceResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `BindDeviceToGateway`.
 *
 * @property {string} parent
 *   The name of the registry. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @property {string} gatewayId
 *   The value of `gateway_id` can be either the device numeric ID or the
 *   user-defined device identifier.
 *
 * @property {string} deviceId
 *   The device to associate with the specified gateway. The value of
 *   `device_id` can be either the device numeric ID or the user-defined device
 *   identifier.
 *
 * @typedef BindDeviceToGatewayRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.BindDeviceToGatewayRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const BindDeviceToGatewayRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `BindDeviceToGateway`.
 * @typedef BindDeviceToGatewayResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.BindDeviceToGatewayResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const BindDeviceToGatewayResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for `UnbindDeviceFromGateway`.
 *
 * @property {string} parent
 *   The name of the registry. For example,
 *   `projects/example-project/locations/us-central1/registries/my-registry`.
 *
 * @property {string} gatewayId
 *   The value of `gateway_id` can be either the device numeric ID or the
 *   user-defined device identifier.
 *
 * @property {string} deviceId
 *   The device to disassociate from the specified gateway. The value of
 *   `device_id` can be either the device numeric ID or the user-defined device
 *   identifier.
 *
 * @typedef UnbindDeviceFromGatewayRequest
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.UnbindDeviceFromGatewayRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const UnbindDeviceFromGatewayRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for `UnbindDeviceFromGateway`.
 * @typedef UnbindDeviceFromGatewayResponse
 * @memberof google.cloud.iot.v1
 * @see [google.cloud.iot.v1.UnbindDeviceFromGatewayResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/iot/v1/device_manager.proto}
 */
const UnbindDeviceFromGatewayResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};