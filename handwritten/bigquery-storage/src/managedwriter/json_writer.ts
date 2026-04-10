// Copyright 2023 Google LLC
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

import * as protos from '../../protos/protos';
import {PendingWrite} from './pending_write';
import {RemoveListener} from './stream_connection';
import * as adapt from '../adapt';
import {Writer, WriterOptions} from './writer';
import {JSONEncoder} from './encoder';

type TableSchema = protos.google.cloud.bigquery.storage.v1.ITableSchema;
type MissingValueInterpretation =
  protos.google.cloud.bigquery.storage.v1.AppendRowsRequest['defaultMissingValueInterpretation'];
type MissingValueInterpretationMap = {
  [column: string]: MissingValueInterpretation;
};
type IInt64Value = protos.google.protobuf.IInt64Value;
type IDescriptorProto = protos.google.protobuf.IDescriptorProto;
export type JSONPrimitive = string | number | bigint | boolean | Date | null;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = {[member: string]: JSONValue};
export type JSONArray = Array<JSONValue>;
export type JSONList = Array<JSONObject>;

/**
 * A StreamWriter that can write JSON data to BigQuery tables. The JSONWriter is
 * built on top of a Writer, and it simply converts all JSON data to protobuf messages then
 * calls Writer's appendRows() method to write to BigQuery tables. It maintains all Writer
 * functions, but also provides an additional feature: schema update support, where if the BigQuery
 * table schema is updated, users will be able to ingest data on the new schema after some time (in
 * order of minutes).
 *
 * @class
 * @extends managedwriter.Writer
 * @memberof managedwriter
 * @see managedwriter.Writer
 */
export class JSONWriter {
  private _writer: Writer;
  private _encoder: JSONEncoder;
  private _schemaListener: RemoveListener;

  /**
   * Creates a new JSONWriter instance.
   *
   * @param {WriterOptions} params - The parameters for the JSONWriter.
   *   See WriterOptions docs for more information.
   */
  constructor(params: WriterOptions) {
    const {connection, protoDescriptor} = params;
    this._writer = new Writer(params);
    this._encoder = new JSONEncoder({
      protoDescriptor: params.protoDescriptor,
    });
    this._schemaListener = connection.onSchemaUpdated(this.onSchemaUpdated);
    this.setProtoDescriptor(protoDescriptor);
  }

  private onSchemaUpdated = (schema: TableSchema) => {
    const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
      schema,
      'root',
    );
    this.setProtoDescriptor(protoDescriptor);
  };

  /**
   * Update the proto descriptor for the Writer.
   * Internally a reconnection event is gonna happen to apply
   * the new proto descriptor.
   *
   * @param {IDescriptorProto} protoDescriptor - The proto descriptor.
   */
  setProtoDescriptor(protoDescriptor: IDescriptorProto): void {
    this._writer.setProtoDescriptor(protoDescriptor);
    this._encoder.setProtoDescriptor(protoDescriptor);
  }

  /**
   * Update how missing values are interpreted for the given stream.
   *
   * @param {MissingValueInterpretation} defaultMissingValueInterpretation
   */
  setDefaultMissingValueInterpretation(
    defaultMissingValueInterpretation: MissingValueInterpretation,
  ) {
    this._writer.setDefaultMissingValueInterpretation(
      defaultMissingValueInterpretation,
    );
  }

  /**
   * Update how missing values are interpreted for individual columns.
   *
   * @param {MissingValueInterpretationMap} missingValueInterpretations
   */
  setMissingValueInterpretations(
    missingValueInterpretations: MissingValueInterpretationMap,
  ) {
    this._writer.setMissingValueInterpretations(missingValueInterpretations);
  }

  /**
   * Writes a JSONList that contains objects to be written to the BigQuery table by first converting
   * the JSON data to protobuf messages, then using Writer's appendRows() to write the data at current end
   * of stream. If there is a schema update, the current Writer is closed and reopened with the updated schema.
   *
   * @param {JSONList} rows - The list of JSON rows.
   * @param {number|Long|string|null} offsetValue? - The offset value.
   * @returns {managedwriter.PendingWrite} The pending write.
   */
  appendRows(rows: JSONList, offsetValue?: IInt64Value['value']): PendingWrite {
    const serializedRows = this._encoder.encodeRows(rows);
    const pw = this._writer.appendRows(
      {
        serializedRows,
      },
      offsetValue,
    );
    return pw;
  }

  close() {
    this._writer.close();
    this._schemaListener.off();
  }
}
