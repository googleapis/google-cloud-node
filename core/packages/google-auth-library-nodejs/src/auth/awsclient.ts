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

import {AwsRequestSigner, AwsSecurityCredentials} from './awsrequestsigner';
import {
  BaseExternalAccountClient,
  BaseExternalAccountClientOptions,
  ExternalAccountSupplierContext,
} from './baseexternalclient';

import {DefaultAwsSecurityCredentialsSupplier} from './defaultawssecuritycredentialssupplier';
import {originalOrCamelOptions, SnakeToCamelObject} from '../util';
import {Gaxios} from 'gaxios';

/**
 * AWS credentials JSON interface. This is used for AWS workloads.
 */
export interface AwsClientOptions extends BaseExternalAccountClientOptions {
  /**
   * Object containing options to retrieve AWS security credentials. A valid credential
   * source or a aws security credentials supplier should be specified.
   */
  credential_source?: {
    /**
     * AWS environment ID. Currently only 'AWS1' is supported.
     */
    environment_id: string;
    /**
     * The EC2 metadata URL to retrieve the current AWS region from. If this is
     * not provided, the region should be present in the AWS_REGION or AWS_DEFAULT_REGION
     * environment variables.
     */
    region_url?: string;
    /**
     * The EC2 metadata URL to retrieve AWS security credentials. If this is not provided,
     * the credentials should be present in the AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
     * and AWS_SESSION_TOKEN environment variables.
     */
    url?: string;
    /**
     * The regional GetCallerIdentity action URL, used to determine the account
     * ID and its roles.
     */
    regional_cred_verification_url: string;
    /**
     *  The imdsv2 session token url is used to fetch session token from AWS
     *  which is later sent through headers for metadata requests. If the
     *  field is missing, then session token won't be fetched and sent with
     *  the metadata requests.
     *  The session token is required for IMDSv2 but optional for IMDSv1
     */
    imdsv2_session_token_url?: string;
  };
  /**
   * The AWS security credentials supplier to call to retrieve the AWS region
   * and AWS security credentials. Either this or a valid credential source
   * must be specified.
   */
  aws_security_credentials_supplier?: AwsSecurityCredentialsSupplier;
}

/**
 * Supplier interface for AWS security credentials. This can be implemented to
 * return an AWS region and AWS security credentials. These credentials can
 * then be exchanged for a GCP token by an {@link AwsClient}.
 */
export interface AwsSecurityCredentialsSupplier {
  /**
   * Gets the active AWS region.
   * @param context {@link ExternalAccountSupplierContext} from the calling
   *   {@link AwsClient}, contains the requested audience and subject token type
   *   for the external account identity as well as the transport from the
   *   calling client to use for requests.
   * @return A promise that resolves with the AWS region string.
   */
  getAwsRegion: (context: ExternalAccountSupplierContext) => Promise<string>;

  /**
   * Gets valid AWS security credentials for the requested external account
   * identity. Note that these are not cached by the calling {@link AwsClient},
   * so caching should be including in the implementation.
   * @param context {@link ExternalAccountSupplierContext} from the calling
   *   {@link AwsClient}, contains the requested audience and subject token type
   *   for the external account identity as well as the transport from the
   *   calling client to use for requests.
   * @return A promise that resolves with the requested {@link AwsSecurityCredentials}.
   */
  getAwsSecurityCredentials: (
    context: ExternalAccountSupplierContext,
  ) => Promise<AwsSecurityCredentials>;
}

/**
 * AWS external account client. This is used for AWS workloads, where
 * AWS STS GetCallerIdentity serialized signed requests are exchanged for
 * GCP access token.
 */
export class AwsClient extends BaseExternalAccountClient {
  private readonly environmentId?: string;
  private readonly awsSecurityCredentialsSupplier: AwsSecurityCredentialsSupplier;
  private readonly regionalCredVerificationUrl: string;
  private awsRequestSigner: AwsRequestSigner | null;
  private region: string;

  static #DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL =
    'https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15';

  /**
   * @deprecated AWS client no validates the EC2 metadata address.
   **/
  static AWS_EC2_METADATA_IPV4_ADDRESS = '169.254.169.254';
  /**
   * @deprecated AWS client no validates the EC2 metadata address.
   **/
  static AWS_EC2_METADATA_IPV6_ADDRESS = 'fd00:ec2::254';

  /**
   * Instantiates an AwsClient instance using the provided JSON
   * object loaded from an external account credentials file.
   * An error is thrown if the credential is not a valid AWS credential.
   * @param options The external account options object typically loaded
   *   from the external account JSON credential file.
   */
  constructor(
    options: AwsClientOptions | SnakeToCamelObject<AwsClientOptions>,
  ) {
    super(options);
    const opts = originalOrCamelOptions(options as AwsClientOptions);
    const credentialSource = opts.get('credential_source');
    const awsSecurityCredentialsSupplier = opts.get(
      'aws_security_credentials_supplier',
    );
    // Validate credential sourcing configuration.
    if (!credentialSource && !awsSecurityCredentialsSupplier) {
      throw new Error(
        'A credential source or AWS security credentials supplier must be specified.',
      );
    }
    if (credentialSource && awsSecurityCredentialsSupplier) {
      throw new Error(
        'Only one of credential source or AWS security credentials supplier can be specified.',
      );
    }

    if (awsSecurityCredentialsSupplier) {
      this.awsSecurityCredentialsSupplier = awsSecurityCredentialsSupplier;
      this.regionalCredVerificationUrl =
        AwsClient.#DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL;
      this.credentialSourceType = 'programmatic';
    } else {
      const credentialSourceOpts = originalOrCamelOptions(credentialSource);
      this.environmentId = credentialSourceOpts.get('environment_id');
      // This is only required if the AWS region is not available in the
      // AWS_REGION or AWS_DEFAULT_REGION environment variables.
      const regionUrl = credentialSourceOpts.get('region_url');
      // This is only required if AWS security credentials are not available in
      // environment variables.
      const securityCredentialsUrl = credentialSourceOpts.get('url');
      const imdsV2SessionTokenUrl = credentialSourceOpts.get(
        'imdsv2_session_token_url',
      );
      this.awsSecurityCredentialsSupplier =
        new DefaultAwsSecurityCredentialsSupplier({
          regionUrl: regionUrl,
          securityCredentialsUrl: securityCredentialsUrl,
          imdsV2SessionTokenUrl: imdsV2SessionTokenUrl,
        });

      this.regionalCredVerificationUrl = credentialSourceOpts.get(
        'regional_cred_verification_url',
      );
      this.credentialSourceType = 'aws';

      // Data validators.
      this.validateEnvironmentId();
    }
    this.awsRequestSigner = null;
    this.region = '';
  }

  private validateEnvironmentId() {
    const match = this.environmentId?.match(/^(aws)(\d+)$/);
    if (!match || !this.regionalCredVerificationUrl) {
      throw new Error('No valid AWS "credential_source" provided');
    } else if (parseInt(match[2], 10) !== 1) {
      throw new Error(
        `aws version "${match[2]}" is not supported in the current build.`,
      );
    }
  }

  /**
   * Triggered when an external subject token is needed to be exchanged for a
   * GCP access token via GCP STS endpoint. This will call the
   * {@link AwsSecurityCredentialsSupplier} to retrieve an AWS region and AWS
   * Security Credentials, then use them to create a signed AWS STS request that
   * can be exchanged for a GCP access token.
   * @return A promise that resolves with the external subject token.
   */
  async retrieveSubjectToken(): Promise<string> {
    // Initialize AWS request signer if not already initialized.
    if (!this.awsRequestSigner) {
      this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(
        this.supplierContext,
      );
      this.awsRequestSigner = new AwsRequestSigner(async () => {
        return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(
          this.supplierContext,
        );
      }, this.region);
    }

    // Generate signed request to AWS STS GetCallerIdentity API.
    // Use the required regional endpoint. Otherwise, the request will fail.
    const options = await this.awsRequestSigner.getRequestOptions({
      ...AwsClient.RETRY_CONFIG,
      url: this.regionalCredVerificationUrl.replace('{region}', this.region),
      method: 'POST',
    });
    // The GCP STS endpoint expects the headers to be formatted as:
    // [
    //   {key: 'x-amz-date', value: '...'},
    //   {key: 'authorization', value: '...'},
    //   ...
    // ]
    // And then serialized as:
    // encodeURIComponent(JSON.stringify({
    //   url: '...',
    //   method: 'POST',
    //   headers: [{key: 'x-amz-date', value: '...'}, ...]
    // }))
    const reformattedHeader: {key: string; value: string}[] = [];
    const extendedHeaders = Gaxios.mergeHeaders(
      {
        // The full, canonical resource name of the workload identity pool
        // provider, with or without the HTTPS prefix.
        // Including this header as part of the signature is recommended to
        // ensure data integrity.
        'x-goog-cloud-target-resource': this.audience,
      },
      options.headers,
    );

    // Reformat header to GCP STS expected format.
    extendedHeaders.forEach((value, key) =>
      reformattedHeader.push({key, value}),
    );

    // Serialize the reformatted signed request.
    return encodeURIComponent(
      JSON.stringify({
        url: options.url,
        method: options.method,
        headers: reformattedHeader,
      }),
    );
  }
}
