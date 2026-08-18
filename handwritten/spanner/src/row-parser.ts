import {protos} from '@google-cloud/spanner-api';
import google = protos.google;
import {GrpcService} from './common-grpc/service';
import {codec, Json, JSONOptions, Field, Value} from './codec';
import {Row, RowOptions} from './partial-result-stream';

export class SpannerRowParser {
  private _options: RowOptions;
  private _fields?: google.spanner.v1.StructType.Field[];
  private _decoders?: Function[];
  private _pendingValue?: any;
  private _values: any[]; // Stores pending cross-chunk rows

  constructor(options: RowOptions = {}) {
    this._options = options;
    this._values = [];
  }

  processChunk(chunk: google.spanner.v1.PartialResultSet): (Row | Json)[] {
    const rowsFound: (Row | Json)[] = [];
    if (!this._fields && chunk.metadata?.rowType?.fields) {
      this._fields = chunk.metadata.rowType
        .fields as google.spanner.v1.StructType.Field[];
      this._decoders = this._fields.map(({name, type}) => {
        const columnMetadata = (this._options.columnsMetadata as any)?.[name!];
        return codec.getDecoder(
          type as google.spanner.v1.Type,
          columnMetadata,
          this._options.json ? this._options.jsonOptions || {} : undefined,
        );
      });
    }

    if (!this._fields || this._fields.length === 0) {
      return rowsFound;
    }

    const chunkValues = chunk.values || [];
    const numValues = chunkValues.length;
    const values = new Array(numValues);
    for (let i = 0; i < numValues; i++) {
      values[i] = GrpcService.decodeValue_(chunkValues[i]);
    }

    // Resolve pending cross-boundary value
    if (this._pendingValue !== undefined && values.length > 0) {
      const type = this._fields[this._values.length % this._fields.length].type;
      const merged = this.merge(
        type! as google.spanner.v1.Type,
        this._pendingValue,
        values[0],
      );
      this._pendingValue = undefined;

      if (merged.length === 1) {
        values[0] = merged[0];
      } else {
        values.shift();
        values.unshift(...merged);
      }
    }

    if (chunk.chunkedValue) {
      this._pendingValue = values.pop();
    }

    const fieldCount = this._fields.length;
    let offset = 0;

    // 1. Drain the partial row state array if it holds values
    if (this._values.length > 0) {
      const remainingNeeded = fieldCount - this._values.length;
      if (values.length - offset >= remainingNeeded) {
        for (let i = 0; i < remainingNeeded; i++) {
          this._values.push(values[offset++]);
        }
        rowsFound.push(this._createRow(this._values, 0));
        this._values.length = 0; // REUSE buffer
      } else {
        while (offset < values.length) {
          this._values.push(values[offset++]);
        }
        return rowsFound;
      }
    }

    // 2. Process complete rows directly from the chunk array with an offset
    const completeRowsPossible = Math.floor(
      (values.length - offset) / fieldCount,
    );
    for (let r = 0; r < completeRowsPossible; r++) {
      rowsFound.push(this._createRow(values, offset));
      offset += fieldCount;
    }

    // 3. Buffer any trailing values into the partial row state
    while (offset < values.length) {
      this._values.push(values[offset++]);
    }

    return rowsFound;
  }

  resetPendingValues() {
    this._pendingValue = undefined;
    this._values.length = 0;
  }

  private _createRow(rawValuesList: any[], offset: number): Row | Json {
    if (this._options.json) {
      const json: Json = {};
      const fields = this._fields!;
      const decoders = this._decoders!;
      const includeNameless = !!this._options.jsonOptions?.includeNameless;

      for (let i = 0; i < fields.length; i++) {
        const {name} = fields[i];
        if (!name && !includeNameless) continue;
        const fieldName = name ? name : `_${i}`;
        json[fieldName] = decoders[i](rawValuesList[offset + i]);
      }
      return json;
    }

    const fieldCount = this._fields!.length;
    const fields = new Array(fieldCount);
    for (let i = 0; i < fieldCount; i++) {
      fields[i] = {
        name: this._fields![i].name,
        value: this._decoders![i](rawValuesList[offset + i]),
      };
    }

    Object.defineProperty(fields, 'toJSON', {
      value: (options?: JSONOptions): Json => {
        return codec.convertFieldsToJson(fields as Field[], options);
      },
    });
    return fields as Row;
  }

  private merge(type: google.spanner.v1.Type, head: any, tail: any): any[] {
    if (
      type.code === google.spanner.v1.TypeCode.ARRAY ||
      type.code === 'ARRAY' ||
      type.code === google.spanner.v1.TypeCode.STRUCT ||
      type.code === 'STRUCT'
    ) {
      if (head === null || tail === null) return [head, tail];
      return [this.mergeLists(type, head, tail)];
    }
    if (typeof head === 'string' && typeof tail === 'string') {
      return [head + tail];
    }
    return [head, tail];
  }

  private mergeLists(
    type: google.spanner.v1.Type,
    head: any[],
    tail: any[],
  ): any[] {
    if (head.length === 0) return [...tail];
    if (tail.length === 0) return [...head];

    let listType: google.spanner.v1.Type;
    if (
      type.code === 'ARRAY' ||
      type.code === google.spanner.v1.TypeCode.ARRAY
    ) {
      listType = type.arrayElementType as google.spanner.v1.Type;
    } else {
      listType = type.structType!.fields![head.length - 1]
        .type as google.spanner.v1.Type;
    }
    const merged = this.merge(listType, head.pop(), tail.shift());
    return [...head, ...merged, ...tail];
  }
}
