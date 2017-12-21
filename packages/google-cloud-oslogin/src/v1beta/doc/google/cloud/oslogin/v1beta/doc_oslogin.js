// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The user profile information used for logging in to a virtual machine on
 * Google Compute Engine.
 *
 * @property {string} name
 *   The primary email address that uniquely identifies the user.
 *
 * @property {Object[]} posixAccounts
 *   The list of POSIX accounts associated with the user.
 *
 *   This object should have the same structure as [PosixAccount]{@link google.cloud.oslogin.common.PosixAccount}
 *
 * @property {Object.<string, Object>} sshPublicKeys
 *   A map from SSH public key fingerprint to the associated key object.
 *
 * @property {boolean} suspended
 *   Indicates if the user is suspended. A suspended user cannot log in but
 *   their profile information is retained.
 *
 * @typedef LoginProfile
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.LoginProfile definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var LoginProfile = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for deleting a POSIX account entry.
 *
 * @property {string} name
 *   A reference to the POSIX account to update. POSIX accounts are identified
 *   by the project ID they are associated with. A reference to the POSIX
 *   account is in format `users/{user}/projects/{project}`.
 *
 * @typedef DeletePosixAccountRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.DeletePosixAccountRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var DeletePosixAccountRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for deleting an SSH public key.
 *
 * @property {string} name
 *   The fingerprint of the public key to update. Public keys are identified by
 *   their SHA-256 fingerprint. The fingerprint of the public key is in format
 *   `users/{user}/sshPublicKeys/{fingerprint}`.
 *
 * @typedef DeleteSshPublicKeyRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var DeleteSshPublicKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for retrieving the login profile information for a user.
 *
 * @property {string} name
 *   The unique ID for the user in format `users/{user}`.
 *
 * @typedef GetLoginProfileRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.GetLoginProfileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var GetLoginProfileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for retrieving an SSH public key.
 *
 * @property {string} name
 *   The fingerprint of the public key to retrieve. Public keys are identified
 *   by their SHA-256 fingerprint. The fingerprint of the public key is in
 *   format `users/{user}/sshPublicKeys/{fingerprint}`.
 *
 * @typedef GetSshPublicKeyRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.GetSshPublicKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var GetSshPublicKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for importing an SSH public key.
 *
 * @property {string} parent
 *   The unique ID for the user in format `users/{user}`.
 *
 * @property {Object} sshPublicKey
 *   The SSH public key and expiration time.
 *
 *   This object should have the same structure as [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}
 *
 * @property {string} projectId
 *   The project ID of the Google Cloud Platform project.
 *
 * @typedef ImportSshPublicKeyRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var ImportSshPublicKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A response message for importing an SSH public key.
 *
 * @property {Object} loginProfile
 *   The login profile information for the user.
 *
 *   This object should have the same structure as [LoginProfile]{@link google.cloud.oslogin.v1beta.LoginProfile}
 *
 * @typedef ImportSshPublicKeyResponse
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var ImportSshPublicKeyResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request message for updating an SSH public key.
 *
 * @property {string} name
 *   The fingerprint of the public key to update. Public keys are identified by
 *   their SHA-256 fingerprint. The fingerprint of the public key is in format
 *   `users/{user}/sshPublicKeys/{fingerprint}`.
 *
 * @property {Object} sshPublicKey
 *   The SSH public key and expiration time.
 *
 *   This object should have the same structure as [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}
 *
 * @property {Object} updateMask
 *   Mask to control which fields get updated. Updates all if not present.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateSshPublicKeyRequest
 * @memberof google.cloud.oslogin.v1beta
 * @see [google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/v1beta/oslogin.proto}
 */
var UpdateSshPublicKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};