/*!
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * @module commonGrpc/serviceObject
 */

import {
  Metadata,
  MetadataCallback,
  ResponseCallback,
  ServiceObject,
  ServiceObjectConfig,
  SetMetadataResponse,
  util,
} from '@google-cloud/common';
import {promisifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import {CoreOptions, RequestCallback, Response} from 'teeny-request';

export class GrpcServiceObject extends ServiceObject {
  declare parent: GrpcServiceObject;

  /**
   * GrpcServiceObject is a base class, meant to be inherited from by a service
   * object that uses the gRPC protobuf API.
   *
   * @constructor
   * @alias module:common/grpc-service-object
   *
   * @private
   *
   * @param {object} config - Configuration object.
   */
  constructor(config: ServiceObjectConfig) {
    super(config);
    this.parent = config.parent as GrpcServiceObject;
  }

  /**
   * Delete the object.
   *
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   */
  delete(): Promise<[Response]>;
  delete(callback: RequestCallback): void;
  delete(callback?: RequestCallback): void | Promise<[Response]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const protoOpts = (this.methods.delete as any).protoOpts;
    const reqOpts = this.getOpts(this.methods.delete);
    this.request(protoOpts, reqOpts, callback || util.noop);
  }

  /**
   * Get the metadata of this object.
   *
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.metadata - The metadata for this object.
   */
  getMetadata(): Promise<Metadata>;
  getMetadata(callback: MetadataCallback): void;
  getMetadata(callback?: MetadataCallback): void | Promise<Metadata> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const protoOpts = (this.methods.getMetadata as any).protoOpts;
    const reqOpts = this.getOpts(this.methods.getMetadata);
    this.request(protoOpts, reqOpts, (err: Error, resp: Response) => {
      if (err) {
        callback!(err, null, resp);
        return;
      }
      this.metadata = resp;
      callback!(null, this.metadata, resp);
    });
  }

  /**
   * Set the metadata for this object.
   *
   * @param {object} metadata - The metadata to set on this object.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   */
  setMetadata(metadata: Metadata): Promise<SetMetadataResponse>;
  setMetadata(metadata: Metadata, callback: ResponseCallback): void;
  setMetadata(
    metadata: Metadata,
    callback?: ResponseCallback,
  ): void | Promise<SetMetadataResponse> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const protoOpts = (this.methods.setMetadata as any).protoOpts;
    const reqOpts = extend(
      true,
      {},
      this.getOpts(this.methods.setMetadata),
      metadata,
    );
    this.request(protoOpts, reqOpts, callback || util.noop);
  }

  /**
   * Patch a request to the GrpcService object.
   *
   * @private
   */
  request(...args: Array<{}>) {
    return this.parent.request(...args);
  }

  /**
   * Patch a streaming request to the GrpcService object.
   *
   * @private
   */
  requestStream(...args: Array<{}>) {
    return this.parent.requestStream(...args);
  }

  /**
   * Patch a writable streaming request to the GrpcService object.
   *
   * @private
   */
  requestWritableStream(...args: Array<{}>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (this.parent as any).requestWritableStream.apply(this.parent, args);
  }

  private getOpts(metadata: boolean | {reqOpts?: CoreOptions}) {
    return typeof metadata === 'boolean' ? {} : metadata.reqOpts || {};
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(GrpcServiceObject);
