// Copyright 2026 Google LLC
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

import * as $protobuf from 'protobufjs';

const root = $protobuf.Root.fromJSON({
  options: {syntax: 'proto3'},
  nested: {
    perftools: {
      options: {syntax: 'proto3'},
      nested: {
        profiles: {
          options: {syntax: 'proto3'},
          nested: {
            Profile: {
              fields: {
                sampleType: {rule: 'repeated', type: 'ValueType', id: 1},
                sample: {rule: 'repeated', type: 'Sample', id: 2},
                mapping: {rule: 'repeated', type: 'Mapping', id: 3},
                location: {rule: 'repeated', type: 'Location', id: 4},
                function: {rule: 'repeated', type: 'Function', id: 5},
                stringTable: {rule: 'repeated', type: 'string', id: 6},
                dropFrames: {type: 'int64', id: 7},
                keepFrames: {type: 'int64', id: 8},
                timeNanos: {type: 'int64', id: 9},
                durationNanos: {type: 'int64', id: 10},
                periodType: {type: 'ValueType', id: 11},
                period: {type: 'int64', id: 12},
                comment: {
                  rule: 'repeated',
                  type: 'int64',
                  id: 13,
                  options: {packed: true},
                },
                defaultSampleType: {type: 'int64', id: 14},
              },
            },
            ValueType: {
              fields: {
                type: {type: 'int64', id: 1},
                unit: {type: 'int64', id: 2},
              },
            },
            Sample: {
              fields: {
                locationId: {
                  rule: 'repeated',
                  type: 'uint64',
                  id: 1,
                  options: {packed: true},
                },
                value: {
                  rule: 'repeated',
                  type: 'int64',
                  id: 2,
                  options: {packed: true},
                },
                label: {rule: 'repeated', type: 'Label', id: 3},
              },
            },
            Label: {
              fields: {
                key: {type: 'int64', id: 1},
                str: {type: 'int64', id: 2},
                num: {type: 'int64', id: 3},
                numUnit: {type: 'int64', id: 4},
              },
            },
            Mapping: {
              fields: {
                id: {type: 'uint64', id: 1},
                memoryStart: {type: 'uint64', id: 2},
                memoryLimit: {type: 'uint64', id: 3},
                fileOffset: {type: 'uint64', id: 4},
                filename: {type: 'int64', id: 5},
                buildId: {type: 'int64', id: 6},
                hasFunctions: {type: 'bool', id: 7},
                hasFilenames: {type: 'bool', id: 8},
                hasLineNumbers: {type: 'bool', id: 9},
                hasInlineFrames: {type: 'bool', id: 10},
              },
            },
            Location: {
              fields: {
                id: {type: 'uint64', id: 1},
                mappingId: {type: 'uint64', id: 2},
                address: {type: 'uint64', id: 3},
                line: {rule: 'repeated', type: 'Line', id: 4},
              },
            },
            Line: {
              fields: {
                functionId: {type: 'uint64', id: 1},
                line: {type: 'int64', id: 2},
              },
            },
            Function: {
              fields: {
                id: {type: 'uint64', id: 1},
                name: {type: 'int64', id: 2},
                systemName: {type: 'int64', id: 3},
                filename: {type: 'int64', id: 4},
                startLine: {type: 'int64', id: 5},
              },
            },
          },
        },
      },
    },
  },
});

root.resolveAll();

export type LongLike = number | $protobuf.Long;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace perftools {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace profiles {
    export interface IValueType {
      type?: LongLike | null;
      unit?: LongLike | null;
    }

    export interface ILabel {
      key?: LongLike | null;
      str?: LongLike | null;
      num?: LongLike | null;
      numUnit?: LongLike | null;
    }

    export interface ISample {
      locationId?: LongLike[] | null;
      value?: LongLike[] | null;
      label?: ILabel[] | null;
    }

    export interface IMapping {
      id?: LongLike | null;
      memoryStart?: LongLike | null;
      memoryLimit?: LongLike | null;
      fileOffset?: LongLike | null;
      filename?: LongLike | null;
      buildId?: LongLike | null;
      hasFunctions?: boolean | null;
      hasFilenames?: boolean | null;
      hasLineNumbers?: boolean | null;
      hasInlineFrames?: boolean | null;
    }

    export interface ILine {
      functionId?: LongLike | null;
      line?: LongLike | null;
    }

    export interface ILocation {
      id?: LongLike | null;
      mappingId?: LongLike | null;
      address?: LongLike | null;
      line?: ILine[] | null;
    }

    export interface IFunction {
      id?: LongLike | null;
      name?: LongLike | null;
      systemName?: LongLike | null;
      filename?: LongLike | null;
      startLine?: LongLike | null;
    }

    export interface IProfile {
      sampleType?: IValueType[] | null;
      sample?: ISample[] | null;
      mapping?: IMapping[] | null;
      location?: ILocation[] | null;
      function?: IFunction[] | null;
      stringTable?: string[] | null;
      dropFrames?: LongLike | null;
      keepFrames?: LongLike | null;
      timeNanos?: LongLike | null;
      durationNanos?: LongLike | null;
      periodType?: IValueType | null;
      period?: LongLike | null;
      comment?: LongLike[] | null;
      defaultSampleType?: LongLike | null;
    }

    export interface ProtoConstructor<T, I> {
      new (properties?: I): T;
      create(properties?: I): T;
      encode(message: I, writer?: $protobuf.Writer): $protobuf.Writer;
      decode(reader: $protobuf.Reader | Uint8Array, length?: number): T;
    }

    export type ValueType = IValueType;
    export const ValueType = root.lookupType('perftools.profiles.ValueType')
      .ctor as unknown as ProtoConstructor<ValueType, IValueType>;

    export type Label = ILabel;
    export const Label = root.lookupType('perftools.profiles.Label')
      .ctor as unknown as ProtoConstructor<Label, ILabel>;

    export type Sample = ISample;
    export const Sample = root.lookupType('perftools.profiles.Sample')
      .ctor as unknown as ProtoConstructor<Sample, ISample>;

    export type Mapping = IMapping;
    export const Mapping = root.lookupType('perftools.profiles.Mapping')
      .ctor as unknown as ProtoConstructor<Mapping, IMapping>;

    export type Line = ILine;
    export const Line = root.lookupType('perftools.profiles.Line')
      .ctor as unknown as ProtoConstructor<Line, ILine>;

    export type Location = ILocation;
    export const Location = root.lookupType('perftools.profiles.Location')
      .ctor as unknown as ProtoConstructor<Location, ILocation>;

    export type Function = IFunction;
    export const Function = root.lookupType('perftools.profiles.Function')
      .ctor as unknown as ProtoConstructor<Function, IFunction>;

    export type Profile = IProfile;
    export const Profile = root.lookupType('perftools.profiles.Profile')
      .ctor as unknown as ProtoConstructor<Profile, IProfile>;
  }
}
