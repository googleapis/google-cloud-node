// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  AwsClient,
  BaseExternalAccountClient,
  Compute,
  ExternalAccountClient,
  GoogleAuth,
  GoogleAuthOptions,
  IdentityPoolClient,
  Impersonated,
  JWT,
  OAuth2Client,
  ProjectIdCallback,
  UserRefreshClient,
} from 'google-auth-library';

export class AuthPlus extends GoogleAuth {
  JWT = JWT;
  Compute = Compute;
  OAuth2 = OAuth2Client;
  GoogleAuth = GoogleAuth;
  AwsClient = AwsClient;
  IdentityPoolClient = IdentityPoolClient;
  ExternalAccountClient = ExternalAccountClient;

  private _cachedAuth?: GoogleAuth;

  /**
   * Override getClient(), memoizing an instance of auth for
   * subsequent calls to getProjectId().
   */
  async getClient(
    options?: GoogleAuthOptions,
  ): Promise<
    Compute | JWT | UserRefreshClient | BaseExternalAccountClient | Impersonated
  > {
    this._cachedAuth = new GoogleAuth(options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this._cachedAuth.getClient() as any;
  }

  /**
   * Override getProjectId(), using the most recently configured
   * auth instance when fetching projectId.
   */
  getProjectId(): Promise<string>;
  getProjectId(callback: ProjectIdCallback): void;
  getProjectId(callback?: ProjectIdCallback): Promise<string | null> | void {
    if (callback) {
      return this._cachedAuth
        ? this._cachedAuth.getProjectId(callback)
        : super.getProjectId(callback);
    } else {
      return this._cachedAuth
        ? this._cachedAuth.getProjectId()
        : super.getProjectId();
    }
  }
}
