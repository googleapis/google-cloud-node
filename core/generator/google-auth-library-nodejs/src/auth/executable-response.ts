// Copyright 2022 Google LLC
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

const SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';
const OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const OIDC_SUBJECT_TOKEN_TYPE2 = 'urn:ietf:params:oauth:token-type:jwt';

/**
 * Interface defining the JSON formatted response of a 3rd party executable
 * used by the pluggable auth client.
 */
export interface ExecutableResponseJson {
  /**
   * The version of the JSON response. Only version 1 is currently supported.
   * Always required.
   */
  version: number;
  /**
   * Whether the executable ran successfully. Always required.
   */
  success: boolean;
  /**
   * The epoch time for expiration of the token in seconds, required for
   * successful responses.
   */
  expiration_time?: number;
  /**
   * The type of subject token in the response, currently supported values are:
   * urn:ietf:params:oauth:token-type:saml2
   * urn:ietf:params:oauth:token-type:id_token
   * urn:ietf:params:oauth:token-type:jwt
   */
  token_type?: string;
  /**
   * The error code from the executable, required when unsuccessful.
   */
  code?: string;
  /**
   * The error message from the executable, required when unsuccessful.
   */
  message?: string;
  /**
   * The ID token to be used as a subject token when token_type is id_token or jwt.
   */
  id_token?: string;
  /**
   * The response to be used as a subject token when token_type is saml2.
   */
  saml_response?: string;
}

/**
 * Defines the response of a 3rd party executable run by the pluggable auth client.
 */
export class ExecutableResponse {
  /**
   * The version of the Executable response. Only version 1 is currently supported.
   */
  readonly version: number;
  /**
   * Whether the executable ran successfully.
   */
  readonly success: boolean;
  /**
   * The epoch time for expiration of the token in seconds.
   */
  readonly expirationTime?: number;
  /**
   * The type of subject token in the response, currently supported values are:
   * urn:ietf:params:oauth:token-type:saml2
   * urn:ietf:params:oauth:token-type:id_token
   * urn:ietf:params:oauth:token-type:jwt
   */
  readonly tokenType?: string;
  /**
   * The error code from the executable.
   */
  readonly errorCode?: string;
  /**
   * The error message from the executable.
   */
  readonly errorMessage?: string;
  /**
   * The subject token from the executable, format depends on tokenType.
   */
  readonly subjectToken?: string;

  /**
   * Instantiates an ExecutableResponse instance using the provided JSON object
   * from the output of the executable.
   * @param responseJson Response from a 3rd party executable, loaded from a
   * run of the executable or a cached output file.
   */
  constructor(responseJson: ExecutableResponseJson) {
    // Check that the required fields exist in the json response.
    if (!responseJson.version) {
      throw new InvalidVersionFieldError(
        "Executable response must contain a 'version' field.",
      );
    }
    if (responseJson.success === undefined) {
      throw new InvalidSuccessFieldError(
        "Executable response must contain a 'success' field.",
      );
    }

    this.version = responseJson.version;
    this.success = responseJson.success;

    // Validate required fields for a successful response.
    if (this.success) {
      this.expirationTime = responseJson.expiration_time;
      this.tokenType = responseJson.token_type;

      // Validate token type field.
      if (
        this.tokenType !== SAML_SUBJECT_TOKEN_TYPE &&
        this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE1 &&
        this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE2
      ) {
        throw new InvalidTokenTypeFieldError(
          "Executable response must contain a 'token_type' field when successful " +
            `and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`,
        );
      }

      // Validate subject token.
      if (this.tokenType === SAML_SUBJECT_TOKEN_TYPE) {
        if (!responseJson.saml_response) {
          throw new InvalidSubjectTokenError(
            `Executable response must contain a 'saml_response' field when token_type=${SAML_SUBJECT_TOKEN_TYPE}.`,
          );
        }
        this.subjectToken = responseJson.saml_response;
      } else {
        if (!responseJson.id_token) {
          throw new InvalidSubjectTokenError(
            "Executable response must contain a 'id_token' field when " +
              `token_type=${OIDC_SUBJECT_TOKEN_TYPE1} or ${OIDC_SUBJECT_TOKEN_TYPE2}.`,
          );
        }
        this.subjectToken = responseJson.id_token;
      }
    } else {
      // Both code and message must be provided for unsuccessful responses.
      if (!responseJson.code) {
        throw new InvalidCodeFieldError(
          "Executable response must contain a 'code' field when unsuccessful.",
        );
      }
      if (!responseJson.message) {
        throw new InvalidMessageFieldError(
          "Executable response must contain a 'message' field when unsuccessful.",
        );
      }
      this.errorCode = responseJson.code;
      this.errorMessage = responseJson.message;
    }
  }

  /**
   * @return A boolean representing if the response has a valid token. Returns
   * true when the response was successful and the token is not expired.
   */
  isValid(): boolean {
    return !this.isExpired() && this.success;
  }

  /**
   * @return A boolean representing if the response is expired. Returns true if the
   * provided timeout has passed.
   */
  isExpired(): boolean {
    return (
      this.expirationTime !== undefined &&
      this.expirationTime < Math.round(Date.now() / 1000)
    );
  }
}

/**
 * An error thrown by the ExecutableResponse class.
 */
export class ExecutableResponseError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * An error thrown when the 'version' field in an executable response is missing or invalid.
 */
export class InvalidVersionFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the 'success' field in an executable response is missing or invalid.
 */
export class InvalidSuccessFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the 'expiration_time' field in an executable response is missing or invalid.
 */
export class InvalidExpirationTimeFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the 'token_type' field in an executable response is missing or invalid.
 */
export class InvalidTokenTypeFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the 'code' field in an executable response is missing or invalid.
 */
export class InvalidCodeFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the 'message' field in an executable response is missing or invalid.
 */
export class InvalidMessageFieldError extends ExecutableResponseError {}

/**
 * An error thrown when the subject token in an executable response is missing or invalid.
 */
export class InvalidSubjectTokenError extends ExecutableResponseError {}
