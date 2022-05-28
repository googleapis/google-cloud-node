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

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace video. */
        namespace video {

            /** Namespace stitcher. */
            namespace stitcher {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a LiveAdTagDetail. */
                    interface ILiveAdTagDetail {

                        /** LiveAdTagDetail name */
                        name?: (string|null);

                        /** LiveAdTagDetail adRequests */
                        adRequests?: (google.cloud.video.stitcher.v1.IAdRequest[]|null);
                    }

                    /** Represents a LiveAdTagDetail. */
                    class LiveAdTagDetail implements ILiveAdTagDetail {

                        /**
                         * Constructs a new LiveAdTagDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ILiveAdTagDetail);

                        /** LiveAdTagDetail name. */
                        public name: string;

                        /** LiveAdTagDetail adRequests. */
                        public adRequests: google.cloud.video.stitcher.v1.IAdRequest[];

                        /**
                         * Creates a new LiveAdTagDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LiveAdTagDetail instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ILiveAdTagDetail): google.cloud.video.stitcher.v1.LiveAdTagDetail;

                        /**
                         * Encodes the specified LiveAdTagDetail message. Does not implicitly {@link google.cloud.video.stitcher.v1.LiveAdTagDetail.verify|verify} messages.
                         * @param message LiveAdTagDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ILiveAdTagDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LiveAdTagDetail message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.LiveAdTagDetail.verify|verify} messages.
                         * @param message LiveAdTagDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ILiveAdTagDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LiveAdTagDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LiveAdTagDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.LiveAdTagDetail;

                        /**
                         * Decodes a LiveAdTagDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LiveAdTagDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.LiveAdTagDetail;

                        /**
                         * Verifies a LiveAdTagDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LiveAdTagDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LiveAdTagDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.LiveAdTagDetail;

                        /**
                         * Creates a plain object from a LiveAdTagDetail message. Also converts values to other types if specified.
                         * @param message LiveAdTagDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.LiveAdTagDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LiveAdTagDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodAdTagDetail. */
                    interface IVodAdTagDetail {

                        /** VodAdTagDetail name */
                        name?: (string|null);

                        /** VodAdTagDetail adRequests */
                        adRequests?: (google.cloud.video.stitcher.v1.IAdRequest[]|null);
                    }

                    /** Represents a VodAdTagDetail. */
                    class VodAdTagDetail implements IVodAdTagDetail {

                        /**
                         * Constructs a new VodAdTagDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodAdTagDetail);

                        /** VodAdTagDetail name. */
                        public name: string;

                        /** VodAdTagDetail adRequests. */
                        public adRequests: google.cloud.video.stitcher.v1.IAdRequest[];

                        /**
                         * Creates a new VodAdTagDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodAdTagDetail instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodAdTagDetail): google.cloud.video.stitcher.v1.VodAdTagDetail;

                        /**
                         * Encodes the specified VodAdTagDetail message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodAdTagDetail.verify|verify} messages.
                         * @param message VodAdTagDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodAdTagDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodAdTagDetail message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodAdTagDetail.verify|verify} messages.
                         * @param message VodAdTagDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodAdTagDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodAdTagDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodAdTagDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodAdTagDetail;

                        /**
                         * Decodes a VodAdTagDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodAdTagDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodAdTagDetail;

                        /**
                         * Verifies a VodAdTagDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodAdTagDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodAdTagDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodAdTagDetail;

                        /**
                         * Creates a plain object from a VodAdTagDetail message. Also converts values to other types if specified.
                         * @param message VodAdTagDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodAdTagDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodAdTagDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AdRequest. */
                    interface IAdRequest {

                        /** AdRequest uri */
                        uri?: (string|null);

                        /** AdRequest requestMetadata */
                        requestMetadata?: (google.cloud.video.stitcher.v1.IRequestMetadata|null);

                        /** AdRequest responseMetadata */
                        responseMetadata?: (google.cloud.video.stitcher.v1.IResponseMetadata|null);
                    }

                    /** Represents an AdRequest. */
                    class AdRequest implements IAdRequest {

                        /**
                         * Constructs a new AdRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IAdRequest);

                        /** AdRequest uri. */
                        public uri: string;

                        /** AdRequest requestMetadata. */
                        public requestMetadata?: (google.cloud.video.stitcher.v1.IRequestMetadata|null);

                        /** AdRequest responseMetadata. */
                        public responseMetadata?: (google.cloud.video.stitcher.v1.IResponseMetadata|null);

                        /**
                         * Creates a new AdRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IAdRequest): google.cloud.video.stitcher.v1.AdRequest;

                        /**
                         * Encodes the specified AdRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.AdRequest.verify|verify} messages.
                         * @param message AdRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IAdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.AdRequest.verify|verify} messages.
                         * @param message AdRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IAdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.AdRequest;

                        /**
                         * Decodes an AdRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.AdRequest;

                        /**
                         * Verifies an AdRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.AdRequest;

                        /**
                         * Creates a plain object from an AdRequest message. Also converts values to other types if specified.
                         * @param message AdRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.AdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RequestMetadata. */
                    interface IRequestMetadata {

                        /** RequestMetadata headers */
                        headers?: (google.protobuf.IStruct|null);
                    }

                    /** Represents a RequestMetadata. */
                    class RequestMetadata implements IRequestMetadata {

                        /**
                         * Constructs a new RequestMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IRequestMetadata);

                        /** RequestMetadata headers. */
                        public headers?: (google.protobuf.IStruct|null);

                        /**
                         * Creates a new RequestMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RequestMetadata instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IRequestMetadata): google.cloud.video.stitcher.v1.RequestMetadata;

                        /**
                         * Encodes the specified RequestMetadata message. Does not implicitly {@link google.cloud.video.stitcher.v1.RequestMetadata.verify|verify} messages.
                         * @param message RequestMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RequestMetadata message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.RequestMetadata.verify|verify} messages.
                         * @param message RequestMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RequestMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RequestMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.RequestMetadata;

                        /**
                         * Decodes a RequestMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RequestMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.RequestMetadata;

                        /**
                         * Verifies a RequestMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RequestMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RequestMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.RequestMetadata;

                        /**
                         * Creates a plain object from a RequestMetadata message. Also converts values to other types if specified.
                         * @param message RequestMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.RequestMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RequestMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ResponseMetadata. */
                    interface IResponseMetadata {

                        /** ResponseMetadata error */
                        error?: (string|null);

                        /** ResponseMetadata headers */
                        headers?: (google.protobuf.IStruct|null);

                        /** ResponseMetadata statusCode */
                        statusCode?: (string|null);

                        /** ResponseMetadata sizeBytes */
                        sizeBytes?: (number|null);

                        /** ResponseMetadata duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** ResponseMetadata body */
                        body?: (string|null);
                    }

                    /** Represents a ResponseMetadata. */
                    class ResponseMetadata implements IResponseMetadata {

                        /**
                         * Constructs a new ResponseMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IResponseMetadata);

                        /** ResponseMetadata error. */
                        public error: string;

                        /** ResponseMetadata headers. */
                        public headers?: (google.protobuf.IStruct|null);

                        /** ResponseMetadata statusCode. */
                        public statusCode: string;

                        /** ResponseMetadata sizeBytes. */
                        public sizeBytes: number;

                        /** ResponseMetadata duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** ResponseMetadata body. */
                        public body: string;

                        /**
                         * Creates a new ResponseMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResponseMetadata instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IResponseMetadata): google.cloud.video.stitcher.v1.ResponseMetadata;

                        /**
                         * Encodes the specified ResponseMetadata message. Does not implicitly {@link google.cloud.video.stitcher.v1.ResponseMetadata.verify|verify} messages.
                         * @param message ResponseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResponseMetadata message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ResponseMetadata.verify|verify} messages.
                         * @param message ResponseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResponseMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResponseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ResponseMetadata;

                        /**
                         * Decodes a ResponseMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResponseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ResponseMetadata;

                        /**
                         * Verifies a ResponseMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResponseMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResponseMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ResponseMetadata;

                        /**
                         * Creates a plain object from a ResponseMetadata message. Also converts values to other types if specified.
                         * @param message ResponseMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ResponseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResponseMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CdnKey. */
                    interface ICdnKey {

                        /** CdnKey googleCdnKey */
                        googleCdnKey?: (google.cloud.video.stitcher.v1.IGoogleCdnKey|null);

                        /** CdnKey akamaiCdnKey */
                        akamaiCdnKey?: (google.cloud.video.stitcher.v1.IAkamaiCdnKey|null);

                        /** CdnKey name */
                        name?: (string|null);

                        /** CdnKey hostname */
                        hostname?: (string|null);
                    }

                    /** Represents a CdnKey. */
                    class CdnKey implements ICdnKey {

                        /**
                         * Constructs a new CdnKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICdnKey);

                        /** CdnKey googleCdnKey. */
                        public googleCdnKey?: (google.cloud.video.stitcher.v1.IGoogleCdnKey|null);

                        /** CdnKey akamaiCdnKey. */
                        public akamaiCdnKey?: (google.cloud.video.stitcher.v1.IAkamaiCdnKey|null);

                        /** CdnKey name. */
                        public name: string;

                        /** CdnKey hostname. */
                        public hostname: string;

                        /** CdnKey cdnKeyConfig. */
                        public cdnKeyConfig?: ("googleCdnKey"|"akamaiCdnKey");

                        /**
                         * Creates a new CdnKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CdnKey instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICdnKey): google.cloud.video.stitcher.v1.CdnKey;

                        /**
                         * Encodes the specified CdnKey message. Does not implicitly {@link google.cloud.video.stitcher.v1.CdnKey.verify|verify} messages.
                         * @param message CdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CdnKey message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CdnKey.verify|verify} messages.
                         * @param message CdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CdnKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CdnKey;

                        /**
                         * Decodes a CdnKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CdnKey;

                        /**
                         * Verifies a CdnKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CdnKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CdnKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CdnKey;

                        /**
                         * Creates a plain object from a CdnKey message. Also converts values to other types if specified.
                         * @param message CdnKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CdnKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CdnKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GoogleCdnKey. */
                    interface IGoogleCdnKey {

                        /** GoogleCdnKey privateKey */
                        privateKey?: (Uint8Array|string|null);

                        /** GoogleCdnKey keyName */
                        keyName?: (string|null);
                    }

                    /** Represents a GoogleCdnKey. */
                    class GoogleCdnKey implements IGoogleCdnKey {

                        /**
                         * Constructs a new GoogleCdnKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGoogleCdnKey);

                        /** GoogleCdnKey privateKey. */
                        public privateKey: (Uint8Array|string);

                        /** GoogleCdnKey keyName. */
                        public keyName: string;

                        /**
                         * Creates a new GoogleCdnKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GoogleCdnKey instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGoogleCdnKey): google.cloud.video.stitcher.v1.GoogleCdnKey;

                        /**
                         * Encodes the specified GoogleCdnKey message. Does not implicitly {@link google.cloud.video.stitcher.v1.GoogleCdnKey.verify|verify} messages.
                         * @param message GoogleCdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGoogleCdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GoogleCdnKey message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GoogleCdnKey.verify|verify} messages.
                         * @param message GoogleCdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGoogleCdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GoogleCdnKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GoogleCdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GoogleCdnKey;

                        /**
                         * Decodes a GoogleCdnKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GoogleCdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GoogleCdnKey;

                        /**
                         * Verifies a GoogleCdnKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GoogleCdnKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GoogleCdnKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GoogleCdnKey;

                        /**
                         * Creates a plain object from a GoogleCdnKey message. Also converts values to other types if specified.
                         * @param message GoogleCdnKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GoogleCdnKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GoogleCdnKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AkamaiCdnKey. */
                    interface IAkamaiCdnKey {

                        /** AkamaiCdnKey tokenKey */
                        tokenKey?: (Uint8Array|string|null);
                    }

                    /** Represents an AkamaiCdnKey. */
                    class AkamaiCdnKey implements IAkamaiCdnKey {

                        /**
                         * Constructs a new AkamaiCdnKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IAkamaiCdnKey);

                        /** AkamaiCdnKey tokenKey. */
                        public tokenKey: (Uint8Array|string);

                        /**
                         * Creates a new AkamaiCdnKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AkamaiCdnKey instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IAkamaiCdnKey): google.cloud.video.stitcher.v1.AkamaiCdnKey;

                        /**
                         * Encodes the specified AkamaiCdnKey message. Does not implicitly {@link google.cloud.video.stitcher.v1.AkamaiCdnKey.verify|verify} messages.
                         * @param message AkamaiCdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IAkamaiCdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AkamaiCdnKey message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.AkamaiCdnKey.verify|verify} messages.
                         * @param message AkamaiCdnKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IAkamaiCdnKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AkamaiCdnKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AkamaiCdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.AkamaiCdnKey;

                        /**
                         * Decodes an AkamaiCdnKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AkamaiCdnKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.AkamaiCdnKey;

                        /**
                         * Verifies an AkamaiCdnKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AkamaiCdnKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AkamaiCdnKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.AkamaiCdnKey;

                        /**
                         * Creates a plain object from an AkamaiCdnKey message. Also converts values to other types if specified.
                         * @param message AkamaiCdnKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.AkamaiCdnKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AkamaiCdnKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CompanionAds. */
                    interface ICompanionAds {

                        /** CompanionAds displayRequirement */
                        displayRequirement?: (google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement|keyof typeof google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement|null);

                        /** CompanionAds companions */
                        companions?: (google.cloud.video.stitcher.v1.ICompanion[]|null);
                    }

                    /** Represents a CompanionAds. */
                    class CompanionAds implements ICompanionAds {

                        /**
                         * Constructs a new CompanionAds.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICompanionAds);

                        /** CompanionAds displayRequirement. */
                        public displayRequirement: (google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement|keyof typeof google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement);

                        /** CompanionAds companions. */
                        public companions: google.cloud.video.stitcher.v1.ICompanion[];

                        /**
                         * Creates a new CompanionAds instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompanionAds instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICompanionAds): google.cloud.video.stitcher.v1.CompanionAds;

                        /**
                         * Encodes the specified CompanionAds message. Does not implicitly {@link google.cloud.video.stitcher.v1.CompanionAds.verify|verify} messages.
                         * @param message CompanionAds message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICompanionAds, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompanionAds message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CompanionAds.verify|verify} messages.
                         * @param message CompanionAds message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICompanionAds, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompanionAds message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompanionAds
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CompanionAds;

                        /**
                         * Decodes a CompanionAds message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompanionAds
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CompanionAds;

                        /**
                         * Verifies a CompanionAds message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompanionAds message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompanionAds
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CompanionAds;

                        /**
                         * Creates a plain object from a CompanionAds message. Also converts values to other types if specified.
                         * @param message CompanionAds
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CompanionAds, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompanionAds to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace CompanionAds {

                        /** DisplayRequirement enum. */
                        enum DisplayRequirement {
                            DISPLAY_REQUIREMENT_UNSPECIFIED = 0,
                            ALL = 1,
                            ANY = 2,
                            NONE = 3
                        }
                    }

                    /** Properties of a Companion. */
                    interface ICompanion {

                        /** Companion iframeAdResource */
                        iframeAdResource?: (google.cloud.video.stitcher.v1.IIframeAdResource|null);

                        /** Companion staticAdResource */
                        staticAdResource?: (google.cloud.video.stitcher.v1.IStaticAdResource|null);

                        /** Companion htmlAdResource */
                        htmlAdResource?: (google.cloud.video.stitcher.v1.IHtmlAdResource|null);

                        /** Companion apiFramework */
                        apiFramework?: (string|null);

                        /** Companion heightPx */
                        heightPx?: (number|null);

                        /** Companion widthPx */
                        widthPx?: (number|null);

                        /** Companion assetHeightPx */
                        assetHeightPx?: (number|null);

                        /** Companion expandedHeightPx */
                        expandedHeightPx?: (number|null);

                        /** Companion assetWidthPx */
                        assetWidthPx?: (number|null);

                        /** Companion expandedWidthPx */
                        expandedWidthPx?: (number|null);

                        /** Companion adSlotId */
                        adSlotId?: (string|null);

                        /** Companion events */
                        events?: (google.cloud.video.stitcher.v1.IEvent[]|null);
                    }

                    /** Represents a Companion. */
                    class Companion implements ICompanion {

                        /**
                         * Constructs a new Companion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICompanion);

                        /** Companion iframeAdResource. */
                        public iframeAdResource?: (google.cloud.video.stitcher.v1.IIframeAdResource|null);

                        /** Companion staticAdResource. */
                        public staticAdResource?: (google.cloud.video.stitcher.v1.IStaticAdResource|null);

                        /** Companion htmlAdResource. */
                        public htmlAdResource?: (google.cloud.video.stitcher.v1.IHtmlAdResource|null);

                        /** Companion apiFramework. */
                        public apiFramework: string;

                        /** Companion heightPx. */
                        public heightPx: number;

                        /** Companion widthPx. */
                        public widthPx: number;

                        /** Companion assetHeightPx. */
                        public assetHeightPx: number;

                        /** Companion expandedHeightPx. */
                        public expandedHeightPx: number;

                        /** Companion assetWidthPx. */
                        public assetWidthPx: number;

                        /** Companion expandedWidthPx. */
                        public expandedWidthPx: number;

                        /** Companion adSlotId. */
                        public adSlotId: string;

                        /** Companion events. */
                        public events: google.cloud.video.stitcher.v1.IEvent[];

                        /** Companion adResource. */
                        public adResource?: ("iframeAdResource"|"staticAdResource"|"htmlAdResource");

                        /**
                         * Creates a new Companion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Companion instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICompanion): google.cloud.video.stitcher.v1.Companion;

                        /**
                         * Encodes the specified Companion message. Does not implicitly {@link google.cloud.video.stitcher.v1.Companion.verify|verify} messages.
                         * @param message Companion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICompanion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Companion message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.Companion.verify|verify} messages.
                         * @param message Companion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICompanion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Companion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Companion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.Companion;

                        /**
                         * Decodes a Companion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Companion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.Companion;

                        /**
                         * Verifies a Companion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Companion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Companion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.Companion;

                        /**
                         * Creates a plain object from a Companion message. Also converts values to other types if specified.
                         * @param message Companion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.Companion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Companion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a HtmlAdResource. */
                    interface IHtmlAdResource {

                        /** HtmlAdResource htmlSource */
                        htmlSource?: (string|null);
                    }

                    /** Represents a HtmlAdResource. */
                    class HtmlAdResource implements IHtmlAdResource {

                        /**
                         * Constructs a new HtmlAdResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IHtmlAdResource);

                        /** HtmlAdResource htmlSource. */
                        public htmlSource: string;

                        /**
                         * Creates a new HtmlAdResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HtmlAdResource instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IHtmlAdResource): google.cloud.video.stitcher.v1.HtmlAdResource;

                        /**
                         * Encodes the specified HtmlAdResource message. Does not implicitly {@link google.cloud.video.stitcher.v1.HtmlAdResource.verify|verify} messages.
                         * @param message HtmlAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IHtmlAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HtmlAdResource message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.HtmlAdResource.verify|verify} messages.
                         * @param message HtmlAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IHtmlAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HtmlAdResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HtmlAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.HtmlAdResource;

                        /**
                         * Decodes a HtmlAdResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HtmlAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.HtmlAdResource;

                        /**
                         * Verifies a HtmlAdResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HtmlAdResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HtmlAdResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.HtmlAdResource;

                        /**
                         * Creates a plain object from a HtmlAdResource message. Also converts values to other types if specified.
                         * @param message HtmlAdResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.HtmlAdResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HtmlAdResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IframeAdResource. */
                    interface IIframeAdResource {

                        /** IframeAdResource uri */
                        uri?: (string|null);
                    }

                    /** Represents an IframeAdResource. */
                    class IframeAdResource implements IIframeAdResource {

                        /**
                         * Constructs a new IframeAdResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IIframeAdResource);

                        /** IframeAdResource uri. */
                        public uri: string;

                        /**
                         * Creates a new IframeAdResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IframeAdResource instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IIframeAdResource): google.cloud.video.stitcher.v1.IframeAdResource;

                        /**
                         * Encodes the specified IframeAdResource message. Does not implicitly {@link google.cloud.video.stitcher.v1.IframeAdResource.verify|verify} messages.
                         * @param message IframeAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IIframeAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IframeAdResource message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.IframeAdResource.verify|verify} messages.
                         * @param message IframeAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IIframeAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IframeAdResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IframeAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.IframeAdResource;

                        /**
                         * Decodes an IframeAdResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IframeAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.IframeAdResource;

                        /**
                         * Verifies an IframeAdResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IframeAdResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IframeAdResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.IframeAdResource;

                        /**
                         * Creates a plain object from an IframeAdResource message. Also converts values to other types if specified.
                         * @param message IframeAdResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.IframeAdResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IframeAdResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StaticAdResource. */
                    interface IStaticAdResource {

                        /** StaticAdResource uri */
                        uri?: (string|null);

                        /** StaticAdResource creativeType */
                        creativeType?: (string|null);
                    }

                    /** Represents a StaticAdResource. */
                    class StaticAdResource implements IStaticAdResource {

                        /**
                         * Constructs a new StaticAdResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IStaticAdResource);

                        /** StaticAdResource uri. */
                        public uri: string;

                        /** StaticAdResource creativeType. */
                        public creativeType: string;

                        /**
                         * Creates a new StaticAdResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StaticAdResource instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IStaticAdResource): google.cloud.video.stitcher.v1.StaticAdResource;

                        /**
                         * Encodes the specified StaticAdResource message. Does not implicitly {@link google.cloud.video.stitcher.v1.StaticAdResource.verify|verify} messages.
                         * @param message StaticAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IStaticAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StaticAdResource message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.StaticAdResource.verify|verify} messages.
                         * @param message StaticAdResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IStaticAdResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StaticAdResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StaticAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.StaticAdResource;

                        /**
                         * Decodes a StaticAdResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StaticAdResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.StaticAdResource;

                        /**
                         * Verifies a StaticAdResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StaticAdResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StaticAdResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.StaticAdResource;

                        /**
                         * Creates a plain object from a StaticAdResource message. Also converts values to other types if specified.
                         * @param message StaticAdResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.StaticAdResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StaticAdResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Event. */
                    interface IEvent {

                        /** Event type */
                        type?: (google.cloud.video.stitcher.v1.Event.EventType|keyof typeof google.cloud.video.stitcher.v1.Event.EventType|null);

                        /** Event uri */
                        uri?: (string|null);

                        /** Event id */
                        id?: (string|null);

                        /** Event offset */
                        offset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an Event. */
                    class Event implements IEvent {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IEvent);

                        /** Event type. */
                        public type: (google.cloud.video.stitcher.v1.Event.EventType|keyof typeof google.cloud.video.stitcher.v1.Event.EventType);

                        /** Event uri. */
                        public uri: string;

                        /** Event id. */
                        public id: string;

                        /** Event offset. */
                        public offset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Event instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IEvent): google.cloud.video.stitcher.v1.Event;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link google.cloud.video.stitcher.v1.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.Event;

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.Event;

                        /**
                         * Verifies an Event message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Event {

                        /** EventType enum. */
                        enum EventType {
                            EVENT_TYPE_UNSPECIFIED = 0,
                            CREATIVE_VIEW = 1,
                            START = 2,
                            BREAK_START = 3,
                            BREAK_END = 4,
                            IMPRESSION = 5,
                            FIRST_QUARTILE = 6,
                            MIDPOINT = 7,
                            THIRD_QUARTILE = 8,
                            COMPLETE = 9,
                            PROGRESS = 10,
                            MUTE = 11,
                            UNMUTE = 12,
                            PAUSE = 13,
                            CLICK = 14,
                            CLICK_THROUGH = 15,
                            REWIND = 16,
                            RESUME = 17,
                            ERROR = 18,
                            EXPAND = 21,
                            COLLAPSE = 22,
                            CLOSE = 24,
                            CLOSE_LINEAR = 25,
                            SKIP = 26,
                            ACCEPT_INVITATION = 27
                        }
                    }

                    /** Properties of a ProgressEvent. */
                    interface IProgressEvent {

                        /** ProgressEvent timeOffset */
                        timeOffset?: (google.protobuf.IDuration|null);

                        /** ProgressEvent events */
                        events?: (google.cloud.video.stitcher.v1.IEvent[]|null);
                    }

                    /** Represents a ProgressEvent. */
                    class ProgressEvent implements IProgressEvent {

                        /**
                         * Constructs a new ProgressEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IProgressEvent);

                        /** ProgressEvent timeOffset. */
                        public timeOffset?: (google.protobuf.IDuration|null);

                        /** ProgressEvent events. */
                        public events: google.cloud.video.stitcher.v1.IEvent[];

                        /**
                         * Creates a new ProgressEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProgressEvent instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IProgressEvent): google.cloud.video.stitcher.v1.ProgressEvent;

                        /**
                         * Encodes the specified ProgressEvent message. Does not implicitly {@link google.cloud.video.stitcher.v1.ProgressEvent.verify|verify} messages.
                         * @param message ProgressEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IProgressEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProgressEvent message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ProgressEvent.verify|verify} messages.
                         * @param message ProgressEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IProgressEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProgressEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProgressEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ProgressEvent;

                        /**
                         * Decodes a ProgressEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProgressEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ProgressEvent;

                        /**
                         * Verifies a ProgressEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProgressEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProgressEvent
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ProgressEvent;

                        /**
                         * Creates a plain object from a ProgressEvent message. Also converts values to other types if specified.
                         * @param message ProgressEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ProgressEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProgressEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodSession. */
                    interface IVodSession {

                        /** VodSession name */
                        name?: (string|null);

                        /** VodSession interstitials */
                        interstitials?: (google.cloud.video.stitcher.v1.IInterstitials|null);

                        /** VodSession playUri */
                        playUri?: (string|null);

                        /** VodSession sourceUri */
                        sourceUri?: (string|null);

                        /** VodSession adTagUri */
                        adTagUri?: (string|null);

                        /** VodSession adTagMacroMap */
                        adTagMacroMap?: ({ [k: string]: string }|null);

                        /** VodSession clientAdTracking */
                        clientAdTracking?: (boolean|null);

                        /** VodSession manifestOptions */
                        manifestOptions?: (google.cloud.video.stitcher.v1.IManifestOptions|null);
                    }

                    /** Represents a VodSession. */
                    class VodSession implements IVodSession {

                        /**
                         * Constructs a new VodSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodSession);

                        /** VodSession name. */
                        public name: string;

                        /** VodSession interstitials. */
                        public interstitials?: (google.cloud.video.stitcher.v1.IInterstitials|null);

                        /** VodSession playUri. */
                        public playUri: string;

                        /** VodSession sourceUri. */
                        public sourceUri: string;

                        /** VodSession adTagUri. */
                        public adTagUri: string;

                        /** VodSession adTagMacroMap. */
                        public adTagMacroMap: { [k: string]: string };

                        /** VodSession clientAdTracking. */
                        public clientAdTracking: boolean;

                        /** VodSession manifestOptions. */
                        public manifestOptions?: (google.cloud.video.stitcher.v1.IManifestOptions|null);

                        /**
                         * Creates a new VodSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodSession instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodSession): google.cloud.video.stitcher.v1.VodSession;

                        /**
                         * Encodes the specified VodSession message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSession.verify|verify} messages.
                         * @param message VodSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodSession message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSession.verify|verify} messages.
                         * @param message VodSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodSession;

                        /**
                         * Decodes a VodSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodSession;

                        /**
                         * Verifies a VodSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodSession
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodSession;

                        /**
                         * Creates a plain object from a VodSession message. Also converts values to other types if specified.
                         * @param message VodSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Interstitials. */
                    interface IInterstitials {

                        /** Interstitials adBreaks */
                        adBreaks?: (google.cloud.video.stitcher.v1.IVodSessionAdBreak[]|null);

                        /** Interstitials sessionContent */
                        sessionContent?: (google.cloud.video.stitcher.v1.IVodSessionContent|null);
                    }

                    /** Represents an Interstitials. */
                    class Interstitials implements IInterstitials {

                        /**
                         * Constructs a new Interstitials.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IInterstitials);

                        /** Interstitials adBreaks. */
                        public adBreaks: google.cloud.video.stitcher.v1.IVodSessionAdBreak[];

                        /** Interstitials sessionContent. */
                        public sessionContent?: (google.cloud.video.stitcher.v1.IVodSessionContent|null);

                        /**
                         * Creates a new Interstitials instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Interstitials instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IInterstitials): google.cloud.video.stitcher.v1.Interstitials;

                        /**
                         * Encodes the specified Interstitials message. Does not implicitly {@link google.cloud.video.stitcher.v1.Interstitials.verify|verify} messages.
                         * @param message Interstitials message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IInterstitials, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Interstitials message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.Interstitials.verify|verify} messages.
                         * @param message Interstitials message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IInterstitials, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Interstitials message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Interstitials
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.Interstitials;

                        /**
                         * Decodes an Interstitials message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Interstitials
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.Interstitials;

                        /**
                         * Verifies an Interstitials message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Interstitials message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Interstitials
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.Interstitials;

                        /**
                         * Creates a plain object from an Interstitials message. Also converts values to other types if specified.
                         * @param message Interstitials
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.Interstitials, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Interstitials to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodSessionAd. */
                    interface IVodSessionAd {

                        /** VodSessionAd duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** VodSessionAd companionAds */
                        companionAds?: (google.cloud.video.stitcher.v1.ICompanionAds|null);

                        /** VodSessionAd activityEvents */
                        activityEvents?: (google.cloud.video.stitcher.v1.IEvent[]|null);
                    }

                    /** Represents a VodSessionAd. */
                    class VodSessionAd implements IVodSessionAd {

                        /**
                         * Constructs a new VodSessionAd.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodSessionAd);

                        /** VodSessionAd duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** VodSessionAd companionAds. */
                        public companionAds?: (google.cloud.video.stitcher.v1.ICompanionAds|null);

                        /** VodSessionAd activityEvents. */
                        public activityEvents: google.cloud.video.stitcher.v1.IEvent[];

                        /**
                         * Creates a new VodSessionAd instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodSessionAd instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodSessionAd): google.cloud.video.stitcher.v1.VodSessionAd;

                        /**
                         * Encodes the specified VodSessionAd message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionAd.verify|verify} messages.
                         * @param message VodSessionAd message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodSessionAd, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodSessionAd message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionAd.verify|verify} messages.
                         * @param message VodSessionAd message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodSessionAd, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodSessionAd message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodSessionAd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodSessionAd;

                        /**
                         * Decodes a VodSessionAd message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodSessionAd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodSessionAd;

                        /**
                         * Verifies a VodSessionAd message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodSessionAd message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodSessionAd
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodSessionAd;

                        /**
                         * Creates a plain object from a VodSessionAd message. Also converts values to other types if specified.
                         * @param message VodSessionAd
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodSessionAd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodSessionAd to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodSessionContent. */
                    interface IVodSessionContent {

                        /** VodSessionContent duration */
                        duration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a VodSessionContent. */
                    class VodSessionContent implements IVodSessionContent {

                        /**
                         * Constructs a new VodSessionContent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodSessionContent);

                        /** VodSessionContent duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new VodSessionContent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodSessionContent instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodSessionContent): google.cloud.video.stitcher.v1.VodSessionContent;

                        /**
                         * Encodes the specified VodSessionContent message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionContent.verify|verify} messages.
                         * @param message VodSessionContent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodSessionContent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodSessionContent message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionContent.verify|verify} messages.
                         * @param message VodSessionContent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodSessionContent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodSessionContent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodSessionContent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodSessionContent;

                        /**
                         * Decodes a VodSessionContent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodSessionContent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodSessionContent;

                        /**
                         * Verifies a VodSessionContent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodSessionContent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodSessionContent
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodSessionContent;

                        /**
                         * Creates a plain object from a VodSessionContent message. Also converts values to other types if specified.
                         * @param message VodSessionContent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodSessionContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodSessionContent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodSessionAdBreak. */
                    interface IVodSessionAdBreak {

                        /** VodSessionAdBreak progressEvents */
                        progressEvents?: (google.cloud.video.stitcher.v1.IProgressEvent[]|null);

                        /** VodSessionAdBreak ads */
                        ads?: (google.cloud.video.stitcher.v1.IVodSessionAd[]|null);

                        /** VodSessionAdBreak endTimeOffset */
                        endTimeOffset?: (google.protobuf.IDuration|null);

                        /** VodSessionAdBreak startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a VodSessionAdBreak. */
                    class VodSessionAdBreak implements IVodSessionAdBreak {

                        /**
                         * Constructs a new VodSessionAdBreak.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodSessionAdBreak);

                        /** VodSessionAdBreak progressEvents. */
                        public progressEvents: google.cloud.video.stitcher.v1.IProgressEvent[];

                        /** VodSessionAdBreak ads. */
                        public ads: google.cloud.video.stitcher.v1.IVodSessionAd[];

                        /** VodSessionAdBreak endTimeOffset. */
                        public endTimeOffset?: (google.protobuf.IDuration|null);

                        /** VodSessionAdBreak startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new VodSessionAdBreak instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodSessionAdBreak instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodSessionAdBreak): google.cloud.video.stitcher.v1.VodSessionAdBreak;

                        /**
                         * Encodes the specified VodSessionAdBreak message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionAdBreak.verify|verify} messages.
                         * @param message VodSessionAdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodSessionAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodSessionAdBreak message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodSessionAdBreak.verify|verify} messages.
                         * @param message VodSessionAdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodSessionAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodSessionAdBreak message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodSessionAdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodSessionAdBreak;

                        /**
                         * Decodes a VodSessionAdBreak message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodSessionAdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodSessionAdBreak;

                        /**
                         * Verifies a VodSessionAdBreak message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodSessionAdBreak message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodSessionAdBreak
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodSessionAdBreak;

                        /**
                         * Creates a plain object from a VodSessionAdBreak message. Also converts values to other types if specified.
                         * @param message VodSessionAdBreak
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodSessionAdBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodSessionAdBreak to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LiveSession. */
                    interface ILiveSession {

                        /** LiveSession name */
                        name?: (string|null);

                        /** LiveSession playUri */
                        playUri?: (string|null);

                        /** LiveSession sourceUri */
                        sourceUri?: (string|null);

                        /** LiveSession defaultAdTagId */
                        defaultAdTagId?: (string|null);

                        /** LiveSession adTagMap */
                        adTagMap?: ({ [k: string]: google.cloud.video.stitcher.v1.IAdTag }|null);

                        /** LiveSession adTagMacros */
                        adTagMacros?: ({ [k: string]: string }|null);

                        /** LiveSession clientAdTracking */
                        clientAdTracking?: (boolean|null);

                        /** LiveSession defaultSlateId */
                        defaultSlateId?: (string|null);

                        /** LiveSession stitchingPolicy */
                        stitchingPolicy?: (google.cloud.video.stitcher.v1.LiveSession.StitchingPolicy|keyof typeof google.cloud.video.stitcher.v1.LiveSession.StitchingPolicy|null);

                        /** LiveSession manifestOptions */
                        manifestOptions?: (google.cloud.video.stitcher.v1.IManifestOptions|null);
                    }

                    /** Represents a LiveSession. */
                    class LiveSession implements ILiveSession {

                        /**
                         * Constructs a new LiveSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ILiveSession);

                        /** LiveSession name. */
                        public name: string;

                        /** LiveSession playUri. */
                        public playUri: string;

                        /** LiveSession sourceUri. */
                        public sourceUri: string;

                        /** LiveSession defaultAdTagId. */
                        public defaultAdTagId: string;

                        /** LiveSession adTagMap. */
                        public adTagMap: { [k: string]: google.cloud.video.stitcher.v1.IAdTag };

                        /** LiveSession adTagMacros. */
                        public adTagMacros: { [k: string]: string };

                        /** LiveSession clientAdTracking. */
                        public clientAdTracking: boolean;

                        /** LiveSession defaultSlateId. */
                        public defaultSlateId: string;

                        /** LiveSession stitchingPolicy. */
                        public stitchingPolicy: (google.cloud.video.stitcher.v1.LiveSession.StitchingPolicy|keyof typeof google.cloud.video.stitcher.v1.LiveSession.StitchingPolicy);

                        /** LiveSession manifestOptions. */
                        public manifestOptions?: (google.cloud.video.stitcher.v1.IManifestOptions|null);

                        /**
                         * Creates a new LiveSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LiveSession instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ILiveSession): google.cloud.video.stitcher.v1.LiveSession;

                        /**
                         * Encodes the specified LiveSession message. Does not implicitly {@link google.cloud.video.stitcher.v1.LiveSession.verify|verify} messages.
                         * @param message LiveSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ILiveSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LiveSession message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.LiveSession.verify|verify} messages.
                         * @param message LiveSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ILiveSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LiveSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LiveSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.LiveSession;

                        /**
                         * Decodes a LiveSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LiveSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.LiveSession;

                        /**
                         * Verifies a LiveSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LiveSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LiveSession
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.LiveSession;

                        /**
                         * Creates a plain object from a LiveSession message. Also converts values to other types if specified.
                         * @param message LiveSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.LiveSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LiveSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace LiveSession {

                        /** StitchingPolicy enum. */
                        enum StitchingPolicy {
                            STITCHING_POLICY_UNSPECIFIED = 0,
                            COMPLETE_AD = 1,
                            COMPLETE_POD = 2,
                            CUT_CURRENT = 3
                        }
                    }

                    /** Properties of an AdTag. */
                    interface IAdTag {

                        /** AdTag uri */
                        uri?: (string|null);
                    }

                    /** Represents an AdTag. */
                    class AdTag implements IAdTag {

                        /**
                         * Constructs a new AdTag.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IAdTag);

                        /** AdTag uri. */
                        public uri: string;

                        /**
                         * Creates a new AdTag instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdTag instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IAdTag): google.cloud.video.stitcher.v1.AdTag;

                        /**
                         * Encodes the specified AdTag message. Does not implicitly {@link google.cloud.video.stitcher.v1.AdTag.verify|verify} messages.
                         * @param message AdTag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IAdTag, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdTag message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.AdTag.verify|verify} messages.
                         * @param message AdTag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IAdTag, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdTag message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdTag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.AdTag;

                        /**
                         * Decodes an AdTag message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdTag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.AdTag;

                        /**
                         * Verifies an AdTag message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdTag message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdTag
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.AdTag;

                        /**
                         * Creates a plain object from an AdTag message. Also converts values to other types if specified.
                         * @param message AdTag
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.AdTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdTag to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ManifestOptions. */
                    interface IManifestOptions {

                        /** ManifestOptions includeRenditions */
                        includeRenditions?: (google.cloud.video.stitcher.v1.IRenditionFilter[]|null);

                        /** ManifestOptions bitrateOrder */
                        bitrateOrder?: (google.cloud.video.stitcher.v1.ManifestOptions.OrderPolicy|keyof typeof google.cloud.video.stitcher.v1.ManifestOptions.OrderPolicy|null);
                    }

                    /** Represents a ManifestOptions. */
                    class ManifestOptions implements IManifestOptions {

                        /**
                         * Constructs a new ManifestOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IManifestOptions);

                        /** ManifestOptions includeRenditions. */
                        public includeRenditions: google.cloud.video.stitcher.v1.IRenditionFilter[];

                        /** ManifestOptions bitrateOrder. */
                        public bitrateOrder: (google.cloud.video.stitcher.v1.ManifestOptions.OrderPolicy|keyof typeof google.cloud.video.stitcher.v1.ManifestOptions.OrderPolicy);

                        /**
                         * Creates a new ManifestOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ManifestOptions instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IManifestOptions): google.cloud.video.stitcher.v1.ManifestOptions;

                        /**
                         * Encodes the specified ManifestOptions message. Does not implicitly {@link google.cloud.video.stitcher.v1.ManifestOptions.verify|verify} messages.
                         * @param message ManifestOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IManifestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ManifestOptions message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ManifestOptions.verify|verify} messages.
                         * @param message ManifestOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IManifestOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ManifestOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ManifestOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ManifestOptions;

                        /**
                         * Decodes a ManifestOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ManifestOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ManifestOptions;

                        /**
                         * Verifies a ManifestOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ManifestOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ManifestOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ManifestOptions;

                        /**
                         * Creates a plain object from a ManifestOptions message. Also converts values to other types if specified.
                         * @param message ManifestOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ManifestOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ManifestOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ManifestOptions {

                        /** OrderPolicy enum. */
                        enum OrderPolicy {
                            ORDER_POLICY_UNSPECIFIED = 0,
                            ASCENDING = 1,
                            DESCENDING = 2
                        }
                    }

                    /** Properties of a RenditionFilter. */
                    interface IRenditionFilter {

                        /** RenditionFilter bitrateBps */
                        bitrateBps?: (number|null);

                        /** RenditionFilter codecs */
                        codecs?: (string|null);
                    }

                    /** Represents a RenditionFilter. */
                    class RenditionFilter implements IRenditionFilter {

                        /**
                         * Constructs a new RenditionFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IRenditionFilter);

                        /** RenditionFilter bitrateBps. */
                        public bitrateBps: number;

                        /** RenditionFilter codecs. */
                        public codecs: string;

                        /**
                         * Creates a new RenditionFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenditionFilter instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IRenditionFilter): google.cloud.video.stitcher.v1.RenditionFilter;

                        /**
                         * Encodes the specified RenditionFilter message. Does not implicitly {@link google.cloud.video.stitcher.v1.RenditionFilter.verify|verify} messages.
                         * @param message RenditionFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IRenditionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenditionFilter message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.RenditionFilter.verify|verify} messages.
                         * @param message RenditionFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IRenditionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenditionFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenditionFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.RenditionFilter;

                        /**
                         * Decodes a RenditionFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenditionFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.RenditionFilter;

                        /**
                         * Verifies a RenditionFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenditionFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenditionFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.RenditionFilter;

                        /**
                         * Creates a plain object from a RenditionFilter message. Also converts values to other types if specified.
                         * @param message RenditionFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.RenditionFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenditionFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Slate. */
                    interface ISlate {

                        /** Slate name */
                        name?: (string|null);

                        /** Slate uri */
                        uri?: (string|null);
                    }

                    /** Represents a Slate. */
                    class Slate implements ISlate {

                        /**
                         * Constructs a new Slate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ISlate);

                        /** Slate name. */
                        public name: string;

                        /** Slate uri. */
                        public uri: string;

                        /**
                         * Creates a new Slate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Slate instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ISlate): google.cloud.video.stitcher.v1.Slate;

                        /**
                         * Encodes the specified Slate message. Does not implicitly {@link google.cloud.video.stitcher.v1.Slate.verify|verify} messages.
                         * @param message Slate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ISlate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Slate message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.Slate.verify|verify} messages.
                         * @param message Slate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ISlate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Slate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Slate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.Slate;

                        /**
                         * Decodes a Slate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Slate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.Slate;

                        /**
                         * Verifies a Slate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Slate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Slate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.Slate;

                        /**
                         * Creates a plain object from a Slate message. Also converts values to other types if specified.
                         * @param message Slate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.Slate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Slate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a VodStitchDetail. */
                    interface IVodStitchDetail {

                        /** VodStitchDetail name */
                        name?: (string|null);

                        /** VodStitchDetail adStitchDetails */
                        adStitchDetails?: (google.cloud.video.stitcher.v1.IAdStitchDetail[]|null);
                    }

                    /** Represents a VodStitchDetail. */
                    class VodStitchDetail implements IVodStitchDetail {

                        /**
                         * Constructs a new VodStitchDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IVodStitchDetail);

                        /** VodStitchDetail name. */
                        public name: string;

                        /** VodStitchDetail adStitchDetails. */
                        public adStitchDetails: google.cloud.video.stitcher.v1.IAdStitchDetail[];

                        /**
                         * Creates a new VodStitchDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VodStitchDetail instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IVodStitchDetail): google.cloud.video.stitcher.v1.VodStitchDetail;

                        /**
                         * Encodes the specified VodStitchDetail message. Does not implicitly {@link google.cloud.video.stitcher.v1.VodStitchDetail.verify|verify} messages.
                         * @param message VodStitchDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IVodStitchDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VodStitchDetail message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.VodStitchDetail.verify|verify} messages.
                         * @param message VodStitchDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IVodStitchDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VodStitchDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VodStitchDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.VodStitchDetail;

                        /**
                         * Decodes a VodStitchDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VodStitchDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.VodStitchDetail;

                        /**
                         * Verifies a VodStitchDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VodStitchDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VodStitchDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.VodStitchDetail;

                        /**
                         * Creates a plain object from a VodStitchDetail message. Also converts values to other types if specified.
                         * @param message VodStitchDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.VodStitchDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VodStitchDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AdStitchDetail. */
                    interface IAdStitchDetail {

                        /** AdStitchDetail adBreakId */
                        adBreakId?: (string|null);

                        /** AdStitchDetail adId */
                        adId?: (string|null);

                        /** AdStitchDetail adTimeOffset */
                        adTimeOffset?: (google.protobuf.IDuration|null);

                        /** AdStitchDetail skipReason */
                        skipReason?: (string|null);

                        /** AdStitchDetail media */
                        media?: ({ [k: string]: google.protobuf.IValue }|null);
                    }

                    /** Represents an AdStitchDetail. */
                    class AdStitchDetail implements IAdStitchDetail {

                        /**
                         * Constructs a new AdStitchDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IAdStitchDetail);

                        /** AdStitchDetail adBreakId. */
                        public adBreakId: string;

                        /** AdStitchDetail adId. */
                        public adId: string;

                        /** AdStitchDetail adTimeOffset. */
                        public adTimeOffset?: (google.protobuf.IDuration|null);

                        /** AdStitchDetail skipReason. */
                        public skipReason: string;

                        /** AdStitchDetail media. */
                        public media: { [k: string]: google.protobuf.IValue };

                        /**
                         * Creates a new AdStitchDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdStitchDetail instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IAdStitchDetail): google.cloud.video.stitcher.v1.AdStitchDetail;

                        /**
                         * Encodes the specified AdStitchDetail message. Does not implicitly {@link google.cloud.video.stitcher.v1.AdStitchDetail.verify|verify} messages.
                         * @param message AdStitchDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IAdStitchDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdStitchDetail message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.AdStitchDetail.verify|verify} messages.
                         * @param message AdStitchDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IAdStitchDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdStitchDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdStitchDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.AdStitchDetail;

                        /**
                         * Decodes an AdStitchDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdStitchDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.AdStitchDetail;

                        /**
                         * Verifies an AdStitchDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdStitchDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdStitchDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.AdStitchDetail;

                        /**
                         * Creates a plain object from an AdStitchDetail message. Also converts values to other types if specified.
                         * @param message AdStitchDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.AdStitchDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdStitchDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a VideoStitcherService */
                    class VideoStitcherService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new VideoStitcherService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new VideoStitcherService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): VideoStitcherService;

                        /**
                         * Calls CreateCdnKey.
                         * @param request CreateCdnKeyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CdnKey
                         */
                        public createCdnKey(request: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.CreateCdnKeyCallback): void;

                        /**
                         * Calls CreateCdnKey.
                         * @param request CreateCdnKeyRequest message or plain object
                         * @returns Promise
                         */
                        public createCdnKey(request: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest): Promise<google.cloud.video.stitcher.v1.CdnKey>;

                        /**
                         * Calls ListCdnKeys.
                         * @param request ListCdnKeysRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCdnKeysResponse
                         */
                        public listCdnKeys(request: google.cloud.video.stitcher.v1.IListCdnKeysRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.ListCdnKeysCallback): void;

                        /**
                         * Calls ListCdnKeys.
                         * @param request ListCdnKeysRequest message or plain object
                         * @returns Promise
                         */
                        public listCdnKeys(request: google.cloud.video.stitcher.v1.IListCdnKeysRequest): Promise<google.cloud.video.stitcher.v1.ListCdnKeysResponse>;

                        /**
                         * Calls GetCdnKey.
                         * @param request GetCdnKeyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CdnKey
                         */
                        public getCdnKey(request: google.cloud.video.stitcher.v1.IGetCdnKeyRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetCdnKeyCallback): void;

                        /**
                         * Calls GetCdnKey.
                         * @param request GetCdnKeyRequest message or plain object
                         * @returns Promise
                         */
                        public getCdnKey(request: google.cloud.video.stitcher.v1.IGetCdnKeyRequest): Promise<google.cloud.video.stitcher.v1.CdnKey>;

                        /**
                         * Calls DeleteCdnKey.
                         * @param request DeleteCdnKeyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteCdnKey(request: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.DeleteCdnKeyCallback): void;

                        /**
                         * Calls DeleteCdnKey.
                         * @param request DeleteCdnKeyRequest message or plain object
                         * @returns Promise
                         */
                        public deleteCdnKey(request: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls UpdateCdnKey.
                         * @param request UpdateCdnKeyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CdnKey
                         */
                        public updateCdnKey(request: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.UpdateCdnKeyCallback): void;

                        /**
                         * Calls UpdateCdnKey.
                         * @param request UpdateCdnKeyRequest message or plain object
                         * @returns Promise
                         */
                        public updateCdnKey(request: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest): Promise<google.cloud.video.stitcher.v1.CdnKey>;

                        /**
                         * Calls CreateVodSession.
                         * @param request CreateVodSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and VodSession
                         */
                        public createVodSession(request: google.cloud.video.stitcher.v1.ICreateVodSessionRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.CreateVodSessionCallback): void;

                        /**
                         * Calls CreateVodSession.
                         * @param request CreateVodSessionRequest message or plain object
                         * @returns Promise
                         */
                        public createVodSession(request: google.cloud.video.stitcher.v1.ICreateVodSessionRequest): Promise<google.cloud.video.stitcher.v1.VodSession>;

                        /**
                         * Calls GetVodSession.
                         * @param request GetVodSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and VodSession
                         */
                        public getVodSession(request: google.cloud.video.stitcher.v1.IGetVodSessionRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetVodSessionCallback): void;

                        /**
                         * Calls GetVodSession.
                         * @param request GetVodSessionRequest message or plain object
                         * @returns Promise
                         */
                        public getVodSession(request: google.cloud.video.stitcher.v1.IGetVodSessionRequest): Promise<google.cloud.video.stitcher.v1.VodSession>;

                        /**
                         * Calls ListVodStitchDetails.
                         * @param request ListVodStitchDetailsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListVodStitchDetailsResponse
                         */
                        public listVodStitchDetails(request: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.ListVodStitchDetailsCallback): void;

                        /**
                         * Calls ListVodStitchDetails.
                         * @param request ListVodStitchDetailsRequest message or plain object
                         * @returns Promise
                         */
                        public listVodStitchDetails(request: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest): Promise<google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse>;

                        /**
                         * Calls GetVodStitchDetail.
                         * @param request GetVodStitchDetailRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and VodStitchDetail
                         */
                        public getVodStitchDetail(request: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetVodStitchDetailCallback): void;

                        /**
                         * Calls GetVodStitchDetail.
                         * @param request GetVodStitchDetailRequest message or plain object
                         * @returns Promise
                         */
                        public getVodStitchDetail(request: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest): Promise<google.cloud.video.stitcher.v1.VodStitchDetail>;

                        /**
                         * Calls ListVodAdTagDetails.
                         * @param request ListVodAdTagDetailsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListVodAdTagDetailsResponse
                         */
                        public listVodAdTagDetails(request: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.ListVodAdTagDetailsCallback): void;

                        /**
                         * Calls ListVodAdTagDetails.
                         * @param request ListVodAdTagDetailsRequest message or plain object
                         * @returns Promise
                         */
                        public listVodAdTagDetails(request: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest): Promise<google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse>;

                        /**
                         * Calls GetVodAdTagDetail.
                         * @param request GetVodAdTagDetailRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and VodAdTagDetail
                         */
                        public getVodAdTagDetail(request: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetVodAdTagDetailCallback): void;

                        /**
                         * Calls GetVodAdTagDetail.
                         * @param request GetVodAdTagDetailRequest message or plain object
                         * @returns Promise
                         */
                        public getVodAdTagDetail(request: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest): Promise<google.cloud.video.stitcher.v1.VodAdTagDetail>;

                        /**
                         * Calls ListLiveAdTagDetails.
                         * @param request ListLiveAdTagDetailsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListLiveAdTagDetailsResponse
                         */
                        public listLiveAdTagDetails(request: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.ListLiveAdTagDetailsCallback): void;

                        /**
                         * Calls ListLiveAdTagDetails.
                         * @param request ListLiveAdTagDetailsRequest message or plain object
                         * @returns Promise
                         */
                        public listLiveAdTagDetails(request: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest): Promise<google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse>;

                        /**
                         * Calls GetLiveAdTagDetail.
                         * @param request GetLiveAdTagDetailRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and LiveAdTagDetail
                         */
                        public getLiveAdTagDetail(request: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetLiveAdTagDetailCallback): void;

                        /**
                         * Calls GetLiveAdTagDetail.
                         * @param request GetLiveAdTagDetailRequest message or plain object
                         * @returns Promise
                         */
                        public getLiveAdTagDetail(request: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest): Promise<google.cloud.video.stitcher.v1.LiveAdTagDetail>;

                        /**
                         * Calls CreateSlate.
                         * @param request CreateSlateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Slate
                         */
                        public createSlate(request: google.cloud.video.stitcher.v1.ICreateSlateRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.CreateSlateCallback): void;

                        /**
                         * Calls CreateSlate.
                         * @param request CreateSlateRequest message or plain object
                         * @returns Promise
                         */
                        public createSlate(request: google.cloud.video.stitcher.v1.ICreateSlateRequest): Promise<google.cloud.video.stitcher.v1.Slate>;

                        /**
                         * Calls ListSlates.
                         * @param request ListSlatesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListSlatesResponse
                         */
                        public listSlates(request: google.cloud.video.stitcher.v1.IListSlatesRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.ListSlatesCallback): void;

                        /**
                         * Calls ListSlates.
                         * @param request ListSlatesRequest message or plain object
                         * @returns Promise
                         */
                        public listSlates(request: google.cloud.video.stitcher.v1.IListSlatesRequest): Promise<google.cloud.video.stitcher.v1.ListSlatesResponse>;

                        /**
                         * Calls GetSlate.
                         * @param request GetSlateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Slate
                         */
                        public getSlate(request: google.cloud.video.stitcher.v1.IGetSlateRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetSlateCallback): void;

                        /**
                         * Calls GetSlate.
                         * @param request GetSlateRequest message or plain object
                         * @returns Promise
                         */
                        public getSlate(request: google.cloud.video.stitcher.v1.IGetSlateRequest): Promise<google.cloud.video.stitcher.v1.Slate>;

                        /**
                         * Calls UpdateSlate.
                         * @param request UpdateSlateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Slate
                         */
                        public updateSlate(request: google.cloud.video.stitcher.v1.IUpdateSlateRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.UpdateSlateCallback): void;

                        /**
                         * Calls UpdateSlate.
                         * @param request UpdateSlateRequest message or plain object
                         * @returns Promise
                         */
                        public updateSlate(request: google.cloud.video.stitcher.v1.IUpdateSlateRequest): Promise<google.cloud.video.stitcher.v1.Slate>;

                        /**
                         * Calls DeleteSlate.
                         * @param request DeleteSlateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteSlate(request: google.cloud.video.stitcher.v1.IDeleteSlateRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.DeleteSlateCallback): void;

                        /**
                         * Calls DeleteSlate.
                         * @param request DeleteSlateRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSlate(request: google.cloud.video.stitcher.v1.IDeleteSlateRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls CreateLiveSession.
                         * @param request CreateLiveSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and LiveSession
                         */
                        public createLiveSession(request: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.CreateLiveSessionCallback): void;

                        /**
                         * Calls CreateLiveSession.
                         * @param request CreateLiveSessionRequest message or plain object
                         * @returns Promise
                         */
                        public createLiveSession(request: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest): Promise<google.cloud.video.stitcher.v1.LiveSession>;

                        /**
                         * Calls GetLiveSession.
                         * @param request GetLiveSessionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and LiveSession
                         */
                        public getLiveSession(request: google.cloud.video.stitcher.v1.IGetLiveSessionRequest, callback: google.cloud.video.stitcher.v1.VideoStitcherService.GetLiveSessionCallback): void;

                        /**
                         * Calls GetLiveSession.
                         * @param request GetLiveSessionRequest message or plain object
                         * @returns Promise
                         */
                        public getLiveSession(request: google.cloud.video.stitcher.v1.IGetLiveSessionRequest): Promise<google.cloud.video.stitcher.v1.LiveSession>;
                    }

                    namespace VideoStitcherService {

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#createCdnKey}.
                         * @param error Error, if any
                         * @param [response] CdnKey
                         */
                        type CreateCdnKeyCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.CdnKey) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#listCdnKeys}.
                         * @param error Error, if any
                         * @param [response] ListCdnKeysResponse
                         */
                        type ListCdnKeysCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.ListCdnKeysResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getCdnKey}.
                         * @param error Error, if any
                         * @param [response] CdnKey
                         */
                        type GetCdnKeyCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.CdnKey) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#deleteCdnKey}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteCdnKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#updateCdnKey}.
                         * @param error Error, if any
                         * @param [response] CdnKey
                         */
                        type UpdateCdnKeyCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.CdnKey) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#createVodSession}.
                         * @param error Error, if any
                         * @param [response] VodSession
                         */
                        type CreateVodSessionCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.VodSession) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getVodSession}.
                         * @param error Error, if any
                         * @param [response] VodSession
                         */
                        type GetVodSessionCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.VodSession) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#listVodStitchDetails}.
                         * @param error Error, if any
                         * @param [response] ListVodStitchDetailsResponse
                         */
                        type ListVodStitchDetailsCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getVodStitchDetail}.
                         * @param error Error, if any
                         * @param [response] VodStitchDetail
                         */
                        type GetVodStitchDetailCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.VodStitchDetail) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#listVodAdTagDetails}.
                         * @param error Error, if any
                         * @param [response] ListVodAdTagDetailsResponse
                         */
                        type ListVodAdTagDetailsCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getVodAdTagDetail}.
                         * @param error Error, if any
                         * @param [response] VodAdTagDetail
                         */
                        type GetVodAdTagDetailCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.VodAdTagDetail) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#listLiveAdTagDetails}.
                         * @param error Error, if any
                         * @param [response] ListLiveAdTagDetailsResponse
                         */
                        type ListLiveAdTagDetailsCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getLiveAdTagDetail}.
                         * @param error Error, if any
                         * @param [response] LiveAdTagDetail
                         */
                        type GetLiveAdTagDetailCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.LiveAdTagDetail) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#createSlate}.
                         * @param error Error, if any
                         * @param [response] Slate
                         */
                        type CreateSlateCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.Slate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#listSlates}.
                         * @param error Error, if any
                         * @param [response] ListSlatesResponse
                         */
                        type ListSlatesCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.ListSlatesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getSlate}.
                         * @param error Error, if any
                         * @param [response] Slate
                         */
                        type GetSlateCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.Slate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#updateSlate}.
                         * @param error Error, if any
                         * @param [response] Slate
                         */
                        type UpdateSlateCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.Slate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#deleteSlate}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteSlateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#createLiveSession}.
                         * @param error Error, if any
                         * @param [response] LiveSession
                         */
                        type CreateLiveSessionCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.LiveSession) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.stitcher.v1.VideoStitcherService#getLiveSession}.
                         * @param error Error, if any
                         * @param [response] LiveSession
                         */
                        type GetLiveSessionCallback = (error: (Error|null), response?: google.cloud.video.stitcher.v1.LiveSession) => void;
                    }

                    /** Properties of a CreateCdnKeyRequest. */
                    interface ICreateCdnKeyRequest {

                        /** CreateCdnKeyRequest parent */
                        parent?: (string|null);

                        /** CreateCdnKeyRequest cdnKey */
                        cdnKey?: (google.cloud.video.stitcher.v1.ICdnKey|null);

                        /** CreateCdnKeyRequest cdnKeyId */
                        cdnKeyId?: (string|null);
                    }

                    /** Represents a CreateCdnKeyRequest. */
                    class CreateCdnKeyRequest implements ICreateCdnKeyRequest {

                        /**
                         * Constructs a new CreateCdnKeyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest);

                        /** CreateCdnKeyRequest parent. */
                        public parent: string;

                        /** CreateCdnKeyRequest cdnKey. */
                        public cdnKey?: (google.cloud.video.stitcher.v1.ICdnKey|null);

                        /** CreateCdnKeyRequest cdnKeyId. */
                        public cdnKeyId: string;

                        /**
                         * Creates a new CreateCdnKeyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateCdnKeyRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest): google.cloud.video.stitcher.v1.CreateCdnKeyRequest;

                        /**
                         * Encodes the specified CreateCdnKeyRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateCdnKeyRequest.verify|verify} messages.
                         * @param message CreateCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateCdnKeyRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateCdnKeyRequest.verify|verify} messages.
                         * @param message CreateCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICreateCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateCdnKeyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CreateCdnKeyRequest;

                        /**
                         * Decodes a CreateCdnKeyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CreateCdnKeyRequest;

                        /**
                         * Verifies a CreateCdnKeyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateCdnKeyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateCdnKeyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CreateCdnKeyRequest;

                        /**
                         * Creates a plain object from a CreateCdnKeyRequest message. Also converts values to other types if specified.
                         * @param message CreateCdnKeyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CreateCdnKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateCdnKeyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListCdnKeysRequest. */
                    interface IListCdnKeysRequest {

                        /** ListCdnKeysRequest parent */
                        parent?: (string|null);

                        /** ListCdnKeysRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCdnKeysRequest pageToken */
                        pageToken?: (string|null);

                        /** ListCdnKeysRequest filter */
                        filter?: (string|null);

                        /** ListCdnKeysRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListCdnKeysRequest. */
                    class ListCdnKeysRequest implements IListCdnKeysRequest {

                        /**
                         * Constructs a new ListCdnKeysRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListCdnKeysRequest);

                        /** ListCdnKeysRequest parent. */
                        public parent: string;

                        /** ListCdnKeysRequest pageSize. */
                        public pageSize: number;

                        /** ListCdnKeysRequest pageToken. */
                        public pageToken: string;

                        /** ListCdnKeysRequest filter. */
                        public filter: string;

                        /** ListCdnKeysRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListCdnKeysRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCdnKeysRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListCdnKeysRequest): google.cloud.video.stitcher.v1.ListCdnKeysRequest;

                        /**
                         * Encodes the specified ListCdnKeysRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListCdnKeysRequest.verify|verify} messages.
                         * @param message ListCdnKeysRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListCdnKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCdnKeysRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListCdnKeysRequest.verify|verify} messages.
                         * @param message ListCdnKeysRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListCdnKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCdnKeysRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCdnKeysRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListCdnKeysRequest;

                        /**
                         * Decodes a ListCdnKeysRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCdnKeysRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListCdnKeysRequest;

                        /**
                         * Verifies a ListCdnKeysRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCdnKeysRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCdnKeysRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListCdnKeysRequest;

                        /**
                         * Creates a plain object from a ListCdnKeysRequest message. Also converts values to other types if specified.
                         * @param message ListCdnKeysRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListCdnKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCdnKeysRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListCdnKeysResponse. */
                    interface IListCdnKeysResponse {

                        /** ListCdnKeysResponse cdnKeys */
                        cdnKeys?: (google.cloud.video.stitcher.v1.ICdnKey[]|null);

                        /** ListCdnKeysResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListCdnKeysResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListCdnKeysResponse. */
                    class ListCdnKeysResponse implements IListCdnKeysResponse {

                        /**
                         * Constructs a new ListCdnKeysResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListCdnKeysResponse);

                        /** ListCdnKeysResponse cdnKeys. */
                        public cdnKeys: google.cloud.video.stitcher.v1.ICdnKey[];

                        /** ListCdnKeysResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListCdnKeysResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListCdnKeysResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCdnKeysResponse instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListCdnKeysResponse): google.cloud.video.stitcher.v1.ListCdnKeysResponse;

                        /**
                         * Encodes the specified ListCdnKeysResponse message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListCdnKeysResponse.verify|verify} messages.
                         * @param message ListCdnKeysResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListCdnKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCdnKeysResponse message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListCdnKeysResponse.verify|verify} messages.
                         * @param message ListCdnKeysResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListCdnKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCdnKeysResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCdnKeysResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListCdnKeysResponse;

                        /**
                         * Decodes a ListCdnKeysResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCdnKeysResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListCdnKeysResponse;

                        /**
                         * Verifies a ListCdnKeysResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCdnKeysResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCdnKeysResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListCdnKeysResponse;

                        /**
                         * Creates a plain object from a ListCdnKeysResponse message. Also converts values to other types if specified.
                         * @param message ListCdnKeysResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListCdnKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCdnKeysResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetCdnKeyRequest. */
                    interface IGetCdnKeyRequest {

                        /** GetCdnKeyRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCdnKeyRequest. */
                    class GetCdnKeyRequest implements IGetCdnKeyRequest {

                        /**
                         * Constructs a new GetCdnKeyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetCdnKeyRequest);

                        /** GetCdnKeyRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCdnKeyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCdnKeyRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetCdnKeyRequest): google.cloud.video.stitcher.v1.GetCdnKeyRequest;

                        /**
                         * Encodes the specified GetCdnKeyRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetCdnKeyRequest.verify|verify} messages.
                         * @param message GetCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCdnKeyRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetCdnKeyRequest.verify|verify} messages.
                         * @param message GetCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCdnKeyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetCdnKeyRequest;

                        /**
                         * Decodes a GetCdnKeyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetCdnKeyRequest;

                        /**
                         * Verifies a GetCdnKeyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCdnKeyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCdnKeyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetCdnKeyRequest;

                        /**
                         * Creates a plain object from a GetCdnKeyRequest message. Also converts values to other types if specified.
                         * @param message GetCdnKeyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetCdnKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCdnKeyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteCdnKeyRequest. */
                    interface IDeleteCdnKeyRequest {

                        /** DeleteCdnKeyRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteCdnKeyRequest. */
                    class DeleteCdnKeyRequest implements IDeleteCdnKeyRequest {

                        /**
                         * Constructs a new DeleteCdnKeyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest);

                        /** DeleteCdnKeyRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteCdnKeyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteCdnKeyRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest): google.cloud.video.stitcher.v1.DeleteCdnKeyRequest;

                        /**
                         * Encodes the specified DeleteCdnKeyRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.DeleteCdnKeyRequest.verify|verify} messages.
                         * @param message DeleteCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteCdnKeyRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.DeleteCdnKeyRequest.verify|verify} messages.
                         * @param message DeleteCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IDeleteCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteCdnKeyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.DeleteCdnKeyRequest;

                        /**
                         * Decodes a DeleteCdnKeyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.DeleteCdnKeyRequest;

                        /**
                         * Verifies a DeleteCdnKeyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteCdnKeyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteCdnKeyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.DeleteCdnKeyRequest;

                        /**
                         * Creates a plain object from a DeleteCdnKeyRequest message. Also converts values to other types if specified.
                         * @param message DeleteCdnKeyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.DeleteCdnKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteCdnKeyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateCdnKeyRequest. */
                    interface IUpdateCdnKeyRequest {

                        /** UpdateCdnKeyRequest cdnKey */
                        cdnKey?: (google.cloud.video.stitcher.v1.ICdnKey|null);

                        /** UpdateCdnKeyRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateCdnKeyRequest. */
                    class UpdateCdnKeyRequest implements IUpdateCdnKeyRequest {

                        /**
                         * Constructs a new UpdateCdnKeyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest);

                        /** UpdateCdnKeyRequest cdnKey. */
                        public cdnKey?: (google.cloud.video.stitcher.v1.ICdnKey|null);

                        /** UpdateCdnKeyRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateCdnKeyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCdnKeyRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest): google.cloud.video.stitcher.v1.UpdateCdnKeyRequest;

                        /**
                         * Encodes the specified UpdateCdnKeyRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.UpdateCdnKeyRequest.verify|verify} messages.
                         * @param message UpdateCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCdnKeyRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.UpdateCdnKeyRequest.verify|verify} messages.
                         * @param message UpdateCdnKeyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IUpdateCdnKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCdnKeyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.UpdateCdnKeyRequest;

                        /**
                         * Decodes an UpdateCdnKeyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCdnKeyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.UpdateCdnKeyRequest;

                        /**
                         * Verifies an UpdateCdnKeyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCdnKeyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCdnKeyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.UpdateCdnKeyRequest;

                        /**
                         * Creates a plain object from an UpdateCdnKeyRequest message. Also converts values to other types if specified.
                         * @param message UpdateCdnKeyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.UpdateCdnKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCdnKeyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateVodSessionRequest. */
                    interface ICreateVodSessionRequest {

                        /** CreateVodSessionRequest parent */
                        parent?: (string|null);

                        /** CreateVodSessionRequest vodSession */
                        vodSession?: (google.cloud.video.stitcher.v1.IVodSession|null);
                    }

                    /** Represents a CreateVodSessionRequest. */
                    class CreateVodSessionRequest implements ICreateVodSessionRequest {

                        /**
                         * Constructs a new CreateVodSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICreateVodSessionRequest);

                        /** CreateVodSessionRequest parent. */
                        public parent: string;

                        /** CreateVodSessionRequest vodSession. */
                        public vodSession?: (google.cloud.video.stitcher.v1.IVodSession|null);

                        /**
                         * Creates a new CreateVodSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateVodSessionRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICreateVodSessionRequest): google.cloud.video.stitcher.v1.CreateVodSessionRequest;

                        /**
                         * Encodes the specified CreateVodSessionRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateVodSessionRequest.verify|verify} messages.
                         * @param message CreateVodSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICreateVodSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateVodSessionRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateVodSessionRequest.verify|verify} messages.
                         * @param message CreateVodSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICreateVodSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateVodSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateVodSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CreateVodSessionRequest;

                        /**
                         * Decodes a CreateVodSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateVodSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CreateVodSessionRequest;

                        /**
                         * Verifies a CreateVodSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateVodSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateVodSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CreateVodSessionRequest;

                        /**
                         * Creates a plain object from a CreateVodSessionRequest message. Also converts values to other types if specified.
                         * @param message CreateVodSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CreateVodSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateVodSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetVodSessionRequest. */
                    interface IGetVodSessionRequest {

                        /** GetVodSessionRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetVodSessionRequest. */
                    class GetVodSessionRequest implements IGetVodSessionRequest {

                        /**
                         * Constructs a new GetVodSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetVodSessionRequest);

                        /** GetVodSessionRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetVodSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetVodSessionRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetVodSessionRequest): google.cloud.video.stitcher.v1.GetVodSessionRequest;

                        /**
                         * Encodes the specified GetVodSessionRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodSessionRequest.verify|verify} messages.
                         * @param message GetVodSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetVodSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetVodSessionRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodSessionRequest.verify|verify} messages.
                         * @param message GetVodSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetVodSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetVodSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetVodSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetVodSessionRequest;

                        /**
                         * Decodes a GetVodSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetVodSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetVodSessionRequest;

                        /**
                         * Verifies a GetVodSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetVodSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetVodSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetVodSessionRequest;

                        /**
                         * Creates a plain object from a GetVodSessionRequest message. Also converts values to other types if specified.
                         * @param message GetVodSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetVodSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetVodSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListVodStitchDetailsRequest. */
                    interface IListVodStitchDetailsRequest {

                        /** ListVodStitchDetailsRequest parent */
                        parent?: (string|null);

                        /** ListVodStitchDetailsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListVodStitchDetailsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListVodStitchDetailsRequest. */
                    class ListVodStitchDetailsRequest implements IListVodStitchDetailsRequest {

                        /**
                         * Constructs a new ListVodStitchDetailsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest);

                        /** ListVodStitchDetailsRequest parent. */
                        public parent: string;

                        /** ListVodStitchDetailsRequest pageSize. */
                        public pageSize: number;

                        /** ListVodStitchDetailsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListVodStitchDetailsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListVodStitchDetailsRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest): google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest;

                        /**
                         * Encodes the specified ListVodStitchDetailsRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest.verify|verify} messages.
                         * @param message ListVodStitchDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListVodStitchDetailsRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest.verify|verify} messages.
                         * @param message ListVodStitchDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListVodStitchDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListVodStitchDetailsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListVodStitchDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest;

                        /**
                         * Decodes a ListVodStitchDetailsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListVodStitchDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest;

                        /**
                         * Verifies a ListVodStitchDetailsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListVodStitchDetailsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListVodStitchDetailsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest;

                        /**
                         * Creates a plain object from a ListVodStitchDetailsRequest message. Also converts values to other types if specified.
                         * @param message ListVodStitchDetailsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListVodStitchDetailsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListVodStitchDetailsResponse. */
                    interface IListVodStitchDetailsResponse {

                        /** ListVodStitchDetailsResponse vodStitchDetails */
                        vodStitchDetails?: (google.cloud.video.stitcher.v1.IVodStitchDetail[]|null);

                        /** ListVodStitchDetailsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListVodStitchDetailsResponse. */
                    class ListVodStitchDetailsResponse implements IListVodStitchDetailsResponse {

                        /**
                         * Constructs a new ListVodStitchDetailsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListVodStitchDetailsResponse);

                        /** ListVodStitchDetailsResponse vodStitchDetails. */
                        public vodStitchDetails: google.cloud.video.stitcher.v1.IVodStitchDetail[];

                        /** ListVodStitchDetailsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListVodStitchDetailsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListVodStitchDetailsResponse instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListVodStitchDetailsResponse): google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse;

                        /**
                         * Encodes the specified ListVodStitchDetailsResponse message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse.verify|verify} messages.
                         * @param message ListVodStitchDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListVodStitchDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListVodStitchDetailsResponse message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse.verify|verify} messages.
                         * @param message ListVodStitchDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListVodStitchDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListVodStitchDetailsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListVodStitchDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse;

                        /**
                         * Decodes a ListVodStitchDetailsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListVodStitchDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse;

                        /**
                         * Verifies a ListVodStitchDetailsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListVodStitchDetailsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListVodStitchDetailsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse;

                        /**
                         * Creates a plain object from a ListVodStitchDetailsResponse message. Also converts values to other types if specified.
                         * @param message ListVodStitchDetailsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListVodStitchDetailsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetVodStitchDetailRequest. */
                    interface IGetVodStitchDetailRequest {

                        /** GetVodStitchDetailRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetVodStitchDetailRequest. */
                    class GetVodStitchDetailRequest implements IGetVodStitchDetailRequest {

                        /**
                         * Constructs a new GetVodStitchDetailRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest);

                        /** GetVodStitchDetailRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetVodStitchDetailRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetVodStitchDetailRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest): google.cloud.video.stitcher.v1.GetVodStitchDetailRequest;

                        /**
                         * Encodes the specified GetVodStitchDetailRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodStitchDetailRequest.verify|verify} messages.
                         * @param message GetVodStitchDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetVodStitchDetailRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodStitchDetailRequest.verify|verify} messages.
                         * @param message GetVodStitchDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetVodStitchDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetVodStitchDetailRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetVodStitchDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetVodStitchDetailRequest;

                        /**
                         * Decodes a GetVodStitchDetailRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetVodStitchDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetVodStitchDetailRequest;

                        /**
                         * Verifies a GetVodStitchDetailRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetVodStitchDetailRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetVodStitchDetailRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetVodStitchDetailRequest;

                        /**
                         * Creates a plain object from a GetVodStitchDetailRequest message. Also converts values to other types if specified.
                         * @param message GetVodStitchDetailRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetVodStitchDetailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetVodStitchDetailRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListVodAdTagDetailsRequest. */
                    interface IListVodAdTagDetailsRequest {

                        /** ListVodAdTagDetailsRequest parent */
                        parent?: (string|null);

                        /** ListVodAdTagDetailsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListVodAdTagDetailsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListVodAdTagDetailsRequest. */
                    class ListVodAdTagDetailsRequest implements IListVodAdTagDetailsRequest {

                        /**
                         * Constructs a new ListVodAdTagDetailsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest);

                        /** ListVodAdTagDetailsRequest parent. */
                        public parent: string;

                        /** ListVodAdTagDetailsRequest pageSize. */
                        public pageSize: number;

                        /** ListVodAdTagDetailsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListVodAdTagDetailsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListVodAdTagDetailsRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest): google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest;

                        /**
                         * Encodes the specified ListVodAdTagDetailsRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest.verify|verify} messages.
                         * @param message ListVodAdTagDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListVodAdTagDetailsRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest.verify|verify} messages.
                         * @param message ListVodAdTagDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListVodAdTagDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListVodAdTagDetailsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListVodAdTagDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest;

                        /**
                         * Decodes a ListVodAdTagDetailsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListVodAdTagDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest;

                        /**
                         * Verifies a ListVodAdTagDetailsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListVodAdTagDetailsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListVodAdTagDetailsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest;

                        /**
                         * Creates a plain object from a ListVodAdTagDetailsRequest message. Also converts values to other types if specified.
                         * @param message ListVodAdTagDetailsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListVodAdTagDetailsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListVodAdTagDetailsResponse. */
                    interface IListVodAdTagDetailsResponse {

                        /** ListVodAdTagDetailsResponse vodAdTagDetails */
                        vodAdTagDetails?: (google.cloud.video.stitcher.v1.IVodAdTagDetail[]|null);

                        /** ListVodAdTagDetailsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListVodAdTagDetailsResponse. */
                    class ListVodAdTagDetailsResponse implements IListVodAdTagDetailsResponse {

                        /**
                         * Constructs a new ListVodAdTagDetailsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListVodAdTagDetailsResponse);

                        /** ListVodAdTagDetailsResponse vodAdTagDetails. */
                        public vodAdTagDetails: google.cloud.video.stitcher.v1.IVodAdTagDetail[];

                        /** ListVodAdTagDetailsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListVodAdTagDetailsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListVodAdTagDetailsResponse instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListVodAdTagDetailsResponse): google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse;

                        /**
                         * Encodes the specified ListVodAdTagDetailsResponse message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse.verify|verify} messages.
                         * @param message ListVodAdTagDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListVodAdTagDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListVodAdTagDetailsResponse message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse.verify|verify} messages.
                         * @param message ListVodAdTagDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListVodAdTagDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListVodAdTagDetailsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListVodAdTagDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse;

                        /**
                         * Decodes a ListVodAdTagDetailsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListVodAdTagDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse;

                        /**
                         * Verifies a ListVodAdTagDetailsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListVodAdTagDetailsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListVodAdTagDetailsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse;

                        /**
                         * Creates a plain object from a ListVodAdTagDetailsResponse message. Also converts values to other types if specified.
                         * @param message ListVodAdTagDetailsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListVodAdTagDetailsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetVodAdTagDetailRequest. */
                    interface IGetVodAdTagDetailRequest {

                        /** GetVodAdTagDetailRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetVodAdTagDetailRequest. */
                    class GetVodAdTagDetailRequest implements IGetVodAdTagDetailRequest {

                        /**
                         * Constructs a new GetVodAdTagDetailRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest);

                        /** GetVodAdTagDetailRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetVodAdTagDetailRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetVodAdTagDetailRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest): google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest;

                        /**
                         * Encodes the specified GetVodAdTagDetailRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest.verify|verify} messages.
                         * @param message GetVodAdTagDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetVodAdTagDetailRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest.verify|verify} messages.
                         * @param message GetVodAdTagDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetVodAdTagDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetVodAdTagDetailRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetVodAdTagDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest;

                        /**
                         * Decodes a GetVodAdTagDetailRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetVodAdTagDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest;

                        /**
                         * Verifies a GetVodAdTagDetailRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetVodAdTagDetailRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetVodAdTagDetailRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest;

                        /**
                         * Creates a plain object from a GetVodAdTagDetailRequest message. Also converts values to other types if specified.
                         * @param message GetVodAdTagDetailRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetVodAdTagDetailRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListLiveAdTagDetailsRequest. */
                    interface IListLiveAdTagDetailsRequest {

                        /** ListLiveAdTagDetailsRequest parent */
                        parent?: (string|null);

                        /** ListLiveAdTagDetailsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListLiveAdTagDetailsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListLiveAdTagDetailsRequest. */
                    class ListLiveAdTagDetailsRequest implements IListLiveAdTagDetailsRequest {

                        /**
                         * Constructs a new ListLiveAdTagDetailsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest);

                        /** ListLiveAdTagDetailsRequest parent. */
                        public parent: string;

                        /** ListLiveAdTagDetailsRequest pageSize. */
                        public pageSize: number;

                        /** ListLiveAdTagDetailsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListLiveAdTagDetailsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListLiveAdTagDetailsRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest;

                        /**
                         * Encodes the specified ListLiveAdTagDetailsRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest.verify|verify} messages.
                         * @param message ListLiveAdTagDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListLiveAdTagDetailsRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest.verify|verify} messages.
                         * @param message ListLiveAdTagDetailsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListLiveAdTagDetailsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListLiveAdTagDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest;

                        /**
                         * Decodes a ListLiveAdTagDetailsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListLiveAdTagDetailsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest;

                        /**
                         * Verifies a ListLiveAdTagDetailsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListLiveAdTagDetailsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListLiveAdTagDetailsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest;

                        /**
                         * Creates a plain object from a ListLiveAdTagDetailsRequest message. Also converts values to other types if specified.
                         * @param message ListLiveAdTagDetailsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListLiveAdTagDetailsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListLiveAdTagDetailsResponse. */
                    interface IListLiveAdTagDetailsResponse {

                        /** ListLiveAdTagDetailsResponse liveAdTagDetails */
                        liveAdTagDetails?: (google.cloud.video.stitcher.v1.ILiveAdTagDetail[]|null);

                        /** ListLiveAdTagDetailsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListLiveAdTagDetailsResponse. */
                    class ListLiveAdTagDetailsResponse implements IListLiveAdTagDetailsResponse {

                        /**
                         * Constructs a new ListLiveAdTagDetailsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsResponse);

                        /** ListLiveAdTagDetailsResponse liveAdTagDetails. */
                        public liveAdTagDetails: google.cloud.video.stitcher.v1.ILiveAdTagDetail[];

                        /** ListLiveAdTagDetailsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListLiveAdTagDetailsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListLiveAdTagDetailsResponse instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsResponse): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse;

                        /**
                         * Encodes the specified ListLiveAdTagDetailsResponse message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse.verify|verify} messages.
                         * @param message ListLiveAdTagDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListLiveAdTagDetailsResponse message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse.verify|verify} messages.
                         * @param message ListLiveAdTagDetailsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListLiveAdTagDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListLiveAdTagDetailsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListLiveAdTagDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse;

                        /**
                         * Decodes a ListLiveAdTagDetailsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListLiveAdTagDetailsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse;

                        /**
                         * Verifies a ListLiveAdTagDetailsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListLiveAdTagDetailsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListLiveAdTagDetailsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse;

                        /**
                         * Creates a plain object from a ListLiveAdTagDetailsResponse message. Also converts values to other types if specified.
                         * @param message ListLiveAdTagDetailsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListLiveAdTagDetailsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetLiveAdTagDetailRequest. */
                    interface IGetLiveAdTagDetailRequest {

                        /** GetLiveAdTagDetailRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetLiveAdTagDetailRequest. */
                    class GetLiveAdTagDetailRequest implements IGetLiveAdTagDetailRequest {

                        /**
                         * Constructs a new GetLiveAdTagDetailRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest);

                        /** GetLiveAdTagDetailRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetLiveAdTagDetailRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetLiveAdTagDetailRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest): google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest;

                        /**
                         * Encodes the specified GetLiveAdTagDetailRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest.verify|verify} messages.
                         * @param message GetLiveAdTagDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetLiveAdTagDetailRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest.verify|verify} messages.
                         * @param message GetLiveAdTagDetailRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetLiveAdTagDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetLiveAdTagDetailRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetLiveAdTagDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest;

                        /**
                         * Decodes a GetLiveAdTagDetailRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetLiveAdTagDetailRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest;

                        /**
                         * Verifies a GetLiveAdTagDetailRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetLiveAdTagDetailRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetLiveAdTagDetailRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest;

                        /**
                         * Creates a plain object from a GetLiveAdTagDetailRequest message. Also converts values to other types if specified.
                         * @param message GetLiveAdTagDetailRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetLiveAdTagDetailRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateSlateRequest. */
                    interface ICreateSlateRequest {

                        /** CreateSlateRequest parent */
                        parent?: (string|null);

                        /** CreateSlateRequest slateId */
                        slateId?: (string|null);

                        /** CreateSlateRequest slate */
                        slate?: (google.cloud.video.stitcher.v1.ISlate|null);
                    }

                    /** Represents a CreateSlateRequest. */
                    class CreateSlateRequest implements ICreateSlateRequest {

                        /**
                         * Constructs a new CreateSlateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICreateSlateRequest);

                        /** CreateSlateRequest parent. */
                        public parent: string;

                        /** CreateSlateRequest slateId. */
                        public slateId: string;

                        /** CreateSlateRequest slate. */
                        public slate?: (google.cloud.video.stitcher.v1.ISlate|null);

                        /**
                         * Creates a new CreateSlateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateSlateRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICreateSlateRequest): google.cloud.video.stitcher.v1.CreateSlateRequest;

                        /**
                         * Encodes the specified CreateSlateRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateSlateRequest.verify|verify} messages.
                         * @param message CreateSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICreateSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateSlateRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateSlateRequest.verify|verify} messages.
                         * @param message CreateSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICreateSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateSlateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CreateSlateRequest;

                        /**
                         * Decodes a CreateSlateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CreateSlateRequest;

                        /**
                         * Verifies a CreateSlateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateSlateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateSlateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CreateSlateRequest;

                        /**
                         * Creates a plain object from a CreateSlateRequest message. Also converts values to other types if specified.
                         * @param message CreateSlateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CreateSlateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateSlateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetSlateRequest. */
                    interface IGetSlateRequest {

                        /** GetSlateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetSlateRequest. */
                    class GetSlateRequest implements IGetSlateRequest {

                        /**
                         * Constructs a new GetSlateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetSlateRequest);

                        /** GetSlateRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetSlateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSlateRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetSlateRequest): google.cloud.video.stitcher.v1.GetSlateRequest;

                        /**
                         * Encodes the specified GetSlateRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetSlateRequest.verify|verify} messages.
                         * @param message GetSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSlateRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetSlateRequest.verify|verify} messages.
                         * @param message GetSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSlateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetSlateRequest;

                        /**
                         * Decodes a GetSlateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetSlateRequest;

                        /**
                         * Verifies a GetSlateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSlateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSlateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetSlateRequest;

                        /**
                         * Creates a plain object from a GetSlateRequest message. Also converts values to other types if specified.
                         * @param message GetSlateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetSlateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSlateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListSlatesRequest. */
                    interface IListSlatesRequest {

                        /** ListSlatesRequest parent */
                        parent?: (string|null);

                        /** ListSlatesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListSlatesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListSlatesRequest filter */
                        filter?: (string|null);

                        /** ListSlatesRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListSlatesRequest. */
                    class ListSlatesRequest implements IListSlatesRequest {

                        /**
                         * Constructs a new ListSlatesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListSlatesRequest);

                        /** ListSlatesRequest parent. */
                        public parent: string;

                        /** ListSlatesRequest pageSize. */
                        public pageSize: number;

                        /** ListSlatesRequest pageToken. */
                        public pageToken: string;

                        /** ListSlatesRequest filter. */
                        public filter: string;

                        /** ListSlatesRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListSlatesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSlatesRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListSlatesRequest): google.cloud.video.stitcher.v1.ListSlatesRequest;

                        /**
                         * Encodes the specified ListSlatesRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListSlatesRequest.verify|verify} messages.
                         * @param message ListSlatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListSlatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSlatesRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListSlatesRequest.verify|verify} messages.
                         * @param message ListSlatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListSlatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSlatesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSlatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListSlatesRequest;

                        /**
                         * Decodes a ListSlatesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSlatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListSlatesRequest;

                        /**
                         * Verifies a ListSlatesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSlatesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSlatesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListSlatesRequest;

                        /**
                         * Creates a plain object from a ListSlatesRequest message. Also converts values to other types if specified.
                         * @param message ListSlatesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListSlatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSlatesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListSlatesResponse. */
                    interface IListSlatesResponse {

                        /** ListSlatesResponse slates */
                        slates?: (google.cloud.video.stitcher.v1.ISlate[]|null);

                        /** ListSlatesResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListSlatesResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListSlatesResponse. */
                    class ListSlatesResponse implements IListSlatesResponse {

                        /**
                         * Constructs a new ListSlatesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IListSlatesResponse);

                        /** ListSlatesResponse slates. */
                        public slates: google.cloud.video.stitcher.v1.ISlate[];

                        /** ListSlatesResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListSlatesResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListSlatesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSlatesResponse instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IListSlatesResponse): google.cloud.video.stitcher.v1.ListSlatesResponse;

                        /**
                         * Encodes the specified ListSlatesResponse message. Does not implicitly {@link google.cloud.video.stitcher.v1.ListSlatesResponse.verify|verify} messages.
                         * @param message ListSlatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IListSlatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSlatesResponse message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.ListSlatesResponse.verify|verify} messages.
                         * @param message ListSlatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IListSlatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSlatesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSlatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.ListSlatesResponse;

                        /**
                         * Decodes a ListSlatesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSlatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.ListSlatesResponse;

                        /**
                         * Verifies a ListSlatesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSlatesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSlatesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.ListSlatesResponse;

                        /**
                         * Creates a plain object from a ListSlatesResponse message. Also converts values to other types if specified.
                         * @param message ListSlatesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.ListSlatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSlatesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateSlateRequest. */
                    interface IUpdateSlateRequest {

                        /** UpdateSlateRequest slate */
                        slate?: (google.cloud.video.stitcher.v1.ISlate|null);

                        /** UpdateSlateRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateSlateRequest. */
                    class UpdateSlateRequest implements IUpdateSlateRequest {

                        /**
                         * Constructs a new UpdateSlateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IUpdateSlateRequest);

                        /** UpdateSlateRequest slate. */
                        public slate?: (google.cloud.video.stitcher.v1.ISlate|null);

                        /** UpdateSlateRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateSlateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateSlateRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IUpdateSlateRequest): google.cloud.video.stitcher.v1.UpdateSlateRequest;

                        /**
                         * Encodes the specified UpdateSlateRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.UpdateSlateRequest.verify|verify} messages.
                         * @param message UpdateSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IUpdateSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateSlateRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.UpdateSlateRequest.verify|verify} messages.
                         * @param message UpdateSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IUpdateSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateSlateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.UpdateSlateRequest;

                        /**
                         * Decodes an UpdateSlateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.UpdateSlateRequest;

                        /**
                         * Verifies an UpdateSlateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateSlateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateSlateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.UpdateSlateRequest;

                        /**
                         * Creates a plain object from an UpdateSlateRequest message. Also converts values to other types if specified.
                         * @param message UpdateSlateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.UpdateSlateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateSlateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteSlateRequest. */
                    interface IDeleteSlateRequest {

                        /** DeleteSlateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteSlateRequest. */
                    class DeleteSlateRequest implements IDeleteSlateRequest {

                        /**
                         * Constructs a new DeleteSlateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IDeleteSlateRequest);

                        /** DeleteSlateRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteSlateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSlateRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IDeleteSlateRequest): google.cloud.video.stitcher.v1.DeleteSlateRequest;

                        /**
                         * Encodes the specified DeleteSlateRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.DeleteSlateRequest.verify|verify} messages.
                         * @param message DeleteSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IDeleteSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSlateRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.DeleteSlateRequest.verify|verify} messages.
                         * @param message DeleteSlateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IDeleteSlateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSlateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.DeleteSlateRequest;

                        /**
                         * Decodes a DeleteSlateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSlateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.DeleteSlateRequest;

                        /**
                         * Verifies a DeleteSlateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSlateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSlateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.DeleteSlateRequest;

                        /**
                         * Creates a plain object from a DeleteSlateRequest message. Also converts values to other types if specified.
                         * @param message DeleteSlateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.DeleteSlateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSlateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateLiveSessionRequest. */
                    interface ICreateLiveSessionRequest {

                        /** CreateLiveSessionRequest parent */
                        parent?: (string|null);

                        /** CreateLiveSessionRequest liveSession */
                        liveSession?: (google.cloud.video.stitcher.v1.ILiveSession|null);
                    }

                    /** Represents a CreateLiveSessionRequest. */
                    class CreateLiveSessionRequest implements ICreateLiveSessionRequest {

                        /**
                         * Constructs a new CreateLiveSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest);

                        /** CreateLiveSessionRequest parent. */
                        public parent: string;

                        /** CreateLiveSessionRequest liveSession. */
                        public liveSession?: (google.cloud.video.stitcher.v1.ILiveSession|null);

                        /**
                         * Creates a new CreateLiveSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateLiveSessionRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest): google.cloud.video.stitcher.v1.CreateLiveSessionRequest;

                        /**
                         * Encodes the specified CreateLiveSessionRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateLiveSessionRequest.verify|verify} messages.
                         * @param message CreateLiveSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateLiveSessionRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.CreateLiveSessionRequest.verify|verify} messages.
                         * @param message CreateLiveSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.ICreateLiveSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateLiveSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateLiveSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.CreateLiveSessionRequest;

                        /**
                         * Decodes a CreateLiveSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateLiveSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.CreateLiveSessionRequest;

                        /**
                         * Verifies a CreateLiveSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateLiveSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateLiveSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.CreateLiveSessionRequest;

                        /**
                         * Creates a plain object from a CreateLiveSessionRequest message. Also converts values to other types if specified.
                         * @param message CreateLiveSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.CreateLiveSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateLiveSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetLiveSessionRequest. */
                    interface IGetLiveSessionRequest {

                        /** GetLiveSessionRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetLiveSessionRequest. */
                    class GetLiveSessionRequest implements IGetLiveSessionRequest {

                        /**
                         * Constructs a new GetLiveSessionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.stitcher.v1.IGetLiveSessionRequest);

                        /** GetLiveSessionRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetLiveSessionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetLiveSessionRequest instance
                         */
                        public static create(properties?: google.cloud.video.stitcher.v1.IGetLiveSessionRequest): google.cloud.video.stitcher.v1.GetLiveSessionRequest;

                        /**
                         * Encodes the specified GetLiveSessionRequest message. Does not implicitly {@link google.cloud.video.stitcher.v1.GetLiveSessionRequest.verify|verify} messages.
                         * @param message GetLiveSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.stitcher.v1.IGetLiveSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetLiveSessionRequest message, length delimited. Does not implicitly {@link google.cloud.video.stitcher.v1.GetLiveSessionRequest.verify|verify} messages.
                         * @param message GetLiveSessionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.stitcher.v1.IGetLiveSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetLiveSessionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetLiveSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.stitcher.v1.GetLiveSessionRequest;

                        /**
                         * Decodes a GetLiveSessionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetLiveSessionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.stitcher.v1.GetLiveSessionRequest;

                        /**
                         * Verifies a GetLiveSessionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetLiveSessionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetLiveSessionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.stitcher.v1.GetLiveSessionRequest;

                        /**
                         * Creates a plain object from a GetLiveSessionRequest message. Also converts values to other types if specified.
                         * @param message GetLiveSessionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.stitcher.v1.GetLiveSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetLiveSessionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
