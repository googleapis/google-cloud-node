// Copyright 2023 Google LLC
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

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace bigquery. */
        namespace bigquery {

            /** Namespace migration. */
            namespace migration {

                /** Namespace v2. */
                namespace v2 {

                    /** Properties of a MigrationWorkflow. */
                    interface IMigrationWorkflow {

                        /** MigrationWorkflow name */
                        name?: (string|null);

                        /** MigrationWorkflow displayName */
                        displayName?: (string|null);

                        /** MigrationWorkflow tasks */
                        tasks?: ({ [k: string]: google.cloud.bigquery.migration.v2.IMigrationTask }|null);

                        /** MigrationWorkflow state */
                        state?: (google.cloud.bigquery.migration.v2.MigrationWorkflow.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationWorkflow.State|null);

                        /** MigrationWorkflow createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationWorkflow lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a MigrationWorkflow. */
                    class MigrationWorkflow implements IMigrationWorkflow {

                        /**
                         * Constructs a new MigrationWorkflow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IMigrationWorkflow);

                        /** MigrationWorkflow name. */
                        public name: string;

                        /** MigrationWorkflow displayName. */
                        public displayName: string;

                        /** MigrationWorkflow tasks. */
                        public tasks: { [k: string]: google.cloud.bigquery.migration.v2.IMigrationTask };

                        /** MigrationWorkflow state. */
                        public state: (google.cloud.bigquery.migration.v2.MigrationWorkflow.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationWorkflow.State);

                        /** MigrationWorkflow createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationWorkflow lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new MigrationWorkflow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationWorkflow instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IMigrationWorkflow): google.cloud.bigquery.migration.v2.MigrationWorkflow;

                        /**
                         * Encodes the specified MigrationWorkflow message. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationWorkflow.verify|verify} messages.
                         * @param message MigrationWorkflow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IMigrationWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationWorkflow message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationWorkflow.verify|verify} messages.
                         * @param message MigrationWorkflow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IMigrationWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationWorkflow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationWorkflow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.MigrationWorkflow;

                        /**
                         * Decodes a MigrationWorkflow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationWorkflow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.MigrationWorkflow;

                        /**
                         * Verifies a MigrationWorkflow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationWorkflow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationWorkflow
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.MigrationWorkflow;

                        /**
                         * Creates a plain object from a MigrationWorkflow message. Also converts values to other types if specified.
                         * @param message MigrationWorkflow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.MigrationWorkflow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationWorkflow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationWorkflow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationWorkflow {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            DRAFT = 1,
                            RUNNING = 2,
                            PAUSED = 3,
                            COMPLETED = 4
                        }
                    }

                    /** Properties of a MigrationTask. */
                    interface IMigrationTask {

                        /** MigrationTask translationConfigDetails */
                        translationConfigDetails?: (google.cloud.bigquery.migration.v2.ITranslationConfigDetails|null);

                        /** MigrationTask id */
                        id?: (string|null);

                        /** MigrationTask type */
                        type?: (string|null);

                        /** MigrationTask state */
                        state?: (google.cloud.bigquery.migration.v2.MigrationTask.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationTask.State|null);

                        /** MigrationTask processingError */
                        processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationTask createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a MigrationTask. */
                    class MigrationTask implements IMigrationTask {

                        /**
                         * Constructs a new MigrationTask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IMigrationTask);

                        /** MigrationTask translationConfigDetails. */
                        public translationConfigDetails?: (google.cloud.bigquery.migration.v2.ITranslationConfigDetails|null);

                        /** MigrationTask id. */
                        public id: string;

                        /** MigrationTask type. */
                        public type: string;

                        /** MigrationTask state. */
                        public state: (google.cloud.bigquery.migration.v2.MigrationTask.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationTask.State);

                        /** MigrationTask processingError. */
                        public processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationTask createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask taskDetails. */
                        public taskDetails?: "translationConfigDetails";

                        /**
                         * Creates a new MigrationTask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationTask instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IMigrationTask): google.cloud.bigquery.migration.v2.MigrationTask;

                        /**
                         * Encodes the specified MigrationTask message. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationTask.verify|verify} messages.
                         * @param message MigrationTask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IMigrationTask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationTask message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationTask.verify|verify} messages.
                         * @param message MigrationTask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IMigrationTask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationTask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationTask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.MigrationTask;

                        /**
                         * Decodes a MigrationTask message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationTask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.MigrationTask;

                        /**
                         * Verifies a MigrationTask message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationTask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationTask
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.MigrationTask;

                        /**
                         * Creates a plain object from a MigrationTask message. Also converts values to other types if specified.
                         * @param message MigrationTask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.MigrationTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationTask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationTask
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationTask {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ORCHESTRATING = 2,
                            RUNNING = 3,
                            PAUSED = 4,
                            SUCCEEDED = 5,
                            FAILED = 6
                        }
                    }

                    /** Properties of a MigrationSubtask. */
                    interface IMigrationSubtask {

                        /** MigrationSubtask name */
                        name?: (string|null);

                        /** MigrationSubtask taskId */
                        taskId?: (string|null);

                        /** MigrationSubtask type */
                        type?: (string|null);

                        /** MigrationSubtask state */
                        state?: (google.cloud.bigquery.migration.v2.MigrationSubtask.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationSubtask.State|null);

                        /** MigrationSubtask processingError */
                        processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationSubtask resourceErrorDetails */
                        resourceErrorDetails?: (google.cloud.bigquery.migration.v2.IResourceErrorDetail[]|null);

                        /** MigrationSubtask resourceErrorCount */
                        resourceErrorCount?: (number|null);

                        /** MigrationSubtask createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask metrics */
                        metrics?: (google.cloud.bigquery.migration.v2.ITimeSeries[]|null);
                    }

                    /** Represents a MigrationSubtask. */
                    class MigrationSubtask implements IMigrationSubtask {

                        /**
                         * Constructs a new MigrationSubtask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IMigrationSubtask);

                        /** MigrationSubtask name. */
                        public name: string;

                        /** MigrationSubtask taskId. */
                        public taskId: string;

                        /** MigrationSubtask type. */
                        public type: string;

                        /** MigrationSubtask state. */
                        public state: (google.cloud.bigquery.migration.v2.MigrationSubtask.State|keyof typeof google.cloud.bigquery.migration.v2.MigrationSubtask.State);

                        /** MigrationSubtask processingError. */
                        public processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationSubtask resourceErrorDetails. */
                        public resourceErrorDetails: google.cloud.bigquery.migration.v2.IResourceErrorDetail[];

                        /** MigrationSubtask resourceErrorCount. */
                        public resourceErrorCount: number;

                        /** MigrationSubtask createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask metrics. */
                        public metrics: google.cloud.bigquery.migration.v2.ITimeSeries[];

                        /**
                         * Creates a new MigrationSubtask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationSubtask instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IMigrationSubtask): google.cloud.bigquery.migration.v2.MigrationSubtask;

                        /**
                         * Encodes the specified MigrationSubtask message. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationSubtask.verify|verify} messages.
                         * @param message MigrationSubtask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IMigrationSubtask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationSubtask message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.MigrationSubtask.verify|verify} messages.
                         * @param message MigrationSubtask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IMigrationSubtask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationSubtask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationSubtask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.MigrationSubtask;

                        /**
                         * Decodes a MigrationSubtask message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationSubtask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.MigrationSubtask;

                        /**
                         * Verifies a MigrationSubtask message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationSubtask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationSubtask
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.MigrationSubtask;

                        /**
                         * Creates a plain object from a MigrationSubtask message. Also converts values to other types if specified.
                         * @param message MigrationSubtask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.MigrationSubtask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationSubtask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationSubtask
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationSubtask {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            ACTIVE = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4,
                            PAUSED = 5,
                            PENDING_DEPENDENCY = 6
                        }
                    }

                    /** Properties of a ResourceErrorDetail. */
                    interface IResourceErrorDetail {

                        /** ResourceErrorDetail resourceInfo */
                        resourceInfo?: (google.rpc.IResourceInfo|null);

                        /** ResourceErrorDetail errorDetails */
                        errorDetails?: (google.cloud.bigquery.migration.v2.IErrorDetail[]|null);

                        /** ResourceErrorDetail errorCount */
                        errorCount?: (number|null);
                    }

                    /** Represents a ResourceErrorDetail. */
                    class ResourceErrorDetail implements IResourceErrorDetail {

                        /**
                         * Constructs a new ResourceErrorDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IResourceErrorDetail);

                        /** ResourceErrorDetail resourceInfo. */
                        public resourceInfo?: (google.rpc.IResourceInfo|null);

                        /** ResourceErrorDetail errorDetails. */
                        public errorDetails: google.cloud.bigquery.migration.v2.IErrorDetail[];

                        /** ResourceErrorDetail errorCount. */
                        public errorCount: number;

                        /**
                         * Creates a new ResourceErrorDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceErrorDetail instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IResourceErrorDetail): google.cloud.bigquery.migration.v2.ResourceErrorDetail;

                        /**
                         * Encodes the specified ResourceErrorDetail message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ResourceErrorDetail.verify|verify} messages.
                         * @param message ResourceErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IResourceErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceErrorDetail message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ResourceErrorDetail.verify|verify} messages.
                         * @param message ResourceErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IResourceErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceErrorDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ResourceErrorDetail;

                        /**
                         * Decodes a ResourceErrorDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ResourceErrorDetail;

                        /**
                         * Verifies a ResourceErrorDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceErrorDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceErrorDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ResourceErrorDetail;

                        /**
                         * Creates a plain object from a ResourceErrorDetail message. Also converts values to other types if specified.
                         * @param message ResourceErrorDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ResourceErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceErrorDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceErrorDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ErrorDetail. */
                    interface IErrorDetail {

                        /** ErrorDetail location */
                        location?: (google.cloud.bigquery.migration.v2.IErrorLocation|null);

                        /** ErrorDetail errorInfo */
                        errorInfo?: (google.rpc.IErrorInfo|null);
                    }

                    /** Represents an ErrorDetail. */
                    class ErrorDetail implements IErrorDetail {

                        /**
                         * Constructs a new ErrorDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IErrorDetail);

                        /** ErrorDetail location. */
                        public location?: (google.cloud.bigquery.migration.v2.IErrorLocation|null);

                        /** ErrorDetail errorInfo. */
                        public errorInfo?: (google.rpc.IErrorInfo|null);

                        /**
                         * Creates a new ErrorDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ErrorDetail instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IErrorDetail): google.cloud.bigquery.migration.v2.ErrorDetail;

                        /**
                         * Encodes the specified ErrorDetail message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ErrorDetail.verify|verify} messages.
                         * @param message ErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ErrorDetail message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ErrorDetail.verify|verify} messages.
                         * @param message ErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ErrorDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ErrorDetail;

                        /**
                         * Decodes an ErrorDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ErrorDetail;

                        /**
                         * Verifies an ErrorDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ErrorDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ErrorDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ErrorDetail;

                        /**
                         * Creates a plain object from an ErrorDetail message. Also converts values to other types if specified.
                         * @param message ErrorDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ErrorDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ErrorDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ErrorLocation. */
                    interface IErrorLocation {

                        /** ErrorLocation line */
                        line?: (number|null);

                        /** ErrorLocation column */
                        column?: (number|null);
                    }

                    /** Represents an ErrorLocation. */
                    class ErrorLocation implements IErrorLocation {

                        /**
                         * Constructs a new ErrorLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IErrorLocation);

                        /** ErrorLocation line. */
                        public line: number;

                        /** ErrorLocation column. */
                        public column: number;

                        /**
                         * Creates a new ErrorLocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ErrorLocation instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IErrorLocation): google.cloud.bigquery.migration.v2.ErrorLocation;

                        /**
                         * Encodes the specified ErrorLocation message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ErrorLocation.verify|verify} messages.
                         * @param message ErrorLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IErrorLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ErrorLocation message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ErrorLocation.verify|verify} messages.
                         * @param message ErrorLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IErrorLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ErrorLocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ErrorLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ErrorLocation;

                        /**
                         * Decodes an ErrorLocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ErrorLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ErrorLocation;

                        /**
                         * Verifies an ErrorLocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ErrorLocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ErrorLocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ErrorLocation;

                        /**
                         * Creates a plain object from an ErrorLocation message. Also converts values to other types if specified.
                         * @param message ErrorLocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ErrorLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ErrorLocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ErrorLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimeSeries. */
                    interface ITimeSeries {

                        /** TimeSeries metric */
                        metric?: (string|null);

                        /** TimeSeries valueType */
                        valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

                        /** TimeSeries metricKind */
                        metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

                        /** TimeSeries points */
                        points?: (google.cloud.bigquery.migration.v2.IPoint[]|null);
                    }

                    /** Represents a TimeSeries. */
                    class TimeSeries implements ITimeSeries {

                        /**
                         * Constructs a new TimeSeries.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ITimeSeries);

                        /** TimeSeries metric. */
                        public metric: string;

                        /** TimeSeries valueType. */
                        public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

                        /** TimeSeries metricKind. */
                        public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

                        /** TimeSeries points. */
                        public points: google.cloud.bigquery.migration.v2.IPoint[];

                        /**
                         * Creates a new TimeSeries instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeSeries instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ITimeSeries): google.cloud.bigquery.migration.v2.TimeSeries;

                        /**
                         * Encodes the specified TimeSeries message. Does not implicitly {@link google.cloud.bigquery.migration.v2.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.TimeSeries;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.TimeSeries;

                        /**
                         * Verifies a TimeSeries message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeSeries
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.TimeSeries;

                        /**
                         * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
                         * @param message TimeSeries
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.TimeSeries, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeSeries to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimeSeries
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Point. */
                    interface IPoint {

                        /** Point interval */
                        interval?: (google.cloud.bigquery.migration.v2.ITimeInterval|null);

                        /** Point value */
                        value?: (google.cloud.bigquery.migration.v2.ITypedValue|null);
                    }

                    /** Represents a Point. */
                    class Point implements IPoint {

                        /**
                         * Constructs a new Point.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IPoint);

                        /** Point interval. */
                        public interval?: (google.cloud.bigquery.migration.v2.ITimeInterval|null);

                        /** Point value. */
                        public value?: (google.cloud.bigquery.migration.v2.ITypedValue|null);

                        /**
                         * Creates a new Point instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Point instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IPoint): google.cloud.bigquery.migration.v2.Point;

                        /**
                         * Encodes the specified Point message. Does not implicitly {@link google.cloud.bigquery.migration.v2.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Point message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Point message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.Point;

                        /**
                         * Decodes a Point message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.Point;

                        /**
                         * Verifies a Point message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Point message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Point
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.Point;

                        /**
                         * Creates a plain object from a Point message. Also converts values to other types if specified.
                         * @param message Point
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Point to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Point
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimeInterval. */
                    interface ITimeInterval {

                        /** TimeInterval startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeInterval endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TimeInterval. */
                    class TimeInterval implements ITimeInterval {

                        /**
                         * Constructs a new TimeInterval.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ITimeInterval);

                        /** TimeInterval startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeInterval endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new TimeInterval instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeInterval instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ITimeInterval): google.cloud.bigquery.migration.v2.TimeInterval;

                        /**
                         * Encodes the specified TimeInterval message. Does not implicitly {@link google.cloud.bigquery.migration.v2.TimeInterval.verify|verify} messages.
                         * @param message TimeInterval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimeInterval message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.TimeInterval.verify|verify} messages.
                         * @param message TimeInterval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimeInterval message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeInterval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.TimeInterval;

                        /**
                         * Decodes a TimeInterval message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeInterval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.TimeInterval;

                        /**
                         * Verifies a TimeInterval message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeInterval message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeInterval
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.TimeInterval;

                        /**
                         * Creates a plain object from a TimeInterval message. Also converts values to other types if specified.
                         * @param message TimeInterval
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.TimeInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeInterval to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimeInterval
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TypedValue. */
                    interface ITypedValue {

                        /** TypedValue boolValue */
                        boolValue?: (boolean|null);

                        /** TypedValue int64Value */
                        int64Value?: (number|Long|string|null);

                        /** TypedValue doubleValue */
                        doubleValue?: (number|null);

                        /** TypedValue stringValue */
                        stringValue?: (string|null);

                        /** TypedValue distributionValue */
                        distributionValue?: (google.api.IDistribution|null);
                    }

                    /** Represents a TypedValue. */
                    class TypedValue implements ITypedValue {

                        /**
                         * Constructs a new TypedValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ITypedValue);

                        /** TypedValue boolValue. */
                        public boolValue?: (boolean|null);

                        /** TypedValue int64Value. */
                        public int64Value?: (number|Long|string|null);

                        /** TypedValue doubleValue. */
                        public doubleValue?: (number|null);

                        /** TypedValue stringValue. */
                        public stringValue?: (string|null);

                        /** TypedValue distributionValue. */
                        public distributionValue?: (google.api.IDistribution|null);

                        /** TypedValue value. */
                        public value?: ("boolValue"|"int64Value"|"doubleValue"|"stringValue"|"distributionValue");

                        /**
                         * Creates a new TypedValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TypedValue instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ITypedValue): google.cloud.bigquery.migration.v2.TypedValue;

                        /**
                         * Encodes the specified TypedValue message. Does not implicitly {@link google.cloud.bigquery.migration.v2.TypedValue.verify|verify} messages.
                         * @param message TypedValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TypedValue message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.TypedValue.verify|verify} messages.
                         * @param message TypedValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TypedValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TypedValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.TypedValue;

                        /**
                         * Decodes a TypedValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TypedValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.TypedValue;

                        /**
                         * Verifies a TypedValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TypedValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TypedValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.TypedValue;

                        /**
                         * Creates a plain object from a TypedValue message. Also converts values to other types if specified.
                         * @param message TypedValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.TypedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TypedValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TypedValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TranslationConfigDetails. */
                    interface ITranslationConfigDetails {

                        /** TranslationConfigDetails gcsSourcePath */
                        gcsSourcePath?: (string|null);

                        /** TranslationConfigDetails gcsTargetPath */
                        gcsTargetPath?: (string|null);

                        /** TranslationConfigDetails nameMappingList */
                        nameMappingList?: (google.cloud.bigquery.migration.v2.IObjectNameMappingList|null);

                        /** TranslationConfigDetails sourceDialect */
                        sourceDialect?: (google.cloud.bigquery.migration.v2.IDialect|null);

                        /** TranslationConfigDetails targetDialect */
                        targetDialect?: (google.cloud.bigquery.migration.v2.IDialect|null);

                        /** TranslationConfigDetails sourceEnv */
                        sourceEnv?: (google.cloud.bigquery.migration.v2.ISourceEnv|null);

                        /** TranslationConfigDetails requestSource */
                        requestSource?: (string|null);
                    }

                    /** Represents a TranslationConfigDetails. */
                    class TranslationConfigDetails implements ITranslationConfigDetails {

                        /**
                         * Constructs a new TranslationConfigDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ITranslationConfigDetails);

                        /** TranslationConfigDetails gcsSourcePath. */
                        public gcsSourcePath?: (string|null);

                        /** TranslationConfigDetails gcsTargetPath. */
                        public gcsTargetPath?: (string|null);

                        /** TranslationConfigDetails nameMappingList. */
                        public nameMappingList?: (google.cloud.bigquery.migration.v2.IObjectNameMappingList|null);

                        /** TranslationConfigDetails sourceDialect. */
                        public sourceDialect?: (google.cloud.bigquery.migration.v2.IDialect|null);

                        /** TranslationConfigDetails targetDialect. */
                        public targetDialect?: (google.cloud.bigquery.migration.v2.IDialect|null);

                        /** TranslationConfigDetails sourceEnv. */
                        public sourceEnv?: (google.cloud.bigquery.migration.v2.ISourceEnv|null);

                        /** TranslationConfigDetails requestSource. */
                        public requestSource: string;

                        /** TranslationConfigDetails sourceLocation. */
                        public sourceLocation?: "gcsSourcePath";

                        /** TranslationConfigDetails targetLocation. */
                        public targetLocation?: "gcsTargetPath";

                        /** TranslationConfigDetails outputNameMapping. */
                        public outputNameMapping?: "nameMappingList";

                        /**
                         * Creates a new TranslationConfigDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TranslationConfigDetails instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ITranslationConfigDetails): google.cloud.bigquery.migration.v2.TranslationConfigDetails;

                        /**
                         * Encodes the specified TranslationConfigDetails message. Does not implicitly {@link google.cloud.bigquery.migration.v2.TranslationConfigDetails.verify|verify} messages.
                         * @param message TranslationConfigDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ITranslationConfigDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TranslationConfigDetails message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.TranslationConfigDetails.verify|verify} messages.
                         * @param message TranslationConfigDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ITranslationConfigDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TranslationConfigDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TranslationConfigDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.TranslationConfigDetails;

                        /**
                         * Decodes a TranslationConfigDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TranslationConfigDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.TranslationConfigDetails;

                        /**
                         * Verifies a TranslationConfigDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TranslationConfigDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TranslationConfigDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.TranslationConfigDetails;

                        /**
                         * Creates a plain object from a TranslationConfigDetails message. Also converts values to other types if specified.
                         * @param message TranslationConfigDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.TranslationConfigDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TranslationConfigDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TranslationConfigDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Dialect. */
                    interface IDialect {

                        /** Dialect bigqueryDialect */
                        bigqueryDialect?: (google.cloud.bigquery.migration.v2.IBigQueryDialect|null);

                        /** Dialect hiveqlDialect */
                        hiveqlDialect?: (google.cloud.bigquery.migration.v2.IHiveQLDialect|null);

                        /** Dialect redshiftDialect */
                        redshiftDialect?: (google.cloud.bigquery.migration.v2.IRedshiftDialect|null);

                        /** Dialect teradataDialect */
                        teradataDialect?: (google.cloud.bigquery.migration.v2.ITeradataDialect|null);

                        /** Dialect oracleDialect */
                        oracleDialect?: (google.cloud.bigquery.migration.v2.IOracleDialect|null);

                        /** Dialect sparksqlDialect */
                        sparksqlDialect?: (google.cloud.bigquery.migration.v2.ISparkSQLDialect|null);

                        /** Dialect snowflakeDialect */
                        snowflakeDialect?: (google.cloud.bigquery.migration.v2.ISnowflakeDialect|null);

                        /** Dialect netezzaDialect */
                        netezzaDialect?: (google.cloud.bigquery.migration.v2.INetezzaDialect|null);

                        /** Dialect azureSynapseDialect */
                        azureSynapseDialect?: (google.cloud.bigquery.migration.v2.IAzureSynapseDialect|null);

                        /** Dialect verticaDialect */
                        verticaDialect?: (google.cloud.bigquery.migration.v2.IVerticaDialect|null);

                        /** Dialect sqlServerDialect */
                        sqlServerDialect?: (google.cloud.bigquery.migration.v2.ISQLServerDialect|null);

                        /** Dialect postgresqlDialect */
                        postgresqlDialect?: (google.cloud.bigquery.migration.v2.IPostgresqlDialect|null);

                        /** Dialect prestoDialect */
                        prestoDialect?: (google.cloud.bigquery.migration.v2.IPrestoDialect|null);

                        /** Dialect mysqlDialect */
                        mysqlDialect?: (google.cloud.bigquery.migration.v2.IMySQLDialect|null);
                    }

                    /** Represents a Dialect. */
                    class Dialect implements IDialect {

                        /**
                         * Constructs a new Dialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IDialect);

                        /** Dialect bigqueryDialect. */
                        public bigqueryDialect?: (google.cloud.bigquery.migration.v2.IBigQueryDialect|null);

                        /** Dialect hiveqlDialect. */
                        public hiveqlDialect?: (google.cloud.bigquery.migration.v2.IHiveQLDialect|null);

                        /** Dialect redshiftDialect. */
                        public redshiftDialect?: (google.cloud.bigquery.migration.v2.IRedshiftDialect|null);

                        /** Dialect teradataDialect. */
                        public teradataDialect?: (google.cloud.bigquery.migration.v2.ITeradataDialect|null);

                        /** Dialect oracleDialect. */
                        public oracleDialect?: (google.cloud.bigquery.migration.v2.IOracleDialect|null);

                        /** Dialect sparksqlDialect. */
                        public sparksqlDialect?: (google.cloud.bigquery.migration.v2.ISparkSQLDialect|null);

                        /** Dialect snowflakeDialect. */
                        public snowflakeDialect?: (google.cloud.bigquery.migration.v2.ISnowflakeDialect|null);

                        /** Dialect netezzaDialect. */
                        public netezzaDialect?: (google.cloud.bigquery.migration.v2.INetezzaDialect|null);

                        /** Dialect azureSynapseDialect. */
                        public azureSynapseDialect?: (google.cloud.bigquery.migration.v2.IAzureSynapseDialect|null);

                        /** Dialect verticaDialect. */
                        public verticaDialect?: (google.cloud.bigquery.migration.v2.IVerticaDialect|null);

                        /** Dialect sqlServerDialect. */
                        public sqlServerDialect?: (google.cloud.bigquery.migration.v2.ISQLServerDialect|null);

                        /** Dialect postgresqlDialect. */
                        public postgresqlDialect?: (google.cloud.bigquery.migration.v2.IPostgresqlDialect|null);

                        /** Dialect prestoDialect. */
                        public prestoDialect?: (google.cloud.bigquery.migration.v2.IPrestoDialect|null);

                        /** Dialect mysqlDialect. */
                        public mysqlDialect?: (google.cloud.bigquery.migration.v2.IMySQLDialect|null);

                        /** Dialect dialectValue. */
                        public dialectValue?: ("bigqueryDialect"|"hiveqlDialect"|"redshiftDialect"|"teradataDialect"|"oracleDialect"|"sparksqlDialect"|"snowflakeDialect"|"netezzaDialect"|"azureSynapseDialect"|"verticaDialect"|"sqlServerDialect"|"postgresqlDialect"|"prestoDialect"|"mysqlDialect");

                        /**
                         * Creates a new Dialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Dialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IDialect): google.cloud.bigquery.migration.v2.Dialect;

                        /**
                         * Encodes the specified Dialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.Dialect.verify|verify} messages.
                         * @param message Dialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Dialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.Dialect.verify|verify} messages.
                         * @param message Dialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Dialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Dialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.Dialect;

                        /**
                         * Decodes a Dialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Dialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.Dialect;

                        /**
                         * Verifies a Dialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Dialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Dialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.Dialect;

                        /**
                         * Creates a plain object from a Dialect message. Also converts values to other types if specified.
                         * @param message Dialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.Dialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Dialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Dialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BigQueryDialect. */
                    interface IBigQueryDialect {
                    }

                    /** Represents a BigQueryDialect. */
                    class BigQueryDialect implements IBigQueryDialect {

                        /**
                         * Constructs a new BigQueryDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IBigQueryDialect);

                        /**
                         * Creates a new BigQueryDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BigQueryDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IBigQueryDialect): google.cloud.bigquery.migration.v2.BigQueryDialect;

                        /**
                         * Encodes the specified BigQueryDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.BigQueryDialect.verify|verify} messages.
                         * @param message BigQueryDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IBigQueryDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BigQueryDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.BigQueryDialect.verify|verify} messages.
                         * @param message BigQueryDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IBigQueryDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BigQueryDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BigQueryDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.BigQueryDialect;

                        /**
                         * Decodes a BigQueryDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BigQueryDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.BigQueryDialect;

                        /**
                         * Verifies a BigQueryDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BigQueryDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BigQueryDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.BigQueryDialect;

                        /**
                         * Creates a plain object from a BigQueryDialect message. Also converts values to other types if specified.
                         * @param message BigQueryDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.BigQueryDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BigQueryDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BigQueryDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a HiveQLDialect. */
                    interface IHiveQLDialect {
                    }

                    /** Represents a HiveQLDialect. */
                    class HiveQLDialect implements IHiveQLDialect {

                        /**
                         * Constructs a new HiveQLDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IHiveQLDialect);

                        /**
                         * Creates a new HiveQLDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HiveQLDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IHiveQLDialect): google.cloud.bigquery.migration.v2.HiveQLDialect;

                        /**
                         * Encodes the specified HiveQLDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.HiveQLDialect.verify|verify} messages.
                         * @param message HiveQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IHiveQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HiveQLDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.HiveQLDialect.verify|verify} messages.
                         * @param message HiveQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IHiveQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HiveQLDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HiveQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.HiveQLDialect;

                        /**
                         * Decodes a HiveQLDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HiveQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.HiveQLDialect;

                        /**
                         * Verifies a HiveQLDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HiveQLDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HiveQLDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.HiveQLDialect;

                        /**
                         * Creates a plain object from a HiveQLDialect message. Also converts values to other types if specified.
                         * @param message HiveQLDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.HiveQLDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HiveQLDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HiveQLDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RedshiftDialect. */
                    interface IRedshiftDialect {
                    }

                    /** Represents a RedshiftDialect. */
                    class RedshiftDialect implements IRedshiftDialect {

                        /**
                         * Constructs a new RedshiftDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IRedshiftDialect);

                        /**
                         * Creates a new RedshiftDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RedshiftDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IRedshiftDialect): google.cloud.bigquery.migration.v2.RedshiftDialect;

                        /**
                         * Encodes the specified RedshiftDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.RedshiftDialect.verify|verify} messages.
                         * @param message RedshiftDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IRedshiftDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RedshiftDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.RedshiftDialect.verify|verify} messages.
                         * @param message RedshiftDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IRedshiftDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RedshiftDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RedshiftDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.RedshiftDialect;

                        /**
                         * Decodes a RedshiftDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RedshiftDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.RedshiftDialect;

                        /**
                         * Verifies a RedshiftDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RedshiftDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RedshiftDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.RedshiftDialect;

                        /**
                         * Creates a plain object from a RedshiftDialect message. Also converts values to other types if specified.
                         * @param message RedshiftDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.RedshiftDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RedshiftDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RedshiftDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TeradataDialect. */
                    interface ITeradataDialect {

                        /** TeradataDialect mode */
                        mode?: (google.cloud.bigquery.migration.v2.TeradataDialect.Mode|keyof typeof google.cloud.bigquery.migration.v2.TeradataDialect.Mode|null);
                    }

                    /** Represents a TeradataDialect. */
                    class TeradataDialect implements ITeradataDialect {

                        /**
                         * Constructs a new TeradataDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ITeradataDialect);

                        /** TeradataDialect mode. */
                        public mode: (google.cloud.bigquery.migration.v2.TeradataDialect.Mode|keyof typeof google.cloud.bigquery.migration.v2.TeradataDialect.Mode);

                        /**
                         * Creates a new TeradataDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TeradataDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ITeradataDialect): google.cloud.bigquery.migration.v2.TeradataDialect;

                        /**
                         * Encodes the specified TeradataDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.TeradataDialect.verify|verify} messages.
                         * @param message TeradataDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ITeradataDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TeradataDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.TeradataDialect.verify|verify} messages.
                         * @param message TeradataDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ITeradataDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TeradataDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TeradataDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.TeradataDialect;

                        /**
                         * Decodes a TeradataDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TeradataDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.TeradataDialect;

                        /**
                         * Verifies a TeradataDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TeradataDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TeradataDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.TeradataDialect;

                        /**
                         * Creates a plain object from a TeradataDialect message. Also converts values to other types if specified.
                         * @param message TeradataDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.TeradataDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TeradataDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TeradataDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TeradataDialect {

                        /** Mode enum. */
                        enum Mode {
                            MODE_UNSPECIFIED = 0,
                            SQL = 1,
                            BTEQ = 2
                        }
                    }

                    /** Properties of an OracleDialect. */
                    interface IOracleDialect {
                    }

                    /** Represents an OracleDialect. */
                    class OracleDialect implements IOracleDialect {

                        /**
                         * Constructs a new OracleDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IOracleDialect);

                        /**
                         * Creates a new OracleDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OracleDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IOracleDialect): google.cloud.bigquery.migration.v2.OracleDialect;

                        /**
                         * Encodes the specified OracleDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.OracleDialect.verify|verify} messages.
                         * @param message OracleDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IOracleDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OracleDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.OracleDialect.verify|verify} messages.
                         * @param message OracleDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IOracleDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OracleDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OracleDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.OracleDialect;

                        /**
                         * Decodes an OracleDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OracleDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.OracleDialect;

                        /**
                         * Verifies an OracleDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OracleDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OracleDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.OracleDialect;

                        /**
                         * Creates a plain object from an OracleDialect message. Also converts values to other types if specified.
                         * @param message OracleDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.OracleDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OracleDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OracleDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SparkSQLDialect. */
                    interface ISparkSQLDialect {
                    }

                    /** Represents a SparkSQLDialect. */
                    class SparkSQLDialect implements ISparkSQLDialect {

                        /**
                         * Constructs a new SparkSQLDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ISparkSQLDialect);

                        /**
                         * Creates a new SparkSQLDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SparkSQLDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ISparkSQLDialect): google.cloud.bigquery.migration.v2.SparkSQLDialect;

                        /**
                         * Encodes the specified SparkSQLDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.SparkSQLDialect.verify|verify} messages.
                         * @param message SparkSQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ISparkSQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SparkSQLDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.SparkSQLDialect.verify|verify} messages.
                         * @param message SparkSQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ISparkSQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SparkSQLDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SparkSQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.SparkSQLDialect;

                        /**
                         * Decodes a SparkSQLDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SparkSQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.SparkSQLDialect;

                        /**
                         * Verifies a SparkSQLDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SparkSQLDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SparkSQLDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.SparkSQLDialect;

                        /**
                         * Creates a plain object from a SparkSQLDialect message. Also converts values to other types if specified.
                         * @param message SparkSQLDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.SparkSQLDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SparkSQLDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SparkSQLDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SnowflakeDialect. */
                    interface ISnowflakeDialect {
                    }

                    /** Represents a SnowflakeDialect. */
                    class SnowflakeDialect implements ISnowflakeDialect {

                        /**
                         * Constructs a new SnowflakeDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ISnowflakeDialect);

                        /**
                         * Creates a new SnowflakeDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SnowflakeDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ISnowflakeDialect): google.cloud.bigquery.migration.v2.SnowflakeDialect;

                        /**
                         * Encodes the specified SnowflakeDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.SnowflakeDialect.verify|verify} messages.
                         * @param message SnowflakeDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ISnowflakeDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SnowflakeDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.SnowflakeDialect.verify|verify} messages.
                         * @param message SnowflakeDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ISnowflakeDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SnowflakeDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SnowflakeDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.SnowflakeDialect;

                        /**
                         * Decodes a SnowflakeDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SnowflakeDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.SnowflakeDialect;

                        /**
                         * Verifies a SnowflakeDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SnowflakeDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SnowflakeDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.SnowflakeDialect;

                        /**
                         * Creates a plain object from a SnowflakeDialect message. Also converts values to other types if specified.
                         * @param message SnowflakeDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.SnowflakeDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SnowflakeDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SnowflakeDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetezzaDialect. */
                    interface INetezzaDialect {
                    }

                    /** Represents a NetezzaDialect. */
                    class NetezzaDialect implements INetezzaDialect {

                        /**
                         * Constructs a new NetezzaDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.INetezzaDialect);

                        /**
                         * Creates a new NetezzaDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetezzaDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.INetezzaDialect): google.cloud.bigquery.migration.v2.NetezzaDialect;

                        /**
                         * Encodes the specified NetezzaDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.NetezzaDialect.verify|verify} messages.
                         * @param message NetezzaDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.INetezzaDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetezzaDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.NetezzaDialect.verify|verify} messages.
                         * @param message NetezzaDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.INetezzaDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetezzaDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetezzaDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.NetezzaDialect;

                        /**
                         * Decodes a NetezzaDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetezzaDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.NetezzaDialect;

                        /**
                         * Verifies a NetezzaDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetezzaDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetezzaDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.NetezzaDialect;

                        /**
                         * Creates a plain object from a NetezzaDialect message. Also converts values to other types if specified.
                         * @param message NetezzaDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.NetezzaDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetezzaDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetezzaDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AzureSynapseDialect. */
                    interface IAzureSynapseDialect {
                    }

                    /** Represents an AzureSynapseDialect. */
                    class AzureSynapseDialect implements IAzureSynapseDialect {

                        /**
                         * Constructs a new AzureSynapseDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IAzureSynapseDialect);

                        /**
                         * Creates a new AzureSynapseDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AzureSynapseDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IAzureSynapseDialect): google.cloud.bigquery.migration.v2.AzureSynapseDialect;

                        /**
                         * Encodes the specified AzureSynapseDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.AzureSynapseDialect.verify|verify} messages.
                         * @param message AzureSynapseDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IAzureSynapseDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AzureSynapseDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.AzureSynapseDialect.verify|verify} messages.
                         * @param message AzureSynapseDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IAzureSynapseDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AzureSynapseDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AzureSynapseDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.AzureSynapseDialect;

                        /**
                         * Decodes an AzureSynapseDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AzureSynapseDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.AzureSynapseDialect;

                        /**
                         * Verifies an AzureSynapseDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AzureSynapseDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AzureSynapseDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.AzureSynapseDialect;

                        /**
                         * Creates a plain object from an AzureSynapseDialect message. Also converts values to other types if specified.
                         * @param message AzureSynapseDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.AzureSynapseDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AzureSynapseDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AzureSynapseDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VerticaDialect. */
                    interface IVerticaDialect {
                    }

                    /** Represents a VerticaDialect. */
                    class VerticaDialect implements IVerticaDialect {

                        /**
                         * Constructs a new VerticaDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IVerticaDialect);

                        /**
                         * Creates a new VerticaDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VerticaDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IVerticaDialect): google.cloud.bigquery.migration.v2.VerticaDialect;

                        /**
                         * Encodes the specified VerticaDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.VerticaDialect.verify|verify} messages.
                         * @param message VerticaDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IVerticaDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VerticaDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.VerticaDialect.verify|verify} messages.
                         * @param message VerticaDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IVerticaDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VerticaDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VerticaDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.VerticaDialect;

                        /**
                         * Decodes a VerticaDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VerticaDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.VerticaDialect;

                        /**
                         * Verifies a VerticaDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VerticaDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VerticaDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.VerticaDialect;

                        /**
                         * Creates a plain object from a VerticaDialect message. Also converts values to other types if specified.
                         * @param message VerticaDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.VerticaDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VerticaDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VerticaDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SQLServerDialect. */
                    interface ISQLServerDialect {
                    }

                    /** Represents a SQLServerDialect. */
                    class SQLServerDialect implements ISQLServerDialect {

                        /**
                         * Constructs a new SQLServerDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ISQLServerDialect);

                        /**
                         * Creates a new SQLServerDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SQLServerDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ISQLServerDialect): google.cloud.bigquery.migration.v2.SQLServerDialect;

                        /**
                         * Encodes the specified SQLServerDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.SQLServerDialect.verify|verify} messages.
                         * @param message SQLServerDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ISQLServerDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SQLServerDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.SQLServerDialect.verify|verify} messages.
                         * @param message SQLServerDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ISQLServerDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SQLServerDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SQLServerDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.SQLServerDialect;

                        /**
                         * Decodes a SQLServerDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SQLServerDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.SQLServerDialect;

                        /**
                         * Verifies a SQLServerDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SQLServerDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SQLServerDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.SQLServerDialect;

                        /**
                         * Creates a plain object from a SQLServerDialect message. Also converts values to other types if specified.
                         * @param message SQLServerDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.SQLServerDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SQLServerDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SQLServerDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PostgresqlDialect. */
                    interface IPostgresqlDialect {
                    }

                    /** Represents a PostgresqlDialect. */
                    class PostgresqlDialect implements IPostgresqlDialect {

                        /**
                         * Constructs a new PostgresqlDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IPostgresqlDialect);

                        /**
                         * Creates a new PostgresqlDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostgresqlDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IPostgresqlDialect): google.cloud.bigquery.migration.v2.PostgresqlDialect;

                        /**
                         * Encodes the specified PostgresqlDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.PostgresqlDialect.verify|verify} messages.
                         * @param message PostgresqlDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IPostgresqlDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PostgresqlDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.PostgresqlDialect.verify|verify} messages.
                         * @param message PostgresqlDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IPostgresqlDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostgresqlDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostgresqlDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.PostgresqlDialect;

                        /**
                         * Decodes a PostgresqlDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PostgresqlDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.PostgresqlDialect;

                        /**
                         * Verifies a PostgresqlDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PostgresqlDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostgresqlDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.PostgresqlDialect;

                        /**
                         * Creates a plain object from a PostgresqlDialect message. Also converts values to other types if specified.
                         * @param message PostgresqlDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.PostgresqlDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostgresqlDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PostgresqlDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PrestoDialect. */
                    interface IPrestoDialect {
                    }

                    /** Represents a PrestoDialect. */
                    class PrestoDialect implements IPrestoDialect {

                        /**
                         * Constructs a new PrestoDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IPrestoDialect);

                        /**
                         * Creates a new PrestoDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrestoDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IPrestoDialect): google.cloud.bigquery.migration.v2.PrestoDialect;

                        /**
                         * Encodes the specified PrestoDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.PrestoDialect.verify|verify} messages.
                         * @param message PrestoDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IPrestoDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrestoDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.PrestoDialect.verify|verify} messages.
                         * @param message PrestoDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IPrestoDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrestoDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrestoDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.PrestoDialect;

                        /**
                         * Decodes a PrestoDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrestoDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.PrestoDialect;

                        /**
                         * Verifies a PrestoDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrestoDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrestoDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.PrestoDialect;

                        /**
                         * Creates a plain object from a PrestoDialect message. Also converts values to other types if specified.
                         * @param message PrestoDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.PrestoDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrestoDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrestoDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MySQLDialect. */
                    interface IMySQLDialect {
                    }

                    /** Represents a MySQLDialect. */
                    class MySQLDialect implements IMySQLDialect {

                        /**
                         * Constructs a new MySQLDialect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IMySQLDialect);

                        /**
                         * Creates a new MySQLDialect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MySQLDialect instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IMySQLDialect): google.cloud.bigquery.migration.v2.MySQLDialect;

                        /**
                         * Encodes the specified MySQLDialect message. Does not implicitly {@link google.cloud.bigquery.migration.v2.MySQLDialect.verify|verify} messages.
                         * @param message MySQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IMySQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MySQLDialect message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.MySQLDialect.verify|verify} messages.
                         * @param message MySQLDialect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IMySQLDialect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MySQLDialect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MySQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.MySQLDialect;

                        /**
                         * Decodes a MySQLDialect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MySQLDialect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.MySQLDialect;

                        /**
                         * Verifies a MySQLDialect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MySQLDialect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MySQLDialect
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.MySQLDialect;

                        /**
                         * Creates a plain object from a MySQLDialect message. Also converts values to other types if specified.
                         * @param message MySQLDialect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.MySQLDialect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MySQLDialect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MySQLDialect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectNameMappingList. */
                    interface IObjectNameMappingList {

                        /** ObjectNameMappingList nameMap */
                        nameMap?: (google.cloud.bigquery.migration.v2.IObjectNameMapping[]|null);
                    }

                    /** Represents an ObjectNameMappingList. */
                    class ObjectNameMappingList implements IObjectNameMappingList {

                        /**
                         * Constructs a new ObjectNameMappingList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IObjectNameMappingList);

                        /** ObjectNameMappingList nameMap. */
                        public nameMap: google.cloud.bigquery.migration.v2.IObjectNameMapping[];

                        /**
                         * Creates a new ObjectNameMappingList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ObjectNameMappingList instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IObjectNameMappingList): google.cloud.bigquery.migration.v2.ObjectNameMappingList;

                        /**
                         * Encodes the specified ObjectNameMappingList message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ObjectNameMappingList.verify|verify} messages.
                         * @param message ObjectNameMappingList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IObjectNameMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ObjectNameMappingList message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ObjectNameMappingList.verify|verify} messages.
                         * @param message ObjectNameMappingList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IObjectNameMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ObjectNameMappingList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ObjectNameMappingList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ObjectNameMappingList;

                        /**
                         * Decodes an ObjectNameMappingList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ObjectNameMappingList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ObjectNameMappingList;

                        /**
                         * Verifies an ObjectNameMappingList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ObjectNameMappingList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ObjectNameMappingList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ObjectNameMappingList;

                        /**
                         * Creates a plain object from an ObjectNameMappingList message. Also converts values to other types if specified.
                         * @param message ObjectNameMappingList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ObjectNameMappingList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ObjectNameMappingList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ObjectNameMappingList
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectNameMapping. */
                    interface IObjectNameMapping {

                        /** ObjectNameMapping source */
                        source?: (google.cloud.bigquery.migration.v2.INameMappingKey|null);

                        /** ObjectNameMapping target */
                        target?: (google.cloud.bigquery.migration.v2.INameMappingValue|null);
                    }

                    /** Represents an ObjectNameMapping. */
                    class ObjectNameMapping implements IObjectNameMapping {

                        /**
                         * Constructs a new ObjectNameMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IObjectNameMapping);

                        /** ObjectNameMapping source. */
                        public source?: (google.cloud.bigquery.migration.v2.INameMappingKey|null);

                        /** ObjectNameMapping target. */
                        public target?: (google.cloud.bigquery.migration.v2.INameMappingValue|null);

                        /**
                         * Creates a new ObjectNameMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ObjectNameMapping instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IObjectNameMapping): google.cloud.bigquery.migration.v2.ObjectNameMapping;

                        /**
                         * Encodes the specified ObjectNameMapping message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ObjectNameMapping.verify|verify} messages.
                         * @param message ObjectNameMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IObjectNameMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ObjectNameMapping message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ObjectNameMapping.verify|verify} messages.
                         * @param message ObjectNameMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IObjectNameMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ObjectNameMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ObjectNameMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ObjectNameMapping;

                        /**
                         * Decodes an ObjectNameMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ObjectNameMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ObjectNameMapping;

                        /**
                         * Verifies an ObjectNameMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ObjectNameMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ObjectNameMapping
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ObjectNameMapping;

                        /**
                         * Creates a plain object from an ObjectNameMapping message. Also converts values to other types if specified.
                         * @param message ObjectNameMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ObjectNameMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ObjectNameMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ObjectNameMapping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NameMappingKey. */
                    interface INameMappingKey {

                        /** NameMappingKey type */
                        type?: (google.cloud.bigquery.migration.v2.NameMappingKey.Type|keyof typeof google.cloud.bigquery.migration.v2.NameMappingKey.Type|null);

                        /** NameMappingKey database */
                        database?: (string|null);

                        /** NameMappingKey schema */
                        schema?: (string|null);

                        /** NameMappingKey relation */
                        relation?: (string|null);

                        /** NameMappingKey attribute */
                        attribute?: (string|null);
                    }

                    /** Represents a NameMappingKey. */
                    class NameMappingKey implements INameMappingKey {

                        /**
                         * Constructs a new NameMappingKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.INameMappingKey);

                        /** NameMappingKey type. */
                        public type: (google.cloud.bigquery.migration.v2.NameMappingKey.Type|keyof typeof google.cloud.bigquery.migration.v2.NameMappingKey.Type);

                        /** NameMappingKey database. */
                        public database: string;

                        /** NameMappingKey schema. */
                        public schema: string;

                        /** NameMappingKey relation. */
                        public relation: string;

                        /** NameMappingKey attribute. */
                        public attribute: string;

                        /**
                         * Creates a new NameMappingKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NameMappingKey instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.INameMappingKey): google.cloud.bigquery.migration.v2.NameMappingKey;

                        /**
                         * Encodes the specified NameMappingKey message. Does not implicitly {@link google.cloud.bigquery.migration.v2.NameMappingKey.verify|verify} messages.
                         * @param message NameMappingKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.INameMappingKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NameMappingKey message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.NameMappingKey.verify|verify} messages.
                         * @param message NameMappingKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.INameMappingKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NameMappingKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NameMappingKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.NameMappingKey;

                        /**
                         * Decodes a NameMappingKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NameMappingKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.NameMappingKey;

                        /**
                         * Verifies a NameMappingKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NameMappingKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NameMappingKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.NameMappingKey;

                        /**
                         * Creates a plain object from a NameMappingKey message. Also converts values to other types if specified.
                         * @param message NameMappingKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.NameMappingKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NameMappingKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NameMappingKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace NameMappingKey {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            DATABASE = 1,
                            SCHEMA = 2,
                            RELATION = 3,
                            ATTRIBUTE = 4,
                            RELATION_ALIAS = 5,
                            ATTRIBUTE_ALIAS = 6,
                            FUNCTION = 7
                        }
                    }

                    /** Properties of a NameMappingValue. */
                    interface INameMappingValue {

                        /** NameMappingValue database */
                        database?: (string|null);

                        /** NameMappingValue schema */
                        schema?: (string|null);

                        /** NameMappingValue relation */
                        relation?: (string|null);

                        /** NameMappingValue attribute */
                        attribute?: (string|null);
                    }

                    /** Represents a NameMappingValue. */
                    class NameMappingValue implements INameMappingValue {

                        /**
                         * Constructs a new NameMappingValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.INameMappingValue);

                        /** NameMappingValue database. */
                        public database: string;

                        /** NameMappingValue schema. */
                        public schema: string;

                        /** NameMappingValue relation. */
                        public relation: string;

                        /** NameMappingValue attribute. */
                        public attribute: string;

                        /**
                         * Creates a new NameMappingValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NameMappingValue instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.INameMappingValue): google.cloud.bigquery.migration.v2.NameMappingValue;

                        /**
                         * Encodes the specified NameMappingValue message. Does not implicitly {@link google.cloud.bigquery.migration.v2.NameMappingValue.verify|verify} messages.
                         * @param message NameMappingValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.INameMappingValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NameMappingValue message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.NameMappingValue.verify|verify} messages.
                         * @param message NameMappingValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.INameMappingValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NameMappingValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NameMappingValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.NameMappingValue;

                        /**
                         * Decodes a NameMappingValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NameMappingValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.NameMappingValue;

                        /**
                         * Verifies a NameMappingValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NameMappingValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NameMappingValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.NameMappingValue;

                        /**
                         * Creates a plain object from a NameMappingValue message. Also converts values to other types if specified.
                         * @param message NameMappingValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.NameMappingValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NameMappingValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NameMappingValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SourceEnv. */
                    interface ISourceEnv {

                        /** SourceEnv defaultDatabase */
                        defaultDatabase?: (string|null);

                        /** SourceEnv schemaSearchPath */
                        schemaSearchPath?: (string[]|null);
                    }

                    /** Represents a SourceEnv. */
                    class SourceEnv implements ISourceEnv {

                        /**
                         * Constructs a new SourceEnv.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ISourceEnv);

                        /** SourceEnv defaultDatabase. */
                        public defaultDatabase: string;

                        /** SourceEnv schemaSearchPath. */
                        public schemaSearchPath: string[];

                        /**
                         * Creates a new SourceEnv instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SourceEnv instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ISourceEnv): google.cloud.bigquery.migration.v2.SourceEnv;

                        /**
                         * Encodes the specified SourceEnv message. Does not implicitly {@link google.cloud.bigquery.migration.v2.SourceEnv.verify|verify} messages.
                         * @param message SourceEnv message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ISourceEnv, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SourceEnv message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.SourceEnv.verify|verify} messages.
                         * @param message SourceEnv message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ISourceEnv, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SourceEnv message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SourceEnv
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.SourceEnv;

                        /**
                         * Decodes a SourceEnv message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SourceEnv
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.SourceEnv;

                        /**
                         * Verifies a SourceEnv message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SourceEnv message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SourceEnv
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.SourceEnv;

                        /**
                         * Creates a plain object from a SourceEnv message. Also converts values to other types if specified.
                         * @param message SourceEnv
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.SourceEnv, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SourceEnv to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SourceEnv
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a MigrationService */
                    class MigrationService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new MigrationService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new MigrationService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MigrationService;

                        /**
                         * Calls CreateMigrationWorkflow.
                         * @param request CreateMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationWorkflow
                         */
                        public createMigrationWorkflow(request: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.CreateMigrationWorkflowCallback): void;

                        /**
                         * Calls CreateMigrationWorkflow.
                         * @param request CreateMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public createMigrationWorkflow(request: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest): Promise<google.cloud.bigquery.migration.v2.MigrationWorkflow>;

                        /**
                         * Calls GetMigrationWorkflow.
                         * @param request GetMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationWorkflow
                         */
                        public getMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.GetMigrationWorkflowCallback): void;

                        /**
                         * Calls GetMigrationWorkflow.
                         * @param request GetMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public getMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest): Promise<google.cloud.bigquery.migration.v2.MigrationWorkflow>;

                        /**
                         * Calls ListMigrationWorkflows.
                         * @param request ListMigrationWorkflowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListMigrationWorkflowsResponse
                         */
                        public listMigrationWorkflows(request: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.ListMigrationWorkflowsCallback): void;

                        /**
                         * Calls ListMigrationWorkflows.
                         * @param request ListMigrationWorkflowsRequest message or plain object
                         * @returns Promise
                         */
                        public listMigrationWorkflows(request: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest): Promise<google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse>;

                        /**
                         * Calls DeleteMigrationWorkflow.
                         * @param request DeleteMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.DeleteMigrationWorkflowCallback): void;

                        /**
                         * Calls DeleteMigrationWorkflow.
                         * @param request DeleteMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public deleteMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls StartMigrationWorkflow.
                         * @param request StartMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public startMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.StartMigrationWorkflowCallback): void;

                        /**
                         * Calls StartMigrationWorkflow.
                         * @param request StartMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public startMigrationWorkflow(request: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls GetMigrationSubtask.
                         * @param request GetMigrationSubtaskRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationSubtask
                         */
                        public getMigrationSubtask(request: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.GetMigrationSubtaskCallback): void;

                        /**
                         * Calls GetMigrationSubtask.
                         * @param request GetMigrationSubtaskRequest message or plain object
                         * @returns Promise
                         */
                        public getMigrationSubtask(request: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest): Promise<google.cloud.bigquery.migration.v2.MigrationSubtask>;

                        /**
                         * Calls ListMigrationSubtasks.
                         * @param request ListMigrationSubtasksRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListMigrationSubtasksResponse
                         */
                        public listMigrationSubtasks(request: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest, callback: google.cloud.bigquery.migration.v2.MigrationService.ListMigrationSubtasksCallback): void;

                        /**
                         * Calls ListMigrationSubtasks.
                         * @param request ListMigrationSubtasksRequest message or plain object
                         * @returns Promise
                         */
                        public listMigrationSubtasks(request: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest): Promise<google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse>;
                    }

                    namespace MigrationService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|createMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] MigrationWorkflow
                         */
                        type CreateMigrationWorkflowCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2.MigrationWorkflow) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|getMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] MigrationWorkflow
                         */
                        type GetMigrationWorkflowCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2.MigrationWorkflow) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|listMigrationWorkflows}.
                         * @param error Error, if any
                         * @param [response] ListMigrationWorkflowsResponse
                         */
                        type ListMigrationWorkflowsCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|deleteMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteMigrationWorkflowCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|startMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type StartMigrationWorkflowCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|getMigrationSubtask}.
                         * @param error Error, if any
                         * @param [response] MigrationSubtask
                         */
                        type GetMigrationSubtaskCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2.MigrationSubtask) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2.MigrationService|listMigrationSubtasks}.
                         * @param error Error, if any
                         * @param [response] ListMigrationSubtasksResponse
                         */
                        type ListMigrationSubtasksCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse) => void;
                    }

                    /** Properties of a CreateMigrationWorkflowRequest. */
                    interface ICreateMigrationWorkflowRequest {

                        /** CreateMigrationWorkflowRequest parent */
                        parent?: (string|null);

                        /** CreateMigrationWorkflowRequest migrationWorkflow */
                        migrationWorkflow?: (google.cloud.bigquery.migration.v2.IMigrationWorkflow|null);
                    }

                    /** Represents a CreateMigrationWorkflowRequest. */
                    class CreateMigrationWorkflowRequest implements ICreateMigrationWorkflowRequest {

                        /**
                         * Constructs a new CreateMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest);

                        /** CreateMigrationWorkflowRequest parent. */
                        public parent: string;

                        /** CreateMigrationWorkflowRequest migrationWorkflow. */
                        public migrationWorkflow?: (google.cloud.bigquery.migration.v2.IMigrationWorkflow|null);

                        /**
                         * Creates a new CreateMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest): google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest;

                        /**
                         * Encodes the specified CreateMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest.verify|verify} messages.
                         * @param message CreateMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest.verify|verify} messages.
                         * @param message CreateMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.ICreateMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest;

                        /**
                         * Decodes a CreateMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest;

                        /**
                         * Verifies a CreateMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a CreateMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message CreateMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.CreateMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetMigrationWorkflowRequest. */
                    interface IGetMigrationWorkflowRequest {

                        /** GetMigrationWorkflowRequest name */
                        name?: (string|null);

                        /** GetMigrationWorkflowRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents a GetMigrationWorkflowRequest. */
                    class GetMigrationWorkflowRequest implements IGetMigrationWorkflowRequest {

                        /**
                         * Constructs a new GetMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest);

                        /** GetMigrationWorkflowRequest name. */
                        public name: string;

                        /** GetMigrationWorkflowRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new GetMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest): google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest;

                        /**
                         * Encodes the specified GetMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest.verify|verify} messages.
                         * @param message GetMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest.verify|verify} messages.
                         * @param message GetMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IGetMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest;

                        /**
                         * Decodes a GetMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest;

                        /**
                         * Verifies a GetMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a GetMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message GetMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.GetMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationWorkflowsRequest. */
                    interface IListMigrationWorkflowsRequest {

                        /** ListMigrationWorkflowsRequest parent */
                        parent?: (string|null);

                        /** ListMigrationWorkflowsRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationWorkflowsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListMigrationWorkflowsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListMigrationWorkflowsRequest. */
                    class ListMigrationWorkflowsRequest implements IListMigrationWorkflowsRequest {

                        /**
                         * Constructs a new ListMigrationWorkflowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest);

                        /** ListMigrationWorkflowsRequest parent. */
                        public parent: string;

                        /** ListMigrationWorkflowsRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationWorkflowsRequest pageSize. */
                        public pageSize: number;

                        /** ListMigrationWorkflowsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListMigrationWorkflowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationWorkflowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest;

                        /**
                         * Encodes the specified ListMigrationWorkflowsRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest.verify|verify} messages.
                         * @param message ListMigrationWorkflowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationWorkflowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest.verify|verify} messages.
                         * @param message ListMigrationWorkflowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationWorkflowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationWorkflowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest;

                        /**
                         * Decodes a ListMigrationWorkflowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationWorkflowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest;

                        /**
                         * Verifies a ListMigrationWorkflowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationWorkflowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationWorkflowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest;

                        /**
                         * Creates a plain object from a ListMigrationWorkflowsRequest message. Also converts values to other types if specified.
                         * @param message ListMigrationWorkflowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ListMigrationWorkflowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationWorkflowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationWorkflowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationWorkflowsResponse. */
                    interface IListMigrationWorkflowsResponse {

                        /** ListMigrationWorkflowsResponse migrationWorkflows */
                        migrationWorkflows?: (google.cloud.bigquery.migration.v2.IMigrationWorkflow[]|null);

                        /** ListMigrationWorkflowsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListMigrationWorkflowsResponse. */
                    class ListMigrationWorkflowsResponse implements IListMigrationWorkflowsResponse {

                        /**
                         * Constructs a new ListMigrationWorkflowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsResponse);

                        /** ListMigrationWorkflowsResponse migrationWorkflows. */
                        public migrationWorkflows: google.cloud.bigquery.migration.v2.IMigrationWorkflow[];

                        /** ListMigrationWorkflowsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListMigrationWorkflowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationWorkflowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsResponse): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse;

                        /**
                         * Encodes the specified ListMigrationWorkflowsResponse message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse.verify|verify} messages.
                         * @param message ListMigrationWorkflowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationWorkflowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse.verify|verify} messages.
                         * @param message ListMigrationWorkflowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IListMigrationWorkflowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationWorkflowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationWorkflowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse;

                        /**
                         * Decodes a ListMigrationWorkflowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationWorkflowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse;

                        /**
                         * Verifies a ListMigrationWorkflowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationWorkflowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationWorkflowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse;

                        /**
                         * Creates a plain object from a ListMigrationWorkflowsResponse message. Also converts values to other types if specified.
                         * @param message ListMigrationWorkflowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ListMigrationWorkflowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationWorkflowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationWorkflowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteMigrationWorkflowRequest. */
                    interface IDeleteMigrationWorkflowRequest {

                        /** DeleteMigrationWorkflowRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteMigrationWorkflowRequest. */
                    class DeleteMigrationWorkflowRequest implements IDeleteMigrationWorkflowRequest {

                        /**
                         * Constructs a new DeleteMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest);

                        /** DeleteMigrationWorkflowRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest): google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest;

                        /**
                         * Encodes the specified DeleteMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest.verify|verify} messages.
                         * @param message DeleteMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest.verify|verify} messages.
                         * @param message DeleteMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IDeleteMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest;

                        /**
                         * Decodes a DeleteMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest;

                        /**
                         * Verifies a DeleteMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a DeleteMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message DeleteMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.DeleteMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StartMigrationWorkflowRequest. */
                    interface IStartMigrationWorkflowRequest {

                        /** StartMigrationWorkflowRequest name */
                        name?: (string|null);
                    }

                    /** Represents a StartMigrationWorkflowRequest. */
                    class StartMigrationWorkflowRequest implements IStartMigrationWorkflowRequest {

                        /**
                         * Constructs a new StartMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest);

                        /** StartMigrationWorkflowRequest name. */
                        public name: string;

                        /**
                         * Creates a new StartMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StartMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest): google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest;

                        /**
                         * Encodes the specified StartMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest.verify|verify} messages.
                         * @param message StartMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StartMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest.verify|verify} messages.
                         * @param message StartMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IStartMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StartMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StartMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest;

                        /**
                         * Decodes a StartMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StartMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest;

                        /**
                         * Verifies a StartMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StartMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StartMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a StartMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message StartMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.StartMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StartMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StartMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetMigrationSubtaskRequest. */
                    interface IGetMigrationSubtaskRequest {

                        /** GetMigrationSubtaskRequest name */
                        name?: (string|null);

                        /** GetMigrationSubtaskRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents a GetMigrationSubtaskRequest. */
                    class GetMigrationSubtaskRequest implements IGetMigrationSubtaskRequest {

                        /**
                         * Constructs a new GetMigrationSubtaskRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest);

                        /** GetMigrationSubtaskRequest name. */
                        public name: string;

                        /** GetMigrationSubtaskRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new GetMigrationSubtaskRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetMigrationSubtaskRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest): google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest;

                        /**
                         * Encodes the specified GetMigrationSubtaskRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest.verify|verify} messages.
                         * @param message GetMigrationSubtaskRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetMigrationSubtaskRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest.verify|verify} messages.
                         * @param message GetMigrationSubtaskRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IGetMigrationSubtaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetMigrationSubtaskRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetMigrationSubtaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest;

                        /**
                         * Decodes a GetMigrationSubtaskRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetMigrationSubtaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest;

                        /**
                         * Verifies a GetMigrationSubtaskRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetMigrationSubtaskRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetMigrationSubtaskRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest;

                        /**
                         * Creates a plain object from a GetMigrationSubtaskRequest message. Also converts values to other types if specified.
                         * @param message GetMigrationSubtaskRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.GetMigrationSubtaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetMigrationSubtaskRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetMigrationSubtaskRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationSubtasksRequest. */
                    interface IListMigrationSubtasksRequest {

                        /** ListMigrationSubtasksRequest parent */
                        parent?: (string|null);

                        /** ListMigrationSubtasksRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationSubtasksRequest pageSize */
                        pageSize?: (number|null);

                        /** ListMigrationSubtasksRequest pageToken */
                        pageToken?: (string|null);

                        /** ListMigrationSubtasksRequest filter */
                        filter?: (string|null);
                    }

                    /** Represents a ListMigrationSubtasksRequest. */
                    class ListMigrationSubtasksRequest implements IListMigrationSubtasksRequest {

                        /**
                         * Constructs a new ListMigrationSubtasksRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest);

                        /** ListMigrationSubtasksRequest parent. */
                        public parent: string;

                        /** ListMigrationSubtasksRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationSubtasksRequest pageSize. */
                        public pageSize: number;

                        /** ListMigrationSubtasksRequest pageToken. */
                        public pageToken: string;

                        /** ListMigrationSubtasksRequest filter. */
                        public filter: string;

                        /**
                         * Creates a new ListMigrationSubtasksRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationSubtasksRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest): google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest;

                        /**
                         * Encodes the specified ListMigrationSubtasksRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest.verify|verify} messages.
                         * @param message ListMigrationSubtasksRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationSubtasksRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest.verify|verify} messages.
                         * @param message ListMigrationSubtasksRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IListMigrationSubtasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationSubtasksRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationSubtasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest;

                        /**
                         * Decodes a ListMigrationSubtasksRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationSubtasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest;

                        /**
                         * Verifies a ListMigrationSubtasksRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationSubtasksRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationSubtasksRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest;

                        /**
                         * Creates a plain object from a ListMigrationSubtasksRequest message. Also converts values to other types if specified.
                         * @param message ListMigrationSubtasksRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ListMigrationSubtasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationSubtasksRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationSubtasksRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationSubtasksResponse. */
                    interface IListMigrationSubtasksResponse {

                        /** ListMigrationSubtasksResponse migrationSubtasks */
                        migrationSubtasks?: (google.cloud.bigquery.migration.v2.IMigrationSubtask[]|null);

                        /** ListMigrationSubtasksResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListMigrationSubtasksResponse. */
                    class ListMigrationSubtasksResponse implements IListMigrationSubtasksResponse {

                        /**
                         * Constructs a new ListMigrationSubtasksResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2.IListMigrationSubtasksResponse);

                        /** ListMigrationSubtasksResponse migrationSubtasks. */
                        public migrationSubtasks: google.cloud.bigquery.migration.v2.IMigrationSubtask[];

                        /** ListMigrationSubtasksResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListMigrationSubtasksResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationSubtasksResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2.IListMigrationSubtasksResponse): google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse;

                        /**
                         * Encodes the specified ListMigrationSubtasksResponse message. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse.verify|verify} messages.
                         * @param message ListMigrationSubtasksResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2.IListMigrationSubtasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationSubtasksResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse.verify|verify} messages.
                         * @param message ListMigrationSubtasksResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2.IListMigrationSubtasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationSubtasksResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationSubtasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse;

                        /**
                         * Decodes a ListMigrationSubtasksResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationSubtasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse;

                        /**
                         * Verifies a ListMigrationSubtasksResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationSubtasksResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationSubtasksResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse;

                        /**
                         * Creates a plain object from a ListMigrationSubtasksResponse message. Also converts values to other types if specified.
                         * @param message ListMigrationSubtasksResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2.ListMigrationSubtasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationSubtasksResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationSubtasksResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Namespace v2alpha. */
                namespace v2alpha {

                    /** Properties of an AssessmentTaskDetails. */
                    interface IAssessmentTaskDetails {

                        /** AssessmentTaskDetails inputPath */
                        inputPath?: (string|null);

                        /** AssessmentTaskDetails outputDataset */
                        outputDataset?: (string|null);

                        /** AssessmentTaskDetails querylogsPath */
                        querylogsPath?: (string|null);

                        /** AssessmentTaskDetails dataSource */
                        dataSource?: (string|null);
                    }

                    /** Represents an AssessmentTaskDetails. */
                    class AssessmentTaskDetails implements IAssessmentTaskDetails {

                        /**
                         * Constructs a new AssessmentTaskDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails);

                        /** AssessmentTaskDetails inputPath. */
                        public inputPath: string;

                        /** AssessmentTaskDetails outputDataset. */
                        public outputDataset: string;

                        /** AssessmentTaskDetails querylogsPath. */
                        public querylogsPath: string;

                        /** AssessmentTaskDetails dataSource. */
                        public dataSource: string;

                        /**
                         * Creates a new AssessmentTaskDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AssessmentTaskDetails instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails): google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails;

                        /**
                         * Encodes the specified AssessmentTaskDetails message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails.verify|verify} messages.
                         * @param message AssessmentTaskDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AssessmentTaskDetails message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails.verify|verify} messages.
                         * @param message AssessmentTaskDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AssessmentTaskDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AssessmentTaskDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails;

                        /**
                         * Decodes an AssessmentTaskDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AssessmentTaskDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails;

                        /**
                         * Verifies an AssessmentTaskDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AssessmentTaskDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AssessmentTaskDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails;

                        /**
                         * Creates a plain object from an AssessmentTaskDetails message. Also converts values to other types if specified.
                         * @param message AssessmentTaskDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.AssessmentTaskDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AssessmentTaskDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AssessmentTaskDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AssessmentOrchestrationResultDetails. */
                    interface IAssessmentOrchestrationResultDetails {

                        /** AssessmentOrchestrationResultDetails outputTablesSchemaVersion */
                        outputTablesSchemaVersion?: (string|null);
                    }

                    /** Represents an AssessmentOrchestrationResultDetails. */
                    class AssessmentOrchestrationResultDetails implements IAssessmentOrchestrationResultDetails {

                        /**
                         * Constructs a new AssessmentOrchestrationResultDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails);

                        /** AssessmentOrchestrationResultDetails outputTablesSchemaVersion. */
                        public outputTablesSchemaVersion: string;

                        /**
                         * Creates a new AssessmentOrchestrationResultDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AssessmentOrchestrationResultDetails instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails): google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails;

                        /**
                         * Encodes the specified AssessmentOrchestrationResultDetails message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails.verify|verify} messages.
                         * @param message AssessmentOrchestrationResultDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AssessmentOrchestrationResultDetails message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails.verify|verify} messages.
                         * @param message AssessmentOrchestrationResultDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AssessmentOrchestrationResultDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AssessmentOrchestrationResultDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails;

                        /**
                         * Decodes an AssessmentOrchestrationResultDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AssessmentOrchestrationResultDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails;

                        /**
                         * Verifies an AssessmentOrchestrationResultDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AssessmentOrchestrationResultDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AssessmentOrchestrationResultDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails;

                        /**
                         * Creates a plain object from an AssessmentOrchestrationResultDetails message. Also converts values to other types if specified.
                         * @param message AssessmentOrchestrationResultDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.AssessmentOrchestrationResultDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AssessmentOrchestrationResultDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AssessmentOrchestrationResultDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MigrationWorkflow. */
                    interface IMigrationWorkflow {

                        /** MigrationWorkflow name */
                        name?: (string|null);

                        /** MigrationWorkflow displayName */
                        displayName?: (string|null);

                        /** MigrationWorkflow tasks */
                        tasks?: ({ [k: string]: google.cloud.bigquery.migration.v2alpha.IMigrationTask }|null);

                        /** MigrationWorkflow state */
                        state?: (google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.State|null);

                        /** MigrationWorkflow createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationWorkflow lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a MigrationWorkflow. */
                    class MigrationWorkflow implements IMigrationWorkflow {

                        /**
                         * Constructs a new MigrationWorkflow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow);

                        /** MigrationWorkflow name. */
                        public name: string;

                        /** MigrationWorkflow displayName. */
                        public displayName: string;

                        /** MigrationWorkflow tasks. */
                        public tasks: { [k: string]: google.cloud.bigquery.migration.v2alpha.IMigrationTask };

                        /** MigrationWorkflow state. */
                        public state: (google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.State);

                        /** MigrationWorkflow createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationWorkflow lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new MigrationWorkflow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationWorkflow instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow): google.cloud.bigquery.migration.v2alpha.MigrationWorkflow;

                        /**
                         * Encodes the specified MigrationWorkflow message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.verify|verify} messages.
                         * @param message MigrationWorkflow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationWorkflow message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationWorkflow.verify|verify} messages.
                         * @param message MigrationWorkflow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationWorkflow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationWorkflow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.MigrationWorkflow;

                        /**
                         * Decodes a MigrationWorkflow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationWorkflow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.MigrationWorkflow;

                        /**
                         * Verifies a MigrationWorkflow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationWorkflow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationWorkflow
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.MigrationWorkflow;

                        /**
                         * Creates a plain object from a MigrationWorkflow message. Also converts values to other types if specified.
                         * @param message MigrationWorkflow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.MigrationWorkflow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationWorkflow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationWorkflow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationWorkflow {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            DRAFT = 1,
                            RUNNING = 2,
                            PAUSED = 3,
                            COMPLETED = 4
                        }
                    }

                    /** Properties of a MigrationTask. */
                    interface IMigrationTask {

                        /** MigrationTask assessmentTaskDetails */
                        assessmentTaskDetails?: (google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails|null);

                        /** MigrationTask translationTaskDetails */
                        translationTaskDetails?: (google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails|null);

                        /** MigrationTask id */
                        id?: (string|null);

                        /** MigrationTask type */
                        type?: (string|null);

                        /** MigrationTask details */
                        details?: (google.protobuf.IAny|null);

                        /** MigrationTask state */
                        state?: (google.cloud.bigquery.migration.v2alpha.MigrationTask.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationTask.State|null);

                        /** MigrationTask processingError */
                        processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationTask createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask orchestrationResult */
                        orchestrationResult?: (google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult|null);
                    }

                    /** Represents a MigrationTask. */
                    class MigrationTask implements IMigrationTask {

                        /**
                         * Constructs a new MigrationTask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationTask);

                        /** MigrationTask assessmentTaskDetails. */
                        public assessmentTaskDetails?: (google.cloud.bigquery.migration.v2alpha.IAssessmentTaskDetails|null);

                        /** MigrationTask translationTaskDetails. */
                        public translationTaskDetails?: (google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails|null);

                        /** MigrationTask id. */
                        public id: string;

                        /** MigrationTask type. */
                        public type: string;

                        /** MigrationTask details. */
                        public details?: (google.protobuf.IAny|null);

                        /** MigrationTask state. */
                        public state: (google.cloud.bigquery.migration.v2alpha.MigrationTask.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationTask.State);

                        /** MigrationTask processingError. */
                        public processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationTask createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationTask orchestrationResult. */
                        public orchestrationResult?: (google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult|null);

                        /** MigrationTask taskDetails. */
                        public taskDetails?: ("assessmentTaskDetails"|"translationTaskDetails");

                        /**
                         * Creates a new MigrationTask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationTask instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationTask): google.cloud.bigquery.migration.v2alpha.MigrationTask;

                        /**
                         * Encodes the specified MigrationTask message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationTask.verify|verify} messages.
                         * @param message MigrationTask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IMigrationTask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationTask message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationTask.verify|verify} messages.
                         * @param message MigrationTask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IMigrationTask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationTask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationTask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.MigrationTask;

                        /**
                         * Decodes a MigrationTask message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationTask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.MigrationTask;

                        /**
                         * Verifies a MigrationTask message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationTask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationTask
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.MigrationTask;

                        /**
                         * Creates a plain object from a MigrationTask message. Also converts values to other types if specified.
                         * @param message MigrationTask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.MigrationTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationTask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationTask
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationTask {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ORCHESTRATING = 2,
                            RUNNING = 3,
                            PAUSED = 4,
                            SUCCEEDED = 5,
                            FAILED = 6
                        }
                    }

                    /** Properties of a MigrationSubtask. */
                    interface IMigrationSubtask {

                        /** MigrationSubtask name */
                        name?: (string|null);

                        /** MigrationSubtask taskId */
                        taskId?: (string|null);

                        /** MigrationSubtask type */
                        type?: (string|null);

                        /** MigrationSubtask state */
                        state?: (google.cloud.bigquery.migration.v2alpha.MigrationSubtask.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationSubtask.State|null);

                        /** MigrationSubtask processingError */
                        processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationSubtask resourceErrorDetails */
                        resourceErrorDetails?: (google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail[]|null);

                        /** MigrationSubtask resourceErrorCount */
                        resourceErrorCount?: (number|null);

                        /** MigrationSubtask createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask lastUpdateTime */
                        lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask metrics */
                        metrics?: (google.cloud.bigquery.migration.v2alpha.ITimeSeries[]|null);
                    }

                    /** Represents a MigrationSubtask. */
                    class MigrationSubtask implements IMigrationSubtask {

                        /**
                         * Constructs a new MigrationSubtask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationSubtask);

                        /** MigrationSubtask name. */
                        public name: string;

                        /** MigrationSubtask taskId. */
                        public taskId: string;

                        /** MigrationSubtask type. */
                        public type: string;

                        /** MigrationSubtask state. */
                        public state: (google.cloud.bigquery.migration.v2alpha.MigrationSubtask.State|keyof typeof google.cloud.bigquery.migration.v2alpha.MigrationSubtask.State);

                        /** MigrationSubtask processingError. */
                        public processingError?: (google.rpc.IErrorInfo|null);

                        /** MigrationSubtask resourceErrorDetails. */
                        public resourceErrorDetails: google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail[];

                        /** MigrationSubtask resourceErrorCount. */
                        public resourceErrorCount: number;

                        /** MigrationSubtask createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask lastUpdateTime. */
                        public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                        /** MigrationSubtask metrics. */
                        public metrics: google.cloud.bigquery.migration.v2alpha.ITimeSeries[];

                        /**
                         * Creates a new MigrationSubtask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationSubtask instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationSubtask): google.cloud.bigquery.migration.v2alpha.MigrationSubtask;

                        /**
                         * Encodes the specified MigrationSubtask message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationSubtask.verify|verify} messages.
                         * @param message MigrationSubtask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IMigrationSubtask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationSubtask message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationSubtask.verify|verify} messages.
                         * @param message MigrationSubtask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IMigrationSubtask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationSubtask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationSubtask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.MigrationSubtask;

                        /**
                         * Decodes a MigrationSubtask message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationSubtask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.MigrationSubtask;

                        /**
                         * Verifies a MigrationSubtask message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationSubtask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationSubtask
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.MigrationSubtask;

                        /**
                         * Creates a plain object from a MigrationSubtask message. Also converts values to other types if specified.
                         * @param message MigrationSubtask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.MigrationSubtask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationSubtask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationSubtask
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MigrationSubtask {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            ACTIVE = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4,
                            PAUSED = 5
                        }
                    }

                    /** Properties of a MigrationTaskOrchestrationResult. */
                    interface IMigrationTaskOrchestrationResult {

                        /** MigrationTaskOrchestrationResult assessmentDetails */
                        assessmentDetails?: (google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails|null);
                    }

                    /** Represents a MigrationTaskOrchestrationResult. */
                    class MigrationTaskOrchestrationResult implements IMigrationTaskOrchestrationResult {

                        /**
                         * Constructs a new MigrationTaskOrchestrationResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult);

                        /** MigrationTaskOrchestrationResult assessmentDetails. */
                        public assessmentDetails?: (google.cloud.bigquery.migration.v2alpha.IAssessmentOrchestrationResultDetails|null);

                        /** MigrationTaskOrchestrationResult details. */
                        public details?: "assessmentDetails";

                        /**
                         * Creates a new MigrationTaskOrchestrationResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MigrationTaskOrchestrationResult instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult): google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult;

                        /**
                         * Encodes the specified MigrationTaskOrchestrationResult message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult.verify|verify} messages.
                         * @param message MigrationTaskOrchestrationResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MigrationTaskOrchestrationResult message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult.verify|verify} messages.
                         * @param message MigrationTaskOrchestrationResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IMigrationTaskOrchestrationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MigrationTaskOrchestrationResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MigrationTaskOrchestrationResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult;

                        /**
                         * Decodes a MigrationTaskOrchestrationResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MigrationTaskOrchestrationResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult;

                        /**
                         * Verifies a MigrationTaskOrchestrationResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MigrationTaskOrchestrationResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MigrationTaskOrchestrationResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult;

                        /**
                         * Creates a plain object from a MigrationTaskOrchestrationResult message. Also converts values to other types if specified.
                         * @param message MigrationTaskOrchestrationResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.MigrationTaskOrchestrationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MigrationTaskOrchestrationResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MigrationTaskOrchestrationResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResourceErrorDetail. */
                    interface IResourceErrorDetail {

                        /** ResourceErrorDetail resourceInfo */
                        resourceInfo?: (google.rpc.IResourceInfo|null);

                        /** ResourceErrorDetail errorDetails */
                        errorDetails?: (google.cloud.bigquery.migration.v2alpha.IErrorDetail[]|null);

                        /** ResourceErrorDetail errorCount */
                        errorCount?: (number|null);
                    }

                    /** Represents a ResourceErrorDetail. */
                    class ResourceErrorDetail implements IResourceErrorDetail {

                        /**
                         * Constructs a new ResourceErrorDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail);

                        /** ResourceErrorDetail resourceInfo. */
                        public resourceInfo?: (google.rpc.IResourceInfo|null);

                        /** ResourceErrorDetail errorDetails. */
                        public errorDetails: google.cloud.bigquery.migration.v2alpha.IErrorDetail[];

                        /** ResourceErrorDetail errorCount. */
                        public errorCount: number;

                        /**
                         * Creates a new ResourceErrorDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceErrorDetail instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail): google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail;

                        /**
                         * Encodes the specified ResourceErrorDetail message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail.verify|verify} messages.
                         * @param message ResourceErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceErrorDetail message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail.verify|verify} messages.
                         * @param message ResourceErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IResourceErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceErrorDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail;

                        /**
                         * Decodes a ResourceErrorDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail;

                        /**
                         * Verifies a ResourceErrorDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceErrorDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceErrorDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail;

                        /**
                         * Creates a plain object from a ResourceErrorDetail message. Also converts values to other types if specified.
                         * @param message ResourceErrorDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ResourceErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceErrorDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceErrorDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ErrorDetail. */
                    interface IErrorDetail {

                        /** ErrorDetail location */
                        location?: (google.cloud.bigquery.migration.v2alpha.IErrorLocation|null);

                        /** ErrorDetail errorInfo */
                        errorInfo?: (google.rpc.IErrorInfo|null);
                    }

                    /** Represents an ErrorDetail. */
                    class ErrorDetail implements IErrorDetail {

                        /**
                         * Constructs a new ErrorDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IErrorDetail);

                        /** ErrorDetail location. */
                        public location?: (google.cloud.bigquery.migration.v2alpha.IErrorLocation|null);

                        /** ErrorDetail errorInfo. */
                        public errorInfo?: (google.rpc.IErrorInfo|null);

                        /**
                         * Creates a new ErrorDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ErrorDetail instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IErrorDetail): google.cloud.bigquery.migration.v2alpha.ErrorDetail;

                        /**
                         * Encodes the specified ErrorDetail message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ErrorDetail.verify|verify} messages.
                         * @param message ErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ErrorDetail message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ErrorDetail.verify|verify} messages.
                         * @param message ErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ErrorDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ErrorDetail;

                        /**
                         * Decodes an ErrorDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ErrorDetail;

                        /**
                         * Verifies an ErrorDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ErrorDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ErrorDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ErrorDetail;

                        /**
                         * Creates a plain object from an ErrorDetail message. Also converts values to other types if specified.
                         * @param message ErrorDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ErrorDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ErrorDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ErrorLocation. */
                    interface IErrorLocation {

                        /** ErrorLocation line */
                        line?: (number|null);

                        /** ErrorLocation column */
                        column?: (number|null);
                    }

                    /** Represents an ErrorLocation. */
                    class ErrorLocation implements IErrorLocation {

                        /**
                         * Constructs a new ErrorLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IErrorLocation);

                        /** ErrorLocation line. */
                        public line: number;

                        /** ErrorLocation column. */
                        public column: number;

                        /**
                         * Creates a new ErrorLocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ErrorLocation instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IErrorLocation): google.cloud.bigquery.migration.v2alpha.ErrorLocation;

                        /**
                         * Encodes the specified ErrorLocation message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ErrorLocation.verify|verify} messages.
                         * @param message ErrorLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IErrorLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ErrorLocation message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ErrorLocation.verify|verify} messages.
                         * @param message ErrorLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IErrorLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ErrorLocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ErrorLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ErrorLocation;

                        /**
                         * Decodes an ErrorLocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ErrorLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ErrorLocation;

                        /**
                         * Verifies an ErrorLocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ErrorLocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ErrorLocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ErrorLocation;

                        /**
                         * Creates a plain object from an ErrorLocation message. Also converts values to other types if specified.
                         * @param message ErrorLocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ErrorLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ErrorLocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ErrorLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimeSeries. */
                    interface ITimeSeries {

                        /** TimeSeries metric */
                        metric?: (string|null);

                        /** TimeSeries valueType */
                        valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

                        /** TimeSeries metricKind */
                        metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

                        /** TimeSeries points */
                        points?: (google.cloud.bigquery.migration.v2alpha.IPoint[]|null);
                    }

                    /** Represents a TimeSeries. */
                    class TimeSeries implements ITimeSeries {

                        /**
                         * Constructs a new TimeSeries.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITimeSeries);

                        /** TimeSeries metric. */
                        public metric: string;

                        /** TimeSeries valueType. */
                        public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

                        /** TimeSeries metricKind. */
                        public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

                        /** TimeSeries points. */
                        public points: google.cloud.bigquery.migration.v2alpha.IPoint[];

                        /**
                         * Creates a new TimeSeries instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeSeries instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITimeSeries): google.cloud.bigquery.migration.v2alpha.TimeSeries;

                        /**
                         * Encodes the specified TimeSeries message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TimeSeries;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TimeSeries;

                        /**
                         * Verifies a TimeSeries message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeSeries
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TimeSeries;

                        /**
                         * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
                         * @param message TimeSeries
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TimeSeries, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeSeries to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimeSeries
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Point. */
                    interface IPoint {

                        /** Point interval */
                        interval?: (google.cloud.bigquery.migration.v2alpha.ITimeInterval|null);

                        /** Point value */
                        value?: (google.cloud.bigquery.migration.v2alpha.ITypedValue|null);
                    }

                    /** Represents a Point. */
                    class Point implements IPoint {

                        /**
                         * Constructs a new Point.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IPoint);

                        /** Point interval. */
                        public interval?: (google.cloud.bigquery.migration.v2alpha.ITimeInterval|null);

                        /** Point value. */
                        public value?: (google.cloud.bigquery.migration.v2alpha.ITypedValue|null);

                        /**
                         * Creates a new Point instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Point instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IPoint): google.cloud.bigquery.migration.v2alpha.Point;

                        /**
                         * Encodes the specified Point message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Point message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Point message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.Point;

                        /**
                         * Decodes a Point message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.Point;

                        /**
                         * Verifies a Point message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Point message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Point
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.Point;

                        /**
                         * Creates a plain object from a Point message. Also converts values to other types if specified.
                         * @param message Point
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Point to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Point
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TimeInterval. */
                    interface ITimeInterval {

                        /** TimeInterval startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeInterval endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TimeInterval. */
                    class TimeInterval implements ITimeInterval {

                        /**
                         * Constructs a new TimeInterval.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITimeInterval);

                        /** TimeInterval startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeInterval endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new TimeInterval instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeInterval instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITimeInterval): google.cloud.bigquery.migration.v2alpha.TimeInterval;

                        /**
                         * Encodes the specified TimeInterval message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TimeInterval.verify|verify} messages.
                         * @param message TimeInterval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimeInterval message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TimeInterval.verify|verify} messages.
                         * @param message TimeInterval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimeInterval message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeInterval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TimeInterval;

                        /**
                         * Decodes a TimeInterval message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeInterval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TimeInterval;

                        /**
                         * Verifies a TimeInterval message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeInterval message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeInterval
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TimeInterval;

                        /**
                         * Creates a plain object from a TimeInterval message. Also converts values to other types if specified.
                         * @param message TimeInterval
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TimeInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeInterval to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TimeInterval
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TypedValue. */
                    interface ITypedValue {

                        /** TypedValue boolValue */
                        boolValue?: (boolean|null);

                        /** TypedValue int64Value */
                        int64Value?: (number|Long|string|null);

                        /** TypedValue doubleValue */
                        doubleValue?: (number|null);

                        /** TypedValue stringValue */
                        stringValue?: (string|null);

                        /** TypedValue distributionValue */
                        distributionValue?: (google.api.IDistribution|null);
                    }

                    /** Represents a TypedValue. */
                    class TypedValue implements ITypedValue {

                        /**
                         * Constructs a new TypedValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITypedValue);

                        /** TypedValue boolValue. */
                        public boolValue?: (boolean|null);

                        /** TypedValue int64Value. */
                        public int64Value?: (number|Long|string|null);

                        /** TypedValue doubleValue. */
                        public doubleValue?: (number|null);

                        /** TypedValue stringValue. */
                        public stringValue?: (string|null);

                        /** TypedValue distributionValue. */
                        public distributionValue?: (google.api.IDistribution|null);

                        /** TypedValue value. */
                        public value?: ("boolValue"|"int64Value"|"doubleValue"|"stringValue"|"distributionValue");

                        /**
                         * Creates a new TypedValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TypedValue instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITypedValue): google.cloud.bigquery.migration.v2alpha.TypedValue;

                        /**
                         * Encodes the specified TypedValue message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TypedValue.verify|verify} messages.
                         * @param message TypedValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TypedValue message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TypedValue.verify|verify} messages.
                         * @param message TypedValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TypedValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TypedValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TypedValue;

                        /**
                         * Decodes a TypedValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TypedValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TypedValue;

                        /**
                         * Verifies a TypedValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TypedValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TypedValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TypedValue;

                        /**
                         * Creates a plain object from a TypedValue message. Also converts values to other types if specified.
                         * @param message TypedValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TypedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TypedValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TypedValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TranslationFileMapping. */
                    interface ITranslationFileMapping {

                        /** TranslationFileMapping inputPath */
                        inputPath?: (string|null);

                        /** TranslationFileMapping outputPath */
                        outputPath?: (string|null);
                    }

                    /** Represents a TranslationFileMapping. */
                    class TranslationFileMapping implements ITranslationFileMapping {

                        /**
                         * Constructs a new TranslationFileMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping);

                        /** TranslationFileMapping inputPath. */
                        public inputPath: string;

                        /** TranslationFileMapping outputPath. */
                        public outputPath: string;

                        /**
                         * Creates a new TranslationFileMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TranslationFileMapping instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping): google.cloud.bigquery.migration.v2alpha.TranslationFileMapping;

                        /**
                         * Encodes the specified TranslationFileMapping message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslationFileMapping.verify|verify} messages.
                         * @param message TranslationFileMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TranslationFileMapping message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslationFileMapping.verify|verify} messages.
                         * @param message TranslationFileMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TranslationFileMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TranslationFileMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TranslationFileMapping;

                        /**
                         * Decodes a TranslationFileMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TranslationFileMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TranslationFileMapping;

                        /**
                         * Verifies a TranslationFileMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TranslationFileMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TranslationFileMapping
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TranslationFileMapping;

                        /**
                         * Creates a plain object from a TranslationFileMapping message. Also converts values to other types if specified.
                         * @param message TranslationFileMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TranslationFileMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TranslationFileMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TranslationFileMapping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TranslationTaskDetails. */
                    interface ITranslationTaskDetails {

                        /** TranslationTaskDetails teradataOptions */
                        teradataOptions?: (google.cloud.bigquery.migration.v2alpha.ITeradataOptions|null);

                        /** TranslationTaskDetails bteqOptions */
                        bteqOptions?: (google.cloud.bigquery.migration.v2alpha.IBteqOptions|null);

                        /** TranslationTaskDetails inputPath */
                        inputPath?: (string|null);

                        /** TranslationTaskDetails outputPath */
                        outputPath?: (string|null);

                        /** TranslationTaskDetails filePaths */
                        filePaths?: (google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping[]|null);

                        /** TranslationTaskDetails schemaPath */
                        schemaPath?: (string|null);

                        /** TranslationTaskDetails fileEncoding */
                        fileEncoding?: (google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.FileEncoding|keyof typeof google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.FileEncoding|null);

                        /** TranslationTaskDetails identifierSettings */
                        identifierSettings?: (google.cloud.bigquery.migration.v2alpha.IIdentifierSettings|null);

                        /** TranslationTaskDetails specialTokenMap */
                        specialTokenMap?: ({ [k: string]: google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.TokenType }|null);

                        /** TranslationTaskDetails filter */
                        filter?: (google.cloud.bigquery.migration.v2alpha.IFilter|null);

                        /** TranslationTaskDetails translationExceptionTable */
                        translationExceptionTable?: (string|null);
                    }

                    /** Represents a TranslationTaskDetails. */
                    class TranslationTaskDetails implements ITranslationTaskDetails {

                        /**
                         * Constructs a new TranslationTaskDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails);

                        /** TranslationTaskDetails teradataOptions. */
                        public teradataOptions?: (google.cloud.bigquery.migration.v2alpha.ITeradataOptions|null);

                        /** TranslationTaskDetails bteqOptions. */
                        public bteqOptions?: (google.cloud.bigquery.migration.v2alpha.IBteqOptions|null);

                        /** TranslationTaskDetails inputPath. */
                        public inputPath: string;

                        /** TranslationTaskDetails outputPath. */
                        public outputPath: string;

                        /** TranslationTaskDetails filePaths. */
                        public filePaths: google.cloud.bigquery.migration.v2alpha.ITranslationFileMapping[];

                        /** TranslationTaskDetails schemaPath. */
                        public schemaPath: string;

                        /** TranslationTaskDetails fileEncoding. */
                        public fileEncoding: (google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.FileEncoding|keyof typeof google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.FileEncoding);

                        /** TranslationTaskDetails identifierSettings. */
                        public identifierSettings?: (google.cloud.bigquery.migration.v2alpha.IIdentifierSettings|null);

                        /** TranslationTaskDetails specialTokenMap. */
                        public specialTokenMap: { [k: string]: google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.TokenType };

                        /** TranslationTaskDetails filter. */
                        public filter?: (google.cloud.bigquery.migration.v2alpha.IFilter|null);

                        /** TranslationTaskDetails translationExceptionTable. */
                        public translationExceptionTable: string;

                        /** TranslationTaskDetails languageOptions. */
                        public languageOptions?: ("teradataOptions"|"bteqOptions");

                        /**
                         * Creates a new TranslationTaskDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TranslationTaskDetails instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails): google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails;

                        /**
                         * Encodes the specified TranslationTaskDetails message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.verify|verify} messages.
                         * @param message TranslationTaskDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TranslationTaskDetails message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails.verify|verify} messages.
                         * @param message TranslationTaskDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITranslationTaskDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TranslationTaskDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TranslationTaskDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails;

                        /**
                         * Decodes a TranslationTaskDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TranslationTaskDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails;

                        /**
                         * Verifies a TranslationTaskDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TranslationTaskDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TranslationTaskDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails;

                        /**
                         * Creates a plain object from a TranslationTaskDetails message. Also converts values to other types if specified.
                         * @param message TranslationTaskDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TranslationTaskDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TranslationTaskDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TranslationTaskDetails
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TranslationTaskDetails {

                        /** FileEncoding enum. */
                        enum FileEncoding {
                            FILE_ENCODING_UNSPECIFIED = 0,
                            UTF_8 = 1,
                            ISO_8859_1 = 2,
                            US_ASCII = 3,
                            UTF_16 = 4,
                            UTF_16LE = 5,
                            UTF_16BE = 6
                        }

                        /** TokenType enum. */
                        enum TokenType {
                            TOKEN_TYPE_UNSPECIFIED = 0,
                            STRING = 1,
                            INT64 = 2,
                            NUMERIC = 3,
                            BOOL = 4,
                            FLOAT64 = 5,
                            DATE = 6,
                            TIMESTAMP = 7
                        }
                    }

                    /** Properties of a Filter. */
                    interface IFilter {

                        /** Filter inputFileExclusionPrefixes */
                        inputFileExclusionPrefixes?: (string[]|null);
                    }

                    /** Represents a Filter. */
                    class Filter implements IFilter {

                        /**
                         * Constructs a new Filter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IFilter);

                        /** Filter inputFileExclusionPrefixes. */
                        public inputFileExclusionPrefixes: string[];

                        /**
                         * Creates a new Filter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Filter instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IFilter): google.cloud.bigquery.migration.v2alpha.Filter;

                        /**
                         * Encodes the specified Filter message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Filter message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Filter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.Filter;

                        /**
                         * Decodes a Filter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.Filter;

                        /**
                         * Verifies a Filter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Filter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.Filter;

                        /**
                         * Creates a plain object from a Filter message. Also converts values to other types if specified.
                         * @param message Filter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Filter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Filter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IdentifierSettings. */
                    interface IIdentifierSettings {

                        /** IdentifierSettings outputIdentifierCase */
                        outputIdentifierCase?: (google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierCase|keyof typeof google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierCase|null);

                        /** IdentifierSettings identifierRewriteMode */
                        identifierRewriteMode?: (google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierRewriteMode|keyof typeof google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierRewriteMode|null);
                    }

                    /** Represents an IdentifierSettings. */
                    class IdentifierSettings implements IIdentifierSettings {

                        /**
                         * Constructs a new IdentifierSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IIdentifierSettings);

                        /** IdentifierSettings outputIdentifierCase. */
                        public outputIdentifierCase: (google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierCase|keyof typeof google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierCase);

                        /** IdentifierSettings identifierRewriteMode. */
                        public identifierRewriteMode: (google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierRewriteMode|keyof typeof google.cloud.bigquery.migration.v2alpha.IdentifierSettings.IdentifierRewriteMode);

                        /**
                         * Creates a new IdentifierSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IdentifierSettings instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IIdentifierSettings): google.cloud.bigquery.migration.v2alpha.IdentifierSettings;

                        /**
                         * Encodes the specified IdentifierSettings message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.IdentifierSettings.verify|verify} messages.
                         * @param message IdentifierSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IIdentifierSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IdentifierSettings message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.IdentifierSettings.verify|verify} messages.
                         * @param message IdentifierSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IIdentifierSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IdentifierSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IdentifierSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.IdentifierSettings;

                        /**
                         * Decodes an IdentifierSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IdentifierSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.IdentifierSettings;

                        /**
                         * Verifies an IdentifierSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IdentifierSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IdentifierSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.IdentifierSettings;

                        /**
                         * Creates a plain object from an IdentifierSettings message. Also converts values to other types if specified.
                         * @param message IdentifierSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.IdentifierSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IdentifierSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IdentifierSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace IdentifierSettings {

                        /** IdentifierCase enum. */
                        enum IdentifierCase {
                            IDENTIFIER_CASE_UNSPECIFIED = 0,
                            ORIGINAL = 1,
                            UPPER = 2,
                            LOWER = 3
                        }

                        /** IdentifierRewriteMode enum. */
                        enum IdentifierRewriteMode {
                            IDENTIFIER_REWRITE_MODE_UNSPECIFIED = 0,
                            NONE = 1,
                            REWRITE_ALL = 2
                        }
                    }

                    /** Properties of a TeradataOptions. */
                    interface ITeradataOptions {
                    }

                    /** Represents a TeradataOptions. */
                    class TeradataOptions implements ITeradataOptions {

                        /**
                         * Constructs a new TeradataOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITeradataOptions);

                        /**
                         * Creates a new TeradataOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TeradataOptions instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITeradataOptions): google.cloud.bigquery.migration.v2alpha.TeradataOptions;

                        /**
                         * Encodes the specified TeradataOptions message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TeradataOptions.verify|verify} messages.
                         * @param message TeradataOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITeradataOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TeradataOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TeradataOptions.verify|verify} messages.
                         * @param message TeradataOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITeradataOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TeradataOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TeradataOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TeradataOptions;

                        /**
                         * Decodes a TeradataOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TeradataOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TeradataOptions;

                        /**
                         * Verifies a TeradataOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TeradataOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TeradataOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TeradataOptions;

                        /**
                         * Creates a plain object from a TeradataOptions message. Also converts values to other types if specified.
                         * @param message TeradataOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TeradataOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TeradataOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TeradataOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BteqOptions. */
                    interface IBteqOptions {

                        /** BteqOptions projectDataset */
                        projectDataset?: (google.cloud.bigquery.migration.v2alpha.IDatasetReference|null);

                        /** BteqOptions defaultPathUri */
                        defaultPathUri?: (string|null);

                        /** BteqOptions fileReplacementMap */
                        fileReplacementMap?: ({ [k: string]: string }|null);
                    }

                    /** Represents a BteqOptions. */
                    class BteqOptions implements IBteqOptions {

                        /**
                         * Constructs a new BteqOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IBteqOptions);

                        /** BteqOptions projectDataset. */
                        public projectDataset?: (google.cloud.bigquery.migration.v2alpha.IDatasetReference|null);

                        /** BteqOptions defaultPathUri. */
                        public defaultPathUri: string;

                        /** BteqOptions fileReplacementMap. */
                        public fileReplacementMap: { [k: string]: string };

                        /**
                         * Creates a new BteqOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BteqOptions instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IBteqOptions): google.cloud.bigquery.migration.v2alpha.BteqOptions;

                        /**
                         * Encodes the specified BteqOptions message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.BteqOptions.verify|verify} messages.
                         * @param message BteqOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IBteqOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BteqOptions message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.BteqOptions.verify|verify} messages.
                         * @param message BteqOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IBteqOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BteqOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BteqOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.BteqOptions;

                        /**
                         * Decodes a BteqOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BteqOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.BteqOptions;

                        /**
                         * Verifies a BteqOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BteqOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BteqOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.BteqOptions;

                        /**
                         * Creates a plain object from a BteqOptions message. Also converts values to other types if specified.
                         * @param message BteqOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.BteqOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BteqOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BteqOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DatasetReference. */
                    interface IDatasetReference {

                        /** DatasetReference datasetId */
                        datasetId?: (string|null);

                        /** DatasetReference projectId */
                        projectId?: (string|null);
                    }

                    /** Represents a DatasetReference. */
                    class DatasetReference implements IDatasetReference {

                        /**
                         * Constructs a new DatasetReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IDatasetReference);

                        /** DatasetReference datasetId. */
                        public datasetId: string;

                        /** DatasetReference projectId. */
                        public projectId: string;

                        /**
                         * Creates a new DatasetReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DatasetReference instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IDatasetReference): google.cloud.bigquery.migration.v2alpha.DatasetReference;

                        /**
                         * Encodes the specified DatasetReference message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.DatasetReference.verify|verify} messages.
                         * @param message DatasetReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IDatasetReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DatasetReference message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.DatasetReference.verify|verify} messages.
                         * @param message DatasetReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IDatasetReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DatasetReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DatasetReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.DatasetReference;

                        /**
                         * Decodes a DatasetReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DatasetReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.DatasetReference;

                        /**
                         * Verifies a DatasetReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DatasetReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DatasetReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.DatasetReference;

                        /**
                         * Creates a plain object from a DatasetReference message. Also converts values to other types if specified.
                         * @param message DatasetReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.DatasetReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DatasetReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DatasetReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a MigrationService */
                    class MigrationService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new MigrationService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new MigrationService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MigrationService;

                        /**
                         * Calls CreateMigrationWorkflow.
                         * @param request CreateMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationWorkflow
                         */
                        public createMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.CreateMigrationWorkflowCallback): void;

                        /**
                         * Calls CreateMigrationWorkflow.
                         * @param request CreateMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public createMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest): Promise<google.cloud.bigquery.migration.v2alpha.MigrationWorkflow>;

                        /**
                         * Calls GetMigrationWorkflow.
                         * @param request GetMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationWorkflow
                         */
                        public getMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.GetMigrationWorkflowCallback): void;

                        /**
                         * Calls GetMigrationWorkflow.
                         * @param request GetMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public getMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest): Promise<google.cloud.bigquery.migration.v2alpha.MigrationWorkflow>;

                        /**
                         * Calls ListMigrationWorkflows.
                         * @param request ListMigrationWorkflowsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListMigrationWorkflowsResponse
                         */
                        public listMigrationWorkflows(request: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.ListMigrationWorkflowsCallback): void;

                        /**
                         * Calls ListMigrationWorkflows.
                         * @param request ListMigrationWorkflowsRequest message or plain object
                         * @returns Promise
                         */
                        public listMigrationWorkflows(request: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest): Promise<google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse>;

                        /**
                         * Calls DeleteMigrationWorkflow.
                         * @param request DeleteMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.DeleteMigrationWorkflowCallback): void;

                        /**
                         * Calls DeleteMigrationWorkflow.
                         * @param request DeleteMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public deleteMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls StartMigrationWorkflow.
                         * @param request StartMigrationWorkflowRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public startMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.StartMigrationWorkflowCallback): void;

                        /**
                         * Calls StartMigrationWorkflow.
                         * @param request StartMigrationWorkflowRequest message or plain object
                         * @returns Promise
                         */
                        public startMigrationWorkflow(request: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls GetMigrationSubtask.
                         * @param request GetMigrationSubtaskRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and MigrationSubtask
                         */
                        public getMigrationSubtask(request: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.GetMigrationSubtaskCallback): void;

                        /**
                         * Calls GetMigrationSubtask.
                         * @param request GetMigrationSubtaskRequest message or plain object
                         * @returns Promise
                         */
                        public getMigrationSubtask(request: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest): Promise<google.cloud.bigquery.migration.v2alpha.MigrationSubtask>;

                        /**
                         * Calls ListMigrationSubtasks.
                         * @param request ListMigrationSubtasksRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListMigrationSubtasksResponse
                         */
                        public listMigrationSubtasks(request: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest, callback: google.cloud.bigquery.migration.v2alpha.MigrationService.ListMigrationSubtasksCallback): void;

                        /**
                         * Calls ListMigrationSubtasks.
                         * @param request ListMigrationSubtasksRequest message or plain object
                         * @returns Promise
                         */
                        public listMigrationSubtasks(request: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest): Promise<google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse>;
                    }

                    namespace MigrationService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|createMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] MigrationWorkflow
                         */
                        type CreateMigrationWorkflowCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.MigrationWorkflow) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|getMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] MigrationWorkflow
                         */
                        type GetMigrationWorkflowCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.MigrationWorkflow) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|listMigrationWorkflows}.
                         * @param error Error, if any
                         * @param [response] ListMigrationWorkflowsResponse
                         */
                        type ListMigrationWorkflowsCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|deleteMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteMigrationWorkflowCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|startMigrationWorkflow}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type StartMigrationWorkflowCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|getMigrationSubtask}.
                         * @param error Error, if any
                         * @param [response] MigrationSubtask
                         */
                        type GetMigrationSubtaskCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.MigrationSubtask) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.MigrationService|listMigrationSubtasks}.
                         * @param error Error, if any
                         * @param [response] ListMigrationSubtasksResponse
                         */
                        type ListMigrationSubtasksCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse) => void;
                    }

                    /** Properties of a CreateMigrationWorkflowRequest. */
                    interface ICreateMigrationWorkflowRequest {

                        /** CreateMigrationWorkflowRequest parent */
                        parent?: (string|null);

                        /** CreateMigrationWorkflowRequest migrationWorkflow */
                        migrationWorkflow?: (google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow|null);
                    }

                    /** Represents a CreateMigrationWorkflowRequest. */
                    class CreateMigrationWorkflowRequest implements ICreateMigrationWorkflowRequest {

                        /**
                         * Constructs a new CreateMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest);

                        /** CreateMigrationWorkflowRequest parent. */
                        public parent: string;

                        /** CreateMigrationWorkflowRequest migrationWorkflow. */
                        public migrationWorkflow?: (google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow|null);

                        /**
                         * Creates a new CreateMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest): google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest;

                        /**
                         * Encodes the specified CreateMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest.verify|verify} messages.
                         * @param message CreateMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest.verify|verify} messages.
                         * @param message CreateMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ICreateMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest;

                        /**
                         * Decodes a CreateMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest;

                        /**
                         * Verifies a CreateMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a CreateMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message CreateMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.CreateMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetMigrationWorkflowRequest. */
                    interface IGetMigrationWorkflowRequest {

                        /** GetMigrationWorkflowRequest name */
                        name?: (string|null);

                        /** GetMigrationWorkflowRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents a GetMigrationWorkflowRequest. */
                    class GetMigrationWorkflowRequest implements IGetMigrationWorkflowRequest {

                        /**
                         * Constructs a new GetMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest);

                        /** GetMigrationWorkflowRequest name. */
                        public name: string;

                        /** GetMigrationWorkflowRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new GetMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest): google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest;

                        /**
                         * Encodes the specified GetMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest.verify|verify} messages.
                         * @param message GetMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest.verify|verify} messages.
                         * @param message GetMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IGetMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest;

                        /**
                         * Decodes a GetMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest;

                        /**
                         * Verifies a GetMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a GetMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message GetMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.GetMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationWorkflowsRequest. */
                    interface IListMigrationWorkflowsRequest {

                        /** ListMigrationWorkflowsRequest parent */
                        parent?: (string|null);

                        /** ListMigrationWorkflowsRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationWorkflowsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListMigrationWorkflowsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListMigrationWorkflowsRequest. */
                    class ListMigrationWorkflowsRequest implements IListMigrationWorkflowsRequest {

                        /**
                         * Constructs a new ListMigrationWorkflowsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest);

                        /** ListMigrationWorkflowsRequest parent. */
                        public parent: string;

                        /** ListMigrationWorkflowsRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationWorkflowsRequest pageSize. */
                        public pageSize: number;

                        /** ListMigrationWorkflowsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListMigrationWorkflowsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationWorkflowsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest;

                        /**
                         * Encodes the specified ListMigrationWorkflowsRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest.verify|verify} messages.
                         * @param message ListMigrationWorkflowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationWorkflowsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest.verify|verify} messages.
                         * @param message ListMigrationWorkflowsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationWorkflowsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationWorkflowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest;

                        /**
                         * Decodes a ListMigrationWorkflowsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationWorkflowsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest;

                        /**
                         * Verifies a ListMigrationWorkflowsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationWorkflowsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationWorkflowsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest;

                        /**
                         * Creates a plain object from a ListMigrationWorkflowsRequest message. Also converts values to other types if specified.
                         * @param message ListMigrationWorkflowsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationWorkflowsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationWorkflowsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationWorkflowsResponse. */
                    interface IListMigrationWorkflowsResponse {

                        /** ListMigrationWorkflowsResponse migrationWorkflows */
                        migrationWorkflows?: (google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow[]|null);

                        /** ListMigrationWorkflowsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListMigrationWorkflowsResponse. */
                    class ListMigrationWorkflowsResponse implements IListMigrationWorkflowsResponse {

                        /**
                         * Constructs a new ListMigrationWorkflowsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsResponse);

                        /** ListMigrationWorkflowsResponse migrationWorkflows. */
                        public migrationWorkflows: google.cloud.bigquery.migration.v2alpha.IMigrationWorkflow[];

                        /** ListMigrationWorkflowsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListMigrationWorkflowsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationWorkflowsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsResponse): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse;

                        /**
                         * Encodes the specified ListMigrationWorkflowsResponse message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse.verify|verify} messages.
                         * @param message ListMigrationWorkflowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationWorkflowsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse.verify|verify} messages.
                         * @param message ListMigrationWorkflowsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IListMigrationWorkflowsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationWorkflowsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationWorkflowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse;

                        /**
                         * Decodes a ListMigrationWorkflowsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationWorkflowsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse;

                        /**
                         * Verifies a ListMigrationWorkflowsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationWorkflowsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationWorkflowsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse;

                        /**
                         * Creates a plain object from a ListMigrationWorkflowsResponse message. Also converts values to other types if specified.
                         * @param message ListMigrationWorkflowsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ListMigrationWorkflowsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationWorkflowsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationWorkflowsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteMigrationWorkflowRequest. */
                    interface IDeleteMigrationWorkflowRequest {

                        /** DeleteMigrationWorkflowRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteMigrationWorkflowRequest. */
                    class DeleteMigrationWorkflowRequest implements IDeleteMigrationWorkflowRequest {

                        /**
                         * Constructs a new DeleteMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest);

                        /** DeleteMigrationWorkflowRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest): google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest;

                        /**
                         * Encodes the specified DeleteMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest.verify|verify} messages.
                         * @param message DeleteMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest.verify|verify} messages.
                         * @param message DeleteMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IDeleteMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest;

                        /**
                         * Decodes a DeleteMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest;

                        /**
                         * Verifies a DeleteMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a DeleteMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message DeleteMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.DeleteMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StartMigrationWorkflowRequest. */
                    interface IStartMigrationWorkflowRequest {

                        /** StartMigrationWorkflowRequest name */
                        name?: (string|null);
                    }

                    /** Represents a StartMigrationWorkflowRequest. */
                    class StartMigrationWorkflowRequest implements IStartMigrationWorkflowRequest {

                        /**
                         * Constructs a new StartMigrationWorkflowRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest);

                        /** StartMigrationWorkflowRequest name. */
                        public name: string;

                        /**
                         * Creates a new StartMigrationWorkflowRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StartMigrationWorkflowRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest): google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest;

                        /**
                         * Encodes the specified StartMigrationWorkflowRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest.verify|verify} messages.
                         * @param message StartMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StartMigrationWorkflowRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest.verify|verify} messages.
                         * @param message StartMigrationWorkflowRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IStartMigrationWorkflowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StartMigrationWorkflowRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StartMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest;

                        /**
                         * Decodes a StartMigrationWorkflowRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StartMigrationWorkflowRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest;

                        /**
                         * Verifies a StartMigrationWorkflowRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StartMigrationWorkflowRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StartMigrationWorkflowRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest;

                        /**
                         * Creates a plain object from a StartMigrationWorkflowRequest message. Also converts values to other types if specified.
                         * @param message StartMigrationWorkflowRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.StartMigrationWorkflowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StartMigrationWorkflowRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StartMigrationWorkflowRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetMigrationSubtaskRequest. */
                    interface IGetMigrationSubtaskRequest {

                        /** GetMigrationSubtaskRequest name */
                        name?: (string|null);

                        /** GetMigrationSubtaskRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents a GetMigrationSubtaskRequest. */
                    class GetMigrationSubtaskRequest implements IGetMigrationSubtaskRequest {

                        /**
                         * Constructs a new GetMigrationSubtaskRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest);

                        /** GetMigrationSubtaskRequest name. */
                        public name: string;

                        /** GetMigrationSubtaskRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new GetMigrationSubtaskRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetMigrationSubtaskRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest): google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest;

                        /**
                         * Encodes the specified GetMigrationSubtaskRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest.verify|verify} messages.
                         * @param message GetMigrationSubtaskRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetMigrationSubtaskRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest.verify|verify} messages.
                         * @param message GetMigrationSubtaskRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IGetMigrationSubtaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetMigrationSubtaskRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetMigrationSubtaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest;

                        /**
                         * Decodes a GetMigrationSubtaskRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetMigrationSubtaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest;

                        /**
                         * Verifies a GetMigrationSubtaskRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetMigrationSubtaskRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetMigrationSubtaskRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest;

                        /**
                         * Creates a plain object from a GetMigrationSubtaskRequest message. Also converts values to other types if specified.
                         * @param message GetMigrationSubtaskRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.GetMigrationSubtaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetMigrationSubtaskRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetMigrationSubtaskRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationSubtasksRequest. */
                    interface IListMigrationSubtasksRequest {

                        /** ListMigrationSubtasksRequest parent */
                        parent?: (string|null);

                        /** ListMigrationSubtasksRequest readMask */
                        readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationSubtasksRequest pageSize */
                        pageSize?: (number|null);

                        /** ListMigrationSubtasksRequest pageToken */
                        pageToken?: (string|null);

                        /** ListMigrationSubtasksRequest filter */
                        filter?: (string|null);
                    }

                    /** Represents a ListMigrationSubtasksRequest. */
                    class ListMigrationSubtasksRequest implements IListMigrationSubtasksRequest {

                        /**
                         * Constructs a new ListMigrationSubtasksRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest);

                        /** ListMigrationSubtasksRequest parent. */
                        public parent: string;

                        /** ListMigrationSubtasksRequest readMask. */
                        public readMask?: (google.protobuf.IFieldMask|null);

                        /** ListMigrationSubtasksRequest pageSize. */
                        public pageSize: number;

                        /** ListMigrationSubtasksRequest pageToken. */
                        public pageToken: string;

                        /** ListMigrationSubtasksRequest filter. */
                        public filter: string;

                        /**
                         * Creates a new ListMigrationSubtasksRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationSubtasksRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest;

                        /**
                         * Encodes the specified ListMigrationSubtasksRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest.verify|verify} messages.
                         * @param message ListMigrationSubtasksRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationSubtasksRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest.verify|verify} messages.
                         * @param message ListMigrationSubtasksRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationSubtasksRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationSubtasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest;

                        /**
                         * Decodes a ListMigrationSubtasksRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationSubtasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest;

                        /**
                         * Verifies a ListMigrationSubtasksRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationSubtasksRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationSubtasksRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest;

                        /**
                         * Creates a plain object from a ListMigrationSubtasksRequest message. Also converts values to other types if specified.
                         * @param message ListMigrationSubtasksRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationSubtasksRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationSubtasksRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListMigrationSubtasksResponse. */
                    interface IListMigrationSubtasksResponse {

                        /** ListMigrationSubtasksResponse migrationSubtasks */
                        migrationSubtasks?: (google.cloud.bigquery.migration.v2alpha.IMigrationSubtask[]|null);

                        /** ListMigrationSubtasksResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListMigrationSubtasksResponse. */
                    class ListMigrationSubtasksResponse implements IListMigrationSubtasksResponse {

                        /**
                         * Constructs a new ListMigrationSubtasksResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksResponse);

                        /** ListMigrationSubtasksResponse migrationSubtasks. */
                        public migrationSubtasks: google.cloud.bigquery.migration.v2alpha.IMigrationSubtask[];

                        /** ListMigrationSubtasksResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListMigrationSubtasksResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListMigrationSubtasksResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksResponse): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse;

                        /**
                         * Encodes the specified ListMigrationSubtasksResponse message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse.verify|verify} messages.
                         * @param message ListMigrationSubtasksResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListMigrationSubtasksResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse.verify|verify} messages.
                         * @param message ListMigrationSubtasksResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.IListMigrationSubtasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListMigrationSubtasksResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListMigrationSubtasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse;

                        /**
                         * Decodes a ListMigrationSubtasksResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListMigrationSubtasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse;

                        /**
                         * Verifies a ListMigrationSubtasksResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListMigrationSubtasksResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListMigrationSubtasksResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse;

                        /**
                         * Creates a plain object from a ListMigrationSubtasksResponse message. Also converts values to other types if specified.
                         * @param message ListMigrationSubtasksResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.ListMigrationSubtasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListMigrationSubtasksResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListMigrationSubtasksResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a SqlTranslationService */
                    class SqlTranslationService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new SqlTranslationService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new SqlTranslationService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SqlTranslationService;

                        /**
                         * Calls TranslateQuery.
                         * @param request TranslateQueryRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TranslateQueryResponse
                         */
                        public translateQuery(request: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest, callback: google.cloud.bigquery.migration.v2alpha.SqlTranslationService.TranslateQueryCallback): void;

                        /**
                         * Calls TranslateQuery.
                         * @param request TranslateQueryRequest message or plain object
                         * @returns Promise
                         */
                        public translateQuery(request: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest): Promise<google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse>;
                    }

                    namespace SqlTranslationService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationService|translateQuery}.
                         * @param error Error, if any
                         * @param [response] TranslateQueryResponse
                         */
                        type TranslateQueryCallback = (error: (Error|null), response?: google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse) => void;
                    }

                    /** Properties of a TranslateQueryRequest. */
                    interface ITranslateQueryRequest {

                        /** TranslateQueryRequest parent */
                        parent?: (string|null);

                        /** TranslateQueryRequest sourceDialect */
                        sourceDialect?: (google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.SqlTranslationSourceDialect|keyof typeof google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.SqlTranslationSourceDialect|null);

                        /** TranslateQueryRequest query */
                        query?: (string|null);
                    }

                    /** Represents a TranslateQueryRequest. */
                    class TranslateQueryRequest implements ITranslateQueryRequest {

                        /**
                         * Constructs a new TranslateQueryRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest);

                        /** TranslateQueryRequest parent. */
                        public parent: string;

                        /** TranslateQueryRequest sourceDialect. */
                        public sourceDialect: (google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.SqlTranslationSourceDialect|keyof typeof google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.SqlTranslationSourceDialect);

                        /** TranslateQueryRequest query. */
                        public query: string;

                        /**
                         * Creates a new TranslateQueryRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TranslateQueryRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest): google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest;

                        /**
                         * Encodes the specified TranslateQueryRequest message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.verify|verify} messages.
                         * @param message TranslateQueryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TranslateQueryRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest.verify|verify} messages.
                         * @param message TranslateQueryRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITranslateQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TranslateQueryRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TranslateQueryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest;

                        /**
                         * Decodes a TranslateQueryRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TranslateQueryRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest;

                        /**
                         * Verifies a TranslateQueryRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TranslateQueryRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TranslateQueryRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest;

                        /**
                         * Creates a plain object from a TranslateQueryRequest message. Also converts values to other types if specified.
                         * @param message TranslateQueryRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TranslateQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TranslateQueryRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TranslateQueryRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TranslateQueryRequest {

                        /** SqlTranslationSourceDialect enum. */
                        enum SqlTranslationSourceDialect {
                            SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED = 0,
                            TERADATA = 1
                        }
                    }

                    /** Properties of a TranslateQueryResponse. */
                    interface ITranslateQueryResponse {

                        /** TranslateQueryResponse translationJob */
                        translationJob?: (string|null);

                        /** TranslateQueryResponse translatedQuery */
                        translatedQuery?: (string|null);

                        /** TranslateQueryResponse errors */
                        errors?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationError[]|null);

                        /** TranslateQueryResponse warnings */
                        warnings?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning[]|null);
                    }

                    /** Represents a TranslateQueryResponse. */
                    class TranslateQueryResponse implements ITranslateQueryResponse {

                        /**
                         * Constructs a new TranslateQueryResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ITranslateQueryResponse);

                        /** TranslateQueryResponse translationJob. */
                        public translationJob: string;

                        /** TranslateQueryResponse translatedQuery. */
                        public translatedQuery: string;

                        /** TranslateQueryResponse errors. */
                        public errors: google.cloud.bigquery.migration.v2alpha.ISqlTranslationError[];

                        /** TranslateQueryResponse warnings. */
                        public warnings: google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning[];

                        /**
                         * Creates a new TranslateQueryResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TranslateQueryResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ITranslateQueryResponse): google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse;

                        /**
                         * Encodes the specified TranslateQueryResponse message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse.verify|verify} messages.
                         * @param message TranslateQueryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ITranslateQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TranslateQueryResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse.verify|verify} messages.
                         * @param message TranslateQueryResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ITranslateQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TranslateQueryResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TranslateQueryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse;

                        /**
                         * Decodes a TranslateQueryResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TranslateQueryResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse;

                        /**
                         * Verifies a TranslateQueryResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TranslateQueryResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TranslateQueryResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse;

                        /**
                         * Creates a plain object from a TranslateQueryResponse message. Also converts values to other types if specified.
                         * @param message TranslateQueryResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.TranslateQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TranslateQueryResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TranslateQueryResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SqlTranslationErrorDetail. */
                    interface ISqlTranslationErrorDetail {

                        /** SqlTranslationErrorDetail row */
                        row?: (number|Long|string|null);

                        /** SqlTranslationErrorDetail column */
                        column?: (number|Long|string|null);

                        /** SqlTranslationErrorDetail message */
                        message?: (string|null);
                    }

                    /** Represents a SqlTranslationErrorDetail. */
                    class SqlTranslationErrorDetail implements ISqlTranslationErrorDetail {

                        /**
                         * Constructs a new SqlTranslationErrorDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail);

                        /** SqlTranslationErrorDetail row. */
                        public row: (number|Long|string);

                        /** SqlTranslationErrorDetail column. */
                        public column: (number|Long|string);

                        /** SqlTranslationErrorDetail message. */
                        public message: string;

                        /**
                         * Creates a new SqlTranslationErrorDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlTranslationErrorDetail instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail): google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail;

                        /**
                         * Encodes the specified SqlTranslationErrorDetail message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail.verify|verify} messages.
                         * @param message SqlTranslationErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlTranslationErrorDetail message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail.verify|verify} messages.
                         * @param message SqlTranslationErrorDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlTranslationErrorDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlTranslationErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail;

                        /**
                         * Decodes a SqlTranslationErrorDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlTranslationErrorDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail;

                        /**
                         * Verifies a SqlTranslationErrorDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlTranslationErrorDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlTranslationErrorDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail;

                        /**
                         * Creates a plain object from a SqlTranslationErrorDetail message. Also converts values to other types if specified.
                         * @param message SqlTranslationErrorDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.SqlTranslationErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlTranslationErrorDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SqlTranslationErrorDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SqlTranslationError. */
                    interface ISqlTranslationError {

                        /** SqlTranslationError errorType */
                        errorType?: (google.cloud.bigquery.migration.v2alpha.SqlTranslationError.SqlTranslationErrorType|keyof typeof google.cloud.bigquery.migration.v2alpha.SqlTranslationError.SqlTranslationErrorType|null);

                        /** SqlTranslationError errorDetail */
                        errorDetail?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail|null);
                    }

                    /** Represents a SqlTranslationError. */
                    class SqlTranslationError implements ISqlTranslationError {

                        /**
                         * Constructs a new SqlTranslationError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationError);

                        /** SqlTranslationError errorType. */
                        public errorType: (google.cloud.bigquery.migration.v2alpha.SqlTranslationError.SqlTranslationErrorType|keyof typeof google.cloud.bigquery.migration.v2alpha.SqlTranslationError.SqlTranslationErrorType);

                        /** SqlTranslationError errorDetail. */
                        public errorDetail?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail|null);

                        /**
                         * Creates a new SqlTranslationError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlTranslationError instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationError): google.cloud.bigquery.migration.v2alpha.SqlTranslationError;

                        /**
                         * Encodes the specified SqlTranslationError message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationError.verify|verify} messages.
                         * @param message SqlTranslationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlTranslationError message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationError.verify|verify} messages.
                         * @param message SqlTranslationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlTranslationError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlTranslationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.SqlTranslationError;

                        /**
                         * Decodes a SqlTranslationError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlTranslationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.SqlTranslationError;

                        /**
                         * Verifies a SqlTranslationError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlTranslationError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlTranslationError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.SqlTranslationError;

                        /**
                         * Creates a plain object from a SqlTranslationError message. Also converts values to other types if specified.
                         * @param message SqlTranslationError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.SqlTranslationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlTranslationError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SqlTranslationError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SqlTranslationError {

                        /** SqlTranslationErrorType enum. */
                        enum SqlTranslationErrorType {
                            SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED = 0,
                            SQL_PARSE_ERROR = 1,
                            UNSUPPORTED_SQL_FUNCTION = 2
                        }
                    }

                    /** Properties of a SqlTranslationWarning. */
                    interface ISqlTranslationWarning {

                        /** SqlTranslationWarning warningDetail */
                        warningDetail?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail|null);
                    }

                    /** Represents a SqlTranslationWarning. */
                    class SqlTranslationWarning implements ISqlTranslationWarning {

                        /**
                         * Constructs a new SqlTranslationWarning.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning);

                        /** SqlTranslationWarning warningDetail. */
                        public warningDetail?: (google.cloud.bigquery.migration.v2alpha.ISqlTranslationErrorDetail|null);

                        /**
                         * Creates a new SqlTranslationWarning instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SqlTranslationWarning instance
                         */
                        public static create(properties?: google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning): google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning;

                        /**
                         * Encodes the specified SqlTranslationWarning message. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning.verify|verify} messages.
                         * @param message SqlTranslationWarning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SqlTranslationWarning message, length delimited. Does not implicitly {@link google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning.verify|verify} messages.
                         * @param message SqlTranslationWarning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.migration.v2alpha.ISqlTranslationWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SqlTranslationWarning message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SqlTranslationWarning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning;

                        /**
                         * Decodes a SqlTranslationWarning message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SqlTranslationWarning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning;

                        /**
                         * Verifies a SqlTranslationWarning message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SqlTranslationWarning message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SqlTranslationWarning
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning;

                        /**
                         * Creates a plain object from a SqlTranslationWarning message. Also converts values to other types if specified.
                         * @param message SqlTranslationWarning
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.migration.v2alpha.SqlTranslationWarning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SqlTranslationWarning to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SqlTranslationWarning
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

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

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Distribution. */
        interface IDistribution {

            /** Distribution count */
            count?: (number|Long|string|null);

            /** Distribution mean */
            mean?: (number|null);

            /** Distribution sumOfSquaredDeviation */
            sumOfSquaredDeviation?: (number|null);

            /** Distribution range */
            range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions */
            bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts */
            bucketCounts?: ((number|Long|string)[]|null);

            /** Distribution exemplars */
            exemplars?: (google.api.Distribution.IExemplar[]|null);
        }

        /** Represents a Distribution. */
        class Distribution implements IDistribution {

            /**
             * Constructs a new Distribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDistribution);

            /** Distribution count. */
            public count: (number|Long|string);

            /** Distribution mean. */
            public mean: number;

            /** Distribution sumOfSquaredDeviation. */
            public sumOfSquaredDeviation: number;

            /** Distribution range. */
            public range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions. */
            public bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts. */
            public bucketCounts: (number|Long|string)[];

            /** Distribution exemplars. */
            public exemplars: google.api.Distribution.IExemplar[];

            /**
             * Creates a new Distribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Distribution instance
             */
            public static create(properties?: google.api.IDistribution): google.api.Distribution;

            /**
             * Encodes the specified Distribution message. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Distribution message, length delimited. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Distribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution;

            /**
             * Decodes a Distribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution;

            /**
             * Verifies a Distribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Distribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Distribution
             */
            public static fromObject(object: { [k: string]: any }): google.api.Distribution;

            /**
             * Creates a plain object from a Distribution message. Also converts values to other types if specified.
             * @param message Distribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Distribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Distribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Distribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Distribution {

            /** Properties of a Range. */
            interface IRange {

                /** Range min */
                min?: (number|null);

                /** Range max */
                max?: (number|null);
            }

            /** Represents a Range. */
            class Range implements IRange {

                /**
                 * Constructs a new Range.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IRange);

                /** Range min. */
                public min: number;

                /** Range max. */
                public max: number;

                /**
                 * Creates a new Range instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Range instance
                 */
                public static create(properties?: google.api.Distribution.IRange): google.api.Distribution.Range;

                /**
                 * Encodes the specified Range message. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Range message, length delimited. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Range message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Range;

                /**
                 * Decodes a Range message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Range;

                /**
                 * Verifies a Range message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Range message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Range
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Range;

                /**
                 * Creates a plain object from a Range message. Also converts values to other types if specified.
                 * @param message Range
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Range to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Range
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BucketOptions. */
            interface IBucketOptions {

                /** BucketOptions linearBuckets */
                linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets */
                exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets */
                explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);
            }

            /** Represents a BucketOptions. */
            class BucketOptions implements IBucketOptions {

                /**
                 * Constructs a new BucketOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IBucketOptions);

                /** BucketOptions linearBuckets. */
                public linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets. */
                public exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets. */
                public explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);

                /** BucketOptions options. */
                public options?: ("linearBuckets"|"exponentialBuckets"|"explicitBuckets");

                /**
                 * Creates a new BucketOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BucketOptions instance
                 */
                public static create(properties?: google.api.Distribution.IBucketOptions): google.api.Distribution.BucketOptions;

                /**
                 * Encodes the specified BucketOptions message. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BucketOptions message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions;

                /**
                 * Verifies a BucketOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BucketOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BucketOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions;

                /**
                 * Creates a plain object from a BucketOptions message. Also converts values to other types if specified.
                 * @param message BucketOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.BucketOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BucketOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BucketOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BucketOptions {

                /** Properties of a Linear. */
                interface ILinear {

                    /** Linear numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Linear width */
                    width?: (number|null);

                    /** Linear offset */
                    offset?: (number|null);
                }

                /** Represents a Linear. */
                class Linear implements ILinear {

                    /**
                     * Constructs a new Linear.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.ILinear);

                    /** Linear numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Linear width. */
                    public width: number;

                    /** Linear offset. */
                    public offset: number;

                    /**
                     * Creates a new Linear instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Linear instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.ILinear): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Encodes the specified Linear message. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Linear message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Linear message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Decodes a Linear message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Verifies a Linear message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Linear message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Linear
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Creates a plain object from a Linear message. Also converts values to other types if specified.
                     * @param message Linear
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Linear, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Linear to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Linear
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Exponential. */
                interface IExponential {

                    /** Exponential numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Exponential growthFactor */
                    growthFactor?: (number|null);

                    /** Exponential scale */
                    scale?: (number|null);
                }

                /** Represents an Exponential. */
                class Exponential implements IExponential {

                    /**
                     * Constructs a new Exponential.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExponential);

                    /** Exponential numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Exponential growthFactor. */
                    public growthFactor: number;

                    /** Exponential scale. */
                    public scale: number;

                    /**
                     * Creates a new Exponential instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Exponential instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExponential): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Encodes the specified Exponential message. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Exponential message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Verifies an Exponential message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Exponential message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Exponential
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Creates a plain object from an Exponential message. Also converts values to other types if specified.
                     * @param message Exponential
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Exponential, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Exponential to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Exponential
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Explicit. */
                interface IExplicit {

                    /** Explicit bounds */
                    bounds?: (number[]|null);
                }

                /** Represents an Explicit. */
                class Explicit implements IExplicit {

                    /**
                     * Constructs a new Explicit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExplicit);

                    /** Explicit bounds. */
                    public bounds: number[];

                    /**
                     * Creates a new Explicit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Explicit instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExplicit): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Encodes the specified Explicit message. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Explicit message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Verifies an Explicit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Explicit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Explicit
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Creates a plain object from an Explicit message. Also converts values to other types if specified.
                     * @param message Explicit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Explicit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Explicit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Explicit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an Exemplar. */
            interface IExemplar {

                /** Exemplar value */
                value?: (number|null);

                /** Exemplar timestamp */
                timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments */
                attachments?: (google.protobuf.IAny[]|null);
            }

            /** Represents an Exemplar. */
            class Exemplar implements IExemplar {

                /**
                 * Constructs a new Exemplar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IExemplar);

                /** Exemplar value. */
                public value: number;

                /** Exemplar timestamp. */
                public timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments. */
                public attachments: google.protobuf.IAny[];

                /**
                 * Creates a new Exemplar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Exemplar instance
                 */
                public static create(properties?: google.api.Distribution.IExemplar): google.api.Distribution.Exemplar;

                /**
                 * Encodes the specified Exemplar message. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Exemplar message, length delimited. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Exemplar;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Exemplar;

                /**
                 * Verifies an Exemplar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Exemplar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Exemplar
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Exemplar;

                /**
                 * Creates a plain object from an Exemplar message. Also converts values to other types if specified.
                 * @param message Exemplar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Exemplar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Exemplar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Exemplar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a MetricDescriptor. */
        interface IMetricDescriptor {

            /** MetricDescriptor name */
            name?: (string|null);

            /** MetricDescriptor type */
            type?: (string|null);

            /** MetricDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** MetricDescriptor metricKind */
            metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

            /** MetricDescriptor valueType */
            valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

            /** MetricDescriptor unit */
            unit?: (string|null);

            /** MetricDescriptor description */
            description?: (string|null);

            /** MetricDescriptor displayName */
            displayName?: (string|null);

            /** MetricDescriptor metadata */
            metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** MetricDescriptor monitoredResourceTypes */
            monitoredResourceTypes?: (string[]|null);
        }

        /** Represents a MetricDescriptor. */
        class MetricDescriptor implements IMetricDescriptor {

            /**
             * Constructs a new MetricDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetricDescriptor);

            /** MetricDescriptor name. */
            public name: string;

            /** MetricDescriptor type. */
            public type: string;

            /** MetricDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** MetricDescriptor metricKind. */
            public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

            /** MetricDescriptor valueType. */
            public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

            /** MetricDescriptor unit. */
            public unit: string;

            /** MetricDescriptor description. */
            public description: string;

            /** MetricDescriptor displayName. */
            public displayName: string;

            /** MetricDescriptor metadata. */
            public metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** MetricDescriptor monitoredResourceTypes. */
            public monitoredResourceTypes: string[];

            /**
             * Creates a new MetricDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetricDescriptor instance
             */
            public static create(properties?: google.api.IMetricDescriptor): google.api.MetricDescriptor;

            /**
             * Encodes the specified MetricDescriptor message. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetricDescriptor message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor;

            /**
             * Verifies a MetricDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetricDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetricDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor;

            /**
             * Creates a plain object from a MetricDescriptor message. Also converts values to other types if specified.
             * @param message MetricDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MetricDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetricDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MetricDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MetricDescriptor {

            /** MetricKind enum. */
            enum MetricKind {
                METRIC_KIND_UNSPECIFIED = 0,
                GAUGE = 1,
                DELTA = 2,
                CUMULATIVE = 3
            }

            /** ValueType enum. */
            enum ValueType {
                VALUE_TYPE_UNSPECIFIED = 0,
                BOOL = 1,
                INT64 = 2,
                DOUBLE = 3,
                STRING = 4,
                DISTRIBUTION = 5,
                MONEY = 6
            }

            /** Properties of a MetricDescriptorMetadata. */
            interface IMetricDescriptorMetadata {

                /** MetricDescriptorMetadata launchStage */
                launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

                /** MetricDescriptorMetadata samplePeriod */
                samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay */
                ingestDelay?: (google.protobuf.IDuration|null);
            }

            /** Represents a MetricDescriptorMetadata. */
            class MetricDescriptorMetadata implements IMetricDescriptorMetadata {

                /**
                 * Constructs a new MetricDescriptorMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata);

                /** MetricDescriptorMetadata launchStage. */
                public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

                /** MetricDescriptorMetadata samplePeriod. */
                public samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay. */
                public ingestDelay?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new MetricDescriptorMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetricDescriptorMetadata instance
                 */
                public static create(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Encodes the specified MetricDescriptorMetadata message. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetricDescriptorMetadata message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Verifies a MetricDescriptorMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetricDescriptorMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetricDescriptorMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Creates a plain object from a MetricDescriptorMetadata message. Also converts values to other types if specified.
                 * @param message MetricDescriptorMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MetricDescriptor.MetricDescriptorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetricDescriptorMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MetricDescriptorMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a Metric. */
        interface IMetric {

            /** Metric type */
            type?: (string|null);

            /** Metric labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a Metric. */
        class Metric implements IMetric {

            /**
             * Constructs a new Metric.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetric);

            /** Metric type. */
            public type: string;

            /** Metric labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new Metric instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metric instance
             */
            public static create(properties?: google.api.IMetric): google.api.Metric;

            /**
             * Encodes the specified Metric message. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metric message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Metric;

            /**
             * Decodes a Metric message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Metric;

            /**
             * Verifies a Metric message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metric message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metric
             */
            public static fromObject(object: { [k: string]: any }): google.api.Metric;

            /**
             * Creates a plain object from a Metric message. Also converts values to other types if specified.
             * @param message Metric
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metric to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Metric
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LabelDescriptor. */
        interface ILabelDescriptor {

            /** LabelDescriptor key */
            key?: (string|null);

            /** LabelDescriptor valueType */
            valueType?: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType|null);

            /** LabelDescriptor description */
            description?: (string|null);
        }

        /** Represents a LabelDescriptor. */
        class LabelDescriptor implements ILabelDescriptor {

            /**
             * Constructs a new LabelDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ILabelDescriptor);

            /** LabelDescriptor key. */
            public key: string;

            /** LabelDescriptor valueType. */
            public valueType: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType);

            /** LabelDescriptor description. */
            public description: string;

            /**
             * Creates a new LabelDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelDescriptor instance
             */
            public static create(properties?: google.api.ILabelDescriptor): google.api.LabelDescriptor;

            /**
             * Encodes the specified LabelDescriptor message. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelDescriptor message, length delimited. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.LabelDescriptor;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.LabelDescriptor;

            /**
             * Verifies a LabelDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.LabelDescriptor;

            /**
             * Creates a plain object from a LabelDescriptor message. Also converts values to other types if specified.
             * @param message LabelDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.LabelDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LabelDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LabelDescriptor {

            /** ValueType enum. */
            enum ValueType {
                STRING = 0,
                BOOL = 1,
                INT64 = 2
            }
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
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

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
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

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** FileDescriptorProto edition */
            edition?: (string|null);
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

            /** FileDescriptorProto edition. */
            public edition: string;

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

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

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

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions target */
            target?: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
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

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions target. */
            public target: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType);

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

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
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

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

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

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
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

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

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

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
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

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FieldMask
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
