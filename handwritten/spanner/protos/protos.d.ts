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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

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

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo reason */
            reason?: (string|null);

            /** ErrorInfo domain */
            domain?: (string|null);

            /** ErrorInfo metadata */
            metadata?: ({ [k: string]: string }|null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IErrorInfo);

            /** ErrorInfo reason. */
            public reason: string;

            /** ErrorInfo domain. */
            public domain: string;

            /** ErrorInfo metadata. */
            public metadata: { [k: string]: string };

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorInfo instance
             */
            public static create(properties?: google.rpc.IErrorInfo): google.rpc.ErrorInfo;

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.ErrorInfo;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.ErrorInfo;

            /**
             * Verifies an ErrorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.ErrorInfo;

            /**
             * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
             * @param message ErrorInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ErrorInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RetryInfo. */
        interface IRetryInfo {

            /** RetryInfo retryDelay */
            retryDelay?: (google.protobuf.IDuration|null);
        }

        /** Represents a RetryInfo. */
        class RetryInfo implements IRetryInfo {

            /**
             * Constructs a new RetryInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRetryInfo);

            /** RetryInfo retryDelay. */
            public retryDelay?: (google.protobuf.IDuration|null);

            /**
             * Creates a new RetryInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetryInfo instance
             */
            public static create(properties?: google.rpc.IRetryInfo): google.rpc.RetryInfo;

            /**
             * Encodes the specified RetryInfo message. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.RetryInfo;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.RetryInfo;

            /**
             * Verifies a RetryInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RetryInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.RetryInfo;

            /**
             * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
             * @param message RetryInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.RetryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RetryInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RetryInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DebugInfo. */
        interface IDebugInfo {

            /** DebugInfo stackEntries */
            stackEntries?: (string[]|null);

            /** DebugInfo detail */
            detail?: (string|null);
        }

        /** Represents a DebugInfo. */
        class DebugInfo implements IDebugInfo {

            /**
             * Constructs a new DebugInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IDebugInfo);

            /** DebugInfo stackEntries. */
            public stackEntries: string[];

            /** DebugInfo detail. */
            public detail: string;

            /**
             * Creates a new DebugInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DebugInfo instance
             */
            public static create(properties?: google.rpc.IDebugInfo): google.rpc.DebugInfo;

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.DebugInfo;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.DebugInfo;

            /**
             * Verifies a DebugInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DebugInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.DebugInfo;

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @param message DebugInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DebugInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DebugInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a QuotaFailure. */
        interface IQuotaFailure {

            /** QuotaFailure violations */
            violations?: (google.rpc.QuotaFailure.IViolation[]|null);
        }

        /** Represents a QuotaFailure. */
        class QuotaFailure implements IQuotaFailure {

            /**
             * Constructs a new QuotaFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IQuotaFailure);

            /** QuotaFailure violations. */
            public violations: google.rpc.QuotaFailure.IViolation[];

            /**
             * Creates a new QuotaFailure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuotaFailure instance
             */
            public static create(properties?: google.rpc.IQuotaFailure): google.rpc.QuotaFailure;

            /**
             * Encodes the specified QuotaFailure message. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @param message QuotaFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IQuotaFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuotaFailure message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @param message QuotaFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IQuotaFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.QuotaFailure;

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.QuotaFailure;

            /**
             * Verifies a QuotaFailure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuotaFailure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuotaFailure
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.QuotaFailure;

            /**
             * Creates a plain object from a QuotaFailure message. Also converts values to other types if specified.
             * @param message QuotaFailure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.QuotaFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuotaFailure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for QuotaFailure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace QuotaFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);

                /** Violation apiService */
                apiService?: (string|null);

                /** Violation quotaMetric */
                quotaMetric?: (string|null);

                /** Violation quotaId */
                quotaId?: (string|null);

                /** Violation quotaDimensions */
                quotaDimensions?: ({ [k: string]: string }|null);

                /** Violation quotaValue */
                quotaValue?: (number|Long|string|null);

                /** Violation futureQuotaValue */
                futureQuotaValue?: (number|Long|string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.QuotaFailure.IViolation);

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /** Violation apiService. */
                public apiService: string;

                /** Violation quotaMetric. */
                public quotaMetric: string;

                /** Violation quotaId. */
                public quotaId: string;

                /** Violation quotaDimensions. */
                public quotaDimensions: { [k: string]: string };

                /** Violation quotaValue. */
                public quotaValue: (number|Long|string);

                /** Violation futureQuotaValue. */
                public futureQuotaValue?: (number|Long|string|null);

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Violation instance
                 */
                public static create(properties?: google.rpc.QuotaFailure.IViolation): google.rpc.QuotaFailure.Violation;

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.QuotaFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.QuotaFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.QuotaFailure.Violation;

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.QuotaFailure.Violation;

                /**
                 * Verifies a Violation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Violation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.QuotaFailure.Violation;

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @param message Violation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.QuotaFailure.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Violation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Violation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a PreconditionFailure. */
        interface IPreconditionFailure {

            /** PreconditionFailure violations */
            violations?: (google.rpc.PreconditionFailure.IViolation[]|null);
        }

        /** Represents a PreconditionFailure. */
        class PreconditionFailure implements IPreconditionFailure {

            /**
             * Constructs a new PreconditionFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IPreconditionFailure);

            /** PreconditionFailure violations. */
            public violations: google.rpc.PreconditionFailure.IViolation[];

            /**
             * Creates a new PreconditionFailure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PreconditionFailure instance
             */
            public static create(properties?: google.rpc.IPreconditionFailure): google.rpc.PreconditionFailure;

            /**
             * Encodes the specified PreconditionFailure message. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @param message PreconditionFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IPreconditionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PreconditionFailure message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @param message PreconditionFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IPreconditionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.PreconditionFailure;

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.PreconditionFailure;

            /**
             * Verifies a PreconditionFailure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PreconditionFailure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PreconditionFailure
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.PreconditionFailure;

            /**
             * Creates a plain object from a PreconditionFailure message. Also converts values to other types if specified.
             * @param message PreconditionFailure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.PreconditionFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PreconditionFailure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PreconditionFailure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PreconditionFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation type */
                type?: (string|null);

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.PreconditionFailure.IViolation);

                /** Violation type. */
                public type: string;

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Violation instance
                 */
                public static create(properties?: google.rpc.PreconditionFailure.IViolation): google.rpc.PreconditionFailure.Violation;

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.PreconditionFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.PreconditionFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.PreconditionFailure.Violation;

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.PreconditionFailure.Violation;

                /**
                 * Verifies a Violation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Violation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.PreconditionFailure.Violation;

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @param message Violation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.PreconditionFailure.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Violation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Violation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a BadRequest. */
        interface IBadRequest {

            /** BadRequest fieldViolations */
            fieldViolations?: (google.rpc.BadRequest.IFieldViolation[]|null);
        }

        /** Represents a BadRequest. */
        class BadRequest implements IBadRequest {

            /**
             * Constructs a new BadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IBadRequest);

            /** BadRequest fieldViolations. */
            public fieldViolations: google.rpc.BadRequest.IFieldViolation[];

            /**
             * Creates a new BadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BadRequest instance
             */
            public static create(properties?: google.rpc.IBadRequest): google.rpc.BadRequest;

            /**
             * Encodes the specified BadRequest message. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @param message BadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BadRequest message, length delimited. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @param message BadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.BadRequest;

            /**
             * Decodes a BadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.BadRequest;

            /**
             * Verifies a BadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BadRequest
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.BadRequest;

            /**
             * Creates a plain object from a BadRequest message. Also converts values to other types if specified.
             * @param message BadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.BadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BadRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BadRequest {

            /** Properties of a FieldViolation. */
            interface IFieldViolation {

                /** FieldViolation field */
                field?: (string|null);

                /** FieldViolation description */
                description?: (string|null);

                /** FieldViolation reason */
                reason?: (string|null);

                /** FieldViolation localizedMessage */
                localizedMessage?: (google.rpc.ILocalizedMessage|null);
            }

            /** Represents a FieldViolation. */
            class FieldViolation implements IFieldViolation {

                /**
                 * Constructs a new FieldViolation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.BadRequest.IFieldViolation);

                /** FieldViolation field. */
                public field: string;

                /** FieldViolation description. */
                public description: string;

                /** FieldViolation reason. */
                public reason: string;

                /** FieldViolation localizedMessage. */
                public localizedMessage?: (google.rpc.ILocalizedMessage|null);

                /**
                 * Creates a new FieldViolation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FieldViolation instance
                 */
                public static create(properties?: google.rpc.BadRequest.IFieldViolation): google.rpc.BadRequest.FieldViolation;

                /**
                 * Encodes the specified FieldViolation message. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @param message FieldViolation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.BadRequest.IFieldViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FieldViolation message, length delimited. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @param message FieldViolation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.BadRequest.IFieldViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.BadRequest.FieldViolation;

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.BadRequest.FieldViolation;

                /**
                 * Verifies a FieldViolation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FieldViolation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FieldViolation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.BadRequest.FieldViolation;

                /**
                 * Creates a plain object from a FieldViolation message. Also converts values to other types if specified.
                 * @param message FieldViolation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.BadRequest.FieldViolation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FieldViolation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FieldViolation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo requestId */
            requestId?: (string|null);

            /** RequestInfo servingData */
            servingData?: (string|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRequestInfo);

            /** RequestInfo requestId. */
            public requestId: string;

            /** RequestInfo servingData. */
            public servingData: string;

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInfo instance
             */
            public static create(properties?: google.rpc.IRequestInfo): google.rpc.RequestInfo;

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.RequestInfo;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.RequestInfo;

            /**
             * Verifies a RequestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.RequestInfo;

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @param message RequestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RequestInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResourceInfo. */
        interface IResourceInfo {

            /** ResourceInfo resourceType */
            resourceType?: (string|null);

            /** ResourceInfo resourceName */
            resourceName?: (string|null);

            /** ResourceInfo owner */
            owner?: (string|null);

            /** ResourceInfo description */
            description?: (string|null);
        }

        /** Represents a ResourceInfo. */
        class ResourceInfo implements IResourceInfo {

            /**
             * Constructs a new ResourceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IResourceInfo);

            /** ResourceInfo resourceType. */
            public resourceType: string;

            /** ResourceInfo resourceName. */
            public resourceName: string;

            /** ResourceInfo owner. */
            public owner: string;

            /** ResourceInfo description. */
            public description: string;

            /**
             * Creates a new ResourceInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceInfo instance
             */
            public static create(properties?: google.rpc.IResourceInfo): google.rpc.ResourceInfo;

            /**
             * Encodes the specified ResourceInfo message. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @param message ResourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @param message ResourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.ResourceInfo;

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.ResourceInfo;

            /**
             * Verifies a ResourceInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.ResourceInfo;

            /**
             * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
             * @param message ResourceInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.ResourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Help. */
        interface IHelp {

            /** Help links */
            links?: (google.rpc.Help.ILink[]|null);
        }

        /** Represents a Help. */
        class Help implements IHelp {

            /**
             * Constructs a new Help.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IHelp);

            /** Help links. */
            public links: google.rpc.Help.ILink[];

            /**
             * Creates a new Help instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Help instance
             */
            public static create(properties?: google.rpc.IHelp): google.rpc.Help;

            /**
             * Encodes the specified Help message. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @param message Help message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IHelp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Help message, length delimited. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @param message Help message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IHelp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Help message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Help;

            /**
             * Decodes a Help message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Help;

            /**
             * Verifies a Help message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Help message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Help
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Help;

            /**
             * Creates a plain object from a Help message. Also converts values to other types if specified.
             * @param message Help
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Help, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Help to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Help
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Help {

            /** Properties of a Link. */
            interface ILink {

                /** Link description */
                description?: (string|null);

                /** Link url */
                url?: (string|null);
            }

            /** Represents a Link. */
            class Link implements ILink {

                /**
                 * Constructs a new Link.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.Help.ILink);

                /** Link description. */
                public description: string;

                /** Link url. */
                public url: string;

                /**
                 * Creates a new Link instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Link instance
                 */
                public static create(properties?: google.rpc.Help.ILink): google.rpc.Help.Link;

                /**
                 * Encodes the specified Link message. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.Help.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Link message, length delimited. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.Help.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Link message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Help.Link;

                /**
                 * Decodes a Link message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Help.Link;

                /**
                 * Verifies a Link message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Link message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Link
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.Help.Link;

                /**
                 * Creates a plain object from a Link message. Also converts values to other types if specified.
                 * @param message Link
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.Help.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Link to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Link
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LocalizedMessage. */
        interface ILocalizedMessage {

            /** LocalizedMessage locale */
            locale?: (string|null);

            /** LocalizedMessage message */
            message?: (string|null);
        }

        /** Represents a LocalizedMessage. */
        class LocalizedMessage implements ILocalizedMessage {

            /**
             * Constructs a new LocalizedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.ILocalizedMessage);

            /** LocalizedMessage locale. */
            public locale: string;

            /** LocalizedMessage message. */
            public message: string;

            /**
             * Creates a new LocalizedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocalizedMessage instance
             */
            public static create(properties?: google.rpc.ILocalizedMessage): google.rpc.LocalizedMessage;

            /**
             * Encodes the specified LocalizedMessage message. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @param message LocalizedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.ILocalizedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocalizedMessage message, length delimited. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @param message LocalizedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.ILocalizedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.LocalizedMessage;

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.LocalizedMessage;

            /**
             * Verifies a LocalizedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocalizedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocalizedMessage
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.LocalizedMessage;

            /**
             * Creates a plain object from a LocalizedMessage message. Also converts values to other types if specified.
             * @param message LocalizedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.LocalizedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocalizedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LocalizedMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
