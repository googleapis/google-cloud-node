// Copyright 2022 Google LLC
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
    var $root = $protobuf.roots._google_cloud_addressvalidation_protos || ($protobuf.roots._google_cloud_addressvalidation_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.geo = (function() {
    
            /**
             * Namespace geo.
             * @memberof google
             * @namespace
             */
            var geo = {};
    
            geo.type = (function() {
    
                /**
                 * Namespace type.
                 * @memberof google.geo
                 * @namespace
                 */
                var type = {};
    
                type.Viewport = (function() {
    
                    /**
                     * Properties of a Viewport.
                     * @memberof google.geo.type
                     * @interface IViewport
                     * @property {google.type.ILatLng|null} [low] Viewport low
                     * @property {google.type.ILatLng|null} [high] Viewport high
                     */
    
                    /**
                     * Constructs a new Viewport.
                     * @memberof google.geo.type
                     * @classdesc Represents a Viewport.
                     * @implements IViewport
                     * @constructor
                     * @param {google.geo.type.IViewport=} [properties] Properties to set
                     */
                    function Viewport(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Viewport low.
                     * @member {google.type.ILatLng|null|undefined} low
                     * @memberof google.geo.type.Viewport
                     * @instance
                     */
                    Viewport.prototype.low = null;
    
                    /**
                     * Viewport high.
                     * @member {google.type.ILatLng|null|undefined} high
                     * @memberof google.geo.type.Viewport
                     * @instance
                     */
                    Viewport.prototype.high = null;
    
                    /**
                     * Creates a new Viewport instance using the specified properties.
                     * @function create
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {google.geo.type.IViewport=} [properties] Properties to set
                     * @returns {google.geo.type.Viewport} Viewport instance
                     */
                    Viewport.create = function create(properties) {
                        return new Viewport(properties);
                    };
    
                    /**
                     * Encodes the specified Viewport message. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                     * @function encode
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {google.geo.type.IViewport} message Viewport message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Viewport.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.low != null && Object.hasOwnProperty.call(message, "low"))
                            $root.google.type.LatLng.encode(message.low, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.high != null && Object.hasOwnProperty.call(message, "high"))
                            $root.google.type.LatLng.encode(message.high, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Viewport message, length delimited. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {google.geo.type.IViewport} message Viewport message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Viewport.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Viewport message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.geo.type.Viewport} Viewport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Viewport.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.geo.type.Viewport();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.low = $root.google.type.LatLng.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.high = $root.google.type.LatLng.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Viewport message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.geo.type.Viewport} Viewport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Viewport.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Viewport message.
                     * @function verify
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Viewport.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.low != null && message.hasOwnProperty("low")) {
                            var error = $root.google.type.LatLng.verify(message.low);
                            if (error)
                                return "low." + error;
                        }
                        if (message.high != null && message.hasOwnProperty("high")) {
                            var error = $root.google.type.LatLng.verify(message.high);
                            if (error)
                                return "high." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Viewport message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.geo.type.Viewport} Viewport
                     */
                    Viewport.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.geo.type.Viewport)
                            return object;
                        var message = new $root.google.geo.type.Viewport();
                        if (object.low != null) {
                            if (typeof object.low !== "object")
                                throw TypeError(".google.geo.type.Viewport.low: object expected");
                            message.low = $root.google.type.LatLng.fromObject(object.low);
                        }
                        if (object.high != null) {
                            if (typeof object.high !== "object")
                                throw TypeError(".google.geo.type.Viewport.high: object expected");
                            message.high = $root.google.type.LatLng.fromObject(object.high);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Viewport message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {google.geo.type.Viewport} message Viewport
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Viewport.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.low = null;
                            object.high = null;
                        }
                        if (message.low != null && message.hasOwnProperty("low"))
                            object.low = $root.google.type.LatLng.toObject(message.low, options);
                        if (message.high != null && message.hasOwnProperty("high"))
                            object.high = $root.google.type.LatLng.toObject(message.high, options);
                        return object;
                    };
    
                    /**
                     * Converts this Viewport to JSON.
                     * @function toJSON
                     * @memberof google.geo.type.Viewport
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Viewport.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Viewport
                     * @function getTypeUrl
                     * @memberof google.geo.type.Viewport
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Viewport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.geo.type.Viewport";
                    };
    
                    return Viewport;
                })();
    
                return type;
            })();
    
            return geo;
        })();
    
        google.type = (function() {
    
            /**
             * Namespace type.
             * @memberof google
             * @namespace
             */
            var type = {};
    
            type.LatLng = (function() {
    
                /**
                 * Properties of a LatLng.
                 * @memberof google.type
                 * @interface ILatLng
                 * @property {number|null} [latitude] LatLng latitude
                 * @property {number|null} [longitude] LatLng longitude
                 */
    
                /**
                 * Constructs a new LatLng.
                 * @memberof google.type
                 * @classdesc Represents a LatLng.
                 * @implements ILatLng
                 * @constructor
                 * @param {google.type.ILatLng=} [properties] Properties to set
                 */
                function LatLng(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * LatLng latitude.
                 * @member {number} latitude
                 * @memberof google.type.LatLng
                 * @instance
                 */
                LatLng.prototype.latitude = 0;
    
                /**
                 * LatLng longitude.
                 * @member {number} longitude
                 * @memberof google.type.LatLng
                 * @instance
                 */
                LatLng.prototype.longitude = 0;
    
                /**
                 * Creates a new LatLng instance using the specified properties.
                 * @function create
                 * @memberof google.type.LatLng
                 * @static
                 * @param {google.type.ILatLng=} [properties] Properties to set
                 * @returns {google.type.LatLng} LatLng instance
                 */
                LatLng.create = function create(properties) {
                    return new LatLng(properties);
                };
    
                /**
                 * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
                 * @function encode
                 * @memberof google.type.LatLng
                 * @static
                 * @param {google.type.ILatLng} message LatLng message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LatLng.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                    if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
                    return writer;
                };
    
                /**
                 * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.type.LatLng
                 * @static
                 * @param {google.type.ILatLng} message LatLng message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LatLng.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a LatLng message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.type.LatLng
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.type.LatLng} LatLng
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LatLng.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.type.LatLng();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.latitude = reader.double();
                                break;
                            }
                        case 2: {
                                message.longitude = reader.double();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a LatLng message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.type.LatLng
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.type.LatLng} LatLng
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LatLng.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a LatLng message.
                 * @function verify
                 * @memberof google.type.LatLng
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LatLng.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        if (typeof message.latitude !== "number")
                            return "latitude: number expected";
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        if (typeof message.longitude !== "number")
                            return "longitude: number expected";
                    return null;
                };
    
                /**
                 * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.type.LatLng
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.type.LatLng} LatLng
                 */
                LatLng.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.type.LatLng)
                        return object;
                    var message = new $root.google.type.LatLng();
                    if (object.latitude != null)
                        message.latitude = Number(object.latitude);
                    if (object.longitude != null)
                        message.longitude = Number(object.longitude);
                    return message;
                };
    
                /**
                 * Creates a plain object from a LatLng message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.type.LatLng
                 * @static
                 * @param {google.type.LatLng} message LatLng
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LatLng.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.latitude = 0;
                        object.longitude = 0;
                    }
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                    return object;
                };
    
                /**
                 * Converts this LatLng to JSON.
                 * @function toJSON
                 * @memberof google.type.LatLng
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LatLng.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for LatLng
                 * @function getTypeUrl
                 * @memberof google.type.LatLng
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LatLng.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.type.LatLng";
                };
    
                return LatLng;
            })();
    
            type.PostalAddress = (function() {
    
                /**
                 * Properties of a PostalAddress.
                 * @memberof google.type
                 * @interface IPostalAddress
                 * @property {number|null} [revision] PostalAddress revision
                 * @property {string|null} [regionCode] PostalAddress regionCode
                 * @property {string|null} [languageCode] PostalAddress languageCode
                 * @property {string|null} [postalCode] PostalAddress postalCode
                 * @property {string|null} [sortingCode] PostalAddress sortingCode
                 * @property {string|null} [administrativeArea] PostalAddress administrativeArea
                 * @property {string|null} [locality] PostalAddress locality
                 * @property {string|null} [sublocality] PostalAddress sublocality
                 * @property {Array.<string>|null} [addressLines] PostalAddress addressLines
                 * @property {Array.<string>|null} [recipients] PostalAddress recipients
                 * @property {string|null} [organization] PostalAddress organization
                 */
    
                /**
                 * Constructs a new PostalAddress.
                 * @memberof google.type
                 * @classdesc Represents a PostalAddress.
                 * @implements IPostalAddress
                 * @constructor
                 * @param {google.type.IPostalAddress=} [properties] Properties to set
                 */
                function PostalAddress(properties) {
                    this.addressLines = [];
                    this.recipients = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PostalAddress revision.
                 * @member {number} revision
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.revision = 0;
    
                /**
                 * PostalAddress regionCode.
                 * @member {string} regionCode
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.regionCode = "";
    
                /**
                 * PostalAddress languageCode.
                 * @member {string} languageCode
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.languageCode = "";
    
                /**
                 * PostalAddress postalCode.
                 * @member {string} postalCode
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.postalCode = "";
    
                /**
                 * PostalAddress sortingCode.
                 * @member {string} sortingCode
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.sortingCode = "";
    
                /**
                 * PostalAddress administrativeArea.
                 * @member {string} administrativeArea
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.administrativeArea = "";
    
                /**
                 * PostalAddress locality.
                 * @member {string} locality
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.locality = "";
    
                /**
                 * PostalAddress sublocality.
                 * @member {string} sublocality
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.sublocality = "";
    
                /**
                 * PostalAddress addressLines.
                 * @member {Array.<string>} addressLines
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.addressLines = $util.emptyArray;
    
                /**
                 * PostalAddress recipients.
                 * @member {Array.<string>} recipients
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.recipients = $util.emptyArray;
    
                /**
                 * PostalAddress organization.
                 * @member {string} organization
                 * @memberof google.type.PostalAddress
                 * @instance
                 */
                PostalAddress.prototype.organization = "";
    
                /**
                 * Creates a new PostalAddress instance using the specified properties.
                 * @function create
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {google.type.IPostalAddress=} [properties] Properties to set
                 * @returns {google.type.PostalAddress} PostalAddress instance
                 */
                PostalAddress.create = function create(properties) {
                    return new PostalAddress(properties);
                };
    
                /**
                 * Encodes the specified PostalAddress message. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
                 * @function encode
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {google.type.IPostalAddress} message PostalAddress message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PostalAddress.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.revision != null && Object.hasOwnProperty.call(message, "revision"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.revision);
                    if (message.regionCode != null && Object.hasOwnProperty.call(message, "regionCode"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.regionCode);
                    if (message.languageCode != null && Object.hasOwnProperty.call(message, "languageCode"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.languageCode);
                    if (message.postalCode != null && Object.hasOwnProperty.call(message, "postalCode"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.postalCode);
                    if (message.sortingCode != null && Object.hasOwnProperty.call(message, "sortingCode"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.sortingCode);
                    if (message.administrativeArea != null && Object.hasOwnProperty.call(message, "administrativeArea"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.administrativeArea);
                    if (message.locality != null && Object.hasOwnProperty.call(message, "locality"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.locality);
                    if (message.sublocality != null && Object.hasOwnProperty.call(message, "sublocality"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.sublocality);
                    if (message.addressLines != null && message.addressLines.length)
                        for (var i = 0; i < message.addressLines.length; ++i)
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.addressLines[i]);
                    if (message.recipients != null && message.recipients.length)
                        for (var i = 0; i < message.recipients.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.recipients[i]);
                    if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.organization);
                    return writer;
                };
    
                /**
                 * Encodes the specified PostalAddress message, length delimited. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {google.type.IPostalAddress} message PostalAddress message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PostalAddress.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PostalAddress message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.type.PostalAddress} PostalAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PostalAddress.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.type.PostalAddress();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.revision = reader.int32();
                                break;
                            }
                        case 2: {
                                message.regionCode = reader.string();
                                break;
                            }
                        case 3: {
                                message.languageCode = reader.string();
                                break;
                            }
                        case 4: {
                                message.postalCode = reader.string();
                                break;
                            }
                        case 5: {
                                message.sortingCode = reader.string();
                                break;
                            }
                        case 6: {
                                message.administrativeArea = reader.string();
                                break;
                            }
                        case 7: {
                                message.locality = reader.string();
                                break;
                            }
                        case 8: {
                                message.sublocality = reader.string();
                                break;
                            }
                        case 9: {
                                if (!(message.addressLines && message.addressLines.length))
                                    message.addressLines = [];
                                message.addressLines.push(reader.string());
                                break;
                            }
                        case 10: {
                                if (!(message.recipients && message.recipients.length))
                                    message.recipients = [];
                                message.recipients.push(reader.string());
                                break;
                            }
                        case 11: {
                                message.organization = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PostalAddress message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.type.PostalAddress} PostalAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PostalAddress.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PostalAddress message.
                 * @function verify
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PostalAddress.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.revision != null && message.hasOwnProperty("revision"))
                        if (!$util.isInteger(message.revision))
                            return "revision: integer expected";
                    if (message.regionCode != null && message.hasOwnProperty("regionCode"))
                        if (!$util.isString(message.regionCode))
                            return "regionCode: string expected";
                    if (message.languageCode != null && message.hasOwnProperty("languageCode"))
                        if (!$util.isString(message.languageCode))
                            return "languageCode: string expected";
                    if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                        if (!$util.isString(message.postalCode))
                            return "postalCode: string expected";
                    if (message.sortingCode != null && message.hasOwnProperty("sortingCode"))
                        if (!$util.isString(message.sortingCode))
                            return "sortingCode: string expected";
                    if (message.administrativeArea != null && message.hasOwnProperty("administrativeArea"))
                        if (!$util.isString(message.administrativeArea))
                            return "administrativeArea: string expected";
                    if (message.locality != null && message.hasOwnProperty("locality"))
                        if (!$util.isString(message.locality))
                            return "locality: string expected";
                    if (message.sublocality != null && message.hasOwnProperty("sublocality"))
                        if (!$util.isString(message.sublocality))
                            return "sublocality: string expected";
                    if (message.addressLines != null && message.hasOwnProperty("addressLines")) {
                        if (!Array.isArray(message.addressLines))
                            return "addressLines: array expected";
                        for (var i = 0; i < message.addressLines.length; ++i)
                            if (!$util.isString(message.addressLines[i]))
                                return "addressLines: string[] expected";
                    }
                    if (message.recipients != null && message.hasOwnProperty("recipients")) {
                        if (!Array.isArray(message.recipients))
                            return "recipients: array expected";
                        for (var i = 0; i < message.recipients.length; ++i)
                            if (!$util.isString(message.recipients[i]))
                                return "recipients: string[] expected";
                    }
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        if (!$util.isString(message.organization))
                            return "organization: string expected";
                    return null;
                };
    
                /**
                 * Creates a PostalAddress message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.type.PostalAddress} PostalAddress
                 */
                PostalAddress.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.type.PostalAddress)
                        return object;
                    var message = new $root.google.type.PostalAddress();
                    if (object.revision != null)
                        message.revision = object.revision | 0;
                    if (object.regionCode != null)
                        message.regionCode = String(object.regionCode);
                    if (object.languageCode != null)
                        message.languageCode = String(object.languageCode);
                    if (object.postalCode != null)
                        message.postalCode = String(object.postalCode);
                    if (object.sortingCode != null)
                        message.sortingCode = String(object.sortingCode);
                    if (object.administrativeArea != null)
                        message.administrativeArea = String(object.administrativeArea);
                    if (object.locality != null)
                        message.locality = String(object.locality);
                    if (object.sublocality != null)
                        message.sublocality = String(object.sublocality);
                    if (object.addressLines) {
                        if (!Array.isArray(object.addressLines))
                            throw TypeError(".google.type.PostalAddress.addressLines: array expected");
                        message.addressLines = [];
                        for (var i = 0; i < object.addressLines.length; ++i)
                            message.addressLines[i] = String(object.addressLines[i]);
                    }
                    if (object.recipients) {
                        if (!Array.isArray(object.recipients))
                            throw TypeError(".google.type.PostalAddress.recipients: array expected");
                        message.recipients = [];
                        for (var i = 0; i < object.recipients.length; ++i)
                            message.recipients[i] = String(object.recipients[i]);
                    }
                    if (object.organization != null)
                        message.organization = String(object.organization);
                    return message;
                };
    
                /**
                 * Creates a plain object from a PostalAddress message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {google.type.PostalAddress} message PostalAddress
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PostalAddress.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.addressLines = [];
                        object.recipients = [];
                    }
                    if (options.defaults) {
                        object.revision = 0;
                        object.regionCode = "";
                        object.languageCode = "";
                        object.postalCode = "";
                        object.sortingCode = "";
                        object.administrativeArea = "";
                        object.locality = "";
                        object.sublocality = "";
                        object.organization = "";
                    }
                    if (message.revision != null && message.hasOwnProperty("revision"))
                        object.revision = message.revision;
                    if (message.regionCode != null && message.hasOwnProperty("regionCode"))
                        object.regionCode = message.regionCode;
                    if (message.languageCode != null && message.hasOwnProperty("languageCode"))
                        object.languageCode = message.languageCode;
                    if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                        object.postalCode = message.postalCode;
                    if (message.sortingCode != null && message.hasOwnProperty("sortingCode"))
                        object.sortingCode = message.sortingCode;
                    if (message.administrativeArea != null && message.hasOwnProperty("administrativeArea"))
                        object.administrativeArea = message.administrativeArea;
                    if (message.locality != null && message.hasOwnProperty("locality"))
                        object.locality = message.locality;
                    if (message.sublocality != null && message.hasOwnProperty("sublocality"))
                        object.sublocality = message.sublocality;
                    if (message.addressLines && message.addressLines.length) {
                        object.addressLines = [];
                        for (var j = 0; j < message.addressLines.length; ++j)
                            object.addressLines[j] = message.addressLines[j];
                    }
                    if (message.recipients && message.recipients.length) {
                        object.recipients = [];
                        for (var j = 0; j < message.recipients.length; ++j)
                            object.recipients[j] = message.recipients[j];
                    }
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        object.organization = message.organization;
                    return object;
                };
    
                /**
                 * Converts this PostalAddress to JSON.
                 * @function toJSON
                 * @memberof google.type.PostalAddress
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PostalAddress.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PostalAddress
                 * @function getTypeUrl
                 * @memberof google.type.PostalAddress
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PostalAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.type.PostalAddress";
                };
    
                return PostalAddress;
            })();
    
            return type;
        })();
    
        google.maps = (function() {
    
            /**
             * Namespace maps.
             * @memberof google
             * @namespace
             */
            var maps = {};
    
            maps.addressvalidation = (function() {
    
                /**
                 * Namespace addressvalidation.
                 * @memberof google.maps
                 * @namespace
                 */
                var addressvalidation = {};
    
                addressvalidation.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.maps.addressvalidation
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.Address = (function() {
    
                        /**
                         * Properties of an Address.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IAddress
                         * @property {string|null} [formattedAddress] Address formattedAddress
                         * @property {google.type.IPostalAddress|null} [postalAddress] Address postalAddress
                         * @property {Array.<google.maps.addressvalidation.v1.IAddressComponent>|null} [addressComponents] Address addressComponents
                         * @property {Array.<string>|null} [missingComponentTypes] Address missingComponentTypes
                         * @property {Array.<string>|null} [unconfirmedComponentTypes] Address unconfirmedComponentTypes
                         * @property {Array.<string>|null} [unresolvedTokens] Address unresolvedTokens
                         */
    
                        /**
                         * Constructs a new Address.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents an Address.
                         * @implements IAddress
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IAddress=} [properties] Properties to set
                         */
                        function Address(properties) {
                            this.addressComponents = [];
                            this.missingComponentTypes = [];
                            this.unconfirmedComponentTypes = [];
                            this.unresolvedTokens = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Address formattedAddress.
                         * @member {string} formattedAddress
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.formattedAddress = "";
    
                        /**
                         * Address postalAddress.
                         * @member {google.type.IPostalAddress|null|undefined} postalAddress
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.postalAddress = null;
    
                        /**
                         * Address addressComponents.
                         * @member {Array.<google.maps.addressvalidation.v1.IAddressComponent>} addressComponents
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.addressComponents = $util.emptyArray;
    
                        /**
                         * Address missingComponentTypes.
                         * @member {Array.<string>} missingComponentTypes
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.missingComponentTypes = $util.emptyArray;
    
                        /**
                         * Address unconfirmedComponentTypes.
                         * @member {Array.<string>} unconfirmedComponentTypes
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.unconfirmedComponentTypes = $util.emptyArray;
    
                        /**
                         * Address unresolvedTokens.
                         * @member {Array.<string>} unresolvedTokens
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         */
                        Address.prototype.unresolvedTokens = $util.emptyArray;
    
                        /**
                         * Creates a new Address instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddress=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.Address} Address instance
                         */
                        Address.create = function create(properties) {
                            return new Address(properties);
                        };
    
                        /**
                         * Encodes the specified Address message. Does not implicitly {@link google.maps.addressvalidation.v1.Address.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddress} message Address message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Address.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.formattedAddress != null && Object.hasOwnProperty.call(message, "formattedAddress"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.formattedAddress);
                            if (message.postalAddress != null && Object.hasOwnProperty.call(message, "postalAddress"))
                                $root.google.type.PostalAddress.encode(message.postalAddress, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.addressComponents != null && message.addressComponents.length)
                                for (var i = 0; i < message.addressComponents.length; ++i)
                                    $root.google.maps.addressvalidation.v1.AddressComponent.encode(message.addressComponents[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.missingComponentTypes != null && message.missingComponentTypes.length)
                                for (var i = 0; i < message.missingComponentTypes.length; ++i)
                                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.missingComponentTypes[i]);
                            if (message.unconfirmedComponentTypes != null && message.unconfirmedComponentTypes.length)
                                for (var i = 0; i < message.unconfirmedComponentTypes.length; ++i)
                                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.unconfirmedComponentTypes[i]);
                            if (message.unresolvedTokens != null && message.unresolvedTokens.length)
                                for (var i = 0; i < message.unresolvedTokens.length; ++i)
                                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.unresolvedTokens[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Address message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.Address.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddress} message Address message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Address.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an Address message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.Address} Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Address.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.Address();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 2: {
                                        message.formattedAddress = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.postalAddress = $root.google.type.PostalAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        if (!(message.addressComponents && message.addressComponents.length))
                                            message.addressComponents = [];
                                        message.addressComponents.push($root.google.maps.addressvalidation.v1.AddressComponent.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 5: {
                                        if (!(message.missingComponentTypes && message.missingComponentTypes.length))
                                            message.missingComponentTypes = [];
                                        message.missingComponentTypes.push(reader.string());
                                        break;
                                    }
                                case 6: {
                                        if (!(message.unconfirmedComponentTypes && message.unconfirmedComponentTypes.length))
                                            message.unconfirmedComponentTypes = [];
                                        message.unconfirmedComponentTypes.push(reader.string());
                                        break;
                                    }
                                case 7: {
                                        if (!(message.unresolvedTokens && message.unresolvedTokens.length))
                                            message.unresolvedTokens = [];
                                        message.unresolvedTokens.push(reader.string());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an Address message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.Address} Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Address.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an Address message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Address.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.formattedAddress != null && message.hasOwnProperty("formattedAddress"))
                                if (!$util.isString(message.formattedAddress))
                                    return "formattedAddress: string expected";
                            if (message.postalAddress != null && message.hasOwnProperty("postalAddress")) {
                                var error = $root.google.type.PostalAddress.verify(message.postalAddress);
                                if (error)
                                    return "postalAddress." + error;
                            }
                            if (message.addressComponents != null && message.hasOwnProperty("addressComponents")) {
                                if (!Array.isArray(message.addressComponents))
                                    return "addressComponents: array expected";
                                for (var i = 0; i < message.addressComponents.length; ++i) {
                                    var error = $root.google.maps.addressvalidation.v1.AddressComponent.verify(message.addressComponents[i]);
                                    if (error)
                                        return "addressComponents." + error;
                                }
                            }
                            if (message.missingComponentTypes != null && message.hasOwnProperty("missingComponentTypes")) {
                                if (!Array.isArray(message.missingComponentTypes))
                                    return "missingComponentTypes: array expected";
                                for (var i = 0; i < message.missingComponentTypes.length; ++i)
                                    if (!$util.isString(message.missingComponentTypes[i]))
                                        return "missingComponentTypes: string[] expected";
                            }
                            if (message.unconfirmedComponentTypes != null && message.hasOwnProperty("unconfirmedComponentTypes")) {
                                if (!Array.isArray(message.unconfirmedComponentTypes))
                                    return "unconfirmedComponentTypes: array expected";
                                for (var i = 0; i < message.unconfirmedComponentTypes.length; ++i)
                                    if (!$util.isString(message.unconfirmedComponentTypes[i]))
                                        return "unconfirmedComponentTypes: string[] expected";
                            }
                            if (message.unresolvedTokens != null && message.hasOwnProperty("unresolvedTokens")) {
                                if (!Array.isArray(message.unresolvedTokens))
                                    return "unresolvedTokens: array expected";
                                for (var i = 0; i < message.unresolvedTokens.length; ++i)
                                    if (!$util.isString(message.unresolvedTokens[i]))
                                        return "unresolvedTokens: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an Address message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.Address} Address
                         */
                        Address.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.Address)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.Address();
                            if (object.formattedAddress != null)
                                message.formattedAddress = String(object.formattedAddress);
                            if (object.postalAddress != null) {
                                if (typeof object.postalAddress !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.Address.postalAddress: object expected");
                                message.postalAddress = $root.google.type.PostalAddress.fromObject(object.postalAddress);
                            }
                            if (object.addressComponents) {
                                if (!Array.isArray(object.addressComponents))
                                    throw TypeError(".google.maps.addressvalidation.v1.Address.addressComponents: array expected");
                                message.addressComponents = [];
                                for (var i = 0; i < object.addressComponents.length; ++i) {
                                    if (typeof object.addressComponents[i] !== "object")
                                        throw TypeError(".google.maps.addressvalidation.v1.Address.addressComponents: object expected");
                                    message.addressComponents[i] = $root.google.maps.addressvalidation.v1.AddressComponent.fromObject(object.addressComponents[i]);
                                }
                            }
                            if (object.missingComponentTypes) {
                                if (!Array.isArray(object.missingComponentTypes))
                                    throw TypeError(".google.maps.addressvalidation.v1.Address.missingComponentTypes: array expected");
                                message.missingComponentTypes = [];
                                for (var i = 0; i < object.missingComponentTypes.length; ++i)
                                    message.missingComponentTypes[i] = String(object.missingComponentTypes[i]);
                            }
                            if (object.unconfirmedComponentTypes) {
                                if (!Array.isArray(object.unconfirmedComponentTypes))
                                    throw TypeError(".google.maps.addressvalidation.v1.Address.unconfirmedComponentTypes: array expected");
                                message.unconfirmedComponentTypes = [];
                                for (var i = 0; i < object.unconfirmedComponentTypes.length; ++i)
                                    message.unconfirmedComponentTypes[i] = String(object.unconfirmedComponentTypes[i]);
                            }
                            if (object.unresolvedTokens) {
                                if (!Array.isArray(object.unresolvedTokens))
                                    throw TypeError(".google.maps.addressvalidation.v1.Address.unresolvedTokens: array expected");
                                message.unresolvedTokens = [];
                                for (var i = 0; i < object.unresolvedTokens.length; ++i)
                                    message.unresolvedTokens[i] = String(object.unresolvedTokens[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an Address message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {google.maps.addressvalidation.v1.Address} message Address
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Address.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.addressComponents = [];
                                object.missingComponentTypes = [];
                                object.unconfirmedComponentTypes = [];
                                object.unresolvedTokens = [];
                            }
                            if (options.defaults) {
                                object.formattedAddress = "";
                                object.postalAddress = null;
                            }
                            if (message.formattedAddress != null && message.hasOwnProperty("formattedAddress"))
                                object.formattedAddress = message.formattedAddress;
                            if (message.postalAddress != null && message.hasOwnProperty("postalAddress"))
                                object.postalAddress = $root.google.type.PostalAddress.toObject(message.postalAddress, options);
                            if (message.addressComponents && message.addressComponents.length) {
                                object.addressComponents = [];
                                for (var j = 0; j < message.addressComponents.length; ++j)
                                    object.addressComponents[j] = $root.google.maps.addressvalidation.v1.AddressComponent.toObject(message.addressComponents[j], options);
                            }
                            if (message.missingComponentTypes && message.missingComponentTypes.length) {
                                object.missingComponentTypes = [];
                                for (var j = 0; j < message.missingComponentTypes.length; ++j)
                                    object.missingComponentTypes[j] = message.missingComponentTypes[j];
                            }
                            if (message.unconfirmedComponentTypes && message.unconfirmedComponentTypes.length) {
                                object.unconfirmedComponentTypes = [];
                                for (var j = 0; j < message.unconfirmedComponentTypes.length; ++j)
                                    object.unconfirmedComponentTypes[j] = message.unconfirmedComponentTypes[j];
                            }
                            if (message.unresolvedTokens && message.unresolvedTokens.length) {
                                object.unresolvedTokens = [];
                                for (var j = 0; j < message.unresolvedTokens.length; ++j)
                                    object.unresolvedTokens[j] = message.unresolvedTokens[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Address to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Address.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Address
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.Address
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Address.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.Address";
                        };
    
                        return Address;
                    })();
    
                    v1.AddressComponent = (function() {
    
                        /**
                         * Properties of an AddressComponent.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IAddressComponent
                         * @property {google.maps.addressvalidation.v1.IComponentName|null} [componentName] AddressComponent componentName
                         * @property {string|null} [componentType] AddressComponent componentType
                         * @property {google.maps.addressvalidation.v1.AddressComponent.ConfirmationLevel|null} [confirmationLevel] AddressComponent confirmationLevel
                         * @property {boolean|null} [inferred] AddressComponent inferred
                         * @property {boolean|null} [spellCorrected] AddressComponent spellCorrected
                         * @property {boolean|null} [replaced] AddressComponent replaced
                         * @property {boolean|null} [unexpected] AddressComponent unexpected
                         */
    
                        /**
                         * Constructs a new AddressComponent.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents an AddressComponent.
                         * @implements IAddressComponent
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IAddressComponent=} [properties] Properties to set
                         */
                        function AddressComponent(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AddressComponent componentName.
                         * @member {google.maps.addressvalidation.v1.IComponentName|null|undefined} componentName
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.componentName = null;
    
                        /**
                         * AddressComponent componentType.
                         * @member {string} componentType
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.componentType = "";
    
                        /**
                         * AddressComponent confirmationLevel.
                         * @member {google.maps.addressvalidation.v1.AddressComponent.ConfirmationLevel} confirmationLevel
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.confirmationLevel = 0;
    
                        /**
                         * AddressComponent inferred.
                         * @member {boolean} inferred
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.inferred = false;
    
                        /**
                         * AddressComponent spellCorrected.
                         * @member {boolean} spellCorrected
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.spellCorrected = false;
    
                        /**
                         * AddressComponent replaced.
                         * @member {boolean} replaced
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.replaced = false;
    
                        /**
                         * AddressComponent unexpected.
                         * @member {boolean} unexpected
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         */
                        AddressComponent.prototype.unexpected = false;
    
                        /**
                         * Creates a new AddressComponent instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressComponent=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.AddressComponent} AddressComponent instance
                         */
                        AddressComponent.create = function create(properties) {
                            return new AddressComponent(properties);
                        };
    
                        /**
                         * Encodes the specified AddressComponent message. Does not implicitly {@link google.maps.addressvalidation.v1.AddressComponent.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressComponent} message AddressComponent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddressComponent.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.componentName != null && Object.hasOwnProperty.call(message, "componentName"))
                                $root.google.maps.addressvalidation.v1.ComponentName.encode(message.componentName, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.componentType != null && Object.hasOwnProperty.call(message, "componentType"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.componentType);
                            if (message.confirmationLevel != null && Object.hasOwnProperty.call(message, "confirmationLevel"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.confirmationLevel);
                            if (message.inferred != null && Object.hasOwnProperty.call(message, "inferred"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.inferred);
                            if (message.spellCorrected != null && Object.hasOwnProperty.call(message, "spellCorrected"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.spellCorrected);
                            if (message.replaced != null && Object.hasOwnProperty.call(message, "replaced"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.replaced);
                            if (message.unexpected != null && Object.hasOwnProperty.call(message, "unexpected"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.unexpected);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AddressComponent message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.AddressComponent.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressComponent} message AddressComponent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddressComponent.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AddressComponent message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.AddressComponent} AddressComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddressComponent.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.AddressComponent();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.componentName = $root.google.maps.addressvalidation.v1.ComponentName.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.componentType = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.confirmationLevel = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.inferred = reader.bool();
                                        break;
                                    }
                                case 5: {
                                        message.spellCorrected = reader.bool();
                                        break;
                                    }
                                case 6: {
                                        message.replaced = reader.bool();
                                        break;
                                    }
                                case 7: {
                                        message.unexpected = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AddressComponent message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.AddressComponent} AddressComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddressComponent.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AddressComponent message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AddressComponent.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.componentName != null && message.hasOwnProperty("componentName")) {
                                var error = $root.google.maps.addressvalidation.v1.ComponentName.verify(message.componentName);
                                if (error)
                                    return "componentName." + error;
                            }
                            if (message.componentType != null && message.hasOwnProperty("componentType"))
                                if (!$util.isString(message.componentType))
                                    return "componentType: string expected";
                            if (message.confirmationLevel != null && message.hasOwnProperty("confirmationLevel"))
                                switch (message.confirmationLevel) {
                                default:
                                    return "confirmationLevel: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                                }
                            if (message.inferred != null && message.hasOwnProperty("inferred"))
                                if (typeof message.inferred !== "boolean")
                                    return "inferred: boolean expected";
                            if (message.spellCorrected != null && message.hasOwnProperty("spellCorrected"))
                                if (typeof message.spellCorrected !== "boolean")
                                    return "spellCorrected: boolean expected";
                            if (message.replaced != null && message.hasOwnProperty("replaced"))
                                if (typeof message.replaced !== "boolean")
                                    return "replaced: boolean expected";
                            if (message.unexpected != null && message.hasOwnProperty("unexpected"))
                                if (typeof message.unexpected !== "boolean")
                                    return "unexpected: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates an AddressComponent message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.AddressComponent} AddressComponent
                         */
                        AddressComponent.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.AddressComponent)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.AddressComponent();
                            if (object.componentName != null) {
                                if (typeof object.componentName !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.AddressComponent.componentName: object expected");
                                message.componentName = $root.google.maps.addressvalidation.v1.ComponentName.fromObject(object.componentName);
                            }
                            if (object.componentType != null)
                                message.componentType = String(object.componentType);
                            switch (object.confirmationLevel) {
                            case "CONFIRMATION_LEVEL_UNSPECIFIED":
                            case 0:
                                message.confirmationLevel = 0;
                                break;
                            case "CONFIRMED":
                            case 1:
                                message.confirmationLevel = 1;
                                break;
                            case "UNCONFIRMED_BUT_PLAUSIBLE":
                            case 2:
                                message.confirmationLevel = 2;
                                break;
                            case "UNCONFIRMED_AND_SUSPICIOUS":
                            case 3:
                                message.confirmationLevel = 3;
                                break;
                            }
                            if (object.inferred != null)
                                message.inferred = Boolean(object.inferred);
                            if (object.spellCorrected != null)
                                message.spellCorrected = Boolean(object.spellCorrected);
                            if (object.replaced != null)
                                message.replaced = Boolean(object.replaced);
                            if (object.unexpected != null)
                                message.unexpected = Boolean(object.unexpected);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AddressComponent message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {google.maps.addressvalidation.v1.AddressComponent} message AddressComponent
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AddressComponent.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.componentName = null;
                                object.componentType = "";
                                object.confirmationLevel = options.enums === String ? "CONFIRMATION_LEVEL_UNSPECIFIED" : 0;
                                object.inferred = false;
                                object.spellCorrected = false;
                                object.replaced = false;
                                object.unexpected = false;
                            }
                            if (message.componentName != null && message.hasOwnProperty("componentName"))
                                object.componentName = $root.google.maps.addressvalidation.v1.ComponentName.toObject(message.componentName, options);
                            if (message.componentType != null && message.hasOwnProperty("componentType"))
                                object.componentType = message.componentType;
                            if (message.confirmationLevel != null && message.hasOwnProperty("confirmationLevel"))
                                object.confirmationLevel = options.enums === String ? $root.google.maps.addressvalidation.v1.AddressComponent.ConfirmationLevel[message.confirmationLevel] : message.confirmationLevel;
                            if (message.inferred != null && message.hasOwnProperty("inferred"))
                                object.inferred = message.inferred;
                            if (message.spellCorrected != null && message.hasOwnProperty("spellCorrected"))
                                object.spellCorrected = message.spellCorrected;
                            if (message.replaced != null && message.hasOwnProperty("replaced"))
                                object.replaced = message.replaced;
                            if (message.unexpected != null && message.hasOwnProperty("unexpected"))
                                object.unexpected = message.unexpected;
                            return object;
                        };
    
                        /**
                         * Converts this AddressComponent to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AddressComponent.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AddressComponent
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.AddressComponent
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AddressComponent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.AddressComponent";
                        };
    
                        /**
                         * ConfirmationLevel enum.
                         * @name google.maps.addressvalidation.v1.AddressComponent.ConfirmationLevel
                         * @enum {number}
                         * @property {number} CONFIRMATION_LEVEL_UNSPECIFIED=0 CONFIRMATION_LEVEL_UNSPECIFIED value
                         * @property {number} CONFIRMED=1 CONFIRMED value
                         * @property {number} UNCONFIRMED_BUT_PLAUSIBLE=2 UNCONFIRMED_BUT_PLAUSIBLE value
                         * @property {number} UNCONFIRMED_AND_SUSPICIOUS=3 UNCONFIRMED_AND_SUSPICIOUS value
                         */
                        AddressComponent.ConfirmationLevel = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "CONFIRMATION_LEVEL_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "CONFIRMED"] = 1;
                            values[valuesById[2] = "UNCONFIRMED_BUT_PLAUSIBLE"] = 2;
                            values[valuesById[3] = "UNCONFIRMED_AND_SUSPICIOUS"] = 3;
                            return values;
                        })();
    
                        return AddressComponent;
                    })();
    
                    v1.ComponentName = (function() {
    
                        /**
                         * Properties of a ComponentName.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IComponentName
                         * @property {string|null} [text] ComponentName text
                         * @property {string|null} [languageCode] ComponentName languageCode
                         */
    
                        /**
                         * Constructs a new ComponentName.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ComponentName.
                         * @implements IComponentName
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IComponentName=} [properties] Properties to set
                         */
                        function ComponentName(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ComponentName text.
                         * @member {string} text
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @instance
                         */
                        ComponentName.prototype.text = "";
    
                        /**
                         * ComponentName languageCode.
                         * @member {string} languageCode
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @instance
                         */
                        ComponentName.prototype.languageCode = "";
    
                        /**
                         * Creates a new ComponentName instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {google.maps.addressvalidation.v1.IComponentName=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ComponentName} ComponentName instance
                         */
                        ComponentName.create = function create(properties) {
                            return new ComponentName(properties);
                        };
    
                        /**
                         * Encodes the specified ComponentName message. Does not implicitly {@link google.maps.addressvalidation.v1.ComponentName.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {google.maps.addressvalidation.v1.IComponentName} message ComponentName message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ComponentName.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                            if (message.languageCode != null && Object.hasOwnProperty.call(message, "languageCode"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.languageCode);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ComponentName message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ComponentName.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {google.maps.addressvalidation.v1.IComponentName} message ComponentName message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ComponentName.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ComponentName message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ComponentName} ComponentName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ComponentName.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ComponentName();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.text = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.languageCode = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ComponentName message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ComponentName} ComponentName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ComponentName.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ComponentName message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ComponentName.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.text != null && message.hasOwnProperty("text"))
                                if (!$util.isString(message.text))
                                    return "text: string expected";
                            if (message.languageCode != null && message.hasOwnProperty("languageCode"))
                                if (!$util.isString(message.languageCode))
                                    return "languageCode: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ComponentName message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ComponentName} ComponentName
                         */
                        ComponentName.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ComponentName)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.ComponentName();
                            if (object.text != null)
                                message.text = String(object.text);
                            if (object.languageCode != null)
                                message.languageCode = String(object.languageCode);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ComponentName message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {google.maps.addressvalidation.v1.ComponentName} message ComponentName
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ComponentName.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.text = "";
                                object.languageCode = "";
                            }
                            if (message.text != null && message.hasOwnProperty("text"))
                                object.text = message.text;
                            if (message.languageCode != null && message.hasOwnProperty("languageCode"))
                                object.languageCode = message.languageCode;
                            return object;
                        };
    
                        /**
                         * Converts this ComponentName to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ComponentName.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ComponentName
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ComponentName
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ComponentName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ComponentName";
                        };
    
                        return ComponentName;
                    })();
    
                    v1.AddressValidation = (function() {
    
                        /**
                         * Constructs a new AddressValidation service.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents an AddressValidation
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function AddressValidation(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (AddressValidation.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AddressValidation;
    
                        /**
                         * Creates new AddressValidation service using the specified rpc implementation.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {AddressValidation} RPC service. Useful where requests and/or responses are streamed.
                         */
                        AddressValidation.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.maps.addressvalidation.v1.AddressValidation|validateAddress}.
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @typedef ValidateAddressCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.maps.addressvalidation.v1.ValidateAddressResponse} [response] ValidateAddressResponse
                         */
    
                        /**
                         * Calls ValidateAddress.
                         * @function validateAddress
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @instance
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest} request ValidateAddressRequest message or plain object
                         * @param {google.maps.addressvalidation.v1.AddressValidation.ValidateAddressCallback} callback Node-style callback called with the error, if any, and ValidateAddressResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AddressValidation.prototype.validateAddress = function validateAddress(request, callback) {
                            return this.rpcCall(validateAddress, $root.google.maps.addressvalidation.v1.ValidateAddressRequest, $root.google.maps.addressvalidation.v1.ValidateAddressResponse, request, callback);
                        }, "name", { value: "ValidateAddress" });
    
                        /**
                         * Calls ValidateAddress.
                         * @function validateAddress
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @instance
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest} request ValidateAddressRequest message or plain object
                         * @returns {Promise<google.maps.addressvalidation.v1.ValidateAddressResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.maps.addressvalidation.v1.AddressValidation|provideValidationFeedback}.
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @typedef ProvideValidationFeedbackCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} [response] ProvideValidationFeedbackResponse
                         */
    
                        /**
                         * Calls ProvideValidationFeedback.
                         * @function provideValidationFeedback
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @instance
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest} request ProvideValidationFeedbackRequest message or plain object
                         * @param {google.maps.addressvalidation.v1.AddressValidation.ProvideValidationFeedbackCallback} callback Node-style callback called with the error, if any, and ProvideValidationFeedbackResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AddressValidation.prototype.provideValidationFeedback = function provideValidationFeedback(request, callback) {
                            return this.rpcCall(provideValidationFeedback, $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest, $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse, request, callback);
                        }, "name", { value: "ProvideValidationFeedback" });
    
                        /**
                         * Calls ProvideValidationFeedback.
                         * @function provideValidationFeedback
                         * @memberof google.maps.addressvalidation.v1.AddressValidation
                         * @instance
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest} request ProvideValidationFeedbackRequest message or plain object
                         * @returns {Promise<google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse>} Promise
                         * @variation 2
                         */
    
                        return AddressValidation;
                    })();
    
                    v1.ValidateAddressRequest = (function() {
    
                        /**
                         * Properties of a ValidateAddressRequest.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IValidateAddressRequest
                         * @property {google.type.IPostalAddress|null} [address] ValidateAddressRequest address
                         * @property {string|null} [previousResponseId] ValidateAddressRequest previousResponseId
                         * @property {boolean|null} [enableUspsCass] ValidateAddressRequest enableUspsCass
                         */
    
                        /**
                         * Constructs a new ValidateAddressRequest.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ValidateAddressRequest.
                         * @implements IValidateAddressRequest
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest=} [properties] Properties to set
                         */
                        function ValidateAddressRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ValidateAddressRequest address.
                         * @member {google.type.IPostalAddress|null|undefined} address
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @instance
                         */
                        ValidateAddressRequest.prototype.address = null;
    
                        /**
                         * ValidateAddressRequest previousResponseId.
                         * @member {string} previousResponseId
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @instance
                         */
                        ValidateAddressRequest.prototype.previousResponseId = "";
    
                        /**
                         * ValidateAddressRequest enableUspsCass.
                         * @member {boolean} enableUspsCass
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @instance
                         */
                        ValidateAddressRequest.prototype.enableUspsCass = false;
    
                        /**
                         * Creates a new ValidateAddressRequest instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressRequest} ValidateAddressRequest instance
                         */
                        ValidateAddressRequest.create = function create(properties) {
                            return new ValidateAddressRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ValidateAddressRequest message. Does not implicitly {@link google.maps.addressvalidation.v1.ValidateAddressRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest} message ValidateAddressRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidateAddressRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                                $root.google.type.PostalAddress.encode(message.address, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.previousResponseId != null && Object.hasOwnProperty.call(message, "previousResponseId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.previousResponseId);
                            if (message.enableUspsCass != null && Object.hasOwnProperty.call(message, "enableUspsCass"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enableUspsCass);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ValidateAddressRequest message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ValidateAddressRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressRequest} message ValidateAddressRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidateAddressRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ValidateAddressRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressRequest} ValidateAddressRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidateAddressRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ValidateAddressRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.address = $root.google.type.PostalAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.previousResponseId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.enableUspsCass = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ValidateAddressRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressRequest} ValidateAddressRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidateAddressRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ValidateAddressRequest message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ValidateAddressRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.address != null && message.hasOwnProperty("address")) {
                                var error = $root.google.type.PostalAddress.verify(message.address);
                                if (error)
                                    return "address." + error;
                            }
                            if (message.previousResponseId != null && message.hasOwnProperty("previousResponseId"))
                                if (!$util.isString(message.previousResponseId))
                                    return "previousResponseId: string expected";
                            if (message.enableUspsCass != null && message.hasOwnProperty("enableUspsCass"))
                                if (typeof message.enableUspsCass !== "boolean")
                                    return "enableUspsCass: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a ValidateAddressRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressRequest} ValidateAddressRequest
                         */
                        ValidateAddressRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ValidateAddressRequest)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.ValidateAddressRequest();
                            if (object.address != null) {
                                if (typeof object.address !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidateAddressRequest.address: object expected");
                                message.address = $root.google.type.PostalAddress.fromObject(object.address);
                            }
                            if (object.previousResponseId != null)
                                message.previousResponseId = String(object.previousResponseId);
                            if (object.enableUspsCass != null)
                                message.enableUspsCass = Boolean(object.enableUspsCass);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ValidateAddressRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.ValidateAddressRequest} message ValidateAddressRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ValidateAddressRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.address = null;
                                object.previousResponseId = "";
                                object.enableUspsCass = false;
                            }
                            if (message.address != null && message.hasOwnProperty("address"))
                                object.address = $root.google.type.PostalAddress.toObject(message.address, options);
                            if (message.previousResponseId != null && message.hasOwnProperty("previousResponseId"))
                                object.previousResponseId = message.previousResponseId;
                            if (message.enableUspsCass != null && message.hasOwnProperty("enableUspsCass"))
                                object.enableUspsCass = message.enableUspsCass;
                            return object;
                        };
    
                        /**
                         * Converts this ValidateAddressRequest to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ValidateAddressRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ValidateAddressRequest
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ValidateAddressRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ValidateAddressRequest";
                        };
    
                        return ValidateAddressRequest;
                    })();
    
                    v1.ValidateAddressResponse = (function() {
    
                        /**
                         * Properties of a ValidateAddressResponse.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IValidateAddressResponse
                         * @property {google.maps.addressvalidation.v1.IValidationResult|null} [result] ValidateAddressResponse result
                         * @property {string|null} [responseId] ValidateAddressResponse responseId
                         */
    
                        /**
                         * Constructs a new ValidateAddressResponse.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ValidateAddressResponse.
                         * @implements IValidateAddressResponse
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IValidateAddressResponse=} [properties] Properties to set
                         */
                        function ValidateAddressResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ValidateAddressResponse result.
                         * @member {google.maps.addressvalidation.v1.IValidationResult|null|undefined} result
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @instance
                         */
                        ValidateAddressResponse.prototype.result = null;
    
                        /**
                         * ValidateAddressResponse responseId.
                         * @member {string} responseId
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @instance
                         */
                        ValidateAddressResponse.prototype.responseId = "";
    
                        /**
                         * Creates a new ValidateAddressResponse instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressResponse=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressResponse} ValidateAddressResponse instance
                         */
                        ValidateAddressResponse.create = function create(properties) {
                            return new ValidateAddressResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ValidateAddressResponse message. Does not implicitly {@link google.maps.addressvalidation.v1.ValidateAddressResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressResponse} message ValidateAddressResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidateAddressResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                                $root.google.maps.addressvalidation.v1.ValidationResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.responseId != null && Object.hasOwnProperty.call(message, "responseId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ValidateAddressResponse message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ValidateAddressResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidateAddressResponse} message ValidateAddressResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidateAddressResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ValidateAddressResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressResponse} ValidateAddressResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidateAddressResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ValidateAddressResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.result = $root.google.maps.addressvalidation.v1.ValidationResult.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.responseId = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ValidateAddressResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressResponse} ValidateAddressResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidateAddressResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ValidateAddressResponse message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ValidateAddressResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.result != null && message.hasOwnProperty("result")) {
                                var error = $root.google.maps.addressvalidation.v1.ValidationResult.verify(message.result);
                                if (error)
                                    return "result." + error;
                            }
                            if (message.responseId != null && message.hasOwnProperty("responseId"))
                                if (!$util.isString(message.responseId))
                                    return "responseId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ValidateAddressResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ValidateAddressResponse} ValidateAddressResponse
                         */
                        ValidateAddressResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ValidateAddressResponse)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.ValidateAddressResponse();
                            if (object.result != null) {
                                if (typeof object.result !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidateAddressResponse.result: object expected");
                                message.result = $root.google.maps.addressvalidation.v1.ValidationResult.fromObject(object.result);
                            }
                            if (object.responseId != null)
                                message.responseId = String(object.responseId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ValidateAddressResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.ValidateAddressResponse} message ValidateAddressResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ValidateAddressResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.result = null;
                                object.responseId = "";
                            }
                            if (message.result != null && message.hasOwnProperty("result"))
                                object.result = $root.google.maps.addressvalidation.v1.ValidationResult.toObject(message.result, options);
                            if (message.responseId != null && message.hasOwnProperty("responseId"))
                                object.responseId = message.responseId;
                            return object;
                        };
    
                        /**
                         * Converts this ValidateAddressResponse to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ValidateAddressResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ValidateAddressResponse
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ValidateAddressResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ValidateAddressResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ValidateAddressResponse";
                        };
    
                        return ValidateAddressResponse;
                    })();
    
                    v1.ProvideValidationFeedbackRequest = (function() {
    
                        /**
                         * Properties of a ProvideValidationFeedbackRequest.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IProvideValidationFeedbackRequest
                         * @property {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.ValidationConclusion|null} [conclusion] ProvideValidationFeedbackRequest conclusion
                         * @property {string|null} [responseId] ProvideValidationFeedbackRequest responseId
                         */
    
                        /**
                         * Constructs a new ProvideValidationFeedbackRequest.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ProvideValidationFeedbackRequest.
                         * @implements IProvideValidationFeedbackRequest
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest=} [properties] Properties to set
                         */
                        function ProvideValidationFeedbackRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ProvideValidationFeedbackRequest conclusion.
                         * @member {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.ValidationConclusion} conclusion
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @instance
                         */
                        ProvideValidationFeedbackRequest.prototype.conclusion = 0;
    
                        /**
                         * ProvideValidationFeedbackRequest responseId.
                         * @member {string} responseId
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @instance
                         */
                        ProvideValidationFeedbackRequest.prototype.responseId = "";
    
                        /**
                         * Creates a new ProvideValidationFeedbackRequest instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest} ProvideValidationFeedbackRequest instance
                         */
                        ProvideValidationFeedbackRequest.create = function create(properties) {
                            return new ProvideValidationFeedbackRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ProvideValidationFeedbackRequest message. Does not implicitly {@link google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest} message ProvideValidationFeedbackRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProvideValidationFeedbackRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.conclusion != null && Object.hasOwnProperty.call(message, "conclusion"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.conclusion);
                            if (message.responseId != null && Object.hasOwnProperty.call(message, "responseId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.responseId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ProvideValidationFeedbackRequest message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackRequest} message ProvideValidationFeedbackRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProvideValidationFeedbackRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ProvideValidationFeedbackRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest} ProvideValidationFeedbackRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProvideValidationFeedbackRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.conclusion = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.responseId = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ProvideValidationFeedbackRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest} ProvideValidationFeedbackRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProvideValidationFeedbackRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ProvideValidationFeedbackRequest message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProvideValidationFeedbackRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.conclusion != null && message.hasOwnProperty("conclusion"))
                                switch (message.conclusion) {
                                default:
                                    return "conclusion: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            if (message.responseId != null && message.hasOwnProperty("responseId"))
                                if (!$util.isString(message.responseId))
                                    return "responseId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ProvideValidationFeedbackRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest} ProvideValidationFeedbackRequest
                         */
                        ProvideValidationFeedbackRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest();
                            switch (object.conclusion) {
                            case "VALIDATION_CONCLUSION_UNSPECIFIED":
                            case 0:
                                message.conclusion = 0;
                                break;
                            case "VALIDATED_VERSION_USED":
                            case 1:
                                message.conclusion = 1;
                                break;
                            case "USER_VERSION_USED":
                            case 2:
                                message.conclusion = 2;
                                break;
                            case "UNVALIDATED_VERSION_USED":
                            case 3:
                                message.conclusion = 3;
                                break;
                            case "UNUSED":
                            case 4:
                                message.conclusion = 4;
                                break;
                            }
                            if (object.responseId != null)
                                message.responseId = String(object.responseId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ProvideValidationFeedbackRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest} message ProvideValidationFeedbackRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProvideValidationFeedbackRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.conclusion = options.enums === String ? "VALIDATION_CONCLUSION_UNSPECIFIED" : 0;
                                object.responseId = "";
                            }
                            if (message.conclusion != null && message.hasOwnProperty("conclusion"))
                                object.conclusion = options.enums === String ? $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.ValidationConclusion[message.conclusion] : message.conclusion;
                            if (message.responseId != null && message.hasOwnProperty("responseId"))
                                object.responseId = message.responseId;
                            return object;
                        };
    
                        /**
                         * Converts this ProvideValidationFeedbackRequest to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProvideValidationFeedbackRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ProvideValidationFeedbackRequest
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ProvideValidationFeedbackRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest";
                        };
    
                        /**
                         * ValidationConclusion enum.
                         * @name google.maps.addressvalidation.v1.ProvideValidationFeedbackRequest.ValidationConclusion
                         * @enum {number}
                         * @property {number} VALIDATION_CONCLUSION_UNSPECIFIED=0 VALIDATION_CONCLUSION_UNSPECIFIED value
                         * @property {number} VALIDATED_VERSION_USED=1 VALIDATED_VERSION_USED value
                         * @property {number} USER_VERSION_USED=2 USER_VERSION_USED value
                         * @property {number} UNVALIDATED_VERSION_USED=3 UNVALIDATED_VERSION_USED value
                         * @property {number} UNUSED=4 UNUSED value
                         */
                        ProvideValidationFeedbackRequest.ValidationConclusion = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "VALIDATION_CONCLUSION_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "VALIDATED_VERSION_USED"] = 1;
                            values[valuesById[2] = "USER_VERSION_USED"] = 2;
                            values[valuesById[3] = "UNVALIDATED_VERSION_USED"] = 3;
                            values[valuesById[4] = "UNUSED"] = 4;
                            return values;
                        })();
    
                        return ProvideValidationFeedbackRequest;
                    })();
    
                    v1.ProvideValidationFeedbackResponse = (function() {
    
                        /**
                         * Properties of a ProvideValidationFeedbackResponse.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IProvideValidationFeedbackResponse
                         */
    
                        /**
                         * Constructs a new ProvideValidationFeedbackResponse.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ProvideValidationFeedbackResponse.
                         * @implements IProvideValidationFeedbackResponse
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackResponse=} [properties] Properties to set
                         */
                        function ProvideValidationFeedbackResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Creates a new ProvideValidationFeedbackResponse instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackResponse=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} ProvideValidationFeedbackResponse instance
                         */
                        ProvideValidationFeedbackResponse.create = function create(properties) {
                            return new ProvideValidationFeedbackResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ProvideValidationFeedbackResponse message. Does not implicitly {@link google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackResponse} message ProvideValidationFeedbackResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProvideValidationFeedbackResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ProvideValidationFeedbackResponse message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.IProvideValidationFeedbackResponse} message ProvideValidationFeedbackResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProvideValidationFeedbackResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ProvideValidationFeedbackResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} ProvideValidationFeedbackResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProvideValidationFeedbackResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ProvideValidationFeedbackResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} ProvideValidationFeedbackResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProvideValidationFeedbackResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ProvideValidationFeedbackResponse message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProvideValidationFeedbackResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };
    
                        /**
                         * Creates a ProvideValidationFeedbackResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} ProvideValidationFeedbackResponse
                         */
                        ProvideValidationFeedbackResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse)
                                return object;
                            return new $root.google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse();
                        };
    
                        /**
                         * Creates a plain object from a ProvideValidationFeedbackResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse} message ProvideValidationFeedbackResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProvideValidationFeedbackResponse.toObject = function toObject() {
                            return {};
                        };
    
                        /**
                         * Converts this ProvideValidationFeedbackResponse to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProvideValidationFeedbackResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ProvideValidationFeedbackResponse
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ProvideValidationFeedbackResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ProvideValidationFeedbackResponse";
                        };
    
                        return ProvideValidationFeedbackResponse;
                    })();
    
                    v1.ValidationResult = (function() {
    
                        /**
                         * Properties of a ValidationResult.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IValidationResult
                         * @property {google.maps.addressvalidation.v1.IVerdict|null} [verdict] ValidationResult verdict
                         * @property {google.maps.addressvalidation.v1.IAddress|null} [address] ValidationResult address
                         * @property {google.maps.addressvalidation.v1.IGeocode|null} [geocode] ValidationResult geocode
                         * @property {google.maps.addressvalidation.v1.IAddressMetadata|null} [metadata] ValidationResult metadata
                         * @property {google.maps.addressvalidation.v1.IUspsData|null} [uspsData] ValidationResult uspsData
                         */
    
                        /**
                         * Constructs a new ValidationResult.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a ValidationResult.
                         * @implements IValidationResult
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IValidationResult=} [properties] Properties to set
                         */
                        function ValidationResult(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ValidationResult verdict.
                         * @member {google.maps.addressvalidation.v1.IVerdict|null|undefined} verdict
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         */
                        ValidationResult.prototype.verdict = null;
    
                        /**
                         * ValidationResult address.
                         * @member {google.maps.addressvalidation.v1.IAddress|null|undefined} address
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         */
                        ValidationResult.prototype.address = null;
    
                        /**
                         * ValidationResult geocode.
                         * @member {google.maps.addressvalidation.v1.IGeocode|null|undefined} geocode
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         */
                        ValidationResult.prototype.geocode = null;
    
                        /**
                         * ValidationResult metadata.
                         * @member {google.maps.addressvalidation.v1.IAddressMetadata|null|undefined} metadata
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         */
                        ValidationResult.prototype.metadata = null;
    
                        /**
                         * ValidationResult uspsData.
                         * @member {google.maps.addressvalidation.v1.IUspsData|null|undefined} uspsData
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         */
                        ValidationResult.prototype.uspsData = null;
    
                        /**
                         * Creates a new ValidationResult instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidationResult=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.ValidationResult} ValidationResult instance
                         */
                        ValidationResult.create = function create(properties) {
                            return new ValidationResult(properties);
                        };
    
                        /**
                         * Encodes the specified ValidationResult message. Does not implicitly {@link google.maps.addressvalidation.v1.ValidationResult.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidationResult} message ValidationResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidationResult.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.verdict != null && Object.hasOwnProperty.call(message, "verdict"))
                                $root.google.maps.addressvalidation.v1.Verdict.encode(message.verdict, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                                $root.google.maps.addressvalidation.v1.Address.encode(message.address, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.geocode != null && Object.hasOwnProperty.call(message, "geocode"))
                                $root.google.maps.addressvalidation.v1.Geocode.encode(message.geocode, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                                $root.google.maps.addressvalidation.v1.AddressMetadata.encode(message.metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.uspsData != null && Object.hasOwnProperty.call(message, "uspsData"))
                                $root.google.maps.addressvalidation.v1.UspsData.encode(message.uspsData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ValidationResult message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.ValidationResult.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {google.maps.addressvalidation.v1.IValidationResult} message ValidationResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ValidationResult.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ValidationResult message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.ValidationResult} ValidationResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidationResult.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.ValidationResult();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.verdict = $root.google.maps.addressvalidation.v1.Verdict.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.address = $root.google.maps.addressvalidation.v1.Address.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.geocode = $root.google.maps.addressvalidation.v1.Geocode.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.metadata = $root.google.maps.addressvalidation.v1.AddressMetadata.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.uspsData = $root.google.maps.addressvalidation.v1.UspsData.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ValidationResult message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.ValidationResult} ValidationResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ValidationResult.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ValidationResult message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ValidationResult.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.verdict != null && message.hasOwnProperty("verdict")) {
                                var error = $root.google.maps.addressvalidation.v1.Verdict.verify(message.verdict);
                                if (error)
                                    return "verdict." + error;
                            }
                            if (message.address != null && message.hasOwnProperty("address")) {
                                var error = $root.google.maps.addressvalidation.v1.Address.verify(message.address);
                                if (error)
                                    return "address." + error;
                            }
                            if (message.geocode != null && message.hasOwnProperty("geocode")) {
                                var error = $root.google.maps.addressvalidation.v1.Geocode.verify(message.geocode);
                                if (error)
                                    return "geocode." + error;
                            }
                            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                                var error = $root.google.maps.addressvalidation.v1.AddressMetadata.verify(message.metadata);
                                if (error)
                                    return "metadata." + error;
                            }
                            if (message.uspsData != null && message.hasOwnProperty("uspsData")) {
                                var error = $root.google.maps.addressvalidation.v1.UspsData.verify(message.uspsData);
                                if (error)
                                    return "uspsData." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ValidationResult message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.ValidationResult} ValidationResult
                         */
                        ValidationResult.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.ValidationResult)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.ValidationResult();
                            if (object.verdict != null) {
                                if (typeof object.verdict !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidationResult.verdict: object expected");
                                message.verdict = $root.google.maps.addressvalidation.v1.Verdict.fromObject(object.verdict);
                            }
                            if (object.address != null) {
                                if (typeof object.address !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidationResult.address: object expected");
                                message.address = $root.google.maps.addressvalidation.v1.Address.fromObject(object.address);
                            }
                            if (object.geocode != null) {
                                if (typeof object.geocode !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidationResult.geocode: object expected");
                                message.geocode = $root.google.maps.addressvalidation.v1.Geocode.fromObject(object.geocode);
                            }
                            if (object.metadata != null) {
                                if (typeof object.metadata !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidationResult.metadata: object expected");
                                message.metadata = $root.google.maps.addressvalidation.v1.AddressMetadata.fromObject(object.metadata);
                            }
                            if (object.uspsData != null) {
                                if (typeof object.uspsData !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.ValidationResult.uspsData: object expected");
                                message.uspsData = $root.google.maps.addressvalidation.v1.UspsData.fromObject(object.uspsData);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ValidationResult message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {google.maps.addressvalidation.v1.ValidationResult} message ValidationResult
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ValidationResult.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.verdict = null;
                                object.address = null;
                                object.geocode = null;
                                object.metadata = null;
                                object.uspsData = null;
                            }
                            if (message.verdict != null && message.hasOwnProperty("verdict"))
                                object.verdict = $root.google.maps.addressvalidation.v1.Verdict.toObject(message.verdict, options);
                            if (message.address != null && message.hasOwnProperty("address"))
                                object.address = $root.google.maps.addressvalidation.v1.Address.toObject(message.address, options);
                            if (message.geocode != null && message.hasOwnProperty("geocode"))
                                object.geocode = $root.google.maps.addressvalidation.v1.Geocode.toObject(message.geocode, options);
                            if (message.metadata != null && message.hasOwnProperty("metadata"))
                                object.metadata = $root.google.maps.addressvalidation.v1.AddressMetadata.toObject(message.metadata, options);
                            if (message.uspsData != null && message.hasOwnProperty("uspsData"))
                                object.uspsData = $root.google.maps.addressvalidation.v1.UspsData.toObject(message.uspsData, options);
                            return object;
                        };
    
                        /**
                         * Converts this ValidationResult to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ValidationResult.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ValidationResult
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.ValidationResult
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ValidationResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.ValidationResult";
                        };
    
                        return ValidationResult;
                    })();
    
                    v1.Verdict = (function() {
    
                        /**
                         * Properties of a Verdict.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IVerdict
                         * @property {google.maps.addressvalidation.v1.Verdict.Granularity|null} [inputGranularity] Verdict inputGranularity
                         * @property {google.maps.addressvalidation.v1.Verdict.Granularity|null} [validationGranularity] Verdict validationGranularity
                         * @property {google.maps.addressvalidation.v1.Verdict.Granularity|null} [geocodeGranularity] Verdict geocodeGranularity
                         * @property {boolean|null} [addressComplete] Verdict addressComplete
                         * @property {boolean|null} [hasUnconfirmedComponents] Verdict hasUnconfirmedComponents
                         * @property {boolean|null} [hasInferredComponents] Verdict hasInferredComponents
                         * @property {boolean|null} [hasReplacedComponents] Verdict hasReplacedComponents
                         */
    
                        /**
                         * Constructs a new Verdict.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a Verdict.
                         * @implements IVerdict
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IVerdict=} [properties] Properties to set
                         */
                        function Verdict(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Verdict inputGranularity.
                         * @member {google.maps.addressvalidation.v1.Verdict.Granularity} inputGranularity
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.inputGranularity = 0;
    
                        /**
                         * Verdict validationGranularity.
                         * @member {google.maps.addressvalidation.v1.Verdict.Granularity} validationGranularity
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.validationGranularity = 0;
    
                        /**
                         * Verdict geocodeGranularity.
                         * @member {google.maps.addressvalidation.v1.Verdict.Granularity} geocodeGranularity
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.geocodeGranularity = 0;
    
                        /**
                         * Verdict addressComplete.
                         * @member {boolean} addressComplete
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.addressComplete = false;
    
                        /**
                         * Verdict hasUnconfirmedComponents.
                         * @member {boolean} hasUnconfirmedComponents
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.hasUnconfirmedComponents = false;
    
                        /**
                         * Verdict hasInferredComponents.
                         * @member {boolean} hasInferredComponents
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.hasInferredComponents = false;
    
                        /**
                         * Verdict hasReplacedComponents.
                         * @member {boolean} hasReplacedComponents
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         */
                        Verdict.prototype.hasReplacedComponents = false;
    
                        /**
                         * Creates a new Verdict instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {google.maps.addressvalidation.v1.IVerdict=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.Verdict} Verdict instance
                         */
                        Verdict.create = function create(properties) {
                            return new Verdict(properties);
                        };
    
                        /**
                         * Encodes the specified Verdict message. Does not implicitly {@link google.maps.addressvalidation.v1.Verdict.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {google.maps.addressvalidation.v1.IVerdict} message Verdict message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Verdict.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.inputGranularity != null && Object.hasOwnProperty.call(message, "inputGranularity"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inputGranularity);
                            if (message.validationGranularity != null && Object.hasOwnProperty.call(message, "validationGranularity"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.validationGranularity);
                            if (message.geocodeGranularity != null && Object.hasOwnProperty.call(message, "geocodeGranularity"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.geocodeGranularity);
                            if (message.addressComplete != null && Object.hasOwnProperty.call(message, "addressComplete"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.addressComplete);
                            if (message.hasUnconfirmedComponents != null && Object.hasOwnProperty.call(message, "hasUnconfirmedComponents"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasUnconfirmedComponents);
                            if (message.hasInferredComponents != null && Object.hasOwnProperty.call(message, "hasInferredComponents"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasInferredComponents);
                            if (message.hasReplacedComponents != null && Object.hasOwnProperty.call(message, "hasReplacedComponents"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasReplacedComponents);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Verdict message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.Verdict.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {google.maps.addressvalidation.v1.IVerdict} message Verdict message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Verdict.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Verdict message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.Verdict} Verdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Verdict.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.Verdict();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.inputGranularity = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.validationGranularity = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.geocodeGranularity = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.addressComplete = reader.bool();
                                        break;
                                    }
                                case 5: {
                                        message.hasUnconfirmedComponents = reader.bool();
                                        break;
                                    }
                                case 6: {
                                        message.hasInferredComponents = reader.bool();
                                        break;
                                    }
                                case 7: {
                                        message.hasReplacedComponents = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Verdict message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.Verdict} Verdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Verdict.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Verdict message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Verdict.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.inputGranularity != null && message.hasOwnProperty("inputGranularity"))
                                switch (message.inputGranularity) {
                                default:
                                    return "inputGranularity: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    break;
                                }
                            if (message.validationGranularity != null && message.hasOwnProperty("validationGranularity"))
                                switch (message.validationGranularity) {
                                default:
                                    return "validationGranularity: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    break;
                                }
                            if (message.geocodeGranularity != null && message.hasOwnProperty("geocodeGranularity"))
                                switch (message.geocodeGranularity) {
                                default:
                                    return "geocodeGranularity: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    break;
                                }
                            if (message.addressComplete != null && message.hasOwnProperty("addressComplete"))
                                if (typeof message.addressComplete !== "boolean")
                                    return "addressComplete: boolean expected";
                            if (message.hasUnconfirmedComponents != null && message.hasOwnProperty("hasUnconfirmedComponents"))
                                if (typeof message.hasUnconfirmedComponents !== "boolean")
                                    return "hasUnconfirmedComponents: boolean expected";
                            if (message.hasInferredComponents != null && message.hasOwnProperty("hasInferredComponents"))
                                if (typeof message.hasInferredComponents !== "boolean")
                                    return "hasInferredComponents: boolean expected";
                            if (message.hasReplacedComponents != null && message.hasOwnProperty("hasReplacedComponents"))
                                if (typeof message.hasReplacedComponents !== "boolean")
                                    return "hasReplacedComponents: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a Verdict message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.Verdict} Verdict
                         */
                        Verdict.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.Verdict)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.Verdict();
                            switch (object.inputGranularity) {
                            case "GRANULARITY_UNSPECIFIED":
                            case 0:
                                message.inputGranularity = 0;
                                break;
                            case "SUB_PREMISE":
                            case 1:
                                message.inputGranularity = 1;
                                break;
                            case "PREMISE":
                            case 2:
                                message.inputGranularity = 2;
                                break;
                            case "PREMISE_PROXIMITY":
                            case 3:
                                message.inputGranularity = 3;
                                break;
                            case "BLOCK":
                            case 4:
                                message.inputGranularity = 4;
                                break;
                            case "ROUTE":
                            case 5:
                                message.inputGranularity = 5;
                                break;
                            case "OTHER":
                            case 6:
                                message.inputGranularity = 6;
                                break;
                            }
                            switch (object.validationGranularity) {
                            case "GRANULARITY_UNSPECIFIED":
                            case 0:
                                message.validationGranularity = 0;
                                break;
                            case "SUB_PREMISE":
                            case 1:
                                message.validationGranularity = 1;
                                break;
                            case "PREMISE":
                            case 2:
                                message.validationGranularity = 2;
                                break;
                            case "PREMISE_PROXIMITY":
                            case 3:
                                message.validationGranularity = 3;
                                break;
                            case "BLOCK":
                            case 4:
                                message.validationGranularity = 4;
                                break;
                            case "ROUTE":
                            case 5:
                                message.validationGranularity = 5;
                                break;
                            case "OTHER":
                            case 6:
                                message.validationGranularity = 6;
                                break;
                            }
                            switch (object.geocodeGranularity) {
                            case "GRANULARITY_UNSPECIFIED":
                            case 0:
                                message.geocodeGranularity = 0;
                                break;
                            case "SUB_PREMISE":
                            case 1:
                                message.geocodeGranularity = 1;
                                break;
                            case "PREMISE":
                            case 2:
                                message.geocodeGranularity = 2;
                                break;
                            case "PREMISE_PROXIMITY":
                            case 3:
                                message.geocodeGranularity = 3;
                                break;
                            case "BLOCK":
                            case 4:
                                message.geocodeGranularity = 4;
                                break;
                            case "ROUTE":
                            case 5:
                                message.geocodeGranularity = 5;
                                break;
                            case "OTHER":
                            case 6:
                                message.geocodeGranularity = 6;
                                break;
                            }
                            if (object.addressComplete != null)
                                message.addressComplete = Boolean(object.addressComplete);
                            if (object.hasUnconfirmedComponents != null)
                                message.hasUnconfirmedComponents = Boolean(object.hasUnconfirmedComponents);
                            if (object.hasInferredComponents != null)
                                message.hasInferredComponents = Boolean(object.hasInferredComponents);
                            if (object.hasReplacedComponents != null)
                                message.hasReplacedComponents = Boolean(object.hasReplacedComponents);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Verdict message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {google.maps.addressvalidation.v1.Verdict} message Verdict
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Verdict.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.inputGranularity = options.enums === String ? "GRANULARITY_UNSPECIFIED" : 0;
                                object.validationGranularity = options.enums === String ? "GRANULARITY_UNSPECIFIED" : 0;
                                object.geocodeGranularity = options.enums === String ? "GRANULARITY_UNSPECIFIED" : 0;
                                object.addressComplete = false;
                                object.hasUnconfirmedComponents = false;
                                object.hasInferredComponents = false;
                                object.hasReplacedComponents = false;
                            }
                            if (message.inputGranularity != null && message.hasOwnProperty("inputGranularity"))
                                object.inputGranularity = options.enums === String ? $root.google.maps.addressvalidation.v1.Verdict.Granularity[message.inputGranularity] : message.inputGranularity;
                            if (message.validationGranularity != null && message.hasOwnProperty("validationGranularity"))
                                object.validationGranularity = options.enums === String ? $root.google.maps.addressvalidation.v1.Verdict.Granularity[message.validationGranularity] : message.validationGranularity;
                            if (message.geocodeGranularity != null && message.hasOwnProperty("geocodeGranularity"))
                                object.geocodeGranularity = options.enums === String ? $root.google.maps.addressvalidation.v1.Verdict.Granularity[message.geocodeGranularity] : message.geocodeGranularity;
                            if (message.addressComplete != null && message.hasOwnProperty("addressComplete"))
                                object.addressComplete = message.addressComplete;
                            if (message.hasUnconfirmedComponents != null && message.hasOwnProperty("hasUnconfirmedComponents"))
                                object.hasUnconfirmedComponents = message.hasUnconfirmedComponents;
                            if (message.hasInferredComponents != null && message.hasOwnProperty("hasInferredComponents"))
                                object.hasInferredComponents = message.hasInferredComponents;
                            if (message.hasReplacedComponents != null && message.hasOwnProperty("hasReplacedComponents"))
                                object.hasReplacedComponents = message.hasReplacedComponents;
                            return object;
                        };
    
                        /**
                         * Converts this Verdict to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Verdict.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Verdict
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.Verdict
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Verdict.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.Verdict";
                        };
    
                        /**
                         * Granularity enum.
                         * @name google.maps.addressvalidation.v1.Verdict.Granularity
                         * @enum {number}
                         * @property {number} GRANULARITY_UNSPECIFIED=0 GRANULARITY_UNSPECIFIED value
                         * @property {number} SUB_PREMISE=1 SUB_PREMISE value
                         * @property {number} PREMISE=2 PREMISE value
                         * @property {number} PREMISE_PROXIMITY=3 PREMISE_PROXIMITY value
                         * @property {number} BLOCK=4 BLOCK value
                         * @property {number} ROUTE=5 ROUTE value
                         * @property {number} OTHER=6 OTHER value
                         */
                        Verdict.Granularity = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "GRANULARITY_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "SUB_PREMISE"] = 1;
                            values[valuesById[2] = "PREMISE"] = 2;
                            values[valuesById[3] = "PREMISE_PROXIMITY"] = 3;
                            values[valuesById[4] = "BLOCK"] = 4;
                            values[valuesById[5] = "ROUTE"] = 5;
                            values[valuesById[6] = "OTHER"] = 6;
                            return values;
                        })();
    
                        return Verdict;
                    })();
    
                    v1.Geocode = (function() {
    
                        /**
                         * Properties of a Geocode.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IGeocode
                         * @property {google.type.ILatLng|null} [location] Geocode location
                         * @property {google.maps.addressvalidation.v1.IPlusCode|null} [plusCode] Geocode plusCode
                         * @property {google.geo.type.IViewport|null} [bounds] Geocode bounds
                         * @property {number|null} [featureSizeMeters] Geocode featureSizeMeters
                         * @property {string|null} [placeId] Geocode placeId
                         * @property {Array.<string>|null} [placeTypes] Geocode placeTypes
                         */
    
                        /**
                         * Constructs a new Geocode.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a Geocode.
                         * @implements IGeocode
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IGeocode=} [properties] Properties to set
                         */
                        function Geocode(properties) {
                            this.placeTypes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Geocode location.
                         * @member {google.type.ILatLng|null|undefined} location
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.location = null;
    
                        /**
                         * Geocode plusCode.
                         * @member {google.maps.addressvalidation.v1.IPlusCode|null|undefined} plusCode
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.plusCode = null;
    
                        /**
                         * Geocode bounds.
                         * @member {google.geo.type.IViewport|null|undefined} bounds
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.bounds = null;
    
                        /**
                         * Geocode featureSizeMeters.
                         * @member {number} featureSizeMeters
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.featureSizeMeters = 0;
    
                        /**
                         * Geocode placeId.
                         * @member {string} placeId
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.placeId = "";
    
                        /**
                         * Geocode placeTypes.
                         * @member {Array.<string>} placeTypes
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         */
                        Geocode.prototype.placeTypes = $util.emptyArray;
    
                        /**
                         * Creates a new Geocode instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IGeocode=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.Geocode} Geocode instance
                         */
                        Geocode.create = function create(properties) {
                            return new Geocode(properties);
                        };
    
                        /**
                         * Encodes the specified Geocode message. Does not implicitly {@link google.maps.addressvalidation.v1.Geocode.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IGeocode} message Geocode message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Geocode.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                                $root.google.type.LatLng.encode(message.location, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.plusCode != null && Object.hasOwnProperty.call(message, "plusCode"))
                                $root.google.maps.addressvalidation.v1.PlusCode.encode(message.plusCode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.bounds != null && Object.hasOwnProperty.call(message, "bounds"))
                                $root.google.geo.type.Viewport.encode(message.bounds, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.featureSizeMeters != null && Object.hasOwnProperty.call(message, "featureSizeMeters"))
                                writer.uint32(/* id 5, wireType 5 =*/45).float(message.featureSizeMeters);
                            if (message.placeId != null && Object.hasOwnProperty.call(message, "placeId"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.placeId);
                            if (message.placeTypes != null && message.placeTypes.length)
                                for (var i = 0; i < message.placeTypes.length; ++i)
                                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.placeTypes[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Geocode message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.Geocode.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IGeocode} message Geocode message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Geocode.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Geocode message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.Geocode} Geocode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Geocode.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.Geocode();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.location = $root.google.type.LatLng.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.plusCode = $root.google.maps.addressvalidation.v1.PlusCode.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.bounds = $root.google.geo.type.Viewport.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.featureSizeMeters = reader.float();
                                        break;
                                    }
                                case 6: {
                                        message.placeId = reader.string();
                                        break;
                                    }
                                case 7: {
                                        if (!(message.placeTypes && message.placeTypes.length))
                                            message.placeTypes = [];
                                        message.placeTypes.push(reader.string());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Geocode message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.Geocode} Geocode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Geocode.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Geocode message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Geocode.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.location != null && message.hasOwnProperty("location")) {
                                var error = $root.google.type.LatLng.verify(message.location);
                                if (error)
                                    return "location." + error;
                            }
                            if (message.plusCode != null && message.hasOwnProperty("plusCode")) {
                                var error = $root.google.maps.addressvalidation.v1.PlusCode.verify(message.plusCode);
                                if (error)
                                    return "plusCode." + error;
                            }
                            if (message.bounds != null && message.hasOwnProperty("bounds")) {
                                var error = $root.google.geo.type.Viewport.verify(message.bounds);
                                if (error)
                                    return "bounds." + error;
                            }
                            if (message.featureSizeMeters != null && message.hasOwnProperty("featureSizeMeters"))
                                if (typeof message.featureSizeMeters !== "number")
                                    return "featureSizeMeters: number expected";
                            if (message.placeId != null && message.hasOwnProperty("placeId"))
                                if (!$util.isString(message.placeId))
                                    return "placeId: string expected";
                            if (message.placeTypes != null && message.hasOwnProperty("placeTypes")) {
                                if (!Array.isArray(message.placeTypes))
                                    return "placeTypes: array expected";
                                for (var i = 0; i < message.placeTypes.length; ++i)
                                    if (!$util.isString(message.placeTypes[i]))
                                        return "placeTypes: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a Geocode message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.Geocode} Geocode
                         */
                        Geocode.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.Geocode)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.Geocode();
                            if (object.location != null) {
                                if (typeof object.location !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.Geocode.location: object expected");
                                message.location = $root.google.type.LatLng.fromObject(object.location);
                            }
                            if (object.plusCode != null) {
                                if (typeof object.plusCode !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.Geocode.plusCode: object expected");
                                message.plusCode = $root.google.maps.addressvalidation.v1.PlusCode.fromObject(object.plusCode);
                            }
                            if (object.bounds != null) {
                                if (typeof object.bounds !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.Geocode.bounds: object expected");
                                message.bounds = $root.google.geo.type.Viewport.fromObject(object.bounds);
                            }
                            if (object.featureSizeMeters != null)
                                message.featureSizeMeters = Number(object.featureSizeMeters);
                            if (object.placeId != null)
                                message.placeId = String(object.placeId);
                            if (object.placeTypes) {
                                if (!Array.isArray(object.placeTypes))
                                    throw TypeError(".google.maps.addressvalidation.v1.Geocode.placeTypes: array expected");
                                message.placeTypes = [];
                                for (var i = 0; i < object.placeTypes.length; ++i)
                                    message.placeTypes[i] = String(object.placeTypes[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Geocode message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {google.maps.addressvalidation.v1.Geocode} message Geocode
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Geocode.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.placeTypes = [];
                            if (options.defaults) {
                                object.location = null;
                                object.plusCode = null;
                                object.bounds = null;
                                object.featureSizeMeters = 0;
                                object.placeId = "";
                            }
                            if (message.location != null && message.hasOwnProperty("location"))
                                object.location = $root.google.type.LatLng.toObject(message.location, options);
                            if (message.plusCode != null && message.hasOwnProperty("plusCode"))
                                object.plusCode = $root.google.maps.addressvalidation.v1.PlusCode.toObject(message.plusCode, options);
                            if (message.bounds != null && message.hasOwnProperty("bounds"))
                                object.bounds = $root.google.geo.type.Viewport.toObject(message.bounds, options);
                            if (message.featureSizeMeters != null && message.hasOwnProperty("featureSizeMeters"))
                                object.featureSizeMeters = options.json && !isFinite(message.featureSizeMeters) ? String(message.featureSizeMeters) : message.featureSizeMeters;
                            if (message.placeId != null && message.hasOwnProperty("placeId"))
                                object.placeId = message.placeId;
                            if (message.placeTypes && message.placeTypes.length) {
                                object.placeTypes = [];
                                for (var j = 0; j < message.placeTypes.length; ++j)
                                    object.placeTypes[j] = message.placeTypes[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Geocode to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Geocode.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Geocode
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.Geocode
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Geocode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.Geocode";
                        };
    
                        return Geocode;
                    })();
    
                    v1.PlusCode = (function() {
    
                        /**
                         * Properties of a PlusCode.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IPlusCode
                         * @property {string|null} [globalCode] PlusCode globalCode
                         * @property {string|null} [compoundCode] PlusCode compoundCode
                         */
    
                        /**
                         * Constructs a new PlusCode.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a PlusCode.
                         * @implements IPlusCode
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IPlusCode=} [properties] Properties to set
                         */
                        function PlusCode(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * PlusCode globalCode.
                         * @member {string} globalCode
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @instance
                         */
                        PlusCode.prototype.globalCode = "";
    
                        /**
                         * PlusCode compoundCode.
                         * @member {string} compoundCode
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @instance
                         */
                        PlusCode.prototype.compoundCode = "";
    
                        /**
                         * Creates a new PlusCode instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IPlusCode=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.PlusCode} PlusCode instance
                         */
                        PlusCode.create = function create(properties) {
                            return new PlusCode(properties);
                        };
    
                        /**
                         * Encodes the specified PlusCode message. Does not implicitly {@link google.maps.addressvalidation.v1.PlusCode.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IPlusCode} message PlusCode message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlusCode.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.globalCode != null && Object.hasOwnProperty.call(message, "globalCode"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.globalCode);
                            if (message.compoundCode != null && Object.hasOwnProperty.call(message, "compoundCode"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.compoundCode);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified PlusCode message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.PlusCode.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {google.maps.addressvalidation.v1.IPlusCode} message PlusCode message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlusCode.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a PlusCode message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.PlusCode} PlusCode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlusCode.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.PlusCode();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.globalCode = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.compoundCode = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a PlusCode message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.PlusCode} PlusCode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlusCode.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a PlusCode message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlusCode.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.globalCode != null && message.hasOwnProperty("globalCode"))
                                if (!$util.isString(message.globalCode))
                                    return "globalCode: string expected";
                            if (message.compoundCode != null && message.hasOwnProperty("compoundCode"))
                                if (!$util.isString(message.compoundCode))
                                    return "compoundCode: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a PlusCode message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.PlusCode} PlusCode
                         */
                        PlusCode.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.PlusCode)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.PlusCode();
                            if (object.globalCode != null)
                                message.globalCode = String(object.globalCode);
                            if (object.compoundCode != null)
                                message.compoundCode = String(object.compoundCode);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a PlusCode message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {google.maps.addressvalidation.v1.PlusCode} message PlusCode
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlusCode.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.globalCode = "";
                                object.compoundCode = "";
                            }
                            if (message.globalCode != null && message.hasOwnProperty("globalCode"))
                                object.globalCode = message.globalCode;
                            if (message.compoundCode != null && message.hasOwnProperty("compoundCode"))
                                object.compoundCode = message.compoundCode;
                            return object;
                        };
    
                        /**
                         * Converts this PlusCode to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlusCode.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for PlusCode
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.PlusCode
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PlusCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.PlusCode";
                        };
    
                        return PlusCode;
                    })();
    
                    v1.AddressMetadata = (function() {
    
                        /**
                         * Properties of an AddressMetadata.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IAddressMetadata
                         * @property {boolean|null} [highrise] AddressMetadata highrise
                         * @property {boolean|null} [business] AddressMetadata business
                         * @property {boolean|null} [poBox] AddressMetadata poBox
                         * @property {boolean|null} [multiFamily] AddressMetadata multiFamily
                         * @property {boolean|null} [residential] AddressMetadata residential
                         */
    
                        /**
                         * Constructs a new AddressMetadata.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents an AddressMetadata.
                         * @implements IAddressMetadata
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IAddressMetadata=} [properties] Properties to set
                         */
                        function AddressMetadata(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AddressMetadata highrise.
                         * @member {boolean|null|undefined} highrise
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        AddressMetadata.prototype.highrise = null;
    
                        /**
                         * AddressMetadata business.
                         * @member {boolean|null|undefined} business
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        AddressMetadata.prototype.business = null;
    
                        /**
                         * AddressMetadata poBox.
                         * @member {boolean|null|undefined} poBox
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        AddressMetadata.prototype.poBox = null;
    
                        /**
                         * AddressMetadata multiFamily.
                         * @member {boolean|null|undefined} multiFamily
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        AddressMetadata.prototype.multiFamily = null;
    
                        /**
                         * AddressMetadata residential.
                         * @member {boolean|null|undefined} residential
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        AddressMetadata.prototype.residential = null;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * AddressMetadata _highrise.
                         * @member {"highrise"|undefined} _highrise
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        Object.defineProperty(AddressMetadata.prototype, "_highrise", {
                            get: $util.oneOfGetter($oneOfFields = ["highrise"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * AddressMetadata _business.
                         * @member {"business"|undefined} _business
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        Object.defineProperty(AddressMetadata.prototype, "_business", {
                            get: $util.oneOfGetter($oneOfFields = ["business"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * AddressMetadata _poBox.
                         * @member {"poBox"|undefined} _poBox
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        Object.defineProperty(AddressMetadata.prototype, "_poBox", {
                            get: $util.oneOfGetter($oneOfFields = ["poBox"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * AddressMetadata _multiFamily.
                         * @member {"multiFamily"|undefined} _multiFamily
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        Object.defineProperty(AddressMetadata.prototype, "_multiFamily", {
                            get: $util.oneOfGetter($oneOfFields = ["multiFamily"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * AddressMetadata _residential.
                         * @member {"residential"|undefined} _residential
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         */
                        Object.defineProperty(AddressMetadata.prototype, "_residential", {
                            get: $util.oneOfGetter($oneOfFields = ["residential"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new AddressMetadata instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressMetadata=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.AddressMetadata} AddressMetadata instance
                         */
                        AddressMetadata.create = function create(properties) {
                            return new AddressMetadata(properties);
                        };
    
                        /**
                         * Encodes the specified AddressMetadata message. Does not implicitly {@link google.maps.addressvalidation.v1.AddressMetadata.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressMetadata} message AddressMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddressMetadata.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.highrise != null && Object.hasOwnProperty.call(message, "highrise"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.highrise);
                            if (message.business != null && Object.hasOwnProperty.call(message, "business"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.business);
                            if (message.poBox != null && Object.hasOwnProperty.call(message, "poBox"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.poBox);
                            if (message.multiFamily != null && Object.hasOwnProperty.call(message, "multiFamily"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.multiFamily);
                            if (message.residential != null && Object.hasOwnProperty.call(message, "residential"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.residential);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AddressMetadata message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.AddressMetadata.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {google.maps.addressvalidation.v1.IAddressMetadata} message AddressMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddressMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AddressMetadata message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.AddressMetadata} AddressMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddressMetadata.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.AddressMetadata();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.highrise = reader.bool();
                                        break;
                                    }
                                case 2: {
                                        message.business = reader.bool();
                                        break;
                                    }
                                case 3: {
                                        message.poBox = reader.bool();
                                        break;
                                    }
                                case 4: {
                                        message.multiFamily = reader.bool();
                                        break;
                                    }
                                case 6: {
                                        message.residential = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AddressMetadata message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.AddressMetadata} AddressMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddressMetadata.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AddressMetadata message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AddressMetadata.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.highrise != null && message.hasOwnProperty("highrise")) {
                                properties._highrise = 1;
                                if (typeof message.highrise !== "boolean")
                                    return "highrise: boolean expected";
                            }
                            if (message.business != null && message.hasOwnProperty("business")) {
                                properties._business = 1;
                                if (typeof message.business !== "boolean")
                                    return "business: boolean expected";
                            }
                            if (message.poBox != null && message.hasOwnProperty("poBox")) {
                                properties._poBox = 1;
                                if (typeof message.poBox !== "boolean")
                                    return "poBox: boolean expected";
                            }
                            if (message.multiFamily != null && message.hasOwnProperty("multiFamily")) {
                                properties._multiFamily = 1;
                                if (typeof message.multiFamily !== "boolean")
                                    return "multiFamily: boolean expected";
                            }
                            if (message.residential != null && message.hasOwnProperty("residential")) {
                                properties._residential = 1;
                                if (typeof message.residential !== "boolean")
                                    return "residential: boolean expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an AddressMetadata message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.AddressMetadata} AddressMetadata
                         */
                        AddressMetadata.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.AddressMetadata)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.AddressMetadata();
                            if (object.highrise != null)
                                message.highrise = Boolean(object.highrise);
                            if (object.business != null)
                                message.business = Boolean(object.business);
                            if (object.poBox != null)
                                message.poBox = Boolean(object.poBox);
                            if (object.multiFamily != null)
                                message.multiFamily = Boolean(object.multiFamily);
                            if (object.residential != null)
                                message.residential = Boolean(object.residential);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AddressMetadata message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {google.maps.addressvalidation.v1.AddressMetadata} message AddressMetadata
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AddressMetadata.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.highrise != null && message.hasOwnProperty("highrise")) {
                                object.highrise = message.highrise;
                                if (options.oneofs)
                                    object._highrise = "highrise";
                            }
                            if (message.business != null && message.hasOwnProperty("business")) {
                                object.business = message.business;
                                if (options.oneofs)
                                    object._business = "business";
                            }
                            if (message.poBox != null && message.hasOwnProperty("poBox")) {
                                object.poBox = message.poBox;
                                if (options.oneofs)
                                    object._poBox = "poBox";
                            }
                            if (message.multiFamily != null && message.hasOwnProperty("multiFamily")) {
                                object.multiFamily = message.multiFamily;
                                if (options.oneofs)
                                    object._multiFamily = "multiFamily";
                            }
                            if (message.residential != null && message.hasOwnProperty("residential")) {
                                object.residential = message.residential;
                                if (options.oneofs)
                                    object._residential = "residential";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this AddressMetadata to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AddressMetadata.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AddressMetadata
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.AddressMetadata
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AddressMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.AddressMetadata";
                        };
    
                        return AddressMetadata;
                    })();
    
                    v1.UspsAddress = (function() {
    
                        /**
                         * Properties of a UspsAddress.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IUspsAddress
                         * @property {string|null} [firstAddressLine] UspsAddress firstAddressLine
                         * @property {string|null} [firm] UspsAddress firm
                         * @property {string|null} [secondAddressLine] UspsAddress secondAddressLine
                         * @property {string|null} [urbanization] UspsAddress urbanization
                         * @property {string|null} [cityStateZipAddressLine] UspsAddress cityStateZipAddressLine
                         * @property {string|null} [city] UspsAddress city
                         * @property {string|null} [state] UspsAddress state
                         * @property {string|null} [zipCode] UspsAddress zipCode
                         * @property {string|null} [zipCodeExtension] UspsAddress zipCodeExtension
                         */
    
                        /**
                         * Constructs a new UspsAddress.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a UspsAddress.
                         * @implements IUspsAddress
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IUspsAddress=} [properties] Properties to set
                         */
                        function UspsAddress(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * UspsAddress firstAddressLine.
                         * @member {string} firstAddressLine
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.firstAddressLine = "";
    
                        /**
                         * UspsAddress firm.
                         * @member {string} firm
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.firm = "";
    
                        /**
                         * UspsAddress secondAddressLine.
                         * @member {string} secondAddressLine
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.secondAddressLine = "";
    
                        /**
                         * UspsAddress urbanization.
                         * @member {string} urbanization
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.urbanization = "";
    
                        /**
                         * UspsAddress cityStateZipAddressLine.
                         * @member {string} cityStateZipAddressLine
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.cityStateZipAddressLine = "";
    
                        /**
                         * UspsAddress city.
                         * @member {string} city
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.city = "";
    
                        /**
                         * UspsAddress state.
                         * @member {string} state
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.state = "";
    
                        /**
                         * UspsAddress zipCode.
                         * @member {string} zipCode
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.zipCode = "";
    
                        /**
                         * UspsAddress zipCodeExtension.
                         * @member {string} zipCodeExtension
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         */
                        UspsAddress.prototype.zipCodeExtension = "";
    
                        /**
                         * Creates a new UspsAddress instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsAddress=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.UspsAddress} UspsAddress instance
                         */
                        UspsAddress.create = function create(properties) {
                            return new UspsAddress(properties);
                        };
    
                        /**
                         * Encodes the specified UspsAddress message. Does not implicitly {@link google.maps.addressvalidation.v1.UspsAddress.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsAddress} message UspsAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UspsAddress.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.firstAddressLine != null && Object.hasOwnProperty.call(message, "firstAddressLine"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstAddressLine);
                            if (message.firm != null && Object.hasOwnProperty.call(message, "firm"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firm);
                            if (message.secondAddressLine != null && Object.hasOwnProperty.call(message, "secondAddressLine"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.secondAddressLine);
                            if (message.urbanization != null && Object.hasOwnProperty.call(message, "urbanization"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.urbanization);
                            if (message.cityStateZipAddressLine != null && Object.hasOwnProperty.call(message, "cityStateZipAddressLine"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.cityStateZipAddressLine);
                            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.city);
                            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.state);
                            if (message.zipCode != null && Object.hasOwnProperty.call(message, "zipCode"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.zipCode);
                            if (message.zipCodeExtension != null && Object.hasOwnProperty.call(message, "zipCodeExtension"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.zipCodeExtension);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified UspsAddress message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.UspsAddress.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsAddress} message UspsAddress message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UspsAddress.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a UspsAddress message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.UspsAddress} UspsAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UspsAddress.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.UspsAddress();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.firstAddressLine = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.firm = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.secondAddressLine = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.urbanization = reader.string();
                                        break;
                                    }
                                case 5: {
                                        message.cityStateZipAddressLine = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.city = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.state = reader.string();
                                        break;
                                    }
                                case 8: {
                                        message.zipCode = reader.string();
                                        break;
                                    }
                                case 9: {
                                        message.zipCodeExtension = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a UspsAddress message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.UspsAddress} UspsAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UspsAddress.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a UspsAddress message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UspsAddress.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.firstAddressLine != null && message.hasOwnProperty("firstAddressLine"))
                                if (!$util.isString(message.firstAddressLine))
                                    return "firstAddressLine: string expected";
                            if (message.firm != null && message.hasOwnProperty("firm"))
                                if (!$util.isString(message.firm))
                                    return "firm: string expected";
                            if (message.secondAddressLine != null && message.hasOwnProperty("secondAddressLine"))
                                if (!$util.isString(message.secondAddressLine))
                                    return "secondAddressLine: string expected";
                            if (message.urbanization != null && message.hasOwnProperty("urbanization"))
                                if (!$util.isString(message.urbanization))
                                    return "urbanization: string expected";
                            if (message.cityStateZipAddressLine != null && message.hasOwnProperty("cityStateZipAddressLine"))
                                if (!$util.isString(message.cityStateZipAddressLine))
                                    return "cityStateZipAddressLine: string expected";
                            if (message.city != null && message.hasOwnProperty("city"))
                                if (!$util.isString(message.city))
                                    return "city: string expected";
                            if (message.state != null && message.hasOwnProperty("state"))
                                if (!$util.isString(message.state))
                                    return "state: string expected";
                            if (message.zipCode != null && message.hasOwnProperty("zipCode"))
                                if (!$util.isString(message.zipCode))
                                    return "zipCode: string expected";
                            if (message.zipCodeExtension != null && message.hasOwnProperty("zipCodeExtension"))
                                if (!$util.isString(message.zipCodeExtension))
                                    return "zipCodeExtension: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a UspsAddress message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.UspsAddress} UspsAddress
                         */
                        UspsAddress.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.UspsAddress)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.UspsAddress();
                            if (object.firstAddressLine != null)
                                message.firstAddressLine = String(object.firstAddressLine);
                            if (object.firm != null)
                                message.firm = String(object.firm);
                            if (object.secondAddressLine != null)
                                message.secondAddressLine = String(object.secondAddressLine);
                            if (object.urbanization != null)
                                message.urbanization = String(object.urbanization);
                            if (object.cityStateZipAddressLine != null)
                                message.cityStateZipAddressLine = String(object.cityStateZipAddressLine);
                            if (object.city != null)
                                message.city = String(object.city);
                            if (object.state != null)
                                message.state = String(object.state);
                            if (object.zipCode != null)
                                message.zipCode = String(object.zipCode);
                            if (object.zipCodeExtension != null)
                                message.zipCodeExtension = String(object.zipCodeExtension);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a UspsAddress message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {google.maps.addressvalidation.v1.UspsAddress} message UspsAddress
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UspsAddress.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.firstAddressLine = "";
                                object.firm = "";
                                object.secondAddressLine = "";
                                object.urbanization = "";
                                object.cityStateZipAddressLine = "";
                                object.city = "";
                                object.state = "";
                                object.zipCode = "";
                                object.zipCodeExtension = "";
                            }
                            if (message.firstAddressLine != null && message.hasOwnProperty("firstAddressLine"))
                                object.firstAddressLine = message.firstAddressLine;
                            if (message.firm != null && message.hasOwnProperty("firm"))
                                object.firm = message.firm;
                            if (message.secondAddressLine != null && message.hasOwnProperty("secondAddressLine"))
                                object.secondAddressLine = message.secondAddressLine;
                            if (message.urbanization != null && message.hasOwnProperty("urbanization"))
                                object.urbanization = message.urbanization;
                            if (message.cityStateZipAddressLine != null && message.hasOwnProperty("cityStateZipAddressLine"))
                                object.cityStateZipAddressLine = message.cityStateZipAddressLine;
                            if (message.city != null && message.hasOwnProperty("city"))
                                object.city = message.city;
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = message.state;
                            if (message.zipCode != null && message.hasOwnProperty("zipCode"))
                                object.zipCode = message.zipCode;
                            if (message.zipCodeExtension != null && message.hasOwnProperty("zipCodeExtension"))
                                object.zipCodeExtension = message.zipCodeExtension;
                            return object;
                        };
    
                        /**
                         * Converts this UspsAddress to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UspsAddress.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for UspsAddress
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.UspsAddress
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        UspsAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.UspsAddress";
                        };
    
                        return UspsAddress;
                    })();
    
                    v1.UspsData = (function() {
    
                        /**
                         * Properties of a UspsData.
                         * @memberof google.maps.addressvalidation.v1
                         * @interface IUspsData
                         * @property {google.maps.addressvalidation.v1.IUspsAddress|null} [standardizedAddress] UspsData standardizedAddress
                         * @property {string|null} [deliveryPointCode] UspsData deliveryPointCode
                         * @property {string|null} [deliveryPointCheckDigit] UspsData deliveryPointCheckDigit
                         * @property {string|null} [dpvConfirmation] UspsData dpvConfirmation
                         * @property {string|null} [dpvFootnote] UspsData dpvFootnote
                         * @property {string|null} [dpvCmra] UspsData dpvCmra
                         * @property {string|null} [dpvVacant] UspsData dpvVacant
                         * @property {string|null} [dpvNoStat] UspsData dpvNoStat
                         * @property {string|null} [carrierRoute] UspsData carrierRoute
                         * @property {string|null} [carrierRouteIndicator] UspsData carrierRouteIndicator
                         * @property {boolean|null} [ewsNoMatch] UspsData ewsNoMatch
                         * @property {string|null} [postOfficeCity] UspsData postOfficeCity
                         * @property {string|null} [postOfficeState] UspsData postOfficeState
                         * @property {string|null} [abbreviatedCity] UspsData abbreviatedCity
                         * @property {string|null} [fipsCountyCode] UspsData fipsCountyCode
                         * @property {string|null} [county] UspsData county
                         * @property {string|null} [elotNumber] UspsData elotNumber
                         * @property {string|null} [elotFlag] UspsData elotFlag
                         * @property {string|null} [lacsLinkReturnCode] UspsData lacsLinkReturnCode
                         * @property {string|null} [lacsLinkIndicator] UspsData lacsLinkIndicator
                         * @property {boolean|null} [poBoxOnlyPostalCode] UspsData poBoxOnlyPostalCode
                         * @property {string|null} [suitelinkFootnote] UspsData suitelinkFootnote
                         * @property {string|null} [pmbDesignator] UspsData pmbDesignator
                         * @property {string|null} [pmbNumber] UspsData pmbNumber
                         * @property {string|null} [addressRecordType] UspsData addressRecordType
                         * @property {boolean|null} [defaultAddress] UspsData defaultAddress
                         * @property {string|null} [errorMessage] UspsData errorMessage
                         * @property {boolean|null} [cassProcessed] UspsData cassProcessed
                         */
    
                        /**
                         * Constructs a new UspsData.
                         * @memberof google.maps.addressvalidation.v1
                         * @classdesc Represents a UspsData.
                         * @implements IUspsData
                         * @constructor
                         * @param {google.maps.addressvalidation.v1.IUspsData=} [properties] Properties to set
                         */
                        function UspsData(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * UspsData standardizedAddress.
                         * @member {google.maps.addressvalidation.v1.IUspsAddress|null|undefined} standardizedAddress
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.standardizedAddress = null;
    
                        /**
                         * UspsData deliveryPointCode.
                         * @member {string} deliveryPointCode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.deliveryPointCode = "";
    
                        /**
                         * UspsData deliveryPointCheckDigit.
                         * @member {string} deliveryPointCheckDigit
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.deliveryPointCheckDigit = "";
    
                        /**
                         * UspsData dpvConfirmation.
                         * @member {string} dpvConfirmation
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.dpvConfirmation = "";
    
                        /**
                         * UspsData dpvFootnote.
                         * @member {string} dpvFootnote
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.dpvFootnote = "";
    
                        /**
                         * UspsData dpvCmra.
                         * @member {string} dpvCmra
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.dpvCmra = "";
    
                        /**
                         * UspsData dpvVacant.
                         * @member {string} dpvVacant
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.dpvVacant = "";
    
                        /**
                         * UspsData dpvNoStat.
                         * @member {string} dpvNoStat
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.dpvNoStat = "";
    
                        /**
                         * UspsData carrierRoute.
                         * @member {string} carrierRoute
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.carrierRoute = "";
    
                        /**
                         * UspsData carrierRouteIndicator.
                         * @member {string} carrierRouteIndicator
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.carrierRouteIndicator = "";
    
                        /**
                         * UspsData ewsNoMatch.
                         * @member {boolean} ewsNoMatch
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.ewsNoMatch = false;
    
                        /**
                         * UspsData postOfficeCity.
                         * @member {string} postOfficeCity
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.postOfficeCity = "";
    
                        /**
                         * UspsData postOfficeState.
                         * @member {string} postOfficeState
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.postOfficeState = "";
    
                        /**
                         * UspsData abbreviatedCity.
                         * @member {string} abbreviatedCity
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.abbreviatedCity = "";
    
                        /**
                         * UspsData fipsCountyCode.
                         * @member {string} fipsCountyCode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.fipsCountyCode = "";
    
                        /**
                         * UspsData county.
                         * @member {string} county
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.county = "";
    
                        /**
                         * UspsData elotNumber.
                         * @member {string} elotNumber
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.elotNumber = "";
    
                        /**
                         * UspsData elotFlag.
                         * @member {string} elotFlag
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.elotFlag = "";
    
                        /**
                         * UspsData lacsLinkReturnCode.
                         * @member {string} lacsLinkReturnCode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.lacsLinkReturnCode = "";
    
                        /**
                         * UspsData lacsLinkIndicator.
                         * @member {string} lacsLinkIndicator
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.lacsLinkIndicator = "";
    
                        /**
                         * UspsData poBoxOnlyPostalCode.
                         * @member {boolean} poBoxOnlyPostalCode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.poBoxOnlyPostalCode = false;
    
                        /**
                         * UspsData suitelinkFootnote.
                         * @member {string} suitelinkFootnote
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.suitelinkFootnote = "";
    
                        /**
                         * UspsData pmbDesignator.
                         * @member {string} pmbDesignator
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.pmbDesignator = "";
    
                        /**
                         * UspsData pmbNumber.
                         * @member {string} pmbNumber
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.pmbNumber = "";
    
                        /**
                         * UspsData addressRecordType.
                         * @member {string} addressRecordType
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.addressRecordType = "";
    
                        /**
                         * UspsData defaultAddress.
                         * @member {boolean} defaultAddress
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.defaultAddress = false;
    
                        /**
                         * UspsData errorMessage.
                         * @member {string} errorMessage
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.errorMessage = "";
    
                        /**
                         * UspsData cassProcessed.
                         * @member {boolean} cassProcessed
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         */
                        UspsData.prototype.cassProcessed = false;
    
                        /**
                         * Creates a new UspsData instance using the specified properties.
                         * @function create
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsData=} [properties] Properties to set
                         * @returns {google.maps.addressvalidation.v1.UspsData} UspsData instance
                         */
                        UspsData.create = function create(properties) {
                            return new UspsData(properties);
                        };
    
                        /**
                         * Encodes the specified UspsData message. Does not implicitly {@link google.maps.addressvalidation.v1.UspsData.verify|verify} messages.
                         * @function encode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsData} message UspsData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UspsData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.standardizedAddress != null && Object.hasOwnProperty.call(message, "standardizedAddress"))
                                $root.google.maps.addressvalidation.v1.UspsAddress.encode(message.standardizedAddress, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.deliveryPointCode != null && Object.hasOwnProperty.call(message, "deliveryPointCode"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deliveryPointCode);
                            if (message.deliveryPointCheckDigit != null && Object.hasOwnProperty.call(message, "deliveryPointCheckDigit"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deliveryPointCheckDigit);
                            if (message.dpvConfirmation != null && Object.hasOwnProperty.call(message, "dpvConfirmation"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.dpvConfirmation);
                            if (message.dpvFootnote != null && Object.hasOwnProperty.call(message, "dpvFootnote"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.dpvFootnote);
                            if (message.dpvCmra != null && Object.hasOwnProperty.call(message, "dpvCmra"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.dpvCmra);
                            if (message.dpvVacant != null && Object.hasOwnProperty.call(message, "dpvVacant"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.dpvVacant);
                            if (message.dpvNoStat != null && Object.hasOwnProperty.call(message, "dpvNoStat"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.dpvNoStat);
                            if (message.carrierRoute != null && Object.hasOwnProperty.call(message, "carrierRoute"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.carrierRoute);
                            if (message.carrierRouteIndicator != null && Object.hasOwnProperty.call(message, "carrierRouteIndicator"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.carrierRouteIndicator);
                            if (message.ewsNoMatch != null && Object.hasOwnProperty.call(message, "ewsNoMatch"))
                                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.ewsNoMatch);
                            if (message.postOfficeCity != null && Object.hasOwnProperty.call(message, "postOfficeCity"))
                                writer.uint32(/* id 12, wireType 2 =*/98).string(message.postOfficeCity);
                            if (message.postOfficeState != null && Object.hasOwnProperty.call(message, "postOfficeState"))
                                writer.uint32(/* id 13, wireType 2 =*/106).string(message.postOfficeState);
                            if (message.abbreviatedCity != null && Object.hasOwnProperty.call(message, "abbreviatedCity"))
                                writer.uint32(/* id 14, wireType 2 =*/114).string(message.abbreviatedCity);
                            if (message.fipsCountyCode != null && Object.hasOwnProperty.call(message, "fipsCountyCode"))
                                writer.uint32(/* id 15, wireType 2 =*/122).string(message.fipsCountyCode);
                            if (message.county != null && Object.hasOwnProperty.call(message, "county"))
                                writer.uint32(/* id 16, wireType 2 =*/130).string(message.county);
                            if (message.elotNumber != null && Object.hasOwnProperty.call(message, "elotNumber"))
                                writer.uint32(/* id 17, wireType 2 =*/138).string(message.elotNumber);
                            if (message.elotFlag != null && Object.hasOwnProperty.call(message, "elotFlag"))
                                writer.uint32(/* id 18, wireType 2 =*/146).string(message.elotFlag);
                            if (message.lacsLinkReturnCode != null && Object.hasOwnProperty.call(message, "lacsLinkReturnCode"))
                                writer.uint32(/* id 19, wireType 2 =*/154).string(message.lacsLinkReturnCode);
                            if (message.lacsLinkIndicator != null && Object.hasOwnProperty.call(message, "lacsLinkIndicator"))
                                writer.uint32(/* id 20, wireType 2 =*/162).string(message.lacsLinkIndicator);
                            if (message.poBoxOnlyPostalCode != null && Object.hasOwnProperty.call(message, "poBoxOnlyPostalCode"))
                                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.poBoxOnlyPostalCode);
                            if (message.suitelinkFootnote != null && Object.hasOwnProperty.call(message, "suitelinkFootnote"))
                                writer.uint32(/* id 22, wireType 2 =*/178).string(message.suitelinkFootnote);
                            if (message.pmbDesignator != null && Object.hasOwnProperty.call(message, "pmbDesignator"))
                                writer.uint32(/* id 23, wireType 2 =*/186).string(message.pmbDesignator);
                            if (message.pmbNumber != null && Object.hasOwnProperty.call(message, "pmbNumber"))
                                writer.uint32(/* id 24, wireType 2 =*/194).string(message.pmbNumber);
                            if (message.addressRecordType != null && Object.hasOwnProperty.call(message, "addressRecordType"))
                                writer.uint32(/* id 25, wireType 2 =*/202).string(message.addressRecordType);
                            if (message.defaultAddress != null && Object.hasOwnProperty.call(message, "defaultAddress"))
                                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.defaultAddress);
                            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                                writer.uint32(/* id 27, wireType 2 =*/218).string(message.errorMessage);
                            if (message.cassProcessed != null && Object.hasOwnProperty.call(message, "cassProcessed"))
                                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.cassProcessed);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified UspsData message, length delimited. Does not implicitly {@link google.maps.addressvalidation.v1.UspsData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {google.maps.addressvalidation.v1.IUspsData} message UspsData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UspsData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a UspsData message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.maps.addressvalidation.v1.UspsData} UspsData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UspsData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.maps.addressvalidation.v1.UspsData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.standardizedAddress = $root.google.maps.addressvalidation.v1.UspsAddress.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.deliveryPointCode = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.deliveryPointCheckDigit = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.dpvConfirmation = reader.string();
                                        break;
                                    }
                                case 5: {
                                        message.dpvFootnote = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.dpvCmra = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.dpvVacant = reader.string();
                                        break;
                                    }
                                case 8: {
                                        message.dpvNoStat = reader.string();
                                        break;
                                    }
                                case 9: {
                                        message.carrierRoute = reader.string();
                                        break;
                                    }
                                case 10: {
                                        message.carrierRouteIndicator = reader.string();
                                        break;
                                    }
                                case 11: {
                                        message.ewsNoMatch = reader.bool();
                                        break;
                                    }
                                case 12: {
                                        message.postOfficeCity = reader.string();
                                        break;
                                    }
                                case 13: {
                                        message.postOfficeState = reader.string();
                                        break;
                                    }
                                case 14: {
                                        message.abbreviatedCity = reader.string();
                                        break;
                                    }
                                case 15: {
                                        message.fipsCountyCode = reader.string();
                                        break;
                                    }
                                case 16: {
                                        message.county = reader.string();
                                        break;
                                    }
                                case 17: {
                                        message.elotNumber = reader.string();
                                        break;
                                    }
                                case 18: {
                                        message.elotFlag = reader.string();
                                        break;
                                    }
                                case 19: {
                                        message.lacsLinkReturnCode = reader.string();
                                        break;
                                    }
                                case 20: {
                                        message.lacsLinkIndicator = reader.string();
                                        break;
                                    }
                                case 21: {
                                        message.poBoxOnlyPostalCode = reader.bool();
                                        break;
                                    }
                                case 22: {
                                        message.suitelinkFootnote = reader.string();
                                        break;
                                    }
                                case 23: {
                                        message.pmbDesignator = reader.string();
                                        break;
                                    }
                                case 24: {
                                        message.pmbNumber = reader.string();
                                        break;
                                    }
                                case 25: {
                                        message.addressRecordType = reader.string();
                                        break;
                                    }
                                case 26: {
                                        message.defaultAddress = reader.bool();
                                        break;
                                    }
                                case 27: {
                                        message.errorMessage = reader.string();
                                        break;
                                    }
                                case 28: {
                                        message.cassProcessed = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a UspsData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.maps.addressvalidation.v1.UspsData} UspsData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UspsData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a UspsData message.
                         * @function verify
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UspsData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.standardizedAddress != null && message.hasOwnProperty("standardizedAddress")) {
                                var error = $root.google.maps.addressvalidation.v1.UspsAddress.verify(message.standardizedAddress);
                                if (error)
                                    return "standardizedAddress." + error;
                            }
                            if (message.deliveryPointCode != null && message.hasOwnProperty("deliveryPointCode"))
                                if (!$util.isString(message.deliveryPointCode))
                                    return "deliveryPointCode: string expected";
                            if (message.deliveryPointCheckDigit != null && message.hasOwnProperty("deliveryPointCheckDigit"))
                                if (!$util.isString(message.deliveryPointCheckDigit))
                                    return "deliveryPointCheckDigit: string expected";
                            if (message.dpvConfirmation != null && message.hasOwnProperty("dpvConfirmation"))
                                if (!$util.isString(message.dpvConfirmation))
                                    return "dpvConfirmation: string expected";
                            if (message.dpvFootnote != null && message.hasOwnProperty("dpvFootnote"))
                                if (!$util.isString(message.dpvFootnote))
                                    return "dpvFootnote: string expected";
                            if (message.dpvCmra != null && message.hasOwnProperty("dpvCmra"))
                                if (!$util.isString(message.dpvCmra))
                                    return "dpvCmra: string expected";
                            if (message.dpvVacant != null && message.hasOwnProperty("dpvVacant"))
                                if (!$util.isString(message.dpvVacant))
                                    return "dpvVacant: string expected";
                            if (message.dpvNoStat != null && message.hasOwnProperty("dpvNoStat"))
                                if (!$util.isString(message.dpvNoStat))
                                    return "dpvNoStat: string expected";
                            if (message.carrierRoute != null && message.hasOwnProperty("carrierRoute"))
                                if (!$util.isString(message.carrierRoute))
                                    return "carrierRoute: string expected";
                            if (message.carrierRouteIndicator != null && message.hasOwnProperty("carrierRouteIndicator"))
                                if (!$util.isString(message.carrierRouteIndicator))
                                    return "carrierRouteIndicator: string expected";
                            if (message.ewsNoMatch != null && message.hasOwnProperty("ewsNoMatch"))
                                if (typeof message.ewsNoMatch !== "boolean")
                                    return "ewsNoMatch: boolean expected";
                            if (message.postOfficeCity != null && message.hasOwnProperty("postOfficeCity"))
                                if (!$util.isString(message.postOfficeCity))
                                    return "postOfficeCity: string expected";
                            if (message.postOfficeState != null && message.hasOwnProperty("postOfficeState"))
                                if (!$util.isString(message.postOfficeState))
                                    return "postOfficeState: string expected";
                            if (message.abbreviatedCity != null && message.hasOwnProperty("abbreviatedCity"))
                                if (!$util.isString(message.abbreviatedCity))
                                    return "abbreviatedCity: string expected";
                            if (message.fipsCountyCode != null && message.hasOwnProperty("fipsCountyCode"))
                                if (!$util.isString(message.fipsCountyCode))
                                    return "fipsCountyCode: string expected";
                            if (message.county != null && message.hasOwnProperty("county"))
                                if (!$util.isString(message.county))
                                    return "county: string expected";
                            if (message.elotNumber != null && message.hasOwnProperty("elotNumber"))
                                if (!$util.isString(message.elotNumber))
                                    return "elotNumber: string expected";
                            if (message.elotFlag != null && message.hasOwnProperty("elotFlag"))
                                if (!$util.isString(message.elotFlag))
                                    return "elotFlag: string expected";
                            if (message.lacsLinkReturnCode != null && message.hasOwnProperty("lacsLinkReturnCode"))
                                if (!$util.isString(message.lacsLinkReturnCode))
                                    return "lacsLinkReturnCode: string expected";
                            if (message.lacsLinkIndicator != null && message.hasOwnProperty("lacsLinkIndicator"))
                                if (!$util.isString(message.lacsLinkIndicator))
                                    return "lacsLinkIndicator: string expected";
                            if (message.poBoxOnlyPostalCode != null && message.hasOwnProperty("poBoxOnlyPostalCode"))
                                if (typeof message.poBoxOnlyPostalCode !== "boolean")
                                    return "poBoxOnlyPostalCode: boolean expected";
                            if (message.suitelinkFootnote != null && message.hasOwnProperty("suitelinkFootnote"))
                                if (!$util.isString(message.suitelinkFootnote))
                                    return "suitelinkFootnote: string expected";
                            if (message.pmbDesignator != null && message.hasOwnProperty("pmbDesignator"))
                                if (!$util.isString(message.pmbDesignator))
                                    return "pmbDesignator: string expected";
                            if (message.pmbNumber != null && message.hasOwnProperty("pmbNumber"))
                                if (!$util.isString(message.pmbNumber))
                                    return "pmbNumber: string expected";
                            if (message.addressRecordType != null && message.hasOwnProperty("addressRecordType"))
                                if (!$util.isString(message.addressRecordType))
                                    return "addressRecordType: string expected";
                            if (message.defaultAddress != null && message.hasOwnProperty("defaultAddress"))
                                if (typeof message.defaultAddress !== "boolean")
                                    return "defaultAddress: boolean expected";
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                if (!$util.isString(message.errorMessage))
                                    return "errorMessage: string expected";
                            if (message.cassProcessed != null && message.hasOwnProperty("cassProcessed"))
                                if (typeof message.cassProcessed !== "boolean")
                                    return "cassProcessed: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a UspsData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.maps.addressvalidation.v1.UspsData} UspsData
                         */
                        UspsData.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.maps.addressvalidation.v1.UspsData)
                                return object;
                            var message = new $root.google.maps.addressvalidation.v1.UspsData();
                            if (object.standardizedAddress != null) {
                                if (typeof object.standardizedAddress !== "object")
                                    throw TypeError(".google.maps.addressvalidation.v1.UspsData.standardizedAddress: object expected");
                                message.standardizedAddress = $root.google.maps.addressvalidation.v1.UspsAddress.fromObject(object.standardizedAddress);
                            }
                            if (object.deliveryPointCode != null)
                                message.deliveryPointCode = String(object.deliveryPointCode);
                            if (object.deliveryPointCheckDigit != null)
                                message.deliveryPointCheckDigit = String(object.deliveryPointCheckDigit);
                            if (object.dpvConfirmation != null)
                                message.dpvConfirmation = String(object.dpvConfirmation);
                            if (object.dpvFootnote != null)
                                message.dpvFootnote = String(object.dpvFootnote);
                            if (object.dpvCmra != null)
                                message.dpvCmra = String(object.dpvCmra);
                            if (object.dpvVacant != null)
                                message.dpvVacant = String(object.dpvVacant);
                            if (object.dpvNoStat != null)
                                message.dpvNoStat = String(object.dpvNoStat);
                            if (object.carrierRoute != null)
                                message.carrierRoute = String(object.carrierRoute);
                            if (object.carrierRouteIndicator != null)
                                message.carrierRouteIndicator = String(object.carrierRouteIndicator);
                            if (object.ewsNoMatch != null)
                                message.ewsNoMatch = Boolean(object.ewsNoMatch);
                            if (object.postOfficeCity != null)
                                message.postOfficeCity = String(object.postOfficeCity);
                            if (object.postOfficeState != null)
                                message.postOfficeState = String(object.postOfficeState);
                            if (object.abbreviatedCity != null)
                                message.abbreviatedCity = String(object.abbreviatedCity);
                            if (object.fipsCountyCode != null)
                                message.fipsCountyCode = String(object.fipsCountyCode);
                            if (object.county != null)
                                message.county = String(object.county);
                            if (object.elotNumber != null)
                                message.elotNumber = String(object.elotNumber);
                            if (object.elotFlag != null)
                                message.elotFlag = String(object.elotFlag);
                            if (object.lacsLinkReturnCode != null)
                                message.lacsLinkReturnCode = String(object.lacsLinkReturnCode);
                            if (object.lacsLinkIndicator != null)
                                message.lacsLinkIndicator = String(object.lacsLinkIndicator);
                            if (object.poBoxOnlyPostalCode != null)
                                message.poBoxOnlyPostalCode = Boolean(object.poBoxOnlyPostalCode);
                            if (object.suitelinkFootnote != null)
                                message.suitelinkFootnote = String(object.suitelinkFootnote);
                            if (object.pmbDesignator != null)
                                message.pmbDesignator = String(object.pmbDesignator);
                            if (object.pmbNumber != null)
                                message.pmbNumber = String(object.pmbNumber);
                            if (object.addressRecordType != null)
                                message.addressRecordType = String(object.addressRecordType);
                            if (object.defaultAddress != null)
                                message.defaultAddress = Boolean(object.defaultAddress);
                            if (object.errorMessage != null)
                                message.errorMessage = String(object.errorMessage);
                            if (object.cassProcessed != null)
                                message.cassProcessed = Boolean(object.cassProcessed);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a UspsData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {google.maps.addressvalidation.v1.UspsData} message UspsData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UspsData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.standardizedAddress = null;
                                object.deliveryPointCode = "";
                                object.deliveryPointCheckDigit = "";
                                object.dpvConfirmation = "";
                                object.dpvFootnote = "";
                                object.dpvCmra = "";
                                object.dpvVacant = "";
                                object.dpvNoStat = "";
                                object.carrierRoute = "";
                                object.carrierRouteIndicator = "";
                                object.ewsNoMatch = false;
                                object.postOfficeCity = "";
                                object.postOfficeState = "";
                                object.abbreviatedCity = "";
                                object.fipsCountyCode = "";
                                object.county = "";
                                object.elotNumber = "";
                                object.elotFlag = "";
                                object.lacsLinkReturnCode = "";
                                object.lacsLinkIndicator = "";
                                object.poBoxOnlyPostalCode = false;
                                object.suitelinkFootnote = "";
                                object.pmbDesignator = "";
                                object.pmbNumber = "";
                                object.addressRecordType = "";
                                object.defaultAddress = false;
                                object.errorMessage = "";
                                object.cassProcessed = false;
                            }
                            if (message.standardizedAddress != null && message.hasOwnProperty("standardizedAddress"))
                                object.standardizedAddress = $root.google.maps.addressvalidation.v1.UspsAddress.toObject(message.standardizedAddress, options);
                            if (message.deliveryPointCode != null && message.hasOwnProperty("deliveryPointCode"))
                                object.deliveryPointCode = message.deliveryPointCode;
                            if (message.deliveryPointCheckDigit != null && message.hasOwnProperty("deliveryPointCheckDigit"))
                                object.deliveryPointCheckDigit = message.deliveryPointCheckDigit;
                            if (message.dpvConfirmation != null && message.hasOwnProperty("dpvConfirmation"))
                                object.dpvConfirmation = message.dpvConfirmation;
                            if (message.dpvFootnote != null && message.hasOwnProperty("dpvFootnote"))
                                object.dpvFootnote = message.dpvFootnote;
                            if (message.dpvCmra != null && message.hasOwnProperty("dpvCmra"))
                                object.dpvCmra = message.dpvCmra;
                            if (message.dpvVacant != null && message.hasOwnProperty("dpvVacant"))
                                object.dpvVacant = message.dpvVacant;
                            if (message.dpvNoStat != null && message.hasOwnProperty("dpvNoStat"))
                                object.dpvNoStat = message.dpvNoStat;
                            if (message.carrierRoute != null && message.hasOwnProperty("carrierRoute"))
                                object.carrierRoute = message.carrierRoute;
                            if (message.carrierRouteIndicator != null && message.hasOwnProperty("carrierRouteIndicator"))
                                object.carrierRouteIndicator = message.carrierRouteIndicator;
                            if (message.ewsNoMatch != null && message.hasOwnProperty("ewsNoMatch"))
                                object.ewsNoMatch = message.ewsNoMatch;
                            if (message.postOfficeCity != null && message.hasOwnProperty("postOfficeCity"))
                                object.postOfficeCity = message.postOfficeCity;
                            if (message.postOfficeState != null && message.hasOwnProperty("postOfficeState"))
                                object.postOfficeState = message.postOfficeState;
                            if (message.abbreviatedCity != null && message.hasOwnProperty("abbreviatedCity"))
                                object.abbreviatedCity = message.abbreviatedCity;
                            if (message.fipsCountyCode != null && message.hasOwnProperty("fipsCountyCode"))
                                object.fipsCountyCode = message.fipsCountyCode;
                            if (message.county != null && message.hasOwnProperty("county"))
                                object.county = message.county;
                            if (message.elotNumber != null && message.hasOwnProperty("elotNumber"))
                                object.elotNumber = message.elotNumber;
                            if (message.elotFlag != null && message.hasOwnProperty("elotFlag"))
                                object.elotFlag = message.elotFlag;
                            if (message.lacsLinkReturnCode != null && message.hasOwnProperty("lacsLinkReturnCode"))
                                object.lacsLinkReturnCode = message.lacsLinkReturnCode;
                            if (message.lacsLinkIndicator != null && message.hasOwnProperty("lacsLinkIndicator"))
                                object.lacsLinkIndicator = message.lacsLinkIndicator;
                            if (message.poBoxOnlyPostalCode != null && message.hasOwnProperty("poBoxOnlyPostalCode"))
                                object.poBoxOnlyPostalCode = message.poBoxOnlyPostalCode;
                            if (message.suitelinkFootnote != null && message.hasOwnProperty("suitelinkFootnote"))
                                object.suitelinkFootnote = message.suitelinkFootnote;
                            if (message.pmbDesignator != null && message.hasOwnProperty("pmbDesignator"))
                                object.pmbDesignator = message.pmbDesignator;
                            if (message.pmbNumber != null && message.hasOwnProperty("pmbNumber"))
                                object.pmbNumber = message.pmbNumber;
                            if (message.addressRecordType != null && message.hasOwnProperty("addressRecordType"))
                                object.addressRecordType = message.addressRecordType;
                            if (message.defaultAddress != null && message.hasOwnProperty("defaultAddress"))
                                object.defaultAddress = message.defaultAddress;
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                object.errorMessage = message.errorMessage;
                            if (message.cassProcessed != null && message.hasOwnProperty("cassProcessed"))
                                object.cassProcessed = message.cassProcessed;
                            return object;
                        };
    
                        /**
                         * Converts this UspsData to JSON.
                         * @function toJSON
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UspsData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for UspsData
                         * @function getTypeUrl
                         * @memberof google.maps.addressvalidation.v1.UspsData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        UspsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.maps.addressvalidation.v1.UspsData";
                        };
    
                        return UspsData;
                    })();
    
                    return v1;
                })();
    
                return addressvalidation;
            })();
    
            return maps;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            /**
             * FieldBehavior enum.
             * @name google.api.FieldBehavior
             * @enum {number}
             * @property {number} FIELD_BEHAVIOR_UNSPECIFIED=0 FIELD_BEHAVIOR_UNSPECIFIED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REQUIRED=2 REQUIRED value
             * @property {number} OUTPUT_ONLY=3 OUTPUT_ONLY value
             * @property {number} INPUT_ONLY=4 INPUT_ONLY value
             * @property {number} IMMUTABLE=5 IMMUTABLE value
             * @property {number} UNORDERED_LIST=6 UNORDERED_LIST value
             * @property {number} NON_EMPTY_DEFAULT=7 NON_EMPTY_DEFAULT value
             */
            api.FieldBehavior = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIELD_BEHAVIOR_UNSPECIFIED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REQUIRED"] = 2;
                values[valuesById[3] = "OUTPUT_ONLY"] = 3;
                values[valuesById[4] = "INPUT_ONLY"] = 4;
                values[valuesById[5] = "IMMUTABLE"] = 5;
                values[valuesById[6] = "UNORDERED_LIST"] = 6;
                values[valuesById[7] = "NON_EMPTY_DEFAULT"] = 7;
                return values;
            })();
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && Object.hasOwnProperty.call(message, "fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.rules && message.rules.length))
                                    message.rules = [];
                                message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                message.fullyDecodeReservedExpansion = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Http
                 * @function getTypeUrl
                 * @memberof google.api.Http
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Http.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.Http";
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string|null|undefined} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = null;
    
                /**
                 * HttpRule put.
                 * @member {string|null|undefined} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = null;
    
                /**
                 * HttpRule post.
                 * @member {string|null|undefined} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = null;
    
                /**
                 * HttpRule delete.
                 * @member {string|null|undefined} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = null;
    
                /**
                 * HttpRule patch.
                 * @member {string|null|undefined} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = null;
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && Object.hasOwnProperty.call(message, "responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.selector = reader.string();
                                break;
                            }
                        case 2: {
                                message.get = reader.string();
                                break;
                            }
                        case 3: {
                                message.put = reader.string();
                                break;
                            }
                        case 4: {
                                message.post = reader.string();
                                break;
                            }
                        case 5: {
                                message["delete"] = reader.string();
                                break;
                            }
                        case 6: {
                                message.patch = reader.string();
                                break;
                            }
                        case 8: {
                                message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.body = reader.string();
                                break;
                            }
                        case 12: {
                                message.responseBody = reader.string();
                                break;
                            }
                        case 11: {
                                if (!(message.additionalBindings && message.additionalBindings.length))
                                    message.additionalBindings = [];
                                message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for HttpRule
                 * @function getTypeUrl
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                HttpRule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.HttpRule";
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.kind = reader.string();
                                break;
                            }
                        case 2: {
                                message.path = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CustomHttpPattern
                 * @function getTypeUrl
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CustomHttpPattern.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CustomHttpPattern";
                };
    
                return CustomHttpPattern;
            })();
    
            return api;
        })();
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 * @property {string|null} [edition] FileDescriptorProto edition
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * FileDescriptorProto edition.
                 * @member {string} edition
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.edition = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    if (message.edition != null && Object.hasOwnProperty.call(message, "edition"))
                        writer.uint32(/* id 13, wireType 2 =*/106).string(message.edition);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message["package"] = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                break;
                            }
                        case 10: {
                                if (!(message.publicDependency && message.publicDependency.length))
                                    message.publicDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.publicDependency.push(reader.int32());
                                } else
                                    message.publicDependency.push(reader.int32());
                                break;
                            }
                        case 11: {
                                if (!(message.weakDependency && message.weakDependency.length))
                                    message.weakDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.weakDependency.push(reader.int32());
                                } else
                                    message.weakDependency.push(reader.int32());
                                break;
                            }
                        case 4: {
                                if (!(message.messageType && message.messageType.length))
                                    message.messageType = [];
                                message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 12: {
                                message.syntax = reader.string();
                                break;
                            }
                        case 13: {
                                message.edition = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    if (message.edition != null && message.hasOwnProperty("edition"))
                        if (!$util.isString(message.edition))
                            return "edition: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    if (object.edition != null)
                        message.edition = String(object.edition);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                        object.edition = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    if (message.edition != null && message.hasOwnProperty("edition"))
                        object.edition = message.edition;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                if (!(message.nestedType && message.nestedType.length))
                                    message.nestedType = [];
                                message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.extensionRange && message.extensionRange.length))
                                    message.extensionRange = [];
                                message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                if (!(message.oneofDecl && message.oneofDecl.length))
                                    message.oneofDecl = [];
                                message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                if (!(message.reservedRange && message.reservedRange.length))
                                    message.reservedRange = [];
                                message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 10: {
                                if (!(message.reservedName && message.reservedName.length))
                                    message.reservedName = [];
                                message.reservedName.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * ExtensionRange options.
                     * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.options = null;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                            $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.options != null && message.hasOwnProperty("options")) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                            if (error)
                                return "options." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        if (object.options != null) {
                            if (typeof object.options !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                            message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                            object.options = null;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.options != null && message.hasOwnProperty("options"))
                            object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.ExtensionRangeOptions = (function() {
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @interface IExtensionRangeOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an ExtensionRangeOptions.
                 * @implements IExtensionRangeOptions
                 * @constructor
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 */
                function ExtensionRangeOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ExtensionRangeOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new ExtensionRangeOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
                 */
                ExtensionRangeOptions.create = function create(properties) {
                    return new ExtensionRangeOptions(properties);
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ExtensionRangeOptions message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRangeOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 */
                ExtensionRangeOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                        return object;
                    var message = new $root.google.protobuf.ExtensionRangeOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRangeOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ExtensionRangeOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ExtensionRangeOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRangeOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ExtensionRangeOptions";
                };
    
                return ExtensionRangeOptions;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 * @property {boolean|null} [proto3Optional] FieldDescriptorProto proto3Optional
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * FieldDescriptorProto proto3Optional.
                 * @member {boolean} proto3Optional
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.proto3Optional = false;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    if (message.proto3Optional != null && Object.hasOwnProperty.call(message, "proto3Optional"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3Optional);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.number = reader.int32();
                                break;
                            }
                        case 4: {
                                message.label = reader.int32();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
                                break;
                            }
                        case 6: {
                                message.typeName = reader.string();
                                break;
                            }
                        case 2: {
                                message.extendee = reader.string();
                                break;
                            }
                        case 7: {
                                message.defaultValue = reader.string();
                                break;
                            }
                        case 9: {
                                message.oneofIndex = reader.int32();
                                break;
                            }
                        case 10: {
                                message.jsonName = reader.string();
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 17: {
                                message.proto3Optional = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        if (typeof message.proto3Optional !== "boolean")
                            return "proto3Optional: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    if (object.proto3Optional != null)
                        message.proto3Optional = Boolean(object.proto3Optional);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                        object.proto3Optional = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        object.proto3Optional = message.proto3Optional;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * EnumDescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                if (!(message.reservedRange && message.reservedRange.length))
                                    message.reservedRange = [];
                                message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.reservedName && message.reservedName.length))
                                    message.reservedName = [];
                                message.reservedName.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.value = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                EnumDescriptorProto.EnumReservedRange = (function() {
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @interface IEnumReservedRange
                     * @property {number|null} [start] EnumReservedRange start
                     * @property {number|null} [end] EnumReservedRange end
                     */
    
                    /**
                     * Constructs a new EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @classdesc Represents an EnumReservedRange.
                     * @implements IEnumReservedRange
                     * @constructor
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     */
                    function EnumReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EnumReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.start = 0;
    
                    /**
                     * EnumReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new EnumReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                     */
                    EnumReservedRange.create = function create(properties) {
                        return new EnumReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EnumReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnumReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     */
                    EnumReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                            return object;
                        var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this EnumReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for EnumReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    EnumReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto.EnumReservedRange";
                    };
    
                    return EnumReservedRange;
                })();
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.number = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.inputType = reader.string();
                                break;
                            }
                        case 3: {
                                message.outputType = reader.string();
                                break;
                            }
                        case 4: {
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.clientStreaming = reader.bool();
                                break;
                            }
                        case 6: {
                                message.serverStreaming = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
                 * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
                 * @property {string|null} [phpNamespace] FileOptions phpNamespace
                 * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
                 * @property {string|null} [rubyPackage] FileOptions rubyPackage
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions phpGenericServices.
                 * @member {boolean} phpGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = true;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions swiftPrefix.
                 * @member {string} swiftPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.swiftPrefix = "";
    
                /**
                 * FileOptions phpClassPrefix.
                 * @member {string} phpClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpClassPrefix = "";
    
                /**
                 * FileOptions phpNamespace.
                 * @member {string} phpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpNamespace = "";
    
                /**
                 * FileOptions phpMetadataNamespace.
                 * @member {string} phpMetadataNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpMetadataNamespace = "";
    
                /**
                 * FileOptions rubyPackage.
                 * @member {string} rubyPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.rubyPackage = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix != null && Object.hasOwnProperty.call(message, "swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.phpClassPrefix != null && Object.hasOwnProperty.call(message, "phpClassPrefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                    if (message.phpNamespace != null && Object.hasOwnProperty.call(message, "phpNamespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                    if (message.phpGenericServices != null && Object.hasOwnProperty.call(message, "phpGenericServices"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                    if (message.phpMetadataNamespace != null && Object.hasOwnProperty.call(message, "phpMetadataNamespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                    if (message.rubyPackage != null && Object.hasOwnProperty.call(message, "rubyPackage"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.javaPackage = reader.string();
                                break;
                            }
                        case 8: {
                                message.javaOuterClassname = reader.string();
                                break;
                            }
                        case 10: {
                                message.javaMultipleFiles = reader.bool();
                                break;
                            }
                        case 20: {
                                message.javaGenerateEqualsAndHash = reader.bool();
                                break;
                            }
                        case 27: {
                                message.javaStringCheckUtf8 = reader.bool();
                                break;
                            }
                        case 9: {
                                message.optimizeFor = reader.int32();
                                break;
                            }
                        case 11: {
                                message.goPackage = reader.string();
                                break;
                            }
                        case 16: {
                                message.ccGenericServices = reader.bool();
                                break;
                            }
                        case 17: {
                                message.javaGenericServices = reader.bool();
                                break;
                            }
                        case 18: {
                                message.pyGenericServices = reader.bool();
                                break;
                            }
                        case 42: {
                                message.phpGenericServices = reader.bool();
                                break;
                            }
                        case 23: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 31: {
                                message.ccEnableArenas = reader.bool();
                                break;
                            }
                        case 36: {
                                message.objcClassPrefix = reader.string();
                                break;
                            }
                        case 37: {
                                message.csharpNamespace = reader.string();
                                break;
                            }
                        case 39: {
                                message.swiftPrefix = reader.string();
                                break;
                            }
                        case 40: {
                                message.phpClassPrefix = reader.string();
                                break;
                            }
                        case 41: {
                                message.phpNamespace = reader.string();
                                break;
                            }
                        case 44: {
                                message.phpMetadataNamespace = reader.string();
                                break;
                            }
                        case 45: {
                                message.rubyPackage = reader.string();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        if (typeof message.phpGenericServices !== "boolean")
                            return "phpGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        if (!$util.isString(message.swiftPrefix))
                            return "swiftPrefix: string expected";
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        if (!$util.isString(message.phpClassPrefix))
                            return "phpClassPrefix: string expected";
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        if (!$util.isString(message.phpNamespace))
                            return "phpNamespace: string expected";
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        if (!$util.isString(message.phpMetadataNamespace))
                            return "phpMetadataNamespace: string expected";
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        if (!$util.isString(message.rubyPackage))
                            return "rubyPackage: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.phpGenericServices != null)
                        message.phpGenericServices = Boolean(object.phpGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.swiftPrefix != null)
                        message.swiftPrefix = String(object.swiftPrefix);
                    if (object.phpClassPrefix != null)
                        message.phpClassPrefix = String(object.phpClassPrefix);
                    if (object.phpNamespace != null)
                        message.phpNamespace = String(object.phpNamespace);
                    if (object.phpMetadataNamespace != null)
                        message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                    if (object.rubyPackage != null)
                        message.rubyPackage = String(object.rubyPackage);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = true;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                        object.phpClassPrefix = "";
                        object.phpNamespace = "";
                        object.phpGenericServices = false;
                        object.phpMetadataNamespace = "";
                        object.rubyPackage = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        object.swiftPrefix = message.swiftPrefix;
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        object.phpClassPrefix = message.phpClassPrefix;
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        object.phpNamespace = message.phpNamespace;
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        object.phpGenericServices = message.phpGenericServices;
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        object.phpMetadataNamespace = message.phpMetadataNamespace;
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        object.rubyPackage = message.rubyPackage;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.messageSetWireFormat = reader.bool();
                                break;
                            }
                        case 2: {
                                message.noStandardDescriptorAccessor = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 7: {
                                message.mapEntry = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [unverifiedLazy] FieldOptions unverifiedLazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 * @property {Array.<google.api.FieldBehavior>|null} [".google.api.fieldBehavior"] FieldOptions .google.api.fieldBehavior
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.fieldBehavior"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions unverifiedLazy.
                 * @member {boolean} unverifiedLazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.unverifiedLazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FieldOptions .google.api.fieldBehavior.
                 * @member {Array.<google.api.FieldBehavior>} .google.api.fieldBehavior
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.fieldBehavior"] = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.unverifiedLazy != null && Object.hasOwnProperty.call(message, "unverifiedLazy"))
                        writer.uint32(/* id 15, wireType 0 =*/120).bool(message.unverifiedLazy);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.fieldBehavior"] != null && message[".google.api.fieldBehavior"].length) {
                        writer.uint32(/* id 1052, wireType 2 =*/8418).fork();
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            writer.int32(message[".google.api.fieldBehavior"][i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ctype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.packed = reader.bool();
                                break;
                            }
                        case 6: {
                                message.jstype = reader.int32();
                                break;
                            }
                        case 5: {
                                message.lazy = reader.bool();
                                break;
                            }
                        case 15: {
                                message.unverifiedLazy = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 10: {
                                message.weak = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1052: {
                                if (!(message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length))
                                    message[".google.api.fieldBehavior"] = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message[".google.api.fieldBehavior"].push(reader.int32());
                                } else
                                    message[".google.api.fieldBehavior"].push(reader.int32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                        if (typeof message.unverifiedLazy !== "boolean")
                            return "unverifiedLazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.fieldBehavior"] != null && message.hasOwnProperty(".google.api.fieldBehavior")) {
                        if (!Array.isArray(message[".google.api.fieldBehavior"]))
                            return ".google.api.fieldBehavior: array expected";
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            switch (message[".google.api.fieldBehavior"][i]) {
                            default:
                                return ".google.api.fieldBehavior: enum value[] expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.unverifiedLazy != null)
                        message.unverifiedLazy = Boolean(object.unverifiedLazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.fieldBehavior"]) {
                        if (!Array.isArray(object[".google.api.fieldBehavior"]))
                            throw TypeError(".google.protobuf.FieldOptions..google.api.fieldBehavior: array expected");
                        message[".google.api.fieldBehavior"] = [];
                        for (var i = 0; i < object[".google.api.fieldBehavior"].length; ++i)
                            switch (object[".google.api.fieldBehavior"][i]) {
                            default:
                            case "FIELD_BEHAVIOR_UNSPECIFIED":
                            case 0:
                                message[".google.api.fieldBehavior"][i] = 0;
                                break;
                            case "OPTIONAL":
                            case 1:
                                message[".google.api.fieldBehavior"][i] = 1;
                                break;
                            case "REQUIRED":
                            case 2:
                                message[".google.api.fieldBehavior"][i] = 2;
                                break;
                            case "OUTPUT_ONLY":
                            case 3:
                                message[".google.api.fieldBehavior"][i] = 3;
                                break;
                            case "INPUT_ONLY":
                            case 4:
                                message[".google.api.fieldBehavior"][i] = 4;
                                break;
                            case "IMMUTABLE":
                            case 5:
                                message[".google.api.fieldBehavior"][i] = 5;
                                break;
                            case "UNORDERED_LIST":
                            case 6:
                                message[".google.api.fieldBehavior"][i] = 6;
                                break;
                            case "NON_EMPTY_DEFAULT":
                            case 7:
                                message[".google.api.fieldBehavior"][i] = 7;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.fieldBehavior"] = [];
                    }
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object.unverifiedLazy = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.unverifiedLazy != null && message.hasOwnProperty("unverifiedLazy"))
                        object.unverifiedLazy = message.unverifiedLazy;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length) {
                        object[".google.api.fieldBehavior"] = [];
                        for (var j = 0; j < message[".google.api.fieldBehavior"].length; ++j)
                            object[".google.api.fieldBehavior"][j] = options.enums === String ? $root.google.api.FieldBehavior[message[".google.api.fieldBehavior"][j]] : message[".google.api.fieldBehavior"][j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofOptions";
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.allowAlias = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 * @property {string|null} [".google.api.defaultHost"] ServiceOptions .google.api.defaultHost
                 * @property {string|null} [".google.api.oauthScopes"] ServiceOptions .google.api.oauthScopes
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ServiceOptions .google.api.defaultHost.
                 * @member {string} .google.api.defaultHost
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.defaultHost"] = "";
    
                /**
                 * ServiceOptions .google.api.oauthScopes.
                 * @member {string} .google.api.oauthScopes
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.oauthScopes"] = "";
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.defaultHost"] != null && Object.hasOwnProperty.call(message, ".google.api.defaultHost"))
                        writer.uint32(/* id 1049, wireType 2 =*/8394).string(message[".google.api.defaultHost"]);
                    if (message[".google.api.oauthScopes"] != null && Object.hasOwnProperty.call(message, ".google.api.oauthScopes"))
                        writer.uint32(/* id 1050, wireType 2 =*/8402).string(message[".google.api.oauthScopes"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 1049: {
                                message[".google.api.defaultHost"] = reader.string();
                                break;
                            }
                        case 1050: {
                                message[".google.api.oauthScopes"] = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        if (!$util.isString(message[".google.api.defaultHost"]))
                            return ".google.api.defaultHost: string expected";
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        if (!$util.isString(message[".google.api.oauthScopes"]))
                            return ".google.api.oauthScopes: string expected";
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.defaultHost"] != null)
                        message[".google.api.defaultHost"] = String(object[".google.api.defaultHost"]);
                    if (object[".google.api.oauthScopes"] != null)
                        message[".google.api.oauthScopes"] = String(object[".google.api.oauthScopes"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".google.api.defaultHost"] = "";
                        object[".google.api.oauthScopes"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        object[".google.api.defaultHost"] = message[".google.api.defaultHost"];
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        object[".google.api.oauthScopes"] = message[".google.api.oauthScopes"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 * @property {Array.<string>|null} [".google.api.methodSignature"] MethodOptions .google.api.methodSignature
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.methodSignature"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotencyLevel.
                 * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.idempotencyLevel = 0;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * MethodOptions .google.api.methodSignature.
                 * @member {Array.<string>} .google.api.methodSignature
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.methodSignature"] = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.methodSignature"] != null && message[".google.api.methodSignature"].length)
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            writer.uint32(/* id 1051, wireType 2 =*/8410).string(message[".google.api.methodSignature"][i]);
                    if (message[".google.api.http"] != null && Object.hasOwnProperty.call(message, ".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 34: {
                                message.idempotencyLevel = reader.int32();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 72295728: {
                                message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                                break;
                            }
                        case 1051: {
                                if (!(message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length))
                                    message[".google.api.methodSignature"] = [];
                                message[".google.api.methodSignature"].push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        switch (message.idempotencyLevel) {
                        default:
                            return "idempotencyLevel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    if (message[".google.api.methodSignature"] != null && message.hasOwnProperty(".google.api.methodSignature")) {
                        if (!Array.isArray(message[".google.api.methodSignature"]))
                            return ".google.api.methodSignature: array expected";
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            if (!$util.isString(message[".google.api.methodSignature"][i]))
                                return ".google.api.methodSignature: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    switch (object.idempotencyLevel) {
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotencyLevel = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotencyLevel = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotencyLevel = 2;
                        break;
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    if (object[".google.api.methodSignature"]) {
                        if (!Array.isArray(object[".google.api.methodSignature"]))
                            throw TypeError(".google.protobuf.MethodOptions..google.api.methodSignature: array expected");
                        message[".google.api.methodSignature"] = [];
                        for (var i = 0; i < object[".google.api.methodSignature"].length; ++i)
                            message[".google.api.methodSignature"][i] = String(object[".google.api.methodSignature"][i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.methodSignature"] = [];
                    }
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length) {
                        object[".google.api.methodSignature"] = [];
                        for (var j = 0; j < message[".google.api.methodSignature"].length; ++j)
                            object[".google.api.methodSignature"][j] = message[".google.api.methodSignature"][j];
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodOptions";
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {number}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.identifierValue = reader.string();
                                break;
                            }
                        case 4: {
                                message.positiveIntValue = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.negativeIntValue = reader.int64();
                                break;
                            }
                        case 6: {
                                message.doubleValue = reader.double();
                                break;
                            }
                        case 7: {
                                message.stringValue = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.aggregateValue = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length >= 0)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.namePart = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.isExtension = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.span.push(reader.int32());
                                    } else
                                        message.span.push(reader.int32());
                                    break;
                                }
                            case 3: {
                                    message.leadingComments = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.trailingComments = reader.string();
                                    break;
                                }
                            case 6: {
                                    if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                        message.leadingDetachedComments = [];
                                    message.leadingDetachedComments.push(reader.string());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.annotation && message.annotation.length))
                                    message.annotation = [];
                                message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for GeneratedCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     * @property {google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null} [semantic] Annotation semantic
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Annotation semantic.
                     * @member {google.protobuf.GeneratedCodeInfo.Annotation.Semantic} semantic
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.semantic = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        if (message.semantic != null && Object.hasOwnProperty.call(message, "semantic"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.semantic);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    message.sourceFile = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.begin = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.end = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.semantic = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.semantic != null && message.hasOwnProperty("semantic"))
                            switch (message.semantic) {
                            default:
                                return "semantic: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        switch (object.semantic) {
                        case "NONE":
                        case 0:
                            message.semantic = 0;
                            break;
                        case "SET":
                        case 1:
                            message.semantic = 1;
                            break;
                        case "ALIAS":
                        case 2:
                            message.semantic = 2;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                            object.semantic = options.enums === String ? "NONE" : 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.semantic != null && message.hasOwnProperty("semantic"))
                            object.semantic = options.enums === String ? $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] : message.semantic;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Annotation
                     * @function getTypeUrl
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                    };
    
                    /**
                     * Semantic enum.
                     * @name google.protobuf.GeneratedCodeInfo.Annotation.Semantic
                     * @enum {number}
                     * @property {number} NONE=0 NONE value
                     * @property {number} SET=1 SET value
                     * @property {number} ALIAS=2 ALIAS value
                     */
                    Annotation.Semantic = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "SET"] = 1;
                        values[valuesById[2] = "ALIAS"] = 2;
                        return values;
                    })();
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
