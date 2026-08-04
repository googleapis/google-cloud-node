/*!
 * Copyright 2024 Google LLC
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

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots.firestore_v1 || ($protobuf.roots.firestore_v1 = {});
    
    $root.firestore = (function() {
    
        /**
         * Namespace firestore.
         * @exports firestore
         * @namespace
         */
        var firestore = {};
    
        firestore.BundledQuery = (function() {
    
            /**
             * Properties of a BundledQuery.
             * @memberof firestore
             * @interface IBundledQuery
             * @property {string|null} [parent] BundledQuery parent
             * @property {google.firestore.v1.IStructuredQuery|null} [structuredQuery] BundledQuery structuredQuery
             * @property {firestore.BundledQuery.LimitType|null} [limitType] BundledQuery limitType
             */
    
            /**
             * Constructs a new BundledQuery.
             * @memberof firestore
             * @classdesc Represents a BundledQuery.
             * @implements IBundledQuery
             * @constructor
             * @param {firestore.IBundledQuery=} [properties] Properties to set
             */
            function BundledQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BundledQuery parent.
             * @member {string} parent
             * @memberof firestore.BundledQuery
             * @instance
             */
            BundledQuery.prototype.parent = "";
    
            /**
             * BundledQuery structuredQuery.
             * @member {google.firestore.v1.IStructuredQuery|null|undefined} structuredQuery
             * @memberof firestore.BundledQuery
             * @instance
             */
            BundledQuery.prototype.structuredQuery = null;
    
            /**
             * BundledQuery limitType.
             * @member {firestore.BundledQuery.LimitType} limitType
             * @memberof firestore.BundledQuery
             * @instance
             */
            BundledQuery.prototype.limitType = 0;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * BundledQuery queryType.
             * @member {"structuredQuery"|undefined} queryType
             * @memberof firestore.BundledQuery
             * @instance
             */
            Object.defineProperty(BundledQuery.prototype, "queryType", {
                get: $util.oneOfGetter($oneOfFields = ["structuredQuery"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a BundledQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof firestore.BundledQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {firestore.BundledQuery} BundledQuery
             */
            BundledQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.firestore.BundledQuery)
                    return object;
                var message = new $root.firestore.BundledQuery();
                if (object.parent != null)
                    message.parent = String(object.parent);
                if (object.structuredQuery != null) {
                    if (typeof object.structuredQuery !== "object")
                        throw TypeError(".firestore.BundledQuery.structuredQuery: object expected");
                    message.structuredQuery = $root.google.firestore.v1.StructuredQuery.fromObject(object.structuredQuery);
                }
                switch (object.limitType) {
                default:
                    if (typeof object.limitType === "number") {
                        message.limitType = object.limitType;
                        break;
                    }
                    break;
                case "FIRST":
                case 0:
                    message.limitType = 0;
                    break;
                case "LAST":
                case 1:
                    message.limitType = 1;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BundledQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof firestore.BundledQuery
             * @static
             * @param {firestore.BundledQuery} message BundledQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BundledQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.parent = "";
                    object.limitType = options.enums === String ? "FIRST" : 0;
                }
                if (message.parent != null && message.hasOwnProperty("parent"))
                    object.parent = message.parent;
                if (message.structuredQuery != null && message.hasOwnProperty("structuredQuery")) {
                    object.structuredQuery = $root.google.firestore.v1.StructuredQuery.toObject(message.structuredQuery, options);
                    if (options.oneofs)
                        object.queryType = "structuredQuery";
                }
                if (message.limitType != null && message.hasOwnProperty("limitType"))
                    object.limitType = options.enums === String ? $root.firestore.BundledQuery.LimitType[message.limitType] === undefined ? message.limitType : $root.firestore.BundledQuery.LimitType[message.limitType] : message.limitType;
                return object;
            };
    
            /**
             * Converts this BundledQuery to JSON.
             * @function toJSON
             * @memberof firestore.BundledQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BundledQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for BundledQuery
             * @function getTypeUrl
             * @memberof firestore.BundledQuery
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BundledQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/firestore.BundledQuery";
            };
    
            /**
             * LimitType enum.
             * @name firestore.BundledQuery.LimitType
             * @enum {string}
             * @property {string} FIRST=FIRST FIRST value
             * @property {string} LAST=LAST LAST value
             */
            BundledQuery.LimitType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIRST"] = "FIRST";
                values[valuesById[1] = "LAST"] = "LAST";
                return values;
            })();
    
            return BundledQuery;
        })();
    
        firestore.NamedQuery = (function() {
    
            /**
             * Properties of a NamedQuery.
             * @memberof firestore
             * @interface INamedQuery
             * @property {string|null} [name] NamedQuery name
             * @property {firestore.IBundledQuery|null} [bundledQuery] NamedQuery bundledQuery
             * @property {google.protobuf.ITimestamp|null} [readTime] NamedQuery readTime
             */
    
            /**
             * Constructs a new NamedQuery.
             * @memberof firestore
             * @classdesc Represents a NamedQuery.
             * @implements INamedQuery
             * @constructor
             * @param {firestore.INamedQuery=} [properties] Properties to set
             */
            function NamedQuery(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NamedQuery name.
             * @member {string} name
             * @memberof firestore.NamedQuery
             * @instance
             */
            NamedQuery.prototype.name = "";
    
            /**
             * NamedQuery bundledQuery.
             * @member {firestore.IBundledQuery|null|undefined} bundledQuery
             * @memberof firestore.NamedQuery
             * @instance
             */
            NamedQuery.prototype.bundledQuery = null;
    
            /**
             * NamedQuery readTime.
             * @member {google.protobuf.ITimestamp|null|undefined} readTime
             * @memberof firestore.NamedQuery
             * @instance
             */
            NamedQuery.prototype.readTime = null;
    
            /**
             * Creates a NamedQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof firestore.NamedQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {firestore.NamedQuery} NamedQuery
             */
            NamedQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.firestore.NamedQuery)
                    return object;
                var message = new $root.firestore.NamedQuery();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.bundledQuery != null) {
                    if (typeof object.bundledQuery !== "object")
                        throw TypeError(".firestore.NamedQuery.bundledQuery: object expected");
                    message.bundledQuery = $root.firestore.BundledQuery.fromObject(object.bundledQuery);
                }
                if (object.readTime != null) {
                    if (typeof object.readTime !== "object")
                        throw TypeError(".firestore.NamedQuery.readTime: object expected");
                    message.readTime = $root.google.protobuf.Timestamp.fromObject(object.readTime);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a NamedQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof firestore.NamedQuery
             * @static
             * @param {firestore.NamedQuery} message NamedQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NamedQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.bundledQuery = null;
                    object.readTime = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.bundledQuery != null && message.hasOwnProperty("bundledQuery"))
                    object.bundledQuery = $root.firestore.BundledQuery.toObject(message.bundledQuery, options);
                if (message.readTime != null && message.hasOwnProperty("readTime"))
                    object.readTime = $root.google.protobuf.Timestamp.toObject(message.readTime, options);
                return object;
            };
    
            /**
             * Converts this NamedQuery to JSON.
             * @function toJSON
             * @memberof firestore.NamedQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NamedQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for NamedQuery
             * @function getTypeUrl
             * @memberof firestore.NamedQuery
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NamedQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/firestore.NamedQuery";
            };
    
            return NamedQuery;
        })();
    
        firestore.BundledDocumentMetadata = (function() {
    
            /**
             * Properties of a BundledDocumentMetadata.
             * @memberof firestore
             * @interface IBundledDocumentMetadata
             * @property {string|null} [name] BundledDocumentMetadata name
             * @property {google.protobuf.ITimestamp|null} [readTime] BundledDocumentMetadata readTime
             * @property {boolean|null} [exists] BundledDocumentMetadata exists
             * @property {Array.<string>|null} [queries] BundledDocumentMetadata queries
             */
    
            /**
             * Constructs a new BundledDocumentMetadata.
             * @memberof firestore
             * @classdesc Represents a BundledDocumentMetadata.
             * @implements IBundledDocumentMetadata
             * @constructor
             * @param {firestore.IBundledDocumentMetadata=} [properties] Properties to set
             */
            function BundledDocumentMetadata(properties) {
                this.queries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BundledDocumentMetadata name.
             * @member {string} name
             * @memberof firestore.BundledDocumentMetadata
             * @instance
             */
            BundledDocumentMetadata.prototype.name = "";
    
            /**
             * BundledDocumentMetadata readTime.
             * @member {google.protobuf.ITimestamp|null|undefined} readTime
             * @memberof firestore.BundledDocumentMetadata
             * @instance
             */
            BundledDocumentMetadata.prototype.readTime = null;
    
            /**
             * BundledDocumentMetadata exists.
             * @member {boolean} exists
             * @memberof firestore.BundledDocumentMetadata
             * @instance
             */
            BundledDocumentMetadata.prototype.exists = false;
    
            /**
             * BundledDocumentMetadata queries.
             * @member {Array.<string>} queries
             * @memberof firestore.BundledDocumentMetadata
             * @instance
             */
            BundledDocumentMetadata.prototype.queries = $util.emptyArray;
    
            /**
             * Creates a BundledDocumentMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof firestore.BundledDocumentMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {firestore.BundledDocumentMetadata} BundledDocumentMetadata
             */
            BundledDocumentMetadata.fromObject = function fromObject(object) {
                if (object instanceof $root.firestore.BundledDocumentMetadata)
                    return object;
                var message = new $root.firestore.BundledDocumentMetadata();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.readTime != null) {
                    if (typeof object.readTime !== "object")
                        throw TypeError(".firestore.BundledDocumentMetadata.readTime: object expected");
                    message.readTime = $root.google.protobuf.Timestamp.fromObject(object.readTime);
                }
                if (object.exists != null)
                    message.exists = Boolean(object.exists);
                if (object.queries) {
                    if (!Array.isArray(object.queries))
                        throw TypeError(".firestore.BundledDocumentMetadata.queries: array expected");
                    message.queries = [];
                    for (var i = 0; i < object.queries.length; ++i)
                        message.queries[i] = String(object.queries[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BundledDocumentMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof firestore.BundledDocumentMetadata
             * @static
             * @param {firestore.BundledDocumentMetadata} message BundledDocumentMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BundledDocumentMetadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.queries = [];
                if (options.defaults) {
                    object.name = "";
                    object.readTime = null;
                    object.exists = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.readTime != null && message.hasOwnProperty("readTime"))
                    object.readTime = $root.google.protobuf.Timestamp.toObject(message.readTime, options);
                if (message.exists != null && message.hasOwnProperty("exists"))
                    object.exists = message.exists;
                if (message.queries && message.queries.length) {
                    object.queries = [];
                    for (var j = 0; j < message.queries.length; ++j)
                        object.queries[j] = message.queries[j];
                }
                return object;
            };
    
            /**
             * Converts this BundledDocumentMetadata to JSON.
             * @function toJSON
             * @memberof firestore.BundledDocumentMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BundledDocumentMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for BundledDocumentMetadata
             * @function getTypeUrl
             * @memberof firestore.BundledDocumentMetadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BundledDocumentMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/firestore.BundledDocumentMetadata";
            };
    
            return BundledDocumentMetadata;
        })();
    
        firestore.BundleMetadata = (function() {
    
            /**
             * Properties of a BundleMetadata.
             * @memberof firestore
             * @interface IBundleMetadata
             * @property {string|null} [id] BundleMetadata id
             * @property {google.protobuf.ITimestamp|null} [createTime] BundleMetadata createTime
             * @property {number|null} [version] BundleMetadata version
             * @property {number|null} [totalDocuments] BundleMetadata totalDocuments
             * @property {number|string|null} [totalBytes] BundleMetadata totalBytes
             */
    
            /**
             * Constructs a new BundleMetadata.
             * @memberof firestore
             * @classdesc Represents a BundleMetadata.
             * @implements IBundleMetadata
             * @constructor
             * @param {firestore.IBundleMetadata=} [properties] Properties to set
             */
            function BundleMetadata(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BundleMetadata id.
             * @member {string} id
             * @memberof firestore.BundleMetadata
             * @instance
             */
            BundleMetadata.prototype.id = "";
    
            /**
             * BundleMetadata createTime.
             * @member {google.protobuf.ITimestamp|null|undefined} createTime
             * @memberof firestore.BundleMetadata
             * @instance
             */
            BundleMetadata.prototype.createTime = null;
    
            /**
             * BundleMetadata version.
             * @member {number} version
             * @memberof firestore.BundleMetadata
             * @instance
             */
            BundleMetadata.prototype.version = 0;
    
            /**
             * BundleMetadata totalDocuments.
             * @member {number} totalDocuments
             * @memberof firestore.BundleMetadata
             * @instance
             */
            BundleMetadata.prototype.totalDocuments = 0;
    
            /**
             * BundleMetadata totalBytes.
             * @member {number|string} totalBytes
             * @memberof firestore.BundleMetadata
             * @instance
             */
            BundleMetadata.prototype.totalBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a BundleMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof firestore.BundleMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {firestore.BundleMetadata} BundleMetadata
             */
            BundleMetadata.fromObject = function fromObject(object) {
                if (object instanceof $root.firestore.BundleMetadata)
                    return object;
                var message = new $root.firestore.BundleMetadata();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createTime != null) {
                    if (typeof object.createTime !== "object")
                        throw TypeError(".firestore.BundleMetadata.createTime: object expected");
                    message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                }
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.totalDocuments != null)
                    message.totalDocuments = object.totalDocuments >>> 0;
                if (object.totalBytes != null)
                    if ($util.Long)
                        (message.totalBytes = $util.Long.fromValue(object.totalBytes)).unsigned = true;
                    else if (typeof object.totalBytes === "string")
                        message.totalBytes = parseInt(object.totalBytes, 10);
                    else if (typeof object.totalBytes === "number")
                        message.totalBytes = object.totalBytes;
                    else if (typeof object.totalBytes === "object")
                        message.totalBytes = new $util.LongBits(object.totalBytes.low >>> 0, object.totalBytes.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a BundleMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof firestore.BundleMetadata
             * @static
             * @param {firestore.BundleMetadata} message BundleMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BundleMetadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createTime = null;
                    object.version = 0;
                    object.totalDocuments = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.totalBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalBytes = options.longs === String ? "0" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.totalDocuments != null && message.hasOwnProperty("totalDocuments"))
                    object.totalDocuments = message.totalDocuments;
                if (message.totalBytes != null && message.hasOwnProperty("totalBytes"))
                    if (typeof message.totalBytes === "number")
                        object.totalBytes = options.longs === String ? String(message.totalBytes) : message.totalBytes;
                    else
                        object.totalBytes = options.longs === String ? $util.Long.prototype.toString.call(message.totalBytes) : options.longs === Number ? new $util.LongBits(message.totalBytes.low >>> 0, message.totalBytes.high >>> 0).toNumber(true) : message.totalBytes;
                return object;
            };
    
            /**
             * Converts this BundleMetadata to JSON.
             * @function toJSON
             * @memberof firestore.BundleMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BundleMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for BundleMetadata
             * @function getTypeUrl
             * @memberof firestore.BundleMetadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BundleMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/firestore.BundleMetadata";
            };
    
            return BundleMetadata;
        })();
    
        firestore.BundleElement = (function() {
    
            /**
             * Properties of a BundleElement.
             * @memberof firestore
             * @interface IBundleElement
             * @property {firestore.IBundleMetadata|null} [metadata] BundleElement metadata
             * @property {firestore.INamedQuery|null} [namedQuery] BundleElement namedQuery
             * @property {firestore.IBundledDocumentMetadata|null} [documentMetadata] BundleElement documentMetadata
             * @property {google.firestore.v1.IDocument|null} [document] BundleElement document
             */
    
            /**
             * Constructs a new BundleElement.
             * @memberof firestore
             * @classdesc Represents a BundleElement.
             * @implements IBundleElement
             * @constructor
             * @param {firestore.IBundleElement=} [properties] Properties to set
             */
            function BundleElement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BundleElement metadata.
             * @member {firestore.IBundleMetadata|null|undefined} metadata
             * @memberof firestore.BundleElement
             * @instance
             */
            BundleElement.prototype.metadata = null;
    
            /**
             * BundleElement namedQuery.
             * @member {firestore.INamedQuery|null|undefined} namedQuery
             * @memberof firestore.BundleElement
             * @instance
             */
            BundleElement.prototype.namedQuery = null;
    
            /**
             * BundleElement documentMetadata.
             * @member {firestore.IBundledDocumentMetadata|null|undefined} documentMetadata
             * @memberof firestore.BundleElement
             * @instance
             */
            BundleElement.prototype.documentMetadata = null;
    
            /**
             * BundleElement document.
             * @member {google.firestore.v1.IDocument|null|undefined} document
             * @memberof firestore.BundleElement
             * @instance
             */
            BundleElement.prototype.document = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * BundleElement elementType.
             * @member {"metadata"|"namedQuery"|"documentMetadata"|"document"|undefined} elementType
             * @memberof firestore.BundleElement
             * @instance
             */
            Object.defineProperty(BundleElement.prototype, "elementType", {
                get: $util.oneOfGetter($oneOfFields = ["metadata", "namedQuery", "documentMetadata", "document"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a BundleElement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof firestore.BundleElement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {firestore.BundleElement} BundleElement
             */
            BundleElement.fromObject = function fromObject(object) {
                if (object instanceof $root.firestore.BundleElement)
                    return object;
                var message = new $root.firestore.BundleElement();
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".firestore.BundleElement.metadata: object expected");
                    message.metadata = $root.firestore.BundleMetadata.fromObject(object.metadata);
                }
                if (object.namedQuery != null) {
                    if (typeof object.namedQuery !== "object")
                        throw TypeError(".firestore.BundleElement.namedQuery: object expected");
                    message.namedQuery = $root.firestore.NamedQuery.fromObject(object.namedQuery);
                }
                if (object.documentMetadata != null) {
                    if (typeof object.documentMetadata !== "object")
                        throw TypeError(".firestore.BundleElement.documentMetadata: object expected");
                    message.documentMetadata = $root.firestore.BundledDocumentMetadata.fromObject(object.documentMetadata);
                }
                if (object.document != null) {
                    if (typeof object.document !== "object")
                        throw TypeError(".firestore.BundleElement.document: object expected");
                    message.document = $root.google.firestore.v1.Document.fromObject(object.document);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BundleElement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof firestore.BundleElement
             * @static
             * @param {firestore.BundleElement} message BundleElement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BundleElement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    object.metadata = $root.firestore.BundleMetadata.toObject(message.metadata, options);
                    if (options.oneofs)
                        object.elementType = "metadata";
                }
                if (message.namedQuery != null && message.hasOwnProperty("namedQuery")) {
                    object.namedQuery = $root.firestore.NamedQuery.toObject(message.namedQuery, options);
                    if (options.oneofs)
                        object.elementType = "namedQuery";
                }
                if (message.documentMetadata != null && message.hasOwnProperty("documentMetadata")) {
                    object.documentMetadata = $root.firestore.BundledDocumentMetadata.toObject(message.documentMetadata, options);
                    if (options.oneofs)
                        object.elementType = "documentMetadata";
                }
                if (message.document != null && message.hasOwnProperty("document")) {
                    object.document = $root.google.firestore.v1.Document.toObject(message.document, options);
                    if (options.oneofs)
                        object.elementType = "document";
                }
                return object;
            };
    
            /**
             * Converts this BundleElement to JSON.
             * @function toJSON
             * @memberof firestore.BundleElement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BundleElement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for BundleElement
             * @function getTypeUrl
             * @memberof firestore.BundleElement
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BundleElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/firestore.BundleElement";
            };
    
            return BundleElement;
        })();
    
        return firestore;
    })();
    
    return $root;
});
