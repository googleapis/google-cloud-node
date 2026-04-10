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

import * as firestore from '@google-cloud/firestore';
import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;

import {DocumentReference} from '../reference/document-reference';
import {ProtoSerializable, Serializer} from '../serializer';

import {
  AggregateFunction,
  AliasedExpression,
  BooleanExpression,
  Expression,
  Field,
  field,
  Ordering,
} from './expression';
import {OptionsUtil} from './options-util';
import {CollectionReference} from '../reference/collection-reference';
import {validateUserDataHelper, selectablesToMap} from './pipeline-util';
import {Pipeline} from './pipelines';

/**
 * Interface for Stage classes.
 */
export interface Stage extends ProtoSerializable<api.Pipeline.IStage> {
  name: string;

  _toProto(serializer: Serializer): api.Pipeline.IStage;
  _validateUserData(ignoreUndefinedProperties: boolean): void;
}

/**
 * Internal options for RemoveFields stage.
 */
export type InternalRemoveFieldsStageOptions = Omit<
  firestore.Pipelines.RemoveFieldsStageOptions,
  'fields'
> & {
  fields: Array<Field>;
};

/**
 * RemoveFields stage.
 */
export class RemoveFields implements Stage {
  name = 'remove_fields';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalRemoveFieldsStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: this.options.fields.map(f => serializer.encodeValue(f)!),
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.fields, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Aggregate stage.
 */
export type InternalAggregateStageOptions = Omit<
  firestore.Pipelines.AggregateStageOptions,
  'groups' | 'accumulators'
> & {
  groups: Map<string, Expression>;
  accumulators: Map<string, AggregateFunction>;
};

/**
 * Aggregate stage.
 */
export class Aggregate implements Stage {
  name = 'aggregate';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalAggregateStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeValue(this.options.accumulators)!,
        serializer.encodeValue(this.options.groups)!,
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.groups, ignoreUndefinedProperties);
    validateUserDataHelper(
      this.options.accumulators,
      ignoreUndefinedProperties,
    );
  }
}

/**
 * Internal options for Distinct stage.
 */
export type InternalDistinctStageOptions = Omit<
  firestore.Pipelines.DistinctStageOptions,
  'groups'
> & {
  groups: Map<string, Expression>;
};

/**
 * Distinct stage.
 */
export class Distinct implements Stage {
  name = 'distinct';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalDistinctStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.groups)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.groups, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Collection stage.
 */
export type InternalCollectionStageOptions = Omit<
  firestore.Pipelines.CollectionStageOptions,
  'collection'
> & {
  collection: CollectionReference;
};

/**
 * Collection stage.
 */
export class CollectionSource implements Stage {
  name = 'collection';
  readonly optionsUtil = new OptionsUtil({
    forceIndex: {
      serverName: 'force_index',
    },
  });
  readonly collectionPath: string;

  constructor(private options: InternalCollectionStageOptions) {
    this.collectionPath = this.options.collection.path;
    // prepend slash to collection string
    if (!this.collectionPath.startsWith('/')) {
      this.collectionPath = '/' + this.collectionPath;
    }
  }

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeReference(this.collectionPath)],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for CollectionGroup stage.
 */
export type InternalCollectionGroupStageOptions =
  firestore.Pipelines.CollectionGroupStageOptions;

/**
 * CollectionGroup stage
 */
export class CollectionGroupSource implements Stage {
  name = 'collection_group';
  readonly optionsUtil = new OptionsUtil({
    forceIndex: {
      serverName: 'force_index',
    },
  });

  constructor(private options: InternalCollectionGroupStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeReference(''),
        serializer.encodeValue(this.options.collectionId)!,
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for Database stage.
 */
export type InternalDatabaseStageOptions =
  firestore.Pipelines.DatabaseStageOptions;

/**
 * Database stage.
 */
export class DatabaseSource implements Stage {
  name = 'database';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalDatabaseStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for Documents stage.
 */
export type InternalDocumentsStageOptions = Omit<
  firestore.Pipelines.DocumentsStageOptions,
  'docs'
> & {
  docs: Array<DocumentReference>;
};

/**
 * Documents stage.
 */
export class DocumentsSource implements Stage {
  name = 'documents';
  readonly optionsUtil = new OptionsUtil({});
  readonly formattedPaths: string[];

  constructor(private options: InternalDocumentsStageOptions) {
    this.formattedPaths = options.docs.map(ref => '/' + ref.path);
  }

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: this.formattedPaths.map(p => serializer.encodeReference(p)!),
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for Where stage.
 */
export type InternalWhereStageOptions = Omit<
  firestore.Pipelines.WhereStageOptions,
  'condition'
> & {
  condition: BooleanExpression;
};

/**
 * Where stage.
 */
export class Where implements Stage {
  name = 'where';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalWhereStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [this.options.condition._toProto(serializer)],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.condition, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for FindNearest stage.
 */
export type InternalFindNearestStageOptions = Omit<
  firestore.Pipelines.FindNearestStageOptions,
  'vectorValue' | 'field' | 'distanceField'
> & {
  vectorValue: Expression;
  field: Field;
  distanceField?: Field;
};

/**
 * FindNearest stage.
 */
export class FindNearest implements Stage {
  name = 'find_nearest';
  readonly optionsUtil = new OptionsUtil({
    limit: {
      serverName: 'limit',
    },
    distanceField: {
      serverName: 'distance_field',
    },
  });

  constructor(private _options: InternalFindNearestStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeValue(this._options.field)!,
        serializer.encodeValue(this._options.vectorValue)!,
        serializer.encodeValue(this._options.distanceMeasure)!,
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this._options,
        this._options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this._options.field, ignoreUndefinedProperties);
    validateUserDataHelper(
      this._options.vectorValue,
      ignoreUndefinedProperties,
    );
    if (this._options.distanceField) {
      validateUserDataHelper(
        this._options.distanceField,
        ignoreUndefinedProperties,
      );
    }
  }
}

/**
 * Internal options for Sample stage.
 */
export type InternalSampleStageOptions = Omit<
  firestore.Pipelines.SampleStageOptions,
  'percentage' | 'documents'
> & {
  rate: number;
  mode: 'percent' | 'documents';
};

/**
 * Sample stage.
 */
export class Sample implements Stage {
  name = 'sample';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalSampleStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeValue(this.options.rate)!,
        serializer.encodeValue(this.options.mode)!,
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for Union stage.
 */
export type InternalUnionStageOptions = firestore.Pipelines.UnionStageOptions;

/**
 * Union stage.
 */
export class Union implements Stage {
  name = 'union';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalUnionStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.other)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    // A Union stage embeds a full pipeline, we trigger its validation here.
    (this.options.other as Pipeline)._validateUserData(
      ignoreUndefinedProperties,
    );
  }
}

/**
 * Internal options for Unnest stage.
 */
export type InternalUnnestStageOptions = Omit<
  firestore.Pipelines.UnnestStageOptions,
  'selectable' | 'indexField'
> & {
  alias: string;
  expr: Expression;
  indexField?: Field;
};

/**
 * Unnest stage.
 */
export class Unnest implements Stage {
  name = 'unnest';
  readonly optionsUtil = new OptionsUtil({
    indexField: {
      serverName: 'index_field',
    },
  });

  constructor(private options: InternalUnnestStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeValue(this.options.expr)!,
        serializer.encodeValue(field(this.options.alias))!,
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.expr, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Limit stage.
 */
export type InternalLimitStageOptions = firestore.Pipelines.LimitStageOptions;

/**
 * Limit stage.
 */
export class Limit implements Stage {
  name = 'limit';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalLimitStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.limit)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for Offset stage.
 */
export type InternalOffsetStageOptions = firestore.Pipelines.OffsetStageOptions;

/**
 * Offset stage.
 */
export class Offset implements Stage {
  name = 'offset';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalOffsetStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.offset)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Internal options for ReplaceWith stage.
 */
export type InternalReplaceWithStageOptions = Omit<
  firestore.Pipelines.ReplaceWithStageOptions,
  'map'
> & {
  map: Expression;
};

/**
 * ReplaceWith stage.
 */
export class ReplaceWith implements Stage {
  name = 'replace_with';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalReplaceWithStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [
        serializer.encodeValue(this.options.map)!,
        serializer.encodeValue('full_replace'),
      ],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.map, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Select stage.
 */
export type InternalSelectStageOptions = Omit<
  firestore.Pipelines.SelectStageOptions,
  'selections'
> & {
  selections: Map<string, Expression>;
};

/**
 * Select stage.
 */
export class Select implements Stage {
  name = 'select';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalSelectStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.selections)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.selections, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for AddFields stage.
 */
export type InternalAddFieldsStageOptions = Omit<
  firestore.Pipelines.AddFieldsStageOptions,
  'fields'
> & {
  fields: Map<string, Expression>;
};

/**
 * AddFields stage.
 */
export class AddFields implements Stage {
  name = 'add_fields';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalAddFieldsStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.fields)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.fields, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Sort stage.
 */
export type InternalSortStageOptions = Omit<
  firestore.Pipelines.SortStageOptions,
  'orderings'
> & {
  orderings: Array<Ordering>;
};

/**
 * Sort stage.
 */
export class Sort implements Stage {
  name = 'sort';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalSortStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: this.options.orderings.map(o => serializer.encodeValue(o)!),
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.orderings, ignoreUndefinedProperties);
  }
}

export type InternalSearchStageOptions = Omit<
  firestore.Pipelines.SearchStageOptions,
  'query' | 'sort' | 'select' | 'addFields'
> & {
  query: BooleanExpression;
  sort?: Array<Ordering>;
  select?: Record<string, Expression>;
  addFields?: Record<string, Expression>;
};

/**
 * Search stage.
 */
export class Search implements Stage {
  name = 'search';

  constructor(private options: InternalSearchStageOptions) {}

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.query, ignoreUndefinedProperties);
    if (this.options.sort) {
      validateUserDataHelper(this.options.sort, ignoreUndefinedProperties);
    }
    if (this.options.select) {
      validateUserDataHelper(
        Object.values(this.options.select) as Expression[],
        ignoreUndefinedProperties,
      );
    }
    if (this.options.addFields) {
      validateUserDataHelper(
        Object.values(this.options.addFields) as Expression[],
        ignoreUndefinedProperties,
      );
    }
  }

  readonly optionsUtil = new OptionsUtil({
    query: {
      serverName: 'query',
    },
    limit: {
      serverName: 'limit',
    },
    retrievalDepth: {
      serverName: 'retrieval_depth',
    },
    sort: {
      serverName: 'sort',
    },
    addFields: {
      serverName: 'add_fields',
    },
    select: {
      serverName: 'select',
    },
    offset: {
      serverName: 'offset',
    },
    queryEnhancement: {
      serverName: 'query_enhancement',
    },
    languageCode: {
      serverName: 'language_code',
    },
  });

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }
}

/**
 * Internal options for Define stage.
 */
export type InternalDefineStageOptions = Omit<
  firestore.Pipelines.DefineStageOptions,
  'variables'
> & {
  variables: Map<string, Expression>;
};

/**
 * Define stage.
 */
export class Define implements Stage {
  name = 'let';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalDefineStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.variables)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.options.variables, ignoreUndefinedProperties);
  }
}

/**
 * Internal options for Subcollection stage.
 */
export type InternalSubcollectionStageOptions =
  firestore.Pipelines.SubcollectionStageOptions;

/**
 * Subcollection stage.
 */
export class SubcollectionSource implements Stage {
  name = 'subcollection';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private options: InternalSubcollectionStageOptions) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: [serializer.encodeValue(this.options.path)!],
      options: this.optionsUtil.getOptionsProto(
        serializer,
        this.options,
        this.options.rawOptions,
      ),
    };
  }

  _validateUserData(_ignoreUndefinedProperties: boolean): void {}
}

/**
 * Raw stage.
 */
export class RawStage implements Stage {
  readonly optionsUtil = new OptionsUtil({});

  /**
   * @private
   * @internal
   */
  constructor(
    public name: string,
    private params: Array<AggregateFunction | Expression>,
    private rawOptions: Record<string, unknown>,
  ) {}

  /**
   * @internal
   * @private
   */
  _toProto(serializer: Serializer): api.Pipeline.IStage {
    return {
      name: this.name,
      args: this.params.map(o => o._toProto(serializer)),
      options: this.optionsUtil.getOptionsProto(
        serializer,
        {},
        this.rawOptions,
      ),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    validateUserDataHelper(this.params, ignoreUndefinedProperties);
  }
}

/**
 * Delete stage.
 */
export class DeleteStage implements Stage {
  name = 'delete';
  readonly optionsUtil = new OptionsUtil({});

  constructor() {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    const args: api.IValue[] = [];

    return {
      name: this.name,
      args,
      options: this.optionsUtil.getOptionsProto(serializer, {}, {}),
    };
  }

  _validateUserData(_: boolean): void {}
}

/**
 * Update stage.
 */
export class UpdateStage implements Stage {
  name = 'update';
  readonly optionsUtil = new OptionsUtil({});

  constructor(private transformedFields?: AliasedExpression[]) {}

  _toProto(serializer: Serializer): api.Pipeline.IStage {
    const args: api.IValue[] = [];

    if (this.transformedFields && this.transformedFields.length > 0) {
      const mapped = selectablesToMap(this.transformedFields);
      args.push(serializer.encodeValue(mapped)!);
    } else {
      args.push(serializer.encodeValue(new Map())!);
    }

    return {
      name: this.name,
      args,
      options: this.optionsUtil.getOptionsProto(serializer, {}, {}),
    };
  }

  _validateUserData(ignoreUndefinedProperties: boolean): void {
    if (this.transformedFields) {
      validateUserDataHelper(this.transformedFields, ignoreUndefinedProperties);
    }
  }
}
