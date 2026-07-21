// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("google-gax/build/src/protobuf").protobufMinimal);

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["_google_cloud_spanner_protos"] || ($protobuf.roots["_google_cloud_spanner_protos"] = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Duration = (function() {
    
                /**
                 * Properties of a Duration.
                 * @memberof google.protobuf
                 * @interface IDuration
                 * @property {number|Long|null} [seconds] Duration seconds
                 * @property {number|null} [nanos] Duration nanos
                 */
    
                /**
                 * Constructs a new Duration.
                 * @memberof google.protobuf
                 * @classdesc Represents a Duration.
                 * @implements IDuration
                 * @constructor
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 */
                function Duration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Duration seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Duration nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.nanos = 0;
    
                /**
                 * Creates a new Duration instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 * @returns {google.protobuf.Duration} Duration instance
                 */
                Duration.create = function create(properties) {
                    return new Duration(properties);
                };
    
                /**
                 * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.seconds = reader.int64();
                                break;
                            }
                        case 2: {
                                message.nanos = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Duration message.
                 * @function verify
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Duration.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Duration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Duration} Duration
                 */
                Duration.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.protobuf.Duration)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.protobuf.Duration: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.protobuf.Duration();
                    if (object.seconds != null)
                        if ($util.Long)
                            message.seconds = $util.Long.fromValue(object.seconds, false);
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Duration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Duration.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        if (typeof BigInt !== "undefined" && options.longs === BigInt)
                            object.seconds = typeof message.seconds === "number" ? BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
                        else if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Duration to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Duration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Duration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Duration
                 * @function getTypeUrl
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Duration";
                };
    
                return Duration;
            })();
    
            return protobuf;
        })();
    
        google.rpc = (function() {
    
            /**
             * Namespace rpc.
             * @memberof google
             * @namespace
             */
            var rpc = {};
    
            rpc.ErrorInfo = (function() {
    
                /**
                 * Properties of an ErrorInfo.
                 * @memberof google.rpc
                 * @interface IErrorInfo
                 * @property {string|null} [reason] ErrorInfo reason
                 * @property {string|null} [domain] ErrorInfo domain
                 * @property {Object.<string,string>|null} [metadata] ErrorInfo metadata
                 */
    
                /**
                 * Constructs a new ErrorInfo.
                 * @memberof google.rpc
                 * @classdesc Represents an ErrorInfo.
                 * @implements IErrorInfo
                 * @constructor
                 * @param {google.rpc.IErrorInfo=} [properties] Properties to set
                 */
                function ErrorInfo(properties) {
                    this.metadata = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ErrorInfo reason.
                 * @member {string} reason
                 * @memberof google.rpc.ErrorInfo
                 * @instance
                 */
                ErrorInfo.prototype.reason = "";
    
                /**
                 * ErrorInfo domain.
                 * @member {string} domain
                 * @memberof google.rpc.ErrorInfo
                 * @instance
                 */
                ErrorInfo.prototype.domain = "";
    
                /**
                 * ErrorInfo metadata.
                 * @member {Object.<string,string>} metadata
                 * @memberof google.rpc.ErrorInfo
                 * @instance
                 */
                ErrorInfo.prototype.metadata = $util.emptyObject;
    
                /**
                 * Creates a new ErrorInfo instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {google.rpc.IErrorInfo=} [properties] Properties to set
                 * @returns {google.rpc.ErrorInfo} ErrorInfo instance
                 */
                ErrorInfo.create = function create(properties) {
                    return new ErrorInfo(properties);
                };
    
                /**
                 * Encodes the specified ErrorInfo message. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {google.rpc.IErrorInfo} message ErrorInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ErrorInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                    if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {google.rpc.IErrorInfo} message ErrorInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes an ErrorInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.ErrorInfo} ErrorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ErrorInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.ErrorInfo(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.reason = reader.string();
                                break;
                            }
                        case 2: {
                                message.domain = reader.string();
                                break;
                            }
                        case 3: {
                                if (message.metadata === $util.emptyObject)
                                    message.metadata = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7, long);
                                        break;
                                    }
                                }
                                if (key === "__proto__")
                                    $util.makeProp(message.metadata, key);
                                message.metadata[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.ErrorInfo} ErrorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ErrorInfo message.
                 * @function verify
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ErrorInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        if (!$util.isString(message.reason))
                            return "reason: string expected";
                    if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                        if (!$util.isString(message.domain))
                            return "domain: string expected";
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata")) {
                        if (!$util.isObject(message.metadata))
                            return "metadata: object expected";
                        var key = Object.keys(message.metadata);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.metadata[key[i]]))
                                return "metadata: string{k:string} expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.ErrorInfo} ErrorInfo
                 */
                ErrorInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.ErrorInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.ErrorInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.ErrorInfo();
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    if (object.domain != null)
                        message.domain = String(object.domain);
                    if (object.metadata) {
                        if (!$util.isObject(object.metadata))
                            throw TypeError(".google.rpc.ErrorInfo.metadata: object expected");
                        message.metadata = {};
                        for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i) {
                            if (keys[i] === "__proto__")
                                $util.makeProp(message.metadata, keys[i]);
                            message.metadata[keys[i]] = String(object.metadata[keys[i]]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {google.rpc.ErrorInfo} message ErrorInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ErrorInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.objects || options.defaults)
                        object.metadata = {};
                    if (options.defaults) {
                        object.reason = "";
                        object.domain = "";
                    }
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        object.reason = message.reason;
                    if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                        object.domain = message.domain;
                    var keys2;
                    if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                        object.metadata = {};
                        for (var j = 0; j < keys2.length; ++j) {
                            if (keys2[j] === "__proto__")
                                $util.makeProp(object.metadata, keys2[j]);
                            object.metadata[keys2[j]] = message.metadata[keys2[j]];
                        }
                    }
                    return object;
                };
    
                /**
                 * Converts this ErrorInfo to JSON.
                 * @function toJSON
                 * @memberof google.rpc.ErrorInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ErrorInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ErrorInfo
                 * @function getTypeUrl
                 * @memberof google.rpc.ErrorInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ErrorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.ErrorInfo";
                };
    
                return ErrorInfo;
            })();
    
            rpc.RetryInfo = (function() {
    
                /**
                 * Properties of a RetryInfo.
                 * @memberof google.rpc
                 * @interface IRetryInfo
                 * @property {google.protobuf.IDuration|null} [retryDelay] RetryInfo retryDelay
                 */
    
                /**
                 * Constructs a new RetryInfo.
                 * @memberof google.rpc
                 * @classdesc Represents a RetryInfo.
                 * @implements IRetryInfo
                 * @constructor
                 * @param {google.rpc.IRetryInfo=} [properties] Properties to set
                 */
                function RetryInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RetryInfo retryDelay.
                 * @member {google.protobuf.IDuration|null|undefined} retryDelay
                 * @memberof google.rpc.RetryInfo
                 * @instance
                 */
                RetryInfo.prototype.retryDelay = null;
    
                /**
                 * Creates a new RetryInfo instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {google.rpc.IRetryInfo=} [properties] Properties to set
                 * @returns {google.rpc.RetryInfo} RetryInfo instance
                 */
                RetryInfo.create = function create(properties) {
                    return new RetryInfo(properties);
                };
    
                /**
                 * Encodes the specified RetryInfo message. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RetryInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.retryDelay != null && Object.hasOwnProperty.call(message, "retryDelay"))
                        $root.google.protobuf.Duration.encode(message.retryDelay, writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RetryInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a RetryInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.RetryInfo} RetryInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RetryInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RetryInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.retryDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32(), undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.RetryInfo} RetryInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RetryInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RetryInfo message.
                 * @function verify
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RetryInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.retryDelay != null && Object.hasOwnProperty.call(message, "retryDelay")) {
                        var error = $root.google.protobuf.Duration.verify(message.retryDelay, long + 1);
                        if (error)
                            return "retryDelay." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.RetryInfo} RetryInfo
                 */
                RetryInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.RetryInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.RetryInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.RetryInfo();
                    if (object.retryDelay != null) {
                        if (!$util.isObject(object.retryDelay))
                            throw TypeError(".google.rpc.RetryInfo.retryDelay: object expected");
                        message.retryDelay = $root.google.protobuf.Duration.fromObject(object.retryDelay, long + 1);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {google.rpc.RetryInfo} message RetryInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RetryInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.retryDelay = null;
                    if (message.retryDelay != null && Object.hasOwnProperty.call(message, "retryDelay"))
                        object.retryDelay = $root.google.protobuf.Duration.toObject(message.retryDelay, options, q + 1);
                    return object;
                };
    
                /**
                 * Converts this RetryInfo to JSON.
                 * @function toJSON
                 * @memberof google.rpc.RetryInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RetryInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for RetryInfo
                 * @function getTypeUrl
                 * @memberof google.rpc.RetryInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RetryInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.RetryInfo";
                };
    
                return RetryInfo;
            })();
    
            rpc.DebugInfo = (function() {
    
                /**
                 * Properties of a DebugInfo.
                 * @memberof google.rpc
                 * @interface IDebugInfo
                 * @property {Array.<string>|null} [stackEntries] DebugInfo stackEntries
                 * @property {string|null} [detail] DebugInfo detail
                 */
    
                /**
                 * Constructs a new DebugInfo.
                 * @memberof google.rpc
                 * @classdesc Represents a DebugInfo.
                 * @implements IDebugInfo
                 * @constructor
                 * @param {google.rpc.IDebugInfo=} [properties] Properties to set
                 */
                function DebugInfo(properties) {
                    this.stackEntries = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DebugInfo stackEntries.
                 * @member {Array.<string>} stackEntries
                 * @memberof google.rpc.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.stackEntries = $util.emptyArray;
    
                /**
                 * DebugInfo detail.
                 * @member {string} detail
                 * @memberof google.rpc.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.detail = "";
    
                /**
                 * Creates a new DebugInfo instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {google.rpc.IDebugInfo=} [properties] Properties to set
                 * @returns {google.rpc.DebugInfo} DebugInfo instance
                 */
                DebugInfo.create = function create(properties) {
                    return new DebugInfo(properties);
                };
    
                /**
                 * Encodes the specified DebugInfo message. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.stackEntries != null && message.stackEntries.length)
                        for (var i = 0; i < message.stackEntries.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stackEntries[i]);
                    if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.detail);
                    return writer;
                };
    
                /**
                 * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a DebugInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.DebugInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.stackEntries && message.stackEntries.length))
                                    message.stackEntries = [];
                                message.stackEntries.push(reader.string());
                                break;
                            }
                        case 2: {
                                message.detail = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DebugInfo message.
                 * @function verify
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DebugInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.stackEntries != null && Object.hasOwnProperty.call(message, "stackEntries")) {
                        if (!Array.isArray(message.stackEntries))
                            return "stackEntries: array expected";
                        for (var i = 0; i < message.stackEntries.length; ++i)
                            if (!$util.isString(message.stackEntries[i]))
                                return "stackEntries: string[] expected";
                    }
                    if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                        if (!$util.isString(message.detail))
                            return "detail: string expected";
                    return null;
                };
    
                /**
                 * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.DebugInfo} DebugInfo
                 */
                DebugInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.DebugInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.DebugInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.DebugInfo();
                    if (object.stackEntries) {
                        if (!Array.isArray(object.stackEntries))
                            throw TypeError(".google.rpc.DebugInfo.stackEntries: array expected");
                        message.stackEntries = [];
                        for (var i = 0; i < object.stackEntries.length; ++i)
                            message.stackEntries[i] = String(object.stackEntries[i]);
                    }
                    if (object.detail != null)
                        message.detail = String(object.detail);
                    return message;
                };
    
                /**
                 * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {google.rpc.DebugInfo} message DebugInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DebugInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.stackEntries = [];
                    if (options.defaults)
                        object.detail = "";
                    if (message.stackEntries && message.stackEntries.length) {
                        object.stackEntries = [];
                        for (var j = 0; j < message.stackEntries.length; ++j)
                            object.stackEntries[j] = message.stackEntries[j];
                    }
                    if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                        object.detail = message.detail;
                    return object;
                };
    
                /**
                 * Converts this DebugInfo to JSON.
                 * @function toJSON
                 * @memberof google.rpc.DebugInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DebugInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DebugInfo
                 * @function getTypeUrl
                 * @memberof google.rpc.DebugInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DebugInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.DebugInfo";
                };
    
                return DebugInfo;
            })();
    
            rpc.QuotaFailure = (function() {
    
                /**
                 * Properties of a QuotaFailure.
                 * @memberof google.rpc
                 * @interface IQuotaFailure
                 * @property {Array.<google.rpc.QuotaFailure.IViolation>|null} [violations] QuotaFailure violations
                 */
    
                /**
                 * Constructs a new QuotaFailure.
                 * @memberof google.rpc
                 * @classdesc Represents a QuotaFailure.
                 * @implements IQuotaFailure
                 * @constructor
                 * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
                 */
                function QuotaFailure(properties) {
                    this.violations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * QuotaFailure violations.
                 * @member {Array.<google.rpc.QuotaFailure.IViolation>} violations
                 * @memberof google.rpc.QuotaFailure
                 * @instance
                 */
                QuotaFailure.prototype.violations = $util.emptyArray;
    
                /**
                 * Creates a new QuotaFailure instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
                 * @returns {google.rpc.QuotaFailure} QuotaFailure instance
                 */
                QuotaFailure.create = function create(properties) {
                    return new QuotaFailure(properties);
                };
    
                /**
                 * Encodes the specified QuotaFailure message. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuotaFailure.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.violations != null && message.violations.length)
                        for (var i = 0; i < message.violations.length; ++i)
                            $root.google.rpc.QuotaFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified QuotaFailure message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuotaFailure.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a QuotaFailure message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.QuotaFailure} QuotaFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuotaFailure.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.violations && message.violations.length))
                                    message.violations = [];
                                message.violations.push($root.google.rpc.QuotaFailure.Violation.decode(reader, reader.uint32(), undefined, long + 1));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a QuotaFailure message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.QuotaFailure} QuotaFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuotaFailure.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a QuotaFailure message.
                 * @function verify
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QuotaFailure.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.violations != null && Object.hasOwnProperty.call(message, "violations")) {
                        if (!Array.isArray(message.violations))
                            return "violations: array expected";
                        for (var i = 0; i < message.violations.length; ++i) {
                            var error = $root.google.rpc.QuotaFailure.Violation.verify(message.violations[i], long + 1);
                            if (error)
                                return "violations." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a QuotaFailure message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.QuotaFailure} QuotaFailure
                 */
                QuotaFailure.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.QuotaFailure)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.QuotaFailure: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.QuotaFailure();
                    if (object.violations) {
                        if (!Array.isArray(object.violations))
                            throw TypeError(".google.rpc.QuotaFailure.violations: array expected");
                        message.violations = [];
                        for (var i = 0; i < object.violations.length; ++i) {
                            if (!$util.isObject(object.violations[i]))
                                throw TypeError(".google.rpc.QuotaFailure.violations: object expected");
                            message.violations[i] = $root.google.rpc.QuotaFailure.Violation.fromObject(object.violations[i], long + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a QuotaFailure message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {google.rpc.QuotaFailure} message QuotaFailure
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QuotaFailure.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.violations = [];
                    if (message.violations && message.violations.length) {
                        object.violations = [];
                        for (var j = 0; j < message.violations.length; ++j)
                            object.violations[j] = $root.google.rpc.QuotaFailure.Violation.toObject(message.violations[j], options, q + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this QuotaFailure to JSON.
                 * @function toJSON
                 * @memberof google.rpc.QuotaFailure
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QuotaFailure.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for QuotaFailure
                 * @function getTypeUrl
                 * @memberof google.rpc.QuotaFailure
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                QuotaFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.QuotaFailure";
                };
    
                QuotaFailure.Violation = (function() {
    
                    /**
                     * Properties of a Violation.
                     * @memberof google.rpc.QuotaFailure
                     * @interface IViolation
                     * @property {string|null} [subject] Violation subject
                     * @property {string|null} [description] Violation description
                     * @property {string|null} [apiService] Violation apiService
                     * @property {string|null} [quotaMetric] Violation quotaMetric
                     * @property {string|null} [quotaId] Violation quotaId
                     * @property {Object.<string,string>|null} [quotaDimensions] Violation quotaDimensions
                     * @property {number|Long|null} [quotaValue] Violation quotaValue
                     * @property {number|Long|null} [futureQuotaValue] Violation futureQuotaValue
                     */
    
                    /**
                     * Constructs a new Violation.
                     * @memberof google.rpc.QuotaFailure
                     * @classdesc Represents a Violation.
                     * @implements IViolation
                     * @constructor
                     * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                     */
                    function Violation(properties) {
                        this.quotaDimensions = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Violation subject.
                     * @member {string} subject
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.subject = "";
    
                    /**
                     * Violation description.
                     * @member {string} description
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.description = "";
    
                    /**
                     * Violation apiService.
                     * @member {string} apiService
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.apiService = "";
    
                    /**
                     * Violation quotaMetric.
                     * @member {string} quotaMetric
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.quotaMetric = "";
    
                    /**
                     * Violation quotaId.
                     * @member {string} quotaId
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.quotaId = "";
    
                    /**
                     * Violation quotaDimensions.
                     * @member {Object.<string,string>} quotaDimensions
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.quotaDimensions = $util.emptyObject;
    
                    /**
                     * Violation quotaValue.
                     * @member {number|Long} quotaValue
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.quotaValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Violation futureQuotaValue.
                     * @member {number|Long|null|undefined} futureQuotaValue
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     */
                    Violation.prototype.futureQuotaValue = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(Violation.prototype, "_futureQuotaValue", {
                        get: $util.oneOfGetter($oneOfFields = ["futureQuotaValue"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new Violation instance using the specified properties.
                     * @function create
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                     * @returns {google.rpc.QuotaFailure.Violation} Violation instance
                     */
                    Violation.create = function create(properties) {
                        return new Violation(properties);
                    };
    
                    /**
                     * Encodes the specified Violation message. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                     * @function encode
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Violation.encode = function encode(message, writer, q) {
                        if (!writer)
                            writer = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                        if (message.apiService != null && Object.hasOwnProperty.call(message, "apiService"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.apiService);
                        if (message.quotaMetric != null && Object.hasOwnProperty.call(message, "quotaMetric"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.quotaMetric);
                        if (message.quotaId != null && Object.hasOwnProperty.call(message, "quotaId"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.quotaId);
                        if (message.quotaDimensions != null && Object.hasOwnProperty.call(message, "quotaDimensions"))
                            for (var keys = Object.keys(message.quotaDimensions), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.quotaDimensions[keys[i]]).ldelim();
                        if (message.quotaValue != null && Object.hasOwnProperty.call(message, "quotaValue"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.quotaValue);
                        if (message.futureQuotaValue != null && Object.hasOwnProperty.call(message, "futureQuotaValue"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.futureQuotaValue);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Violation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };
    
                    /**
                     * Decodes a Violation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.rpc.QuotaFailure.Violation} Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Violation.decode = function decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure.Violation(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.subject = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.description = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.apiService = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.quotaMetric = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.quotaId = reader.string();
                                    break;
                                }
                            case 6: {
                                    if (message.quotaDimensions === $util.emptyObject)
                                        message.quotaDimensions = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        var tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7, long);
                                            break;
                                        }
                                    }
                                    if (key === "__proto__")
                                        $util.makeProp(message.quotaDimensions, key);
                                    message.quotaDimensions[key] = value;
                                    break;
                                }
                            case 7: {
                                    message.quotaValue = reader.int64();
                                    break;
                                }
                            case 8: {
                                    message.futureQuotaValue = reader.int64();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Violation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.rpc.QuotaFailure.Violation} Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Violation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Violation message.
                     * @function verify
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Violation.verify = function verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        var properties = {};
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            if (!$util.isString(message.subject))
                                return "subject: string expected";
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.apiService != null && Object.hasOwnProperty.call(message, "apiService"))
                            if (!$util.isString(message.apiService))
                                return "apiService: string expected";
                        if (message.quotaMetric != null && Object.hasOwnProperty.call(message, "quotaMetric"))
                            if (!$util.isString(message.quotaMetric))
                                return "quotaMetric: string expected";
                        if (message.quotaId != null && Object.hasOwnProperty.call(message, "quotaId"))
                            if (!$util.isString(message.quotaId))
                                return "quotaId: string expected";
                        if (message.quotaDimensions != null && Object.hasOwnProperty.call(message, "quotaDimensions")) {
                            if (!$util.isObject(message.quotaDimensions))
                                return "quotaDimensions: object expected";
                            var key = Object.keys(message.quotaDimensions);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.quotaDimensions[key[i]]))
                                    return "quotaDimensions: string{k:string} expected";
                        }
                        if (message.quotaValue != null && Object.hasOwnProperty.call(message, "quotaValue"))
                            if (!$util.isInteger(message.quotaValue) && !(message.quotaValue && $util.isInteger(message.quotaValue.low) && $util.isInteger(message.quotaValue.high)))
                                return "quotaValue: integer|Long expected";
                        if (message.futureQuotaValue != null && Object.hasOwnProperty.call(message, "futureQuotaValue")) {
                            properties._futureQuotaValue = 1;
                            if (!$util.isInteger(message.futureQuotaValue) && !(message.futureQuotaValue && $util.isInteger(message.futureQuotaValue.low) && $util.isInteger(message.futureQuotaValue.high)))
                                return "futureQuotaValue: integer|Long expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.rpc.QuotaFailure.Violation} Violation
                     */
                    Violation.fromObject = function fromObject(object, long) {
                        if (object instanceof $root.google.rpc.QuotaFailure.Violation)
                            return object;
                        if (!$util.isObject(object))
                            throw TypeError(".google.rpc.QuotaFailure.Violation: object expected");
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var message = new $root.google.rpc.QuotaFailure.Violation();
                        if (object.subject != null)
                            message.subject = String(object.subject);
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.apiService != null)
                            message.apiService = String(object.apiService);
                        if (object.quotaMetric != null)
                            message.quotaMetric = String(object.quotaMetric);
                        if (object.quotaId != null)
                            message.quotaId = String(object.quotaId);
                        if (object.quotaDimensions) {
                            if (!$util.isObject(object.quotaDimensions))
                                throw TypeError(".google.rpc.QuotaFailure.Violation.quotaDimensions: object expected");
                            message.quotaDimensions = {};
                            for (var keys = Object.keys(object.quotaDimensions), i = 0; i < keys.length; ++i) {
                                if (keys[i] === "__proto__")
                                    $util.makeProp(message.quotaDimensions, keys[i]);
                                message.quotaDimensions[keys[i]] = String(object.quotaDimensions[keys[i]]);
                            }
                        }
                        if (object.quotaValue != null)
                            if ($util.Long)
                                message.quotaValue = $util.Long.fromValue(object.quotaValue, false);
                            else if (typeof object.quotaValue === "string")
                                message.quotaValue = parseInt(object.quotaValue, 10);
                            else if (typeof object.quotaValue === "number")
                                message.quotaValue = object.quotaValue;
                            else if (typeof object.quotaValue === "object")
                                message.quotaValue = new $util.LongBits(object.quotaValue.low >>> 0, object.quotaValue.high >>> 0).toNumber();
                        if (object.futureQuotaValue != null)
                            if ($util.Long)
                                message.futureQuotaValue = $util.Long.fromValue(object.futureQuotaValue, false);
                            else if (typeof object.futureQuotaValue === "string")
                                message.futureQuotaValue = parseInt(object.futureQuotaValue, 10);
                            else if (typeof object.futureQuotaValue === "number")
                                message.futureQuotaValue = object.futureQuotaValue;
                            else if (typeof object.futureQuotaValue === "object")
                                message.futureQuotaValue = new $util.LongBits(object.futureQuotaValue.low >>> 0, object.futureQuotaValue.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Violation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {google.rpc.QuotaFailure.Violation} message Violation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Violation.toObject = function toObject(message, options, q) {
                        if (!options)
                            options = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var object = {};
                        if (options.objects || options.defaults)
                            object.quotaDimensions = {};
                        if (options.defaults) {
                            object.subject = "";
                            object.description = "";
                            object.apiService = "";
                            object.quotaMetric = "";
                            object.quotaId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.quotaValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                            } else
                                object.quotaValue = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                        }
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            object.subject = message.subject;
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            object.description = message.description;
                        if (message.apiService != null && Object.hasOwnProperty.call(message, "apiService"))
                            object.apiService = message.apiService;
                        if (message.quotaMetric != null && Object.hasOwnProperty.call(message, "quotaMetric"))
                            object.quotaMetric = message.quotaMetric;
                        if (message.quotaId != null && Object.hasOwnProperty.call(message, "quotaId"))
                            object.quotaId = message.quotaId;
                        var keys2;
                        if (message.quotaDimensions && (keys2 = Object.keys(message.quotaDimensions)).length) {
                            object.quotaDimensions = {};
                            for (var j = 0; j < keys2.length; ++j) {
                                if (keys2[j] === "__proto__")
                                    $util.makeProp(object.quotaDimensions, keys2[j]);
                                object.quotaDimensions[keys2[j]] = message.quotaDimensions[keys2[j]];
                            }
                        }
                        if (message.quotaValue != null && Object.hasOwnProperty.call(message, "quotaValue"))
                            if (typeof BigInt !== "undefined" && options.longs === BigInt)
                                object.quotaValue = typeof message.quotaValue === "number" ? BigInt(message.quotaValue) : $util.Long.fromBits(message.quotaValue.low >>> 0, message.quotaValue.high >>> 0, false).toBigInt();
                            else if (typeof message.quotaValue === "number")
                                object.quotaValue = options.longs === String ? String(message.quotaValue) : message.quotaValue;
                            else
                                object.quotaValue = options.longs === String ? $util.Long.prototype.toString.call(message.quotaValue) : options.longs === Number ? new $util.LongBits(message.quotaValue.low >>> 0, message.quotaValue.high >>> 0).toNumber() : message.quotaValue;
                        if (message.futureQuotaValue != null && Object.hasOwnProperty.call(message, "futureQuotaValue")) {
                            if (typeof BigInt !== "undefined" && options.longs === BigInt)
                                object.futureQuotaValue = typeof message.futureQuotaValue === "number" ? BigInt(message.futureQuotaValue) : $util.Long.fromBits(message.futureQuotaValue.low >>> 0, message.futureQuotaValue.high >>> 0, false).toBigInt();
                            else if (typeof message.futureQuotaValue === "number")
                                object.futureQuotaValue = options.longs === String ? String(message.futureQuotaValue) : message.futureQuotaValue;
                            else
                                object.futureQuotaValue = options.longs === String ? $util.Long.prototype.toString.call(message.futureQuotaValue) : options.longs === Number ? new $util.LongBits(message.futureQuotaValue.low >>> 0, message.futureQuotaValue.high >>> 0).toNumber() : message.futureQuotaValue;
                            if (options.oneofs)
                                object._futureQuotaValue = "futureQuotaValue";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Violation to JSON.
                     * @function toJSON
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Violation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Violation
                     * @function getTypeUrl
                     * @memberof google.rpc.QuotaFailure.Violation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Violation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.rpc.QuotaFailure.Violation";
                    };
    
                    return Violation;
                })();
    
                return QuotaFailure;
            })();
    
            rpc.PreconditionFailure = (function() {
    
                /**
                 * Properties of a PreconditionFailure.
                 * @memberof google.rpc
                 * @interface IPreconditionFailure
                 * @property {Array.<google.rpc.PreconditionFailure.IViolation>|null} [violations] PreconditionFailure violations
                 */
    
                /**
                 * Constructs a new PreconditionFailure.
                 * @memberof google.rpc
                 * @classdesc Represents a PreconditionFailure.
                 * @implements IPreconditionFailure
                 * @constructor
                 * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
                 */
                function PreconditionFailure(properties) {
                    this.violations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PreconditionFailure violations.
                 * @member {Array.<google.rpc.PreconditionFailure.IViolation>} violations
                 * @memberof google.rpc.PreconditionFailure
                 * @instance
                 */
                PreconditionFailure.prototype.violations = $util.emptyArray;
    
                /**
                 * Creates a new PreconditionFailure instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
                 * @returns {google.rpc.PreconditionFailure} PreconditionFailure instance
                 */
                PreconditionFailure.create = function create(properties) {
                    return new PreconditionFailure(properties);
                };
    
                /**
                 * Encodes the specified PreconditionFailure message. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PreconditionFailure.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.violations != null && message.violations.length)
                        for (var i = 0; i < message.violations.length; ++i)
                            $root.google.rpc.PreconditionFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PreconditionFailure message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PreconditionFailure.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a PreconditionFailure message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.PreconditionFailure} PreconditionFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PreconditionFailure.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.violations && message.violations.length))
                                    message.violations = [];
                                message.violations.push($root.google.rpc.PreconditionFailure.Violation.decode(reader, reader.uint32(), undefined, long + 1));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PreconditionFailure message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.PreconditionFailure} PreconditionFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PreconditionFailure.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PreconditionFailure message.
                 * @function verify
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PreconditionFailure.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.violations != null && Object.hasOwnProperty.call(message, "violations")) {
                        if (!Array.isArray(message.violations))
                            return "violations: array expected";
                        for (var i = 0; i < message.violations.length; ++i) {
                            var error = $root.google.rpc.PreconditionFailure.Violation.verify(message.violations[i], long + 1);
                            if (error)
                                return "violations." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a PreconditionFailure message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.PreconditionFailure} PreconditionFailure
                 */
                PreconditionFailure.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.PreconditionFailure)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.PreconditionFailure: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.PreconditionFailure();
                    if (object.violations) {
                        if (!Array.isArray(object.violations))
                            throw TypeError(".google.rpc.PreconditionFailure.violations: array expected");
                        message.violations = [];
                        for (var i = 0; i < object.violations.length; ++i) {
                            if (!$util.isObject(object.violations[i]))
                                throw TypeError(".google.rpc.PreconditionFailure.violations: object expected");
                            message.violations[i] = $root.google.rpc.PreconditionFailure.Violation.fromObject(object.violations[i], long + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PreconditionFailure message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {google.rpc.PreconditionFailure} message PreconditionFailure
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PreconditionFailure.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.violations = [];
                    if (message.violations && message.violations.length) {
                        object.violations = [];
                        for (var j = 0; j < message.violations.length; ++j)
                            object.violations[j] = $root.google.rpc.PreconditionFailure.Violation.toObject(message.violations[j], options, q + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this PreconditionFailure to JSON.
                 * @function toJSON
                 * @memberof google.rpc.PreconditionFailure
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PreconditionFailure.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PreconditionFailure
                 * @function getTypeUrl
                 * @memberof google.rpc.PreconditionFailure
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PreconditionFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.PreconditionFailure";
                };
    
                PreconditionFailure.Violation = (function() {
    
                    /**
                     * Properties of a Violation.
                     * @memberof google.rpc.PreconditionFailure
                     * @interface IViolation
                     * @property {string|null} [type] Violation type
                     * @property {string|null} [subject] Violation subject
                     * @property {string|null} [description] Violation description
                     */
    
                    /**
                     * Constructs a new Violation.
                     * @memberof google.rpc.PreconditionFailure
                     * @classdesc Represents a Violation.
                     * @implements IViolation
                     * @constructor
                     * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                     */
                    function Violation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Violation type.
                     * @member {string} type
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @instance
                     */
                    Violation.prototype.type = "";
    
                    /**
                     * Violation subject.
                     * @member {string} subject
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @instance
                     */
                    Violation.prototype.subject = "";
    
                    /**
                     * Violation description.
                     * @member {string} description
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @instance
                     */
                    Violation.prototype.description = "";
    
                    /**
                     * Creates a new Violation instance using the specified properties.
                     * @function create
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                     * @returns {google.rpc.PreconditionFailure.Violation} Violation instance
                     */
                    Violation.create = function create(properties) {
                        return new Violation(properties);
                    };
    
                    /**
                     * Encodes the specified Violation message. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                     * @function encode
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Violation.encode = function encode(message, writer, q) {
                        if (!writer)
                            writer = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subject);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Violation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };
    
                    /**
                     * Decodes a Violation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.rpc.PreconditionFailure.Violation} Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Violation.decode = function decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure.Violation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.type = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.subject = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.description = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Violation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.rpc.PreconditionFailure.Violation} Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Violation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Violation message.
                     * @function verify
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Violation.verify = function verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            if (!$util.isString(message.subject))
                                return "subject: string expected";
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.rpc.PreconditionFailure.Violation} Violation
                     */
                    Violation.fromObject = function fromObject(object, long) {
                        if (object instanceof $root.google.rpc.PreconditionFailure.Violation)
                            return object;
                        if (!$util.isObject(object))
                            throw TypeError(".google.rpc.PreconditionFailure.Violation: object expected");
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var message = new $root.google.rpc.PreconditionFailure.Violation();
                        if (object.type != null)
                            message.type = String(object.type);
                        if (object.subject != null)
                            message.subject = String(object.subject);
                        if (object.description != null)
                            message.description = String(object.description);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Violation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {google.rpc.PreconditionFailure.Violation} message Violation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Violation.toObject = function toObject(message, options, q) {
                        if (!options)
                            options = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.type = "";
                            object.subject = "";
                            object.description = "";
                        }
                        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                            object.type = message.type;
                        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                            object.subject = message.subject;
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            object.description = message.description;
                        return object;
                    };
    
                    /**
                     * Converts this Violation to JSON.
                     * @function toJSON
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Violation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Violation
                     * @function getTypeUrl
                     * @memberof google.rpc.PreconditionFailure.Violation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Violation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.rpc.PreconditionFailure.Violation";
                    };
    
                    return Violation;
                })();
    
                return PreconditionFailure;
            })();
    
            rpc.BadRequest = (function() {
    
                /**
                 * Properties of a BadRequest.
                 * @memberof google.rpc
                 * @interface IBadRequest
                 * @property {Array.<google.rpc.BadRequest.IFieldViolation>|null} [fieldViolations] BadRequest fieldViolations
                 */
    
                /**
                 * Constructs a new BadRequest.
                 * @memberof google.rpc
                 * @classdesc Represents a BadRequest.
                 * @implements IBadRequest
                 * @constructor
                 * @param {google.rpc.IBadRequest=} [properties] Properties to set
                 */
                function BadRequest(properties) {
                    this.fieldViolations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BadRequest fieldViolations.
                 * @member {Array.<google.rpc.BadRequest.IFieldViolation>} fieldViolations
                 * @memberof google.rpc.BadRequest
                 * @instance
                 */
                BadRequest.prototype.fieldViolations = $util.emptyArray;
    
                /**
                 * Creates a new BadRequest instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {google.rpc.IBadRequest=} [properties] Properties to set
                 * @returns {google.rpc.BadRequest} BadRequest instance
                 */
                BadRequest.create = function create(properties) {
                    return new BadRequest(properties);
                };
    
                /**
                 * Encodes the specified BadRequest message. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BadRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.fieldViolations != null && message.fieldViolations.length)
                        for (var i = 0; i < message.fieldViolations.length; ++i)
                            $root.google.rpc.BadRequest.FieldViolation.encode(message.fieldViolations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified BadRequest message, length delimited. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a BadRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.BadRequest} BadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BadRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.fieldViolations && message.fieldViolations.length))
                                    message.fieldViolations = [];
                                message.fieldViolations.push($root.google.rpc.BadRequest.FieldViolation.decode(reader, reader.uint32(), undefined, long + 1));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BadRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.BadRequest} BadRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BadRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BadRequest message.
                 * @function verify
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BadRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.fieldViolations != null && Object.hasOwnProperty.call(message, "fieldViolations")) {
                        if (!Array.isArray(message.fieldViolations))
                            return "fieldViolations: array expected";
                        for (var i = 0; i < message.fieldViolations.length; ++i) {
                            var error = $root.google.rpc.BadRequest.FieldViolation.verify(message.fieldViolations[i], long + 1);
                            if (error)
                                return "fieldViolations." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a BadRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.BadRequest} BadRequest
                 */
                BadRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.BadRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.BadRequest: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.BadRequest();
                    if (object.fieldViolations) {
                        if (!Array.isArray(object.fieldViolations))
                            throw TypeError(".google.rpc.BadRequest.fieldViolations: array expected");
                        message.fieldViolations = [];
                        for (var i = 0; i < object.fieldViolations.length; ++i) {
                            if (!$util.isObject(object.fieldViolations[i]))
                                throw TypeError(".google.rpc.BadRequest.fieldViolations: object expected");
                            message.fieldViolations[i] = $root.google.rpc.BadRequest.FieldViolation.fromObject(object.fieldViolations[i], long + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a BadRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {google.rpc.BadRequest} message BadRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BadRequest.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fieldViolations = [];
                    if (message.fieldViolations && message.fieldViolations.length) {
                        object.fieldViolations = [];
                        for (var j = 0; j < message.fieldViolations.length; ++j)
                            object.fieldViolations[j] = $root.google.rpc.BadRequest.FieldViolation.toObject(message.fieldViolations[j], options, q + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this BadRequest to JSON.
                 * @function toJSON
                 * @memberof google.rpc.BadRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BadRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for BadRequest
                 * @function getTypeUrl
                 * @memberof google.rpc.BadRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BadRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.BadRequest";
                };
    
                BadRequest.FieldViolation = (function() {
    
                    /**
                     * Properties of a FieldViolation.
                     * @memberof google.rpc.BadRequest
                     * @interface IFieldViolation
                     * @property {string|null} [field] FieldViolation field
                     * @property {string|null} [description] FieldViolation description
                     * @property {string|null} [reason] FieldViolation reason
                     * @property {google.rpc.ILocalizedMessage|null} [localizedMessage] FieldViolation localizedMessage
                     */
    
                    /**
                     * Constructs a new FieldViolation.
                     * @memberof google.rpc.BadRequest
                     * @classdesc Represents a FieldViolation.
                     * @implements IFieldViolation
                     * @constructor
                     * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                     */
                    function FieldViolation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * FieldViolation field.
                     * @member {string} field
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @instance
                     */
                    FieldViolation.prototype.field = "";
    
                    /**
                     * FieldViolation description.
                     * @member {string} description
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @instance
                     */
                    FieldViolation.prototype.description = "";
    
                    /**
                     * FieldViolation reason.
                     * @member {string} reason
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @instance
                     */
                    FieldViolation.prototype.reason = "";
    
                    /**
                     * FieldViolation localizedMessage.
                     * @member {google.rpc.ILocalizedMessage|null|undefined} localizedMessage
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @instance
                     */
                    FieldViolation.prototype.localizedMessage = null;
    
                    /**
                     * Creates a new FieldViolation instance using the specified properties.
                     * @function create
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                     * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation instance
                     */
                    FieldViolation.create = function create(properties) {
                        return new FieldViolation(properties);
                    };
    
                    /**
                     * Encodes the specified FieldViolation message. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                     * @function encode
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FieldViolation.encode = function encode(message, writer, q) {
                        if (!writer)
                            writer = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
                        if (message.localizedMessage != null && Object.hasOwnProperty.call(message, "localizedMessage"))
                            $root.google.rpc.LocalizedMessage.encode(message.localizedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork(), q + 1).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified FieldViolation message, length delimited. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FieldViolation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };
    
                    /**
                     * Decodes a FieldViolation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FieldViolation.decode = function decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest.FieldViolation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.field = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.description = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.reason = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.localizedMessage = $root.google.rpc.LocalizedMessage.decode(reader, reader.uint32(), undefined, long + 1);
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a FieldViolation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FieldViolation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a FieldViolation message.
                     * @function verify
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FieldViolation.verify = function verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                            if (!$util.isString(message.field))
                                return "field: string expected";
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        if (message.localizedMessage != null && Object.hasOwnProperty.call(message, "localizedMessage")) {
                            var error = $root.google.rpc.LocalizedMessage.verify(message.localizedMessage, long + 1);
                            if (error)
                                return "localizedMessage." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a FieldViolation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                     */
                    FieldViolation.fromObject = function fromObject(object, long) {
                        if (object instanceof $root.google.rpc.BadRequest.FieldViolation)
                            return object;
                        if (!$util.isObject(object))
                            throw TypeError(".google.rpc.BadRequest.FieldViolation: object expected");
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var message = new $root.google.rpc.BadRequest.FieldViolation();
                        if (object.field != null)
                            message.field = String(object.field);
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        if (object.localizedMessage != null) {
                            if (!$util.isObject(object.localizedMessage))
                                throw TypeError(".google.rpc.BadRequest.FieldViolation.localizedMessage: object expected");
                            message.localizedMessage = $root.google.rpc.LocalizedMessage.fromObject(object.localizedMessage, long + 1);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a FieldViolation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {google.rpc.BadRequest.FieldViolation} message FieldViolation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FieldViolation.toObject = function toObject(message, options, q) {
                        if (!options)
                            options = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.field = "";
                            object.description = "";
                            object.reason = "";
                            object.localizedMessage = null;
                        }
                        if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                            object.field = message.field;
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            object.description = message.description;
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            object.reason = message.reason;
                        if (message.localizedMessage != null && Object.hasOwnProperty.call(message, "localizedMessage"))
                            object.localizedMessage = $root.google.rpc.LocalizedMessage.toObject(message.localizedMessage, options, q + 1);
                        return object;
                    };
    
                    /**
                     * Converts this FieldViolation to JSON.
                     * @function toJSON
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FieldViolation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for FieldViolation
                     * @function getTypeUrl
                     * @memberof google.rpc.BadRequest.FieldViolation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    FieldViolation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.rpc.BadRequest.FieldViolation";
                    };
    
                    return FieldViolation;
                })();
    
                return BadRequest;
            })();
    
            rpc.RequestInfo = (function() {
    
                /**
                 * Properties of a RequestInfo.
                 * @memberof google.rpc
                 * @interface IRequestInfo
                 * @property {string|null} [requestId] RequestInfo requestId
                 * @property {string|null} [servingData] RequestInfo servingData
                 */
    
                /**
                 * Constructs a new RequestInfo.
                 * @memberof google.rpc
                 * @classdesc Represents a RequestInfo.
                 * @implements IRequestInfo
                 * @constructor
                 * @param {google.rpc.IRequestInfo=} [properties] Properties to set
                 */
                function RequestInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RequestInfo requestId.
                 * @member {string} requestId
                 * @memberof google.rpc.RequestInfo
                 * @instance
                 */
                RequestInfo.prototype.requestId = "";
    
                /**
                 * RequestInfo servingData.
                 * @member {string} servingData
                 * @memberof google.rpc.RequestInfo
                 * @instance
                 */
                RequestInfo.prototype.servingData = "";
    
                /**
                 * Creates a new RequestInfo instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {google.rpc.IRequestInfo=} [properties] Properties to set
                 * @returns {google.rpc.RequestInfo} RequestInfo instance
                 */
                RequestInfo.create = function create(properties) {
                    return new RequestInfo(properties);
                };
    
                /**
                 * Encodes the specified RequestInfo message. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
                    if (message.servingData != null && Object.hasOwnProperty.call(message, "servingData"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.servingData);
                    return writer;
                };
    
                /**
                 * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a RequestInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.RequestInfo} RequestInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RequestInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.requestId = reader.string();
                                break;
                            }
                        case 2: {
                                message.servingData = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.RequestInfo} RequestInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RequestInfo message.
                 * @function verify
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequestInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                        if (!$util.isString(message.requestId))
                            return "requestId: string expected";
                    if (message.servingData != null && Object.hasOwnProperty.call(message, "servingData"))
                        if (!$util.isString(message.servingData))
                            return "servingData: string expected";
                    return null;
                };
    
                /**
                 * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.RequestInfo} RequestInfo
                 */
                RequestInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.RequestInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.RequestInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.RequestInfo();
                    if (object.requestId != null)
                        message.requestId = String(object.requestId);
                    if (object.servingData != null)
                        message.servingData = String(object.servingData);
                    return message;
                };
    
                /**
                 * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {google.rpc.RequestInfo} message RequestInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequestInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.requestId = "";
                        object.servingData = "";
                    }
                    if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                        object.requestId = message.requestId;
                    if (message.servingData != null && Object.hasOwnProperty.call(message, "servingData"))
                        object.servingData = message.servingData;
                    return object;
                };
    
                /**
                 * Converts this RequestInfo to JSON.
                 * @function toJSON
                 * @memberof google.rpc.RequestInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RequestInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for RequestInfo
                 * @function getTypeUrl
                 * @memberof google.rpc.RequestInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RequestInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.RequestInfo";
                };
    
                return RequestInfo;
            })();
    
            rpc.ResourceInfo = (function() {
    
                /**
                 * Properties of a ResourceInfo.
                 * @memberof google.rpc
                 * @interface IResourceInfo
                 * @property {string|null} [resourceType] ResourceInfo resourceType
                 * @property {string|null} [resourceName] ResourceInfo resourceName
                 * @property {string|null} [owner] ResourceInfo owner
                 * @property {string|null} [description] ResourceInfo description
                 */
    
                /**
                 * Constructs a new ResourceInfo.
                 * @memberof google.rpc
                 * @classdesc Represents a ResourceInfo.
                 * @implements IResourceInfo
                 * @constructor
                 * @param {google.rpc.IResourceInfo=} [properties] Properties to set
                 */
                function ResourceInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ResourceInfo resourceType.
                 * @member {string} resourceType
                 * @memberof google.rpc.ResourceInfo
                 * @instance
                 */
                ResourceInfo.prototype.resourceType = "";
    
                /**
                 * ResourceInfo resourceName.
                 * @member {string} resourceName
                 * @memberof google.rpc.ResourceInfo
                 * @instance
                 */
                ResourceInfo.prototype.resourceName = "";
    
                /**
                 * ResourceInfo owner.
                 * @member {string} owner
                 * @memberof google.rpc.ResourceInfo
                 * @instance
                 */
                ResourceInfo.prototype.owner = "";
    
                /**
                 * ResourceInfo description.
                 * @member {string} description
                 * @memberof google.rpc.ResourceInfo
                 * @instance
                 */
                ResourceInfo.prototype.description = "";
    
                /**
                 * Creates a new ResourceInfo instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {google.rpc.IResourceInfo=} [properties] Properties to set
                 * @returns {google.rpc.ResourceInfo} ResourceInfo instance
                 */
                ResourceInfo.create = function create(properties) {
                    return new ResourceInfo(properties);
                };
    
                /**
                 * Encodes the specified ResourceInfo message. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.resourceType != null && Object.hasOwnProperty.call(message, "resourceType"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceType);
                    if (message.resourceName != null && Object.hasOwnProperty.call(message, "resourceName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceName);
                    if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                    return writer;
                };
    
                /**
                 * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a ResourceInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.ResourceInfo} ResourceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.ResourceInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.resourceType = reader.string();
                                break;
                            }
                        case 2: {
                                message.resourceName = reader.string();
                                break;
                            }
                        case 3: {
                                message.owner = reader.string();
                                break;
                            }
                        case 4: {
                                message.description = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.ResourceInfo} ResourceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ResourceInfo message.
                 * @function verify
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.resourceType != null && Object.hasOwnProperty.call(message, "resourceType"))
                        if (!$util.isString(message.resourceType))
                            return "resourceType: string expected";
                    if (message.resourceName != null && Object.hasOwnProperty.call(message, "resourceName"))
                        if (!$util.isString(message.resourceName))
                            return "resourceName: string expected";
                    if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                        if (!$util.isString(message.owner))
                            return "owner: string expected";
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };
    
                /**
                 * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.ResourceInfo} ResourceInfo
                 */
                ResourceInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.ResourceInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.ResourceInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.ResourceInfo();
                    if (object.resourceType != null)
                        message.resourceType = String(object.resourceType);
                    if (object.resourceName != null)
                        message.resourceName = String(object.resourceName);
                    if (object.owner != null)
                        message.owner = String(object.owner);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {google.rpc.ResourceInfo} message ResourceInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResourceInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.resourceType = "";
                        object.resourceName = "";
                        object.owner = "";
                        object.description = "";
                    }
                    if (message.resourceType != null && Object.hasOwnProperty.call(message, "resourceType"))
                        object.resourceType = message.resourceType;
                    if (message.resourceName != null && Object.hasOwnProperty.call(message, "resourceName"))
                        object.resourceName = message.resourceName;
                    if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                        object.owner = message.owner;
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        object.description = message.description;
                    return object;
                };
    
                /**
                 * Converts this ResourceInfo to JSON.
                 * @function toJSON
                 * @memberof google.rpc.ResourceInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResourceInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ResourceInfo
                 * @function getTypeUrl
                 * @memberof google.rpc.ResourceInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ResourceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.ResourceInfo";
                };
    
                return ResourceInfo;
            })();
    
            rpc.Help = (function() {
    
                /**
                 * Properties of a Help.
                 * @memberof google.rpc
                 * @interface IHelp
                 * @property {Array.<google.rpc.Help.ILink>|null} [links] Help links
                 */
    
                /**
                 * Constructs a new Help.
                 * @memberof google.rpc
                 * @classdesc Represents a Help.
                 * @implements IHelp
                 * @constructor
                 * @param {google.rpc.IHelp=} [properties] Properties to set
                 */
                function Help(properties) {
                    this.links = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Help links.
                 * @member {Array.<google.rpc.Help.ILink>} links
                 * @memberof google.rpc.Help
                 * @instance
                 */
                Help.prototype.links = $util.emptyArray;
    
                /**
                 * Creates a new Help instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.Help
                 * @static
                 * @param {google.rpc.IHelp=} [properties] Properties to set
                 * @returns {google.rpc.Help} Help instance
                 */
                Help.create = function create(properties) {
                    return new Help(properties);
                };
    
                /**
                 * Encodes the specified Help message. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.Help
                 * @static
                 * @param {google.rpc.IHelp} message Help message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Help.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.links != null && message.links.length)
                        for (var i = 0; i < message.links.length; ++i)
                            $root.google.rpc.Help.Link.encode(message.links[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Help message, length delimited. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.Help
                 * @static
                 * @param {google.rpc.IHelp} message Help message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Help.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a Help message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.Help
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.Help} Help
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Help.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.links && message.links.length))
                                    message.links = [];
                                message.links.push($root.google.rpc.Help.Link.decode(reader, reader.uint32(), undefined, long + 1));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Help message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.Help
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.Help} Help
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Help.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Help message.
                 * @function verify
                 * @memberof google.rpc.Help
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Help.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.links != null && Object.hasOwnProperty.call(message, "links")) {
                        if (!Array.isArray(message.links))
                            return "links: array expected";
                        for (var i = 0; i < message.links.length; ++i) {
                            var error = $root.google.rpc.Help.Link.verify(message.links[i], long + 1);
                            if (error)
                                return "links." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Help message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.Help
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.Help} Help
                 */
                Help.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.Help)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.Help: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.Help();
                    if (object.links) {
                        if (!Array.isArray(object.links))
                            throw TypeError(".google.rpc.Help.links: array expected");
                        message.links = [];
                        for (var i = 0; i < object.links.length; ++i) {
                            if (!$util.isObject(object.links[i]))
                                throw TypeError(".google.rpc.Help.links: object expected");
                            message.links[i] = $root.google.rpc.Help.Link.fromObject(object.links[i], long + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Help message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.Help
                 * @static
                 * @param {google.rpc.Help} message Help
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Help.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.links = [];
                    if (message.links && message.links.length) {
                        object.links = [];
                        for (var j = 0; j < message.links.length; ++j)
                            object.links[j] = $root.google.rpc.Help.Link.toObject(message.links[j], options, q + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this Help to JSON.
                 * @function toJSON
                 * @memberof google.rpc.Help
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Help.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Help
                 * @function getTypeUrl
                 * @memberof google.rpc.Help
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Help.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.Help";
                };
    
                Help.Link = (function() {
    
                    /**
                     * Properties of a Link.
                     * @memberof google.rpc.Help
                     * @interface ILink
                     * @property {string|null} [description] Link description
                     * @property {string|null} [url] Link url
                     */
    
                    /**
                     * Constructs a new Link.
                     * @memberof google.rpc.Help
                     * @classdesc Represents a Link.
                     * @implements ILink
                     * @constructor
                     * @param {google.rpc.Help.ILink=} [properties] Properties to set
                     */
                    function Link(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Link description.
                     * @member {string} description
                     * @memberof google.rpc.Help.Link
                     * @instance
                     */
                    Link.prototype.description = "";
    
                    /**
                     * Link url.
                     * @member {string} url
                     * @memberof google.rpc.Help.Link
                     * @instance
                     */
                    Link.prototype.url = "";
    
                    /**
                     * Creates a new Link instance using the specified properties.
                     * @function create
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {google.rpc.Help.ILink=} [properties] Properties to set
                     * @returns {google.rpc.Help.Link} Link instance
                     */
                    Link.create = function create(properties) {
                        return new Link(properties);
                    };
    
                    /**
                     * Encodes the specified Link message. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                     * @function encode
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Link.encode = function encode(message, writer, q) {
                        if (!writer)
                            writer = $Writer.create();
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Link message, length delimited. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Link.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };
    
                    /**
                     * Decodes a Link message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.rpc.Help.Link} Link
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Link.decode = function decode(reader, length, error, long) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (long === undefined)
                            long = 0;
                        if (long > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help.Link();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.description = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.url = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7, long);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Link message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.rpc.Help.Link} Link
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Link.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Link message.
                     * @function verify
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Link.verify = function verify(message, long) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            return "maximum nesting depth exceeded";
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            if (!$util.isString(message.url))
                                return "url: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a Link message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.rpc.Help.Link} Link
                     */
                    Link.fromObject = function fromObject(object, long) {
                        if (object instanceof $root.google.rpc.Help.Link)
                            return object;
                        if (!$util.isObject(object))
                            throw TypeError(".google.rpc.Help.Link: object expected");
                        if (long === undefined)
                            long = 0;
                        if (long > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var message = new $root.google.rpc.Help.Link();
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.url != null)
                            message.url = String(object.url);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Link message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {google.rpc.Help.Link} message Link
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Link.toObject = function toObject(message, options, q) {
                        if (!options)
                            options = {};
                        if (q === undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.description = "";
                            object.url = "";
                        }
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            object.description = message.description;
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            object.url = message.url;
                        return object;
                    };
    
                    /**
                     * Converts this Link to JSON.
                     * @function toJSON
                     * @memberof google.rpc.Help.Link
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Link.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Link
                     * @function getTypeUrl
                     * @memberof google.rpc.Help.Link
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.rpc.Help.Link";
                    };
    
                    return Link;
                })();
    
                return Help;
            })();
    
            rpc.LocalizedMessage = (function() {
    
                /**
                 * Properties of a LocalizedMessage.
                 * @memberof google.rpc
                 * @interface ILocalizedMessage
                 * @property {string|null} [locale] LocalizedMessage locale
                 * @property {string|null} [message] LocalizedMessage message
                 */
    
                /**
                 * Constructs a new LocalizedMessage.
                 * @memberof google.rpc
                 * @classdesc Represents a LocalizedMessage.
                 * @implements ILocalizedMessage
                 * @constructor
                 * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
                 */
                function LocalizedMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * LocalizedMessage locale.
                 * @member {string} locale
                 * @memberof google.rpc.LocalizedMessage
                 * @instance
                 */
                LocalizedMessage.prototype.locale = "";
    
                /**
                 * LocalizedMessage message.
                 * @member {string} message
                 * @memberof google.rpc.LocalizedMessage
                 * @instance
                 */
                LocalizedMessage.prototype.message = "";
    
                /**
                 * Creates a new LocalizedMessage instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
                 * @returns {google.rpc.LocalizedMessage} LocalizedMessage instance
                 */
                LocalizedMessage.create = function create(properties) {
                    return new LocalizedMessage(properties);
                };
    
                /**
                 * Encodes the specified LocalizedMessage message. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LocalizedMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    return writer;
                };
    
                /**
                 * Encodes the specified LocalizedMessage message, length delimited. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LocalizedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };
    
                /**
                 * Decodes a LocalizedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.LocalizedMessage} LocalizedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LocalizedMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.LocalizedMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.locale = reader.string();
                                break;
                            }
                        case 2: {
                                message.message = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a LocalizedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.LocalizedMessage} LocalizedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LocalizedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a LocalizedMessage message.
                 * @function verify
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LocalizedMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                        if (!$util.isString(message.locale))
                            return "locale: string expected";
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    return null;
                };
    
                /**
                 * Creates a LocalizedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.LocalizedMessage} LocalizedMessage
                 */
                LocalizedMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.google.rpc.LocalizedMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".google.rpc.LocalizedMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.google.rpc.LocalizedMessage();
                    if (object.locale != null)
                        message.locale = String(object.locale);
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };
    
                /**
                 * Creates a plain object from a LocalizedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {google.rpc.LocalizedMessage} message LocalizedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LocalizedMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.locale = "";
                        object.message = "";
                    }
                    if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                        object.locale = message.locale;
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        object.message = message.message;
                    return object;
                };
    
                /**
                 * Converts this LocalizedMessage to JSON.
                 * @function toJSON
                 * @memberof google.rpc.LocalizedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LocalizedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for LocalizedMessage
                 * @function getTypeUrl
                 * @memberof google.rpc.LocalizedMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LocalizedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.LocalizedMessage";
                };
    
                return LocalizedMessage;
            })();
    
            return rpc;
        })();
    
        return google;
    })();

    return $root;
});
