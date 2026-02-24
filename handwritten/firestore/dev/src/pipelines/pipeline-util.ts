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

import type * as firestore from '@google-cloud/firestore';
import {GoogleError} from 'google-gax';
import {Duplex, Transform} from 'stream';
import {google} from '../../protos/firestore_v1_proto_api';

import * as protos from '../../protos/firestore_v1_proto_api';
import './expression';
import Firestore, {
  CollectionReference,
  DocumentReference,
  FieldValue,
  Timestamp,
  VectorValue,
} from '../index';
import {logger} from '../logger';
import {FieldPath, QualifiedResourcePath} from '../path';
import {CompositeFilterInternal} from '../reference/composite-filter-internal';
import {NOOP_MESSAGE} from '../reference/constants';
import {FieldFilterInternal} from '../reference/field-filter-internal';
import {FilterInternal} from '../reference/filter-internal';
import {
  PipelineResponse,
  PipelineStreamElement,
  QueryCursor,
} from '../reference/types';
import {Serializer} from '../serializer';
import {
  Deferred,
  getTotalTimeout,
  isObject,
  isPermanentRpcError,
  isPlainObject,
  requestTag,
  wrapError,
} from '../util';
import api = protos.google.firestore.v1;

import {
  Expression,
  BooleanExpression,
  and,
  or,
  field as createField,
  constant,
  map,
  array,
  Constant,
  field,
  Ordering,
  greaterThan,
  lessThan,
  Field,
  AggregateFunction,
} from './expression';
import {Pipeline, PipelineResult, ExplainStats} from './pipelines';
import {StructuredPipeline} from './structured-pipeline';
import Selectable = FirebaseFirestore.Pipelines.Selectable;

/**
 * Returns a builder for DocumentSnapshot and QueryDocumentSnapshot instances.
 * Invoke `.build()' to assemble the final snapshot.
 *
 * @private
 * @internal
 */
export class ExecutionUtil {
  constructor(
    /** @private */
    readonly _firestore: Firestore,
    /** @private */
    readonly _serializer: Serializer,
  ) {}

  _getResponse(
    structuredPipeline: StructuredPipeline,
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
  ): Promise<PipelineResponse> {
    // Capture the error stack to preserve stack tracing across async calls.
    const stack = Error().stack!;

    return new Promise((resolve, reject): void => {
      const result: Array<PipelineResult> = [];
      const output: PipelineResponse = {};

      const stream: NodeJS.EventEmitter = this._stream(
        structuredPipeline,
        transactionOrReadTime,
      );
      stream.on('error', err => {
        reject(wrapError(err, stack));
      });
      stream.on('data', (data: PipelineStreamElement[]) => {
        for (const element of data) {
          if (element.transaction) {
            output.transaction = element.transaction;
          }
          if (element.executionTime) {
            output.executionTime = element.executionTime;
          }
          if (element.explainStats) {
            output.explainStats = element.explainStats;
          }
          if (element.result) {
            result.push(element.result);
          }
        }
      });
      stream.on('end', () => {
        output.result = result;
        resolve(output);
      });
    });
  }

  // This method exists solely to enable unit tests to mock it.
  _isPermanentRpcError(err: GoogleError, methodName: string): boolean {
    return isPermanentRpcError(err, methodName);
  }

  _hasRetryTimedOut(methodName: string, startTime: number): boolean {
    const totalTimeout = getTotalTimeout(methodName);
    if (totalTimeout === 0) {
      return false;
    }

    return Date.now() - startTime >= totalTimeout;
  }

  stream(
    structuredPipeline: StructuredPipeline,
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
  ): NodeJS.ReadableStream {
    const responseStream = this._stream(
      structuredPipeline,
      transactionOrReadTime,
    );
    const transform = new Transform({
      objectMode: true,
      transform(chunk: Array<PipelineStreamElement>, encoding, callback) {
        chunk.forEach(item => {
          if (item.result) {
            this.push(item.result);
          }
        });
        callback();
      },
    });

    responseStream.pipe(transform);
    responseStream.on('error', e => transform.destroy(e));
    return transform;
  }

  _stream(
    structuredPipeline: StructuredPipeline,
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
  ): NodeJS.ReadableStream {
    const tag = requestTag();

    let backendStream: Duplex;
    const stream = new Transform({
      objectMode: true,
      transform: (
        proto: api.ExecutePipelineResponse | typeof NOOP_MESSAGE,
        enc,
        callback,
      ) => {
        if (proto === NOOP_MESSAGE) {
          callback(undefined);
          return;
        }

        if (proto.results && proto.results.length === 0) {
          const output: PipelineStreamElement = {};
          if (proto.transaction?.length) {
            output.transaction = proto.transaction;
          }
          if (proto.executionTime) {
            output.executionTime = Timestamp.fromProto(proto.executionTime);
          }
          callback(undefined, [output]);
        } else {
          let output: PipelineStreamElement[] = proto.results.map(result => {
            const output: PipelineStreamElement = {};
            if (proto.transaction?.length) {
              output.transaction = proto.transaction;
            }
            if (proto.executionTime) {
              output.executionTime = Timestamp.fromProto(proto.executionTime);
            }

            const ref = result.name
              ? new DocumentReference(
                  this._firestore,
                  QualifiedResourcePath.fromSlashSeparatedString(result.name),
                )
              : undefined;

            if (!result.fields) {
              logger(
                '_stream',
                null,
                'Unexpected state: `result.fields` was falsey. Using an empty map.',
              );
            }

            output.result = new PipelineResult(
              this._serializer,
              result.fields || {},
              ref,
              Timestamp.fromProto(proto.executionTime!),
              result.createTime
                ? Timestamp.fromProto(result.createTime!)
                : undefined,
              result.updateTime
                ? Timestamp.fromProto(result.updateTime!)
                : undefined,
            );
            return output;
          });
          if (proto.explainStats?.data?.value) {
            const explainStats = new ExplainStats(proto.explainStats.data);

            output = [
              ...output,
              {
                explainStats,
              } as PipelineStreamElement,
            ];
          }
          callback(undefined, output);
        }
      },
    });

    Promise.all([
      this._firestore.initializeIfNeeded(tag),
      ExplainStats._ensureMessageTypesLoaded(),
    ])
      .then(async () => {
        // `toProto()` might throw an exception. We rely on the behavior of an
        // async function to convert this exception into the rejected Promise we
        // catch below.
        const request: api.IExecutePipelineRequest = {
          database: this._firestore.formattedName,
          structuredPipeline: structuredPipeline._toProto(this._serializer),
        };

        if (transactionOrReadTime instanceof Uint8Array) {
          request.transaction = transactionOrReadTime;
        } else if (transactionOrReadTime instanceof Timestamp) {
          request.readTime = transactionOrReadTime.toProto().timestampValue;
        } else if (transactionOrReadTime) {
          request.newTransaction = transactionOrReadTime;
        }

        let streamActive: Deferred<boolean>;
        do {
          streamActive = new Deferred<boolean>();
          const methodName = 'executePipeline';
          backendStream = await this._firestore.requestStream(
            methodName,
            /* bidirectional= */ false,
            request,
            tag,
          );
          backendStream.on('error', err => {
            backendStream.unpipe(stream);

            logger(
              'PipelineUtil._stream',
              tag,
              'Pipeline failed with stream error:',
              err,
            );
            stream.destroy(err);
            streamActive.resolve(/* active= */ false);
          });
          backendStream.on('end', () => {
            streamActive.resolve(/* active= */ false);
          });
          backendStream.resume();
          backendStream.pipe(stream);
        } while (await streamActive.promise);
      })
      .catch(e => {
        logger(
          'PipelineUtil._stream',
          tag,
          'Pipeline failed with stream error:',
          e,
        );
        stream.destroy(e);
      });

    return stream;
  }
}

function isITimestamp(obj: unknown): obj is google.protobuf.ITimestamp {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if (
    'seconds' in obj &&
    (obj.seconds === null ||
      typeof obj.seconds === 'number' ||
      typeof obj.seconds === 'string') &&
    'nanos' in obj &&
    (obj.nanos === null || typeof obj.nanos === 'number')
  ) {
    return true;
  }

  return false;
}
function isILatLng(obj: unknown): obj is google.type.ILatLng {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if (
    'latitude' in obj &&
    (obj.latitude === null || typeof obj.latitude === 'number') &&
    'longitude' in obj &&
    (obj.longitude === null || typeof obj.longitude === 'number')
  ) {
    return true;
  }

  return false;
}
function isIArrayValue(obj: unknown): obj is api.IArrayValue {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if ('values' in obj && (obj.values === null || Array.isArray(obj.values))) {
    return true;
  }

  return false;
}
function isIMapValue(obj: unknown): obj is api.IMapValue {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if ('fields' in obj && (obj.fields === null || isObject(obj.fields))) {
    return true;
  }

  return false;
}
function isIFunction(obj: unknown): obj is api.IFunction {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if (
    'name' in obj &&
    (obj.name === null || typeof obj.name === 'string') &&
    'args' in obj &&
    (obj.args === null || Array.isArray(obj.args))
  ) {
    return true;
  }

  return false;
}

function isIPipeline(obj: unknown): obj is api.IPipeline {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }
  if ('stages' in obj && (obj.stages === null || Array.isArray(obj.stages))) {
    return true;
  }

  return false;
}

export function isFirestoreValue(obj: unknown): obj is api.IValue {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Must be a non-null object
  }

  // Check optional properties and their types
  if (
    ('nullValue' in obj &&
      (obj.nullValue === null || obj.nullValue === 'NULL_VALUE')) ||
    ('booleanValue' in obj &&
      (obj.booleanValue === null || typeof obj.booleanValue === 'boolean')) ||
    ('integerValue' in obj &&
      (obj.integerValue === null ||
        typeof obj.integerValue === 'number' ||
        typeof obj.integerValue === 'string')) ||
    ('doubleValue' in obj &&
      (obj.doubleValue === null || typeof obj.doubleValue === 'number')) ||
    ('timestampValue' in obj &&
      (obj.timestampValue === null || isITimestamp(obj.timestampValue))) ||
    ('stringValue' in obj &&
      (obj.stringValue === null || typeof obj.stringValue === 'string')) ||
    ('bytesValue' in obj &&
      (obj.bytesValue === null || obj.bytesValue instanceof Uint8Array)) ||
    ('referenceValue' in obj &&
      (obj.referenceValue === null ||
        typeof obj.referenceValue === 'string')) ||
    ('geoPointValue' in obj &&
      (obj.geoPointValue === null || isILatLng(obj.geoPointValue))) ||
    ('arrayValue' in obj &&
      (obj.arrayValue === null || isIArrayValue(obj.arrayValue))) ||
    ('mapValue' in obj &&
      (obj.mapValue === null || isIMapValue(obj.mapValue))) ||
    ('fieldReferenceValue' in obj &&
      (obj.fieldReferenceValue === null ||
        typeof obj.fieldReferenceValue === 'string')) ||
    ('functionValue' in obj &&
      (obj.functionValue === null || isIFunction(obj.functionValue))) ||
    ('pipelineValue' in obj &&
      (obj.pipelineValue === null || isIPipeline(obj.pipelineValue)))
  ) {
    return true;
  }

  return false;
}

export function whereConditionsFromCursor(
  cursor: QueryCursor,
  orderings: Ordering[],
  position: 'before' | 'after',
): BooleanExpression {
  // The filterFunc is either greater than or less than
  const filterFunc = position === 'before' ? lessThan : greaterThan;
  const cursors = cursor.values.map(value => Constant._fromProto(value));
  const size = cursors.length;

  let field = orderings[size - 1].expr;
  let value = cursors[size - 1];

  // Add condition for last bound
  let condition: BooleanExpression = filterFunc(field, value);
  if (
    (position === 'after' && cursor.before) ||
    (position === 'before' && !cursor.before)
  ) {
    // When the cursor bound is inclusive, then the last bound
    // can be equal to the value, otherwise it's not equal
    condition = or(
      condition,
      field.equal(value) as unknown as BooleanExpression,
    );
  }

  // Iterate backwards over the remaining bounds, adding
  // a condition for each one
  for (let i = size - 2; i >= 0; i--) {
    field = orderings[i].expr;
    value = cursors[i];

    // For each field in the orderings, the condition is either
    // a) lessThan|greaterThan the cursor value,
    // b) or equal the cursor value and lessThan|greaterThan the cursor values for other fields
    condition = or(
      filterFunc(field, value),
      and(field.equal(value) as unknown as BooleanExpression, condition),
    );
  }

  return condition;
}

export function reverseOrderings(orderings: Ordering[]): Ordering[] {
  return orderings.map(
    o =>
      new Ordering(
        o.expr,
        o.direction === 'ascending' ? 'descending' : 'ascending',
      ),
  );
}

export function toPipelineBooleanExpr(
  f: FilterInternal,
  serializer: Serializer,
): BooleanExpression {
  if (f instanceof FieldFilterInternal) {
    const field = createField(f.field);

    // Comparison filters
    const value = isFirestoreValue(f.value)
      ? f.value
      : serializer.encodeValue(f.value);
    switch (f.op) {
      case 'LESS_THAN':
        return and(field.exists(), field.lessThan(value));
      case 'LESS_THAN_OR_EQUAL':
        return and(field.exists(), field.lessThanOrEqual(value));
      case 'GREATER_THAN':
        return and(field.exists(), field.greaterThan(value));
      case 'GREATER_THAN_OR_EQUAL':
        return and(field.exists(), field.greaterThanOrEqual(value));
      case 'EQUAL':
        return and(field.exists(), field.equal(value));
      case 'NOT_EQUAL':
        return and(field.exists(), field.notEqual(value));
      case 'ARRAY_CONTAINS':
        return and(field.exists(), field.arrayContains(value));
      case 'IN': {
        const values = value?.arrayValue?.values?.map(val => constant(val));
        return and(field.exists(), field.equalAny(values!));
      }
      case 'ARRAY_CONTAINS_ANY': {
        const values = value?.arrayValue?.values?.map(val => constant(val));
        return and(field.exists(), field.arrayContainsAny(values!));
      }
      case 'NOT_IN': {
        const values = value?.arrayValue?.values?.map(val => constant(val));
        // In Enterprise DB's NOT_IN will match a field that does not exist,
        // therefore we do not want an existence filter for the NOT_IN conversion
        // so the Query and Pipeline behavior are consistent in Enterprise.
        return field.notEqualAny(values!);
      }
    }
  } else if (f instanceof CompositeFilterInternal) {
    switch (f._getOperator()) {
      case 'AND': {
        const conditions = f
          .getFilters()
          .map(f => toPipelineBooleanExpr(f, serializer));
        return and(conditions[0], conditions[1], ...conditions.slice(2));
      }
      case 'OR': {
        const conditions = f
          .getFilters()
          .map(f => toPipelineBooleanExpr(f, serializer));
        return or(conditions[0], conditions[1], ...conditions.slice(2));
      }
    }
  }

  throw new Error(
    `Failed to convert filter to pipeline conditions: ${f.toProto()}`,
  );
}

export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number';
}

export function isSelectable(
  val: unknown,
): val is firestore.Pipelines.Selectable {
  const candidate = val as firestore.Pipelines.Selectable;
  return (
    candidate.selectable &&
    isString(candidate._alias) &&
    isExpr(candidate._expr)
  );
}

export function isOrdering(val: unknown): val is firestore.Pipelines.Ordering {
  const candidate = val as firestore.Pipelines.Ordering;
  return (
    isExpr(candidate.expr) &&
    (candidate.direction === 'ascending' ||
      candidate.direction === 'descending')
  );
}

export function isAliasedAggregate(
  val: unknown,
): val is firestore.Pipelines.AliasedAggregate {
  const candidate = val as firestore.Pipelines.AliasedAggregate;
  return (
    isString(candidate._alias) &&
    candidate._aggregate instanceof AggregateFunction
  );
}

export function isExpr(val: unknown): val is firestore.Pipelines.Expression {
  return val instanceof Expression;
}

export function isBooleanExpr(
  val: unknown,
): val is firestore.Pipelines.BooleanExpression {
  return val instanceof BooleanExpression;
}

export function isField(val: unknown): val is firestore.Pipelines.Field {
  return val instanceof Field;
}

export function isPipeline(val: unknown): val is firestore.Pipelines.Pipeline {
  return val instanceof Pipeline;
}

export function isCollectionReference(
  val: unknown,
): val is firestore.CollectionReference {
  return val instanceof CollectionReference;
}

/**
 * Converts a value to an Expression, Returning either a Constant, MapFunction,
 * ArrayFunction, or the input itself (if it's already an expression).
 *
 * @private
 * @internal
 * @param value
 */
export function valueToDefaultExpr(value: unknown): Expression {
  let result: Expression | undefined;
  if (isFirestoreValue(value)) {
    return constant(value);
  }
  if (value instanceof Expression) {
    return value;
  } else if (isPlainObject(value)) {
    result = map(value as Record<string, unknown>);
  } else if (value instanceof Array) {
    result = array(value);
  } else {
    result = constant(value);
  }

  // TODO(pipeline) is this still used?
  result._createdFromLiteral = true;
  return result;
}

/**
 * Converts a value to an Expression, Returning either a Constant, MapFunction,
 * ArrayFunction, or the input itself (if it's already an expression).
 *
 * @private
 * @internal
 * @param value
 */
export function vectorToExpr(
  value: firestore.VectorValue | number[] | Expression,
): Expression {
  if (value instanceof Expression) {
    return value;
  } else if (value instanceof VectorValue) {
    const result = constant(value);
    result._createdFromLiteral = true;
    return result;
  } else if (Array.isArray(value)) {
    const result = constant(FieldValue.vector(value));
    result._createdFromLiteral = true;
    return result;
  } else {
    throw new Error('Unsupported value: ' + typeof value);
  }
}

/**
 * Converts a value to an Expression, Returning either a Constant, MapFunction,
 * ArrayFunction, or the input itself (if it's already an expression).
 * If the input is a string, it is assumed to be a field name, and a
 * field(value) is returned.
 *
 * @private
 * @internal
 * @param value
 */
export function fieldOrExpression(value: unknown): Expression {
  if (isString(value)) {
    const result = field(value);
    result._createdFromLiteral = true;
    return result;
  } else {
    return valueToDefaultExpr(value);
  }
}

export function toField(value: string | firestore.Pipelines.Field): Field {
  if (isString(value)) {
    const result = field(value);
    result._createdFromLiteral = true;
    return result;
  } else {
    return value as Field;
  }
}

/**
 * Converts a value to a Selectable, returning either a
 * Field, or the input itself (if it's already a Selectable).
 * If the input is a string, it is assumed to be a field name, and a
 * field(value) is returned.
 *
 * @private
 * @internal
 * @param value
 */
export function fieldOrSelectable(value: string | Selectable): Selectable {
  if (isString(value)) {
    const result = field(value);
    result._createdFromLiteral = true;
    return result;
  } else {
    return value;
  }
}

export function selectablesToMap(
  selectables: (firestore.Pipelines.Selectable | string)[],
): Map<string, Expression> {
  const result = new Map<string, Expression>();
  for (const selectable of selectables) {
    let alias: string;
    let expression: Expression;
    if (typeof selectable === 'string') {
      alias = selectable as string;
      expression = new Field(FieldPath.fromArgument(selectable));
    } else {
      alias = selectable._alias;
      expression = selectable._expr as unknown as Expression;
    }

    if (result.get(alias) !== undefined) {
      throw new Error(`Duplicate alias or field '${alias}'`);
    }

    result.set(alias, expression);
  }
  return result;
}

export function aliasedAggregateToMap(
  aliasedAggregatees: firestore.Pipelines.AliasedAggregate[],
): Map<string, AggregateFunction> {
  return aliasedAggregatees.reduce(
    (
      map: Map<string, AggregateFunction>,
      selectable: firestore.Pipelines.AliasedAggregate,
    ) => {
      if (map.get(selectable._alias) !== undefined) {
        throw new Error(`Duplicate alias or field '${selectable._alias}'`);
      }

      map.set(selectable._alias, selectable._aggregate as AggregateFunction);
      return map;
    },
    new Map() as Map<string, AggregateFunction>,
  );
}
