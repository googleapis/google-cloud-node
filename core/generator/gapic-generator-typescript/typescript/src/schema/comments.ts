// Copyright 2020 Google LLC
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

import type * as protos from '../../../protos/index.js';

// Copied from FieldDescriptorProto to simplify the build
export enum Type {
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  TYPE_GROUP = 10,
  TYPE_MESSAGE = 11,
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  TYPE_SINT32 = 17,
  TYPE_SINT64 = 18,
}

// For one comment in service and method level, paramName & paramName will be ''.
// Only field has name and type of parameters.
export interface Comment {
  paramName: string;
  paramType: string;
  comments: string[];
  // LABEL_OPTIONAL = 1, LABEL_REQUIRED = 2
  fieldBehavior?: protos.google.api.FieldBehavior;
  fieldInfo?: protos.google.api.FieldInfo;
}

// For service, one item will be <serviceName, comment>
// For method, one item will be <serviceName:methodName, comment>
// For field, one item will be <messageInputType:fieldname, comment>
export interface Comments {
  [name: string]: Comment;
}

export class CommentsMap {
  comments: Comments = {};

  constructor(fds: protos.google.protobuf.IFileDescriptorProto[]) {
    const commentsMap: Comments = {};
    for (const fd of fds) {
      if (fd && fd.sourceCodeInfo && fd.sourceCodeInfo.location) {
        const locations = fd.sourceCodeInfo.location;
        for (const location of locations) {
          if (location.leadingComments !== null) {
            // p is an array with format [f1, i1, f2, i2, ...]
            // - f1 refers to the protobuf field tag
            // - if field refer to by f1 is a slice, i1 refers to an element in that slice
            // - f2 and i2 works recursively.
            // So, [6, x] refers to the xth service defined in the file,
            // since the field tag of Service is 6.
            // [6, x, 2, y] refers to the yth method in that service,
            // since the field tag of Method is 2.
            const p = location.path;
            if (p && p.length === 2 && p[0] === 6) {
              if (fd.service && fd.service[p[1]] && fd.service[p[1]].name) {
                const serviceName = fd.service[p[1]].name!;
                const comments = (location.leadingComments || '')
                  .split('\n')
                  .slice(0, -1);
                const serviceComment: Comment = {
                  paramName: '',
                  paramType: '',
                  comments,
                };
                commentsMap[serviceName] = serviceComment;
              }
            } else if (p && p.length === 4 && p[2] === 2 && p[0] === 6) {
              if (
                fd.service &&
                fd.service[p[1]] &&
                fd.service[p[1]].method &&
                fd.service[p[1]].method![p[3]] &&
                fd.service[p[1]].method![p[3]].name
              ) {
                const serviceName = fd.service[p[1]].name!;
                // add method comment into the map
                const methodName = fd.service[p[1]].method![p[3]].name!;
                if (!commentsMap[methodName]) {
                  const comments = (location.leadingComments || '').split('\n');
                  const key = serviceName + ':' + methodName;
                  const methodComment: Comment = {
                    paramName: '',
                    paramType: '',
                    comments,
                  };
                  commentsMap[key] = methodComment;
                }
              }
            } else if (p && p.length === 4 && p[0] === 4 && p[2] === 2) {
              // This contains a field's information
              // example, this path:
              //   [ 4, 3, 2, 7, 1 ]
              // refers to:
              //   file.message_type(3)  // 4, 3
              //       .field(7)         // 2, 7
              //       .name()           // 1
              // This is because FileDescriptorProto.message_type has field number 4:
              //   repeated DescriptorProto message_type = 4;
              // and DescriptorProto.field has field number 2:
              //   repeated FieldDescriptorProto field = 2;
              // and FieldDescriptorProto.name has field number 1:
              //   optional string name = 1;
              if (
                fd.messageType &&
                fd.messageType[p[1]] &&
                fd.messageType[p[1]].field &&
                fd.messageType[p[1]].field![p[3]]
              ) {
                const messageType = fd.messageType[p[1]].name;
                const field = fd.messageType[p[1]].field![p[3]];
                if (field) {
                  // Type Enum: TYPE_STRING, TYPE_BOOL, etc.
                  let paramType = Type[field.type!];
                  // If field.label is 'REPEATED' then the paramType is an array.
                  if (field.label === 3) {
                    paramType += '[]';
                  }
                  const paramName = field.name || '';
                  if (
                    paramType === 'TYPE_MESSAGE' ||
                    paramType === 'TYPE_ENUM' ||
                    paramType === 'TYPE_GROUP'
                  ) {
                    paramType = field.typeName!;
                  }
                  const comments = (location.leadingComments || '')
                    .split('\n')
                    .slice(0, -1);
                  const options = field.options;
                  const fieldComment: Comment = {
                    paramName,
                    paramType,
                    comments,
                  };
                  if (options && options['.google.api.fieldBehavior']) {
                    const fieldBehavior =
                      options['.google.api.fieldBehavior'][0];
                    fieldComment.fieldBehavior = fieldBehavior;
                  }
                  if (
                    options &&
                    options['.google.api.fieldInfo'] &&
                    options['.google.api.fieldInfo']['format']
                  ) {
                    const fieldInfo = options['.google.api.fieldInfo'];
                    fieldComment.fieldInfo =
                      fieldInfo as protos.google.api.FieldInfo;
                  }
                  const key = messageType + ':' + field.name;
                  commentsMap[key] = fieldComment;
                }
              }
            }
          }
        }
        this.comments = commentsMap;
      }
    }
  }
  getCommentsMap() {
    return this.comments;
  }
  getServiceComment(serviceName: string) {
    return this.comments[serviceName]?.comments || [];
  }
  getMethodComments(serviceName: string, methodName: string) {
    const key = serviceName + ':' + methodName;
    return this.comments[key]?.comments || [];
  }
  getParamComments(messageName: string, fieldName: string): Comment {
    const key = messageName + ':' + fieldName;
    return this.comments[key] ?? {paramName: '', paramType: '', comments: []};
  }
}
