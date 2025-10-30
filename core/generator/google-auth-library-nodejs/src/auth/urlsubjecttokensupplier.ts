// Copyright 2024 Google LLC
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

import {ExternalAccountSupplierContext} from './baseexternalclient';
import {GaxiosOptions} from 'gaxios';
import {
  SubjectTokenFormatType,
  SubjectTokenJsonResponse,
  SubjectTokenSupplier,
} from './identitypoolclient';
import {AuthClient} from './authclient';

/**
 * Interface that defines options used to build a {@link UrlSubjectTokenSupplier}
 */
export interface UrlSubjectTokenSupplierOptions {
  /**
   * The URL to call to retrieve the subject token. This is typically a local
   * metadata server.
   */
  url: string;
  /**
   * The token file or URL response type (JSON or text).
   */
  formatType: SubjectTokenFormatType;
  /**
   * For JSON response types, this is the subject_token field name. For Azure,
   * this is access_token. For text response types, this is ignored.
   */
  subjectTokenFieldName?: string;
  /**
   * The optional additional headers to send with the request to the metadata
   * server url.
   */
  headers?: {[key: string]: string};
  /**
   * Additional gaxios options to use for the request to the specified URL.
   */
  additionalGaxiosOptions?: GaxiosOptions;
}

/**
 * Internal subject token supplier implementation used when a URL
 * is configured in the credential configuration used to build an {@link IdentityPoolClient}
 */
export class UrlSubjectTokenSupplier implements SubjectTokenSupplier {
  private readonly url: string;
  private readonly headers?: {[key: string]: string};
  private readonly formatType: SubjectTokenFormatType;
  private readonly subjectTokenFieldName?: string;
  private readonly additionalGaxiosOptions?: GaxiosOptions;

  /**
   * Instantiates a URL subject token supplier.
   * @param opts The URL subject token supplier options to build the supplier with.
   */
  constructor(opts: UrlSubjectTokenSupplierOptions) {
    this.url = opts.url;
    this.formatType = opts.formatType;
    this.subjectTokenFieldName = opts.subjectTokenFieldName;
    this.headers = opts.headers;
    this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
  }

  /**
   * Sends a GET request to the URL provided in the constructor and resolves
   * with the returned external subject token.
   * @param context {@link ExternalAccountSupplierContext} from the calling
   *   {@link IdentityPoolClient}, contains the requested audience and subject
   *   token type for the external account identity. Not used.
   */
  async getSubjectToken(
    context: ExternalAccountSupplierContext,
  ): Promise<string> {
    const opts: GaxiosOptions = {
      ...this.additionalGaxiosOptions,
      url: this.url,
      method: 'GET',
      headers: this.headers,
    };
    AuthClient.setMethodName(opts, 'getSubjectToken');

    let subjectToken: string | undefined;
    if (this.formatType === 'text') {
      const response = await context.transporter.request<string>(opts);
      subjectToken = response.data;
    } else if (this.formatType === 'json' && this.subjectTokenFieldName) {
      const response =
        await context.transporter.request<SubjectTokenJsonResponse>(opts);
      subjectToken = response.data[this.subjectTokenFieldName];
    }
    if (!subjectToken) {
      throw new Error(
        'Unable to parse the subject_token from the credential_source URL',
      );
    }

    return subjectToken;
  }
}
