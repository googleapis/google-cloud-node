// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  BaseExternalAccountClient,
  // This is the identifier in the JSON config for the type of credential.
  // This string constant indicates that an external account client should be
  // instantiated.
  // There are 3 types of JSON configs:
  // 1. authorized_user => Google end user credential
  // 2. service_account => Google service account credential
  // 3. external_Account => non-GCP service (eg. AWS, Azure, K8s)
  EXTERNAL_ACCOUNT_TYPE,
} from './baseexternalclient';
import {
  IdentityPoolClient,
  IdentityPoolClientOptions,
} from './identitypoolclient';
import {AwsClient, AwsClientOptions} from './awsclient';
import {
  PluggableAuthClient,
  PluggableAuthClientOptions,
} from './pluggable-auth-client';

export type ExternalAccountClientOptions =
  | IdentityPoolClientOptions
  | AwsClientOptions
  | PluggableAuthClientOptions;

/**
 * Dummy class with no constructor. Developers are expected to use fromJSON.
 */
export class ExternalAccountClient {
  constructor() {
    throw new Error(
      'ExternalAccountClients should be initialized via: ' +
        'ExternalAccountClient.fromJSON(), ' +
        'directly via explicit constructors, eg. ' +
        'new AwsClient(options), new IdentityPoolClient(options), new' +
        'PluggableAuthClientOptions, or via ' +
        'new GoogleAuth(options).getClient()',
    );
  }

  /**
   * This static method will instantiate the
   * corresponding type of external account credential depending on the
   * underlying credential source.
   *
   * **IMPORTANT**: This method does not validate the credential configuration.
   * A security risk occurs when a credential configuration configured with
   * malicious URLs is used. When the credential configuration is accepted from
   * an untrusted source, you should validate it before using it with this
   * method. For more details, see
   * https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   *
   * @param options The external account options object typically loaded
   *   from the external account JSON credential file.
   * @return A BaseExternalAccountClient instance or null if the options
   *   provided do not correspond to an external account credential.
   */
  static fromJSON(
    options: ExternalAccountClientOptions,
  ): BaseExternalAccountClient | null {
    if (options && options.type === EXTERNAL_ACCOUNT_TYPE) {
      if ((options as AwsClientOptions).credential_source?.environment_id) {
        return new AwsClient(options as AwsClientOptions);
      } else if (
        (options as PluggableAuthClientOptions).credential_source?.executable
      ) {
        return new PluggableAuthClient(options as PluggableAuthClientOptions);
      } else {
        return new IdentityPoolClient(options as IdentityPoolClientOptions);
      }
    } else {
      return null;
    }
  }
}
