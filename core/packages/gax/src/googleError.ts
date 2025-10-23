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

import {Status, rpcCodeFromHttpStatusCode} from './status';
import * as protobuf from 'protobufjs';
import {Metadata} from './grpc';
import * as serializer from 'proto3-json-serializer';
import {defaultToObjectOptions} from './fallback';
import {JSONValue} from 'proto3-json-serializer';

const PROTO_TYPE_PREFIX = 'type.googleapis.com/';
const RESOURCE_INFO_TYPE = 'type.googleapis.com/google.rpc.ResourceInfo';
const DEFAULT_RESOURCE_TYPE_NAME_FOR_UNKNOWN_TYPES = 'Unknown type';
const ANY_PROTO_TYPE_NAME = 'google.protobuf.Any';
const UNKNOWN_TYPE_ENCONDED_ERROR_PREFIX = 'Unknown type encoded in';
const UNKNOWN_TYPE_NO_SUCH_TYPE = 'no such type';

const NUM_OF_PARTS_IN_PROTO_TYPE_NAME = 2;

export class GoogleError extends Error {
  code?: Status;
  note?: string;
  metadata?: Metadata;
  statusDetails?: string | protobuf.Message<{}>[];
  reason?: string;
  domain?: string;
  errorInfoMetadata?: {[propName: string]: string};

  // Parse details field in google.rpc.status wire over gRPC medatadata.
  // Promote google.rpc.ErrorInfo if exist.
  static parseGRPCStatusDetails(err: GoogleError): GoogleError {
    const decoder = new GoogleErrorDecoder();
    try {
      if (err.metadata && err.metadata.get('grpc-status-details-bin')) {
        const statusDetailsObj: GRPCStatusDetailsObject =
          decoder.decodeGRPCStatusDetails(
            err.metadata.get('grpc-status-details-bin') as [],
          );
        if (
          statusDetailsObj &&
          statusDetailsObj.details &&
          statusDetailsObj.details.length > 0
        ) {
          err.statusDetails = statusDetailsObj.details;
        }
        if (statusDetailsObj && statusDetailsObj.errorInfo) {
          err.reason = statusDetailsObj.errorInfo.reason;
          err.domain = statusDetailsObj.errorInfo.domain;
          err.errorInfoMetadata = statusDetailsObj.errorInfo.metadata;
        }
      }
    } catch (decodeErr) {
      // ignoring the error
    }
    return err;
  }

  // Parse http JSON error and promote google.rpc.ErrorInfo if exist.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static parseHttpError(json: any): GoogleError {
    if (Array.isArray(json)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      json = json.find((obj: any) => {
        return 'error' in obj;
      });
    }

    // fallback logic.
    // related issue: https://github.com/googleapis/gax-nodejs/issues/1303
    // google error mapping: https://cloud.google.com/apis/design/errors
    // if input json doesn't have 'error' fields, wrap the whole object with 'error' field
    if (!json['error']) {
      json['error'] = {};

      Object.keys(json)
        .filter(key => key !== 'error')
        .forEach(key => {
          json['error'][key] = json[key];
          delete json[key];
        });
    }

    const decoder = new GoogleErrorDecoder();
    const proto3Error = decoder.decodeHTTPError(json['error']);
    const error = Object.assign(
      new GoogleError(json['error']['message']),
      proto3Error,
    );
    // Get gRPC Status Code
    if (
      json['error']['status'] &&
      Status[json['error']['status'] as keyof typeof Status]
    ) {
      error.code = Status[json['error']['status'] as keyof typeof Status];
    } else if (json['error']['code']) {
      // Map Http Status Code to gRPC Status Code
      error.code = rpcCodeFromHttpStatusCode(json['error']['code']);
    } else {
      // If error code is absent, proto3 message default value is 0. We should
      // keep error code as undefined.
      delete error.code;
    }
    // Keep consistency with gRPC statusDetails fields. gRPC details has been occupied before.
    // Rename "details" to "statusDetails".
    if (error.details) {
      try {
        const statusDetailsObj: GRPCStatusDetailsObject =
          decoder.decodeHttpStatusDetails(error.details);
        if (
          statusDetailsObj &&
          statusDetailsObj.details &&
          statusDetailsObj.details.length > 0
        ) {
          error.statusDetails = statusDetailsObj.details;
        }
        if (statusDetailsObj && statusDetailsObj.errorInfo) {
          error.reason = statusDetailsObj.errorInfo.reason;
          error.domain = statusDetailsObj.errorInfo.domain;
          // error.metadata has been occupied for gRPC metadata, so we use
          // errorInfoMetadata to represent ErrorInfo' metadata field. Keep
          // consistency with gRPC ErrorInfo metadata field name.
          error.errorInfoMetadata = statusDetailsObj.errorInfo.metadata;
        }
      } catch (decodeErr) {
        // ignoring the error
      }
    }
    return error;
  }
}

export type FallbackServiceError = FallbackStatusObject & Error;
interface FallbackStatusObject {
  code: Status;
  message: string;
  statusDetails: Array<{}>;
  reason?: string;
  domain?: string;
  errorInfoMetadata?: {string: string};
}

interface ProtobufAny {
  type_url: string;
  value: Uint8Array;
}

interface RpcStatus {
  code: number;
  message: string;
  details: ProtobufAny[];
}

interface GRPCStatusDetailsObject {
  details: protobuf.Message<{}>[];
  errorInfo?: ErrorInfo;
}

interface ErrorInfo {
  reason: string;
  domain: string;
  metadata: {string: string};
}

// Interface to capture the details provided in RPC status.
interface ErrorDetails {
  // Details that most likely are in RPC status.
  knownDetails: JSONValue[];
  // Details that most likely are not in RPC status.
  unknownDetails: JSONValue[];
}

// Get proto type name removing the prefix. For example full type name: type.googleapis.com/google.rpc.Help, the function returns google.rpc.Help.
const getProtoTypeNameFromFullNameType = (fullTypeName: string): string => {
  const parts = fullTypeName.split(PROTO_TYPE_PREFIX);
  if (parts.length !== NUM_OF_PARTS_IN_PROTO_TYPE_NAME) {
    throw Error("Can't convert full type name");
  }
  return parts[1];
};

// Return true if proto is known in protobuf.
const isDetailKnownProto = (protobuf: any, detail: any): boolean => {
  try {
    const typeName = getProtoTypeNameFromFullNameType(detail['@type']);
    if (typeName === ANY_PROTO_TYPE_NAME) {
      return isDetailKnownProto(protobuf, detail.value);
    }
    const proto = protobuf.lookup(typeName);
    if (!proto) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

// Check if error is unknown type encoded.
const isUnknownTypeEncodedError = (error: any): boolean => {
  if (typeof error === 'object' && error && 'message' in error) {
    return (
      error.message.includes(UNKNOWN_TYPE_ENCONDED_ERROR_PREFIX) ||
      error.message.includes(UNKNOWN_TYPE_NO_SUCH_TYPE)
    );
  }
  return false;
};

// Build unknown proto as protobuf.Message<{}>.
const buildUnknownProtoAsAny = (
  unknownProto: ProtobufAny,
  anyProto: any,
): protobuf.Message<{}> => {
  return anyProto.create({
    type_url: unknownProto.type_url,
    value: unknownProto.value,
  });
};

// Given a protobuf with rpc status protos and a json response value, generate ErrorDetails.
// Function will traverse trough all the details of the json value and split them based on ErrorDetails.
const getErrorDetails = (protobuf: any, json: JSONValue): ErrorDetails => {
  const error_details: ErrorDetails = {
    knownDetails: [],
    unknownDetails: [],
  };
  if (typeof json === 'object' && json !== null && 'details' in json) {
    const details: any = json['details'];
    for (const detail of details) {
      if (isDetailKnownProto(protobuf, detail)) {
        error_details.knownDetails.push(detail);
      } else {
        error_details.unknownDetails.push(detail);
      }
    }
  }
  return error_details;
};

const makeResourceInfoError = (
  resourceType: string,
  description: string,
): JSONValue => {
  return {
    '@type': RESOURCE_INFO_TYPE,
    resourceType,
    description,
  };
};

// Convert unknownDetails to rpc.ResourceInfo. The JSONValue is converted to string and returned as description.
const convertUnknownDetailsToResourceInfoError = (
  unknownDetails: JSONValue[],
) => {
  const unknownDetailsAsResourceInfoError: JSONValue[] = [];
  for (const unknownDetail of unknownDetails) {
    try {
      let resourceType: string = DEFAULT_RESOURCE_TYPE_NAME_FOR_UNKNOWN_TYPES;
      if (
        typeof unknownDetail === 'object' &&
        unknownDetail !== null &&
        '@type' in unknownDetail
      ) {
        const unknownType: any = unknownDetail['@type'];
        resourceType = unknownType;
      }
      // We don't know the proto, so we convert the object to string and assign it as description.
      const description = JSON.stringify(unknownDetail);
      unknownDetailsAsResourceInfoError.push(
        makeResourceInfoError(resourceType, description),
      );
    } catch (e) {
      // Failed convert to string, ignore it.
    }
  }
  return unknownDetailsAsResourceInfoError;
};

export class GoogleErrorDecoder {
  root: protobuf.Root;
  anyType: protobuf.Type;
  statusType: protobuf.Type;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const errorProtoJson = require('../../build/protos/status.json');
    this.root = protobuf.Root.fromJSON(errorProtoJson);
    this.anyType = this.root.lookupType('google.protobuf.Any');
    this.statusType = this.root.lookupType('google.rpc.Status');
  }

  decodeProtobufAny(anyValue: ProtobufAny): protobuf.Message<{}> {
    const match = anyValue.type_url.match(/^type.googleapis.com\/(.*)/);
    if (!match) {
      throw new Error(
        `Unknown type encoded in google.protobuf.any: ${anyValue.type_url}`,
      );
    }
    const typeName = match[1];
    const type = this.root.lookupType(typeName);
    if (!type) {
      throw new Error(`Cannot lookup type ${typeName}`);
    }
    return type.decode(anyValue.value);
  }

  // Decodes gRPC-fallback error which is an instance of google.rpc.Status.
  decodeRpcStatus(buffer: Buffer | ArrayBuffer): FallbackStatusObject {
    const uint8array = new Uint8Array(buffer);
    const status = this.statusType.decode(uint8array) as unknown as RpcStatus;

    // google.rpc.Status contains an array of google.protobuf.Any
    // which need a special treatment
    const details: Array<protobuf.Message> = [];
    let errorInfo;
    for (const detail of status.details) {
      try {
        const decodedDetail = this.decodeProtobufAny(detail);
        details.push(decodedDetail);
        if (detail.type_url === 'type.googleapis.com/google.rpc.ErrorInfo') {
          errorInfo = decodedDetail as unknown as ErrorInfo;
        }
      } catch (err) {
        // cannot decode detail, likely because of the unknown type - just skip it
      }
    }
    const result = {
      code: status.code,
      message: status.message,
      statusDetails: details,
      reason: errorInfo?.reason,
      domain: errorInfo?.domain,
      errorInfoMetadata: errorInfo?.metadata,
    };
    return result;
  }

  // Construct an Error from a StatusObject.
  // Adapted from https://github.com/grpc/grpc-node/blob/main/packages/grpc-js/src/call.ts#L79
  callErrorFromStatus(status: FallbackStatusObject): FallbackServiceError {
    status.message = `${status.code} ${Status[status.code]}: ${status.message}`;
    return Object.assign(new GoogleError(status.message), status);
  }

  // Decodes gRPC-fallback error which is an instance of google.rpc.Status,
  // and puts it into the object similar to gRPC ServiceError object.
  decodeErrorFromBuffer(buffer: Buffer | ArrayBuffer): Error {
    return this.callErrorFromStatus(this.decodeRpcStatus(buffer));
  }

  // Decodes gRPC metadata error details which is an instance of google.rpc.Status.
  decodeGRPCStatusDetails(
    bufferArr: Buffer[] | ArrayBuffer[],
  ): GRPCStatusDetailsObject {
    const details: protobuf.Message<{}>[] = [];
    let errorInfo;
    bufferArr.forEach(buffer => {
      const uint8array = new Uint8Array(buffer);
      const rpcStatus = this.statusType.decode(
        uint8array,
      ) as unknown as RpcStatus;
      for (const detail of rpcStatus.details) {
        try {
          const decodedDetail = this.decodeProtobufAny(detail);
          details.push(decodedDetail);
          if (detail.type_url === 'type.googleapis.com/google.rpc.ErrorInfo') {
            errorInfo = decodedDetail as unknown as ErrorInfo;
          }
        } catch (error: any) {
          if (isUnknownTypeEncodedError(error)) {
            const customErrorAsAny = buildUnknownProtoAsAny(
              detail,
              this.anyType,
            );
            details.push(customErrorAsAny);
          }
          // cannot decode detail - just skip it
        }
      }
    });
    const result = {
      details,
      errorInfo,
    };
    return result;
  }

  // Decodes http error which is an instance of google.rpc.Status.
  decodeHTTPError(json: JSONValue) {
    const errorDetails: ErrorDetails = getErrorDetails(this.root, json);
    let details: JSONValue[] = [];
    if (typeof json === 'object' && json !== null && 'details' in json) {
      if (errorDetails.knownDetails.length) {
        details = errorDetails.knownDetails;
      }
      if (errorDetails.unknownDetails.length) {
        const unknowDetailsAsResourceInfo =
          convertUnknownDetailsToResourceInfoError(errorDetails.unknownDetails);
        details = [...details, ...unknowDetailsAsResourceInfo];
      }
      if (details.length) {
        json.details = details;
      }
    }
    const errorMessage = serializer.fromProto3JSON(this.statusType, json);
    if (!errorMessage) {
      throw new Error(
        `Received error message ${json}, but failed to serialize as proto3 message`,
      );
    }
    return this.statusType.toObject(errorMessage, defaultToObjectOptions);
  }

  // Decodes http error details which is an instance of Array<google.protobuf.Any>.
  decodeHttpStatusDetails(
    rawDetails: Array<ProtobufAny>,
  ): GRPCStatusDetailsObject {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const details: protobuf.Message<{}>[] = [];
    let errorInfo;
    for (const detail of rawDetails) {
      try {
        const decodedDetail = this.decodeProtobufAny(detail);
        details.push(decodedDetail);
        if (detail.type_url === 'type.googleapis.com/google.rpc.ErrorInfo') {
          errorInfo = decodedDetail as unknown as ErrorInfo;
        }
      } catch (err) {
        // cannot decode detail, likely because of the unknown type - just skip it
      }
    }
    return {details, errorInfo};
  }
}
