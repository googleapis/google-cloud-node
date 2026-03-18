/**
 * Copyright 2020 Google LLC
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

import {OutgoingHttpHeaders} from 'http';
import objectHash from 'object-hash';
import * as protobuf from 'protobufjs';
import * as gax from './gax';
import * as routingHeader from './routingHeader';
import {Status} from './status';
import {GoogleAuth, AuthClient} from 'google-auth-library';
import {OperationsClientBuilder} from './operationsClient';
import type {GrpcClientOptions, ClientStubOptions} from './grpc';
import {GaxCall, GRPCCall} from './apitypes';
import {Descriptor, StreamDescriptor} from './descriptor';
import {createApiCall as _createApiCall} from './createApiCall';
import {FallbackServiceError} from './googleError';
import * as fallbackRest from './fallbackRest';
import {isNodeJS} from './featureDetection';
import {generateServiceStub} from './fallbackServiceStub';
import {StreamType} from './streamingCalls/streaming';
import {toLowerCamelCase} from './util';
import {google} from '../protos/http';
import * as IamProtos from '../protos/iam_service';
import * as LocationProtos from '../protos/locations';
import * as operationsProtos from '../protos/operations';

export {FallbackServiceError};
export {PathTemplate} from './pathTemplate';
export {routingHeader};
export {
  CallSettings,
  constructSettings,
  RetryOptions,
  createDefaultBackoffSettings,
} from './gax';
export const version = require('../../package.json').version + '-fallback';

export {
  BundleDescriptor,
  LongrunningDescriptor,
  PageDescriptor,
  StreamDescriptor,
} from './descriptor';

export {StreamType} from './streamingCalls/streaming';

export {OperationsClient} from './operationsClient';
export {IamClient} from './iamService';
export {LocationsClient} from './locationService';

export {makeUUID} from './util';

export const defaultToObjectOptions = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const CLIENT_VERSION_HEADER = 'x-goog-api-client';

export interface ServiceMethods {
  [name: string]: protobuf.Method;
}

/**
 * @deprecated use `GoogleAuth` here instead
 */
type deprecatedAuthClientAlias = AuthClient;

export class GrpcClient {
  auth?: GoogleAuth<AuthClient> | deprecatedAuthClientAlias;
  /**
   * @deprecated use {@link GrpcClient.auth} instead
   */
  authClient?: AuthClient;
  fallback: boolean;
  grpcVersion: string;
  private static protoCache = new Map<string, protobuf.Root>();
  httpRules?: Array<google.api.IHttpRule>;
  numericEnums: boolean;
  minifyJson: boolean;

  /**
   * In rare cases users might need to deallocate all memory consumed by loaded protos.
   * This method will delete the proto cache content.
   */
  static clearProtoCache() {
    GrpcClient.protoCache.clear();
  }

  /**
   * gRPC-fallback version of GrpcClient
   * Implements GrpcClient API for a browser using grpc-fallback protocol (sends serialized protobuf to HTTP/1 $rpc endpoint).
   *
   * @param options {@link GrpcClientOptions}
   */
  constructor(
    options: (
      | GrpcClientOptions
      | {
          /**
           * @deprecated - use `authClient` for `AuthClient`s instead
           */
          auth: AuthClient;
        }
    ) & {
      /**
       * Fallback mode to use instead of gRPC.
       * A string is accepted for compatibility, all non-empty string values enable the HTTP REST fallback.
       */
      fallback?: boolean | string;
    } = {},
  ) {
    if (options.auth) {
      this.auth = options.auth;
    } else if ('authClient' in options) {
      this.auth = options.authClient;
    } else {
      this.auth = new GoogleAuth({
        authClient: options.auth,
        ...options,
      });
    }

    this.fallback = options.fallback ? true : false;
    this.grpcVersion = require('../../package.json').version;
    this.httpRules = (options as GrpcClientOptions).httpRules;
    this.numericEnums = (options as GrpcClientOptions).numericEnums ?? false;
    this.minifyJson = (options as GrpcClientOptions).minifyJson ?? false;
  }

  /**
   * gRPC-fallback version of loadProto
   * Loads the protobuf root object from a JSON object created from a proto file
   * @param {Object} jsonObject - A JSON version of a protofile created usin protobuf.js
   * @returns {Object} Root namespace of proto JSON
   */
  loadProto(jsonObject: {}) {
    const rootObject = protobuf.Root.fromJSON(jsonObject);
    return rootObject;
  }

  loadProtoJSON(json: protobuf.INamespace, ignoreCache = false) {
    return GrpcClient.protobufFromJSON(json, ignoreCache);
  }

  /**
   * Loads the protobuf root object from a JSON object created from a proto file.
   * By default, this is cached in a global cache and the results should not be mutated.
   * @param {Object} jsonObject - A JSON version of a protofile created usin protobuf.js
   * @returns {Object} Root namespace of proto JSON
   */
  static protobufFromJSON(json: {}, ignoreCache = false) {
    const hash = objectHash(JSON.stringify(json)).toString();
    const cached = GrpcClient.protoCache.get(hash);
    if (cached && !ignoreCache) {
      return cached;
    }
    const root = protobuf.Root.fromJSON(json);
    GrpcClient.protoCache.set(hash, root);
    return root;
  }

  private static getServiceMethods(service: protobuf.Service): ServiceMethods {
    const methods: {[name: string]: protobuf.Method} = {};
    for (const [methodName, methodObject] of Object.entries(service.methods)) {
      const methodNameLowerCamelCase = toLowerCamelCase(methodName);
      methods[methodNameLowerCamelCase] = methodObject;
    }

    return methods;
  }

  /**
   * gRPC-fallback version of constructSettings
   * A wrapper of {@link constructSettings} function under the gRPC context.
   *
   * Most of parameters are common among constructSettings, please take a look.
   * @param {string} serviceName - The fullly-qualified name of the service.
   * @param {Object} clientConfig - A dictionary of the client config.
   * @param {Object} configOverrides - A dictionary of overriding configs.
   * @param {Object} headers - A dictionary of additional HTTP header name to
   *   its value.
   * @return {Object} A mapping of method names to CallSettings.
   */
  constructSettings(
    serviceName: string,
    clientConfig: gax.ClientConfig,
    configOverrides: gax.ClientConfig,
    headers: OutgoingHttpHeaders,
  ) {
    function buildMetadata(abTests: {}, moreHeaders: OutgoingHttpHeaders) {
      const metadata: OutgoingHttpHeaders = {};
      if (!headers) {
        headers = {};
      }
      // Since gRPC expects each header to be an array,
      // we are doing the same for fallback here.
      for (const key in headers) {
        metadata[key] = Array.isArray(headers[key])
          ? (headers[key] as string[])
          : ([headers[key]] as string[]);
      }

      // gRPC-fallback request must have 'grpc-web/' in 'x-goog-api-client'
      const clientVersions: string[] = [];
      if (
        metadata[CLIENT_VERSION_HEADER] &&
        (
          metadata[CLIENT_VERSION_HEADER] as Array<string | number | string[]>
        )[0]
      ) {
        clientVersions.push(
          ...(metadata[CLIENT_VERSION_HEADER] as string[])[0].split(' '),
        );
      }
      clientVersions.push(`grpc-web/${version}`);
      metadata[CLIENT_VERSION_HEADER] = [clientVersions.join(' ')];

      if (!moreHeaders) {
        return metadata;
      }
      for (const key in moreHeaders) {
        if (key.toLowerCase() !== CLIENT_VERSION_HEADER) {
          const value = moreHeaders[key];
          if (Array.isArray(value)) {
            if (metadata[key] === undefined) {
              metadata[key] = value;
            } else {
              if (Array.isArray(metadata[key])) {
                (
                  metadata[key]! as Array<
                    string | number | string[] | undefined
                  >
                ).push(...value);
              } else {
                throw new Error(
                  `Can not add value ${value} to the call metadata.`,
                );
              }
            }
          } else {
            metadata[key] = [value] as string[];
          }
        }
      }
      return metadata;
    }
    return gax.constructSettings(
      serviceName,
      clientConfig,
      configOverrides,
      Status,
      {metadataBuilder: buildMetadata},
    );
  }

  /**
   * gRPC-fallback version of createStub
   * Creates a gRPC-fallback stub with authentication headers built from supplied `AuthClient` instance
   *
   * @param {function} CreateStub - The constructor function of the stub.
   * @param {Object} service - A protobufjs Service object (as returned by lookupService)
   * @param {Object} opts - Connection options, as described below.
   * @param {string} opts.servicePath - The hostname of the API endpoint service.
   * @param {number} opts.port - The port of the service.
   * @return {Promise} A promise which resolves to a gRPC-fallback service stub, which is a protobuf.js service stub instance modified to match the gRPC stub API
   */
  async createStub(
    service: protobuf.Service,
    opts: ClientStubOptions,
    // For consistency with createStub in grpc.ts, customServicePath is defined:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customServicePath?: boolean,
  ) {
    if (!this.authClient) {
      if (this.auth && 'getClient' in this.auth) {
        this.authClient = await this.auth.getClient();
      } else if (this.auth && 'getRequestHeaders' in this.auth) {
        this.authClient = this.auth;
      }
    }
    if (!this.authClient) {
      throw new Error('No authentication was provided');
    }
    if (!opts.universeDomain) {
      opts.universeDomain = 'googleapis.com';
    }
    if (opts.universeDomain) {
      const universeFromAuth = this.authClient.universeDomain;
      if (universeFromAuth && opts.universeDomain !== universeFromAuth) {
        throw new Error(
          `The configured universe domain (${opts.universeDomain}) does not match the universe domain found in the credentials (${universeFromAuth}). ` +
            "If you haven't configured the universe domain explicitly, googleapis.com is the default.",
        );
      }
    }
    service.resolveAll();
    const methods = GrpcClient.getServiceMethods(service);

    const protocol = opts.protocol || 'https';

    let servicePath = opts.servicePath;
    if (
      !servicePath &&
      service.options &&
      service.options['(google.api.default_host)']
    ) {
      servicePath = service.options['(google.api.default_host)'];
    }
    if (!servicePath) {
      throw new Error(
        `Cannot determine service API path for service ${service.name}.`,
      );
    }

    let servicePort;
    const match = servicePath!.match(/^(.*):(\d+)$/);
    if (match) {
      servicePath = match[1];
      servicePort = parseInt(match[2]);
    }
    if (opts.port) {
      servicePort = opts.port;
    } else if (!servicePort) {
      servicePort = 443;
    }

    const encoder = fallbackRest.encodeRequest;
    const decoder = fallbackRest.decodeResponse;
    const serviceStub = generateServiceStub(
      methods,
      protocol,
      servicePath,
      servicePort,
      this.auth || this.authClient,
      encoder,
      decoder,
      this.numericEnums,
      this.minifyJson,
    );

    return serviceStub;
  }

  /**
   * Creates a 'bytelength' function for a given proto message class.
   *
   * See {@link BundleDescriptor} about the meaning of the return value.
   *
   * @param {function} message - a constructor function that is generated by
   *   protobuf.js. Assumes 'encoder' field in the message.
   * @return {function(Object):number} - a function to compute the byte length
   *   for an object.
   */
  static createByteLengthFunction(message: typeof protobuf.Message) {
    return gax.createByteLengthFunction(message);
  }
}

export const protobufFromJSON = GrpcClient.protobufFromJSON;

/**
 * gRPC-fallback version of lro
 *
 * @param {Object=} options.auth - An instance of google-auth-library.
 * @return {Object} A OperationsClientBuilder that will return a OperationsClient
 */
export function lro(options: GrpcClientOptions) {
  options = Object.assign({scopes: []}, options);
  if (options.protoJson) {
    options = Object.assign(options, {fallback: true});
  }
  const gaxGrpc = new GrpcClient(options);
  return new OperationsClientBuilder(gaxGrpc, options.protoJson);
}
export {operationsProtos, IamProtos, LocationProtos};

/**
 * gRPC-fallback version of createApiCall
 *
 * Converts an rpc call into an API call governed by the settings.
 *
 * In typical usage, `func` will be a promise to a callable used to make an rpc
 * request. This will mostly likely be a bound method from a request stub used
 * to make an rpc call. It is not a direct function but a Promise instance,
 * because of its asynchronism (typically, obtaining the auth information).
 *
 * The result is a function which manages the API call with the given settings
 * and the options on the invocation.
 *
 * Throws exception on unsupported streaming calls
 *
 * @param {Promise<GRPCCall>|GRPCCall} func - is either a promise to be used to make
 *   a bare RPC call, or just a bare RPC call.
 * @param {CallSettings} settings - provides the settings for this call
 * @param {Descriptor} descriptor - optionally specify the descriptor for
 *   the method call.
 * @return {GaxCall} func - a bound method on a request stub used
 *   to make an rpc call.
 */
export function createApiCall(
  func: Promise<GRPCCall> | GRPCCall,
  settings: gax.CallSettings,
  descriptor?: Descriptor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _fallback?: boolean | string, // unused; for compatibility only
): GaxCall {
  if (
    descriptor &&
    'streaming' in descriptor &&
    (descriptor as StreamDescriptor).type !== StreamType.SERVER_STREAMING
  ) {
    return () => {
      throw new Error(
        'The REST transport currently does not support client-streaming or bidi-stream calls.',
      );
    };
  }
  if (descriptor && 'streaming' in descriptor && !isNodeJS()) {
    // TODO: with `fetch` this functionality is available in the browser...
    return () => {
      throw new Error(
        'Server streaming over the REST transport is only supported in Node.js.',
      );
    };
  }
  return _createApiCall(func, settings, descriptor);
}

export {protobuf};
export * as protobufMinimal from 'protobufjs/minimal';

export {warn} from './warnings';
export {Operation, operation} from './longRunningCalls/longrunning';
export {GoogleError} from './googleError';

// Different environments or bundlers may or may not respect "browser" field
// in package.json (e.g. Electron does not respect it, but if you run the code
// through webpack first, it will follow the "browser" field).
// To make it safer and more compatible, let's make sure that if you do
// const gax = require("google-gax");
// you can always ask for gax.fallback, regardless of "browser" field being
// understood or not.
const fallback = module.exports;
export {fallback};
