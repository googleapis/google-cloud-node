// Copyright 2017 Google LLC
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
import {GoogleAuth} from './auth/googleauth';

// Export common deps to ensure types/instances are the exact match. Useful
// for consistently configuring the library across versions.
export * as gcpMetadata from 'gcp-metadata';
export * as gaxios from 'gaxios';

import {AuthClient} from './auth/authclient';
export {AuthClient, DEFAULT_UNIVERSE} from './auth/authclient';
export {Compute, ComputeOptions} from './auth/computeclient';
export {
  CredentialBody,
  CredentialRequest,
  Credentials,
  JWTInput,
} from './auth/credentials';
export {GCPEnv} from './auth/envDetect';
export {GoogleAuthOptions, ProjectIdCallback} from './auth/googleauth';
export {IAMAuth, RequestMetadata} from './auth/iam';
export {IdTokenClient, IdTokenProvider} from './auth/idtokenclient';
export {Claims, JWTAccess} from './auth/jwtaccess';
export {JWT, JWTOptions} from './auth/jwtclient';
export {Impersonated, ImpersonatedOptions} from './auth/impersonated';
export {
  Certificates,
  CodeChallengeMethod,
  CodeVerifierResults,
  GenerateAuthUrlOpts,
  GetTokenOptions,
  OAuth2Client,
  OAuth2ClientOptions,
  RefreshOptions,
  TokenInfo,
  VerifyIdTokenOptions,
  ClientAuthentication,
} from './auth/oauth2client';
export {LoginTicket, TokenPayload} from './auth/loginticket';
export {
  UserRefreshClient,
  UserRefreshClientOptions,
} from './auth/refreshclient';
export {
  AwsClient,
  AwsClientOptions,
  AwsSecurityCredentialsSupplier,
} from './auth/awsclient';
export {
  AwsSecurityCredentials,
  AwsRequestSigner,
} from './auth/awsrequestsigner';
export {
  IdentityPoolClient,
  IdentityPoolClientOptions,
  SubjectTokenSupplier,
} from './auth/identitypoolclient';
export {
  ExternalAccountClient,
  ExternalAccountClientOptions,
} from './auth/externalclient';
export {
  BaseExternalAccountClient,
  BaseExternalAccountClientOptions,
  SharedExternalAccountClientOptions,
  ExternalAccountSupplierContext,
  IamGenerateAccessTokenResponse,
} from './auth/baseexternalclient';
export {
  CredentialAccessBoundary,
  DownscopedClient,
} from './auth/downscopedclient';
export {
  PluggableAuthClient,
  PluggableAuthClientOptions,
  ExecutableError,
} from './auth/pluggable-auth-client';
export {
  EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE,
  ExternalAccountAuthorizedUserClient,
  ExternalAccountAuthorizedUserClientOptions,
} from './auth/externalAccountAuthorizedUserClient';
export {PassThroughClient} from './auth/passthrough';

type ALL_EXPORTS = (typeof import('./'))[keyof typeof import('./')];

/**
 * A union type for all {@link AuthClient `AuthClient`} constructors.
 */
export type AnyAuthClientConstructor =
  // Extract All `AuthClient`s from exports
  Extract<ALL_EXPORTS, typeof AuthClient>;

/**
 * A union type for all {@link AuthClient `AuthClient`}s.
 */
export type AnyAuthClient = InstanceType<AnyAuthClientConstructor>;

const auth = new GoogleAuth();
export {auth, GoogleAuth};
