// Copyright 2023 Google LLC
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

import {
  QueryDocumentSnapshot,
  DocumentReference,
  WithFieldValue,
  DocumentData,
  PartialWithFieldValue,
  FirestoreDataConverter,
  SetOptions,
  UpdateData,
  Firestore,
} from '@google-cloud/firestore';
import {expect} from 'chai';

describe('FirestoreTypeConverter', () => {
  it('converter has the minimal typing information', () => {
    interface MyModelType {
      stringProperty: string;
      numberProperty: number;
    }
    const converter = {
      toFirestore(obj: MyModelType) {
        return {a: obj.stringProperty, b: obj.numberProperty};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot) {
        return {
          stringProperty: snapshot.data().a,
          numberProperty: snapshot.data().b,
        };
      },
    };
    neverCall<Promise<MyModelType>>(async docRef => {
      const newDocRef = docRef.withConverter(converter);
      await newDocRef.set({stringProperty: 'foo', numberProperty: 42});
      await newDocRef.update({a: 'newFoo', b: 43});
      const snapshot = await newDocRef.get();
      return snapshot.data()!;
    });
  });

  it('converter has the minimal typing information plus return types', () => {
    interface MyModelType {
      stringProperty: string;
      numberProperty: number;
    }
    const converter = {
      toFirestore(obj: WithFieldValue<MyModelType>): DocumentData {
        return {a: obj.stringProperty, b: obj.numberProperty};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): MyModelType {
        return {
          stringProperty: snapshot.data().a,
          numberProperty: snapshot.data().b,
        };
      },
    };
    neverCall<Promise<MyModelType>>(async docRef => {
      const newDocRef = docRef.withConverter(converter);
      await newDocRef.set({stringProperty: 'foo', numberProperty: 42});
      await newDocRef.update({a: 'newFoo', b: 43});
      const snapshot = await newDocRef.get();
      return snapshot.data()!;
    });
  });

  it("has the additional 'merge' version of toFirestore()", () => {
    interface MyModelType {
      stringProperty: string;
      numberProperty: number;
    }
    const converter: FirestoreDataConverter<MyModelType, DocumentData> = {
      toFirestore(
        modelObject: PartialWithFieldValue<MyModelType>,
        options?: SetOptions,
      ): DocumentData {
        if (options === undefined) {
          return {
            a: modelObject.stringProperty,
            b: modelObject.numberProperty,
          };
        }
        const result: DocumentData = {};
        if ('stringProperty' in modelObject) {
          result.a = modelObject.stringProperty;
        }
        if ('numberProperty' in modelObject) {
          result.b = modelObject.numberProperty;
        }
        return result;
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): MyModelType {
        return {
          stringProperty: snapshot.data().a,
          numberProperty: snapshot.data().b,
        };
      },
    };
    neverCall<Promise<MyModelType>>(async docRef => {
      const newDocRef = docRef.withConverter(converter);
      await newDocRef.set({stringProperty: 'foo', numberProperty: 42});
      await newDocRef.update({a: 'newFoo', b: 43});
      const snapshot = await newDocRef.get();
      return snapshot.data()!;
    });
  });

  it('converter is explicitly typed as FirestoreDataConverter<T>', () => {
    interface MyModelType {
      stringProperty: string;
      numberProperty: number;
    }
    const converter: FirestoreDataConverter<MyModelType> = {
      toFirestore(obj: WithFieldValue<MyModelType>) {
        return {a: obj.stringProperty, b: obj.numberProperty};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot) {
        return {
          stringProperty: snapshot.data().a,
          numberProperty: snapshot.data().b,
        };
      },
    };
    neverCall<Promise<MyModelType>>(async docRef => {
      const newDocRef = docRef.withConverter(converter);
      await newDocRef.set({stringProperty: 'foo', numberProperty: 42});
      await newDocRef.update({a: 'newFoo', b: 43});
      const snapshot = await newDocRef.get();
      return snapshot.data()!;
    });
  });

  it('converter is explicitly typed as FirestoreDataConverter<T, U>', () => {
    interface MyModelType {
      stringProperty: string;
      numberProperty: number;
    }
    interface MyDbType {
      a: string;
      b: number;
    }
    const converter: FirestoreDataConverter<MyModelType, MyDbType> = {
      toFirestore(obj: WithFieldValue<MyModelType>) {
        return {a: obj.stringProperty, b: obj.numberProperty};
      },
      fromFirestore(snapshot: QueryDocumentSnapshot) {
        return {
          stringProperty: snapshot.data().a,
          numberProperty: snapshot.data().b,
        };
      },
    };
    neverCall<Promise<MyModelType>>(async docRef => {
      const newDocRef = docRef.withConverter(converter);
      await newDocRef.set({stringProperty: 'foo', numberProperty: 42});
      await newDocRef.update({a: 'newFoo', b: 43});
      const snapshot = await newDocRef.get();
      return snapshot.data()!;
    });
  });

  it('DocumentReference.set() fails to compile if AppModelType argument is missing properties', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {}>();
      const docRefWithConverter = docRef.withConverter(converter);
      // @ts-expect-error The `foo` property declared in AppModelType is missing.
      await docRefWithConverter.set({});
    }));

  it('DocumentReference.set() fails to compile if AppModelType argument contains undeclared properties', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {bar: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      // @ts-expect-error The `bar` property is not declared in AppModelType.
      await docRefWithConverter.set({foo: 'foo', bar: 42});
    }));

  it('DocumentReference.set() fails to compile if AppModelType argument contains a property with an incorrect type', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {foo: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      // @ts-expect-error The `foo` property is declared as `string` in
      //  AppModelType, but a `number` is specified.
      await docRefWithConverter.set({foo: 42});
    }));

  it('DocumentReference.update() successfully compiles even if DbModelType argument is missing properties', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {bar: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      await docRefWithConverter.update({});
    }));

  it('DocumentReference.update() fails to compile if DbModelType argument contains undeclared properties', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {bar: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      // @ts-expect-error The `foo` property is not declared in DbModelType.
      await docRefWithConverter.update({foo: 'foo', bar: 42});
    }));

  it('DocumentReference.update() fails to compile if DbModelType argument contains a property with an incorrect type', () =>
    neverCall(async docRef => {
      const converter = fakeConverter<{foo: string}, {foo: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      // @ts-expect-error The `foo` property is declared as `number` in
      //  DbModelType, but a `string` is specified.
      await docRefWithConverter.update({foo: 'foo'});
    }));

  it('DocumentReference.get() returns AppModelType', () =>
    neverCall<Promise<{foo: string}>>(async docRef => {
      const converter = fakeConverter<{foo: string}, {bar: number}>();
      const docRefWithConverter = docRef.withConverter(converter);
      const snapshot = await docRefWithConverter.get();
      return snapshot.data()!;
    }));
});

describe('WithFieldValue<T>', () => {
  it('does not affect functions on types', () => {
    type SampleType = {
      bar: string;
      foo: () => void;
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    function test(x: WithFieldValue<SampleType>) {
      // @ts-expect-error This should fail because x.bar is type `string | FieldValue`
      const b: string = x.bar;

      // ASSERT: if WithFieldValue applies FieldValue | K[T]
      // to methods on the type, then this line will not compile
      const f: () => void = x.foo;
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
  });
});

describe('PartialWithFieldValue<T>', () => {
  it('does not affect functions on types', () => {
    type SampleType = {
      bar: string;
      foo: () => void;
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    function test(x: PartialWithFieldValue<SampleType>) {
      // @ts-expect-error This should fail because x.bar is type `string | FieldValue`
      const b: string = x.bar;

      // ASSERT: if WithFieldValue applies FieldValue | K[T]
      // to methods on the type, then this line will not compile
      const f: undefined | (() => void) = x.foo;
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
  });
});

// A union type for testing
type MyUnionType = string | number;

// An object type for testing
type MyObjectType = {
  booleanProperty: boolean;
  stringProperty: string;
  numberProperty: number;
  nullProperty: null;
  undefinedProperty: undefined;
  unionProperty: MyUnionType;
  objectProperty: {
    booleanProperty: boolean;
    stringProperty: string;
  };
};

describe('UpdateData type', () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  interface MyServerType {
    // primitive types
    booleanProperty: boolean;
    stringProperty: string;
    numberProperty: number;
    nullProperty: null;
    undefinedProperty: undefined;

    // custom types
    unionProperty: MyUnionType;
    objectProperty: MyObjectType;

    // nested objects
    nested: {
      bar: {
        barBooleanProperty: boolean;
        barStringProperty: string;
        barAnotherLayer: {
          baralBooleanProperty: boolean;
          baralStringProperty: string;
        };
      };
      baz: {
        bazBooleanProperty: boolean;
        bazStringProperty: string;
        bazAnotherLayer: {
          bazalBooleanProperty: boolean;
          bazalStringProperty: string;
        };
      };
    };

    // index signatures nested 1 layer deep
    indexed: {
      [name: string]: {
        nameBooleanProperty: boolean;
        nameNumberProperty: number;
      };
    };

    // property with dots in the name
    'property.with.dots': boolean;
  }

  it('Supports properties with primitive types', () => {
    let _: UpdateData<MyServerType>;
    _ = {
      booleanProperty: true,
      stringProperty: 'string',
      numberProperty: 2,
      nullProperty: null,
      undefinedProperty: undefined,
    };

    _ = {
      // @ts-expect-error Unsupported type
      booleanProperty: 'string',
      // @ts-expect-error Unsupported type
      stringProperty: 1,
      // @ts-expect-error Unsupported type
      numberProperty: 'string',
      // @ts-expect-error Unsupported type
      nullProperty: 'string',
      // @ts-expect-error Unsupported type
      undefinedProperty: 'string',
    };

    expect(true).to.be.true;
  });

  it('Supports properties with custom types', () => {
    let _: UpdateData<MyServerType>;
    _ = {
      unionProperty: 'string',
      objectProperty: {
        booleanProperty: true,
        stringProperty: 'string',
        numberProperty: 2,
        nullProperty: null,
        undefinedProperty: undefined,
        unionProperty: 1,
      },
    };

    _ = {
      // @ts-expect-error Unsupported type
      unionProperty: true,

      // @ts-expect-error Unsupported type
      objectProperty: true,
    };

    _ = {
      objectProperty: {
        // @ts-expect-error Unsupported type
        booleanProperty: 'string',
        // @ts-expect-error Unsupported type
        stringProperty: 1,
        // @ts-expect-error Unsupported type
        numberProperty: 'string',
        // @ts-expect-error Unsupported type
        nullProperty: 'string',
        // @ts-expect-error Unsupported type
        undefinedProperty: 'string',
      },
    };

    expect(true).to.be.true;
  });

  describe('given properties with dots', () => {
    it('preserves the value type', () => {
      let _: UpdateData<MyServerType>;

      // Allows values of expected type
      _ = {
        'property.with.dots': true,
      };

      // Errors on values of unexpected type
      _ = {
        // @ts-expect-error Unsupported type
        'property.with.dots': 1,
      };

      expect(true).to.be.true;
    });

    it('does not allow matching a sub-string|path', () => {
      const _: UpdateData<MyServerType> = {
        // @ts-expect-error Unsupported name
        'property.with': true,
      };

      expect(true).to.be.true;
    });
  });

  describe('given nested objects without index properties', () => {
    it('supports object replacement at each layer (with partial)', () => {
      let _: UpdateData<MyServerType>;
      _ = {
        nested: {},
      };

      _ = {
        nested: {
          bar: {},
          baz: {},
        },
      };

      _ = {
        nested: {
          bar: {
            barBooleanProperty: true,
            barStringProperty: 'string',
          },
          baz: {
            bazStringProperty: 'string',
          },
        },
      };

      _ = {
        nested: {
          bar: {
            barBooleanProperty: true,
            barStringProperty: 'string',
            barAnotherLayer: {
              baralBooleanProperty: false,
              baralStringProperty: 'another string',
            },
          },
        },
      };

      expect(true).to.be.true;
    });

    it('errors for unexpected value types at each layer', () => {
      let _: UpdateData<MyServerType>;
      _ = {
        // @ts-expect-error Unsupported type
        nested: true,
      };

      _ = {
        nested: {
          bar: {
            // @ts-expect-error Unsupported type
            barStringProperty: true,
            // @ts-expect-error Unsupported type
            barAnotherLayer: true,
            x: true,
          },
          baz: {
            bazAnotherLayer: {
              // @ts-expect-error Unsupported type
              bazalBooleanProperty: 'string value',
            },
          },
        },
      };

      expect(true).to.be.true;
    });

    it('does not allow properties that were not on the original type', () => {
      let _: UpdateData<MyServerType>;
      _ = {
        // @ts-expect-error Unsupported name
        unknown: true,
      };

      _ = {
        nested: {
          // @ts-expect-error Unsupported type
          unknown: true,
        },
      };

      expect(true).to.be.true;
    });

    it('preserves value types for dot notation', () => {
      let _: UpdateData<MyServerType>;

      // 2 layers with dot notation

      // preserves type
      _ = {
        'nested.bar': {},
        'nested.baz': {},
      };

      // preserves properties of nested objects referenced
      // with dot notation
      _ = {
        'nested.bar': {
          barBooleanProperty: true,
          barStringProperty: 'string',
          barAnotherLayer: {
            baralBooleanProperty: false,
            baralStringProperty: 'string',
          },
        },
        'nested.baz': {
          bazBooleanProperty: true,
        },
      };

      // preserves type - failure
      _ = {
        // @ts-expect-error Unsupported type
        'nested.bar': false,
        // @ts-expect-error Unsupported type
        'nested.baz': 'string',
      };

      // preserves properties of nested objects - failure
      _ = {
        'nested.bar': {
          // @ts-expect-error Unsupported type
          barBooleanProperty: 'string',
        },
      };

      // 3 layers with dot notation

      // preserves type
      _ = {
        'nested.bar.barBooleanProperty': true,
        'nested.bar.barAnotherLayer': {},
      };

      // preserves properties of nested objects
      _ = {
        'nested.bar.barAnotherLayer': {
          baralBooleanProperty: false,
          baralStringProperty: 'string',
        },
      };

      // preserves type - failure
      _ = {
        // @ts-expect-error Unsupported type
        'nested.bar.barAnotherLayer': true,
        // @ts-expect-error Unsupported type
        'nested.baz.bazAnotherLayer': 'string',
      };

      // preserves properties of nested objects - failure
      _ = {
        'nested.bar.barAnotherLayer': {
          // @ts-expect-error Unsupported type
          baralBooleanProperty: 'string',
        },
      };

      expect(true).to.be.true;
    });
  });

  describe('given nested objects with index properties', () => {
    it('supports object replacement at each layer (with partial)', () => {
      let _: UpdateData<MyServerType>;
      _ = {
        indexed: {},
      };

      _ = {
        indexed: {
          bar: {},
          baz: {},
        },
      };

      _ = {
        indexed: {
          bar: {
            nameBooleanProperty: true,
          },
          baz: {
            nameNumberProperty: 1,
          },
        },
      };

      expect(true).to.be.true;
    });

    it('errors for unexpected value types at each layer', () => {
      let _: UpdateData<MyServerType>;
      _ = {
        // @ts-expect-error Unsupported type
        indexed: true,
      };

      _ = {
        indexed: {
          anyRandomName: {
            // @ts-expect-error Unsupported type
            nameStringProperty: true,
          },
        },
      };

      expect(true).to.be.true;
    });

    it('does not allow properties that were not on the original type', () => {
      const _: UpdateData<MyServerType> = {
        indexed: {
          foo: {
            // @ts-expect-error Unsupported name
            unknown: 1,
          },
          bar: {
            nameNumberProperty: 2,
            // @ts-expect-error Unsupported name
            something: 'string val',
          },
        },
      };

      expect(true).to.be.true;
    });

    it('preserves value types for dot notation', () => {
      let _: UpdateData<MyServerType>;

      // 2 layers with dot notation

      // preserves type
      _ = {
        'indexed.bar': {},
        'indexed.baz': {},
      };

      // preserves properties of nested objects referenced
      // with dot notation
      _ = {
        'indexed.bar': {
          nameBooleanProperty: true,
          nameNumberProperty: 1,
        },
        'indexed.baz': {
          nameBooleanProperty: true,
        },
      };

      // preserves properties of nested objects referenced
      // with dot notation
      _ = {
        // @ts-expect-error Unsupported type
        'indexed.bar': null,
      };

      expect(true).to.be.true;
    });
  });

  describe('given Record<string, T>', () => {
    it('supports primitive type for T', () => {
      let _: UpdateData<Record<string, number>>;

      _ = {
        numberProperty: 1,
      };

      _ = {
        // @ts-expect-error Unsupported type
        numberProperty: false,
      };

      expect(true).to.be.true;
    });

    it('supports object type for T', () => {
      let _: UpdateData<Record<string, Omit<MyObjectType, 'nullProperty'>>>;

      _ = {};

      _ = {
        indexedProperty: {},
      };

      _ = {
        indexedProperty: {
          numberProperty: 1,
          booleanProperty: true,
        },
      };

      _ = {
        indexedProperty: {
          objectProperty: {},
        },
      };

      _ = {
        indexedProperty: {
          objectProperty: {
            booleanProperty: true,
          },
        },
      };

      _ = {
        indexedProperty: {
          stringProperty: 'string',
        },
      };

      _ = {
        indexedProperty: {
          numberProperty: 1,
          booleanProperty: true,
          stringProperty: 'string',
          // @ts-expect-error Unsupported type
          nullProperty: null,
          undefinedProperty: undefined,
          unionProperty: 1,
          objectProperty: {
            stringProperty: 'string',
            booleanProperty: true,
          },
        },
      };

      // It allows any child property type
      // when the property is indexed.
      _ = {
        indexedProperty: false,
      };

      // It allows any child property type
      // when the property is indexed.
      _ = {
        indexedProperty: 'string',
      };

      // It prevents types that are not a
      // child property type.
      _ = {
        // @ts-expect-error Unsupported type
        indexedProperty: null,
      };

      // It allows dot notation to set nested properties
      _ = {
        'indexedProperty.stringProperty': 'string',
      };

      // It allows dot notation to set nested properties,
      // but only enforces types to any of the child properties
      // of the indexed property.
      _ = {
        'indexedProperty.stringProperty': true,
        'indexedProperty.booleanProperty': 'string',
        // @ts-expect-error Unsupported type
        'indexedProperty.undefinedProperty': null,
      };

      // But still enforces property types
      // when the child type is object
      _ = {
        objectProperty: {
          // @ts-expect-error Unsupported type
          numberProperty: false,
        },
      };

      _ = {
        objectProperty: {
          // @ts-expect-error Unsupported type
          unknownProperty: false,
        },
      };

      expect(true).to.be.true;
    });

    it('supports object with nested index for T', () => {
      let _: UpdateData<
        Record<
          string,
          {
            objectWithIndexProperty: {
              [key: string]: boolean;
            };
            deepObjectWithIndexProperty: {
              [key: string]: {
                stringProperty: string;
                numberProperty: number;
              };
            };
          }
        >
      >;

      _ = {};

      _ = {
        indexedProperty: {},
      };

      _ = {
        indexedProperty: {
          objectWithIndexProperty: {},
          deepObjectWithIndexProperty: {},
        },
      };

      _ = {
        indexedProperty: {
          objectWithIndexProperty: {},
        },
      };

      _ = {
        indexedProperty: {
          objectWithIndexProperty: {
            indexedProperty: true,
          },
        },
      };

      _ = {
        indexedProperty: {
          deepObjectWithIndexProperty: {
            indexedProperty: {},
          },
        },
      };

      _ = {
        indexedProperty: {
          deepObjectWithIndexProperty: {
            indexedProperty: {
              stringProperty: 'string',
            },
          },
        },
      };

      _ = {
        indexedProperty: {
          stringProperty: 'string',
        },
      };

      _ = {
        indexedProperty: {
          objectWithIndexProperty: {
            indexedProperty: true,
          },
          deepObjectWithIndexProperty: {
            indexedProperty: {
              stringProperty: 'string',
              numberProperty: 1,
            },
          },
        },
      };

      // It allows any child property type
      // when the property is indexed.
      _ = {
        indexedProperty: false,
      };

      // It allows any child property type
      // when the property is indexed.
      _ = {
        indexedProperty: 'string',
      };

      // It prevents types that are not a
      // child property type.
      _ = {
        // @ts-expect-error Unsupported type
        indexedProperty: null,
      };

      // It allows dot notation to set nested properties
      _ = {
        'indexedProperty.stringProperty': 'string',
      };

      // It allows dot notation to set nested properties,
      // but only enforces types to any of the child properties
      // of the indexed property.
      _ = {
        'indexedProperty.stringProperty': true,
        'indexedProperty.booleanProperty': 'string',
        // @ts-expect-error Unsupported type
        'indexedProperty.undefinedProperty': null,
      };

      // But still enforces property types
      // when the child type is object
      _ = {
        indexedProperty: {
          // @ts-expect-error Unsupported type
          numberProperty: null,
        },
      };

      expect(true).to.be.true;
    });
  });

  // tests cover new scenarios that are fixed for index signatures
  describe('UpdateData fixes', () => {
    interface MyNestedIndexServerType {
      booleanProperty: boolean;

      // index signatures nested 1 layer deep
      indexed: {
        [name: string]: {
          booleanProperty: boolean;
          numberProperty: number;
        };
      };

      // index signatures nested 2 layers deep
      layer: {
        indexed: {
          [name: string]: {
            booleanProperty: boolean;
            numberProperty: number;
          };
        };
      };
    }

    describe('given nested objects with index properties', () => {
      it('supports object replacement at each layer (with partial)', () => {
        const _: UpdateData<MyNestedIndexServerType> = {
          indexed: {
            bar: {},
            baz: {},
          },
        };

        expect(true).to.be.true;
      });

      it('allows dot notation for nested index types', () => {
        let _: UpdateData<MyNestedIndexServerType>;

        // the fix allows 3 layers of dot notation

        // allows the property
        _ = {
          'indexed.bar.booleanProperty': true,
        };

        _ = {
          'indexed.bar.numberProperty': 1,
        };

        // does not enforce type on indexed properties
        _ = {
          'indexed.bar.booleanProperty': 3, // not enforced since number is a child type of `indexed.[string]`
        };

        _ = {
          'indexed.bar.numberProperty': false,
        };

        _ = {
          'indexed.bar.unknown': true,
        };

        // string value is not allowed because string is not a child type of `indexed.[string]`
        _ = {
          // @ts-expect-error Unsupported type
          'indexed.bar.numberProperty': 'string',
        };

        expect(true).to.be.true;
      });

      it('allows dot notation for nested index types that are 2 layers deep', () => {
        let _: UpdateData<MyNestedIndexServerType>;

        // the fix allows 4 layers with dot notation

        // allows the property
        _ = {
          'layer.indexed.bar.booleanProperty': true,
        };

        // allows the property, but does not enforce type
        _ = {
          'layer.indexed.bar.booleanProperty': 4,
        };

        // Allows unknown properties in sub types
        _ = {
          'layer.indexed.bar.unknownProperty': 4,
        };

        expect(true).to.be.true;
      });
    });
  });

  describe('Customer reports', () => {
    it('fixes issues/1745#issuecomment-1289292949', () => {
      type TestType = {
        foo: {
          [key: string]: {
            bar: string;
          };
        };
      };
      // The intent of the function below is to test TypeScript compile and not execute.
      async function _(docRef: DocumentReference<TestType>): Promise<void> {
        const key = 'aKey';
        void docRef.update({
          [`foo.${key}.bar`]: 'test',
        });
      }

      expect(true).to.be.true;
    });

    it('fixes issues/1745#issuecomment-1804130587', () => {
      type TType = {
        prop: Record<string, {id: string}>;
      };
      const update: UpdateData<TType> = {};
      const value: {[key: string]: {id: string}} = {
        key: {id: ''},
      };

      update.prop = value;

      expect(true).to.be.true;
    });

    it('fixes issues/1890', () => {
      interface MyDoc {
        nestedA: Record<string, number>;
        nestedB: Record<string, string>;
      }

      function _(db: Firestore, docRef: DocumentReference<MyDoc>) {
        const goodKey = 'nestedA.test';
        const badKey = 'nestedA.' + 'test';

        void db.runTransaction(async t => {
          t.update(docRef, {
            [goodKey]: 3,
          });
        });

        void db.runTransaction(async t => {
          t.update(docRef, {
            [badKey]: 3,
          });
        });
      }

      expect(true).to.be.true;
    });
  });

  /* eslint-enable @typescript-eslint/no-unused-vars */
});

/**
 * Does nothing; however, this function can be useful in tests that only check
 * the compile-time behavior of the TypeScript compiler. For example, a test
 * that ensures that a certain statement successfully compiles could pass the
 * code block to this function to exercise the compiler but the code will not
 * actually be executed at runtime.
 */
function neverCall<T>(_: (docRef: DocumentReference) => T): void {
  _; // Trick eslint into thinking that `_` is used.
}

/**
 * Does nothing; this function does not actually exist but is merely _declared_
 * to exist. This facilitates creating variables typed as FirestoreDataConverter
 * with the given type parameters at compile time. This can be useful in tests
 * that only check compile-time behavior of the TypeScript compiler but don't
 * actually get executed at runtime.
 */
declare function fakeConverter<
  AppModelType,
  DbModelType extends DocumentData,
>(): FirestoreDataConverter<AppModelType, DbModelType>;
