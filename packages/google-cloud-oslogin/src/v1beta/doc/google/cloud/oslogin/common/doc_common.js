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
 * The POSIX account information associated with a Google account.
 *
 * @property {boolean} primary
 *   Only one POSIX account can be marked as primary.
 *
 * @property {string} username
 *   The username of the POSIX account.
 *
 * @property {number} uid
 *   The user ID.
 *
 * @property {number} gid
 *   The default group ID.
 *
 * @property {string} homeDirectory
 *   The path to the home directory for this account.
 *
 * @property {string} shell
 *   The path to the logic shell for this account.
 *
 * @property {string} gecos
 *   The GECOS (user information) entry for this account.
 *
 * @property {string} systemId
 *   System identifier for which account the username or uid applies to.
 *   By default, the empty value is used.
 *
 * @property {string} accountId
 *   Output only. A POSIX account identifier.
 *
 * @typedef PosixAccount
 * @memberof google.cloud.oslogin.common
 * @see [google.cloud.oslogin.common.PosixAccount definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/common/common.proto}
 */
const PosixAccount = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The SSH public key information associated with a Google account.
 *
 * @property {string} key
 *   Public key text in SSH format, defined by
 *   <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
 *   section 6.6.
 *
 * @property {number} expirationTimeUsec
 *   An expiration time in microseconds since epoch.
 *
 * @property {string} fingerprint
 *   Output only. The SHA-256 fingerprint of the SSH public key.
 *
 * @typedef SshPublicKey
 * @memberof google.cloud.oslogin.common
 * @see [google.cloud.oslogin.common.SshPublicKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/oslogin/common/common.proto}
 */
const SshPublicKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};