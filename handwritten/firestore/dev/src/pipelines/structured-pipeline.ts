/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ProtoSerializable, Serializer} from '../serializer';
import {google} from '../../protos/firestore_v1_proto_api';
import IStructuredPipeline = google.firestore.v1.IStructuredPipeline;
import IPipeline = google.firestore.v1.IPipeline;
import {OptionsUtil} from './options-util';

/**
 * Defines the known options for StructuredPipeline and the valid values of
 * each option.
 */
export type StructuredPipelineOptions = {
  indexMode?: 'recommended';
  explainOptions?: {
    mode?: 'execute' | 'explain' | 'analyze';
    outputFormat?: 'text';
  };
};

/**
 * StructuredPipeline class represents the StructuredPipeline proto object
 * which is a parameter to the ExecutePipelineRequest proto and executePipeline RPC.
 *
 * StructuredPipeline encapsulates the Pipeline and PipelineOptions and supports
 * serialization of this data to a StructuredPipeline proto.
 */
export class StructuredPipeline
  implements ProtoSerializable<IStructuredPipeline>
{
  /**
   * OptionsUtil which defines the known StructuredPipelineOptions.
   * This maps client side options to their server names and structure.
   */
  readonly optionsUtil = new OptionsUtil({
    indexMode: {
      serverName: 'index_mode',
    },
    explainOptions: {
      serverName: 'explain_options',
      nestedOptions: {
        mode: {
          serverName: 'mode',
        },
        outputFormat: {
          serverName: 'output_format',
        },
      },
    },
  });

  /**
   * StructuredPipeline constructor.
   * @param pipeline - Pipeline executed by this StructuredPipeline.
   * @param options - Known structured pipeline options.
   * @param optionsOverride - Key value pairs of known and unknown options.
   */
  constructor(
    private pipeline: ProtoSerializable<IPipeline>,
    private options: StructuredPipelineOptions,
    private optionsOverride: Record<string, unknown>,
  ) {}

  /**
   * Serializes this object to a StructuredPipeline proto.
   * @param serializer - Serializer instance used to perform serialization of this object.
   */
  _toProto(serializer: Serializer): IStructuredPipeline {
    return {
      pipeline: this.pipeline._toProto(serializer),
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.optionsOverride,
      ),
    };
  }
}
